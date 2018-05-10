(function (win){
    var doc = win.document,html = doc.documentElement
    var baseWidth = 750,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function(){
        var clientWidth = html.clientWidth || 375;
        html.style.fontSize = 100 * clientWidth / baseWidth + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window);