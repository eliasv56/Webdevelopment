function wijzigTekst() {
    let pElement = document.getElementById("txtOutput");

    // confirm popup
    let bevestiging = confirm("Wil je de tekst wijzigen?");
    console.log("Return value confirm:", bevestiging);

    if (bevestiging) {
        // prompt popup
        let nieuweTekst = prompt("Voer een nieuwe tekst in:");
        console.log("Return value prompt:", nieuweTekst);

        if (nieuweTekst !== null) {
            pElement.innerHTML = nieuweTekst;
        }
    }
}
