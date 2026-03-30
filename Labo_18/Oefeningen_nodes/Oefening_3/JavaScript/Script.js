const setup = () => {
    let knop = document.querySelector("button");
    knop.addEventListener("click", onderDiv);
}

const onderDiv = () =>{
    const p = document.createElement("p");
    p.textContent = "Ik ben Elias uit 1Tia";
    document.querySelector("#myDIV").appendChild(p);
}

window.addEventListener("load", setup);