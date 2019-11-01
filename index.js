let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


const getArrData4 = (url) => fetch(url)
  .then(response => response.json())
  .then((getArrData4) => {
    let arr = [];
    for(let i = 0; i < getArrData4.length; i++){
        arr.push(getArrData4[i]);
    } 
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[1].length; j++) {
            ctx.beginPath();
            let side = 128;
            let crX = i * side;
            let crY = j * side;
            ctx.rect(crX, crY, side, side);
            ctx.fillStyle = `#${arr[i][j]}`;
            ctx.fill();
        }
    }
})
let bth4 = document.getElementById("bth-4");
bth4.addEventListener('click', () => {
  getArrData4('https://raw.githubusercontent.com/karway211/codejam-canvas/gh-pages/assets/codejam/4x4.json')
});


const getArrData32 = (url) => fetch(url)
  .then(response => response.json())
  .then((getArrData32) => {
    let arr = [];
    for(let i = 0; i < getArrData32.length; i++){
        arr.push(getArrData32[i]);
    } 
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[1].length; j++) {
            ctx.beginPath();
            let side = 16;
            let crX = i * side;
            let crY = j * side;
            ctx.rect(crX, crY, side, side);
            ctx.fillStyle = `rgb(${arr[i][j][0]},${arr[i][j][1]},${arr[i][j][2]})`;
            ctx.fill();
        }
    }
})
let bth32 = document.getElementById("bth-32");
bth32.addEventListener('click', () => {
  getArrData32('https://raw.githubusercontent.com/karway211/codejam-canvas/gh-pages/assets/codejam/32x32.json')
});

const getImage = (image) => {
  let img = new Image();
  img.src = image;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 512, 512);
  }
}
let imgBth = document.getElementById('bth-image');
imgBth.addEventListener('click', () => {
  getImage('./assets/codejam/image.png');
});



 
 