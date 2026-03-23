const setup = () => {
    let sliders = document.getElementById("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    update(); // initiale kleur zetten
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementsByClassName("colorDemo")[0];

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    let kleur = `rgb(${r}, ${g}, ${b})`;
    colorDemo.style.backgroundColor = kleur;

    console.log(kleur);
};

window.addEventListener("load", setup);