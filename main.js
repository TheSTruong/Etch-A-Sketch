let rainbowMode = false;
let colorMode = true;
let eraser = false;
let slider = document.querySelector("#size");
let sliderValue = document.querySelector(".size-value");

slider.addEventListener("input", clearGrid);

function populateGrid(dimension) {
    const board = document.querySelector(".drawingBoard");
    const main = document.querySelector(".main");
    main.addEventListener("mouseup", () => (mouseDown = false));
    let mouseDown = false;
    board.addEventListener("mousedown", e => {
        e.preventDefault();
        mouseDown = true;
    });
    board.addEventListener("mouseup", () => (mouseDown = false));
    for (let row = 0; row < dimension; row++) {
        let div = document.createElement('div');
        div.classList = "row";
        div.style.flex = "1";
        div.style.display = "flex";
        for (let col = 0; col < dimension; col++) {
            let box = document.createElement('div');
            box.style.flex = "1";
            box.addEventListener("mouseover", e => {
                if (e.type === 'mouseover' && !mouseDown) return;
                if (rainbowMode)
                    e.currentTarget.style.backgroundColor = RGBcolor();
                else if (colorMode) {
                    let colorPicker = document.querySelector("input");
                    e.currentTarget.style.backgroundColor = colorPicker.value;
                }
                else if (eraser) {
                    e.currentTarget.style.backgroundColor = "aliceblue";
                }
            });
            box.addEventListener("mousedown", e => {
                if (e.type === 'mouseover' && !mouseDown) return;
                if (rainbowMode)
                    e.currentTarget.style.backgroundColor = RGBcolor();
                else if (colorMode) {
                    let colorPicker = document.querySelector("input");
                    e.currentTarget.style.backgroundColor = colorPicker.value;
                }
                else if (eraser) {
                    e.currentTarget.style.backgroundColor = "aliceblue";
                }
            });
            div.appendChild(box);
        }
        board.appendChild(div);
        console.log(rainbowMode);
    }
}

function RGBcolor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    return randomcolor;
}

function clearGrid() {
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    const board = document.querySelector(".drawingBoard");
    const main = document.querySelector(".main");
    board.remove();
    let newBoard = document.createElement('div');
    newBoard.classList = "drawingBoard";
    main.prepend(newBoard);
    populateGrid(slider.value);
}

function buttonToggle(button) {
    let btns = document.querySelectorAll(".optionButtonTogg");
    btns.forEach(but => {
        if (but !== button) {
            but.style.backgroundColor = "#ededed";
            but.style.color = "#2d2d2d";
        }
        else {
            but.style.backgroundColor = "#2d2d2d";
            but.style.color = "white";
            if (but.id === "colorMode") {
                colorMode = true;
                rainbowMode = false;
                eraser = false;
            }
            else if (but.id === "randomMode") {
                colorMode = false;
                rainbowMode = true;
                eraser = false;
            }
            else {
                colorMode = false;
                rainbowMode = false;
                eraser = true;
            }
        }
    });
}

let btns = document.querySelectorAll(".optionButtonTogg");
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        buttonToggle(e.target);
    });
});

let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", clearGrid);

var color_picker = document.getElementById("color-picker");
var color_picker_wrapper = document.querySelector(".color-picker-wrapper");
color_picker.onchange = function () {
    color_picker_wrapper.style.backgroundColor = color_picker.value;
}

color_picker_wrapper.style.backgroundColor = color_picker.value;

populateGrid(16);
