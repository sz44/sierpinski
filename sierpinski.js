canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext("2d");

// initial points
let l = {x: 0, y:400};
let m = {x: 200, y:0};
let r = {x: 400, y:400};

// draw initial triangle
drawTriangle(l, m, r);

// get mid points for next tri
// let lMid = linearInter2(l, m);
// let bMid = linearInter2(l, r);
// let rMid = linearInter2(r, m);
// draw first sier tri
// drawTriangle(lMid, bMid, rMid, "red");

sierpinski(l,m,r);

function sierpinski(l, m, r, c = getRandomColor()) {
    // get mid points for tri
    let lMid = linearInter2(l, m);
    let bMid = linearInter2(l, r);
    let rMid = linearInter2(r, m);

    drawTriangle(lMid,bMid,rMid,c);

    let nextColor = getRandomColor()

    if (r.x - l.x > 10) {
        // calculate next tris
        let leftTriL = l;
        let leftTriM = lMid;
        let leftTriR = bMid;
        sierpinski(leftTriL, leftTriM, leftTriR, nextColor);
        let midTriL = lMid;
        let midTriM = m;
        let midTriR = rMid;
        sierpinski(midTriL, midTriM, midTriR, nextColor);
        let rightTriL = bMid;
        let rightTriM = rMid;
        let rightTriR = r;
        sierpinski(rightTriL, rightTriM, rightTriR, nextColor);
    }
}

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

function drawTriangle(pl, pm, pr, c = "black") {
    ctx.beginPath();
    ctx.moveTo(pl.x, pl.y);
    ctx.lineTo(pm.x, pm.y);
    ctx.lineTo(pr.x, pr.y);
    ctx.fillStyle = c;
    ctx.fill();
}

function getRandomColor() {
    return `rgb(${Math.random()*255} ${Math.random()*255} ${Math.random()*255})`
}
