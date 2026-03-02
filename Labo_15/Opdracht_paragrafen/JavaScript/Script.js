
const belangrijkeElementen = document.getElementsByClassName("belangrijk");


for (let i = 0; i < belangrijkeElementen.length; i++) {
    // Voeg de class "opvallend" toe via className
    belangrijkeElementen[i].className += " opvallend";
}
