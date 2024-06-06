function populateGrid(dimension) {
    const board = document.querySelector(".drawingBoard");
    const main = document.querySelector(".main");
    main.addEventListener("mouseup", () => (mouseDown = false));
    // Dealing with coloring the board
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
                e.currentTarget.style.backgroundColor = RGBcolor();
            });
            box.addEventListener("mousedown", e => {
                e.currentTarget.style.backgroundColor = RGBcolor();
            });
            div.appendChild(box);
        }
        board.appendChild(div);
    }
}


function RGBcolor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    return randomcolor;
}

// Slider for adjusting grid size
let slider = document.querySelector("#size");
let sliderValue = document.querySelector(".size-value");
slider.addEventListener("input", e => {
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    const board = document.querySelector(".drawingBoard");
    const main = document.querySelector(".main");
    board.remove();
    let newBoard = document.createElement('div');
    newBoard.classList = "drawingBoard";
    main.prepend(newBoard);
    populateGrid(slider.value);

});

let btns = document.querySelectorAll(".optionButton");
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.target
    });
});
populateGrid(16);


