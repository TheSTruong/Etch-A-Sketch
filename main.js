const board = document.querySelector(".drawingBoard");

function RGBcolor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    return randomcolor;
}

for (let row = 0; row < 16; row++) {
    let div = document.createElement('div');
    div.classList = "row";
    div.style.flex = "1";
    div.style.display = "flex";
    for (let col = 0; col < 16; col++) {
        let box = document.createElement('div');
        box.style.flex = "1";

        box.addEventListener("mouseover", e => {
            e.currentTarget.style.backgroundColor = RGBcolor();

        });

        div.appendChild(box);
    }
    board.appendChild(div);
}

