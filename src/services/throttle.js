// utils/throttle.js
function throttle(func, wait) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < wait) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

module.exports = throttle;
