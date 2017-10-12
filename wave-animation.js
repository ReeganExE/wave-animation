/**
 * An implementation of Google Chrome logo effect using pure JS.
 *
 * @author Ninh Pham (#ReeganExE)
 * https://github.com/ReeganExE/wave-animation
 * Email: dongian.rapclubkhtn@gmail.com
 */

; (function (name, definition) {
  if (typeof define === 'function') { // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var theModule = definition(), global = this, old = global[name];
    theModule.noConflict = function () {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})('AnimatedItem', function () {
  function AnimatedItem(el, left, top) {
    if (top === undefined) {
      top = el.clientHeight / 2;
    }

    if (left === undefined) {
      left = el.clientWidth / 3;
    }

    this._interval = setInterval(() => {
      var radius = 0;

      var interval = window.setInterval(function () {
        el.style.webkitMask = `-webkit-gradient(radial, ${left} ${top}, ${radius}, ${left} ${top}, ${radius + 15}, from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))`;
        radius++;
        if (radius === 124) {
          window.clearInterval(interval);
        }
      }, 10);
    }, 1500);
  }

  AnimatedItem.prototype.stop = function () {
    clearInterval(this._interval);
  }

  return AnimatedItem;
});
