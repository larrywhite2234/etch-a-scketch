const grid = document.querySelector(".gridContainer");
const blackBTN = document.querySelector(".blackBtn");
const rainbow = document.querySelector(".rainbow");
const colorBtn = document.querySelector(".colorBtn");
const reset = document.querySelector(".reset");
const colorInput = document.querySelector("#color");

document.getElementById('a-size').onclick = () => createGrid(16,16);
document.getElementById('b-size').onclick = () => createGrid(32,32);
document.getElementById('c-size').onclick = () => createGrid(64,64);

function createGrid(col, rows) {
    clearGrid();
    for (let i=0; i< (col * rows); i++) {
        const div = document.createElement("div");
        grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.appendChild(div).classList.add("box");
    }
    
};

createGrid(16,16);
colorChange();

blackBTN.onclick = () =>{
    const boxes = grid.querySelectorAll(".box")
        boxes.forEach(box => box.addEventListener("mouseover", () =>{
            box.style.background = "black";
        }))

};

rainbow.onclick = () => {
    const boxes = grid.querySelectorAll(".box")
        boxes.forEach(box => box.addEventListener("mouseover", () =>{
        let R = Math.floor(Math.random()* 255)
        let G = Math.floor(Math.random()* 255)
        let B = Math.floor(Math.random()* 255)
        box.style.background = `rgb(${R},${G},${B})`;
    }))

};

reset.onclick = () => {
    const boxes = grid.querySelectorAll(".box")
    boxes.forEach(box => {
        box.style.background = "White";
    })
};

colorBtn.onclick = () => {
    const boxes = grid.querySelectorAll(".box")
    document.getElementById("color").addEventListener("change", (e) => {
        let colorInput = e.target.value;
            boxes.forEach(box => box.addEventListener("mouseover", () => {
                box.style.background = colorInput;
                
            }))
        })
};

function clearGrid(){
    grid.innerHTML = ''
};

function colorChange(){
colorBtn.addEventListener("click", () => {
    const boxes = grid.querySelectorAll(".box")
    document.getElementById("color").addEventListener("change", (e) => {
        let colorInput = e.target.value;
            boxes.forEach(box => box.addEventListener("mouseover", () => {
                box.style.background = colorInput;
                
            }))
        })
    })
};

