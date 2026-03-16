const isGetal = (tekst) => {
    return !isNaN(tekst);
};

document.getElementById("valideer").addEventListener("click", function () {
    let allesOK = true;

    // helper: reset alle fouten
    const velden = ["voornaam", "familienaam", "geboorte", "email", "kinderen"];
    velden.forEach(id => {
        document.getElementById(id).classList.remove("error");
        document.getElementById("err-" + id).textContent = "";
    });

    // voornaam: max 30, mag leeg zijn
    const voornaam = document.getElementById("voornaam");
    if (voornaam.value.length > 30) {
        fout(voornaam, "max. 30 karakters");
    }

    // familienaam: verplicht, max 50
    const familienaam = document.getElementById("familienaam");
    if (familienaam.value.trim() === "") {
        fout(familienaam, "verplicht veld");
    } else if (familienaam.value.length > 50) {
        fout(familienaam, "max 50 karakters");
    }

    // geboortedatum: verplicht, formaat jjjj-mm-dd (alleen formaat)
    const geboorte = document.getElementById("geboorte");
    const g = geboorte.value.trim();
    if (g === "") {
        fout(geboorte, "verplicht veld");
    } else {
        const delen = g.split("-");
        if (delen.length !== 3 ||
            delen[0].length !== 4 || !isGetal(delen[0]) ||
            delen[1].length !== 2 || !isGetal(delen[1]) ||
            delen[2].length !== 2 || !isGetal(delen[2])) {
            fout(geboorte, "formaat is niet jjjj-mm-dd");
        }
    }

    // email: verplicht, exact 1 @, min 1 teken voor en na @
    const email = document.getElementById("email");
    const e = email.value.trim();
    if (e === "") {
        fout(email, "verplicht veld");
    } else {
        const atCount = (e.match(/@/g) || []).length;
        const atPos = e.indexOf("@");
        if (atCount !== 1 || atPos <= 0 || atPos === e.length - 1) {
            fout(email, "geen geldig email adres");
        }
    }

    // aantal kinderen: positief getal, niet negatief, < 99
    const kinderen = document.getElementById("kinderen");
    const k = kinderen.value.trim();
    if (!isGetal(k)) {
        fout(kinderen, "is geen positief getal");
    } else {
        const n = Number(k);
        if (n < 0) {
            fout(kinderen, "is geen positief getal");
        } else if (n >= 99) {
            fout(kinderen, "is te vruchtbaar");
        }
    }

    function fout(input, boodschap) {
        allesOK = false;
        input.classList.add("error");
        document.getElementById("err-" + input.id).textContent = boodschap;
    }

    if (allesOK) {
        alert("Proficiat!");
    }
});
