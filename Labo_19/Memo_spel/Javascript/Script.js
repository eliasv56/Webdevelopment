let global = {
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png",

    eersteKaart: null,
    tweedeKaart: null,
    isBusy: false
};

// shuffle
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

// kaartenlijst maken
const maakKaarten = () => {
    let lijst = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        let img = global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX;
        lijst.push(img, img); // dubbel
    }
    return shuffle(lijst);
};

// kaart div maken
const maakKaart = (imgSrc) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.img = imgSrc;

    card.addEventListener("click", () => klikKaart(card));

    return card;
};

// klik op kaart
const klikKaart = (card) => {
    if (global.isBusy) return;
    if (card === global.eersteKaart) return;
    if (card.classList.contains("found")) return;

    // toon afbeelding als achtergrond
    card.style.backgroundImage = `url(${card.dataset.img})`;
    card.classList.add("revealed");

    if (!global.eersteKaart) {
        global.eersteKaart = card;
        return;
    }

    global.tweedeKaart = card;
    controleer();
};

// check match
const controleer = () => {
    global.isBusy = true;
    let match = global.eersteKaart.dataset.img === global.tweedeKaart.dataset.img;

    if (match) {
        global.eersteKaart.classList.add("correct", "found");
        global.tweedeKaart.classList.add("correct", "found");

        setTimeout(() => {
            global.eersteKaart.style.visibility = "hidden";
            global.tweedeKaart.style.visibility = "hidden";
            reset();
            checkEinde();
        }, 500);
    } else {
        global.eersteKaart.classList.add("wrong");
        global.tweedeKaart.classList.add("wrong");

        setTimeout(() => {
            // terug zwart maken
            global.eersteKaart.style.backgroundImage = "";
            global.tweedeKaart.style.backgroundImage = "";

            global.eersteKaart.classList.remove("revealed", "wrong");
            global.tweedeKaart.classList.remove("revealed", "wrong");

            reset();
        }, 800);
    }
};

// reset beurt
const reset = () => {
    global.eersteKaart = null;
    global.tweedeKaart = null;
    global.isBusy = false;
};

// einde check
const checkEinde = () => {
    let over = document.querySelectorAll(".card:not(.found)");
    if (over.length === 0) {
        setTimeout(() => alert("Gewonnen!"), 200);
    }
};

// setup
const setup = () => {
    const board = document.getElementById("gameBoard");
    let kaarten = maakKaarten();
    kaarten.forEach(img => board.appendChild(maakKaart(img)));
};

window.addEventListener("load", setup);