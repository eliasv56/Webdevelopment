const setup = () =>{
    document.querySelectorAll("li").forEach(e =>{
        e.classList = "ListItem";
        e.style.color = "red";
    });
    const body = document.querySelector("body");
    const img = document.createElement("img");
    img.setAttribute("src", "Images/eend.jpg" );
    body.appendChild(img);

}

window.addEventListener("load", setup);