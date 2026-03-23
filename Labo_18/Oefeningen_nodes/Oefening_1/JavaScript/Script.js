const setup = () => {
    let tekst = document.querySelectorAll("p");
    tekst.forEach(tekst => {
        tekst.textContent = "Goed gedaan!";
    })
}

window.addEventListener("load",setup)