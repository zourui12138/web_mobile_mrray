let dpr, rem, scale;
let docEl = document.documentElement;
let metaEl = document.querySelector('meta[name="viewport"]');
dpr = window.devicePixelRatio || 1;
scale = 1 / dpr;
rem = docEl.clientWidth * dpr / 10;
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute('content',
    'width=' + dpr * docEl.clientWidth + ',' +
    'initial-scale=' + scale +
    ',maximum-scale=' + scale +
    ',minimum-scale=' + scale +
    ',user-scalable=no');
// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);
// 动态写入样式
docEl.setAttribute('style','font-size:'+ rem +'px');
// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = (v) => parseFloat(v) * rem;
window.px2rem = (v) => parseFloat(v) / rem;

window.dpr = dpr;
window.rem = rem;