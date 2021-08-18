//     “这个太子肯定是被姬浅晴一脚踹死了，也算是死得其所，不对，这家伙这么可恶，一脚踹死他明显便宜了他。”
/*
 * @Author: tanhong
 * @Date: 2021-08-12 13:31:35
 * @LastEditTime: 2021-08-17 18:03:59
 * @LastEditors: tanhong
 * @FilePath: \blog\project\JavaScript\js02.js
 */
(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function setupCanvas(canvas) {
  var dpr = window.devicePixelRatio || 1;
  var rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  return ctx;
}

// 现在我们只需要根据 UI 设计图绘制需要的内容
// 由于使用了 setupCanvas，绘制的内容在各种高清屏中表现清晰、一致
var ctx = setupCanvas(document.querySelector('.my-canvas'));
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();

function setupCanvas(canvas) {
  const UI_WIDTH = 375;
  const DOC_WIDTH = document.documentElement.clientWidth;
  const DPR = window.devicePixelRatio || 1;
  let scale = ((DPR * DOC_WIDTH) / UI_WIDTH).toFIxed(2);
  //let rect = canvas.getBoundingClientRect()

  canvas.width = canvas.width * scale;
  canvas.height = canvas.height * scale;

  let ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);

  return ctx;
}
