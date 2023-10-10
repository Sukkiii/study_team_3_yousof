const canvas = document.querySelector('.canvas');
const drawLine = canvas.getContext('2d');
//https:developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

drawLine.strokeStyle = "#000000";
drawLine.lineWidth = 2.5;

let drawing = false;

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
  drawing = true;
  const x = e.offsetX;
  const y = e.offsetY;
  drawLine.beginPath();
  drawLine.moveTo(x, y);
}
function onMouseup(e) {
  drawing = false;
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener("mouseup", onMouseup);
// canvas.addEventListener('mouseleave', stopDrawing);

// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mousemove", onMouseMove);
// canvas.addEventListener("mouseup", onMouseUp);
