document.getElementById("toon").addEventListener("click", function () {
    const roker = document.getElementById("roker").checked;
    console.log(roker ? "is roker" : "is geen roker");

    const taalRadio = document.querySelector("input[name='taal']:checked");
    const moedertaal = taalRadio ? taalRadio.value : "geen keuze";
    console.log("moedertaal is " + moedertaal);

    const buurland = document.getElementById("buurland").value;
    console.log("favoriete buurland is " + buurland);

    const bestellingSelect = document.getElementById("bestelling");
    const gekozen = [];
    for (let option of bestellingSelect.options) {
        if (option.selected) {
            gekozen.push(option.value);
        }
    }
    console.log("bestelling bestaat uit " + gekozen.join(" "));
});
