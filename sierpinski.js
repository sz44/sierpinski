canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext("2d");

// initial points
let pl = {x: 0, y:400};
let pm = {x: 200, y:0};
let pr = {x: 400, y:400};

// draw initial triangle
drawTriangle(pl, pm, pr);

// get mid points for next tri
let pMidl = linearInter2(pl, pm, 0.2);
let pMidt = linearInter2(pl, pr, 0.2);
let pMidr = linearInter2(pr, pm, 0.8);

drawPoint(pMidl.x, pMidl.y);
drawPoint(pMidt.x, pMidt.y);
drawPoint(pMidr.x, pMidr.y);

// draw first sier tri


function linearInter(x0, x1, pos = 0.5) {
    length = Math.abs(x0-x1); 
    pos = length * pos;
    if (x0 > x1) {
        return x0 - pos;
    } else {
        return x0 + pos;
    }
}

function linearInter2(p0, p1, p=0.5) {
    let px = linearInter(p0.x, p1.x, p);
    let py = linearInter(p0.y, p1.y, p);
    return {x:px, y:py};
}

function drawPoint(x, y, r = 20, c = "red") {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = c; 
    ctx.fill();
}

function drawTriangle(pl, pm, pr) {
    ctx.beginPath();
    ctx.moveTo(pl.x, pl.y);
    ctx.lineTo(pm.x, pm.y);
    ctx.lineTo(pr.x, pr.y);
    ctx.fillStyle = "black";
    ctx.fill();
}
