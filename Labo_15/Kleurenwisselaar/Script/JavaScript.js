const knoppen = document.querySelectorAll(".knop");

knoppen.forEach(knop => {
    knop.addEventListener("click", () => {
        knop.classList.toggle("blauw");
    });
});