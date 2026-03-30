const setup = () => {
    let tekst = document.querySelectorAll("p");
    let knop = document.querySelector("#veranderen")
    knop.addEventListener("click",  () => {
        tekst.forEach(tekst => {
            tekst.textContent = "Goed gedaan!";
        });
    });
}


window.addEventListener("load",setup)