export function throttle(fn, threshold = 250, scope) {
  let last, deferTimer;
  return function (...args) {
    const context = scope || this;

    const now = +new Date();

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, ...args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, ...args);
    }
  };
}
