const setup = () => {
    document.querySelector("button").addEventListener("click",onderDiv);
}

const onderDiv = () =>{
    const p = document.createElement("p");
    p.textContent = "Ik ben Elias uit 1Tia";
    document.querySelector("#myDIV").appendChild(p);
}

window.addEventListener("click", setup);