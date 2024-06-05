const board = document.querySelector(".drawingBoard");

for (let row = 0; row < 16; row++) {
    let div = document.createElement('div');
    div.classList = "row";
    div.style.flex = "1";
    div.style.display = "flex";
    for (let col = 0; col < 16; col++) {
        let box = document.createElement('div');
        box.style.flex = "1";

        box.addEventListener("mouseover", e => {
            e.currentTarget.style.backgroundColor = "red";

        });

        div.appendChild(box);
    }
    board.appendChild(div);
}

