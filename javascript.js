let squares = 16;

let container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

createBoard(squares);

function createBoard(len) {
    for (let i = 0; i < len; i++){
        let row = document.createElement("div");
        for (let j = 0; j < len; j++){
            let sq = document.createElement("div");
            let dimension = String(650/len - 2);
            sq.style.width = dimension + "px";
            sq.style.height = dimension + "px";
            sq.style.border = "1px solid black";
            row.appendChild(sq);
        }
        container.appendChild(row);
    }
}