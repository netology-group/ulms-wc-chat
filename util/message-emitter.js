export const emitter = predicate => {
  const self = function LoadEmitter() {};

  self.start = function startEmitting() {
    function emit(fn, timeout) {
      // eslint-disable-next-line no-param-reassign
      timeout = timeout || 200;
      // eslint-disable-next-line vars-on-top, no-var
      var timerId = window.setTimeout(() => {
        fn();
        // console.log({ timerId, timeout })
        window.clearInterval(timerId);

        if (self.__stop) return;
        emit(fn, timeout);
      }, timeout);
    }

    // eslint-disable-next-line prefer-arrow-callback
    emit(function Fn() {
      predicate();
    });
  };

  self.stop = function stopEmitting() {
    self.__stop = true;
  };

  return self;
};
