'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let shape: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
[120, 100], [85, 130], [50, 100]];

function createShape(array: number[][]) {
    ctx.strokeStyle = '#C2EA7E';
    ctx.beginPath();
    ctx.moveTo(array[0][0], array[0][1])
    for (let i = 1; i < array.length; i++) {
        ctx.lineTo(array[i][0], array[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
}

createShape(box)
createShape(shape)