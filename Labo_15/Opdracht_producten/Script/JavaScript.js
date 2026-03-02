document.getElementById("herbereken").addEventListener("click", herbereken);

function herbereken() {
    const prijzen = document.getElementsByClassName("prijs");
    const aantallen = document.getElementsByClassName("aantal");
    const btws = document.getElementsByClassName("btw");
    const subtotals = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].innerText);
        let aantal = parseInt(aantallen[i].value);
        let btw = parseFloat(btws[i].innerText) / 100;

        let subtotaal = prijs * aantal * (1 + btw);
        subtotals[i].innerText = subtotaal.toFixed(2) + " Eur";

        totaal += subtotaal;
    }

    document.getElementById("totaal").innerText = totaal.toFixed(2) + " Eur";
}