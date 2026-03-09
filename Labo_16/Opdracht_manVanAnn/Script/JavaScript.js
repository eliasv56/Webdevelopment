
let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoek = "an";

function telMetIndexOf() {
    let teller = 0;
    let pos = tekst.indexOf(zoek);

    while (pos !== -1) {
        teller++;
        pos = tekst.indexOf(zoek, pos + 1);
    }

    document.getElementById("resultaat").innerHTML =
        "Aantal keer 'an' met indexOf: " + teller;
}

function telMetLastIndexOf() {
    let teller = 0;
    let pos = tekst.lastIndexOf(zoek);

    while (pos !== -1) {
        teller++;
        pos = tekst.lastIndexOf(zoek, pos - 1);
    }

    document.getElementById("resultaat").innerHTML =
        "Aantal keer 'an' met lastIndexOf: " + teller;
}
