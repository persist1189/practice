// 這一行去抓取 canvas 的標籤
let canvas = document.getElementById('myCanvas');
// 指定繪圖的方式
let ctx = canvas.getContext('2d');
// 讓 canvas 的高度和寬度等於整個畫面，讓整個視窗都是畫布
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//畫出上半部的球
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = '#FF0000';
ctx.arc(100, 100, 50, Math.PI, Math.PI*2)
ctx.fill();
ctx.stroke();

// 畫出下半部的球
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = '#FFFFFF';
ctx.arc(100, 100, 50, 0, Math.PI);
ctx.fill();
ctx.stroke();

// 畫出上半部線加上圓圈
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = 'FFFFFF';
// 畫線起始點
ctx.moveTo(50, 100);
// 畫上半部圓
ctx.arc(100, 100, 10, Math.PI, Math.PI*2);
// 畫線結束的位置
ctx.lineTo(150, 100);
ctx.fill();
ctx.stroke();

// 畫出下半部的圓圈
ctx.beginPath();
ctx.arc(100, 100, 10, 0, Math.PI);
ctx.stroke();

// 畫出中間的圓圈
ctx.beginPath();
ctx.arc(100, 100, 5, 0, Math.PI*2);
ctx.stroke();
