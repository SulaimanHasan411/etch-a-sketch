let squares = 16;

let container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

createBoard(squares);

const btn = document.querySelector(".bttn");
btn.style.display = "flex";
btn.style.justifyContent = "center";
btn.style.alignItems = "center";
btn.style.margin = "20px";

const gridButton = document.querySelector(".grid_button");

gridButton.addEventListener("click", function() {
    newLen = parseInt(prompt("Enter new grid size 1-100"));
    if (!newLen || newLen < 0 || newLen > 100){
        alert("Not a valid number, needs to be between 1-100");
        newLen = 16;
    }
    createBoard(newLen);
})

function createBoard(len) {
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < len; i++){
        let row = document.createElement("div");
        for (let j = 0; j < len; j++){
            let sq = document.createElement("div");
            let dimension = String(650/len - 2);
            sq.style.width = dimension + "px";
            sq.style.height = dimension + "px";
            sq.style.border = "1px solid black";
            row.appendChild(sq);

            sq.addEventListener("mouseenter", function() {
                sq.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," 
                + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
            })
        }
        container.appendChild(row);
    }
}