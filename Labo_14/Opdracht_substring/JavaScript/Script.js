const setup = () => {
    let btn = document.getElementById("btnSubstring");
    btn.addEventListener("click", toonSubstring);
};

const toonSubstring = () => {
    let tekst = document.getElementById("txtTekst").value;
    let start = parseInt(document.getElementById("txtStart").value);
    let einde = parseInt(document.getElementById("txtEinde").value);

    let resultaat = tekst.substring(start, einde);

    let output = document.getElementById("txtOutput");
    output.textContent = resultaat;
};

window.addEventListener("load", setup);