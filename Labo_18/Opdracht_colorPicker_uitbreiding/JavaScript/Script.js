let currentColor = "rgb(128, 128, 128)";

const sliders = {
    red: document.getElementById("red-slider"),
    green: document.getElementById("green-slider"),
    blue: document.getElementById("blue-slider")
};

const values = {
    red: document.getElementById("red-value"),
    green: document.getElementById("green-value"),
    blue: document.getElementById("blue-value")
};

const colorBox = document.getElementById("color-box");
const swatchBox = document.getElementById("swatch-box");
const saveButton = document.getElementById("save-button");

const getRGB = () => {
    return [
        sliders.red.value,
        sliders.green.value,
        sliders.blue.value
    ];
};

const updateUI = () => {
    const [r, g, b] = getRGB();

    values.red.textContent = r;
    values.green.textContent = g;
    values.blue.textContent = b;

    currentColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = currentColor;
};

const setFromColor = (color) => {
    const match = color.match(/\d+/g);
    if (!match) return;

    const [r, g, b] = match;

    sliders.red.value = r;
    sliders.green.value = g;
    sliders.blue.value = b;

    updateUI();
};

const createSwatch = (color) => {
    const box = document.createElement("div");
    box.className = "swatch-item";
    box.style.backgroundColor = color;

    box.addEventListener("click", () => {
        setFromColor(color);
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-button";
    removeBtn.textContent = "✖";

    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        box.remove();
    });

    box.appendChild(removeBtn);
    swatchBox.appendChild(box);
};

const setup = () => {
    Object.values(sliders).forEach(slider => {
        slider.addEventListener("input", updateUI);
    });

    saveButton.addEventListener("click", () => {
        createSwatch(currentColor);
    });

    updateUI();
};

window.addEventListener("load", setup);