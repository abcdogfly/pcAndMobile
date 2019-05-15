import store from '../store'

(function (doc, win, undefined) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      if(clientWidth < 1000) {
          store.state.scene = true
          docEl.style.fontSize = 20 * (clientWidth / 750) + 'px';//当前的尺寸是30rem 就相当于一屏幕的宽度
      } else {
          store.state.scene = false
      }
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);
