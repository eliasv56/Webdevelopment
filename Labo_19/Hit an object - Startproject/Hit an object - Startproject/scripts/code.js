let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0
};

const moveTarget = () => {
    const target = document.getElementById("target");
    const playField = document.getElementById("playField");

    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
};

const changeImage = () => {
    const target = document.getElementById("target");
    const index = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
};

const startGameLoop = () => {
    global.timeoutId = setInterval(() => {
        changeImage();
        moveTarget();
    }, global.MOVE_DELAY);
};

const setup = () => {
    const playField = document.getElementById("playField");
    const btnStart = document.getElementById("btnStart");
    const scoreDisplay = document.getElementById("score");

    const img = document.createElement("img");
    img.id = "target";
    img.src = global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX;

    img.addEventListener("click", () => {
        global.score++;
        scoreDisplay.textContent = global.score;

        changeImage();
        moveTarget();
    });

    playField.appendChild(img);

    btnStart.addEventListener("click", () => {
        clearInterval(global.timeoutId);
        global.score = 0;
        scoreDisplay.textContent = 0;

        startGameLoop();
    });

    moveTarget();
};

window.addEventListener("load", setup);