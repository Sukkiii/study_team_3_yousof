const canvas = document.querySelector('.canvas');
const drawLine = canvas.getContext('2d');
//https:developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
const colors = document.getElementsByClassName('pick-color');
const thickness = document.getElementById('brush-thick');
const paintingBtn = document.querySelector(".painting");
const brushingBtn = document.querySelector(".just-brush");

const deleteAllBtn = document.querySelector('.delete-all');

drawLine.strokeStyle = "#000000";
drawLine.lineWidth = 1;

let drawing = false;
let painting = false;

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  if (drawing) {
    drawLine.lineTo(x, y);
    drawLine.stroke();
  }
  // console.log(x, y)
}
function onMouseDown(e) {
  if(painting) {
    canvas.style.backgroundColor = drawLine.strokeStyle;
  } else {
    drawing = true;
    const x = e.offsetX;
    const y = e.offsetY;
    drawLine.beginPath();
    drawLine.moveTo(x, y);
  }
}
function onMouseup(e) {
  drawing = false;
}

function changeColor(e) {
  const color = e.target.style.backgroundColor;
  drawLine.strokeStyle = color;
}

function changeThickness(e) {
  const thick = e.target.value;
  console.log(thick); //왜 undefined가 찍힐까....
  drawLine.lineWidth = thick;
}

function toggleBtn() {
  painting = !painting
}

function justBrushing() {
  painting = false;
}

function deleteAll() {
  drawLine.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = 'white';
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener("mouseup", onMouseup);
paintingBtn.addEventListener("click", toggleBtn);
brushingBtn.addEventListener("click", justBrushing);

Array.from(colors).forEach(color => {
  color.addEventListener('click', changeColor)
});

thickness.addEventListener('change', changeThickness);

deleteAllBtn.addEventListener('click', deleteAll);
