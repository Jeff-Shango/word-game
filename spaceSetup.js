let c = document.getElementById('spaceCanvas-ship');
let ctx = c.getContext("2d");
ctx.arc(160, 65, 40, 0, 2 * Math.PI);
ctx.strokeStyle = 'blue';
ctx.stroke();

let a = document.getElementById('spaceCanvas-blasterA');
let abc = a.getContext("2d");
abc.beginPath();
abc.rect(160, 100, 15, 10);
abc.strokeStyle = 'blue'
abc.stroke();

// this was great work today, great work on finishing out the first game's innards and moving onto the next. 
// also good job with stepping out of your comfort zone with using the canvas element