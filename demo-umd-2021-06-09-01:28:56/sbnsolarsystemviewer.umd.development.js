(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('julian'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'three', 'julian', 'react'], factory) :
  (global = global || self, factory(global.SbnSolarSystemViewer = {}, global.THREE, global.julian, global.React));
}(this, (function (exports, THREE, julian, React) { 'use strict';

  julian = julian && Object.prototype.hasOwnProperty.call(julian, 'default') ? julian['default'] : julian;
  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  /**
   * This module is the SSOT for global "initial" settings for the app
   * that get set before the threejs scene begins
   */
  var options = {
    isAsyncLoad: true
  };
  var getOptions = function getOptions() {
    return options;
  };
  var setOptions = function setOptions(newOptions) {
    return options = _extends({}, options, newOptions);
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  // This set of controls performs orbiting, dollying (zooming), and panning.
  // Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
  //
  //    Orbit - left mouse / touch: one-finger move
  //    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
  //    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

  const _changeEvent = { type: 'change' };
  const _startEvent = { type: 'start' };
  const _endEvent = { type: 'end' };

  class OrbitControls extends THREE.EventDispatcher {

  	constructor( object, domElement ) {

  		super();

  		if ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter "domElement" is now mandatory.' );
  		if ( domElement === document ) console.error( 'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.' );

  		this.object = object;
  		this.domElement = domElement;

  		// Set to false to disable this control
  		this.enabled = true;

  		// "target" sets the location of focus, where the object orbits around
  		this.target = new THREE.Vector3();

  		// How far you can dolly in and out ( PerspectiveCamera only )
  		this.minDistance = 0;
  		this.maxDistance = Infinity;

  		// How far you can zoom in and out ( OrthographicCamera only )
  		this.minZoom = 0;
  		this.maxZoom = Infinity;

  		// How far you can orbit vertically, upper and lower limits.
  		// Range is 0 to Math.PI radians.
  		this.minPolarAngle = 0; // radians
  		this.maxPolarAngle = Math.PI; // radians

  		// How far you can orbit horizontally, upper and lower limits.
  		// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
  		this.minAzimuthAngle = - Infinity; // radians
  		this.maxAzimuthAngle = Infinity; // radians

  		// Set to true to enable damping (inertia)
  		// If damping is enabled, you must call controls.update() in your animation loop
  		this.enableDamping = false;
  		this.dampingFactor = 0.05;

  		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  		// Set to false to disable zooming
  		this.enableZoom = true;
  		this.zoomSpeed = 1.0;

  		// Set to false to disable rotating
  		this.enableRotate = true;
  		this.rotateSpeed = 1.0;

  		// Set to false to disable panning
  		this.enablePan = true;
  		this.panSpeed = 1.0;
  		this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
  		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

  		// Set to true to automatically rotate around the target
  		// If auto-rotate is enabled, you must call controls.update() in your animation loop
  		this.autoRotate = false;
  		this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

  		// The four arrow keys
  		this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

  		// Mouse buttons
  		this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };

  		// Touch fingers
  		this.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

  		// for reset
  		this.target0 = this.target.clone();
  		this.position0 = this.object.position.clone();
  		this.zoom0 = this.object.zoom;

  		// the target DOM element for key events
  		this._domElementKeyEvents = null;

  		//
  		// public methods
  		//

  		this.getPolarAngle = function () {

  			return spherical.phi;

  		};

  		this.getAzimuthalAngle = function () {

  			return spherical.theta;

  		};

  		this.listenToKeyEvents = function ( domElement ) {

  			domElement.addEventListener( 'keydown', onKeyDown );
  			this._domElementKeyEvents = domElement;

  		};

  		this.saveState = function () {

  			scope.target0.copy( scope.target );
  			scope.position0.copy( scope.object.position );
  			scope.zoom0 = scope.object.zoom;

  		};

  		this.reset = function () {

  			scope.target.copy( scope.target0 );
  			scope.object.position.copy( scope.position0 );
  			scope.object.zoom = scope.zoom0;

  			scope.object.updateProjectionMatrix();
  			scope.dispatchEvent( _changeEvent );

  			scope.update();

  			state = STATE.NONE;

  		};

  		// this method is exposed, but perhaps it would be better if we can make it private...
  		this.update = function () {

  			const offset = new THREE.Vector3();

  			// so camera.up is the orbit axis
  			const quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
  			const quatInverse = quat.clone().invert();

  			const lastPosition = new THREE.Vector3();
  			const lastQuaternion = new THREE.Quaternion();

  			const twoPI = 2 * Math.PI;

  			return function update() {

  				const position = scope.object.position;

  				offset.copy( position ).sub( scope.target );

  				// rotate offset to "y-axis-is-up" space
  				offset.applyQuaternion( quat );

  				// angle from z-axis around y-axis
  				spherical.setFromVector3( offset );

  				if ( scope.autoRotate && state === STATE.NONE ) {

  					rotateLeft( getAutoRotationAngle() );

  				}

  				if ( scope.enableDamping ) {

  					spherical.theta += sphericalDelta.theta * scope.dampingFactor;
  					spherical.phi += sphericalDelta.phi * scope.dampingFactor;

  				} else {

  					spherical.theta += sphericalDelta.theta;
  					spherical.phi += sphericalDelta.phi;

  				}

  				// restrict theta to be between desired limits

  				let min = scope.minAzimuthAngle;
  				let max = scope.maxAzimuthAngle;

  				if ( isFinite( min ) && isFinite( max ) ) {

  					if ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;

  					if ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;

  					if ( min <= max ) {

  						spherical.theta = Math.max( min, Math.min( max, spherical.theta ) );

  					} else {

  						spherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?
  							Math.max( min, spherical.theta ) :
  							Math.min( max, spherical.theta );

  					}

  				}

  				// restrict phi to be between desired limits
  				spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

  				spherical.makeSafe();


  				spherical.radius *= scale;

  				// restrict radius to be between desired limits
  				spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

  				// move target to panned location

  				if ( scope.enableDamping === true ) {

  					scope.target.addScaledVector( panOffset, scope.dampingFactor );

  				} else {

  					scope.target.add( panOffset );

  				}

  				offset.setFromSpherical( spherical );

  				// rotate offset back to "camera-up-vector-is-up" space
  				offset.applyQuaternion( quatInverse );

  				position.copy( scope.target ).add( offset );

  				scope.object.lookAt( scope.target );

  				if ( scope.enableDamping === true ) {

  					sphericalDelta.theta *= ( 1 - scope.dampingFactor );
  					sphericalDelta.phi *= ( 1 - scope.dampingFactor );

  					panOffset.multiplyScalar( 1 - scope.dampingFactor );

  				} else {

  					sphericalDelta.set( 0, 0, 0 );

  					panOffset.set( 0, 0, 0 );

  				}

  				scale = 1;

  				// update condition is:
  				// min(camera displacement, camera rotation in radians)^2 > EPS
  				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

  				if ( zoomChanged ||
  					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
  					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

  					scope.dispatchEvent( _changeEvent );

  					lastPosition.copy( scope.object.position );
  					lastQuaternion.copy( scope.object.quaternion );
  					zoomChanged = false;

  					return true;

  				}

  				return false;

  			};

  		}();

  		this.dispose = function () {

  			scope.domElement.removeEventListener( 'contextmenu', onContextMenu );

  			scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
  			scope.domElement.removeEventListener( 'wheel', onMouseWheel );

  			scope.domElement.removeEventListener( 'touchstart', onTouchStart );
  			scope.domElement.removeEventListener( 'touchend', onTouchEnd );
  			scope.domElement.removeEventListener( 'touchmove', onTouchMove );

  			scope.domElement.ownerDocument.removeEventListener( 'pointermove', onPointerMove );
  			scope.domElement.ownerDocument.removeEventListener( 'pointerup', onPointerUp );


  			if ( scope._domElementKeyEvents !== null ) {

  				scope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );

  			}

  			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

  		};

  		//
  		// internals
  		//

  		const scope = this;

  		const STATE = {
  			NONE: - 1,
  			ROTATE: 0,
  			DOLLY: 1,
  			PAN: 2,
  			TOUCH_ROTATE: 3,
  			TOUCH_PAN: 4,
  			TOUCH_DOLLY_PAN: 5,
  			TOUCH_DOLLY_ROTATE: 6
  		};

  		let state = STATE.NONE;

  		const EPS = 0.000001;

  		// current position in spherical coordinates
  		const spherical = new THREE.Spherical();
  		const sphericalDelta = new THREE.Spherical();

  		let scale = 1;
  		const panOffset = new THREE.Vector3();
  		let zoomChanged = false;

  		const rotateStart = new THREE.Vector2();
  		const rotateEnd = new THREE.Vector2();
  		const rotateDelta = new THREE.Vector2();

  		const panStart = new THREE.Vector2();
  		const panEnd = new THREE.Vector2();
  		const panDelta = new THREE.Vector2();

  		const dollyStart = new THREE.Vector2();
  		const dollyEnd = new THREE.Vector2();
  		const dollyDelta = new THREE.Vector2();

  		function getAutoRotationAngle() {

  			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

  		}

  		function getZoomScale() {

  			return Math.pow( 0.95, scope.zoomSpeed );

  		}

  		function rotateLeft( angle ) {

  			sphericalDelta.theta -= angle;

  		}

  		function rotateUp( angle ) {

  			sphericalDelta.phi -= angle;

  		}

  		const panLeft = function () {

  			const v = new THREE.Vector3();

  			return function panLeft( distance, objectMatrix ) {

  				v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
  				v.multiplyScalar( - distance );

  				panOffset.add( v );

  			};

  		}();

  		const panUp = function () {

  			const v = new THREE.Vector3();

  			return function panUp( distance, objectMatrix ) {

  				if ( scope.screenSpacePanning === true ) {

  					v.setFromMatrixColumn( objectMatrix, 1 );

  				} else {

  					v.setFromMatrixColumn( objectMatrix, 0 );
  					v.crossVectors( scope.object.up, v );

  				}

  				v.multiplyScalar( distance );

  				panOffset.add( v );

  			};

  		}();

  		// deltaX and deltaY are in pixels; right and down are positive
  		const pan = function () {

  			const offset = new THREE.Vector3();

  			return function pan( deltaX, deltaY ) {

  				const element = scope.domElement;

  				if ( scope.object.isPerspectiveCamera ) {

  					// perspective
  					const position = scope.object.position;
  					offset.copy( position ).sub( scope.target );
  					let targetDistance = offset.length();

  					// half of the fov is center to top of screen
  					targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

  					// we use only clientHeight here so aspect ratio does not distort speed
  					panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
  					panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

  				} else if ( scope.object.isOrthographicCamera ) {

  					// orthographic
  					panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
  					panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

  				} else {

  					// camera neither orthographic nor perspective
  					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
  					scope.enablePan = false;

  				}

  			};

  		}();

  		function dollyOut( dollyScale ) {

  			if ( scope.object.isPerspectiveCamera ) {

  				scale /= dollyScale;

  			} else if ( scope.object.isOrthographicCamera ) {

  				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
  				scope.object.updateProjectionMatrix();
  				zoomChanged = true;

  			} else {

  				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
  				scope.enableZoom = false;

  			}

  		}

  		function dollyIn( dollyScale ) {

  			if ( scope.object.isPerspectiveCamera ) {

  				scale *= dollyScale;

  			} else if ( scope.object.isOrthographicCamera ) {

  				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
  				scope.object.updateProjectionMatrix();
  				zoomChanged = true;

  			} else {

  				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
  				scope.enableZoom = false;

  			}

  		}

  		//
  		// event callbacks - update the object state
  		//

  		function handleMouseDownRotate( event ) {

  			rotateStart.set( event.clientX, event.clientY );

  		}

  		function handleMouseDownDolly( event ) {

  			dollyStart.set( event.clientX, event.clientY );

  		}

  		function handleMouseDownPan( event ) {

  			panStart.set( event.clientX, event.clientY );

  		}

  		function handleMouseMoveRotate( event ) {

  			rotateEnd.set( event.clientX, event.clientY );

  			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

  			const element = scope.domElement;

  			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

  			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

  			rotateStart.copy( rotateEnd );

  			scope.update();

  		}

  		function handleMouseMoveDolly( event ) {

  			dollyEnd.set( event.clientX, event.clientY );

  			dollyDelta.subVectors( dollyEnd, dollyStart );

  			if ( dollyDelta.y > 0 ) {

  				dollyOut( getZoomScale() );

  			} else if ( dollyDelta.y < 0 ) {

  				dollyIn( getZoomScale() );

  			}

  			dollyStart.copy( dollyEnd );

  			scope.update();

  		}

  		function handleMouseMovePan( event ) {

  			panEnd.set( event.clientX, event.clientY );

  			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

  			pan( panDelta.x, panDelta.y );

  			panStart.copy( panEnd );

  			scope.update();

  		}

  		function handleMouseWheel( event ) {

  			if ( event.deltaY < 0 ) {

  				dollyIn( getZoomScale() );

  			} else if ( event.deltaY > 0 ) {

  				dollyOut( getZoomScale() );

  			}

  			scope.update();

  		}

  		function handleKeyDown( event ) {

  			let needsUpdate = false;

  			switch ( event.code ) {

  				case scope.keys.UP:
  					pan( 0, scope.keyPanSpeed );
  					needsUpdate = true;
  					break;

  				case scope.keys.BOTTOM:
  					pan( 0, - scope.keyPanSpeed );
  					needsUpdate = true;
  					break;

  				case scope.keys.LEFT:
  					pan( scope.keyPanSpeed, 0 );
  					needsUpdate = true;
  					break;

  				case scope.keys.RIGHT:
  					pan( - scope.keyPanSpeed, 0 );
  					needsUpdate = true;
  					break;

  			}

  			if ( needsUpdate ) {

  				// prevent the browser from scrolling on cursor keys
  				event.preventDefault();

  				scope.update();

  			}


  		}

  		function handleTouchStartRotate( event ) {

  			if ( event.touches.length == 1 ) {

  				rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

  			} else {

  				const x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
  				const y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

  				rotateStart.set( x, y );

  			}

  		}

  		function handleTouchStartPan( event ) {

  			if ( event.touches.length == 1 ) {

  				panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

  			} else {

  				const x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
  				const y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

  				panStart.set( x, y );

  			}

  		}

  		function handleTouchStartDolly( event ) {

  			const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
  			const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

  			const distance = Math.sqrt( dx * dx + dy * dy );

  			dollyStart.set( 0, distance );

  		}

  		function handleTouchStartDollyPan( event ) {

  			if ( scope.enableZoom ) handleTouchStartDolly( event );

  			if ( scope.enablePan ) handleTouchStartPan( event );

  		}

  		function handleTouchStartDollyRotate( event ) {

  			if ( scope.enableZoom ) handleTouchStartDolly( event );

  			if ( scope.enableRotate ) handleTouchStartRotate( event );

  		}

  		function handleTouchMoveRotate( event ) {

  			if ( event.touches.length == 1 ) {

  				rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

  			} else {

  				const x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
  				const y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

  				rotateEnd.set( x, y );

  			}

  			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

  			const element = scope.domElement;

  			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

  			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

  			rotateStart.copy( rotateEnd );

  		}

  		function handleTouchMovePan( event ) {

  			if ( event.touches.length == 1 ) {

  				panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

  			} else {

  				const x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
  				const y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

  				panEnd.set( x, y );

  			}

  			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

  			pan( panDelta.x, panDelta.y );

  			panStart.copy( panEnd );

  		}

  		function handleTouchMoveDolly( event ) {

  			const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
  			const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

  			const distance = Math.sqrt( dx * dx + dy * dy );

  			dollyEnd.set( 0, distance );

  			dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

  			dollyOut( dollyDelta.y );

  			dollyStart.copy( dollyEnd );

  		}

  		function handleTouchMoveDollyPan( event ) {

  			if ( scope.enableZoom ) handleTouchMoveDolly( event );

  			if ( scope.enablePan ) handleTouchMovePan( event );

  		}

  		function handleTouchMoveDollyRotate( event ) {

  			if ( scope.enableZoom ) handleTouchMoveDolly( event );

  			if ( scope.enableRotate ) handleTouchMoveRotate( event );

  		}

  		//
  		// event handlers - FSM: listen for events and reset state
  		//

  		function onPointerDown( event ) {

  			if ( scope.enabled === false ) return;

  			switch ( event.pointerType ) {

  				case 'mouse':
  				case 'pen':
  					onMouseDown( event );
  					break;

  				// TODO touch

  			}

  		}

  		function onPointerMove( event ) {

  			if ( scope.enabled === false ) return;

  			switch ( event.pointerType ) {

  				case 'mouse':
  				case 'pen':
  					onMouseMove( event );
  					break;

  				// TODO touch

  			}

  		}

  		function onPointerUp( event ) {

  			switch ( event.pointerType ) {

  				case 'mouse':
  				case 'pen':
  					onMouseUp();
  					break;

  				// TODO touch

  			}

  		}

  		function onMouseDown( event ) {

  			// Prevent the browser from scrolling.
  			event.preventDefault();

  			// Manually set the focus since calling preventDefault above
  			// prevents the browser from setting it automatically.

  			scope.domElement.focus ? scope.domElement.focus() : window.focus();

  			let mouseAction;

  			switch ( event.button ) {

  				case 0:

  					mouseAction = scope.mouseButtons.LEFT;
  					break;

  				case 1:

  					mouseAction = scope.mouseButtons.MIDDLE;
  					break;

  				case 2:

  					mouseAction = scope.mouseButtons.RIGHT;
  					break;

  				default:

  					mouseAction = - 1;

  			}

  			switch ( mouseAction ) {

  				case THREE.MOUSE.DOLLY:

  					if ( scope.enableZoom === false ) return;

  					handleMouseDownDolly( event );

  					state = STATE.DOLLY;

  					break;

  				case THREE.MOUSE.ROTATE:

  					if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

  						if ( scope.enablePan === false ) return;

  						handleMouseDownPan( event );

  						state = STATE.PAN;

  					} else {

  						if ( scope.enableRotate === false ) return;

  						handleMouseDownRotate( event );

  						state = STATE.ROTATE;

  					}

  					break;

  				case THREE.MOUSE.PAN:

  					if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

  						if ( scope.enableRotate === false ) return;

  						handleMouseDownRotate( event );

  						state = STATE.ROTATE;

  					} else {

  						if ( scope.enablePan === false ) return;

  						handleMouseDownPan( event );

  						state = STATE.PAN;

  					}

  					break;

  				default:

  					state = STATE.NONE;

  			}

  			if ( state !== STATE.NONE ) {

  				scope.domElement.ownerDocument.addEventListener( 'pointermove', onPointerMove );
  				scope.domElement.ownerDocument.addEventListener( 'pointerup', onPointerUp );

  				scope.dispatchEvent( _startEvent );

  			}

  		}

  		function onMouseMove( event ) {

  			if ( scope.enabled === false ) return;

  			event.preventDefault();

  			switch ( state ) {

  				case STATE.ROTATE:

  					if ( scope.enableRotate === false ) return;

  					handleMouseMoveRotate( event );

  					break;

  				case STATE.DOLLY:

  					if ( scope.enableZoom === false ) return;

  					handleMouseMoveDolly( event );

  					break;

  				case STATE.PAN:

  					if ( scope.enablePan === false ) return;

  					handleMouseMovePan( event );

  					break;

  			}

  		}

  		function onMouseUp( event ) {

  			scope.domElement.ownerDocument.removeEventListener( 'pointermove', onPointerMove );
  			scope.domElement.ownerDocument.removeEventListener( 'pointerup', onPointerUp );

  			if ( scope.enabled === false ) return;

  			scope.dispatchEvent( _endEvent );

  			state = STATE.NONE;

  		}

  		function onMouseWheel( event ) {

  			if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

  			event.preventDefault();

  			scope.dispatchEvent( _startEvent );

  			handleMouseWheel( event );

  			scope.dispatchEvent( _endEvent );

  		}

  		function onKeyDown( event ) {

  			if ( scope.enabled === false || scope.enablePan === false ) return;

  			handleKeyDown( event );

  		}

  		function onTouchStart( event ) {

  			if ( scope.enabled === false ) return;

  			event.preventDefault(); // prevent scrolling

  			switch ( event.touches.length ) {

  				case 1:

  					switch ( scope.touches.ONE ) {

  						case THREE.TOUCH.ROTATE:

  							if ( scope.enableRotate === false ) return;

  							handleTouchStartRotate( event );

  							state = STATE.TOUCH_ROTATE;

  							break;

  						case THREE.TOUCH.PAN:

  							if ( scope.enablePan === false ) return;

  							handleTouchStartPan( event );

  							state = STATE.TOUCH_PAN;

  							break;

  						default:

  							state = STATE.NONE;

  					}

  					break;

  				case 2:

  					switch ( scope.touches.TWO ) {

  						case THREE.TOUCH.DOLLY_PAN:

  							if ( scope.enableZoom === false && scope.enablePan === false ) return;

  							handleTouchStartDollyPan( event );

  							state = STATE.TOUCH_DOLLY_PAN;

  							break;

  						case THREE.TOUCH.DOLLY_ROTATE:

  							if ( scope.enableZoom === false && scope.enableRotate === false ) return;

  							handleTouchStartDollyRotate( event );

  							state = STATE.TOUCH_DOLLY_ROTATE;

  							break;

  						default:

  							state = STATE.NONE;

  					}

  					break;

  				default:

  					state = STATE.NONE;

  			}

  			if ( state !== STATE.NONE ) {

  				scope.dispatchEvent( _startEvent );

  			}

  		}

  		function onTouchMove( event ) {

  			if ( scope.enabled === false ) return;

  			event.preventDefault(); // prevent scrolling

  			switch ( state ) {

  				case STATE.TOUCH_ROTATE:

  					if ( scope.enableRotate === false ) return;

  					handleTouchMoveRotate( event );

  					scope.update();

  					break;

  				case STATE.TOUCH_PAN:

  					if ( scope.enablePan === false ) return;

  					handleTouchMovePan( event );

  					scope.update();

  					break;

  				case STATE.TOUCH_DOLLY_PAN:

  					if ( scope.enableZoom === false && scope.enablePan === false ) return;

  					handleTouchMoveDollyPan( event );

  					scope.update();

  					break;

  				case STATE.TOUCH_DOLLY_ROTATE:

  					if ( scope.enableZoom === false && scope.enableRotate === false ) return;

  					handleTouchMoveDollyRotate( event );

  					scope.update();

  					break;

  				default:

  					state = STATE.NONE;

  			}

  		}

  		function onTouchEnd( event ) {

  			if ( scope.enabled === false ) return;

  			scope.dispatchEvent( _endEvent );

  			state = STATE.NONE;

  		}

  		function onContextMenu( event ) {

  			if ( scope.enabled === false ) return;

  			event.preventDefault();

  		}

  		//

  		scope.domElement.addEventListener( 'contextmenu', onContextMenu );

  		scope.domElement.addEventListener( 'pointerdown', onPointerDown );
  		scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );

  		scope.domElement.addEventListener( 'touchstart', onTouchStart, { passive: false } );
  		scope.domElement.addEventListener( 'touchend', onTouchEnd );
  		scope.domElement.addEventListener( 'touchmove', onTouchMove, { passive: false } );

  		// force an update at start

  		this.update();

  	}

  }

  /**
   * A simple ascii-art wrapper for error messaging in order to convey
   * just how tragic your errors are
   */
  function asciiError(msg) {
    // console.clear();
    return "\n\n   ______________________________    . \\  | / .\n  /                            / \\     \\ \\ / /\n |                            | ==========  - -\n  \\____________________________\\_/     / / \\ \\\n  ______________________________      \\  | / | \\\n /                            / \\     \\ \\ / /.   .\n|                            | ==========  - -\n \\____________________________\\_/     / / \\ \\    /\n   ______________________________   / |\\  | /  .\n  /                            / \\     \\ \\ / /\n |                            | ==========  -  - -\n  \\____________________________\\_/     / / \\ \\\n                                     .  / | \\  .\n\n  Are you trying to wreak havoc on the Universe!?!\n\n  " + msg + "\n\n  Idiot.\n\n  ";
  }

  function auToMeters(aus) {
    return 149597870700 * aus;
  }

  /**
   * Function to inject global styles into the document head
   * Make sure to prefix all of your global class names, etc. with
   * something unique to this widget to avoid clashes
   * E.g. sbn-solar-system-viewer-
   */
  var addGlobalStyles = function addGlobalStyles() {

    var globalStyle = document.createElement('style');
    globalStyle.innerHTML = "\n    @keyframes sbn-solar-system-viewer-fade-in {\n      from { opacity: 0; }\n      to   { opacity: 1; }\n    }\n\n    @keyframes sbn-solar-system-viewer-loader-spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n\n    .sbn-solar-system-viewer-input:focus{\n        outline-width: 0;\n    }\n  ";
    document.head.append(globalStyle);
  };

  var loaderDivId = 'sbn-solar-system-loader-div-id';
  var borderWidthPxls = 5;
  var spinSpeedMs = 2000;
  /**
   * Simple loader div; removed by `remove-loader-div`
   * It consists of two divs; the outer 'loaderDiv' that is just a shell
   * for centering the div with the actual animation, and the 'animDiv'
   * that does the spinning, etc.
   */

  var appendLoaderDiv = function appendLoaderDiv(containerDiv) {
    // --->>>
    // Injects key frames for spin animation
    addGlobalStyles(); // Create divs

    var loaderDiv = document.createElement('div');
    var animDiv = document.createElement('div');
    containerDiv.append(loaderDiv);
    loaderDiv.append(animDiv); // Style loaderDiv

    loaderDiv.id = loaderDivId;
    loaderDiv.style.setProperty('position', 'absolute');
    loaderDiv.style.setProperty('top', '0px');
    loaderDiv.style.setProperty('left', '0px');
    loaderDiv.style.setProperty('bottom', '0px');
    loaderDiv.style.setProperty('right', '0px');
    loaderDiv.style.setProperty('display', 'flex');
    loaderDiv.style.setProperty('align-items', 'center');
    loaderDiv.style.setProperty('justify-content', 'center'); // Calc size of radius based on size of container

    var width = loaderDiv.offsetWidth;
    var height = loaderDiv.offsetHeight;
    var shorterLength = width < height ? width : height; // Style animation div

    animDiv.style.setProperty('width', shorterLength * 0.25 + 'px');
    animDiv.style.setProperty('height', shorterLength * 0.25 + 'px');
    animDiv.style.setProperty('border', borderWidthPxls + "px solid #f3f3f3");
    animDiv.style.setProperty('border-top', borderWidthPxls + "px solid #3498db");
    animDiv.style.setProperty('border-radius', '100px');
    animDiv.style.setProperty('animation', "sbn-solar-system-viewer-loader-spin " + spinSpeedMs + "ms linear infinite");
    return loaderDiv;
  };

  var fadeOutTimeMs = 3000;
  var removeLoaderDiv = function removeLoaderDiv() {
    // --->>>
    var loaderDiv = document.getElementById(loaderDivId);
    loaderDiv == null ? void 0 : loaderDiv.style.setProperty('transition', "opacity " + fadeOutTimeMs + "ms ease-in-out");
    loaderDiv == null ? void 0 : loaderDiv.style.setProperty('opacity', '0');
    setTimeout(function () {
      loaderDiv == null ? void 0 : loaderDiv.style.setProperty('display', 'none');
    }, fadeOutTimeMs);
  };

  var ar = 2; // Aspect Ratio

  var fov = 60; // Field of View

  var near = /*#__PURE__*/auToMeters(0.00001); // Near Plane

  var far = /*#__PURE__*/auToMeters(3000); // Far Plane

  /**
   * This abstract class is to be inherited by the SceneManager instance.
   * The idea is to place all the usual/boilerplate code for setting up
   * a threeJs scene and running it here, so that the only place you
   * need to implement the specifics of your scene is in your
   * SceneManager instance.
   *
   * By convention, properties/methods that are not intended/expected to be used
   * outside this class are prefixed with '_'
   *
   */

  var AbstractSceneManager = /*#__PURE__*/function () {
    function AbstractSceneManager(_containerId) {
      var _this = this;

      this._containerId = _containerId;
      this._scene = new THREE.Scene();
      this._canvas = document.createElement('canvas');
      this._clock = new THREE.Clock(false);
      this._initialViewingVector = new THREE.Vector3();
      this._isSceneReady = false;
      this._isRendering = false;
      this._isHelpersShown = false;
      this._isInit = false;
      this._fps = 60;
      this._camera = new THREE.PerspectiveCamera(fov, ar, near, far);
      this._sceneEntities = [];

      this._preInitHook = function () {};

      this._postInitHook = function () {};

      this._destroyHook = function () {};

      this.updateCamera = function () {};

      this.registerSceneEntities = function (sceneEntities) {
        sceneEntities.forEach(function (el) {
          return _this._sceneEntities.push(el);
        });
      };
      /**
       * This method lets you show/hide the objects within in your scene
       * designated as 'helpers'. It relies on the practice of setting the property `userData.isHelper = true`
       * on any object you want to be classified as a helper
       */


      this.setHelpersVisibility = function (isHelpersShown) {
        _this._isHelpersShown = !!isHelpersShown;

        _this._scene.traverse(function (child) {
          return child.userData.isHelper && (child.visible = _this._isHelpersShown);
        });
      };

      this.toggleHelpersVisibility = function () {
        _this._isHelpersShown = !_this._isHelpersShown;

        _this.setHelpersVisibility(_this._isHelpersShown);
      };

      this._updateCameraAspect = function () {
        // Not sure where/how, but canvas' style width/height
        // gets altered and needs to be reset to 100%
        _this._canvas.style.width = '100%';
        _this._canvas.style.height = '100%';
        var width = _this._canvas.offsetWidth || 1;
        var height = _this._canvas.offsetHeight || 1;
        _this._camera.aspect = width / height;

        _this._camera.updateProjectionMatrix();

        _this._renderer.setSize(width, height);
      };

      this.destroy = function () {
        window.removeEventListener('resize', _this._updateCameraAspect);

        _this._stopRendering();

        _this._destroyHook();
      };

      this._render = function () {
        if (!_this._isRendering) return;
        setTimeout(function () {
          _this._requestAnimationFrameId = requestAnimationFrame(_this._render);

          _this._update();
        }, 1000 / _this._fps);
      };

      this._startRendering = function () {
        console.log('Starting animation...');
        _this._isRendering = true;

        _this._clock.start();

        _this._render();
      };

      this._stopRendering = function () {
        console.log('Stopping animation...');
        _this._isRendering = false;

        _this._clock.stop();
      };
    }

    var _proto = AbstractSceneManager.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var _this2 = this;

        var DPR, initiatedSceneEntityGroups, dt;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._isInit) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                this._isInit = true; // Time initialization

                setInitDate(new Date()); // Enable superclass constructor to adjust settings prior to initialization sequence

                this._preInitHook(); // Get container and add fitting canvas to it


                this._container = document.getElementById(this._containerId);

                if (this._container) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('No container found with id: ' + this._containerId);

              case 8:
                this._canvas.style.width = '100%';
                this._canvas.style.height = '100%';

                this._container.append(this._canvas);

                this._container.style.setProperty('position', 'relative');

                this._container.style.setProperty('background-color', 'black');

                appendLoaderDiv(this._container); // React to resize events on window

                window.addEventListener('resize', this._updateCameraAspect); // Build Renderer

                DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
                this._renderer = new THREE.WebGLRenderer({
                  canvas: this._canvas,
                  antialias: true,
                  alpha: true
                });

                this._renderer.setPixelRatio(DPR);

                this._renderer.sortObjects = false; // This prevents pesky rendering-disruption effect

                this._renderer.shadowMap.enabled = true;
                this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
                this._renderer.outputEncoding = THREE.GammaEncoding; // Init camera position and orientation

                this._camera.position.copy(this._initialViewingVector);

                this._camera.up = new THREE.Vector3(0, 0, 1); // Vector defining up direction of camera

                this._camera.lookAt(0, 0, 0); // Configure orbitControls
                // ! Don't move this code to earlier position or controls will be screwy
                // ! Note sure why; treat as brute fact supervening on inscrutable metaphysical states of affair


                this._controls = new OrbitControls(this._camera, this._renderer.domElement);
                this._controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled

                this._controls.dampingFactor = 0.25;
                this._controls.target = new THREE.Vector3(); // Initiate Scene Entities

                if (this._sceneEntities.length) {
                  _context2.next = 31;
                  break;
                }

                throw new Error(asciiError('You have no scene entities!'));

              case 31:
                _context2.next = 33;
                return Promise.all(this._sceneEntities.map( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(sceneEntity) {
                    var initiatedSceneEntityGroup;
                    return runtime_1.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return sceneEntity.init();

                          case 2:
                            initiatedSceneEntityGroup = _context.sent;

                            if (!(!initiatedSceneEntityGroup || !initiatedSceneEntityGroup.children.length)) {
                              _context.next = 5;
                              break;
                            }

                            throw new Error(asciiError("\n            -----------------------------------------------------------------------------\n            The scene entity \"" + sceneEntity.constructor.name + "\" has empty sceneEntityGroup\n            after initialization!!!\n            -----------------------------------------------------------------------------\n            "));

                          case 5:
                            return _context.abrupt("return", initiatedSceneEntityGroup);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }())).then(function (_) {
                  return new Promise(function (resolve) {
                    return setTimeout(function () {
                      return resolve(_);
                    }, 100);
                  });
                }).then(function (_) {
                  return _;
                });

              case 33:
                initiatedSceneEntityGroups = _context2.sent;
                initiatedSceneEntityGroups.forEach(function (group) {
                  return _this2._scene.add(group);
                }); // Run updater methods

                this.setHelpersVisibility(false);

                this._updateCameraAspect(); // Begin Animation


                this._startRendering(); // Enable superclass constructor to adjust settings after to initialization sequence


                this._postInitHook(); // Remove loader div


                removeLoaderDiv(); //

                dt = +new Date() - +getInitDate();
                console.log('Finished initiating', dt);

              case 42:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.setFramesPerSecond = function setFramesPerSecond(newFps) {
      if (newFps <= 0 || newFps > 100) return;
      this._fps = newFps;
    };

    _proto._update = function _update() {
      var _this3 = this;

      // Loop through scene entities and trigger their update methods
      // If they need 'universal' time, they can access this._clock, etc.
      this._sceneEntities.forEach(function (el) {
        return el.update(_this3._camera, _this3._clock.elapsedTime);
      }); // Update camera


      this.updateCamera(); // Finish loop

      if (!this._camera || !this._renderer) throw new Error('Poor Logic');

      if (!!this._requestAnimationFrameId) {
        this._renderer.render(this._scene, this._camera);
      }
    };

    return AbstractSceneManager;
  }();

  /**
   * Constants for widget
   */

  /**
   * Properties common to all html buttons
   */
  var buttonBackgroundColor = 'rgba(255,255,255,0.2)';
  var buttonClickedBackgroundColor = 'rgba(255,255,255,0.4)';
  var buttonTextColor = 'rgba(255,255,255,0.8)';
  var buttonCursorType = 'pointer';
  var buttonPadding = '10px';
  var buttonFadeInSpecs = '1s ease-in-out'; // These two properties must be coordinated together using e.g. google.fonts

  var buttonFontFamily = "'Odibee Sans', cursive";
  var buttonCssUrl = 'https://fonts.googleapis.com/css2?family=Odibee+Sans';
  /**
   * Root url of file server with copy of /images
   */

  var imageBaseUrl = "https://sbn-solar-system-viewer.s3.amazonaws.com";

  /**
   * Function to mutate buttons by injecting them with properties
   * common to all html buttons; append to container when ready
   */

  var injectCommonButtonProperties = function injectCommonButtonProperties(button, container, onClickCB) {
    // --->>>
    // Add to global styles
    addGlobalStyles(); // Start loading the remote fonts style sheet; mutate button on completion

    var link = document.createElement('link');
    link.rel = 'stylesheet';

    link.onload = function () {
      // console.log('Loaded css url for fonts');
      mutateButton();
    };

    link.onerror = function () {
      console.log('Failed to load css url for fonts; continuing anyway...');
      mutateButton();
    };

    link.href = buttonCssUrl;
    document.head.append(link); // Callback to mutate button

    function mutateButton() {
      // Positioning
      button.style.position = 'absolute';
      button.style.setProperty('padding', buttonPadding); // Colors

      button.style.setProperty('color', buttonTextColor);
      button.style.setProperty('background-color', buttonBackgroundColor); // Font stuff

      button.style.setProperty('font-family', buttonFontFamily);
      button.style.setProperty('font-size', '20px'); // Setup fade-in effect

      button.style.setProperty('animation', "sbn-solar-system-viewer-fade-in " + buttonFadeInSpecs); // Cursor behavior
      // Prevent text in button from being selectable
      // See here: https://stackoverflow.com/a/4407335/8620332

      button.style.setProperty('cursor', buttonCursorType);
      button.style.setProperty('-webkit-touch-callout', 'none');
      button.style.setProperty('-webkit-user-select', 'none');
      button.style.setProperty('-khtml-user-select', 'none');
      button.style.setProperty('-moz-user-select', 'none');
      button.style.setProperty('-ms-user-select', 'none');
      button.style.setProperty('user-select', 'none'); // Properties related to click effect

      button.style.setProperty('transition', 'background-color 50ms ease-in-out');
      button.addEventListener('click', function () {
        button.style.setProperty('background-color', buttonClickedBackgroundColor);
        setTimeout(function () {
          button.style.setProperty('background-color', buttonBackgroundColor);
          onClickCB();
        }, 200);
      }); // Make visible

      container.append(button);
    }
  };

  /**
   *
   * @param container
   */

  var buttonToggleHelpers = function buttonToggleHelpers(container, onClickCB) {
    // --->>>
    // Warning
    if (!container) throw new Error('Canvas Container is Falsy!'); // Set properties unique to this button

    var button = document.createElement('div');
    button.innerText = 'Toggle Helpers';
    button.style.setProperty('top', '10px');
    button.style.setProperty('right', '10px'); // Set properties common to all buttons; append to container when ready

    injectCommonButtonProperties(button, container, onClickCB); // Finish him

    return button;
  };

  /**
   *
   * @param container
   */

  var buttonToggleToyScale = function buttonToggleToyScale(container, onClickCB) {
    // --->>>
    // Warning
    if (!container) throw new Error('Canvas Container is Falsy!'); // Set properties unique to this button

    var button = document.createElement('div');
    button.innerText = 'Toggle Toy Scale';
    button.style.setProperty('top', '10px');
    button.style.setProperty('left', '50%');
    button.style.setProperty('transform', 'translateX(-50%)'); // Set properties common to all buttons; append to container when ready

    injectCommonButtonProperties(button, container, onClickCB); // Finish him

    return button;
  };

  // Can also be used to buffer planet load

  var delayMs = 5;
  var getTextureFromImageUrl = function getTextureFromImageUrl(url, name) {
    return new Promise(function (resolve, reject) {
      new THREE.TextureLoader().load(url, function (texture) {
        texture.encoding = THREE.GammaEncoding;
        setTimeout(function () {
          return resolve(texture);
        }, delayMs);
      }, function (xhr) {
        return console.log(name + " " + xhr.loaded / xhr.total * 100 + "%");
      }, function () {
        console.log('Failed to load: ', url);
        reject(new Error('Failed to load: ' + url));
      });
    });
  };

  var solarSystemData = {
    SUN: {
      radiusMeters: 696342000,
      periodDays: undefined
    },
    MERCURY: {
      radiusMeters: 2439700,
      periodDays: 87.9691
    },
    VENUS: {
      radiusMeters: 6051800,
      periodDays: 224.701
    },
    EARTH: {
      radiusMeters: 6378000,
      periodDays: 365.256
    },
    MARS: {
      radiusMeters: 3389500,
      periodDays: 686.971
    },
    CERES: {
      radiusMeters: 470000,
      periodDays: 1683.14570801
    },
    JUPITER: {
      radiusMeters: 71492000,
      periodDays: 4332.59
    },
    SATURN: {
      radiusMeters: 60268000,
      periodDays: 10759.22
    },
    URANUS: {
      radiusMeters: 25362000,
      periodDays: 30688.5
    },
    NEPTUNE: {
      radiusMeters: 24764000,
      periodDays: 60182
    },
    PLUTO: {
      radiusMeters: 1188300,
      periodDays: 90560
    },
    HAUMEA: {
      radiusMeters: 620000,
      periodDays: 103410
    },
    MAKEMAKE: {
      radiusMeters: 720000,
      periodDays: 111845
    },
    ERIS: {
      radiusMeters: 1163000,
      periodDays: 204199
    },
    // Moons
    MOON: {
      radiusMeters: 350000,
      periodDays: 29.5
    }
  };

  /**
   * Base class that any entity must extend in order that its threeJs group
   * might get added to the threeJs scene owned by the manager
   */

  var AbstractSceneEntity = function AbstractSceneEntity() {
    var _this = this;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>
    this._isAsyncLoad = function () {
      return AbstractSceneEntity._isAsyncLoad;
    };

    this._sceneEntityGroup = new THREE.Group();

    this.getSceneEntityGroup = function () {
      return _this._sceneEntityGroup;
    };
  };
  AbstractSceneEntity._isAsyncLoad = /*#__PURE__*/getOptions().isAsyncLoad;

  /**
   * Base class for space object that can be toggled between
   * 'real' and 'toy' scales
   */

  var AbstractToyModel = /*#__PURE__*/function (_AbstractSceneEntity) {
    _inheritsLoose(AbstractToyModel, _AbstractSceneEntity);

    function AbstractToyModel(_toyScale) {
      var _this;

      _this = _AbstractSceneEntity.call(this) || this;
      _this._toyScale = _toyScale; // ~~~>>>
      // Setup

      _this._toyGroup = [];
      _this._realScale = 1;
      _this._isZoomToToyScale = false;
      return _this;
    }

    var _proto = AbstractToyModel.prototype;

    _proto.setIsZoomToToyScale = function setIsZoomToToyScale(value) {
      this._isZoomToToyScale = value;
    };

    _proto.getScale = function getScale() {
      return this._isZoomToToyScale ? this._toyScale : this._realScale;
    };

    _proto._setToToyScale = function _setToToyScale() {
      var _this2 = this;

      this._isZoomToToyScale = true;

      this._toyGroup.forEach(function (child) {
        var t = _this2._toyScale; // 't' for 'target'

        child.scale.set(t, t, t);
      });
    };

    _proto._updateModelScale = function _updateModelScale() {
      var _this3 = this;

      this._toyGroup.forEach(function (child) {
        // Test if planet is already at target scale; 't' for target
        var t = _this3._isZoomToToyScale ? _this3._toyScale : _this3._realScale;
        var _child$scale = child.scale,
            sx = _child$scale.x,
            sy = _child$scale.y,
            sz = _child$scale.z;
        if (sx === t) return; // Update-mesh-scale logic

        var ds = _this3._toyScale / 20;

        if (sx < t) {
          // Increase deficient scale
          child.scale.set(sx + ds, sy + ds, sz + ds);
        }

        if (sx > t) {
          // Decrease excessive scale
          child.scale.set(sx - ds, sy - ds, sz - ds);
        }

        if (Math.abs(sx - t) < ds) {
          // Snap scale to target
          child.scale.set(t, t, t);
        }
      });
    };

    return AbstractToyModel;
  }(AbstractSceneEntity);

  /**
   * When a sprite is loaded it is given a size of '1'
   * So it needs to be scaled, in this case, to the size of the Sun
   * Further, the Sun only takes up a fraction of this image, so we need this factor
   * to scale the image further
   */

  var realToToyRatio = 30;
  var imageToSunRatio = 20;
  var Sun = /*#__PURE__*/function (_AbstractToyModel) {
    _inheritsLoose(Sun, _AbstractToyModel);

    function Sun() {
      var _this;

      _this = _AbstractToyModel.call(this, realToToyRatio) || this; // ~~~>>>

      _this.NAME = 'SUN';
      _this.position = new THREE.Vector3(0, 0, 0);
      _this.sunRadiusMeters = solarSystemData.SUN.radiusMeters;
      _this.model = new THREE.Group();
      _this.sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        blending: THREE.AdditiveBlending,
        transparent: true,
        visible: false
      }));

      _this.getRadius = function () {
        return _this.sunRadiusMeters;
      };

      _this.getPosition = function () {
        return _this.position;
      }; // Set up sun sprite size


      _this.sprite.scale.multiplyScalar(_this.sunRadiusMeters * imageToSunRatio);

      _this.model.add(_this.sprite); // Set up helper


      _this.helper = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.SphereGeometry(_this.sunRadiusMeters, 32)), new THREE.LineBasicMaterial({
        color: new THREE.Color('cyan')
      }));
      _this.helper.userData.isHelper = true;

      _this.helper.rotateX(Math.PI / 2);

      _this.model.add(_this.helper);

      return _this;
    }

    var _proto = Sun.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var _this2 = this;

        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve) {
                    var spriteUrl, onTextureLoad;
                    return runtime_1.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            // --->>>
                            spriteUrl = imageBaseUrl + "/stars/sun3-sprite-512.png";

                            onTextureLoad = function onTextureLoad(texture) {
                              _this2.sprite.material.map = texture;
                              _this2.sprite.material.needsUpdate = true;
                              _this2.sprite.material.visible = true;
                            };

                            if (!_this2._isAsyncLoad()) {
                              _context.next = 6;
                              break;
                            }

                            getTextureFromImageUrl(spriteUrl, 'SUN SPRITE IMAGE').then(onTextureLoad)["catch"](function (_) {
                              return null;
                            });
                            _context.next = 11;
                            break;

                          case 6:
                            _context.t0 = onTextureLoad;
                            _context.next = 9;
                            return getTextureFromImageUrl(spriteUrl)["catch"](function (_) {
                              return null;
                            });

                          case 9:
                            _context.t1 = _context.sent;
                            (0, _context.t0)(_context.t1);

                          case 11:
                            _this2._toyGroup.push(_this2.model);

                            _this2._sceneEntityGroup.name = _this2.NAME;

                            _this2._sceneEntityGroup.add(_this2.model);

                            console.log('Sun resolved', +new Date() - +getInitDate());
                            resolve(_this2._sceneEntityGroup);

                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.update = function update() {
      this._updateModelScale();
    };

    return Sun;
  }(AbstractToyModel);

  /**
   * This function is adapted from `https://github.com/jeromeetienne/threex.planets/blob/master/threex.planets.js`, based on instructions from `http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/`
   * Jpegs don't have an alpha channel, so the idea is to load cloud image from jpg and remove pixels manually to create an alpha-channel effect
   */

  function createEarthCloudMesh() {
    // --->>>
    return new Promise(function (resolve, reject) {
      // --->>>
      // create destination canvas
      var canvasResult = document.createElement('canvas');
      canvasResult.width = 1024;
      canvasResult.height = 512;
      var contextResult = canvasResult.getContext('2d'); // load earthcloudmap

      var imageMap = new Image();
      imageMap.crossOrigin = 'Anonymous'; // const material = new THREE.MeshPhongMaterial({
      //   map: new THREE.Texture(canvasResult),
      //   side: THREE.DoubleSide,
      //   transparent: true,
      //   opacity: 0.6,
      // });
      // const mesh = new THREE.Mesh<THREE.SphereGeometry>(geometry, material);

      imageMap.onerror = function (error) {
        console.log('Error: ', error);
        reject();
      };

      imageMap.onload = function () {
        // --->>>
        // create dataMap ImageData for earthcloudmap
        var canvasMap = document.createElement('canvas');
        canvasMap.width = imageMap.width;
        canvasMap.height = imageMap.height;
        var contextMap = canvasMap.getContext('2d');
        contextMap.drawImage(imageMap, 0, 0);
        var dataMap = contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height); // load earthcloudmaptrans

        var imageTrans = new Image();
        imageTrans.crossOrigin = 'Anonymous';
        imageTrans.addEventListener('load', function () {
          // --->>>
          // create dataTrans ImageData for earthcloudmaptrans
          var canvasTrans = document.createElement('canvas');
          canvasTrans.width = imageTrans.width;
          canvasTrans.height = imageTrans.height;
          var contextTrans = canvasTrans.getContext('2d');
          contextTrans.drawImage(imageTrans, 0, 0);

          try {
            var dataTrans = contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height); // merge dataMap + dataTrans into dataResult

            var dataResult = contextMap.createImageData(canvasMap.width, canvasMap.height);

            for (var y = 0, offset = 0; y < imageMap.height; y++) {
              for (var x = 0; x < imageMap.width; x++, offset += 4) {
                dataResult.data[offset + 0] = dataMap.data[offset + 0];
                dataResult.data[offset + 1] = dataMap.data[offset + 1];
                dataResult.data[offset + 2] = dataMap.data[offset + 2];
                dataResult.data[offset + 3] = 255 - dataTrans.data[offset + 0];
              }
            } // update texture with result


            contextResult.putImageData(dataResult, 0, 0); // if (!!material && !!material.map) material.map.needsUpdate = true;
          } catch (error) {
            console.log('Error: ', error);
            reject();
          }

          resolve(new THREE.CanvasTexture(canvasResult));
        });
        imageTrans.src = imageBaseUrl + "/planets/earth/earth-clouds-trans-1024.png";
      };

      imageMap.src = imageBaseUrl + "/planets/earth/earth-clouds-color-1024.png";
    });
  }

  function getPlanetRadiusMeters(name) {
    // --->>>
    return solarSystemData[name].radiusMeters;
  }

  var EOrbitalType;

  (function (EOrbitalType) {
    EOrbitalType["PLANET"] = "PLANET";
    EOrbitalType["DWARF_PLANET"] = "DWARF_PLANET";
    EOrbitalType["SUN"] = "SUN";
    EOrbitalType["ASTEROID"] = "ASTEROID";
  })(EOrbitalType || (EOrbitalType = {}));

  class GLTFLoader extends THREE.Loader {

  	constructor( manager ) {

  		super( manager );

  		this.dracoLoader = null;
  		this.ktx2Loader = null;
  		this.meshoptDecoder = null;

  		this.pluginCallbacks = [];

  		this.register( function ( parser ) {

  			return new GLTFMaterialsClearcoatExtension( parser );

  		} );

  		this.register( function ( parser ) {

  			return new GLTFTextureBasisUExtension( parser );

  		} );

  		this.register( function ( parser ) {

  			return new GLTFTextureWebPExtension( parser );

  		} );

  		this.register( function ( parser ) {

  			return new GLTFMaterialsTransmissionExtension( parser );

  		} );

  		this.register( function ( parser ) {

  			return new GLTFLightsExtension( parser );

  		} );

  		this.register( function ( parser ) {

  			return new GLTFMeshoptCompression( parser );

  		} );

  	}

  	load( url, onLoad, onProgress, onError ) {

  		const scope = this;

  		let resourcePath;

  		if ( this.resourcePath !== '' ) {

  			resourcePath = this.resourcePath;

  		} else if ( this.path !== '' ) {

  			resourcePath = this.path;

  		} else {

  			resourcePath = THREE.LoaderUtils.extractUrlBase( url );

  		}

  		// Tells the LoadingManager to track an extra item, which resolves after
  		// the model is fully loaded. This means the count of items loaded will
  		// be incorrect, but ensures manager.onLoad() does not fire early.
  		this.manager.itemStart( url );

  		const _onError = function ( e ) {

  			if ( onError ) {

  				onError( e );

  			} else {

  				console.error( e );

  			}

  			scope.manager.itemError( url );
  			scope.manager.itemEnd( url );

  		};

  		const loader = new THREE.FileLoader( this.manager );

  		loader.setPath( this.path );
  		loader.setResponseType( 'arraybuffer' );
  		loader.setRequestHeader( this.requestHeader );
  		loader.setWithCredentials( this.withCredentials );

  		loader.load( url, function ( data ) {

  			try {

  				scope.parse( data, resourcePath, function ( gltf ) {

  					onLoad( gltf );

  					scope.manager.itemEnd( url );

  				}, _onError );

  			} catch ( e ) {

  				_onError( e );

  			}

  		}, onProgress, _onError );

  	}

  	setDRACOLoader( dracoLoader ) {

  		this.dracoLoader = dracoLoader;
  		return this;

  	}

  	setDDSLoader() {

  		throw new Error(

  			'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'

  		);

  	}

  	setKTX2Loader( ktx2Loader ) {

  		this.ktx2Loader = ktx2Loader;
  		return this;

  	}

  	setMeshoptDecoder( meshoptDecoder ) {

  		this.meshoptDecoder = meshoptDecoder;
  		return this;

  	}

  	register( callback ) {

  		if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

  			this.pluginCallbacks.push( callback );

  		}

  		return this;

  	}

  	unregister( callback ) {

  		if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

  			this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

  		}

  		return this;

  	}

  	parse( data, path, onLoad, onError ) {

  		let content;
  		const extensions = {};
  		const plugins = {};

  		if ( typeof data === 'string' ) {

  			content = data;

  		} else {

  			const magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

  			if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

  				try {

  					extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

  				} catch ( error ) {

  					if ( onError ) onError( error );
  					return;

  				}

  				content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

  			} else {

  				content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

  			}

  		}

  		const json = JSON.parse( content );

  		if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

  			if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
  			return;

  		}

  		const parser = new GLTFParser( json, {

  			path: path || this.resourcePath || '',
  			crossOrigin: this.crossOrigin,
  			requestHeader: this.requestHeader,
  			manager: this.manager,
  			ktx2Loader: this.ktx2Loader,
  			meshoptDecoder: this.meshoptDecoder

  		} );

  		parser.fileLoader.setRequestHeader( this.requestHeader );

  		for ( let i = 0; i < this.pluginCallbacks.length; i ++ ) {

  			const plugin = this.pluginCallbacks[ i ]( parser );
  			plugins[ plugin.name ] = plugin;

  			// Workaround to avoid determining as unknown extension
  			// in addUnknownExtensionsToUserData().
  			// Remove this workaround if we move all the existing
  			// extension handlers to plugin system
  			extensions[ plugin.name ] = true;

  		}

  		if ( json.extensionsUsed ) {

  			for ( let i = 0; i < json.extensionsUsed.length; ++ i ) {

  				const extensionName = json.extensionsUsed[ i ];
  				const extensionsRequired = json.extensionsRequired || [];

  				switch ( extensionName ) {

  					case EXTENSIONS.KHR_MATERIALS_UNLIT:
  						extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
  						break;

  					case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
  						extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension();
  						break;

  					case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
  						extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
  						break;

  					case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
  						extensions[ extensionName ] = new GLTFTextureTransformExtension();
  						break;

  					case EXTENSIONS.KHR_MESH_QUANTIZATION:
  						extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
  						break;

  					default:

  						if ( extensionsRequired.indexOf( extensionName ) >= 0 && plugins[ extensionName ] === undefined ) {

  							console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

  						}

  				}

  			}

  		}

  		parser.setExtensions( extensions );
  		parser.setPlugins( plugins );
  		parser.parse( onLoad, onError );

  	}

  }

  /* GLTFREGISTRY */

  function GLTFRegistry() {

  	let objects = {};

  	return	{

  		get: function ( key ) {

  			return objects[ key ];

  		},

  		add: function ( key, object ) {

  			objects[ key ] = object;

  		},

  		remove: function ( key ) {

  			delete objects[ key ];

  		},

  		removeAll: function () {

  			objects = {};

  		}

  	};

  }

  /*********************************/
  /********** EXTENSIONS ***********/
  /*********************************/

  const EXTENSIONS = {
  	KHR_BINARY_GLTF: 'KHR_binary_glTF',
  	KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
  	KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
  	KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
  	KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
  	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
  	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
  	KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
  	KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
  	KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
  	EXT_TEXTURE_WEBP: 'EXT_texture_webp',
  	EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression'
  };

  /**
  	 * Punctual Lights Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
  	 */
  class GLTFLightsExtension {

  	constructor( parser ) {

  		this.parser = parser;
  		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

  		// Object3D instance caches
  		this.cache = { refs: {}, uses: {} };

  	}

  	_markDefs() {

  		const parser = this.parser;
  		const nodeDefs = this.parser.json.nodes || [];

  		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

  			const nodeDef = nodeDefs[ nodeIndex ];

  			if ( nodeDef.extensions
  					&& nodeDef.extensions[ this.name ]
  					&& nodeDef.extensions[ this.name ].light !== undefined ) {

  				parser._addNodeRef( this.cache, nodeDef.extensions[ this.name ].light );

  			}

  		}

  	}

  	_loadLight( lightIndex ) {

  		const parser = this.parser;
  		const cacheKey = 'light:' + lightIndex;
  		let dependency = parser.cache.get( cacheKey );

  		if ( dependency ) return dependency;

  		const json = parser.json;
  		const extensions = ( json.extensions && json.extensions[ this.name ] ) || {};
  		const lightDefs = extensions.lights || [];
  		const lightDef = lightDefs[ lightIndex ];
  		let lightNode;

  		const color = new THREE.Color( 0xffffff );

  		if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

  		const range = lightDef.range !== undefined ? lightDef.range : 0;

  		switch ( lightDef.type ) {

  			case 'directional':
  				lightNode = new THREE.DirectionalLight( color );
  				lightNode.target.position.set( 0, 0, - 1 );
  				lightNode.add( lightNode.target );
  				break;

  			case 'point':
  				lightNode = new THREE.PointLight( color );
  				lightNode.distance = range;
  				break;

  			case 'spot':
  				lightNode = new THREE.SpotLight( color );
  				lightNode.distance = range;
  				// Handle spotlight properties.
  				lightDef.spot = lightDef.spot || {};
  				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
  				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
  				lightNode.angle = lightDef.spot.outerConeAngle;
  				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
  				lightNode.target.position.set( 0, 0, - 1 );
  				lightNode.add( lightNode.target );
  				break;

  			default:
  				throw new Error( 'THREE.GLTFLoader: Unexpected light type: ' + lightDef.type );

  		}

  		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
  		// here, because node-level parsing will only override position if explicitly specified.
  		lightNode.position.set( 0, 0, 0 );

  		lightNode.decay = 2;

  		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

  		lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

  		dependency = Promise.resolve( lightNode );

  		parser.cache.add( cacheKey, dependency );

  		return dependency;

  	}

  	createNodeAttachment( nodeIndex ) {

  		const self = this;
  		const parser = this.parser;
  		const json = parser.json;
  		const nodeDef = json.nodes[ nodeIndex ];
  		const lightDef = ( nodeDef.extensions && nodeDef.extensions[ this.name ] ) || {};
  		const lightIndex = lightDef.light;

  		if ( lightIndex === undefined ) return null;

  		return this._loadLight( lightIndex ).then( function ( light ) {

  			return parser._getNodeRef( self.cache, lightIndex, light );

  		} );

  	}

  }

  /**
  	 * Unlit Materials Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
  	 */
  class GLTFMaterialsUnlitExtension {

  	constructor() {

  		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

  	}

  	getMaterialType() {

  		return THREE.MeshBasicMaterial;

  	}

  	extendParams( materialParams, materialDef, parser ) {

  		const pending = [];

  		materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
  		materialParams.opacity = 1.0;

  		const metallicRoughness = materialDef.pbrMetallicRoughness;

  		if ( metallicRoughness ) {

  			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

  				const array = metallicRoughness.baseColorFactor;

  				materialParams.color.fromArray( array );
  				materialParams.opacity = array[ 3 ];

  			}

  			if ( metallicRoughness.baseColorTexture !== undefined ) {

  				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

  			}

  		}

  		return Promise.all( pending );

  	}

  }

  /**
  	 * Clearcoat Materials Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
  	 */
  class GLTFMaterialsClearcoatExtension {

  	constructor( parser ) {

  		this.parser = parser;
  		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

  	}

  	getMaterialType( materialIndex ) {

  		const parser = this.parser;
  		const materialDef = parser.json.materials[ materialIndex ];

  		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

  		return THREE.MeshPhysicalMaterial;

  	}

  	extendMaterialParams( materialIndex, materialParams ) {

  		const parser = this.parser;
  		const materialDef = parser.json.materials[ materialIndex ];

  		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

  			return Promise.resolve();

  		}

  		const pending = [];

  		const extension = materialDef.extensions[ this.name ];

  		if ( extension.clearcoatFactor !== undefined ) {

  			materialParams.clearcoat = extension.clearcoatFactor;

  		}

  		if ( extension.clearcoatTexture !== undefined ) {

  			pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

  		}

  		if ( extension.clearcoatRoughnessFactor !== undefined ) {

  			materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

  		}

  		if ( extension.clearcoatRoughnessTexture !== undefined ) {

  			pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

  		}

  		if ( extension.clearcoatNormalTexture !== undefined ) {

  			pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

  			if ( extension.clearcoatNormalTexture.scale !== undefined ) {

  				const scale = extension.clearcoatNormalTexture.scale;

  				// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
  				materialParams.clearcoatNormalScale = new THREE.Vector2( scale, - scale );

  			}

  		}

  		return Promise.all( pending );

  	}

  }

  /**
  	 * Transmission Materials Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
  	 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
  	 */
  class GLTFMaterialsTransmissionExtension {

  	constructor( parser ) {

  		this.parser = parser;
  		this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;

  	}

  	getMaterialType( materialIndex ) {

  		const parser = this.parser;
  		const materialDef = parser.json.materials[ materialIndex ];

  		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

  		return THREE.MeshPhysicalMaterial;

  	}

  	extendMaterialParams( materialIndex, materialParams ) {

  		const parser = this.parser;
  		const materialDef = parser.json.materials[ materialIndex ];

  		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

  			return Promise.resolve();

  		}

  		const pending = [];

  		const extension = materialDef.extensions[ this.name ];

  		if ( extension.transmissionFactor !== undefined ) {

  			materialParams.transmission = extension.transmissionFactor;

  		}

  		if ( extension.transmissionTexture !== undefined ) {

  			pending.push( parser.assignTexture( materialParams, 'transmissionMap', extension.transmissionTexture ) );

  		}

  		return Promise.all( pending );

  	}

  }

  /**
  	 * BasisU Texture Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
  	 */
  class GLTFTextureBasisUExtension {

  	constructor( parser ) {

  		this.parser = parser;
  		this.name = EXTENSIONS.KHR_TEXTURE_BASISU;

  	}

  	loadTexture( textureIndex ) {

  		const parser = this.parser;
  		const json = parser.json;

  		const textureDef = json.textures[ textureIndex ];

  		if ( ! textureDef.extensions || ! textureDef.extensions[ this.name ] ) {

  			return null;

  		}

  		const extension = textureDef.extensions[ this.name ];
  		const source = json.images[ extension.source ];
  		const loader = parser.options.ktx2Loader;

  		if ( ! loader ) {

  			if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

  				throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

  			} else {

  				// Assumes that the extension is optional and that a fallback texture is present
  				return null;

  			}

  		}

  		return parser.loadTextureImage( textureIndex, source, loader );

  	}

  }

  /**
  	 * WebP Texture Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
  	 */
  class GLTFTextureWebPExtension {

  	constructor( parser ) {

  		this.parser = parser;
  		this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
  		this.isSupported = null;

  	}

  	loadTexture( textureIndex ) {

  		const name = this.name;
  		const parser = this.parser;
  		const json = parser.json;

  		const textureDef = json.textures[ textureIndex ];

  		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

  			return null;

  		}

  		const extension = textureDef.extensions[ name ];
  		const source = json.images[ extension.source ];

  		let loader = parser.textureLoader;
  		if ( source.uri ) {

  			const handler = parser.options.manager.getHandler( source.uri );
  			if ( handler !== null ) loader = handler;

  		}

  		return this.detectSupport().then( function ( isSupported ) {

  			if ( isSupported ) return parser.loadTextureImage( textureIndex, source, loader );

  			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

  				throw new Error( 'THREE.GLTFLoader: WebP required by asset but unsupported.' );

  			}

  			// Fall back to PNG or JPEG.
  			return parser.loadTexture( textureIndex );

  		} );

  	}

  	detectSupport() {

  		if ( ! this.isSupported ) {

  			this.isSupported = new Promise( function ( resolve ) {

  				const image = new Image();

  				// Lossy test image. Support for lossy images doesn't guarantee support for all
  				// WebP images, unfortunately.
  				image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

  				image.onload = image.onerror = function () {

  					resolve( image.height === 1 );

  				};

  			} );

  		}

  		return this.isSupported;

  	}

  }

  /**
  	* meshopt BufferView Compression Extension
  	*
  	* Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
  	*/
  class GLTFMeshoptCompression {

  	constructor( parser ) {

  		this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
  		this.parser = parser;

  	}

  	loadBufferView( index ) {

  		const json = this.parser.json;
  		const bufferView = json.bufferViews[ index ];

  		if ( bufferView.extensions && bufferView.extensions[ this.name ] ) {

  			const extensionDef = bufferView.extensions[ this.name ];

  			const buffer = this.parser.getDependency( 'buffer', extensionDef.buffer );
  			const decoder = this.parser.options.meshoptDecoder;

  			if ( ! decoder || ! decoder.supported ) {

  				if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

  					throw new Error( 'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files' );

  				} else {

  					// Assumes that the extension is optional and that fallback buffer data is present
  					return null;

  				}

  			}

  			return Promise.all( [ buffer, decoder.ready ] ).then( function ( res ) {

  				const byteOffset = extensionDef.byteOffset || 0;
  				const byteLength = extensionDef.byteLength || 0;

  				const count = extensionDef.count;
  				const stride = extensionDef.byteStride;

  				const result = new ArrayBuffer( count * stride );
  				const source = new Uint8Array( res[ 0 ], byteOffset, byteLength );

  				decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
  				return result;

  			} );

  		} else {

  			return null;

  		}

  	}

  }

  /* BINARY EXTENSION */
  const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
  const BINARY_EXTENSION_HEADER_LENGTH = 12;
  const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

  class GLTFBinaryExtension {

  	constructor( data ) {

  		this.name = EXTENSIONS.KHR_BINARY_GLTF;
  		this.content = null;
  		this.body = null;

  		const headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

  		this.header = {
  			magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
  			version: headerView.getUint32( 4, true ),
  			length: headerView.getUint32( 8, true )
  		};

  		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

  			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

  		} else if ( this.header.version < 2.0 ) {

  			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

  		}

  		const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
  		const chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
  		let chunkIndex = 0;

  		while ( chunkIndex < chunkContentsLength ) {

  			const chunkLength = chunkView.getUint32( chunkIndex, true );
  			chunkIndex += 4;

  			const chunkType = chunkView.getUint32( chunkIndex, true );
  			chunkIndex += 4;

  			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

  				const contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
  				this.content = THREE.LoaderUtils.decodeText( contentArray );

  			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

  				const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
  				this.body = data.slice( byteOffset, byteOffset + chunkLength );

  			}

  			// Clients must ignore chunks with unknown types.

  			chunkIndex += chunkLength;

  		}

  		if ( this.content === null ) {

  			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

  		}

  	}

  }

  /**
  	 * DRACO Mesh Compression Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
  	 */
  class GLTFDracoMeshCompressionExtension {

  	constructor( json, dracoLoader ) {

  		if ( ! dracoLoader ) {

  			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

  		}

  		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
  		this.json = json;
  		this.dracoLoader = dracoLoader;
  		this.dracoLoader.preload();

  	}

  	decodePrimitive( primitive, parser ) {

  		const json = this.json;
  		const dracoLoader = this.dracoLoader;
  		const bufferViewIndex = primitive.extensions[ this.name ].bufferView;
  		const gltfAttributeMap = primitive.extensions[ this.name ].attributes;
  		const threeAttributeMap = {};
  		const attributeNormalizedMap = {};
  		const attributeTypeMap = {};

  		for ( const attributeName in gltfAttributeMap ) {

  			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

  			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

  		}

  		for ( const attributeName in primitive.attributes ) {

  			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

  			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

  				const accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
  				const componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

  				attributeTypeMap[ threeAttributeName ] = componentType;
  				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

  			}

  		}

  		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

  			return new Promise( function ( resolve ) {

  				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

  					for ( const attributeName in geometry.attributes ) {

  						const attribute = geometry.attributes[ attributeName ];
  						const normalized = attributeNormalizedMap[ attributeName ];

  						if ( normalized !== undefined ) attribute.normalized = normalized;

  					}

  					resolve( geometry );

  				}, threeAttributeMap, attributeTypeMap );

  			} );

  		} );

  	}

  }

  /**
  	 * Texture Transform Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
  	 */
  class GLTFTextureTransformExtension {

  	constructor() {

  		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

  	}

  	extendTexture( texture, transform ) {

  		texture = texture.clone();

  		if ( transform.offset !== undefined ) {

  			texture.offset.fromArray( transform.offset );

  		}

  		if ( transform.rotation !== undefined ) {

  			texture.rotation = transform.rotation;

  		}

  		if ( transform.scale !== undefined ) {

  			texture.repeat.fromArray( transform.scale );

  		}

  		if ( transform.texCoord !== undefined ) {

  			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

  		}

  		texture.needsUpdate = true;

  		return texture;

  	}

  }

  /**
  	 * Specular-Glossiness Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
  	 */

  /**
  	 * A sub class of StandardMaterial with some of the functionality
  	 * changed via the `onBeforeCompile` callback
  	 * @pailhead
  	 */

  class GLTFMeshStandardSGMaterial extends THREE.MeshStandardMaterial {

  	constructor( params ) {

  		super();

  		this.isGLTFSpecularGlossinessMaterial = true;

  		//various chunks that need replacing
  		const specularMapParsFragmentChunk = [
  			'#ifdef USE_SPECULARMAP',
  			'	uniform sampler2D specularMap;',
  			'#endif'
  		].join( '\n' );

  		const glossinessMapParsFragmentChunk = [
  			'#ifdef USE_GLOSSINESSMAP',
  			'	uniform sampler2D glossinessMap;',
  			'#endif'
  		].join( '\n' );

  		const specularMapFragmentChunk = [
  			'vec3 specularFactor = specular;',
  			'#ifdef USE_SPECULARMAP',
  			'	vec4 texelSpecular = texture2D( specularMap, vUv );',
  			'	texelSpecular = sRGBToLinear( texelSpecular );',
  			'	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
  			'	specularFactor *= texelSpecular.rgb;',
  			'#endif'
  		].join( '\n' );

  		const glossinessMapFragmentChunk = [
  			'float glossinessFactor = glossiness;',
  			'#ifdef USE_GLOSSINESSMAP',
  			'	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
  			'	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
  			'	glossinessFactor *= texelGlossiness.a;',
  			'#endif'
  		].join( '\n' );

  		const lightPhysicalFragmentChunk = [
  			'PhysicalMaterial material;',
  			'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
  			'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
  			'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
  			'material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
  			'material.specularRoughness += geometryRoughness;',
  			'material.specularRoughness = min( material.specularRoughness, 1.0 );',
  			'material.specularColor = specularFactor;',
  		].join( '\n' );

  		const uniforms = {
  			specular: { value: new THREE.Color().setHex( 0xffffff ) },
  			glossiness: { value: 1 },
  			specularMap: { value: null },
  			glossinessMap: { value: null }
  		};

  		this._extraUniforms = uniforms;

  		this.onBeforeCompile = function ( shader ) {

  			for ( const uniformName in uniforms ) {

  				shader.uniforms[ uniformName ] = uniforms[ uniformName ];

  			}

  			shader.fragmentShader = shader.fragmentShader
  				.replace( 'uniform float roughness;', 'uniform vec3 specular;' )
  				.replace( 'uniform float metalness;', 'uniform float glossiness;' )
  				.replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
  				.replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
  				.replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
  				.replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
  				.replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

  		};

  		Object.defineProperties( this, {

  			specular: {
  				get: function () {

  					return uniforms.specular.value;

  				},
  				set: function ( v ) {

  					uniforms.specular.value = v;

  				}
  			},

  			specularMap: {
  				get: function () {

  					return uniforms.specularMap.value;

  				},
  				set: function ( v ) {

  					uniforms.specularMap.value = v;

  					if ( v ) {

  						this.defines.USE_SPECULARMAP = ''; // USE_UV is set by the renderer for specular maps

  					} else {

  						delete this.defines.USE_SPECULARMAP;

  					}

  				}
  			},

  			glossiness: {
  				get: function () {

  					return uniforms.glossiness.value;

  				},
  				set: function ( v ) {

  					uniforms.glossiness.value = v;

  				}
  			},

  			glossinessMap: {
  				get: function () {

  					return uniforms.glossinessMap.value;

  				},
  				set: function ( v ) {

  					uniforms.glossinessMap.value = v;

  					if ( v ) {

  						this.defines.USE_GLOSSINESSMAP = '';
  						this.defines.USE_UV = '';

  					} else {

  						delete this.defines.USE_GLOSSINESSMAP;
  						delete this.defines.USE_UV;

  					}

  				}
  			}

  		} );

  		delete this.metalness;
  		delete this.roughness;
  		delete this.metalnessMap;
  		delete this.roughnessMap;

  		this.setValues( params );

  	}

  	copy( source ) {

  		super.copy( source );

  		this.specularMap = source.specularMap;
  		this.specular.copy( source.specular );
  		this.glossinessMap = source.glossinessMap;
  		this.glossiness = source.glossiness;
  		delete this.metalness;
  		delete this.roughness;
  		delete this.metalnessMap;
  		delete this.roughnessMap;
  		return this;

  	}

  }


  class GLTFMaterialsPbrSpecularGlossinessExtension {

  	constructor() {

  		this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS;

  		this.specularGlossinessParams = [
  			'color',
  			'map',
  			'lightMap',
  			'lightMapIntensity',
  			'aoMap',
  			'aoMapIntensity',
  			'emissive',
  			'emissiveIntensity',
  			'emissiveMap',
  			'bumpMap',
  			'bumpScale',
  			'normalMap',
  			'normalMapType',
  			'displacementMap',
  			'displacementScale',
  			'displacementBias',
  			'specularMap',
  			'specular',
  			'glossinessMap',
  			'glossiness',
  			'alphaMap',
  			'envMap',
  			'envMapIntensity',
  			'refractionRatio',
  		];

  	}

  	getMaterialType() {

  		return GLTFMeshStandardSGMaterial;

  	}

  	extendParams( materialParams, materialDef, parser ) {

  		const pbrSpecularGlossiness = materialDef.extensions[ this.name ];

  		materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
  		materialParams.opacity = 1.0;

  		const pending = [];

  		if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

  			const array = pbrSpecularGlossiness.diffuseFactor;

  			materialParams.color.fromArray( array );
  			materialParams.opacity = array[ 3 ];

  		}

  		if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

  			pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

  		}

  		materialParams.emissive = new THREE.Color( 0.0, 0.0, 0.0 );
  		materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
  		materialParams.specular = new THREE.Color( 1.0, 1.0, 1.0 );

  		if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

  			materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

  		}

  		if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

  			const specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
  			pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
  			pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

  		}

  		return Promise.all( pending );

  	}

  	createMaterial( materialParams ) {

  		const material = new GLTFMeshStandardSGMaterial( materialParams );
  		material.fog = true;

  		material.color = materialParams.color;

  		material.map = materialParams.map === undefined ? null : materialParams.map;

  		material.lightMap = null;
  		material.lightMapIntensity = 1.0;

  		material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
  		material.aoMapIntensity = 1.0;

  		material.emissive = materialParams.emissive;
  		material.emissiveIntensity = 1.0;
  		material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;

  		material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
  		material.bumpScale = 1;

  		material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
  		material.normalMapType = THREE.TangentSpaceNormalMap;

  		if ( materialParams.normalScale ) material.normalScale = materialParams.normalScale;

  		material.displacementMap = null;
  		material.displacementScale = 1;
  		material.displacementBias = 0;

  		material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
  		material.specular = materialParams.specular;

  		material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
  		material.glossiness = materialParams.glossiness;

  		material.alphaMap = null;

  		material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
  		material.envMapIntensity = 1.0;

  		material.refractionRatio = 0.98;

  		return material;

  	}

  }

  /**
  	 * Mesh Quantization Extension
  	 *
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
  	 */
  class GLTFMeshQuantizationExtension {

  	constructor() {

  		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

  	}

  }

  /*********************************/
  /********** INTERPOLATION ********/
  /*********************************/

  // Spline Interpolation
  // Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
  class GLTFCubicSplineInterpolant extends THREE.Interpolant {

  	constructor( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

  		super( parameterPositions, sampleValues, sampleSize, resultBuffer );

  	}

  	copySampleValue_( index ) {

  		// Copies a sample value to the result buffer. See description of glTF
  		// CUBICSPLINE values layout in interpolate_() function below.

  		const result = this.resultBuffer,
  			values = this.sampleValues,
  			valueSize = this.valueSize,
  			offset = index * valueSize * 3 + valueSize;

  		for ( let i = 0; i !== valueSize; i ++ ) {

  			result[ i ] = values[ offset + i ];

  		}

  		return result;

  	}

  }

  GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

  GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

  GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

  	const result = this.resultBuffer;
  	const values = this.sampleValues;
  	const stride = this.valueSize;

  	const stride2 = stride * 2;
  	const stride3 = stride * 3;

  	const td = t1 - t0;

  	const p = ( t - t0 ) / td;
  	const pp = p * p;
  	const ppp = pp * p;

  	const offset1 = i1 * stride3;
  	const offset0 = offset1 - stride3;

  	const s2 = - 2 * ppp + 3 * pp;
  	const s3 = ppp - pp;
  	const s0 = 1 - s2;
  	const s1 = s3 - pp + p;

  	// Layout of keyframe output values for CUBICSPLINE animations:
  	//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
  	for ( let i = 0; i !== stride; i ++ ) {

  		const p0 = values[ offset0 + i + stride ]; // splineVertex_k
  		const m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
  		const p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
  		const m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

  		result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

  	}

  	return result;

  };

  /*********************************/
  /********** INTERNALS ************/
  /*********************************/

  /* CONSTANTS */

  const WEBGL_CONSTANTS = {
  	FLOAT: 5126,
  	//FLOAT_MAT2: 35674,
  	FLOAT_MAT3: 35675,
  	FLOAT_MAT4: 35676,
  	FLOAT_VEC2: 35664,
  	FLOAT_VEC3: 35665,
  	FLOAT_VEC4: 35666,
  	LINEAR: 9729,
  	REPEAT: 10497,
  	SAMPLER_2D: 35678,
  	POINTS: 0,
  	LINES: 1,
  	LINE_LOOP: 2,
  	LINE_STRIP: 3,
  	TRIANGLES: 4,
  	TRIANGLE_STRIP: 5,
  	TRIANGLE_FAN: 6,
  	UNSIGNED_BYTE: 5121,
  	UNSIGNED_SHORT: 5123
  };

  const WEBGL_COMPONENT_TYPES = {
  	5120: Int8Array,
  	5121: Uint8Array,
  	5122: Int16Array,
  	5123: Uint16Array,
  	5125: Uint32Array,
  	5126: Float32Array
  };

  const WEBGL_FILTERS = {
  	9728: THREE.NearestFilter,
  	9729: THREE.LinearFilter,
  	9984: THREE.NearestMipmapNearestFilter,
  	9985: THREE.LinearMipmapNearestFilter,
  	9986: THREE.NearestMipmapLinearFilter,
  	9987: THREE.LinearMipmapLinearFilter
  };

  const WEBGL_WRAPPINGS = {
  	33071: THREE.ClampToEdgeWrapping,
  	33648: THREE.MirroredRepeatWrapping,
  	10497: THREE.RepeatWrapping
  };

  const WEBGL_TYPE_SIZES = {
  	'SCALAR': 1,
  	'VEC2': 2,
  	'VEC3': 3,
  	'VEC4': 4,
  	'MAT2': 4,
  	'MAT3': 9,
  	'MAT4': 16
  };

  const ATTRIBUTES = {
  	POSITION: 'position',
  	NORMAL: 'normal',
  	TANGENT: 'tangent',
  	TEXCOORD_0: 'uv',
  	TEXCOORD_1: 'uv2',
  	COLOR_0: 'color',
  	WEIGHTS_0: 'skinWeight',
  	JOINTS_0: 'skinIndex',
  };

  const PATH_PROPERTIES = {
  	scale: 'scale',
  	translation: 'position',
  	rotation: 'quaternion',
  	weights: 'morphTargetInfluences'
  };

  const INTERPOLATION = {
  	CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  		                        // keyframe track will be initialized with a default interpolation type, then modified.
  	LINEAR: THREE.InterpolateLinear,
  	STEP: THREE.InterpolateDiscrete
  };

  const ALPHA_MODES = {
  	OPAQUE: 'OPAQUE',
  	MASK: 'MASK',
  	BLEND: 'BLEND'
  };

  /* UTILITY FUNCTIONS */

  function resolveURL( url, path ) {

  	// Invalid URL
  	if ( typeof url !== 'string' || url === '' ) return '';

  	// Host Relative URL
  	if ( /^https?:\/\//i.test( path ) && /^\//.test( url ) ) {

  		path = path.replace( /(^https?:\/\/[^\/]+).*/i, '$1' );

  	}

  	// Absolute URL http://,https://,//
  	if ( /^(https?:)?\/\//i.test( url ) ) return url;

  	// Data URI
  	if ( /^data:.*,.*$/i.test( url ) ) return url;

  	// Blob URL
  	if ( /^blob:.*$/i.test( url ) ) return url;

  	// Relative URL
  	return path + url;

  }

  /**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
  	 */
  function createDefaultMaterial( cache ) {

  	if ( cache[ 'DefaultMaterial' ] === undefined ) {

  		cache[ 'DefaultMaterial' ] = new THREE.MeshStandardMaterial( {
  			color: 0xFFFFFF,
  			emissive: 0x000000,
  			metalness: 1,
  			roughness: 1,
  			transparent: false,
  			depthTest: true,
  			side: THREE.FrontSide
  		} );

  	}

  	return cache[ 'DefaultMaterial' ];

  }

  function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

  	// Add unknown glTF extensions to an object's userData.

  	for ( const name in objectDef.extensions ) {

  		if ( knownExtensions[ name ] === undefined ) {

  			object.userData.gltfExtensions = object.userData.gltfExtensions || {};
  			object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

  		}

  	}

  }

  /**
  	 * @param {Object3D|Material|BufferGeometry} object
  	 * @param {GLTF.definition} gltfDef
  	 */
  function assignExtrasToUserData( object, gltfDef ) {

  	if ( gltfDef.extras !== undefined ) {

  		if ( typeof gltfDef.extras === 'object' ) {

  			Object.assign( object.userData, gltfDef.extras );

  		} else {

  			console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

  		}

  	}

  }

  /**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
  	 *
  	 * @param {BufferGeometry} geometry
  	 * @param {Array<GLTF.Target>} targets
  	 * @param {GLTFParser} parser
  	 * @return {Promise<BufferGeometry>}
  	 */
  function addMorphTargets( geometry, targets, parser ) {

  	let hasMorphPosition = false;
  	let hasMorphNormal = false;

  	for ( let i = 0, il = targets.length; i < il; i ++ ) {

  		const target = targets[ i ];

  		if ( target.POSITION !== undefined ) hasMorphPosition = true;
  		if ( target.NORMAL !== undefined ) hasMorphNormal = true;

  		if ( hasMorphPosition && hasMorphNormal ) break;

  	}

  	if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

  	const pendingPositionAccessors = [];
  	const pendingNormalAccessors = [];

  	for ( let i = 0, il = targets.length; i < il; i ++ ) {

  		const target = targets[ i ];

  		if ( hasMorphPosition ) {

  			const pendingAccessor = target.POSITION !== undefined
  				? parser.getDependency( 'accessor', target.POSITION )
  				: geometry.attributes.position;

  			pendingPositionAccessors.push( pendingAccessor );

  		}

  		if ( hasMorphNormal ) {

  			const pendingAccessor = target.NORMAL !== undefined
  				? parser.getDependency( 'accessor', target.NORMAL )
  				: geometry.attributes.normal;

  			pendingNormalAccessors.push( pendingAccessor );

  		}

  	}

  	return Promise.all( [
  		Promise.all( pendingPositionAccessors ),
  		Promise.all( pendingNormalAccessors )
  	] ).then( function ( accessors ) {

  		const morphPositions = accessors[ 0 ];
  		const morphNormals = accessors[ 1 ];

  		if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
  		if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
  		geometry.morphTargetsRelative = true;

  		return geometry;

  	} );

  }

  /**
  	 * @param {Mesh} mesh
  	 * @param {GLTF.Mesh} meshDef
  	 */
  function updateMorphTargets( mesh, meshDef ) {

  	mesh.updateMorphTargets();

  	if ( meshDef.weights !== undefined ) {

  		for ( let i = 0, il = meshDef.weights.length; i < il; i ++ ) {

  			mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

  		}

  	}

  	// .extras has user-defined data, so check that .extras.targetNames is an array.
  	if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

  		const targetNames = meshDef.extras.targetNames;

  		if ( mesh.morphTargetInfluences.length === targetNames.length ) {

  			mesh.morphTargetDictionary = {};

  			for ( let i = 0, il = targetNames.length; i < il; i ++ ) {

  				mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

  			}

  		} else {

  			console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

  		}

  	}

  }

  function createPrimitiveKey( primitiveDef ) {

  	const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
  	let geometryKey;

  	if ( dracoExtension ) {

  		geometryKey = 'draco:' + dracoExtension.bufferView
  				+ ':' + dracoExtension.indices
  				+ ':' + createAttributesKey( dracoExtension.attributes );

  	} else {

  		geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

  	}

  	return geometryKey;

  }

  function createAttributesKey( attributes ) {

  	let attributesKey = '';

  	const keys = Object.keys( attributes ).sort();

  	for ( let i = 0, il = keys.length; i < il; i ++ ) {

  		attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

  	}

  	return attributesKey;

  }

  function getNormalizedComponentScale( constructor ) {

  	// Reference:
  	// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data

  	switch ( constructor ) {

  		case Int8Array:
  			return 1 / 127;

  		case Uint8Array:
  			return 1 / 255;

  		case Int16Array:
  			return 1 / 32767;

  		case Uint16Array:
  			return 1 / 65535;

  		default:
  			throw new Error( 'THREE.GLTFLoader: Unsupported normalized accessor component type.' );

  	}

  }

  /* GLTF PARSER */

  class GLTFParser {

  	constructor( json = {}, options = {} ) {

  		this.json = json;
  		this.extensions = {};
  		this.plugins = {};
  		this.options = options;

  		// loader object cache
  		this.cache = new GLTFRegistry();

  		// associations between Three.js objects and glTF elements
  		this.associations = new Map();

  		// BufferGeometry caching
  		this.primitiveCache = {};

  		// Object3D instance caches
  		this.meshCache = { refs: {}, uses: {} };
  		this.cameraCache = { refs: {}, uses: {} };
  		this.lightCache = { refs: {}, uses: {} };

  		// Track node names, to ensure no duplicates
  		this.nodeNamesUsed = {};

  		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
  		// expensive work of uploading a texture to the GPU off the main thread.
  		if ( typeof createImageBitmap !== 'undefined' && /Firefox/.test( navigator.userAgent ) === false ) {

  			this.textureLoader = new THREE.ImageBitmapLoader( this.options.manager );

  		} else {

  			this.textureLoader = new THREE.TextureLoader( this.options.manager );

  		}

  		this.textureLoader.setCrossOrigin( this.options.crossOrigin );
  		this.textureLoader.setRequestHeader( this.options.requestHeader );

  		this.fileLoader = new THREE.FileLoader( this.options.manager );
  		this.fileLoader.setResponseType( 'arraybuffer' );

  		if ( this.options.crossOrigin === 'use-credentials' ) {

  			this.fileLoader.setWithCredentials( true );

  		}

  	}

  	setExtensions( extensions ) {

  		this.extensions = extensions;

  	}

  	setPlugins( plugins ) {

  		this.plugins = plugins;

  	}

  	parse( onLoad, onError ) {

  		const parser = this;
  		const json = this.json;
  		const extensions = this.extensions;

  		// Clear the loader cache
  		this.cache.removeAll();

  		// Mark the special nodes/meshes in json for efficient parse
  		this._invokeAll( function ( ext ) {

  			return ext._markDefs && ext._markDefs();

  		} );

  		Promise.all( this._invokeAll( function ( ext ) {

  			return ext.beforeRoot && ext.beforeRoot();

  		} ) ).then( function () {

  			return Promise.all( [

  				parser.getDependencies( 'scene' ),
  				parser.getDependencies( 'animation' ),
  				parser.getDependencies( 'camera' ),

  			] );

  		} ).then( function ( dependencies ) {

  			const result = {
  				scene: dependencies[ 0 ][ json.scene || 0 ],
  				scenes: dependencies[ 0 ],
  				animations: dependencies[ 1 ],
  				cameras: dependencies[ 2 ],
  				asset: json.asset,
  				parser: parser,
  				userData: {}
  			};

  			addUnknownExtensionsToUserData( extensions, result, json );

  			assignExtrasToUserData( result, json );

  			Promise.all( parser._invokeAll( function ( ext ) {

  				return ext.afterRoot && ext.afterRoot( result );

  			} ) ).then( function () {

  				onLoad( result );

  			} );

  		} ).catch( onError );

  	}

  	/**
  	 * Marks the special nodes/meshes in json for efficient parse.
  	 */
  	_markDefs() {

  		const nodeDefs = this.json.nodes || [];
  		const skinDefs = this.json.skins || [];
  		const meshDefs = this.json.meshes || [];

  		// Nothing in the node definition indicates whether it is a Bone or an
  		// Object3D. Use the skins' joint references to mark bones.
  		for ( let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

  			const joints = skinDefs[ skinIndex ].joints;

  			for ( let i = 0, il = joints.length; i < il; i ++ ) {

  				nodeDefs[ joints[ i ] ].isBone = true;

  			}

  		}

  		// Iterate over all nodes, marking references to shared resources,
  		// as well as skeleton joints.
  		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

  			const nodeDef = nodeDefs[ nodeIndex ];

  			if ( nodeDef.mesh !== undefined ) {

  				this._addNodeRef( this.meshCache, nodeDef.mesh );

  				// Nothing in the mesh definition indicates whether it is
  				// a SkinnedMesh or Mesh. Use the node's mesh reference
  				// to mark SkinnedMesh if node has skin.
  				if ( nodeDef.skin !== undefined ) {

  					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

  				}

  			}

  			if ( nodeDef.camera !== undefined ) {

  				this._addNodeRef( this.cameraCache, nodeDef.camera );

  			}

  		}

  	}

  	/**
  	 * Counts references to shared node / Object3D resources. These resources
  	 * can be reused, or "instantiated", at multiple nodes in the scene
  	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
  	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
  	 * Textures) can be reused directly and are not marked here.
  	 *
  	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
  	 */
  	_addNodeRef( cache, index ) {

  		if ( index === undefined ) return;

  		if ( cache.refs[ index ] === undefined ) {

  			cache.refs[ index ] = cache.uses[ index ] = 0;

  		}

  		cache.refs[ index ] ++;

  	}

  	/** Returns a reference to a shared resource, cloning it if necessary. */
  	_getNodeRef( cache, index, object ) {

  		if ( cache.refs[ index ] <= 1 ) return object;

  		const ref = object.clone();

  		ref.name += '_instance_' + ( cache.uses[ index ] ++ );

  		return ref;

  	}

  	_invokeOne( func ) {

  		const extensions = Object.values( this.plugins );
  		extensions.push( this );

  		for ( let i = 0; i < extensions.length; i ++ ) {

  			const result = func( extensions[ i ] );

  			if ( result ) return result;

  		}

  		return null;

  	}

  	_invokeAll( func ) {

  		const extensions = Object.values( this.plugins );
  		extensions.unshift( this );

  		const pending = [];

  		for ( let i = 0; i < extensions.length; i ++ ) {

  			const result = func( extensions[ i ] );

  			if ( result ) pending.push( result );

  		}

  		return pending;

  	}

  	/**
  	 * Requests the specified dependency asynchronously, with caching.
  	 * @param {string} type
  	 * @param {number} index
  	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
  	 */
  	getDependency( type, index ) {

  		const cacheKey = type + ':' + index;
  		let dependency = this.cache.get( cacheKey );

  		if ( ! dependency ) {

  			switch ( type ) {

  				case 'scene':
  					dependency = this.loadScene( index );
  					break;

  				case 'node':
  					dependency = this.loadNode( index );
  					break;

  				case 'mesh':
  					dependency = this._invokeOne( function ( ext ) {

  						return ext.loadMesh && ext.loadMesh( index );

  					} );
  					break;

  				case 'accessor':
  					dependency = this.loadAccessor( index );
  					break;

  				case 'bufferView':
  					dependency = this._invokeOne( function ( ext ) {

  						return ext.loadBufferView && ext.loadBufferView( index );

  					} );
  					break;

  				case 'buffer':
  					dependency = this.loadBuffer( index );
  					break;

  				case 'material':
  					dependency = this._invokeOne( function ( ext ) {

  						return ext.loadMaterial && ext.loadMaterial( index );

  					} );
  					break;

  				case 'texture':
  					dependency = this._invokeOne( function ( ext ) {

  						return ext.loadTexture && ext.loadTexture( index );

  					} );
  					break;

  				case 'skin':
  					dependency = this.loadSkin( index );
  					break;

  				case 'animation':
  					dependency = this.loadAnimation( index );
  					break;

  				case 'camera':
  					dependency = this.loadCamera( index );
  					break;

  				default:
  					throw new Error( 'Unknown type: ' + type );

  			}

  			this.cache.add( cacheKey, dependency );

  		}

  		return dependency;

  	}

  	/**
  	 * Requests all dependencies of the specified type asynchronously, with caching.
  	 * @param {string} type
  	 * @return {Promise<Array<Object>>}
  	 */
  	getDependencies( type ) {

  		let dependencies = this.cache.get( type );

  		if ( ! dependencies ) {

  			const parser = this;
  			const defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

  			dependencies = Promise.all( defs.map( function ( def, index ) {

  				return parser.getDependency( type, index );

  			} ) );

  			this.cache.add( type, dependencies );

  		}

  		return dependencies;

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
  	 * @param {number} bufferIndex
  	 * @return {Promise<ArrayBuffer>}
  	 */
  	loadBuffer( bufferIndex ) {

  		const bufferDef = this.json.buffers[ bufferIndex ];
  		const loader = this.fileLoader;

  		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

  			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

  		}

  		// If present, GLB container is required to be the first buffer.
  		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

  			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

  		}

  		const options = this.options;

  		return new Promise( function ( resolve, reject ) {

  			loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

  				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

  			} );

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
  	 * @param {number} bufferViewIndex
  	 * @return {Promise<ArrayBuffer>}
  	 */
  	loadBufferView( bufferViewIndex ) {

  		const bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

  		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

  			const byteLength = bufferViewDef.byteLength || 0;
  			const byteOffset = bufferViewDef.byteOffset || 0;
  			return buffer.slice( byteOffset, byteOffset + byteLength );

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
  	 * @param {number} accessorIndex
  	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
  	 */
  	loadAccessor( accessorIndex ) {

  		const parser = this;
  		const json = this.json;

  		const accessorDef = this.json.accessors[ accessorIndex ];

  		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

  			// Ignore empty accessors, which may be used to declare runtime
  			// information about attributes coming from another source (e.g. Draco
  			// compression extension).
  			return Promise.resolve( null );

  		}

  		const pendingBufferViews = [];

  		if ( accessorDef.bufferView !== undefined ) {

  			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

  		} else {

  			pendingBufferViews.push( null );

  		}

  		if ( accessorDef.sparse !== undefined ) {

  			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
  			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

  		}

  		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

  			const bufferView = bufferViews[ 0 ];

  			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
  			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

  			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
  			const elementBytes = TypedArray.BYTES_PER_ELEMENT;
  			const itemBytes = elementBytes * itemSize;
  			const byteOffset = accessorDef.byteOffset || 0;
  			const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
  			const normalized = accessorDef.normalized === true;
  			let array, bufferAttribute;

  			// The buffer is not interleaved if the stride is the item size in bytes.
  			if ( byteStride && byteStride !== itemBytes ) {

  				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
  				// This makes sure that IBA.count reflects accessor.count properly
  				const ibSlice = Math.floor( byteOffset / byteStride );
  				const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
  				let ib = parser.cache.get( ibCacheKey );

  				if ( ! ib ) {

  					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

  					// Integer parameters to IB/IBA are in array elements, not bytes.
  					ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

  					parser.cache.add( ibCacheKey, ib );

  				}

  				bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

  			} else {

  				if ( bufferView === null ) {

  					array = new TypedArray( accessorDef.count * itemSize );

  				} else {

  					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

  				}

  				bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

  			}

  			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
  			if ( accessorDef.sparse !== undefined ) {

  				const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
  				const TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

  				const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
  				const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

  				const sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
  				const sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

  				if ( bufferView !== null ) {

  					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
  					bufferAttribute = new THREE.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

  				}

  				for ( let i = 0, il = sparseIndices.length; i < il; i ++ ) {

  					const index = sparseIndices[ i ];

  					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
  					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
  					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
  					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
  					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

  				}

  			}

  			return bufferAttribute;

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
  	 * @param {number} textureIndex
  	 * @return {Promise<THREE.Texture>}
  	 */
  	loadTexture( textureIndex ) {

  		const json = this.json;
  		const options = this.options;
  		const textureDef = json.textures[ textureIndex ];
  		const source = json.images[ textureDef.source ];

  		let loader = this.textureLoader;

  		if ( source.uri ) {

  			const handler = options.manager.getHandler( source.uri );
  			if ( handler !== null ) loader = handler;

  		}

  		return this.loadTextureImage( textureIndex, source, loader );

  	}

  	loadTextureImage( textureIndex, source, loader ) {

  		const parser = this;
  		const json = this.json;
  		const options = this.options;

  		const textureDef = json.textures[ textureIndex ];

  		const URL = self.URL || self.webkitURL;

  		let sourceURI = source.uri;
  		let isObjectURL = false;
  		let hasAlpha = true;

  		if ( source.mimeType === 'image/jpeg' ) hasAlpha = false;

  		if ( source.bufferView !== undefined ) {

  			// Load binary image data from bufferView, if provided.

  			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

  				if ( source.mimeType === 'image/png' ) {

  					// Inspect the PNG 'IHDR' chunk to determine whether the image could have an
  					// alpha channel. This check is conservative — the image could have an alpha
  					// channel with all values == 1, and the indexed type (colorType == 3) only
  					// sometimes contains alpha.
  					//
  					// https://en.wikipedia.org/wiki/Portable_Network_Graphics#File_header
  					const colorType = new DataView( bufferView, 25, 1 ).getUint8( 0, false );
  					hasAlpha = colorType === 6 || colorType === 4 || colorType === 3;

  				}

  				isObjectURL = true;
  				const blob = new Blob( [ bufferView ], { type: source.mimeType } );
  				sourceURI = URL.createObjectURL( blob );
  				return sourceURI;

  			} );

  		} else if ( source.uri === undefined ) {

  			throw new Error( 'THREE.GLTFLoader: Image ' + textureIndex + ' is missing URI and bufferView' );

  		}

  		return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

  			return new Promise( function ( resolve, reject ) {

  				let onLoad = resolve;

  				if ( loader.isImageBitmapLoader === true ) {

  					onLoad = function ( imageBitmap ) {

  						resolve( new THREE.CanvasTexture( imageBitmap ) );

  					};

  				}

  				loader.load( resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

  			} );

  		} ).then( function ( texture ) {

  			// Clean up resources and configure Texture.

  			if ( isObjectURL === true ) {

  				URL.revokeObjectURL( sourceURI );

  			}

  			texture.flipY = false;

  			if ( textureDef.name ) texture.name = textureDef.name;

  			// When there is definitely no alpha channel in the texture, set RGBFormat to save space.
  			if ( ! hasAlpha ) texture.format = THREE.RGBFormat;

  			const samplers = json.samplers || {};
  			const sampler = samplers[ textureDef.sampler ] || {};

  			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || THREE.LinearFilter;
  			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || THREE.LinearMipmapLinearFilter;
  			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || THREE.RepeatWrapping;
  			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || THREE.RepeatWrapping;

  			parser.associations.set( texture, {
  				type: 'textures',
  				index: textureIndex
  			} );

  			return texture;

  		} );

  	}

  	/**
  	 * Asynchronously assigns a texture to the given material parameters.
  	 * @param {Object} materialParams
  	 * @param {string} mapName
  	 * @param {Object} mapDef
  	 * @return {Promise}
  	 */
  	assignTexture( materialParams, mapName, mapDef ) {

  		const parser = this;

  		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

  			// Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
  			// However, we will copy UV set 0 to UV set 1 on demand for aoMap
  			if ( mapDef.texCoord !== undefined && mapDef.texCoord != 0 && ! ( mapName === 'aoMap' && mapDef.texCoord == 1 ) ) {

  				console.warn( 'THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.' );

  			}

  			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

  				const transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

  				if ( transform ) {

  					const gltfReference = parser.associations.get( texture );
  					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
  					parser.associations.set( texture, gltfReference );

  				}

  			}

  			materialParams[ mapName ] = texture;

  		} );

  	}

  	/**
  	 * Assigns final material to a Mesh, Line, or Points instance. The instance
  	 * already has a material (generated from the glTF material options alone)
  	 * but reuse of the same glTF material may require multiple threejs materials
  	 * to accommodate different primitive types, defines, etc. New materials will
  	 * be created if necessary, and reused from a cache.
  	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
  	 */
  	assignFinalMaterial( mesh ) {

  		const geometry = mesh.geometry;
  		let material = mesh.material;

  		const useVertexTangents = geometry.attributes.tangent !== undefined;
  		const useVertexColors = geometry.attributes.color !== undefined;
  		const useFlatShading = geometry.attributes.normal === undefined;
  		const useSkinning = mesh.isSkinnedMesh === true;
  		const useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
  		const useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

  		if ( mesh.isPoints ) {

  			const cacheKey = 'PointsMaterial:' + material.uuid;

  			let pointsMaterial = this.cache.get( cacheKey );

  			if ( ! pointsMaterial ) {

  				pointsMaterial = new THREE.PointsMaterial();
  				THREE.Material.prototype.copy.call( pointsMaterial, material );
  				pointsMaterial.color.copy( material.color );
  				pointsMaterial.map = material.map;
  				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

  				this.cache.add( cacheKey, pointsMaterial );

  			}

  			material = pointsMaterial;

  		} else if ( mesh.isLine ) {

  			const cacheKey = 'LineBasicMaterial:' + material.uuid;

  			let lineMaterial = this.cache.get( cacheKey );

  			if ( ! lineMaterial ) {

  				lineMaterial = new THREE.LineBasicMaterial();
  				THREE.Material.prototype.copy.call( lineMaterial, material );
  				lineMaterial.color.copy( material.color );

  				this.cache.add( cacheKey, lineMaterial );

  			}

  			material = lineMaterial;

  		}

  		// Clone the material if it will be modified
  		if ( useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

  			let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

  			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
  			if ( useSkinning ) cacheKey += 'skinning:';
  			if ( useVertexTangents ) cacheKey += 'vertex-tangents:';
  			if ( useVertexColors ) cacheKey += 'vertex-colors:';
  			if ( useFlatShading ) cacheKey += 'flat-shading:';
  			if ( useMorphTargets ) cacheKey += 'morph-targets:';
  			if ( useMorphNormals ) cacheKey += 'morph-normals:';

  			let cachedMaterial = this.cache.get( cacheKey );

  			if ( ! cachedMaterial ) {

  				cachedMaterial = material.clone();

  				if ( useSkinning ) cachedMaterial.skinning = true;
  				if ( useVertexColors ) cachedMaterial.vertexColors = true;
  				if ( useFlatShading ) cachedMaterial.flatShading = true;
  				if ( useMorphTargets ) cachedMaterial.morphTargets = true;
  				if ( useMorphNormals ) cachedMaterial.morphNormals = true;

  				if ( useVertexTangents ) {

  					cachedMaterial.vertexTangents = true;

  					// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
  					if ( cachedMaterial.normalScale ) cachedMaterial.normalScale.y *= - 1;
  					if ( cachedMaterial.clearcoatNormalScale ) cachedMaterial.clearcoatNormalScale.y *= - 1;

  				}

  				this.cache.add( cacheKey, cachedMaterial );

  				this.associations.set( cachedMaterial, this.associations.get( material ) );

  			}

  			material = cachedMaterial;

  		}

  		// workarounds for mesh and geometry

  		if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

  			geometry.setAttribute( 'uv2', geometry.attributes.uv );

  		}

  		mesh.material = material;

  	}

  	getMaterialType( /* materialIndex */ ) {

  		return THREE.MeshStandardMaterial;

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
  	 * @param {number} materialIndex
  	 * @return {Promise<Material>}
  	 */
  	loadMaterial( materialIndex ) {

  		const parser = this;
  		const json = this.json;
  		const extensions = this.extensions;
  		const materialDef = json.materials[ materialIndex ];

  		let materialType;
  		const materialParams = {};
  		const materialExtensions = materialDef.extensions || {};

  		const pending = [];

  		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

  			const sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
  			materialType = sgExtension.getMaterialType();
  			pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

  		} else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

  			const kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
  			materialType = kmuExtension.getMaterialType();
  			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

  		} else {

  			// Specification:
  			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

  			const metallicRoughness = materialDef.pbrMetallicRoughness || {};

  			materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
  			materialParams.opacity = 1.0;

  			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

  				const array = metallicRoughness.baseColorFactor;

  				materialParams.color.fromArray( array );
  				materialParams.opacity = array[ 3 ];

  			}

  			if ( metallicRoughness.baseColorTexture !== undefined ) {

  				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

  			}

  			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
  			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

  			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

  				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
  				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

  			}

  			materialType = this._invokeOne( function ( ext ) {

  				return ext.getMaterialType && ext.getMaterialType( materialIndex );

  			} );

  			pending.push( Promise.all( this._invokeAll( function ( ext ) {

  				return ext.extendMaterialParams && ext.extendMaterialParams( materialIndex, materialParams );

  			} ) ) );

  		}

  		if ( materialDef.doubleSided === true ) {

  			materialParams.side = THREE.DoubleSide;

  		}

  		const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

  		if ( alphaMode === ALPHA_MODES.BLEND ) {

  			materialParams.transparent = true;

  			// See: https://github.com/mrdoob/three.js/issues/17706
  			materialParams.depthWrite = false;

  		} else {

  			materialParams.transparent = false;

  			if ( alphaMode === ALPHA_MODES.MASK ) {

  				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

  			}

  		}

  		if ( materialDef.normalTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

  			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

  			// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
  			materialParams.normalScale = new THREE.Vector2( 1, - 1 );

  			if ( materialDef.normalTexture.scale !== undefined ) {

  				materialParams.normalScale.set( materialDef.normalTexture.scale, - materialDef.normalTexture.scale );

  			}

  		}

  		if ( materialDef.occlusionTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

  			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

  			if ( materialDef.occlusionTexture.strength !== undefined ) {

  				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

  			}

  		}

  		if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

  			materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

  		}

  		if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

  			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

  		}

  		return Promise.all( pending ).then( function () {

  			let material;

  			if ( materialType === GLTFMeshStandardSGMaterial ) {

  				material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

  			} else {

  				material = new materialType( materialParams );

  			}

  			if ( materialDef.name ) material.name = materialDef.name;

  			// baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
  			if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
  			if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;

  			assignExtrasToUserData( material, materialDef );

  			parser.associations.set( material, { type: 'materials', index: materialIndex } );

  			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

  			return material;

  		} );

  	}

  	/** When Object3D instances are targeted by animation, they need unique names. */
  	createUniqueName( originalName ) {

  		const sanitizedName = THREE.PropertyBinding.sanitizeNodeName( originalName || '' );

  		let name = sanitizedName;

  		for ( let i = 1; this.nodeNamesUsed[ name ]; ++ i ) {

  			name = sanitizedName + '_' + i;

  		}

  		this.nodeNamesUsed[ name ] = true;

  		return name;

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
  	 *
  	 * Creates BufferGeometries from primitives.
  	 *
  	 * @param {Array<GLTF.Primitive>} primitives
  	 * @return {Promise<Array<BufferGeometry>>}
  	 */
  	loadGeometries( primitives ) {

  		const parser = this;
  		const extensions = this.extensions;
  		const cache = this.primitiveCache;

  		function createDracoPrimitive( primitive ) {

  			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
  				.decodePrimitive( primitive, parser )
  				.then( function ( geometry ) {

  					return addPrimitiveAttributes( geometry, primitive, parser );

  				} );

  		}

  		const pending = [];

  		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

  			const primitive = primitives[ i ];
  			const cacheKey = createPrimitiveKey( primitive );

  			// See if we've already created this geometry
  			const cached = cache[ cacheKey ];

  			if ( cached ) {

  				// Use the cached geometry if it exists
  				pending.push( cached.promise );

  			} else {

  				let geometryPromise;

  				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

  					// Use DRACO geometry if available
  					geometryPromise = createDracoPrimitive( primitive );

  				} else {

  					// Otherwise create a new geometry
  					geometryPromise = addPrimitiveAttributes( new THREE.BufferGeometry(), primitive, parser );

  				}

  				// Cache this geometry
  				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

  				pending.push( geometryPromise );

  			}

  		}

  		return Promise.all( pending );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
  	 * @param {number} meshIndex
  	 * @return {Promise<Group|Mesh|SkinnedMesh>}
  	 */
  	loadMesh( meshIndex ) {

  		const parser = this;
  		const json = this.json;
  		const extensions = this.extensions;

  		const meshDef = json.meshes[ meshIndex ];
  		const primitives = meshDef.primitives;

  		const pending = [];

  		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

  			const material = primitives[ i ].material === undefined
  				? createDefaultMaterial( this.cache )
  				: this.getDependency( 'material', primitives[ i ].material );

  			pending.push( material );

  		}

  		pending.push( parser.loadGeometries( primitives ) );

  		return Promise.all( pending ).then( function ( results ) {

  			const materials = results.slice( 0, results.length - 1 );
  			const geometries = results[ results.length - 1 ];

  			const meshes = [];

  			for ( let i = 0, il = geometries.length; i < il; i ++ ) {

  				const geometry = geometries[ i ];
  				const primitive = primitives[ i ];

  				// 1. create Mesh

  				let mesh;

  				const material = materials[ i ];

  				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
  						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
  						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
  						primitive.mode === undefined ) {

  					// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
  					mesh = meshDef.isSkinnedMesh === true
  						? new THREE.SkinnedMesh( geometry, material )
  						: new THREE.Mesh( geometry, material );

  					if ( mesh.isSkinnedMesh === true && ! mesh.geometry.attributes.skinWeight.normalized ) {

  						// we normalize floating point skin weight array to fix malformed assets (see #15319)
  						// it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
  						mesh.normalizeSkinWeights();

  					}

  					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

  						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleStripDrawMode );

  					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

  						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleFanDrawMode );

  					}

  				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

  					mesh = new THREE.LineSegments( geometry, material );

  				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

  					mesh = new THREE.Line( geometry, material );

  				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

  					mesh = new THREE.LineLoop( geometry, material );

  				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

  					mesh = new THREE.Points( geometry, material );

  				} else {

  					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

  				}

  				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

  					updateMorphTargets( mesh, meshDef );

  				}

  				mesh.name = parser.createUniqueName( meshDef.name || ( 'mesh_' + meshIndex ) );

  				assignExtrasToUserData( mesh, meshDef );

  				if ( primitive.extensions ) addUnknownExtensionsToUserData( extensions, mesh, primitive );

  				parser.assignFinalMaterial( mesh );

  				meshes.push( mesh );

  			}

  			if ( meshes.length === 1 ) {

  				return meshes[ 0 ];

  			}

  			const group = new THREE.Group();

  			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

  				group.add( meshes[ i ] );

  			}

  			return group;

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
  	 * @param {number} cameraIndex
  	 * @return {Promise<THREE.Camera>}
  	 */
  	loadCamera( cameraIndex ) {

  		let camera;
  		const cameraDef = this.json.cameras[ cameraIndex ];
  		const params = cameraDef[ cameraDef.type ];

  		if ( ! params ) {

  			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
  			return;

  		}

  		if ( cameraDef.type === 'perspective' ) {

  			camera = new THREE.PerspectiveCamera( THREE.MathUtils.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

  		} else if ( cameraDef.type === 'orthographic' ) {

  			camera = new THREE.OrthographicCamera( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

  		}

  		if ( cameraDef.name ) camera.name = this.createUniqueName( cameraDef.name );

  		assignExtrasToUserData( camera, cameraDef );

  		return Promise.resolve( camera );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
  	 * @param {number} skinIndex
  	 * @return {Promise<Object>}
  	 */
  	loadSkin( skinIndex ) {

  		const skinDef = this.json.skins[ skinIndex ];

  		const skinEntry = { joints: skinDef.joints };

  		if ( skinDef.inverseBindMatrices === undefined ) {

  			return Promise.resolve( skinEntry );

  		}

  		return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

  			skinEntry.inverseBindMatrices = accessor;

  			return skinEntry;

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
  	 * @param {number} animationIndex
  	 * @return {Promise<AnimationClip>}
  	 */
  	loadAnimation( animationIndex ) {

  		const json = this.json;

  		const animationDef = json.animations[ animationIndex ];

  		const pendingNodes = [];
  		const pendingInputAccessors = [];
  		const pendingOutputAccessors = [];
  		const pendingSamplers = [];
  		const pendingTargets = [];

  		for ( let i = 0, il = animationDef.channels.length; i < il; i ++ ) {

  			const channel = animationDef.channels[ i ];
  			const sampler = animationDef.samplers[ channel.sampler ];
  			const target = channel.target;
  			const name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
  			const input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
  			const output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

  			pendingNodes.push( this.getDependency( 'node', name ) );
  			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
  			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
  			pendingSamplers.push( sampler );
  			pendingTargets.push( target );

  		}

  		return Promise.all( [

  			Promise.all( pendingNodes ),
  			Promise.all( pendingInputAccessors ),
  			Promise.all( pendingOutputAccessors ),
  			Promise.all( pendingSamplers ),
  			Promise.all( pendingTargets )

  		] ).then( function ( dependencies ) {

  			const nodes = dependencies[ 0 ];
  			const inputAccessors = dependencies[ 1 ];
  			const outputAccessors = dependencies[ 2 ];
  			const samplers = dependencies[ 3 ];
  			const targets = dependencies[ 4 ];

  			const tracks = [];

  			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

  				const node = nodes[ i ];
  				const inputAccessor = inputAccessors[ i ];
  				const outputAccessor = outputAccessors[ i ];
  				const sampler = samplers[ i ];
  				const target = targets[ i ];

  				if ( node === undefined ) continue;

  				node.updateMatrix();
  				node.matrixAutoUpdate = true;

  				let TypedKeyframeTrack;

  				switch ( PATH_PROPERTIES[ target.path ] ) {

  					case PATH_PROPERTIES.weights:

  						TypedKeyframeTrack = THREE.NumberKeyframeTrack;
  						break;

  					case PATH_PROPERTIES.rotation:

  						TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
  						break;

  					case PATH_PROPERTIES.position:
  					case PATH_PROPERTIES.scale:
  					default:

  						TypedKeyframeTrack = THREE.VectorKeyframeTrack;
  						break;

  				}

  				const targetName = node.name ? node.name : node.uuid;

  				const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : THREE.InterpolateLinear;

  				const targetNames = [];

  				if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

  					// Node may be a Group (glTF mesh with several primitives) or a Mesh.
  					node.traverse( function ( object ) {

  						if ( object.isMesh === true && object.morphTargetInfluences ) {

  							targetNames.push( object.name ? object.name : object.uuid );

  						}

  					} );

  				} else {

  					targetNames.push( targetName );

  				}

  				let outputArray = outputAccessor.array;

  				if ( outputAccessor.normalized ) {

  					const scale = getNormalizedComponentScale( outputArray.constructor );
  					const scaled = new Float32Array( outputArray.length );

  					for ( let j = 0, jl = outputArray.length; j < jl; j ++ ) {

  						scaled[ j ] = outputArray[ j ] * scale;

  					}

  					outputArray = scaled;

  				}

  				for ( let j = 0, jl = targetNames.length; j < jl; j ++ ) {

  					const track = new TypedKeyframeTrack(
  						targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
  						inputAccessor.array,
  						outputArray,
  						interpolation
  					);

  					// Override interpolation with custom factory method.
  					if ( sampler.interpolation === 'CUBICSPLINE' ) {

  						track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

  							// A CUBICSPLINE keyframe in glTF has three output values for each input value,
  							// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
  							// must be divided by three to get the interpolant's sampleSize argument.

  							return new GLTFCubicSplineInterpolant( this.times, this.values, this.getValueSize() / 3, result );

  						};

  						// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
  						track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

  					}

  					tracks.push( track );

  				}

  			}

  			const name = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

  			return new THREE.AnimationClip( name, undefined, tracks );

  		} );

  	}

  	createNodeMesh( nodeIndex ) {

  		const json = this.json;
  		const parser = this;
  		const nodeDef = json.nodes[ nodeIndex ];

  		if ( nodeDef.mesh === undefined ) return null;

  		return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

  			const node = parser._getNodeRef( parser.meshCache, nodeDef.mesh, mesh );

  			// if weights are provided on the node, override weights on the mesh.
  			if ( nodeDef.weights !== undefined ) {

  				node.traverse( function ( o ) {

  					if ( ! o.isMesh ) return;

  					for ( let i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

  						o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

  					}

  				} );

  			}

  			return node;

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
  	 * @param {number} nodeIndex
  	 * @return {Promise<Object3D>}
  	 */
  	loadNode( nodeIndex ) {

  		const json = this.json;
  		const extensions = this.extensions;
  		const parser = this;

  		const nodeDef = json.nodes[ nodeIndex ];

  		// reserve node's name before its dependencies, so the root has the intended name.
  		const nodeName = nodeDef.name ? parser.createUniqueName( nodeDef.name ) : '';

  		return ( function () {

  			const pending = [];

  			const meshPromise = parser._invokeOne( function ( ext ) {

  				return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

  			} );

  			if ( meshPromise ) {

  				pending.push( meshPromise );

  			}

  			if ( nodeDef.camera !== undefined ) {

  				pending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

  					return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

  				} ) );

  			}

  			parser._invokeAll( function ( ext ) {

  				return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

  			} ).forEach( function ( promise ) {

  				pending.push( promise );

  			} );

  			return Promise.all( pending );

  		}() ).then( function ( objects ) {

  			let node;

  			// .isBone isn't in glTF spec. See ._markDefs
  			if ( nodeDef.isBone === true ) {

  				node = new THREE.Bone();

  			} else if ( objects.length > 1 ) {

  				node = new THREE.Group();

  			} else if ( objects.length === 1 ) {

  				node = objects[ 0 ];

  			} else {

  				node = new THREE.Object3D();

  			}

  			if ( node !== objects[ 0 ] ) {

  				for ( let i = 0, il = objects.length; i < il; i ++ ) {

  					node.add( objects[ i ] );

  				}

  			}

  			if ( nodeDef.name ) {

  				node.userData.name = nodeDef.name;
  				node.name = nodeName;

  			}

  			assignExtrasToUserData( node, nodeDef );

  			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

  			if ( nodeDef.matrix !== undefined ) {

  				const matrix = new THREE.Matrix4();
  				matrix.fromArray( nodeDef.matrix );
  				node.applyMatrix4( matrix );

  			} else {

  				if ( nodeDef.translation !== undefined ) {

  					node.position.fromArray( nodeDef.translation );

  				}

  				if ( nodeDef.rotation !== undefined ) {

  					node.quaternion.fromArray( nodeDef.rotation );

  				}

  				if ( nodeDef.scale !== undefined ) {

  					node.scale.fromArray( nodeDef.scale );

  				}

  			}

  			parser.associations.set( node, { type: 'nodes', index: nodeIndex } );

  			return node;

  		} );

  	}

  	/**
  	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
  	 * @param {number} sceneIndex
  	 * @return {Promise<Group>}
  	 */
  	loadScene( sceneIndex ) {

  		const json = this.json;
  		const extensions = this.extensions;
  		const sceneDef = this.json.scenes[ sceneIndex ];
  		const parser = this;

  		// Loader returns Group, not Scene.
  		// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
  		const scene = new THREE.Group();
  		if ( sceneDef.name ) scene.name = parser.createUniqueName( sceneDef.name );

  		assignExtrasToUserData( scene, sceneDef );

  		if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

  		const nodeIds = sceneDef.nodes || [];

  		const pending = [];

  		for ( let i = 0, il = nodeIds.length; i < il; i ++ ) {

  			pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

  		}

  		return Promise.all( pending ).then( function () {

  			return scene;

  		} );

  	}

  }

  function buildNodeHierachy( nodeId, parentObject, json, parser ) {

  	const nodeDef = json.nodes[ nodeId ];

  	return parser.getDependency( 'node', nodeId ).then( function ( node ) {

  		if ( nodeDef.skin === undefined ) return node;

  		// build skeleton here as well

  		let skinEntry;

  		return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

  			skinEntry = skin;

  			const pendingJoints = [];

  			for ( let i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

  				pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

  			}

  			return Promise.all( pendingJoints );

  		} ).then( function ( jointNodes ) {

  			node.traverse( function ( mesh ) {

  				if ( ! mesh.isMesh ) return;

  				const bones = [];
  				const boneInverses = [];

  				for ( let j = 0, jl = jointNodes.length; j < jl; j ++ ) {

  					const jointNode = jointNodes[ j ];

  					if ( jointNode ) {

  						bones.push( jointNode );

  						const mat = new THREE.Matrix4();

  						if ( skinEntry.inverseBindMatrices !== undefined ) {

  							mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

  						}

  						boneInverses.push( mat );

  					} else {

  						console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

  					}

  				}

  				mesh.bind( new THREE.Skeleton( bones, boneInverses ), mesh.matrixWorld );

  			} );

  			return node;

  		} );

  	} ).then( function ( node ) {

  		// build node hierachy

  		parentObject.add( node );

  		const pending = [];

  		if ( nodeDef.children ) {

  			const children = nodeDef.children;

  			for ( let i = 0, il = children.length; i < il; i ++ ) {

  				const child = children[ i ];
  				pending.push( buildNodeHierachy( child, node, json, parser ) );

  			}

  		}

  		return Promise.all( pending );

  	} );

  }

  /**
   * @param {BufferGeometry} geometry
   * @param {GLTF.Primitive} primitiveDef
   * @param {GLTFParser} parser
   */
  function computeBounds( geometry, primitiveDef, parser ) {

  	const attributes = primitiveDef.attributes;

  	const box = new THREE.Box3();

  	if ( attributes.POSITION !== undefined ) {

  		const accessor = parser.json.accessors[ attributes.POSITION ];

  		const min = accessor.min;
  		const max = accessor.max;

  		// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

  		if ( min !== undefined && max !== undefined ) {

  			box.set(
  				new THREE.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
  				new THREE.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] )
  			);

  			if ( accessor.normalized ) {

  				const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
  				box.min.multiplyScalar( boxScale );
  				box.max.multiplyScalar( boxScale );

  			}

  		} else {

  			console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

  			return;

  		}

  	} else {

  		return;

  	}

  	const targets = primitiveDef.targets;

  	if ( targets !== undefined ) {

  		const maxDisplacement = new THREE.Vector3();
  		const vector = new THREE.Vector3();

  		for ( let i = 0, il = targets.length; i < il; i ++ ) {

  			const target = targets[ i ];

  			if ( target.POSITION !== undefined ) {

  				const accessor = parser.json.accessors[ target.POSITION ];
  				const min = accessor.min;
  				const max = accessor.max;

  				// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

  				if ( min !== undefined && max !== undefined ) {

  					// we need to get max of absolute components because target weight is [-1,1]
  					vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
  					vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
  					vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );


  					if ( accessor.normalized ) {

  						const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
  						vector.multiplyScalar( boxScale );

  					}

  					// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
  					// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
  					// are used to implement key-frame animations and as such only two are active at a time - this results in very large
  					// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
  					maxDisplacement.max( vector );

  				} else {

  					console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

  				}

  			}

  		}

  		// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
  		box.expandByVector( maxDisplacement );

  	}

  	geometry.boundingBox = box;

  	const sphere = new THREE.Sphere();

  	box.getCenter( sphere.center );
  	sphere.radius = box.min.distanceTo( box.max ) / 2;

  	geometry.boundingSphere = sphere;

  }

  /**
   * @param {BufferGeometry} geometry
   * @param {GLTF.Primitive} primitiveDef
   * @param {GLTFParser} parser
   * @return {Promise<BufferGeometry>}
   */
  function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

  	const attributes = primitiveDef.attributes;

  	const pending = [];

  	function assignAttributeAccessor( accessorIndex, attributeName ) {

  		return parser.getDependency( 'accessor', accessorIndex )
  			.then( function ( accessor ) {

  				geometry.setAttribute( attributeName, accessor );

  			} );

  	}

  	for ( const gltfAttributeName in attributes ) {

  		const threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

  		// Skip attributes already provided by e.g. Draco extension.
  		if ( threeAttributeName in geometry.attributes ) continue;

  		pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

  	}

  	if ( primitiveDef.indices !== undefined && ! geometry.index ) {

  		const accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

  			geometry.setIndex( accessor );

  		} );

  		pending.push( accessor );

  	}

  	assignExtrasToUserData( geometry, primitiveDef );

  	computeBounds( geometry, primitiveDef, parser );

  	return Promise.all( pending ).then( function () {

  		return primitiveDef.targets !== undefined
  			? addMorphTargets( geometry, primitiveDef.targets, parser )
  			: geometry;

  	} );

  }

  /**
   * @param {BufferGeometry} geometry
   * @param {Number} drawMode
   * @return {BufferGeometry}
   */
  function toTrianglesDrawMode( geometry, drawMode ) {

  	let index = geometry.getIndex();

  	// generate index if not present

  	if ( index === null ) {

  		const indices = [];

  		const position = geometry.getAttribute( 'position' );

  		if ( position !== undefined ) {

  			for ( let i = 0; i < position.count; i ++ ) {

  				indices.push( i );

  			}

  			geometry.setIndex( indices );
  			index = geometry.getIndex();

  		} else {

  			console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
  			return geometry;

  		}

  	}

  	//

  	const numberOfTriangles = index.count - 2;
  	const newIndices = [];

  	if ( drawMode === THREE.TriangleFanDrawMode ) {

  		// gl.TRIANGLE_FAN

  		for ( let i = 1; i <= numberOfTriangles; i ++ ) {

  			newIndices.push( index.getX( 0 ) );
  			newIndices.push( index.getX( i ) );
  			newIndices.push( index.getX( i + 1 ) );

  		}

  	} else {

  		// gl.TRIANGLE_STRIP

  		for ( let i = 0; i < numberOfTriangles; i ++ ) {

  			if ( i % 2 === 0 ) {

  				newIndices.push( index.getX( i ) );
  				newIndices.push( index.getX( i + 1 ) );
  				newIndices.push( index.getX( i + 2 ) );


  			} else {

  				newIndices.push( index.getX( i + 2 ) );
  				newIndices.push( index.getX( i + 1 ) );
  				newIndices.push( index.getX( i ) );

  			}

  		}

  	}

  	if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

  		console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

  	}

  	// build final geometry

  	const newGeometry = geometry.clone();
  	newGeometry.setIndex( newIndices );

  	return newGeometry;

  }

  /**
   * Function to center object on its bounding box
   *
   * An object created in blender may not have its origin at the object's
   * physical center, and this can be annoying when, say, you want to rotate
   * that object. This function will shift the object relative to its parent
   * coordinate system so that its center is at the parent's origin; that means
   * you can then e.g. rotate the parent to get a realistic/useful rotation effect
   * on this object
   */

  function centerOnBoundingBox(object) {
    // ----------------------------------------------------->>>
    // Get center of boundingBox
    var boundingBox = new THREE.Box3().setFromObject(object);

    var _boundingBox$getCente = boundingBox.getCenter(new THREE.Vector3()).toArray(),
        x2 = _boundingBox$getCente[0],
        y2 = _boundingBox$getCente[1],
        z2 = _boundingBox$getCente[2]; // Move object to where center was


    var _object$position$clon = object.position.clone().toArray(),
        x1 = _object$position$clon[0],
        y1 = _object$position$clon[1],
        z1 = _object$position$clon[2];

    object.position.set(x1 - x2, y1 - y2, z1 - z2);
  }

  /**
   * Simple function to ensure all children receive and cast shadows
   */
  function enshadowChildren(object) {
    object.traverse(function (child) {
      if (child.type === 'Mesh') {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  /**
   * Function to scale an object so that the child with the largest bounding-sphere radius
   * will end up with a bounding sphere radius equal to the supplied targetRadius
   */

  function resizeThreejsObject(object, targetRadius) {
    // --------------------------------------------------------------------------->>>
    var biggestSphereRadius = Math.pow(10, -10);
    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.geometry.computeBoundingSphere(); // Need to run this, else `child.geometry.boundingSphere.radius` will be undefined

        if (!!child.geometry && !!child.geometry.boundingSphere && child.geometry.boundingSphere.radius > biggestSphereRadius) {
          biggestSphereRadius = child.geometry.boundingSphere.radius;
        }
      }
    });
    var s = targetRadius / biggestSphereRadius;
    object.scale.set(s, s, s);
  }

  function gltfLoader(gltfUrl, targetRadius, isCenteredOnBoundingBox, isShadowShown) {
    // ----------------->>>
    return new Promise(function (resolve, reject) {
      new GLTFLoader().load(gltfUrl, function (gltf) {
        var object = gltf.scene;
        if (!!targetRadius) resizeThreejsObject(object, targetRadius);
        if (!!isCenteredOnBoundingBox) centerOnBoundingBox(object);
        if (!!isShadowShown) enshadowChildren(object);
        setTimeout(function () {
          return resolve(object);
        }, delayMs);
      }, function (xhr) {
        return !true ;
      }, function (error) {
        console.log('Loading error occurred:', error.message);
        reject();
      });
    });
  }

  var METERS_IN_AU = 149597870700;
  var SECONDS_IN_DAY = 86400;
  var EPHEM_VALID_ATTRS_ARR = ['a', 'e', 'i', 'q', 'epoch', 'period', 'tp', 'ma', 'n', 'L', 'om', 'w', 'wBar', 'GM'];
  var EPHEM_VALID_ATTRS = /*#__PURE__*/new Set(EPHEM_VALID_ATTRS_ARR); // Which of these are angular measurements.

  var ANGLE_UNITS = /*#__PURE__*/new Set(['i', 'ma', 'n', 'L', 'om', 'w', 'wBar']); // Returns true if object is defined.

  function isDef(obj) {
    return typeof obj !== 'undefined';
  }
  /**
   * A class representing Kepler ephemerides.
   * @example
   * const NEPTUNE = new Ephem({
   *   epoch: 2458426.500000000,
   *   a: 3.009622263428050E+01,
   *   e: 7.362571187193770E-03,
   *   i: 1.774569249829094E+00,
   *   om: 1.318695882492132E+02,
   *   w: 2.586226409499831E+02,
   *   ma: 3.152804988924479E+02,
   * }, 'deg'),
   */


  var SKEphem = /*#__PURE__*/function () {
    // a?: number; // Semimajor axis
    // e?: number; // Eccentricity
    // i?: number; // Inclination
    // epoch?: number; // Epoch in JD
    // period?: number; // Period in days
    // ma?: number; // Mean anomaly
    // n?: number; // Mean motion
    // L?: number; // Mean longitude
    // om?: number; // Longitude of Ascending Node
    // w?: number; // Argument of Perihelion
    // wBar?: number; // Longitude of Perihelion
    // GM?: number; // Standard gravitational parameter in km^3/s^2.
    function SKEphem(initialValues, units, locked) {
      var _this = this;

      if (units === void 0) {
        units = 'rad';
      }

      if (locked === void 0) {
        locked = false;
      }

      this._locked = false;
      this._attrs = _extends({}, initialValues);
      this._locked = false; // let attr: keyof TInitialValues;
      // for (attr in initialValues) {
      //   if (!!initialValues[attr]) {
      //     const actualUnits = ANGLE_UNITS.has(attr) ? units : undefined;
      //     const x = initialValues[attr];
      //     if (x) this.set(attr, x, actualUnits);
      //   }
      // }

      if (!!initialValues) {
        Object.keys(initialValues).forEach(function (key) {
          var actualUnits = ANGLE_UNITS.has(key) ? units : undefined;
          var val = initialValues[key];
          if (val) _this.set(key, val, actualUnits);
        });
      }

      if (typeof this._attrs.GM === 'undefined') {
        this._attrs.GM = GM.SUN;
      }

      this.fill();

      if (this.get('e') > 0.9 && typeof this.get('tp') === 'undefined') {
        console.warn('You must specify "tp" (time of perihelion) for highly eccentric orbits');
      }

      this._locked = locked;
    }
    /**
     * Sets an ephemerides attribute.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {Number} val The value of the attribute (e.g. 0.5)
     * @param {'deg'|'rad'} units The unit of angle provided, if applicable.
     */


    var _proto = SKEphem.prototype;

    _proto.set = function set(attr, val, units) {
      if (units === void 0) {
        units = 'rad';
      }

      if (this._locked) {
        throw new Error('Attempted to modify locked (immutable) Ephem object');
      }

      if (!EPHEM_VALID_ATTRS.has(attr)) {
        console.warn("Invalid ephem attr: " + attr);
        return false;
      } // Store everything in radians.


      if (units === 'deg') {
        this._attrs[attr] = val * Math.PI / 180;
      } else {
        this._attrs[attr] = val;
      }

      return true;
    }
    /**
     * Gets an ephemerides attribute.
     * @param {String} attr The name of the attribute (e.g. 'a')
     * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
     * input is ignored for values that are not angle measurements.
     */
    ;

    _proto.get = function get(attr, units) {
      if (units === void 0) {
        units = 'rad';
      }

      // --->>>
      var val = this._attrs[attr]; // if (!val && units !== 'deg') throw new Error('Poor logic to allow non angle attr here');

      return units === 'deg' ? val * 180 / Math.PI : val;
    }
    /**
     * @private
     * Infers values of some ephemerides attributes if the required information
     * is available.
     */
    ;

    _proto.fill = function fill() {
      // Perihelion distance and semimajor axis
      var e = this.get('e');

      if (!isDef(e)) {
        throw new Error('Must define eccentricity "e" in an orbit');
      } // Semimajor axis and perihelion distance


      var a = this.get('a');
      var q = this.get('q');

      if (isDef(a)) {
        if (!isDef(q)) {
          if (e >= 1.0) {
            throw new Error('Must provide perihelion distance "q" if eccentricity "e" is greater than 1');
          }

          q = a * (1.0 - e);
          this.set('q', q);
        }
      } else if (isDef(q)) {
        a = q / (1.0 - e);
        this.set('a', a);
      } else {
        throw new Error('Must define semimajor axis "a" or perihelion distance "q" in an orbit');
      } // Longitude/Argument of Perihelion and Long. of Ascending Node


      var w = this.get('w');
      var wBar = this.get('wBar');
      var om = this.get('om');

      if (isDef(w) && isDef(om) && !isDef(wBar)) {
        wBar = w + om;
        this.set('wBar', wBar);
      } else if (isDef(wBar) && isDef(om) && !isDef(w)) {
        w = wBar - om;
        this.set('w', w);
      } else if (isDef(w) && isDef(wBar) && !isDef(om)) {
        om = wBar - w;
        this.set('om', om);
      } // Mean motion and period


      var aMeters = a * METERS_IN_AU;
      var n = this.get('n');
      var GM = this.get('GM');
      var period = this.get('period');

      if (!isDef(period) && isDef(a)) {
        period = 2 * Math.PI * Math.sqrt(aMeters * aMeters * aMeters / GM) / SECONDS_IN_DAY;
        this.set('period', period);
      }

      if (e < 1.0) {
        // Only work with mean motion for elliptical orbits.
        if (isDef(period) && !isDef(n)) {
          // Set radians
          var newN = 2.0 * Math.PI / period;
          this.set('n', newN);
        } else if (isDef(n) && !isDef(period)) {
          this.set('period', 2.0 * Math.PI / n);
        }
      } // Mean longitude


      var ma = this.get('ma');
      var L = this.get('L');

      if (!isDef(L) && isDef(om) && isDef(w) && isDef(ma)) {
        L = om + w + ma;
        this.set('L', L);
      } // Mean anomaly


      if (!isDef(ma)) {
        // MA = Mean longitude - Longitude of perihelion
        this.set('ma', L - wBar);
      } //  TODO(ian): Handle no om

    }
    /**
     * Make this ephem object immutable.
     */
    ;

    _proto.lock = function lock() {
      this._locked = true;
    };

    _proto.copy = function copy() {
      return new SKEphem({
        GM: this.get('GM'),
        epoch: this.get('epoch'),
        a: this.get('a'),
        e: this.get('e'),
        i: this.get('i'),
        om: this.get('om'),
        ma: this.get('ma'),
        w: this.get('w')
      }, 'rad');
    };

    return SKEphem;
  }();
  /**
   * Standard gravitational parameter for objects orbiting these bodies.
   * Units in m^3/s^2
   */

  var GM = {
    // See https://space.stackexchange.com/questions/22948/where-to-find-the-best-values-for-standard-gravitational-parameters-of-solar-sys and https://naif.jpl.nasa.gov/pub/naif/generic_kernels/pck/gm_de431.tpc
    SUN: 1.3271244004193938e20,
    MERCURY: 2.2031780000000021e13,
    VENUS: 3.2485859200000006e14,
    EARTH_MOON: 4.0350323550225981e14,
    MARS: 4.2828375214000022e13,
    JUPITER: 1.2671276480000021e17,
    SATURN: 3.7940585200000003e16,
    URANUS: 5.794548600000008e15,
    NEPTUNE: 6.8365271005800236e15,
    PLUTO_CHARON: 9.7700000000000068e11
  };

  /**
   * A dictionary containing ephemerides of planets and other well-known objects.
   * @example
   * const planet1 = viz.createObject('planet1', {
   *   ephem: EphemPresets.MERCURY,
   * });
   */

  var EphemPresets = {
    // See https://ssd.jpl.nasa.gov/?planet_pos and https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
    MERCURY: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 3.870968969437096e-1,
      e: 2.056515875393916e-1,
      i: 7.003891682749818,
      om: 4.830774804443502e1,
      w: 2.917940253442659e1,
      ma: 2.56190975209273e2
    }, 'deg', true
    /* locked */
    ),
    VENUS: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 7.233458663591554e-1,
      e: 6.762510759617694e-3,
      i: 3.394567787211735,
      om: 7.662534150657346e1,
      w: 5.474567447560867e1,
      ma: 2.756687596099721e2
    }, 'deg', true
    /* locked */
    ),
    EARTH: /*#__PURE__*/new SKEphem({
      // Taken from https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html

      /*
      epoch: 2451545.0,
      a: 1.00000011,
      e: 0.01671022,
      i: 0.00005,
      om: -11.26064,
      wBar: 102.94719,
      L: 100.46435,
      */
      // https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
      epoch: 2451545.0,
      a: 1.00000261,
      e: 0.01671123,
      i: -0.00001531,
      om: 0.0,
      wBar: 102.93768193,
      L: 100.46457166
    }, 'deg', true
    /* locked */
    ),
    MOON: /*#__PURE__*/new SKEphem({
      // https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html
      GM: 0.3986e6,
      // Geocentric
      // https://ssd.jpl.nasa.gov/horizons.cgi#results
      epoch: 2458621.5,
      a: 2.582517063772124e-3,
      e: 4.582543645168888e-2,
      i: 5.102060246928811,
      om: 1.085916732144811e2,
      w: 6.180561793729225e1,
      ma: 5.053270083636792e1
    }, 'deg', true
    /* locked */
    ),
    MARS: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 1.52371401537107,
      e: 9.336741335309606e-2,
      i: 1.848141099825311,
      om: 4.950420572080223e1,
      w: 2.866965847685386e2,
      ma: 2.538237617924876e1
    }, 'deg', true
    /* locked */
    ),
    ///
    CERES: /*#__PURE__*/new SKEphem({
      // Sources:
      // https://www.princeton.edu/~willman/planetary_systems/Sol/Ceres/
      // https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)
      epoch: 2458600.5,
      a: 2.7658,
      e: 0.078,
      i: 10.607,
      om: 80.7,
      w: 73.1,
      ma: 77.37209589
    }, 'deg', true
    /* locked */
    ),
    ///
    JUPITER: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 5.20180355911023,
      e: 4.89912558249006e-2,
      i: 1.303560894624275,
      om: 1.005203828847816e2,
      w: 2.73736301845404e2,
      ma: 2.31939544389401e2
    }, 'deg', true
    /* locked */
    ),
    SATURN: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 9.577177295536776,
      e: 5.101889921719987e-2,
      i: 2.482782449972317,
      om: 1.136154964073247e2,
      w: 3.394422648650336e2,
      ma: 1.870970898012944e2
    }, 'deg', true
    /* locked */
    ),
    URANUS: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 1.914496966635462e1,
      e: 4.832662948112808e-2,
      i: 7.697511134483724e-1,
      om: 7.414239045667875e1,
      w: 9.942704504702185e1,
      ma: 2.202603033874267e2
    }, 'deg', true
    /* locked */
    ),
    NEPTUNE: /*#__PURE__*/new SKEphem({
      epoch: 2458426.5,
      a: 3.00962226342805e1,
      e: 7.36257118719377e-3,
      i: 1.774569249829094,
      om: 1.318695882492132e2,
      w: 2.586226409499831e2,
      ma: 3.152804988924479e2
    }, 'deg', true
    /* locked */
    ),
    PLUTO: /*#__PURE__*/new SKEphem({
      epoch: 2454000.5,
      a: 39.4450697257,
      e: 0.250248713478,
      i: 17.0890009196,
      om: 110.376957955,
      w: 112.597141677,
      ma: 25.2471897122
    }, 'deg', true
    /* locked */
    ),
    HAUMEA: /*#__PURE__*/new SKEphem({
      epoch: 2459200.5,
      a: 43.116,
      e: 0.19642,
      i: 28.2137,
      om: 122.167,
      w: 239.041,
      ma: 218.205
    }, 'deg', true
    /* locked */
    ),
    MAKEMAKE: /*#__PURE__*/new SKEphem({
      epoch: 2458900.5,
      a: 45.43,
      e: 0.16126,
      i: 28.9835,
      om: 79.62,
      w: 294.834,
      ma: 165.514
    }, 'deg', true
    /* locked */
    ),
    ERIS: /*#__PURE__*/new SKEphem({
      epoch: 2459000.5,
      a: 67.864,
      e: 0.43607,
      i: 44.04,
      om: 35.951,
      w: 151.639,
      ma: 205.989
    }, 'deg', true
    /* locked */
    )
  }; // a?: number; // Semimajor axis
  // e?: number; // Eccentricity
  // i?: number; // Inclination
  // epoch?: number; // Epoch in JD
  // period?: number; // Period in days
  // ma?: number; // Mean anomaly
  // n?: number; // Mean motion
  // L?: number; // Mean longitude
  // om?: number; // Longitude of Ascending Node ===> "Node" in MPC asteroids
  // w?: number; // Argument of Perihelion ===> "Peri" in MPC asteroids
  // wBar?: number; // Longitude of Perihelion
  // GM?: number; // Standard gravitational parameter in km^3/s^2.

  var scaleFactor = 1.0;
  function rescaleArray(XYZ) {
    return [XYZ[0] * scaleFactor, XYZ[1] * scaleFactor, XYZ[2] * scaleFactor];
  }
  function rescaleXYZ(X, Y, Z) {
    return [X * scaleFactor, Y * scaleFactor, Z * scaleFactor];
  }

  /**
   * Interpolates the given 2D array of data using a Lagrange Polynomial interpolation. User specifies first/last row
   * versus giving a number of sample points and a starting index. For best performance number of points generally would
   * be between 1 (linear) and 7
   *
   * @param {Array} data array
   * @param {Number} xValue value of x to evaluate for function y = f(x) represented by the data
   * @param {Number} sampleRowMin first row of data to use for the interpolation
   * @param {Number} sampleRowMax last row of data to use for the interpolation
   * @param {Number} xIndex the column of data which represents the 'x' variable of y = f(x)
   * @param {Number} yIndex the column of data which represents the 'y' curve data of y = f(x)
   * @returns {Number} the interpolated value of the function f(x) from the data
   */
  function interpolate(data, xValue, sampleRowMin, sampleRowMax, xIndex, yIndex) {
    if (data === undefined) {
      throw 'data object is undefined';
    }

    if (!Array.isArray(data)) {
      throw 'data object must be an array';
    }

    if (sampleRowMin >= sampleRowMax) {
      throw 'first row must be greater than last row';
    }

    if (sampleRowMin < 0) {
      throw 'first row must be greater than zero';
    }

    if (sampleRowMax > data.length - 1) {
      throw 'last row must be ';
    }

    if (!Array.isArray(data[sampleRowMin])) {
      throw 'data in rows must be array data';
    }

    var maxColumn = data[0].length - 1;

    if (xIndex < 0 || xIndex > maxColumn) {
      throw "xIndex has to be between 0 and " + maxColumn + ": " + xIndex;
    }

    if (yIndex < 0 || yIndex > maxColumn) {
      throw "yIndex has to be between 0 and " + maxColumn + ": " + yIndex;
    }

    var sum = 0;

    for (var j = sampleRowMin; j <= sampleRowMax; j++) {
      var prod = 1;

      for (var k = sampleRowMin; k <= sampleRowMax; k++) {
        if (k === j) {
          continue;
        }

        prod *= (xValue - data[k][xIndex]) / (data[j][xIndex] - data[k][xIndex]);
      }

      sum += prod * data[j][yIndex];
    }

    return sum;
  }

  function kmToAu(km) {
    return km / 149597870.7;
  }

  var DEFAULT_COMPARER_METHOD = function DEFAULT_COMPARER_METHOD(a, b) {
    return a - b;
  };
  /**
   * Performs a standard binary search on an array of values returning the index of the found item or the twos complement
   * negative of the closest value if the exact value isn't found. For example for array: [10, 20, 30]
   *   * Searching for a value of 20 would return an index of 1
   *   * Searching for a value of 12 would return a value of -2 (taking the two's complement back '~' give you 1)
   * @param {Array} data an array of values of the type consistent with the comparer method
   * @param value the value to be searched for in the data array
   * @param {Function} [comparer] a function which takes two arguments: first of same type as data row and second as same
   * time as value to compare. Default method is a numerical comparison
   * @returns {number}
   */

  function binarySearch(data, value, comparer) {
    if (comparer === void 0) {
      comparer = DEFAULT_COMPARER_METHOD;
    }

    if (data === undefined) {
      throw 'data object is undefined';
    }

    if (!Array.isArray(data)) {
      throw 'data object must be an array';
    }

    if (value === undefined) {
      throw 'value object must be defined';
    }

    if (comparer === undefined) {
      throw 'comparer must be defined';
    }

    var left = 0;
    var right = data.length;

    while (left <= right) {
      var middle = Math.floor((left + right) / 2);

      if (middle === data.length) {
        return middle;
      }

      var comparisonCalc = comparer(data[middle], value);

      if (comparisonCalc < 0) {
        left = middle + 1;
      } else if (comparisonCalc > 0) {
        right = middle - 1;
      } else {
        return middle;
      }
    }

    return ~left;
  }

  /**
   * A class representing an ephemeris look-up table for defining a space object.
   * @example
   */
  // Constants

  var MAX_INTERPOLATION_ORDER = 20;

  var INCREASING_JDATE_SEARCH_METHOD = function INCREASING_JDATE_SEARCH_METHOD(a, b) {
    return a[0] - b;
  }; //Default Values


  var DEFAULT_UNITS = {
    distance: 'au',
    time: 'day'
  };
  var DEFAULT_EPHEM_TYPE = 'cartesianposvel';
  var DEFAULT_INTERPOLATION_TYPE = 'lagrange';
  var DEFAULT_INTERPOLATION_ORDER = 5; //Allowable unit types

  var DISTANCE_UNITS = /*#__PURE__*/new Set(['km', 'au']);
  var EPHEM_TYPES = /*#__PURE__*/new Set(['cartesianposvel']);
  var INTERPOLATION_TYPES = /*#__PURE__*/new Set(['lagrange']);
  var TIME_UNITS = /*#__PURE__*/new Set(['day', 'sec']);
  /**
   * This class encapsulates the data and necessary methods for operating with look up ephemeris data.
   * Users of the class pass in their ephemeris data as a data structure with the data and the settings for the ephemeris.
   * The settings include things like the units, and the ephemeris representation. The ephemeris data itself is an array
   * of arrays where each line constitute the necessary components of the line.
   *
   * For 'cartesianposvel' style ephemeris each line of data looks like: [Julian Date, X, Y, Z, Vx, Vy, Vz]
   */

  var SKEphemerisTable = /*#__PURE__*/function () {
    /**
     * @param {Object} ephemerisData Look up ephemeris data to initialize the table with and the properties of it
     * @param {Array.<Array.<Number>>} ephemerisData.data the ephemeris data appropriate for the specified ephemeris type
     * @param {String} ephemerisData.ephemerisType the type of ephemeres data here (defaults to 'cartesianposvel')
     * @param {String} ephemerisData.distanceUnits the distance units for this data (defaults to AU
     * @param {String} ephemerisData.timeUnits the distance units for this data (defaults to day)
     * @param {String} ephemerisData.interpolationType the type of interpolater to use (defaults to 'lagrange')
     * @param {Number} ephemerisData.interpolationOrder the order of the interpolator to use (defaults to 5)
     */
    function SKEphemerisTable(ephemerisData) {
      // this._units = JSON.parse(JSON.stringify(DEFAULT_UNITS));
      // this._ephemType = DEFAULT_EPHEM_TYPE;
      // this._ephemType = DEFAULT_EPHEM_TYPE;
      // this._interpolationType = DEFAULT_INTERPOLATION_TYPE;
      // this._interpolationOrder = DEFAULT_INTERPOLATION_ORDER;
      // ~~~>>>
      this._units = _extends({}, DEFAULT_UNITS);
      this._ephemType = DEFAULT_EPHEM_TYPE;
      this._interpolationType = DEFAULT_INTERPOLATION_TYPE;
      this._interpolationOrder = DEFAULT_INTERPOLATION_ORDER;

      if (!ephemerisData) {
        throw 'EphemerisTable must be initialized with an ephemeris data structure';
      }

      if (!ephemerisData.data || !Array.isArray(ephemerisData.data) || ephemerisData.data.length === 0 || !Array.isArray(ephemerisData.data[0])) {
        throw 'EphemerisTable must be initialized with a structure containing an array of arrays of ephemeris data';
      } // this._data = JSON.parse(JSON.stringify(ephemerisData.data));


      this._data = [].concat(ephemerisData.data);

      if (ephemerisData.distanceUnits) {
        if (!DISTANCE_UNITS.has(ephemerisData.distanceUnits)) {
          throw "Unknown distance units: " + ephemerisData.distanceUnits;
        }

        this._units.distance = ephemerisData.distanceUnits;
      }

      if (ephemerisData.timeUnits) {
        if (!TIME_UNITS.has(ephemerisData.timeUnits)) {
          throw "Unknown time units: " + ephemerisData.timeUnits;
        }

        this._units.time = ephemerisData.timeUnits;
      }

      if (ephemerisData.ephemerisType) {
        if (!EPHEM_TYPES.has(ephemerisData.ephemerisType)) {
          throw "Unknown ephemeris type: " + ephemerisData.ephemerisType;
        }

        this._ephemType = ephemerisData.ephemerisType;
      }

      if (ephemerisData.interpolationType) {
        if (!INTERPOLATION_TYPES.has(ephemerisData.interpolationType)) {
          throw "Unknown interpolation type: " + ephemerisData.interpolationType;
        }

        this._interpolationType = ephemerisData.interpolationType;
      }

      if (ephemerisData.interpolationOrder !== undefined) {
        if (ephemerisData.interpolationOrder < 1 || ephemerisData.interpolationOrder > MAX_INTERPOLATION_ORDER) {
          throw "Interpolation order must be >0 and <" + MAX_INTERPOLATION_ORDER + ": " + ephemerisData.interpolationOrder;
        }

        this._interpolationOrder = ephemerisData.interpolationOrder;
      }

      if (this._units.distance !== DEFAULT_UNITS.distance || this._units.time !== DEFAULT_UNITS.time) {
        var distanceMultiplier = this.calcDistanceMultiplier(this._units.distance);
        var timeMultiplier = this.calcTimeMultiplier(this._units.time);

        this._data.forEach(function (line) {
          line[1] *= distanceMultiplier;
          line[2] *= distanceMultiplier;
          line[3] *= distanceMultiplier;
          line[4] *= distanceMultiplier * timeMultiplier;
          line[5] *= distanceMultiplier * timeMultiplier;
          line[6] *= distanceMultiplier * timeMultiplier;
        });
      }
    }
    /**
     * Calculates the interpolated position for the given requested date. If the requested date is before the first
     * point it returns the first point. If the requested date is after the last point it returns the last point.
     * @param {Number} jd of the requested time
     * @returns {Number[]|*[]} x, y, z position in the ephemeris table's reference frame
     */


    var _proto = SKEphemerisTable.prototype;

    _proto.getPositionAtTime = function getPositionAtTime(jd) {
      if (jd <= this._data[0][0]) {
        return [this._data[0][1], this._data[0][2], this._data[0][3]];
      }

      var last = this._data[this._data.length - 1];

      if (jd >= last[0]) {
        return [last[1], last[2], last[3]];
      }

      var _this$calcBoundingInd = this.calcBoundingIndices(jd),
          startIndex = _this$calcBoundingInd.startIndex,
          stopIndex = _this$calcBoundingInd.stopIndex;

      var x = interpolate(this._data, jd, startIndex, stopIndex, 0, 1);
      var y = interpolate(this._data, jd, startIndex, stopIndex, 0, 2);
      var z = interpolate(this._data, jd, startIndex, stopIndex, 0, 3);
      return [x, y, z];
    }
    /**
     * Given the start and stop time returns a uniform ephemeris history.
     * @param {Number} startJd the requested start date
     * @param {Number} stopJd the requested stop date
     * @param {Number} stepDays the step size of the data requested in days (can be fractional days)
     * @returns {number[][]}
     */
    ;

    _proto.getPositions = function getPositions(startJd, stopJd, stepDays) {
      if (startJd > stopJd) {
        throw "Requested start needs to be after requested stop";
      }

      if (stepDays <= 0.0) {
        throw 'Step days needs to be greater than zero';
      }

      var result = [];

      for (var t = startJd; t <= stopJd; t += stepDays) {
        result.push(this.getPositionAtTime(t));
      }

      return result;
    }
    /**
     * @private
     */
    ;

    _proto.calcDistanceMultiplier = function calcDistanceMultiplier(unitType) {
      switch (unitType) {
        case 'au':
          return 1.0;

        case 'km':
          return kmToAu(1);

        default:
          throw new Error('Unknown distance unit type: ' + unitType);
      }
    }
    /**
     * @private
     */
    ;

    _proto.calcTimeMultiplier = function calcTimeMultiplier(unitType) {
      switch (unitType) {
        case 'day':
          return 1.0;

        case 'sec':
          return 1 / 86400.0;

        default:
          throw new Error('Unknown time unit type: ' + unitType);
      }
    }
    /**
     * @private
     */
    ;

    _proto.calcBoundingIndices = function calcBoundingIndices(jd) {
      var halfSampleSize = Math.floor(this._interpolationOrder / 2);
      var closestIndex = binarySearch(this._data, jd, INCREASING_JDATE_SEARCH_METHOD);

      if (closestIndex < 0) {
        closestIndex = ~closestIndex - 1;
      }

      var startIndex = closestIndex - halfSampleSize;

      if (startIndex < 0) {
        startIndex = 0;
      }

      var stopIndex = startIndex + Number(this._interpolationOrder);

      if (stopIndex >= this._data.length) {
        stopIndex = this._data.length - 1;

        if (this._data.length > halfSampleSize) {
          startIndex = stopIndex - halfSampleSize;
        }
      }

      return {
        startIndex: startIndex,
        stopIndex: stopIndex
      };
    };

    return SKEphemerisTable;
  }();

  var sin = Math.sin;
  var cos = Math.cos;
  var sqrt = Math.sqrt;
  var DEFAULT_LEAD_TRAIL_YEARS = 10;
  var DEFAULT_SAMPLE_POINTS = 360; // const DEFAULT_ORBIT_PATH_SETTINGS = {
  //   leadDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
  //   trailDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
  //   numberSamplePoints: DEFAULT_SAMPLE_POINTS,
  // };
  // const MAX_NUM_ECLIPTIC_DROPLINES = 90;

  /**
   * Special cube root function that assumes input is always positive.
   */

  function cbrt(x) {
    return Math.exp(Math.log(x) / 3.0);
  }
  /**
   * Enum of orbital types.
   */
  // export const OrbitType = Object.freeze({
  //   UNKNOWN: 0,
  //   PARABOLIC: 1,
  //   HYPERBOLIC: 2,
  //   ELLIPTICAL: 3,
  //   TABLE: 4,
  // });


  var OrbitType;

  (function (OrbitType) {
    OrbitType[OrbitType["UNKNOWN"] = 0] = "UNKNOWN";
    OrbitType[OrbitType["PARABOLIC"] = 1] = "PARABOLIC";
    OrbitType[OrbitType["HYPERBOLIC"] = 2] = "HYPERBOLIC";
    OrbitType[OrbitType["ELLIPTICAL"] = 3] = "ELLIPTICAL";
    OrbitType[OrbitType["TABLE"] = 4] = "TABLE";
  })(OrbitType || (OrbitType = {}));
  /**
   * Get the type of orbit. Returns one of OrbitType.PARABOLIC, HYPERBOLIC,
   * ELLIPTICAL, or UNKNOWN.
   * @return {OrbitType} Name of orbit type
   */


  function getOrbitType(ephem) {
    if (ephem instanceof SKEphemerisTable) {
      return OrbitType.TABLE;
    }

    var e = ephem.get('e');

    if (e > 0.9 && e < 1.2) {
      return OrbitType.PARABOLIC;
    } else if (e > 1.2) {
      return OrbitType.HYPERBOLIC;
    } else {
      return OrbitType.ELLIPTICAL;
    }
  }
  /**
   * A class that builds a visual representation of a Kepler orbit.
   * @example
   * const orbit = new Spacekit.Orbit({
   *   ephem: new Spacekit.Ephem({...}),
   *   options: {
   *     color: 0xFFFFFF,
   *     eclipticLineColor: 0xCCCCCC,
   *   },
   * });
   */

  var SKOrbit = /*#__PURE__*/function () {
    /**
     * @param {(SKEphem | SKEphemerisTable)} ephem The ephemerides that define this orbit.
     * @param {Object} options
     * @param {Object} options.color The color of the orbital ellipse.
     * @param {Object} options.orbitPathSettings settings for the path
     * @param {Object} options.orbitPathSettings.leadDurationYears orbit path lead time in years
     * @param {Object} options.orbitPathSettings.trailDurationYears orbit path trail time in years
     * @param {Object} options.orbitPathSettings.numberSamplePoints number of
     * points to use when drawing the orbit line. Only applicable for
     * non-elliptical and ephemeris table orbits.
     * @param {Object} options.eclipticLineColor The color of lines drawn
     * perpendicular to the ecliptic in order to illustrate depth (defaults to
     * 0x333333).
     */
    function SKOrbit(_ephem, options) {
      /**
       * Ephem object
       * @type {SKEphem}
       */
      // this._ephem = ephem;
      this._ephem = _ephem;
      this._orbitStart = 0;
      this._orbitStop = 0;
      /**
       * Options (see class definition for details)
       */

      this._options = _extends({
        color: 'white',
        eclipticLineColor: 'cyan'
      }, options, {
        orbitPathSettings: _extends({
          leadDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
          trailDurationYears: DEFAULT_LEAD_TRAIL_YEARS,
          numberSamplePoints: DEFAULT_SAMPLE_POINTS
        }, options.orbitPathSettings)
      }); // /**
      //  * configuring orbit path lead/trail data
      //  */
      // if (!this._options.orbitPathSettings) {
      //   this._options.orbitPathSettings = JSON.parse(
      //     JSON.stringify(DEFAULT_ORBIT_PATH_SETTINGS)
      //   );
      // }
      // if (!this._options.orbitPathSettings.leadDurationYears) {
      //   this._options.orbitPathSettings.leadDurationYears = DEFAULT_LEAD_TRAIL_YEARS;
      // }
      // if (!this._options.orbitPathSettings.trailDurationYears) {
      //   this._options.orbitPathSettings.trailDurationYears = DEFAULT_LEAD_TRAIL_YEARS;
      // }
      // if (!this._options.orbitPathSettings.numberSamplePoints) {
      //   this._options.orbitPathSettings.numberSamplePoints = DEFAULT_SAMPLE_POINTS;
      // }

      /**
       * Cached orbital points.
       * @type {Array.<THREE.Vector3>}
       */
      // this._orbitPoints = null;

      /**
       * Cached ecliptic drop lines.
       * @type {Array.<THREE.Vector3>}
       */
      // this._eclipticDropLines = null;

      /**
       * Cached orbit shape.
       * @type {THREE.Line}
       */
      // this._orbitShape = null;

      /**
       * Time span of the drawn orbit line
       */
      // this._orbitStart = 0;
      // this._orbitStop = 0;

      /**
       * Orbit type
       * @type {OrbitType}
       */
      // this._orbitType = getOrbitType(this._ephem);

      this._orbitType = getOrbitType(this._ephem);
    }
    /**
     * Get heliocentric position of object at a given JD.
     * @param {Number} jd Date value in JD.
     * @param {boolean} debug Set true for debug output.
     * @return {Array.<Number>} [X, Y, Z] coordinates
     */


    var _proto = SKOrbit.prototype;

    _proto.getPositionAtTime = function getPositionAtTime(jd, debug) {
      if (debug === void 0) {
        debug = false;
      }

      // Note: logic below must match the vertex shader.
      // This position calculation is used to create orbital ellipses.
      switch (this._orbitType) {
        case OrbitType.PARABOLIC:
          return this.getPositionAtTimeNearParabolic(jd, debug);

        case OrbitType.HYPERBOLIC:
          return this.getPositionAtTimeHyperbolic(jd, debug);

        case OrbitType.ELLIPTICAL:
          return this.getPositionAtTimeElliptical(jd, debug);

        case OrbitType.TABLE:
          return this.getPositionAtTimeTable(jd, debug);
      }

      throw new Error('No handler for this type of orbit');
    };

    _proto.getPositionAtTimeParabolic = function getPositionAtTimeParabolic(jd, _debug) {

      // See https://stjarnhimlen.se/comp/ppcomp.html#17
      var eph = this._ephem;
      if (eph instanceof SKEphemerisTable) throw new Error('Poor logic allowing table type here'); // The Guassian gravitational constant

      var k = 0.01720209895; // Perihelion distance

      var q = eph.get('q'); // Compute time since perihelion

      var d = jd - eph.get('tp');
      var H = d * (k / sqrt(2)) / sqrt(q * q * q);
      var h = 1.5 * H;
      var g = sqrt(1.0 + h * h);
      var s = cbrt(g + h) - cbrt(g - h); // True anomaly

      var v = 2.0 * Math.atan(s); // Heliocentric distance

      var r = q * (1.0 + s * s);
      return this.vectorToHeliocentric(v, r);
    };

    _proto.getPositionAtTimeNearParabolic = function getPositionAtTimeNearParabolic(jd, _debug) {

      // See https://stjarnhimlen.se/comp/ppcomp.html#17
      var eph = this._ephem;
      if (eph instanceof SKEphemerisTable) throw new Error('Poor logic allowing table type here'); // The Guassian gravitational constant

      var k = 0.01720209895; // Eccentricity

      var e = eph.get('e'); // Perihelion distance

      var q = eph.get('q'); // Compute time since perihelion

      var d = jd - eph.get('tp');
      var a = 0.75 * d * k * sqrt((1 + e) / (q * q * q));
      var b = sqrt(1 + a * a);
      var W = cbrt(b + a) - cbrt(b - a);
      var f = (1 - e) / (1 + e);
      var a1 = 2 / 3 + 2 / 5 * W * W;
      var a2 = 7 / 5 + 33 / 35 * W * W + 37 / 175 * Math.pow(W, 4);
      var a3 = W * W * (432 / 175 + 956 / 1125 * W * W + 84 / 1575 * Math.pow(W, 4));
      var C = W * W / (1 + W * W);
      var g = f * C * C;
      var w = W * (1 + f * C * (a1 + a2 * g + a3 * g * g)); // True anomaly

      var v = 2 * Math.atan(w); // Heliocentric distance

      var r = q * (1 + w * w) / (1 + w * w * f);
      return this.vectorToHeliocentric(v, r);
    };

    _proto.getPositionAtTimeHyperbolic = function getPositionAtTimeHyperbolic(jd, _debug) {

      // See https://stjarnhimlen.se/comp/ppcomp.html#17
      var eph = this._ephem;
      if (eph instanceof SKEphemerisTable) throw new Error('Poor logic allowing table type here'); // Eccentricity

      var e = eph.get('e'); // Perihelion distance
      // const q = eph.get('q');
      // Semimajor axis

      var a = eph.get('a'); // Mean anomaly

      var ma = eph.get('ma'); // Calculate mean anomaly at jd

      var n = eph.get('n', 'rad');
      var epoch = eph.get('epoch');
      var d = jd - epoch;
      var M = ma + n * d;
      var F0 = M;

      for (var count = 0; count < 100; count++) {
        var F1 = (M + e * (F0 * Math.cosh(F0) - Math.sinh(F0))) / (e * Math.cosh(F0) - 1);
        var lastdiff = Math.abs(F1 - F0);
        F0 = F1;

        if (lastdiff < 0.0000001) {
          break;
        }
      }

      var F = F0;
      var v = 2 * Math.atan(sqrt((e + 1) / (e - 1))) * Math.tanh(F / 2);
      var r = a * (1 - e * e) / (1 + e * cos(v));
      return this.vectorToHeliocentric(v, r);
    };

    _proto.getPositionAtTimeElliptical = function getPositionAtTimeElliptical(jd, _debug) {
      if (_debug === void 0) {
        _debug = false;
      }

      var eph = this._ephem;
      if (eph instanceof SKEphemerisTable) throw new Error('Poor logic allowing table type here'); // Eccentricity

      var e = eph.get('e'); // Mean anomaly

      var ma = eph.get('ma', 'rad'); // Calculate mean anomaly at jd

      var n = eph.get('n', 'rad');
      var epoch = eph.get('epoch');
      var d = jd - epoch;
      var M = ma + n * d;

      if (_debug) {
        console.info('period=', eph.get('period'));
        console.info('n=', n);
        console.info('ma=', ma);
        console.info('d=', d);
        console.info('M=', M);
      } // Estimate eccentric and true anom using iterative approx


      var E0 = M;

      for (var count = 0; count < 100; count++) {
        var E1 = M + e * sin(E0);
        var lastdiff = Math.abs(E1 - E0);
        E0 = E1;

        if (lastdiff < 0.0000001) {
          break;
        }
      }

      var E = E0;
      var v = 2 * Math.atan(sqrt((1 + e) / (1 - e)) * Math.tan(E / 2)); // Radius vector, in AU

      var a = eph.get('a');
      var r = a * (1 - e * e) / (1 + e * cos(v));
      return this.vectorToHeliocentric(v, r);
    };

    _proto.getPositionAtTimeTable = function getPositionAtTimeTable(jd, _debug) {

      if (this._ephem instanceof SKEphem) throw new Error('Poor logic allowing non-table type here');

      var point = this._ephem.getPositionAtTime(jd);

      return rescaleXYZ(point[0], point[1], point[2]);
    }
    /**
     * Given true anomaly and heliocentric distance, returns the scaled heliocentric coordinates (X, Y, Z)
     * @param {Number} v True anomaly
     * @param {Number} r Heliocentric distance
     * @return {Array.<Number>} Heliocentric coordinates
     */
    ;

    _proto.vectorToHeliocentric = function vectorToHeliocentric(v, r) {
      var eph = this._ephem;
      if (eph instanceof SKEphemerisTable) throw new Error('Poor logic allowing table type here'); // Inclination, Longitude of ascending node, Longitude of perihelion

      var i = eph.get('i', 'rad');
      var o = eph.get('om', 'rad');
      var p = eph.get('wBar', 'rad'); // Heliocentric coords

      var X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i));
      var Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i));
      var Z = r * (sin(v + p - o) * sin(i));
      return rescaleXYZ(X, Y, Z);
    }
    /**
     * Returns whether the requested epoch is within the current orbit's
     * definition. Used only for ephemeris tables.
     * @param {Number} jd
     * @return {boolean} true if it is within the orbit span, false if not
     */
    ;

    _proto.needsUpdateForTime = function needsUpdateForTime(jd) {
      if (this._orbitType === OrbitType.TABLE) {
        return jd < this._orbitStart || jd > this._orbitStop;
      } // Renderings for other types are static.


      return false;
    }
    /**
     * Calculates, caches, and returns the orbit state for this orbit around this time
     * @param {Number} jd center time of the orbit (only used for ephemeris table ephemeris)
     * @param {boolean} forceCompute forces the recomputing of the orbit on this call
     * @return {THREE.Line}
     */
    ;

    _proto.getOrbitShape = function getOrbitShape(jd, forceCompute) {
      if (forceCompute === void 0) {
        forceCompute = false;
      }

      if (forceCompute) {
        if (this._orbitShape) {
          this._orbitShape.geometry.dispose();

          this._orbitShape.material.dispose();
        }

        this._orbitShape = undefined;

        if (this._orbitPoints) {
          this._orbitPoints.dispose();
        }

        this._orbitPoints = undefined;

        if (this._eclipticDropLines) {
          this._eclipticDropLines.geometry.dispose();

          this._eclipticDropLines.material.dispose();
        }

        this._eclipticDropLines = undefined;
      }

      if (this._orbitShape) {
        return this._orbitShape;
      }

      if (this._orbitType === OrbitType.ELLIPTICAL) {
        return this.getEllipse();
      } // For hyperbolic and parabolic orbits, decide on a time range to draw
      // them.
      // TODO(ian): Should we compute around current position, not time of perihelion?
      // @ts-ignore


      var tp = this._orbitType === OrbitType.TABLE ? jd : this._ephem.get('tp'); // Use current date as a fallback if time of perihelion is not available.

      var centerDate = tp ? tp : julian.toJulianDay(new Date());
      var startJd = centerDate - this._options.orbitPathSettings.trailDurationYears * 365.25;
      var endJd = centerDate + this._options.orbitPathSettings.leadDurationYears * 365.25;
      var step = (endJd - startJd) / this._options.orbitPathSettings.numberSamplePoints;
      this._orbitStart = startJd;
      this._orbitStop = endJd;

      switch (this._orbitType) {
        case OrbitType.HYPERBOLIC:
          return this.getLine(this.getPositionAtTimeHyperbolic.bind(this), startJd, endJd, step);

        case OrbitType.PARABOLIC:
          return this.getLine(this.getPositionAtTimeNearParabolic.bind(this), startJd, endJd, step);

        case OrbitType.TABLE:
          return this.getTableOrbit(startJd, endJd, step);
      }

      throw new Error('Unknown orbit shape');
    }
    /**
     * Compute a line between a given date range.
     * @private
     */
    ;

    _proto.getLine = function getLine(orbitFn, startJd, endJd, step) {
      var points = [];

      for (var jd = startJd; jd <= endJd; jd += step) {
        var pos = orbitFn(jd); // DWD

        pos[0] = auToMeters(pos[0]);
        pos[1] = auToMeters(pos[1]);
        pos[2] = auToMeters(pos[2]); //

        points.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
      } // const pointsGeometry = new THREE.Geometry();
      // pointsGeometry.vertices = points;


      var pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setFromPoints(points);
      return this.generateAndCacheOrbitShape(pointsGeometry);
    }
    /**
     * Returns the orbit for a table lookup orbit definition
     * @private
     * @param {Number} startJd start of orbit in JDate format
     * @param {Number} stopJd end of orbit in JDate format
     * @param {Number} step step size in days
     * @return {THREE.Line}
     */
    ;

    _proto.getTableOrbit = function getTableOrbit(startJd, stopJd, step) {
      // --->>>
      if (this._ephem instanceof SKEphem) throw new Error('Poor logic allowing non-table type here');

      var rawPoints = this._ephem.getPositions(startJd, stopJd, step);

      var points = rawPoints.map(function (values) {
        return rescaleArray(values);
      }).map(function (values) {
        return new THREE.Vector3(values[0], values[1], values[2]);
      }); // const pointGeometry = new THREE.Geometry();
      // pointGeometry.vertices = points;

      var pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setFromPoints(points);
      return this.generateAndCacheOrbitShape(pointGeometry);
    }
    /**
     * @private
     * @return {THREE.Line} The ellipse object that represents this orbit.
     */
    ;

    _proto.getEllipse = function getEllipse() {
      var pointGeometry = this.getEllipseGeometry();
      return this.generateAndCacheOrbitShape(pointGeometry);
    }
    /**
     * @private
     * @return {THREE.Geometry} A THREE.js geometry
     */
    ;

    _proto.getEllipseGeometry = function getEllipseGeometry() {
      var eph = this._ephem;
      if (eph instanceof SKEphemerisTable) throw new Error('Poor logic allowing table type here');

      var _period = eph.get('period');

      var a = eph.get('a');
      var ecc = eph.get('e');
      var twoPi = Math.PI * 2;
      var step = twoPi / 90;
      var pts = [];

      for (var E = 0; E < twoPi; E += step) {
        var v = 2 * Math.atan(sqrt((1 + ecc) / (1 - ecc)) * Math.tan(E / 2));
        var r = a * (1 - ecc * ecc) / (1 + ecc * cos(v));
        var pos = this.vectorToHeliocentric(v, r);

        if (isNaN(pos[0]) || isNaN(pos[1]) || isNaN(pos[2])) {
          console.error('NaN position value - you may have bad or incomplete data in the following ephemeris:');
          console.error(eph);
        } // pts.push(new THREE.Vector3(pos[0], pos[1], pos[2]));
        // DWD


        pts.push(new THREE.Vector3(auToMeters(pos[0]), auToMeters(pos[1]), auToMeters(pos[2]))); //
      }

      pts.push(pts[0]); // const pointGeometry = new THREE.Geometry();
      // pointGeometry.vertices = pts;

      var pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setFromPoints(pts);
      return pointGeometry;
    }
    /**
     * @private
     */
    ;

    _proto.generateAndCacheOrbitShape = function generateAndCacheOrbitShape(pointGeometry) {
      // --->>>
      this._orbitPoints = pointGeometry;
      this._orbitShape = new THREE.Line(pointGeometry, new THREE.LineBasicMaterial({
        color: new THREE.Color(this._options.color || 0x444444)
      }));
      return this._orbitShape;
    }
    /**
     * A geometry containing line segments that run between the orbit ellipse and
     * the ecliptic plane of the solar system. This is a useful visual effect
     * that makes it easy to tell when an orbit goes below or above the ecliptic
     * plane.
     * @return {THREE.Geometry} A geometry with many line segments.
     */
    ;

    _proto.getLinesToEcliptic = function getLinesToEcliptic() {
      if (this._eclipticDropLines) {
        return this._eclipticDropLines;
      }

      if (!this._orbitPoints) {
        // Generate the orbitPoints cache.
        this.getOrbitShape();
      }

      var points = this._orbitPoints; // const geometry = new THREE.Geometry();

      var geometry = new THREE.BufferGeometry();
      if (!points) throw new Error('Poor logic letting point be undefined here'); // Place a cap on visible lines, for large or highly inclined orbits.
      // points.vertices.forEach((vertex, idx) => {
      //   // Drop last point because it's a repeat of the first point.
      //   if (
      //     idx === points.vertices.length - 1 &&
      //     this._orbitType === OrbitType.ELLIPTICAL
      //   ) {
      //     return;
      //   }
      //   geometry.vertices.push(vertex);
      //   geometry.vertices.push(new THREE.Vector3(vertex.x, vertex.y, 0));
      // });

      this._eclipticDropLines = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({
        color: this._options.eclipticLineColor || 0x333333,
        blending: THREE.AdditiveBlending
      }) // THREE.LineStrip
      );
      return this._eclipticDropLines;
    }
    /**
     * Get the color of this orbit.
     * @return {Number} The hexadecimal color of the orbital ellipse.
     */
    ;

    _proto.getHexColor = function getHexColor() {
      var _this$_orbitShape;

      return (_this$_orbitShape = this._orbitShape) == null ? void 0 : _this$_orbitShape.material.color.getHex();
    }
    /**
     * @param {Number} hexVal The hexadecimal color of the orbital ellipse.
     */
    ;

    _proto.setHexColor = function setHexColor(hexVal) {
      var _this$_orbitShape2, _this$_orbitShape2$ma;

      if ((_this$_orbitShape2 = this._orbitShape) != null && (_this$_orbitShape2$ma = _this$_orbitShape2.material) != null && _this$_orbitShape2$ma.color) this._orbitShape.material.color = new THREE.Color(hexVal);
    }
    /**
     * Get the visibility of this orbit.
     * @return {boolean} Whether the orbital ellipse is visible. Note that
     * although the ellipse may not be visible, it is still present in the
     * underlying Scene and Simultation.
     */
    ;

    _proto.getVisibility = function getVisibility() {
      var _this$_orbitShape3;

      return (_this$_orbitShape3 = this._orbitShape) == null ? void 0 : _this$_orbitShape3.visible;
    }
    /**
     * Change the visibility of this orbit.
     * @param {boolean} val Whether to show the orbital ellipse.
     */
    ;

    _proto.setVisibility = function setVisibility(val) {
      if (this._orbitShape) this._orbitShape.visible = val;
    };

    return SKOrbit;
  }();

  var Orbit = /*#__PURE__*/function () {
    function Orbit( //
    name, orbitalType, skephem, color, opacity) {
      var _this = this;

      if (orbitalType === void 0) {
        orbitalType = EOrbitalType.PLANET;
      }

      if (color === void 0) {
        color = 'white';
      }

      if (opacity === void 0) {
        opacity = 0.7;
      }

      // --->>>
      this.name = name;
      this.orbitalType = orbitalType;
      this.skephem = skephem;
      this.color = color;
      this.opacity = opacity;

      this.loadPlanet = function () {
        _this.SKEph = EphemPresets[_this.name];
        _this.SKOrbit = new SKOrbit(_this.SKEph, {
          color: _this.orbitalType === EOrbitalType.PLANET ? 'white' : 'pink',
          eclipticLineColor: undefined,
          orbitPathSettings: undefined
        });
        _this.SKprojectedOrbitLine = _this.SKOrbit.getOrbitShape();
        _this.SKprojectedOrbitLine.material.transparent = true;
        _this.SKprojectedOrbitLine.material.opacity = _this.opacity || 1;
        _this.SKprojectedOrbitLine.material.needsUpdate = true;
      };

      this.loadAsteroid = function () {
        _this.SKEph = _this.skephem || new SKEphem({
          epoch: 2458600.5,
          a: 5.38533,
          e: 0.19893,
          i: 22.11137,
          om: 294.42992,
          w: 314.2889,
          ma: 229.14238
        }, 'deg');
        _this.SKOrbit = new SKOrbit(_this.SKEph, {
          color: 'cyan',
          eclipticLineColor: undefined,
          orbitPathSettings: undefined
        });
        _this.SKprojectedOrbitLine = _this.SKOrbit.getOrbitShape();
        _this.SKprojectedOrbitLine.material.transparent = true;
        _this.SKprojectedOrbitLine.material.opacity = _this.opacity || 1;
        _this.SKprojectedOrbitLine.material.needsUpdate = true;
      };

      this.getProjectedOrbitLine = function () {
        return _this.SKprojectedOrbitLine;
      };

      switch (this.orbitalType) {
        case EOrbitalType.ASTEROID:
          {
            this.loadAsteroid();
            break;
          }

        case EOrbitalType.PLANET:
          {
            this.loadPlanet();
            break;
          }

        case EOrbitalType.DWARF_PLANET:
          {
            this.loadPlanet();
            break;
          }

        default:
          {
            this.loadPlanet();
            break;
          }
      }
    }

    var _proto = Orbit.prototype;

    _proto.getXyzMeters = function getXyzMeters(tCenturiesSinceJ200) {
      var _this$SKOrbit;

      if (tCenturiesSinceJ200 === void 0) {
        tCenturiesSinceJ200 = 0;
      }

      // --->>>
      var xyz = (_this$SKOrbit = this.SKOrbit) == null ? void 0 : _this$SKOrbit.getPositionAtTime(tCenturiesSinceJ200);
      if (!xyz) return {
        x: 0,
        y: 0,
        z: 0
      };
      var x = auToMeters(xyz[0]);
      var y = auToMeters(xyz[1]);
      var z = auToMeters(xyz[2]);
      return {
        x: x,
        y: y,
        z: z
      };
    };

    return Orbit;
  }();

  var planetsWithBumpMaps = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'CERES', 'PLUTO'];
  var planetsAsLoadableObjects = [//
  'HAUMEA', 'MAKEMAKE', 'ERIS'];
  var dwarfPlanets = ['CERES', 'PLUTO', 'HAUMEA', 'MAKEMAKE', 'ERIS'];

  var getPlanetType = function getPlanetType(name) {
    return dwarfPlanets.includes(name) ? EOrbitalType.DWARF_PLANET : EOrbitalType.PLANET;
  };
  /**
   * "Cloud Radius Factor": ratio of cloud radius to planet radius
   */


  var crf = 1.05;
  /**
   * "Helper Radius Factor": ratio of helper radius to clouded-planet radius
   */

  var hrf = 1.2;
  /**
   * Get the toy scale for different planets
   */

  var getPlanetToyScale = function getPlanetToyScale(name) {
    if (name === 'PLUTO') return 10000;
    if (name === 'CERES') return 10000;
    if (name === 'HAUMEA') return 15000;
    if (name === 'MAKEMAKE') return 15000;
    if (name === 'ERIS') return 15000;
    return 3000;
  };

  var Planet = /*#__PURE__*/function (_AbstractToyModel) {
    _inheritsLoose(Planet, _AbstractToyModel);

    function Planet(NAME) {
      var _this;

      // --->>>
      _this = _AbstractToyModel.call(this, getPlanetToyScale(NAME)) || this;
      _this.NAME = NAME;
      _this.model = new THREE.Group();
      _this.loadPlanetAsObject = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var name, objUrl, tempMesh, onObjectLoad;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _this.NAME.toLowerCase();
                objUrl = imageBaseUrl + "/planets/" + name + "/" + name + ".glb"; // Add temporary sphere till object is loaded

                tempMesh = new THREE.Mesh(new THREE.SphereGeometry(_this.radius, 32, 32), new THREE.MeshPhongMaterial());
                tempMesh.rotateX(Math.PI / 2);

                _this.model.add(tempMesh);

                onObjectLoad = function onObjectLoad(obj) {
                  tempMesh.visible = false;
                  if (!!obj) _this.model.add(obj);
                };

                if (!_this._isAsyncLoad()) {
                  _context.next = 10;
                  break;
                }

                gltfLoader(objUrl, _this.radius).then(onObjectLoad)["catch"](function (_) {
                  return onObjectLoad(null);
                });
                _context.next = 15;
                break;

              case 10:
                _context.t0 = onObjectLoad;
                _context.next = 13;
                return gltfLoader(objUrl, _this.radius)["catch"](function (_) {
                  return null;
                });

              case 13:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      _this.loadPlanetAsTexturedSphere = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var name, imageUrl, bumpUrl, isBumpy, isEarth, pNull, mesh, onTexturesLoad, promises;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = _this.NAME.toLowerCase();
                imageUrl = imageBaseUrl + "/planets/" + name + "/" + name + "-map-1024.jpg";
                bumpUrl = imageBaseUrl + "/planets/" + name + "/" + name + "-bump-1024.png";
                isBumpy = planetsWithBumpMaps.includes(_this.NAME);
                isEarth = _this.NAME === 'EARTH';
                pNull = Promise.resolve(null);
                mesh = new THREE.Mesh(new THREE.SphereGeometry(_this.radius, 32, 32), new THREE.MeshPhongMaterial({
                  shininess: isEarth ? 25 : 2
                }));
                mesh.rotateX(Math.PI / 2);

                _this.model.add(mesh);

                onTexturesLoad = function onTexturesLoad(_ref3) {
                  var promisedMapTexture = _ref3[0],
                      promisedBumpTexture = _ref3[1],
                      promisedEarthCloudTexture = _ref3[2];
                  // Unpack PromiseSettledResults:
                  var map = promisedMapTexture.status === 'fulfilled' ? promisedMapTexture.value : null;
                  var bumpMap = promisedBumpTexture.status === 'fulfilled' ? promisedBumpTexture.value : null;
                  var earthClouds = promisedEarthCloudTexture.status === 'fulfilled' ? promisedEarthCloudTexture.value : null;
                  mesh.material.map = map;
                  mesh.material.bumpMap = bumpMap;
                  mesh.material.bumpScale = _this.radius * 50;
                  mesh.material.needsUpdate = true;

                  if (earthClouds) {
                    _this.clouds = new THREE.Mesh(new THREE.SphereGeometry(_this.radius * crf, 32, 32), new THREE.MeshPhongMaterial({
                      map: earthClouds,
                      side: THREE.DoubleSide,
                      transparent: true,
                      opacity: 0.6
                    }));

                    _this.model.add(_this.clouds);
                  }
                }; // Create promises


                promises = [getTextureFromImageUrl(imageUrl, name)["catch"](function (_) {
                  return null;
                }), isBumpy ? getTextureFromImageUrl(bumpUrl, name)["catch"](function (_) {
                  return null;
                }) : pNull, isEarth ? createEarthCloudMesh()["catch"](function (_) {
                  return null;
                }) : pNull]; // Wait for promises or load async

                if (!_this._isAsyncLoad()) {
                  _context2.next = 15;
                  break;
                }

                Promise.allSettled(promises).then(onTexturesLoad);
                _context2.next = 20;
                break;

              case 15:
                _context2.t0 = onTexturesLoad;
                _context2.next = 18;
                return Promise.allSettled(promises);

              case 18:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      _this.getPosition = function () {
        // const { x, y, z } = this.orbit.getXyzMeters();
        // return new THREE.Vector3(x, y, z);
        return _this.model.position;
      };

      _this.getRadius = function () {
        return _this.radius;
      };

      _this.getOrbit = function () {
        return _this.orbit;
      };

      _this.setIsOrbitVisible = function (val) {
        _this.SKprojectedOrbitLine.visible = val;
      };

      _this.radius = getPlanetRadiusMeters(NAME);
      _this.orbit = new Orbit(_this.NAME, getPlanetType(NAME));
      _this.SKprojectedOrbitLine = _this.orbit.getProjectedOrbitLine();

      _this._sceneEntityGroup.add(_this.SKprojectedOrbitLine); // Make the model toy-scalable


      _this._toyGroup.push(_this.model); // Set up helper


      _this.helper = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.SphereGeometry(_this.radius * hrf, 32)), new THREE.LineBasicMaterial({
        color: new THREE.Color('cyan')
      }));
      _this.helper.userData.isHelper = true;

      _this.helper.rotateX(Math.PI / 2);

      _this.model.add(_this.helper);

      return _this;
    }

    var _proto = Planet.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
        var _this2 = this;

        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(resolve) {
                    return runtime_1.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!planetsAsLoadableObjects.includes(_this2.NAME)) {
                              _context3.next = 5;
                              break;
                            }

                            _context3.next = 3;
                            return _this2.loadPlanetAsObject();

                          case 3:
                            _context3.next = 7;
                            break;

                          case 5:
                            _context3.next = 7;
                            return _this2.loadPlanetAsTexturedSphere();

                          case 7:
                            console.log(_this2.NAME, ' RESOLVED', +new Date() - +getInitDate());

                            _this2._sceneEntityGroup.add(_this2.model);

                            resolve(_this2._sceneEntityGroup);

                          case 10:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.update = function update() {
      // Update planet position
      var _this$orbit$getXyzMet = this.orbit.getXyzMeters(),
          x = _this$orbit$getXyzMet.x,
          y = _this$orbit$getXyzMet.y,
          z = _this$orbit$getXyzMet.z;

      this.model.position.set(x, y, z); // Toy Model Scale

      this._updateModelScale(); // Spin planet


      this.model.rotateZ(0.0015);

      if (!!this.clouds) {
        // Spin clouds relative to planet
        this.clouds.rotateY(-0.0001);
        this.clouds.rotateZ(-0.0004);
      }
    };

    return Planet;
  }(AbstractToyModel);

  /**
   * Returns texture with inverted colors
   */

  function invertTextureColor(texture, isAlphaInverted) {
    if (isAlphaInverted === void 0) {
      isAlphaInverted = false;
    }

    // --->>>
    // texture -> canvas -> context -> data arrays
    var img = texture.image;
    var canvas = document.createElement('canvas');
    var width = img.width;
    var height = img.height;
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0); // Get copy of old data

    var data = ctx.getImageData(0, 0, width, height); // Modify copy of data

    for (var y = 0, offset = 0; y < height; y++) {
      for (var x = 0; x < width; x++, offset += 4) {
        data.data[offset + 0] = 255 - data.data[offset + 0];
        data.data[offset + 1] = 255 - data.data[offset + 1];
        data.data[offset + 2] = 255 - data.data[offset + 2];
        if (isAlphaInverted) data.data[offset + 3] = 255 - data.data[offset + 3];
      }
    } // Overwrite old data with new


    ctx.putImageData(data, 0, 0); // MUST return CanvasTexture or it won't update properly

    return new THREE.CanvasTexture(canvas);
  }

  var StarField = /*#__PURE__*/function (_AbstractSceneEntity) {
    _inheritsLoose(StarField, _AbstractSceneEntity);

    function StarField(radius) {
      var _this;

      _this = _AbstractSceneEntity.call(this) || this; // ~~~>>>

      _this.NAME = 'STARFIELD';
      _this.texture = null;

      _this.invertColor = function () {
        if (!_this.texture) return;
        _this.texture = invertTextureColor(_this.texture);
        _this.material.map = _this.texture;
        _this.material.needsUpdate = true;
      };

      _this.material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        color: 'black',
        opacity: 0,
        shininess: 0
      });
      _this.mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 32), _this.material);
      _this.mesh.rotation.y = Math.PI / 2;
      _this._sceneEntityGroup.name = 'STARFIELD';
      return _this;
    }

    var _proto = StarField.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var _this2 = this;

        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve) {
                    return runtime_1.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!_this2._isAsyncLoad()) {
                              _context.next = 4;
                              break;
                            }

                            getTextureFromImageUrl(imageBaseUrl + "/stars/galaxy_starfield6.png", // `${imageBaseUrl}/stars/galaxy-starfield-4096.jpg`,
                            // galaxy-starfield-4096.jpg
                            'star-field').then(function (texture) {
                              _this2.texture = texture;
                              texture.encoding = THREE.GammaEncoding; // this.material.map = texture;
                              // this.material.color = new THREE.Color();

                              // this.material.map = texture;
                              // this.material.color = new THREE.Color();
                              _this2.material.needsUpdate = true;
                            });
                            _context.next = 10;
                            break;

                          case 4:
                            _context.next = 6;
                            return getTextureFromImageUrl(imageBaseUrl + "/stars/galaxy_starfield6.png", 'star-field');

                          case 6:
                            _this2.texture = _context.sent;
                            _this2.material.map = _this2.texture;
                            _this2.material.color = new THREE.Color();
                            _this2.material.needsUpdate = true;

                          case 10:
                            _this2._sceneEntityGroup.add(_this2.mesh);

                            console.log('Starfield resolved', +new Date() - +getInitDate());
                            resolve(_this2._sceneEntityGroup);

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.update = function update() {};

    return StarField;
  }(AbstractSceneEntity);

  // Source: https://www.scienceforums.com/topic/360-exactly-how-many-seconds-are-there-in-a-year/
  var secondsPerCentury = 3155692597.474;

  // ------------------------------------------------------------- \\

  var LEAP_SEC_SINCE_J2000 = 5; // Unix time at 12:00:00 TT Jan 1 2000

  var UNIX_J2000_TT_EPOCH_SEC = 946727935.816;
  function unixToJ2000(unix_time) {
    return unix_time - UNIX_J2000_TT_EPOCH_SEC + LEAP_SEC_SINCE_J2000;
  }
  function dateToJ2000(date) {
    return unixToJ2000(date.getTime() / 1000);
  }
  // ------------------------------------------------------------- \\
  // ------------------------------------------------------------- \\

  function jsDateToCenturiesSinceJ2000(date) {
    // --------------------------------------->>>
    var J2000Secs = dateToJ2000(date);
    var tCenturiesSinceJ2000 = J2000Secs / secondsPerCentury;
    return tCenturiesSinceJ2000;
  }

  var MiscHelpers = /*#__PURE__*/function (_AbstractSceneEntity) {
    _inheritsLoose(MiscHelpers, _AbstractSceneEntity);

    function MiscHelpers() {
      var _this;

      // ~~~>>>
      _this = _AbstractSceneEntity.apply(this, arguments) || this;
      _this.NAME = 'Misc Helpers';

      _this.update = function () {};

      return _this;
    }

    var _proto = MiscHelpers.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var _this2 = this;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  var axesHelper = new THREE.AxesHelper(auToMeters(100)); // Mark this as helper in order to be toggle-able

                  // Mark this as helper in order to be toggle-able
                  axesHelper.userData.isHelper = true;

                  _this2._sceneEntityGroup.add(axesHelper);

                  resolve(_this2._sceneEntityGroup);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    return MiscHelpers;
  }(AbstractSceneEntity);

  var SimpleLight = /*#__PURE__*/function (_AbstractSceneEntity) {
    _inheritsLoose(SimpleLight, _AbstractSceneEntity);

    function SimpleLight(_defaultIntensity) {
      var _this;

      if (_defaultIntensity === void 0) {
        _defaultIntensity = 0.3;
      }

      _this = _AbstractSceneEntity.call(this) || this;
      _this._defaultIntensity = _defaultIntensity; // ~~~>>>

      _this.NAME = 'Simple Light';

      _this.setPower = function (intensity) {
        var newIntensity = intensity || _this._defaultIntensity;
        _this._light.intensity = newIntensity;
      };

      _this.update = function () {};

      return _this;
    }

    var _proto = SimpleLight.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var _this2 = this;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  _this2._light = new THREE.AmbientLight(0x333333, _this2._defaultIntensity);
                  _this2._light.userData.isAmbientLight = true;

                  _this2._sceneEntityGroup.add(_this2._light);

                  resolve(_this2._sceneEntityGroup);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.setIsOn = function setIsOn(isOn) {
      this._light.visible = isOn;
    };

    return SimpleLight;
  }(AbstractSceneEntity);

  /**
   * Function to take a dodecahedron and warp the points to createa jagged
   * asteroid shape
   */

  var createAsteroidGeometry = function createAsteroidGeometry(size, warpFactor) {
    if (warpFactor === void 0) {
      warpFactor = 0.25;
    }

    // --->>>
    var geometry = new THREE.DodecahedronGeometry(size, 1);
    var positionAttribute = geometry.getAttribute('position');
    var point = new THREE.Vector3();
    var vertices = {}; // Collect all repeated points into a hashmap of unique vertices

    for (var i = 0; i < positionAttribute.count; i++) {
      point.fromBufferAttribute(positionAttribute, i); // read vertex

      var key = [point.x, point.y, point.z].join(',');
      if (!vertices[key]) vertices[key] = {
        x: point.x += Math.random() * size * warpFactor,
        y: point.y += Math.random() * size * warpFactor,
        z: point.z += Math.random() * size * warpFactor
      };
    }

    for (var _i = 0; _i < positionAttribute.count; _i++) {
      point.fromBufferAttribute(positionAttribute, _i); // read vertex

      var _key = [point.x, point.y, point.z].join(',');

      var _vertices$_key = vertices[_key],
          x = _vertices$_key.x,
          y = _vertices$_key.y,
          z = _vertices$_key.z;
      positionAttribute.setXYZ(_i, x, y, z);
    } // Stretch/flatten asteroid randomly


    var sx = 0.5 + Math.random();
    var sy = 0.5 + Math.random();
    var sz = 0.5 + Math.random();
    geometry.scale(sx, sy, sz);
    return geometry;
  };

  var defaultRadiusMeters = 10000;
  var Asteroid = /*#__PURE__*/function (_AbstractToyModel) {
    _inheritsLoose(Asteroid, _AbstractToyModel);

    function Asteroid(NAME, radius) {
      var _this;

      if (radius === void 0) {
        radius = defaultRadiusMeters;
      }

      _this = _AbstractToyModel.call(this, 30000 * 100) || this;
      _this.NAME = NAME;
      _this.radius = radius; // ~~~>>>

      _this.model = new THREE.Group();

      _this.getPosition = function () {
        var _this$orbit$getXyzMet = _this.orbit.getXyzMeters(),
            x = _this$orbit$getXyzMet.x,
            y = _this$orbit$getXyzMet.y,
            z = _this$orbit$getXyzMet.z;

        return new THREE.Vector3(x, y, z);
      };

      _this.getRadius = function () {
        return _this.radius;
      };

      _this.getOrbit = function () {
        return _this.orbit;
      };

      _this.setIsOrbitVisible = function (val) {
        _this.SKprojectedOrbitLine.visible = val;
      };

      _this.orbit = new Orbit(NAME, EOrbitalType.ASTEROID);
      _this.SKprojectedOrbitLine = _this.orbit.getProjectedOrbitLine();

      _this._sceneEntityGroup.add(_this.SKprojectedOrbitLine);

      return _this;
    }

    var _proto = Asteroid.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var _this2 = this;

        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve) {
                    var url, geometry, mesh;
                    return runtime_1.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            // --->>>
                            url = imageBaseUrl + "/misc/asteroid-texture-1024.jpg";
                            geometry = createAsteroidGeometry(_this2.radius);
                            _context.t0 = THREE.Mesh;
                            _context.t1 = geometry;
                            _context.t2 = THREE.MeshPhongMaterial;
                            _context.next = 7;
                            return getTextureFromImageUrl(url);

                          case 7:
                            _context.t3 = _context.sent;
                            _context.t4 = {
                              map: _context.t3,
                              shininess: 0
                            };
                            _context.t5 = new _context.t2(_context.t4);
                            mesh = new _context.t0(_context.t1, _context.t5);

                            _this2.model.add(mesh);

                            _this2._toyGroup.push(_this2.model);

                            _this2._sceneEntityGroup.add(_this2.model);

                            resolve(_this2._sceneEntityGroup);

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.update = function update() {
      // Update planet position
      var _this$orbit$getXyzMet2 = this.orbit.getXyzMeters(),
          x = _this$orbit$getXyzMet2.x,
          y = _this$orbit$getXyzMet2.y,
          z = _this$orbit$getXyzMet2.z;

      this.model.position.set(x, y, z); // Toy Model Scale

      this._updateModelScale();
    };

    return Asteroid;
  }(AbstractToyModel);

  var PointLight = /*#__PURE__*/function (_AbstractSceneEntity) {
    _inheritsLoose(PointLight, _AbstractSceneEntity);

    function PointLight(_defaultIntensity, _radius) {
      var _this;

      if (_defaultIntensity === void 0) {
        _defaultIntensity = 0.3;
      }

      if (_radius === void 0) {
        _radius = 1;
      }

      _this = _AbstractSceneEntity.call(this) || this;
      _this._defaultIntensity = _defaultIntensity;
      _this._radius = _radius; // ~~~>>>

      _this.NAME = 'Point Light';

      _this.setPower = function (intensity) {
        var newIntensity = intensity || _this._defaultIntensity;
        _this._light.intensity = newIntensity;
      };

      _this.update = function () {};

      return _this;
    }

    var _proto = PointLight.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var _this2 = this;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  _this2._light = new THREE.PointLight(0x333333, _this2._defaultIntensity);
                  var helper = new THREE.PointLightHelper(_this2._light, _this2._radius, new THREE.Color('red'));
                  helper.userData.isHelper = true;

                  _this2._sceneEntityGroup.add(_this2._light);

                  _this2._sceneEntityGroup.add(helper);

                  resolve(_this2._sceneEntityGroup);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }();

    _proto.setIsOn = function setIsOn(isOn) {
      this._light.visible = isOn;
    };

    return PointLight;
  }(AbstractSceneEntity);

  /**
   *
   */

  var searchField = function searchField(container, onEnter) {
    //
    addGlobalStyles();
    var div = document.createElement('div');
    var input = document.createElement('input');
    div.style.setProperty('position', 'absolute');
    div.style.setProperty('top', '10px');
    div.style.setProperty('left', '10px');
    div.style.setProperty('width', '120px');
    div.style.setProperty('height', '40px');
    div.style.setProperty('background-color', 'green'); //

    input.value = 'Ceres';
    input.style.setProperty('width', '100%');
    input.style.setProperty('height', '100%');
    input.style.setProperty('font-size', '20px');
    input.style.setProperty('font-family', buttonFontFamily);
    input.style.setProperty('font-size', '20px');
    input.classList.add('sbn-solar-system-viewer-input');
    input.addEventListener('keypress', function (e) {
      // console.log('e', e, input.value);
      if (e.key === 'Enter') {
        onEnter(input.value);
      }
    });
    div.append(input);
    container.append(div);
  };

  var alpha = 1 / 100;
  /**
   * Function at the heart of the smooth-zoom functionality.
   * It only requires two parameters to enable smooth movement between
   * a vast range of distances. By starting off with really small steps
   * (parameterised by alpha), you ensure that the movement starts off slow.
   * By increasing exponentially, you ensure that no matter how far the object,
   * it will soon start gobbling up the traversal vector. Because that traversal
   * vector decreases in size with each step, it also ensures the arrival is not too
   * abrupt.
   */

  var updateTraversalFraction = function updateTraversalFraction(clock) {
    var searchTimeElapsed = clock.getElapsedTime(); // let fraction: number = Math.pow(searchTimeElapsed, beta) * alpha;

    var fraction = searchTimeElapsed * searchTimeElapsed * searchTimeElapsed * alpha;
    if (fraction < 0.0) fraction = 0.0;
    if (fraction > 1.0) fraction = 1.0;
    return fraction;
  };

  function vectorBetweenTwoVector3s(v1, v2) {
    return new THREE.Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
  }

  function distanceBetweenTwoVector3s(v1, v2) {
    return vectorBetweenTwoVector3s(v1, v2).length();
  }

  /**
   * By providing a zoomable target, this function will compute a 'scenic'
   * position that will be used by other functions to move the camera.
   */

  var updateDestinationCameraPosition = function updateDestinationCameraPosition(zoomTarget) {
    var scale = zoomTarget.getScale();
    var radius = zoomTarget.getRadius();

    if (zoomTarget.NAME === 'SUN') {
      // Position around sun is arbitrary
      var _zoomTarget$getPositi = zoomTarget.getPosition(),
          x = _zoomTarget$getPositi.x,
          y = _zoomTarget$getPositi.y,
          z = _zoomTarget$getPositi.z;

      return new THREE.Vector3(x + 3 * radius * scale, y + 3 * radius * scale, z);
    } // Logic to find 'scenic' destination with sun in view in the distance
    // to the side of target based on some back-of-envelope high-school geometry


    var X = zoomTarget.getPosition().clone();
    var r = 2 * radius * scale;
    var sinAlpha = r / X.length();
    var alpha = Math.asin(sinAlpha);
    X.applyAxisAngle(new THREE.Vector3(0, 0, 1), alpha);
    var lengthenFactor = (X.length() + 4 * radius * scale) / X.length();
    X.multiplyScalar(lengthenFactor);
    return X;
  };

  /**
   * Function to compute the next position for a camera given a zoomable target
   * (e.g. a planet), the camera, and a 'traversal' fraction that parameterizes
   * how fast to move toward that target
   */

  var updateCameraPosition = function updateCameraPosition(camera, zoomTarget, zoomTraversalFraction) {
    // Determine where you want to end up
    var _updateDestinationCam = updateDestinationCameraPosition(zoomTarget),
        x = _updateDestinationCam.x,
        y = _updateDestinationCam.y,
        z = _updateDestinationCam.z; // Get vector between present and destination positions
    // This is the vector "to-be-fractionally-traversed"


    var cp = camera.position;
    var relativeDestinationCameraVector = new THREE.Vector3(x - cp.x, y - cp.y, z - cp.z); // Traverse the camera some fraction along said vector

    var newCameraPosition = new THREE.Vector3(cp.x + relativeDestinationCameraVector.x * zoomTraversalFraction, cp.y + relativeDestinationCameraVector.y * zoomTraversalFraction, cp.z + relativeDestinationCameraVector.z * zoomTraversalFraction); // Return signal to stop/continue

    var isZoomingPosition = true; // Decide whether to stop searching and instead lock onto destinationCameraPosition

    var separation = distanceBetweenTwoVector3s(newCameraPosition, new THREE.Vector3(x, y, z));
    var smallThresholdSeparation = 0.001;

    if (separation < smallThresholdSeparation) {
      isZoomingPosition = false;
      newCameraPosition = new THREE.Vector3(x, y, z);
    } //Finally, update computed new camera position


    camera.position.set(newCameraPosition.x, newCameraPosition.y, newCameraPosition.z);
    return isZoomingPosition;
  };

  /**
   * By providing a zoomable target, your camera, and a 'traversal fraction',
   * this function will compute the next modification in viewing direction for
   * the camera in order to pan towards the target
   */

  var updateCameraViewingAngle = function updateCameraViewingAngle(camera, zoomTarget, zoomTraversalFraction) {
    // Get vector from where you are to where you want to look
    var camPos = camera.position;
    var destinationLookPosition = zoomTarget.getPosition();
    var destinationLookVector = new THREE.Vector3(destinationLookPosition.x - camPos.x, destinationLookPosition.y - camPos.y, destinationLookPosition.z - camPos.z); // Get unitary vector of direction camera is presently pointing

    var presentLookVector = camera.getWorldDirection(new THREE.Vector3()); // In order for the change in viewing angle to feel like it matches
    // the change in position, we need to multiply the unitary vector to
    // be on the same order of size as the destinationLookVector

    presentLookVector.multiplyScalar(destinationLookVector.length()); // Use these two vectors to compute the vector "to-be-fractionally-traversed"
    // N.b. you might need to sketch a diagram to understand why this works

    var relativeDestinationLookVector = new THREE.Vector3(destinationLookVector.x - presentLookVector.x, destinationLookVector.y - presentLookVector.y, destinationLookVector.z - presentLookVector.z); // Fractionally traverse said vector

    var newLookPosition = new THREE.Vector3(camera.position.x + presentLookVector.x + relativeDestinationLookVector.x * zoomTraversalFraction, camera.position.y + presentLookVector.y + relativeDestinationLookVector.y * zoomTraversalFraction, camera.position.z + presentLookVector.z + relativeDestinationLookVector.z * zoomTraversalFraction); // Signal whether to stop/continue

    var isZoomingAngle = true; // Decide whether to stop searching and visually lock onto destinationLookPosition

    var smallThresholdAngle = 0.0025;
    var theta = destinationLookVector.angleTo(presentLookVector);

    if (theta < smallThresholdAngle) {
      isZoomingAngle = false;
      newLookPosition = destinationLookPosition;
    } //Finally, update computed new viewing and camera position


    camera.lookAt(newLookPosition.x, newLookPosition.y, newLookPosition.z);
    return isZoomingAngle;
  };

  class BufferGeometryUtils {

  	static computeTangents( geometry ) {

  		geometry.computeTangents();
  		console.warn( 'THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.' );

  	}

  	/**
  	 * @param  {Array<BufferGeometry>} geometries
  	 * @param  {Boolean} useGroups
  	 * @return {BufferGeometry}
  	 */
  	static mergeBufferGeometries( geometries, useGroups = false ) {

  		const isIndexed = geometries[ 0 ].index !== null;

  		const attributesUsed = new Set( Object.keys( geometries[ 0 ].attributes ) );
  		const morphAttributesUsed = new Set( Object.keys( geometries[ 0 ].morphAttributes ) );

  		const attributes = {};
  		const morphAttributes = {};

  		const morphTargetsRelative = geometries[ 0 ].morphTargetsRelative;

  		const mergedGeometry = new THREE.BufferGeometry();

  		let offset = 0;

  		for ( let i = 0; i < geometries.length; ++ i ) {

  			const geometry = geometries[ i ];
  			let attributesCount = 0;

  			// ensure that all geometries are indexed, or none

  			if ( isIndexed !== ( geometry.index !== null ) ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.' );
  				return null;

  			}

  			// gather attributes, exit early if they're different

  			for ( const name in geometry.attributes ) {

  				if ( ! attributesUsed.has( name ) ) {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.' );
  					return null;

  				}

  				if ( attributes[ name ] === undefined ) attributes[ name ] = [];

  				attributes[ name ].push( geometry.attributes[ name ] );

  				attributesCount ++;

  			}

  			// ensure geometries have the same number of attributes

  			if ( attributesCount !== attributesUsed.size ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. Make sure all geometries have the same number of attributes.' );
  				return null;

  			}

  			// gather morph attributes, exit early if they're different

  			if ( morphTargetsRelative !== geometry.morphTargetsRelative ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. .morphTargetsRelative must be consistent throughout all geometries.' );
  				return null;

  			}

  			for ( const name in geometry.morphAttributes ) {

  				if ( ! morphAttributesUsed.has( name ) ) {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '.  .morphAttributes must be consistent throughout all geometries.' );
  					return null;

  				}

  				if ( morphAttributes[ name ] === undefined ) morphAttributes[ name ] = [];

  				morphAttributes[ name ].push( geometry.morphAttributes[ name ] );

  			}

  			// gather .userData

  			mergedGeometry.userData.mergedUserData = mergedGeometry.userData.mergedUserData || [];
  			mergedGeometry.userData.mergedUserData.push( geometry.userData );

  			if ( useGroups ) {

  				let count;

  				if ( isIndexed ) {

  					count = geometry.index.count;

  				} else if ( geometry.attributes.position !== undefined ) {

  					count = geometry.attributes.position.count;

  				} else {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. The geometry must have either an index or a position attribute' );
  					return null;

  				}

  				mergedGeometry.addGroup( offset, count, i );

  				offset += count;

  			}

  		}

  		// merge indices

  		if ( isIndexed ) {

  			let indexOffset = 0;
  			const mergedIndex = [];

  			for ( let i = 0; i < geometries.length; ++ i ) {

  				const index = geometries[ i ].index;

  				for ( let j = 0; j < index.count; ++ j ) {

  					mergedIndex.push( index.getX( j ) + indexOffset );

  				}

  				indexOffset += geometries[ i ].attributes.position.count;

  			}

  			mergedGeometry.setIndex( mergedIndex );

  		}

  		// merge attributes

  		for ( const name in attributes ) {

  			const mergedAttribute = this.mergeBufferAttributes( attributes[ name ] );

  			if ( ! mergedAttribute ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' attribute.' );
  				return null;

  			}

  			mergedGeometry.setAttribute( name, mergedAttribute );

  		}

  		// merge morph attributes

  		for ( const name in morphAttributes ) {

  			const numMorphTargets = morphAttributes[ name ][ 0 ].length;

  			if ( numMorphTargets === 0 ) break;

  			mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
  			mergedGeometry.morphAttributes[ name ] = [];

  			for ( let i = 0; i < numMorphTargets; ++ i ) {

  				const morphAttributesToMerge = [];

  				for ( let j = 0; j < morphAttributes[ name ].length; ++ j ) {

  					morphAttributesToMerge.push( morphAttributes[ name ][ j ][ i ] );

  				}

  				const mergedMorphAttribute = this.mergeBufferAttributes( morphAttributesToMerge );

  				if ( ! mergedMorphAttribute ) {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' morphAttribute.' );
  					return null;

  				}

  				mergedGeometry.morphAttributes[ name ].push( mergedMorphAttribute );

  			}

  		}

  		return mergedGeometry;

  	}

  	/**
  	 * @param {Array<BufferAttribute>} attributes
  	 * @return {BufferAttribute}
  	 */
  	static mergeBufferAttributes( attributes ) {

  		let TypedArray;
  		let itemSize;
  		let normalized;
  		let arrayLength = 0;

  		for ( let i = 0; i < attributes.length; ++ i ) {

  			const attribute = attributes[ i ];

  			if ( attribute.isInterleavedBufferAttribute ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported.' );
  				return null;

  			}

  			if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
  			if ( TypedArray !== attribute.array.constructor ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.' );
  				return null;

  			}

  			if ( itemSize === undefined ) itemSize = attribute.itemSize;
  			if ( itemSize !== attribute.itemSize ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.' );
  				return null;

  			}

  			if ( normalized === undefined ) normalized = attribute.normalized;
  			if ( normalized !== attribute.normalized ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.' );
  				return null;

  			}

  			arrayLength += attribute.array.length;

  		}

  		const array = new TypedArray( arrayLength );
  		let offset = 0;

  		for ( let i = 0; i < attributes.length; ++ i ) {

  			array.set( attributes[ i ].array, offset );

  			offset += attributes[ i ].array.length;

  		}

  		return new THREE.BufferAttribute( array, itemSize, normalized );

  	}

  	/**
  	 * @param {Array<BufferAttribute>} attributes
  	 * @return {Array<InterleavedBufferAttribute>}
  	 */
  	static interleaveAttributes( attributes ) {

  		// Interleaves the provided attributes into an InterleavedBuffer and returns
  		// a set of InterleavedBufferAttributes for each attribute
  		let TypedArray;
  		let arrayLength = 0;
  		let stride = 0;

  		// calculate the the length and type of the interleavedBuffer
  		for ( let i = 0, l = attributes.length; i < l; ++ i ) {

  			const attribute = attributes[ i ];

  			if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
  			if ( TypedArray !== attribute.array.constructor ) {

  				console.error( 'AttributeBuffers of different types cannot be interleaved' );
  				return null;

  			}

  			arrayLength += attribute.array.length;
  			stride += attribute.itemSize;

  		}

  		// Create the set of buffer attributes
  		const interleavedBuffer = new THREE.InterleavedBuffer( new TypedArray( arrayLength ), stride );
  		let offset = 0;
  		const res = [];
  		const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
  		const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

  		for ( let j = 0, l = attributes.length; j < l; j ++ ) {

  			const attribute = attributes[ j ];
  			const itemSize = attribute.itemSize;
  			const count = attribute.count;
  			const iba = new THREE.InterleavedBufferAttribute( interleavedBuffer, itemSize, offset, attribute.normalized );
  			res.push( iba );

  			offset += itemSize;

  			// Move the data for each attribute into the new interleavedBuffer
  			// at the appropriate offset
  			for ( let c = 0; c < count; c ++ ) {

  				for ( let k = 0; k < itemSize; k ++ ) {

  					iba[ setters[ k ] ]( c, attribute[ getters[ k ] ]( c ) );

  				}

  			}

  		}

  		return res;

  	}

  	/**
  	 * @param {Array<BufferGeometry>} geometry
  	 * @return {number}
  	 */
  	static estimateBytesUsed( geometry ) {

  		// Return the estimated memory used by this geometry in bytes
  		// Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
  		// for InterleavedBufferAttributes.
  		let mem = 0;
  		for ( const name in geometry.attributes ) {

  			const attr = geometry.getAttribute( name );
  			mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;

  		}

  		const indices = geometry.getIndex();
  		mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
  		return mem;

  	}

  	/**
  	 * @param {BufferGeometry} geometry
  	 * @param {number} tolerance
  	 * @return {BufferGeometry>}
  	 */
  	static mergeVertices( geometry, tolerance = 1e-4 ) {

  		tolerance = Math.max( tolerance, Number.EPSILON );

  		// Generate an index buffer if the geometry doesn't have one, or optimize it
  		// if it's already available.
  		const hashToIndex = {};
  		const indices = geometry.getIndex();
  		const positions = geometry.getAttribute( 'position' );
  		const vertexCount = indices ? indices.count : positions.count;

  		// next value for triangle indices
  		let nextIndex = 0;

  		// attributes and new attribute arrays
  		const attributeNames = Object.keys( geometry.attributes );
  		const attrArrays = {};
  		const morphAttrsArrays = {};
  		const newIndices = [];
  		const getters = [ 'getX', 'getY', 'getZ', 'getW' ];

  		// initialize the arrays
  		for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

  			const name = attributeNames[ i ];

  			attrArrays[ name ] = [];

  			const morphAttr = geometry.morphAttributes[ name ];
  			if ( morphAttr ) {

  				morphAttrsArrays[ name ] = new Array( morphAttr.length ).fill().map( () => [] );

  			}

  		}

  		// convert the error tolerance to an amount of decimal places to truncate to
  		const decimalShift = Math.log10( 1 / tolerance );
  		const shiftMultiplier = Math.pow( 10, decimalShift );
  		for ( let i = 0; i < vertexCount; i ++ ) {

  			const index = indices ? indices.getX( i ) : i;

  			// Generate a hash for the vertex attributes at the current index 'i'
  			let hash = '';
  			for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

  				const name = attributeNames[ j ];
  				const attribute = geometry.getAttribute( name );
  				const itemSize = attribute.itemSize;

  				for ( let k = 0; k < itemSize; k ++ ) {

  					// double tilde truncates the decimal value
  					hash += `${ ~ ~ ( attribute[ getters[ k ] ]( index ) * shiftMultiplier ) },`;

  				}

  			}

  			// Add another reference to the vertex if it's already
  			// used by another index
  			if ( hash in hashToIndex ) {

  				newIndices.push( hashToIndex[ hash ] );

  			} else {

  				// copy data to the new index in the attribute arrays
  				for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

  					const name = attributeNames[ j ];
  					const attribute = geometry.getAttribute( name );
  					const morphAttr = geometry.morphAttributes[ name ];
  					const itemSize = attribute.itemSize;
  					const newarray = attrArrays[ name ];
  					const newMorphArrays = morphAttrsArrays[ name ];

  					for ( let k = 0; k < itemSize; k ++ ) {

  						const getterFunc = getters[ k ];
  						newarray.push( attribute[ getterFunc ]( index ) );

  						if ( morphAttr ) {

  							for ( let m = 0, ml = morphAttr.length; m < ml; m ++ ) {

  								newMorphArrays[ m ].push( morphAttr[ m ][ getterFunc ]( index ) );

  							}

  						}

  					}

  				}

  				hashToIndex[ hash ] = nextIndex;
  				newIndices.push( nextIndex );
  				nextIndex ++;

  			}

  		}

  		// Generate typed arrays from new attribute arrays and update
  		// the attributeBuffers
  		const result = geometry.clone();
  		for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

  			const name = attributeNames[ i ];
  			const oldAttribute = geometry.getAttribute( name );

  			const buffer = new oldAttribute.array.constructor( attrArrays[ name ] );
  			const attribute = new THREE.BufferAttribute( buffer, oldAttribute.itemSize, oldAttribute.normalized );

  			result.setAttribute( name, attribute );

  			// Update the attribute arrays
  			if ( name in morphAttrsArrays ) {

  				for ( let j = 0; j < morphAttrsArrays[ name ].length; j ++ ) {

  					const oldMorphAttribute = geometry.morphAttributes[ name ][ j ];

  					const buffer = new oldMorphAttribute.array.constructor( morphAttrsArrays[ name ][ j ] );
  					const morphAttribute = new THREE.BufferAttribute( buffer, oldMorphAttribute.itemSize, oldMorphAttribute.normalized );
  					result.morphAttributes[ name ][ j ] = morphAttribute;

  				}

  			}

  		}

  		// indices

  		result.setIndex( newIndices );

  		return result;

  	}

  	/**
  	 * @param {BufferGeometry} geometry
  	 * @param {number} drawMode
  	 * @return {BufferGeometry>}
  	 */
  	static toTrianglesDrawMode( geometry, drawMode ) {

  		if ( drawMode === THREE.TrianglesDrawMode ) {

  			console.warn( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.' );
  			return geometry;

  		}

  		if ( drawMode === THREE.TriangleFanDrawMode || drawMode === THREE.TriangleStripDrawMode ) {

  			let index = geometry.getIndex();

  			// generate index if not present

  			if ( index === null ) {

  				const indices = [];

  				const position = geometry.getAttribute( 'position' );

  				if ( position !== undefined ) {

  					for ( let i = 0; i < position.count; i ++ ) {

  						indices.push( i );

  					}

  					geometry.setIndex( indices );
  					index = geometry.getIndex();

  				} else {

  					console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
  					return geometry;

  				}

  			}

  			//

  			const numberOfTriangles = index.count - 2;
  			const newIndices = [];

  			if ( drawMode === THREE.TriangleFanDrawMode ) {

  				// gl.TRIANGLE_FAN

  				for ( let i = 1; i <= numberOfTriangles; i ++ ) {

  					newIndices.push( index.getX( 0 ) );
  					newIndices.push( index.getX( i ) );
  					newIndices.push( index.getX( i + 1 ) );

  				}

  			} else {

  				// gl.TRIANGLE_STRIP

  				for ( let i = 0; i < numberOfTriangles; i ++ ) {

  					if ( i % 2 === 0 ) {

  						newIndices.push( index.getX( i ) );
  						newIndices.push( index.getX( i + 1 ) );
  						newIndices.push( index.getX( i + 2 ) );

  					} else {

  						newIndices.push( index.getX( i + 2 ) );
  						newIndices.push( index.getX( i + 1 ) );
  						newIndices.push( index.getX( i ) );

  					}

  				}

  			}

  			if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

  				console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

  			}

  			// build final geometry

  			const newGeometry = geometry.clone();
  			newGeometry.setIndex( newIndices );
  			newGeometry.clearGroups();

  			return newGeometry;

  		} else {

  			console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode );
  			return geometry;

  		}

  	}

  	/**
  	 * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
  	 * Helpful for Raytracing or Decals.
  	 * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
  	 * @return {Object} An Object with original position/normal attributes and morphed ones.
  	 */
  	static computeMorphedAttributes( object ) {

  		if ( object.geometry.isBufferGeometry !== true ) {

  			console.error( 'THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry.' );
  			return null;

  		}

  		const _vA = new THREE.Vector3();
  		const _vB = new THREE.Vector3();
  		const _vC = new THREE.Vector3();

  		const _tempA = new THREE.Vector3();
  		const _tempB = new THREE.Vector3();
  		const _tempC = new THREE.Vector3();

  		const _morphA = new THREE.Vector3();
  		const _morphB = new THREE.Vector3();
  		const _morphC = new THREE.Vector3();

  		function _calculateMorphedAttributeData(
  			object,
  			material,
  			attribute,
  			morphAttribute,
  			morphTargetsRelative,
  			a,
  			b,
  			c,
  			modifiedAttributeArray
  		) {

  			_vA.fromBufferAttribute( attribute, a );
  			_vB.fromBufferAttribute( attribute, b );
  			_vC.fromBufferAttribute( attribute, c );

  			const morphInfluences = object.morphTargetInfluences;

  			if ( material.morphTargets && morphAttribute && morphInfluences ) {

  				_morphA.set( 0, 0, 0 );
  				_morphB.set( 0, 0, 0 );
  				_morphC.set( 0, 0, 0 );

  				for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

  					const influence = morphInfluences[ i ];
  					const morph = morphAttribute[ i ];

  					if ( influence === 0 ) continue;

  					_tempA.fromBufferAttribute( morph, a );
  					_tempB.fromBufferAttribute( morph, b );
  					_tempC.fromBufferAttribute( morph, c );

  					if ( morphTargetsRelative ) {

  						_morphA.addScaledVector( _tempA, influence );
  						_morphB.addScaledVector( _tempB, influence );
  						_morphC.addScaledVector( _tempC, influence );

  					} else {

  						_morphA.addScaledVector( _tempA.sub( _vA ), influence );
  						_morphB.addScaledVector( _tempB.sub( _vB ), influence );
  						_morphC.addScaledVector( _tempC.sub( _vC ), influence );

  					}

  				}

  				_vA.add( _morphA );
  				_vB.add( _morphB );
  				_vC.add( _morphC );

  			}

  			if ( object.isSkinnedMesh ) {

  				object.boneTransform( a, _vA );
  				object.boneTransform( b, _vB );
  				object.boneTransform( c, _vC );

  			}

  			modifiedAttributeArray[ a * 3 + 0 ] = _vA.x;
  			modifiedAttributeArray[ a * 3 + 1 ] = _vA.y;
  			modifiedAttributeArray[ a * 3 + 2 ] = _vA.z;
  			modifiedAttributeArray[ b * 3 + 0 ] = _vB.x;
  			modifiedAttributeArray[ b * 3 + 1 ] = _vB.y;
  			modifiedAttributeArray[ b * 3 + 2 ] = _vB.z;
  			modifiedAttributeArray[ c * 3 + 0 ] = _vC.x;
  			modifiedAttributeArray[ c * 3 + 1 ] = _vC.y;
  			modifiedAttributeArray[ c * 3 + 2 ] = _vC.z;

  		}

  		const geometry = object.geometry;
  		const material = object.material;

  		let a, b, c;
  		const index = geometry.index;
  		const positionAttribute = geometry.attributes.position;
  		const morphPosition = geometry.morphAttributes.position;
  		const morphTargetsRelative = geometry.morphTargetsRelative;
  		const normalAttribute = geometry.attributes.normal;
  		const morphNormal = geometry.morphAttributes.position;

  		const groups = geometry.groups;
  		const drawRange = geometry.drawRange;
  		let i, j, il, jl;
  		let group, groupMaterial;
  		let start, end;

  		const modifiedPosition = new Float32Array( positionAttribute.count * positionAttribute.itemSize );
  		const modifiedNormal = new Float32Array( normalAttribute.count * normalAttribute.itemSize );

  		if ( index !== null ) {

  			// indexed buffer geometry

  			if ( Array.isArray( material ) ) {

  				for ( i = 0, il = groups.length; i < il; i ++ ) {

  					group = groups[ i ];
  					groupMaterial = material[ group.materialIndex ];

  					start = Math.max( group.start, drawRange.start );
  					end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

  					for ( j = start, jl = end; j < jl; j += 3 ) {

  						a = index.getX( j );
  						b = index.getX( j + 1 );
  						c = index.getX( j + 2 );

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							positionAttribute,
  							morphPosition,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedPosition
  						);

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							normalAttribute,
  							morphNormal,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedNormal
  						);

  					}

  				}

  			} else {

  				start = Math.max( 0, drawRange.start );
  				end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

  				for ( i = start, il = end; i < il; i += 3 ) {

  					a = index.getX( i );
  					b = index.getX( i + 1 );
  					c = index.getX( i + 2 );

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						positionAttribute,
  						morphPosition,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedPosition
  					);

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						normalAttribute,
  						morphNormal,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedNormal
  					);

  				}

  			}

  		} else if ( positionAttribute !== undefined ) {

  			// non-indexed buffer geometry

  			if ( Array.isArray( material ) ) {

  				for ( i = 0, il = groups.length; i < il; i ++ ) {

  					group = groups[ i ];
  					groupMaterial = material[ group.materialIndex ];

  					start = Math.max( group.start, drawRange.start );
  					end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

  					for ( j = start, jl = end; j < jl; j += 3 ) {

  						a = j;
  						b = j + 1;
  						c = j + 2;

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							positionAttribute,
  							morphPosition,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedPosition
  						);

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							normalAttribute,
  							morphNormal,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedNormal
  						);

  					}

  				}

  			} else {

  				start = Math.max( 0, drawRange.start );
  				end = Math.min( positionAttribute.count, ( drawRange.start + drawRange.count ) );

  				for ( i = start, il = end; i < il; i += 3 ) {

  					a = i;
  					b = i + 1;
  					c = i + 2;

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						positionAttribute,
  						morphPosition,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedPosition
  					);

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						normalAttribute,
  						morphNormal,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedNormal
  					);

  				}

  			}

  		}

  		const morphedPositionAttribute = new THREE.Float32BufferAttribute( modifiedPosition, 3 );
  		const morphedNormalAttribute = new THREE.Float32BufferAttribute( modifiedNormal, 3 );

  		return {

  			positionAttribute: positionAttribute,
  			normalAttribute: normalAttribute,
  			morphedPositionAttribute: morphedPositionAttribute,
  			morphedNormalAttribute: morphedNormalAttribute

  		};

  	}

  }

  var mba_data = [
  	{
  		H: 3.53,
  		name: "Ceres",
  		desig: "A801 AA",
  		epoch: 2459200.5,
  		ma: 205.54542,
  		w: 73.72487,
  		om: 80.27236,
  		i: 10.5879,
  		e: 0.0781685,
  		a: 2.7660891
  	},
  	{
  		H: 4.21,
  		name: "Pallas",
  		desig: "A802 FA",
  		epoch: 2459200.5,
  		ma: 187.58635,
  		w: 310.2881,
  		om: 172.96589,
  		i: 34.85446,
  		e: 0.22975,
  		a: 2.7743817
  	},
  	{
  		H: 5.27,
  		name: "Juno",
  		desig: "A804 RA",
  		epoch: 2459200.5,
  		ma: 170.71125,
  		w: 248.03277,
  		om: 169.85304,
  		i: 12.99149,
  		e: 0.2569881,
  		a: 2.6680198
  	},
  	{
  		H: 3.31,
  		name: "Vesta",
  		desig: "A807 FA",
  		epoch: 2459200.5,
  		ma: 258.56787,
  		w: 150.9224,
  		om: 103.80837,
  		i: 7.14165,
  		e: 0.088425,
  		a: 2.3620301
  	},
  	{
  		H: 6.98,
  		name: "Astraea",
  		desig: "A845 XA",
  		epoch: 2459200.5,
  		ma: 65.61238,
  		w: 358.62503,
  		om: 141.57168,
  		i: 5.36754,
  		e: 0.1907879,
  		a: 2.5736208
  	},
  	{
  		H: 5.59,
  		name: "Iris",
  		desig: "A847 PA",
  		epoch: 2459200.5,
  		ma: 300.79262,
  		w: 145.24071,
  		om: 259.54045,
  		i: 5.51827,
  		e: 0.2296463,
  		a: 2.3871387
  	},
  	{
  		H: 6.54,
  		name: "Flora",
  		desig: "A847 UA",
  		epoch: 2459200.5,
  		ma: 15.63852,
  		w: 285.50181,
  		om: 110.87634,
  		i: 5.88909,
  		e: 0.1558501,
  		a: 2.2013739
  	},
  	{
  		H: 6.33,
  		name: "Metis",
  		desig: "A848 HA",
  		epoch: 2459200.5,
  		ma: 77.42938,
  		w: 6.29362,
  		om: 68.90477,
  		i: 5.57632,
  		e: 0.1233535,
  		a: 2.3860851
  	},
  	{
  		H: 5.55,
  		name: "Hygiea",
  		desig: "A849 GA",
  		epoch: 2459200.5,
  		ma: 258.20934,
  		w: 312.42105,
  		om: 283.19812,
  		i: 3.83148,
  		e: 0.1119474,
  		a: 3.1426597
  	},
  	{
  		H: 6.58,
  		name: "Parthenope",
  		desig: "A850 JA",
  		epoch: 2459200.5,
  		ma: 72.99659,
  		w: 195.40454,
  		om: 125.52869,
  		i: 4.63183,
  		e: 0.0997356,
  		a: 2.4523807
  	},
  	{
  		H: 7.3,
  		name: "Victoria",
  		desig: "A850 RA",
  		epoch: 2459200.5,
  		ma: 299.09975,
  		w: 69.73343,
  		om: 235.39704,
  		i: 8.37323,
  		e: 0.2205197,
  		a: 2.3334691
  	},
  	{
  		H: 6.83,
  		name: "Egeria",
  		desig: "A850 VA",
  		epoch: 2459200.5,
  		ma: 330.79183,
  		w: 80.2932,
  		om: 43.21908,
  		i: 16.53381,
  		e: 0.0853703,
  		a: 2.5766163
  	},
  	{
  		H: 6.5,
  		name: "Irene",
  		desig: "A851 KA",
  		epoch: 2459200.5,
  		ma: 307.22193,
  		w: 97.75088,
  		om: 86.12379,
  		i: 9.12076,
  		e: 0.1661571,
  		a: 2.5867243
  	},
  	{
  		H: 5.37,
  		name: "Eunomia",
  		desig: "A851 OA",
  		epoch: 2459200.5,
  		ma: 60.84583,
  		w: 98.61792,
  		om: 292.93527,
  		i: 11.75338,
  		e: 0.1863457,
  		a: 2.6442555
  	},
  	{
  		H: 6.06,
  		name: "Psyche",
  		desig: "A852 FA",
  		epoch: 2459200.5,
  		ma: 46.43564,
  		w: 229.08639,
  		om: 150.03697,
  		i: 3.09652,
  		e: 0.1337219,
  		a: 2.9235421
  	},
  	{
  		H: 7.78,
  		name: "Thetis",
  		desig: "A852 HA",
  		epoch: 2459200.5,
  		ma: 95.98367,
  		w: 135.83392,
  		om: 125.54165,
  		i: 5.59294,
  		e: 0.1331931,
  		a: 2.4700742
  	},
  	{
  		H: 6.51,
  		name: "Melpomene",
  		desig: "A852 MA",
  		epoch: 2459200.5,
  		ma: 77.09389,
  		w: 228.10469,
  		om: 150.36234,
  		i: 10.13181,
  		e: 0.2176288,
  		a: 2.2961213
  	},
  	{
  		H: 7.38,
  		name: "Fortuna",
  		desig: "A852 QA",
  		epoch: 2459200.5,
  		ma: 351.90128,
  		w: 182.36682,
  		om: 211.05921,
  		i: 1.57288,
  		e: 0.1568159,
  		a: 2.4420809
  	},
  	{
  		H: 6.55,
  		name: "Massalia",
  		desig: "A852 SA",
  		epoch: 2459200.5,
  		ma: 275.03174,
  		w: 257.5373,
  		om: 205.98688,
  		i: 0.70883,
  		e: 0.1427795,
  		a: 2.4082679
  	},
  	{
  		H: 7.52,
  		name: "Lutetia",
  		desig: "A852 VA",
  		epoch: 2459200.5,
  		ma: 139.77287,
  		w: 250.05341,
  		om: 80.86496,
  		i: 3.06373,
  		e: 0.1634125,
  		a: 2.4355915
  	},
  	{
  		H: 6.51,
  		name: "Kalliope",
  		desig: "A852 WA",
  		epoch: 2459200.5,
  		ma: 314.14023,
  		w: 357.48976,
  		om: 65.99521,
  		i: 13.702,
  		e: 0.0980737,
  		a: 2.9093016
  	},
  	{
  		H: 7.16,
  		name: "Thalia",
  		desig: "A852 XA",
  		epoch: 2459200.5,
  		ma: 114.80724,
  		w: 60.69139,
  		om: 66.84387,
  		i: 10.11223,
  		e: 0.2345406,
  		a: 2.6257537
  	},
  	{
  		H: 7.26,
  		name: "Themis",
  		desig: "A853 GA",
  		epoch: 2459200.5,
  		ma: 101.61372,
  		w: 107.09778,
  		om: 35.91878,
  		i: 0.75159,
  		e: 0.1242408,
  		a: 3.1361128
  	},
  	{
  		H: 7.85,
  		name: "Phocaea",
  		desig: "A853 GB",
  		epoch: 2459200.5,
  		ma: 331.92091,
  		w: 90.31206,
  		om: 214.11874,
  		i: 21.60654,
  		e: 0.2549971,
  		a: 2.3997041
  	},
  	{
  		H: 7.5,
  		name: "Proserpina",
  		desig: "A853 JA",
  		epoch: 2459200.5,
  		ma: 242.27999,
  		w: 193.5795,
  		om: 45.77317,
  		i: 3.56241,
  		e: 0.0896468,
  		a: 2.6555683
  	},
  	{
  		H: 7.07,
  		name: "Euterpe",
  		desig: "A853 VA",
  		epoch: 2459200.5,
  		ma: 139.9535,
  		w: 356.35166,
  		om: 94.78687,
  		i: 1.58371,
  		e: 0.1730555,
  		a: 2.3461365
  	},
  	{
  		H: 7.24,
  		name: "Bellona",
  		desig: "A854 EA",
  		epoch: 2459200.5,
  		ma: 41.42653,
  		w: 343.95964,
  		om: 144.28705,
  		i: 9.43044,
  		e: 0.1516839,
  		a: 2.7757239
  	},
  	{
  		H: 6.02,
  		name: "Amphitrite",
  		desig: "A854 EB",
  		epoch: 2459200.5,
  		ma: 69.17705,
  		w: 63.25554,
  		om: 356.33035,
  		i: 6.0821,
  		e: 0.0730873,
  		a: 2.555022
  	},
  	{
  		H: 7.56,
  		name: "Urania",
  		desig: "A854 OA",
  		epoch: 2459200.5,
  		ma: 191.81638,
  		w: 87.276,
  		om: 307.46798,
  		i: 2.09601,
  		e: 0.1278529,
  		a: 2.3647825
  	},
  	{
  		H: 6.86,
  		name: "Euphrosyne",
  		desig: "A854 RA",
  		epoch: 2459200.5,
  		ma: 192.51755,
  		w: 61.64795,
  		om: 31.0412,
  		i: 26.26682,
  		e: 0.2193014,
  		a: 3.1597394
  	},
  	{
  		H: 7.66,
  		name: "Pomona",
  		desig: "A854 UA",
  		epoch: 2459200.5,
  		ma: 174.60531,
  		w: 338.91578,
  		om: 220.38009,
  		i: 5.52218,
  		e: 0.0817917,
  		a: 2.5866077
  	},
  	{
  		H: 8.52,
  		name: "Polyhymnia",
  		desig: "A854 UB",
  		epoch: 2459200.5,
  		ma: 103.32688,
  		w: 338.4469,
  		om: 8.45142,
  		i: 1.85274,
  		e: 0.3315512,
  		a: 2.8745305
  	},
  	{
  		H: 8.63,
  		name: "Circe",
  		desig: "A855 GA",
  		epoch: 2459200.5,
  		ma: 261.31905,
  		w: 330.40711,
  		om: 184.34293,
  		i: 5.49702,
  		e: 0.1064492,
  		a: 2.6863545
  	},
  	{
  		H: 8.65,
  		name: "Leukothea",
  		desig: "A855 HA",
  		epoch: 2459200.5,
  		ma: 329.33303,
  		w: 213.43768,
  		om: 353.71444,
  		i: 7.93306,
  		e: 0.2251671,
  		a: 2.9938196
  	},
  	{
  		H: 8.64,
  		name: "Atalante",
  		desig: "A855 TA",
  		epoch: 2459200.5,
  		ma: 69.60164,
  		w: 47.81128,
  		om: 358.20033,
  		i: 18.37013,
  		e: 0.3052055,
  		a: 2.7474415
  	},
  	{
  		H: 7.4,
  		name: "Fides",
  		desig: "A855 TB",
  		epoch: 2459200.5,
  		ma: 119.36875,
  		w: 62.70881,
  		om: 7.25758,
  		i: 3.07122,
  		e: 0.1757109,
  		a: 2.6415308
  	},
  	{
  		H: 8.55,
  		name: "Leda",
  		desig: "A856 AA",
  		epoch: 2459200.5,
  		ma: 135.48262,
  		w: 169.2458,
  		om: 295.72212,
  		i: 6.97126,
  		e: 0.1545582,
  		a: 2.7388641
  	},
  	{
  		H: 6.07,
  		name: "Laetitia",
  		desig: "A856 CA",
  		epoch: 2459200.5,
  		ma: 69.65401,
  		w: 209.39819,
  		om: 156.94365,
  		i: 10.36993,
  		e: 0.111607,
  		a: 2.7695611
  	},
  	{
  		H: 7.16,
  		name: "Harmonia",
  		desig: "A856 FA",
  		epoch: 2459200.5,
  		ma: 281.40489,
  		w: 269.10845,
  		om: 94.1898,
  		i: 4.25707,
  		e: 0.0471112,
  		a: 2.2675919
  	},
  	{
  		H: 7.44,
  		name: "Daphne",
  		desig: "A856 KA",
  		epoch: 2459200.5,
  		ma: 263.21254,
  		w: 45.92602,
  		om: 178.06257,
  		i: 15.78784,
  		e: 0.2748403,
  		a: 2.7616755
  	},
  	{
  		H: 7.58,
  		name: "Isis",
  		desig: "A856 KB",
  		epoch: 2459200.5,
  		ma: 358.51828,
  		w: 237.17983,
  		om: 84.19361,
  		i: 8.51286,
  		e: 0.2230666,
  		a: 2.4424895
  	},
  	{
  		H: 8.01,
  		name: "Ariadne",
  		desig: "A857 GA",
  		epoch: 2459200.5,
  		ma: 318.63231,
  		w: 16.39915,
  		om: 264.80604,
  		i: 3.47138,
  		e: 0.1684621,
  		a: 2.2028857
  	},
  	{
  		H: 6.93,
  		name: "Nysa",
  		desig: "A857 KA",
  		epoch: 2459200.5,
  		ma: 238.53119,
  		w: 344.08363,
  		om: 131.49657,
  		i: 3.71162,
  		e: 0.148545,
  		a: 2.42322
  	},
  	{
  		H: 7.63,
  		name: "Eugenia",
  		desig: "A857 MA",
  		epoch: 2459200.5,
  		ma: 170.62301,
  		w: 87.79275,
  		om: 147.59834,
  		i: 6.60544,
  		e: 0.083983,
  		a: 2.7196519
  	},
  	{
  		H: 8.54,
  		name: "Hestia",
  		desig: "A857 QA",
  		epoch: 2459200.5,
  		ma: 217.28082,
  		w: 177.39033,
  		om: 181.07754,
  		i: 2.35038,
  		e: 0.1725107,
  		a: 2.5247463
  	},
  	{
  		H: 8.18,
  		name: "Aglaja",
  		desig: "A857 RA",
  		epoch: 2459200.5,
  		ma: 172.90735,
  		w: 314.90884,
  		om: 3.0579,
  		i: 4.97485,
  		e: 0.1299725,
  		a: 2.8823999
  	},
  	{
  		H: 7.18,
  		name: "Doris",
  		desig: "A857 SA",
  		epoch: 2459200.5,
  		ma: 177.5538,
  		w: 252.76841,
  		om: 183.54569,
  		i: 6.5475,
  		e: 0.0720236,
  		a: 3.1100678
  	},
  	{
  		H: 7.86,
  		name: "Pales",
  		desig: "A857 SB",
  		epoch: 2459200.5,
  		ma: 348.14532,
  		w: 113.03702,
  		om: 285.05315,
  		i: 3.20178,
  		e: 0.2212453,
  		a: 3.0966517
  	},
  	{
  		H: 9.32,
  		name: "Virginia",
  		desig: "A857 TA",
  		epoch: 2459200.5,
  		ma: 295.8064,
  		w: 199.94016,
  		om: 173.49632,
  		i: 2.83782,
  		e: 0.2857256,
  		a: 2.650665
  	},
  	{
  		H: 7.59,
  		name: "Nemausa",
  		desig: "A858 BA",
  		epoch: 2459200.5,
  		ma: 259.11646,
  		w: 2.11957,
  		om: 175.9618,
  		i: 9.97837,
  		e: 0.0676773,
  		a: 2.3653826
  	},
  	{
  		H: 6.48,
  		name: "Europa",
  		desig: "A858 CA",
  		epoch: 2459200.5,
  		ma: 346.16834,
  		w: 343.26718,
  		om: 128.5993,
  		i: 7.47855,
  		e: 0.1105903,
  		a: 3.0950469
  	},
  	{
  		H: 8.92,
  		name: "Kalypso",
  		desig: "A858 GA",
  		epoch: 2459200.5,
  		ma: 203.56645,
  		w: 313.65133,
  		om: 143.47371,
  		i: 5.17571,
  		e: 0.2037099,
  		a: 2.6212539
  	},
  	{
  		H: 7.83,
  		name: "Alexandra",
  		desig: "A858 RA",
  		epoch: 2459200.5,
  		ma: 150.70942,
  		w: 345.11014,
  		om: 313.24514,
  		i: 11.79843,
  		e: 0.1972022,
  		a: 2.7115715
  	},
  	{
  		H: 7.86,
  		name: "Pandora",
  		desig: "A858 RB",
  		epoch: 2459200.5,
  		ma: 129.96523,
  		w: 5.38612,
  		om: 10.36269,
  		i: 7.18005,
  		e: 0.1433915,
  		a: 2.7602883
  	},
  	{
  		H: 8.51,
  		name: "Melete",
  		desig: "A857 RB",
  		epoch: 2459200.5,
  		ma: 28.00091,
  		w: 104.94092,
  		om: 192.95257,
  		i: 8.08134,
  		e: 0.2382822,
  		a: 2.5962548
  	},
  	{
  		H: 7,
  		name: "Mnemosyne",
  		desig: "A859 SA",
  		epoch: 2459200.5,
  		ma: 249.17162,
  		w: 210.40109,
  		om: 199.09091,
  		i: 15.19865,
  		e: 0.1115975,
  		a: 3.1571781
  	},
  	{
  		H: 9.04,
  		name: "Concordia",
  		desig: "A860 FA",
  		epoch: 2459200.5,
  		ma: 71.05689,
  		w: 31.55671,
  		om: 161.09651,
  		i: 5.066,
  		e: 0.0427115,
  		a: 2.7003451
  	},
  	{
  		H: 8.02,
  		name: "Elpis",
  		desig: "A860 RA",
  		epoch: 2459200.5,
  		ma: 292.01114,
  		w: 210.61621,
  		om: 169.95047,
  		i: 8.64263,
  		e: 0.1183216,
  		a: 2.7150802
  	},
  	{
  		H: 8.5,
  		name: "Echo",
  		desig: "A860 RB",
  		epoch: 2459200.5,
  		ma: 8.27414,
  		w: 271.18875,
  		om: 191.54156,
  		i: 3.60033,
  		e: 0.184969,
  		a: 2.3925659
  	},
  	{
  		H: 7.66,
  		name: "Danae",
  		desig: "A860 RC",
  		epoch: 2459200.5,
  		ma: 26.84753,
  		w: 12.50246,
  		om: 333.57289,
  		i: 18.21138,
  		e: 0.1647763,
  		a: 2.9831735
  	},
  	{
  		H: 8.81,
  		name: "Erato",
  		desig: "A860 RD",
  		epoch: 2459200.5,
  		ma: 345.75207,
  		w: 277.25877,
  		om: 125.12454,
  		i: 2.23662,
  		e: 0.1676142,
  		a: 3.1279913
  	},
  	{
  		H: 7.45,
  		name: "Ausonia",
  		desig: "A861 CA",
  		epoch: 2459200.5,
  		ma: 298.86299,
  		w: 296.14566,
  		om: 337.72161,
  		i: 5.77677,
  		e: 0.1269573,
  		a: 2.3947995
  	},
  	{
  		H: 7.69,
  		name: "Angelina",
  		desig: "A861 EA",
  		epoch: 2459200.5,
  		ma: 172.35013,
  		w: 179.67487,
  		om: 309.09833,
  		i: 1.30953,
  		e: 0.1248194,
  		a: 2.6853415
  	},
  	{
  		H: 6.89,
  		name: "Cybele",
  		desig: "A861 EB",
  		epoch: 2459200.5,
  		ma: 354.07584,
  		w: 102.88663,
  		om: 155.61552,
  		i: 3.56404,
  		e: 0.1122112,
  		a: 3.425277
  	},
  	{
  		H: 9.54,
  		name: "Maja",
  		desig: "A861 GA",
  		epoch: 2459200.5,
  		ma: 156.6502,
  		w: 43.8402,
  		om: 7.49408,
  		i: 3.04628,
  		e: 0.1731414,
  		a: 2.6449037
  	},
  	{
  		H: 8.38,
  		name: "Asia",
  		desig: "A861 HA",
  		epoch: 2459200.5,
  		ma: 75.58501,
  		w: 106.90686,
  		om: 202.41073,
  		i: 6.02889,
  		e: 0.185045,
  		a: 2.4212955
  	},
  	{
  		H: 6.99,
  		name: "Leto",
  		desig: "A861 HB",
  		epoch: 2459200.5,
  		ma: 28.9913,
  		w: 304.4725,
  		om: 44.07619,
  		i: 7.96174,
  		e: 0.1849861,
  		a: 2.7817939
  	},
  	{
  		H: 7.2,
  		name: "Hesperia",
  		desig: "A861 HC",
  		epoch: 2459200.5,
  		ma: 56.33519,
  		w: 289.05625,
  		om: 184.9822,
  		i: 8.59189,
  		e: 0.1701767,
  		a: 2.9762387
  	},
  	{
  		H: 8.16,
  		name: "Panopaea",
  		desig: "A861 JA",
  		epoch: 2459200.5,
  		ma: 210.02572,
  		w: 255.52951,
  		om: 47.67975,
  		i: 11.59243,
  		e: 0.1805335,
  		a: 2.6162998
  	},
  	{
  		H: 7.14,
  		name: "Niobe",
  		desig: "A861 PA",
  		epoch: 2459200.5,
  		ma: 33.16319,
  		w: 267.12557,
  		om: 316.00298,
  		i: 23.26571,
  		e: 0.1733724,
  		a: 2.7563328
  	},
  	{
  		H: 9.09,
  		name: "Feronia",
  		desig: "A861 KA",
  		epoch: 2459200.5,
  		ma: 180.00868,
  		w: 102.96933,
  		om: 207.95148,
  		i: 5.41526,
  		e: 0.1204681,
  		a: 2.2666419
  	},
  	{
  		H: 9.02,
  		name: "Klytia",
  		desig: "A862 GA",
  		epoch: 2459200.5,
  		ma: 290.09034,
  		w: 54.89078,
  		om: 6.85111,
  		i: 2.36994,
  		e: 0.0416949,
  		a: 2.6644418
  	},
  	{
  		H: 8.76,
  		name: "Galatea",
  		desig: "A862 QA",
  		epoch: 2459200.5,
  		ma: 42.18096,
  		w: 174.57042,
  		om: 197.14138,
  		i: 4.07043,
  		e: 0.2359739,
  		a: 2.7808367
  	},
  	{
  		H: 9.07,
  		name: "Eurydike",
  		desig: "A862 SA",
  		epoch: 2459200.5,
  		ma: 97.03772,
  		w: 339.37941,
  		om: 359.33207,
  		i: 4.99148,
  		e: 0.3035783,
  		a: 2.6745818
  	},
  	{
  		H: 8.03,
  		name: "Freia",
  		desig: "A862 UA",
  		epoch: 2459200.5,
  		ma: 18.03281,
  		w: 252.2334,
  		om: 204.29129,
  		i: 2.12122,
  		e: 0.1661498,
  		a: 3.4148314
  	},
  	{
  		H: 8.66,
  		name: "Frigga",
  		desig: "A862 VA",
  		epoch: 2459200.5,
  		ma: 59.0834,
  		w: 61.77229,
  		om: 1.13945,
  		i: 2.42276,
  		e: 0.1326898,
  		a: 2.6691314
  	},
  	{
  		H: 8.39,
  		name: "Diana",
  		desig: "A863 EA",
  		epoch: 2459200.5,
  		ma: 97.81784,
  		w: 152.74239,
  		om: 333.39608,
  		i: 8.70193,
  		e: 0.2070283,
  		a: 2.6187408
  	},
  	{
  		H: 7.99,
  		name: "Eurynome",
  		desig: "A863 RA",
  		epoch: 2459200.5,
  		ma: 23.06395,
  		w: 201.52403,
  		om: 206.53244,
  		i: 4.61223,
  		e: 0.1901003,
  		a: 2.4450563
  	},
  	{
  		H: 8.06,
  		name: "Sappho",
  		desig: "A864 JA",
  		epoch: 2459200.5,
  		ma: 267.38016,
  		w: 139.60147,
  		om: 218.68722,
  		i: 8.67615,
  		e: 0.2003978,
  		a: 2.2953195
  	},
  	{
  		H: 8.67,
  		name: "Terpsichore",
  		desig: "A864 SA",
  		epoch: 2459200.5,
  		ma: 109.93493,
  		w: 51.59015,
  		om: 0.94567,
  		i: 7.8041,
  		e: 0.2109631,
  		a: 2.8532371
  	},
  	{
  		H: 8.28,
  		name: "Alkmene",
  		desig: "A864 WA",
  		epoch: 2459200.5,
  		ma: 304.57479,
  		w: 111.11688,
  		om: 25.44363,
  		i: 2.82625,
  		e: 0.2203305,
  		a: 2.7634053
  	},
  	{
  		H: 8.77,
  		name: "Beatrix",
  		desig: "A865 HA",
  		epoch: 2459200.5,
  		ma: 25.52036,
  		w: 168.63317,
  		om: 27.72512,
  		i: 4.96405,
  		e: 0.0811616,
  		a: 2.431612
  	},
  	{
  		H: 9.37,
  		name: "Klio",
  		desig: "A865 QA",
  		epoch: 2459200.5,
  		ma: 270.21861,
  		w: 15.15248,
  		om: 327.51576,
  		i: 9.31759,
  		e: 0.2363237,
  		a: 2.361638
  	},
  	{
  		H: 7.75,
  		name: "Io",
  		desig: "A865 SA",
  		epoch: 2459200.5,
  		ma: 357.80227,
  		w: 122.83297,
  		om: 203.07041,
  		i: 11.95913,
  		e: 0.1946309,
  		a: 2.6532056
  	},
  	{
  		H: 8.76,
  		name: "Semele",
  		desig: "A866 AA",
  		epoch: 2459200.5,
  		ma: 99.85661,
  		w: 308.88568,
  		om: 86.09302,
  		i: 4.82029,
  		e: 0.215279,
  		a: 3.1071963
  	},
  	{
  		H: 6.91,
  		name: "Sylvia",
  		desig: "A866 KA",
  		epoch: 2459200.5,
  		ma: 183.68511,
  		w: 263.65973,
  		om: 73.03222,
  		i: 10.87553,
  		e: 0.0935987,
  		a: 3.4815341
  	},
  	{
  		H: 7.27,
  		name: "Thisbe",
  		desig: "A866 LA",
  		epoch: 2459200.5,
  		ma: 177.2179,
  		w: 36.39736,
  		om: 276.45797,
  		i: 5.21355,
  		e: 0.1617617,
  		a: 2.7701465
  	},
  	{
  		H: 6.75,
  		name: "Julia",
  		desig: "A866 PA",
  		epoch: 2459200.5,
  		ma: 282.84711,
  		w: 45.2667,
  		om: 311.55166,
  		i: 16.131,
  		e: 0.1850491,
  		a: 2.5500101
  	},
  	{
  		H: 8.2,
  		name: "Antiope",
  		desig: "A866 TA",
  		epoch: 2459200.5,
  		ma: 250.84447,
  		w: 245.02125,
  		om: 69.95432,
  		i: 2.20681,
  		e: 0.1666639,
  		a: 3.1479582
  	},
  	{
  		H: 8.89,
  		name: "Aegina",
  		desig: "A866 VA",
  		epoch: 2459200.5,
  		ma: 308.54889,
  		w: 74.38259,
  		om: 10.44072,
  		i: 2.10339,
  		e: 0.106497,
  		a: 2.5890748
  	},
  	{
  		H: 6.78,
  		name: "Undina",
  		desig: "A867 NA",
  		epoch: 2459200.5,
  		ma: 283.9187,
  		w: 238.96343,
  		om: 101.58086,
  		i: 9.93189,
  		e: 0.1049927,
  		a: 3.1857657
  	},
  	{
  		H: 7.94,
  		name: "Minerva",
  		desig: "A867 QA",
  		epoch: 2459200.5,
  		ma: 246.15017,
  		w: 275.00733,
  		om: 4.02386,
  		i: 8.55724,
  		e: 0.1390495,
  		a: 2.7561619
  	},
  	{
  		H: 7.66,
  		name: "Aurora",
  		desig: "A867 RA",
  		epoch: 2459200.5,
  		ma: 54.39731,
  		w: 60.32736,
  		om: 2.55777,
  		i: 7.96961,
  		e: 0.0944351,
  		a: 3.1581981
  	},
  	{
  		H: 8.05,
  		name: "Arethusa",
  		desig: "A867 WA",
  		epoch: 2459200.5,
  		ma: 184.52387,
  		w: 153.74213,
  		om: 243.01607,
  		i: 12.9967,
  		e: 0.1529684,
  		a: 3.063505
  	},
  	{
  		H: 7.76,
  		name: "Aegle",
  		desig: "A868 DA",
  		epoch: 2459200.5,
  		ma: 215.60258,
  		w: 208.39844,
  		om: 321.49113,
  		i: 15.98262,
  		e: 0.1412969,
  		a: 3.0481679
  	},
  	{
  		H: 7.82,
  		name: "Klotho",
  		desig: "A868 DB",
  		epoch: 2459200.5,
  		ma: 86.68332,
  		w: 268.63781,
  		om: 159.61714,
  		i: 11.77858,
  		e: 0.2573496,
  		a: 2.6686679
  	},
  	{
  		H: 8.91,
  		name: "Ianthe",
  		desig: "A868 HA",
  		epoch: 2459200.5,
  		ma: 260.08668,
  		w: 158.59313,
  		om: 353.90409,
  		i: 15.57664,
  		e: 0.187292,
  		a: 2.6866825
  	},
  	{
  		H: 9.56,
  		name: "Dike",
  		desig: "A868 KA",
  		epoch: 2459200.5,
  		ma: 20.21901,
  		w: 195.74483,
  		om: 41.51137,
  		i: 13.84664,
  		e: 0.1950987,
  		a: 2.6653037
  	},
  	{
  		H: 7.65,
  		name: "Hekate",
  		desig: "A868 NA",
  		epoch: 2459200.5,
  		ma: 355.77222,
  		w: 184.16326,
  		om: 127.17566,
  		i: 6.43332,
  		e: 0.1698461,
  		a: 3.0912712
  	},
  	{
  		H: 8.23,
  		name: "Helena",
  		desig: "A868 PA",
  		epoch: 2459200.5,
  		ma: 255.64896,
  		w: 348.41299,
  		om: 343.38419,
  		i: 10.19754,
  		e: 0.1407484,
  		a: 2.5826313
  	},
  	{
  		H: 9.39,
  		name: "Miriam",
  		desig: "A868 QA",
  		epoch: 2459200.5,
  		ma: 27.33693,
  		w: 147.05305,
  		om: 210.79534,
  		i: 5.17305,
  		e: 0.2509829,
  		a: 2.661926
  	},
  	{
  		H: 7.63,
  		name: "Hera",
  		desig: "A868 RA",
  		epoch: 2459200.5,
  		ma: 127.90775,
  		w: 188.84056,
  		om: 136.0772,
  		i: 5.41847,
  		e: 0.0792295,
  		a: 2.7027177
  	},
  	{
  		H: 8.41,
  		name: "Klymene",
  		desig: "A868 RB",
  		epoch: 2459200.5,
  		ma: 24.41225,
  		w: 31.74229,
  		om: 41.67239,
  		i: 2.78948,
  		e: 0.161065,
  		a: 3.1469486
  	},
  	{
  		H: 7.62,
  		name: "Dione",
  		desig: "A868 TA",
  		epoch: 2459200.5,
  		ma: 327.86789,
  		w: 331.17009,
  		om: 62.00658,
  		i: 4.57607,
  		e: 0.1593612,
  		a: 3.17985
  	},
  	{
  		H: 7.14,
  		name: "Camilla",
  		desig: "A868 WA",
  		epoch: 2459200.5,
  		ma: 57.54328,
  		w: 306.1984,
  		om: 172.5814,
  		i: 10.00281,
  		e: 0.0649925,
  		a: 3.4897242
  	},
  	{
  		H: 8.06,
  		name: "Hecuba",
  		desig: "A869 GB",
  		epoch: 2459200.5,
  		ma: 75.20937,
  		w: 206.81025,
  		om: 349.94913,
  		i: 4.22037,
  		e: 0.056005,
  		a: 3.2402379
  	},
  	{
  		H: 9.05,
  		name: "Felicitas",
  		desig: "A869 TA",
  		epoch: 2459200.5,
  		ma: 25.53728,
  		w: 57.60986,
  		om: 2.76508,
  		i: 7.84463,
  		e: 0.2993065,
  		a: 2.6951159
  	},
  	{
  		H: 7.85,
  		name: "Lydia",
  		desig: "A870 HA",
  		epoch: 2459200.5,
  		ma: 338.79546,
  		w: 282.1847,
  		om: 56.81848,
  		i: 5.9592,
  		e: 0.0811149,
  		a: 2.7341071
  	},
  	{
  		H: 8.2,
  		name: "Ate",
  		desig: "A870 PA",
  		epoch: 2459200.5,
  		ma: 206.92508,
  		w: 167.45034,
  		om: 305.70633,
  		i: 4.93386,
  		e: 0.1020423,
  		a: 2.5959376
  	},
  	{
  		H: 9.79,
  		name: "Iphigenia",
  		desig: "A870 SA",
  		epoch: 2459200.5,
  		ma: 224.6296,
  		w: 17.34661,
  		om: 323.40853,
  		i: 2.5996,
  		e: 0.1281491,
  		a: 2.4332889
  	},
  	{
  		H: 8.52,
  		name: "Amalthea",
  		desig: "A871 EA",
  		epoch: 2459200.5,
  		ma: 297.5403,
  		w: 78.63245,
  		om: 123.44604,
  		i: 5.04305,
  		e: 0.0865012,
  		a: 2.376476
  	},
  	{
  		H: 8.32,
  		name: "Kassandra",
  		desig: "A871 OA",
  		epoch: 2459200.5,
  		ma: 196.31827,
  		w: 352.75148,
  		om: 164.06462,
  		i: 4.94395,
  		e: 0.1375187,
  		a: 2.6762524
  	},
  	{
  		H: 7.65,
  		name: "Thyra",
  		desig: "A871 PA",
  		epoch: 2459200.5,
  		ma: 177.99488,
  		w: 97.02817,
  		om: 308.79624,
  		i: 11.59424,
  		e: 0.1932947,
  		a: 2.3787853
  	},
  	{
  		H: 7.87,
  		name: "Sirona",
  		desig: "A871 RA",
  		epoch: 2459200.5,
  		ma: 350.84808,
  		w: 94.37614,
  		om: 63.70738,
  		i: 3.56372,
  		e: 0.1417778,
  		a: 2.7671255
  	},
  	{
  		H: 8.08,
  		name: "Lomia",
  		desig: "A871 RB",
  		epoch: 2459200.5,
  		ma: 265.49245,
  		w: 49.28521,
  		om: 348.67127,
  		i: 14.90711,
  		e: 0.0259722,
  		a: 2.9952927
  	},
  	{
  		H: 8.91,
  		name: "Peitho",
  		desig: "A872 EA",
  		epoch: 2459200.5,
  		ma: 105.75445,
  		w: 33.27162,
  		om: 47.67404,
  		i: 7.74581,
  		e: 0.1646429,
  		a: 2.4364841
  	},
  	{
  		H: 8.36,
  		name: "Althaea",
  		desig: "A872 GA",
  		epoch: 2459200.5,
  		ma: 133.52175,
  		w: 171.39535,
  		om: 203.6382,
  		i: 5.78566,
  		e: 0.0808698,
  		a: 2.5818158
  	},
  	{
  		H: 7.79,
  		name: "Lachesis",
  		desig: "A872 GB",
  		epoch: 2459200.5,
  		ma: 341.19983,
  		w: 234.10206,
  		om: 341.16338,
  		i: 6.96366,
  		e: 0.0518159,
  		a: 3.1178449
  	},
  	{
  		H: 7.36,
  		name: "Hermione",
  		desig: "A872 JA",
  		epoch: 2459200.5,
  		ma: 312.06663,
  		w: 296.57966,
  		om: 73.01627,
  		i: 7.56923,
  		e: 0.1286175,
  		a: 3.4624342
  	},
  	{
  		H: 7.71,
  		name: "Gerda",
  		desig: "A872 OA",
  		epoch: 2459200.5,
  		ma: 76.35168,
  		w: 321.19936,
  		om: 178.12467,
  		i: 1.64075,
  		e: 0.0311028,
  		a: 3.2225444
  	},
  	{
  		H: 8.93,
  		name: "Brunhild",
  		desig: "A872 OB",
  		epoch: 2459200.5,
  		ma: 93.67906,
  		w: 125.59311,
  		om: 307.7252,
  		i: 6.41441,
  		e: 0.1206693,
  		a: 2.6948231
  	},
  	{
  		H: 8.13,
  		name: "Alkeste",
  		desig: "A872 QA",
  		epoch: 2459200.5,
  		ma: 352.60374,
  		w: 62.24447,
  		om: 187.97412,
  		i: 2.95756,
  		e: 0.0755317,
  		a: 2.6298002
  	},
  	{
  		H: 8.84,
  		name: "Liberatrix",
  		desig: "A872 RA",
  		epoch: 2459200.5,
  		ma: 294.0498,
  		w: 110.16605,
  		om: 168.98206,
  		i: 4.66467,
  		e: 0.0779579,
  		a: 2.7430771
  	},
  	{
  		H: 9.17,
  		name: "Velleda",
  		desig: "A872 VA",
  		epoch: 2459200.5,
  		ma: 356.79194,
  		w: 327.86098,
  		om: 23.24508,
  		i: 2.92354,
  		e: 0.105653,
  		a: 2.4390099
  	},
  	{
  		H: 8.61,
  		name: "Johanna",
  		desig: "A872 VB",
  		epoch: 2459200.5,
  		ma: 53.81289,
  		w: 93.41393,
  		om: 31.13931,
  		i: 8.24454,
  		e: 0.0666674,
  		a: 2.7550247
  	},
  	{
  		H: 7.72,
  		name: "Nemesis",
  		desig: "A872 WA",
  		epoch: 2459200.5,
  		ma: 201.88612,
  		w: 303.59787,
  		om: 76.23398,
  		i: 6.24556,
  		e: 0.1278726,
  		a: 2.7484633
  	},
  	{
  		H: 7.07,
  		name: "Antigone",
  		desig: "A873 CA",
  		epoch: 2459200.5,
  		ma: 61.70012,
  		w: 111.09816,
  		om: 135.66353,
  		i: 12.27098,
  		e: 0.2127872,
  		a: 2.8695564
  	},
  	{
  		H: 7.21,
  		name: "Elektra",
  		desig: "A873 DA",
  		epoch: 2459200.5,
  		ma: 52.85337,
  		w: 237.55872,
  		om: 145.01005,
  		i: 22.781,
  		e: 0.209103,
  		a: 3.1261541
  	},
  	{
  		H: 9.97,
  		name: "Vala",
  		desig: "A873 KA",
  		epoch: 2459200.5,
  		ma: 344.98225,
  		w: 160.72393,
  		om: 65.65228,
  		i: 4.96102,
  		e: 0.0672496,
  		a: 2.4314681
  	},
  	{
  		H: 7.91,
  		name: "Cyrene",
  		desig: "A873 QA",
  		epoch: 2459200.5,
  		ma: 249.75174,
  		w: 290.15838,
  		om: 319.00337,
  		i: 7.21392,
  		e: 0.135081,
  		a: 3.0647732
  	},
  	{
  		H: 8.81,
  		name: "Sophrosyne",
  		desig: "A873 SA",
  		epoch: 2459200.5,
  		ma: 253.9616,
  		w: 84.87766,
  		om: 345.86651,
  		i: 11.60715,
  		e: 0.1149685,
  		a: 2.5653616
  	},
  	{
  		H: 8.18,
  		name: "Hertha",
  		desig: "A874 DA",
  		epoch: 2459200.5,
  		ma: 134.29159,
  		w: 340.23471,
  		om: 343.56747,
  		i: 2.30393,
  		e: 0.2069055,
  		a: 2.4287633
  	},
  	{
  		H: 9.74,
  		name: "Austria",
  		desig: "A874 FA",
  		epoch: 2459200.5,
  		ma: 28.35757,
  		w: 132.45737,
  		om: 186.41037,
  		i: 9.58003,
  		e: 0.0849763,
  		a: 2.2865939
  	},
  	{
  		H: 8.19,
  		name: "Meliboea",
  		desig: "A874 HA",
  		epoch: 2459200.5,
  		ma: 146.14236,
  		w: 107.43196,
  		om: 202.20192,
  		i: 13.42717,
  		e: 0.2118431,
  		a: 3.1252026
  	},
  	{
  		H: 8.81,
  		name: "Tolosa",
  		desig: "A874 KA",
  		epoch: 2459200.5,
  		ma: 40.15638,
  		w: 260.47853,
  		om: 54.7342,
  		i: 3.20249,
  		e: 0.1625282,
  		a: 2.448485
  	},
  	{
  		H: 8.05,
  		name: "Juewa",
  		desig: "A874 TA",
  		epoch: 2459200.5,
  		ma: 40.17752,
  		w: 165.59948,
  		om: 1.81751,
  		i: 10.91002,
  		e: 0.1743902,
  		a: 2.7811503
  	},
  	{
  		H: 8.45,
  		name: "Siwa",
  		desig: "A874 TB",
  		epoch: 2459200.5,
  		ma: 189.27909,
  		w: 196.85351,
  		om: 107.17736,
  		i: 3.18546,
  		e: 0.2141285,
  		a: 2.7348049
  	},
  	{
  		H: 8.46,
  		name: "Lumen",
  		desig: "A875 AA",
  		epoch: 2459200.5,
  		ma: 295.42265,
  		w: 57.69054,
  		om: 318.47481,
  		i: 11.89922,
  		e: 0.2143405,
  		a: 2.6667813
  	},
  	{
  		H: 10.29,
  		name: "Polana",
  		desig: "A875 BA",
  		epoch: 2459200.5,
  		ma: 200.43762,
  		w: 291.81476,
  		om: 291.22259,
  		i: 2.23951,
  		e: 0.134885,
  		a: 2.4183313
  	},
  	{
  		H: 9.16,
  		name: "Adria",
  		desig: "A875 DA",
  		epoch: 2459200.5,
  		ma: 210.13075,
  		w: 252.31536,
  		om: 332.97669,
  		i: 11.4442,
  		e: 0.0739078,
  		a: 2.7611453
  	},
  	{
  		H: 8.13,
  		name: "Vibilia",
  		desig: "A875 LA",
  		epoch: 2459200.5,
  		ma: 144.01921,
  		w: 294.60711,
  		om: 76.18839,
  		i: 4.81391,
  		e: 0.2349154,
  		a: 2.6551386
  	},
  	{
  		H: 8.22,
  		name: "Adeona",
  		desig: "A875 LB",
  		epoch: 2459200.5,
  		ma: 233.17999,
  		w: 45.12188,
  		om: 77.34973,
  		i: 12.62012,
  		e: 0.145984,
  		a: 2.6721875
  	},
  	{
  		H: 8.39,
  		name: "Lucina",
  		desig: "A875 LC",
  		epoch: 2459200.5,
  		ma: 191.29308,
  		w: 145.72196,
  		om: 83.94808,
  		i: 13.10052,
  		e: 0.0668203,
  		a: 2.7178771
  	},
  	{
  		H: 8.8,
  		name: "Protogeneia",
  		desig: "A875 NA",
  		epoch: 2459200.5,
  		ma: 16.40593,
  		w: 100.94184,
  		om: 248.25271,
  		i: 1.93333,
  		e: 0.0232693,
  		a: 3.134497
  	},
  	{
  		H: 7.65,
  		name: "Gallia",
  		desig: "A875 PA",
  		epoch: 2459200.5,
  		ma: 132.306,
  		w: 252.68022,
  		om: 145.00204,
  		i: 25.29354,
  		e: 0.1873862,
  		a: 2.7710836
  	},
  	{
  		H: 10.57,
  		name: "Medusa",
  		desig: "A875 SA",
  		epoch: 2459200.5,
  		ma: 51.66315,
  		w: 251.32414,
  		om: 159.59656,
  		i: 0.93949,
  		e: 0.0650874,
  		a: 2.174867
  	},
  	{
  		H: 8.49,
  		name: "Nuwa",
  		desig: "A875 UA",
  		epoch: 2459200.5,
  		ma: 81.88788,
  		w: 153.58835,
  		om: 206.13742,
  		i: 2.20085,
  		e: 0.1234884,
  		a: 2.9845627
  	},
  	{
  		H: 9.21,
  		name: "Abundantia",
  		desig: "A875 VA",
  		epoch: 2459200.5,
  		ma: 157.26359,
  		w: 133.38629,
  		om: 38.76243,
  		i: 6.42976,
  		e: 0.0345246,
  		a: 2.5926139
  	},
  	{
  		H: 8.33,
  		name: "Atala",
  		desig: "A875 VB",
  		epoch: 2459200.5,
  		ma: 336.74961,
  		w: 59.07949,
  		om: 39.89842,
  		i: 12.12252,
  		e: 0.0811621,
  		a: 3.1386037
  	},
  	{
  		H: 7.71,
  		name: "Bertha",
  		desig: "A875 VD",
  		epoch: 2459200.5,
  		ma: 40.09723,
  		w: 160.58618,
  		om: 36.72541,
  		i: 20.97371,
  		e: 0.076659,
  		a: 3.1950131
  	},
  	{
  		H: 8.71,
  		name: "Xanthippe",
  		desig: "A875 WA",
  		epoch: 2459200.5,
  		ma: 253.04006,
  		w: 338.29388,
  		om: 241.83067,
  		i: 9.77898,
  		e: 0.2265967,
  		a: 2.7285015
  	},
  	{
  		H: 9.22,
  		name: "Koronis",
  		desig: "A876 AA",
  		epoch: 2459200.5,
  		ma: 335.81146,
  		w: 146.47248,
  		om: 277.70473,
  		i: 1.00568,
  		e: 0.0522022,
  		a: 2.8679287
  	},
  	{
  		H: 8.36,
  		name: "Aemilia",
  		desig: "A876 BA",
  		epoch: 2459200.5,
  		ma: 142.68722,
  		w: 333.24213,
  		om: 134.112,
  		i: 6.13124,
  		e: 0.1064262,
  		a: 3.1028183
  	},
  	{
  		H: 9.14,
  		name: "Una",
  		desig: "A876 DA",
  		epoch: 2459200.5,
  		ma: 135.4879,
  		w: 51.97771,
  		om: 8.58507,
  		i: 3.82452,
  		e: 0.067148,
  		a: 2.7267141
  	},
  	{
  		H: 9.13,
  		name: "Athor",
  		desig: "A876 HA",
  		epoch: 2459200.5,
  		ma: 58.83707,
  		w: 294.66151,
  		om: 18.56157,
  		i: 9.05787,
  		e: 0.1373346,
  		a: 2.3790314
  	},
  	{
  		H: 8.94,
  		name: "Laurentia",
  		desig: "A876 HB",
  		epoch: 2459200.5,
  		ma: 241.35364,
  		w: 115.88604,
  		om: 35.45403,
  		i: 6.09206,
  		e: 0.1816759,
  		a: 3.0144034
  	},
  	{
  		H: 9.75,
  		name: "Erigone",
  		desig: "A876 HC",
  		epoch: 2459200.5,
  		ma: 352.60382,
  		w: 298.72014,
  		om: 160.04444,
  		i: 4.8158,
  		e: 0.1920793,
  		a: 2.3666933
  	},
  	{
  		H: 8.85,
  		name: "Eva",
  		desig: "A876 NA",
  		epoch: 2459200.5,
  		ma: 228.77709,
  		w: 284.03838,
  		om: 76.80852,
  		i: 24.47502,
  		e: 0.3470003,
  		a: 2.631054
  	},
  	{
  		H: 7.88,
  		name: "Loreley",
  		desig: "A876 PA",
  		epoch: 2459200.5,
  		ma: 53.28911,
  		w: 345.2644,
  		om: 302.44959,
  		i: 11.2387,
  		e: 0.0848462,
  		a: 3.1244386
  	},
  	{
  		H: 9.91,
  		name: "Rhodope",
  		desig: "A876 PB",
  		epoch: 2459200.5,
  		ma: 233.77371,
  		w: 264.27422,
  		om: 128.91412,
  		i: 12.03,
  		e: 0.2118362,
  		a: 2.6845219
  	},
  	{
  		H: 9.22,
  		name: "Urda",
  		desig: "A876 QA",
  		epoch: 2459200.5,
  		ma: 6.82932,
  		w: 130.99703,
  		om: 166.12552,
  		i: 2.21379,
  		e: 0.0382764,
  		a: 2.8561617
  	},
  	{
  		H: 8.09,
  		name: "Sibylla",
  		desig: "A876 SA",
  		epoch: 2459200.5,
  		ma: 64.36009,
  		w: 175.49135,
  		om: 205.95212,
  		i: 4.66876,
  		e: 0.0742896,
  		a: 3.3747972
  	},
  	{
  		H: 9.52,
  		name: "Zelia",
  		desig: "A876 SB",
  		epoch: 2459200.5,
  		ma: 325.18433,
  		w: 334.87247,
  		om: 354.73773,
  		i: 5.50002,
  		e: 0.1312619,
  		a: 2.3585217
  	},
  	{
  		H: 9.35,
  		name: "Maria",
  		desig: "A877 AA",
  		epoch: 2459200.5,
  		ma: 115.6809,
  		w: 158.11659,
  		om: 301.29629,
  		i: 14.37882,
  		e: 0.0634606,
  		a: 2.5528687
  	},
  	{
  		H: 8.61,
  		name: "Ophelia",
  		desig: "A877 AB",
  		epoch: 2459200.5,
  		ma: 296.96653,
  		w: 55.8637,
  		om: 100.47769,
  		i: 2.54668,
  		e: 0.1320088,
  		a: 3.1309642
  	},
  	{
  		H: 8.76,
  		name: "Baucis",
  		desig: "A877 CA",
  		epoch: 2459200.5,
  		ma: 244.43167,
  		w: 359.76097,
  		om: 331.91806,
  		i: 10.02084,
  		e: 0.114484,
  		a: 2.379289
  	},
  	{
  		H: 7.96,
  		name: "Ino",
  		desig: "A877 PA",
  		epoch: 2459200.5,
  		ma: 164.27756,
  		w: 228.81377,
  		om: 148.16986,
  		i: 14.19921,
  		e: 0.2091375,
  		a: 2.7424294
  	},
  	{
  		H: 8.34,
  		name: "Phaedra",
  		desig: "A877 RA",
  		epoch: 2459200.5,
  		ma: 295.92504,
  		w: 289.5834,
  		om: 327.65731,
  		i: 12.12404,
  		e: 0.1410992,
  		a: 2.8613612
  	},
  	{
  		H: 8.48,
  		name: "Andromache",
  		desig: "A877 TA",
  		epoch: 2459200.5,
  		ma: 313.78564,
  		w: 320.03801,
  		om: 21.31988,
  		i: 3.21789,
  		e: 0.2333983,
  		a: 3.1853494
  	},
  	{
  		H: 8.29,
  		name: "Iduna",
  		desig: "A877 TB",
  		epoch: 2459200.5,
  		ma: 82.52518,
  		w: 188.57693,
  		om: 200.4818,
  		i: 22.66984,
  		e: 0.1710625,
  		a: 3.182555
  	},
  	{
  		H: 9.68,
  		name: "Irma",
  		desig: "A877 VA",
  		epoch: 2459200.5,
  		ma: 23.06992,
  		w: 39.38124,
  		om: 346.97672,
  		i: 1.38226,
  		e: 0.2337277,
  		a: 2.7711688
  	},
  	{
  		H: 9.39,
  		name: "Belisana",
  		desig: "A877 VB",
  		epoch: 2459200.5,
  		ma: 169.47391,
  		w: 211.48712,
  		om: 51.09264,
  		i: 1.89353,
  		e: 0.0427083,
  		a: 2.4604184
  	},
  	{
  		H: 8.15,
  		name: "Klytaemnestra",
  		desig: "A877 VC",
  		epoch: 2459200.5,
  		ma: 26.4382,
  		w: 103.78848,
  		om: 251.86374,
  		i: 7.8184,
  		e: 0.1100648,
  		a: 2.9717963
  	},
  	{
  		H: 10.2,
  		name: "Garumna",
  		desig: "A878 BA",
  		epoch: 2459200.5,
  		ma: 292.94557,
  		w: 176.13714,
  		om: 311.86794,
  		i: 0.86781,
  		e: 0.1674792,
  		a: 2.7211916
  	},
  	{
  		H: 7.91,
  		name: "Eucharis",
  		desig: "A878 CB",
  		epoch: 2459200.5,
  		ma: 317.64159,
  		w: 318.91224,
  		om: 143.01949,
  		i: 18.89336,
  		e: 0.2069377,
  		a: 3.1249246
  	},
  	{
  		H: 9.16,
  		name: "Elsa",
  		desig: "A878 CC",
  		epoch: 2459200.5,
  		ma: 79.59184,
  		w: 310.8242,
  		om: 107.18326,
  		i: 2.00542,
  		e: 0.1865701,
  		a: 2.4160904
  	},
  	{
  		H: 9.57,
  		name: "Istria",
  		desig: "A878 CD",
  		epoch: 2459200.5,
  		ma: 273.15103,
  		w: 264.00394,
  		om: 141.8834,
  		i: 26.39455,
  		e: 0.3492597,
  		a: 2.7944521
  	},
  	{
  		H: 8.46,
  		name: "Dejopeja",
  		desig: "A878 DA",
  		epoch: 2459200.5,
  		ma: 35.57892,
  		w: 210.39596,
  		om: 331.56239,
  		i: 1.14332,
  		e: 0.0657225,
  		a: 3.1859279
  	},
  	{
  		H: 7.67,
  		name: "Eunike",
  		desig: "A878 EA",
  		epoch: 2459200.5,
  		ma: 316.11276,
  		w: 223.45058,
  		om: 153.75848,
  		i: 23.25126,
  		e: 0.1279759,
  		a: 2.7395492
  	},
  	{
  		H: 8.27,
  		name: "Lamberta",
  		desig: "A878 GB",
  		epoch: 2459200.5,
  		ma: 207.70872,
  		w: 196.81212,
  		om: 21.68856,
  		i: 10.58304,
  		e: 0.2410576,
  		a: 2.7276662
  	},
  	{
  		H: 9.35,
  		name: "Menippe",
  		desig: "A878 MA",
  		epoch: 2459200.5,
  		ma: 330.40145,
  		w: 70.11342,
  		om: 240.89257,
  		i: 11.70335,
  		e: 0.1796,
  		a: 2.7614587
  	},
  	{
  		H: 9.34,
  		name: "Phthia",
  		desig: "A878 RA",
  		epoch: 2459200.5,
  		ma: 27.80805,
  		w: 168.31076,
  		om: 203.35747,
  		i: 5.17504,
  		e: 0.0356497,
  		a: 2.4500425
  	},
  	{
  		H: 9.01,
  		name: "Kolga",
  		desig: "A878 SB",
  		epoch: 2459200.5,
  		ma: 287.63263,
  		w: 225.87686,
  		om: 159.20153,
  		i: 11.51408,
  		e: 0.0893292,
  		a: 2.8984048
  	},
  	{
  		H: 7.34,
  		name: "Nausikaa",
  		desig: "A879 DA",
  		epoch: 2459200.5,
  		ma: 156.91588,
  		w: 30.66281,
  		om: 343.09889,
  		i: 6.79912,
  		e: 0.2454272,
  		a: 2.4030418
  	},
  	{
  		H: 9.83,
  		name: "Ambrosia",
  		desig: "A879 DB",
  		epoch: 2459200.5,
  		ma: 346.26499,
  		w: 82.52513,
  		om: 349.51297,
  		i: 11.99403,
  		e: 0.2972098,
  		a: 2.5996136
  	},
  	{
  		H: 7.83,
  		name: "Prokne",
  		desig: "A879 FA",
  		epoch: 2459200.5,
  		ma: 55.41816,
  		w: 163.00714,
  		om: 159.26769,
  		i: 18.51149,
  		e: 0.2379232,
  		a: 2.615337
  	},
  	{
  		H: 9.18,
  		name: "Eurykleia",
  		desig: "A879 HA",
  		epoch: 2459200.5,
  		ma: 77.6751,
  		w: 118.13081,
  		om: 6.97301,
  		i: 6.97128,
  		e: 0.0432405,
  		a: 2.8764639
  	},
  	{
  		H: 6.57,
  		name: "Philomela",
  		desig: "A879 JA",
  		epoch: 2459200.5,
  		ma: 197.51788,
  		w: 201.62911,
  		om: 72.32192,
  		i: 7.26152,
  		e: 0.0155603,
  		a: 3.1151468
  	},
  	{
  		H: 9.47,
  		name: "Arete",
  		desig: "A879 KA",
  		epoch: 2459200.5,
  		ma: 8.91631,
  		w: 245.86137,
  		om: 81.59114,
  		i: 8.79108,
  		e: 0.1639954,
  		a: 2.7389335
  	},
  	{
  		H: 8.5,
  		name: "Ampella",
  		desig: "A879 LA",
  		epoch: 2459200.5,
  		ma: 179.4217,
  		w: 89.15406,
  		om: 268.25361,
  		i: 9.3207,
  		e: 0.2273221,
  		a: 2.4589311
  	},
  	{
  		H: 8.55,
  		name: "Byblis",
  		desig: "A879 NA",
  		epoch: 2459200.5,
  		ma: 6.31906,
  		w: 180.3312,
  		om: 88.58259,
  		i: 15.47856,
  		e: 0.1810135,
  		a: 3.1672297
  	},
  	{
  		H: 8.42,
  		name: "Dynamene",
  		desig: "A879 OA",
  		epoch: 2459200.5,
  		ma: 356.96257,
  		w: 86.79596,
  		om: 324.27017,
  		i: 6.89977,
  		e: 0.1321444,
  		a: 2.7372042
  	},
  	{
  		H: 8.38,
  		name: "Penelope",
  		desig: "A879 PA",
  		epoch: 2459200.5,
  		ma: 79.25374,
  		w: 180.78515,
  		om: 156.92154,
  		i: 5.75575,
  		e: 0.1792958,
  		a: 2.6787697
  	},
  	{
  		H: 7.51,
  		name: "Chryseis",
  		desig: "A879 RA",
  		epoch: 2459200.5,
  		ma: 305.59524,
  		w: 0.11228,
  		om: 136.72386,
  		i: 8.85049,
  		e: 0.1039495,
  		a: 3.0700118
  	},
  	{
  		H: 8.85,
  		name: "Pompeja",
  		desig: "A879 SA",
  		epoch: 2459200.5,
  		ma: 33.09686,
  		w: 59.85381,
  		om: 347.72022,
  		i: 3.17212,
  		e: 0.0588823,
  		a: 2.7374168
  	},
  	{
  		H: 8.91,
  		name: "Kallisto",
  		desig: "A879 TA",
  		epoch: 2459200.5,
  		ma: 231.90836,
  		w: 55.33502,
  		om: 205.09395,
  		i: 8.28508,
  		e: 0.1739638,
  		a: 2.6715972
  	},
  	{
  		H: 9.51,
  		name: "Martha",
  		desig: "A879 TB",
  		epoch: 2459200.5,
  		ma: 180.21077,
  		w: 176.18873,
  		om: 211.77479,
  		i: 10.69646,
  		e: 0.0365613,
  		a: 2.7763935
  	},
  	{
  		H: 8.77,
  		name: "Hersilia",
  		desig: "A879 TC",
  		epoch: 2459200.5,
  		ma: 333.3947,
  		w: 302.84803,
  		om: 145.04253,
  		i: 3.77964,
  		e: 0.0388572,
  		a: 2.7403534
  	},
  	{
  		H: 10.12,
  		name: "Hedda",
  		desig: "A879 UA",
  		epoch: 2459200.5,
  		ma: 131.63277,
  		w: 193.16232,
  		om: 29.14869,
  		i: 3.80234,
  		e: 0.0297984,
  		a: 2.2836253
  	},
  	{
  		H: 9.19,
  		name: "Lacrimosa",
  		desig: "A879 UB",
  		epoch: 2459200.5,
  		ma: 167.48471,
  		w: 111.17964,
  		om: 4.20318,
  		i: 1.7451,
  		e: 0.0112743,
  		a: 2.895043
  	},
  	{
  		H: 8.24,
  		name: "Dido",
  		desig: "A879 UC",
  		epoch: 2459200.5,
  		ma: 232.95508,
  		w: 249.57053,
  		om: 0.64486,
  		i: 7.16899,
  		e: 0.0558977,
  		a: 3.1489186
  	},
  	{
  		H: 9.46,
  		name: "Isabella",
  		desig: "A879 VA",
  		epoch: 2459200.5,
  		ma: 144.86988,
  		w: 14.73125,
  		om: 32.56499,
  		i: 5.26032,
  		e: 0.1239038,
  		a: 2.7210709
  	},
  	{
  		H: 8.04,
  		name: "Isolda",
  		desig: "A879 XA",
  		epoch: 2459200.5,
  		ma: 197.61404,
  		w: 173.34877,
  		om: 263.63203,
  		i: 3.88426,
  		e: 0.1594348,
  		a: 3.0438455
  	},
  	{
  		H: 8.4,
  		name: "Medea",
  		desig: "A880 CA",
  		epoch: 2459200.5,
  		ma: 310.6356,
  		w: 104.92515,
  		om: 312.92323,
  		i: 4.279,
  		e: 0.1024548,
  		a: 3.1153441
  	},
  	{
  		H: 8.97,
  		name: "Lilaea",
  		desig: "A880 DA",
  		epoch: 2459200.5,
  		ma: 184.77496,
  		w: 162.2992,
  		om: 122.02817,
  		i: 6.80135,
  		e: 0.144583,
  		a: 2.7539156
  	},
  	{
  		H: 9.28,
  		name: "Aschera",
  		desig: "A880 DB",
  		epoch: 2459200.5,
  		ma: 179.73199,
  		w: 132.64492,
  		om: 341.94186,
  		i: 3.43658,
  		e: 0.0302005,
  		a: 2.6131884
  	},
  	{
  		H: 9.5,
  		name: "Oenone",
  		desig: "A880 GA",
  		epoch: 2459200.5,
  		ma: 72.88849,
  		w: 316.70931,
  		om: 24.90602,
  		i: 1.6818,
  		e: 0.0339383,
  		a: 2.7661804
  	},
  	{
  		H: 7.07,
  		name: "Kleopatra",
  		desig: "A880 GB",
  		epoch: 2459200.5,
  		ma: 197.51281,
  		w: 179.95999,
  		om: 215.347,
  		i: 13.11592,
  		e: 0.2512107,
  		a: 2.7924851
  	},
  	{
  		H: 9.93,
  		name: "Eudora",
  		desig: "A880 QA",
  		epoch: 2459200.5,
  		ma: 314.0724,
  		w: 155.32192,
  		om: 162.57415,
  		i: 10.52181,
  		e: 0.3105641,
  		a: 2.8662235
  	},
  	{
  		H: 8.57,
  		name: "Bianca",
  		desig: "A880 RA",
  		epoch: 2459200.5,
  		ma: 172.66842,
  		w: 62.62358,
  		om: 170.5752,
  		i: 15.19853,
  		e: 0.1172596,
  		a: 2.6665083
  	},
  	{
  		H: 9.28,
  		name: "Thusnelda",
  		desig: "A880 SA",
  		epoch: 2459200.5,
  		ma: 314.79837,
  		w: 142.67311,
  		om: 200.80224,
  		i: 10.86265,
  		e: 0.2236289,
  		a: 2.3541771
  	},
  	{
  		H: 7.79,
  		name: "Eos",
  		desig: "A882 BA",
  		epoch: 2459200.5,
  		ma: 9.66722,
  		w: 192.3004,
  		om: 141.7313,
  		i: 10.89288,
  		e: 0.1027386,
  		a: 3.0108617
  	},
  	{
  		H: 9.63,
  		name: "Lucia",
  		desig: "A882 CA",
  		epoch: 2459200.5,
  		ma: 271.73577,
  		w: 181.49301,
  		om: 80.13206,
  		i: 2.14895,
  		e: 0.1311666,
  		a: 3.1425699
  	},
  	{
  		H: 9.91,
  		name: "Rosa",
  		desig: "A882 EA",
  		epoch: 2459200.5,
  		ma: 235.70365,
  		w: 64.90321,
  		om: 47.5596,
  		i: 1.92321,
  		e: 0.1191427,
  		a: 3.0929859
  	},
  	{
  		H: 8.69,
  		name: "Oceana",
  		desig: "A882 FA",
  		epoch: 2459200.5,
  		ma: 7.61171,
  		w: 284.73596,
  		om: 352.77395,
  		i: 5.84223,
  		e: 0.0445515,
  		a: 2.6464318
  	},
  	{
  		H: 8.87,
  		name: "Henrietta",
  		desig: "A882 HA",
  		epoch: 2459200.5,
  		ma: 52.20263,
  		w: 103.74109,
  		om: 197.04736,
  		i: 20.85616,
  		e: 0.2633881,
  		a: 3.3912628
  	},
  	{
  		H: 9.91,
  		name: "Weringia",
  		desig: "A882 OA",
  		epoch: 2459200.5,
  		ma: 7.90004,
  		w: 154.1184,
  		om: 134.94615,
  		i: 15.97182,
  		e: 0.20445,
  		a: 2.7129257
  	},
  	{
  		H: 9.14,
  		name: "Philosophia",
  		desig: "A882 PA",
  		epoch: 2459200.5,
  		ma: 351.04833,
  		w: 267.43504,
  		om: 326.20754,
  		i: 9.15478,
  		e: 0.190708,
  		a: 3.1618198
  	},
  	{
  		H: 9.21,
  		name: "Adelinda",
  		desig: "A882 QB",
  		epoch: 2459200.5,
  		ma: 328.71949,
  		w: 309.86126,
  		om: 27.92895,
  		i: 2.07556,
  		e: 0.1393102,
  		a: 3.4295374
  	},
  	{
  		H: 7.38,
  		name: "Athamantis",
  		desig: "A882 RA",
  		epoch: 2459200.5,
  		ma: 184.19042,
  		w: 139.97591,
  		om: 239.84312,
  		i: 9.45071,
  		e: 0.0619683,
  		a: 2.3817657
  	},
  	{
  		H: 9.63,
  		name: "Vindobona",
  		desig: "A882 RB",
  		epoch: 2459200.5,
  		ma: 327.58914,
  		w: 269.08959,
  		om: 350.49939,
  		i: 5.10217,
  		e: 0.1515958,
  		a: 2.9221596
  	},
  	{
  		H: 10.45,
  		name: "Russia",
  		desig: "A883 BA",
  		epoch: 2459200.5,
  		ma: 240.66222,
  		w: 51.96571,
  		om: 152.20494,
  		i: 6.0657,
  		e: 0.1746673,
  		a: 2.5527041
  	},
  	{
  		H: 8.4,
  		name: "Asterope",
  		desig: "A883 JA",
  		epoch: 2459200.5,
  		ma: 140.9609,
  		w: 126.21393,
  		om: 221.96194,
  		i: 7.68936,
  		e: 0.0992866,
  		a: 2.660987
  	},
  	{
  		H: 8.92,
  		name: "Carolina",
  		desig: "A883 WA",
  		epoch: 2459200.5,
  		ma: 141.93271,
  		w: 207.89691,
  		om: 66.01163,
  		i: 9.03113,
  		e: 0.061816,
  		a: 2.8812544
  	},
  	{
  		H: 8.28,
  		name: "Honoria",
  		desig: "A884 HA",
  		epoch: 2459200.5,
  		ma: 271.84867,
  		w: 174.59327,
  		om: 185.84443,
  		i: 7.69542,
  		e: 0.1911515,
  		a: 2.7973189
  	},
  	{
  		H: 9.18,
  		name: "Coelestina",
  		desig: "A884 MA",
  		epoch: 2459200.5,
  		ma: 235.5962,
  		w: 200.21124,
  		om: 84.24105,
  		i: 9.74681,
  		e: 0.0710975,
  		a: 2.7634849
  	},
  	{
  		H: 8.09,
  		name: "Hypatia",
  		desig: "A884 NA",
  		epoch: 2459200.5,
  		ma: 128.35202,
  		w: 210.61238,
  		om: 183.86247,
  		i: 12.41264,
  		e: 0.0899548,
  		a: 2.9067512
  	},
  	{
  		H: 10.51,
  		name: "Adrastea",
  		desig: "A884 QA",
  		epoch: 2459200.5,
  		ma: 182.49923,
  		w: 209.91748,
  		om: 180.62113,
  		i: 6.17658,
  		e: 0.2356222,
  		a: 2.9652715
  	},
  	{
  		H: 9.21,
  		name: "Vanadis",
  		desig: "A884 QB",
  		epoch: 2459200.5,
  		ma: 62.02506,
  		w: 300.98932,
  		om: 115.06764,
  		i: 2.10557,
  		e: 0.2079332,
  		a: 2.6645731
  	},
  	{
  		H: 7.79,
  		name: "Germania",
  		desig: "A884 RA",
  		epoch: 2459200.5,
  		ma: 214.27217,
  		w: 80.45395,
  		om: 270.33984,
  		i: 5.5051,
  		e: 0.103426,
  		a: 3.048052
  	},
  	{
  		H: 9.37,
  		name: "Kriemhild",
  		desig: "A884 SA",
  		epoch: 2459200.5,
  		ma: 317.2145,
  		w: 279.22464,
  		om: 206.90709,
  		i: 11.35015,
  		e: 0.1217512,
  		a: 2.8617589
  	},
  	{
  		H: 9.93,
  		name: "Ida",
  		desig: "A884 SB",
  		epoch: 2459200.5,
  		ma: 1.69023,
  		w: 113.97303,
  		om: 323.63089,
  		i: 1.13024,
  		e: 0.0434928,
  		a: 2.8615733
  	},
  	{
  		H: 7.85,
  		name: "Vera",
  		desig: "A885 CA",
  		epoch: 2459200.5,
  		ma: 47.64853,
  		w: 331.62033,
  		om: 61.06538,
  		i: 5.17817,
  		e: 0.1968861,
  		a: 3.0975015
  	},
  	{
  		H: 8.47,
  		name: "Asporina",
  		desig: "A885 EA",
  		epoch: 2459200.5,
  		ma: 169.58528,
  		w: 96.19841,
  		om: 162.28449,
  		i: 15.62075,
  		e: 0.109354,
  		a: 2.694142
  	},
  	{
  		H: 8.25,
  		name: "Eukrate",
  		desig: "A885 EB",
  		epoch: 2459200.5,
  		ma: 62.83343,
  		w: 55.38005,
  		om: 0.05149,
  		i: 24.95224,
  		e: 0.2453372,
  		a: 2.7414692
  	},
  	{
  		H: 10.27,
  		name: "Lameia",
  		desig: "A885 LA",
  		epoch: 2459200.5,
  		ma: 309.63703,
  		w: 11.36816,
  		om: 246.78166,
  		i: 4.06082,
  		e: 0.0657272,
  		a: 2.4703882
  	},
  	{
  		H: 7.5,
  		name: "Bettina",
  		desig: "A885 RA",
  		epoch: 2459200.5,
  		ma: 340.41438,
  		w: 75.92074,
  		om: 23.82284,
  		i: 12.81819,
  		e: 0.1354671,
  		a: 3.144229
  	},
  	{
  		H: 9.94,
  		name: "Sophia",
  		desig: "A885 TA",
  		epoch: 2459200.5,
  		ma: 228.15127,
  		w: 286.91129,
  		om: 155.90692,
  		i: 10.52969,
  		e: 0.0949214,
  		a: 3.1052603
  	},
  	{
  		H: 9.79,
  		name: "Clementina",
  		desig: "A885 TB",
  		epoch: 2459200.5,
  		ma: 48.23192,
  		w: 159.18352,
  		om: 201.94635,
  		i: 10.03503,
  		e: 0.0662502,
  		a: 3.1600101
  	},
  	{
  		H: 10.38,
  		name: "Mathilde",
  		desig: "A885 VA",
  		epoch: 2459200.5,
  		ma: 175.76312,
  		w: 157.74299,
  		om: 179.53233,
  		i: 6.73973,
  		e: 0.2632606,
  		a: 2.6491532
  	},
  	{
  		H: 10.38,
  		name: "Oppavia",
  		desig: "A886 FB",
  		epoch: 2459200.5,
  		ma: 248.44599,
  		w: 155.31196,
  		om: 13.59403,
  		i: 9.46382,
  		e: 0.0789456,
  		a: 2.745405
  	},
  	{
  		H: 9.96,
  		name: "Walpurga",
  		desig: "A886 GA",
  		epoch: 2459200.5,
  		ma: 294.80275,
  		w: 47.35502,
  		om: 182.90942,
  		i: 13.32582,
  		e: 0.0657307,
  		a: 3.0003922
  	},
  	{
  		H: 9.46,
  		name: "Silesia",
  		desig: "A886 GB",
  		epoch: 2459200.5,
  		ma: 312.49292,
  		w: 31.54282,
  		om: 34.05805,
  		i: 3.61321,
  		e: 0.111619,
  		a: 3.1175089
  	},
  	{
  		H: 8.36,
  		name: "Tyche",
  		desig: "A886 JA",
  		epoch: 2459200.5,
  		ma: 169.92526,
  		w: 155.61447,
  		om: 207.544,
  		i: 14.32337,
  		e: 0.2045402,
  		a: 2.6151684
  	},
  	{
  		H: 7.9,
  		name: "Aletheia",
  		desig: "A886 MA",
  		epoch: 2459200.5,
  		ma: 67.22417,
  		w: 167.32508,
  		om: 86.8202,
  		i: 10.80963,
  		e: 0.1298458,
  		a: 3.1336961
  	},
  	{
  		H: 9.19,
  		name: "Huberta",
  		desig: "A886 TA",
  		epoch: 2459200.5,
  		ma: 358.07986,
  		w: 179.89222,
  		om: 164.94072,
  		i: 6.41878,
  		e: 0.1089849,
  		a: 3.4498353
  	},
  	{
  		H: 9.5,
  		name: "Prymno",
  		desig: "A886 UA",
  		epoch: 2459200.5,
  		ma: 118.37243,
  		w: 66.20253,
  		om: 96.63053,
  		i: 3.63548,
  		e: 0.0887126,
  		a: 2.3326646
  	},
  	{
  		H: 10.28,
  		name: "Dresda",
  		desig: "A886 VB",
  		epoch: 2459200.5,
  		ma: 139.84372,
  		w: 162.64805,
  		om: 216.14892,
  		i: 1.32036,
  		e: 0.0780249,
  		a: 2.8868163
  	},
  	{
  		H: 8.37,
  		name: "Libussa",
  		desig: "A886 YA",
  		epoch: 2459200.5,
  		ma: 232.52201,
  		w: 340.3991,
  		om: 49.5943,
  		i: 10.42483,
  		e: 0.1371431,
  		a: 2.7966568
  	},
  	{
  		H: 8.81,
  		name: "Aline",
  		desig: "A887 KA",
  		epoch: 2459200.5,
  		ma: 27.43783,
  		w: 151.66681,
  		om: 235.8431,
  		i: 13.39992,
  		e: 0.1538767,
  		a: 2.8052108
  	},
  	{
  		H: 10.28,
  		name: "Tirza",
  		desig: "A887 KB",
  		epoch: 2459200.5,
  		ma: 308.35807,
  		w: 196.93244,
  		om: 73.73851,
  		i: 6.00303,
  		e: 0.0987705,
  		a: 2.7740098
  	},
  	{
  		H: 8.42,
  		name: "Adorea",
  		desig: "A887 LA",
  		epoch: 2459200.5,
  		ma: 233.25823,
  		w: 68.64938,
  		om: 120.85575,
  		i: 2.44043,
  		e: 0.1369081,
  		a: 3.0919308
  	},
  	{
  		H: 9.74,
  		name: "Justitia",
  		desig: "A887 SA",
  		epoch: 2459200.5,
  		ma: 232.17229,
  		w: 119.64025,
  		om: 156.71287,
  		i: 5.47786,
  		e: 0.2130134,
  		a: 2.6168606
  	},
  	{
  		H: 8.83,
  		name: "Anahita",
  		desig: "A887 TA",
  		epoch: 2459200.5,
  		ma: 343.0833,
  		w: 80.50574,
  		om: 254.34097,
  		i: 2.36763,
  		e: 0.1505958,
  		a: 2.1986771
  	},
  	{
  		H: 9.91,
  		name: "Penthesilea",
  		desig: "A887 TB",
  		epoch: 2459200.5,
  		ma: 187.39971,
  		w: 57.70398,
  		om: 335.3503,
  		i: 3.53983,
  		e: 0.1042323,
  		a: 3.0027431
  	},
  	{
  		H: 10.68,
  		name: "Antonia",
  		desig: "A888 CA",
  		epoch: 2459200.5,
  		ma: 283.37304,
  		w: 69.2036,
  		om: 37.31565,
  		i: 4.4327,
  		e: 0.0283063,
  		a: 2.7767664
  	},
  	{
  		H: 10.05,
  		name: "Philagoria",
  		desig: "A888 GA",
  		epoch: 2459200.5,
  		ma: 341.79945,
  		w: 119.88166,
  		om: 92.7914,
  		i: 3.67744,
  		e: 0.1190516,
  		a: 3.0440658
  	},
  	{
  		H: 8.91,
  		name: "Sapientia",
  		desig: "A888 GB",
  		epoch: 2459200.5,
  		ma: 283.47256,
  		w: 39.55541,
  		om: 134.04233,
  		i: 4.76403,
  		e: 0.1635691,
  		a: 2.7710823
  	},
  	{
  		H: 8.65,
  		name: "Adelheid",
  		desig: "A888 HA",
  		epoch: 2459200.5,
  		ma: 131.60528,
  		w: 265.11045,
  		om: 211.15094,
  		i: 21.61289,
  		e: 0.0668481,
  		a: 3.1163067
  	},
  	{
  		H: 9.89,
  		name: "Elvira",
  		desig: "A888 JA",
  		epoch: 2459200.5,
  		ma: 228.78609,
  		w: 137.02122,
  		om: 231.24672,
  		i: 1.16287,
  		e: 0.0924503,
  		a: 2.8834132
  	},
  	{
  		H: 9.44,
  		name: "Paulina",
  		desig: "A888 KA",
  		epoch: 2459200.5,
  		ma: 29.16725,
  		w: 139.85731,
  		om: 61.99313,
  		i: 7.81718,
  		e: 0.1314637,
  		a: 2.7552826
  	},
  	{
  		H: 8.53,
  		name: "Thule",
  		desig: "A888 UA",
  		epoch: 2459200.5,
  		ma: 256.60457,
  		w: 25.32104,
  		om: 71.90032,
  		i: 2.33432,
  		e: 0.0431673,
  		a: 4.2693978
  	},
  	{
  		H: 8.65,
  		name: "Emma",
  		desig: "A889 CA",
  		epoch: 2459200.5,
  		ma: 61.80542,
  		w: 55.33064,
  		om: 303.9012,
  		i: 7.98948,
  		e: 0.1442624,
  		a: 3.0490448
  	},
  	{
  		H: 10.24,
  		name: "Amalia",
  		desig: "A889 KA",
  		epoch: 2459200.5,
  		ma: 75.52805,
  		w: 57.94984,
  		om: 233.69882,
  		i: 8.05608,
  		e: 0.2220132,
  		a: 2.3582649
  	},
  	{
  		H: 10.86,
  		name: "Regina",
  		desig: "A889 PA",
  		epoch: 2459200.5,
  		ma: 68.56405,
  		w: 14.27964,
  		om: 311.22873,
  		i: 17.61641,
  		e: 0.20463,
  		a: 3.0860763
  	},
  	{
  		H: 9.1,
  		name: "Iclea",
  		desig: "A889 PB",
  		epoch: 2459200.5,
  		ma: 329.5558,
  		w: 209.3859,
  		om: 148.92766,
  		i: 17.9369,
  		e: 0.0259137,
  		a: 3.1971165
  	},
  	{
  		H: 8.25,
  		name: "Nephthys",
  		desig: "A889 QA",
  		epoch: 2459200.5,
  		ma: 204.45583,
  		w: 119.2765,
  		om: 142.32043,
  		i: 10.03523,
  		e: 0.0229006,
  		a: 2.3532565
  	},
  	{
  		H: 9.81,
  		name: "Glauke",
  		desig: "A890 DA",
  		epoch: 2459200.5,
  		ma: 160.19588,
  		w: 84.64024,
  		om: 120.10528,
  		i: 4.33838,
  		e: 0.2058495,
  		a: 2.7589595
  	},
  	{
  		H: 9.55,
  		name: "Nenetta",
  		desig: "A890 EA",
  		epoch: 2459200.5,
  		ma: 66.12173,
  		w: 190.48185,
  		om: 181.93887,
  		i: 6.6788,
  		e: 0.201436,
  		a: 2.8763885
  	},
  	{
  		H: 10,
  		name: "Ludovica",
  		desig: "A890 HB",
  		epoch: 2459200.5,
  		ma: 60.26169,
  		w: 285.50225,
  		om: 43.48941,
  		i: 14.88727,
  		e: 0.0331342,
  		a: 2.5291174
  	},
  	{
  		H: 10.24,
  		name: "Brasilia",
  		desig: "A890 KA",
  		epoch: 2459200.5,
  		ma: 73.93355,
  		w: 86.8152,
  		om: 61.29895,
  		i: 15.5826,
  		e: 0.1057323,
  		a: 2.8599254
  	},
  	{
  		H: 10.23,
  		name: "Felicia",
  		desig: "A890 NA",
  		epoch: 2459200.5,
  		ma: 135.32288,
  		w: 186.11135,
  		om: 135.70893,
  		i: 6.26497,
  		e: 0.2332359,
  		a: 3.1562518
  	},
  	{
  		H: 9.96,
  		name: "Theresia",
  		desig: "A890 QA",
  		epoch: 2459200.5,
  		ma: 244.24085,
  		w: 147.84957,
  		om: 276.03057,
  		i: 2.70572,
  		e: 0.1690567,
  		a: 2.799947
  	},
  	{
  		H: 9.15,
  		name: "Caecilia",
  		desig: "A890 RA",
  		epoch: 2459200.5,
  		ma: 37.65335,
  		w: 353.36451,
  		om: 331.88879,
  		i: 7.55369,
  		e: 0.1399357,
  		a: 3.1647786
  	},
  	{
  		H: 9.82,
  		name: "Geraldina",
  		desig: "A890 TB",
  		epoch: 2459200.5,
  		ma: 228.54768,
  		w: 324.67722,
  		om: 42.64771,
  		i: 0.73192,
  		e: 0.0576184,
  		a: 3.2031203
  	},
  	{
  		H: 10.36,
  		name: "Bavaria",
  		desig: "A890 WA",
  		epoch: 2459200.5,
  		ma: 108.08229,
  		w: 123.9953,
  		om: 142.29996,
  		i: 4.8983,
  		e: 0.0669743,
  		a: 2.7239231
  	},
  	{
  		H: 8.97,
  		name: "Josephina",
  		desig: "A891 CA",
  		epoch: 2459200.5,
  		ma: 281.17223,
  		w: 65.77221,
  		om: 343.64719,
  		i: 6.88383,
  		e: 0.0573734,
  		a: 3.1266702
  	},
  	{
  		H: 8.81,
  		name: "Gordonia",
  		desig: "A891 DA",
  		epoch: 2459200.5,
  		ma: 333.94241,
  		w: 260.74425,
  		om: 207.47439,
  		i: 4.44952,
  		e: 0.1958169,
  		a: 3.0896926
  	},
  	{
  		H: 8.82,
  		name: "Unitas",
  		desig: "A891 EA",
  		epoch: 2459200.5,
  		ma: 164.58691,
  		w: 167.94504,
  		om: 141.85776,
  		i: 7.27768,
  		e: 0.1507141,
  		a: 2.3585455
  	},
  	{
  		H: 10.13,
  		name: "Nike",
  		desig: "A891 EB",
  		epoch: 2459200.5,
  		ma: 129.23451,
  		w: 324.29554,
  		om: 100.95402,
  		i: 6.12599,
  		e: 0.1435774,
  		a: 2.9060807
  	},
  	{
  		H: 8.13,
  		name: "Polyxo",
  		desig: "A891 FA",
  		epoch: 2459200.5,
  		ma: 59.38804,
  		w: 112.47272,
  		om: 181.59965,
  		i: 4.36249,
  		e: 0.0398503,
  		a: 2.7486258
  	},
  	{
  		H: 10.68,
  		name: "Fraternitas",
  		desig: "A891 GA",
  		epoch: 2459200.5,
  		ma: 192.23598,
  		w: 310.88671,
  		om: 356.50707,
  		i: 3.71412,
  		e: 0.113599,
  		a: 2.6657909
  	},
  	{
  		H: 10.17,
  		name: "Margarita",
  		desig: "A891 KA",
  		epoch: 2459200.5,
  		ma: 120.77672,
  		w: 325.24498,
  		om: 229.1359,
  		i: 3.16865,
  		e: 0.1150342,
  		a: 2.7634083
  	},
  	{
  		H: 10,
  		name: "Claudia",
  		desig: "A891 LA",
  		epoch: 2459200.5,
  		ma: 186.43772,
  		w: 84.6595,
  		om: 80.97772,
  		i: 3.22443,
  		e: 0.0049391,
  		a: 2.8966586
  	},
  	{
  		H: 8.79,
  		name: "Pierretta",
  		desig: "A891 QA",
  		epoch: 2459200.5,
  		ma: 22.19236,
  		w: 262.73148,
  		om: 6.228,
  		i: 9.02941,
  		e: 0.1602852,
  		a: 2.7837221
  	},
  	{
  		H: 9.08,
  		name: "Chaldaea",
  		desig: "A891 QB",
  		epoch: 2459200.5,
  		ma: 333.19937,
  		w: 315.97603,
  		om: 176.5769,
  		i: 11.65081,
  		e: 0.1820926,
  		a: 2.375046
  	},
  	{
  		H: 10.02,
  		name: "Rosalia",
  		desig: "A891 RA",
  		epoch: 2459200.5,
  		ma: 36.60567,
  		w: 191.47238,
  		om: 169.97585,
  		i: 12.51513,
  		e: 0.1713101,
  		a: 3.1577192
  	},
  	{
  		H: 10.13,
  		name: "Goberta",
  		desig: "A891 RC",
  		epoch: 2459200.5,
  		ma: 232.54956,
  		w: 315.75218,
  		om: 123.7948,
  		i: 2.34528,
  		e: 0.1302662,
  		a: 3.1921948
  	},
  	{
  		H: 9.8,
  		name: "Roxane",
  		desig: "A891 RD",
  		epoch: 2459200.5,
  		ma: 135.34782,
  		w: 186.99661,
  		om: 151.34303,
  		i: 1.7658,
  		e: 0.0850659,
  		a: 2.2869506
  	},
  	{
  		H: 9.46,
  		name: "Magdalena",
  		desig: "A891 SA",
  		epoch: 2459200.5,
  		ma: 75.48965,
  		w: 295.94278,
  		om: 161.48835,
  		i: 10.65684,
  		e: 0.0845656,
  		a: 3.1943191
  	},
  	{
  		H: 10.25,
  		name: "Leona",
  		desig: "A891 TA",
  		epoch: 2459200.5,
  		ma: 210.09145,
  		w: 228.0371,
  		om: 184.92768,
  		i: 10.56199,
  		e: 0.2163738,
  		a: 3.404601
  	},
  	{
  		H: 10.87,
  		name: "Katharina",
  		desig: "A891 TB",
  		epoch: 2459200.5,
  		ma: 258.22924,
  		w: 149.51345,
  		om: 219.91471,
  		i: 9.37851,
  		e: 0.1172481,
  		a: 3.0102262
  	},
  	{
  		H: 10.11,
  		name: "Florentina",
  		desig: "A891 TC",
  		epoch: 2459200.5,
  		ma: 84.31696,
  		w: 35.76743,
  		om: 40.20875,
  		i: 2.58693,
  		e: 0.0468474,
  		a: 2.8853881
  	},
  	{
  		H: 9.12,
  		name: "Phaeo",
  		desig: "A891 WB",
  		epoch: 2459200.5,
  		ma: 323.31588,
  		w: 114.63531,
  		om: 252.34523,
  		i: 8.04677,
  		e: 0.2453259,
  		a: 2.784013
  	},
  	{
  		H: 9.62,
  		name: "Brucia",
  		desig: "A891 YB",
  		epoch: 2459200.5,
  		ma: 67.85367,
  		w: 291.53892,
  		om: 97.31402,
  		i: 24.25399,
  		e: 0.299112,
  		a: 2.3829196
  	},
  	{
  		H: 7.06,
  		name: "Bamberga",
  		desig: "A892 DA",
  		epoch: 2459200.5,
  		ma: 224.64814,
  		w: 44.22951,
  		om: 327.85828,
  		i: 11.1047,
  		e: 0.3411777,
  		a: 2.6802044
  	},
  	{
  		H: 8.84,
  		name: "Heidelberga",
  		desig: "A892 EA",
  		epoch: 2459200.5,
  		ma: 279.58525,
  		w: 70.00536,
  		om: 344.21992,
  		i: 8.56757,
  		e: 0.1524415,
  		a: 3.2214904
  	},
  	{
  		H: 10.02,
  		name: "Columbia",
  		desig: "A892 FE",
  		epoch: 2459200.5,
  		ma: 192.88328,
  		w: 307.52178,
  		om: 354.7529,
  		i: 7.14076,
  		e: 0.0609518,
  		a: 2.7769407
  	},
  	{
  		H: 8.9,
  		name: "Gudrun",
  		desig: "A892 FF",
  		epoch: 2459200.5,
  		ma: 249.94926,
  		w: 106.68539,
  		om: 351.889,
  		i: 16.12922,
  		e: 0.1066574,
  		a: 3.1097025
  	},
  	{
  		H: 9.79,
  		name: "Etheridgea",
  		desig: "A892 GA",
  		epoch: 2459200.5,
  		ma: 27.76131,
  		w: 333.49255,
  		om: 21.86193,
  		i: 6.0369,
  		e: 0.0960293,
  		a: 3.0246004
  	},
  	{
  		H: 9.71,
  		name: "Siri",
  		desig: "A892 FH",
  		epoch: 2459200.5,
  		ma: 166.25332,
  		w: 297.68788,
  		om: 31.55084,
  		i: 2.84463,
  		e: 0.0881309,
  		a: 2.7742309
  	},
  	{
  		H: 9.49,
  		name: "Badenia",
  		desig: "A892 QA",
  		epoch: 2459200.5,
  		ma: 55.58885,
  		w: 22.84598,
  		om: 353.15949,
  		i: 3.73921,
  		e: 0.1596796,
  		a: 3.1316136
  	},
  	{
  		H: 9.09,
  		name: "Roberta",
  		desig: "A892 RB",
  		epoch: 2459200.5,
  		ma: 40.48484,
  		w: 139.88477,
  		om: 148.42259,
  		i: 5.10275,
  		e: 0.1730002,
  		a: 2.4752073
  	},
  	{
  		H: 9.82,
  		name: "Lacadiera",
  		desig: "A892 SA",
  		epoch: 2459200.5,
  		ma: 70.89014,
  		w: 31.12817,
  		om: 235.00715,
  		i: 5.65192,
  		e: 0.0958283,
  		a: 2.2515486
  	},
  	{
  		H: 8.79,
  		name: "Devosa",
  		desig: "A892 SB",
  		epoch: 2459200.5,
  		ma: 237.74581,
  		w: 99.11419,
  		om: 355.35064,
  		i: 7.85699,
  		e: 0.1360529,
  		a: 2.3845823
  	},
  	{
  		H: 8.57,
  		name: "Budrosa",
  		desig: "A892 SF",
  		epoch: 2459200.5,
  		ma: 262.85208,
  		w: 107.44487,
  		om: 287.42053,
  		i: 6.04798,
  		e: 0.0207268,
  		a: 2.9159416
  	},
  	{
  		H: 9.45,
  		name: "Dorothea",
  		desig: "A892 SC",
  		epoch: 2459200.5,
  		ma: 213.086,
  		w: 164.47098,
  		om: 173.48523,
  		i: 9.96566,
  		e: 0.0983275,
  		a: 3.0116829
  	},
  	{
  		H: 9.99,
  		name: "Eduarda",
  		desig: "A892 SD",
  		epoch: 2459200.5,
  		ma: 8.51499,
  		w: 43.1367,
  		om: 26.96318,
  		i: 4.66775,
  		e: 0.1164091,
  		a: 2.7464196
  	},
  	{
  		H: 10.26,
  		name: "Endymion",
  		desig: "A892 UA",
  		epoch: 2459200.5,
  		ma: 358.45102,
  		w: 225.08772,
  		om: 232.66563,
  		i: 7.35178,
  		e: 0.1297406,
  		a: 2.568575
  	},
  	{
  		H: 8.34,
  		name: "Desiderata",
  		desig: "A892 WA",
  		epoch: 2459200.5,
  		ma: 317.75496,
  		w: 237.6166,
  		om: 48.02182,
  		i: 18.34638,
  		e: 0.3137571,
  		a: 2.5961981
  	},
  	{
  		H: 8.93,
  		name: "Tercidina",
  		desig: "A892 WB",
  		epoch: 2459200.5,
  		ma: 12.35828,
  		w: 231.3034,
  		om: 212.59802,
  		i: 9.74318,
  		e: 0.0616335,
  		a: 2.3254364
  	},
  	{
  		H: 7.33,
  		name: "Hermentaria",
  		desig: "A892 WC",
  		epoch: 2459200.5,
  		ma: 166.11823,
  		w: 291.90486,
  		om: 91.93682,
  		i: 8.75214,
  		e: 0.102351,
  		a: 2.795411
  	},
  	{
  		H: 9.06,
  		name: "Pariana",
  		desig: "A892 WD",
  		epoch: 2459200.5,
  		ma: 21.9079,
  		w: 86.13431,
  		om: 85.51055,
  		i: 11.68077,
  		e: 0.1660433,
  		a: 2.6110813
  	},
  	{
  		H: 9.44,
  		name: "May",
  		desig: "A892 WE",
  		epoch: 2459200.5,
  		ma: 329.71315,
  		w: 13.71281,
  		om: 89.91646,
  		i: 9.7585,
  		e: 0.0707656,
  		a: 2.9688532
  	},
  	{
  		H: 5.9,
  		name: "Dembowska",
  		desig: "A892 XB",
  		epoch: 2459200.5,
  		ma: 263.40834,
  		w: 345.2592,
  		om: 32.3242,
  		i: 8.24332,
  		e: 0.0913313,
  		a: 2.9243732
  	},
  	{
  		H: 8.45,
  		name: "Ornamenta",
  		desig: "A892 XC",
  		epoch: 2459200.5,
  		ma: 105.09039,
  		w: 337.90558,
  		om: 90.09144,
  		i: 24.89191,
  		e: 0.1595289,
  		a: 3.1095435
  	},
  	{
  		H: 9.05,
  		name: "Yrsa",
  		desig: "A892 YA",
  		epoch: 2459200.5,
  		ma: 262.12964,
  		w: 31.89504,
  		om: 99.19855,
  		i: 9.20712,
  		e: 0.1554694,
  		a: 2.7642631
  	},
  	{
  		H: 10.15,
  		name: "Gisela",
  		desig: "A893 AB",
  		epoch: 2459200.5,
  		ma: 199.45991,
  		w: 144.58115,
  		om: 247.27654,
  		i: 3.38486,
  		e: 0.1499392,
  		a: 2.1935403
  	},
  	{
  		H: 11,
  		name: "Ruperto-Carola",
  		desig: "A893 BB",
  		epoch: 2459200.5,
  		ma: 134.37314,
  		w: 321.31402,
  		om: 102.46879,
  		i: 5.70835,
  		e: 0.3277195,
  		a: 2.7342984
  	},
  	{
  		H: 6.35,
  		name: "Eleonora",
  		desig: "A893 BC",
  		epoch: 2459200.5,
  		ma: 100.5045,
  		w: 5.65778,
  		om: 140.35076,
  		i: 18.40137,
  		e: 0.1136122,
  		a: 2.7982684
  	},
  	{
  		H: 10.22,
  		name: "Gabriella",
  		desig: "A893 BD",
  		epoch: 2459200.5,
  		ma: 239.76714,
  		w: 106.75983,
  		om: 351.65483,
  		i: 4.28611,
  		e: 0.1054974,
  		a: 2.5385804
  	},
  	{
  		H: 8.43,
  		name: "Liguria",
  		desig: "A893 BE",
  		epoch: 2459200.5,
  		ma: 12.56002,
  		w: 79.4088,
  		om: 354.50748,
  		i: 8.20426,
  		e: 0.2406932,
  		a: 2.7560784
  	},
  	{
  		H: 8.86,
  		name: "Ninina",
  		desig: "A893 CB",
  		epoch: 2459200.5,
  		ma: 65.09396,
  		w: 255.45003,
  		om: 137.64419,
  		i: 15.05502,
  		e: 0.0769402,
  		a: 3.1517938
  	},
  	{
  		H: 9.2,
  		name: "Apollonia",
  		desig: "A893 EC",
  		epoch: 2459200.5,
  		ma: 143.07408,
  		w: 252.89847,
  		om: 172.14955,
  		i: 3.55468,
  		e: 0.1530005,
  		a: 2.8751811
  	},
  	{
  		H: 9.31,
  		name: "Georgia",
  		desig: "A893 ED",
  		epoch: 2459200.5,
  		ma: 314.48908,
  		w: 338.07334,
  		om: 6.03198,
  		i: 6.7711,
  		e: 0.1576395,
  		a: 2.7290204
  	},
  	{
  		H: 8.56,
  		name: "Carlova",
  		desig: "A893 EE",
  		epoch: 2459200.5,
  		ma: 291.39728,
  		w: 289.6271,
  		om: 132.19648,
  		i: 11.74315,
  		e: 0.1736667,
  		a: 3.0052536
  	},
  	{
  		H: 9.17,
  		name: "Havnia",
  		desig: "A893 EG",
  		epoch: 2459200.5,
  		ma: 61.28423,
  		w: 31.66465,
  		om: 27.31575,
  		i: 8.06268,
  		e: 0.0440565,
  		a: 2.5793059
  	},
  	{
  		H: 9.07,
  		name: "Padua",
  		desig: "A893 FD",
  		epoch: 2459200.5,
  		ma: 179.34329,
  		w: 296.17844,
  		om: 64.73503,
  		i: 5.94646,
  		e: 0.0714904,
  		a: 2.7473249
  	},
  	{
  		H: 9.87,
  		name: "Isara",
  		desig: "A893 FE",
  		epoch: 2459200.5,
  		ma: 319.29387,
  		w: 313.07371,
  		om: 105.5268,
  		i: 6.00468,
  		e: 0.1485279,
  		a: 2.220498
  	},
  	{
  		H: 9.27,
  		name: "Corduba",
  		desig: "A893 FF",
  		epoch: 2459200.5,
  		ma: 210.52328,
  		w: 216.04264,
  		om: 185.18277,
  		i: 12.79298,
  		e: 0.1573669,
  		a: 2.8008736
  	},
  	{
  		H: 8.69,
  		name: "Vincentina",
  		desig: "A893 FG",
  		epoch: 2459200.5,
  		ma: 205.48358,
  		w: 333.09266,
  		om: 346.69577,
  		i: 10.5792,
  		e: 0.0563725,
  		a: 3.1451652
  	},
  	{
  		H: 10.7,
  		name: "Amicitia",
  		desig: "A893 KB",
  		epoch: 2459200.5,
  		ma: 300.55727,
  		w: 55.70171,
  		om: 83.44654,
  		i: 2.94132,
  		e: 0.0963044,
  		a: 2.2191961
  	},
  	{
  		H: 9.95,
  		name: "Haidea",
  		desig: "A893 KC",
  		epoch: 2459200.5,
  		ma: 202.35098,
  		w: 95.27628,
  		om: 226.31006,
  		i: 7.79542,
  		e: 0.2011553,
  		a: 3.0743554
  	},
  	{
  		H: 8.68,
  		name: "Aeria",
  		desig: "A893 NA",
  		epoch: 2459200.5,
  		ma: 118.78402,
  		w: 269.70025,
  		om: 94.16011,
  		i: 12.71643,
  		e: 0.096682,
  		a: 2.6497756
  	},
  	{
  		H: 10.68,
  		name: "Modestia",
  		desig: "A893 NB",
  		epoch: 2459200.5,
  		ma: 294.6412,
  		w: 68.39784,
  		om: 290.91746,
  		i: 7.86536,
  		e: 0.091502,
  		a: 2.3248913
  	},
  	{
  		H: 8.7,
  		name: "Bohemia",
  		desig: "A893 OA",
  		epoch: 2459200.5,
  		ma: 134.92902,
  		w: 342.12772,
  		om: 283.39273,
  		i: 7.4029,
  		e: 0.0639993,
  		a: 2.7256679
  	},
  	{
  		H: 7.46,
  		name: "Palma",
  		desig: "A893 QB",
  		epoch: 2459200.5,
  		ma: 197.7878,
  		w: 115.63372,
  		om: 327.29611,
  		i: 23.83005,
  		e: 0.2572821,
  		a: 3.1541923
  	},
  	{
  		H: 9.18,
  		name: "Melusina",
  		desig: "A893 RA",
  		epoch: 2459200.5,
  		ma: 52.67241,
  		w: 348.69806,
  		om: 3.6446,
  		i: 15.37841,
  		e: 0.1379383,
  		a: 3.1200225
  	},
  	{
  		H: 8.82,
  		name: "Burgundia",
  		desig: "A893 SA",
  		epoch: 2459200.5,
  		ma: 275.11927,
  		w: 25.57344,
  		om: 218.99814,
  		i: 8.99207,
  		e: 0.0793595,
  		a: 2.7803748
  	},
  	{
  		H: 7.56,
  		name: "Ursula",
  		desig: "A893 SB",
  		epoch: 2459200.5,
  		ma: 44.00053,
  		w: 341.28473,
  		om: 336.40554,
  		i: 15.94658,
  		e: 0.1038952,
  		a: 3.1241739
  	},
  	{
  		H: 9.53,
  		name: "Geometria",
  		desig: "A893 SC",
  		epoch: 2459200.5,
  		ma: 358.52572,
  		w: 316.91665,
  		om: 301.98625,
  		i: 5.43307,
  		e: 0.1722122,
  		a: 2.2882928
  	},
  	{
  		H: 9.04,
  		name: "Campania",
  		desig: "A893 SD",
  		epoch: 2459200.5,
  		ma: 271.29115,
  		w: 195.4682,
  		om: 210.00335,
  		i: 6.67218,
  		e: 0.0762583,
  		a: 2.6926133
  	},
  	{
  		H: 9.88,
  		name: "Holmia",
  		desig: "A893 XA",
  		epoch: 2459200.5,
  		ma: 193.29464,
  		w: 157.40918,
  		om: 232.43884,
  		i: 7.00687,
  		e: 0.1306132,
  		a: 2.7749467
  	},
  	{
  		H: 8.99,
  		name: "Huenna",
  		desig: "A894 AA",
  		epoch: 2459200.5,
  		ma: 48.62259,
  		w: 180.54506,
  		om: 171.88292,
  		i: 1.67008,
  		e: 0.1798824,
  		a: 3.1409513
  	},
  	{
  		H: 9.54,
  		name: "Fiducia",
  		desig: "A894 AB",
  		epoch: 2459200.5,
  		ma: 111.17885,
  		w: 239.85447,
  		om: 95.04551,
  		i: 6.16192,
  		e: 0.1127689,
  		a: 2.6791304
  	},
  	{
  		H: 8.43,
  		name: "Myrrha",
  		desig: "A894 AC",
  		epoch: 2459200.5,
  		ma: 262.24554,
  		w: 143.72526,
  		om: 125.07594,
  		i: 12.55854,
  		e: 0.090119,
  		a: 3.2244614
  	},
  	{
  		H: 8.8,
  		name: "Dodona",
  		desig: "A894 BB",
  		epoch: 2459200.5,
  		ma: 291.9393,
  		w: 270.35105,
  		om: 313.4716,
  		i: 7.39151,
  		e: 0.1713172,
  		a: 3.1225293
  	},
  	{
  		H: 9.93,
  		name: "Janina",
  		desig: "A894 BC",
  		epoch: 2459200.5,
  		ma: 357.56623,
  		w: 324.50099,
  		om: 92.78055,
  		i: 2.65954,
  		e: 0.1676994,
  		a: 3.1382273
  	},
  	{
  		H: 9.47,
  		name: "Burdigala",
  		desig: "A894 CA",
  		epoch: 2459200.5,
  		ma: 178.90236,
  		w: 34.75413,
  		om: 47.82518,
  		i: 5.58933,
  		e: 0.1480313,
  		a: 2.6513078
  	},
  	{
  		H: 7.6,
  		name: "Ilmatar",
  		desig: "A894 EA",
  		epoch: 2459200.5,
  		ma: 133.1942,
  		w: 188.93637,
  		om: 344.87076,
  		i: 13.567,
  		e: 0.1233581,
  		a: 2.8529739
  	},
  	{
  		H: 7.7,
  		name: "Siegena",
  		desig: "A894 EB",
  		epoch: 2459200.5,
  		ma: 25.25808,
  		w: 220.67067,
  		om: 166.64458,
  		i: 20.21771,
  		e: 0.1687508,
  		a: 2.8978281
  	},
  	{
  		H: 7.58,
  		name: "Aquitania",
  		desig: "A894 EC",
  		epoch: 2459200.5,
  		ma: 231.37982,
  		w: 157.35296,
  		om: 128.21912,
  		i: 18.1158,
  		e: 0.2350362,
  		a: 2.7414345
  	},
  	{
  		H: 8.7,
  		name: "Charybdis",
  		desig: "A894 ED",
  		epoch: 2459200.5,
  		ma: 314.89629,
  		w: 331.97899,
  		om: 354.24061,
  		i: 6.44581,
  		e: 0.0660596,
  		a: 3.0055814
  	},
  	{
  		H: 7.85,
  		name: "Industria",
  		desig: "A894 EE",
  		epoch: 2459200.5,
  		ma: 3.35156,
  		w: 264.92352,
  		om: 282.28237,
  		i: 8.12168,
  		e: 0.0667702,
  		a: 2.6078001
  	},
  	{
  		H: 10.16,
  		name: "Alma",
  		desig: "A894 FA",
  		epoch: 2459200.5,
  		ma: 141.82641,
  		w: 190.62483,
  		om: 305.19856,
  		i: 12.16397,
  		e: 0.1313313,
  		a: 2.6532206
  	},
  	{
  		H: 9.8,
  		name: "Wilhelmina",
  		desig: "A894 VD",
  		epoch: 2459200.5,
  		ma: 284.87776,
  		w: 173.41738,
  		om: 209.74732,
  		i: 14.30848,
  		e: 0.1401923,
  		a: 2.8861917
  	},
  	{
  		H: 8.4,
  		name: "Lampetia",
  		desig: "A894 VC",
  		epoch: 2459200.5,
  		ma: 153.66805,
  		w: 90.75358,
  		om: 212.42764,
  		i: 14.8732,
  		e: 0.3303782,
  		a: 2.7804726
  	},
  	{
  		H: 9.77,
  		name: "Arduina",
  		desig: "A894 WB",
  		epoch: 2459200.5,
  		ma: 214.02935,
  		w: 271.21787,
  		om: 66.89124,
  		i: 6.21926,
  		e: 0.2272603,
  		a: 2.7629641
  	},
  	{
  		H: 10.48,
  		name: "Delia",
  		desig: "A894 WC",
  		epoch: 2459200.5,
  		ma: 192.84921,
  		w: 11.01373,
  		om: 259.28087,
  		i: 3.35404,
  		e: 0.0847972,
  		a: 2.7854651
  	},
  	{
  		H: 10.08,
  		name: "Aeolia",
  		desig: "A894 XA",
  		epoch: 2459200.5,
  		ma: 69.63501,
  		w: 21.46835,
  		om: 249.89917,
  		i: 2.55009,
  		e: 0.1603709,
  		a: 2.7404785
  	},
  	{
  		H: 9.44,
  		name: "Vienna",
  		desig: "A894 YA",
  		epoch: 2459200.5,
  		ma: 210.98363,
  		w: 140.07894,
  		om: 227.90964,
  		i: 12.86514,
  		e: 0.247915,
  		a: 2.633774
  	},
  	{
  		H: 10.39,
  		name: "Admete",
  		desig: "A894 YB",
  		epoch: 2459200.5,
  		ma: 300.21376,
  		w: 160.49348,
  		om: 279.81945,
  		i: 9.55431,
  		e: 0.2234339,
  		a: 2.7374696
  	},
  	{
  		H: 9.01,
  		name: "Persephone",
  		desig: "A895 DD",
  		epoch: 2459200.5,
  		ma: 191.79449,
  		w: 193.24766,
  		om: 346.19727,
  		i: 13.11558,
  		e: 0.0761791,
  		a: 3.0493679
  	},
  	{
  		H: 10.65,
  		name: "Ducrosa",
  		desig: "A895 EC",
  		epoch: 2459200.5,
  		ma: 220.46687,
  		w: 237.51732,
  		om: 327.02947,
  		i: 10.52651,
  		e: 0.1160454,
  		a: 3.1267536
  	},
  	{
  		H: 9.2,
  		name: "Ottilia",
  		desig: "A895 FA",
  		epoch: 2459200.5,
  		ma: 65.18978,
  		w: 299.86406,
  		om: 36.05974,
  		i: 5.9637,
  		e: 0.0318187,
  		a: 3.3435753
  	},
  	{
  		H: 9.05,
  		name: "Chloe",
  		desig: "A895 FB",
  		epoch: 2459200.5,
  		ma: 288.76162,
  		w: 17.48682,
  		om: 129.34134,
  		i: 11.833,
  		e: 0.1122463,
  		a: 2.5585876
  	},
  	{
  		H: 8.97,
  		name: "Cyane",
  		desig: "A895 KA",
  		epoch: 2459200.5,
  		ma: 325.98358,
  		w: 254.66583,
  		om: 244.35983,
  		i: 9.15725,
  		e: 0.0980894,
  		a: 2.8102154
  	},
  	{
  		H: 9.23,
  		name: "Arsinoe",
  		desig: "A895 MA",
  		epoch: 2459200.5,
  		ma: 58.63821,
  		w: 120.72176,
  		om: 92.59359,
  		i: 14.10281,
  		e: 0.1989532,
  		a: 2.5950749
  	},
  	{
  		H: 8.56,
  		name: "Thia",
  		desig: "A895 OB",
  		epoch: 2459200.5,
  		ma: 146.83993,
  		w: 308.79276,
  		om: 255.20651,
  		i: 11.93883,
  		e: 0.243291,
  		a: 2.5842463
  	},
  	{
  		H: 10.4,
  		name: "Erna",
  		desig: "A895 QA",
  		epoch: 2459200.5,
  		ma: 46.12643,
  		w: 37.51016,
  		om: 315.47836,
  		i: 4.19322,
  		e: 0.1782618,
  		a: 2.9167927
  	},
  	{
  		H: 9.11,
  		name: "Arachne",
  		desig: "A895 TB",
  		epoch: 2459200.5,
  		ma: 165.49302,
  		w: 82.40181,
  		om: 294.57997,
  		i: 7.52159,
  		e: 0.0701436,
  		a: 2.62464
  	},
  	{
  		H: 9.34,
  		name: "Fama",
  		desig: "A917 RB",
  		epoch: 2459200.5,
  		ma: 68.89656,
  		w: 108.60011,
  		om: 297.13212,
  		i: 9.08609,
  		e: 0.1451542,
  		a: 3.1666531
  	},
  	{
  		H: 7.6,
  		name: "Aspasia",
  		desig: "A895 XC",
  		epoch: 2459200.5,
  		ma: 282.13628,
  		w: 353.40505,
  		om: 242.14539,
  		i: 11.26602,
  		e: 0.0722206,
  		a: 2.5760334
  	},
  	{
  		H: 8.34,
  		name: "Chloris",
  		desig: "A896 AC",
  		epoch: 2459200.5,
  		ma: 116.85295,
  		w: 172.79252,
  		om: 96.93259,
  		i: 10.96729,
  		e: 0.2418926,
  		a: 2.7232248
  	},
  	{
  		H: 9.35,
  		name: "Xanthe",
  		desig: "A896 AD",
  		epoch: 2459200.5,
  		ma: 124.37931,
  		w: 181.2052,
  		om: 107.38207,
  		i: 15.35392,
  		e: 0.1155679,
  		a: 2.933912
  	},
  	{
  		H: 9.18,
  		name: "Elisabetha",
  		desig: "A896 AB",
  		epoch: 2459200.5,
  		ma: 344.365,
  		w: 91.81518,
  		om: 106.44099,
  		i: 13.76874,
  		e: 0.0422851,
  		a: 2.7626614
  	},
  	{
  		H: 10,
  		name: "Edburga",
  		desig: "A896 AA",
  		epoch: 2459200.5,
  		ma: 102.77548,
  		w: 252.84104,
  		om: 103.71403,
  		i: 18.72617,
  		e: 0.3413554,
  		a: 2.5857186
  	},
  	{
  		H: 9.59,
  		name: "Liriope",
  		desig: "A896 BB",
  		epoch: 2459200.5,
  		ma: 60.9382,
  		w: 318.63706,
  		om: 110.57037,
  		i: 9.55676,
  		e: 0.0728426,
  		a: 3.5083789
  	},
  	{
  		H: 9.38,
  		name: "Palatia",
  		desig: "A896 CA",
  		epoch: 2459200.5,
  		ma: 330.44349,
  		w: 299.0696,
  		om: 126.33808,
  		i: 8.21883,
  		e: 0.2997375,
  		a: 2.7915934
  	},
  	{
  		H: 7.72,
  		name: "Vaticana",
  		desig: "A896 JA",
  		epoch: 2459200.5,
  		ma: 245.96007,
  		w: 198.21929,
  		om: 58.07772,
  		i: 12.85895,
  		e: 0.21784,
  		a: 2.7924933
  	},
  	{
  		H: 9.55,
  		name: "Suevia",
  		desig: "A896 JB",
  		epoch: 2459200.5,
  		ma: 241.37422,
  		w: 348.72436,
  		om: 199.50219,
  		i: 6.64741,
  		e: 0.1356811,
  		a: 2.7989702
  	},
  	{
  		H: 9.84,
  		name: "Alemannia",
  		desig: "A896 RD",
  		epoch: 2459200.5,
  		ma: 250.82797,
  		w: 126.31934,
  		om: 248.8253,
  		i: 6.81792,
  		e: 0.1198671,
  		a: 2.5922307
  	},
  	{
  		H: 8.61,
  		name: "Aurelia",
  		desig: "A896 RF",
  		epoch: 2459200.5,
  		ma: 314.2611,
  		w: 44.60577,
  		om: 229.10448,
  		i: 3.92631,
  		e: 0.2508956,
  		a: 2.5964173
  	},
  	{
  		H: 8.36,
  		name: "Bertholda",
  		desig: "A896 RC",
  		epoch: 2459200.5,
  		ma: 110.75997,
  		w: 235.1242,
  		om: 242.63993,
  		i: 6.68976,
  		e: 0.0294961,
  		a: 3.4128384
  	},
  	{
  		H: 10.7,
  		name: "Berolina",
  		desig: "A896 TA",
  		epoch: 2459200.5,
  		ma: 143.52924,
  		w: 335.38262,
  		om: 9.03727,
  		i: 4.99492,
  		e: 0.2141456,
  		a: 2.2287072
  	},
  	{
  		H: 7.34,
  		name: "Diotima",
  		desig: "A896 XA",
  		epoch: 2459200.5,
  		ma: 171.74316,
  		w: 199.27967,
  		om: 69.37809,
  		i: 11.24238,
  		e: 0.0354566,
  		a: 3.0682209
  	},
  	{
  		H: 9.6,
  		name: "Gratia",
  		desig: "A896 YD",
  		epoch: 2459200.5,
  		ma: 329.40465,
  		w: 333.79366,
  		om: 99.14942,
  		i: 8.2224,
  		e: 0.1084937,
  		a: 2.773061
  	},
  	{
  		H: 9.79,
  		name: "Cornelia",
  		desig: "A896 YC",
  		epoch: 2459200.5,
  		ma: 26.87871,
  		w: 121.63412,
  		om: 61.05651,
  		i: 4.04748,
  		e: 0.0591744,
  		a: 2.885332
  	},
  	{
  		H: 8.62,
  		name: "Hippo",
  		desig: "A897 RA",
  		epoch: 2459200.5,
  		ma: 209.23233,
  		w: 222.02423,
  		om: 311.32412,
  		i: 19.50061,
  		e: 0.1057466,
  		a: 2.8868137
  	},
  	{
  		H: 10.22,
  		name: "Galene",
  		desig: "A897 RB",
  		epoch: 2459200.5,
  		ma: 39.13237,
  		w: 11.16466,
  		om: 297.36816,
  		i: 5.12849,
  		e: 0.1201116,
  		a: 2.9706334
  	},
  	{
  		H: 9.99,
  		name: "Lotis",
  		desig: "A897 WB",
  		epoch: 2459200.5,
  		ma: 102.38932,
  		w: 169.17143,
  		om: 219.93126,
  		i: 9.54097,
  		e: 0.1232113,
  		a: 2.6077362
  	},
  	{
  		H: 8.94,
  		name: "Nephele",
  		desig: "A897 YB",
  		epoch: 2459200.5,
  		ma: 153.02389,
  		w: 217.09681,
  		om: 117.18588,
  		i: 1.82781,
  		e: 0.1704193,
  		a: 3.1406409
  	},
  	{
  		H: 10.42,
  		name: "Ella",
  		desig: "A898 RA",
  		epoch: 2459200.5,
  		ma: 317.27576,
  		w: 333.26415,
  		om: 23.15033,
  		i: 1.81617,
  		e: 0.1556145,
  		a: 2.4504639
  	},
  	{
  		H: 10.05,
  		name: "Patricia",
  		desig: "A898 RC",
  		epoch: 2459200.5,
  		ma: 97.53954,
  		w: 41.07148,
  		om: 351.30813,
  		i: 18.50507,
  		e: 0.0690019,
  		a: 3.2020777
  	},
  	{
  		H: 10.4,
  		name: "Rhodia",
  		desig: "A898 OA",
  		epoch: 2459200.5,
  		ma: 63.43681,
  		w: 61.85877,
  		om: 263.21006,
  		i: 7.34514,
  		e: 0.248688,
  		a: 2.3857096
  	},
  	{
  		H: 9.99,
  		name: "Zeuxo",
  		desig: "A898 VG",
  		epoch: 2459200.5,
  		ma: 110.78339,
  		w: 210.42452,
  		om: 49.1001,
  		i: 7.36819,
  		e: 0.0685443,
  		a: 2.5532231
  	},
  	{
  		H: 9.88,
  		name: "Ohio",
  		desig: "A898 TA",
  		epoch: 2459200.5,
  		ma: 316.79498,
  		w: 244.50315,
  		om: 201.45418,
  		i: 19.13081,
  		e: 0.0658757,
  		a: 3.1313206
  	},
  	{
  		H: 8.61,
  		name: "Bathilde",
  		desig: "A898 XA",
  		epoch: 2459200.5,
  		ma: 322.15249,
  		w: 203.01347,
  		om: 253.52508,
  		i: 8.15875,
  		e: 0.0808562,
  		a: 2.8056955
  	},
  	{
  		H: 9.99,
  		name: "Eichsfeldia",
  		desig: "A899 CA",
  		epoch: 2459200.5,
  		ma: 265.57889,
  		w: 84.51825,
  		om: 134.88837,
  		i: 6.06968,
  		e: 0.070588,
  		a: 2.3457258
  	},
  	{
  		H: 10.16,
  		name: "Photographica",
  		desig: "A899 DA",
  		epoch: 2459200.5,
  		ma: 327.73556,
  		w: 348.94183,
  		om: 175.40721,
  		i: 4.23481,
  		e: 0.0406819,
  		a: 2.2156787
  	},
  	{
  		H: 8.03,
  		name: "Gyptis",
  		desig: "A899 FA",
  		epoch: 2459200.5,
  		ma: 354.53887,
  		w: 154.48334,
  		om: 195.61713,
  		i: 10.27276,
  		e: 0.1746065,
  		a: 2.7705234
  	},
  	{
  		H: 9.22,
  		name: "Edna",
  		desig: "A899 TC",
  		epoch: 2459200.5,
  		ma: 105.6043,
  		w: 81.63073,
  		om: 292.01254,
  		i: 21.30932,
  		e: 0.1971058,
  		a: 3.1985857
  	},
  	{
  		H: 8.8,
  		name: "Aeternitas",
  		desig: "A899 UB",
  		epoch: 2459200.5,
  		ma: 63.01107,
  		w: 278.86634,
  		om: 42.0405,
  		i: 10.61718,
  		e: 0.1257649,
  		a: 2.7864989
  	},
  	{
  		H: 9.1,
  		name: "Valentine",
  		desig: "A899 UD",
  		epoch: 2459200.5,
  		ma: 165.14264,
  		w: 321.54583,
  		om: 71.82081,
  		i: 4.7942,
  		e: 0.0448117,
  		a: 2.9847166
  	},
  	{
  		H: 10.3,
  		name: "Natalie",
  		desig: "A899 UC",
  		epoch: 2459200.5,
  		ma: 312.80146,
  		w: 293.8278,
  		om: 37.27001,
  		i: 12.7243,
  		e: 0.1881324,
  		a: 3.1336432
  	},
  	{
  		H: 9.84,
  		name: "Hamburga",
  		desig: "A899 UE",
  		epoch: 2459200.5,
  		ma: 158.49502,
  		w: 47.75818,
  		om: 85.90879,
  		i: 3.08232,
  		e: 0.1721966,
  		a: 2.5541886
  	},
  	{
  		H: 10.25,
  		name: "Brigitta",
  		desig: "A899 VB",
  		epoch: 2459200.5,
  		ma: 63.69111,
  		w: 358.92236,
  		om: 14.36672,
  		i: 10.13155,
  		e: 0.0974016,
  		a: 3.017731
  	},
  	{
  		H: 6.81,
  		name: "Patientia",
  		desig: "A899 XA",
  		epoch: 2459200.5,
  		ma: 214.44287,
  		w: 336.3943,
  		om: 89.24584,
  		i: 15.23341,
  		e: 0.0737075,
  		a: 3.0634069
  	},
  	{
  		H: 10.6,
  		name: "Tea",
  		desig: "A900 DD",
  		epoch: 2459200.5,
  		ma: 87.32266,
  		w: 220.64765,
  		om: 11.67723,
  		i: 5.55068,
  		e: 0.1093411,
  		a: 2.1833998
  	},
  	{
  		H: 9.29,
  		name: "Mathesis",
  		desig: "A900 FB",
  		epoch: 2459200.5,
  		ma: 107.7684,
  		w: 177.74445,
  		om: 32.19679,
  		i: 6.28948,
  		e: 0.1106097,
  		a: 2.6287306
  	},
  	{
  		H: 8.94,
  		name: "Bruchsalia",
  		desig: "A900 KC",
  		epoch: 2459200.5,
  		ma: 224.06134,
  		w: 273.48202,
  		om: 76.10133,
  		i: 12.0153,
  		e: 0.2947974,
  		a: 2.6553721
  	},
  	{
  		H: 9.19,
  		name: "Abnoba",
  		desig: "A900 LA",
  		epoch: 2459200.5,
  		ma: 339.9486,
  		w: 6.97141,
  		om: 229.19222,
  		i: 14.43831,
  		e: 0.1786336,
  		a: 2.7878015
  	},
  	{
  		H: 9.7,
  		name: "Hercynia",
  		desig: "A900 SD",
  		epoch: 2459200.5,
  		ma: 46.4285,
  		w: 277.18055,
  		om: 134.13624,
  		i: 12.65436,
  		e: 0.2421195,
  		a: 2.9941675
  	},
  	{
  		H: 10.42,
  		name: "Signe",
  		desig: "A900 UH",
  		epoch: 2459200.5,
  		ma: 101.6192,
  		w: 19.53983,
  		om: 29.4678,
  		i: 10.29916,
  		e: 0.2107992,
  		a: 2.6202659
  	},
  	{
  		H: 10.83,
  		name: "Scania",
  		desig: "A900 UF",
  		epoch: 2459200.5,
  		ma: 310.79324,
  		w: 161.42871,
  		om: 205.12612,
  		i: 4.63361,
  		e: 0.1054463,
  		a: 2.7192226
  	},
  	{
  		H: 10.53,
  		name: "Saskia",
  		desig: "A900 UG",
  		epoch: 2459200.5,
  		ma: 247.31936,
  		w: 308.19003,
  		om: 156.5114,
  		i: 1.47095,
  		e: 0.1444832,
  		a: 3.1185426
  	},
  	{
  		H: 9.41,
  		name: "Eriphyla",
  		desig: "A900 UJ",
  		epoch: 2459200.5,
  		ma: 265.1464,
  		w: 250.97052,
  		om: 105.27641,
  		i: 3.19271,
  		e: 0.0883607,
  		a: 2.8720448
  	},
  	{
  		H: 9.72,
  		name: "Megaira",
  		desig: "A901 AB",
  		epoch: 2459200.5,
  		ma: 295.60845,
  		w: 258.05327,
  		om: 102.36835,
  		i: 10.16921,
  		e: 0.2055575,
  		a: 2.8019423
  	},
  	{
  		H: 9.83,
  		name: "Alekto",
  		desig: "A901 AC",
  		epoch: 2459200.5,
  		ma: 297.69259,
  		w: 284.06881,
  		om: 300.57293,
  		i: 4.64866,
  		e: 0.2057619,
  		a: 3.0947257
  	},
  	{
  		H: 8.52,
  		name: "Tisiphone",
  		desig: "A901 BB",
  		epoch: 2459200.5,
  		ma: 93.93215,
  		w: 251.43883,
  		om: 290.85262,
  		i: 19.11188,
  		e: 0.0925564,
  		a: 3.3593773
  	},
  	{
  		H: 10.87,
  		name: "Laura",
  		desig: "A901 AA",
  		epoch: 2459200.5,
  		ma: 314.69804,
  		w: 93.87748,
  		om: 322.11484,
  		i: 6.44955,
  		e: 0.1061982,
  		a: 2.9439815
  	},
  	{
  		H: 9.76,
  		name: "Lina",
  		desig: "A901 BC",
  		epoch: 2459200.5,
  		ma: 313.74966,
  		w: 332.55633,
  		om: 21.41714,
  		i: 0.43686,
  		e: 0.1973842,
  		a: 3.1359556
  	},
  	{
  		H: 8.71,
  		name: "Argentina",
  		desig: "A901 DC",
  		epoch: 2459200.5,
  		ma: 70.59942,
  		w: 210.15308,
  		om: 333.43006,
  		i: 11.59565,
  		e: 0.1587634,
  		a: 3.1810835
  	},
  	{
  		H: 10.07,
  		name: "Kilia",
  		desig: "A901 HC",
  		epoch: 2459200.5,
  		ma: 21.75932,
  		w: 47.45966,
  		om: 173.22441,
  		i: 7.22729,
  		e: 0.0938459,
  		a: 2.4045648
  	},
  	{
  		H: 6.67,
  		name: "Papagena",
  		desig: "A901 LA",
  		epoch: 2459200.5,
  		ma: 5.8872,
  		w: 315.57342,
  		om: 83.80735,
  		i: 15.01622,
  		e: 0.228437,
  		a: 2.8892287
  	},
  	{
  		H: 8.94,
  		name: "Roma",
  		desig: "A901 NA",
  		epoch: 2459200.5,
  		ma: 41.69186,
  		w: 296.60058,
  		om: 127.06264,
  		i: 15.80985,
  		e: 0.0947853,
  		a: 2.5441308
  	},
  	{
  		H: 8.66,
  		name: "Hedwig",
  		desig: "A901 QB",
  		epoch: 2459200.5,
  		ma: 281.80121,
  		w: 1.25317,
  		om: 286.33965,
  		i: 10.92685,
  		e: 0.0727094,
  		a: 2.6497094
  	},
  	{
  		H: 10.32,
  		name: "Italia",
  		desig: "A901 QC",
  		epoch: 2459200.5,
  		ma: 283.97722,
  		w: 322.68494,
  		om: 10.65639,
  		i: 5.28864,
  		e: 0.1881942,
  		a: 2.4148739
  	},
  	{
  		H: 8.02,
  		name: "Tergeste",
  		desig: "A901 SC",
  		epoch: 2459200.5,
  		ma: 176.38618,
  		w: 240.66057,
  		om: 233.83219,
  		i: 13.16121,
  		e: 0.0813548,
  		a: 3.021958
  	},
  	{
  		H: 9.81,
  		name: "Caprera",
  		desig: "A901 VK",
  		epoch: 2459200.5,
  		ma: 193.14686,
  		w: 269.6542,
  		om: 136.02571,
  		i: 8.68334,
  		e: 0.219,
  		a: 2.7191249
  	},
  	{
  		H: 8.28,
  		name: "Hansa",
  		desig: "A901 KB",
  		epoch: 2459200.5,
  		ma: 92.91739,
  		w: 213.62345,
  		om: 237.17291,
  		i: 21.30552,
  		e: 0.0461953,
  		a: 2.6437784
  	},
  	{
  		H: 8.85,
  		name: "Emita",
  		desig: "A902 CB",
  		epoch: 2459200.5,
  		ma: 129.0053,
  		w: 349.49224,
  		om: 66.73107,
  		i: 9.84436,
  		e: 0.1576202,
  		a: 2.7396409
  	},
  	{
  		H: 8.9,
  		name: "Petrina",
  		desig: "A902 EH",
  		epoch: 2459200.5,
  		ma: 229.89406,
  		w: 87.55268,
  		om: 179.37448,
  		i: 14.47021,
  		e: 0.0970566,
  		a: 3.0003883
  	},
  	{
  		H: 8.32,
  		name: "Seppina",
  		desig: "A902 EJ",
  		epoch: 2459200.5,
  		ma: 96.45818,
  		w: 162.44504,
  		om: 173.92385,
  		i: 18.75179,
  		e: 0.0512533,
  		a: 3.4248279
  	},
  	{
  		H: 9.77,
  		name: "Pittsburghia",
  		desig: "A902 HA",
  		epoch: 2459200.5,
  		ma: 347.74989,
  		w: 190.40182,
  		om: 127.25118,
  		i: 12.51608,
  		e: 0.0585783,
  		a: 2.6691561
  	},
  	{
  		H: 8.29,
  		name: "Genua",
  		desig: "A902 JC",
  		epoch: 2459200.5,
  		ma: 104.33099,
  		w: 272.2576,
  		om: 193.42945,
  		i: 13.86763,
  		e: 0.1922401,
  		a: 2.7477218
  	},
  	{
  		H: 8.36,
  		name: "Venetia",
  		desig: "A902 NC",
  		epoch: 2459200.5,
  		ma: 324.13709,
  		w: 280.9441,
  		om: 114.77465,
  		i: 10.25352,
  		e: 0.0860693,
  		a: 2.6696272
  	},
  	{
  		H: 7.97,
  		name: "Kreusa",
  		desig: "A902 MC",
  		epoch: 2459200.5,
  		ma: 116.23426,
  		w: 72.33926,
  		om: 84.20982,
  		i: 11.50795,
  		e: 0.1582773,
  		a: 3.1737913
  	},
  	{
  		H: 8.51,
  		name: "Comacina",
  		desig: "A902 RD",
  		epoch: 2459200.5,
  		ma: 206.62334,
  		w: 9.74147,
  		om: 166.70343,
  		i: 12.99394,
  		e: 0.0479343,
  		a: 3.1495133
  	},
  	{
  		H: 8.59,
  		name: "Veritas",
  		desig: "A902 RE",
  		epoch: 2459200.5,
  		ma: 311.65474,
  		w: 193.045,
  		om: 178.06526,
  		i: 9.28234,
  		e: 0.0914283,
  		a: 3.1775695
  	},
  	{
  		H: 9.07,
  		name: "Carina",
  		desig: "A902 RG",
  		epoch: 2459200.5,
  		ma: 213.12583,
  		w: 232.62793,
  		om: 175.40184,
  		i: 18.86374,
  		e: 0.0870218,
  		a: 3.1897711
  	},
  	{
  		H: 10.03,
  		name: "Gismonda",
  		desig: "A902 RF",
  		epoch: 2459200.5,
  		ma: 194.49654,
  		w: 296.68462,
  		om: 46.18888,
  		i: 1.61836,
  		e: 0.1787239,
  		a: 3.1134696
  	},
  	{
  		H: 10.97,
  		name: "Griseldis",
  		desig: "A902 RH",
  		epoch: 2459200.5,
  		ma: 120.06688,
  		w: 46.8673,
  		om: 357.33673,
  		i: 15.17711,
  		e: 0.1760256,
  		a: 3.1170157
  	},
  	{
  		H: 9.12,
  		name: "Virtus",
  		desig: "A902 TF",
  		epoch: 2459200.5,
  		ma: 91.0457,
  		w: 216.02647,
  		om: 38.08327,
  		i: 7.07831,
  		e: 0.0648538,
  		a: 2.9843896
  	},
  	{
  		H: 9.92,
  		name: "Iva",
  		desig: "A902 VB",
  		epoch: 2459200.5,
  		ma: 209.84565,
  		w: 3.52411,
  		om: 6.30646,
  		i: 4.82214,
  		e: 0.3009381,
  		a: 2.8499003
  	},
  	{
  		H: 8.91,
  		name: "Tokio",
  		desig: "A902 XA",
  		epoch: 2459200.5,
  		ma: 183.08885,
  		w: 241.80077,
  		om: 97.2085,
  		i: 9.49643,
  		e: 0.2229031,
  		a: 2.6519651
  	},
  	{
  		H: 9.34,
  		name: "Selinur",
  		desig: "A903 BJ",
  		epoch: 2459200.5,
  		ma: 56.224,
  		w: 74.81538,
  		om: 289.82971,
  		i: 9.78115,
  		e: 0.1438314,
  		a: 2.6132031
  	},
  	{
  		H: 9.39,
  		name: "Urhixidur",
  		desig: "A903 BK",
  		epoch: 2459200.5,
  		ma: 120.09707,
  		w: 356.17796,
  		om: 357.23654,
  		i: 20.83557,
  		e: 0.141341,
  		a: 3.1640655
  	},
  	{
  		H: 9.34,
  		name: "Evelyn",
  		desig: "A903 BL",
  		epoch: 2459200.5,
  		ma: 89.56861,
  		w: 41.71504,
  		om: 68.89273,
  		i: 5.0103,
  		e: 0.1761143,
  		a: 2.7221684
  	},
  	{
  		H: 10.06,
  		name: "Cora",
  		desig: "A902 NB",
  		epoch: 2459200.5,
  		ma: 93.76715,
  		w: 248.28911,
  		om: 104.47595,
  		i: 12.89774,
  		e: 0.2151672,
  		a: 2.7231768
  	},
  	{
  		H: 8.85,
  		name: "Cava",
  		desig: "A902 QA",
  		epoch: 2459200.5,
  		ma: 218.45707,
  		w: 336.98018,
  		om: 90.87226,
  		i: 9.83659,
  		e: 0.2445297,
  		a: 2.6855633
  	},
  	{
  		H: 8.89,
  		name: "Marion",
  		desig: "A903 DB",
  		epoch: 2459200.5,
  		ma: 116.03797,
  		w: 145.79287,
  		om: 312.93471,
  		i: 17.00628,
  		e: 0.1473001,
  		a: 3.0385887
  	},
  	{
  		H: 9.22,
  		name: "Laodica",
  		desig: "A903 DC",
  		epoch: 2459200.5,
  		ma: 111.03653,
  		w: 100.46455,
  		om: 293.42933,
  		i: 9.49811,
  		e: 0.1008205,
  		a: 3.154572
  	},
  	{
  		H: 8.41,
  		name: "Princetonia",
  		desig: "A903 HC",
  		epoch: 2459200.5,
  		ma: 296.10157,
  		w: 204.51798,
  		om: 44.19673,
  		i: 13.33514,
  		e: 0.0080557,
  		a: 3.1617604
  	},
  	{
  		H: 8.45,
  		name: "Iolanda",
  		desig: "A903 HD",
  		epoch: 2459200.5,
  		ma: 184.46903,
  		w: 157.40606,
  		om: 217.52054,
  		i: 15.41076,
  		e: 0.0960001,
  		a: 3.0623322
  	},
  	{
  		H: 9.79,
  		name: "Mabella",
  		desig: "A903 KA",
  		epoch: 2459200.5,
  		ma: 283.69668,
  		w: 91.1468,
  		om: 202.69155,
  		i: 9.53568,
  		e: 0.1905793,
  		a: 2.6101585
  	},
  	{
  		H: 6.42,
  		name: "Davida",
  		desig: "A903 KB",
  		epoch: 2459200.5,
  		ma: 79.16292,
  		w: 337.29053,
  		om: 107.59367,
  		i: 15.93882,
  		e: 0.1881553,
  		a: 3.1640916
  	},
  	{
  		H: 9.51,
  		name: "Centesima",
  		desig: "A916 BC",
  		epoch: 2459200.5,
  		ma: 88.69705,
  		w: 225.9157,
  		om: 184.42726,
  		i: 9.73225,
  		e: 0.0843021,
  		a: 3.0146125
  	},
  	{
  		H: 9.17,
  		name: "Armida",
  		desig: "A903 QC",
  		epoch: 2459200.5,
  		ma: 345.89867,
  		w: 110.23984,
  		om: 268.53696,
  		i: 3.88167,
  		e: 0.0373593,
  		a: 3.0453818
  	},
  	{
  		H: 10.88,
  		name: "Athalia",
  		desig: "A903 SH",
  		epoch: 2459200.5,
  		ma: 33.17484,
  		w: 300.29735,
  		om: 121.09029,
  		i: 2.03851,
  		e: 0.1759079,
  		a: 3.1216396
  	},
  	{
  		H: 8.27,
  		name: "Amherstia",
  		desig: "A903 SG",
  		epoch: 2459200.5,
  		ma: 25.19728,
  		w: 258.21729,
  		om: 328.79946,
  		i: 12.95938,
  		e: 0.2719953,
  		a: 2.6813463
  	},
  	{
  		H: 9.58,
  		name: "Edith",
  		desig: "A903 SK",
  		epoch: 2459200.5,
  		ma: 321.7553,
  		w: 143.46481,
  		om: 273.81913,
  		i: 3.22833,
  		e: 0.1791465,
  		a: 3.1536235
  	},
  	{
  		H: 8.98,
  		name: "Sylvania",
  		desig: "A903 UJ",
  		epoch: 2459200.5,
  		ma: 81.85937,
  		w: 302.63951,
  		om: 44.71081,
  		i: 11.0106,
  		e: 0.1830245,
  		a: 2.791408
  	},
  	{
  		H: 10.62,
  		name: "Franziska",
  		desig: "A903 UK",
  		epoch: 2459200.5,
  		ma: 159.03596,
  		w: 21.26809,
  		om: 34.27833,
  		i: 10.96096,
  		e: 0.1103645,
  		a: 3.0029908
  	},
  	{
  		H: 8.5,
  		name: "Brixia",
  		desig: "A904 AE",
  		epoch: 2459200.5,
  		ma: 296.40664,
  		w: 315.91193,
  		om: 89.63169,
  		i: 10.58532,
  		e: 0.2788185,
  		a: 2.7449586
  	},
  	{
  		H: 9.05,
  		name: "Helga",
  		desig: "A904 AF",
  		epoch: 2459200.5,
  		ma: 66.81414,
  		w: 248.40208,
  		om: 116.57036,
  		i: 4.42009,
  		e: 0.0865504,
  		a: 3.6258534
  	},
  	{
  		H: 9.92,
  		name: "Ada",
  		desig: "A904 BA",
  		epoch: 2459200.5,
  		ma: 339.60776,
  		w: 189.94866,
  		om: 260.62194,
  		i: 4.31294,
  		e: 0.1787009,
  		a: 2.9660278
  	},
  	{
  		H: 9.93,
  		name: "Fidelio",
  		desig: "A904 ED",
  		epoch: 2459200.5,
  		ma: 204.63959,
  		w: 79.69785,
  		om: 326.68273,
  		i: 8.229,
  		e: 0.1285313,
  		a: 2.6342564
  	},
  	{
  		H: 10.18,
  		name: "Jena",
  		desig: "A904 EE",
  		epoch: 2459200.5,
  		ma: 100.68585,
  		w: 357.43051,
  		om: 137.76285,
  		i: 2.17373,
  		e: 0.1333524,
  		a: 3.1210687
  	},
  	{
  		H: 10.47,
  		name: "Euryanthe",
  		desig: "A904 FC",
  		epoch: 2459200.5,
  		ma: 235.08443,
  		w: 204.03104,
  		om: 120.50422,
  		i: 9.66153,
  		e: 0.1506554,
  		a: 2.7254704
  	},
  	{
  		H: 9.02,
  		name: "Rezia",
  		desig: "A904 FA",
  		epoch: 2459200.5,
  		ma: 17.3435,
  		w: 349.91072,
  		om: 49.53548,
  		i: 12.70679,
  		e: 0.02144,
  		a: 3.3951526
  	},
  	{
  		H: 10.02,
  		name: "Preziosa",
  		desig: "A904 FB",
  		epoch: 2459200.5,
  		ma: 240.85144,
  		w: 332.78305,
  		om: 65.20052,
  		i: 11.0207,
  		e: 0.0958259,
  		a: 3.0168813
  	},
  	{
  		H: 9.36,
  		name: "Turandot",
  		desig: "A904 GB",
  		epoch: 2459200.5,
  		ma: 10.086,
  		w: 199.44225,
  		om: 129.10743,
  		i: 8.5662,
  		e: 0.2185734,
  		a: 3.1879359
  	},
  	{
  		H: 5.88,
  		name: "Herculina",
  		desig: "A904 HE",
  		epoch: 2459200.5,
  		ma: 111.81151,
  		w: 76.62705,
  		om: 107.52517,
  		i: 16.31081,
  		e: 0.1765449,
  		a: 2.7755531
  	},
  	{
  		H: 9.71,
  		name: "Sara",
  		desig: "A904 HC",
  		epoch: 2459200.5,
  		ma: 239.94717,
  		w: 32.64117,
  		om: 180.30795,
  		i: 6.5553,
  		e: 0.0447513,
  		a: 2.9801073
  	},
  	{
  		H: 9.7,
  		name: "Nassovia",
  		desig: "A904 HD",
  		epoch: 2459200.5,
  		ma: 65.67934,
  		w: 338.66887,
  		om: 94.09101,
  		i: 3.27496,
  		e: 0.0588831,
  		a: 2.8844296
  	},
  	{
  		H: 9.41,
  		name: "Montague",
  		desig: "A904 JE",
  		epoch: 2459200.5,
  		ma: 184.19565,
  		w: 68.31728,
  		om: 84.78046,
  		i: 6.77354,
  		e: 0.0247928,
  		a: 2.5695898
  	},
  	{
  		H: 8.16,
  		name: "Merapi",
  		desig: "A904 JF",
  		epoch: 2459200.5,
  		ma: 183.5844,
  		w: 295.50149,
  		om: 59.2072,
  		i: 19.42387,
  		e: 0.0869065,
  		a: 3.4982193
  	},
  	{
  		H: 8.81,
  		name: "Pauly",
  		desig: "A904 NB",
  		epoch: 2459200.5,
  		ma: 229.0137,
  		w: 187.46499,
  		om: 120.17046,
  		i: 9.87444,
  		e: 0.2290582,
  		a: 3.0749752
  	},
  	{
  		H: 9.6,
  		name: "Friederike",
  		desig: "A904 OA",
  		epoch: 2459200.5,
  		ma: 196.39044,
  		w: 227.49803,
  		om: 141.16282,
  		i: 6.52216,
  		e: 0.1703236,
  		a: 3.1570791
  	},
  	{
  		H: 10.13,
  		name: "Pamina",
  		desig: "A904 PD",
  		epoch: 2459200.5,
  		ma: 204.55816,
  		w: 97.42964,
  		om: 274.28273,
  		i: 6.79938,
  		e: 0.2137097,
  		a: 2.7370131
  	},
  	{
  		H: 10.71,
  		name: "Rosamunde",
  		desig: "A904 PE",
  		epoch: 2459200.5,
  		ma: 202.16293,
  		w: 337.80303,
  		om: 202.11447,
  		i: 5.58293,
  		e: 0.090457,
  		a: 2.2183404
  	},
  	{
  		H: 10.17,
  		name: "Deborah",
  		desig: "A904 PF",
  		epoch: 2459200.5,
  		ma: 280.20723,
  		w: 359.03118,
  		om: 267.62476,
  		i: 6.00224,
  		e: 0.0498406,
  		a: 2.8149796
  	},
  	{
  		H: 9.43,
  		name: "Susanna",
  		desig: "A904 QA",
  		epoch: 2459200.5,
  		ma: 155.03245,
  		w: 216.77754,
  		om: 152.94595,
  		i: 12.07637,
  		e: 0.1417004,
  		a: 2.9061224
  	},
  	{
  		H: 9.53,
  		name: "Charlotte",
  		desig: "A904 RG",
  		epoch: 2459200.5,
  		ma: 226.60086,
  		w: 109.08436,
  		om: 294.96714,
  		i: 8.47937,
  		e: 0.153833,
  		a: 3.0582367
  	},
  	{
  		H: 10.03,
  		name: "Jetta",
  		desig: "A904 RH",
  		epoch: 2459200.5,
  		ma: 23.42047,
  		w: 343.32985,
  		om: 298.30286,
  		i: 8.37228,
  		e: 0.1534773,
  		a: 2.5926368
  	},
  	{
  		H: 8.81,
  		name: "Messalina",
  		desig: "A904 TC",
  		epoch: 2459200.5,
  		ma: 220.20177,
  		w: 331.01356,
  		om: 333.59884,
  		i: 11.20559,
  		e: 0.1699397,
  		a: 3.202372
  	},
  	{
  		H: 9.85,
  		name: "Herodias",
  		desig: "A904 TD",
  		epoch: 2459200.5,
  		ma: 165.54675,
  		w: 109.25785,
  		om: 21.69666,
  		i: 14.84664,
  		e: 0.1147691,
  		a: 2.5998618
  	},
  	{
  		H: 9.81,
  		name: "Praxedis",
  		desig: "A904 TE",
  		epoch: 2459200.5,
  		ma: 56.60823,
  		w: 196.49586,
  		om: 193.06623,
  		i: 16.8578,
  		e: 0.2350918,
  		a: 2.7749071
  	},
  	{
  		H: 9.33,
  		name: "Senta",
  		desig: "A904 WB",
  		epoch: 2459200.5,
  		ma: 36.48582,
  		w: 45.04628,
  		om: 270.69143,
  		i: 10.11,
  		e: 0.2231245,
  		a: 2.587652
  	},
  	{
  		H: 9.68,
  		name: "Ortrud",
  		desig: "A904 WC",
  		epoch: 2459200.5,
  		ma: 253.46398,
  		w: 69.68631,
  		om: 5.64447,
  		i: 0.39568,
  		e: 0.1190429,
  		a: 2.9723126
  	},
  	{
  		H: 9.67,
  		name: "Sigelinde",
  		desig: "A904 XB",
  		epoch: 2459200.5,
  		ma: 78.48029,
  		w: 346.90241,
  		om: 266.89189,
  		i: 7.69403,
  		e: 0.0900515,
  		a: 3.1496239
  	},
  	{
  		H: 9.12,
  		name: "Peraga",
  		desig: "A905 AE",
  		epoch: 2459200.5,
  		ma: 286.32605,
  		w: 127.54022,
  		om: 295.39375,
  		i: 2.93527,
  		e: 0.1518934,
  		a: 2.3754973
  	},
  	{
  		H: 10.84,
  		name: "Norma",
  		desig: "A905 AF",
  		epoch: 2459200.5,
  		ma: 188.02028,
  		w: 359.31162,
  		om: 130.17922,
  		i: 2.66506,
  		e: 0.1517437,
  		a: 3.1936355
  	},
  	{
  		H: 9.59,
  		name: "Phyllis",
  		desig: "A905 AD",
  		epoch: 2459200.5,
  		ma: 348.14801,
  		w: 177.96396,
  		om: 286.04224,
  		i: 5.24644,
  		e: 0.1041868,
  		a: 2.4643847
  	},
  	{
  		H: 9.08,
  		name: "Carmen",
  		desig: "A905 CK",
  		epoch: 2459200.5,
  		ma: 175.41009,
  		w: 311.33302,
  		om: 143.69976,
  		i: 8.37678,
  		e: 0.0417895,
  		a: 2.9082616
  	},
  	{
  		H: 9.58,
  		name: "Nanon",
  		desig: "A905 EB",
  		epoch: 2459200.5,
  		ma: 282.26728,
  		w: 128.75814,
  		om: 112.06416,
  		i: 9.30182,
  		e: 0.0654636,
  		a: 2.7119518
  	},
  	{
  		H: 10.02,
  		name: "Salome",
  		desig: "A905 GC",
  		epoch: 2459200.5,
  		ma: 254.59554,
  		w: 263.67601,
  		om: 70.58864,
  		i: 11.10521,
  		e: 0.1017737,
  		a: 3.0170092
  	},
  	{
  		H: 8.44,
  		name: "Suleika",
  		desig: "A905 GD",
  		epoch: 2459200.5,
  		ma: 97.42185,
  		w: 336.8581,
  		om: 85.18156,
  		i: 10.24259,
  		e: 0.2360357,
  		a: 2.7123759
  	},
  	{
  		H: 10.37,
  		name: "Dudu",
  		desig: "A905 JD",
  		epoch: 2459200.5,
  		ma: 93.41691,
  		w: 214.86901,
  		om: 70.76337,
  		i: 17.99092,
  		e: 0.2773102,
  		a: 2.7458072
  	},
  	{
  		H: 10.91,
  		name: "Marbachia",
  		desig: "A905 JE",
  		epoch: 2459200.5,
  		ma: 165.20748,
  		w: 292.22273,
  		om: 225.71044,
  		i: 10.98809,
  		e: 0.1302219,
  		a: 2.4439576
  	},
  	{
  		H: 8.12,
  		name: "Stereoskopia",
  		desig: "A905 KA",
  		epoch: 2459200.5,
  		ma: 70.28665,
  		w: 299.62174,
  		om: 79.55266,
  		i: 4.89407,
  		e: 0.1199611,
  		a: 3.3785336
  	},
  	{
  		H: 9.18,
  		name: "Eleutheria",
  		desig: "A905 KB",
  		epoch: 2459200.5,
  		ma: 344.94835,
  		w: 133.72359,
  		om: 58.25662,
  		i: 9.25421,
  		e: 0.0900133,
  		a: 3.1341038
  	},
  	{
  		H: 9.55,
  		name: "Cheruskia",
  		desig: "A905 OD",
  		epoch: 2459200.5,
  		ma: 126.84573,
  		w: 174.01753,
  		om: 249.77553,
  		i: 18.39414,
  		e: 0.1683277,
  		a: 2.881145
  	},
  	{
  		H: 10.15,
  		name: "Misa",
  		desig: "A905 OE",
  		epoch: 2459200.5,
  		ma: 136.14984,
  		w: 142.63969,
  		om: 301.68817,
  		i: 1.29157,
  		e: 0.1811052,
  		a: 2.656331
  	},
  	{
  		H: 8.77,
  		name: "Kythera",
  		desig: "A905 OF",
  		epoch: 2459200.5,
  		ma: 8.5515,
  		w: 161.46233,
  		om: 223.34282,
  		i: 1.81695,
  		e: 0.1184386,
  		a: 3.4182799
  	},
  	{
  		H: 10.88,
  		name: "Rebekka",
  		desig: "A905 SF",
  		epoch: 2459200.5,
  		ma: 336.95237,
  		w: 192.00302,
  		om: 194.47227,
  		i: 10.5754,
  		e: 0.1563814,
  		a: 2.400584
  	},
  	{
  		H: 9.54,
  		name: "Recha",
  		desig: "A905 SG",
  		epoch: 2459200.5,
  		ma: 356.48757,
  		w: 29.50499,
  		om: 342.65953,
  		i: 9.83082,
  		e: 0.1100007,
  		a: 3.0134963
  	},
  	{
  		H: 10.86,
  		name: "Renate",
  		desig: "A905 SJ",
  		epoch: 2459200.5,
  		ma: 106.93264,
  		w: 333.78822,
  		om: 349.60639,
  		i: 15.00313,
  		e: 0.1269174,
  		a: 2.5551634
  	},
  	{
  		H: 9.41,
  		name: "Emanuela",
  		desig: "A905 SK",
  		epoch: 2459200.5,
  		ma: 132.8194,
  		w: 27.13881,
  		om: 299.6089,
  		i: 10.20386,
  		e: 0.1919086,
  		a: 2.9900887
  	},
  	{
  		H: 9.39,
  		name: "Rhea",
  		desig: "A905 UR",
  		epoch: 2459200.5,
  		ma: 33.4431,
  		w: 329.97796,
  		om: 328.48416,
  		i: 5.30147,
  		e: 0.1552386,
  		a: 3.1113181
  	},
  	{
  		H: 9.48,
  		name: "Happelia",
  		desig: "A905 VJ",
  		epoch: 2459200.5,
  		ma: 186.11871,
  		w: 261.36609,
  		om: 29.38503,
  		i: 6.14837,
  		e: 0.1922306,
  		a: 2.7518489
  	},
  	{
  		H: 7.95,
  		name: "Sidonia",
  		desig: "A905 VK",
  		epoch: 2459200.5,
  		ma: 102.90338,
  		w: 228.56124,
  		om: 82.65153,
  		i: 11.0186,
  		e: 0.0775793,
  		a: 3.0122769
  	},
  	{
  		H: 10.28,
  		name: "Selene",
  		desig: "A905 YB",
  		epoch: 2459200.5,
  		ma: 312.59648,
  		w: 338.62508,
  		om: 98.91302,
  		i: 3.67127,
  		e: 0.086788,
  		a: 3.2264412
  	},
  	{
  		H: 9.81,
  		name: "Tauntonia",
  		desig: "A905 YC",
  		epoch: 2459200.5,
  		ma: 301.43076,
  		w: 25.82668,
  		om: 102.45434,
  		i: 21.89705,
  		e: 0.0340464,
  		a: 3.2120509
  	},
  	{
  		H: 9.06,
  		name: "Olympia",
  		desig: "A906 BM",
  		epoch: 2459200.5,
  		ma: 101.57091,
  		w: 310.28729,
  		om: 155.70388,
  		i: 30.03338,
  		e: 0.222342,
  		a: 2.6095418
  	},
  	{
  		H: 9.24,
  		name: "Klotilde",
  		desig: "A905 YD",
  		epoch: 2459200.5,
  		ma: 8.0445,
  		w: 252.15325,
  		om: 257.85205,
  		i: 8.24305,
  		e: 0.1602688,
  		a: 3.1730641
  	},
  	{
  		H: 8.58,
  		name: "Semiramis",
  		desig: "A906 AC",
  		epoch: 2459200.5,
  		ma: 237.327,
  		w: 85.40153,
  		om: 282.03505,
  		i: 10.72421,
  		e: 0.233894,
  		a: 2.3728868
  	},
  	{
  		H: 10.53,
  		name: "Bilkis",
  		desig: "A906 DF",
  		epoch: 2459200.5,
  		ma: 116.522,
  		w: 329.08685,
  		om: 180.26262,
  		i: 7.56686,
  		e: 0.1280195,
  		a: 2.4315273
  	},
  	{
  		H: 9.43,
  		name: "Thekla",
  		desig: "A906 DK",
  		epoch: 2459200.5,
  		ma: 252.94959,
  		w: 253.35427,
  		om: 228.33794,
  		i: 1.6277,
  		e: 0.0638814,
  		a: 3.0392259
  	},
  	{
  		H: 9.11,
  		name: "Croatia",
  		desig: "A906 EC",
  		epoch: 2459200.5,
  		ma: 11.20036,
  		w: 227.68964,
  		om: 177.45835,
  		i: 10.79653,
  		e: 0.03962,
  		a: 3.1340461
  	},
  	{
  		H: 10.08,
  		name: "Tomyris",
  		desig: "A906 ED",
  		epoch: 2459200.5,
  		ma: 111.05297,
  		w: 338.90749,
  		om: 106.14167,
  		i: 11.17349,
  		e: 0.0802518,
  		a: 2.9981528
  	},
  	{
  		H: 10.75,
  		name: "Irmgard",
  		desig: "A906 EE",
  		epoch: 2459200.5,
  		ma: 42.61366,
  		w: 217.4011,
  		om: 334.2627,
  		i: 12.48695,
  		e: 0.2063884,
  		a: 2.6796591
  	},
  	{
  		H: 9.61,
  		name: "Bathseba",
  		desig: "A916 BB",
  		epoch: 2459200.5,
  		ma: 31.89149,
  		w: 257.5352,
  		om: 167.81693,
  		i: 10.17426,
  		e: 0.1335736,
  		a: 3.0232151
  	},
  	{
  		H: 9.44,
  		name: "Titania",
  		desig: "A906 FK",
  		epoch: 2459200.5,
  		ma: 2.29227,
  		w: 30.9824,
  		om: 75.94813,
  		i: 16.90081,
  		e: 0.2169627,
  		a: 2.6991089
  	},
  	{
  		H: 7.94,
  		name: "Polyxena",
  		desig: "A906 FL",
  		epoch: 2459200.5,
  		ma: 269.03663,
  		w: 279.72174,
  		om: 23.87996,
  		i: 17.82995,
  		e: 0.0636372,
  		a: 3.2069429
  	},
  	{
  		H: 8.93,
  		name: "Scheila",
  		desig: "A906 DL",
  		epoch: 2459200.5,
  		ma: 256.95915,
  		w: 175.41876,
  		om: 70.59879,
  		i: 14.65776,
  		e: 0.1629188,
  		a: 2.9295339
  	},
  	{
  		H: 9.21,
  		name: "Bandusia",
  		desig: "A906 HE",
  		epoch: 2459200.5,
  		ma: 339.10772,
  		w: 307.06405,
  		om: 36.48412,
  		i: 12.79681,
  		e: 0.1449934,
  		a: 2.6725229
  	},
  	{
  		H: 9.73,
  		name: "Octavia",
  		desig: "A906 GC",
  		epoch: 2459200.5,
  		ma: 147.24491,
  		w: 292.0973,
  		om: 91.52068,
  		i: 12.22785,
  		e: 0.2503771,
  		a: 2.7607161
  	},
  	{
  		H: 8.79,
  		name: "Luisa",
  		desig: "A906 HF",
  		epoch: 2459200.5,
  		ma: 213.48237,
  		w: 294.3036,
  		om: 44.15466,
  		i: 16.70891,
  		e: 0.2923751,
  		a: 2.7728208
  	},
  	{
  		H: 10.1,
  		name: "Musa",
  		desig: "A906 LA",
  		epoch: 2459200.5,
  		ma: 152.6588,
  		w: 113.11191,
  		om: 139.22134,
  		i: 10.20425,
  		e: 0.0558187,
  		a: 2.6590774
  	},
  	{
  		H: 9.71,
  		name: "Nerthus",
  		desig: "A906 MC",
  		epoch: 2459200.5,
  		ma: 189.09973,
  		w: 160.23768,
  		om: 169.54218,
  		i: 16.14646,
  		e: 0.1040583,
  		a: 3.134922
  	},
  	{
  		H: 8.53,
  		name: "Marianna",
  		desig: "A906 DJ",
  		epoch: 2459200.5,
  		ma: 166.99405,
  		w: 45.78298,
  		om: 331.47789,
  		i: 15.1114,
  		e: 0.2505569,
  		a: 3.0835731
  	},
  	{
  		H: 9.49,
  		name: "Tekmessa",
  		desig: "A906 DH",
  		epoch: 2459200.5,
  		ma: 274.31396,
  		w: 28.45774,
  		om: 11.93978,
  		i: 4.41222,
  		e: 0.1949051,
  		a: 3.1573115
  	},
  	{
  		H: 10.1,
  		name: "Juvisia",
  		desig: "A906 QJ",
  		epoch: 2459200.5,
  		ma: 36.33631,
  		w: 15.01882,
  		om: 342.65398,
  		i: 19.63774,
  		e: 0.136469,
  		a: 3.0006083
  	},
  	{
  		H: 10.4,
  		name: "Brangane",
  		desig: "A906 SK",
  		epoch: 2459200.5,
  		ma: 153.41324,
  		w: 58.35767,
  		om: 318.46982,
  		i: 8.6009,
  		e: 0.2205658,
  		a: 2.586964
  	},
  	{
  		H: 9.98,
  		name: "Jenny",
  		desig: "A906 SH",
  		epoch: 2459200.5,
  		ma: 42.85507,
  		w: 291.17625,
  		om: 285.24812,
  		i: 10.10962,
  		e: 0.0735355,
  		a: 2.8533903
  	},
  	{
  		H: 10.95,
  		name: "Adolfine",
  		desig: "A916 OH",
  		epoch: 2459200.5,
  		ma: 260.27746,
  		w: 70.96539,
  		om: 293.84867,
  		i: 9.38223,
  		e: 0.1251862,
  		a: 3.0207764
  	},
  	{
  		H: 10.31,
  		name: "Fulvia",
  		desig: "A906 SL",
  		epoch: 2459200.5,
  		ma: 110.18688,
  		w: 108.67551,
  		om: 165.18557,
  		i: 4.1874,
  		e: 0.0397214,
  		a: 3.0843488
  	},
  	{
  		H: 9.36,
  		name: "Valeria",
  		desig: "A906 SM",
  		epoch: 2459200.5,
  		ma: 18.81355,
  		w: 256.68921,
  		om: 189.39398,
  		i: 13.44375,
  		e: 0.1229028,
  		a: 2.9789519
  	},
  	{
  		H: 10.83,
  		name: "Veronika",
  		desig: "A906 TC",
  		epoch: 2459200.5,
  		ma: 183.99897,
  		w: 122.41425,
  		om: 202.87066,
  		i: 20.94839,
  		e: 0.259084,
  		a: 3.1547027
  	},
  	{
  		H: 9.7,
  		name: "Ginevra",
  		desig: "A906 TD",
  		epoch: 2459200.5,
  		ma: 287.9211,
  		w: 65.08459,
  		om: 354.51695,
  		i: 7.66948,
  		e: 0.0562406,
  		a: 2.9207063
  	},
  	{
  		H: 10.28,
  		name: "Roswitha",
  		desig: "A906 TF",
  		epoch: 2459200.5,
  		ma: 26.89389,
  		w: 247.5584,
  		om: 13.42584,
  		i: 2.7615,
  		e: 0.1101843,
  		a: 2.6330808
  	},
  	{
  		H: 10.66,
  		name: "Elly",
  		desig: "A906 UK",
  		epoch: 2459200.5,
  		ma: 283.28764,
  		w: 109.39982,
  		om: 355.9866,
  		i: 14.95898,
  		e: 0.0595921,
  		a: 2.552395
  	},
  	{
  		H: 8.34,
  		name: "Elfriede",
  		desig: "A906 UM",
  		epoch: 2459200.5,
  		ma: 57.63206,
  		w: 229.28039,
  		om: 110.84278,
  		i: 17.05901,
  		e: 0.0695295,
  		a: 3.1892202
  	},
  	{
  		H: 9.9,
  		name: "Triberga",
  		desig: "A906 UN",
  		epoch: 2459200.5,
  		ma: 222.9389,
  		w: 178.45811,
  		om: 187.4694,
  		i: 13.80125,
  		e: 0.075477,
  		a: 2.5193151
  	},
  	{
  		H: 10.97,
  		name: "Drakonia",
  		desig: "A906 UO",
  		epoch: 2459200.5,
  		ma: 63.42987,
  		w: 336.18513,
  		om: 359.94602,
  		i: 7.73658,
  		e: 0.1344058,
  		a: 2.43544
  	},
  	{
  		H: 10.34,
  		name: "Esther",
  		desig: "A906 VN",
  		epoch: 2459200.5,
  		ma: 153.51635,
  		w: 257.09262,
  		om: 141.91174,
  		i: 8.63832,
  		e: 0.243475,
  		a: 2.4138146
  	},
  	{
  		H: 10.04,
  		name: "Xenia",
  		desig: "A907 CG",
  		epoch: 2459200.5,
  		ma: 340.63516,
  		w: 200.51621,
  		om: 127.52985,
  		i: 12.08096,
  		e: 0.2286031,
  		a: 2.6454924
  	},
  	{
  		H: 9.21,
  		name: "Notburga",
  		desig: "A907 CH",
  		epoch: 2459200.5,
  		ma: 299.4428,
  		w: 43.39463,
  		om: 341.59638,
  		i: 25.37322,
  		e: 0.2423389,
  		a: 2.5749829
  	},
  	{
  		H: 9.9,
  		name: "Charis",
  		desig: "A907 EJ",
  		epoch: 2459200.5,
  		ma: 197.66585,
  		w: 177.3739,
  		om: 142.46126,
  		i: 6.47365,
  		e: 0.0584357,
  		a: 2.9009352
  	},
  	{
  		H: 9.33,
  		name: "Christine",
  		desig: "A907 EK",
  		epoch: 2459200.5,
  		ma: 346.60201,
  		w: 206.12601,
  		om: 112.10942,
  		i: 11.52749,
  		e: 0.0443443,
  		a: 2.5830876
  	},
  	{
  		H: 10.07,
  		name: "Bernardina",
  		desig: "A907 EL",
  		epoch: 2459200.5,
  		ma: 213.27633,
  		w: 37.58957,
  		om: 86.42422,
  		i: 9.23643,
  		e: 0.1585037,
  		a: 3.1355663
  	},
  	{
  		H: 8.71,
  		name: "Philippina",
  		desig: "A907 FD",
  		epoch: 2459200.5,
  		ma: 194.10337,
  		w: 279.24035,
  		om: 224.56929,
  		i: 18.89349,
  		e: 0.0832301,
  		a: 2.7930591
  	},
  	{
  		H: 10.04,
  		name: "Zelima",
  		desig: "A907 JH",
  		epoch: 2459200.5,
  		ma: 153.62886,
  		w: 190.19556,
  		om: 147.27355,
  		i: 10.90263,
  		e: 0.0838173,
  		a: 3.0197971
  	},
  	{
  		H: 9.79,
  		name: "Ute",
  		desig: "A907 JJ",
  		epoch: 2459200.5,
  		ma: 32.80976,
  		w: 220.63209,
  		om: 133.20254,
  		i: 12.29367,
  		e: 0.1812629,
  		a: 3.0479404
  	},
  	{
  		H: 9.11,
  		name: "Vundtia",
  		desig: "A907 LA",
  		epoch: 2459200.5,
  		ma: 359.59941,
  		w: 228.00351,
  		om: 182.87234,
  		i: 11.00628,
  		e: 0.077777,
  		a: 3.1413021
  	},
  	{
  		H: 9.62,
  		name: "Erika",
  		desig: "A907 CE",
  		epoch: 2459200.5,
  		ma: 138.99204,
  		w: 298.58587,
  		om: 34.58895,
  		i: 7.9277,
  		e: 0.1692806,
  		a: 2.9133439
  	},
  	{
  		H: 10.1,
  		name: "Moira",
  		desig: "A917 RC",
  		epoch: 2459200.5,
  		ma: 42.89346,
  		w: 129.01238,
  		om: 103.19052,
  		i: 7.71278,
  		e: 0.1596186,
  		a: 2.7363802
  	},
  	{
  		H: 8.32,
  		name: "Latona",
  		desig: "A907 OA",
  		epoch: 2459200.5,
  		ma: 194.76195,
  		w: 70.68725,
  		om: 279.83206,
  		i: 8.55541,
  		e: 0.1072594,
  		a: 3.016594
  	},
  	{
  		H: 9.23,
  		name: "Brambilla",
  		desig: "A907 QA",
  		epoch: 2459200.5,
  		ma: 118.59415,
  		w: 29.31669,
  		om: 234.89303,
  		i: 13.37493,
  		e: 0.0796572,
  		a: 3.1577937
  	},
  	{
  		H: 10.01,
  		name: "Clara",
  		desig: "A907 RJ",
  		epoch: 2459200.5,
  		ma: 221.47806,
  		w: 120.46593,
  		om: 5.27253,
  		i: 8.16401,
  		e: 0.1269106,
  		a: 3.1873464
  	},
  	{
  		H: 9.82,
  		name: "Scheherezade",
  		desig: "A907 RK",
  		epoch: 2459200.5,
  		ma: 59.15971,
  		w: 230.02429,
  		om: 252.16866,
  		i: 13.76852,
  		e: 0.056769,
  		a: 3.3607725
  	},
  	{
  		H: 10.81,
  		name: "Cosima",
  		desig: "A907 RG",
  		epoch: 2459200.5,
  		ma: 13.64949,
  		w: 268.79805,
  		om: 109.9774,
  		i: 1.04104,
  		e: 0.15339,
  		a: 2.5991211
  	},
  	{
  		H: 9.94,
  		name: "Agrippina",
  		desig: "A907 RP",
  		epoch: 2459200.5,
  		ma: 233.70273,
  		w: 86.89388,
  		om: 359.35534,
  		i: 7.04688,
  		e: 0.1401413,
  		a: 3.2251043
  	},
  	{
  		H: 9.65,
  		name: "Pippa",
  		desig: "A907 RN",
  		epoch: 2459200.5,
  		ma: 239.82192,
  		w: 180.32835,
  		om: 290.83757,
  		i: 9.87832,
  		e: 0.2015281,
  		a: 3.1981621
  	},
  	{
  		H: 10.12,
  		name: "Antikleia",
  		desig: "A907 TK",
  		epoch: 2459200.5,
  		ma: 193.48206,
  		w: 354.28307,
  		om: 38.00204,
  		i: 10.7607,
  		e: 0.1012875,
  		a: 3.020843
  	},
  	{
  		H: 9.35,
  		name: "Berenike",
  		desig: "A907 WC",
  		epoch: 2459200.5,
  		ma: 94.04399,
  		w: 59.04111,
  		om: 132.82638,
  		i: 11.29501,
  		e: 0.0403075,
  		a: 3.0187939
  	},
  	{
  		H: 10.02,
  		name: "Briseis",
  		desig: "A907 VT",
  		epoch: 2459200.5,
  		ma: 310.56704,
  		w: 281.15092,
  		om: 129.84832,
  		i: 6.51342,
  		e: 0.0835547,
  		a: 2.9892124
  	},
  	{
  		H: 10.08,
  		name: "Beagle",
  		desig: "A917 ST",
  		epoch: 2459200.5,
  		ma: 17.67308,
  		w: 330.65144,
  		om: 184.26606,
  		i: 0.5167,
  		e: 0.1333897,
  		a: 3.1498856
  	},
  	{
  		H: 10.54,
  		name: "Asteria",
  		desig: "A908 BL",
  		epoch: 2459200.5,
  		ma: 207.91395,
  		w: 60.02883,
  		om: 350.97831,
  		i: 1.50589,
  		e: 0.0651825,
  		a: 2.8530002
  	},
  	{
  		H: 9.08,
  		name: "Crescentia",
  		desig: "A908 AN",
  		epoch: 2459200.5,
  		ma: 216.82494,
  		w: 105.8193,
  		om: 156.92757,
  		i: 15.19959,
  		e: 0.1076349,
  		a: 2.5340299
  	},
  	{
  		H: 9.69,
  		name: "Cloelia",
  		desig: "A908 DD",
  		epoch: 2459200.5,
  		ma: 186.80498,
  		w: 183.94383,
  		om: 335.58408,
  		i: 9.24773,
  		e: 0.0371701,
  		a: 3.0149141
  	},
  	{
  		H: 10.35,
  		name: "Newtonia",
  		desig: "A908 FF",
  		epoch: 2459200.5,
  		ma: 151.45009,
  		w: 165.48062,
  		om: 133.69638,
  		i: 4.12028,
  		e: 0.2161126,
  		a: 2.5539233
  	},
  	{
  		H: 9.21,
  		name: "Gerlinde",
  		desig: "A908 MB",
  		epoch: 2459200.5,
  		ma: 68.78684,
  		w: 311.4576,
  		om: 232.84763,
  		i: 17.81836,
  		e: 0.1455145,
  		a: 3.0691086
  	},
  	{
  		H: 9.97,
  		name: "Judith",
  		desig: "A908 MC",
  		epoch: 2459200.5,
  		ma: 303.81122,
  		w: 102.4503,
  		om: 170.91431,
  		i: 8.58075,
  		e: 0.2308198,
  		a: 3.1939402
  	},
  	{
  		H: 8.71,
  		name: "Sabine",
  		desig: "A908 OE",
  		epoch: 2459200.5,
  		ma: 73.37743,
  		w: 318.39942,
  		om: 298.40032,
  		i: 14.75398,
  		e: 0.1726709,
  		a: 3.1421632
  	},
  	{
  		H: 10.72,
  		name: "Desdemona",
  		desig: "A908 OG",
  		epoch: 2459200.5,
  		ma: 280.7473,
  		w: 173.86344,
  		om: 215.37181,
  		i: 7.5803,
  		e: 0.2373384,
  		a: 2.5946102
  	},
  	{
  		H: 9.42,
  		name: "Denise",
  		desig: "A908 OF",
  		epoch: 2459200.5,
  		ma: 123.69413,
  		w: 305.60546,
  		om: 153.24414,
  		i: 25.4024,
  		e: 0.190214,
  		a: 3.182083
  	},
  	{
  		H: 10.09,
  		name: "Kypria",
  		desig: "A908 QF",
  		epoch: 2459200.5,
  		ma: 218.17751,
  		w: 115.99668,
  		om: 170.72382,
  		i: 10.79168,
  		e: 0.0759985,
  		a: 3.0134154
  	},
  	{
  		H: 9.47,
  		name: "Ottegebe",
  		desig: "A908 QG",
  		epoch: 2459200.5,
  		ma: 310.41022,
  		w: 194.75707,
  		om: 174.59797,
  		i: 7.53499,
  		e: 0.1932312,
  		a: 2.8050727
  	},
  	{
  		H: 10.27,
  		name: "Carnegia",
  		desig: "A908 SJ",
  		epoch: 2459200.5,
  		ma: 140.13753,
  		w: 90.3021,
  		om: 0.50079,
  		i: 8.02885,
  		e: 0.0665135,
  		a: 3.0913029
  	},
  	{
  		H: 10.06,
  		name: "Edda",
  		desig: "A908 SG",
  		epoch: 2459200.5,
  		ma: 173.59057,
  		w: 235.72392,
  		om: 226.69231,
  		i: 2.87619,
  		e: 0.010027,
  		a: 2.815741
  	},
  	{
  		H: 7.52,
  		name: "Rachele",
  		desig: "A908 UK",
  		epoch: 2459200.5,
  		ma: 103.55306,
  		w: 41.73013,
  		om: 58.13007,
  		i: 13.51029,
  		e: 0.1952147,
  		a: 2.9210689
  	},
  	{
  		H: 8.13,
  		name: "Ludmilla",
  		desig: "A908 QH",
  		epoch: 2459200.5,
  		ma: 80.81018,
  		w: 152.68669,
  		om: 263.02277,
  		i: 9.80378,
  		e: 0.2039656,
  		a: 2.7692905
  	},
  	{
  		H: 9.49,
  		name: "Melitta",
  		desig: "A909 BO",
  		epoch: 2459200.5,
  		ma: 143.40017,
  		w: 184.76242,
  		om: 150.2344,
  		i: 12.83979,
  		e: 0.1218273,
  		a: 3.064038
  	},
  	{
  		H: 9.6,
  		name: "Aaltje",
  		desig: "A909 BP",
  		epoch: 2459200.5,
  		ma: 300.80803,
  		w: 275.46803,
  		om: 272.71199,
  		i: 8.48627,
  		e: 0.0500168,
  		a: 2.9557968
  	},
  	{
  		H: 9.28,
  		name: "Fredegundis",
  		desig: "A909 BQ",
  		epoch: 2459200.5,
  		ma: 94.82995,
  		w: 121.2182,
  		om: 281.11432,
  		i: 6.09411,
  		e: 0.2195498,
  		a: 2.5730478
  	},
  	{
  		H: 9.2,
  		name: "Pax",
  		desig: "A909 BR",
  		epoch: 2459200.5,
  		ma: 52.17273,
  		w: 266.99118,
  		om: 112.1173,
  		i: 24.40672,
  		e: 0.309227,
  		a: 2.5875943
  	},
  	{
  		H: 9.51,
  		name: "Genoveva",
  		desig: "A909 HF",
  		epoch: 2459200.5,
  		ma: 306.02415,
  		w: 245.90147,
  		om: 38.00505,
  		i: 17.49962,
  		e: 0.2945592,
  		a: 3.1432261
  	},
  	{
  		H: 10.8,
  		name: "Gorgo",
  		desig: "A909 JB",
  		epoch: 2459200.5,
  		ma: 75.21741,
  		w: 115.78383,
  		om: 177.84415,
  		i: 12.57318,
  		e: 0.1015069,
  		a: 3.1054408
  	},
  	{
  		H: 8.73,
  		name: "Lanzia",
  		desig: "A909 OA",
  		epoch: 2459200.5,
  		ma: 208.01529,
  		w: 281.46267,
  		om: 259.66198,
  		i: 18.53123,
  		e: 0.0583258,
  		a: 3.1128462
  	},
  	{
  		H: 10.92,
  		name: "Hildburg",
  		desig: "A909 PB",
  		epoch: 2459200.5,
  		ma: 174.60022,
  		w: 290.62576,
  		om: 336.35548,
  		i: 5.52235,
  		e: 0.0350032,
  		a: 2.4321845
  	},
  	{
  		H: 9.7,
  		name: "Gersuind",
  		desig: "A909 QA",
  		epoch: 2459200.5,
  		ma: 254.2911,
  		w: 89.13901,
  		om: 243.04656,
  		i: 15.68657,
  		e: 0.2682135,
  		a: 2.5887593
  	},
  	{
  		H: 10.94,
  		name: "Melanie",
  		desig: "A909 QC",
  		epoch: 2459200.5,
  		ma: 65.13449,
  		w: 138.96723,
  		om: 170.8368,
  		i: 10.24501,
  		e: 0.1391322,
  		a: 2.6971186
  	},
  	{
  		H: 8.06,
  		name: "Wratislavia",
  		desig: "A909 UE",
  		epoch: 2459200.5,
  		ma: 336.42278,
  		w: 114.23441,
  		om: 253.07868,
  		i: 11.24675,
  		e: 0.1774233,
  		a: 3.1503379
  	},
  	{
  		H: 9.35,
  		name: "Lehigh",
  		desig: "A909 XB",
  		epoch: 2459200.5,
  		ma: 131.36754,
  		w: 304.26227,
  		om: 87.97654,
  		i: 13.01226,
  		e: 0.1232197,
  		a: 3.0111466
  	},
  	{
  		H: 9.03,
  		name: "Hippodamia",
  		desig: "A901 VJ",
  		epoch: 2459200.5,
  		ma: 40.78086,
  		w: 53.93761,
  		om: 63.46285,
  		i: 26.0733,
  		e: 0.1686916,
  		a: 3.3855602
  	},
  	{
  		H: 9.57,
  		name: "Zerbinetta",
  		desig: "A909 SD",
  		epoch: 2459200.5,
  		ma: 97.56847,
  		w: 284.37767,
  		om: 351.71608,
  		i: 14.19207,
  		e: 0.0311135,
  		a: 2.9422187
  	},
  	{
  		H: 9.24,
  		name: "Ekard",
  		desig: "A909 VC",
  		epoch: 2459200.5,
  		ma: 201.64823,
  		w: 111.8128,
  		om: 229.98188,
  		i: 15.88882,
  		e: 0.322691,
  		a: 2.6712188
  	},
  	{
  		H: 9.1,
  		name: "Bella",
  		desig: "A909 VD",
  		epoch: 2459200.5,
  		ma: 212.98103,
  		w: 80.01519,
  		om: 275.52772,
  		i: 13.84739,
  		e: 0.1600782,
  		a: 2.5392123
  	},
  	{
  		H: 9.58,
  		name: "Leonora",
  		desig: "A916 BD",
  		epoch: 2459200.5,
  		ma: 227.45392,
  		w: 103.82634,
  		om: 299.50604,
  		i: 13.03728,
  		e: 0.2501113,
  		a: 3.1699736
  	},
  	{
  		H: 9.55,
  		name: "Galilea",
  		desig: "A910 CL",
  		epoch: 2459200.5,
  		ma: 25.53377,
  		w: 332.91802,
  		om: 15.42537,
  		i: 15.12347,
  		e: 0.1541468,
  		a: 2.8807667
  	},
  	{
  		H: 10.96,
  		name: "Ernestina",
  		desig: "A910 ED",
  		epoch: 2459200.5,
  		ma: 310.64223,
  		w: 98.56665,
  		om: 40.6277,
  		i: 11.53075,
  		e: 0.1109122,
  		a: 2.8675864
  	},
  	{
  		H: 9.21,
  		name: "Oriola",
  		desig: "A910 ND",
  		epoch: 2459200.5,
  		ma: 114.21292,
  		w: 326.95452,
  		om: 243.61465,
  		i: 7.12878,
  		e: 0.036096,
  		a: 3.0156956
  	},
  	{
  		H: 7.35,
  		name: "Alauda",
  		desig: "A910 OA",
  		epoch: 2459200.5,
  		ma: 155.73498,
  		w: 352.66327,
  		om: 289.74397,
  		i: 20.60167,
  		e: 0.0169148,
  		a: 3.1942938
  	},
  	{
  		H: 6.38,
  		name: "Interamnia",
  		desig: "A910 TC",
  		epoch: 2459200.5,
  		ma: 211.37564,
  		w: 94.86042,
  		om: 280.2839,
  		i: 17.31036,
  		e: 0.1552403,
  		a: 3.0561407
  	},
  	{
  		H: 8.49,
  		name: "Erminia",
  		desig: "A910 TE",
  		epoch: 2459200.5,
  		ma: 303.10783,
  		w: 102.57293,
  		om: 2.79121,
  		i: 25.01786,
  		e: 0.0503899,
  		a: 2.9224867
  	},
  	{
  		H: 10.6,
  		name: "Raphaela",
  		desig: "A911 CB",
  		epoch: 2459200.5,
  		ma: 10.37475,
  		w: 197.20431,
  		om: 355.17298,
  		i: 3.49001,
  		e: 0.0855608,
  		a: 2.6696855
  	},
  	{
  		H: 9.15,
  		name: "Fringilla",
  		desig: "A911 CC",
  		epoch: 2459200.5,
  		ma: 171.50349,
  		w: 19.32001,
  		om: 324.37735,
  		i: 16.26296,
  		e: 0.1128267,
  		a: 2.9159547
  	},
  	{
  		H: 8.67,
  		name: "Boliviana",
  		desig: "A911 FF",
  		epoch: 2459200.5,
  		ma: 240.96939,
  		w: 181.35293,
  		om: 230.80348,
  		i: 12.7568,
  		e: 0.1861728,
  		a: 2.5762149
  	},
  	{
  		H: 8.97,
  		name: "Luscinia",
  		desig: "A911 HG",
  		epoch: 2459200.5,
  		ma: 24.39257,
  		w: 138.19709,
  		om: 217.48458,
  		i: 10.34422,
  		e: 0.1553287,
  		a: 3.3972239
  	},
  	{
  		H: 9.06,
  		name: "Ulula",
  		desig: "A911 KG",
  		epoch: 2459200.5,
  		ma: 159.69871,
  		w: 231.5356,
  		om: 233.83342,
  		i: 14.26817,
  		e: 0.0564782,
  		a: 2.5352756
  	},
  	{
  		H: 10.12,
  		name: "Transvaalia",
  		desig: "A911 HH",
  		epoch: 2459200.5,
  		ma: 173.44164,
  		w: 301.07663,
  		om: 46.06679,
  		i: 13.81796,
  		e: 0.0832731,
  		a: 2.7682991
  	},
  	{
  		H: 10.71,
  		name: "Berkeley",
  		desig: "A911 OC",
  		epoch: 2459200.5,
  		ma: 178.15616,
  		w: 56.68806,
  		om: 145.88683,
  		i: 8.4875,
  		e: 0.0867375,
  		a: 2.8116618
  	},
  	{
  		H: 10.96,
  		name: "Wisibada",
  		desig: "A911 QK",
  		epoch: 2459200.5,
  		ma: 186.27365,
  		w: 24.39805,
  		om: 343.55432,
  		i: 1.64644,
  		e: 0.2635494,
  		a: 3.1380245
  	},
  	{
  		H: 9.68,
  		name: "Erida",
  		desig: "A911 SA",
  		epoch: 2459200.5,
  		ma: 300.00975,
  		w: 174.54839,
  		om: 38.52314,
  		i: 6.92613,
  		e: 0.1987086,
  		a: 3.0576984
  	},
  	{
  		H: 9.65,
  		name: "Bohlinia",
  		desig: "A911 UL",
  		epoch: 2459200.5,
  		ma: 318.59606,
  		w: 111.79756,
  		om: 35.68821,
  		i: 2.35354,
  		e: 0.0185687,
  		a: 2.8876869
  	},
  	{
  		H: 9.37,
  		name: "Tabora",
  		desig: "A911 UM",
  		epoch: 2459200.5,
  		ma: 94.8069,
  		w: 352.57625,
  		om: 38.38952,
  		i: 8.31995,
  		e: 0.1170941,
  		a: 3.554086
  	},
  	{
  		H: 10.08,
  		name: "Hammonia",
  		desig: "A911 UO",
  		epoch: 2459200.5,
  		ma: 11.43862,
  		w: 250.48077,
  		om: 163.18186,
  		i: 4.98988,
  		e: 0.0552073,
  		a: 2.993244
  	},
  	{
  		H: 10.5,
  		name: "Joella",
  		desig: "A911 WC",
  		epoch: 2459200.5,
  		ma: 226.99934,
  		w: 113.22625,
  		om: 241.96947,
  		i: 15.43667,
  		e: 0.285308,
  		a: 2.5649106
  	},
  	{
  		H: 9.63,
  		name: "Nipponia",
  		desig: "A912 CF",
  		epoch: 2459200.5,
  		ma: 234.94584,
  		w: 274.38043,
  		om: 133.05212,
  		i: 15.06184,
  		e: 0.1053851,
  		a: 2.5672674
  	},
  	{
  		H: 9.4,
  		name: "Watsonia",
  		desig: "A912 CE",
  		epoch: 2459200.5,
  		ma: 207.80352,
  		w: 87.70851,
  		om: 124.32751,
  		i: 18.05081,
  		e: 0.0972271,
  		a: 2.7591722
  	},
  	{
  		H: 9.72,
  		name: "Sorga",
  		desig: "A912 GH",
  		epoch: 2459200.5,
  		ma: 239.16409,
  		w: 288.67755,
  		om: 46.1308,
  		i: 10.68988,
  		e: 0.1413885,
  		a: 2.9866372
  	},
  	{
  		H: 10.57,
  		name: "Tjilaki",
  		desig: "A912 HK",
  		epoch: 2459200.5,
  		ma: 50.82638,
  		w: 65.08169,
  		om: 173.32249,
  		i: 10.99481,
  		e: 0.0440661,
  		a: 2.4572247
  	},
  	{
  		H: 9.24,
  		name: "Mocia",
  		desig: "A912 SA",
  		epoch: 2459200.5,
  		ma: 310.65403,
  		w: 189.54737,
  		om: 340.9778,
  		i: 20.28607,
  		e: 0.058448,
  		a: 3.4005995
  	},
  	{
  		H: 9.97,
  		name: "Benda",
  		desig: "A912 TF",
  		epoch: 2459200.5,
  		ma: 87.23492,
  		w: 66.14757,
  		om: 3.13038,
  		i: 5.80546,
  		e: 0.1000611,
  		a: 3.1476249
  	},
  	{
  		H: 9.83,
  		name: "Marghanna",
  		desig: "A912 XD",
  		epoch: 2459200.5,
  		ma: 30.43359,
  		w: 309.78426,
  		om: 42.95054,
  		i: 16.8662,
  		e: 0.3209099,
  		a: 2.7293808
  	},
  	{
  		H: 9.03,
  		name: "Arequipa",
  		desig: "A912 XC",
  		epoch: 2459200.5,
  		ma: 43.44992,
  		w: 134.1174,
  		om: 184.62866,
  		i: 12.36805,
  		e: 0.2449715,
  		a: 2.5897316
  	},
  	{
  		H: 10.05,
  		name: "Alagasta",
  		desig: "A913 AF",
  		epoch: 2459200.5,
  		ma: 83.2959,
  		w: 43.10565,
  		om: 132.09424,
  		i: 3.535,
  		e: 0.0542946,
  		a: 3.0366577
  	},
  	{
  		H: 8.71,
  		name: "Mandeville",
  		desig: "A913 CH",
  		epoch: 2459200.5,
  		ma: 265.36083,
  		w: 45.11457,
  		om: 136.55155,
  		i: 20.66121,
  		e: 0.1435935,
  		a: 2.7377287
  	},
  	{
  		H: 9.18,
  		name: "Cantabia",
  		desig: "A913 CK",
  		epoch: 2459200.5,
  		ma: 69.3842,
  		w: 48.12158,
  		om: 116.07476,
  		i: 10.84622,
  		e: 0.1093737,
  		a: 3.0511702
  	},
  	{
  		H: 10.09,
  		name: "Botolphia",
  		desig: "A913 CJ",
  		epoch: 2459200.5,
  		ma: 1.14763,
  		w: 61.72251,
  		om: 100.70631,
  		i: 8.41364,
  		e: 0.070115,
  		a: 2.7195689
  	},
  	{
  		H: 9.54,
  		name: "Edisona",
  		desig: "A913 DC",
  		epoch: 2459200.5,
  		ma: 7.66521,
  		w: 283.46698,
  		om: 64.15705,
  		i: 11.20364,
  		e: 0.115574,
  		a: 3.0116761
  	},
  	{
  		H: 10.36,
  		name: "Eugenisis",
  		desig: "A913 DD",
  		epoch: 2459200.5,
  		ma: 126.75611,
  		w: 186.4561,
  		om: 228.95678,
  		i: 4.83443,
  		e: 0.0596538,
  		a: 2.7925212
  	},
  	{
  		H: 10.4,
  		name: "Aguntina",
  		desig: "A913 DE",
  		epoch: 2459200.5,
  		ma: 6.23285,
  		w: 28.75252,
  		om: 142.63919,
  		i: 7.715,
  		e: 0.116978,
  		a: 3.1718209
  	},
  	{
  		H: 10.54,
  		name: "Mauritia",
  		desig: "A913 EH",
  		epoch: 2459200.5,
  		ma: 135.63564,
  		w: 29.02589,
  		om: 125.67008,
  		i: 13.32813,
  		e: 0.0396291,
  		a: 3.2686466
  	},
  	{
  		H: 9.87,
  		name: "Marlu",
  		desig: "A913 EJ",
  		epoch: 2459200.5,
  		ma: 96.23775,
  		w: 306.8562,
  		om: 1.93291,
  		i: 17.47878,
  		e: 0.236869,
  		a: 3.1102135
  	},
  	{
  		H: 7.85,
  		name: "Winchester",
  		desig: "A913 EK",
  		epoch: 2459200.5,
  		ma: 0.4773,
  		w: 277.42878,
  		om: 129.10354,
  		i: 18.21787,
  		e: 0.3390625,
  		a: 2.9999636
  	},
  	{
  		H: 8.76,
  		name: "Faina",
  		desig: "A913 HE",
  		epoch: 2459200.5,
  		ma: 341.64477,
  		w: 302.39142,
  		om: 78.83578,
  		i: 15.59762,
  		e: 0.1510388,
  		a: 2.5508199
  	},
  	{
  		H: 10.33,
  		name: "Sulamitis",
  		desig: "A913 HG",
  		epoch: 2459200.5,
  		ma: 45.40868,
  		w: 23.43198,
  		om: 85.11793,
  		i: 5.9617,
  		e: 0.0746892,
  		a: 2.4626501
  	},
  	{
  		H: 10.2,
  		name: "Tiflis",
  		desig: "A913 HH",
  		epoch: 2459200.5,
  		ma: 70.48163,
  		w: 202.9919,
  		om: 61.33227,
  		i: 10.08812,
  		e: 0.2215713,
  		a: 2.3285081
  	},
  	{
  		H: 9.27,
  		name: "Malabar",
  		desig: "A906 QH",
  		epoch: 2459200.5,
  		ma: 271.01182,
  		w: 303.44647,
  		om: 179.92418,
  		i: 24.54476,
  		e: 0.050192,
  		a: 2.9861705
  	},
  	{
  		H: 9.72,
  		name: "Quintilla",
  		desig: "A908 GC",
  		epoch: 2459200.5,
  		ma: 328.8111,
  		w: 44.02147,
  		om: 176.66981,
  		i: 3.24273,
  		e: 0.1371359,
  		a: 3.1806602
  	},
  	{
  		H: 9.98,
  		name: "Lilliana",
  		desig: "A908 HD",
  		epoch: 2459200.5,
  		ma: 198.01577,
  		w: 4.46059,
  		om: 208.06647,
  		i: 20.35167,
  		e: 0.1482634,
  		a: 3.1953425
  	},
  	{
  		H: 10.13,
  		name: "Portlandia",
  		desig: "A908 TG",
  		epoch: 2459200.5,
  		ma: 205.35913,
  		w: 43.77309,
  		om: 22.49683,
  		i: 8.16797,
  		e: 0.1092266,
  		a: 2.3731882
  	},
  	{
  		H: 8.46,
  		name: "Mancunia",
  		desig: "A912 KB",
  		epoch: 2459200.5,
  		ma: 178.38534,
  		w: 314.52165,
  		om: 106.18877,
  		i: 5.6106,
  		e: 0.1504915,
  		a: 3.1874887
  	},
  	{
  		H: 10.61,
  		name: "Vinifera",
  		desig: "A913 QC",
  		epoch: 2459200.5,
  		ma: 125.96879,
  		w: 0.985,
  		om: 318.346,
  		i: 19.90529,
  		e: 0.2054103,
  		a: 2.6190788
  	},
  	{
  		H: 7.93,
  		name: "Massinga",
  		desig: "A913 QD",
  		epoch: 2459200.5,
  		ma: 212.15995,
  		w: 200.51871,
  		om: 331.54836,
  		i: 12.53955,
  		e: 0.2334347,
  		a: 3.1462562
  	},
  	{
  		H: 10.73,
  		name: "Brendelia",
  		desig: "A913 RE",
  		epoch: 2459200.5,
  		ma: 80.92957,
  		w: 297.67188,
  		om: 23.72738,
  		i: 2.15551,
  		e: 0.0627861,
  		a: 2.86241
  	},
  	{
  		H: 8.03,
  		name: "Pulcova",
  		desig: "A913 RD",
  		epoch: 2459200.5,
  		ma: 270.77267,
  		w: 188.99734,
  		om: 305.54278,
  		i: 13.10061,
  		e: 0.106369,
  		a: 3.1522748
  	},
  	{
  		H: 9.75,
  		name: "Gedania",
  		desig: "A913 SF",
  		epoch: 2459200.5,
  		ma: 276.08653,
  		w: 157.54906,
  		om: 258.8468,
  		i: 10.00192,
  		e: 0.0934342,
  		a: 3.1976889
  	},
  	{
  		H: 9.93,
  		name: "Moguntia",
  		desig: "A913 SH",
  		epoch: 2459200.5,
  		ma: 95.79627,
  		w: 71.00312,
  		om: 7.81892,
  		i: 10.08904,
  		e: 0.0966189,
  		a: 3.0192142
  	},
  	{
  		H: 10.2,
  		name: "Bondia",
  		desig: "A913 SD",
  		epoch: 2459200.5,
  		ma: 172.81065,
  		w: 269.11253,
  		om: 79.31819,
  		i: 2.41172,
  		e: 0.1824279,
  		a: 3.1216042
  	},
  	{
  		H: 10.29,
  		name: "Struveana",
  		desig: "A913 TC",
  		epoch: 2459200.5,
  		ma: 62.96072,
  		w: 16.68777,
  		om: 38.89494,
  		i: 16.27068,
  		e: 0.2130862,
  		a: 3.1388289
  	},
  	{
  		H: 9.05,
  		name: "Tatjana",
  		desig: "A913 TD",
  		epoch: 2459200.5,
  		ma: 10.76435,
  		w: 253.66421,
  		om: 38.42759,
  		i: 7.36483,
  		e: 0.1875965,
  		a: 3.1713243
  	},
  	{
  		H: 10.97,
  		name: "Bali",
  		desig: "A913 UG",
  		epoch: 2459200.5,
  		ma: 116.18592,
  		w: 18.23983,
  		om: 44.68017,
  		i: 4.38349,
  		e: 0.151266,
  		a: 2.2206343
  	},
  	{
  		H: 10.31,
  		name: "Libera",
  		desig: "A913 WB",
  		epoch: 2459200.5,
  		ma: 272.11618,
  		w: 228.43845,
  		om: 217.88488,
  		i: 14.88686,
  		e: 0.2468913,
  		a: 2.6528288
  	},
  	{
  		H: 8.43,
  		name: "Tanete",
  		desig: "A913 YD",
  		epoch: 2459200.5,
  		ma: 106.89333,
  		w: 146.32004,
  		om: 63.76802,
  		i: 28.82675,
  		e: 0.0937927,
  		a: 3.0007199
  	},
  	{
  		H: 9.18,
  		name: "Irmintraud",
  		desig: "A913 YF",
  		epoch: 2459200.5,
  		ma: 185.74478,
  		w: 332.6634,
  		om: 322.30008,
  		i: 16.66698,
  		e: 0.0786406,
  		a: 2.8593423
  	},
  	{
  		H: 8.85,
  		name: "Armor",
  		desig: "A913 YE",
  		epoch: 2459200.5,
  		ma: 176.8744,
  		w: 28.56618,
  		om: 250.11573,
  		i: 5.56486,
  		e: 0.1670375,
  		a: 3.049267
  	},
  	{
  		H: 10.35,
  		name: "Lumiere",
  		desig: "A914 AA",
  		epoch: 2459200.5,
  		ma: 176.36033,
  		w: 167.79906,
  		om: 297.73547,
  		i: 9.2904,
  		e: 0.0693069,
  		a: 3.0152154
  	},
  	{
  		H: 7.72,
  		name: "Berbericia",
  		desig: "A914 BE",
  		epoch: 2459200.5,
  		ma: 190.31052,
  		w: 306.8076,
  		om: 79.71382,
  		i: 18.23762,
  		e: 0.1655252,
  		a: 2.9296726
  	},
  	{
  		H: 9.84,
  		name: "Gutemberga",
  		desig: "A914 BF",
  		epoch: 2459200.5,
  		ma: 112.71641,
  		w: 264.68942,
  		om: 283.25023,
  		i: 12.92705,
  		e: 0.1111489,
  		a: 3.2296999
  	},
  	{
  		H: 9.81,
  		name: "Theobalda",
  		desig: "A914 BG",
  		epoch: 2459200.5,
  		ma: 301.33384,
  		w: 135.03688,
  		om: 321.23734,
  		i: 13.71334,
  		e: 0.2555389,
  		a: 3.1781317
  	},
  	{
  		H: 7.99,
  		name: "Nina",
  		desig: "A914 BH",
  		epoch: 2459200.5,
  		ma: 346.9024,
  		w: 49.01752,
  		om: 283.73642,
  		i: 14.5802,
  		e: 0.2277896,
  		a: 2.6646458
  	},
  	{
  		H: 9.09,
  		name: "Armenia",
  		desig: "A914 BJ",
  		epoch: 2459200.5,
  		ma: 274.34859,
  		w: 213.63053,
  		om: 144.83597,
  		i: 19.09055,
  		e: 0.0976363,
  		a: 3.1132283
  	},
  	{
  		H: 9.6,
  		name: "Kartvelia",
  		desig: "A914 BK",
  		epoch: 2459200.5,
  		ma: 335.6136,
  		w: 156.11328,
  		om: 138.08659,
  		i: 19.15732,
  		e: 0.1174652,
  		a: 3.2176145
  	},
  	{
  		H: 9.35,
  		name: "Pickeringia",
  		desig: "A914 FC",
  		epoch: 2459200.5,
  		ma: 133.53158,
  		w: 238.03715,
  		om: 14.91581,
  		i: 12.28225,
  		e: 0.2421275,
  		a: 3.0961158
  	},
  	{
  		H: 9.5,
  		name: "Zwetana",
  		desig: "A914 FD",
  		epoch: 2459200.5,
  		ma: 291.34688,
  		w: 131.43524,
  		om: 71.87005,
  		i: 12.76893,
  		e: 0.2101259,
  		a: 2.5698242
  	},
  	{
  		H: 8.94,
  		name: "Bredichina",
  		desig: "A914 HD",
  		epoch: 2459200.5,
  		ma: 302.33496,
  		w: 133.63735,
  		om: 89.76287,
  		i: 14.5171,
  		e: 0.1597799,
  		a: 3.1767855
  	},
  	{
  		H: 9.65,
  		name: "Moskva",
  		desig: "A914 HC",
  		epoch: 2459200.5,
  		ma: 48.89504,
  		w: 125.68106,
  		om: 183.83072,
  		i: 14.85249,
  		e: 0.130108,
  		a: 2.5383104
  	},
  	{
  		H: 8.72,
  		name: "Hohensteina",
  		desig: "A914 HE",
  		epoch: 2459200.5,
  		ma: 98.10417,
  		w: 48.24578,
  		om: 177.67958,
  		i: 14.34988,
  		e: 0.1350294,
  		a: 3.1242774
  	},
  	{
  		H: 8.11,
  		name: "Pretoria",
  		desig: "A912 BE",
  		epoch: 2459200.5,
  		ma: 337.62907,
  		w: 38.64791,
  		om: 252.03398,
  		i: 20.53131,
  		e: 0.1529502,
  		a: 3.4090864
  	},
  	{
  		H: 9.24,
  		name: "Ani",
  		desig: "A914 MB",
  		epoch: 2459200.5,
  		ma: 68.72718,
  		w: 201.55574,
  		om: 129.81197,
  		i: 16.38104,
  		e: 0.1929612,
  		a: 3.1226547
  	},
  	{
  		H: 10.23,
  		name: "Metcalfia",
  		desig: "A907 FC",
  		epoch: 2459200.5,
  		ma: 326.60719,
  		w: 227.46,
  		om: 265.07216,
  		i: 8.62457,
  		e: 0.131531,
  		a: 2.6225916
  	},
  	{
  		H: 10.03,
  		name: "Arizona",
  		desig: "A907 GZ",
  		epoch: 2459200.5,
  		ma: 346.64309,
  		w: 308.178,
  		om: 35.97633,
  		i: 15.77515,
  		e: 0.1246654,
  		a: 2.7964921
  	},
  	{
  		H: 9.96,
  		name: "Fini",
  		desig: "A914 SF",
  		epoch: 2459200.5,
  		ma: 249.93965,
  		w: 190.11359,
  		om: 17.37031,
  		i: 19.0493,
  		e: 0.1022077,
  		a: 2.7494687
  	},
  	{
  		H: 9.17,
  		name: "Sarita",
  		desig: "A914 UF",
  		epoch: 2459200.5,
  		ma: 310.02106,
  		w: 329.48815,
  		om: 33.1744,
  		i: 19.04745,
  		e: 0.3203364,
  		a: 2.6351253
  	},
  	{
  		H: 10.45,
  		name: "Montana",
  		desig: "A914 WG",
  		epoch: 2459200.5,
  		ma: 260.28053,
  		w: 354.70864,
  		om: 238.32162,
  		i: 4.51205,
  		e: 0.0604852,
  		a: 2.5356026
  	},
  	{
  		H: 9.63,
  		name: "Ruth",
  		desig: "A914 WH",
  		epoch: 2459200.5,
  		ma: 266.37571,
  		w: 43.79333,
  		om: 214.24636,
  		i: 9.23771,
  		e: 0.0355251,
  		a: 3.0151137
  	},
  	{
  		H: 10.3,
  		name: "Gudula",
  		desig: "A915 EA",
  		epoch: 2459200.5,
  		ma: 162.09329,
  		w: 237.37542,
  		om: 164.85486,
  		i: 5.28269,
  		e: 0.0228422,
  		a: 2.5410304
  	},
  	{
  		H: 9.47,
  		name: "Picka",
  		desig: "A915 FL",
  		epoch: 2459200.5,
  		ma: 13.93495,
  		w: 57.93689,
  		om: 250.87789,
  		i: 8.65843,
  		e: 0.0649113,
  		a: 3.2008623
  	},
  	{
  		H: 7.93,
  		name: "Hispania",
  		desig: "A915 FK",
  		epoch: 2459200.5,
  		ma: 247.24684,
  		w: 344.72211,
  		om: 347.58717,
  		i: 15.3985,
  		e: 0.1407821,
  		a: 2.8371716
  	},
  	{
  		H: 9.87,
  		name: "Hormuthia",
  		desig: "A915 HD",
  		epoch: 2459200.5,
  		ma: 49.49645,
  		w: 131.78005,
  		om: 166.34439,
  		i: 15.73124,
  		e: 0.186967,
  		a: 3.1922946
  	},
  	{
  		H: 10.25,
  		name: "Gyldenia",
  		desig: "A915 HE",
  		epoch: 2459200.5,
  		ma: 158.74547,
  		w: 121.20786,
  		om: 43.69904,
  		i: 14.19972,
  		e: 0.0786167,
  		a: 3.2107527
  	},
  	{
  		H: 10.69,
  		name: "Ceraskia",
  		desig: "A915 HF",
  		epoch: 2459200.5,
  		ma: 129.17106,
  		w: 337.1586,
  		om: 132.20339,
  		i: 11.31979,
  		e: 0.0649825,
  		a: 3.0162503
  	},
  	{
  		H: 9.82,
  		name: "Merxia",
  		desig: "A901 TG",
  		epoch: 2459200.5,
  		ma: 357.33966,
  		w: 274.70627,
  		om: 180.99028,
  		i: 4.72164,
  		e: 0.1290645,
  		a: 2.7453141
  	},
  	{
  		H: 10.76,
  		name: "Nauheima",
  		desig: "A915 RT",
  		epoch: 2459200.5,
  		ma: 155.35955,
  		w: 178.65959,
  		om: 130.80743,
  		i: 3.13714,
  		e: 0.0710834,
  		a: 2.8980823
  	},
  	{
  		H: 8.82,
  		name: "Tauris",
  		desig: "A916 AE",
  		epoch: 2459200.5,
  		ma: 282.54176,
  		w: 296.3901,
  		om: 88.78914,
  		i: 21.81432,
  		e: 0.3062433,
  		a: 3.1581221
  	},
  	{
  		H: 10.87,
  		name: "Coppelia",
  		desig: "A916 CC",
  		epoch: 2459200.5,
  		ma: 79.65105,
  		w: 58.32424,
  		om: 57.04941,
  		i: 13.86726,
  		e: 0.0758441,
  		a: 2.6579397
  	},
  	{
  		H: 10.47,
  		name: "Juliana",
  		desig: "A916 CE",
  		epoch: 2459200.5,
  		ma: 47.22329,
  		w: 20.88982,
  		om: 127.84294,
  		i: 14.3283,
  		e: 0.10847,
  		a: 3.0019407
  	},
  	{
  		H: 10.69,
  		name: "Annika",
  		desig: "A916 CD",
  		epoch: 2459200.5,
  		ma: 108.39135,
  		w: 285.13856,
  		om: 125.47,
  		i: 11.33596,
  		e: 0.1803967,
  		a: 2.5897422
  	},
  	{
  		H: 9.32,
  		name: "Kapteynia",
  		desig: "A916 DF",
  		epoch: 2459200.5,
  		ma: 319.45411,
  		w: 291.38183,
  		om: 70.74795,
  		i: 15.63228,
  		e: 0.092194,
  		a: 3.1747679
  	},
  	{
  		H: 10.45,
  		name: "Adriana",
  		desig: "A916 FJ",
  		epoch: 2459200.5,
  		ma: 208.16711,
  		w: 194.15324,
  		om: 118.44558,
  		i: 5.93409,
  		e: 0.0504103,
  		a: 3.1308115
  	},
  	{
  		H: 10.26,
  		name: "Anastasia",
  		desig: "A916 FF",
  		epoch: 2459200.5,
  		ma: 63.62422,
  		w: 141.45501,
  		om: 141.34855,
  		i: 8.13198,
  		e: 0.1376293,
  		a: 2.7919631
  	},
  	{
  		H: 10.34,
  		name: "Lindemannia",
  		desig: "A916 QH",
  		epoch: 2459200.5,
  		ma: 167.75756,
  		w: 295.27603,
  		om: 1.81785,
  		i: 1.12521,
  		e: 0.0278327,
  		a: 3.1924247
  	},
  	{
  		H: 9.15,
  		name: "Petropolitana",
  		desig: "A917 YD",
  		epoch: 2459200.5,
  		ma: 331.67691,
  		w: 90.93407,
  		om: 340.27831,
  		i: 3.80273,
  		e: 0.0651132,
  		a: 3.2089444
  	},
  	{
  		H: 9.49,
  		name: "Burnhamia",
  		desig: "A916 SG",
  		epoch: 2459200.5,
  		ma: 242.32532,
  		w: 91.3733,
  		om: 182.66591,
  		i: 3.97838,
  		e: 0.2011056,
  		a: 3.1847648
  	},
  	{
  		H: 10.19,
  		name: "Seraphina",
  		desig: "A916 SL",
  		epoch: 2459200.5,
  		ma: 55.12228,
  		w: 117.17791,
  		om: 240.05469,
  		i: 10.42176,
  		e: 0.1310075,
  		a: 2.8989307
  	},
  	{
  		H: 10.69,
  		name: "Valborg",
  		desig: "A916 SM",
  		epoch: 2459200.5,
  		ma: 275.61667,
  		w: 339.88518,
  		om: 338.18053,
  		i: 12.6064,
  		e: 0.1524319,
  		a: 2.6140587
  	},
  	{
  		H: 10.13,
  		name: "Zenobia",
  		desig: "A916 SN",
  		epoch: 2459200.5,
  		ma: 357.88072,
  		w: 10.26033,
  		om: 272.76588,
  		i: 9.9868,
  		e: 0.101617,
  		a: 3.1324973
  	},
  	{
  		H: 10.73,
  		name: "Kerstin",
  		desig: "A916 TB",
  		epoch: 2459200.5,
  		ma: 24.23959,
  		w: 352.56458,
  		om: 5.40046,
  		i: 14.49626,
  		e: 0.1164142,
  		a: 3.2365642
  	},
  	{
  		H: 9.69,
  		name: "Leontina",
  		desig: "A916 TC",
  		epoch: 2459200.5,
  		ma: 126.42771,
  		w: 353.36243,
  		om: 348.68101,
  		i: 8.7764,
  		e: 0.0694008,
  		a: 3.2045324
  	},
  	{
  		H: 10.23,
  		name: "Naema",
  		desig: "A916 WM",
  		epoch: 2459200.5,
  		ma: 305.29866,
  		w: 294.22162,
  		om: 43.12994,
  		i: 12.60558,
  		e: 0.0701745,
  		a: 2.9396966
  	},
  	{
  		H: 10.35,
  		name: "Lipperta",
  		desig: "A916 WN",
  		epoch: 2459200.5,
  		ma: 312.22995,
  		w: 129.72578,
  		om: 260.82888,
  		i: 0.26492,
  		e: 0.1761725,
  		a: 3.1339193
  	},
  	{
  		H: 10.19,
  		name: "Agnia",
  		desig: "A915 RP",
  		epoch: 2459200.5,
  		ma: 188.54906,
  		w: 129.72155,
  		om: 270.91609,
  		i: 2.48197,
  		e: 0.0960263,
  		a: 2.7809586
  	},
  	{
  		H: 8.2,
  		name: "Ara",
  		desig: "A915 UB",
  		epoch: 2459200.5,
  		ma: 358.66295,
  		w: 63.23914,
  		om: 228.34966,
  		i: 19.52441,
  		e: 0.2013135,
  		a: 3.1478886
  	},
  	{
  		H: 9.73,
  		name: "Altona",
  		desig: "A916 FG",
  		epoch: 2459200.5,
  		ma: 356.61843,
  		w: 134.99024,
  		om: 121.13075,
  		i: 15.54592,
  		e: 0.1254635,
  		a: 2.9996303
  	},
  	{
  		H: 10.11,
  		name: "Wladilena",
  		desig: "A916 GM",
  		epoch: 2459200.5,
  		ma: 221.8313,
  		w: 282.32444,
  		om: 27.27616,
  		i: 23.01327,
  		e: 0.2743294,
  		a: 2.3627789
  	},
  	{
  		H: 10.35,
  		name: "El Djezair",
  		desig: "A916 KF",
  		epoch: 2459200.5,
  		ma: 77.097,
  		w: 178.75968,
  		om: 67.14343,
  		i: 8.86649,
  		e: 0.1035574,
  		a: 2.8112655
  	},
  	{
  		H: 9.76,
  		name: "Bouzareah",
  		desig: "A916 TD",
  		epoch: 2459200.5,
  		ma: 349.95812,
  		w: 21.75099,
  		om: 35.68397,
  		i: 13.50305,
  		e: 0.1094018,
  		a: 3.2241748
  	},
  	{
  		H: 9.99,
  		name: "Ursina",
  		desig: "A917 BE",
  		epoch: 2459200.5,
  		ma: 224.66657,
  		w: 21.78694,
  		om: 309.35099,
  		i: 13.29912,
  		e: 0.1069582,
  		a: 2.7962636
  	},
  	{
  		H: 9.75,
  		name: "Aida",
  		desig: "A917 BF",
  		epoch: 2459200.5,
  		ma: 49.79066,
  		w: 192.22108,
  		om: 114.94739,
  		i: 8.05871,
  		e: 0.1007779,
  		a: 3.1385404
  	},
  	{
  		H: 9.84,
  		name: "Franzia",
  		desig: "A917 BG",
  		epoch: 2459200.5,
  		ma: 95.94112,
  		w: 120.87283,
  		om: 300.00975,
  		i: 13.88709,
  		e: 0.0823586,
  		a: 2.8035514
  	},
  	{
  		H: 9.18,
  		name: "Benkoela",
  		desig: "A917 CG",
  		epoch: 2459200.5,
  		ma: 326.21725,
  		w: 97.63752,
  		om: 116.92394,
  		i: 25.41678,
  		e: 0.028741,
  		a: 3.201348
  	},
  	{
  		H: 9.57,
  		name: "Fatme",
  		desig: "A917 DG",
  		epoch: 2459200.5,
  		ma: 69.994,
  		w: 263.44488,
  		om: 91.06241,
  		i: 8.66116,
  		e: 0.0524113,
  		a: 3.1247158
  	},
  	{
  		H: 10.35,
  		name: "Lova",
  		desig: "A917 HB",
  		epoch: 2459200.5,
  		ma: 268.94015,
  		w: 286.54652,
  		om: 115.77728,
  		i: 5.83888,
  		e: 0.1475521,
  		a: 2.705989
  	},
  	{
  		H: 10.16,
  		name: "Holda",
  		desig: "A917 KH",
  		epoch: 2459200.5,
  		ma: 356.90975,
  		w: 18.089,
  		om: 194.7191,
  		i: 7.3751,
  		e: 0.0784577,
  		a: 2.7310431
  	},
  	{
  		H: 10.15,
  		name: "Rotraut",
  		desig: "A917 KK",
  		epoch: 2459200.5,
  		ma: 207.13667,
  		w: 9.36464,
  		om: 190.62976,
  		i: 11.13995,
  		e: 0.0798845,
  		a: 3.1521353
  	},
  	{
  		H: 10.89,
  		name: "Walkure",
  		desig: "A915 RV",
  		epoch: 2459200.5,
  		ma: 273.18156,
  		w: 275.66186,
  		om: 116.3735,
  		i: 4.25569,
  		e: 0.159998,
  		a: 2.4878577
  	},
  	{
  		H: 10.75,
  		name: "Swetlana",
  		desig: "A917 PB",
  		epoch: 2459200.5,
  		ma: 187.43195,
  		w: 126.42876,
  		om: 256.29453,
  		i: 6.12603,
  		e: 0.267069,
  		a: 3.123006
  	},
  	{
  		H: 10.75,
  		name: "Ulrike",
  		desig: "A917 SV",
  		epoch: 2459200.5,
  		ma: 354.49304,
  		w: 203.82204,
  		om: 148.88867,
  		i: 3.30742,
  		e: 0.1842525,
  		a: 3.0959231
  	},
  	{
  		H: 9.37,
  		name: "Washingtonia",
  		desig: "A917 WA",
  		epoch: 2459200.5,
  		ma: 136.67086,
  		w: 302.17411,
  		om: 58.87527,
  		i: 16.86376,
  		e: 0.2705833,
  		a: 3.1699218
  	},
  	{
  		H: 9.42,
  		name: "Parysatis",
  		desig: "A918 CE",
  		epoch: 2459200.5,
  		ma: 58.54029,
  		w: 298.09616,
  		om: 123.94435,
  		i: 13.84989,
  		e: 0.1944221,
  		a: 2.7095046
  	},
  	{
  		H: 10.57,
  		name: "Waltraut",
  		desig: "A918 EO",
  		epoch: 2459200.5,
  		ma: 117.14416,
  		w: 87.91509,
  		om: 160.53095,
  		i: 10.8776,
  		e: 0.0602251,
  		a: 3.0201448
  	},
  	{
  		H: 10.04,
  		name: "Gunhild",
  		desig: "A918 KB",
  		epoch: 2459200.5,
  		ma: 273.63114,
  		w: 291.92825,
  		om: 105.85175,
  		i: 13.55429,
  		e: 0.027835,
  		a: 2.8634469
  	},
  	{
  		H: 9.71,
  		name: "Seeligeria",
  		desig: "A918 KC",
  		epoch: 2459200.5,
  		ma: 356.75792,
  		w: 286.22073,
  		om: 175.89375,
  		i: 21.32683,
  		e: 0.1043748,
  		a: 3.2278244
  	},
  	{
  		H: 9.7,
  		name: "Leopoldina",
  		desig: "A918 KD",
  		epoch: 2459200.5,
  		ma: 328.85988,
  		w: 222.40294,
  		om: 144.91605,
  		i: 17.03755,
  		e: 0.1472155,
  		a: 3.0532081
  	},
  	{
  		H: 9.69,
  		name: "Erda",
  		desig: "A918 LA",
  		epoch: 2459200.5,
  		ma: 185.87986,
  		w: 116.41974,
  		om: 190.59871,
  		i: 12.73337,
  		e: 0.1104216,
  		a: 3.119799
  	},
  	{
  		H: 8.44,
  		name: "Helio",
  		desig: "A918 NA",
  		epoch: 2459200.5,
  		ma: 156.828,
  		w: 177.74227,
  		om: 264.68766,
  		i: 26.07879,
  		e: 0.1447492,
  		a: 3.201113
  	},
  	{
  		H: 10.29,
  		name: "Lysistrata",
  		desig: "A918 PF",
  		epoch: 2459200.5,
  		ma: 117.76936,
  		w: 23.79724,
  		om: 257.96717,
  		i: 14.32957,
  		e: 0.0944158,
  		a: 2.5411526
  	},
  	{
  		H: 10.15,
  		name: "Jokaste",
  		desig: "A918 PH",
  		epoch: 2459200.5,
  		ma: 188.36109,
  		w: 127.50564,
  		om: 252.4121,
  		i: 12.46838,
  		e: 0.2012992,
  		a: 2.905377
  	},
  	{
  		H: 10.11,
  		name: "Nealley",
  		desig: "A918 RH",
  		epoch: 2459200.5,
  		ma: 141.29247,
  		w: 234.03429,
  		om: 159.37985,
  		i: 11.78137,
  		e: 0.0453521,
  		a: 3.2387187
  	},
  	{
  		H: 10.45,
  		name: "Rockefellia",
  		desig: "A918 UC",
  		epoch: 2459200.5,
  		ma: 215.72816,
  		w: 252.08049,
  		om: 197.95082,
  		i: 15.14601,
  		e: 0.085883,
  		a: 2.9987689
  	},
  	{
  		H: 9.42,
  		name: "Repsolda",
  		desig: "A918 UF",
  		epoch: 2459200.5,
  		ma: 321.47657,
  		w: 294.12279,
  		om: 40.16876,
  		i: 11.77712,
  		e: 0.0867119,
  		a: 2.8955599
  	},
  	{
  		H: 9.73,
  		name: "Rhoda",
  		desig: "A918 VA",
  		epoch: 2459200.5,
  		ma: 225.55774,
  		w: 88.42669,
  		om: 42.94184,
  		i: 19.52842,
  		e: 0.1628202,
  		a: 2.7994033
  	},
  	{
  		H: 8.79,
  		name: "Ulla",
  		desig: "A919 CA",
  		epoch: 2459200.5,
  		ma: 209.95195,
  		w: 232.60188,
  		om: 146.35469,
  		i: 18.79752,
  		e: 0.090801,
  		a: 3.5417942
  	},
  	{
  		H: 10.54,
  		name: "Anneliese",
  		desig: "A919 EC",
  		epoch: 2459200.5,
  		ma: 20.36842,
  		w: 208.48017,
  		om: 49.92317,
  		i: 9.20641,
  		e: 0.1546194,
  		a: 2.9272859
  	},
  	{
  		H: 9.42,
  		name: "Maritima",
  		desig: "A919 HC",
  		epoch: 2459200.5,
  		ma: 204.84324,
  		w: 90.51396,
  		om: 33.55666,
  		i: 18.27878,
  		e: 0.1775022,
  		a: 3.1355109
  	},
  	{
  		H: 10.66,
  		name: "Itha",
  		desig: "A919 QD",
  		epoch: 2459200.5,
  		ma: 314.32882,
  		w: 15.41282,
  		om: 330.44464,
  		i: 12.07098,
  		e: 0.1900537,
  		a: 2.8653516
  	},
  	{
  		H: 10.04,
  		name: "Jovita",
  		desig: "A919 RD",
  		epoch: 2459200.5,
  		ma: 6.13949,
  		w: 70.89611,
  		om: 204.8857,
  		i: 16.33353,
  		e: 0.1850548,
  		a: 3.171282
  	},
  	{
  		H: 9.46,
  		name: "Toni",
  		desig: "A919 UF",
  		epoch: 2459200.5,
  		ma: 35.0157,
  		w: 220.01183,
  		om: 150.19268,
  		i: 8.98705,
  		e: 0.1530973,
  		a: 2.9387993
  	},
  	{
  		H: 8.42,
  		name: "Alphonsina",
  		desig: "A920 AA",
  		epoch: 2459200.5,
  		ma: 245.9266,
  		w: 201.98781,
  		om: 299.5291,
  		i: 21.10146,
  		e: 0.0805921,
  		a: 2.6991219
  	},
  	{
  		H: 10.57,
  		name: "Imhilde",
  		desig: "A920 CB",
  		epoch: 2459200.5,
  		ma: 135.64057,
  		w: 173.71895,
  		om: 48.96624,
  		i: 16.32584,
  		e: 0.1825804,
  		a: 2.9801594
  	},
  	{
  		H: 9.36,
  		name: "Ratisbona",
  		desig: "A920 DB",
  		epoch: 2459200.5,
  		ma: 121.40722,
  		w: 171.9819,
  		om: 7.52664,
  		i: 14.58491,
  		e: 0.0877216,
  		a: 3.2300377
  	},
  	{
  		H: 10.02,
  		name: "Hildrun",
  		desig: "A920 DC",
  		epoch: 2459200.5,
  		ma: 44.81019,
  		w: 21.85117,
  		om: 129.83447,
  		i: 17.65352,
  		e: 0.1481572,
  		a: 3.1340645
  	},
  	{
  		H: 9.29,
  		name: "Whittemora",
  		desig: "A920 FB",
  		epoch: 2459200.5,
  		ma: 15.51541,
  		w: 315.4443,
  		om: 111.00016,
  		i: 11.48383,
  		e: 0.2328096,
  		a: 3.1699592
  	},
  	{
  		H: 10.08,
  		name: "Hooveria",
  		desig: "A920 FC",
  		epoch: 2459200.5,
  		ma: 23.82073,
  		w: 50.01495,
  		om: 14.95279,
  		i: 8.11323,
  		e: 0.0907799,
  		a: 2.4199209
  	},
  	{
  		H: 10.09,
  		name: "Thuringia",
  		desig: "A920 PA",
  		epoch: 2459200.5,
  		ma: 317.08294,
  		w: 64.18109,
  		om: 325.38103,
  		i: 14.08349,
  		e: 0.2161844,
  		a: 2.7498713
  	},
  	{
  		H: 10.46,
  		name: "Kunigunde",
  		desig: "A920 RB",
  		epoch: 2459200.5,
  		ma: 44.35418,
  		w: 253.47528,
  		om: 62.15562,
  		i: 2.36608,
  		e: 0.1759206,
  		a: 3.1310789
  	},
  	{
  		H: 9.31,
  		name: "Kordula",
  		desig: "A920 TE",
  		epoch: 2459200.5,
  		ma: 73.18795,
  		w: 283.58846,
  		om: 66.31994,
  		i: 6.24201,
  		e: 0.1700129,
  		a: 3.3667782
  	},
  	{
  		H: 9.83,
  		name: "Begonia",
  		desig: "A920 UA",
  		epoch: 2459200.5,
  		ma: 346.44606,
  		w: 4.07893,
  		om: 113.76806,
  		i: 12.1082,
  		e: 0.2134609,
  		a: 3.1173749
  	},
  	{
  		H: 10.69,
  		name: "Hidalgo",
  		desig: "A920 UB",
  		epoch: 2459200.5,
  		ma: 56.18211,
  		w: 56.5964,
  		om: 21.41776,
  		i: 42.53944,
  		e: 0.6605805,
  		a: 5.7338407
  	},
  	{
  		H: 10.09,
  		name: "Barcelona",
  		desig: "A921 CB",
  		epoch: 2459200.5,
  		ma: 124.09548,
  		w: 161.96066,
  		om: 318.28484,
  		i: 32.89265,
  		e: 0.1627142,
  		a: 2.6352767
  	},
  	{
  		H: 10.64,
  		name: "Poesia",
  		desig: "A921 CD",
  		epoch: 2459200.5,
  		ma: 66.00979,
  		w: 37.85468,
  		om: 69.65658,
  		i: 1.43121,
  		e: 0.1432564,
  		a: 3.1171161
  	},
  	{
  		H: 9.94,
  		name: "Monterosa",
  		desig: "A921 CC",
  		epoch: 2459200.5,
  		ma: 45.24478,
  		w: 339.20307,
  		om: 48.28027,
  		i: 6.69539,
  		e: 0.2469979,
  		a: 2.753843
  	},
  	{
  		H: 9.88,
  		name: "Hel",
  		desig: "A921 EM",
  		epoch: 2459200.5,
  		ma: 36.08711,
  		w: 249.6009,
  		om: 321.16508,
  		i: 10.70152,
  		e: 0.1924097,
  		a: 3.0035266
  	},
  	{
  		H: 9.4,
  		name: "Caia",
  		desig: "A916 US",
  		epoch: 2459200.5,
  		ma: 66.09645,
  		w: 356.53205,
  		om: 18.41211,
  		i: 9.99009,
  		e: 0.2437832,
  		a: 2.9921244
  	},
  	{
  		H: 10.08,
  		name: "Painleva",
  		desig: "A921 HB",
  		epoch: 2459200.5,
  		ma: 86.20637,
  		w: 259.59783,
  		om: 36.4007,
  		i: 8.66138,
  		e: 0.1901168,
  		a: 2.7859892
  	},
  	{
  		H: 10.19,
  		name: "Li",
  		desig: "A921 PC",
  		epoch: 2459200.5,
  		ma: 319.46085,
  		w: 151.33425,
  		om: 163.23507,
  		i: 1.16966,
  		e: 0.1737569,
  		a: 3.1292438
  	},
  	{
  		H: 10.8,
  		name: "Alstede",
  		desig: "A921 PD",
  		epoch: 2459200.5,
  		ma: 311.00352,
  		w: 282.65288,
  		om: 351.44395,
  		i: 10.68933,
  		e: 0.2875917,
  		a: 2.5956225
  	},
  	{
  		H: 9.92,
  		name: "Camelia",
  		desig: "A921 RF",
  		epoch: 2459200.5,
  		ma: 237.93266,
  		w: 225.28306,
  		om: 232.68928,
  		i: 14.75558,
  		e: 0.0810048,
  		a: 2.9215299
  	},
  	{
  		H: 10.8,
  		name: "Arne",
  		desig: "A921 SE",
  		epoch: 2459200.5,
  		ma: 121.7484,
  		w: 333.54381,
  		om: 58.51214,
  		i: 4.49685,
  		e: 0.2213853,
  		a: 3.1777418
  	},
  	{
  		H: 10.8,
  		name: "Subamara",
  		desig: "A921 UL",
  		epoch: 2459200.5,
  		ma: 206.3085,
  		w: 9.56372,
  		om: 30.68105,
  		i: 9.05062,
  		e: 0.1202211,
  		a: 3.0478961
  	},
  	{
  		H: 10.27,
  		name: "Angelica",
  		desig: "A921 VB",
  		epoch: 2459200.5,
  		ma: 197.75312,
  		w: 47.05017,
  		om: 41.37341,
  		i: 21.4085,
  		e: 0.2800594,
  		a: 3.1595606
  	},
  	{
  		H: 9.97,
  		name: "Muschi",
  		desig: "A921 VD",
  		epoch: 2459200.5,
  		ma: 207.92078,
  		w: 177.99019,
  		om: 72.4147,
  		i: 14.41325,
  		e: 0.1307964,
  		a: 2.7188192
  	},
  	{
  		H: 10.23,
  		name: "Petunia",
  		desig: "A921 WJ",
  		epoch: 2459200.5,
  		ma: 56.48913,
  		w: 297.49567,
  		om: 208.84085,
  		i: 11.59851,
  		e: 0.1364703,
  		a: 2.865059
  	},
  	{
  		H: 10.15,
  		name: "Alsatia",
  		desig: "A921 WH",
  		epoch: 2459200.5,
  		ma: 1.87099,
  		w: 6.53498,
  		om: 83.496,
  		i: 13.79167,
  		e: 0.1627546,
  		a: 2.6404418
  	},
  	{
  		H: 9.64,
  		name: "Cohnia",
  		desig: "A922 BD",
  		epoch: 2459200.5,
  		ma: 229.62442,
  		w: 93.58501,
  		om: 281.52155,
  		i: 8.37231,
  		e: 0.2356336,
  		a: 3.0549008
  	},
  	{
  		H: 10.13,
  		name: "Aralia",
  		desig: "A922 FB",
  		epoch: 2459200.5,
  		ma: 97.9932,
  		w: 87.73843,
  		om: 348.43869,
  		i: 15.83015,
  		e: 0.1120591,
  		a: 3.2112194
  	},
  	{
  		H: 10.46,
  		name: "Lioba",
  		desig: "A922 FC",
  		epoch: 2459200.5,
  		ma: 297.18781,
  		w: 301.7727,
  		om: 86.66602,
  		i: 5.45384,
  		e: 0.1102939,
  		a: 2.5349439
  	},
  	{
  		H: 10.5,
  		name: "Perseverantia",
  		desig: "A922 FE",
  		epoch: 2459200.5,
  		ma: 333.48186,
  		w: 58.97378,
  		om: 38.67711,
  		i: 2.55535,
  		e: 0.033311,
  		a: 2.83353
  	},
  	{
  		H: 9.39,
  		name: "Benjamina",
  		desig: "A922 FD",
  		epoch: 2459200.5,
  		ma: 77.6089,
  		w: 320.14489,
  		om: 243.71479,
  		i: 7.70369,
  		e: 0.1027802,
  		a: 3.2047297
  	},
  	{
  		H: 9.93,
  		name: "Philippa",
  		desig: "A922 GA",
  		epoch: 2459200.5,
  		ma: 31.36042,
  		w: 72.4368,
  		om: 75.73248,
  		i: 15.17372,
  		e: 0.0258558,
  		a: 3.1171158
  	},
  	{
  		H: 9.63,
  		name: "Aidamina",
  		desig: "A922 KE",
  		epoch: 2459200.5,
  		ma: 0.76192,
  		w: 132.50085,
  		om: 216.5399,
  		i: 21.60767,
  		e: 0.2316418,
  		a: 3.2025788
  	},
  	{
  		H: 9.77,
  		name: "Ilsewa",
  		desig: "A922 MA",
  		epoch: 2459200.5,
  		ma: 158.54555,
  		w: 115.44525,
  		om: 230.60418,
  		i: 10.10989,
  		e: 0.1380458,
  		a: 3.1583392
  	},
  	{
  		H: 7.92,
  		name: "Anacostia",
  		desig: "A921 WG",
  		epoch: 2459200.5,
  		ma: 305.74407,
  		w: 69.73593,
  		om: 285.81271,
  		i: 15.9069,
  		e: 0.203174,
  		a: 2.7406512
  	},
  	{
  		H: 10.95,
  		name: "Martina",
  		desig: "A917 SW",
  		epoch: 2459200.5,
  		ma: 345.76098,
  		w: 297.82632,
  		om: 46.00928,
  		i: 2.06252,
  		e: 0.2028259,
  		a: 3.0979001
  	},
  	{
  		H: 10.03,
  		name: "Franklina",
  		desig: "A922 KF",
  		epoch: 2459200.5,
  		ma: 72.15755,
  		w: 350.81819,
  		om: 299.152,
  		i: 13.65669,
  		e: 0.234345,
  		a: 3.0658345
  	},
  	{
  		H: 9.43,
  		name: "Gunila",
  		desig: "A922 OD",
  		epoch: 2459200.5,
  		ma: 244.44401,
  		w: 348.41768,
  		om: 250.69126,
  		i: 14.86553,
  		e: 0.0916674,
  		a: 3.1613444
  	},
  	{
  		H: 9.55,
  		name: "Gretia",
  		desig: "A922 QD",
  		epoch: 2459200.5,
  		ma: 317.8112,
  		w: 54.99702,
  		om: 314.16451,
  		i: 9.09715,
  		e: 0.1963047,
  		a: 2.8057411
  	},
  	{
  		H: 9.44,
  		name: "Amelia",
  		desig: "A922 UA",
  		epoch: 2459200.5,
  		ma: 246.38357,
  		w: 265.52603,
  		om: 92.59832,
  		i: 14.81485,
  		e: 0.2031551,
  		a: 3.1313564
  	},
  	{
  		H: 9.57,
  		name: "Wallia",
  		desig: "A922 UB",
  		epoch: 2459200.5,
  		ma: 245.67137,
  		w: 16.19093,
  		om: 322.65894,
  		i: 8.91301,
  		e: 0.2366967,
  		a: 3.1377315
  	},
  	{
  		H: 10.61,
  		name: "Swasey",
  		desig: "A922 VD",
  		epoch: 2459200.5,
  		ma: 71.2698,
  		w: 346.43195,
  		om: 212.20986,
  		i: 10.83961,
  		e: 0.0851979,
  		a: 3.0298626
  	},
  	{
  		H: 10.2,
  		name: "Otthild",
  		desig: "A923 FB",
  		epoch: 2459200.5,
  		ma: 303.49357,
  		w: 342.28054,
  		om: 2.33555,
  		i: 15.41105,
  		e: 0.1166421,
  		a: 2.5297888
  	},
  	{
  		H: 10.21,
  		name: "Sternberga",
  		desig: "A923 LC",
  		epoch: 2459200.5,
  		ma: 319.38568,
  		w: 122.08751,
  		om: 221.72093,
  		i: 13.05015,
  		e: 0.1689558,
  		a: 2.6157544
  	},
  	{
  		H: 10.94,
  		name: "Zachia",
  		desig: "A923 PE",
  		epoch: 2459200.5,
  		ma: 6.07819,
  		w: 127.68729,
  		om: 214.92256,
  		i: 9.75577,
  		e: 0.2166677,
  		a: 2.611845
  	},
  	{
  		H: 10.7,
  		name: "Piazzia",
  		desig: "A923 PF",
  		epoch: 2459200.5,
  		ma: 92.88911,
  		w: 280.66063,
  		om: 323.7062,
  		i: 20.5883,
  		e: 0.2585539,
  		a: 3.1686467
  	},
  	{
  		H: 9.76,
  		name: "Gaussia",
  		desig: "A923 PD",
  		epoch: 2459200.5,
  		ma: 323.05791,
  		w: 145.53861,
  		om: 259.13288,
  		i: 9.3174,
  		e: 0.1219929,
  		a: 3.2090334
  	},
  	{
  		H: 10.99,
  		name: "Olbersia",
  		desig: "A923 PJ",
  		epoch: 2459200.5,
  		ma: 319.38057,
  		w: 355.11114,
  		om: 343.72011,
  		i: 10.7703,
  		e: 0.1550633,
  		a: 2.78751
  	},
  	{
  		H: 10.82,
  		name: "Lilofee",
  		desig: "A923 RV",
  		epoch: 2459200.5,
  		ma: 64.13334,
  		w: 317.06514,
  		om: 139.43736,
  		i: 1.84029,
  		e: 0.1597622,
  		a: 3.1406726
  	},
  	{
  		H: 9.85,
  		name: "Belopolskya",
  		desig: "A923 RR",
  		epoch: 2459200.5,
  		ma: 182.83799,
  		w: 214.68691,
  		om: 153.52096,
  		i: 2.97967,
  		e: 0.0884054,
  		a: 3.4008157
  	},
  	{
  		H: 10,
  		name: "Arago",
  		desig: "A923 RS",
  		epoch: 2459200.5,
  		ma: 56.36869,
  		w: 60.6706,
  		om: 349.14404,
  		i: 19.05878,
  		e: 0.1186574,
  		a: 3.1670908
  	},
  	{
  		H: 10.68,
  		name: "La Paz",
  		desig: "A923 UD",
  		epoch: 2459200.5,
  		ma: 288.67531,
  		w: 14.56368,
  		om: 20.268,
  		i: 8.92198,
  		e: 0.0745913,
  		a: 3.0975937
  	},
  	{
  		H: 10.72,
  		name: "Marlene",
  		desig: "A923 VH",
  		epoch: 2459200.5,
  		ma: 141.69317,
  		w: 279.62985,
  		om: 98.74,
  		i: 3.90694,
  		e: 0.1041078,
  		a: 2.9311878
  	},
  	{
  		H: 10.25,
  		name: "Tombecka",
  		desig: "A924 BL",
  		epoch: 2459200.5,
  		ma: 4.45437,
  		w: 99.72457,
  		om: 27.23334,
  		i: 11.89824,
  		e: 0.2092547,
  		a: 2.6837932
  	},
  	{
  		H: 9.18,
  		name: "Christa",
  		desig: "A924 CF",
  		epoch: 2459200.5,
  		ma: 43.8339,
  		w: 286.61058,
  		om: 120.14592,
  		i: 9.44629,
  		e: 0.0880998,
  		a: 3.2068219
  	},
  	{
  		H: 9.12,
  		name: "Flammario",
  		desig: "A924 EW",
  		epoch: 2459200.5,
  		ma: 228.79291,
  		w: 286.81097,
  		om: 115.43817,
  		i: 15.87089,
  		e: 0.2852588,
  		a: 2.7365204
  	},
  	{
  		H: 10.28,
  		name: "Olympiada",
  		desig: "A924 MB",
  		epoch: 2459200.5,
  		ma: 220.29629,
  		w: 124.77397,
  		om: 111.95934,
  		i: 21.0569,
  		e: 0.1740261,
  		a: 2.805777
  	},
  	{
  		H: 10.03,
  		name: "Thomana",
  		desig: "A924 MC",
  		epoch: 2459200.5,
  		ma: 315.5687,
  		w: 195.1954,
  		om: 193.92614,
  		i: 10.05858,
  		e: 0.0969005,
  		a: 3.1710717
  	},
  	{
  		H: 10.86,
  		name: "Hale",
  		desig: "A923 XC",
  		epoch: 2459200.5,
  		ma: 16.51629,
  		w: 307.8944,
  		om: 58.8167,
  		i: 16.06839,
  		e: 0.2214185,
  		a: 2.8681491
  	},
  	{
  		H: 10.93,
  		name: "Aesculapia",
  		desig: "A923 VG",
  		epoch: 2459200.5,
  		ma: 8.16037,
  		w: 132.04708,
  		om: 29.34191,
  		i: 1.25297,
  		e: 0.129169,
  		a: 3.1533719
  	},
  	{
  		H: 9.38,
  		name: "Lydina",
  		desig: "A923 VF",
  		epoch: 2459200.5,
  		ma: 143.9527,
  		w: 24.32763,
  		om: 62.82655,
  		i: 9.39451,
  		e: 0.1056362,
  		a: 3.4043121
  	},
  	{
  		H: 10.92,
  		name: "La Plata",
  		desig: "A924 HB",
  		epoch: 2459200.5,
  		ma: 290.24478,
  		w: 140.74872,
  		om: 29.88686,
  		i: 2.42452,
  		e: 0.0278356,
  		a: 2.8905282
  	},
  	{
  		H: 10.37,
  		name: "Vitja",
  		desig: "A924 KD",
  		epoch: 2459200.5,
  		ma: 218.58974,
  		w: 5.65497,
  		om: 187.82138,
  		i: 14.77717,
  		e: 0.1229175,
  		a: 3.118918
  	},
  	{
  		H: 9.57,
  		name: "Arctica",
  		desig: "A924 LC",
  		epoch: 2459200.5,
  		ma: 139.53463,
  		w: 309.60256,
  		om: 218.75843,
  		i: 17.60797,
  		e: 0.0572111,
  		a: 3.0517658
  	},
  	{
  		H: 10.12,
  		name: "Pafuri",
  		desig: "A924 KE",
  		epoch: 2459200.5,
  		ma: 135.70352,
  		w: 188.98602,
  		om: 76.31639,
  		i: 9.48347,
  		e: 0.1422417,
  		a: 3.1280137
  	},
  	{
  		H: 10.36,
  		name: "Amata",
  		desig: "A924 SF",
  		epoch: 2459200.5,
  		ma: 128.11763,
  		w: 324.7878,
  		om: 1.87663,
  		i: 18.00208,
  		e: 0.1897666,
  		a: 3.1531162
  	},
  	{
  		H: 10.5,
  		name: "Klumpkea",
  		desig: "1925 BD",
  		epoch: 2459200.5,
  		ma: 183.83935,
  		w: 157.88105,
  		om: 280.17334,
  		i: 16.68804,
  		e: 0.1911906,
  		a: 3.1132101
  	},
  	{
  		H: 10.18,
  		name: "Asta",
  		desig: "1925 FA",
  		epoch: 2459200.5,
  		ma: 63.05404,
  		w: 344.14793,
  		om: 59.99916,
  		i: 13.93327,
  		e: 0.1446306,
  		a: 3.0731859
  	},
  	{
  		H: 9.97,
  		name: "Amazone",
  		desig: "1925 HA",
  		epoch: 2459200.5,
  		ma: 62.3006,
  		w: 298.2016,
  		om: 52.41766,
  		i: 20.71117,
  		e: 0.0877458,
  		a: 3.2346512
  	},
  	{
  		H: 9.67,
  		name: "Beate",
  		desig: "1925 HB",
  		epoch: 2459200.5,
  		ma: 109.97264,
  		w: 157.19498,
  		om: 159.18403,
  		i: 8.92166,
  		e: 0.0386098,
  		a: 3.0931231
  	},
  	{
  		H: 10.87,
  		name: "Teutonia",
  		desig: "A924 JD",
  		epoch: 2459200.5,
  		ma: 73.89731,
  		w: 228.05347,
  		om: 59.93963,
  		i: 4.24967,
  		e: 0.1443426,
  		a: 2.5749552
  	},
  	{
  		H: 10.74,
  		name: "Edwin",
  		desig: "A924 XF",
  		epoch: 2459200.5,
  		ma: 245.52154,
  		w: 47.53183,
  		om: 10.59513,
  		i: 7.89458,
  		e: 0.0624084,
  		a: 2.9887592
  	},
  	{
  		H: 9.74,
  		name: "Feodosia",
  		desig: "A924 WQ",
  		epoch: 2459200.5,
  		ma: 297.71078,
  		w: 183.536,
  		om: 52.75247,
  		i: 15.80532,
  		e: 0.1802748,
  		a: 2.7326455
  	},
  	{
  		H: 10.49,
  		name: "Gotho",
  		desig: "1925 RB",
  		epoch: 2459200.5,
  		ma: 152.55295,
  		w: 41.01132,
  		om: 342.83998,
  		i: 15.11156,
  		e: 0.1366926,
  		a: 3.0930646
  	},
  	{
  		H: 10.15,
  		name: "Merope",
  		desig: "1925 SA",
  		epoch: 2459200.5,
  		ma: 196.27544,
  		w: 153.11431,
  		om: 180.69069,
  		i: 23.50944,
  		e: 0.1001723,
  		a: 3.214148
  	},
  	{
  		H: 10.48,
  		name: "Forsytia",
  		desig: "1925 WD",
  		epoch: 2459200.5,
  		ma: 40.11878,
  		w: 295.58515,
  		om: 85.77458,
  		i: 10.87129,
  		e: 0.1340057,
  		a: 2.9222475
  	},
  	{
  		H: 10.96,
  		name: "Mussorgskia",
  		desig: "1925 OA",
  		epoch: 2459200.5,
  		ma: 86.57572,
  		w: 87.84769,
  		om: 200.33601,
  		i: 10.09461,
  		e: 0.1880794,
  		a: 2.6406941
  	},
  	{
  		H: 9.84,
  		name: "Ljuba",
  		desig: "1925 TD",
  		epoch: 2459200.5,
  		ma: 48.51871,
  		w: 100.86147,
  		om: 341.37953,
  		i: 5.59544,
  		e: 0.0702448,
  		a: 3.0065833
  	},
  	{
  		H: 10.69,
  		name: "Aethusa",
  		desig: "1926 PA",
  		epoch: 2459200.5,
  		ma: 97.55192,
  		w: 20.27993,
  		om: 280.55956,
  		i: 9.50473,
  		e: 0.1769103,
  		a: 2.542697
  	},
  	{
  		H: 10.79,
  		name: "Lunaria",
  		desig: "1926 RG",
  		epoch: 2459200.5,
  		ma: 106.14,
  		w: 114.97978,
  		om: 289.57793,
  		i: 10.54977,
  		e: 0.1923713,
  		a: 2.8707203
  	},
  	{
  		H: 10.75,
  		name: "Nofretete",
  		desig: "1926 RK",
  		epoch: 2459200.5,
  		ma: 129.79582,
  		w: 266.50547,
  		om: 318.60166,
  		i: 5.49062,
  		e: 0.0975911,
  		a: 2.9058278
  	},
  	{
  		H: 9.43,
  		name: "Planckia",
  		desig: "1927 BC",
  		epoch: 2459200.5,
  		ma: 290.67282,
  		w: 31.44998,
  		om: 142.36454,
  		i: 13.56079,
  		e: 0.1096858,
  		a: 3.1287441
  	},
  	{
  		H: 10.8,
  		name: "Tunica",
  		desig: "1926 RB",
  		epoch: 2459200.5,
  		ma: 102.39024,
  		w: 190.55927,
  		om: 165.28677,
  		i: 16.96114,
  		e: 0.0798938,
  		a: 3.2333047
  	},
  	{
  		H: 10.4,
  		name: "Brita",
  		desig: "A924 ER",
  		epoch: 2459200.5,
  		ma: 310.29121,
  		w: 29.15072,
  		om: 52.48539,
  		i: 5.36136,
  		e: 0.1101292,
  		a: 2.799832
  	},
  	{
  		H: 10.87,
  		name: "Malva",
  		desig: "1926 TA",
  		epoch: 2459200.5,
  		ma: 205.62725,
  		w: 25.85314,
  		om: 37.06179,
  		i: 8.01906,
  		e: 0.2401216,
  		a: 3.1652752
  	},
  	{
  		H: 10.27,
  		name: "Beljawskya",
  		desig: "1925 BE",
  		epoch: 2459200.5,
  		ma: 83.01966,
  		w: 22.64173,
  		om: 38.11658,
  		i: 0.80025,
  		e: 0.1796464,
  		a: 3.1514509
  	},
  	{
  		H: 10.39,
  		name: "Helina",
  		desig: "1926 SC",
  		epoch: 2459200.5,
  		ma: 22.69716,
  		w: 250.4475,
  		om: 100.72738,
  		i: 11.53459,
  		e: 0.1096676,
  		a: 3.0126277
  	},
  	{
  		H: 10.48,
  		name: "Pirola",
  		desig: "1927 UC",
  		epoch: 2459200.5,
  		ma: 345.94215,
  		w: 186.54584,
  		om: 147.93462,
  		i: 1.8539,
  		e: 0.181068,
  		a: 3.1247912
  	},
  	{
  		H: 10.85,
  		name: "Tamariwa",
  		desig: "1926 CC",
  		epoch: 2459200.5,
  		ma: 31.19162,
  		w: 109.47508,
  		om: 186.8069,
  		i: 3.89606,
  		e: 0.1330158,
  		a: 2.6883606
  	},
  	{
  		H: 9.85,
  		name: "Amaryllis",
  		desig: "1927 QH",
  		epoch: 2459200.5,
  		ma: 246.86734,
  		w: 128.93038,
  		om: 139.95983,
  		i: 6.63975,
  		e: 0.0420104,
  		a: 3.1860825
  	},
  	{
  		H: 9.59,
  		name: "Nata",
  		desig: "1927 QL",
  		epoch: 2459200.5,
  		ma: 87.49975,
  		w: 157.9177,
  		om: 313.21837,
  		i: 8.35983,
  		e: 0.0537652,
  		a: 3.161499
  	},
  	{
  		H: 9.86,
  		name: "Arabis",
  		desig: "1927 RD",
  		epoch: 2459200.5,
  		ma: 239.6063,
  		w: 25.27728,
  		om: 30.34186,
  		i: 10.04935,
  		e: 0.0921138,
  		a: 3.0181127
  	},
  	{
  		H: 10.9,
  		name: "Spiraea",
  		desig: "1928 DT",
  		epoch: 2459200.5,
  		ma: 296.77698,
  		w: 12.56101,
  		om: 80.82493,
  		i: 1.15235,
  		e: 0.0695887,
  		a: 3.4140062
  	},
  	{
  		H: 10.94,
  		name: "Lilium",
  		desig: "A924 AE",
  		epoch: 2459200.5,
  		ma: 81.35687,
  		w: 315.21172,
  		om: 307.43594,
  		i: 5.39376,
  		e: 0.0850512,
  		a: 2.8992047
  	},
  	{
  		H: 9.04,
  		name: "Freda",
  		desig: "1925 LA",
  		epoch: 2459200.5,
  		ma: 29.60242,
  		w: 251.16994,
  		om: 55.6107,
  		i: 25.2017,
  		e: 0.2712935,
  		a: 3.1301986
  	},
  	{
  		H: 10.46,
  		name: "Tulipa",
  		desig: "1926 GS",
  		epoch: 2459200.5,
  		ma: 46.55112,
  		w: 342.65931,
  		om: 178.51656,
  		i: 10.03059,
  		e: 0.0210793,
  		a: 3.0237695
  	},
  	{
  		H: 10.77,
  		name: "Reunerta",
  		desig: "1928 OB",
  		epoch: 2459200.5,
  		ma: 347.41333,
  		w: 247.68945,
  		om: 81.34311,
  		i: 9.46921,
  		e: 0.1945291,
  		a: 2.6014772
  	},
  	{
  		H: 10.52,
  		name: "Hakone",
  		desig: "1928 RJ",
  		epoch: 2459200.5,
  		ma: 281.9901,
  		w: 80.83436,
  		om: 328.89857,
  		i: 13.39073,
  		e: 0.1166197,
  		a: 2.6904761
  	},
  	{
  		H: 10.28,
  		name: "Figneria",
  		desig: "1928 RQ",
  		epoch: 2459200.5,
  		ma: 109.00667,
  		w: 347.9526,
  		om: 22.21205,
  		i: 11.83638,
  		e: 0.2783503,
  		a: 3.17928
  	},
  	{
  		H: 10.98,
  		name: "Arnica",
  		desig: "1928 SD",
  		epoch: 2459200.5,
  		ma: 287.10292,
  		w: 24.06035,
  		om: 304.09631,
  		i: 1.03474,
  		e: 0.0698394,
  		a: 2.8971023
  	},
  	{
  		H: 10.64,
  		name: "Clematis",
  		desig: "1928 SJ",
  		epoch: 2459200.5,
  		ma: 355.95343,
  		w: 106.49803,
  		om: 201.88825,
  		i: 21.41033,
  		e: 0.0795609,
  		a: 3.2339929
  	},
  	{
  		H: 9.4,
  		name: "Pepita",
  		desig: "1928 VA",
  		epoch: 2459200.5,
  		ma: 126.92178,
  		w: 117.37114,
  		om: 216.57457,
  		i: 15.8237,
  		e: 0.110808,
  		a: 3.070326
  	},
  	{
  		H: 10.24,
  		name: "Fragaria",
  		desig: "1929 AB",
  		epoch: 2459200.5,
  		ma: 299.97935,
  		w: 224.47983,
  		om: 116.90722,
  		i: 10.96986,
  		e: 0.1065287,
  		a: 3.0106356
  	},
  	{
  		H: 9.55,
  		name: "Lictoria",
  		desig: "1929 FB",
  		epoch: 2459200.5,
  		ma: 126.22698,
  		w: 351.08614,
  		om: 110.8392,
  		i: 7.07467,
  		e: 0.1237624,
  		a: 3.1823041
  	},
  	{
  		H: 10.04,
  		name: "Tata",
  		desig: "1929 CU",
  		epoch: 2459200.5,
  		ma: 266.43284,
  		w: 359.88654,
  		om: 268.0681,
  		i: 4.1203,
  		e: 0.0986046,
  		a: 3.2260305
  	},
  	{
  		H: 10.65,
  		name: "Reinmuthia",
  		desig: "1927 CO",
  		epoch: 2459200.5,
  		ma: 197.76557,
  		w: 235.90254,
  		om: 132.43109,
  		i: 3.89251,
  		e: 0.1017644,
  		a: 2.9917084
  	},
  	{
  		H: 10.02,
  		name: "Polonia",
  		desig: "1928 PE",
  		epoch: 2459200.5,
  		ma: 154.798,
  		w: 87.06748,
  		om: 302.84842,
  		i: 8.99252,
  		e: 0.1076455,
  		a: 3.0186925
  	},
  	{
  		H: 9.35,
  		name: "Katja",
  		desig: "1928 QC",
  		epoch: 2459200.5,
  		ma: 197.57093,
  		w: 119.21072,
  		om: 324.48806,
  		i: 13.28503,
  		e: 0.1400059,
  		a: 3.1143053
  	},
  	{
  		H: 10.06,
  		name: "Lorraine",
  		desig: "1928 WA",
  		epoch: 2459200.5,
  		ma: 351.99632,
  		w: 207.33836,
  		om: 195.33202,
  		i: 10.72042,
  		e: 0.0712353,
  		a: 3.0929413
  	},
  	{
  		H: 9.74,
  		name: "Sabauda",
  		desig: "1928 XC",
  		epoch: 2459200.5,
  		ma: 275.6527,
  		w: 56.77746,
  		om: 71.64817,
  		i: 15.28677,
  		e: 0.1733685,
  		a: 3.0974503
  	},
  	{
  		H: 9.84,
  		name: "Catriona",
  		desig: "1929 GD",
  		epoch: 2459200.5,
  		ma: 224.75091,
  		w: 82.91781,
  		om: 356.332,
  		i: 16.51574,
  		e: 0.2266819,
  		a: 2.9289327
  	},
  	{
  		H: 9.88,
  		name: "Hanskya",
  		desig: "1927 QD",
  		epoch: 2459200.5,
  		ma: 150.38297,
  		w: 336.71418,
  		om: 318.71417,
  		i: 13.95466,
  		e: 0.0438587,
  		a: 3.2127308
  	},
  	{
  		H: 10.82,
  		name: "Stroobantia",
  		desig: "1928 TB",
  		epoch: 2459200.5,
  		ma: 223.28374,
  		w: 266.62202,
  		om: 22.2253,
  		i: 7.79126,
  		e: 0.0302293,
  		a: 2.9276841
  	},
  	{
  		H: 10.66,
  		name: "Mimi",
  		desig: "1929 AJ",
  		epoch: 2459200.5,
  		ma: 44.43851,
  		w: 282.73155,
  		om: 128.35029,
  		i: 14.76725,
  		e: 0.2648609,
  		a: 2.5944756
  	},
  	{
  		H: 10.91,
  		name: "Astrid",
  		desig: "1929 EB",
  		epoch: 2459200.5,
  		ma: 142.59183,
  		w: 234.12402,
  		om: 59.43168,
  		i: 1.01252,
  		e: 0.0447642,
  		a: 2.7873815
  	},
  	{
  		H: 10.26,
  		name: "Neujmina",
  		desig: "1929 PH",
  		epoch: 2459200.5,
  		ma: 70.11402,
  		w: 139.72412,
  		om: 269.21639,
  		i: 8.61884,
  		e: 0.0834726,
  		a: 3.0231458
  	},
  	{
  		H: 10.62,
  		name: "Colchis",
  		desig: "1929 TA",
  		epoch: 2459200.5,
  		ma: 0.16219,
  		w: 3.18801,
  		om: 350.61887,
  		i: 4.54179,
  		e: 0.1145116,
  		a: 2.6654232
  	},
  	{
  		H: 10.64,
  		name: "Raissa",
  		desig: "1929 WB",
  		epoch: 2459200.5,
  		ma: 85.83144,
  		w: 277.29371,
  		om: 78.44489,
  		i: 4.316,
  		e: 0.0964297,
  		a: 2.4241373
  	},
  	{
  		H: 9.79,
  		name: "Crimea",
  		desig: "1929 YC",
  		epoch: 2459200.5,
  		ma: 320.73547,
  		w: 309.87483,
  		om: 72.09462,
  		i: 14.11733,
  		e: 0.1106141,
  		a: 2.7729871
  	},
  	{
  		H: 10.3,
  		name: "Aetolia",
  		desig: "1930 BC",
  		epoch: 2459200.5,
  		ma: 297.5325,
  		w: 97.15406,
  		om: 139.32229,
  		i: 2.11,
  		e: 0.0805405,
  		a: 3.1848663
  	},
  	{
  		H: 9.88,
  		name: "Biarmia",
  		desig: "1929 JF",
  		epoch: 2459200.5,
  		ma: 47.23659,
  		w: 63.69262,
  		om: 213.8431,
  		i: 17.06365,
  		e: 0.255796,
  		a: 3.0438901
  	},
  	{
  		H: 10.24,
  		name: "Rarahu",
  		desig: "1929 NA",
  		epoch: 2459200.5,
  		ma: 143.15018,
  		w: 175.60876,
  		om: 145.37137,
  		i: 10.82864,
  		e: 0.1085042,
  		a: 3.0185569
  	},
  	{
  		H: 10.49,
  		name: "Volga",
  		desig: "1929 PF",
  		epoch: 2459200.5,
  		ma: 138.33131,
  		w: 116.3582,
  		om: 261.42884,
  		i: 11.74899,
  		e: 0.0958188,
  		a: 2.8988575
  	},
  	{
  		H: 10.48,
  		name: "Astronomia",
  		desig: "1927 CB",
  		epoch: 2459200.5,
  		ma: 210.81883,
  		w: 204.69037,
  		om: 82.50148,
  		i: 4.53155,
  		e: 0.0709899,
  		a: 3.3936527
  	},
  	{
  		H: 10.02,
  		name: "Arabia",
  		desig: "1929 QC",
  		epoch: 2459200.5,
  		ma: 45.13127,
  		w: 312.53517,
  		om: 336.07748,
  		i: 9.55285,
  		e: 0.1445672,
  		a: 3.1823826
  	},
  	{
  		H: 10.88,
  		name: "Luda",
  		desig: "1929 QF",
  		epoch: 2459200.5,
  		ma: 31.07941,
  		w: 57.27858,
  		om: 344.59009,
  		i: 14.82419,
  		e: 0.1123669,
  		a: 2.5642902
  	},
  	{
  		H: 10.74,
  		name: "Saga",
  		desig: "1930 BA",
  		epoch: 2459200.5,
  		ma: 79.78727,
  		w: 200.0439,
  		om: 127.51496,
  		i: 9.02438,
  		e: 0.0426718,
  		a: 3.217181
  	},
  	{
  		H: 10.73,
  		name: "Imprinetta",
  		desig: "1930 HM",
  		epoch: 2459200.5,
  		ma: 76.31836,
  		w: 96.56355,
  		om: 203.7376,
  		i: 12.79986,
  		e: 0.2117692,
  		a: 3.1256582
  	},
  	{
  		H: 10.46,
  		name: "Sakuntala",
  		desig: "1930 MA",
  		epoch: 2459200.5,
  		ma: 110.55401,
  		w: 189.78075,
  		om: 106.67704,
  		i: 18.92798,
  		e: 0.208977,
  		a: 2.53522
  	},
  	{
  		H: 9.8,
  		name: "Dubiago",
  		desig: "1930 PB",
  		epoch: 2459200.5,
  		ma: 140.57121,
  		w: 72.45994,
  		om: 223.39046,
  		i: 5.74621,
  		e: 0.0687925,
  		a: 3.4148749
  	},
  	{
  		H: 9.88,
  		name: "Rusthawelia",
  		desig: "1930 TA",
  		epoch: 2459200.5,
  		ma: 347.99735,
  		w: 292.24313,
  		om: 121.51178,
  		i: 3.08578,
  		e: 0.1940562,
  		a: 3.1733431
  	},
  	{
  		H: 10.03,
  		name: "Margo",
  		desig: "1930 UD",
  		epoch: 2459200.5,
  		ma: 266.88283,
  		w: 102.39704,
  		om: 237.17993,
  		i: 16.30947,
  		e: 0.0688891,
  		a: 3.2132265
  	},
  	{
  		H: 9.43,
  		name: "Gonnessia",
  		desig: "1930 WA",
  		epoch: 2459200.5,
  		ma: 168.32555,
  		w: 250.66781,
  		om: 252.00329,
  		i: 15.01192,
  		e: 0.031531,
  		a: 3.3578032
  	},
  	{
  		H: 9.88,
  		name: "Turnera",
  		desig: "1929 PL",
  		epoch: 2459200.5,
  		ma: 116.21116,
  		w: 296.07723,
  		om: 42.97692,
  		i: 10.74813,
  		e: 0.1010912,
  		a: 3.0229466
  	},
  	{
  		H: 10.01,
  		name: "Terentia",
  		desig: "1930 SG",
  		epoch: 2459200.5,
  		ma: 339.47948,
  		w: 95.24843,
  		om: 275.19554,
  		i: 9.86666,
  		e: 0.112173,
  		a: 2.9317843
  	},
  	{
  		H: 10.83,
  		name: "Alfaterna",
  		desig: "1931 CA",
  		epoch: 2459200.5,
  		ma: 57.65499,
  		w: 54.24568,
  		om: 134.70786,
  		i: 18.49485,
  		e: 0.0464449,
  		a: 2.8914627
  	},
  	{
  		H: 10.71,
  		name: "Aletta",
  		desig: "1931 JG",
  		epoch: 2459200.5,
  		ma: 55.8891,
  		w: 243.47768,
  		om: 291.2933,
  		i: 10.87043,
  		e: 0.0909895,
  		a: 2.9125743
  	},
  	{
  		H: 10.25,
  		name: "Sheba",
  		desig: "1931 KE",
  		epoch: 2459200.5,
  		ma: 157.24153,
  		w: 262.62745,
  		om: 100.75521,
  		i: 17.66653,
  		e: 0.1796459,
  		a: 2.6533152
  	},
  	{
  		H: 10.25,
  		name: "Rhodesia",
  		desig: "1931 LD",
  		epoch: 2459200.5,
  		ma: 164.10927,
  		w: 277.04938,
  		om: 255.66268,
  		i: 12.97394,
  		e: 0.2330162,
  		a: 2.8839985
  	},
  	{
  		H: 10.29,
  		name: "Geldonia",
  		desig: "1931 RF",
  		epoch: 2459200.5,
  		ma: 189.38724,
  		w: 291.76226,
  		om: 235.52294,
  		i: 8.7804,
  		e: 0.0315479,
  		a: 3.0168683
  	},
  	{
  		H: 10.95,
  		name: "Imperatrix",
  		desig: "1931 RH",
  		epoch: 2459200.5,
  		ma: 334.75315,
  		w: 52.12754,
  		om: 204.75175,
  		i: 4.59426,
  		e: 0.105293,
  		a: 3.0629628
  	},
  	{
  		H: 10.91,
  		name: "Ostenia",
  		desig: "1931 VT",
  		epoch: 2459200.5,
  		ma: 348.98995,
  		w: 46.23794,
  		om: 20.00007,
  		i: 10.33855,
  		e: 0.0875067,
  		a: 3.020786
  	},
  	{
  		H: 10.73,
  		name: "Pumma",
  		desig: "1927 HA",
  		epoch: 2459200.5,
  		ma: 152.60224,
  		w: 176.81443,
  		om: 89.76404,
  		i: 6.93869,
  		e: 0.1281725,
  		a: 3.1695032
  	},
  	{
  		H: 10.06,
  		name: "Morosovia",
  		desig: "1931 LB",
  		epoch: 2459200.5,
  		ma: 30.26026,
  		w: 168.17899,
  		om: 106.61601,
  		i: 11.27021,
  		e: 0.0623542,
  		a: 3.0137896
  	},
  	{
  		H: 10.58,
  		name: "Neckar",
  		desig: "1931 TG",
  		epoch: 2459200.5,
  		ma: 78.21365,
  		w: 15.12246,
  		om: 40.8022,
  		i: 2.54411,
  		e: 0.0602233,
  		a: 2.8699656
  	},
  	{
  		H: 10.86,
  		name: "Geranium",
  		desig: "1931 TD",
  		epoch: 2459200.5,
  		ma: 228.18331,
  		w: 303.05538,
  		om: 0.65759,
  		i: 16.49251,
  		e: 0.1923876,
  		a: 3.21888
  	},
  	{
  		H: 10.35,
  		name: "Cortusa",
  		desig: "1931 TF2",
  		epoch: 2459200.5,
  		ma: 23.35159,
  		w: 340.63838,
  		om: 261.21442,
  		i: 10.35948,
  		e: 0.135245,
  		a: 3.183414
  	},
  	{
  		H: 10.85,
  		name: "Elyna",
  		desig: "1931 UF",
  		epoch: 2459200.5,
  		ma: 11.93344,
  		w: 90.00173,
  		om: 304.35146,
  		i: 8.52929,
  		e: 0.0865207,
  		a: 3.0131122
  	},
  	{
  		H: 10.85,
  		name: "Genevieve",
  		desig: "1931 XB",
  		epoch: 2459200.5,
  		ma: 88.16135,
  		w: 306.98525,
  		om: 57.85168,
  		i: 9.73391,
  		e: 0.0762856,
  		a: 2.6127788
  	},
  	{
  		H: 10.17,
  		name: "Centenaria",
  		desig: "1932 CD",
  		epoch: 2459200.5,
  		ma: 245.15029,
  		w: 24.10948,
  		om: 323.71729,
  		i: 10.17119,
  		e: 0.1756031,
  		a: 2.8653986
  	},
  	{
  		H: 9.6,
  		name: "Dysona",
  		desig: "1932 EB1",
  		epoch: 2459200.5,
  		ma: 137.57827,
  		w: 320.47423,
  		om: 322.17901,
  		i: 23.51965,
  		e: 0.1011102,
  		a: 3.1885797
  	},
  	{
  		H: 10.42,
  		name: "Zambesia",
  		desig: "1932 HL",
  		epoch: 2459200.5,
  		ma: 39.58528,
  		w: 54.06227,
  		om: 349.73541,
  		i: 10.14193,
  		e: 0.1899315,
  		a: 2.7364158
  	},
  	{
  		H: 9.74,
  		name: "Pamela",
  		desig: "1932 JE",
  		epoch: 2459200.5,
  		ma: 25.87294,
  		w: 53.21634,
  		om: 245.58688,
  		i: 13.26262,
  		e: 0.0469705,
  		a: 3.0987912
  	},
  	{
  		H: 9.98,
  		name: "Calvinia",
  		desig: "1932 KF",
  		epoch: 2459200.5,
  		ma: 257.91332,
  		w: 208.01073,
  		om: 151.7186,
  		i: 2.89397,
  		e: 0.0827857,
  		a: 2.8913199
  	},
  	{
  		H: 10.94,
  		name: "Chaka",
  		desig: "1932 OA",
  		epoch: 2459200.5,
  		ma: 268.42983,
  		w: 54.84768,
  		om: 290.52443,
  		i: 16.00467,
  		e: 0.3108958,
  		a: 2.6187378
  	},
  	{
  		H: 10.66,
  		name: "Memoria",
  		desig: "1932 QA",
  		epoch: 2459200.5,
  		ma: 344.09571,
  		w: 139.3423,
  		om: 161.70228,
  		i: 1.77839,
  		e: 0.1760559,
  		a: 3.1323007
  	},
  	{
  		H: 9.95,
  		name: "Jugurtha",
  		desig: "1932 RO",
  		epoch: 2459200.5,
  		ma: 166.46011,
  		w: 344.09519,
  		om: 79.37625,
  		i: 9.13867,
  		e: 0.0166071,
  		a: 2.7207289
  	},
  	{
  		H: 10.84,
  		name: "Hedera",
  		desig: "1933 BE",
  		epoch: 2459200.5,
  		ma: 320.64457,
  		w: 216.9291,
  		om: 140.61244,
  		i: 6.05194,
  		e: 0.1573865,
  		a: 2.718555
  	},
  	{
  		H: 10.81,
  		name: "Celestia",
  		desig: "1933 DG",
  		epoch: 2459200.5,
  		ma: 270.87301,
  		w: 63.54087,
  		om: 140.89676,
  		i: 33.83673,
  		e: 0.2070619,
  		a: 2.6955481
  	},
  	{
  		H: 10.62,
  		name: "Erfordia",
  		desig: "1932 JA",
  		epoch: 2459200.5,
  		ma: 35.51376,
  		w: 240.49607,
  		om: 287.97788,
  		i: 7.0718,
  		e: 0.0308171,
  		a: 3.1340828
  	},
  	{
  		H: 10.41,
  		name: "Schilowa",
  		desig: "1932 NC",
  		epoch: 2459200.5,
  		ma: 229.11083,
  		w: 133.42272,
  		om: 237.61348,
  		i: 8.54852,
  		e: 0.1740499,
  		a: 3.1421346
  	},
  	{
  		H: 10.81,
  		name: "Sicilia",
  		desig: "1932 PG",
  		epoch: 2459200.5,
  		ma: 153.33938,
  		w: 77.26909,
  		om: 299.59224,
  		i: 7.70249,
  		e: 0.043851,
  		a: 3.1855966
  	},
  	{
  		H: 10.64,
  		name: "Ogyalla",
  		desig: "1933 BT",
  		epoch: 2459200.5,
  		ma: 310.29502,
  		w: 150.23678,
  		om: 74.99335,
  		i: 2.38058,
  		e: 0.1272375,
  		a: 3.1039048
  	},
  	{
  		H: 10.33,
  		name: "Sniadeckia",
  		desig: "1933 FE",
  		epoch: 2459200.5,
  		ma: 203.16396,
  		w: 157.58651,
  		om: 124.27113,
  		i: 13.13141,
  		e: 0.0044905,
  		a: 3.0034243
  	},
  	{
  		H: 10.23,
  		name: "Varsavia",
  		desig: "1933 FF",
  		epoch: 2459200.5,
  		ma: 125.82606,
  		w: 287.23511,
  		om: 158.47271,
  		i: 29.27304,
  		e: 0.188619,
  		a: 2.6643766
  	},
  	{
  		H: 9.69,
  		name: "Letaba",
  		desig: "1933 HG",
  		epoch: 2459200.5,
  		ma: 355.8535,
  		w: 31.77235,
  		om: 235.04078,
  		i: 24.95321,
  		e: 0.1556407,
  		a: 2.8653517
  	},
  	{
  		H: 9.46,
  		name: "Tone",
  		desig: "1927 BD",
  		epoch: 2459200.5,
  		ma: 293.68014,
  		w: 299.36163,
  		om: 320.596,
  		i: 17.1876,
  		e: 0.0511619,
  		a: 3.3580047
  	},
  	{
  		H: 10.42,
  		name: "Isergina",
  		desig: "1931 TN",
  		epoch: 2459200.5,
  		ma: 10.80626,
  		w: 271.84711,
  		om: 126.8425,
  		i: 6.68333,
  		e: 0.1204823,
  		a: 3.139357
  	},
  	{
  		H: 10.79,
  		name: "Cimbria",
  		desig: "1932 WG",
  		epoch: 2459200.5,
  		ma: 52.39299,
  		w: 197.86668,
  		om: 188.43595,
  		i: 12.85385,
  		e: 0.1670456,
  		a: 2.680979
  	},
  	{
  		H: 10.91,
  		name: "Ucclia",
  		desig: "1933 BA",
  		epoch: 2459200.5,
  		ma: 231.45274,
  		w: 336.3603,
  		om: 114.37682,
  		i: 23.30362,
  		e: 0.090755,
  		a: 3.1842484
  	},
  	{
  		H: 10.87,
  		name: "Kenya",
  		desig: "1933 LA",
  		epoch: 2459200.5,
  		ma: 124.0392,
  		w: 238.54902,
  		om: 90.28686,
  		i: 10.8548,
  		e: 0.2628592,
  		a: 2.4054108
  	},
  	{
  		H: 10.19,
  		name: "Baillauda",
  		desig: "1933 QB",
  		epoch: 2459200.5,
  		ma: 251.5558,
  		w: 96.78516,
  		om: 293.0601,
  		i: 6.46053,
  		e: 0.0486133,
  		a: 3.4178684
  	},
  	{
  		H: 10.33,
  		name: "Utopia",
  		desig: "1933 QM1",
  		epoch: 2459200.5,
  		ma: 239.47638,
  		w: 78.70758,
  		om: 324.2872,
  		i: 18.04525,
  		e: 0.1233427,
  		a: 3.1183752
  	},
  	{
  		H: 10.46,
  		name: "Komsomolia",
  		desig: "1925 SC",
  		epoch: 2459200.5,
  		ma: 193.60554,
  		w: 234.79756,
  		om: 157.73054,
  		i: 8.91123,
  		e: 0.2215664,
  		a: 3.1802474
  	},
  	{
  		H: 10.28,
  		name: "Latvia",
  		desig: "1933 OP",
  		epoch: 2459200.5,
  		ma: 38.52252,
  		w: 115.41872,
  		om: 302.71502,
  		i: 10.88672,
  		e: 0.1716478,
  		a: 2.6453907
  	},
  	{
  		H: 10.94,
  		name: "Julietta",
  		desig: "1933 QF",
  		epoch: 2459200.5,
  		ma: 270.07814,
  		w: 69.05027,
  		om: 317.85525,
  		i: 5.69545,
  		e: 0.051909,
  		a: 2.9960805
  	},
  	{
  		H: 10.64,
  		name: "Kutaissi",
  		desig: "1933 QR",
  		epoch: 2459200.5,
  		ma: 40.93505,
  		w: 115.41991,
  		om: 193.05568,
  		i: 1.61656,
  		e: 0.062638,
  		a: 2.8592076
  	},
  	{
  		H: 10.43,
  		name: "Phryne",
  		desig: "1933 RA",
  		epoch: 2459200.5,
  		ma: 255.39242,
  		w: 118.81019,
  		om: 215.35817,
  		i: 9.10773,
  		e: 0.0953605,
  		a: 3.0111063
  	},
  	{
  		H: 10.72,
  		name: "Antwerpia",
  		desig: "1933 UB1",
  		epoch: 2459200.5,
  		ma: 285.13405,
  		w: 312.88379,
  		om: 81.12942,
  		i: 8.7203,
  		e: 0.2325949,
  		a: 2.6892502
  	},
  	{
  		H: 10.73,
  		name: "Deflotte",
  		desig: "1933 WD",
  		epoch: 2459200.5,
  		ma: 322.06439,
  		w: 274.94222,
  		om: 185.05194,
  		i: 2.88558,
  		e: 0.1235223,
  		a: 3.3883465
  	},
  	{
  		H: 10.95,
  		name: "Quadea",
  		desig: "1934 AD",
  		epoch: 2459200.5,
  		ma: 255.70929,
  		w: 123.63732,
  		om: 295.89667,
  		i: 9.0054,
  		e: 0.0685427,
  		a: 3.0267464
  	},
  	{
  		H: 9.53,
  		name: "Luthera",
  		desig: "1928 FP",
  		epoch: 2459200.5,
  		ma: 41.63025,
  		w: 100.60537,
  		om: 72.03671,
  		i: 19.49294,
  		e: 0.1038546,
  		a: 3.2272907
  	},
  	{
  		H: 9.25,
  		name: "Arosa",
  		desig: "1928 KC",
  		epoch: 2459200.5,
  		ma: 53.58665,
  		w: 148.67972,
  		om: 86.57096,
  		i: 18.97842,
  		e: 0.1192827,
  		a: 3.2012896
  	},
  	{
  		H: 10.66,
  		name: "Pongola",
  		desig: "1928 OC",
  		epoch: 2459200.5,
  		ma: 314.89406,
  		w: 147.36848,
  		om: 62.94972,
  		i: 2.31678,
  		e: 0.0726404,
  		a: 3.0136802
  	},
  	{
  		H: 9.66,
  		name: "Scythia",
  		desig: "1930 OB",
  		epoch: 2459200.5,
  		ma: 352.18196,
  		w: 141.45151,
  		om: 274.07424,
  		i: 14.9878,
  		e: 0.0959447,
  		a: 3.1424766
  	},
  	{
  		H: 10.94,
  		name: "Halleria",
  		desig: "1931 EB",
  		epoch: 2459200.5,
  		ma: 52.13762,
  		w: 163.50331,
  		om: 354.11611,
  		i: 5.57659,
  		e: 0.0110354,
  		a: 2.9079729
  	},
  	{
  		H: 10.45,
  		name: "Hyperborea",
  		desig: "1931 TO",
  		epoch: 2459200.5,
  		ma: 138.71026,
  		w: 244.62447,
  		om: 206.07086,
  		i: 10.28027,
  		e: 0.1496153,
  		a: 3.2045367
  	},
  	{
  		H: 10.72,
  		name: "Vassar",
  		desig: "1933 OT",
  		epoch: 2459200.5,
  		ma: 321.77803,
  		w: 261.49256,
  		om: 129.23189,
  		i: 21.94046,
  		e: 0.2111043,
  		a: 3.0981418
  	},
  	{
  		H: 10.09,
  		name: "Bronislawa",
  		desig: "1933 SF1",
  		epoch: 2459200.5,
  		ma: 156.43434,
  		w: 21.44672,
  		om: 236.48414,
  		i: 7.08226,
  		e: 0.0752,
  		a: 3.2068965
  	},
  	{
  		H: 9.93,
  		name: "Silvretta",
  		desig: "1935 RC",
  		epoch: 2459200.5,
  		ma: 345.07283,
  		w: 33.91652,
  		om: 6.16772,
  		i: 20.41214,
  		e: 0.2349098,
  		a: 3.2027155
  	},
  	{
  		H: 10.67,
  		name: "Disa",
  		desig: "1934 FO",
  		epoch: 2459200.5,
  		ma: 270.16907,
  		w: 316.30617,
  		om: 256.09113,
  		i: 2.80007,
  		e: 0.2056643,
  		a: 2.9879686
  	},
  	{
  		H: 10.93,
  		name: "Impala",
  		desig: "1934 JG",
  		epoch: 2459200.5,
  		ma: 259.20128,
  		w: 205.94975,
  		om: 71.88726,
  		i: 19.79658,
  		e: 0.2291111,
  		a: 2.9922145
  	},
  	{
  		H: 10.09,
  		name: "Majuba",
  		desig: "1934 JH",
  		epoch: 2459200.5,
  		ma: 7.35795,
  		w: 345.31751,
  		om: 317.68665,
  		i: 9.51455,
  		e: 0.1707734,
  		a: 2.9411099
  	},
  	{
  		H: 10,
  		name: "Tugela",
  		desig: "1934 LD",
  		epoch: 2459200.5,
  		ma: 77.775,
  		w: 136.66398,
  		om: 45.21709,
  		i: 18.77791,
  		e: 0.1482363,
  		a: 3.2307653
  	},
  	{
  		H: 10.15,
  		name: "Devota",
  		desig: "1925 UA",
  		epoch: 2459200.5,
  		ma: 194.7881,
  		w: 174.12095,
  		om: 222.67896,
  		i: 5.76737,
  		e: 0.1349674,
  		a: 3.501179
  	},
  	{
  		H: 10.87,
  		name: "Eliane",
  		desig: "1933 FL",
  		epoch: 2459200.5,
  		ma: 157.39569,
  		w: 164.9298,
  		om: 132.0029,
  		i: 14.46925,
  		e: 0.1726048,
  		a: 2.6177801
  	},
  	{
  		H: 10.11,
  		name: "Spiridonia",
  		desig: "1925 DB",
  		epoch: 2459200.5,
  		ma: 314.00978,
  		w: 3.9947,
  		om: 158.80018,
  		i: 15.95298,
  		e: 0.0747084,
  		a: 3.1727521
  	},
  	{
  		H: 10.62,
  		name: "Solvejg",
  		desig: "1933 QS",
  		epoch: 2459200.5,
  		ma: 3.04752,
  		w: 184.80739,
  		om: 121.32826,
  		i: 3.10183,
  		e: 0.1912385,
  		a: 3.1012307
  	},
  	{
  		H: 10.65,
  		name: "Marconia",
  		desig: "1934 AA",
  		epoch: 2459200.5,
  		ma: 186.37013,
  		w: 348.85063,
  		om: 13.62097,
  		i: 2.45701,
  		e: 0.1327103,
  		a: 3.0614152
  	},
  	{
  		H: 10.43,
  		name: "Lundmarka",
  		desig: "1934 OB",
  		epoch: 2459200.5,
  		ma: 164.29121,
  		w: 129.29312,
  		om: 133.1322,
  		i: 11.45492,
  		e: 0.0936655,
  		a: 2.9143393
  	},
  	{
  		H: 10.67,
  		name: "Zeelandia",
  		desig: "1934 RW",
  		epoch: 2459200.5,
  		ma: 4.71592,
  		w: 218.24517,
  		om: 97.41406,
  		i: 3.19643,
  		e: 0.0651456,
  		a: 2.8518094
  	},
  	{
  		H: 10.83,
  		name: "Desagneauxa",
  		desig: "1934 XB",
  		epoch: 2459200.5,
  		ma: 126.71906,
  		w: 161.32528,
  		om: 290.9791,
  		i: 8.6919,
  		e: 0.0569953,
  		a: 3.0185468
  	},
  	{
  		H: 10.58,
  		name: "Edmee",
  		desig: "1935 BA",
  		epoch: 2459200.5,
  		ma: 199.47914,
  		w: 140.65061,
  		om: 107.48347,
  		i: 13.09101,
  		e: 0.0788842,
  		a: 2.7421825
  	},
  	{
  		H: 10.55,
  		name: "Bechuana",
  		desig: "1934 LJ",
  		epoch: 2459200.5,
  		ma: 202.75834,
  		w: 305.49737,
  		om: 307.08128,
  		i: 10.05145,
  		e: 0.1556252,
  		a: 3.0145513
  	},
  	{
  		H: 10.72,
  		name: "Rosselia",
  		desig: "1934 TA",
  		epoch: 2459200.5,
  		ma: 311.05707,
  		w: 236.81523,
  		om: 139.46411,
  		i: 2.94291,
  		e: 0.0875204,
  		a: 2.8599766
  	},
  	{
  		H: 9.98,
  		name: "Uzbekistania",
  		desig: "1934 TF",
  		epoch: 2459200.5,
  		ma: 340.87196,
  		w: 64.12403,
  		om: 9.33435,
  		i: 9.64326,
  		e: 0.0679184,
  		a: 3.195177
  	},
  	{
  		H: 9.98,
  		name: "Maartje",
  		desig: "1935 CU",
  		epoch: 2459200.5,
  		ma: 1.67637,
  		w: 97.5256,
  		om: 211.69163,
  		i: 9.19589,
  		e: 0.0970024,
  		a: 3.0126574
  	},
  	{
  		H: 10.28,
  		name: "Nyanza",
  		desig: "1935 JH",
  		epoch: 2459200.5,
  		ma: 166.85596,
  		w: 301.81714,
  		om: 69.61069,
  		i: 7.94542,
  		e: 0.0507843,
  		a: 3.0825663
  	},
  	{
  		H: 11,
  		name: "Khama",
  		desig: "1935 ND",
  		epoch: 2459200.5,
  		ma: 310.15937,
  		w: 282.87116,
  		om: 83.7173,
  		i: 13.96579,
  		e: 0.1564259,
  		a: 3.1899863
  	},
  	{
  		H: 10.42,
  		name: "Prieska",
  		desig: "1935 OC",
  		epoch: 2459200.5,
  		ma: 87.66252,
  		w: 342.72154,
  		om: 64.02377,
  		i: 11.10246,
  		e: 0.0690064,
  		a: 3.1199498
  	},
  	{
  		H: 10.8,
  		name: "Safara",
  		desig: "1935 VB",
  		epoch: 2459200.5,
  		ma: 233.99145,
  		w: 221.18582,
  		om: 63.97193,
  		i: 11.48559,
  		e: 0.0663194,
  		a: 3.0138133
  	},
  	{
  		H: 10.37,
  		name: "Piccolo",
  		desig: "1932 WA",
  		epoch: 2459200.5,
  		ma: 127.76061,
  		w: 282.76127,
  		om: 24.10825,
  		i: 9.46468,
  		e: 0.1395852,
  		a: 2.874997
  	},
  	{
  		H: 10.95,
  		name: "Numidia",
  		desig: "1935 HD",
  		epoch: 2459200.5,
  		ma: 81.97025,
  		w: 263.40758,
  		om: 18.06188,
  		i: 14.81985,
  		e: 0.0624201,
  		a: 2.5235835
  	},
  	{
  		H: 10.76,
  		name: "Ostanina",
  		desig: "1935 QB",
  		epoch: 2459200.5,
  		ma: 217.33742,
  		w: 127.95829,
  		om: 180.42633,
  		i: 14.3683,
  		e: 0.2109426,
  		a: 3.1192673
  	},
  	{
  		H: 10.92,
  		name: "Lomonosowa",
  		desig: "1936 FC",
  		epoch: 2459200.5,
  		ma: 23.40847,
  		w: 31.6581,
  		om: 169.86381,
  		i: 15.60593,
  		e: 0.0908368,
  		a: 2.523808
  	},
  	{
  		H: 10.88,
  		name: "Gelria",
  		desig: "1935 MJ",
  		epoch: 2459200.5,
  		ma: 191.06368,
  		w: 260.55405,
  		om: 114.93529,
  		i: 6.92211,
  		e: 0.1077146,
  		a: 2.7398793
  	},
  	{
  		H: 9.17,
  		name: "Abastumani",
  		desig: "1935 TA",
  		epoch: 2459200.5,
  		ma: 147.52073,
  		w: 332.34031,
  		om: 28.8926,
  		i: 19.92656,
  		e: 0.0358183,
  		a: 3.4380851
  	},
  	{
  		H: 10.3,
  		name: "Donnera",
  		desig: "1936 QL",
  		epoch: 2459200.5,
  		ma: 352.62578,
  		w: 72.16665,
  		om: 296.89848,
  		i: 11.85266,
  		e: 0.1000746,
  		a: 3.1590893
  	},
  	{
  		H: 10.98,
  		name: "Lindelof",
  		desig: "1936 WC",
  		epoch: 2459200.5,
  		ma: 128.66777,
  		w: 111.24042,
  		om: 268.36056,
  		i: 5.8199,
  		e: 0.2830864,
  		a: 2.7633835
  	},
  	{
  		H: 10.72,
  		name: "Renauxa",
  		desig: "1937 EC",
  		epoch: 2459200.5,
  		ma: 59.95004,
  		w: 66.03619,
  		om: 352.56508,
  		i: 10.03166,
  		e: 0.1076583,
  		a: 3.0184945
  	},
  	{
  		H: 10.41,
  		name: "Esperanto",
  		desig: "1936 FQ",
  		epoch: 2459200.5,
  		ma: 187.26346,
  		w: 162.66261,
  		om: 42.57999,
  		i: 9.80263,
  		e: 0.0844255,
  		a: 3.0877004
  	},
  	{
  		H: 10.97,
  		name: "Jose",
  		desig: "1936 QM",
  		epoch: 2459200.5,
  		ma: 135.83425,
  		w: 321.6143,
  		om: 58.45721,
  		i: 2.90668,
  		e: 0.0803565,
  		a: 2.8604777
  	},
  	{
  		H: 9.95,
  		name: "Sundmania",
  		desig: "1937 AJ",
  		epoch: 2459200.5,
  		ma: 42.21898,
  		w: 302.96693,
  		om: 42.9142,
  		i: 9.16221,
  		e: 0.0566546,
  		a: 3.1880282
  	},
  	{
  		H: 10.96,
  		name: "Riviera",
  		desig: "1937 GF",
  		epoch: 2459200.5,
  		ma: 36.70411,
  		w: 275.28006,
  		om: 335.00125,
  		i: 9.06578,
  		e: 0.1606092,
  		a: 2.5819957
  	},
  	{
  		H: 10.34,
  		name: "Mombasa",
  		desig: "1937 NO",
  		epoch: 2459200.5,
  		ma: 196.86887,
  		w: 252.46489,
  		om: 115.70942,
  		i: 17.30654,
  		e: 0.1413061,
  		a: 2.8091823
  	},
  	{
  		H: 10.37,
  		name: "Margot",
  		desig: "1936 FD1",
  		epoch: 2459200.5,
  		ma: 312.02423,
  		w: 148.03489,
  		om: 152.39966,
  		i: 10.83548,
  		e: 0.0662651,
  		a: 3.0165728
  	},
  	{
  		H: 10.34,
  		name: "Salonta",
  		desig: "1936 YA",
  		epoch: 2459200.5,
  		ma: 179.05813,
  		w: 30.86628,
  		om: 260.41602,
  		i: 13.88813,
  		e: 0.0620361,
  		a: 3.148055
  	},
  	{
  		H: 10.86,
  		name: "Ankara",
  		desig: "1937 PA",
  		epoch: 2459200.5,
  		ma: 14.32952,
  		w: 296.71243,
  		om: 296.27921,
  		i: 6.09209,
  		e: 0.1544209,
  		a: 2.6966341
  	},
  	{
  		H: 10.34,
  		name: "Magnya",
  		desig: "1937 VA",
  		epoch: 2459200.5,
  		ma: 333.69213,
  		w: 328.46302,
  		om: 41.41066,
  		i: 16.8941,
  		e: 0.2295989,
  		a: 3.1506786
  	},
  	{
  		H: 10.15,
  		name: "Jean-Jacques",
  		desig: "1937 YL",
  		epoch: 2459200.5,
  		ma: 38.44031,
  		w: 334.5405,
  		om: 104.63556,
  		i: 15.31392,
  		e: 0.048742,
  		a: 3.1270266
  	},
  	{
  		H: 10.69,
  		name: "Nordenmarkia",
  		desig: "1938 CB",
  		epoch: 2459200.5,
  		ma: 20.20909,
  		w: 79.90127,
  		om: 329.13568,
  		i: 7.25966,
  		e: 0.1937741,
  		a: 3.1511904
  	},
  	{
  		H: 8.73,
  		name: "Mashona",
  		desig: "1938 OE",
  		epoch: 2459200.5,
  		ma: 84.7037,
  		w: 350.15474,
  		om: 326.32251,
  		i: 21.90622,
  		e: 0.1281824,
  		a: 3.3846363
  	},
  	{
  		H: 9.97,
  		name: "Linzia",
  		desig: "1938 QD",
  		epoch: 2459200.5,
  		ma: 268.18317,
  		w: 205.97845,
  		om: 188.81954,
  		i: 13.39047,
  		e: 0.0645742,
  		a: 3.1285425
  	},
  	{
  		H: 10.42,
  		name: "Tubingia",
  		desig: "1938 DR",
  		epoch: 2459200.5,
  		ma: 147.54557,
  		w: 314.22041,
  		om: 353.66483,
  		i: 3.50822,
  		e: 0.0421868,
  		a: 3.0181599
  	},
  	{
  		H: 10.99,
  		name: "Postrema",
  		desig: "1938 HC",
  		epoch: 2459200.5,
  		ma: 94.81482,
  		w: 127.0703,
  		om: 72.72447,
  		i: 17.28809,
  		e: 0.2044588,
  		a: 2.7401901
  	},
  	{
  		H: 10.33,
  		name: "Aura",
  		desig: "1938 XE",
  		epoch: 2459200.5,
  		ma: 177.30375,
  		w: 112.69339,
  		om: 354.39956,
  		i: 10.53148,
  		e: 0.1175802,
  		a: 3.0436248
  	},
  	{
  		H: 10.56,
  		name: "Kuopio",
  		desig: "1938 XD",
  		epoch: 2459200.5,
  		ma: 73.25024,
  		w: 177.6367,
  		om: 316.96047,
  		i: 12.36855,
  		e: 0.104025,
  		a: 2.6248311
  	},
  	{
  		H: 10.47,
  		name: "Imatra",
  		desig: "1938 UY",
  		epoch: 2459200.5,
  		ma: 33.18578,
  		w: 118.75768,
  		om: 253.30926,
  		i: 15.27659,
  		e: 0.0947534,
  		a: 3.1090261
  	},
  	{
  		H: 10.76,
  		name: "Joensuu",
  		desig: "1939 SB",
  		epoch: 2459200.5,
  		ma: 305.40417,
  		w: 1.96629,
  		om: 347.66845,
  		i: 12.6887,
  		e: 0.122237,
  		a: 3.1113906
  	},
  	{
  		H: 10.81,
  		name: "Inari",
  		desig: "1938 SM",
  		epoch: 2459200.5,
  		ma: 192.51652,
  		w: 123.28927,
  		om: 330.57796,
  		i: 8.78069,
  		e: 0.0500061,
  		a: 3.0081287
  	},
  	{
  		H: 10.78,
  		name: "Saimaa",
  		desig: "1939 BD",
  		epoch: 2459200.5,
  		ma: 214.51495,
  		w: 9.27612,
  		om: 156.5521,
  		i: 10.71484,
  		e: 0.0401742,
  		a: 3.0093772
  	},
  	{
  		H: 10.84,
  		name: "Kevola",
  		desig: "1938 WK",
  		epoch: 2459200.5,
  		ma: 284.44739,
  		w: 112.53735,
  		om: 52.46557,
  		i: 11.96997,
  		e: 0.0854603,
  		a: 2.8487266
  	},
  	{
  		H: 10.63,
  		name: "Schalen",
  		desig: "1941 QE",
  		epoch: 2459200.5,
  		ma: 178.877,
  		w: 163.7685,
  		om: 211.63532,
  		i: 2.7668,
  		e: 0.1168832,
  		a: 3.0922748
  	},
  	{
  		H: 10.76,
  		name: "Izsak",
  		desig: "1941 SG1",
  		epoch: 2459200.5,
  		ma: 286.69984,
  		w: 280.85019,
  		om: 190.31338,
  		i: 16.12079,
  		e: 0.1264651,
  		a: 3.171098
  	},
  	{
  		H: 10.73,
  		name: "Nele",
  		desig: "1929 CZ",
  		epoch: 2459200.5,
  		ma: 161.00114,
  		w: 154.82307,
  		om: 291.3262,
  		i: 11.74311,
  		e: 0.2536448,
  		a: 2.643479
  	},
  	{
  		H: 10.54,
  		name: "Wingolfia",
  		desig: "1942 AA",
  		epoch: 2459200.5,
  		ma: 287.27725,
  		w: 268.19935,
  		om: 91.60225,
  		i: 15.74558,
  		e: 0.1085747,
  		a: 3.4295853
  	},
  	{
  		H: 10.37,
  		name: "Jarnefelt",
  		desig: "1942 BD",
  		epoch: 2459200.5,
  		ma: 300.5306,
  		w: 299.91566,
  		om: 110.78342,
  		i: 10.51353,
  		e: 0.0281379,
  		a: 3.2223186
  	},
  	{
  		H: 10.88,
  		name: "Srbija",
  		desig: "1936 TB",
  		epoch: 2459200.5,
  		ma: 348.55904,
  		w: 232.60672,
  		om: 176.97946,
  		i: 10.95843,
  		e: 0.1977358,
  		a: 3.1683378
  	},
  	{
  		H: 9.78,
  		name: "Alikoski",
  		desig: "1941 HN",
  		epoch: 2459200.5,
  		ma: 340.77441,
  		w: 110.59927,
  		om: 51.44286,
  		i: 17.27374,
  		e: 0.0826541,
  		a: 3.2126776
  	},
  	{
  		H: 10.27,
  		name: "Posnania",
  		desig: "1949 SC",
  		epoch: 2459200.5,
  		ma: 354.21462,
  		w: 354.0813,
  		om: 5.8871,
  		i: 13.27287,
  		e: 0.204333,
  		a: 3.109358
  	},
  	{
  		H: 9.95,
  		name: "Meyer",
  		desig: "1949 FD",
  		epoch: 2459200.5,
  		ma: 316.23176,
  		w: 260.68884,
  		om: 245.6396,
  		i: 14.47434,
  		e: 0.0341254,
  		a: 3.5411263
  	},
  	{
  		H: 10.69,
  		name: "Herrick",
  		desig: "1948 SB",
  		epoch: 2459200.5,
  		ma: 69.76824,
  		w: 279.73689,
  		om: 184.11829,
  		i: 8.76215,
  		e: 0.1258183,
  		a: 3.4373983
  	},
  	{
  		H: 10.37,
  		name: "Union",
  		desig: "1947 RG",
  		epoch: 2459200.5,
  		ma: 180.66333,
  		w: 264.38526,
  		om: 150.09425,
  		i: 26.19045,
  		e: 0.3091283,
  		a: 2.9266989
  	},
  	{
  		H: 10.72,
  		name: "Itzigsohn",
  		desig: "1951 EV",
  		epoch: 2459200.5,
  		ma: 184.13757,
  		w: 160.3491,
  		om: 249.08414,
  		i: 13.28312,
  		e: 0.1305439,
  		a: 2.8882407
  	},
  	{
  		H: 10.96,
  		name: "Neva",
  		desig: "1926 VH",
  		epoch: 2459200.5,
  		ma: 219.10992,
  		w: 256.94812,
  		om: 130.00279,
  		i: 8.55883,
  		e: 0.0956951,
  		a: 2.7535679
  	},
  	{
  		H: 10.52,
  		name: "Tombaugh",
  		desig: "1931 FH",
  		epoch: 2459200.5,
  		ma: 224.42794,
  		w: 38.12249,
  		om: 309.08161,
  		i: 9.39674,
  		e: 0.1026963,
  		a: 3.0218555
  	},
  	{
  		H: 10.3,
  		name: "Milankovitch",
  		desig: "1936 GA",
  		epoch: 2459200.5,
  		ma: 177.24087,
  		w: 275.96955,
  		om: 173.70618,
  		i: 10.56219,
  		e: 0.0763213,
  		a: 3.0132843
  	},
  	{
  		H: 10.61,
  		name: "Brenda",
  		desig: "1951 NL",
  		epoch: 2459200.5,
  		ma: 233.64907,
  		w: 229.20257,
  		om: 105.22486,
  		i: 18.63079,
  		e: 0.24884,
  		a: 2.5837957
  	},
  	{
  		H: 10.91,
  		name: "Hirose",
  		desig: "1950 BJ",
  		epoch: 2459200.5,
  		ma: 299.04004,
  		w: 244.13122,
  		om: 319.4791,
  		i: 16.83745,
  		e: 0.0932408,
  		a: 3.1025567
  	},
  	{
  		H: 10.83,
  		name: "Goldschmidt",
  		desig: "1952 HA",
  		epoch: 2459200.5,
  		ma: 137.00244,
  		w: 344.34238,
  		om: 162.31991,
  		i: 14.07667,
  		e: 0.0691307,
  		a: 3.0010196
  	},
  	{
  		H: 10.95,
  		name: "Alschmitt",
  		desig: "1952 FB",
  		epoch: 2459200.5,
  		ma: 14.28997,
  		w: 24.32728,
  		om: 154.9328,
  		i: 13.26525,
  		e: 0.1267143,
  		a: 3.1990625
  	},
  	{
  		H: 10.43,
  		name: "The NORC",
  		desig: "1953 RB",
  		epoch: 2459200.5,
  		ma: 355.09413,
  		w: 286.47496,
  		om: 320.75194,
  		i: 15.55984,
  		e: 0.2294073,
  		a: 3.1891715
  	},
  	{
  		H: 10.28,
  		name: "Strobel",
  		desig: "A923 RT",
  		epoch: 2459200.5,
  		ma: 111.20368,
  		w: 288.59375,
  		om: 181.17489,
  		i: 19.38886,
  		e: 0.0668191,
  		a: 3.0104641
  	},
  	{
  		H: 10.75,
  		name: "Chimay",
  		desig: "1929 EC",
  		epoch: 2459200.5,
  		ma: 83.83967,
  		w: 66.31975,
  		om: 114.07604,
  		i: 2.67653,
  		e: 0.1239536,
  		a: 3.1956019
  	},
  	{
  		H: 10.49,
  		name: "Swings",
  		desig: "A907 GX",
  		epoch: 2459200.5,
  		ma: 342.09703,
  		w: 237.3139,
  		om: 21.26714,
  		i: 14.06925,
  		e: 0.0449172,
  		a: 3.0698139
  	},
  	{
  		H: 10.52,
  		name: "Tana",
  		desig: "1935 OJ",
  		epoch: 2459200.5,
  		ma: 85.52214,
  		w: 0.23727,
  		om: 331.39798,
  		i: 9.322,
  		e: 0.098522,
  		a: 3.0195094
  	},
  	{
  		H: 10.84,
  		name: "Hill",
  		desig: "1951 RU",
  		epoch: 2459200.5,
  		ma: 290.00371,
  		w: 149.7199,
  		om: 339.04322,
  		i: 10.80343,
  		e: 0.0667881,
  		a: 2.7511374
  	},
  	{
  		H: 10.83,
  		name: "Bojeva",
  		desig: "1931 TL",
  		epoch: 2459200.5,
  		ma: 25.6061,
  		w: 332.65664,
  		om: 25.17141,
  		i: 10.42569,
  		e: 0.0865192,
  		a: 3.0157678
  	},
  	{
  		H: 9.92,
  		name: "Punkaharju",
  		desig: "1940 YL",
  		epoch: 2459200.5,
  		ma: 138.08195,
  		w: 36.40328,
  		om: 338.21199,
  		i: 16.42923,
  		e: 0.2596222,
  		a: 2.7845336
  	},
  	{
  		H: 10.86,
  		name: "Dagmar",
  		desig: "1934 RS",
  		epoch: 2459200.5,
  		ma: 338.8153,
  		w: 178.43646,
  		om: 18.95517,
  		i: 0.94018,
  		e: 0.10974,
  		a: 3.1401284
  	},
  	{
  		H: 10.74,
  		name: "Nevanlinna",
  		desig: "1941 FR",
  		epoch: 2459200.5,
  		ma: 91.83131,
  		w: 89.79989,
  		om: 177.41464,
  		i: 17.97449,
  		e: 0.1535723,
  		a: 3.1151729
  	},
  	{
  		H: 10.71,
  		name: "Glarona",
  		desig: "1965 SC",
  		epoch: 2459200.5,
  		ma: 273.14671,
  		w: 316.4153,
  		om: 93.5423,
  		i: 2.63283,
  		e: 0.1705235,
  		a: 3.1711628
  	},
  	{
  		H: 10.99,
  		name: "Oort",
  		desig: "1956 RB",
  		epoch: 2459200.5,
  		ma: 90.66404,
  		w: 232.54708,
  		om: 174.52808,
  		i: 1.08616,
  		e: 0.1757806,
  		a: 3.163413
  	},
  	{
  		H: 10.73,
  		name: "Okavango",
  		desig: "1953 NJ",
  		epoch: 2459200.5,
  		ma: 308.0727,
  		w: 260.00257,
  		om: 61.26002,
  		i: 16.2768,
  		e: 0.1926634,
  		a: 3.161588
  	},
  	{
  		H: 10.97,
  		name: "Sandrine",
  		desig: "1935 BB",
  		epoch: 2459200.5,
  		ma: 232.47059,
  		w: 250.75172,
  		om: 134.77336,
  		i: 11.0987,
  		e: 0.1151648,
  		a: 3.0112792
  	},
  	{
  		H: 10.17,
  		name: "Angola",
  		desig: "1935 KC",
  		epoch: 2459200.5,
  		ma: 40.29148,
  		w: 18.29233,
  		om: 237.56274,
  		i: 19.37765,
  		e: 0.154152,
  		a: 3.1680059
  	},
  	{
  		H: 10.97,
  		name: "Wells",
  		desig: "1953 TD3",
  		epoch: 2459200.5,
  		ma: 313.03242,
  		w: 138.05547,
  		om: 317.09687,
  		i: 16.12278,
  		e: 0.0488651,
  		a: 3.1461173
  	},
  	{
  		H: 10.18,
  		name: "Klemola",
  		desig: "1936 FX",
  		epoch: 2459200.5,
  		ma: 77.18523,
  		w: 1.44365,
  		om: 149.8102,
  		i: 10.93636,
  		e: 0.0412269,
  		a: 3.0119873
  	},
  	{
  		H: 10.61,
  		name: "Smuts",
  		desig: "1948 PH",
  		epoch: 2459200.5,
  		ma: 251.27878,
  		w: 203.42961,
  		om: 152.47378,
  		i: 5.93519,
  		e: 0.1280677,
  		a: 3.1650931
  	},
  	{
  		H: 10.96,
  		name: "Heike",
  		desig: "1943 EY",
  		epoch: 2459200.5,
  		ma: 114.94669,
  		w: 211.74414,
  		om: 155.60015,
  		i: 10.77653,
  		e: 0.1117977,
  		a: 3.0141438
  	},
  	{
  		H: 10.09,
  		name: "ITA",
  		desig: "1948 RJ1",
  		epoch: 2459200.5,
  		ma: 51.89663,
  		w: 275.25742,
  		om: 9.21455,
  		i: 15.60589,
  		e: 0.1307499,
  		a: 3.1379403
  	},
  	{
  		H: 10.84,
  		name: "Lorbach",
  		desig: "1936 VD",
  		epoch: 2459200.5,
  		ma: 99.50109,
  		w: 321.35606,
  		om: 157.08869,
  		i: 10.70904,
  		e: 0.0468901,
  		a: 3.0897805
  	},
  	{
  		H: 10.04,
  		name: "Wrubel",
  		desig: "1957 XB",
  		epoch: 2459200.5,
  		ma: 163.29013,
  		w: 265.43175,
  		om: 70.17185,
  		i: 19.94109,
  		e: 0.1776248,
  		a: 3.1756648
  	},
  	{
  		H: 10.44,
  		name: "Makover",
  		desig: "1968 BD",
  		epoch: 2459200.5,
  		ma: 273.61605,
  		w: 316.16684,
  		om: 86.30926,
  		i: 11.23012,
  		e: 0.1714261,
  		a: 3.1322259
  	},
  	{
  		H: 10.64,
  		name: "Kippes",
  		desig: "A906 RA",
  		epoch: 2459200.5,
  		ma: 13.67662,
  		w: 340.32979,
  		om: 290.98266,
  		i: 9.00399,
  		e: 0.0556869,
  		a: 3.0181486
  	},
  	{
  		H: 9.92,
  		name: "Riga",
  		desig: "1966 KB",
  		epoch: 2459200.5,
  		ma: 333.55471,
  		w: 26.40838,
  		om: 186.69906,
  		i: 22.5848,
  		e: 0.0560905,
  		a: 3.3558417
  	},
  	{
  		H: 10.45,
  		name: "Laputa",
  		desig: "1948 PC",
  		epoch: 2459200.5,
  		ma: 4.25442,
  		w: 166.29244,
  		om: 122.11269,
  		i: 23.9093,
  		e: 0.2290976,
  		a: 3.1367411
  	},
  	{
  		H: 10.86,
  		name: "Ursa",
  		desig: "1971 UC",
  		epoch: 2459200.5,
  		ma: 137.69674,
  		w: 49.07071,
  		om: 44.18196,
  		i: 21.97047,
  		e: 0.0146639,
  		a: 3.2140494
  	},
  	{
  		H: 10.96,
  		name: "Masaryk",
  		desig: "1971 UO1",
  		epoch: 2459200.5,
  		ma: 137.02239,
  		w: 123.14542,
  		om: 44.7385,
  		i: 2.60479,
  		e: 0.1041831,
  		a: 3.4323651
  	},
  	{
  		H: 10.99,
  		name: "McElroy",
  		desig: "1957 XE",
  		epoch: 2459200.5,
  		ma: 324.76851,
  		w: 92.37467,
  		om: 298.63688,
  		i: 15.78864,
  		e: 0.0460818,
  		a: 3.0632442
  	},
  	{
  		H: 10.78,
  		name: "Kovalevskaya",
  		desig: "1972 RS2",
  		epoch: 2459200.5,
  		ma: 244.12424,
  		w: 245.23434,
  		om: 343.27148,
  		i: 7.69839,
  		e: 0.0981739,
  		a: 3.2121216
  	},
  	{
  		H: 10.62,
  		name: "Adzhimushkaj",
  		desig: "1972 JL",
  		epoch: 2459200.5,
  		ma: 217.22782,
  		w: 356.25337,
  		om: 135.0544,
  		i: 10.98963,
  		e: 0.0473972,
  		a: 3.0011384
  	},
  	{
  		H: 10.51,
  		name: "Hesburgh",
  		desig: "1951 JC",
  		epoch: 2459200.5,
  		ma: 31.38834,
  		w: 339.51845,
  		om: 78.14515,
  		i: 14.26454,
  		e: 0.1436628,
  		a: 3.1087988
  	},
  	{
  		H: 10.84,
  		name: "Dufour",
  		desig: "1973 WA",
  		epoch: 2459200.5,
  		ma: 34.76819,
  		w: 56.63588,
  		om: 29.56901,
  		i: 6.64771,
  		e: 0.1247237,
  		a: 3.1938355
  	},
  	{
  		H: 10.92,
  		name: "Hopmann",
  		desig: "1929 AE",
  		epoch: 2459200.5,
  		ma: 189.3643,
  		w: 233.66779,
  		om: 305.05412,
  		i: 17.18514,
  		e: 0.156139,
  		a: 3.1181885
  	},
  	{
  		H: 10.29,
  		name: "Konstitutsiya",
  		desig: "1973 SV4",
  		epoch: 2459200.5,
  		ma: 240.64397,
  		w: 201.88955,
  		om: 15.606,
  		i: 20.65718,
  		e: 0.0967763,
  		a: 3.2164429
  	},
  	{
  		H: 10.81,
  		name: "Nortia",
  		desig: "1953 LG",
  		epoch: 2459200.5,
  		ma: 341.62253,
  		w: 310.29037,
  		om: 329.03642,
  		i: 7.02376,
  		e: 0.1129435,
  		a: 3.1634552
  	},
  	{
  		H: 10.91,
  		name: "Ortutay",
  		desig: "1936 TH",
  		epoch: 2459200.5,
  		ma: 139.07387,
  		w: 60.12802,
  		om: 321.19299,
  		i: 3.07447,
  		e: 0.1121017,
  		a: 3.1066243
  	},
  	{
  		H: 10.66,
  		name: "Tamriko",
  		desig: "1976 UN",
  		epoch: 2459200.5,
  		ma: 207.75508,
  		w: 204.2257,
  		om: 213.84388,
  		i: 9.49878,
  		e: 0.0839839,
  		a: 3.0071174
  	},
  	{
  		H: 10.87,
  		name: "Mizuho",
  		desig: "1978 EA",
  		epoch: 2459200.5,
  		ma: 196.65508,
  		w: 341.45163,
  		om: 339.81592,
  		i: 11.81408,
  		e: 0.1339171,
  		a: 3.0739632
  	},
  	{
  		H: 10.53,
  		name: "Sampo",
  		desig: "1941 HO",
  		epoch: 2459200.5,
  		ma: 225.64263,
  		w: 318.77696,
  		om: 114.51741,
  		i: 11.38018,
  		e: 0.0582504,
  		a: 3.019534
  	},
  	{
  		H: 10.98,
  		name: "Laverna",
  		desig: "1960 FL",
  		epoch: 2459200.5,
  		ma: 300.43763,
  		w: 238.08856,
  		om: 292.04206,
  		i: 7.69306,
  		e: 0.1919472,
  		a: 3.1440966
  	},
  	{
  		H: 9.94,
  		name: "Toronto",
  		desig: "1963 PD",
  		epoch: 2459200.5,
  		ma: 208.46476,
  		w: 290.64977,
  		om: 252.45189,
  		i: 18.39732,
  		e: 0.1217513,
  		a: 3.1847234
  	},
  	{
  		H: 10.72,
  		name: "Tselina",
  		desig: "1969 LG",
  		epoch: 2459200.5,
  		ma: 184.2814,
  		w: 232.00236,
  		om: 167.15786,
  		i: 10.50593,
  		e: 0.0955867,
  		a: 3.0150663
  	},
  	{
  		H: 10.87,
  		name: "Hannibal",
  		desig: "1978 WK",
  		epoch: 2459200.5,
  		ma: 209.12583,
  		w: 141.97627,
  		om: 250.92708,
  		i: 13.96531,
  		e: 0.2205733,
  		a: 3.1239853
  	},
  	{
  		H: 10.63,
  		name: "Jackson",
  		desig: "1926 KB",
  		epoch: 2459200.5,
  		ma: 80.33276,
  		w: 224.45104,
  		om: 36.47251,
  		i: 11.67568,
  		e: 0.0752895,
  		a: 3.103821
  	},
  	{
  		H: 10.25,
  		name: "Ellicott",
  		desig: "1965 BC",
  		epoch: 2459200.5,
  		ma: 240.50884,
  		w: 305.60387,
  		om: 212.13473,
  		i: 10.32195,
  		e: 0.0567363,
  		a: 3.4341459
  	},
  	{
  		H: 10.76,
  		name: "Pushkin",
  		desig: "1977 QL3",
  		epoch: 2459200.5,
  		ma: 131.44191,
  		w: 4.031,
  		om: 78.53966,
  		i: 5.40273,
  		e: 0.0306781,
  		a: 3.4945722
  	},
  	{
  		H: 10.69,
  		name: "Vittore",
  		desig: "A924 GA",
  		epoch: 2459200.5,
  		ma: 306.83005,
  		w: 274.33607,
  		om: 205.02834,
  		i: 18.77925,
  		e: 0.2152183,
  		a: 3.2051814
  	},
  	{
  		H: 10.96,
  		name: "Sabrina",
  		desig: "1979 YK",
  		epoch: 2459200.5,
  		ma: 293.67136,
  		w: 78.97593,
  		om: 240.20378,
  		i: 0.15892,
  		e: 0.1778936,
  		a: 3.1236679
  	},
  	{
  		H: 10.78,
  		name: "Tchaikovsky",
  		desig: "1974 VK",
  		epoch: 2459200.5,
  		ma: 127.21148,
  		w: 205.45221,
  		om: 229.42887,
  		i: 13.24912,
  		e: 0.1814552,
  		a: 3.3982704
  	},
  	{
  		H: 10.9,
  		name: "Kevo",
  		desig: "1941 FS",
  		epoch: 2459200.5,
  		ma: 87.3619,
  		w: 296.09447,
  		om: 169.48231,
  		i: 24.49789,
  		e: 0.0649255,
  		a: 3.0422493
  	},
  	{
  		H: 10.43,
  		name: "El Leoncito",
  		desig: "1974 TA1",
  		epoch: 2459200.5,
  		ma: 279.53916,
  		w: 187.92923,
  		om: 156.6597,
  		i: 6.61897,
  		e: 0.04205,
  		a: 3.6360523
  	},
  	{
  		H: 10.83,
  		name: "Czechoslovakia",
  		desig: "1980 DZ",
  		epoch: 2459200.5,
  		ma: 47.93458,
  		w: 14.05203,
  		om: 30.09328,
  		i: 10.702,
  		e: 0.107638,
  		a: 3.01113
  	},
  	{
  		H: 10.62,
  		name: "Blarney",
  		desig: "1979 QJ",
  		epoch: 2459200.5,
  		ma: 111.95145,
  		w: 261.0071,
  		om: 118.084,
  		i: 11.49098,
  		e: 0.1328934,
  		a: 3.1669234
  	},
  	{
  		H: 10.97,
  		name: "Tololo",
  		desig: "1965 QC",
  		epoch: 2459200.5,
  		ma: 98.23826,
  		w: 259.53229,
  		om: 155.81089,
  		i: 15.14847,
  		e: 0.1587298,
  		a: 2.8606274
  	},
  	{
  		H: 10.9,
  		name: "Fucik",
  		desig: "1974 OS",
  		epoch: 2459200.5,
  		ma: 189.85349,
  		w: 135.41178,
  		om: 303.85804,
  		i: 9.15455,
  		e: 0.0763561,
  		a: 3.0167767
  	},
  	{
  		H: 10.9,
  		name: "Hirons",
  		desig: "1979 UJ",
  		epoch: 2459200.5,
  		ma: 252.47791,
  		w: 356.30074,
  		om: 189.0754,
  		i: 15.59741,
  		e: 0.0395318,
  		a: 3.2350171
  	},
  	{
  		H: 10.6,
  		name: "Radek",
  		desig: "1975 AA",
  		epoch: 2459200.5,
  		ma: 316.21605,
  		w: 101.69044,
  		om: 110.70287,
  		i: 14.97861,
  		e: 0.2098539,
  		a: 3.1820953
  	},
  	{
  		H: 10.94,
  		name: "Martynov",
  		desig: "1977 QG3",
  		epoch: 2459200.5,
  		ma: 173.17839,
  		w: 300.82144,
  		om: 61.17591,
  		i: 3.83767,
  		e: 0.1180892,
  		a: 3.202523
  	},
  	{
  		H: 10.75,
  		name: "Suzuki",
  		desig: "1955 WB",
  		epoch: 2459200.5,
  		ma: 149.75904,
  		w: 114.0543,
  		om: 223.94737,
  		i: 10.28414,
  		e: 0.1924083,
  		a: 3.2272482
  	},
  	{
  		H: 10.98,
  		name: "Haug",
  		desig: "1973 DH",
  		epoch: 2459200.5,
  		ma: 351.86111,
  		w: 9.80509,
  		om: 342.10027,
  		i: 2.47393,
  		e: 0.2207355,
  		a: 2.9222111
  	},
  	{
  		H: 10.84,
  		name: "Nininger",
  		desig: "1979 UD",
  		epoch: 2459200.5,
  		ma: 64.82236,
  		w: 282.51943,
  		om: 77.41775,
  		i: 10.2072,
  		e: 0.0430958,
  		a: 3.2352569
  	},
  	{
  		H: 10.35,
  		name: "Tomeileen",
  		desig: "A906 BJ",
  		epoch: 2459200.5,
  		ma: 327.1886,
  		w: 68.41461,
  		om: 118.75202,
  		i: 11.44429,
  		e: 0.0575081,
  		a: 3.0065254
  	},
  	{
  		H: 10.93,
  		name: "Sholokhov",
  		desig: "1975 BU",
  		epoch: 2459200.5,
  		ma: 244.26818,
  		w: 72.51159,
  		om: 131.08487,
  		i: 17.687,
  		e: 0.1169305,
  		a: 2.791533
  	},
  	{
  		H: 10.84,
  		name: "Inge",
  		desig: "1981 LF",
  		epoch: 2459200.5,
  		ma: 292.52094,
  		w: 95.20748,
  		om: 283.24603,
  		i: 11.53424,
  		e: 0.0646725,
  		a: 3.1659155
  	},
  	{
  		H: 10.57,
  		name: "Harimaya-Bashi",
  		desig: "1981 SA",
  		epoch: 2459200.5,
  		ma: 55.09756,
  		w: 234.02485,
  		om: 56.2257,
  		i: 18.12296,
  		e: 0.0643717,
  		a: 3.20065
  	},
  	{
  		H: 10.55,
  		name: "Jiangxi",
  		desig: "1975 WO1",
  		epoch: 2459200.5,
  		ma: 8.37698,
  		w: 350.08848,
  		om: 73.23895,
  		i: 12.96417,
  		e: 0.2374078,
  		a: 3.1535319
  	},
  	{
  		H: 10.65,
  		name: "James Bradley",
  		desig: "1982 DL",
  		epoch: 2459200.5,
  		ma: 45.86117,
  		w: 333.25077,
  		om: 133.3467,
  		i: 6.42145,
  		e: 0.0487754,
  		a: 3.4597389
  	},
  	{
  		H: 10.67,
  		name: "Albina",
  		desig: "1969 TC3",
  		epoch: 2459200.5,
  		ma: 191.36188,
  		w: 131.19782,
  		om: 270.95629,
  		i: 3.5824,
  		e: 0.0792968,
  		a: 3.557285
  	},
  	{
  		H: 10.91,
  		name: "David Bender",
  		desig: "1978 VG3",
  		epoch: 2459200.5,
  		ma: 328.58966,
  		w: 28.45817,
  		om: 61.52698,
  		i: 15.55716,
  		e: 0.1518718,
  		a: 3.0328661
  	},
  	{
  		H: 10.97,
  		name: "Cucula",
  		desig: "1982 KJ",
  		epoch: 2459200.5,
  		ma: 247.01829,
  		w: 133.22111,
  		om: 150.65619,
  		i: 13.35082,
  		e: 0.1892587,
  		a: 3.1897978
  	},
  	{
  		H: 10.92,
  		name: "Bobhope",
  		desig: "1948 PK",
  		epoch: 2459200.5,
  		ma: 130.07978,
  		w: 339.53919,
  		om: 323.93243,
  		i: 14.29653,
  		e: 0.1875675,
  		a: 3.0902489
  	},
  	{
  		H: 10.38,
  		name: "Filipenko",
  		desig: "1983 AX2",
  		epoch: 2459200.5,
  		ma: 304.20587,
  		w: 94.08925,
  		om: 325.82127,
  		i: 17.01295,
  		e: 0.2030986,
  		a: 3.1730136
  	},
  	{
  		H: 10.24,
  		name: "Caltech",
  		desig: "1983 AE2",
  		epoch: 2459200.5,
  		ma: 353.10281,
  		w: 296.75272,
  		om: 84.40726,
  		i: 30.68318,
  		e: 0.1036951,
  		a: 3.1654203
  	},
  	{
  		H: 10.31,
  		name: "Perepadin",
  		desig: "1977 RB8",
  		epoch: 2459200.5,
  		ma: 172.06734,
  		w: 121.10137,
  		om: 24.4742,
  		i: 14.7431,
  		e: 0.1157177,
  		a: 3.1364923
  	},
  	{
  		H: 10.94,
  		name: "Tatsuo",
  		desig: "1934 CB1",
  		epoch: 2459200.5,
  		ma: 359.68866,
  		w: 61.17037,
  		om: 249.37907,
  		i: 8.7042,
  		e: 0.0936342,
  		a: 3.0229594
  	},
  	{
  		H: 10.96,
  		name: "Lautaro",
  		desig: "1974 HR",
  		epoch: 2459200.5,
  		ma: 10.21882,
  		w: 187.89682,
  		om: 206.71913,
  		i: 9.8337,
  		e: 0.145339,
  		a: 3.3377026
  	},
  	{
  		H: 10.91,
  		name: "Hainan",
  		desig: "1981 UW9",
  		epoch: 2459200.5,
  		ma: 90.20403,
  		w: 341.53051,
  		om: 27.39733,
  		i: 14.84137,
  		e: 0.1307108,
  		a: 3.4146717
  	},
  	{
  		H: 10.47,
  		name: "Higson",
  		desig: "1982 QR",
  		epoch: 2459200.5,
  		ma: 202.35234,
  		w: 113.87692,
  		om: 293.41044,
  		i: 21.02274,
  		e: 0.0861328,
  		a: 3.1972548
  	},
  	{
  		H: 10.78,
  		name: "Zhangguoxi",
  		desig: "1978 TA2",
  		epoch: 2459200.5,
  		ma: 220.28486,
  		w: 5.38606,
  		om: 189.45692,
  		i: 9.51258,
  		e: 0.0312973,
  		a: 3.0177716
  	},
  	{
  		H: 10.53,
  		name: "Krat",
  		desig: "1937 TO",
  		epoch: 2459200.5,
  		ma: 188.22707,
  		w: 319.80066,
  		om: 23.67875,
  		i: 22.88546,
  		e: 0.1003608,
  		a: 3.2099505
  	},
  	{
  		H: 10.91,
  		name: "Wren",
  		desig: "1982 XC",
  		epoch: 2459200.5,
  		ma: 134.50374,
  		w: 272.59851,
  		om: 110.19245,
  		i: 11.32058,
  		e: 0.1145634,
  		a: 3.0186643
  	},
  	{
  		H: 10.77,
  		name: "Durer",
  		desig: "1982 BB1",
  		epoch: 2459200.5,
  		ma: 304.24193,
  		w: 243.15249,
  		om: 162.03832,
  		i: 24.18328,
  		e: 0.0866279,
  		a: 2.9645599
  	},
  	{
  		H: 10.91,
  		name: "Shantou",
  		desig: "1980 VL1",
  		epoch: 2459200.5,
  		ma: 52.7491,
  		w: 115.90916,
  		om: 252.76531,
  		i: 20.57225,
  		e: 0.0215716,
  		a: 3.1933091
  	},
  	{
  		H: 10.93,
  		name: "Buchar",
  		desig: "1984 RH",
  		epoch: 2459200.5,
  		ma: 166.01487,
  		w: 153.97725,
  		om: 321.06408,
  		i: 11.00196,
  		e: 0.0741301,
  		a: 3.4057918
  	},
  	{
  		H: 10.94,
  		name: "Lupishko",
  		desig: "1983 WH1",
  		epoch: 2459200.5,
  		ma: 191.76872,
  		w: 26.52249,
  		om: 127.98478,
  		i: 13.63777,
  		e: 0.0529797,
  		a: 3.1112849
  	},
  	{
  		H: 10.66,
  		name: "Victorplatt",
  		desig: "1984 SA5",
  		epoch: 2459200.5,
  		ma: 93.25088,
  		w: 337.69249,
  		om: 280.26522,
  		i: 9.11694,
  		e: 0.0670385,
  		a: 3.0124216
  	},
  	{
  		H: 10.93,
  		name: "Farinella",
  		desig: "1982 FK",
  		epoch: 2459200.5,
  		ma: 149.46271,
  		w: 317.03481,
  		om: 12.05195,
  		i: 10.89787,
  		e: 0.1517291,
  		a: 3.2055741
  	},
  	{
  		H: 10.25,
  		name: "Brownlee",
  		desig: "1984 SZ4",
  		epoch: 2459200.5,
  		ma: 351.02832,
  		w: 314.60244,
  		om: 242.4869,
  		i: 15.47926,
  		e: 0.1227477,
  		a: 3.1659524
  	},
  	{
  		H: 10.53,
  		name: "McGlasson",
  		desig: "1928 NA",
  		epoch: 2459200.5,
  		ma: 137.11125,
  		w: 263.55434,
  		om: 27.27225,
  		i: 18.74054,
  		e: 0.202465,
  		a: 3.1664615
  	},
  	{
  		H: 10.85,
  		name: "Patsy",
  		desig: "1931 TS2",
  		epoch: 2459200.5,
  		ma: 163.95354,
  		w: 133.66294,
  		om: 101.36766,
  		i: 11.0988,
  		e: 0.0601688,
  		a: 3.0073894
  	},
  	{
  		H: 10.94,
  		name: "Gerla",
  		desig: "1951 SD",
  		epoch: 2459200.5,
  		ma: 59.99027,
  		w: 21.30712,
  		om: 2.63872,
  		i: 21.47591,
  		e: 0.0465294,
  		a: 3.1861836
  	},
  	{
  		H: 10.75,
  		name: "Nakano",
  		desig: "1984 QC",
  		epoch: 2459200.5,
  		ma: 225.18869,
  		w: 45.52471,
  		om: 312.3408,
  		i: 12.28163,
  		e: 0.0480879,
  		a: 3.0925605
  	},
  	{
  		H: 10.42,
  		name: "Carestia",
  		desig: "1977 CC",
  		epoch: 2459200.5,
  		ma: 65.84835,
  		w: 47.99591,
  		om: 284.54845,
  		i: 21.32373,
  		e: 0.2045039,
  		a: 3.2140604
  	},
  	{
  		H: 10.72,
  		name: "Tumilty",
  		desig: "1983 AE1",
  		epoch: 2459200.5,
  		ma: 41.07486,
  		w: 311.64921,
  		om: 287.17121,
  		i: 16.71742,
  		e: 0.129436,
  		a: 2.9834622
  	},
  	{
  		H: 10.87,
  		name: "Hancock",
  		desig: "1984 DH1",
  		epoch: 2459200.5,
  		ma: 93.19159,
  		w: 254.31172,
  		om: 264.26245,
  		i: 21.56587,
  		e: 0.1153433,
  		a: 3.2289131
  	},
  	{
  		H: 10.58,
  		name: "Kathleen",
  		desig: "1931 FM",
  		epoch: 2459200.5,
  		ma: 333.26102,
  		w: 55.35518,
  		om: 110.48314,
  		i: 8.45301,
  		e: 0.107255,
  		a: 3.1604399
  	},
  	{
  		H: 10.94,
  		name: "Vartiovuori",
  		desig: "1938 GG",
  		epoch: 2459200.5,
  		ma: 182.65333,
  		w: 160.00364,
  		om: 39.5978,
  		i: 27.392,
  		e: 0.067246,
  		a: 3.1823511
  	},
  	{
  		H: 10.64,
  		name: "Chao",
  		desig: "1987 KE1",
  		epoch: 2459200.5,
  		ma: 150.13676,
  		w: 208.46385,
  		om: 149.12487,
  		i: 26.05107,
  		e: 0.0696782,
  		a: 2.934059
  	},
  	{
  		H: 10.96,
  		name: "Shikoku",
  		desig: "1988 JM",
  		epoch: 2459200.5,
  		ma: 337.61771,
  		w: 82.90717,
  		om: 269.19176,
  		i: 9.24162,
  		e: 0.10747,
  		a: 3.0088018
  	},
  	{
  		H: 10.99,
  		name: "Bihoro",
  		desig: "1990 DS",
  		epoch: 2459200.5,
  		ma: 211.43985,
  		w: 30.85603,
  		om: 326.34077,
  		i: 27.05671,
  		e: 0.1839579,
  		a: 2.9210111
  	},
  	{
  		H: 10.98,
  		name: "Niinoama",
  		desig: "1991 PA1",
  		epoch: 2459200.5,
  		ma: 344.08815,
  		w: 317.8008,
  		om: 128.70803,
  		i: 8.99802,
  		e: 0.0099347,
  		a: 3.1479738
  	},
  	{
  		H: 10.83,
  		name: "Yabuki",
  		desig: "1991 CC",
  		epoch: 2459200.5,
  		ma: 185.6187,
  		w: 300.75293,
  		om: 91.1215,
  		i: 14.91991,
  		e: 0.0874395,
  		a: 3.1893731
  	},
  	{
  		H: 10.99,
  		name: "Susono",
  		desig: "1993 XX",
  		epoch: 2459200.5,
  		ma: 37.14366,
  		w: 75.42922,
  		om: 274.52032,
  		i: 11.38249,
  		e: 0.0774224,
  		a: 3.130032
  	},
  	{
  		H: 10.8,
  		desig: "1999 XR13",
  		epoch: 2459200.5,
  		ma: 355.40308,
  		w: 127.42001,
  		om: 85.22149,
  		i: 16.30093,
  		e: 0.1124743,
  		a: 3.3656287
  	},
  	{
  		H: 10.98,
  		desig: "1999 JZ78",
  		epoch: 2459200.5,
  		ma: 49.96141,
  		w: 26.40688,
  		om: 90.73445,
  		i: 19.65101,
  		e: 0.1548078,
  		a: 3.1210957
  	},
  	{
  		H: 11,
  		desig: "1927 LA",
  		epoch: 2425067.5,
  		ma: 48.29,
  		w: 341.03399,
  		om: 191.72427,
  		i: 17.63374,
  		e: 0.3341,
  		a: 3.3451
  	}
  ];

  var neo1km_data = [
  	{
  		H: 10.42,
  		name: "Eros",
  		desig: "A898 PA",
  		epoch: 2459200.5,
  		ma: 23.04175,
  		w: 178.86894,
  		om: 304.29913,
  		i: 10.83052,
  		e: 0.2229939,
  		a: 1.4581672
  	},
  	{
  		H: 15.51,
  		name: "Albert",
  		desig: "A911 TB",
  		epoch: 2459200.5,
  		ma: 186.24308,
  		w: 156.19119,
  		om: 183.85835,
  		i: 11.5704,
  		e: 0.5467207,
  		a: 2.6383776
  	},
  	{
  		H: 13.84,
  		name: "Alinda",
  		desig: "A918 AA",
  		epoch: 2459200.5,
  		ma: 345.24376,
  		w: 350.51254,
  		om: 110.4337,
  		i: 9.39385,
  		e: 0.5704224,
  		a: 2.4735338
  	},
  	{
  		H: 9.25,
  		name: "Ganymed",
  		desig: "A924 UB",
  		epoch: 2459200.5,
  		ma: 50.11796,
  		w: 132.37855,
  		om: 215.54419,
  		i: 26.67615,
  		e: 0.5330949,
  		a: 2.6651935
  	},
  	{
  		H: 17.39,
  		name: "Amor",
  		desig: "1932 EA1",
  		epoch: 2459200.5,
  		ma: 112.66486,
  		w: 26.67763,
  		om: 171.31644,
  		i: 11.88045,
  		e: 0.4354879,
  		a: 1.9191655
  	},
  	{
  		H: 14.69,
  		name: "Betulia",
  		desig: "1950 KA",
  		epoch: 2459200.5,
  		ma: 255.59474,
  		w: 159.51344,
  		om: 62.29833,
  		i: 52.08397,
  		e: 0.4872287,
  		a: 2.1973407
  	},
  	{
  		H: 12.67,
  		name: "Ivar",
  		desig: "1929 SH",
  		epoch: 2459200.5,
  		ma: 334.00645,
  		w: 167.80541,
  		om: 133.11979,
  		i: 8.45203,
  		e: 0.3968367,
  		a: 1.863156
  	},
  	{
  		H: 14.3,
  		name: "Toro",
  		desig: "1948 OA",
  		epoch: 2459200.5,
  		ma: 53.50199,
  		w: 127.22147,
  		om: 274.24143,
  		i: 9.3826,
  		e: 0.4358526,
  		a: 1.3675683
  	},
  	{
  		H: 15.4,
  		name: "Antinous",
  		desig: "1948 EA",
  		epoch: 2459200.5,
  		ma: 127.88646,
  		w: 268.08269,
  		om: 346.43413,
  		i: 18.39926,
  		e: 0.6063724,
  		a: 2.2586458
  	},
  	{
  		H: 14.72,
  		name: "Daedalus",
  		desig: "1971 FA",
  		epoch: 2459200.5,
  		ma: 332.86842,
  		w: 325.63861,
  		om: 6.62088,
  		i: 22.21381,
  		e: 0.614533,
  		a: 1.4608678
  	},
  	{
  		H: 16.73,
  		name: "Cerberus",
  		desig: "1971 UA",
  		epoch: 2459200.5,
  		ma: 178.9425,
  		w: 325.2558,
  		om: 212.91055,
  		i: 16.09662,
  		e: 0.4669326,
  		a: 1.0799918
  	},
  	{
  		H: 12.44,
  		name: "Sisyphus",
  		desig: "1972 XA",
  		epoch: 2459200.5,
  		ma: 179.83056,
  		w: 293.06687,
  		om: 63.48155,
  		i: 41.20017,
  		e: 0.538194,
  		a: 1.8935691
  	},
  	{
  		H: 14.87,
  		name: "Boreas",
  		desig: "1953 RA",
  		epoch: 2459200.5,
  		ma: 237.1917,
  		w: 335.8842,
  		om: 340.59705,
  		i: 12.88192,
  		e: 0.4497385,
  		a: 2.2728535
  	},
  	{
  		H: 14.32,
  		name: "Cuyo",
  		desig: "1968 AA",
  		epoch: 2459200.5,
  		ma: 317.20839,
  		w: 194.49315,
  		om: 188.2952,
  		i: 23.95733,
  		e: 0.5054608,
  		a: 2.1495115
  	},
  	{
  		H: 15.64,
  		name: "Anteros",
  		desig: "1973 EC",
  		epoch: 2459200.5,
  		ma: 303.44844,
  		w: 338.36914,
  		om: 246.32829,
  		i: 8.70553,
  		e: 0.2559038,
  		a: 1.4305581
  	},
  	{
  		H: 13.81,
  		name: "Tezcatlipoca",
  		desig: "1950 LA",
  		epoch: 2459200.5,
  		ma: 137.7723,
  		w: 115.45123,
  		om: 246.56821,
  		i: 26.86616,
  		e: 0.3646327,
  		a: 1.7096062
  	},
  	{
  		H: 15.97,
  		name: "Baboquivari",
  		desig: "1963 UA",
  		epoch: 2459200.5,
  		ma: 90.18055,
  		w: 192.42737,
  		om: 200.68752,
  		i: 11.01513,
  		e: 0.5310209,
  		a: 2.6439682
  	},
  	{
  		H: 16.34,
  		name: "Anza",
  		desig: "1960 UA",
  		epoch: 2459200.5,
  		ma: 238.40961,
  		w: 157.03063,
  		om: 207.37649,
  		i: 3.79985,
  		e: 0.535927,
  		a: 2.2640747
  	},
  	{
  		H: 17.1,
  		name: "Aten",
  		desig: "1976 AA",
  		epoch: 2459200.5,
  		ma: 326.83023,
  		w: 148.01031,
  		om: 108.55058,
  		i: 18.93354,
  		e: 0.1827229,
  		a: 0.966754
  	},
  	{
  		H: 17.25,
  		name: "Bacchus",
  		desig: "1977 HB",
  		epoch: 2459200.5,
  		ma: 89.83444,
  		w: 55.3623,
  		om: 33.08179,
  		i: 9.43122,
  		e: 0.3495127,
  		a: 1.0780685
  	},
  	{
  		H: 16.24,
  		name: "Ra-Shalom",
  		desig: "1978 RA",
  		epoch: 2459200.5,
  		ma: 71.49057,
  		w: 356.05763,
  		om: 170.79942,
  		i: 15.7529,
  		e: 0.4365562,
  		a: 0.8320378
  	},
  	{
  		H: 17.11,
  		name: "Pele",
  		desig: "1972 RA",
  		epoch: 2459200.5,
  		ma: 318.04712,
  		w: 217.89291,
  		om: 169.93492,
  		i: 8.74237,
  		e: 0.5125344,
  		a: 2.2909028
  	},
  	{
  		H: 13.33,
  		name: "Hephaistos",
  		desig: "1978 SB",
  		epoch: 2459200.5,
  		ma: 111.03465,
  		w: 209.4021,
  		om: 27.52792,
  		i: 11.54908,
  		e: 0.8375831,
  		a: 2.159239
  	},
  	{
  		H: 14.47,
  		name: "Orthos",
  		desig: "1976 WA",
  		epoch: 2459200.5,
  		ma: 317.06102,
  		w: 146.05275,
  		om: 169.27613,
  		i: 24.47455,
  		e: 0.6540961,
  		a: 2.4089009
  	},
  	{
  		H: 15.09,
  		name: "Beltrovata",
  		desig: "1977 RA",
  		epoch: 2459200.5,
  		ma: 66.96427,
  		w: 43.02135,
  		om: 287.33805,
  		i: 5.22359,
  		e: 0.4133394,
  		a: 2.1052346
  	},
  	{
  		H: 17.48,
  		name: "Seneca",
  		desig: "1978 DA",
  		epoch: 2459200.5,
  		ma: 289.51983,
  		w: 37.37671,
  		om: 167.33794,
  		i: 14.67174,
  		e: 0.5708204,
  		a: 2.5166741
  	},
  	{
  		H: 16.15,
  		name: "Krok",
  		desig: "1981 QA",
  		epoch: 2459200.5,
  		ma: 164.33562,
  		w: 154.76101,
  		om: 172.05609,
  		i: 8.44265,
  		e: 0.4493719,
  		a: 2.1512236
  	},
  	{
  		H: 15.19,
  		name: "Eger",
  		desig: "1982 BB",
  		epoch: 2459200.5,
  		ma: 194.75953,
  		w: 254.07364,
  		om: 129.75261,
  		i: 20.93109,
  		e: 0.3542292,
  		a: 1.4041448
  	},
  	{
  		H: 14.82,
  		name: "Nefertiti",
  		desig: "1982 RA",
  		epoch: 2459200.5,
  		ma: 100.54863,
  		w: 53.42706,
  		om: 339.98978,
  		i: 32.96319,
  		e: 0.2840554,
  		a: 1.5745961
  	},
  	{
  		H: 16.55,
  		name: "Ul",
  		desig: "1982 RB",
  		epoch: 2459200.5,
  		ma: 211.57421,
  		w: 159.09374,
  		om: 158.8131,
  		i: 25.07349,
  		e: 0.3959258,
  		a: 2.1016454
  	},
  	{
  		H: 15.26,
  		name: "Seleucus",
  		desig: "1982 DV",
  		epoch: 2459200.5,
  		ma: 125.13334,
  		w: 349.31948,
  		om: 218.62668,
  		i: 5.93087,
  		e: 0.4562372,
  		a: 2.0326266
  	},
  	{
  		H: 15.82,
  		name: "McAuliffe",
  		desig: "1981 CW",
  		epoch: 2459200.5,
  		ma: 172.22276,
  		w: 15.98509,
  		om: 107.36214,
  		i: 4.7728,
  		e: 0.3688904,
  		a: 1.8798296
  	},
  	{
  		H: 15.94,
  		name: "Syrinx",
  		desig: "1981 VA",
  		epoch: 2459200.5,
  		ma: 53.50143,
  		w: 63.46961,
  		om: 242.55271,
  		i: 21.16037,
  		e: 0.7460926,
  		a: 2.4657156
  	},
  	{
  		H: 16.64,
  		name: "Verenia",
  		desig: "1983 RD",
  		epoch: 2459200.5,
  		ma: 107.29212,
  		w: 193.25941,
  		om: 173.78188,
  		i: 9.508,
  		e: 0.4869353,
  		a: 2.0930336
  	},
  	{
  		H: 12.96,
  		name: "Don Quixote",
  		desig: "1983 SA",
  		epoch: 2459200.5,
  		ma: 106.90142,
  		w: 316.53176,
  		om: 349.94463,
  		i: 31.08886,
  		e: 0.7089003,
  		a: 4.2615786
  	},
  	{
  		H: 16.4,
  		name: "Mera",
  		desig: "1985 JA",
  		epoch: 2459200.5,
  		ma: 355.41166,
  		w: 288.86087,
  		om: 232.52681,
  		i: 36.76861,
  		e: 0.3201506,
  		a: 1.6446471
  	},
  	{
  		H: 15.82,
  		name: "Amun",
  		desig: "1986 EB",
  		epoch: 2459200.5,
  		ma: 231.11088,
  		w: 359.40542,
  		om: 358.60888,
  		i: 23.35744,
  		e: 0.2806172,
  		a: 0.9739595
  	},
  	{
  		H: 14.77,
  		name: "Bede",
  		desig: "1982 FT",
  		epoch: 2459200.5,
  		ma: 121.41309,
  		w: 234.93487,
  		om: 348.74345,
  		i: 20.3613,
  		e: 0.2842542,
  		a: 1.7741716
  	},
  	{
  		H: 15.23,
  		name: "Camillo",
  		desig: "1985 PA",
  		epoch: 2459200.5,
  		ma: 267.72071,
  		w: 312.23209,
  		om: 147.96254,
  		i: 55.56404,
  		e: 0.3015873,
  		a: 1.413576
  	},
  	{
  		H: 15.57,
  		name: "Cruithne",
  		desig: "1986 TO",
  		epoch: 2459200.5,
  		ma: 4.28262,
  		w: 43.83466,
  		om: 126.22442,
  		i: 19.80635,
  		e: 0.5148738,
  		a: 0.9977198
  	},
  	{
  		H: 15.58,
  		name: "Epona",
  		desig: "1986 WA",
  		epoch: 2459200.5,
  		ma: 198.36036,
  		w: 49.70769,
  		om: 235.49477,
  		i: 29.2029,
  		e: 0.7024587,
  		a: 1.5050365
  	},
  	{
  		H: 17.35,
  		name: "Nyx",
  		desig: "1980 PA",
  		epoch: 2459200.5,
  		ma: 10.19649,
  		w: 126.57014,
  		om: 261.24576,
  		i: 2.18537,
  		e: 0.4589289,
  		a: 1.9277555
  	},
  	{
  		H: 17.8,
  		name: "Huma",
  		desig: "1986 LA",
  		epoch: 2459200.5,
  		ma: 317.47,
  		w: 86.91109,
  		om: 229.80998,
  		i: 10.76771,
  		e: 0.3167305,
  		a: 1.5443991
  	},
  	{
  		H: 14.71,
  		name: "Magellan",
  		desig: "1985 DO2",
  		epoch: 2459200.5,
  		ma: 65.47361,
  		w: 154.36887,
  		om: 164.82789,
  		i: 23.25459,
  		e: 0.3262169,
  		a: 1.8201787
  	},
  	{
  		H: 14.91,
  		name: "Morpheus",
  		desig: "1982 TA",
  		epoch: 2459200.5,
  		ma: 319.96644,
  		w: 122.55036,
  		om: 7.02465,
  		i: 12.60154,
  		e: 0.772626,
  		a: 2.294684
  	},
  	{
  		H: 15.87,
  		name: "Ubasti",
  		desig: "1987 QA",
  		epoch: 2459200.5,
  		ma: 228.21422,
  		w: 278.94055,
  		om: 169.17098,
  		i: 40.71484,
  		e: 0.468224,
  		a: 1.6472625
  	},
  	{
  		H: 15.92,
  		name: "Poseidon",
  		desig: "1987 KF",
  		epoch: 2459200.5,
  		ma: 208.64742,
  		w: 15.73835,
  		om: 108.08997,
  		i: 11.84677,
  		e: 0.6798487,
  		a: 1.8358013
  	},
  	{
  		H: 16,
  		name: "Aditi",
  		desig: "1985 TB",
  		epoch: 2459200.5,
  		ma: 160.99504,
  		w: 68.17001,
  		om: 22.8635,
  		i: 26.6299,
  		e: 0.5641079,
  		a: 2.5810014
  	},
  	{
  		H: 17.3,
  		name: "Pocahontas",
  		desig: "1987 UA",
  		epoch: 2459200.5,
  		ma: 209.68324,
  		w: 173.96227,
  		om: 198.11554,
  		i: 16.40614,
  		e: 0.2965841,
  		a: 1.7302399
  	},
  	{
  		H: 15.77,
  		name: "Cleobulus",
  		desig: "1989 WM",
  		epoch: 2459200.5,
  		ma: 337.33136,
  		w: 76.31027,
  		om: 45.95792,
  		i: 2.5129,
  		e: 0.5241948,
  		a: 2.7049446
  	},
  	{
  		H: 17.16,
  		name: "Xanthus",
  		desig: "1989 FB",
  		epoch: 2459200.5,
  		ma: 137.06083,
  		w: 333.85048,
  		om: 23.98048,
  		i: 14.14496,
  		e: 0.2501086,
  		a: 1.0420276
  	},
  	{
  		H: 16.34,
  		desig: "1981 QB",
  		epoch: 2459200.5,
  		ma: 238.52228,
  		w: 248.39116,
  		om: 154.22947,
  		i: 37.07698,
  		e: 0.5199849,
  		a: 2.2387768
  	},
  	{
  		H: 18.01,
  		name: "Ninkasi",
  		desig: "1988 TJ1",
  		epoch: 2459200.5,
  		ma: 4.13457,
  		w: 192.93838,
  		om: 215.43759,
  		i: 15.65109,
  		e: 0.1683607,
  		a: 1.3700663
  	},
  	{
  		H: 12.58,
  		name: "Eric",
  		desig: "1990 SQ",
  		epoch: 2459200.5,
  		ma: 220.6304,
  		w: 52.57926,
  		om: 358.4397,
  		i: 17.42883,
  		e: 0.4493199,
  		a: 2.0009578
  	},
  	{
  		H: 14.86,
  		name: "Brucemurray",
  		desig: "1990 XJ",
  		epoch: 2459200.5,
  		ma: 165.99017,
  		w: 97.4692,
  		om: 254.89687,
  		i: 35.00931,
  		e: 0.2188515,
  		a: 1.5655049
  	},
  	{
  		H: 14.81,
  		desig: "1990 BG",
  		epoch: 2459200.5,
  		ma: 316.39691,
  		w: 135.84658,
  		om: 110.37551,
  		i: 36.42995,
  		e: 0.5690803,
  		a: 1.486144
  	},
  	{
  		H: 13.94,
  		name: "Heracles",
  		desig: "1991 VL",
  		epoch: 2459200.5,
  		ma: 210.17168,
  		w: 227.77644,
  		om: 309.49488,
  		i: 9.031,
  		e: 0.7723121,
  		a: 1.8331612
  	},
  	{
  		H: 15.5,
  		name: "Lyapunov",
  		desig: "1987 SL",
  		epoch: 2459200.5,
  		ma: 194.37852,
  		w: 321.08172,
  		om: 352.25783,
  		i: 19.61101,
  		e: 0.6048472,
  		a: 2.9861435
  	},
  	{
  		H: 14.77,
  		name: "Davidaguilar",
  		desig: "1990 DA",
  		epoch: 2459200.5,
  		ma: 266.07439,
  		w: 306.01617,
  		om: 142.78874,
  		i: 25.51383,
  		e: 0.4552004,
  		a: 2.1649121
  	},
  	{
  		H: 15.1,
  		name: "Taranis",
  		desig: "1986 RA",
  		epoch: 2459200.5,
  		ma: 222.88672,
  		w: 161.28038,
  		om: 177.79968,
  		i: 19.15708,
  		e: 0.6368406,
  		a: 3.3246182
  	},
  	{
  		H: 16.6,
  		name: "Sekhmet",
  		desig: "1991 JY",
  		epoch: 2459200.5,
  		ma: 142.94291,
  		w: 37.42768,
  		om: 58.53834,
  		i: 48.96595,
  		e: 0.2963379,
  		a: 0.947483
  	},
  	{
  		H: 16,
  		desig: "1973 NA",
  		epoch: 2459200.5,
  		ma: 192.24383,
  		w: 118.02829,
  		om: 101.03598,
  		i: 68.01665,
  		e: 0.6355519,
  		a: 2.4350048
  	},
  	{
  		H: 13.82,
  		desig: "1990 SB",
  		epoch: 2459200.5,
  		ma: 92.4005,
  		w: 86.78991,
  		om: 189.94858,
  		i: 18.09613,
  		e: 0.5447296,
  		a: 2.3966348
  	},
  	{
  		H: 17.04,
  		name: "Jasonwheeler",
  		desig: "1990 OA",
  		epoch: 2459200.5,
  		ma: 217.10159,
  		w: 153.80157,
  		om: 128.67794,
  		i: 7.87227,
  		e: 0.4223424,
  		a: 2.1598427
  	},
  	{
  		H: 14.24,
  		name: "Melissabrucker",
  		desig: "1991 FE",
  		epoch: 2459200.5,
  		ma: 135.58049,
  		w: 231.86228,
  		om: 173.09888,
  		i: 3.849,
  		e: 0.4544967,
  		a: 2.1943019
  	},
  	{
  		H: 17.22,
  		desig: "1990 SP",
  		epoch: 2459200.5,
  		ma: 9.23553,
  		w: 48.27366,
  		om: 45.72869,
  		i: 13.50525,
  		e: 0.3873848,
  		a: 1.3545986
  	},
  	{
  		H: 15.35,
  		desig: "1990 TR",
  		epoch: 2459200.5,
  		ma: 235.28054,
  		w: 335.73836,
  		om: 14.10505,
  		i: 7.90755,
  		e: 0.4360845,
  		a: 2.1431663
  	},
  	{
  		H: 16.17,
  		name: "Camarillo",
  		desig: "1992 WD5",
  		epoch: 2459200.5,
  		ma: 209.71363,
  		w: 122.64333,
  		om: 9.90044,
  		i: 6.87492,
  		e: 0.3044029,
  		a: 1.7944187
  	},
  	{
  		H: 15.49,
  		desig: "1974 MA",
  		epoch: 2459200.5,
  		ma: 139.63712,
  		w: 127.0278,
  		om: 302.15382,
  		i: 38.13204,
  		e: 0.7620476,
  		a: 1.7850665
  	},
  	{
  		H: 15.51,
  		name: "Zeus",
  		desig: "1988 VP4",
  		epoch: 2459200.5,
  		ma: 122.97305,
  		w: 217.14734,
  		om: 281.64211,
  		i: 11.4037,
  		e: 0.6534607,
  		a: 2.2665607
  	},
  	{
  		H: 14.75,
  		name: "Zao",
  		desig: "1992 AC",
  		epoch: 2459200.5,
  		ma: 161.62617,
  		w: 25.35587,
  		om: 121.66517,
  		i: 16.0773,
  		e: 0.4240185,
  		a: 2.1039016
  	},
  	{
  		H: 17.13,
  		name: "Talos",
  		desig: "1991 RC",
  		epoch: 2459200.5,
  		ma: 130.7007,
  		w: 8.3547,
  		om: 161.29874,
  		i: 23.23172,
  		e: 0.8268224,
  		a: 1.081488
  	},
  	{
  		H: 15.92,
  		desig: "1991 AM",
  		epoch: 2459200.5,
  		ma: 153.89081,
  		w: 152.77258,
  		om: 125.4258,
  		i: 30.12755,
  		e: 0.6950991,
  		a: 1.6979116
  	},
  	{
  		H: 14.92,
  		desig: "1993 MF",
  		epoch: 2459200.5,
  		ma: 57.8417,
  		w: 77.95056,
  		om: 238.78409,
  		i: 7.94928,
  		e: 0.5368968,
  		a: 2.439874
  	},
  	{
  		H: 15.76,
  		name: "Tara",
  		desig: "1983 RB",
  		epoch: 2459200.5,
  		ma: 110.50926,
  		w: 115.49487,
  		om: 168.90007,
  		i: 19.49204,
  		e: 0.5059236,
  		a: 2.2220451
  	},
  	{
  		H: 17.19,
  		name: "Tanith",
  		desig: "1988 VN4",
  		epoch: 2459200.5,
  		ma: 26.72041,
  		w: 230.87179,
  		om: 227.87754,
  		i: 17.92273,
  		e: 0.3215339,
  		a: 1.8121786
  	},
  	{
  		H: 17.7,
  		name: "Almeria",
  		desig: "1992 CH1",
  		epoch: 2459200.5,
  		ma: 336.79571,
  		w: 355.69647,
  		om: 145.84702,
  		i: 21.57966,
  		e: 0.2894985,
  		a: 1.6245658
  	},
  	{
  		H: 17.79,
  		desig: "1991 TB1",
  		epoch: 2459200.5,
  		ma: 175.83941,
  		w: 103.79455,
  		om: 6.09098,
  		i: 23.47102,
  		e: 0.3521877,
  		a: 1.4546192
  	},
  	{
  		H: 14.88,
  		name: "Miwablock",
  		desig: "1992 AE",
  		epoch: 2459200.5,
  		ma: 331.15334,
  		w: 284.9325,
  		om: 88.19458,
  		i: 6.40475,
  		e: 0.4370601,
  		a: 2.2024049
  	},
  	{
  		H: 14.89,
  		desig: "1993 BW3",
  		epoch: 2459200.5,
  		ma: 3.5533,
  		w: 74.8768,
  		om: 318.26152,
  		i: 21.58267,
  		e: 0.5281725,
  		a: 2.1473867
  	},
  	{
  		H: 15.9,
  		name: "Jason",
  		desig: "1984 KB",
  		epoch: 2459200.5,
  		ma: 42.92071,
  		w: 337.15472,
  		om: 169.38715,
  		i: 4.91858,
  		e: 0.7662382,
  		a: 2.2135144
  	},
  	{
  		H: 15.81,
  		desig: "1986 DA",
  		epoch: 2459200.5,
  		ma: 122.76936,
  		w: 127.33919,
  		om: 64.59591,
  		i: 4.30511,
  		e: 0.5821901,
  		a: 2.8196699
  	},
  	{
  		H: 13.94,
  		desig: "1992 HE",
  		epoch: 2459200.5,
  		ma: 178.61898,
  		w: 262.78224,
  		om: 26.9294,
  		i: 37.334,
  		e: 0.5724844,
  		a: 2.2411486
  	},
  	{
  		H: 15.95,
  		name: "Golombek",
  		desig: "1992 OM",
  		epoch: 2459200.5,
  		ma: 269.9498,
  		w: 347.15359,
  		om: 313.5804,
  		i: 8.22555,
  		e: 0.4093879,
  		a: 2.1926191
  	},
  	{
  		H: 16.68,
  		name: "Ondaatje",
  		desig: "1993 MO",
  		epoch: 2459200.5,
  		ma: 83.64318,
  		w: 167.29896,
  		om: 111.48038,
  		i: 22.64121,
  		e: 0.2208201,
  		a: 1.6259727
  	},
  	{
  		H: 16.8,
  		desig: "1993 VW",
  		epoch: 2459200.5,
  		ma: 50.57843,
  		w: 281.33664,
  		om: 230.94134,
  		i: 8.69648,
  		e: 0.4845852,
  		a: 1.6961469
  	},
  	{
  		H: 18.1,
  		desig: "1993 QA",
  		epoch: 2459200.5,
  		ma: 325.06811,
  		w: 323.47253,
  		om: 146.60857,
  		i: 12.61095,
  		e: 0.3151845,
  		a: 1.4757276
  	},
  	{
  		H: 16.84,
  		name: "Ishtar",
  		desig: "1992 AA",
  		epoch: 2459200.5,
  		ma: 137.03958,
  		w: 354.72386,
  		om: 102.6498,
  		i: 8.30437,
  		e: 0.3909974,
  		a: 1.9804614
  	},
  	{
  		H: 15.02,
  		name: "Cadmus",
  		desig: "1992 LC",
  		epoch: 2459200.5,
  		ma: 50.29474,
  		w: 93.83373,
  		om: 57.68849,
  		i: 17.80507,
  		e: 0.697544,
  		a: 2.5365415
  	},
  	{
  		H: 17.23,
  		desig: "1993 VA",
  		epoch: 2459200.5,
  		ma: 29.92397,
  		w: 336.65535,
  		om: 133.11193,
  		i: 7.2629,
  		e: 0.3913444,
  		a: 1.3560267
  	},
  	{
  		H: 14.68,
  		name: "Oze",
  		desig: "1995 YA3",
  		epoch: 2459200.5,
  		ma: 288.59777,
  		w: 92.2145,
  		om: 265.47805,
  		i: 4.66216,
  		e: 0.5023859,
  		a: 2.1980008
  	},
  	{
  		H: 17.96,
  		desig: "1992 TC",
  		epoch: 2459200.5,
  		ma: 145.19518,
  		w: 275.62043,
  		om: 88.62198,
  		i: 7.08798,
  		e: 0.2921502,
  		a: 1.5657064
  	},
  	{
  		H: 17.03,
  		name: "Norwan",
  		desig: "1994 PC",
  		epoch: 2459200.5,
  		ma: 115.28748,
  		w: 256.84521,
  		om: 124.37731,
  		i: 9.45392,
  		e: 0.3168948,
  		a: 1.5678561
  	},
  	{
  		H: 17.8,
  		desig: "1994 ND",
  		epoch: 2459200.5,
  		ma: 94.96658,
  		w: 228.28122,
  		om: 102.53949,
  		i: 27.11708,
  		e: 0.5186122,
  		a: 2.165707
  	},
  	{
  		H: 15.09,
  		desig: "1993 UC",
  		epoch: 2459200.5,
  		ma: 21.17744,
  		w: 323.03593,
  		om: 165.91029,
  		i: 26.08447,
  		e: 0.6641608,
  		a: 2.4356385
  	},
  	{
  		H: 15.15,
  		desig: "1994 LX",
  		epoch: 2459200.5,
  		ma: 83.2874,
  		w: 349.17263,
  		om: 111.27554,
  		i: 36.9123,
  		e: 0.3463299,
  		a: 1.2614181
  	},
  	{
  		H: 15.15,
  		desig: "1977 QQ5",
  		epoch: 2459200.5,
  		ma: 357.98562,
  		w: 248.03303,
  		om: 134.16177,
  		i: 25.16675,
  		e: 0.4659385,
  		a: 2.2261251
  	},
  	{
  		H: 17,
  		name: "Gordonmoore",
  		desig: "1990 KA",
  		epoch: 2459200.5,
  		ma: 128.53721,
  		w: 146.76351,
  		om: 105.559,
  		i: 7.57071,
  		e: 0.4318304,
  		a: 2.1992962
  	},
  	{
  		H: 17.83,
  		name: "Akka",
  		desig: "1992 LR",
  		epoch: 2459200.5,
  		ma: 167.63286,
  		w: 68.17972,
  		om: 232.86503,
  		i: 2.02401,
  		e: 0.4091849,
  		a: 1.830223
  	},
  	{
  		H: 17.1,
  		desig: "1992 TB",
  		epoch: 2459200.5,
  		ma: 206.26388,
  		w: 6.05994,
  		om: 185.63125,
  		i: 28.30638,
  		e: 0.4623734,
  		a: 1.3419995
  	},
  	{
  		H: 16.51,
  		desig: "1993 HO1",
  		epoch: 2459200.5,
  		ma: 358.54218,
  		w: 105.73025,
  		om: 22.40701,
  		i: 5.90735,
  		e: 0.4186538,
  		a: 1.9861059
  	},
  	{
  		H: 16.85,
  		desig: "1991 WA",
  		epoch: 2459200.5,
  		ma: 282.60842,
  		w: 241.87847,
  		om: 66.52846,
  		i: 39.5968,
  		e: 0.6432387,
  		a: 1.574829
  	},
  	{
  		H: 15.7,
  		desig: "1994 AH2",
  		epoch: 2459200.5,
  		ma: 218.16008,
  		w: 25.12371,
  		om: 164.10048,
  		i: 9.55054,
  		e: 0.7067198,
  		a: 2.5373682
  	},
  	{
  		H: 17.21,
  		desig: "1991 CB1",
  		epoch: 2459200.5,
  		ma: 99.75194,
  		w: 345.77407,
  		om: 317.41623,
  		i: 14.58953,
  		e: 0.5946884,
  		a: 1.6871754
  	},
  	{
  		H: 15.24,
  		desig: "1996 HW1",
  		epoch: 2459200.5,
  		ma: 67.91138,
  		w: 177.25595,
  		om: 177.10617,
  		i: 8.44926,
  		e: 0.4492428,
  		a: 2.0457249
  	},
  	{
  		H: 16.86,
  		name: "Kadlu",
  		desig: "1994 JF1",
  		epoch: 2459200.5,
  		ma: 199.48455,
  		w: 153.60349,
  		om: 119.24677,
  		i: 3.51643,
  		e: 0.4892479,
  		a: 2.5293614
  	},
  	{
  		H: 17.97,
  		desig: "1992 JB",
  		epoch: 2459200.5,
  		ma: 294.45012,
  		w: 306.97489,
  		om: 218.34851,
  		i: 16.08041,
  		e: 0.35973,
  		a: 1.5564267
  	},
  	{
  		H: 18,
  		name: "Kwiila",
  		desig: "1987 OA",
  		epoch: 2459200.5,
  		ma: 43.60136,
  		w: 235.81039,
  		om: 180.02673,
  		i: 9.00999,
  		e: 0.5953241,
  		a: 1.4965644
  	},
  	{
  		H: 16.56,
  		name: "Abhramu",
  		desig: "1989 OB",
  		epoch: 2459200.5,
  		ma: 9.16607,
  		w: 74.00593,
  		om: 287.66406,
  		i: 7.84511,
  		e: 0.5528539,
  		a: 2.7080588
  	},
  	{
  		H: 15.88,
  		desig: "1993 PB",
  		epoch: 2459200.5,
  		ma: 132.85932,
  		w: 212.32225,
  		om: 315.92124,
  		i: 40.82383,
  		e: 0.6075632,
  		a: 1.4239015
  	},
  	{
  		H: 14.84,
  		desig: "1994 TW1",
  		epoch: 2459200.5,
  		ma: 79.64033,
  		w: 62.16431,
  		om: 3.35102,
  		i: 35.9911,
  		e: 0.580083,
  		a: 2.588554
  	},
  	{
  		H: 16.16,
  		name: "ESA",
  		desig: "1990 VB",
  		epoch: 2459200.5,
  		ma: 328.78147,
  		w: 103.4856,
  		om: 253.51286,
  		i: 14.59634,
  		e: 0.533073,
  		a: 2.4375825
  	},
  	{
  		H: 16.99,
  		desig: "1994 CK1",
  		epoch: 2459200.5,
  		ma: 181.94426,
  		w: 27.38265,
  		om: 328.4054,
  		i: 4.5485,
  		e: 0.6327179,
  		a: 1.9008611
  	},
  	{
  		H: 15.41,
  		desig: "1994 PN",
  		epoch: 2459200.5,
  		ma: 50.87332,
  		w: 233.97483,
  		om: 113.01149,
  		i: 45.96058,
  		e: 0.5438166,
  		a: 2.3752402
  	},
  	{
  		H: 17.35,
  		desig: "1995 BL2",
  		epoch: 2459200.5,
  		ma: 165.92571,
  		w: 348.44599,
  		om: 312.43874,
  		i: 23.89798,
  		e: 0.5038251,
  		a: 1.2347601
  	},
  	{
  		H: 16.73,
  		name: "Izhdubar",
  		desig: "1993 WD",
  		epoch: 2459200.5,
  		ma: 181.00219,
  		w: 132.19996,
  		om: 56.56268,
  		i: 63.46212,
  		e: 0.266299,
  		a: 1.0068601
  	},
  	{
  		H: 17.63,
  		desig: "1998 QK56",
  		epoch: 2459200.5,
  		ma: 185.97911,
  		w: 286.24235,
  		om: 172.99918,
  		i: 13.56349,
  		e: 0.5131826,
  		a: 1.8847764
  	},
  	{
  		H: 17.23,
  		desig: "1995 LE",
  		epoch: 2459200.5,
  		ma: 43.22952,
  		w: 75.36765,
  		om: 257.29434,
  		i: 4.1493,
  		e: 0.5746358,
  		a: 2.5772936
  	},
  	{
  		H: 16.92,
  		desig: "1991 FA",
  		epoch: 2459200.5,
  		ma: 298.49102,
  		w: 92.31125,
  		om: 339.07999,
  		i: 3.07818,
  		e: 0.4462241,
  		a: 1.9796561
  	},
  	{
  		H: 15.14,
  		name: "Sigurd",
  		desig: "1992 CC1",
  		epoch: 2459200.5,
  		ma: 314.60861,
  		w: 21.99199,
  		om: 349.23231,
  		i: 36.88088,
  		e: 0.3753668,
  		a: 1.3915535
  	},
  	{
  		H: 18.11,
  		name: "Belenus",
  		desig: "1990 BA",
  		epoch: 2459200.5,
  		ma: 163.34902,
  		w: 171.05628,
  		om: 311.75069,
  		i: 1.99291,
  		e: 0.3372746,
  		a: 1.7405287
  	},
  	{
  		H: 16.07,
  		name: "Peleus",
  		desig: "1993 XN2",
  		epoch: 2459200.5,
  		ma: 298.64857,
  		w: 313.3775,
  		om: 59.35283,
  		i: 25.49001,
  		e: 0.5358709,
  		a: 2.1166368
  	},
  	{
  		H: 16.33,
  		desig: "1998 YP11",
  		epoch: 2459200.5,
  		ma: 215.80321,
  		w: 74.68311,
  		om: 144.78721,
  		i: 15.02564,
  		e: 0.38886,
  		a: 1.7207671
  	},
  	{
  		H: 15.22,
  		desig: "1999 CV3",
  		epoch: 2459200.5,
  		ma: 91.36714,
  		w: 96.37031,
  		om: 141.28025,
  		i: 22.86406,
  		e: 0.3938477,
  		a: 1.4595356
  	},
  	{
  		H: 15.85,
  		name: "Tukmit",
  		desig: "1991 BB",
  		epoch: 2459200.5,
  		ma: 303.34904,
  		w: 322.89857,
  		om: 294.97982,
  		i: 38.4886,
  		e: 0.2721527,
  		a: 1.1863643
  	},
  	{
  		H: 16.46,
  		name: "Masaakikoyama",
  		desig: "1992 JE",
  		epoch: 2459200.5,
  		ma: 267.01137,
  		w: 109.982,
  		om: 193.46817,
  		i: 5.87546,
  		e: 0.4641556,
  		a: 2.1890032
  	},
  	{
  		H: 17.32,
  		name: "Yuliya",
  		desig: "1991 PM5",
  		epoch: 2459200.5,
  		ma: 32.51016,
  		w: 140.62566,
  		om: 132.61444,
  		i: 14.42867,
  		e: 0.2552451,
  		a: 1.719735
  	},
  	{
  		H: 16.67,
  		name: "Davidharvey",
  		desig: "1999 RH27",
  		epoch: 2459200.5,
  		ma: 116.8339,
  		w: 104.78666,
  		om: 335.56816,
  		i: 4.53919,
  		e: 0.5890399,
  		a: 2.8489144
  	},
  	{
  		H: 16.7,
  		desig: "1993 UB",
  		epoch: 2459200.5,
  		ma: 314.98615,
  		w: 21.22961,
  		om: 31.20806,
  		i: 24.93961,
  		e: 0.4602421,
  		a: 2.2779323
  	},
  	{
  		H: 16.12,
  		desig: "1997 UF9",
  		epoch: 2459200.5,
  		ma: 19.09692,
  		w: 157.93784,
  		om: 37.17692,
  		i: 25.90543,
  		e: 0.6038388,
  		a: 1.4425136
  	},
  	{
  		H: 15.66,
  		desig: "1997 WU22",
  		epoch: 2459200.5,
  		ma: 191.71786,
  		w: 334.32688,
  		om: 260.79769,
  		i: 15.98966,
  		e: 0.442073,
  		a: 1.4679284
  	},
  	{
  		H: 17.89,
  		name: "Rhiannon",
  		desig: "1998 EP8",
  		epoch: 2459200.5,
  		ma: 49.31276,
  		w: 221.22474,
  		om: 169.1805,
  		i: 24.52031,
  		e: 0.272462,
  		a: 1.7513566
  	},
  	{
  		H: 16.4,
  		desig: "1999 UM3",
  		epoch: 2459200.5,
  		ma: 257.59824,
  		w: 36.77788,
  		om: 113.57325,
  		i: 10.65488,
  		e: 0.673842,
  		a: 2.370487
  	},
  	{
  		H: 17,
  		desig: "1999 VU",
  		epoch: 2459200.5,
  		ma: 261.13816,
  		w: 203.13111,
  		om: 333.52441,
  		i: 9.27288,
  		e: 0.553374,
  		a: 1.3869946
  	},
  	{
  		H: 16.37,
  		desig: "1999 WC2",
  		epoch: 2459200.5,
  		ma: 113.90057,
  		w: 287.26338,
  		om: 269.79982,
  		i: 29.44824,
  		e: 0.6367141,
  		a: 2.2159598
  	},
  	{
  		H: 16.72,
  		desig: "2000 LC16",
  		epoch: 2459200.5,
  		ma: 184.04736,
  		w: 21.31674,
  		om: 305.75449,
  		i: 5.57001,
  		e: 0.5535773,
  		a: 2.7347787
  	},
  	{
  		H: 17.3,
  		desig: "1992 QN",
  		epoch: 2459200.5,
  		ma: 27.65455,
  		w: 202.35743,
  		om: 355.922,
  		i: 9.5826,
  		e: 0.3587953,
  		a: 1.1900114
  	},
  	{
  		H: 17.7,
  		name: "Blume",
  		desig: "2000 NX3",
  		epoch: 2459200.5,
  		ma: 111.59903,
  		w: 234.91704,
  		om: 109.19926,
  		i: 4.21999,
  		e: 0.5117928,
  		a: 2.4450664
  	},
  	{
  		H: 17.08,
  		desig: "2000 NG11",
  		epoch: 2459200.5,
  		ma: 302.66326,
  		w: 319.23684,
  		om: 59.52805,
  		i: 0.8079,
  		e: 0.3677795,
  		a: 1.8810514
  	},
  	{
  		H: 15.61,
  		desig: "2000 QL7",
  		epoch: 2459200.5,
  		ma: 96.75254,
  		w: 100.76305,
  		om: 338.46207,
  		i: 17.83365,
  		e: 0.5110881,
  		a: 2.4243292
  	},
  	{
  		H: 15.94,
  		desig: "1998 NU",
  		epoch: 2459200.5,
  		ma: 176.67418,
  		w: 222.83926,
  		om: 297.49362,
  		i: 2.80688,
  		e: 0.4895473,
  		a: 2.3521327
  	},
  	{
  		H: 15.98,
  		desig: "1999 YN4",
  		epoch: 2459200.5,
  		ma: 139.05905,
  		w: 242.68136,
  		om: 291.69825,
  		i: 36.81549,
  		e: 0.231901,
  		a: 1.6852659
  	},
  	{
  		H: 16.76,
  		desig: "1997 GH3",
  		epoch: 2459200.5,
  		ma: 6.95243,
  		w: 333.84829,
  		om: 186.69608,
  		i: 3.00367,
  		e: 0.5626205,
  		a: 2.5026816
  	},
  	{
  		H: 16.09,
  		desig: "2000 NF5",
  		epoch: 2459200.5,
  		ma: 53.44414,
  		w: 9.55672,
  		om: 281.50464,
  		i: 1.32638,
  		e: 0.4431784,
  		a: 2.2325267
  	},
  	{
  		H: 16.7,
  		desig: "1994 LW",
  		epoch: 2459200.5,
  		ma: 233.13972,
  		w: 57.92451,
  		om: 237.19792,
  		i: 21.77238,
  		e: 0.6232354,
  		a: 3.1842488
  	},
  	{
  		H: 17.66,
  		desig: "1998 BZ7",
  		epoch: 2459200.5,
  		ma: 287.67288,
  		w: 104.22336,
  		om: 111.50417,
  		i: 6.50135,
  		e: 0.5586814,
  		a: 2.036152
  	},
  	{
  		H: 18.29,
  		desig: "1998 FX2",
  		epoch: 2459200.5,
  		ma: 67.41573,
  		w: 17.61536,
  		om: 180.94074,
  		i: 9.94675,
  		e: 0.4907429,
  		a: 2.153148
  	},
  	{
  		H: 17.6,
  		desig: "1998 YN1",
  		epoch: 2459200.5,
  		ma: 51.62062,
  		w: 147.62064,
  		om: 61.76801,
  		i: 6.29895,
  		e: 0.4640222,
  		a: 1.556139
  	},
  	{
  		H: 15.2,
  		name: "Robwhiteley",
  		desig: "1999 LO28",
  		epoch: 2459200.5,
  		ma: 166.87427,
  		w: 283.64973,
  		om: 280.07236,
  		i: 33.94167,
  		e: 0.4121258,
  		a: 1.8764318
  	},
  	{
  		H: 16.4,
  		desig: "2000 SE45",
  		epoch: 2459200.5,
  		ma: 137.62069,
  		w: 169.00238,
  		om: 302.95061,
  		i: 8.3356,
  		e: 0.5597445,
  		a: 2.7448877
  	},
  	{
  		H: 13.83,
  		desig: "2000 UV13",
  		epoch: 2459200.5,
  		ma: 86.91119,
  		w: 198.63972,
  		om: 347.31782,
  		i: 31.88101,
  		e: 0.632906,
  		a: 2.4245385
  	},
  	{
  		H: 14.31,
  		name: "Chelyabinsk",
  		desig: "1992 BL2",
  		epoch: 2459200.5,
  		ma: 129.45816,
  		w: 27.12905,
  		om: 297.84711,
  		i: 38.45983,
  		e: 0.2385532,
  		a: 1.7066653
  	},
  	{
  		H: 16.09,
  		desig: "1996 TO5",
  		epoch: 2459200.5,
  		ma: 190.48545,
  		w: 250.16076,
  		om: 167.38296,
  		i: 20.95217,
  		e: 0.5205739,
  		a: 2.3765578
  	},
  	{
  		H: 17.44,
  		desig: "1997 WS22",
  		epoch: 2459200.5,
  		ma: 204.53191,
  		w: 197.19821,
  		om: 59.21458,
  		i: 23.98004,
  		e: 0.1205278,
  		a: 1.2694179
  	},
  	{
  		H: 17.88,
  		desig: "2000 EX106",
  		epoch: 2459200.5,
  		ma: 211.31464,
  		w: 186.57841,
  		om: 136.45536,
  		i: 9.84542,
  		e: 0.2762935,
  		a: 1.104456
  	},
  	{
  		H: 16.8,
  		desig: "1999 CU3",
  		epoch: 2459200.5,
  		ma: 279.63491,
  		w: 305.79335,
  		om: 338.95283,
  		i: 11.40214,
  		e: 0.5241575,
  		a: 1.5764341
  	},
  	{
  		H: 16.04,
  		desig: "2000 OY21",
  		epoch: 2459200.5,
  		ma: 38.97801,
  		w: 301.483,
  		om: 119.65727,
  		i: 40.97492,
  		e: 0.4007585,
  		a: 1.8242145
  	},
  	{
  		H: 17.5,
  		desig: "1994 EF2",
  		epoch: 2459200.5,
  		ma: 274.87179,
  		w: 124.27282,
  		om: 345.87012,
  		i: 23.43008,
  		e: 0.5173189,
  		a: 2.2908788
  	},
  	{
  		H: 16.8,
  		desig: "1998 EC3",
  		epoch: 2459200.5,
  		ma: 80.49685,
  		w: 128.97279,
  		om: 127.85184,
  		i: 8.39923,
  		e: 0.5168509,
  		a: 2.127444
  	},
  	{
  		H: 16.4,
  		desig: "2000 OG",
  		epoch: 2459200.5,
  		ma: 274.72097,
  		w: 231.17919,
  		om: 178.12904,
  		i: 25.75118,
  		e: 0.8221668,
  		a: 2.3103172
  	},
  	{
  		H: 14.64,
  		desig: "2000 PM8",
  		epoch: 2459200.5,
  		ma: 59.52719,
  		w: 219.10066,
  		om: 203.1513,
  		i: 23.77205,
  		e: 0.5454492,
  		a: 2.2109185
  	},
  	{
  		H: 16.3,
  		desig: "2000 VN2",
  		epoch: 2459200.5,
  		ma: 76.69694,
  		w: 32.62637,
  		om: 76.47521,
  		i: 14.64163,
  		e: 0.4423466,
  		a: 1.974191
  	},
  	{
  		H: 17.3,
  		name: "Ahau",
  		desig: "1993 BW2",
  		epoch: 2459200.5,
  		ma: 71.25947,
  		w: 287.53811,
  		om: 121.06062,
  		i: 21.9239,
  		e: 0.3057518,
  		a: 1.3349217
  	},
  	{
  		H: 16.63,
  		desig: "1999 KV4",
  		epoch: 2459200.5,
  		ma: 127.52366,
  		w: 86.00343,
  		om: 50.59416,
  		i: 14.32609,
  		e: 0.3708008,
  		a: 1.5405856
  	},
  	{
  		H: 13.68,
  		desig: "2001 CP44",
  		epoch: 2459200.5,
  		ma: 209.4322,
  		w: 199.72974,
  		om: 94.69055,
  		i: 15.7445,
  		e: 0.4980359,
  		a: 2.5621763
  	},
  	{
  		H: 16.86,
  		desig: "1995 QN3",
  		epoch: 2459200.5,
  		ma: 101.24085,
  		w: 62.87093,
  		om: 185.73478,
  		i: 14.79052,
  		e: 0.6450409,
  		a: 3.2991645
  	},
  	{
  		H: 18,
  		desig: "1999 HZ1",
  		epoch: 2459200.5,
  		ma: 281.94801,
  		w: 200.57294,
  		om: 252.13659,
  		i: 8.6801,
  		e: 0.5760314,
  		a: 1.6060372
  	},
  	{
  		H: 15.33,
  		desig: "2001 KP41",
  		epoch: 2459200.5,
  		ma: 2.61116,
  		w: 155.18328,
  		om: 146.24497,
  		i: 11.02312,
  		e: 0.5582272,
  		a: 2.85131
  	},
  	{
  		H: 17.89,
  		desig: "1998 RO4",
  		epoch: 2459200.5,
  		ma: 61.86291,
  		w: 111.76758,
  		om: 191.88072,
  		i: 5.35496,
  		e: 0.4253846,
  		a: 2.1393836
  	},
  	{
  		H: 15.81,
  		desig: "2000 DN8",
  		epoch: 2459200.5,
  		ma: 117.71296,
  		w: 269.28073,
  		om: 135.20895,
  		i: 36.95008,
  		e: 0.3988534,
  		a: 1.87506
  	},
  	{
  		H: 14.69,
  		desig: "1990 TG1",
  		epoch: 2459200.5,
  		ma: 37.39017,
  		w: 33.71677,
  		om: 205.02207,
  		i: 8.73833,
  		e: 0.6809831,
  		a: 2.4366888
  	},
  	{
  		H: 17.05,
  		desig: "1995 UO5",
  		epoch: 2459200.5,
  		ma: 218.15798,
  		w: 151.08136,
  		om: 38.66838,
  		i: 36.21528,
  		e: 0.6432958,
  		a: 1.5599541
  	},
  	{
  		H: 16.38,
  		desig: "1998 BX7",
  		epoch: 2459200.5,
  		ma: 189.20354,
  		w: 271.43212,
  		om: 144.9213,
  		i: 8.95833,
  		e: 0.5024211,
  		a: 2.6033082
  	},
  	{
  		H: 17.21,
  		desig: "1998 BP26",
  		epoch: 2459200.5,
  		ma: 35.08338,
  		w: 186.64382,
  		om: 331.03892,
  		i: 20.22104,
  		e: 0.2569733,
  		a: 1.7230901
  	},
  	{
  		H: 17.37,
  		desig: "1998 PG",
  		epoch: 2459200.5,
  		ma: 268.69975,
  		w: 156.15592,
  		om: 222.72213,
  		i: 6.5033,
  		e: 0.3914904,
  		a: 2.0152656
  	},
  	{
  		H: 17.09,
  		desig: "1998 PB1",
  		epoch: 2459200.5,
  		ma: 271.09479,
  		w: 350.51686,
  		om: 299.73443,
  		i: 5.96388,
  		e: 0.4299683,
  		a: 2.0296813
  	},
  	{
  		H: 15.79,
  		desig: "1994 RH",
  		epoch: 2459200.5,
  		ma: 253.37413,
  		w: 92.30408,
  		om: 331.19118,
  		i: 18.93437,
  		e: 0.4404186,
  		a: 2.2478856
  	},
  	{
  		H: 15.99,
  		desig: "2000 UR13",
  		epoch: 2459200.5,
  		ma: 36.58332,
  		w: 286.24243,
  		om: 315.28464,
  		i: 6.17594,
  		e: 0.3873561,
  		a: 2.0692605
  	},
  	{
  		H: 16.3,
  		desig: "1999 TX16",
  		epoch: 2459200.5,
  		ma: 14.37089,
  		w: 311.16419,
  		om: 54.66034,
  		i: 38.22016,
  		e: 0.3323299,
  		a: 1.5512468
  	},
  	{
  		H: 15.89,
  		desig: "1999 VV",
  		epoch: 2459200.5,
  		ma: 23.39288,
  		w: 19.78159,
  		om: 241.07699,
  		i: 58.03871,
  		e: 0.4237337,
  		a: 1.3324634
  	},
  	{
  		H: 14.94,
  		desig: "2000 DM8",
  		epoch: 2459200.5,
  		ma: 85.23625,
  		w: 317.95577,
  		om: 323.16469,
  		i: 46.77109,
  		e: 0.5538271,
  		a: 1.4836226
  	},
  	{
  		H: 15.63,
  		desig: "2001 RM",
  		epoch: 2459200.5,
  		ma: 261.58817,
  		w: 117.99369,
  		om: 223.6559,
  		i: 36.66923,
  		e: 0.4836102,
  		a: 2.2528339
  	},
  	{
  		H: 17.29,
  		name: "Beowulf",
  		desig: "1999 JB",
  		epoch: 2459200.5,
  		ma: 221.51001,
  		w: 178.94347,
  		om: 165.32814,
  		i: 23.67358,
  		e: 0.5662645,
  		a: 1.4200847
  	},
  	{
  		H: 16.15,
  		desig: "1999 JT3",
  		epoch: 2459200.5,
  		ma: 234.70398,
  		w: 225.0924,
  		om: 64.84261,
  		i: 9.3307,
  		e: 0.4010932,
  		a: 2.1702315
  	},
  	{
  		H: 18.2,
  		desig: "1999 OR3",
  		epoch: 2459200.5,
  		ma: 154.78598,
  		w: 28.08593,
  		om: 199.95809,
  		i: 9.43961,
  		e: 0.575819,
  		a: 2.0348106
  	},
  	{
  		H: 15.79,
  		desig: "1997 TD",
  		epoch: 2459200.5,
  		ma: 321.5298,
  		w: 170.96682,
  		om: 158.95039,
  		i: 12.9176,
  		e: 0.4682508,
  		a: 2.2497591
  	},
  	{
  		H: 17.66,
  		desig: "1999 FQ5",
  		epoch: 2459200.5,
  		ma: 116.82111,
  		w: 198.7201,
  		om: 172.81516,
  		i: 25.84388,
  		e: 0.1610366,
  		a: 1.49491
  	},
  	{
  		H: 15.49,
  		desig: "1999 GJ4",
  		epoch: 2459200.5,
  		ma: 225.72881,
  		w: 211.92713,
  		om: 148.22939,
  		i: 34.49569,
  		e: 0.8084074,
  		a: 1.3387346
  	},
  	{
  		H: 17.67,
  		desig: "1999 ML",
  		epoch: 2459200.5,
  		ma: 95.7143,
  		w: 111.97751,
  		om: 210.9572,
  		i: 2.52053,
  		e: 0.4545315,
  		a: 2.2662646
  	},
  	{
  		H: 16.6,
  		desig: "2001 TN41",
  		epoch: 2459200.5,
  		ma: 12.77145,
  		w: 150.89586,
  		om: 55.85187,
  		i: 24.0708,
  		e: 0.3916108,
  		a: 1.4195238
  	},
  	{
  		H: 17.55,
  		desig: "1995 BC2",
  		epoch: 2459200.5,
  		ma: 303.36936,
  		w: 81.75788,
  		om: 328.25058,
  		i: 5.02549,
  		e: 0.4295651,
  		a: 1.9181533
  	},
  	{
  		H: 17.8,
  		desig: "1992 SY",
  		epoch: 2459200.5,
  		ma: 160.20346,
  		w: 115.83767,
  		om: 5.58151,
  		i: 8.04783,
  		e: 0.5491189,
  		a: 2.2128332
  	},
  	{
  		H: 17.7,
  		name: "Huitzilopochtli",
  		desig: "1993 OM7",
  		epoch: 2459200.5,
  		ma: 113.92693,
  		w: 195.52,
  		om: 297.58596,
  		i: 24.15438,
  		e: 0.1896782,
  		a: 1.2821072
  	},
  	{
  		H: 16.45,
  		desig: "1998 KK17",
  		epoch: 2459200.5,
  		ma: 137.43558,
  		w: 334.11258,
  		om: 141.34342,
  		i: 11.16943,
  		e: 0.5251388,
  		a: 1.4271378
  	},
  	{
  		H: 17.84,
  		desig: "1998 MN14",
  		epoch: 2459200.5,
  		ma: 229.62566,
  		w: 350.43211,
  		om: 258.99845,
  		i: 19.4816,
  		e: 0.2240951,
  		a: 1.5547193
  	},
  	{
  		H: 14.83,
  		desig: "1998 MT24",
  		epoch: 2459200.5,
  		ma: 21.9823,
  		w: 254.41559,
  		om: 309.16222,
  		i: 33.88487,
  		e: 0.6510515,
  		a: 2.419215
  	},
  	{
  		H: 16.72,
  		desig: "1999 AR7",
  		epoch: 2459200.5,
  		ma: 101.19577,
  		w: 58.19753,
  		om: 85.44485,
  		i: 40.62934,
  		e: 0.2144008,
  		a: 1.6445337
  	},
  	{
  		H: 16.62,
  		desig: "1999 TY16",
  		epoch: 2459200.5,
  		ma: 356.45603,
  		w: 156.93804,
  		om: 241.93021,
  		i: 60.3957,
  		e: 0.4033281,
  		a: 2.0990526
  	},
  	{
  		H: 14.71,
  		desig: "1999 VM40",
  		epoch: 2459200.5,
  		ma: 16.69129,
  		w: 354.44923,
  		om: 51.3636,
  		i: 15.3422,
  		e: 0.48264,
  		a: 2.3117996
  	},
  	{
  		H: 17.23,
  		desig: "2000 GQ146",
  		epoch: 2459200.5,
  		ma: 212.48921,
  		w: 128.2645,
  		om: 36.35117,
  		i: 23.44132,
  		e: 0.1975157,
  		a: 1.3292413
  	},
  	{
  		H: 17.21,
  		desig: "2000 LM",
  		epoch: 2459200.5,
  		ma: 40.34408,
  		w: 67.05699,
  		om: 240.86037,
  		i: 18.9513,
  		e: 0.2624367,
  		a: 1.7106138
  	},
  	{
  		H: 17.86,
  		desig: "2000 UJ1",
  		epoch: 2459200.5,
  		ma: 78.43516,
  		w: 158.01198,
  		om: 223.71574,
  		i: 46.68583,
  		e: 0.2806491,
  		a: 1.476795
  	},
  	{
  		H: 16.58,
  		desig: "2001 DU8",
  		epoch: 2459200.5,
  		ma: 184.74851,
  		w: 265.90649,
  		om: 161.7107,
  		i: 33.20464,
  		e: 0.3419378,
  		a: 1.7765557
  	},
  	{
  		H: 17.1,
  		desig: "2001 EB",
  		epoch: 2459200.5,
  		ma: 211.67935,
  		w: 99.61288,
  		om: 33.52475,
  		i: 35.35832,
  		e: 0.2565051,
  		a: 1.6295339
  	},
  	{
  		H: 14.99,
  		desig: "2001 MZ7",
  		epoch: 2459200.5,
  		ma: 202.43607,
  		w: 20.02609,
  		om: 130.08331,
  		i: 24.4704,
  		e: 0.2874735,
  		a: 1.7761012
  	},
  	{
  		H: 16.04,
  		desig: "2001 WG2",
  		epoch: 2459200.5,
  		ma: 280.17363,
  		w: 132.3411,
  		om: 81.48316,
  		i: 38.51,
  		e: 0.6954005,
  		a: 1.7946801
  	},
  	{
  		H: 18.15,
  		desig: "1988 SM",
  		epoch: 2459200.5,
  		ma: 22.21978,
  		w: 313.25828,
  		om: 0.87705,
  		i: 10.94963,
  		e: 0.3441516,
  		a: 1.6645726
  	},
  	{
  		H: 16.5,
  		desig: "1992 NA",
  		epoch: 2459200.5,
  		ma: 225.30736,
  		w: 8.69204,
  		om: 349.18337,
  		i: 9.64047,
  		e: 0.5557153,
  		a: 2.396804
  	},
  	{
  		H: 16.02,
  		desig: "1998 QH2",
  		epoch: 2459200.5,
  		ma: 180.11656,
  		w: 13.96643,
  		om: 168.93326,
  		i: 61.01142,
  		e: 0.3625962,
  		a: 1.4261318
  	},
  	{
  		H: 18.15,
  		desig: "1998 RO1",
  		epoch: 2459200.5,
  		ma: 107.93957,
  		w: 151.14178,
  		om: 351.85643,
  		i: 22.68324,
  		e: 0.7201301,
  		a: 0.9909902
  	},
  	{
  		H: 14.49,
  		desig: "1998 TU3",
  		epoch: 2459200.5,
  		ma: 56.24504,
  		w: 84.83601,
  		om: 102.00813,
  		i: 5.409,
  		e: 0.4836942,
  		a: 0.7873981
  	},
  	{
  		H: 16.93,
  		desig: "1999 GJ2",
  		epoch: 2459200.5,
  		ma: 20.09622,
  		w: 142.45781,
  		om: 196.2048,
  		i: 11.27831,
  		e: 0.1979633,
  		a: 1.5355024
  	},
  	{
  		H: 17.15,
  		desig: "1999 JW6",
  		epoch: 2459200.5,
  		ma: 317.82239,
  		w: 68.45522,
  		om: 66.39053,
  		i: 51.31193,
  		e: 0.1433559,
  		a: 1.5075574
  	},
  	{
  		H: 16.62,
  		desig: "1999 XO35",
  		epoch: 2459200.5,
  		ma: 91.18281,
  		w: 293.40785,
  		om: 81.94452,
  		i: 20.60851,
  		e: 0.5651611,
  		a: 2.5402432
  	},
  	{
  		H: 18.06,
  		desig: "2000 YK29",
  		epoch: 2459200.5,
  		ma: 81.47498,
  		w: 31.82278,
  		om: 123.6491,
  		i: 15.17385,
  		e: 0.1284801,
  		a: 1.3763692
  	},
  	{
  		H: 15.46,
  		desig: "2000 YJ66",
  		epoch: 2459200.5,
  		ma: 281.1277,
  		w: 50.30519,
  		om: 308.86405,
  		i: 5.72178,
  		e: 0.4580083,
  		a: 2.3322706
  	},
  	{
  		H: 16.84,
  		desig: "2001 EA16",
  		epoch: 2459200.5,
  		ma: 139.39506,
  		w: 317.41427,
  		om: 8.01174,
  		i: 38.8235,
  		e: 0.4274392,
  		a: 1.509795
  	},
  	{
  		H: 14.31,
  		desig: "2001 LO7",
  		epoch: 2459200.5,
  		ma: 336.7466,
  		w: 181.64031,
  		om: 236.23058,
  		i: 25.33139,
  		e: 0.8406371,
  		a: 2.1558109
  	},
  	{
  		H: 15.99,
  		desig: "2001 MK3",
  		epoch: 2459200.5,
  		ma: 209.05257,
  		w: 328.49964,
  		om: 128.85695,
  		i: 29.56913,
  		e: 0.2473763,
  		a: 1.6699817
  	},
  	{
  		H: 17.9,
  		desig: "2001 OZ13",
  		epoch: 2459200.5,
  		ma: 314.64484,
  		w: 29.17395,
  		om: 99.22952,
  		i: 9.85785,
  		e: 0.1744935,
  		a: 1.5173173
  	},
  	{
  		H: 16.35,
  		desig: "1994 LY",
  		epoch: 2459200.5,
  		ma: 37.31353,
  		w: 202.82574,
  		om: 141.15384,
  		i: 17.71599,
  		e: 0.4421107,
  		a: 1.8908639
  	},
  	{
  		H: 14.69,
  		desig: "1997 SE5",
  		epoch: 2459200.5,
  		ma: 86.88212,
  		w: 93.98133,
  		om: 247.76471,
  		i: 2.57563,
  		e: 0.6609072,
  		a: 3.7610287
  	},
  	{
  		H: 17.2,
  		desig: "1998 KV2",
  		epoch: 2459200.5,
  		ma: 175.41959,
  		w: 50.51392,
  		om: 66.78077,
  		i: 13.02662,
  		e: 0.3316442,
  		a: 1.5929762
  	},
  	{
  		H: 15.84,
  		desig: "1998 SG36",
  		epoch: 2459200.5,
  		ma: 328.60117,
  		w: 29.74398,
  		om: 186.58825,
  		i: 24.8357,
  		e: 0.3374107,
  		a: 1.6460739
  	},
  	{
  		H: 15.42,
  		desig: "1998 WQ5",
  		epoch: 2459200.5,
  		ma: 180.25909,
  		w: 269.76912,
  		om: 285.74843,
  		i: 27.664,
  		e: 0.3544261,
  		a: 1.7209738
  	},
  	{
  		H: 15.39,
  		desig: "1998 XM4",
  		epoch: 2459200.5,
  		ma: 19.31694,
  		w: 301.25624,
  		om: 235.65555,
  		i: 62.71207,
  		e: 0.4163602,
  		a: 1.6567008
  	},
  	{
  		H: 16.48,
  		desig: "1998 YO4",
  		epoch: 2459200.5,
  		ma: 342.88783,
  		w: 199.57489,
  		om: 28.53859,
  		i: 9.32186,
  		e: 0.2479581,
  		a: 1.653651
  	},
  	{
  		H: 18.09,
  		desig: "1999 BY9",
  		epoch: 2459200.5,
  		ma: 266.811,
  		w: 287.40526,
  		om: 254.39434,
  		i: 0.94402,
  		e: 0.3023292,
  		a: 1.8299243
  	},
  	{
  		H: 18.11,
  		desig: "1999 FK21",
  		epoch: 2459200.5,
  		ma: 345.2046,
  		w: 172.37845,
  		om: 180.48475,
  		i: 12.60559,
  		e: 0.7030998,
  		a: 0.7387399
  	},
  	{
  		H: 16.42,
  		desig: "1999 RM28",
  		epoch: 2459200.5,
  		ma: 189.69872,
  		w: 301.85035,
  		om: 136.05844,
  		i: 30.5471,
  		e: 0.3237343,
  		a: 1.8170135
  	},
  	{
  		H: 15.69,
  		desig: "1999 WA2",
  		epoch: 2459200.5,
  		ma: 280.54234,
  		w: 75.28587,
  		om: 293.67524,
  		i: 34.60759,
  		e: 0.4345548,
  		a: 1.9664679
  	},
  	{
  		H: 17.32,
  		desig: "1999 WK13",
  		epoch: 2459200.5,
  		ma: 159.15385,
  		w: 312.56519,
  		om: 78.45802,
  		i: 34.31147,
  		e: 0.3626006,
  		a: 1.8442444
  	},
  	{
  		H: 16.9,
  		desig: "2000 FL10",
  		epoch: 2459200.5,
  		ma: 301.47714,
  		w: 258.88315,
  		om: 186.9184,
  		i: 29.01067,
  		e: 0.4268935,
  		a: 1.463077
  	},
  	{
  		H: 17.56,
  		desig: "2000 FO10",
  		epoch: 2459200.5,
  		ma: 162.32385,
  		w: 172.45915,
  		om: 208.33434,
  		i: 14.28669,
  		e: 0.5945842,
  		a: 0.8594253
  	},
  	{
  		H: 15.91,
  		desig: "2000 GR146",
  		epoch: 2459200.5,
  		ma: 293.33212,
  		w: 31.41466,
  		om: 78.48706,
  		i: 14.37475,
  		e: 0.5750967,
  		a: 1.4626792
  	},
  	{
  		H: 17.64,
  		desig: "2000 HD24",
  		epoch: 2459200.5,
  		ma: 146.26815,
  		w: 214.90158,
  		om: 231.01993,
  		i: 9.47485,
  		e: 0.618665,
  		a: 1.3415558
  	},
  	{
  		H: 18.17,
  		desig: "2000 JT66",
  		epoch: 2459200.5,
  		ma: 110.56836,
  		w: 359.59434,
  		om: 120.50882,
  		i: 25.32344,
  		e: 0.4837311,
  		a: 1.2266192
  	},
  	{
  		H: 17.6,
  		desig: "2000 QP",
  		epoch: 2459200.5,
  		ma: 260.55052,
  		w: 188.1643,
  		om: 294.28105,
  		i: 34.74578,
  		e: 0.4631915,
  		a: 0.8474548
  	},
  	{
  		H: 16.45,
  		desig: "2000 QJ1",
  		epoch: 2459200.5,
  		ma: 164.63847,
  		w: 343.44998,
  		om: 191.43664,
  		i: 7.69433,
  		e: 0.5124909,
  		a: 1.5901185
  	},
  	{
  		H: 16.05,
  		desig: "2000 XH44",
  		epoch: 2459200.5,
  		ma: 318.51428,
  		w: 195.00165,
  		om: 340.20431,
  		i: 11.36718,
  		e: 0.3916485,
  		a: 2.0078987
  	},
  	{
  		H: 15.57,
  		desig: "2001 KQ1",
  		epoch: 2459200.5,
  		ma: 225.27109,
  		w: 241.5765,
  		om: 232.84227,
  		i: 38.78349,
  		e: 0.4319328,
  		a: 2.0969797
  	},
  	{
  		H: 16.97,
  		desig: "2001 KN20",
  		epoch: 2459200.5,
  		ma: 60.65643,
  		w: 201.38644,
  		om: 104.96452,
  		i: 12.07272,
  		e: 0.4523366,
  		a: 2.1477339
  	},
  	{
  		H: 17.6,
  		desig: "2001 SL9",
  		epoch: 2459200.5,
  		ma: 61.5888,
  		w: 329.32593,
  		om: 202.84409,
  		i: 21.89995,
  		e: 0.2700829,
  		a: 1.0614459
  	},
  	{
  		H: 17.37,
  		desig: "2001 TZ44",
  		epoch: 2459200.5,
  		ma: 128.13874,
  		w: 114.94709,
  		om: 38.97936,
  		i: 53.82106,
  		e: 0.5638225,
  		a: 1.7235165
  	},
  	{
  		H: 15.73,
  		desig: "2001 VS78",
  		epoch: 2459200.5,
  		ma: 307.24316,
  		w: 84.88083,
  		om: 103.10665,
  		i: 22.66736,
  		e: 0.3081432,
  		a: 1.7869616
  	},
  	{
  		H: 17.82,
  		desig: "2003 LC5",
  		epoch: 2459200.5,
  		ma: 301.35191,
  		w: 313.83248,
  		om: 86.8358,
  		i: 16.88043,
  		e: 0.4262013,
  		a: 1.1556118
  	},
  	{
  		H: 16.4,
  		name: "Pygmalion",
  		desig: "1991 NT3",
  		epoch: 2459200.5,
  		ma: 33.08612,
  		w: 293.12476,
  		om: 287.24727,
  		i: 13.99613,
  		e: 0.3072327,
  		a: 1.8206204
  	},
  	{
  		H: 16.96,
  		desig: "1997 AP10",
  		epoch: 2459200.5,
  		ma: 134.64513,
  		w: 356.27143,
  		om: 293.05432,
  		i: 6.65266,
  		e: 0.6434098,
  		a: 1.4428861
  	},
  	{
  		H: 15.48,
  		desig: "1998 SO10",
  		epoch: 2459200.5,
  		ma: 181.24432,
  		w: 22.43183,
  		om: 199.57056,
  		i: 41.44321,
  		e: 0.7782913,
  		a: 2.2970911
  	},
  	{
  		H: 16.2,
  		desig: "1998 XB",
  		epoch: 2459200.5,
  		ma: 2.69938,
  		w: 202.71551,
  		om: 75.70867,
  		i: 13.60437,
  		e: 0.3511596,
  		a: 0.9078536
  	},
  	{
  		H: 18.1,
  		desig: "1999 FP59",
  		epoch: 2459200.5,
  		ma: 187.54664,
  		w: 303.76951,
  		om: 19.67569,
  		i: 1.77133,
  		e: 0.2593516,
  		a: 1.6991749
  	},
  	{
  		H: 14.82,
  		desig: "1999 OW3",
  		epoch: 2459200.5,
  		ma: 90.77282,
  		w: 35.69168,
  		om: 196.13146,
  		i: 34.94343,
  		e: 0.7799935,
  		a: 2.0917003
  	},
  	{
  		H: 17.89,
  		desig: "1989 VA",
  		epoch: 2459200.5,
  		ma: 181.87276,
  		w: 2.85474,
  		om: 225.59419,
  		i: 28.79864,
  		e: 0.5946707,
  		a: 0.7283766
  	},
  	{
  		H: 16.05,
  		desig: "2002 AV4",
  		epoch: 2459200.5,
  		ma: 62.50128,
  		w: 322.96046,
  		om: 16.35124,
  		i: 12.76927,
  		e: 0.6449695,
  		a: 1.6543032
  	},
  	{
  		H: 16.3,
  		desig: "1983 VA",
  		epoch: 2459200.5,
  		ma: 282.73935,
  		w: 13.60359,
  		om: 76.40182,
  		i: 15.71007,
  		e: 0.7023443,
  		a: 2.5943891
  	},
  	{
  		H: 16.25,
  		desig: "1998 FM5",
  		epoch: 2459200.5,
  		ma: 248.39583,
  		w: 312.02227,
  		om: 176.5292,
  		i: 11.56507,
  		e: 0.5539744,
  		a: 2.2668193
  	},
  	{
  		H: 16.65,
  		desig: "1998 MQ",
  		epoch: 2459200.5,
  		ma: 109.96423,
  		w: 138.76845,
  		om: 221.10347,
  		i: 24.23796,
  		e: 0.4074745,
  		a: 1.7831407
  	},
  	{
  		H: 16.39,
  		desig: "1999 NC5",
  		epoch: 2459200.5,
  		ma: 62.19375,
  		w: 295.27381,
  		om: 128.80084,
  		i: 45.79018,
  		e: 0.3931219,
  		a: 2.0293735
  	},
  	{
  		H: 17.46,
  		desig: "1999 WK11",
  		epoch: 2459200.5,
  		ma: 350.5437,
  		w: 220.41099,
  		om: 72.60859,
  		i: 7.46256,
  		e: 0.4672014,
  		a: 2.1320133
  	},
  	{
  		H: 15.73,
  		desig: "2000 NL10",
  		epoch: 2459200.5,
  		ma: 257.45729,
  		w: 281.61964,
  		om: 237.35097,
  		i: 32.52906,
  		e: 0.8170187,
  		a: 0.9142474
  	},
  	{
  		H: 16.27,
  		desig: "2000 WK63",
  		epoch: 2459200.5,
  		ma: 66.17012,
  		w: 41.67818,
  		om: 163.4433,
  		i: 10.3347,
  		e: 0.7637004,
  		a: 2.4239434
  	},
  	{
  		H: 16.06,
  		desig: "2000 WN107",
  		epoch: 2459200.5,
  		ma: 75.067,
  		w: 11.68952,
  		om: 163.38764,
  		i: 14.33067,
  		e: 0.6144564,
  		a: 2.1510828
  	},
  	{
  		H: 17.86,
  		desig: "2001 LF",
  		epoch: 2459200.5,
  		ma: 235.90504,
  		w: 343.82126,
  		om: 267.28501,
  		i: 16.39519,
  		e: 0.2708943,
  		a: 1.6036578
  	},
  	{
  		H: 17.85,
  		desig: "2001 PL9",
  		epoch: 2459200.5,
  		ma: 178.55509,
  		w: 343.98545,
  		om: 172.06138,
  		i: 20.92639,
  		e: 0.3605738,
  		a: 1.2354651
  	},
  	{
  		H: 15.56,
  		desig: "2002 KH4",
  		epoch: 2459200.5,
  		ma: 177.44565,
  		w: 356.3018,
  		om: 230.10565,
  		i: 58.74659,
  		e: 0.4450454,
  		a: 2.268783
  	},
  	{
  		H: 15.7,
  		desig: "2002 RS28",
  		epoch: 2459200.5,
  		ma: 214.5309,
  		w: 105.31392,
  		om: 211.96985,
  		i: 46.97829,
  		e: 0.4926233,
  		a: 2.2204283
  	},
  	{
  		H: 17.41,
  		desig: "2003 RD6",
  		epoch: 2459200.5,
  		ma: 58.51952,
  		w: 88.20713,
  		om: 190.52455,
  		i: 31.32216,
  		e: 0.3182977,
  		a: 1.6685594
  	},
  	{
  		H: 18.02,
  		desig: "1995 WL8",
  		epoch: 2459200.5,
  		ma: 333.70248,
  		w: 131.52127,
  		om: 247.94125,
  		i: 17.77783,
  		e: 0.4838571,
  		a: 2.3661776
  	},
  	{
  		H: 15.86,
  		desig: "1998 FH74",
  		epoch: 2459200.5,
  		ma: 32.64514,
  		w: 193.38937,
  		om: 197.53175,
  		i: 21.13952,
  		e: 0.8839262,
  		a: 2.2030617
  	},
  	{
  		H: 17.44,
  		desig: "1998 HL49",
  		epoch: 2459200.5,
  		ma: 10.70508,
  		w: 239.26576,
  		om: 205.96999,
  		i: 10.98135,
  		e: 0.6364184,
  		a: 1.7470181
  	},
  	{
  		H: 16.27,
  		desig: "1998 JH2",
  		epoch: 2459200.5,
  		ma: 1.44207,
  		w: 287.27325,
  		om: 51.10496,
  		i: 6.62515,
  		e: 0.441489,
  		a: 2.1346197
  	},
  	{
  		H: 17.77,
  		desig: "1998 ST49",
  		epoch: 2459200.5,
  		ma: 107.44275,
  		w: 48.09366,
  		om: 18.20535,
  		i: 24.48406,
  		e: 0.5952673,
  		a: 2.3081631
  	},
  	{
  		H: 16.55,
  		desig: "1998 UO1",
  		epoch: 2459200.5,
  		ma: 45.71536,
  		w: 252.48246,
  		om: 358.45136,
  		i: 25.49853,
  		e: 0.7632479,
  		a: 1.5954858
  	},
  	{
  		H: 16.6,
  		desig: "1998 UC50",
  		epoch: 2459200.5,
  		ma: 119.66592,
  		w: 166.24732,
  		om: 335.07474,
  		i: 4.38498,
  		e: 0.4290106,
  		a: 2.2706719
  	},
  	{
  		H: 16.96,
  		name: "Tjelvar",
  		desig: "1998 VO33",
  		epoch: 2459200.5,
  		ma: 343.44013,
  		w: 209.90666,
  		om: 64.29028,
  		i: 14.91049,
  		e: 0.8095947,
  		a: 1.2479557
  	},
  	{
  		H: 16.52,
  		desig: "1998 WM",
  		epoch: 2459200.5,
  		ma: 332.6375,
  		w: 172.53721,
  		om: 45.63875,
  		i: 22.5136,
  		e: 0.3152198,
  		a: 1.2245429
  	},
  	{
  		H: 16.32,
  		desig: "1998 XZ4",
  		epoch: 2459200.5,
  		ma: 91.94801,
  		w: 9.61543,
  		om: 324.4491,
  		i: 23.15879,
  		e: 0.6382131,
  		a: 1.9386996
  	},
  	{
  		H: 16.4,
  		desig: "1998 XS16",
  		epoch: 2459200.5,
  		ma: 4.70476,
  		w: 358.31064,
  		om: 272.99668,
  		i: 26.55598,
  		e: 0.4966234,
  		a: 1.2122751
  	},
  	{
  		H: 18.28,
  		desig: "1998 YW3",
  		epoch: 2459200.5,
  		ma: 173.2445,
  		w: 194.83418,
  		om: 94.2774,
  		i: 28.7935,
  		e: 0.4627036,
  		a: 1.100118
  	},
  	{
  		H: 17.89,
  		desig: "1999 FB",
  		epoch: 2459200.5,
  		ma: 57.16029,
  		w: 3.03998,
  		om: 37.09909,
  		i: 12.89473,
  		e: 0.6068149,
  		a: 1.1799947
  	},
  	{
  		H: 14.56,
  		desig: "1999 HF1",
  		epoch: 2459200.5,
  		ma: 187.93869,
  		w: 253.40824,
  		om: 155.86569,
  		i: 25.66044,
  		e: 0.4624374,
  		a: 0.8191496
  	},
  	{
  		H: 16.92,
  		desig: "1999 KX4",
  		epoch: 2459200.5,
  		ma: 147.48126,
  		w: 76.43675,
  		om: 104.9219,
  		i: 16.56995,
  		e: 0.2927173,
  		a: 1.4573626
  	},
  	{
  		H: 16.97,
  		desig: "1999 YT",
  		epoch: 2459200.5,
  		ma: 351.27773,
  		w: 272.60919,
  		om: 116.42421,
  		i: 31.5855,
  		e: 0.3517556,
  		a: 1.7764249
  	},
  	{
  		H: 16.68,
  		desig: "1999 YK5",
  		epoch: 2459200.5,
  		ma: 63.73273,
  		w: 292.85363,
  		om: 349.55088,
  		i: 16.74676,
  		e: 0.5583157,
  		a: 0.8293705
  	},
  	{
  		H: 17.75,
  		desig: "2000 AB246",
  		epoch: 2459200.5,
  		ma: 10.79464,
  		w: 312.28809,
  		om: 29.3834,
  		i: 3.75767,
  		e: 0.4941305,
  		a: 2.3042772
  	},
  	{
  		H: 17.35,
  		desig: "2000 BD19",
  		epoch: 2459200.5,
  		ma: 331.01197,
  		w: 324.34393,
  		om: 333.70164,
  		i: 25.73478,
  		e: 0.8949974,
  		a: 0.8764481
  	},
  	{
  		H: 15.97,
  		desig: "2000 BJ19",
  		epoch: 2459200.5,
  		ma: 286.59599,
  		w: 175.51213,
  		om: 131.22991,
  		i: 31.11396,
  		e: 0.7638319,
  		a: 1.2918121
  	},
  	{
  		H: 14.65,
  		desig: "2000 CN101",
  		epoch: 2459200.5,
  		ma: 342.67183,
  		w: 118.68532,
  		om: 183.36919,
  		i: 15.9758,
  		e: 0.6350225,
  		a: 1.5979162
  	},
  	{
  		H: 17.12,
  		desig: "2000 ES70",
  		epoch: 2459200.5,
  		ma: 235.18539,
  		w: 281.56158,
  		om: 177.71551,
  		i: 25.44732,
  		e: 0.3193296,
  		a: 1.8088645
  	},
  	{
  		H: 14.91,
  		desig: "2000 EZ148",
  		epoch: 2459200.5,
  		ma: 320.86771,
  		w: 305.85955,
  		om: 3.81153,
  		i: 11.18567,
  		e: 0.6129418,
  		a: 2.5826846
  	},
  	{
  		H: 16.72,
  		desig: "2000 GO82",
  		epoch: 2459200.5,
  		ma: 148.24828,
  		w: 164.4252,
  		om: 173.32752,
  		i: 25.73513,
  		e: 0.8050601,
  		a: 2.1623523
  	},
  	{
  		H: 17.9,
  		desig: "2000 GX127",
  		epoch: 2459200.5,
  		ma: 134.09703,
  		w: 4.72938,
  		om: 43.99764,
  		i: 20.23837,
  		e: 0.3612559,
  		a: 1.1414319
  	},
  	{
  		H: 17.9,
  		desig: "2000 TQ64",
  		epoch: 2459200.5,
  		ma: 346.24386,
  		w: 228.0307,
  		om: 20.32112,
  		i: 8.24795,
  		e: 0.3813287,
  		a: 2.0890832
  	},
  	{
  		H: 16.01,
  		desig: "2000 VJ61",
  		epoch: 2459200.5,
  		ma: 51.52476,
  		w: 280.51198,
  		om: 270.5596,
  		i: 18.67528,
  		e: 0.562581,
  		a: 2.1855854
  	},
  	{
  		H: 17.03,
  		desig: "2000 VE62",
  		epoch: 2459200.5,
  		ma: 95.76702,
  		w: 16.29331,
  		om: 207.10425,
  		i: 22.17863,
  		e: 0.2876581,
  		a: 1.6189135
  	},
  	{
  		H: 16.5,
  		desig: "2000 XG47",
  		epoch: 2459200.5,
  		ma: 107.85447,
  		w: 127.51704,
  		om: 43.92721,
  		i: 25.27054,
  		e: 0.5416529,
  		a: 2.142395
  	},
  	{
  		H: 16.64,
  		desig: "2000 YL29",
  		epoch: 2459200.5,
  		ma: 359.94444,
  		w: 115.88267,
  		om: 182.76427,
  		i: 21.89288,
  		e: 0.3441349,
  		a: 1.536086
  	},
  	{
  		H: 18.06,
  		desig: "2000 YH66",
  		epoch: 2459200.5,
  		ma: 180.73534,
  		w: 341.35651,
  		om: 265.27437,
  		i: 18.34408,
  		e: 0.7435668,
  		a: 1.1729917
  	},
  	{
  		H: 15.9,
  		desig: "2001 AU43",
  		epoch: 2459200.5,
  		ma: 117.81023,
  		w: 149.28628,
  		om: 129.30515,
  		i: 72.15946,
  		e: 0.3767076,
  		a: 1.8965516
  	},
  	{
  		H: 17.57,
  		desig: "2001 BK16",
  		epoch: 2459200.5,
  		ma: 264.69354,
  		w: 252.38806,
  		om: 98.88585,
  		i: 31.81963,
  		e: 0.6780069,
  		a: 2.0725769
  	},
  	{
  		H: 17.3,
  		desig: "2001 EB16",
  		epoch: 2459200.5,
  		ma: 288.82368,
  		w: 346.27264,
  		om: 149.53781,
  		i: 47.01688,
  		e: 0.3862984,
  		a: 1.8614643
  	},
  	{
  		H: 17.68,
  		desig: "2001 KR1",
  		epoch: 2459200.5,
  		ma: 252.04626,
  		w: 291.42994,
  		om: 102.76451,
  		i: 23.25329,
  		e: 0.8411603,
  		a: 1.2595987
  	},
  	{
  		H: 16.7,
  		desig: "2001 KA67",
  		epoch: 2459200.5,
  		ma: 44.54132,
  		w: 37.73018,
  		om: 108.55345,
  		i: 22.36496,
  		e: 0.702217,
  		a: 1.8045085
  	},
  	{
  		H: 18.12,
  		desig: "2001 VG75",
  		epoch: 2459200.5,
  		ma: 351.66366,
  		w: 257.2912,
  		om: 245.47523,
  		i: 20.66233,
  		e: 0.2971396,
  		a: 1.518845
  	},
  	{
  		H: 17.37,
  		desig: "2001 XR1",
  		epoch: 2459200.5,
  		ma: 150.0593,
  		w: 304.15438,
  		om: 291.51917,
  		i: 17.66073,
  		e: 0.5500939,
  		a: 1.2454148
  	},
  	{
  		H: 17.2,
  		desig: "2001 XV4",
  		epoch: 2459200.5,
  		ma: 191.07135,
  		w: 300.52765,
  		om: 259.18487,
  		i: 28.86274,
  		e: 0.4443018,
  		a: 1.8167279
  	},
  	{
  		H: 17.68,
  		desig: "2001 XS30",
  		epoch: 2459200.5,
  		ma: 287.72425,
  		w: 0.88011,
  		om: 251.45586,
  		i: 28.53277,
  		e: 0.8281661,
  		a: 1.1645076
  	},
  	{
  		H: 17.39,
  		desig: "2002 AJ29",
  		epoch: 2459200.5,
  		ma: 242.16282,
  		w: 0.52176,
  		om: 203.96166,
  		i: 10.9141,
  		e: 0.450212,
  		a: 1.9889708
  	},
  	{
  		H: 17,
  		desig: "2002 CW59",
  		epoch: 2459200.5,
  		ma: 30.68223,
  		w: 7.22714,
  		om: 151.12861,
  		i: 32.0898,
  		e: 0.5055532,
  		a: 2.382311
  	},
  	{
  		H: 16.38,
  		desig: "2002 DB4",
  		epoch: 2459200.5,
  		ma: 343.00908,
  		w: 94.13653,
  		om: 234.25339,
  		i: 16.60263,
  		e: 0.3695354,
  		a: 0.857957
  	},
  	{
  		H: 16.79,
  		desig: "2002 JS100",
  		epoch: 2459200.5,
  		ma: 330.77571,
  		w: 192.09543,
  		om: 144.20994,
  		i: 13.32012,
  		e: 0.4851722,
  		a: 2.3848452
  	},
  	{
  		H: 17.2,
  		desig: "2002 MC",
  		epoch: 2459200.5,
  		ma: 162.60642,
  		w: 159.85801,
  		om: 151.54146,
  		i: 18.89951,
  		e: 0.508329,
  		a: 2.5783884
  	},
  	{
  		H: 16.31,
  		desig: "2002 MP3",
  		epoch: 2459200.5,
  		ma: 127.33688,
  		w: 270.1388,
  		om: 100.33728,
  		i: 33.06925,
  		e: 0.4688936,
  		a: 1.9998928
  	},
  	{
  		H: 17.7,
  		desig: "2002 PO34",
  		epoch: 2459200.5,
  		ma: 59.73778,
  		w: 291.09133,
  		om: 143.62398,
  		i: 10.98945,
  		e: 0.3486976,
  		a: 1.8346675
  	},
  	{
  		H: 16.22,
  		desig: "2002 QE15",
  		epoch: 2459200.5,
  		ma: 153.15281,
  		w: 160.51469,
  		om: 226.39082,
  		i: 28.2482,
  		e: 0.3444246,
  		a: 1.666975
  	},
  	{
  		H: 18.17,
  		desig: "2002 RX211",
  		epoch: 2459200.5,
  		ma: 25.10675,
  		w: 324.37014,
  		om: 96.65042,
  		i: 6.06866,
  		e: 0.4571255,
  		a: 2.0653537
  	},
  	{
  		H: 18.13,
  		desig: "2002 TC9",
  		epoch: 2459200.5,
  		ma: 257.71267,
  		w: 29.25622,
  		om: 191.84248,
  		i: 16.27802,
  		e: 0.1544666,
  		a: 1.2334924
  	},
  	{
  		H: 16.36,
  		desig: "2002 TB58",
  		epoch: 2459200.5,
  		ma: 76.6967,
  		w: 267.94591,
  		om: 219.33577,
  		i: 23.40568,
  		e: 0.5651193,
  		a: 2.6286264
  	},
  	{
  		H: 18.16,
  		desig: "2002 TX68",
  		epoch: 2459200.5,
  		ma: 220.94856,
  		w: 122.46112,
  		om: 150.15123,
  		i: 16.65268,
  		e: 0.2933213,
  		a: 1.6742705
  	},
  	{
  		H: 17.1,
  		desig: "2002 TR69",
  		epoch: 2459200.5,
  		ma: 39.22278,
  		w: 192.19602,
  		om: 341.98447,
  		i: 20.48811,
  		e: 0.3434168,
  		a: 1.6599161
  	},
  	{
  		H: 16.11,
  		desig: "2002 UM11",
  		epoch: 2459200.5,
  		ma: 193.89178,
  		w: 229.02261,
  		om: 229.00393,
  		i: 41.02282,
  		e: 0.3874796,
  		a: 1.9512145
  	},
  	{
  		H: 15.99,
  		desig: "2003 BC21",
  		epoch: 2459200.5,
  		ma: 142.12802,
  		w: 114.03182,
  		om: 292.15571,
  		i: 5.47404,
  		e: 0.5105383,
  		a: 2.5952376
  	},
  	{
  		H: 17.82,
  		desig: "2003 BQ46",
  		epoch: 2459200.5,
  		ma: 162.8838,
  		w: 44.17059,
  		om: 163.81003,
  		i: 8.16813,
  		e: 0.351406,
  		a: 1.9489641
  	},
  	{
  		H: 15.89,
  		desig: "2003 HM16",
  		epoch: 2459200.5,
  		ma: 122.62064,
  		w: 47.03532,
  		om: 195.95403,
  		i: 35.59804,
  		e: 0.5763359,
  		a: 1.9666271
  	},
  	{
  		H: 16.41,
  		desig: "2003 LP6",
  		epoch: 2459200.5,
  		ma: 189.60851,
  		w: 260.64961,
  		om: 144.5405,
  		i: 43.57483,
  		e: 0.8836147,
  		a: 1.7462144
  	},
  	{
  		H: 18.2,
  		desig: "2003 NP7",
  		epoch: 2459200.5,
  		ma: 159.5079,
  		w: 323.50776,
  		om: 285.23882,
  		i: 11.11174,
  		e: 0.417118,
  		a: 2.1806045
  	},
  	{
  		H: 16.28,
  		desig: "2003 SA224",
  		epoch: 2459200.5,
  		ma: 5.67169,
  		w: 141.91001,
  		om: 2.80225,
  		i: 13.86169,
  		e: 0.3290221,
  		a: 1.6493886
  	},
  	{
  		H: 15.37,
  		desig: "2003 YQ117",
  		epoch: 2459200.5,
  		ma: 157.58802,
  		w: 135.67455,
  		om: 217.51014,
  		i: 21.02572,
  		e: 0.6546107,
  		a: 2.1816379
  	},
  	{
  		H: 16.51,
  		desig: "2004 EW9",
  		epoch: 2459200.5,
  		ma: 60.20577,
  		w: 8.1701,
  		om: 288.82362,
  		i: 8.79171,
  		e: 0.533655,
  		a: 1.9173818
  	},
  	{
  		H: 15.47,
  		desig: "2004 LA12",
  		epoch: 2459200.5,
  		ma: 359.93202,
  		w: 199.4303,
  		om: 159.22634,
  		i: 39.42854,
  		e: 0.7491687,
  		a: 2.5086639
  	},
  	{
  		H: 17.4,
  		desig: "2004 WG1",
  		epoch: 2459200.5,
  		ma: 334.16253,
  		w: 232.47302,
  		om: 42.00397,
  		i: 13.03967,
  		e: 0.5215146,
  		a: 1.6398722
  	},
  	{
  		H: 17.3,
  		desig: "2005 CK38",
  		epoch: 2459200.5,
  		ma: 2.44061,
  		w: 213.73444,
  		om: 8.75152,
  		i: 8.22932,
  		e: 0.4111835,
  		a: 2.133428
  	},
  	{
  		H: 16.42,
  		desig: "4788 P-L",
  		epoch: 2459200.5,
  		ma: 49.06493,
  		w: 100.90837,
  		om: 174.38911,
  		i: 11.08808,
  		e: 0.5560285,
  		a: 2.6392059
  	},
  	{
  		H: 16.71,
  		desig: "1990 SA",
  		epoch: 2459200.5,
  		ma: 237.17872,
  		w: 115.15643,
  		om: 172.16423,
  		i: 38.14357,
  		e: 0.4416722,
  		a: 2.0138079
  	},
  	{
  		H: 17.06,
  		desig: "1994 GY",
  		epoch: 2459200.5,
  		ma: 19.27404,
  		w: 190.52168,
  		om: 33.74894,
  		i: 12.31886,
  		e: 0.5234965,
  		a: 2.6874751
  	},
  	{
  		H: 16.29,
  		desig: "1998 FR11",
  		epoch: 2459200.5,
  		ma: 275.68612,
  		w: 158.58562,
  		om: 129.87162,
  		i: 6.66705,
  		e: 0.7065159,
  		a: 2.8119148
  	},
  	{
  		H: 16.58,
  		desig: "1998 KU2",
  		epoch: 2459200.5,
  		ma: 213.71793,
  		w: 120.29089,
  		om: 205.73252,
  		i: 4.92752,
  		e: 0.55285,
  		a: 2.251426
  	},
  	{
  		H: 16.52,
  		desig: "2000 CF59",
  		epoch: 2459200.5,
  		ma: 258.95616,
  		w: 222.43573,
  		om: 141.77369,
  		i: 41.56385,
  		e: 0.6408219,
  		a: 1.6791536
  	},
  	{
  		H: 18.09,
  		desig: "2000 CQ101",
  		epoch: 2459200.5,
  		ma: 338.2754,
  		w: 173.93585,
  		om: 29.84346,
  		i: 2.97051,
  		e: 0.4911485,
  		a: 2.2922476
  	},
  	{
  		H: 16.15,
  		desig: "2000 EA107",
  		epoch: 2459200.5,
  		ma: 238.15601,
  		w: 278.01872,
  		om: 52.89084,
  		i: 28.57883,
  		e: 0.4557544,
  		a: 0.9297479
  	},
  	{
  		H: 17.59,
  		desig: "2000 FM10",
  		epoch: 2459200.5,
  		ma: 36.35645,
  		w: 343.94138,
  		om: 18.54445,
  		i: 8.73411,
  		e: 0.6807527,
  		a: 1.4810838
  	},
  	{
  		H: 16.69,
  		desig: "2000 FN10",
  		epoch: 2459200.5,
  		ma: 224.65852,
  		w: 235.42774,
  		om: 8.18714,
  		i: 27.07601,
  		e: 0.4560328,
  		a: 1.9389068
  	},
  	{
  		H: 17.47,
  		desig: "2000 GC2",
  		epoch: 2459200.5,
  		ma: 176.88615,
  		w: 280.23841,
  		om: 358.69293,
  		i: 55.2947,
  		e: 0.1870378,
  		a: 1.3835497
  	},
  	{
  		H: 17.58,
  		desig: "2000 GP82",
  		epoch: 2459200.5,
  		ma: 266.22979,
  		w: 333.06733,
  		om: 114.87975,
  		i: 13.22998,
  		e: 0.3931718,
  		a: 1.3964424
  	},
  	{
  		H: 17.42,
  		desig: "2000 WB1",
  		epoch: 2459200.5,
  		ma: 250.10804,
  		w: 262.91168,
  		om: 21.39456,
  		i: 41.1087,
  		e: 0.6190854,
  		a: 1.301313
  	},
  	{
  		H: 17.43,
  		desig: "2001 AU47",
  		epoch: 2459200.5,
  		ma: 237.74684,
  		w: 9.36505,
  		om: 311.90834,
  		i: 35.97958,
  		e: 0.5307364,
  		a: 1.2989764
  	},
  	{
  		H: 15.21,
  		desig: "2001 BW15",
  		epoch: 2459200.5,
  		ma: 87.21858,
  		w: 297.95891,
  		om: 328.89594,
  		i: 41.24138,
  		e: 0.5909208,
  		a: 2.1174437
  	},
  	{
  		H: 17.82,
  		desig: "2001 CB32",
  		epoch: 2459200.5,
  		ma: 147.48191,
  		w: 330.48557,
  		om: 75.56192,
  		i: 9.6735,
  		e: 0.6137432,
  		a: 1.7814338
  	},
  	{
  		H: 17.16,
  		desig: "2001 CL42",
  		epoch: 2459200.5,
  		ma: 349.14449,
  		w: 270.8432,
  		om: 12.05388,
  		i: 21.65401,
  		e: 0.4025357,
  		a: 1.5570846
  	},
  	{
  		H: 16.67,
  		desig: "2001 JL1",
  		epoch: 2459200.5,
  		ma: 318.91892,
  		w: 272.42557,
  		om: 226.64995,
  		i: 26.98067,
  		e: 0.5232563,
  		a: 2.5528195
  	},
  	{
  		H: 17.1,
  		desig: "2001 QP153",
  		epoch: 2459200.5,
  		ma: 91.36159,
  		w: 244.27936,
  		om: 317.6805,
  		i: 50.20901,
  		e: 0.2138476,
  		a: 0.8914387
  	},
  	{
  		H: 18.1,
  		desig: "2001 VH75",
  		epoch: 2459200.5,
  		ma: 60.78729,
  		w: 244.24684,
  		om: 276.26834,
  		i: 10.61187,
  		e: 0.7416766,
  		a: 2.1011467
  	},
  	{
  		H: 16.74,
  		desig: "2001 XT30",
  		epoch: 2459200.5,
  		ma: 96.1231,
  		w: 219.35484,
  		om: 139.87014,
  		i: 8.99788,
  		e: 0.5663675,
  		a: 2.7527447
  	},
  	{
  		H: 16.72,
  		desig: "2002 AD9",
  		epoch: 2459200.5,
  		ma: 38.41115,
  		w: 9.77725,
  		om: 2.57877,
  		i: 31.01756,
  		e: 0.8088304,
  		a: 1.773509
  	},
  	{
  		H: 17.8,
  		desig: "2002 AB29",
  		epoch: 2459200.5,
  		ma: 238.5381,
  		w: 73.19368,
  		om: 89.71375,
  		i: 46.53208,
  		e: 0.7586192,
  		a: 2.5321917
  	},
  	{
  		H: 17.94,
  		desig: "2002 BY",
  		epoch: 2459200.5,
  		ma: 186.31294,
  		w: 23.70435,
  		om: 214.27334,
  		i: 2.72419,
  		e: 0.3464691,
  		a: 1.818172
  	},
  	{
  		H: 16.49,
  		desig: "2002 CY46",
  		epoch: 2459200.5,
  		ma: 359.90577,
  		w: 319.39481,
  		om: 346.16392,
  		i: 44.1948,
  		e: 0.4627143,
  		a: 1.8900359
  	},
  	{
  		H: 17.4,
  		desig: "2002 CV59",
  		epoch: 2459200.5,
  		ma: 267.76426,
  		w: 347.12309,
  		om: 13.09761,
  		i: 49.05616,
  		e: 0.5321157,
  		a: 1.2100093
  	},
  	{
  		H: 17.4,
  		desig: "2002 FA5",
  		epoch: 2459200.5,
  		ma: 118.81378,
  		w: 126.34774,
  		om: 172.58114,
  		i: 23.61971,
  		e: 0.2962604,
  		a: 1.8339717
  	},
  	{
  		H: 16.7,
  		desig: "2002 JN97",
  		epoch: 2459200.5,
  		ma: 171.67362,
  		w: 341.63491,
  		om: 67.64519,
  		i: 10.0878,
  		e: 0.7184394,
  		a: 1.850962
  	},
  	{
  		H: 17.49,
  		desig: "2002 KL6",
  		epoch: 2459200.5,
  		ma: 89.99941,
  		w: 98.04359,
  		om: 213.27813,
  		i: 3.24571,
  		e: 0.5487977,
  		a: 2.3068887
  	},
  	{
  		H: 17.9,
  		desig: "2002 RM129",
  		epoch: 2459200.5,
  		ma: 199.00574,
  		w: 357.53522,
  		om: 132.67179,
  		i: 14.57672,
  		e: 0.4650379,
  		a: 1.511329
  	},
  	{
  		H: 16.56,
  		desig: "2002 TB9",
  		epoch: 2459200.5,
  		ma: 97.099,
  		w: 322.57091,
  		om: 196.31498,
  		i: 29.7101,
  		e: 0.5912943,
  		a: 1.8047522
  	},
  	{
  		H: 15.97,
  		desig: "2002 XK4",
  		epoch: 2459200.5,
  		ma: 86.15447,
  		w: 24.94327,
  		om: 331.6586,
  		i: 17.75277,
  		e: 0.6918771,
  		a: 1.8502406
  	},
  	{
  		H: 15.25,
  		desig: "2003 CJ11",
  		epoch: 2459200.5,
  		ma: 122.2817,
  		w: 356.38862,
  		om: 61.69655,
  		i: 20.80219,
  		e: 0.8349452,
  		a: 2.5826527
  	},
  	{
  		H: 16.64,
  		desig: "2003 HA",
  		epoch: 2459200.5,
  		ma: 158.12456,
  		w: 277.12745,
  		om: 53.50099,
  		i: 36.82399,
  		e: 0.5803238,
  		a: 1.1843436
  	},
  	{
  		H: 16.62,
  		desig: "2003 MX2",
  		epoch: 2459200.5,
  		ma: 331.53489,
  		w: 300.51279,
  		om: 58.6846,
  		i: 7.18272,
  		e: 0.4589528,
  		a: 2.2898832
  	},
  	{
  		H: 18.12,
  		desig: "2003 WO25",
  		epoch: 2459200.5,
  		ma: 211.91366,
  		w: 176.00653,
  		om: 357.85467,
  		i: 15.90503,
  		e: 0.4917757,
  		a: 1.5571728
  	},
  	{
  		H: 16.29,
  		desig: "2004 FE3",
  		epoch: 2459200.5,
  		ma: 225.72575,
  		w: 338.23542,
  		om: 339.09362,
  		i: 22.95642,
  		e: 0.6472337,
  		a: 2.3104777
  	},
  	{
  		H: 18.01,
  		desig: "2005 EA94",
  		epoch: 2459200.5,
  		ma: 185.53524,
  		w: 308.98546,
  		om: 104.11538,
  		i: 10.32851,
  		e: 0.6635756,
  		a: 1.5162776
  	},
  	{
  		H: 17.5,
  		desig: "2005 TB",
  		epoch: 2459200.5,
  		ma: 306.3275,
  		w: 44.77721,
  		om: 226.18511,
  		i: 30.38195,
  		e: 0.3484422,
  		a: 1.2613788
  	},
  	{
  		H: 17.42,
  		desig: "2005 UD",
  		epoch: 2459200.5,
  		ma: 227.75833,
  		w: 207.60138,
  		om: 19.71968,
  		i: 28.66209,
  		e: 0.8722632,
  		a: 1.2747719
  	},
  	{
  		H: 17.1,
  		desig: "2006 DZ169",
  		epoch: 2459200.5,
  		ma: 323.86012,
  		w: 275.95416,
  		om: 14.82657,
  		i: 6.61635,
  		e: 0.4089606,
  		a: 2.0340033
  	},
  	{
  		H: 16.4,
  		desig: "2006 SK198",
  		epoch: 2459200.5,
  		ma: 332.33396,
  		w: 352.57714,
  		om: 260.56048,
  		i: 9.23809,
  		e: 0.4665672,
  		a: 2.1072299
  	},
  	{
  		H: 18.29,
  		desig: "2006 SA218",
  		epoch: 2459200.5,
  		ma: 306.82745,
  		w: 278.03828,
  		om: 144.37636,
  		i: 18.5227,
  		e: 0.2414006,
  		a: 1.4775563
  	},
  	{
  		H: 16.5,
  		desig: "1998 UL1",
  		epoch: 2459200.5,
  		ma: 77.93419,
  		w: 353.22228,
  		om: 214.86364,
  		i: 41.96613,
  		e: 0.2139594,
  		a: 1.5268803
  	},
  	{
  		H: 16.5,
  		desig: "1999 AP10",
  		epoch: 2459200.5,
  		ma: 11.38768,
  		w: 47.57674,
  		om: 356.85312,
  		i: 7.57338,
  		e: 0.5714066,
  		a: 2.3809388
  	},
  	{
  		H: 18.09,
  		desig: "2000 DJ8",
  		epoch: 2459200.5,
  		ma: 245.04514,
  		w: 262.93278,
  		om: 139.54039,
  		i: 37.75047,
  		e: 0.2527367,
  		a: 1.4111458
  	},
  	{
  		H: 16.1,
  		desig: "2000 KB",
  		epoch: 2459200.5,
  		ma: 251.04483,
  		w: 185.34699,
  		om: 185.36149,
  		i: 56.1871,
  		e: 0.7989795,
  		a: 2.3359604
  	},
  	{
  		H: 17.3,
  		desig: "2000 UV16",
  		epoch: 2459200.5,
  		ma: 241.99887,
  		w: 352.70968,
  		om: 341.67282,
  		i: 4.06596,
  		e: 0.4829223,
  		a: 2.3486274
  	},
  	{
  		H: 17.9,
  		desig: "2001 FF7",
  		epoch: 2459200.5,
  		ma: 148.48111,
  		w: 59.37046,
  		om: 190.15678,
  		i: 47.51096,
  		e: 0.4444715,
  		a: 2.1038631
  	},
  	{
  		H: 17.62,
  		desig: "2001 HH31",
  		epoch: 2459200.5,
  		ma: 347.08445,
  		w: 275.91238,
  		om: 71.62989,
  		i: 12.85172,
  		e: 0.2889703,
  		a: 1.6544372
  	},
  	{
  		H: 17.04,
  		desig: "2001 TO103",
  		epoch: 2459200.5,
  		ma: 348.61914,
  		w: 261.61563,
  		om: 42.25181,
  		i: 25.72872,
  		e: 0.4349351,
  		a: 2.2129347
  	},
  	{
  		H: 16.57,
  		desig: "2002 AC2",
  		epoch: 2459200.5,
  		ma: 69.50842,
  		w: 208.11921,
  		om: 102.70039,
  		i: 58.88487,
  		e: 0.3516507,
  		a: 1.6741462
  	},
  	{
  		H: 17.14,
  		desig: "2002 AQ3",
  		epoch: 2459200.5,
  		ma: 116.86487,
  		w: 243.43992,
  		om: 124.23659,
  		i: 40.01622,
  		e: 0.4625336,
  		a: 2.1117187
  	},
  	{
  		H: 17.91,
  		desig: "2002 CZ46",
  		epoch: 2459200.5,
  		ma: 229.8977,
  		w: 246.38951,
  		om: 173.38843,
  		i: 16.23743,
  		e: 0.3242336,
  		a: 1.7032991
  	},
  	{
  		H: 16.34,
  		desig: "2002 LB6",
  		epoch: 2459200.5,
  		ma: 194.46791,
  		w: 141.00923,
  		om: 244.75091,
  		i: 24.7208,
  		e: 0.6880791,
  		a: 1.8036684
  	},
  	{
  		H: 17.5,
  		desig: "2002 PQ142",
  		epoch: 2459200.5,
  		ma: 64.20594,
  		w: 332.14194,
  		om: 151.29174,
  		i: 16.80377,
  		e: 0.7167655,
  		a: 1.6960475
  	},
  	{
  		H: 17.98,
  		desig: "2004 JW6",
  		epoch: 2459200.5,
  		ma: 51.60439,
  		w: 174.50938,
  		om: 143.93953,
  		i: 9.74928,
  		e: 0.4651139,
  		a: 2.1546334
  	},
  	{
  		H: 16.42,
  		desig: "2004 YJ32",
  		epoch: 2459200.5,
  		ma: 63.61787,
  		w: 234.19966,
  		om: 118.73732,
  		i: 7.52555,
  		e: 0.5244052,
  		a: 2.5234837
  	},
  	{
  		H: 17.99,
  		desig: "2005 CV69",
  		epoch: 2459200.5,
  		ma: 106.79691,
  		w: 95.6503,
  		om: 157.4812,
  		i: 27.75255,
  		e: 0.4193682,
  		a: 1.6541415
  	},
  	{
  		H: 17.84,
  		desig: "2005 UK",
  		epoch: 2459200.5,
  		ma: 73.41377,
  		w: 19.46062,
  		om: 222.56261,
  		i: 54.43909,
  		e: 0.4074946,
  		a: 1.8863562
  	},
  	{
  		H: 17.2,
  		desig: "1983 LB",
  		epoch: 2459200.5,
  		ma: 289.94456,
  		w: 220.70711,
  		om: 81.18149,
  		i: 25.27143,
  		e: 0.4790884,
  		a: 2.2864139
  	},
  	{
  		H: 17.5,
  		desig: "1988 PA",
  		epoch: 2459200.5,
  		ma: 108.45265,
  		w: 137.5965,
  		om: 162.12802,
  		i: 8.22418,
  		e: 0.4054432,
  		a: 2.1475739
  	},
  	{
  		H: 18.15,
  		desig: "1991 VE",
  		epoch: 2459200.5,
  		ma: 312.58091,
  		w: 193.65294,
  		om: 61.86568,
  		i: 7.2179,
  		e: 0.6646001,
  		a: 0.890853
  	},
  	{
  		H: 16.54,
  		name: "Konnohmaru",
  		desig: "1994 AB1",
  		epoch: 2459200.5,
  		ma: 242.84872,
  		w: 342.99149,
  		om: 66.75428,
  		i: 4.55391,
  		e: 0.5974671,
  		a: 2.830416
  	},
  	{
  		H: 16.59,
  		desig: "1996 DH",
  		epoch: 2459200.5,
  		ma: 11.80627,
  		w: 351.5445,
  		om: 309.28988,
  		i: 17.23342,
  		e: 0.2767373,
  		a: 1.5868534
  	},
  	{
  		H: 17.79,
  		desig: "1997 AE12",
  		epoch: 2459200.5,
  		ma: 261.47781,
  		w: 60.80657,
  		om: 304.81858,
  		i: 4.85381,
  		e: 0.5546434,
  		a: 2.3655149
  	},
  	{
  		H: 17.34,
  		desig: "1998 YQ11",
  		epoch: 2459200.5,
  		ma: 194.78227,
  		w: 245.75292,
  		om: 256.6039,
  		i: 11.93043,
  		e: 0.3963193,
  		a: 1.8742985
  	},
  	{
  		H: 17.12,
  		desig: "1999 DK3",
  		epoch: 2459200.5,
  		ma: 353.81305,
  		w: 103.09513,
  		om: 149.72464,
  		i: 43.14431,
  		e: 0.4432339,
  		a: 2.1151644
  	},
  	{
  		H: 17.21,
  		desig: "1999 GT6",
  		epoch: 2459200.5,
  		ma: 189.9779,
  		w: 78.89565,
  		om: 206.19343,
  		i: 4.0601,
  		e: 0.587032,
  		a: 2.8043243
  	},
  	{
  		H: 18.19,
  		desig: "1999 LF6",
  		epoch: 2459200.5,
  		ma: 257.1581,
  		w: 140.85952,
  		om: 208.51292,
  		i: 18.94289,
  		e: 0.2805747,
  		a: 1.4094952
  	},
  	{
  		H: 15.05,
  		desig: "1999 OP3",
  		epoch: 2459200.5,
  		ma: 323.25604,
  		w: 271.23716,
  		om: 311.48268,
  		i: 27.56696,
  		e: 0.6097289,
  		a: 2.7126185
  	},
  	{
  		H: 16.97,
  		desig: "1999 VO6",
  		epoch: 2459200.5,
  		ma: 112.68606,
  		w: 302.50285,
  		om: 206.86943,
  		i: 40.11115,
  		e: 0.737986,
  		a: 1.1354173
  	},
  	{
  		H: 17.2,
  		desig: "1999 VL12",
  		epoch: 2459200.5,
  		ma: 297.81139,
  		w: 40.94567,
  		om: 234.40715,
  		i: 20.18251,
  		e: 0.2361747,
  		a: 1.5937103
  	},
  	{
  		H: 17.7,
  		desig: "2000 JH5",
  		epoch: 2459200.5,
  		ma: 66.73152,
  		w: 353.52482,
  		om: 80.20041,
  		i: 22.21551,
  		e: 0.2382312,
  		a: 1.1456525
  	},
  	{
  		H: 17.4,
  		desig: "2000 PJ5",
  		epoch: 2459200.5,
  		ma: 129.69774,
  		w: 7.64013,
  		om: 124.41787,
  		i: 51.18364,
  		e: 0.3736566,
  		a: 0.8727211
  	},
  	{
  		H: 15.67,
  		desig: "2000 RJ34",
  		epoch: 2459200.5,
  		ma: 216.37586,
  		w: 144.99988,
  		om: 329.98796,
  		i: 14.20668,
  		e: 0.5761958,
  		a: 2.6363043
  	},
  	{
  		H: 16.43,
  		desig: "2000 SS164",
  		epoch: 2459200.5,
  		ma: 288.32719,
  		w: 312.1919,
  		om: 153.42117,
  		i: 7.87542,
  		e: 0.514494,
  		a: 2.5723573
  	},
  	{
  		H: 17.8,
  		desig: "2000 TK1",
  		epoch: 2459200.5,
  		ma: 359.58737,
  		w: 167.35543,
  		om: 13.0237,
  		i: 29.22887,
  		e: 0.5716333,
  		a: 1.1995466
  	},
  	{
  		H: 18.2,
  		desig: "2000 UN30",
  		epoch: 2459200.5,
  		ma: 211.42715,
  		w: 271.80805,
  		om: 66.23954,
  		i: 20.69092,
  		e: 0.4876006,
  		a: 2.1190673
  	},
  	{
  		H: 17.63,
  		desig: "2000 VM2",
  		epoch: 2459200.5,
  		ma: 138.91726,
  		w: 187.32464,
  		om: 329.81649,
  		i: 6.3899,
  		e: 0.6809566,
  		a: 1.7753342
  	},
  	{
  		H: 17.38,
  		desig: "2000 WG6",
  		epoch: 2459200.5,
  		ma: 249.05297,
  		w: 330.07437,
  		om: 60.75808,
  		i: 11.8479,
  		e: 0.4995703,
  		a: 2.3176618
  	},
  	{
  		H: 17.76,
  		desig: "2000 XL44",
  		epoch: 2459200.5,
  		ma: 354.95002,
  		w: 163.87077,
  		om: 332.02574,
  		i: 10.04524,
  		e: 0.4275749,
  		a: 2.2247159
  	},
  	{
  		H: 15.77,
  		desig: "2001 HG31",
  		epoch: 2459200.5,
  		ma: 312.72961,
  		w: 67.43668,
  		om: 36.51557,
  		i: 6.15717,
  		e: 0.5346907,
  		a: 2.5780738
  	},
  	{
  		H: 18.2,
  		desig: "2001 MT18",
  		epoch: 2459200.5,
  		ma: 279.90016,
  		w: 356.09643,
  		om: 170.53652,
  		i: 8.64696,
  		e: 0.5196369,
  		a: 1.2708903
  	},
  	{
  		H: 16.9,
  		desig: "2001 OB36",
  		epoch: 2459200.5,
  		ma: 275.91443,
  		w: 289.13356,
  		om: 113.00327,
  		i: 42.6737,
  		e: 0.6181119,
  		a: 2.9412169
  	},
  	{
  		H: 16.72,
  		desig: "2001 RR17",
  		epoch: 2459200.5,
  		ma: 173.96751,
  		w: 351.43795,
  		om: 177.61468,
  		i: 30.40292,
  		e: 0.4888842,
  		a: 1.552994
  	},
  	{
  		H: 18.2,
  		desig: "2001 SE170",
  		epoch: 2459200.5,
  		ma: 92.78574,
  		w: 124.91727,
  		om: 216.54209,
  		i: 19.97229,
  		e: 0.4534757,
  		a: 2.123889
  	},
  	{
  		H: 15.48,
  		desig: "2002 GH1",
  		epoch: 2459200.5,
  		ma: 88.5738,
  		w: 351.06928,
  		om: 170.25383,
  		i: 35.0223,
  		e: 0.5393312,
  		a: 2.6913011
  	},
  	{
  		H: 17.6,
  		desig: "2002 GD11",
  		epoch: 2459200.5,
  		ma: 327.28602,
  		w: 201.00512,
  		om: 95.63206,
  		i: 9.00485,
  		e: 0.4413091,
  		a: 2.1296355
  	},
  	{
  		H: 17.02,
  		desig: "2002 LJ",
  		epoch: 2459200.5,
  		ma: 347.23514,
  		w: 155.64293,
  		om: 247.05279,
  		i: 56.30604,
  		e: 0.6667509,
  		a: 1.3280429
  	},
  	{
  		H: 17.3,
  		desig: "2002 RV25",
  		epoch: 2459200.5,
  		ma: 310.4697,
  		w: 46.16015,
  		om: 18.12938,
  		i: 34.48088,
  		e: 0.4506571,
  		a: 1.9075674
  	},
  	{
  		H: 17.1,
  		desig: "2003 BB43",
  		epoch: 2459200.5,
  		ma: 259.77144,
  		w: 60.63914,
  		om: 148.9916,
  		i: 40.87571,
  		e: 0.5222129,
  		a: 2.4150787
  	},
  	{
  		H: 18.16,
  		desig: "2003 CY18",
  		epoch: 2459200.5,
  		ma: 64.38008,
  		w: 180.88751,
  		om: 114.40635,
  		i: 7.19979,
  		e: 0.4107363,
  		a: 1.5263858
  	},
  	{
  		H: 16.29,
  		name: "Atira",
  		desig: "2003 CP20",
  		epoch: 2459200.5,
  		ma: 135.96423,
  		w: 252.91274,
  		om: 103.8859,
  		i: 25.61966,
  		e: 0.3221315,
  		a: 0.741033
  	},
  	{
  		H: 17.32,
  		desig: "2003 DP13",
  		epoch: 2459200.5,
  		ma: 29.32253,
  		w: 283.18073,
  		om: 326.68433,
  		i: 9.817,
  		e: 0.5433871,
  		a: 2.641712
  	},
  	{
  		H: 16.48,
  		desig: "2003 EB50",
  		epoch: 2459200.5,
  		ma: 228.23482,
  		w: 278.94042,
  		om: 65.63384,
  		i: 29.50317,
  		e: 0.5190982,
  		a: 1.5707913
  	},
  	{
  		H: 15.39,
  		desig: "2003 KP2",
  		epoch: 2459200.5,
  		ma: 275.62061,
  		w: 190.61327,
  		om: 193.42505,
  		i: 44.64766,
  		e: 0.696484,
  		a: 2.7499434
  	},
  	{
  		H: 17.32,
  		desig: "2003 OS13",
  		epoch: 2459200.5,
  		ma: 321.00592,
  		w: 244.2322,
  		om: 272.20638,
  		i: 41.54627,
  		e: 0.7411588,
  		a: 1.2959201
  	},
  	{
  		H: 16.65,
  		desig: "2003 OR14",
  		epoch: 2459200.5,
  		ma: 80.31484,
  		w: 212.031,
  		om: 211.46664,
  		i: 13.06397,
  		e: 0.5038095,
  		a: 2.5120238
  	},
  	{
  		H: 17.18,
  		desig: "2003 SW222",
  		epoch: 2459200.5,
  		ma: 356.40475,
  		w: 165.07096,
  		om: 283.73136,
  		i: 16.11271,
  		e: 0.247996,
  		a: 1.6607104
  	},
  	{
  		H: 15.67,
  		desig: "2004 EC",
  		epoch: 2459200.5,
  		ma: 353.991,
  		w: 10.31648,
  		om: 28.82891,
  		i: 34.58233,
  		e: 0.8599749,
  		a: 1.9971336
  	},
  	{
  		H: 17.63,
  		desig: "2004 FN18",
  		epoch: 2459200.5,
  		ma: 269.32991,
  		w: 232.84464,
  		om: 214.43025,
  		i: 18.27258,
  		e: 0.4094086,
  		a: 1.7010626
  	},
  	{
  		H: 17.2,
  		desig: "2004 PT42",
  		epoch: 2459200.5,
  		ma: 259.44728,
  		w: 179.07409,
  		om: 144.98083,
  		i: 48.92805,
  		e: 0.4163392,
  		a: 2.01242
  	},
  	{
  		H: 17.35,
  		desig: "2005 GN59",
  		epoch: 2459200.5,
  		ma: 242.63252,
  		w: 203.01,
  		om: 218.99016,
  		i: 6.62543,
  		e: 0.4678459,
  		a: 1.6567197
  	},
  	{
  		H: 16.94,
  		desig: "1997 ET30",
  		epoch: 2459200.5,
  		ma: 144.89622,
  		w: 263.3531,
  		om: 23.27284,
  		i: 6.81351,
  		e: 0.448576,
  		a: 2.1380938
  	},
  	{
  		H: 16.55,
  		desig: "2002 JM97",
  		epoch: 2459200.5,
  		ma: 31.62598,
  		w: 236.42554,
  		om: 63.5054,
  		i: 12.6285,
  		e: 0.5485595,
  		a: 2.7193788
  	},
  	{
  		H: 17.7,
  		desig: "2002 UO3",
  		epoch: 2459200.5,
  		ma: 179.30728,
  		w: 329.30206,
  		om: 184.73624,
  		i: 24.51906,
  		e: 0.7970764,
  		a: 2.9720054
  	},
  	{
  		H: 17.2,
  		desig: "2003 WM7",
  		epoch: 2459200.5,
  		ma: 102.82651,
  		w: 143.78537,
  		om: 48.5518,
  		i: 10.40829,
  		e: 0.8801431,
  		a: 2.4762333
  	},
  	{
  		H: 16.97,
  		desig: "2004 TY16",
  		epoch: 2459200.5,
  		ma: 211.0128,
  		w: 177.44691,
  		om: 329.85984,
  		i: 8.15554,
  		e: 0.4055375,
  		a: 1.9825332
  	},
  	{
  		H: 17.76,
  		desig: "2001 WR1",
  		epoch: 2459200.5,
  		ma: 66.82205,
  		w: 48.57366,
  		om: 6.51474,
  		i: 25.0292,
  		e: 0.2024963,
  		a: 1.2772729
  	},
  	{
  		H: 17.53,
  		desig: "2004 BV102",
  		epoch: 2459200.5,
  		ma: 314.77986,
  		w: 17.18277,
  		om: 341.3111,
  		i: 7.21956,
  		e: 0.6994837,
  		a: 1.5435737
  	},
  	{
  		H: 18.1,
  		desig: "1998 XC9",
  		epoch: 2459200.5,
  		ma: 296.79841,
  		w: 124.63536,
  		om: 317.31108,
  		i: 9.60271,
  		e: 0.532743,
  		a: 2.7458764
  	},
  	{
  		H: 18.2,
  		desig: "2001 PK9",
  		epoch: 2459200.5,
  		ma: 116.11641,
  		w: 313.84568,
  		om: 272.98965,
  		i: 10.41896,
  		e: 0.3947938,
  		a: 1.779493
  	},
  	{
  		H: 17.61,
  		desig: "2002 CC19",
  		epoch: 2459200.5,
  		ma: 310.91663,
  		w: 20.10468,
  		om: 134.74654,
  		i: 50.06177,
  		e: 0.1134734,
  		a: 1.2847303
  	},
  	{
  		H: 17.2,
  		desig: "2003 XL",
  		epoch: 2459200.5,
  		ma: 55.10088,
  		w: 207.11289,
  		om: 317.60149,
  		i: 10.96684,
  		e: 0.5718284,
  		a: 2.5189416
  	},
  	{
  		H: 18.01,
  		desig: "2004 BU58",
  		epoch: 2459200.5,
  		ma: 247.86351,
  		w: 171.80192,
  		om: 120.17784,
  		i: 57.23347,
  		e: 0.5570969,
  		a: 1.2539464
  	},
  	{
  		H: 16.56,
  		desig: "2004 QQ",
  		epoch: 2459200.5,
  		ma: 313.14927,
  		w: 31.43085,
  		om: 288.12395,
  		i: 5.72549,
  		e: 0.6639318,
  		a: 2.2486702
  	},
  	{
  		H: 18.21,
  		desig: "2000 DM1",
  		epoch: 2459200.5,
  		ma: 282.06743,
  		w: 306.70575,
  		om: 342.77631,
  		i: 20.70165,
  		e: 0.4839705,
  		a: 1.3690577
  	},
  	{
  		H: 16.65,
  		desig: "2003 WC25",
  		epoch: 2459200.5,
  		ma: 358.50362,
  		w: 9.48553,
  		om: 347.70931,
  		i: 10.25288,
  		e: 0.4858975,
  		a: 2.2946738
  	},
  	{
  		H: 17.51,
  		desig: "2004 XM14",
  		epoch: 2459200.5,
  		ma: 54.2639,
  		w: 186.36364,
  		om: 89.42446,
  		i: 42.40515,
  		e: 0.6989422,
  		a: 1.1541917
  	},
  	{
  		H: 17.6,
  		desig: "2000 CG59",
  		epoch: 2459200.5,
  		ma: 161.92532,
  		w: 29.57931,
  		om: 28.64064,
  		i: 4.17853,
  		e: 0.4922263,
  		a: 2.4724685
  	},
  	{
  		H: 17.64,
  		desig: "2001 MA8",
  		epoch: 2459200.5,
  		ma: 132.05469,
  		w: 357.55555,
  		om: 269.62525,
  		i: 7.58693,
  		e: 0.462867,
  		a: 2.3731387
  	},
  	{
  		H: 17.73,
  		desig: "2003 HU42",
  		epoch: 2459200.5,
  		ma: 194.31722,
  		w: 196.36812,
  		om: 203.09742,
  		i: 10.53158,
  		e: 0.3404175,
  		a: 1.8441479
  	},
  	{
  		H: 16.42,
  		desig: "2006 KE89",
  		epoch: 2459200.5,
  		ma: 120.08143,
  		w: 299.20449,
  		om: 88.62164,
  		i: 45.10342,
  		e: 0.7990821,
  		a: 1.0532899
  	},
  	{
  		H: 17.92,
  		desig: "1998 HK3",
  		epoch: 2459200.5,
  		ma: 358.36158,
  		w: 267.63163,
  		om: 27.1116,
  		i: 24.69986,
  		e: 0.3000474,
  		a: 1.8282342
  	},
  	{
  		H: 18,
  		desig: "1998 SF35",
  		epoch: 2459200.5,
  		ma: 344.41571,
  		w: 253.77972,
  		om: 218.59385,
  		i: 35.18427,
  		e: 0.2739403,
  		a: 1.6853082
  	},
  	{
  		H: 16.9,
  		desig: "2000 ER70",
  		epoch: 2459200.5,
  		ma: 86.81669,
  		w: 338.6463,
  		om: 111.60619,
  		i: 36.92251,
  		e: 0.3111518,
  		a: 1.8570439
  	},
  	{
  		H: 17.96,
  		desig: "2004 FE31",
  		epoch: 2459200.5,
  		ma: 35.47025,
  		w: 150.3201,
  		om: 200.76535,
  		i: 13.06188,
  		e: 0.4525026,
  		a: 1.5736241
  	},
  	{
  		H: 17.3,
  		desig: "2005 EK70",
  		epoch: 2459200.5,
  		ma: 60.78558,
  		w: 347.04946,
  		om: 329.80361,
  		i: 30.00298,
  		e: 0.1354368,
  		a: 0.9595128
  	},
  	{
  		H: 17.33,
  		desig: "2002 JC",
  		epoch: 2459200.5,
  		ma: 222.891,
  		w: 306.91102,
  		om: 69.3935,
  		i: 40.85638,
  		e: 0.3907394,
  		a: 0.8189036
  	},
  	{
  		H: 17.44,
  		desig: "2004 HE62",
  		epoch: 2459200.5,
  		ma: 6.34947,
  		w: 21.37024,
  		om: 302.86205,
  		i: 24.7098,
  		e: 0.5730722,
  		a: 2.5488417
  	},
  	{
  		H: 16.3,
  		desig: "1996 FR3",
  		epoch: 2459200.5,
  		ma: 301.68548,
  		w: 36.69635,
  		om: 27.17713,
  		i: 8.04154,
  		e: 0.7931381,
  		a: 2.1692501
  	},
  	{
  		H: 16.49,
  		desig: "2000 UT16",
  		epoch: 2459200.5,
  		ma: 341.28945,
  		w: 91.22594,
  		om: 257.2697,
  		i: 26.23197,
  		e: 0.5118603,
  		a: 2.5698517
  	},
  	{
  		H: 15.66,
  		desig: "2005 CA",
  		epoch: 2459200.5,
  		ma: 223.36998,
  		w: 203.91812,
  		om: 202.10507,
  		i: 16.74974,
  		e: 0.5888286,
  		a: 2.7267824
  	},
  	{
  		H: 16.8,
  		desig: "2000 RL77",
  		epoch: 2459200.5,
  		ma: 328.60906,
  		w: 234.99637,
  		om: 194.47071,
  		i: 30.14491,
  		e: 0.5348122,
  		a: 2.5584344
  	},
  	{
  		H: 17.8,
  		desig: "2001 LE6",
  		epoch: 2459200.5,
  		ma: 327.71567,
  		w: 201.52535,
  		om: 290.55921,
  		i: 12.63156,
  		e: 0.6933388,
  		a: 1.2058547
  	},
  	{
  		H: 17.51,
  		desig: "2003 XE11",
  		epoch: 2459200.5,
  		ma: 279.86452,
  		w: 173.15461,
  		om: 223.48421,
  		i: 26.95603,
  		e: 0.3770312,
  		a: 1.8447337
  	},
  	{
  		H: 17,
  		desig: "2004 VA64",
  		epoch: 2459200.5,
  		ma: 74.80387,
  		w: 19.94897,
  		om: 225.52123,
  		i: 29.92263,
  		e: 0.8905854,
  		a: 2.4651871
  	},
  	{
  		H: 17.1,
  		desig: "2005 QE30",
  		epoch: 2459200.5,
  		ma: 61.83949,
  		w: 216.93115,
  		om: 259.85608,
  		i: 6.23405,
  		e: 0.6893684,
  		a: 2.017159
  	},
  	{
  		H: 16.68,
  		desig: "2005 TJ174",
  		epoch: 2459200.5,
  		ma: 213.9542,
  		w: 56.16822,
  		om: 304.66748,
  		i: 3.98198,
  		e: 0.4529126,
  		a: 2.2380441
  	},
  	{
  		H: 17.24,
  		desig: "2005 UP156",
  		epoch: 2459200.5,
  		ma: 42.87272,
  		w: 91.21062,
  		om: 193.37966,
  		i: 4.20878,
  		e: 0.4700636,
  		a: 2.1152743
  	},
  	{
  		H: 18.2,
  		desig: "2006 AQ",
  		epoch: 2459200.5,
  		ma: 13.67601,
  		w: 105.48587,
  		om: 325.75504,
  		i: 4.08715,
  		e: 0.4860161,
  		a: 2.0534579
  	},
  	{
  		H: 18.2,
  		desig: "2001 QH96",
  		epoch: 2459200.5,
  		ma: 143.42376,
  		w: 130.42108,
  		om: 178.60096,
  		i: 13.95272,
  		e: 0.3645089,
  		a: 1.7493929
  	},
  	{
  		H: 16.3,
  		desig: "1999 RD32",
  		epoch: 2459200.5,
  		ma: 3.89732,
  		w: 300.0061,
  		om: 309.95351,
  		i: 6.79788,
  		e: 0.7696521,
  		a: 2.643673
  	},
  	{
  		H: 17.73,
  		desig: "2000 PK5",
  		epoch: 2459200.5,
  		ma: 174.18955,
  		w: 191.81905,
  		om: 227.21371,
  		i: 13.12915,
  		e: 0.7012937,
  		a: 1.9340649
  	},
  	{
  		H: 17.81,
  		desig: "2001 SG276",
  		epoch: 2459200.5,
  		ma: 183.59955,
  		w: 200.37427,
  		om: 35.11623,
  		i: 26.67708,
  		e: 0.247696,
  		a: 1.4326738
  	},
  	{
  		H: 16.9,
  		desig: "2001 VG5",
  		epoch: 2459200.5,
  		ma: 127.75254,
  		w: 280.03307,
  		om: 248.58582,
  		i: 13.65419,
  		e: 0.6113447,
  		a: 2.3058637
  	},
  	{
  		H: 16.2,
  		desig: "2003 EH1",
  		epoch: 2459200.5,
  		ma: 81.37727,
  		w: 171.3427,
  		om: 282.98283,
  		i: 70.83916,
  		e: 0.6187555,
  		a: 3.1235311
  	},
  	{
  		H: 16.9,
  		desig: "2005 LR3",
  		epoch: 2459200.5,
  		ma: 236.55288,
  		w: 26.38872,
  		om: 73.80452,
  		i: 24.99462,
  		e: 0.3351268,
  		a: 1.6541961
  	},
  	{
  		H: 17.25,
  		desig: "2005 RC",
  		epoch: 2459200.5,
  		ma: 328.4866,
  		w: 40.601,
  		om: 191.96564,
  		i: 16.25072,
  		e: 0.7513578,
  		a: 2.1539547
  	},
  	{
  		H: 18.02,
  		desig: "2005 XH8",
  		epoch: 2459200.5,
  		ma: 261.12809,
  		w: 159.10085,
  		om: 79.71697,
  		i: 29.06536,
  		e: 0.6914721,
  		a: 1.3225539
  	},
  	{
  		H: 18.21,
  		desig: "2003 QM47",
  		epoch: 2459200.5,
  		ma: 2.91883,
  		w: 303.08118,
  		om: 149.12748,
  		i: 33.11755,
  		e: 0.303486,
  		a: 1.7923641
  	},
  	{
  		H: 18.1,
  		desig: "1996 BZ3",
  		epoch: 2459200.5,
  		ma: 292.71231,
  		w: 280.33165,
  		om: 176.68677,
  		i: 3.39139,
  		e: 0.5310782,
  		a: 2.6317249
  	},
  	{
  		H: 17.09,
  		desig: "2002 CT11",
  		epoch: 2459200.5,
  		ma: 192.46916,
  		w: 24.88024,
  		om: 6.05873,
  		i: 53.85244,
  		e: 0.5386263,
  		a: 1.2580348
  	},
  	{
  		H: 17.7,
  		desig: "2002 EB3",
  		epoch: 2459200.5,
  		ma: 343.85898,
  		w: 300.31491,
  		om: 1.55866,
  		i: 9.92414,
  		e: 0.684039,
  		a: 1.758064
  	},
  	{
  		H: 16.27,
  		desig: "2005 WS55",
  		epoch: 2459200.5,
  		ma: 19.21456,
  		w: 203.28045,
  		om: 283.61466,
  		i: 23.78802,
  		e: 0.4541247,
  		a: 2.0289301
  	},
  	{
  		H: 16.73,
  		desig: "2006 KT1",
  		epoch: 2459200.5,
  		ma: 7.40609,
  		w: 189.30312,
  		om: 138.66304,
  		i: 9.25477,
  		e: 0.4735767,
  		a: 2.3068037
  	},
  	{
  		H: 17.7,
  		desig: "2004 RM251",
  		epoch: 2459200.5,
  		ma: 284.2492,
  		w: 111.20133,
  		om: 349.34378,
  		i: 19.46421,
  		e: 0.6013592,
  		a: 2.6067413
  	},
  	{
  		H: 16.66,
  		desig: "2006 EV52",
  		epoch: 2459200.5,
  		ma: 308.47071,
  		w: 167.11619,
  		om: 168.50167,
  		i: 15.95495,
  		e: 0.7076072,
  		a: 2.0159132
  	},
  	{
  		H: 17.7,
  		desig: "2003 SG170",
  		epoch: 2459200.5,
  		ma: 228.52907,
  		w: 309.27169,
  		om: 199.25726,
  		i: 36.99211,
  		e: 0.6035142,
  		a: 1.8594033
  	},
  	{
  		H: 15.33,
  		desig: "2004 JN13",
  		epoch: 2459200.5,
  		ma: 93.12246,
  		w: 279.12768,
  		om: 85.12544,
  		i: 13.33978,
  		e: 0.6898541,
  		a: 2.8922249
  	},
  	{
  		H: 15.46,
  		desig: "2000 NM",
  		epoch: 2459200.5,
  		ma: 219.94164,
  		w: 71.32513,
  		om: 273.35608,
  		i: 22.28007,
  		e: 0.6635021,
  		a: 2.6867924
  	},
  	{
  		H: 17.86,
  		desig: "2004 FU64",
  		epoch: 2459200.5,
  		ma: 190.91078,
  		w: 286.43773,
  		om: 20.88441,
  		i: 24.87822,
  		e: 0.3671119,
  		a: 1.8377832
  	},
  	{
  		H: 17.57,
  		desig: "2004 XP164",
  		epoch: 2459200.5,
  		ma: 10.49545,
  		w: 310.66463,
  		om: 126.83654,
  		i: 22.69367,
  		e: 0.4125042,
  		a: 2.177658
  	},
  	{
  		H: 17.1,
  		desig: "2000 TO64",
  		epoch: 2459200.5,
  		ma: 157.37821,
  		w: 177.75688,
  		om: 223.6854,
  		i: 37.5233,
  		e: 0.618874,
  		a: 2.7437689
  	},
  	{
  		H: 18.16,
  		desig: "2000 XK44",
  		epoch: 2459200.5,
  		ma: 330.90692,
  		w: 347.61172,
  		om: 48.10992,
  		i: 11.23507,
  		e: 0.3852166,
  		a: 1.7241936
  	},
  	{
  		H: 16.27,
  		desig: "2006 WO127",
  		epoch: 2459200.5,
  		ma: 121.97224,
  		w: 314.24672,
  		om: 167.66996,
  		i: 10.99929,
  		e: 0.5501248,
  		a: 2.1946324
  	},
  	{
  		H: 16.95,
  		desig: "1991 LH",
  		epoch: 2459200.5,
  		ma: 352.92125,
  		w: 203.79866,
  		om: 281.04846,
  		i: 53.15478,
  		e: 0.7332089,
  		a: 1.3565463
  	},
  	{
  		H: 17.1,
  		desig: "1997 US9",
  		epoch: 2459200.5,
  		ma: 339.97315,
  		w: 357.37236,
  		om: 212.20995,
  		i: 20.01676,
  		e: 0.2819846,
  		a: 1.0528047
  	},
  	{
  		H: 16.75,
  		desig: "2001 QK142",
  		epoch: 2459200.5,
  		ma: 336.29442,
  		w: 319.555,
  		om: 40.49743,
  		i: 5.78126,
  		e: 0.5377511,
  		a: 2.483267
  	},
  	{
  		H: 18.17,
  		desig: "2005 EO1",
  		epoch: 2459200.5,
  		ma: 302.07797,
  		w: 40.89978,
  		om: 231.16552,
  		i: 13.87062,
  		e: 0.7050384,
  		a: 2.5363498
  	},
  	{
  		H: 18,
  		desig: "1999 HY1",
  		epoch: 2459200.5,
  		ma: 12.01079,
  		w: 89.86527,
  		om: 216.1094,
  		i: 34.22473,
  		e: 0.1308328,
  		a: 1.3863416
  	},
  	{
  		H: 17.67,
  		desig: "2000 AX93",
  		epoch: 2459200.5,
  		ma: 120.67075,
  		w: 234.25914,
  		om: 291.00987,
  		i: 23.34076,
  		e: 0.4798411,
  		a: 2.210335
  	},
  	{
  		H: 17.73,
  		desig: "2002 FB6",
  		epoch: 2459200.5,
  		ma: 255.63109,
  		w: 101.86802,
  		om: 182.68556,
  		i: 33.71031,
  		e: 0.5449457,
  		a: 1.7965563
  	},
  	{
  		H: 17.55,
  		desig: "2007 DA41",
  		epoch: 2459200.5,
  		ma: 238.32243,
  		w: 20.26656,
  		om: 225.92183,
  		i: 30.21868,
  		e: 0.4397107,
  		a: 1.461247
  	},
  	{
  		H: 17.27,
  		desig: "1999 YC",
  		epoch: 2459200.5,
  		ma: 104.56418,
  		w: 156.40252,
  		om: 64.78937,
  		i: 38.22476,
  		e: 0.8304533,
  		a: 1.4217078
  	},
  	{
  		H: 17.7,
  		desig: "2002 AF3",
  		epoch: 2459200.5,
  		ma: 43.3477,
  		w: 190.33817,
  		om: 353.24178,
  		i: 10.55103,
  		e: 0.6188399,
  		a: 1.9070662
  	},
  	{
  		H: 17.9,
  		desig: "2002 VT85",
  		epoch: 2459200.5,
  		ma: 104.73602,
  		w: 87.15816,
  		om: 256.01567,
  		i: 5.98698,
  		e: 0.4433999,
  		a: 2.2952773
  	},
  	{
  		H: 16.88,
  		desig: "2003 XF11",
  		epoch: 2459200.5,
  		ma: 102.47297,
  		w: 173.94397,
  		om: 116.0118,
  		i: 8.62178,
  		e: 0.8471987,
  		a: 2.1970021
  	},
  	{
  		H: 17.8,
  		desig: "2006 WR1",
  		epoch: 2459200.5,
  		ma: 4.69991,
  		w: 132.1066,
  		om: 105.997,
  		i: 38.18611,
  		e: 0.6137491,
  		a: 1.3329911
  	},
  	{
  		H: 17.2,
  		desig: "2001 DB3",
  		epoch: 2459200.5,
  		ma: 150.52328,
  		w: 264.55518,
  		om: 340.46542,
  		i: 24.51534,
  		e: 0.5613615,
  		a: 2.6801329
  	},
  	{
  		H: 17.9,
  		desig: "2003 FJ1",
  		epoch: 2459200.5,
  		ma: 170.48007,
  		w: 182.07338,
  		om: 128.59114,
  		i: 20.97486,
  		e: 0.8173749,
  		a: 2.1707597
  	},
  	{
  		H: 16.48,
  		desig: "2005 AT42",
  		epoch: 2459200.5,
  		ma: 81.86756,
  		w: 52.74302,
  		om: 157.00755,
  		i: 11.20811,
  		e: 0.6109292,
  		a: 2.8647856
  	},
  	{
  		H: 17.17,
  		desig: "2005 TU45",
  		epoch: 2459200.5,
  		ma: 206.12591,
  		w: 76.90699,
  		om: 120.15276,
  		i: 28.5449,
  		e: 0.4955385,
  		a: 1.9738597
  	},
  	{
  		H: 17.17,
  		desig: "2003 BT47",
  		epoch: 2459200.5,
  		ma: 338.76747,
  		w: 235.67067,
  		om: 352.49537,
  		i: 7.45655,
  		e: 0.4908411,
  		a: 2.3384804
  	},
  	{
  		H: 17.65,
  		desig: "1999 HE1",
  		epoch: 2459200.5,
  		ma: 318.40911,
  		w: 221.98304,
  		om: 65.81087,
  		i: 8.1663,
  		e: 0.5728135,
  		a: 2.3611058
  	},
  	{
  		H: 17.3,
  		desig: "2003 HW11",
  		epoch: 2459200.5,
  		ma: 287.14201,
  		w: 154.28665,
  		om: 150.3885,
  		i: 7.4023,
  		e: 0.4664299,
  		a: 2.3508372
  	},
  	{
  		H: 17.92,
  		desig: "2007 FV42",
  		epoch: 2459200.5,
  		ma: 70.40625,
  		w: 181.6475,
  		om: 100.97837,
  		i: 9.83653,
  		e: 0.4731121,
  		a: 2.1747771
  	},
  	{
  		H: 18.1,
  		desig: "1999 TA10",
  		epoch: 2459200.5,
  		ma: 222.64239,
  		w: 84.78983,
  		om: 214.66311,
  		i: 20.84189,
  		e: 0.2415962,
  		a: 1.5057783
  	},
  	{
  		H: 17.39,
  		desig: "2002 CF26",
  		epoch: 2459200.5,
  		ma: 212.95569,
  		w: 33.59638,
  		om: 342.08658,
  		i: 35.30851,
  		e: 0.341051,
  		a: 1.6036997
  	},
  	{
  		H: 16.51,
  		desig: "2003 EG",
  		epoch: 2459200.5,
  		ma: 215.9341,
  		w: 326.91634,
  		om: 359.03959,
  		i: 31.78633,
  		e: 0.7137777,
  		a: 1.738212
  	},
  	{
  		H: 17.33,
  		desig: "2008 LW8",
  		epoch: 2459200.5,
  		ma: 257.93448,
  		w: 118.60518,
  		om: 223.11858,
  		i: 17.26947,
  		e: 0.3936549,
  		a: 1.675451
  	},
  	{
  		H: 17.2,
  		desig: "1998 XM2",
  		epoch: 2459200.5,
  		ma: 61.71068,
  		w: 99.05416,
  		om: 248.54329,
  		i: 27.0964,
  		e: 0.3402744,
  		a: 1.8049645
  	},
  	{
  		H: 17.61,
  		desig: "2000 KO44",
  		epoch: 2459200.5,
  		ma: 53.68256,
  		w: 235.28038,
  		om: 114.34396,
  		i: 28.62593,
  		e: 0.3885418,
  		a: 1.8298698
  	},
  	{
  		H: 16.97,
  		desig: "2003 BH84",
  		epoch: 2459200.5,
  		ma: 294.42383,
  		w: 35.52947,
  		om: 283.24455,
  		i: 23.35177,
  		e: 0.7198101,
  		a: 1.9586626
  	},
  	{
  		H: 17.9,
  		desig: "2003 KR18",
  		epoch: 2459200.5,
  		ma: 299.725,
  		w: 86.74118,
  		om: 244.08403,
  		i: 5.58516,
  		e: 0.4807656,
  		a: 2.3446644
  	},
  	{
  		H: 18.09,
  		desig: "2003 QB90",
  		epoch: 2459200.5,
  		ma: 333.1095,
  		w: 208.81703,
  		om: 129.32937,
  		i: 4.8365,
  		e: 0.4751957,
  		a: 2.3182146
  	},
  	{
  		H: 16.08,
  		desig: "2006 UM216",
  		epoch: 2459200.5,
  		ma: 97.85535,
  		w: 146.62812,
  		om: 251.07946,
  		i: 15.87224,
  		e: 0.5231949,
  		a: 2.6758916
  	},
  	{
  		H: 17.25,
  		desig: "2007 TX18",
  		epoch: 2459200.5,
  		ma: 130.30974,
  		w: 16.01318,
  		om: 284.13726,
  		i: 7.35445,
  		e: 0.415058,
  		a: 2.1382508
  	},
  	{
  		H: 15.69,
  		desig: "2008 EN82",
  		epoch: 2459200.5,
  		ma: 147.1321,
  		w: 194.86769,
  		om: 206.94207,
  		i: 12.02499,
  		e: 0.5565822,
  		a: 2.4979166
  	},
  	{
  		H: 18.08,
  		desig: "2007 OG3",
  		epoch: 2459200.5,
  		ma: 72.00544,
  		w: 272.00003,
  		om: 78.32969,
  		i: 1.69266,
  		e: 0.4814617,
  		a: 2.1650933
  	},
  	{
  		H: 17.86,
  		desig: "2000 YH29",
  		epoch: 2459200.5,
  		ma: 35.43767,
  		w: 284.79742,
  		om: 103.70862,
  		i: 21.84858,
  		e: 0.5270397,
  		a: 2.2188901
  	},
  	{
  		H: 16.07,
  		desig: "2004 QU24",
  		epoch: 2459200.5,
  		ma: 230.20482,
  		w: 271.91352,
  		om: 188.10997,
  		i: 23.26065,
  		e: 0.616127,
  		a: 3.3211419
  	},
  	{
  		H: 16.45,
  		desig: "2006 CS",
  		epoch: 2459200.5,
  		ma: 341.2718,
  		w: 346.40045,
  		om: 172.411,
  		i: 52.3101,
  		e: 0.6978896,
  		a: 2.9133366
  	},
  	{
  		H: 17.4,
  		desig: "2006 SZ217",
  		epoch: 2459200.5,
  		ma: 218.11711,
  		w: 163.03902,
  		om: 241.37547,
  		i: 29.22266,
  		e: 0.2854021,
  		a: 1.6729092
  	},
  	{
  		H: 16.92,
  		desig: "2006 WZ2",
  		epoch: 2459200.5,
  		ma: 176.44786,
  		w: 65.98285,
  		om: 354.37734,
  		i: 24.65142,
  		e: 0.3302638,
  		a: 1.694213
  	},
  	{
  		H: 17.64,
  		desig: "1997 GH28",
  		epoch: 2459200.5,
  		ma: 168.17269,
  		w: 105.24121,
  		om: 354.42785,
  		i: 7.01208,
  		e: 0.371354,
  		a: 2.0042747
  	},
  	{
  		H: 17.34,
  		desig: "2001 RY11",
  		epoch: 2459200.5,
  		ma: 222.55725,
  		w: 71.52499,
  		om: 295.50827,
  		i: 22.84621,
  		e: 0.2834232,
  		a: 1.4830746
  	},
  	{
  		H: 17.93,
  		desig: "2004 BO41",
  		epoch: 2459200.5,
  		ma: 110.05716,
  		w: 254.42905,
  		om: 337.76239,
  		i: 35.55579,
  		e: 0.4928193,
  		a: 1.0185113
  	},
  	{
  		H: 18.28,
  		desig: "2005 AC",
  		epoch: 2459200.5,
  		ma: 240.61334,
  		w: 285.60244,
  		om: 315.7789,
  		i: 46.88022,
  		e: 0.5178097,
  		a: 1.0499233
  	},
  	{
  		H: 16.15,
  		desig: "2005 GG",
  		epoch: 2459200.5,
  		ma: 152.84205,
  		w: 335.29302,
  		om: 106.40862,
  		i: 34.84391,
  		e: 0.659716,
  		a: 2.04101
  	},
  	{
  		H: 17.9,
  		desig: "2005 QY151",
  		epoch: 2459200.5,
  		ma: 43.56219,
  		w: 124.88428,
  		om: 14.35393,
  		i: 12.64498,
  		e: 0.439446,
  		a: 1.3807275
  	},
  	{
  		H: 17.14,
  		desig: "2000 UP30",
  		epoch: 2459200.5,
  		ma: 6.73805,
  		w: 118.91826,
  		om: 194.91566,
  		i: 9.36845,
  		e: 0.7618029,
  		a: 2.2507308
  	},
  	{
  		H: 18,
  		desig: "2001 SA270",
  		epoch: 2459200.5,
  		ma: 9.78278,
  		w: 15.61479,
  		om: 210.02167,
  		i: 38.52063,
  		e: 0.735454,
  		a: 1.302317
  	},
  	{
  		H: 16.6,
  		desig: "2002 UR3",
  		epoch: 2459200.5,
  		ma: 6.16794,
  		w: 141.22662,
  		om: 51.90454,
  		i: 48.60237,
  		e: 0.7927729,
  		a: 1.3789287
  	},
  	{
  		H: 17.3,
  		desig: "2004 VV",
  		epoch: 2459200.5,
  		ma: 151.29974,
  		w: 354.62284,
  		om: 342.73357,
  		i: 52.47917,
  		e: 0.6045162,
  		a: 2.0764465
  	},
  	{
  		H: 17.6,
  		desig: "2004 VT60",
  		epoch: 2459200.5,
  		ma: 182.5015,
  		w: 247.37044,
  		om: 57.54854,
  		i: 43.50364,
  		e: 0.4341496,
  		a: 2.0759022
  	},
  	{
  		H: 16.92,
  		desig: "2007 BT2",
  		epoch: 2459200.5,
  		ma: 226.0478,
  		w: 149.00798,
  		om: 30.99047,
  		i: 26.85851,
  		e: 0.2240157,
  		a: 1.632275
  	},
  	{
  		H: 18.05,
  		desig: "2007 XT58",
  		epoch: 2459200.5,
  		ma: 152.5907,
  		w: 267.94684,
  		om: 266.00854,
  		i: 2.31241,
  		e: 0.3636474,
  		a: 2.0130463
  	},
  	{
  		H: 17.9,
  		desig: "2000 JQ66",
  		epoch: 2459200.5,
  		ma: 142.53779,
  		w: 103.8666,
  		om: 188.94715,
  		i: 7.06018,
  		e: 0.4188642,
  		a: 2.1664337
  	},
  	{
  		H: 18.2,
  		desig: "2004 TR12",
  		epoch: 2459200.5,
  		ma: 162.71767,
  		w: 77.77666,
  		om: 155.38052,
  		i: 19.35601,
  		e: 0.2096046,
  		a: 0.8951092
  	},
  	{
  		H: 16.54,
  		desig: "2003 OU",
  		epoch: 2459200.5,
  		ma: 308.71581,
  		w: 175.45777,
  		om: 206.33875,
  		i: 40.13037,
  		e: 0.702264,
  		a: 2.303468
  	},
  	{
  		H: 16.66,
  		desig: "2005 UB",
  		epoch: 2459200.5,
  		ma: 309.66363,
  		w: 3.15048,
  		om: 272.11271,
  		i: 27.69633,
  		e: 0.7383417,
  		a: 1.8958929
  	},
  	{
  		H: 18.07,
  		desig: "2001 DQ8",
  		epoch: 2459200.5,
  		ma: 3.56798,
  		w: 14.8078,
  		om: 342.68061,
  		i: 12.78016,
  		e: 0.9009717,
  		a: 1.8423003
  	},
  	{
  		H: 18.1,
  		desig: "2001 RP17",
  		epoch: 2459200.5,
  		ma: 154.91417,
  		w: 60.66727,
  		om: 353.23791,
  		i: 8.15624,
  		e: 0.5159309,
  		a: 2.6336399
  	},
  	{
  		H: 17.52,
  		desig: "2004 FX31",
  		epoch: 2459200.5,
  		ma: 335.72415,
  		w: 285.8129,
  		om: 169.14549,
  		i: 24.75401,
  		e: 0.4419606,
  		a: 1.2607418
  	},
  	{
  		H: 17.76,
  		desig: "2008 FU6",
  		epoch: 2459200.5,
  		ma: 74.2268,
  		w: 129.10529,
  		om: 192.84351,
  		i: 12.83182,
  		e: 0.5691033,
  		a: 1.323944
  	},
  	{
  		H: 18.1,
  		desig: "1998 UN1",
  		epoch: 2459200.5,
  		ma: 15.84835,
  		w: 87.69126,
  		om: 217.87257,
  		i: 32.42544,
  		e: 0.2209032,
  		a: 1.5134877
  	},
  	{
  		H: 18.11,
  		desig: "1999 XX262",
  		epoch: 2459200.5,
  		ma: 39.52645,
  		w: 102.76309,
  		om: 334.65685,
  		i: 8.23009,
  		e: 0.1819272,
  		a: 1.5329253
  	},
  	{
  		H: 18.25,
  		desig: "2001 QH142",
  		epoch: 2459200.5,
  		ma: 201.77469,
  		w: 253.43221,
  		om: 318.32831,
  		i: 30.59873,
  		e: 0.2218162,
  		a: 1.5273409
  	},
  	{
  		H: 16.19,
  		desig: "2001 XV10",
  		epoch: 2459200.5,
  		ma: 325.79668,
  		w: 341.99985,
  		om: 31.40167,
  		i: 22.34983,
  		e: 0.5852608,
  		a: 2.2044533
  	},
  	{
  		H: 16.4,
  		desig: "2002 CE26",
  		epoch: 2459200.5,
  		ma: 304.68576,
  		w: 228.01337,
  		om: 161.90204,
  		i: 47.29408,
  		e: 0.5608419,
  		a: 2.2330267
  	},
  	{
  		H: 17.22,
  		desig: "2002 SS41",
  		epoch: 2459200.5,
  		ma: 34.69419,
  		w: 101.79115,
  		om: 190.10575,
  		i: 63.68643,
  		e: 0.382699,
  		a: 2.1046526
  	},
  	{
  		H: 17.12,
  		desig: "2002 XA40",
  		epoch: 2459200.5,
  		ma: 144.44986,
  		w: 66.87916,
  		om: 300.56512,
  		i: 4.44842,
  		e: 0.4799326,
  		a: 2.2648059
  	},
  	{
  		H: 18,
  		desig: "2003 HQ32",
  		epoch: 2459200.5,
  		ma: 149.61544,
  		w: 291.29867,
  		om: 217.61198,
  		i: 35.86765,
  		e: 0.3451879,
  		a: 1.9789049
  	},
  	{
  		H: 17.66,
  		desig: "2004 EV9",
  		epoch: 2459200.5,
  		ma: 180.78488,
  		w: 226.70874,
  		om: 172.41799,
  		i: 40.83081,
  		e: 0.7806538,
  		a: 1.4709223
  	},
  	{
  		H: 17.82,
  		desig: "2004 KD1",
  		epoch: 2459200.5,
  		ma: 123.15876,
  		w: 9.9098,
  		om: 271.49689,
  		i: 10.12495,
  		e: 0.3303296,
  		a: 1.7197222
  	},
  	{
  		H: 16.82,
  		desig: "2005 LG8",
  		epoch: 2459200.5,
  		ma: 186.4521,
  		w: 193.80768,
  		om: 211.29659,
  		i: 26.56043,
  		e: 0.8271761,
  		a: 1.7551612
  	},
  	{
  		H: 16.76,
  		desig: "2005 WD1",
  		epoch: 2459200.5,
  		ma: 276.14805,
  		w: 285.89682,
  		om: 52.30538,
  		i: 43.08369,
  		e: 0.4419442,
  		a: 2.1990983
  	},
  	{
  		H: 17.4,
  		desig: "2006 BN6",
  		epoch: 2459200.5,
  		ma: 210.72106,
  		w: 338.31866,
  		om: 249.72123,
  		i: 18.64246,
  		e: 0.6984461,
  		a: 2.564939
  	},
  	{
  		H: 16.88,
  		desig: "2006 SP134",
  		epoch: 2459200.5,
  		ma: 40.05373,
  		w: 192.3137,
  		om: 16.63714,
  		i: 13.03357,
  		e: 0.7358867,
  		a: 2.0507538
  	},
  	{
  		H: 15.43,
  		desig: "2007 HA59",
  		epoch: 2459200.5,
  		ma: 243.86933,
  		w: 17.62997,
  		om: 57.12619,
  		i: 54.48633,
  		e: 0.7253772,
  		a: 2.5131861
  	},
  	{
  		H: 17.07,
  		desig: "2002 OM4",
  		epoch: 2459200.5,
  		ma: 95.62367,
  		w: 28.12549,
  		om: 143.05923,
  		i: 55.31509,
  		e: 0.5628091,
  		a: 1.4961444
  	},
  	{
  		H: 18.07,
  		desig: "2002 WP11",
  		epoch: 2459200.5,
  		ma: 347.69196,
  		w: 56.1741,
  		om: 267.8916,
  		i: 5.39413,
  		e: 0.4409568,
  		a: 2.125723
  	},
  	{
  		H: 17.55,
  		desig: "2008 CM116",
  		epoch: 2459200.5,
  		ma: 183.42089,
  		w: 355.7937,
  		om: 0.10922,
  		i: 18.70787,
  		e: 0.6631641,
  		a: 1.6306038
  	},
  	{
  		H: 18.21,
  		desig: "2001 PD1",
  		epoch: 2459200.5,
  		ma: 269.79889,
  		w: 95.23426,
  		om: 282.0156,
  		i: 5.96164,
  		e: 0.4585891,
  		a: 2.2334168
  	},
  	{
  		H: 18.05,
  		desig: "2002 UX",
  		epoch: 2459200.5,
  		ma: 84.13322,
  		w: 84.32802,
  		om: 263.86061,
  		i: 20.2058,
  		e: 0.1633955,
  		a: 1.4735376
  	},
  	{
  		H: 17.9,
  		desig: "2005 TZ51",
  		epoch: 2459200.5,
  		ma: 322.12735,
  		w: 127.50849,
  		om: 280.34703,
  		i: 10.83556,
  		e: 0.4284765,
  		a: 2.1266101
  	},
  	{
  		H: 17.4,
  		desig: "2006 YD",
  		epoch: 2459200.5,
  		ma: 86.36614,
  		w: 352.08541,
  		om: 223.36886,
  		i: 7.73285,
  		e: 0.6930736,
  		a: 2.6244577
  	},
  	{
  		H: 17.12,
  		desig: "1995 MA1",
  		epoch: 2459200.5,
  		ma: 339.82081,
  		w: 265.789,
  		om: 87.65996,
  		i: 25.8403,
  		e: 0.5876565,
  		a: 2.6101116
  	},
  	{
  		H: 18.27,
  		desig: "1999 FN53",
  		epoch: 2459200.5,
  		ma: 157.23673,
  		w: 191.70778,
  		om: 50.5921,
  		i: 20.16112,
  		e: 0.4556268,
  		a: 1.735459
  	},
  	{
  		H: 18.02,
  		desig: "1999 JR6",
  		epoch: 2459200.5,
  		ma: 270.51766,
  		w: 27.28826,
  		om: 52.62139,
  		i: 20.31934,
  		e: 0.6752968,
  		a: 1.3666166
  	},
  	{
  		H: 18.1,
  		desig: "2000 PQ9",
  		epoch: 2459200.5,
  		ma: 276.78293,
  		w: 6.91675,
  		om: 297.21762,
  		i: 13.47523,
  		e: 0.431863,
  		a: 1.9038142
  	},
  	{
  		H: 17.7,
  		desig: "2000 RD34",
  		epoch: 2459200.5,
  		ma: 83.20785,
  		w: 132.27143,
  		om: 308.9387,
  		i: 6.93717,
  		e: 0.3475864,
  		a: 1.9630409
  	},
  	{
  		H: 17.5,
  		desig: "2000 SO10",
  		epoch: 2459200.5,
  		ma: 8.43739,
  		w: 204.00718,
  		om: 356.42913,
  		i: 36.96194,
  		e: 0.5401968,
  		a: 1.2995463
  	},
  	{
  		H: 17.84,
  		desig: "2001 FA1",
  		epoch: 2459200.5,
  		ma: 244.44739,
  		w: 326.80765,
  		om: 175.74128,
  		i: 33.82176,
  		e: 0.3599158,
  		a: 1.8825189
  	},
  	{
  		H: 16.5,
  		desig: "2001 RZ11",
  		epoch: 2459200.5,
  		ma: 348.06783,
  		w: 340.51907,
  		om: 324.0218,
  		i: 53.09121,
  		e: 0.5069124,
  		a: 2.1915671
  	},
  	{
  		H: 17.95,
  		desig: "2001 SK9",
  		epoch: 2459200.5,
  		ma: 66.69151,
  		w: 34.55585,
  		om: 195.75466,
  		i: 25.9675,
  		e: 0.7890503,
  		a: 1.7851398
  	},
  	{
  		H: 18.24,
  		desig: "2006 SC6",
  		epoch: 2459200.5,
  		ma: 183.96779,
  		w: 355.53682,
  		om: 152.97994,
  		i: 30.26437,
  		e: 0.5806892,
  		a: 1.2029551
  	},
  	{
  		H: 18,
  		desig: "2006 GQ2",
  		epoch: 2459200.5,
  		ma: 62.89432,
  		w: 64.55328,
  		om: 13.89208,
  		i: 25.83535,
  		e: 0.4657952,
  		a: 1.2903592
  	},
  	{
  		H: 17.41,
  		desig: "2002 KH3",
  		epoch: 2459200.5,
  		ma: 68.29418,
  		w: 35.12768,
  		om: 259.06638,
  		i: 10.24441,
  		e: 0.584429,
  		a: 2.6780392
  	},
  	{
  		H: 16.64,
  		desig: "2004 FH11",
  		epoch: 2459200.5,
  		ma: 310.21902,
  		w: 88.07114,
  		om: 203.56549,
  		i: 21.3817,
  		e: 0.4466771,
  		a: 2.2555797
  	},
  	{
  		H: 18,
  		desig: "2004 QV16",
  		epoch: 2459200.5,
  		ma: 359.08593,
  		w: 49.24832,
  		om: 196.22866,
  		i: 28.52816,
  		e: 0.5740921,
  		a: 1.7690199
  	},
  	{
  		H: 18.1,
  		desig: "2004 RU10",
  		epoch: 2459200.5,
  		ma: 159.85583,
  		w: 65.23641,
  		om: 119.00933,
  		i: 15.9088,
  		e: 0.6568537,
  		a: 0.9040191
  	},
  	{
  		H: 18.2,
  		desig: "2005 BE2",
  		epoch: 2459200.5,
  		ma: 142.20704,
  		w: 162.44672,
  		om: 92.61285,
  		i: 6.578,
  		e: 0.6261952,
  		a: 2.0163192
  	},
  	{
  		H: 17.86,
  		desig: "2006 OU10",
  		epoch: 2459200.5,
  		ma: 264.56679,
  		w: 173.45024,
  		om: 335.22516,
  		i: 33.71306,
  		e: 0.3498853,
  		a: 1.7541964
  	},
  	{
  		H: 16.2,
  		desig: "2007 VQ4",
  		epoch: 2459200.5,
  		ma: 355.10813,
  		w: 100.10683,
  		om: 58.76855,
  		i: 26.61897,
  		e: 0.5149976,
  		a: 2.6364708
  	},
  	{
  		H: 15.5,
  		name: "Nut",
  		desig: "5025 P-L",
  		epoch: 2459200.5,
  		ma: 30.56473,
  		w: 152.80223,
  		om: 346.22743,
  		i: 3.77211,
  		e: 0.7427203,
  		a: 2.5328034
  	},
  	{
  		H: 17.2,
  		desig: "1998 SR49",
  		epoch: 2459200.5,
  		ma: 236.64803,
  		w: 54.66654,
  		om: 21.26323,
  		i: 29.11429,
  		e: 0.5322646,
  		a: 2.4819779
  	},
  	{
  		H: 17.9,
  		desig: "1999 XR35",
  		epoch: 2459200.5,
  		ma: 245.69813,
  		w: 82.05434,
  		om: 60.14025,
  		i: 18.7056,
  		e: 0.5137613,
  		a: 2.36472
  	},
  	{
  		H: 17.58,
  		desig: "2004 XM130",
  		epoch: 2459200.5,
  		ma: 180.18833,
  		w: 190.23373,
  		om: 309.15216,
  		i: 28.17552,
  		e: 0.4649001,
  		a: 2.328646
  	},
  	{
  		H: 17.8,
  		desig: "2007 GG",
  		epoch: 2459200.5,
  		ma: 72.96561,
  		w: 299.63246,
  		om: 137.09067,
  		i: 5.29588,
  		e: 0.5598929,
  		a: 2.6518755
  	},
  	{
  		H: 18,
  		desig: "2008 JF",
  		epoch: 2459200.5,
  		ma: 227.57183,
  		w: 235.81599,
  		om: 90.65731,
  		i: 19.80158,
  		e: 0.3929218,
  		a: 1.9074227
  	},
  	{
  		H: 17.8,
  		desig: "2002 QG24",
  		epoch: 2459200.5,
  		ma: 147.61354,
  		w: 109.03298,
  		om: 132.9589,
  		i: 5.68512,
  		e: 0.4897403,
  		a: 2.2855806
  	},
  	{
  		H: 17.3,
  		desig: "1995 EK1",
  		epoch: 2459200.5,
  		ma: 178.75267,
  		w: 299.81856,
  		om: 352.62997,
  		i: 9.06835,
  		e: 0.7768451,
  		a: 2.2639091
  	},
  	{
  		H: 16.82,
  		desig: "2007 EX",
  		epoch: 2459200.5,
  		ma: 88.58168,
  		w: 78.84814,
  		om: 297.43981,
  		i: 18.69854,
  		e: 0.4173761,
  		a: 0.8716454
  	},
  	{
  		H: 18.2,
  		desig: "2003 FH1",
  		epoch: 2459200.5,
  		ma: 339.11219,
  		w: 29.17804,
  		om: 40.20713,
  		i: 14.63945,
  		e: 0.4395813,
  		a: 1.1839288
  	},
  	{
  		H: 18.15,
  		desig: "2003 NO4",
  		epoch: 2459200.5,
  		ma: 272.03561,
  		w: 171.19022,
  		om: 135.37202,
  		i: 22.70229,
  		e: 0.3128475,
  		a: 1.7147314
  	},
  	{
  		H: 18.1,
  		desig: "2004 QZ2",
  		epoch: 2459200.5,
  		ma: 263.08379,
  		w: 208.24238,
  		om: 219.64043,
  		i: 0.96991,
  		e: 0.4935432,
  		a: 2.2622273
  	},
  	{
  		H: 17.17,
  		desig: "2005 AH14",
  		epoch: 2459200.5,
  		ma: 165.25837,
  		w: 192.45345,
  		om: 59.35093,
  		i: 12.83027,
  		e: 0.6082884,
  		a: 2.3150758
  	},
  	{
  		H: 16.92,
  		desig: "1999 JO8",
  		epoch: 2459200.5,
  		ma: 352.02726,
  		w: 205.95743,
  		om: 80.0407,
  		i: 24.36009,
  		e: 0.5748125,
  		a: 2.6504069
  	},
  	{
  		H: 17.15,
  		desig: "2001 FA7",
  		epoch: 2459200.5,
  		ma: 41.81255,
  		w: 62.66537,
  		om: 352.36695,
  		i: 22.8313,
  		e: 0.5356286,
  		a: 2.0070954
  	},
  	{
  		H: 17.14,
  		desig: "2001 HA8",
  		epoch: 2459200.5,
  		ma: 86.56913,
  		w: 202.64822,
  		om: 95.7415,
  		i: 11.4586,
  		e: 0.5290083,
  		a: 2.3866867
  	},
  	{
  		H: 16.7,
  		desig: "2002 CM1",
  		epoch: 2459200.5,
  		ma: 203.06464,
  		w: 84.18776,
  		om: 308.14271,
  		i: 45.00056,
  		e: 0.4620646,
  		a: 2.2991746
  	},
  	{
  		H: 16.9,
  		desig: "2002 KF4",
  		epoch: 2459200.5,
  		ma: 260.41371,
  		w: 193.73081,
  		om: 77.8826,
  		i: 37.02941,
  		e: 0.5769283,
  		a: 2.9032522
  	},
  	{
  		H: 18,
  		desig: "2003 HR32",
  		epoch: 2459200.5,
  		ma: 187.32043,
  		w: 352.70483,
  		om: 341.9283,
  		i: 8.28386,
  		e: 0.6871204,
  		a: 1.748394
  	},
  	{
  		H: 17.48,
  		desig: "2009 CQ5",
  		epoch: 2459200.5,
  		ma: 95.98597,
  		w: 118.18048,
  		om: 278.67092,
  		i: 18.68426,
  		e: 0.0914595,
  		a: 0.9327043
  	},
  	{
  		H: 17.84,
  		desig: "2010 LY63",
  		epoch: 2459200.5,
  		ma: 330.74356,
  		w: 350.45205,
  		om: 344.94683,
  		i: 11.12189,
  		e: 0.4134835,
  		a: 1.9028148
  	},
  	{
  		H: 17.9,
  		desig: "2000 GS146",
  		epoch: 2459200.5,
  		ma: 35.7383,
  		w: 80.78963,
  		om: 33.68371,
  		i: 46.84753,
  		e: 0.197229,
  		a: 1.3044265
  	},
  	{
  		H: 17.6,
  		desig: "2003 HB6",
  		epoch: 2459200.5,
  		ma: 310.75123,
  		w: 145.83322,
  		om: 161.61715,
  		i: 6.62021,
  		e: 0.5711544,
  		a: 2.7117184
  	},
  	{
  		H: 18.1,
  		desig: "2003 QN47",
  		epoch: 2459200.5,
  		ma: 219.77115,
  		w: 324.19525,
  		om: 349.36045,
  		i: 28.01462,
  		e: 0.3685368,
  		a: 1.7353922
  	},
  	{
  		H: 17.79,
  		desig: "2003 SV222",
  		epoch: 2459200.5,
  		ma: 210.65989,
  		w: 75.21203,
  		om: 234.48177,
  		i: 19.4059,
  		e: 0.3898416,
  		a: 1.7458606
  	},
  	{
  		H: 18,
  		desig: "2002 AC",
  		epoch: 2459200.5,
  		ma: 194.46367,
  		w: 132.15857,
  		om: 72.95795,
  		i: 34.75137,
  		e: 0.648443,
  		a: 2.2539338
  	},
  	{
  		H: 16.56,
  		desig: "2003 UD8",
  		epoch: 2459200.5,
  		ma: 295.70577,
  		w: 108.32187,
  		om: 238.39072,
  		i: 3.88766,
  		e: 0.5362167,
  		a: 2.7167009
  	},
  	{
  		H: 17.89,
  		desig: "2004 JA",
  		epoch: 2459200.5,
  		ma: 226.08342,
  		w: 54.34947,
  		om: 56.88576,
  		i: 29.58636,
  		e: 0.6284986,
  		a: 1.3560594
  	},
  	{
  		H: 16.7,
  		desig: "2004 LE",
  		epoch: 2459200.5,
  		ma: 278.86356,
  		w: 185.21341,
  		om: 211.54967,
  		i: 40.39226,
  		e: 0.8368892,
  		a: 2.646269
  	},
  	{
  		H: 17.1,
  		desig: "2005 MB",
  		epoch: 2459200.5,
  		ma: 37.92398,
  		w: 42.83135,
  		om: 88.63315,
  		i: 41.38199,
  		e: 0.7929723,
  		a: 0.9854166
  	},
  	{
  		H: 16.28,
  		desig: "2008 XE3",
  		epoch: 2459200.5,
  		ma: 346.41738,
  		w: 44.41596,
  		om: 315.21208,
  		i: 7.47646,
  		e: 0.5506699,
  		a: 2.607727
  	},
  	{
  		H: 15.55,
  		desig: "1984 QY1",
  		epoch: 2459200.5,
  		ma: 64.26473,
  		w: 337.10829,
  		om: 142.29998,
  		i: 14.27118,
  		e: 0.8943646,
  		a: 2.498987
  	},
  	{
  		H: 18.21,
  		desig: "1999 YA",
  		epoch: 2459200.5,
  		ma: 286.23419,
  		w: 265.54226,
  		om: 106.17475,
  		i: 38.24221,
  		e: 0.3392041,
  		a: 1.6768386
  	},
  	{
  		H: 17.5,
  		desig: "2000 AE6",
  		epoch: 2459200.5,
  		ma: 269.96064,
  		w: 279.59312,
  		om: 119.66034,
  		i: 11.89405,
  		e: 0.5521355,
  		a: 2.717915
  	},
  	{
  		H: 15.98,
  		desig: "2003 MT2",
  		epoch: 2459200.5,
  		ma: 6.22133,
  		w: 304.61968,
  		om: 305.10514,
  		i: 27.90731,
  		e: 0.5331804,
  		a: 2.6871451
  	},
  	{
  		H: 17.6,
  		desig: "2004 XK35",
  		epoch: 2459200.5,
  		ma: 12.45817,
  		w: 64.04144,
  		om: 263.86106,
  		i: 31.47611,
  		e: 0.4168882,
  		a: 1.9524117
  	},
  	{
  		H: 17.8,
  		desig: "2007 MM13",
  		epoch: 2459200.5,
  		ma: 79.01905,
  		w: 294.42495,
  		om: 242.62428,
  		i: 38.19568,
  		e: 0.5684336,
  		a: 1.4011134
  	},
  	{
  		H: 18.1,
  		desig: "1999 PJ1",
  		epoch: 2459200.5,
  		ma: 265.36047,
  		w: 80.52284,
  		om: 319.45318,
  		i: 34.47943,
  		e: 0.3595068,
  		a: 1.6752685
  	},
  	{
  		H: 18.2,
  		desig: "2004 SD20",
  		epoch: 2459200.5,
  		ma: 193.83835,
  		w: 94.46525,
  		om: 46.57846,
  		i: 21.33214,
  		e: 0.4649394,
  		a: 0.8752239
  	},
  	{
  		H: 17.33,
  		desig: "2005 VY17",
  		epoch: 2459200.5,
  		ma: 106.03296,
  		w: 66.3716,
  		om: 79.19007,
  		i: 25.42242,
  		e: 0.4386556,
  		a: 1.9851541
  	},
  	{
  		H: 16.7,
  		desig: "1998 ST4",
  		epoch: 2459200.5,
  		ma: 223.99586,
  		w: 207.71216,
  		om: 238.97829,
  		i: 9.17682,
  		e: 0.5929555,
  		a: 2.8320277
  	},
  	{
  		H: 18.1,
  		desig: "1998 SV4",
  		epoch: 2459200.5,
  		ma: 217.2569,
  		w: 359.50583,
  		om: 177.24761,
  		i: 53.29884,
  		e: 0.6419784,
  		a: 0.8164668
  	},
  	{
  		H: 17.6,
  		desig: "1999 TN12",
  		epoch: 2459200.5,
  		ma: 78.78106,
  		w: 150.31231,
  		om: 212.33437,
  		i: 37.2728,
  		e: 0.3906587,
  		a: 1.88682
  	},
  	{
  		H: 17.9,
  		desig: "2003 AL18",
  		epoch: 2459200.5,
  		ma: 36.19968,
  		w: 246.62418,
  		om: 312.96573,
  		i: 15.72802,
  		e: 0.4165251,
  		a: 1.6845191
  	},
  	{
  		H: 18.28,
  		desig: "2007 EJ26",
  		epoch: 2459200.5,
  		ma: 298.8792,
  		w: 224.39022,
  		om: 176.34755,
  		i: 29.03877,
  		e: 0.2687551,
  		a: 1.6416633
  	},
  	{
  		H: 17.18,
  		desig: "2002 NY31",
  		epoch: 2459200.5,
  		ma: 180.29331,
  		w: 282.84036,
  		om: 118.06768,
  		i: 40.93315,
  		e: 0.5457692,
  		a: 2.2111817
  	},
  	{
  		H: 17.3,
  		desig: "2002 RV112",
  		epoch: 2459200.5,
  		ma: 183.75893,
  		w: 199.77797,
  		om: 196.02481,
  		i: 16.49964,
  		e: 0.490359,
  		a: 2.2187879
  	},
  	{
  		H: 16.8,
  		desig: "2002 RC118",
  		epoch: 2459200.5,
  		ma: 204.98613,
  		w: 222.25574,
  		om: 208.92008,
  		i: 27.97815,
  		e: 0.5653108,
  		a: 2.9534024
  	},
  	{
  		H: 18.26,
  		desig: "2002 XG4",
  		epoch: 2459200.5,
  		ma: 83.99831,
  		w: 238.10384,
  		om: 259.45587,
  		i: 21.02747,
  		e: 0.4796482,
  		a: 2.2659658
  	},
  	{
  		H: 18.2,
  		desig: "2005 GQ21",
  		epoch: 2459200.5,
  		ma: 313.59362,
  		w: 143.61137,
  		om: 203.24966,
  		i: 47.02296,
  		e: 0.2153345,
  		a: 1.426359
  	},
  	{
  		H: 17.81,
  		desig: "2006 RO36",
  		epoch: 2459200.5,
  		ma: 326.7942,
  		w: 261.13755,
  		om: 270.94221,
  		i: 23.85379,
  		e: 0.2312518,
  		a: 0.9062506
  	},
  	{
  		H: 17.51,
  		desig: "2007 YK",
  		epoch: 2459200.5,
  		ma: 62.24994,
  		w: 281.50237,
  		om: 132.83778,
  		i: 31.84442,
  		e: 0.3215235,
  		a: 1.8703569
  	},
  	{
  		H: 16.27,
  		desig: "2009 HC82",
  		epoch: 2459200.5,
  		ma: 5.86615,
  		w: 298.87799,
  		om: 295.4009,
  		i: 154.37112,
  		e: 0.8066689,
  		a: 2.5271024
  	},
  	{
  		H: 17.3,
  		desig: "2009 SO103",
  		epoch: 2459200.5,
  		ma: 290.37699,
  		w: 304.65343,
  		om: 194.66776,
  		i: 29.4868,
  		e: 0.6641544,
  		a: 2.003144
  	},
  	{
  		H: 18.2,
  		desig: "2000 JQ3",
  		epoch: 2459200.5,
  		ma: 102.09586,
  		w: 218.36701,
  		om: 54.70815,
  		i: 7.76795,
  		e: 0.4855389,
  		a: 2.4642342
  	},
  	{
  		H: 18.2,
  		desig: "2007 BG29",
  		epoch: 2459200.5,
  		ma: 325.78136,
  		w: 245.12403,
  		om: 60.97439,
  		i: 18.50645,
  		e: 0.3347514,
  		a: 0.8325371
  	},
  	{
  		H: 17.72,
  		desig: "2007 HX4",
  		epoch: 2459200.5,
  		ma: 108.33835,
  		w: 14.53709,
  		om: 41.67301,
  		i: 56.55344,
  		e: 0.3317402,
  		a: 1.317494
  	},
  	{
  		H: 16.24,
  		desig: "2007 PU11",
  		epoch: 2459200.5,
  		ma: 276.29786,
  		w: 195.02594,
  		om: 207.90016,
  		i: 13.78189,
  		e: 0.5509413,
  		a: 2.8265705
  	},
  	{
  		H: 17.68,
  		desig: "2002 NP1",
  		epoch: 2459200.5,
  		ma: 285.78297,
  		w: 145.20345,
  		om: 315.04291,
  		i: 19.1266,
  		e: 0.1652575,
  		a: 1.2481333
  	},
  	{
  		H: 17.93,
  		desig: "2005 AN19",
  		epoch: 2459200.5,
  		ma: 292.19843,
  		w: 47.11789,
  		om: 121.47199,
  		i: 39.85145,
  		e: 0.3352515,
  		a: 1.9345973
  	},
  	{
  		H: 17,
  		desig: "2005 SH19",
  		epoch: 2459200.5,
  		ma: 106.59136,
  		w: 158.34649,
  		om: 18.43667,
  		i: 47.69482,
  		e: 0.8547911,
  		a: 2.2745128
  	},
  	{
  		H: 17.5,
  		desig: "2006 XA",
  		epoch: 2459200.5,
  		ma: 82.1821,
  		w: 300.98272,
  		om: 252.86653,
  		i: 10.30797,
  		e: 0.5459134,
  		a: 2.1996187
  	},
  	{
  		H: 18.2,
  		desig: "2007 SV11",
  		epoch: 2459200.5,
  		ma: 292.27796,
  		w: 23.73759,
  		om: 292.23283,
  		i: 32.22234,
  		e: 0.4939024,
  		a: 1.7338782
  	},
  	{
  		H: 17.37,
  		desig: "2009 WC26",
  		epoch: 2459200.5,
  		ma: 118.70401,
  		w: 350.91811,
  		om: 203.05161,
  		i: 12.00457,
  		e: 0.6970701,
  		a: 2.1714166
  	},
  	{
  		H: 17.9,
  		desig: "2000 BG19",
  		epoch: 2459200.5,
  		ma: 264.23259,
  		w: 79.6579,
  		om: 147.5262,
  		i: 12.57143,
  		e: 0.5605396,
  		a: 2.6587791
  	},
  	{
  		H: 18.2,
  		desig: "2002 PG43",
  		epoch: 2459200.5,
  		ma: 253.12003,
  		w: 5.55689,
  		om: 346.93368,
  		i: 6.92139,
  		e: 0.4021852,
  		a: 2.1738536
  	},
  	{
  		H: 16.8,
  		desig: "2003 GW",
  		epoch: 2459200.5,
  		ma: 19.74251,
  		w: 90.64226,
  		om: 183.18881,
  		i: 49.43737,
  		e: 0.4763016,
  		a: 1.8205655
  	},
  	{
  		H: 18.05,
  		desig: "2004 YC5",
  		epoch: 2459200.5,
  		ma: 11.74172,
  		w: 27.11611,
  		om: 334.58151,
  		i: 11.39743,
  		e: 0.6172343,
  		a: 1.9294443
  	},
  	{
  		H: 17.25,
  		desig: "2005 EY",
  		epoch: 2459200.5,
  		ma: 326.76991,
  		w: 185.75794,
  		om: 62.40446,
  		i: 17.2263,
  		e: 0.8907973,
  		a: 2.5167442
  	},
  	{
  		H: 17.15,
  		desig: "2007 LR32",
  		epoch: 2459200.5,
  		ma: 46.85499,
  		w: 71.81896,
  		om: 266.66732,
  		i: 10.18412,
  		e: 0.5171687,
  		a: 2.6232624
  	},
  	{
  		H: 18.1,
  		desig: "1998 QR15",
  		epoch: 2459200.5,
  		ma: 295.72696,
  		w: 56.93661,
  		om: 320.15206,
  		i: 9.45668,
  		e: 0.5591291,
  		a: 2.7660679
  	},
  	{
  		H: 18.1,
  		desig: "2003 AD1",
  		epoch: 2459200.5,
  		ma: 80.23322,
  		w: 44.75991,
  		om: 117.52289,
  		i: 27.13297,
  		e: 0.3227263,
  		a: 1.8196031
  	},
  	{
  		H: 16.29,
  		desig: "2005 LY19",
  		epoch: 2459200.5,
  		ma: 41.29046,
  		w: 120.26634,
  		om: 338.42117,
  		i: 30.00725,
  		e: 0.2400001,
  		a: 1.6020011
  	},
  	{
  		H: 16.6,
  		desig: "2005 SG19",
  		epoch: 2459200.5,
  		ma: 256.57918,
  		w: 249.32637,
  		om: 13.03123,
  		i: 24.89273,
  		e: 0.5888801,
  		a: 2.6250508
  	},
  	{
  		H: 16.85,
  		desig: "2007 KN4",
  		epoch: 2459200.5,
  		ma: 83.57913,
  		w: 51.203,
  		om: 232.44747,
  		i: 12.53707,
  		e: 0.6310975,
  		a: 3.3429263
  	},
  	{
  		H: 17.3,
  		desig: "2010 DE",
  		epoch: 2459200.5,
  		ma: 249.0319,
  		w: 277.14434,
  		om: 176.87609,
  		i: 23.9912,
  		e: 0.3960825,
  		a: 2.1145632
  	},
  	{
  		H: 17.5,
  		desig: "2010 QD2",
  		epoch: 2459200.5,
  		ma: 248.02294,
  		w: 125.89633,
  		om: 120.6688,
  		i: 10.6449,
  		e: 0.7852948,
  		a: 2.0102551
  	},
  	{
  		H: 17.9,
  		desig: "1999 HA2",
  		epoch: 2459200.5,
  		ma: 246.91183,
  		w: 344.29887,
  		om: 147.20288,
  		i: 15.17776,
  		e: 0.7008021,
  		a: 2.7889048
  	},
  	{
  		H: 16.5,
  		desig: "2003 DC14",
  		epoch: 2459200.5,
  		ma: 265.58252,
  		w: 10.09093,
  		om: 49.94957,
  		i: 12.83099,
  		e: 0.5605573,
  		a: 2.8935869
  	},
  	{
  		H: 18.2,
  		desig: "2003 XE",
  		epoch: 2459200.5,
  		ma: 214.87294,
  		w: 17.43757,
  		om: 90.55747,
  		i: 26.93579,
  		e: 0.3533576,
  		a: 1.7125856
  	},
  	{
  		H: 17.6,
  		desig: "2002 JR9",
  		epoch: 2459200.5,
  		ma: 351.48338,
  		w: 204.298,
  		om: 122.51378,
  		i: 9.79996,
  		e: 0.6359917,
  		a: 2.3887466
  	},
  	{
  		H: 15.4,
  		desig: "2006 AO4",
  		epoch: 2459200.5,
  		ma: 252.94489,
  		w: 50.43989,
  		om: 318.44565,
  		i: 24.38335,
  		e: 0.5857917,
  		a: 2.6239804
  	},
  	{
  		H: 17.15,
  		desig: "2007 FD",
  		epoch: 2459200.5,
  		ma: 316.08586,
  		w: 183.51263,
  		om: 222.49974,
  		i: 6.94907,
  		e: 0.6016847,
  		a: 2.0598998
  	},
  	{
  		H: 18.2,
  		desig: "2007 TY18",
  		epoch: 2459200.5,
  		ma: 104.73327,
  		w: 301.80531,
  		om: 6.08333,
  		i: 8.05729,
  		e: 0.4083022,
  		a: 2.15503
  	},
  	{
  		H: 17,
  		desig: "2008 ED69",
  		epoch: 2459200.5,
  		ma: 186.97865,
  		w: 173.25092,
  		om: 149.52225,
  		i: 36.35071,
  		e: 0.739448,
  		a: 2.9129806
  	},
  	{
  		H: 18,
  		desig: "2009 UM3",
  		epoch: 2459200.5,
  		ma: 353.95618,
  		w: 128.78961,
  		om: 162.40455,
  		i: 12.73731,
  		e: 0.786599,
  		a: 2.4380391
  	},
  	{
  		H: 17.7,
  		desig: "2000 OG8",
  		epoch: 2459200.5,
  		ma: 229.98306,
  		w: 71.68625,
  		om: 295.17833,
  		i: 5.26736,
  		e: 0.5474994,
  		a: 2.6593115
  	},
  	{
  		H: 17.8,
  		desig: "2000 PH6",
  		epoch: 2459200.5,
  		ma: 206.36464,
  		w: 219.65077,
  		om: 152.33841,
  		i: 10.50517,
  		e: 0.5190673,
  		a: 2.6847377
  	},
  	{
  		H: 17.8,
  		desig: "2001 SE286",
  		epoch: 2459200.5,
  		ma: 188.41427,
  		w: 199.26858,
  		om: 268.52786,
  		i: 26.78942,
  		e: 0.4557945,
  		a: 2.0372535
  	},
  	{
  		H: 18.2,
  		desig: "2002 KL3",
  		epoch: 2459200.5,
  		ma: 257.53293,
  		w: 293.34514,
  		om: 73.17185,
  		i: 20.76419,
  		e: 0.7483903,
  		a: 1.9514576
  	},
  	{
  		H: 17.8,
  		desig: "2005 ND7",
  		epoch: 2459200.5,
  		ma: 197.63683,
  		w: 241.46387,
  		om: 110.08921,
  		i: 52.58531,
  		e: 0.4824673,
  		a: 1.9639263
  	},
  	{
  		H: 17.33,
  		desig: "2008 EM9",
  		epoch: 2459200.5,
  		ma: 258.04307,
  		w: 181.76757,
  		om: 229.7008,
  		i: 9.43498,
  		e: 0.8523765,
  		a: 1.958519
  	},
  	{
  		H: 15.94,
  		desig: "2009 NE",
  		epoch: 2459200.5,
  		ma: 199.59702,
  		w: 198.88231,
  		om: 230.41282,
  		i: 35.01783,
  		e: 0.8645076,
  		a: 2.6750858
  	},
  	{
  		H: 16.9,
  		desig: "2003 LO6",
  		epoch: 2459200.5,
  		ma: 200.75002,
  		w: 6.48699,
  		om: 254.3282,
  		i: 34.57882,
  		e: 0.5757023,
  		a: 2.911119
  	},
  	{
  		H: 16.5,
  		desig: "2005 MC",
  		epoch: 2459200.5,
  		ma: 226.24583,
  		w: 125.01541,
  		om: 287.33044,
  		i: 27.28833,
  		e: 0.5923502,
  		a: 2.6155368
  	},
  	{
  		H: 17.8,
  		desig: "2009 QZ6",
  		epoch: 2459200.5,
  		ma: 317.14135,
  		w: 304.64636,
  		om: 281.77079,
  		i: 18.91561,
  		e: 0.2329253,
  		a: 1.5955001
  	},
  	{
  		H: 18.09,
  		desig: "2010 OS22",
  		epoch: 2459200.5,
  		ma: 319.75185,
  		w: 179.64035,
  		om: 256.91489,
  		i: 9.35935,
  		e: 0.6884246,
  		a: 1.6370097
  	},
  	{
  		H: 17.9,
  		desig: "2009 SU19",
  		epoch: 2459200.5,
  		ma: 206.79449,
  		w: 342.53745,
  		om: 172.68569,
  		i: 14.55799,
  		e: 0.8996829,
  		a: 2.0803705
  	},
  	{
  		H: 17.94,
  		desig: "2010 LG14",
  		epoch: 2459200.5,
  		ma: 263.42051,
  		w: 182.84493,
  		om: 271.29169,
  		i: 34.21105,
  		e: 0.7426642,
  		a: 1.0452583
  	},
  	{
  		H: 17.7,
  		desig: "2000 YO29",
  		epoch: 2459200.5,
  		ma: 22.25858,
  		w: 309.3415,
  		om: 262.62994,
  		i: 54.60943,
  		e: 0.6934971,
  		a: 1.8152332
  	},
  	{
  		H: 16.87,
  		desig: "2002 RH52",
  		epoch: 2459200.5,
  		ma: 157.24205,
  		w: 96.68109,
  		om: 2.25079,
  		i: 16.18243,
  		e: 0.4917742,
  		a: 1.9791849
  	},
  	{
  		H: 17.3,
  		desig: "2004 GD28",
  		epoch: 2459200.5,
  		ma: 262.5193,
  		w: 92.64056,
  		om: 219.22386,
  		i: 25.03318,
  		e: 0.5621892,
  		a: 2.6674528
  	},
  	{
  		H: 17.45,
  		desig: "2004 NC9",
  		epoch: 2459200.5,
  		ma: 287.27899,
  		w: 259.20552,
  		om: 335.24606,
  		i: 23.92932,
  		e: 0.5573999,
  		a: 2.6928707
  	},
  	{
  		H: 17.4,
  		desig: "2006 KD1",
  		epoch: 2459200.5,
  		ma: 275.49784,
  		w: 338.23818,
  		om: 168.92693,
  		i: 30.7624,
  		e: 0.7848366,
  		a: 2.4811333
  	},
  	{
  		H: 17.44,
  		desig: "2005 AD3",
  		epoch: 2459200.5,
  		ma: 53.79577,
  		w: 277.85207,
  		om: 293.99821,
  		i: 14.56091,
  		e: 0.5040698,
  		a: 2.4030289
  	},
  	{
  		H: 16.9,
  		desig: "1995 OO",
  		epoch: 2459200.5,
  		ma: 62.12933,
  		w: 212.03717,
  		om: 348.80572,
  		i: 23.52043,
  		e: 0.777413,
  		a: 2.1577133
  	},
  	{
  		H: 16.86,
  		desig: "2000 JY8",
  		epoch: 2459200.5,
  		ma: 181.63739,
  		w: 41.23473,
  		om: 108.98941,
  		i: 16.52987,
  		e: 0.6073309,
  		a: 2.780529
  	},
  	{
  		H: 18.19,
  		desig: "2006 VT2",
  		epoch: 2459200.5,
  		ma: 248.93316,
  		w: 152.62041,
  		om: 59.46163,
  		i: 31.8148,
  		e: 0.7229445,
  		a: 1.2626857
  	},
  	{
  		H: 17.41,
  		desig: "2008 FT6",
  		epoch: 2459200.5,
  		ma: 89.86035,
  		w: 52.20754,
  		om: 41.9428,
  		i: 13.58232,
  		e: 0.4268103,
  		a: 2.137351
  	},
  	{
  		H: 17.81,
  		desig: "2000 JO78",
  		epoch: 2459200.5,
  		ma: 154.70137,
  		w: 349.98429,
  		om: 310.5359,
  		i: 7.33145,
  		e: 0.4370343,
  		a: 2.1528745
  	},
  	{
  		H: 18.23,
  		desig: "2002 HF8",
  		epoch: 2459200.5,
  		ma: 62.02159,
  		w: 261.68137,
  		om: 48.69744,
  		i: 4.7708,
  		e: 0.4907609,
  		a: 2.3176305
  	},
  	{
  		H: 17.28,
  		desig: "2002 TN30",
  		epoch: 2459200.5,
  		ma: 355.85245,
  		w: 91.79418,
  		om: 20.57748,
  		i: 19.84394,
  		e: 0.4475666,
  		a: 2.3337215
  	},
  	{
  		H: 17.8,
  		desig: "2003 UL3",
  		epoch: 2459200.5,
  		ma: 2.96521,
  		w: 13.01147,
  		om: 153.13267,
  		i: 14.64471,
  		e: 0.798025,
  		a: 2.2437035
  	},
  	{
  		H: 18.26,
  		desig: "2008 UW5",
  		epoch: 2459200.5,
  		ma: 250.42558,
  		w: 204.42631,
  		om: 297.92045,
  		i: 9.42132,
  		e: 0.3896413,
  		a: 1.8317798
  	},
  	{
  		H: 15.82,
  		desig: "2001 RC12",
  		epoch: 2459200.5,
  		ma: 115.53204,
  		w: 185.48307,
  		om: 208.90852,
  		i: 27.37848,
  		e: 0.641936,
  		a: 3.2143392
  	},
  	{
  		H: 17,
  		desig: "2002 WZ2",
  		epoch: 2459200.5,
  		ma: 256.94277,
  		w: 48.15827,
  		om: 261.34093,
  		i: 51.31914,
  		e: 0.8846332,
  		a: 2.4618405
  	},
  	{
  		H: 16.14,
  		desig: "2004 XO14",
  		epoch: 2459200.5,
  		ma: 258.49214,
  		w: 276.26376,
  		om: 129.48213,
  		i: 25.93152,
  		e: 0.5541933,
  		a: 2.6700272
  	},
  	{
  		H: 15.6,
  		desig: "2008 EJ1",
  		epoch: 2459200.5,
  		ma: 176.0883,
  		w: 78.95286,
  		om: 337.37691,
  		i: 38.79812,
  		e: 0.5296299,
  		a: 2.0830753
  	},
  	{
  		H: 17.9,
  		desig: "2008 RJ1",
  		epoch: 2459200.5,
  		ma: 4.26325,
  		w: 54.83073,
  		om: 191.61546,
  		i: 16.26941,
  		e: 0.4706586,
  		a: 2.1684354
  	},
  	{
  		H: 17,
  		desig: "2009 XC2",
  		epoch: 2459200.5,
  		ma: 180.81974,
  		w: 93.35868,
  		om: 104.14588,
  		i: 25.78459,
  		e: 0.5825404,
  		a: 2.6452309
  	},
  	{
  		H: 16.51,
  		desig: "2003 WL25",
  		epoch: 2459200.5,
  		ma: 257.21196,
  		w: 25.01249,
  		om: 267.11986,
  		i: 23.7675,
  		e: 0.7419111,
  		a: 2.3956282
  	},
  	{
  		H: 17.61,
  		desig: "2006 CX10",
  		epoch: 2459200.5,
  		ma: 205.94031,
  		w: 189.7244,
  		om: 32.17407,
  		i: 27.09179,
  		e: 0.5125469,
  		a: 2.5665977
  	},
  	{
  		H: 18.08,
  		desig: "2007 QX14",
  		epoch: 2459200.5,
  		ma: 276.44019,
  		w: 250.55497,
  		om: 20.44403,
  		i: 5.21879,
  		e: 0.4615212,
  		a: 2.3488889
  	},
  	{
  		H: 18.2,
  		desig: "1999 KK1",
  		epoch: 2459200.5,
  		ma: 330.13656,
  		w: 230.03242,
  		om: 76.7346,
  		i: 7.10316,
  		e: 0.461105,
  		a: 2.1155185
  	},
  	{
  		H: 17.1,
  		desig: "2005 YY93",
  		epoch: 2459200.5,
  		ma: 197.85191,
  		w: 311.7609,
  		om: 296.67988,
  		i: 24.17796,
  		e: 0.8831079,
  		a: 2.5803895
  	},
  	{
  		H: 17.91,
  		desig: "2006 SJ134",
  		epoch: 2459200.5,
  		ma: 106.29808,
  		w: 303.36407,
  		om: 129.67637,
  		i: 26.10858,
  		e: 0.477606,
  		a: 2.2029377
  	},
  	{
  		H: 17.6,
  		desig: "2009 TG10",
  		epoch: 2459200.5,
  		ma: 144.16142,
  		w: 12.20799,
  		om: 210.67067,
  		i: 40.85202,
  		e: 0.4234041,
  		a: 1.974092
  	},
  	{
  		H: 17.52,
  		desig: "2005 UH3",
  		epoch: 2459200.5,
  		ma: 257.46196,
  		w: 309.15694,
  		om: 53.32944,
  		i: 44.77269,
  		e: 0.5461322,
  		a: 1.7263858
  	},
  	{
  		H: 17.1,
  		desig: "2006 HY51",
  		epoch: 2459200.5,
  		ma: 162.129,
  		w: 341.9373,
  		om: 40.63092,
  		i: 33.48577,
  		e: 0.9684516,
  		a: 2.5887531
  	},
  	{
  		H: 17.6,
  		desig: "2004 KT",
  		epoch: 2459200.5,
  		ma: 237.11855,
  		w: 238.47249,
  		om: 267.94376,
  		i: 43.63668,
  		e: 0.6642962,
  		a: 1.8539915
  	},
  	{
  		H: 16.7,
  		desig: "2006 KZ112",
  		epoch: 2459200.5,
  		ma: 240.7397,
  		w: 358.17251,
  		om: 166.2941,
  		i: 37.79055,
  		e: 0.8868736,
  		a: 2.5240105
  	},
  	{
  		H: 18.1,
  		desig: "2007 LV",
  		epoch: 2459200.5,
  		ma: 245.09328,
  		w: 262.08101,
  		om: 70.28934,
  		i: 16.99695,
  		e: 0.2708759,
  		a: 1.7626207
  	},
  	{
  		H: 17.3,
  		desig: "2007 PP6",
  		epoch: 2459200.5,
  		ma: 34.41605,
  		w: 13.01143,
  		om: 77.14362,
  		i: 18.54216,
  		e: 0.8352187,
  		a: 2.1660537
  	},
  	{
  		H: 16.05,
  		desig: "2000 PG3",
  		epoch: 2459200.5,
  		ma: 74.71176,
  		w: 141.21526,
  		om: 323.59037,
  		i: 22.02293,
  		e: 0.8555184,
  		a: 2.8246962
  	},
  	{
  		H: 16.97,
  		desig: "2005 QE166",
  		epoch: 2459200.5,
  		ma: 106.5143,
  		w: 234.39219,
  		om: 188.83379,
  		i: 12.95545,
  		e: 0.5288837,
  		a: 2.7493533
  	},
  	{
  		H: 15.46,
  		desig: "2012 SF51",
  		epoch: 2459200.5,
  		ma: 304.70424,
  		w: 156.63021,
  		om: 1.14372,
  		i: 20.80067,
  		e: 0.6878865,
  		a: 2.5023629
  	},
  	{
  		H: 18,
  		desig: "2004 ST9",
  		epoch: 2459200.5,
  		ma: 8.47485,
  		w: 60.12054,
  		om: 195.03091,
  		i: 12.2313,
  		e: 0.4381585,
  		a: 2.2458314
  	},
  	{
  		H: 18.23,
  		desig: "2005 OJ3",
  		epoch: 2459200.5,
  		ma: 130.76657,
  		w: 155.91017,
  		om: 238.32882,
  		i: 4.50936,
  		e: 0.5434138,
  		a: 2.7010437
  	},
  	{
  		H: 17.21,
  		desig: "2009 KJ",
  		epoch: 2459200.5,
  		ma: 171.92187,
  		w: 67.10872,
  		om: 12.50848,
  		i: 32.95865,
  		e: 0.7174149,
  		a: 1.2408909
  	},
  	{
  		H: 18.2,
  		desig: "2010 RQ30",
  		epoch: 2459200.5,
  		ma: 293.22827,
  		w: 7.83934,
  		om: 137.45867,
  		i: 4.92378,
  		e: 0.4764984,
  		a: 1.5834434
  	},
  	{
  		H: 17.17,
  		desig: "2011 QF3",
  		epoch: 2459200.5,
  		ma: 314.40979,
  		w: 315.43392,
  		om: 172.61837,
  		i: 9.77018,
  		e: 0.5128918,
  		a: 2.0528052
  	},
  	{
  		H: 18.2,
  		desig: "2011 SL102",
  		epoch: 2459200.5,
  		ma: 262.09596,
  		w: 51.98209,
  		om: 59.42356,
  		i: 9.99839,
  		e: 0.4912389,
  		a: 2.2016873
  	},
  	{
  		H: 17.09,
  		desig: "1991 TB2",
  		epoch: 2459200.5,
  		ma: 326.29837,
  		w: 199.36324,
  		om: 291.94077,
  		i: 7.94377,
  		e: 0.7928319,
  		a: 2.0446139
  	},
  	{
  		H: 18.2,
  		desig: "2004 HO1",
  		epoch: 2459200.5,
  		ma: 356.89648,
  		w: 265.11054,
  		om: 43.39185,
  		i: 25.77403,
  		e: 0.5211326,
  		a: 2.2062155
  	},
  	{
  		H: 18.1,
  		desig: "2007 EJ",
  		epoch: 2459200.5,
  		ma: 187.5177,
  		w: 3.61937,
  		om: 61.7711,
  		i: 8.32885,
  		e: 0.6296615,
  		a: 2.4994764
  	},
  	{
  		H: 17.84,
  		desig: "2010 LJ14",
  		epoch: 2459200.5,
  		ma: 134.25063,
  		w: 295.31977,
  		om: 177.40742,
  		i: 12.02938,
  		e: 0.3420151,
  		a: 1.6261658
  	},
  	{
  		H: 16.84,
  		desig: "2001 MF1",
  		epoch: 2459200.5,
  		ma: 164.41563,
  		w: 76.52683,
  		om: 288.6354,
  		i: 23.97438,
  		e: 0.5770307,
  		a: 2.6499893
  	},
  	{
  		H: 18.2,
  		desig: "2001 UV16",
  		epoch: 2459200.5,
  		ma: 283.61411,
  		w: 92.45029,
  		om: 30.72135,
  		i: 38.05191,
  		e: 0.5034839,
  		a: 2.1886087
  	},
  	{
  		H: 16.82,
  		desig: "2002 VY94",
  		epoch: 2459200.5,
  		ma: 2.84394,
  		w: 233.24335,
  		om: 280.87686,
  		i: 9.13544,
  		e: 0.6572964,
  		a: 3.24523
  	},
  	{
  		H: 18.1,
  		desig: "2004 VA15",
  		epoch: 2459200.5,
  		ma: 101.26063,
  		w: 332.17932,
  		om: 34.70869,
  		i: 17.80974,
  		e: 0.5839797,
  		a: 2.9068272
  	},
  	{
  		H: 17.58,
  		desig: "2005 TG45",
  		epoch: 2459200.5,
  		ma: 219.80852,
  		w: 230.42127,
  		om: 273.43455,
  		i: 23.33578,
  		e: 0.3722219,
  		a: 0.6814156
  	},
  	{
  		H: 17.96,
  		desig: "2009 DC43",
  		epoch: 2459200.5,
  		ma: 290.02625,
  		w: 172.83869,
  		om: 84.25862,
  		i: 20.84012,
  		e: 0.4896915,
  		a: 1.8005094
  	},
  	{
  		H: 16.8,
  		desig: "2009 SM103",
  		epoch: 2459200.5,
  		ma: 131.66959,
  		w: 26.23005,
  		om: 300.33256,
  		i: 12.69807,
  		e: 0.5544309,
  		a: 2.8421758
  	},
  	{
  		H: 16.07,
  		desig: "2009 UV18",
  		epoch: 2459200.5,
  		ma: 335.03773,
  		w: 62.64766,
  		om: 86.78382,
  		i: 8.34076,
  		e: 0.632672,
  		a: 3.1755204
  	},
  	{
  		H: 18,
  		desig: "2010 EH20",
  		epoch: 2459200.5,
  		ma: 152.97327,
  		w: 207.67639,
  		om: 120.69199,
  		i: 23.85765,
  		e: 0.5222711,
  		a: 2.6243684
  	},
  	{
  		H: 17.52,
  		desig: "2010 XT45",
  		epoch: 2459200.5,
  		ma: 104.84579,
  		w: 88.9283,
  		om: 202.46323,
  		i: 13.62879,
  		e: 0.2776512,
  		a: 1.6050675
  	},
  	{
  		H: 18.12,
  		desig: "1999 AU23",
  		epoch: 2459200.5,
  		ma: 336.75362,
  		w: 117.99391,
  		om: 293.55999,
  		i: 20.44242,
  		e: 0.4098337,
  		a: 2.1627353
  	},
  	{
  		H: 17.76,
  		desig: "2000 JN10",
  		epoch: 2459200.5,
  		ma: 357.63891,
  		w: 254.61083,
  		om: 47.12829,
  		i: 21.45353,
  		e: 0.4296498,
  		a: 2.2575015
  	},
  	{
  		H: 18.1,
  		desig: "2002 AT5",
  		epoch: 2459200.5,
  		ma: 114.8104,
  		w: 179.99617,
  		om: 332.61281,
  		i: 25.85345,
  		e: 0.5423302,
  		a: 2.6749814
  	},
  	{
  		H: 17.9,
  		desig: "2002 NV",
  		epoch: 2459200.5,
  		ma: 108.32305,
  		w: 271.83995,
  		om: 294.27665,
  		i: 22.26427,
  		e: 0.6161942,
  		a: 2.6681104
  	},
  	{
  		H: 17.94,
  		desig: "2002 XM90",
  		epoch: 2459200.5,
  		ma: 149.75862,
  		w: 80.78965,
  		om: 81.59825,
  		i: 20.17857,
  		e: 0.3780058,
  		a: 1.7910214
  	},
  	{
  		H: 16.9,
  		desig: "2004 EB",
  		epoch: 2459200.5,
  		ma: 346.3829,
  		w: 238.36529,
  		om: 21.11638,
  		i: 21.10382,
  		e: 0.6585688,
  		a: 3.1178364
  	},
  	{
  		H: 17.5,
  		desig: "2004 XJ3",
  		epoch: 2459200.5,
  		ma: 109.17404,
  		w: 153.57006,
  		om: 242.06008,
  		i: 35.94021,
  		e: 0.5572785,
  		a: 2.8674608
  	},
  	{
  		H: 17.8,
  		desig: "2004 YR32",
  		epoch: 2459200.5,
  		ma: 347.12357,
  		w: 88.54707,
  		om: 90.34962,
  		i: 20.51649,
  		e: 0.7002679,
  		a: 3.0626615
  	},
  	{
  		H: 17.14,
  		desig: "2006 AT2",
  		epoch: 2459200.5,
  		ma: 96.99748,
  		w: 39.13199,
  		om: 144.11109,
  		i: 21.16833,
  		e: 0.5988933,
  		a: 2.7105458
  	},
  	{
  		H: 17.33,
  		desig: "2006 VA3",
  		epoch: 2459200.5,
  		ma: 296.6074,
  		w: 307.77918,
  		om: 312.94087,
  		i: 53.35972,
  		e: 0.6783062,
  		a: 1.6030126
  	},
  	{
  		H: 18.1,
  		desig: "2007 NC5",
  		epoch: 2459200.5,
  		ma: 196.25776,
  		w: 20.5388,
  		om: 165.84215,
  		i: 19.3188,
  		e: 0.8871336,
  		a: 2.44416
  	},
  	{
  		H: 18.2,
  		desig: "2008 DV",
  		epoch: 2459200.5,
  		ma: 185.76324,
  		w: 258.51957,
  		om: 308.97758,
  		i: 31.31063,
  		e: 0.4514552,
  		a: 1.7302432
  	},
  	{
  		H: 16.48,
  		desig: "2008 EA32",
  		epoch: 2459200.5,
  		ma: 22.37239,
  		w: 181.84658,
  		om: 100.95607,
  		i: 28.26486,
  		e: 0.3049935,
  		a: 0.6159309
  	},
  	{
  		H: 17,
  		desig: "2009 DM1",
  		epoch: 2459200.5,
  		ma: 150.91557,
  		w: 219.73785,
  		om: 197.56419,
  		i: 15.20212,
  		e: 0.6404137,
  		a: 2.8929099
  	},
  	{
  		H: 17.9,
  		desig: "2010 XK52",
  		epoch: 2459200.5,
  		ma: 146.38824,
  		w: 210.37933,
  		om: 291.31263,
  		i: 15.607,
  		e: 0.5190262,
  		a: 2.574917
  	},
  	{
  		H: 17.7,
  		desig: "2011 BJ24",
  		epoch: 2459200.5,
  		ma: 247.4616,
  		w: 188.84338,
  		om: 191.07135,
  		i: 8.08687,
  		e: 0.6414453,
  		a: 2.4028583
  	},
  	{
  		H: 18.1,
  		desig: "2011 GA55",
  		epoch: 2459200.5,
  		ma: 348.82453,
  		w: 316.98743,
  		om: 319.80201,
  		i: 8.72092,
  		e: 0.4839658,
  		a: 2.1671798
  	},
  	{
  		H: 17.81,
  		desig: "2011 XZ1",
  		epoch: 2459200.5,
  		ma: 44.97924,
  		w: 36.28861,
  		om: 273.70544,
  		i: 6.66596,
  		e: 0.4612373,
  		a: 2.138125
  	},
  	{
  		H: 18,
  		desig: "1985 WA",
  		epoch: 2459200.5,
  		ma: 124.0735,
  		w: 351.47261,
  		om: 43.37245,
  		i: 9.82044,
  		e: 0.6088124,
  		a: 2.8284573
  	},
  	{
  		H: 17.63,
  		desig: "2007 DU103",
  		epoch: 2459200.5,
  		ma: 145.6647,
  		w: 294.59864,
  		om: 338.25633,
  		i: 23.20179,
  		e: 0.5010023,
  		a: 2.4627899
  	},
  	{
  		H: 17.99,
  		desig: "2008 EZ97",
  		epoch: 2459200.5,
  		ma: 127.66677,
  		w: 197.22713,
  		om: 68.77018,
  		i: 8.4825,
  		e: 0.4743613,
  		a: 2.410885
  	},
  	{
  		H: 18,
  		desig: "2009 QE8",
  		epoch: 2459200.5,
  		ma: 193.86653,
  		w: 295.54759,
  		om: 334.08549,
  		i: 8.48507,
  		e: 0.4417679,
  		a: 2.2060548
  	},
  	{
  		H: 17.31,
  		desig: "2003 VF1",
  		epoch: 2459200.5,
  		ma: 279.70199,
  		w: 98.57953,
  		om: 46.98587,
  		i: 53.58678,
  		e: 0.3787773,
  		a: 1.6753824
  	},
  	{
  		H: 16.3,
  		desig: "2006 NM",
  		epoch: 2459200.5,
  		ma: 31.12392,
  		w: 29.96937,
  		om: 292.61052,
  		i: 14.21469,
  		e: 0.6172211,
  		a: 2.7775367
  	},
  	{
  		H: 16.17,
  		desig: "2006 WW",
  		epoch: 2459200.5,
  		ma: 93.24476,
  		w: 197.9084,
  		om: 88.25258,
  		i: 32.7788,
  		e: 0.8682556,
  		a: 2.6790453
  	},
  	{
  		H: 18,
  		desig: "2008 JA8",
  		epoch: 2459200.5,
  		ma: 196.00903,
  		w: 231.39704,
  		om: 62.49199,
  		i: 24.20428,
  		e: 0.5064371,
  		a: 2.3147516
  	},
  	{
  		H: 17.3,
  		desig: "2009 ND1",
  		epoch: 2459200.5,
  		ma: 143.56149,
  		w: 292.18615,
  		om: 97.98509,
  		i: 11.82506,
  		e: 0.5708019,
  		a: 2.7336552
  	},
  	{
  		H: 18.2,
  		desig: "2010 NW117",
  		epoch: 2459200.5,
  		ma: 282.91801,
  		w: 148.50154,
  		om: 252.72841,
  		i: 3.40772,
  		e: 0.5327515,
  		a: 2.3539131
  	},
  	{
  		H: 16.6,
  		desig: "2011 LX10",
  		epoch: 2459200.5,
  		ma: 151.74072,
  		w: 306.56975,
  		om: 293.06212,
  		i: 22.55497,
  		e: 0.4945657,
  		a: 2.5429466
  	},
  	{
  		H: 17.34,
  		desig: "2011 SA16",
  		epoch: 2459200.5,
  		ma: 76.12411,
  		w: 317.57442,
  		om: 275.39426,
  		i: 20.12014,
  		e: 0.5326785,
  		a: 2.732302
  	},
  	{
  		H: 17.9,
  		desig: "2002 HU11",
  		epoch: 2459200.5,
  		ma: 82.11552,
  		w: 174.32677,
  		om: 115.3382,
  		i: 20.7583,
  		e: 0.5625143,
  		a: 2.6598398
  	},
  	{
  		H: 17.6,
  		desig: "2006 GU",
  		epoch: 2459200.5,
  		ma: 74.13695,
  		w: 146.13012,
  		om: 149.11757,
  		i: 17.68701,
  		e: 0.5855062,
  		a: 2.6923602
  	},
  	{
  		H: 18.1,
  		desig: "2008 HE",
  		epoch: 2459200.5,
  		ma: 272.86505,
  		w: 185.36992,
  		om: 215.32395,
  		i: 9.82623,
  		e: 0.9504246,
  		a: 2.2613729
  	},
  	{
  		H: 17.9,
  		desig: "2008 JQ24",
  		epoch: 2459200.5,
  		ma: 181.02966,
  		w: 238.16601,
  		om: 87.83003,
  		i: 9.59069,
  		e: 0.4305376,
  		a: 2.2813334
  	},
  	{
  		H: 18.01,
  		desig: "2000 HD74",
  		epoch: 2459200.5,
  		ma: 33.22352,
  		w: 223.58439,
  		om: 55.19648,
  		i: 49.27994,
  		e: 0.5986052,
  		a: 2.9163512
  	},
  	{
  		H: 18.2,
  		desig: "2006 PW",
  		epoch: 2459200.5,
  		ma: 231.23906,
  		w: 325.14178,
  		om: 132.93134,
  		i: 35.90842,
  		e: 0.6514838,
  		a: 1.3814251
  	},
  	{
  		H: 16.84,
  		desig: "2007 GD49",
  		epoch: 2459200.5,
  		ma: 74.68284,
  		w: 296.3648,
  		om: 44.94584,
  		i: 30.85793,
  		e: 0.4964542,
  		a: 2.5408483
  	},
  	{
  		H: 18.25,
  		desig: "2007 US6",
  		epoch: 2459200.5,
  		ma: 326.52238,
  		w: 225.50296,
  		om: 225.44219,
  		i: 12.38841,
  		e: 0.4478167,
  		a: 2.2210046
  	},
  	{
  		H: 17.42,
  		desig: "2011 HB53",
  		epoch: 2459200.5,
  		ma: 261.1577,
  		w: 351.06034,
  		om: 83.77985,
  		i: 30.00403,
  		e: 0.702829,
  		a: 2.3659774
  	},
  	{
  		H: 18.1,
  		desig: "2012 DN",
  		epoch: 2459200.5,
  		ma: 285.87624,
  		w: 247.27304,
  		om: 143.30032,
  		i: 19.95055,
  		e: 0.5930689,
  		a: 2.234829
  	},
  	{
  		H: 18,
  		desig: "2012 FN52",
  		epoch: 2459200.5,
  		ma: 83.56285,
  		w: 350.3638,
  		om: 93.11245,
  		i: 22.62381,
  		e: 0.6651351,
  		a: 1.9784574
  	},
  	{
  		H: 16.5,
  		desig: "2012 LC1",
  		epoch: 2459200.5,
  		ma: 10.53649,
  		w: 52.44903,
  		om: 53.74038,
  		i: 34.39429,
  		e: 0.7643421,
  		a: 2.0100661
  	},
  	{
  		H: 17.7,
  		desig: "2001 RX11",
  		epoch: 2459200.5,
  		ma: 80.62915,
  		w: 307.82373,
  		om: 343.71455,
  		i: 13.09266,
  		e: 0.5477887,
  		a: 2.7613332
  	},
  	{
  		H: 17.3,
  		desig: "2003 UL12",
  		epoch: 2459200.5,
  		ma: 304.80357,
  		w: 275.18116,
  		om: 192.79033,
  		i: 19.79364,
  		e: 0.7024144,
  		a: 3.2846203
  	},
  	{
  		H: 17.4,
  		desig: "2005 NX44",
  		epoch: 2459200.5,
  		ma: 264.84645,
  		w: 215.06158,
  		om: 308.95155,
  		i: 36.64391,
  		e: 0.9075115,
  		a: 2.2142051
  	},
  	{
  		H: 17.6,
  		desig: "2009 WF104",
  		epoch: 2459200.5,
  		ma: 343.99845,
  		w: 94.0735,
  		om: 81.91778,
  		i: 17.00054,
  		e: 0.6576549,
  		a: 3.0769995
  	},
  	{
  		H: 16.51,
  		desig: "2007 PH25",
  		epoch: 2459200.5,
  		ma: 83.93764,
  		w: 331.838,
  		om: 150.28209,
  		i: 53.25193,
  		e: 0.8126435,
  		a: 2.5416553
  	},
  	{
  		H: 18.1,
  		desig: "2007 SP6",
  		epoch: 2459200.5,
  		ma: 74.11829,
  		w: 331.59734,
  		om: 68.26343,
  		i: 14.0948,
  		e: 0.5459155,
  		a: 2.5614824
  	},
  	{
  		H: 18.09,
  		desig: "2011 MD11",
  		epoch: 2459200.5,
  		ma: 118.76857,
  		w: 333.16917,
  		om: 15.90052,
  		i: 16.1547,
  		e: 0.4961028,
  		a: 2.5032108
  	},
  	{
  		H: 18.2,
  		desig: "2012 AU10",
  		epoch: 2459200.5,
  		ma: 105.38189,
  		w: 307.47014,
  		om: 125.22768,
  		i: 39.13131,
  		e: 0.3158586,
  		a: 1.6577302
  	},
  	{
  		H: 17.7,
  		desig: "2012 KU42",
  		epoch: 2459200.5,
  		ma: 203.60002,
  		w: 207.78213,
  		om: 136.19179,
  		i: 18.97925,
  		e: 0.5147673,
  		a: 2.2009719
  	},
  	{
  		H: 17.6,
  		desig: "2012 WP3",
  		epoch: 2459200.5,
  		ma: 265.36416,
  		w: 141.65856,
  		om: 227.18138,
  		i: 22.56785,
  		e: 0.3841607,
  		a: 2.0997325
  	},
  	{
  		H: 17.54,
  		desig: "2002 RU25",
  		epoch: 2459200.5,
  		ma: 266.69821,
  		w: 306.36864,
  		om: 5.04758,
  		i: 28.90447,
  		e: 0.4831964,
  		a: 2.1766649
  	},
  	{
  		H: 17.5,
  		desig: "2008 NS1",
  		epoch: 2459200.5,
  		ma: 118.39605,
  		w: 208.9814,
  		om: 307.78469,
  		i: 14.06192,
  		e: 0.8038324,
  		a: 2.4227551
  	},
  	{
  		H: 18.2,
  		desig: "2001 PE1",
  		epoch: 2459200.5,
  		ma: 58.17407,
  		w: 191.13607,
  		om: 182.92072,
  		i: 3.45587,
  		e: 0.5930136,
  		a: 2.7787141
  	},
  	{
  		H: 18.1,
  		desig: "2002 XZ38",
  		epoch: 2459200.5,
  		ma: 145.77265,
  		w: 237.00645,
  		om: 263.0991,
  		i: 21.66994,
  		e: 0.4815527,
  		a: 2.2187698
  	},
  	{
  		H: 17.8,
  		desig: "2007 TH19",
  		epoch: 2459200.5,
  		ma: 173.37518,
  		w: 194.89051,
  		om: 86.3688,
  		i: 2.27466,
  		e: 0.5027241,
  		a: 2.5069449
  	},
  	{
  		H: 17.86,
  		desig: "2011 UU20",
  		epoch: 2459200.5,
  		ma: 77.65114,
  		w: 137.1277,
  		om: 355.17488,
  		i: 21.98683,
  		e: 0.5285704,
  		a: 2.4788166
  	},
  	{
  		H: 17.14,
  		desig: "2011 YV15",
  		epoch: 2459200.5,
  		ma: 301.3252,
  		w: 162.4498,
  		om: 1.87958,
  		i: 5.96692,
  		e: 0.5454293,
  		a: 2.8426779
  	},
  	{
  		H: 16.7,
  		desig: "2000 RM12",
  		epoch: 2459200.5,
  		ma: 102.4682,
  		w: 102.00807,
  		om: 354.43373,
  		i: 57.26464,
  		e: 0.6676039,
  		a: 2.4316745
  	},
  	{
  		H: 17.79,
  		desig: "2007 SE11",
  		epoch: 2459200.5,
  		ma: 284.03182,
  		w: 353.25118,
  		om: 50.0553,
  		i: 48.28085,
  		e: 0.3564022,
  		a: 1.9581548
  	},
  	{
  		H: 17,
  		desig: "2009 XE11",
  		epoch: 2459200.5,
  		ma: 263.69211,
  		w: 107.75009,
  		om: 99.83121,
  		i: 14.06389,
  		e: 0.6111361,
  		a: 3.3151122
  	},
  	{
  		H: 17.14,
  		desig: "2011 EZ78",
  		epoch: 2459200.5,
  		ma: 196.08099,
  		w: 179.74026,
  		om: 109.86674,
  		i: 17.92348,
  		e: 0.5426329,
  		a: 2.3949283
  	},
  	{
  		H: 18.1,
  		desig: "2002 NW16",
  		epoch: 2459200.5,
  		ma: 326.53385,
  		w: 317.52757,
  		om: 301.54709,
  		i: 14.16471,
  		e: 0.0303202,
  		a: 1.1088072
  	},
  	{
  		H: 17.5,
  		desig: "2005 AB",
  		epoch: 2459200.5,
  		ma: 260.06226,
  		w: 63.77226,
  		om: 126.22294,
  		i: 8.15346,
  		e: 0.6547396,
  		a: 3.2193951
  	},
  	{
  		H: 18.2,
  		desig: "2005 UY6",
  		epoch: 2459200.5,
  		ma: 139.32869,
  		w: 180.76905,
  		om: 343.57366,
  		i: 12.17875,
  		e: 0.8703577,
  		a: 2.2562932
  	},
  	{
  		H: 17.4,
  		desig: "2012 VV93",
  		epoch: 2459200.5,
  		ma: 158.09548,
  		w: 145.69804,
  		om: 314.15901,
  		i: 25.01499,
  		e: 0.4906994,
  		a: 2.2389708
  	},
  	{
  		H: 15.85,
  		desig: "2013 GJ35",
  		epoch: 2459200.5,
  		ma: 211.11283,
  		w: 219.31259,
  		om: 291.21285,
  		i: 41.20021,
  		e: 0.4903559,
  		a: 2.1380269
  	},
  	{
  		H: 17.11,
  		desig: "1997 YM3",
  		epoch: 2459200.5,
  		ma: 338.23764,
  		w: 77.95906,
  		om: 299.64436,
  		i: 3.85498,
  		e: 0.6585495,
  		a: 3.3041852
  	},
  	{
  		H: 17.21,
  		desig: "2000 EB107",
  		epoch: 2459200.5,
  		ma: 321.91884,
  		w: 43.54313,
  		om: 177.39631,
  		i: 25.21435,
  		e: 0.5826924,
  		a: 3.0389482
  	},
  	{
  		H: 18.04,
  		desig: "2000 QN130",
  		epoch: 2459200.5,
  		ma: 22.74569,
  		w: 306.13628,
  		om: 100.04405,
  		i: 2.68173,
  		e: 0.5758602,
  		a: 2.8837391
  	},
  	{
  		H: 17.9,
  		desig: "2001 OE84",
  		epoch: 2459200.5,
  		ma: 202.45219,
  		w: 2.97985,
  		om: 32.19211,
  		i: 9.3566,
  		e: 0.4732516,
  		a: 2.2778675
  	},
  	{
  		H: 17.34,
  		desig: "2002 NX18",
  		epoch: 2459200.5,
  		ma: 109.68675,
  		w: 223.23059,
  		om: 163.91872,
  		i: 2.9862,
  		e: 0.594319,
  		a: 2.602326
  	},
  	{
  		H: 18.2,
  		desig: "2003 RP8",
  		epoch: 2459200.5,
  		ma: 210.54989,
  		w: 22.34291,
  		om: 301.41914,
  		i: 31.2301,
  		e: 0.3660872,
  		a: 1.7336779
  	},
  	{
  		H: 17.2,
  		desig: "2004 JO2",
  		epoch: 2459200.5,
  		ma: 235.49385,
  		w: 127.59334,
  		om: 222.42245,
  		i: 18.75628,
  		e: 0.5688009,
  		a: 2.2917874
  	},
  	{
  		H: 18.01,
  		desig: "2004 MQ1",
  		epoch: 2459200.5,
  		ma: 126.27878,
  		w: 332.0448,
  		om: 56.97679,
  		i: 11.11733,
  		e: 0.7047581,
  		a: 2.4072852
  	},
  	{
  		H: 17.9,
  		desig: "2004 SV55",
  		epoch: 2459200.5,
  		ma: 3.99601,
  		w: 280.85549,
  		om: 344.56292,
  		i: 41.17212,
  		e: 0.6582986,
  		a: 1.7590872
  	},
  	{
  		H: 17.8,
  		desig: "2005 HC3",
  		epoch: 2459200.5,
  		ma: 222.09899,
  		w: 107.33268,
  		om: 94.78125,
  		i: 32.02371,
  		e: 0.3736078,
  		a: 1.9825129
  	},
  	{
  		H: 17.4,
  		desig: "2007 VG184",
  		epoch: 2459200.5,
  		ma: 213.94995,
  		w: 155.8672,
  		om: 146.91409,
  		i: 16.10877,
  		e: 0.6711613,
  		a: 2.3852081
  	},
  	{
  		H: 18,
  		desig: "2008 BS2",
  		epoch: 2459200.5,
  		ma: 331.13383,
  		w: 351.08141,
  		om: 311.09502,
  		i: 14.14589,
  		e: 0.4713628,
  		a: 1.5867504
  	},
  	{
  		H: 17.87,
  		desig: "2008 RY24",
  		epoch: 2459200.5,
  		ma: 227.24539,
  		w: 130.71868,
  		om: 285.00317,
  		i: 4.3848,
  		e: 0.4601243,
  		a: 2.2164434
  	},
  	{
  		H: 17.9,
  		desig: "2009 CZ",
  		epoch: 2459200.5,
  		ma: 136.87901,
  		w: 188.95736,
  		om: 46.61482,
  		i: 21.98139,
  		e: 0.7173035,
  		a: 2.2771612
  	},
  	{
  		H: 17.98,
  		desig: "2011 MD5",
  		epoch: 2459200.5,
  		ma: 99.42089,
  		w: 224.82518,
  		om: 170.33639,
  		i: 10.5548,
  		e: 0.602431,
  		a: 2.4879324
  	},
  	{
  		H: 17.2,
  		desig: "2012 AS10",
  		epoch: 2459200.5,
  		ma: 23.56635,
  		w: 194.90095,
  		om: 50.94706,
  		i: 12.49986,
  		e: 0.4868084,
  		a: 1.5971419
  	},
  	{
  		H: 18.2,
  		desig: "2012 BJ134",
  		epoch: 2459200.5,
  		ma: 194.82583,
  		w: 138.26382,
  		om: 144.54037,
  		i: 21.25784,
  		e: 0.8329,
  		a: 2.2570423
  	},
  	{
  		H: 16.97,
  		desig: "2012 KJ11",
  		epoch: 2459200.5,
  		ma: 50.89811,
  		w: 305.31446,
  		om: 339.62958,
  		i: 35.83802,
  		e: 0.5717071,
  		a: 1.5682066
  	},
  	{
  		H: 17.59,
  		desig: "2012 WG32",
  		epoch: 2459200.5,
  		ma: 160.48654,
  		w: 300.46829,
  		om: 26.56162,
  		i: 17.61361,
  		e: 0.4962665,
  		a: 1.8346597
  	},
  	{
  		H: 18,
  		desig: "2001 SD170",
  		epoch: 2459200.5,
  		ma: 205.48656,
  		w: 215.89327,
  		om: 197.01988,
  		i: 25.26744,
  		e: 0.5286096,
  		a: 2.2743916
  	},
  	{
  		H: 18.19,
  		desig: "2006 RG2",
  		epoch: 2459200.5,
  		ma: 58.35176,
  		w: 75.29079,
  		om: 30.78232,
  		i: 8.58626,
  		e: 0.6503696,
  		a: 2.6951987
  	},
  	{
  		H: 17.44,
  		desig: "2007 DL8",
  		epoch: 2459200.5,
  		ma: 23.65988,
  		w: 135.36179,
  		om: 154.71161,
  		i: 19.64972,
  		e: 0.7639941,
  		a: 2.660121
  	},
  	{
  		H: 16.43,
  		desig: "2010 BL2",
  		epoch: 2459200.5,
  		ma: 131.18216,
  		w: 199.59698,
  		om: 91.23916,
  		i: 59.87674,
  		e: 0.7843539,
  		a: 2.2259922
  	},
  	{
  		H: 17.02,
  		desig: "2012 HR15",
  		epoch: 2459200.5,
  		ma: 102.81549,
  		w: 332.82482,
  		om: 80.46044,
  		i: 28.21607,
  		e: 0.7402358,
  		a: 2.4716767
  	},
  	{
  		H: 16.5,
  		desig: "2006 UQ217",
  		epoch: 2459200.5,
  		ma: 288.62663,
  		w: 240.26417,
  		om: 84.60307,
  		i: 22.2268,
  		e: 0.590308,
  		a: 2.9889533
  	},
  	{
  		H: 17.35,
  		desig: "2008 HW1",
  		epoch: 2459200.5,
  		ma: 3.73954,
  		w: 250.47401,
  		om: 127.71147,
  		i: 10.48525,
  		e: 0.9600069,
  		a: 2.5870617
  	},
  	{
  		H: 17.37,
  		desig: "2009 WO6",
  		epoch: 2459200.5,
  		ma: 358.04258,
  		w: 30.37892,
  		om: 76.21039,
  		i: 28.76244,
  		e: 0.5821796,
  		a: 3.0852379
  	},
  	{
  		H: 18,
  		desig: "2004 LG",
  		epoch: 2459200.5,
  		ma: 179.46059,
  		w: 164.714,
  		om: 256.8602,
  		i: 71.12423,
  		e: 0.896759,
  		a: 2.0644693
  	},
  	{
  		H: 17.81,
  		desig: "2003 LS3",
  		epoch: 2459200.5,
  		ma: 359.8178,
  		w: 175.20993,
  		om: 157.96403,
  		i: 9.57116,
  		e: 0.5280619,
  		a: 2.6470656
  	},
  	{
  		H: 17.9,
  		desig: "2007 LS",
  		epoch: 2459200.5,
  		ma: 340.6573,
  		w: 168.58451,
  		om: 200.94729,
  		i: 6.37338,
  		e: 0.6818688,
  		a: 2.6938635
  	},
  	{
  		H: 17.2,
  		desig: "2005 NK1",
  		epoch: 2459200.5,
  		ma: 347.4431,
  		w: 10.11334,
  		om: 113.71591,
  		i: 33.59453,
  		e: 0.7274698,
  		a: 1.6036969
  	},
  	{
  		H: 18.2,
  		desig: "2009 DK46",
  		epoch: 2459200.5,
  		ma: 315.26195,
  		w: 262.36733,
  		om: 173.31304,
  		i: 26.2982,
  		e: 0.5118333,
  		a: 2.6279247
  	},
  	{
  		H: 18,
  		desig: "2009 LS",
  		epoch: 2459200.5,
  		ma: 244.71381,
  		w: 176.29042,
  		om: 252.74833,
  		i: 44.99672,
  		e: 0.2911976,
  		a: 1.2627824
  	},
  	{
  		H: 17.86,
  		desig: "2003 WX153",
  		epoch: 2459200.5,
  		ma: 75.27152,
  		w: 62.82869,
  		om: 91.67378,
  		i: 32.61384,
  		e: 0.6022035,
  		a: 2.1870941
  	},
  	{
  		H: 17.6,
  		desig: "2003 YQ94",
  		epoch: 2459200.5,
  		ma: 12.38134,
  		w: 85.74289,
  		om: 272.41275,
  		i: 8.53308,
  		e: 0.6181609,
  		a: 2.652235
  	},
  	{
  		H: 17.1,
  		desig: "2006 VY13",
  		epoch: 2459200.5,
  		ma: 277.5161,
  		w: 17.61728,
  		om: 139.86906,
  		i: 4.6727,
  		e: 0.6135596,
  		a: 2.9210372
  	},
  	{
  		H: 16.2,
  		desig: "2007 JF22",
  		epoch: 2459200.5,
  		ma: 183.78474,
  		w: 125.39304,
  		om: 47.72172,
  		i: 25.35747,
  		e: 0.5862317,
  		a: 3.0708817
  	},
  	{
  		H: 17.77,
  		desig: "2009 BD2",
  		epoch: 2459200.5,
  		ma: 330.98924,
  		w: 263.96942,
  		om: 165.42393,
  		i: 14.63095,
  		e: 0.5064162,
  		a: 2.5923614
  	},
  	{
  		H: 17.9,
  		desig: "2010 CD19",
  		epoch: 2459200.5,
  		ma: 78.49422,
  		w: 132.62199,
  		om: 309.43154,
  		i: 20.75298,
  		e: 0.578714,
  		a: 2.2565769
  	},
  	{
  		H: 17.21,
  		desig: "2011 JT9",
  		epoch: 2459200.5,
  		ma: 27.89039,
  		w: 185.2454,
  		om: 118.96586,
  		i: 19.06742,
  		e: 0.5197038,
  		a: 2.6919665
  	},
  	{
  		H: 17.25,
  		desig: "2014 KD91",
  		epoch: 2459200.5,
  		ma: 40.65332,
  		w: 234.32721,
  		om: 202.81994,
  		i: 32.23925,
  		e: 0.5457894,
  		a: 2.3535602
  	},
  	{
  		H: 18.1,
  		desig: "1998 SJ2",
  		epoch: 2459200.5,
  		ma: 98.61304,
  		w: 332.85694,
  		om: 8.6877,
  		i: 10.39079,
  		e: 0.5020547,
  		a: 2.3298297
  	},
  	{
  		H: 16.74,
  		desig: "1999 JO6",
  		epoch: 2459200.5,
  		ma: 44.42991,
  		w: 250.8631,
  		om: 64.37061,
  		i: 27.86494,
  		e: 0.497183,
  		a: 2.5783461
  	},
  	{
  		H: 18.1,
  		desig: "2001 AO2",
  		epoch: 2459200.5,
  		ma: 240.97648,
  		w: 77.6661,
  		om: 104.05943,
  		i: 19.87938,
  		e: 0.6105537,
  		a: 3.0593447
  	},
  	{
  		H: 17.9,
  		desig: "2001 NZ1",
  		epoch: 2459200.5,
  		ma: 296.38778,
  		w: 359.75086,
  		om: 253.86641,
  		i: 24.60562,
  		e: 0.4040832,
  		a: 2.0166711
  	},
  	{
  		H: 18.01,
  		desig: "2002 AC29",
  		epoch: 2459200.5,
  		ma: 284.47941,
  		w: 129.66593,
  		om: 85.10648,
  		i: 26.60313,
  		e: 0.5029841,
  		a: 1.6417238
  	},
  	{
  		H: 18.1,
  		desig: "2002 YZ3",
  		epoch: 2459200.5,
  		ma: 243.62274,
  		w: 358.76551,
  		om: 350.14129,
  		i: 19.93244,
  		e: 0.7961252,
  		a: 1.9433688
  	},
  	{
  		H: 17.57,
  		desig: "2003 LX5",
  		epoch: 2459200.5,
  		ma: 291.75,
  		w: 148.8571,
  		om: 38.62465,
  		i: 1.26191,
  		e: 0.5413911,
  		a: 2.7855704
  	},
  	{
  		H: 15.1,
  		desig: "2004 YZ23",
  		epoch: 2459200.5,
  		ma: 172.52373,
  		w: 300.86616,
  		om: 253.03076,
  		i: 56.14862,
  		e: 0.6769172,
  		a: 3.4214317
  	},
  	{
  		H: 18.09,
  		desig: "2009 BE77",
  		epoch: 2459200.5,
  		ma: 329.4419,
  		w: 26.97347,
  		om: 201.17073,
  		i: 21.12556,
  		e: 0.8259422,
  		a: 2.522566
  	},
  	{
  		H: 17.98,
  		name: "Cernunnos",
  		desig: "2009 KL2",
  		epoch: 2459200.5,
  		ma: 158.34458,
  		w: 165.79277,
  		om: 173.7153,
  		i: 9.45635,
  		e: 0.4695814,
  		a: 2.2000468
  	},
  	{
  		H: 17.8,
  		desig: "2009 KM7",
  		epoch: 2459200.5,
  		ma: 158.67663,
  		w: 90.43866,
  		om: 212.687,
  		i: 17.92289,
  		e: 0.4868661,
  		a: 2.2400794
  	},
  	{
  		H: 17.97,
  		desig: "2011 BH10",
  		epoch: 2459200.5,
  		ma: 349.08102,
  		w: 81.02339,
  		om: 323.8585,
  		i: 12.45896,
  		e: 0.3722612,
  		a: 1.5829063
  	},
  	{
  		H: 18.2,
  		desig: "2002 AN11",
  		epoch: 2459200.5,
  		ma: 281.17341,
  		w: 116.71252,
  		om: 278.65929,
  		i: 19.8654,
  		e: 0.3353253,
  		a: 1.8173054
  	},
  	{
  		H: 17.69,
  		desig: "2002 JY8",
  		epoch: 2459200.5,
  		ma: 56.85879,
  		w: 188.02024,
  		om: 127.93048,
  		i: 24.28148,
  		e: 0.5950986,
  		a: 2.3338348
  	},
  	{
  		H: 17.63,
  		desig: "2003 WM25",
  		epoch: 2459200.5,
  		ma: 38.20902,
  		w: 295.08772,
  		om: 67.84231,
  		i: 12.2289,
  		e: 0.5658866,
  		a: 2.6179657
  	},
  	{
  		H: 17.8,
  		desig: "2004 BE85",
  		epoch: 2459200.5,
  		ma: 280.57098,
  		w: 268.71973,
  		om: 275.69948,
  		i: 23.99465,
  		e: 0.5202186,
  		a: 2.6878071
  	},
  	{
  		H: 17.59,
  		desig: "2005 YS165",
  		epoch: 2459200.5,
  		ma: 138.04124,
  		w: 10.27881,
  		om: 86.11859,
  		i: 34.0041,
  		e: 0.4448557,
  		a: 1.968044
  	},
  	{
  		H: 18.28,
  		desig: "2012 FK35",
  		epoch: 2459200.5,
  		ma: 264.25776,
  		w: 303.09559,
  		om: 18.40893,
  		i: 35.94273,
  		e: 0.5814156,
  		a: 1.4517964
  	},
  	{
  		H: 17.8,
  		desig: "2013 KY1",
  		epoch: 2459200.5,
  		ma: 288.43229,
  		w: 136.2976,
  		om: 122.46238,
  		i: 19.02018,
  		e: 0.5271757,
  		a: 2.6245797
  	},
  	{
  		H: 17.08,
  		desig: "1994 JX",
  		epoch: 2459200.5,
  		ma: 286.42438,
  		w: 193.44846,
  		om: 52.47303,
  		i: 32.14821,
  		e: 0.5723542,
  		a: 2.7642381
  	},
  	{
  		H: 17.1,
  		desig: "2003 WW87",
  		epoch: 2459200.5,
  		ma: 26.28052,
  		w: 349.27313,
  		om: 46.0944,
  		i: 46.82261,
  		e: 0.5693536,
  		a: 2.6013171
  	},
  	{
  		H: 17.6,
  		desig: "2012 ET14",
  		epoch: 2459200.5,
  		ma: 197.51282,
  		w: 174.45247,
  		om: 166.65241,
  		i: 66.23513,
  		e: 0.5663706,
  		a: 1.6808621
  	},
  	{
  		H: 17.4,
  		desig: "2012 QF49",
  		epoch: 2459200.5,
  		ma: 133.83421,
  		w: 30.66681,
  		om: 30.67293,
  		i: 28.24337,
  		e: 0.4924192,
  		a: 2.259024
  	},
  	{
  		H: 18.11,
  		desig: "2012 RG3",
  		epoch: 2459200.5,
  		ma: 310.99172,
  		w: 35.1613,
  		om: 113.05511,
  		i: 15.91793,
  		e: 0.5286054,
  		a: 1.5742675
  	},
  	{
  		H: 18.2,
  		desig: "2013 AB53",
  		epoch: 2459200.5,
  		ma: 68.51993,
  		w: 229.44501,
  		om: 163.96766,
  		i: 5.47112,
  		e: 0.4867629,
  		a: 2.4179322
  	},
  	{
  		H: 17.79,
  		desig: "2013 OE",
  		epoch: 2459200.5,
  		ma: 116.05881,
  		w: 220.20911,
  		om: 230.04544,
  		i: 9.78915,
  		e: 0.5094873,
  		a: 2.0328557
  	},
  	{
  		H: 16.69,
  		desig: "2005 GL9",
  		epoch: 2459200.5,
  		ma: 29.10994,
  		w: 162.17351,
  		om: 225.63405,
  		i: 20.02183,
  		e: 0.8959348,
  		a: 2.1421117
  	},
  	{
  		H: 17.8,
  		desig: "2015 PQ291",
  		epoch: 2459200.5,
  		ma: 359.64028,
  		w: 199.0246,
  		om: 234.40314,
  		i: 34.60126,
  		e: 0.2374434,
  		a: 0.9825509
  	},
  	{
  		H: 18,
  		desig: "2002 QD7",
  		epoch: 2459200.5,
  		ma: 301.49661,
  		w: 197.11468,
  		om: 197.95356,
  		i: 11.63226,
  		e: 0.6473916,
  		a: 2.4213343
  	},
  	{
  		H: 17.5,
  		desig: "2007 VR183",
  		epoch: 2459200.5,
  		ma: 321.56428,
  		w: 298.11697,
  		om: 220.47024,
  		i: 23.4913,
  		e: 0.6182876,
  		a: 2.6895661
  	},
  	{
  		H: 17.4,
  		desig: "2008 NU",
  		epoch: 2459200.5,
  		ma: 266.76608,
  		w: 19.69711,
  		om: 289.83149,
  		i: 10.71998,
  		e: 0.530808,
  		a: 2.7481312
  	},
  	{
  		H: 17.53,
  		desig: "2013 LB1",
  		epoch: 2459200.5,
  		ma: 306.63801,
  		w: 313.19006,
  		om: 262.65408,
  		i: 31.77054,
  		e: 0.5233198,
  		a: 2.6061456
  	},
  	{
  		H: 17.9,
  		desig: "2013 MY6",
  		epoch: 2459200.5,
  		ma: 46.71128,
  		w: 9.78139,
  		om: 124.9834,
  		i: 52.25025,
  		e: 0.5031715,
  		a: 1.532225
  	},
  	{
  		H: 18,
  		desig: "2000 BE19",
  		epoch: 2459200.5,
  		ma: 84.14302,
  		w: 326.49762,
  		om: 71.56898,
  		i: 10.113,
  		e: 0.5583144,
  		a: 1.8693244
  	},
  	{
  		H: 18.1,
  		desig: "2000 QU7",
  		epoch: 2459200.5,
  		ma: 303.43292,
  		w: 87.70661,
  		om: 339.17245,
  		i: 22.31882,
  		e: 0.6470298,
  		a: 2.2833142
  	},
  	{
  		H: 18.12,
  		desig: "2004 QD20",
  		epoch: 2459200.5,
  		ma: 66.898,
  		w: 353.4103,
  		om: 224.19652,
  		i: 17.53716,
  		e: 0.6975898,
  		a: 2.1725791
  	},
  	{
  		H: 16.9,
  		desig: "2013 AP60",
  		epoch: 2459200.5,
  		ma: 244.88899,
  		w: 49.18026,
  		om: 251.08458,
  		i: 21.89293,
  		e: 0.7502388,
  		a: 2.870576
  	},
  	{
  		H: 17.8,
  		desig: "2013 PE26",
  		epoch: 2459200.5,
  		ma: 44.86283,
  		w: 204.48331,
  		om: 316.00638,
  		i: 45.58396,
  		e: 0.611676,
  		a: 1.5527463
  	},
  	{
  		H: 17.2,
  		desig: "2014 WF365",
  		epoch: 2459200.5,
  		ma: 242.71667,
  		w: 15.13668,
  		om: 165.75709,
  		i: 17.88777,
  		e: 0.7632551,
  		a: 2.2594092
  	},
  	{
  		H: 18.09,
  		desig: "2014 XT3",
  		epoch: 2459200.5,
  		ma: 334.712,
  		w: 14.74735,
  		om: 321.62989,
  		i: 11.03441,
  		e: 0.4669457,
  		a: 2.2578167
  	},
  	{
  		H: 18.2,
  		desig: "2000 SL",
  		epoch: 2459200.5,
  		ma: 247.82027,
  		w: 70.21234,
  		om: 207.74243,
  		i: 38.34859,
  		e: 0.3947645,
  		a: 1.540194
  	},
  	{
  		H: 17.93,
  		desig: "2000 YJ29",
  		epoch: 2459200.5,
  		ma: 78.72584,
  		w: 327.81005,
  		om: 266.13379,
  		i: 43.693,
  		e: 0.8320849,
  		a: 1.9586781
  	},
  	{
  		H: 18.27,
  		desig: "2004 QF1",
  		epoch: 2459200.5,
  		ma: 284.60407,
  		w: 174.0444,
  		om: 332.93032,
  		i: 17.82697,
  		e: 0.2906058,
  		a: 1.0511461
  	},
  	{
  		H: 18.1,
  		desig: "2004 RX109",
  		epoch: 2459200.5,
  		ma: 5.60193,
  		w: 37.30989,
  		om: 200.59122,
  		i: 29.03261,
  		e: 0.8114097,
  		a: 2.210723
  	},
  	{
  		H: 16.8,
  		desig: "2006 AD",
  		epoch: 2459200.5,
  		ma: 246.58357,
  		w: 87.28849,
  		om: 120.37359,
  		i: 54.98811,
  		e: 0.4898404,
  		a: 1.048379
  	},
  	{
  		H: 17.7,
  		desig: "2012 SQ56",
  		epoch: 2459200.5,
  		ma: 204.37164,
  		w: 30.02217,
  		om: 36.31706,
  		i: 29.4919,
  		e: 0.5674339,
  		a: 2.9935401
  	},
  	{
  		H: 17.85,
  		desig: "2014 UV33",
  		epoch: 2459200.5,
  		ma: 22.23047,
  		w: 335.33404,
  		om: 115.69646,
  		i: 8.86257,
  		e: 0.4139042,
  		a: 2.0159599
  	},
  	{
  		H: 16.6,
  		desig: "2000 DQ110",
  		epoch: 2459200.5,
  		ma: 157.61139,
  		w: 95.47482,
  		om: 347.81355,
  		i: 58.27182,
  		e: 0.6294802,
  		a: 3.3593141
  	},
  	{
  		H: 18,
  		desig: "2000 WL10",
  		epoch: 2459200.5,
  		ma: 219.8761,
  		w: 115.18666,
  		om: 252.06091,
  		i: 10.25542,
  		e: 0.7175084,
  		a: 3.1394776
  	},
  	{
  		H: 17.85,
  		desig: "2002 AL14",
  		epoch: 2459200.5,
  		ma: 106.11236,
  		w: 226.19143,
  		om: 128.52191,
  		i: 22.99889,
  		e: 0.1260855,
  		a: 1.03754
  	},
  	{
  		H: 17.73,
  		desig: "2006 YY2",
  		epoch: 2459200.5,
  		ma: 312.43771,
  		w: 68.48095,
  		om: 105.14681,
  		i: 31.43971,
  		e: 0.4059574,
  		a: 1.9923778
  	},
  	{
  		H: 16.8,
  		desig: "2011 XO3",
  		epoch: 2459200.5,
  		ma: 173.54063,
  		w: 209.82313,
  		om: 321.3095,
  		i: 23.9005,
  		e: 0.6609957,
  		a: 3.2366598
  	},
  	{
  		H: 17.3,
  		desig: "2014 GM1",
  		epoch: 2459200.5,
  		ma: 280.42536,
  		w: 75.79059,
  		om: 48.18692,
  		i: 7.45831,
  		e: 0.5288934,
  		a: 2.5219242
  	},
  	{
  		H: 18.28,
  		desig: "1993 BD2",
  		epoch: 2459200.5,
  		ma: 338.79396,
  		w: 65.65313,
  		om: 96.80616,
  		i: 25.52924,
  		e: 0.3946438,
  		a: 2.1218607
  	},
  	{
  		H: 17.3,
  		desig: "2002 RN38",
  		epoch: 2459200.5,
  		ma: 155.7584,
  		w: 118.60882,
  		om: 296.16499,
  		i: 4.16011,
  		e: 0.6727304,
  		a: 3.8171868
  	},
  	{
  		H: 18.12,
  		desig: "2003 WX87",
  		epoch: 2459200.5,
  		ma: 331.87036,
  		w: 324.73033,
  		om: 98.47633,
  		i: 13.02695,
  		e: 0.4909577,
  		a: 2.3032174
  	},
  	{
  		H: 17,
  		desig: "2005 FL4",
  		epoch: 2459200.5,
  		ma: 213.0473,
  		w: 176.87013,
  		om: 66.78744,
  		i: 28.44405,
  		e: 0.721269,
  		a: 2.6506428
  	},
  	{
  		H: 17.6,
  		desig: "2013 TH5",
  		epoch: 2459200.5,
  		ma: 264.33963,
  		w: 107.49512,
  		om: 271.18418,
  		i: 24.91825,
  		e: 0.5807148,
  		a: 2.6060468
  	},
  	{
  		H: 16.8,
  		desig: "2015 AZ245",
  		epoch: 2459200.5,
  		ma: 15.32104,
  		w: 357.91792,
  		om: 252.29443,
  		i: 68.91949,
  		e: 0.732748,
  		a: 1.8565611
  	},
  	{
  		H: 17.88,
  		desig: "2015 YE18",
  		epoch: 2459200.5,
  		ma: 2.01099,
  		w: 80.57563,
  		om: 256.72801,
  		i: 31.02734,
  		e: 0.5409575,
  		a: 1.0373876
  	},
  	{
  		H: 17.7,
  		desig: "2009 HB82",
  		epoch: 2459200.5,
  		ma: 193.09057,
  		w: 301.54931,
  		om: 316.68432,
  		i: 10.97739,
  		e: 0.5993285,
  		a: 2.7587933
  	},
  	{
  		H: 17.2,
  		desig: "2010 NG3",
  		epoch: 2459200.5,
  		ma: 192.33179,
  		w: 194.39916,
  		om: 64.12169,
  		i: 26.96221,
  		e: 0.5674098,
  		a: 2.6047096
  	},
  	{
  		H: 18.2,
  		desig: "2013 AA2",
  		epoch: 2459200.5,
  		ma: 247.92575,
  		w: 259.69625,
  		om: 155.65269,
  		i: 6.85756,
  		e: 0.547227,
  		a: 2.8587927
  	},
  	{
  		H: 15.67,
  		desig: "2014 MQ18",
  		epoch: 2459200.5,
  		ma: 85.49352,
  		w: 332.94011,
  		om: 347.28928,
  		i: 35.07413,
  		e: 0.5993471,
  		a: 2.8988303
  	},
  	{
  		H: 17.8,
  		desig: "2003 UR12",
  		epoch: 2459200.5,
  		ma: 201.58931,
  		w: 122.25167,
  		om: 193.98518,
  		i: 60.46856,
  		e: 0.5671892,
  		a: 2.4318108
  	},
  	{
  		H: 18.1,
  		desig: "2012 PN28",
  		epoch: 2459200.5,
  		ma: 49.50195,
  		w: 174.80514,
  		om: 319.06632,
  		i: 24.5014,
  		e: 0.5323337,
  		a: 1.7799407
  	},
  	{
  		H: 18.2,
  		desig: "2000 WK107",
  		epoch: 2459200.5,
  		ma: 255.48888,
  		w: 271.94326,
  		om: 233.66042,
  		i: 24.1607,
  		e: 0.5420351,
  		a: 2.5919132
  	},
  	{
  		H: 16.81,
  		desig: "2005 JY80",
  		epoch: 2459200.5,
  		ma: 203.08627,
  		w: 212.41043,
  		om: 117.90061,
  		i: 18.22881,
  		e: 0.5614285,
  		a: 2.6404397
  	},
  	{
  		H: 18.1,
  		desig: "2008 HO3",
  		epoch: 2459200.5,
  		ma: 163.47454,
  		w: 128.86286,
  		om: 206.08658,
  		i: 14.06629,
  		e: 0.6504657,
  		a: 2.9182204
  	},
  	{
  		H: 17.52,
  		desig: "1999 VQ11",
  		epoch: 2459200.5,
  		ma: 171.24994,
  		w: 353.23678,
  		om: 26.68053,
  		i: 7.9492,
  		e: 0.5974396,
  		a: 2.8050446
  	},
  	{
  		H: 17.53,
  		desig: "2001 SK276",
  		epoch: 2459200.5,
  		ma: 124.64723,
  		w: 119.41854,
  		om: 297.69168,
  		i: 20.74323,
  		e: 0.5930376,
  		a: 3.1888289
  	},
  	{
  		H: 17.9,
  		desig: "2005 CS6",
  		epoch: 2459200.5,
  		ma: 241.37878,
  		w: 268.90663,
  		om: 313.95447,
  		i: 23.506,
  		e: 0.5501088,
  		a: 2.6141266
  	},
  	{
  		H: 18.18,
  		desig: "2005 TG",
  		epoch: 2459200.5,
  		ma: 175.25752,
  		w: 190.85419,
  		om: 230.92129,
  		i: 11.10897,
  		e: 0.5402248,
  		a: 2.6669028
  	},
  	{
  		H: 18.2,
  		desig: "2006 BH",
  		epoch: 2459200.5,
  		ma: 187.66844,
  		w: 249.21147,
  		om: 306.09834,
  		i: 31.08005,
  		e: 0.6446824,
  		a: 3.2378167
  	},
  	{
  		H: 17.7,
  		desig: "2006 SJ198",
  		epoch: 2459200.5,
  		ma: 168.30321,
  		w: 212.40011,
  		om: 266.83199,
  		i: 2.42989,
  		e: 0.455597,
  		a: 2.0913573
  	},
  	{
  		H: 16.6,
  		desig: "2008 PH9",
  		epoch: 2459200.5,
  		ma: 210.06833,
  		w: 247.92663,
  		om: 341.26182,
  		i: 35.61635,
  		e: 0.5602702,
  		a: 2.9131861
  	},
  	{
  		H: 17,
  		desig: "2010 RO82",
  		epoch: 2459200.5,
  		ma: 170.94519,
  		w: 66.50613,
  		om: 21.29257,
  		i: 18.09245,
  		e: 0.6083711,
  		a: 2.5077926
  	},
  	{
  		H: 18.1,
  		desig: "2012 KY41",
  		epoch: 2459200.5,
  		ma: 248.7235,
  		w: 144.15739,
  		om: 220.89426,
  		i: 23.0552,
  		e: 0.4719536,
  		a: 2.0317749
  	},
  	{
  		H: 17.8,
  		desig: "2013 YB38",
  		epoch: 2459200.5,
  		ma: 346.27131,
  		w: 306.35414,
  		om: 248.79446,
  		i: 22.98593,
  		e: 0.4969152,
  		a: 2.2312347
  	},
  	{
  		H: 18.04,
  		desig: "2015 AX16",
  		epoch: 2459200.5,
  		ma: 202.15636,
  		w: 221.00188,
  		om: 182.19872,
  		i: 9.25494,
  		e: 0.5556355,
  		a: 2.453757
  	},
  	{
  		H: 17.87,
  		desig: "2017 DO36",
  		epoch: 2459200.5,
  		ma: 356.67581,
  		w: 227.92879,
  		om: 138.24989,
  		i: 57.31318,
  		e: 0.3680337,
  		a: 1.7551116
  	},
  	{
  		H: 17.4,
  		desig: "2002 WW17",
  		epoch: 2459200.5,
  		ma: 128.32974,
  		w: 91.31367,
  		om: 71.46722,
  		i: 18.31528,
  		e: 0.6507336,
  		a: 3.0360039
  	},
  	{
  		H: 17.1,
  		desig: "2008 RG98",
  		epoch: 2459200.5,
  		ma: 232.14203,
  		w: 168.50294,
  		om: 340.03835,
  		i: 10.72719,
  		e: 0.76731,
  		a: 2.1921555
  	},
  	{
  		H: 17.58,
  		desig: "2009 HW44",
  		epoch: 2459200.5,
  		ma: 186.62436,
  		w: 296.58693,
  		om: 37.84294,
  		i: 41.0859,
  		e: 0.5924477,
  		a: 2.6869741
  	},
  	{
  		H: 18.09,
  		desig: "2012 DG61",
  		epoch: 2459200.5,
  		ma: 156.81324,
  		w: 186.16964,
  		om: 70.00112,
  		i: 15.32955,
  		e: 0.7377551,
  		a: 3.2530589
  	},
  	{
  		H: 18.2,
  		desig: "1997 VM4",
  		epoch: 2459200.5,
  		ma: 136.46383,
  		w: 124.79847,
  		om: 45.54021,
  		i: 14.19319,
  		e: 0.8132679,
  		a: 2.6207925
  	},
  	{
  		H: 18.2,
  		desig: "1998 YR11",
  		epoch: 2459200.5,
  		ma: 230.15033,
  		w: 320.89558,
  		om: 112.04452,
  		i: 59.7315,
  		e: 0.476581,
  		a: 2.0300675
  	},
  	{
  		H: 17.6,
  		desig: "2002 AU5",
  		epoch: 2459200.5,
  		ma: 237.77493,
  		w: 21.59251,
  		om: 354.74725,
  		i: 9.17989,
  		e: 0.7541399,
  		a: 2.0196819
  	},
  	{
  		H: 18.1,
  		desig: "2002 RT112",
  		epoch: 2459200.5,
  		ma: 113.14,
  		w: 334.6535,
  		om: 310.21089,
  		i: 4.13313,
  		e: 0.5111839,
  		a: 2.6405222
  	},
  	{
  		H: 17.1,
  		desig: "2002 UN",
  		epoch: 2459200.5,
  		ma: 163.33664,
  		w: 39.8588,
  		om: 33.55431,
  		i: 26.18708,
  		e: 0.6100852,
  		a: 3.0028295
  	},
  	{
  		H: 17.11,
  		desig: "2003 PC11",
  		epoch: 2459200.5,
  		ma: 203.0312,
  		w: 10.21657,
  		om: 342.13668,
  		i: 22.96274,
  		e: 0.5838241,
  		a: 2.8570391
  	},
  	{
  		H: 17.6,
  		desig: "2008 VU4",
  		epoch: 2459200.5,
  		ma: 127.92768,
  		w: 23.43878,
  		om: 290.94753,
  		i: 11.97876,
  		e: 0.7743307,
  		a: 2.3715011
  	},
  	{
  		H: 17.56,
  		desig: "2009 NA",
  		epoch: 2459200.5,
  		ma: 215.15797,
  		w: 99.93517,
  		om: 268.54547,
  		i: 10.11044,
  		e: 0.5580775,
  		a: 2.6503573
  	},
  	{
  		H: 17,
  		desig: "2010 KY127",
  		epoch: 2459200.5,
  		ma: 219.28017,
  		w: 357.13135,
  		om: 6.83648,
  		i: 60.80229,
  		e: 0.8827358,
  		a: 2.489867
  	},
  	{
  		H: 17.86,
  		desig: "2011 UA131",
  		epoch: 2459200.5,
  		ma: 131.12211,
  		w: 72.82133,
  		om: 215.29703,
  		i: 24.92394,
  		e: 0.5978962,
  		a: 2.5733357
  	},
  	{
  		H: 17.26,
  		desig: "2011 WS2",
  		epoch: 2459200.5,
  		ma: 24.81731,
  		w: 307.66741,
  		om: 326.74836,
  		i: 46.78472,
  		e: 0.7434718,
  		a: 1.009474
  	},
  	{
  		H: 18.2,
  		desig: "2011 XE1",
  		epoch: 2459200.5,
  		ma: 170.4094,
  		w: 243.22507,
  		om: 272.47956,
  		i: 18.30611,
  		e: 0.4680367,
  		a: 2.3258111
  	},
  	{
  		H: 17.74,
  		desig: "2016 BO1",
  		epoch: 2459200.5,
  		ma: 64.99907,
  		w: 206.81657,
  		om: 153.74281,
  		i: 62.62354,
  		e: 0.5644616,
  		a: 1.8730187
  	},
  	{
  		H: 17.93,
  		desig: "2017 HW1",
  		epoch: 2459200.5,
  		ma: 74.74075,
  		w: 168.89198,
  		om: 41.33164,
  		i: 33.94459,
  		e: 0.4589125,
  		a: 2.1373162
  	},
  	{
  		H: 17.5,
  		desig: "2011 FZ2",
  		epoch: 2459200.5,
  		ma: 43.95397,
  		w: 216.2904,
  		om: 98.98268,
  		i: 13.32628,
  		e: 0.784564,
  		a: 2.6621208
  	},
  	{
  		H: 18.04,
  		desig: "2011 JX1",
  		epoch: 2459200.5,
  		ma: 52.998,
  		w: 221.82799,
  		om: 130.65029,
  		i: 23.92906,
  		e: 0.7394091,
  		a: 2.0873576
  	},
  	{
  		H: 18.1,
  		desig: "1982 YA",
  		epoch: 2459200.5,
  		ma: 170.25108,
  		w: 144.37587,
  		om: 268.96323,
  		i: 35.12299,
  		e: 0.6911883,
  		a: 3.6483355
  	},
  	{
  		H: 17.6,
  		desig: "1999 LT1",
  		epoch: 2459200.5,
  		ma: 62.06487,
  		w: 158.65619,
  		om: 66.93434,
  		i: 42.99777,
  		e: 0.6405263,
  		a: 3.0027774
  	},
  	{
  		H: 17.4,
  		desig: "2000 KE41",
  		epoch: 2459200.5,
  		ma: 357.31836,
  		w: 57.00857,
  		om: 64.76543,
  		i: 50.31661,
  		e: 0.8667943,
  		a: 2.9970831
  	},
  	{
  		H: 17.5,
  		desig: "2000 SG8",
  		epoch: 2459200.5,
  		ma: 63.38094,
  		w: 152.0703,
  		om: 338.14555,
  		i: 24.15486,
  		e: 0.9003972,
  		a: 2.4685376
  	},
  	{
  		H: 16.8,
  		desig: "2001 FF90",
  		epoch: 2459200.5,
  		ma: 231.40259,
  		w: 291.37347,
  		om: 354.4356,
  		i: 23.28204,
  		e: 0.6278433,
  		a: 2.5905518
  	},
  	{
  		H: 18.2,
  		desig: "2001 QG142",
  		epoch: 2459200.5,
  		ma: 113.72102,
  		w: 138.40243,
  		om: 160.76575,
  		i: 31.00481,
  		e: 0.548566,
  		a: 2.3662336
  	},
  	{
  		H: 17,
  		desig: "2002 BJ2",
  		epoch: 2459200.5,
  		ma: 193.49087,
  		w: 60.96297,
  		om: 16.48465,
  		i: 26.09931,
  		e: 0.6539561,
  		a: 2.0489087
  	},
  	{
  		H: 18.07,
  		desig: "2002 RD27",
  		epoch: 2459200.5,
  		ma: 32.86519,
  		w: 73.55332,
  		om: 355.5793,
  		i: 25.59729,
  		e: 0.5358469,
  		a: 2.6828466
  	},
  	{
  		H: 18.2,
  		desig: "2002 TA69",
  		epoch: 2459200.5,
  		ma: 95.07209,
  		w: 48.06776,
  		om: 28.24489,
  		i: 38.65554,
  		e: 0.5843117,
  		a: 2.2752245
  	},
  	{
  		H: 17.82,
  		desig: "2003 JC17",
  		epoch: 2459200.5,
  		ma: 350.77231,
  		w: 40.51339,
  		om: 80.66722,
  		i: 27.32226,
  		e: 0.7166985,
  		a: 2.3430431
  	},
  	{
  		H: 18.1,
  		desig: "2003 SY17",
  		epoch: 2459200.5,
  		ma: 47.19796,
  		w: 218.51404,
  		om: 350.49461,
  		i: 33.06481,
  		e: 0.5812786,
  		a: 2.0452895
  	},
  	{
  		H: 18,
  		desig: "2003 YM1",
  		epoch: 2459200.5,
  		ma: 343.05549,
  		w: 224.75791,
  		om: 290.58043,
  		i: 13.48819,
  		e: 0.5170356,
  		a: 2.6175167
  	},
  	{
  		H: 18.1,
  		desig: "2004 BZ74",
  		epoch: 2459200.5,
  		ma: 69.6883,
  		w: 124.67377,
  		om: 230.25654,
  		i: 17.03142,
  		e: 0.8891803,
  		a: 3.0617932
  	},
  	{
  		H: 18.1,
  		desig: "2004 LZ5",
  		epoch: 2459200.5,
  		ma: 351.31154,
  		w: 320.10612,
  		om: 262.97904,
  		i: 24.76426,
  		e: 0.5485793,
  		a: 2.6020132
  	},
  	{
  		H: 18.2,
  		desig: "2005 BW1",
  		epoch: 2459200.5,
  		ma: 256.91488,
  		w: 274.22168,
  		om: 342.40345,
  		i: 62.26548,
  		e: 0.874978,
  		a: 2.6292305
  	},
  	{
  		H: 18,
  		desig: "2005 BY1",
  		epoch: 2459200.5,
  		ma: 276.22118,
  		w: 282.30645,
  		om: 297.87101,
  		i: 17.01667,
  		e: 0.6899042,
  		a: 3.1590374
  	},
  	{
  		H: 17.4,
  		desig: "2005 GJ79",
  		epoch: 2459200.5,
  		ma: 66.48995,
  		w: 223.20183,
  		om: 77.50005,
  		i: 12.27784,
  		e: 0.4281691,
  		a: 2.0581013
  	},
  	{
  		H: 18.1,
  		desig: "2005 JD46",
  		epoch: 2459200.5,
  		ma: 243.07961,
  		w: 52.29968,
  		om: 46.51437,
  		i: 18.28117,
  		e: 0.7860566,
  		a: 2.6448056
  	},
  	{
  		H: 18.1,
  		desig: "2005 JF108",
  		epoch: 2459200.5,
  		ma: 301.34306,
  		w: 24.20294,
  		om: 68.95817,
  		i: 33.84811,
  		e: 0.7928139,
  		a: 1.9492891
  	},
  	{
  		H: 17.6,
  		desig: "2005 TY51",
  		epoch: 2459200.5,
  		ma: 224.76849,
  		w: 3.63784,
  		om: 79.59326,
  		i: 24.32744,
  		e: 0.5572574,
  		a: 2.600868
  	},
  	{
  		H: 17.9,
  		desig: "2005 XY7",
  		epoch: 2459200.5,
  		ma: 136.20065,
  		w: 88.78621,
  		om: 295.642,
  		i: 4.40546,
  		e: 0.5239695,
  		a: 2.7251988
  	},
  	{
  		H: 17.8,
  		desig: "2006 OS9",
  		epoch: 2459200.5,
  		ma: 70.14142,
  		w: 36.23608,
  		om: 127.21762,
  		i: 21.0738,
  		e: 0.9037364,
  		a: 2.7437388
  	},
  	{
  		H: 18.1,
  		desig: "2007 AC12",
  		epoch: 2459200.5,
  		ma: 358.62784,
  		w: 4.23031,
  		om: 51.11124,
  		i: 23.8205,
  		e: 0.5472896,
  		a: 2.7818597
  	},
  	{
  		H: 17.8,
  		desig: "2007 VL243",
  		epoch: 2459200.5,
  		ma: 204.07514,
  		w: 91.25392,
  		om: 114.71219,
  		i: 43.33452,
  		e: 0.7285742,
  		a: 0.965082
  	},
  	{
  		H: 18.24,
  		desig: "2007 WY3",
  		epoch: 2459200.5,
  		ma: 311.79147,
  		w: 51.23645,
  		om: 285.82054,
  		i: 11.88743,
  		e: 0.7718345,
  		a: 2.7799393
  	},
  	{
  		H: 17.8,
  		desig: "2008 RS26",
  		epoch: 2459200.5,
  		ma: 106.42312,
  		w: 300.12343,
  		om: 100.16964,
  		i: 19.69903,
  		e: 0.5924094,
  		a: 3.010549
  	},
  	{
  		H: 18.1,
  		desig: "2008 YA",
  		epoch: 2459200.5,
  		ma: 288.16929,
  		w: 201.44351,
  		om: 119.14919,
  		i: 31.11759,
  		e: 0.8317209,
  		a: 2.6502546
  	},
  	{
  		H: 18.1,
  		desig: "2009 BB",
  		epoch: 2459200.5,
  		ma: 46.43077,
  		w: 154.99344,
  		om: 72.3301,
  		i: 18.84882,
  		e: 0.8475645,
  		a: 2.4106297
  	},
  	{
  		H: 17.9,
  		desig: "2009 QK2",
  		epoch: 2459200.5,
  		ma: 62.78787,
  		w: 69.56395,
  		om: 205.04757,
  		i: 16.61287,
  		e: 0.6256578,
  		a: 3.039977
  	},
  	{
  		H: 17.9,
  		desig: "2009 WE253",
  		epoch: 2459200.5,
  		ma: 253.07046,
  		w: 105.72911,
  		om: 283.58784,
  		i: 11.94308,
  		e: 0.5505352,
  		a: 2.5897429
  	},
  	{
  		H: 18.24,
  		desig: "2010 EQ43",
  		epoch: 2459200.5,
  		ma: 284.81167,
  		w: 274.75697,
  		om: 5.05191,
  		i: 44.1112,
  		e: 0.4768283,
  		a: 2.3903379
  	},
  	{
  		H: 18.1,
  		desig: "2010 JH88",
  		epoch: 2459200.5,
  		ma: 38.67708,
  		w: 355.79034,
  		om: 102.37961,
  		i: 21.43328,
  		e: 0.7888957,
  		a: 2.2890442
  	},
  	{
  		H: 17.3,
  		desig: "2010 QE2",
  		epoch: 2459200.5,
  		ma: 228.59317,
  		w: 32.85388,
  		om: 2.03832,
  		i: 64.72752,
  		e: 0.7389231,
  		a: 3.3741555
  	},
  	{
  		H: 18.2,
  		desig: "2010 WQ7",
  		epoch: 2459200.5,
  		ma: 240.64611,
  		w: 57.18846,
  		om: 98.7601,
  		i: 13.61032,
  		e: 0.5564469,
  		a: 2.3695056
  	},
  	{
  		H: 18.2,
  		desig: "2011 AO52",
  		epoch: 2459200.5,
  		ma: 47.33822,
  		w: 12.31791,
  		om: 162.67545,
  		i: 17.93584,
  		e: 0.5944558,
  		a: 2.7657968
  	},
  	{
  		H: 18.28,
  		desig: "2011 BM24",
  		epoch: 2459200.5,
  		ma: 340.06922,
  		w: 8.20445,
  		om: 63.55289,
  		i: 29.9144,
  		e: 0.4311906,
  		a: 2.241942
  	},
  	{
  		H: 17.1,
  		desig: "2011 GD62",
  		epoch: 2459200.5,
  		ma: 246.96411,
  		w: 71.31462,
  		om: 241.9779,
  		i: 10.34217,
  		e: 0.6897521,
  		a: 3.0880592
  	},
  	{
  		H: 17.8,
  		desig: "2011 GD68",
  		epoch: 2459200.5,
  		ma: 169.70191,
  		w: 333.35817,
  		om: 90.17579,
  		i: 33.8149,
  		e: 0.7432086,
  		a: 2.0168783
  	},
  	{
  		H: 17.6,
  		desig: "2011 JA8",
  		epoch: 2459200.5,
  		ma: 234.19173,
  		w: 159.11321,
  		om: 158.12353,
  		i: 21.83732,
  		e: 0.6366675,
  		a: 3.1369
  	},
  	{
  		H: 18,
  		desig: "2011 LD19",
  		epoch: 2459200.5,
  		ma: 125.36378,
  		w: 62.16153,
  		om: 287.31077,
  		i: 70.07768,
  		e: 0.4364152,
  		a: 1.9828158
  	},
  	{
  		H: 16.8,
  		desig: "2011 PP16",
  		epoch: 2459200.5,
  		ma: 165.44376,
  		w: 219.73409,
  		om: 213.15254,
  		i: 11.71395,
  		e: 0.6732644,
  		a: 3.3195067
  	},
  	{
  		H: 18.1,
  		desig: "2011 SS25",
  		epoch: 2459200.5,
  		ma: 179.80815,
  		w: 110.05616,
  		om: 18.49996,
  		i: 34.40067,
  		e: 0.7295661,
  		a: 1.884697
  	},
  	{
  		H: 18,
  		desig: "2011 US63",
  		epoch: 2459200.5,
  		ma: 245.04259,
  		w: 242.36421,
  		om: 250.83666,
  		i: 20.54155,
  		e: 0.7789572,
  		a: 3.0274508
  	},
  	{
  		H: 18,
  		desig: "2011 VR5",
  		epoch: 2459200.5,
  		ma: 57.01998,
  		w: 231.83741,
  		om: 281.64239,
  		i: 12.21373,
  		e: 0.5233606,
  		a: 2.49875
  	},
  	{
  		H: 18.2,
  		desig: "2011 XS2",
  		epoch: 2459200.5,
  		ma: 132.72021,
  		w: 99.51292,
  		om: 225.7728,
  		i: 30.80268,
  		e: 0.7408886,
  		a: 1.6408648
  	},
  	{
  		H: 18,
  		desig: "2012 DG4",
  		epoch: 2459200.5,
  		ma: 232.73709,
  		w: 76.11798,
  		om: 336.29964,
  		i: 9.70839,
  		e: 0.6000209,
  		a: 3.1788359
  	},
  	{
  		H: 17.7,
  		desig: "2012 FN62",
  		epoch: 2459200.5,
  		ma: 141.68417,
  		w: 142.42337,
  		om: 148.00366,
  		i: 10.01005,
  		e: 0.6172124,
  		a: 3.2623878
  	},
  	{
  		H: 17.7,
  		desig: "2012 JR17",
  		epoch: 2459200.5,
  		ma: 356.90048,
  		w: 192.17498,
  		om: 131.92237,
  		i: 7.86415,
  		e: 0.5798113,
  		a: 2.6079569
  	},
  	{
  		H: 17.3,
  		desig: "2012 LK2",
  		epoch: 2459200.5,
  		ma: 193.61888,
  		w: 23.78055,
  		om: 109.71668,
  		i: 33.36383,
  		e: 0.8377844,
  		a: 2.2981696
  	},
  	{
  		H: 18.13,
  		desig: "2012 LE11",
  		epoch: 2459200.5,
  		ma: 283.56316,
  		w: 133.92567,
  		om: 181.47209,
  		i: 10.31561,
  		e: 0.6006593,
  		a: 2.7933798
  	},
  	{
  		H: 17.6,
  		desig: "2012 MR4",
  		epoch: 2459200.5,
  		ma: 304.28014,
  		w: 171.08877,
  		om: 286.30995,
  		i: 53.13509,
  		e: 0.6717057,
  		a: 1.6041703
  	},
  	{
  		H: 18.24,
  		desig: "2012 MS6",
  		epoch: 2459200.5,
  		ma: 291.3647,
  		w: 219.07951,
  		om: 101.01065,
  		i: 13.49433,
  		e: 0.53981,
  		a: 2.7568211
  	},
  	{
  		H: 17.5,
  		desig: "2012 OC1",
  		epoch: 2459200.5,
  		ma: 349.39772,
  		w: 110.71595,
  		om: 103.95156,
  		i: 8.15314,
  		e: 0.5287723,
  		a: 2.7225092
  	},
  	{
  		H: 18.2,
  		desig: "2012 SA22",
  		epoch: 2459200.5,
  		ma: 16.65502,
  		w: 125.83357,
  		om: 265.18041,
  		i: 29.19002,
  		e: 0.4922542,
  		a: 2.547721
  	},
  	{
  		H: 17.9,
  		desig: "2012 TA219",
  		epoch: 2459200.5,
  		ma: 295.76948,
  		w: 91.51224,
  		om: 34.7714,
  		i: 25.04557,
  		e: 0.5624695,
  		a: 2.6392056
  	},
  	{
  		H: 15.9,
  		desig: "2012 US136",
  		epoch: 2459200.5,
  		ma: 333.59467,
  		w: 279.29961,
  		om: 0.26646,
  		i: 51.888,
  		e: 0.9126369,
  		a: 4.2909542
  	},
  	{
  		H: 17.98,
  		desig: "2012 UO138",
  		epoch: 2459200.5,
  		ma: 286.50043,
  		w: 215.42103,
  		om: 179.80382,
  		i: 54.5866,
  		e: 0.6677313,
  		a: 2.0163446
  	},
  	{
  		H: 18.06,
  		desig: "2012 VZ36",
  		epoch: 2459200.5,
  		ma: 267.1179,
  		w: 170.6308,
  		om: 180.79692,
  		i: 21.22965,
  		e: 0.5664436,
  		a: 2.7823669
  	},
  	{
  		H: 18.2,
  		desig: "2013 AU76",
  		epoch: 2459200.5,
  		ma: 227.5881,
  		w: 208.91262,
  		om: 13.61599,
  		i: 9.26623,
  		e: 0.7060678,
  		a: 2.7942605
  	},
  	{
  		H: 18.2,
  		desig: "2013 DR9",
  		epoch: 2459200.5,
  		ma: 85.52857,
  		w: 248.83357,
  		om: 350.47458,
  		i: 33.82025,
  		e: 0.6308398,
  		a: 3.2988618
  	},
  	{
  		H: 17.3,
  		desig: "2013 LH25",
  		epoch: 2459200.5,
  		ma: 293.60518,
  		w: 356.8359,
  		om: 129.84296,
  		i: 29.46834,
  		e: 0.8319822,
  		a: 4.4698329
  	},
  	{
  		H: 18,
  		desig: "2013 PU31",
  		epoch: 2459200.5,
  		ma: 286.23916,
  		w: 335.58786,
  		om: 140.35113,
  		i: 19.56351,
  		e: 0.7682626,
  		a: 1.8338806
  	},
  	{
  		H: 17.01,
  		desig: "2013 RF36",
  		epoch: 2459200.5,
  		ma: 344.61428,
  		w: 181.47431,
  		om: 240.74653,
  		i: 28.24572,
  		e: 0.7170736,
  		a: 2.3046874
  	},
  	{
  		H: 17.5,
  		desig: "2013 TB80",
  		epoch: 2459200.5,
  		ma: 169.90993,
  		w: 17.75856,
  		om: 59.0141,
  		i: 12.70797,
  		e: 0.5441566,
  		a: 2.8212443
  	},
  	{
  		H: 18.21,
  		desig: "2013 UX14",
  		epoch: 2459200.5,
  		ma: 21.88138,
  		w: 331.63327,
  		om: 40.18309,
  		i: 7.19767,
  		e: 0.5329586,
  		a: 2.32992
  	},
  	{
  		H: 17.6,
  		desig: "2013 VD13",
  		epoch: 2459200.5,
  		ma: 168.06132,
  		w: 355.498,
  		om: 46.30084,
  		i: 18.48672,
  		e: 0.5634762,
  		a: 2.8489547
  	},
  	{
  		H: 18.27,
  		desig: "2013 WN67",
  		epoch: 2459200.5,
  		ma: 317.32445,
  		w: 129.52506,
  		om: 30.3543,
  		i: 23.96413,
  		e: 0.4629716,
  		a: 2.3164946
  	},
  	{
  		H: 17.2,
  		desig: "2014 BD33",
  		epoch: 2459200.5,
  		ma: 213.0042,
  		w: 237.37984,
  		om: 141.50819,
  		i: 66.00856,
  		e: 0.7283398,
  		a: 2.7447744
  	},
  	{
  		H: 18.1,
  		desig: "2014 CF14",
  		epoch: 2459200.5,
  		ma: 133.88367,
  		w: 334.90197,
  		om: 241.97018,
  		i: 29.42344,
  		e: 0.5877343,
  		a: 1.9981973
  	},
  	{
  		H: 16.27,
  		desig: "2014 JH57",
  		epoch: 2459200.5,
  		ma: 8.70047,
  		w: 11.98201,
  		om: 54.44668,
  		i: 25.67344,
  		e: 0.8750419,
  		a: 3.3314491
  	},
  	{
  		H: 18.19,
  		desig: "2014 KE91",
  		epoch: 2459200.5,
  		ma: 328.36727,
  		w: 42.04751,
  		om: 195.13898,
  		i: 6.04201,
  		e: 0.4757179,
  		a: 2.3201087
  	},
  	{
  		H: 18.1,
  		desig: "2014 KX99",
  		epoch: 2459200.5,
  		ma: 146.22256,
  		w: 348.51669,
  		om: 288.30503,
  		i: 13.56284,
  		e: 0.5894102,
  		a: 2.799334
  	},
  	{
  		H: 18.2,
  		desig: "2014 LA27",
  		epoch: 2459200.5,
  		ma: 114.91951,
  		w: 200.59973,
  		om: 56.64421,
  		i: 40.78966,
  		e: 0.4645523,
  		a: 1.9641205
  	},
  	{
  		H: 18.2,
  		desig: "2014 NF64",
  		epoch: 2459000.5,
  		ma: 40.84412,
  		w: 270.24261,
  		om: 114.02085,
  		i: 9.02108,
  		e: 0.7112855,
  		a: 2.8659509
  	},
  	{
  		H: 17.8,
  		desig: "2014 PD58",
  		epoch: 2459200.5,
  		ma: 31.81013,
  		w: 145.82304,
  		om: 279.38065,
  		i: 49.06574,
  		e: 0.7750319,
  		a: 3.1493505
  	},
  	{
  		H: 18.2,
  		desig: "2014 PF68",
  		epoch: 2459200.5,
  		ma: 89.15312,
  		w: 14.14093,
  		om: 342.02482,
  		i: 22.56505,
  		e: 0.5854602,
  		a: 2.8614203
  	},
  	{
  		H: 17.9,
  		desig: "2014 RL12",
  		epoch: 2459200.5,
  		ma: 119.62272,
  		w: 115.32876,
  		om: 277.50068,
  		i: 23.76824,
  		e: 0.6732889,
  		a: 2.7627198
  	},
  	{
  		H: 17.7,
  		desig: "2014 VM",
  		epoch: 2459000.5,
  		ma: 277.32517,
  		w: 158.46513,
  		om: 250.70367,
  		i: 36.95864,
  		e: 0.4137923,
  		a: 2.1548052
  	},
  	{
  		H: 17.78,
  		desig: "2014 WJ70",
  		epoch: 2459200.5,
  		ma: 5.71341,
  		w: 28.02711,
  		om: 148.91513,
  		i: 10.11531,
  		e: 0.6056283,
  		a: 3.2016417
  	},
  	{
  		H: 18.2,
  		desig: "2014 WQ368",
  		epoch: 2459200.5,
  		ma: 101.21182,
  		w: 261.43545,
  		om: 274.78948,
  		i: 23.82731,
  		e: 0.5432427,
  		a: 2.7326727
  	},
  	{
  		H: 17.81,
  		desig: "2014 XG8",
  		epoch: 2459200.5,
  		ma: 72.11793,
  		w: 57.1276,
  		om: 258.89973,
  		i: 57.12855,
  		e: 0.5202043,
  		a: 2.0897761
  	},
  	{
  		H: 17.5,
  		desig: "2014 XX31",
  		epoch: 2459200.5,
  		ma: 112.20289,
  		w: 344.47383,
  		om: 290.87186,
  		i: 35.8544,
  		e: 0.872223,
  		a: 2.8179767
  	},
  	{
  		H: 18.1,
  		desig: "2014 YV43",
  		epoch: 2459200.5,
  		ma: 91.87231,
  		w: 223.72713,
  		om: 144.12919,
  		i: 35.01559,
  		e: 0.78622,
  		a: 2.8947691
  	},
  	{
  		H: 17.57,
  		desig: "2015 AS45",
  		epoch: 2459200.5,
  		ma: 345.75086,
  		w: 33.54616,
  		om: 147.11017,
  		i: 20.46765,
  		e: 0.6337409,
  		a: 3.2057213
  	},
  	{
  		H: 17.8,
  		desig: "2015 BJ514",
  		epoch: 2459200.5,
  		ma: 16.14623,
  		w: 310.74482,
  		om: 328.93107,
  		i: 60.54624,
  		e: 0.7105597,
  		a: 1.936172
  	},
  	{
  		H: 17.2,
  		desig: "2015 FU332",
  		epoch: 2459200.5,
  		ma: 135.69175,
  		w: 25.61503,
  		om: 82.61409,
  		i: 35.9635,
  		e: 0.7430461,
  		a: 2.636644
  	},
  	{
  		H: 17.7,
  		desig: "2015 FD341",
  		epoch: 2459200.5,
  		ma: 134.05046,
  		w: 67.00157,
  		om: 7.54507,
  		i: 20.54244,
  		e: 0.675029,
  		a: 0.9551437
  	},
  	{
  		H: 17.9,
  		desig: "2015 GJ",
  		epoch: 2459200.5,
  		ma: 239.02034,
  		w: 215.20411,
  		om: 208.19061,
  		i: 26.23744,
  		e: 0.7599299,
  		a: 2.3495389
  	},
  	{
  		H: 18.16,
  		desig: "2015 HH10",
  		epoch: 2459200.5,
  		ma: 53.4259,
  		w: 143.21835,
  		om: 254.12462,
  		i: 8.01195,
  		e: 0.651543,
  		a: 1.6138624
  	},
  	{
  		H: 18.1,
  		desig: "2015 HV171",
  		epoch: 2459200.5,
  		ma: 135.30757,
  		w: 314.43826,
  		om: 224.43402,
  		i: 31.25331,
  		e: 0.5337854,
  		a: 2.6009955
  	},
  	{
  		H: 17.82,
  		desig: "2015 LK21",
  		epoch: 2459200.5,
  		ma: 27.16927,
  		w: 203.55234,
  		om: 166.0636,
  		i: 24.06174,
  		e: 0.605068,
  		a: 2.7626669
  	},
  	{
  		H: 17.9,
  		desig: "2015 NV28",
  		epoch: 2459200.5,
  		ma: 26.47092,
  		w: 314.72825,
  		om: 213.67624,
  		i: 24.75938,
  		e: 0.5984205,
  		a: 3.1528156
  	},
  	{
  		H: 18.1,
  		desig: "2015 PP291",
  		epoch: 2459200.5,
  		ma: 133.77612,
  		w: 310.71908,
  		om: 97.62196,
  		i: 16.49798,
  		e: 0.7825127,
  		a: 2.3772942
  	},
  	{
  		H: 16.7,
  		desig: "2015 VL142",
  		epoch: 2459200.5,
  		ma: 138.23679,
  		w: 276.3854,
  		om: 20.75177,
  		i: 24.46353,
  		e: 0.5959789,
  		a: 2.5554226
  	},
  	{
  		H: 17.9,
  		desig: "2015 XL128",
  		epoch: 2459200.5,
  		ma: 55.15571,
  		w: 161.06793,
  		om: 42.31126,
  		i: 17.81546,
  		e: 0.6982766,
  		a: 2.5855259
  	},
  	{
  		H: 18.2,
  		desig: "2016 CQ195",
  		epoch: 2459200.5,
  		ma: 132.46656,
  		w: 324.85146,
  		om: 333.42883,
  		i: 28.40615,
  		e: 0.7064079,
  		a: 2.1663169
  	},
  	{
  		H: 17.64,
  		desig: "2016 ED85",
  		epoch: 2459200.5,
  		ma: 6.75701,
  		w: 69.03934,
  		om: 1.9121,
  		i: 8.80749,
  		e: 0.693763,
  		a: 2.9885197
  	},
  	{
  		H: 17.9,
  		desig: "2016 EE156",
  		epoch: 2459200.5,
  		ma: 28.31588,
  		w: 175.60266,
  		om: 134.18164,
  		i: 28.94509,
  		e: 0.8114347,
  		a: 2.5727526
  	},
  	{
  		H: 18.1,
  		desig: "2016 TA56",
  		epoch: 2459200.5,
  		ma: 306.05653,
  		w: 359.63378,
  		om: 173.87978,
  		i: 32.37797,
  		e: 0.7830462,
  		a: 2.6874472
  	},
  	{
  		H: 18.05,
  		desig: "2016 TF93",
  		epoch: 2459200.5,
  		ma: 339.12908,
  		w: 354.29225,
  		om: 124.01608,
  		i: 12.41514,
  		e: 0.5087428,
  		a: 2.4611289
  	},
  	{
  		H: 18.1,
  		desig: "2016 WJ8",
  		epoch: 2459200.5,
  		ma: 345.56758,
  		w: 43.07542,
  		om: 256.86819,
  		i: 21.70497,
  		e: 0.6424511,
  		a: 2.7054915
  	},
  	{
  		H: 18.25,
  		desig: "2016 WQ48",
  		epoch: 2459200.5,
  		ma: 319.36075,
  		w: 2.33443,
  		om: 343.0299,
  		i: 24.42755,
  		e: 0.683072,
  		a: 2.9358938
  	},
  	{
  		H: 18,
  		desig: "2016 XU17",
  		epoch: 2459200.5,
  		ma: 283.21236,
  		w: 152.67322,
  		om: 303.78689,
  		i: 9.8403,
  		e: 0.57317,
  		a: 2.9670162
  	},
  	{
  		H: 17.8,
  		desig: "2017 AF5",
  		epoch: 2459200.5,
  		ma: 15.81286,
  		w: 11.17524,
  		om: 323.32175,
  		i: 20.91472,
  		e: 0.9498052,
  		a: 2.478899
  	},
  	{
  		H: 17.8,
  		desig: "2017 AP20",
  		epoch: 2459200.5,
  		ma: 301.61736,
  		w: 2.9023,
  		om: 55.44485,
  		i: 13.86152,
  		e: 0.7481538,
  		a: 2.8787406
  	},
  	{
  		H: 17.7,
  		desig: "2017 AQ20",
  		epoch: 2459200.5,
  		ma: 187.3694,
  		w: 1.56101,
  		om: 5.07719,
  		i: 50.66496,
  		e: 0.8467401,
  		a: 3.9851976
  	},
  	{
  		H: 17.3,
  		desig: "2017 FR90",
  		epoch: 2459200.5,
  		ma: 347.27987,
  		w: 353.24346,
  		om: 329.14333,
  		i: 25.99278,
  		e: 0.8296899,
  		a: 2.3583814
  	},
  	{
  		H: 17.3,
  		desig: "2017 KT4",
  		epoch: 2459200.5,
  		ma: 68.05194,
  		w: 183.02092,
  		om: 154.96344,
  		i: 46.80881,
  		e: 0.7658786,
  		a: 1.9883523
  	},
  	{
  		H: 17.86,
  		desig: "2017 ME",
  		epoch: 2459200.5,
  		ma: 95.40983,
  		w: 65.07959,
  		om: 78.48861,
  		i: 41.38406,
  		e: 0.6891049,
  		a: 2.0195597
  	},
  	{
  		H: 16.8,
  		desig: "2017 MK8",
  		epoch: 2459200.5,
  		ma: 227.07478,
  		w: 185.31292,
  		om: 287.00717,
  		i: 31.59717,
  		e: 0.6756769,
  		a: 2.5010929
  	},
  	{
  		H: 18.2,
  		desig: "2017 TO4",
  		epoch: 2459200.5,
  		ma: 216.99621,
  		w: 34.44427,
  		om: 0.82269,
  		i: 23.17273,
  		e: 0.6439347,
  		a: 3.1020829
  	},
  	{
  		H: 18,
  		desig: "2017 UW42",
  		epoch: 2459200.5,
  		ma: 254.49947,
  		w: 195.44675,
  		om: 287.48377,
  		i: 6.67148,
  		e: 0.4838234,
  		a: 2.4570237
  	},
  	{
  		H: 16.8,
  		desig: "2017 VB",
  		epoch: 2459200.5,
  		ma: 356.73072,
  		w: 270.50809,
  		om: 346.85092,
  		i: 25.5594,
  		e: 0.5025213,
  		a: 1.5819926
  	},
  	{
  		H: 17.7,
  		desig: "2017 VJ2",
  		epoch: 2459200.5,
  		ma: 218.21595,
  		w: 166.82854,
  		om: 323.63533,
  		i: 11.96329,
  		e: 0.5221299,
  		a: 2.7135406
  	},
  	{
  		H: 17.9,
  		desig: "2017 WE2",
  		epoch: 2459200.5,
  		ma: 194.82096,
  		w: 253.64475,
  		om: 285.57755,
  		i: 44.19443,
  		e: 0.6617762,
  		a: 2.8584152
  	},
  	{
  		H: 18.1,
  		desig: "2017 WF13",
  		epoch: 2459200.5,
  		ma: 274.59427,
  		w: 35.04221,
  		om: 271.70595,
  		i: 28.71759,
  		e: 0.7606408,
  		a: 2.6614315
  	},
  	{
  		H: 18,
  		desig: "2017 WH14",
  		epoch: 2459200.5,
  		ma: 284.19916,
  		w: 339.49869,
  		om: 157.07686,
  		i: 22.40443,
  		e: 0.6794278,
  		a: 2.3313544
  	},
  	{
  		H: 17.9,
  		desig: "2017 WX14",
  		epoch: 2459200.5,
  		ma: 264.91355,
  		w: 206.72397,
  		om: 321.52297,
  		i: 26.81549,
  		e: 0.5957403,
  		a: 2.5308796
  	},
  	{
  		H: 18.25,
  		desig: "2017 WC29",
  		epoch: 2459200.5,
  		ma: 287.13303,
  		w: 262.57005,
  		om: 332.85153,
  		i: 15.7604,
  		e: 0.5898479,
  		a: 2.3098748
  	},
  	{
  		H: 17.7,
  		desig: "2018 AP18",
  		epoch: 2459200.5,
  		ma: 90.55598,
  		w: 7.17782,
  		om: 338.33392,
  		i: 9.81981,
  		e: 0.7679252,
  		a: 2.0732692
  	},
  	{
  		H: 17.64,
  		desig: "2018 JB3",
  		epoch: 2459200.5,
  		ma: 339.72957,
  		w: 355.25105,
  		om: 106.42353,
  		i: 40.38997,
  		e: 0.2904706,
  		a: 0.6831967
  	},
  	{
  		H: 17.5,
  		desig: "2018 ND1",
  		epoch: 2459200.5,
  		ma: 227.16498,
  		w: 9.39093,
  		om: 330.82333,
  		i: 65.0284,
  		e: 0.6541221,
  		a: 2.4867117
  	},
  	{
  		H: 18.1,
  		desig: "2018 SA3",
  		epoch: 2459200.5,
  		ma: 188.04936,
  		w: 356.61014,
  		om: 312.59762,
  		i: 21.68159,
  		e: 0.7060184,
  		a: 2.7068149
  	},
  	{
  		H: 18.2,
  		desig: "2018 VZ9",
  		epoch: 2459200.5,
  		ma: 151.67672,
  		w: 133.52367,
  		om: 50.64948,
  		i: 18.9153,
  		e: 0.6298115,
  		a: 2.6040677
  	},
  	{
  		H: 17.6,
  		desig: "2019 AQ3",
  		epoch: 2459200.5,
  		ma: 347.87308,
  		w: 163.16053,
  		om: 64.48538,
  		i: 47.21855,
  		e: 0.3142901,
  		a: 0.5886527
  	},
  	{
  		H: 17.8,
  		desig: "2019 AV4",
  		epoch: 2459200.5,
  		ma: 163.05203,
  		w: 48.08105,
  		om: 334.08444,
  		i: 15.1865,
  		e: 0.6225245,
  		a: 2.9959386
  	},
  	{
  		H: 17,
  		desig: "2019 AY14",
  		epoch: 2459200.5,
  		ma: 119.6098,
  		w: 316.02239,
  		om: 336.66086,
  		i: 14.78399,
  		e: 0.778199,
  		a: 2.2093037
  	},
  	{
  		H: 18.1,
  		desig: "2019 BJ5",
  		epoch: 2459200.5,
  		ma: 111.30003,
  		w: 124.53995,
  		om: 98.12926,
  		i: 25.12586,
  		e: 0.6278884,
  		a: 3.0763445
  	},
  	{
  		H: 18,
  		desig: "2019 GU2",
  		epoch: 2459200.5,
  		ma: 169.75356,
  		w: 180.76715,
  		om: 5.61412,
  		i: 30.07357,
  		e: 0.6459251,
  		a: 2.3098563
  	},
  	{
  		H: 17.2,
  		desig: "2019 HC",
  		epoch: 2459200.5,
  		ma: 135.24124,
  		w: 6.4136,
  		om: 215.55464,
  		i: 35.33085,
  		e: 0.5508979,
  		a: 2.6691588
  	},
  	{
  		H: 18,
  		desig: "2019 JJ1",
  		epoch: 2459200.5,
  		ma: 145.12675,
  		w: 330.65276,
  		om: 173.19014,
  		i: 17.84603,
  		e: 0.5788591,
  		a: 3.0351031
  	},
  	{
  		H: 17.27,
  		desig: "2019 LF6",
  		epoch: 2459200.5,
  		ma: 103.86204,
  		w: 213.77964,
  		om: 179.028,
  		i: 29.5069,
  		e: 0.4292774,
  		a: 0.5554254
  	},
  	{
  		H: 18.2,
  		desig: "2019 OC5",
  		epoch: 2459200.5,
  		ma: 93.70041,
  		w: 285.43058,
  		om: 257.45737,
  		i: 52.12603,
  		e: 0.9197641,
  		a: 3.3856915
  	},
  	{
  		H: 18.2,
  		desig: "2019 RU3",
  		epoch: 2459200.5,
  		ma: 189.95644,
  		w: 110.78547,
  		om: 40.16829,
  		i: 34.21672,
  		e: 0.7761251,
  		a: 1.6264566
  	},
  	{
  		H: 18.2,
  		desig: "2019 SH1",
  		epoch: 2459200.5,
  		ma: 90.17813,
  		w: 44.4967,
  		om: 22.72891,
  		i: 7.77266,
  		e: 0.5345293,
  		a: 2.4513083
  	},
  	{
  		H: 17.69,
  		desig: "2019 SJ10",
  		epoch: 2459200.5,
  		ma: 62.35976,
  		w: 27.4905,
  		om: 43.6369,
  		i: 6.75168,
  		e: 0.5857093,
  		a: 2.4800523
  	},
  	{
  		H: 17.94,
  		desig: "2019 TF7",
  		epoch: 2459200.5,
  		ma: 120.9329,
  		w: 54.26978,
  		om: 280.63774,
  		i: 22.26801,
  		e: 0.5792288,
  		a: 2.7259419
  	},
  	{
  		H: 18,
  		desig: "2019 VN6",
  		epoch: 2459200.5,
  		ma: 180.94759,
  		w: 206.19593,
  		om: 134.60383,
  		i: 14.04054,
  		e: 0.6051489,
  		a: 2.1021301
  	},
  	{
  		H: 16.4,
  		desig: "2020 AV2",
  		epoch: 2459200.5,
  		ma: 338.62829,
  		w: 187.32816,
  		om: 6.70824,
  		i: 15.86824,
  		e: 0.1769659,
  		a: 0.5554429
  	},
  	{
  		H: 18.1,
  		desig: "2020 BS7",
  		epoch: 2459200.5,
  		ma: 69.50124,
  		w: 37.84947,
  		om: 280.22284,
  		i: 52.44128,
  		e: 0.8746409,
  		a: 3.0996055
  	},
  	{
  		H: 18.2,
  		desig: "2020 BZ12",
  		epoch: 2459000.5,
  		ma: 1.58352,
  		w: 57.61838,
  		om: 105.72422,
  		i: 165.5409,
  		e: 0.92165,
  		a: 7.6980787
  	},
  	{
  		H: 18.2,
  		desig: "2020 PV65",
  		epoch: 2459200.5,
  		ma: 348.58946,
  		w: 312.52392,
  		om: 145.29897,
  		i: 32.39543,
  		e: 0.5604378,
  		a: 2.7138346
  	},
  	{
  		H: 18.2,
  		desig: "2020 QU6",
  		epoch: 2459200.5,
  		ma: 34.54242,
  		w: 321.33936,
  		om: 356.98265,
  		i: 23.96049,
  		e: 0.4848203,
  		a: 2.2771846
  	},
  	{
  		H: 17.6,
  		desig: "2020 UP3",
  		epoch: 2459200.5,
  		ma: 356.51847,
  		w: 196.58314,
  		om: 177.54485,
  		i: 49.13197,
  		e: 0.7082477,
  		a: 2.7557286
  	},
  	{
  		H: 17.86,
  		desig: "2020 VU6",
  		epoch: 2459200.5,
  		ma: 115.66041,
  		w: 20.35072,
  		om: 255.09405,
  		i: 42.51602,
  		e: 0.719557,
  		a: 1.6766501
  	},
  	{
  		H: 17.82,
  		desig: "2021 EX2",
  		epoch: 2459200.5,
  		ma: 347.08579,
  		w: 15.99107,
  		om: 2.2858,
  		i: 6.76483,
  		e: 0.7368804,
  		a: 2.4891819
  	},
  	{
  		H: 17.5,
  		desig: "2015 SB21",
  		epoch: 2457280.5,
  		ma: 330.04617,
  		w: 257.91431,
  		om: 265.95022,
  		i: 7.85964,
  		e: 0.7544269,
  		a: 4.6548234
  	}
  ];

  var pha_data = [
  	{
  		H: 16.34,
  		name: "Icarus",
  		desig: "1949 MA",
  		epoch: 2459200.5,
  		ma: 8.16058,
  		w: 31.40695,
  		om: 87.98911,
  		i: 22.81882,
  		e: 0.8270729,
  		a: 1.0780764
  	},
  	{
  		H: 15.3,
  		name: "Geographos",
  		desig: "1951 RA",
  		epoch: 2459200.5,
  		ma: 16.89243,
  		w: 276.96389,
  		om: 337.18563,
  		i: 13.3374,
  		e: 0.3354538,
  		a: 1.2456553
  	},
  	{
  		H: 16.11,
  		name: "Apollo",
  		desig: "1932 HA",
  		epoch: 2459200.5,
  		ma: 199.08702,
  		w: 285.99194,
  		om: 35.61716,
  		i: 6.35477,
  		e: 0.5599501,
  		a: 1.4703724
  	},
  	{
  		H: 15.22,
  		name: "Midas",
  		desig: "1973 EA",
  		epoch: 2459200.5,
  		ma: 35.99116,
  		w: 267.8249,
  		om: 356.86298,
  		i: 39.83112,
  		e: 0.6503351,
  		a: 1.7763363
  	},
  	{
  		H: 18.64,
  		name: "Adonis",
  		desig: "1936 CA",
  		epoch: 2459200.5,
  		ma: 52.96871,
  		w: 43.60352,
  		om: 349.49882,
  		i: 1.32208,
  		e: 0.7639569,
  		a: 1.87424
  	},
  	{
  		H: 16.01,
  		name: "Tantalus",
  		desig: "1975 YA",
  		epoch: 2459200.5,
  		ma: 216.51403,
  		w: 61.53676,
  		om: 94.36039,
  		i: 64.00479,
  		e: 0.2992723,
  		a: 1.2900333
  	},
  	{
  		H: 18.02,
  		name: "Aristaeus",
  		desig: "1977 HA",
  		epoch: 2459200.5,
  		ma: 240.28991,
  		w: 290.97123,
  		om: 191.13425,
  		i: 23.06651,
  		e: 0.5031346,
  		a: 1.5997902
  	},
  	{
  		H: 15.25,
  		name: "Oljato",
  		desig: "1947 XC",
  		epoch: 2459200.5,
  		ma: 264.63629,
  		w: 98.23954,
  		om: 74.98754,
  		i: 2.52241,
  		e: 0.7129114,
  		a: 2.1742213
  	},
  	{
  		H: 20.2,
  		name: "Hathor",
  		desig: "1976 UA",
  		epoch: 2459200.5,
  		ma: 73.12864,
  		w: 40.05913,
  		om: 211.34934,
  		i: 5.8584,
  		e: 0.449868,
  		a: 0.8438471
  	},
  	{
  		H: 14.03,
  		name: "Florence",
  		desig: "1981 ET3",
  		epoch: 2459200.5,
  		ma: 134.20599,
  		w: 27.85094,
  		om: 336.06237,
  		i: 22.14393,
  		e: 0.423022,
  		a: 1.7690113
  	},
  	{
  		H: 14.32,
  		name: "Phaethon",
  		desig: "1983 TB",
  		epoch: 2459200.5,
  		ma: 6.46104,
  		w: 322.18155,
  		om: 265.22021,
  		i: 22.25714,
  		e: 0.8897964,
  		a: 1.2714166
  	},
  	{
  		H: 19.03,
  		name: "Orpheus",
  		desig: "1982 HR",
  		epoch: 2459200.5,
  		ma: 68.3203,
  		w: 301.89979,
  		om: 189.16568,
  		i: 2.67766,
  		e: 0.3230764,
  		a: 1.2102861
  	},
  	{
  		H: 18.3,
  		name: "Khufu",
  		desig: "1984 QA",
  		epoch: 2459200.5,
  		ma: 38.08255,
  		w: 55.05403,
  		om: 152.4315,
  		i: 9.91695,
  		e: 0.4684407,
  		a: 0.9895572
  	},
  	{
  		H: 16.48,
  		name: "Dionysus",
  		desig: "1984 KD",
  		epoch: 2459200.5,
  		ma: 68.47209,
  		w: 204.2648,
  		om: 82.08622,
  		i: 13.53385,
  		e: 0.5416006,
  		a: 2.1984112
  	},
  	{
  		H: 18.9,
  		name: "Anagolay",
  		desig: "1982 XB",
  		epoch: 2459200.5,
  		ma: 98.43825,
  		w: 17.22191,
  		om: 74.95986,
  		i: 3.86785,
  		e: 0.4462622,
  		a: 1.8342007
  	},
  	{
  		H: 16.02,
  		name: "Wilson-Harrington",
  		desig: "1979 VA",
  		epoch: 2459200.5,
  		ma: 217.34306,
  		w: 95.38612,
  		om: 266.80474,
  		i: 2.7984,
  		e: 0.6314028,
  		a: 2.6255575
  	},
  	{
  		H: 18.32,
  		name: "Vishnu",
  		desig: "1986 PA",
  		epoch: 2459200.5,
  		ma: 75.25964,
  		w: 296.70023,
  		om: 157.91022,
  		i: 11.16785,
  		e: 0.4441179,
  		a: 1.0595748
  	},
  	{
  		H: 15.24,
  		name: "Toutatis",
  		desig: "1989 AC",
  		epoch: 2459200.5,
  		ma: 359.81765,
  		w: 277.99917,
  		om: 125.19824,
  		i: 0.44807,
  		e: 0.6240916,
  		a: 2.5444957
  	},
  	{
  		H: 14.11,
  		name: "Cuno",
  		desig: "1959 LM",
  		epoch: 2459200.5,
  		ma: 41.92904,
  		w: 236.35376,
  		om: 294.86736,
  		i: 6.7039,
  		e: 0.6341557,
  		a: 1.9833036
  	},
  	{
  		H: 17.16,
  		name: "Pan",
  		desig: "1987 SY",
  		epoch: 2459200.5,
  		ma: 115.53873,
  		w: 291.82839,
  		om: 311.80234,
  		i: 5.52063,
  		e: 0.5865808,
  		a: 1.4421284
  	},
  	{
  		H: 15.52,
  		name: "Mithra",
  		desig: "1987 SB",
  		epoch: 2459200.5,
  		ma: 94.39484,
  		w: 168.90785,
  		om: 82.23855,
  		i: 3.03958,
  		e: 0.662942,
  		a: 2.1992687
  	},
  	{
  		H: 20.79,
  		name: "Asclepius",
  		desig: "1989 FC",
  		epoch: 2459200.5,
  		ma: 317.87213,
  		w: 255.35606,
  		om: 180.21028,
  		i: 4.91746,
  		e: 0.3569719,
  		a: 1.0226344
  	},
  	{
  		H: 18.31,
  		name: "Nereus",
  		desig: "1982 DB",
  		epoch: 2459200.5,
  		ma: 150.44776,
  		w: 158.08593,
  		om: 314.40519,
  		i: 1.43207,
  		e: 0.3602158,
  		a: 1.4888873
  	},
  	{
  		H: 16.9,
  		name: "Castalia",
  		desig: "1989 PB",
  		epoch: 2459200.5,
  		ma: 145.38614,
  		w: 121.41002,
  		om: 325.54038,
  		i: 8.88551,
  		e: 0.4832131,
  		a: 1.0631805
  	},
  	{
  		H: 15.02,
  		desig: "1990 MU",
  		epoch: 2459200.5,
  		ma: 336.73307,
  		w: 77.74817,
  		om: 77.70361,
  		i: 24.39075,
  		e: 0.6576684,
  		a: 1.6211882
  	},
  	{
  		H: 16.36,
  		name: "Ptah",
  		desig: "6743 P-L",
  		epoch: 2459200.5,
  		ma: 234.21403,
  		w: 105.92497,
  		om: 10.65573,
  		i: 7.4084,
  		e: 0.5001346,
  		a: 1.6362362
  	},
  	{
  		H: 17.9,
  		desig: "1990 UQ",
  		epoch: 2459200.5,
  		ma: 263.8304,
  		w: 159.78469,
  		om: 135.21669,
  		i: 3.57858,
  		e: 0.4783442,
  		a: 1.5523581
  	},
  	{
  		H: 17.27,
  		desig: "1992 FE",
  		epoch: 2459200.5,
  		ma: 167.90421,
  		w: 82.65344,
  		om: 311.90963,
  		i: 4.71535,
  		e: 0.4060242,
  		a: 0.9285772
  	},
  	{
  		H: 16.69,
  		desig: "1993 EA",
  		epoch: 2459200.5,
  		ma: 319.88774,
  		w: 258.88567,
  		om: 97.03297,
  		i: 5.0547,
  		e: 0.5852101,
  		a: 1.2709368
  	},
  	{
  		H: 18.74,
  		desig: "1988 EG",
  		epoch: 2459200.5,
  		ma: 7.03421,
  		w: 242.2029,
  		om: 182.36678,
  		i: 3.49982,
  		e: 0.4995553,
  		a: 1.271283
  	},
  	{
  		H: 18.49,
  		name: "Minos",
  		desig: "1989 QF",
  		epoch: 2459200.5,
  		ma: 187.28589,
  		w: 239.70175,
  		om: 344.57683,
  		i: 3.94194,
  		e: 0.4126288,
  		a: 1.1512885
  	},
  	{
  		H: 19.2,
  		name: "Golevka",
  		desig: "1991 JX",
  		epoch: 2459200.5,
  		ma: 159.9757,
  		w: 68.60379,
  		om: 209.53996,
  		i: 2.26594,
  		e: 0.6128396,
  		a: 2.4852425
  	},
  	{
  		H: 18.7,
  		desig: "1991 OA",
  		epoch: 2459200.5,
  		ma: 154.22104,
  		w: 323.6556,
  		om: 301.88929,
  		i: 5.94873,
  		e: 0.5909256,
  		a: 2.5005992
  	},
  	{
  		H: 17.52,
  		desig: "1989 JA",
  		epoch: 2459200.5,
  		ma: 123.85245,
  		w: 232.27487,
  		om: 61.31831,
  		i: 15.19408,
  		e: 0.4842775,
  		a: 1.7706635
  	},
  	{
  		H: 16.84,
  		desig: "1991 VK",
  		epoch: 2459200.5,
  		ma: 205.78038,
  		w: 173.43278,
  		om: 294.80284,
  		i: 5.41622,
  		e: 0.5060682,
  		a: 1.8424626
  	},
  	{
  		H: 16.5,
  		desig: "1994 PC1",
  		epoch: 2459200.5,
  		ma: 84.72528,
  		w: 47.61778,
  		om: 117.88466,
  		i: 33.48905,
  		e: 0.3282903,
  		a: 1.3462108
  	},
  	{
  		H: 17.96,
  		desig: "1988 XB",
  		epoch: 2459200.5,
  		ma: 39.39419,
  		w: 280.03394,
  		om: 73.4071,
  		i: 3.1247,
  		e: 0.4815716,
  		a: 1.4671182
  	},
  	{
  		H: 17.33,
  		desig: "1991 CS",
  		epoch: 2459200.5,
  		ma: 102.48077,
  		w: 249.44672,
  		om: 156.85192,
  		i: 37.1216,
  		e: 0.1646592,
  		a: 1.1229333
  	},
  	{
  		H: 18.95,
  		desig: "1990 MF",
  		epoch: 2459200.5,
  		ma: 53.99793,
  		w: 114.68711,
  		om: 209.87701,
  		i: 1.86683,
  		e: 0.4562288,
  		a: 1.7471444
  	},
  	{
  		H: 16.39,
  		desig: "1996 EN",
  		epoch: 2459200.5,
  		ma: 63.76083,
  		w: 125.13708,
  		om: 164.12749,
  		i: 37.97748,
  		e: 0.4304709,
  		a: 1.5063307
  	},
  	{
  		H: 16.96,
  		desig: "1991 EE",
  		epoch: 2459200.5,
  		ma: 263.55306,
  		w: 116.22039,
  		om: 168.10584,
  		i: 9.82855,
  		e: 0.6259938,
  		a: 2.2430703
  	},
  	{
  		H: 17.08,
  		desig: "1992 SK",
  		epoch: 2459200.5,
  		ma: 175.36539,
  		w: 233.66123,
  		om: 8.90888,
  		i: 15.32044,
  		e: 0.3247423,
  		a: 1.2483549
  	},
  	{
  		H: 18.3,
  		name: "Tomaiyowit",
  		desig: "1989 UR",
  		epoch: 2459200.5,
  		ma: 173.92124,
  		w: 289.4703,
  		om: 234.42023,
  		i: 10.30841,
  		e: 0.3558396,
  		a: 1.0797543
  	},
  	{
  		H: 15.91,
  		desig: "1998 OH",
  		epoch: 2459200.5,
  		ma: 316.21851,
  		w: 321.70958,
  		om: 220.73879,
  		i: 24.52435,
  		e: 0.4060369,
  		a: 1.5418419
  	},
  	{
  		H: 15.75,
  		name: "Zephyr",
  		desig: "1999 GK4",
  		epoch: 2459200.5,
  		ma: 269.6105,
  		w: 147.08368,
  		om: 168.18818,
  		i: 5.30513,
  		e: 0.4921007,
  		a: 1.9616973
  	},
  	{
  		H: 17.81,
  		desig: "1997 BR",
  		epoch: 2459200.5,
  		ma: 88.63459,
  		w: 133.81564,
  		om: 116.66362,
  		i: 17.24858,
  		e: 0.3056808,
  		a: 1.3354727
  	},
  	{
  		H: 18.3,
  		name: "Hypnos",
  		desig: "1986 JK",
  		epoch: 2459200.5,
  		ma: 93.84609,
  		w: 238.13176,
  		om: 57.9619,
  		i: 1.98022,
  		e: 0.6661745,
  		a: 2.8418071
  	},
  	{
  		H: 14.32,
  		desig: "1998 QS52",
  		epoch: 2459200.5,
  		ma: 245.92759,
  		w: 243.05324,
  		om: 260.33202,
  		i: 17.52927,
  		e: 0.8587153,
  		a: 2.2016925
  	},
  	{
  		H: 20.4,
  		desig: "1998 VD35",
  		epoch: 2459200.5,
  		ma: 47.77487,
  		w: 296.15183,
  		om: 227.36335,
  		i: 6.9838,
  		e: 0.4764302,
  		a: 1.5647101
  	},
  	{
  		H: 17.51,
  		desig: "1998 WT",
  		epoch: 2459200.5,
  		ma: 220.03931,
  		w: 324.7699,
  		om: 307.407,
  		i: 3.20439,
  		e: 0.5698749,
  		a: 1.2190212
  	},
  	{
  		H: 16,
  		desig: "2000 PN9",
  		epoch: 2459200.5,
  		ma: 337.66877,
  		w: 293.56112,
  		om: 164.30673,
  		i: 51.33292,
  		e: 0.5893056,
  		a: 1.8468054
  	},
  	{
  		H: 18.95,
  		name: "Itokawa",
  		desig: "1998 SF36",
  		epoch: 2459200.5,
  		ma: 316.99667,
  		w: 162.81364,
  		om: 69.07929,
  		i: 1.62125,
  		e: 0.2800414,
  		a: 1.32418
  	},
  	{
  		H: 18.1,
  		desig: "2000 XK47",
  		epoch: 2459200.5,
  		ma: 110.98084,
  		w: 231.12245,
  		om: 303.67417,
  		i: 13.53722,
  		e: 0.4717468,
  		a: 1.5460213
  	},
  	{
  		H: 18.22,
  		desig: "1998 DV9",
  		epoch: 2459200.5,
  		ma: 324.47478,
  		w: 0.79035,
  		om: 130.36697,
  		i: 8.70206,
  		e: 0.4340104,
  		a: 1.7435037
  	},
  	{
  		H: 17.18,
  		desig: "1950 DA",
  		epoch: 2459200.5,
  		ma: 319.92251,
  		w: 224.68322,
  		om: 356.65579,
  		i: 12.16734,
  		e: 0.5077361,
  		a: 1.6986657
  	},
  	{
  		H: 15.82,
  		desig: "1999 JT6",
  		epoch: 2459200.5,
  		ma: 15.4447,
  		w: 39.10228,
  		om: 78.81851,
  		i: 9.54313,
  		e: 0.5784218,
  		a: 2.1360953
  	},
  	{
  		H: 17.85,
  		desig: "1998 WT24",
  		epoch: 2459200.5,
  		ma: 283.12205,
  		w: 167.54961,
  		om: 81.68649,
  		i: 7.36676,
  		e: 0.4175924,
  		a: 0.7188665
  	},
  	{
  		H: 16.76,
  		desig: "1991 VH",
  		epoch: 2459200.5,
  		ma: 42.9447,
  		w: 206.92204,
  		om: 139.35012,
  		i: 13.91153,
  		e: 0.1442006,
  		a: 1.1373234
  	},
  	{
  		H: 16.9,
  		desig: "1997 XF11",
  		epoch: 2459200.5,
  		ma: 195.54067,
  		w: 102.93578,
  		om: 213.73694,
  		i: 4.0987,
  		e: 0.4839821,
  		a: 1.442821
  	},
  	{
  		H: 19.3,
  		desig: "1993 VB",
  		epoch: 2459200.5,
  		ma: 74.43394,
  		w: 323.11578,
  		om: 145.60457,
  		i: 5.08177,
  		e: 0.5201205,
  		a: 1.9091645
  	},
  	{
  		H: 17.8,
  		name: "Illapa",
  		desig: "1994 PM",
  		epoch: 2459200.5,
  		ma: 206.9413,
  		w: 303.87525,
  		om: 139.5572,
  		i: 18.02502,
  		e: 0.7524525,
  		a: 1.4778824
  	},
  	{
  		H: 19.48,
  		desig: "1999 GU3",
  		epoch: 2459200.5,
  		ma: 65.13145,
  		w: 8.85797,
  		om: 195.50744,
  		i: 12.72728,
  		e: 0.5066527,
  		a: 2.0906352
  	},
  	{
  		H: 16.46,
  		desig: "1993 DQ1",
  		epoch: 2459200.5,
  		ma: 91.1814,
  		w: 344.81978,
  		om: 313.55149,
  		i: 10.02444,
  		e: 0.4923794,
  		a: 2.0368335
  	},
  	{
  		H: 20.38,
  		desig: "2000 GE2",
  		epoch: 2459200.5,
  		ma: 76.4299,
  		w: 297.215,
  		om: 351.92789,
  		i: 2.17328,
  		e: 0.5554978,
  		a: 1.5927041
  	},
  	{
  		H: 17.48,
  		desig: "1998 ML14",
  		epoch: 2459200.5,
  		ma: 338.18025,
  		w: 20.26835,
  		om: 338.72262,
  		i: 2.4283,
  		e: 0.6236316,
  		a: 2.4085848
  	},
  	{
  		H: 16,
  		desig: "1998 OR2",
  		epoch: 2459200.5,
  		ma: 65.63271,
  		w: 174.58292,
  		om: 26.98509,
  		i: 5.86638,
  		e: 0.5732458,
  		a: 2.3844028
  	},
  	{
  		H: 15.25,
  		desig: "1999 JM8",
  		epoch: 2459200.5,
  		ma: 281.6989,
  		w: 166.82002,
  		om: 133.61907,
  		i: 13.84188,
  		e: 0.6417292,
  		a: 2.7250143
  	},
  	{
  		H: 17.22,
  		desig: "1999 SL5",
  		epoch: 2459200.5,
  		ma: 10.57234,
  		w: 43.33391,
  		om: 239.092,
  		i: 22.7752,
  		e: 0.5386861,
  		a: 1.9227908
  	},
  	{
  		H: 18.9,
  		desig: "1999 TF5",
  		epoch: 2459200.5,
  		ma: 161.89625,
  		w: 64.06401,
  		om: 199.23317,
  		i: 26.78603,
  		e: 0.6400231,
  		a: 2.0228299
  	},
  	{
  		H: 19.1,
  		desig: "2000 BF19",
  		epoch: 2459200.5,
  		ma: 32.6467,
  		w: 324.91045,
  		om: 313.21529,
  		i: 7.17613,
  		e: 0.419687,
  		a: 1.4953407
  	},
  	{
  		H: 17.31,
  		desig: "2000 ED104",
  		epoch: 2459200.5,
  		ma: 96.98739,
  		w: 218.3465,
  		om: 190.02583,
  		i: 40.78388,
  		e: 0.2691646,
  		a: 1.3706892
  	},
  	{
  		H: 19.5,
  		desig: "1989 UQ",
  		epoch: 2459200.5,
  		ma: 58.8295,
  		w: 14.99662,
  		om: 178.10345,
  		i: 1.30265,
  		e: 0.2644993,
  		a: 0.9147761
  	},
  	{
  		H: 19.1,
  		desig: "1991 DG",
  		epoch: 2459200.5,
  		ma: 123.48254,
  		w: 63.32488,
  		om: 180.12573,
  		i: 11.14413,
  		e: 0.3631596,
  		a: 1.4276033
  	},
  	{
  		H: 20.75,
  		desig: "1993 BX3",
  		epoch: 2459200.5,
  		ma: 347.48875,
  		w: 290.1977,
  		om: 175.41697,
  		i: 2.79079,
  		e: 0.2812513,
  		a: 1.3952088
  	},
  	{
  		H: 18.07,
  		name: "Didymos",
  		desig: "1996 GT",
  		epoch: 2459200.5,
  		ma: 45.04057,
  		w: 319.32169,
  		om: 73.20386,
  		i: 3.40771,
  		e: 0.3836267,
  		a: 1.6444779
  	},
  	{
  		H: 19.21,
  		desig: "1998 FH12",
  		epoch: 2459200.5,
  		ma: 66.22626,
  		w: 284.49188,
  		om: 108.61255,
  		i: 3.56021,
  		e: 0.5396169,
  		a: 1.0911576
  	},
  	{
  		H: 16.58,
  		name: "Moshup",
  		desig: "1999 KW4",
  		epoch: 2459200.5,
  		ma: 136.80134,
  		w: 192.64378,
  		om: 244.90318,
  		i: 38.8822,
  		e: 0.688395,
  		a: 0.6423462
  	},
  	{
  		H: 17,
  		desig: "2000 LY27",
  		epoch: 2459200.5,
  		ma: 47.06311,
  		w: 184.8371,
  		om: 264.53259,
  		i: 9.02391,
  		e: 0.2127849,
  		a: 1.3085489
  	},
  	{
  		H: 19.8,
  		desig: "2000 OL8",
  		epoch: 2459200.5,
  		ma: 208.81654,
  		w: 266.80375,
  		om: 294.95276,
  		i: 10.66645,
  		e: 0.542905,
  		a: 1.3204283
  	},
  	{
  		H: 16.51,
  		desig: "2001 CV26",
  		epoch: 2459200.5,
  		ma: 111.75877,
  		w: 48.73609,
  		om: 18.14678,
  		i: 17.99369,
  		e: 0.3265752,
  		a: 1.3196882
  	},
  	{
  		H: 16.8,
  		desig: "2001 KZ66",
  		epoch: 2459200.5,
  		ma: 108.27988,
  		w: 140.2496,
  		om: 219.38441,
  		i: 16.69312,
  		e: 0.4165341,
  		a: 1.5075184
  	},
  	{
  		H: 19.88,
  		desig: "2001 KB67",
  		epoch: 2459200.5,
  		ma: 329.99944,
  		w: 243.75711,
  		om: 245.89317,
  		i: 17.12331,
  		e: 0.3802608,
  		a: 0.9621695
  	},
  	{
  		H: 18.8,
  		desig: "2001 PM9",
  		epoch: 2459200.5,
  		ma: 207.68251,
  		w: 322.22221,
  		om: 253.03299,
  		i: 8.1008,
  		e: 0.415627,
  		a: 1.6181377
  	},
  	{
  		H: 16.55,
  		desig: "2001 XR31",
  		epoch: 2459200.5,
  		ma: 287.7306,
  		w: 24.70116,
  		om: 302.05002,
  		i: 22.72013,
  		e: 0.4366959,
  		a: 1.7065646
  	},
  	{
  		H: 16.36,
  		desig: "2002 QF15",
  		epoch: 2459200.5,
  		ma: 224.87927,
  		w: 255.55906,
  		om: 236.22447,
  		i: 25.15057,
  		e: 0.3443509,
  		a: 1.0570925
  	},
  	{
  		H: 17.51,
  		name: "Hermes",
  		desig: "1937 UB",
  		epoch: 2459200.5,
  		ma: 351.34451,
  		w: 92.83753,
  		om: 34.12903,
  		i: 6.06691,
  		e: 0.6245916,
  		a: 1.6548268
  	},
  	{
  		H: 17.1,
  		desig: "1991 AQ",
  		epoch: 2459200.5,
  		ma: 2.40048,
  		w: 243.03445,
  		om: 339.60643,
  		i: 3.1227,
  		e: 0.7764692,
  		a: 2.2229514
  	},
  	{
  		H: 18.71,
  		desig: "1993 KH",
  		epoch: 2459200.5,
  		ma: 325.69595,
  		w: 293.79118,
  		om: 54.37876,
  		i: 12.80649,
  		e: 0.3110552,
  		a: 1.2336654
  	},
  	{
  		H: 21.6,
  		name: "Mjolnir",
  		desig: "1998 FG2",
  		epoch: 2459200.5,
  		ma: 183.99714,
  		w: 95.41014,
  		om: 2.32278,
  		i: 4.0825,
  		e: 0.3563702,
  		a: 1.2976186
  	},
  	{
  		H: 21.1,
  		desig: "1998 OX4",
  		epoch: 2459200.5,
  		ma: 40.70399,
  		w: 117.27773,
  		om: 299.60007,
  		i: 4.51535,
  		e: 0.4856391,
  		a: 1.5804455
  	},
  	{
  		H: 15.66,
  		desig: "1998 SS49",
  		epoch: 2459200.5,
  		ma: 83.07534,
  		w: 102.47531,
  		om: 41.47102,
  		i: 10.76129,
  		e: 0.6392575,
  		a: 1.9243209
  	},
  	{
  		H: 19.07,
  		desig: "1998 UT18",
  		epoch: 2459200.5,
  		ma: 68.3281,
  		w: 50.11162,
  		om: 64.65327,
  		i: 13.58867,
  		e: 0.3291272,
  		a: 1.402944
  	},
  	{
  		H: 18.6,
  		desig: "1999 DJ4",
  		epoch: 2459200.5,
  		ma: 215.26357,
  		w: 197.64484,
  		om: 19.90228,
  		i: 9.14312,
  		e: 0.4834427,
  		a: 1.8531288
  	},
  	{
  		H: 17.06,
  		desig: "1999 JD6",
  		epoch: 2459200.5,
  		ma: 115.63269,
  		w: 309.23922,
  		om: 130.16855,
  		i: 17.06393,
  		e: 0.6328465,
  		a: 0.8830625
  	},
  	{
  		H: 20.16,
  		desig: "1999 JV6",
  		epoch: 2459200.5,
  		ma: 29.43597,
  		w: 235.5281,
  		om: 124.31751,
  		i: 5.35927,
  		e: 0.3110955,
  		a: 1.0082051
  	},
  	{
  		H: 15.97,
  		desig: "1999 NC43",
  		epoch: 2459200.5,
  		ma: 346.27614,
  		w: 120.77932,
  		om: 311.65857,
  		i: 7.13193,
  		e: 0.5785532,
  		a: 1.7597758
  	},
  	{
  		H: 17.37,
  		desig: "2000 GK137",
  		epoch: 2459200.5,
  		ma: 83.13376,
  		w: 150.28148,
  		om: 164.90051,
  		i: 10.06093,
  		e: 0.5059207,
  		a: 1.995929
  	},
  	{
  		H: 16.09,
  		desig: "2000 SY2",
  		epoch: 2459200.5,
  		ma: 248.74283,
  		w: 47.77773,
  		om: 162.03278,
  		i: 19.22625,
  		e: 0.6426999,
  		a: 0.8586186
  	},
  	{
  		H: 17.68,
  		desig: "2001 FM129",
  		epoch: 2459200.5,
  		ma: 173.31476,
  		w: 140.18732,
  		om: 272.15091,
  		i: 1.52224,
  		e: 0.6294751,
  		a: 1.1823258
  	},
  	{
  		H: 20.2,
  		desig: "2001 US16",
  		epoch: 2459200.5,
  		ma: 178.76639,
  		w: 67.12495,
  		om: 175.95148,
  		i: 1.90531,
  		e: 0.2529074,
  		a: 1.3560487
  	},
  	{
  		H: 14.96,
  		desig: "2002 CE",
  		epoch: 2459200.5,
  		ma: 152.50921,
  		w: 5.80076,
  		om: 19.89431,
  		i: 43.64554,
  		e: 0.5069272,
  		a: 2.0775536
  	},
  	{
  		H: 17,
  		desig: "2002 LY45",
  		epoch: 2459200.5,
  		ma: 250.11558,
  		w: 222.90105,
  		om: 188.192,
  		i: 9.90917,
  		e: 0.8862866,
  		a: 1.6414255
  	},
  	{
  		H: 16.45,
  		desig: "2002 NT7",
  		epoch: 2459200.5,
  		ma: 322.96592,
  		w: 300.70699,
  		om: 132.0253,
  		i: 42.355,
  		e: 0.5282003,
  		a: 1.7354652
  	},
  	{
  		H: 15.36,
  		desig: "2002 VU94",
  		epoch: 2459200.5,
  		ma: 45.84997,
  		w: 30.67302,
  		om: 226.75876,
  		i: 8.9147,
  		e: 0.5762507,
  		a: 2.1334933
  	},
  	{
  		H: 17.74,
  		desig: "2003 YE45",
  		epoch: 2459200.5,
  		ma: 54.94478,
  		w: 306.80985,
  		om: 286.25653,
  		i: 19.0063,
  		e: 0.2800299,
  		a: 1.2343521
  	},
  	{
  		H: 18.6,
  		desig: "2003 YK118",
  		epoch: 2459200.5,
  		ma: 212.06035,
  		w: 233.06899,
  		om: 326.8807,
  		i: 7.8387,
  		e: 0.4919335,
  		a: 1.6948177
  	},
  	{
  		H: 16.53,
  		desig: "2001 KY66",
  		epoch: 2459200.5,
  		ma: 178.7098,
  		w: 61.50046,
  		om: 284.15084,
  		i: 10.61289,
  		e: 0.5075109,
  		a: 1.8666242
  	},
  	{
  		H: 18.94,
  		name: "Apophis",
  		desig: "2004 MN4",
  		epoch: 2459200.5,
  		ma: 110.63225,
  		w: 126.65403,
  		om: 204.04187,
  		i: 3.33678,
  		e: 0.1915088,
  		a: 0.9225247
  	},
  	{
  		H: 17.8,
  		desig: "1992 UY4",
  		epoch: 2459200.5,
  		ma: 198.6114,
  		w: 42.14753,
  		om: 305.22837,
  		i: 2.64205,
  		e: 0.6190474,
  		a: 2.6520059
  	},
  	{
  		H: 19.2,
  		desig: "1999 MM",
  		epoch: 2459200.5,
  		ma: 106.12222,
  		w: 268.78377,
  		om: 110.95452,
  		i: 4.7651,
  		e: 0.6107291,
  		a: 1.6243193
  	},
  	{
  		H: 20.9,
  		name: "Bennu",
  		desig: "1999 RQ36",
  		epoch: 2459200.5,
  		ma: 222.61603,
  		w: 66.3283,
  		om: 2.00482,
  		i: 6.03414,
  		e: 0.2036394,
  		a: 1.125919
  	},
  	{
  		H: 16.79,
  		desig: "1999 XA143",
  		epoch: 2459200.5,
  		ma: 98.03944,
  		w: 104.01588,
  		om: 116.62812,
  		i: 38.54749,
  		e: 0.581644,
  		a: 1.8433108
  	},
  	{
  		H: 15.19,
  		desig: "2001 XU10",
  		epoch: 2459200.5,
  		ma: 188.05564,
  		w: 6.93582,
  		om: 310.15836,
  		i: 42.02932,
  		e: 0.4395651,
  		a: 1.7537579
  	},
  	{
  		H: 17.68,
  		desig: "1994 CC",
  		epoch: 2459200.5,
  		ma: 165.33905,
  		w: 24.86843,
  		om: 268.54723,
  		i: 4.68097,
  		e: 0.4169869,
  		a: 1.6378593
  	},
  	{
  		H: 16.78,
  		desig: "1994 CN2",
  		epoch: 2459200.5,
  		ma: 0.74789,
  		w: 248.24466,
  		om: 99.33896,
  		i: 1.43926,
  		e: 0.3949335,
  		a: 1.5729834
  	},
  	{
  		H: 18.15,
  		desig: "1997 BQ",
  		epoch: 2459200.5,
  		ma: 103.24674,
  		w: 147.46883,
  		om: 50.16545,
  		i: 10.98855,
  		e: 0.4786672,
  		a: 1.7468863
  	},
  	{
  		H: 17.6,
  		desig: "1998 CS1",
  		epoch: 2459200.5,
  		ma: 167.18575,
  		w: 97.66632,
  		om: 110.78075,
  		i: 7.79005,
  		e: 0.5782342,
  		a: 1.4913829
  	},
  	{
  		H: 18.09,
  		desig: "1999 AN10",
  		epoch: 2459200.5,
  		ma: 113.67619,
  		w: 268.32172,
  		om: 314.37797,
  		i: 39.93406,
  		e: 0.5620779,
  		a: 1.4585845
  	},
  	{
  		H: 18.17,
  		desig: "1999 BJ8",
  		epoch: 2459200.5,
  		ma: 105.75547,
  		w: 221.85529,
  		om: 339.59344,
  		i: 8.9913,
  		e: 0.5499627,
  		a: 1.8991135
  	},
  	{
  		H: 18,
  		desig: "1999 CF9",
  		epoch: 2459200.5,
  		ma: 56.59511,
  		w: 90.27781,
  		om: 157.07334,
  		i: 5.54759,
  		e: 0.600272,
  		a: 1.7727014
  	},
  	{
  		H: 15.13,
  		desig: "1999 TF211",
  		epoch: 2459200.5,
  		ma: 132.15973,
  		w: 161.87939,
  		om: 348.06105,
  		i: 39.22043,
  		e: 0.6099077,
  		a: 2.4491986
  	},
  	{
  		H: 15.99,
  		desig: "2000 DK79",
  		epoch: 2459200.5,
  		ma: 357.4497,
  		w: 2.5526,
  		om: 43.46018,
  		i: 60.67775,
  		e: 0.4143847,
  		a: 1.776678
  	},
  	{
  		H: 17.04,
  		desig: "2000 EE14",
  		epoch: 2459200.5,
  		ma: 33.4366,
  		w: 197.83628,
  		om: 155.76118,
  		i: 26.46264,
  		e: 0.5330522,
  		a: 0.6618306
  	},
  	{
  		H: 20.36,
  		desig: "2000 EE104",
  		epoch: 2459200.5,
  		ma: 120.972,
  		w: 280.94053,
  		om: 25.56127,
  		i: 5.23815,
  		e: 0.2931605,
  		a: 1.0041445
  	},
  	{
  		H: 19.1,
  		desig: "2000 HA24",
  		epoch: 2459200.5,
  		ma: 84.31223,
  		w: 142.143,
  		om: 309.39761,
  		i: 2.16495,
  		e: 0.3186842,
  		a: 1.1389477
  	},
  	{
  		H: 16.7,
  		desig: "2000 OJ8",
  		epoch: 2459200.5,
  		ma: 186.65386,
  		w: 181.24518,
  		om: 226.5984,
  		i: 6.24513,
  		e: 0.5677872,
  		a: 2.35645
  	},
  	{
  		H: 19,
  		desig: "2000 SU180",
  		epoch: 2459200.5,
  		ma: 197.84437,
  		w: 136.23062,
  		om: 327.94797,
  		i: 11.90821,
  		e: 0.6059808,
  		a: 2.1059906
  	},
  	{
  		H: 18.38,
  		desig: "2001 CB21",
  		epoch: 2459200.5,
  		ma: 243.30707,
  		w: 271.80531,
  		om: 353.72401,
  		i: 7.89889,
  		e: 0.333401,
  		a: 1.034411
  	},
  	{
  		H: 17.92,
  		desig: "2001 GN2",
  		epoch: 2459200.5,
  		ma: 282.73857,
  		w: 3.37195,
  		om: 173.5594,
  		i: 26.06927,
  		e: 0.4522996,
  		a: 1.8593882
  	},
  	{
  		H: 16.5,
  		desig: "2001 ME1",
  		epoch: 2459200.5,
  		ma: 176.00384,
  		w: 302.27189,
  		om: 84.65107,
  		i: 5.95012,
  		e: 0.8698032,
  		a: 2.6339844
  	},
  	{
  		H: 18.39,
  		desig: "2001 QQ142",
  		epoch: 2459200.5,
  		ma: 97.2338,
  		w: 337.92064,
  		om: 83.26268,
  		i: 9.31651,
  		e: 0.3111577,
  		a: 1.4227108
  	},
  	{
  		H: 18.1,
  		desig: "2001 SO73",
  		epoch: 2459200.5,
  		ma: 21.17808,
  		w: 30.90987,
  		om: 197.20564,
  		i: 4.85432,
  		e: 0.568694,
  		a: 1.8205378
  	},
  	{
  		H: 18.43,
  		desig: "2001 SX169",
  		epoch: 2459200.5,
  		ma: 292.12518,
  		w: 42.63709,
  		om: 126.8631,
  		i: 2.51595,
  		e: 0.4610007,
  		a: 1.347495
  	},
  	{
  		H: 16.71,
  		desig: "2001 SN289",
  		epoch: 2459200.5,
  		ma: 125.44021,
  		w: 225.61111,
  		om: 357.09603,
  		i: 53.22552,
  		e: 0.5077559,
  		a: 1.7839116
  	},
  	{
  		H: 18.8,
  		desig: "2001 XT1",
  		epoch: 2459200.5,
  		ma: 57.81838,
  		w: 31.32569,
  		om: 316.25022,
  		i: 2.73147,
  		e: 0.5795353,
  		a: 1.5286449
  	},
  	{
  		H: 20,
  		desig: "2002 CQ11",
  		epoch: 2459200.5,
  		ma: 251.40684,
  		w: 272.81563,
  		om: 81.35614,
  		i: 2.46412,
  		e: 0.4281206,
  		a: 0.9780182
  	},
  	{
  		H: 18.3,
  		desig: "2002 EZ11",
  		epoch: 2459200.5,
  		ma: 101.38917,
  		w: 317.73827,
  		om: 51.9132,
  		i: 2.35425,
  		e: 0.8020701,
  		a: 1.1141364
  	},
  	{
  		H: 18.06,
  		desig: "2002 FV5",
  		epoch: 2459200.5,
  		ma: 113.55569,
  		w: 308.09019,
  		om: 38.85779,
  		i: 34.0308,
  		e: 0.7246032,
  		a: 1.0869858
  	},
  	{
  		H: 18.8,
  		desig: "2002 FG7",
  		epoch: 2459200.5,
  		ma: 61.46286,
  		w: 247.6865,
  		om: 187.49716,
  		i: 9.20288,
  		e: 0.6267394,
  		a: 1.5135188
  	},
  	{
  		H: 18.21,
  		desig: "2002 HK12",
  		epoch: 2459200.5,
  		ma: 173.88432,
  		w: 2.2409,
  		om: 307.00817,
  		i: 2.34975,
  		e: 0.5289444,
  		a: 2.001848
  	},
  	{
  		H: 19.3,
  		desig: "2002 JV15",
  		epoch: 2459200.5,
  		ma: 322.15934,
  		w: 127.34298,
  		om: 200.65316,
  		i: 7.18291,
  		e: 0.5362881,
  		a: 1.6232461
  	},
  	{
  		H: 17.8,
  		desig: "2002 PM6",
  		epoch: 2459200.5,
  		ma: 38.80672,
  		w: 224.40769,
  		om: 304.12117,
  		i: 19.17238,
  		e: 0.8500982,
  		a: 1.1980594
  	},
  	{
  		H: 16.89,
  		desig: "2003 BD44",
  		epoch: 2459200.5,
  		ma: 102.69022,
  		w: 89.26568,
  		om: 181.29008,
  		i: 2.66274,
  		e: 0.6064187,
  		a: 1.9679121
  	},
  	{
  		H: 18.7,
  		desig: "2003 CR20",
  		epoch: 2459200.5,
  		ma: 244.25577,
  		w: 88.82427,
  		om: 177.0983,
  		i: 4.98868,
  		e: 0.7296796,
  		a: 2.1252865
  	},
  	{
  		H: 17.41,
  		desig: "2003 QQ47",
  		epoch: 2459200.5,
  		ma: 33.74368,
  		w: 104.98134,
  		om: 0.99129,
  		i: 62.09967,
  		e: 0.1869961,
  		a: 1.0854049
  	},
  	{
  		H: 15.98,
  		desig: "2003 QO104",
  		epoch: 2459200.5,
  		ma: 253.17473,
  		w: 183.55226,
  		om: 58.22319,
  		i: 11.6031,
  		e: 0.5241579,
  		a: 2.1356888
  	},
  	{
  		H: 16.06,
  		desig: "2004 AF",
  		epoch: 2459200.5,
  		ma: 66.73949,
  		w: 57.92448,
  		om: 315.64915,
  		i: 27.13727,
  		e: 0.5536639,
  		a: 1.9712695
  	},
  	{
  		H: 16.57,
  		desig: "2004 DV24",
  		epoch: 2459200.5,
  		ma: 113.53831,
  		w: 186.38068,
  		om: 171.13609,
  		i: 55.89251,
  		e: 0.2897411,
  		a: 1.4230199
  	},
  	{
  		H: 18.84,
  		desig: "2004 VD17",
  		epoch: 2459200.5,
  		ma: 281.00668,
  		w: 90.9531,
  		om: 224.00531,
  		i: 4.22399,
  		e: 0.5888388,
  		a: 1.5078593
  	},
  	{
  		H: 18.3,
  		desig: "2004 VG64",
  		epoch: 2459200.5,
  		ma: 21.55394,
  		w: 43.92526,
  		om: 208.86335,
  		i: 36.25574,
  		e: 0.655564,
  		a: 0.9683354
  	},
  	{
  		H: 19.1,
  		desig: "1991 BN",
  		epoch: 2459200.5,
  		ma: 180.83408,
  		w: 80.90456,
  		om: 268.85922,
  		i: 3.44547,
  		e: 0.3979907,
  		a: 1.4433959
  	},
  	{
  		H: 19.16,
  		desig: "1991 RB",
  		epoch: 2459200.5,
  		ma: 213.18234,
  		w: 68.94231,
  		om: 359.31283,
  		i: 19.57589,
  		e: 0.485655,
  		a: 1.4544399
  	},
  	{
  		H: 17.9,
  		desig: "1997 NC1",
  		epoch: 2459200.5,
  		ma: 200.44626,
  		w: 16.59437,
  		om: 96.49582,
  		i: 16.72505,
  		e: 0.2082051,
  		a: 0.8650904
  	},
  	{
  		H: 19.7,
  		desig: "1998 FW4",
  		epoch: 2459200.5,
  		ma: 280.46019,
  		w: 85.34159,
  		om: 353.73416,
  		i: 3.42103,
  		e: 0.7143423,
  		a: 2.5280778
  	},
  	{
  		H: 20.1,
  		desig: "1998 HL3",
  		epoch: 2459200.5,
  		ma: 215.926,
  		w: 188.13193,
  		om: 163.67124,
  		i: 2.67973,
  		e: 0.3660171,
  		a: 1.1288432
  	},
  	{
  		H: 19.4,
  		desig: "1998 KJ9",
  		epoch: 2459200.5,
  		ma: 304.59959,
  		w: 260.06099,
  		om: 98.58109,
  		i: 10.93092,
  		e: 0.6397351,
  		a: 1.4477191
  	},
  	{
  		H: 19.26,
  		desig: "1998 MZ",
  		epoch: 2459200.5,
  		ma: 185.93281,
  		w: 39.78808,
  		om: 121.72374,
  		i: 0.14647,
  		e: 0.5732288,
  		a: 1.3465974
  	},
  	{
  		H: 19.22,
  		desig: "1999 GS6",
  		epoch: 2459200.5,
  		ma: 302.01622,
  		w: 134.95283,
  		om: 314.44378,
  		i: 2.02064,
  		e: 0.4973951,
  		a: 1.1911707
  	},
  	{
  		H: 18.4,
  		desig: "1999 RR28",
  		epoch: 2459200.5,
  		ma: 55.86728,
  		w: 284.54835,
  		om: 178.21838,
  		i: 7.13995,
  		e: 0.65462,
  		a: 1.8776885
  	},
  	{
  		H: 21.1,
  		desig: "1999 VT25",
  		epoch: 2459200.5,
  		ma: 232.39988,
  		w: 319.1543,
  		om: 221.98795,
  		i: 5.14888,
  		e: 0.5231554,
  		a: 1.1620813
  	},
  	{
  		H: 19.53,
  		desig: "2000 GJ147",
  		epoch: 2459200.5,
  		ma: 112.76994,
  		w: 240.79367,
  		om: 57.86208,
  		i: 25.00681,
  		e: 0.236712,
  		a: 1.1622377
  	},
  	{
  		H: 18.2,
  		desig: "2000 JG5",
  		epoch: 2459200.5,
  		ma: 138.56807,
  		w: 233.43703,
  		om: 213.0718,
  		i: 31.43153,
  		e: 0.7959516,
  		a: 1.3405515
  	},
  	{
  		H: 19.28,
  		desig: "2000 WO107",
  		epoch: 2459200.5,
  		ma: 72.99851,
  		w: 213.70197,
  		om: 69.24668,
  		i: 7.77389,
  		e: 0.7807758,
  		a: 0.9111748
  	},
  	{
  		H: 17.41,
  		desig: "2000 YN29",
  		epoch: 2459200.5,
  		ma: 309.33436,
  		w: 138.14755,
  		om: 67.87725,
  		i: 5.87852,
  		e: 0.6758009,
  		a: 2.5228349
  	},
  	{
  		H: 17.2,
  		desig: "2001 MG1",
  		epoch: 2459200.5,
  		ma: 315.38074,
  		w: 218.44752,
  		om: 142.37588,
  		i: 28.42632,
  		e: 0.6461906,
  		a: 2.4999086
  	},
  	{
  		H: 16.91,
  		desig: "2001 SN263",
  		epoch: 2459200.5,
  		ma: 210.66922,
  		w: 172.98988,
  		om: 325.75762,
  		i: 6.69494,
  		e: 0.4792074,
  		a: 1.9865567
  	},
  	{
  		H: 18.33,
  		desig: "2001 WN5",
  		epoch: 2459200.5,
  		ma: 214.34883,
  		w: 44.58365,
  		om: 277.42994,
  		i: 1.91899,
  		e: 0.4671179,
  		a: 1.7117485
  	},
  	{
  		H: 18.25,
  		desig: "2002 AM31",
  		epoch: 2459200.5,
  		ma: 266.08354,
  		w: 197.93305,
  		om: 144.38032,
  		i: 4.64488,
  		e: 0.4515927,
  		a: 1.7029393
  	},
  	{
  		H: 22,
  		desig: "2002 CZ9",
  		epoch: 2459200.5,
  		ma: 80.31534,
  		w: 80.82571,
  		om: 142.87848,
  		i: 4.9715,
  		e: 0.3601129,
  		a: 1.3255025
  	},
  	{
  		H: 17.78,
  		desig: "2002 SM",
  		epoch: 2459200.5,
  		ma: 121.61708,
  		w: 217.23999,
  		om: 10.89043,
  		i: 14.4274,
  		e: 0.4862149,
  		a: 1.8714461
  	},
  	{
  		H: 20.05,
  		desig: "2002 SR41",
  		epoch: 2459200.5,
  		ma: 336.23523,
  		w: 258.13928,
  		om: 247.82139,
  		i: 11.57832,
  		e: 0.4908451,
  		a: 1.0833491
  	},
  	{
  		H: 17.6,
  		desig: "2002 SY50",
  		epoch: 2459200.5,
  		ma: 28.17533,
  		w: 99.45237,
  		om: 34.23014,
  		i: 8.74098,
  		e: 0.6897195,
  		a: 1.7038137
  	},
  	{
  		H: 17.68,
  		desig: "2002 UQ3",
  		epoch: 2459200.5,
  		ma: 338.58046,
  		w: 280.89093,
  		om: 222.7964,
  		i: 28.81721,
  		e: 0.5619788,
  		a: 1.7195404
  	},
  	{
  		H: 18.17,
  		desig: "2002 VX94",
  		epoch: 2459200.5,
  		ma: 304.54123,
  		w: 215.07446,
  		om: 320.16418,
  		i: 7.16186,
  		e: 0.4086748,
  		a: 1.4765372
  	},
  	{
  		H: 21.7,
  		desig: "2003 MA3",
  		epoch: 2459200.5,
  		ma: 309.36998,
  		w: 228.85298,
  		om: 152.67108,
  		i: 1.41571,
  		e: 0.402123,
  		a: 1.1051775
  	},
  	{
  		H: 20.5,
  		desig: "2006 MZ1",
  		epoch: 2459200.5,
  		ma: 99.24748,
  		w: 138.61863,
  		om: 226.63401,
  		i: 2.08184,
  		e: 0.4824645,
  		a: 1.5693852
  	},
  	{
  		H: 16.9,
  		desig: "2000 WO67",
  		epoch: 2459200.5,
  		ma: 135.58733,
  		w: 237.7497,
  		om: 107.6092,
  		i: 9.69154,
  		e: 0.6171449,
  		a: 2.4346927
  	},
  	{
  		H: 15.43,
  		desig: "2004 LJ1",
  		epoch: 2459200.5,
  		ma: 274.11845,
  		w: 139.95872,
  		om: 235.57706,
  		i: 23.14531,
  		e: 0.5937343,
  		a: 2.2626313
  	},
  	{
  		H: 17.16,
  		name: "Cacus",
  		desig: "1978 CA",
  		epoch: 2459200.5,
  		ma: 259.04971,
  		w: 102.19215,
  		om: 161.22961,
  		i: 26.06088,
  		e: 0.213959,
  		a: 1.123169
  	},
  	{
  		H: 19.4,
  		desig: "1990 OS",
  		epoch: 2459200.5,
  		ma: 325.14521,
  		w: 21.53162,
  		om: 346.53548,
  		i: 1.09242,
  		e: 0.4625404,
  		a: 1.6785076
  	},
  	{
  		H: 19.07,
  		desig: "1996 JG",
  		epoch: 2459200.5,
  		ma: 35.71228,
  		w: 280.20683,
  		om: 52.8584,
  		i: 5.282,
  		e: 0.6606268,
  		a: 1.8015571
  	},
  	{
  		H: 19.1,
  		desig: "1998 HL1",
  		epoch: 2459200.5,
  		ma: 316.4913,
  		w: 148.63943,
  		om: 213.54188,
  		i: 20.05177,
  		e: 0.1870615,
  		a: 1.2463211
  	},
  	{
  		H: 19.2,
  		desig: "1998 SA15",
  		epoch: 2459200.5,
  		ma: 107.33389,
  		w: 331.452,
  		om: 114.1957,
  		i: 7.11291,
  		e: 0.5587578,
  		a: 1.9153988
  	},
  	{
  		H: 20.5,
  		desig: "1998 SH36",
  		epoch: 2459200.5,
  		ma: 143.45951,
  		w: 278.75024,
  		om: 217.89795,
  		i: 2.13113,
  		e: 0.5710284,
  		a: 1.08793
  	},
  	{
  		H: 19.7,
  		desig: "1999 DB7",
  		epoch: 2459200.5,
  		ma: 148.22949,
  		w: 29.88035,
  		om: 157.60002,
  		i: 10.84157,
  		e: 0.1948348,
  		a: 1.2057913
  	},
  	{
  		H: 19.39,
  		name: "Ryugu",
  		desig: "1999 JU3",
  		epoch: 2459200.5,
  		ma: 345.63994,
  		w: 211.44372,
  		om: 251.53583,
  		i: 5.88372,
  		e: 0.1909944,
  		a: 1.1905687
  	},
  	{
  		H: 21.1,
  		desig: "1999 NB5",
  		epoch: 2459200.5,
  		ma: 40.78187,
  		w: 123.09037,
  		om: 235.37871,
  		i: 1.43068,
  		e: 0.5350725,
  		a: 2.07318
  	},
  	{
  		H: 19.1,
  		desig: "1999 SM5",
  		epoch: 2459200.5,
  		ma: 47.97215,
  		w: 319.17116,
  		om: 327.73249,
  		i: 5.19252,
  		e: 0.6953867,
  		a: 2.3030712
  	},
  	{
  		H: 20.2,
  		desig: "2000 AF6",
  		epoch: 2459200.5,
  		ma: 308.17931,
  		w: 200.23322,
  		om: 110.69962,
  		i: 2.69531,
  		e: 0.4113934,
  		a: 0.8777582
  	},
  	{
  		H: 21.7,
  		desig: "2000 EH26",
  		epoch: 2459200.5,
  		ma: 57.58765,
  		w: 19.14192,
  		om: 215.21351,
  		i: 0.39878,
  		e: 0.4783953,
  		a: 1.8538336
  	},
  	{
  		H: 18,
  		desig: "2000 ET70",
  		epoch: 2459200.5,
  		ma: 333.45108,
  		w: 46.08877,
  		om: 331.14287,
  		i: 22.32393,
  		e: 0.1237345,
  		a: 0.9466497
  	},
  	{
  		H: 20.36,
  		desig: "2000 EV70",
  		epoch: 2459200.5,
  		ma: 280.61714,
  		w: 314.52397,
  		om: 108.92789,
  		i: 1.39916,
  		e: 0.5310222,
  		a: 1.207397
  	},
  	{
  		H: 18.4,
  		desig: "2000 LB16",
  		epoch: 2459200.5,
  		ma: 245.00913,
  		w: 285.25616,
  		om: 80.86095,
  		i: 50.71151,
  		e: 0.3574617,
  		a: 1.2408293
  	},
  	{
  		H: 17.44,
  		desig: "2000 QW69",
  		epoch: 2459200.5,
  		ma: 316.67736,
  		w: 220.68645,
  		om: 344.34502,
  		i: 38.14976,
  		e: 0.302118,
  		a: 1.3762085
  	},
  	{
  		H: 19.9,
  		desig: "2000 RW37",
  		epoch: 2459200.5,
  		ma: 101.85072,
  		w: 133.26769,
  		om: 333.30754,
  		i: 13.74799,
  		e: 0.2502706,
  		a: 1.2475771
  	},
  	{
  		H: 18.88,
  		desig: "2000 UH1",
  		epoch: 2459200.5,
  		ma: 275.18095,
  		w: 40.97888,
  		om: 76.15251,
  		i: 14.77277,
  		e: 0.5436746,
  		a: 1.8751294
  	},
  	{
  		H: 20.1,
  		desig: "2000 UL11",
  		epoch: 2459200.5,
  		ma: 160.99018,
  		w: 151.90895,
  		om: 333.2208,
  		i: 2.19295,
  		e: 0.6360955,
  		a: 2.1233543
  	},
  	{
  		H: 20.7,
  		desig: "2000 YJ11",
  		epoch: 2459200.5,
  		ma: 130.48732,
  		w: 339.13837,
  		om: 64.94157,
  		i: 7.26316,
  		e: 0.2321943,
  		a: 1.3134422
  	},
  	{
  		H: 18.1,
  		desig: "2001 BO61",
  		epoch: 2459200.5,
  		ma: 114.97724,
  		w: 78.82794,
  		om: 159.80871,
  		i: 9.07824,
  		e: 0.743208,
  		a: 1.7736091
  	},
  	{
  		H: 18.7,
  		desig: "2001 FD58",
  		epoch: 2459200.5,
  		ma: 219.73963,
  		w: 45.99831,
  		om: 341.18058,
  		i: 6.49741,
  		e: 0.5751943,
  		a: 1.0922634
  	},
  	{
  		H: 20.8,
  		desig: "2001 OY13",
  		epoch: 2459200.5,
  		ma: 342.6897,
  		w: 291.21096,
  		om: 284.23887,
  		i: 10.29965,
  		e: 0.3816698,
  		a: 1.3183441
  	},
  	{
  		H: 18.2,
  		desig: "2001 RA12",
  		epoch: 2459200.5,
  		ma: 245.04596,
  		w: 326.08131,
  		om: 311.58879,
  		i: 17.08951,
  		e: 0.5441144,
  		a: 2.0370108
  	},
  	{
  		H: 17.9,
  		desig: "2001 SK162",
  		epoch: 2459200.5,
  		ma: 25.13937,
  		w: 186.39891,
  		om: 285.37917,
  		i: 1.6817,
  		e: 0.4750018,
  		a: 1.9253642
  	},
  	{
  		H: 17.71,
  		desig: "2001 UA5",
  		epoch: 2459200.5,
  		ma: 350.29532,
  		w: 27.70117,
  		om: 58.63765,
  		i: 9.93713,
  		e: 0.4454766,
  		a: 1.7870402
  	},
  	{
  		H: 21,
  		desig: "2001 XR30",
  		epoch: 2459200.5,
  		ma: 252.03415,
  		w: 294.41463,
  		om: 247.89314,
  		i: 11.85974,
  		e: 0.3652397,
  		a: 1.2969717
  	},
  	{
  		H: 16.37,
  		desig: "2001 YJ4",
  		epoch: 2459200.5,
  		ma: 165.69185,
  		w: 322.35722,
  		om: 247.83415,
  		i: 9.28389,
  		e: 0.569308,
  		a: 2.2707523
  	},
  	{
  		H: 19.8,
  		desig: "2002 AP3",
  		epoch: 2459200.5,
  		ma: 142.59563,
  		w: 117.66817,
  		om: 87.42663,
  		i: 7.59984,
  		e: 0.5880619,
  		a: 2.0429366
  	},
  	{
  		H: 18.42,
  		desig: "2002 CU11",
  		epoch: 2459200.5,
  		ma: 284.77733,
  		w: 110.54275,
  		om: 157.75156,
  		i: 48.78083,
  		e: 0.2951992,
  		a: 1.2197016
  	},
  	{
  		H: 16.52,
  		desig: "2002 FB3",
  		epoch: 2459200.5,
  		ma: 193.24609,
  		w: 148.31077,
  		om: 203.58733,
  		i: 20.27818,
  		e: 0.6016947,
  		a: 0.761604
  	},
  	{
  		H: 18.48,
  		desig: "2002 GT",
  		epoch: 2459200.5,
  		ma: 254.72257,
  		w: 135.11271,
  		om: 201.74615,
  		i: 6.96883,
  		e: 0.33489,
  		a: 1.3443921
  	},
  	{
  		H: 20.09,
  		desig: "2002 NN4",
  		epoch: 2459200.5,
  		ma: 324.3352,
  		w: 222.17021,
  		om: 259.46884,
  		i: 5.42056,
  		e: 0.4346154,
  		a: 0.8758855
  	},
  	{
  		H: 18.88,
  		desig: "2002 OD20",
  		epoch: 2459200.5,
  		ma: 299.08988,
  		w: 275.24118,
  		om: 259.96347,
  		i: 4.18884,
  		e: 0.3690672,
  		a: 1.3654954
  	},
  	{
  		H: 18.97,
  		desig: "2002 PZ39",
  		epoch: 2459200.5,
  		ma: 141.1936,
  		w: 259.98509,
  		om: 328.90029,
  		i: 1.6682,
  		e: 0.5463325,
  		a: 1.4689263
  	},
  	{
  		H: 19,
  		desig: "2002 YP2",
  		epoch: 2459200.5,
  		ma: 54.90339,
  		w: 281.36422,
  		om: 52.49513,
  		i: 20.62324,
  		e: 0.6882724,
  		a: 1.5771546
  	},
  	{
  		H: 20,
  		desig: "2003 EF54",
  		epoch: 2459200.5,
  		ma: 220.41604,
  		w: 353.71993,
  		om: 268.50399,
  		i: 2.95132,
  		e: 0.4727761,
  		a: 1.6092016
  	},
  	{
  		H: 18.47,
  		desig: "2003 RX7",
  		epoch: 2459200.5,
  		ma: 136.16511,
  		w: 245.8397,
  		om: 241.0527,
  		i: 10.38939,
  		e: 0.3544892,
  		a: 1.2291034
  	},
  	{
  		H: 17.66,
  		desig: "2003 SD220",
  		epoch: 2459200.5,
  		ma: 94.76,
  		w: 326.93503,
  		om: 273.91466,
  		i: 8.51475,
  		e: 0.2106578,
  		a: 0.8266883
  	},
  	{
  		H: 16.21,
  		desig: "2003 YT1",
  		epoch: 2459200.5,
  		ma: 134.64463,
  		w: 91.04778,
  		om: 38.32737,
  		i: 44.05971,
  		e: 0.2919864,
  		a: 1.1096152
  	},
  	{
  		H: 20.8,
  		desig: "2004 EW",
  		epoch: 2459200.5,
  		ma: 114.60141,
  		w: 56.19215,
  		om: 342.91199,
  		i: 4.66897,
  		e: 0.2789915,
  		a: 0.9879218
  	},
  	{
  		H: 21.15,
  		desig: "2004 GU9",
  		epoch: 2459200.5,
  		ma: 126.04058,
  		w: 279.79025,
  		om: 38.5185,
  		i: 13.65029,
  		e: 0.1360298,
  		a: 1.0013129
  	},
  	{
  		H: 19.4,
  		desig: "2004 JA27",
  		epoch: 2459200.5,
  		ma: 207.42874,
  		w: 270.19794,
  		om: 67.76998,
  		i: 2.25803,
  		e: 0.4233141,
  		a: 1.6663239
  	},
  	{
  		H: 17.2,
  		desig: "2004 OT11",
  		epoch: 2459200.5,
  		ma: 90.288,
  		w: 326.33499,
  		om: 295.09604,
  		i: 19.94599,
  		e: 0.5653055,
  		a: 2.1512136
  	},
  	{
  		H: 18.9,
  		desig: "1989 DA",
  		epoch: 2459200.5,
  		ma: 9.03029,
  		w: 139.80817,
  		om: 349.12555,
  		i: 6.49548,
  		e: 0.5434108,
  		a: 2.1619168
  	},
  	{
  		H: 17.9,
  		desig: "2002 XR14",
  		epoch: 2459200.5,
  		ma: 265.4281,
  		w: 120.10533,
  		om: 75.66865,
  		i: 2.12992,
  		e: 0.6252093,
  		a: 1.9055901
  	},
  	{
  		H: 18,
  		desig: "2004 WS2",
  		epoch: 2459200.5,
  		ma: 94.77421,
  		w: 115.34441,
  		om: 87.75012,
  		i: 8.26263,
  		e: 0.6030363,
  		a: 1.3364355
  	},
  	{
  		H: 18.6,
  		desig: "1999 VP11",
  		epoch: 2459200.5,
  		ma: 331.59094,
  		w: 61.73393,
  		om: 208.09733,
  		i: 17.27934,
  		e: 0.5835467,
  		a: 1.0857259
  	},
  	{
  		H: 19.1,
  		desig: "2001 JM1",
  		epoch: 2459200.5,
  		ma: 57.39888,
  		w: 321.89964,
  		om: 226.6842,
  		i: 17.07157,
  		e: 0.310822,
  		a: 1.4609184
  	},
  	{
  		H: 18.7,
  		desig: "2003 YM137",
  		epoch: 2459200.5,
  		ma: 356.58271,
  		w: 127.22665,
  		om: 77.05834,
  		i: 2.70183,
  		e: 0.6892506,
  		a: 2.5937381
  	},
  	{
  		H: 18.32,
  		desig: "2000 YV137",
  		epoch: 2459200.5,
  		ma: 258.41782,
  		w: 211.35844,
  		om: 137.23534,
  		i: 28.00184,
  		e: 0.3110351,
  		a: 1.4479384
  	},
  	{
  		H: 18.31,
  		desig: "1996 FG3",
  		epoch: 2459200.5,
  		ma: 197.90628,
  		w: 24.05956,
  		om: 299.68044,
  		i: 1.99116,
  		e: 0.349719,
  		a: 1.0538573
  	},
  	{
  		H: 20.42,
  		desig: "1998 BB10",
  		epoch: 2459200.5,
  		ma: 38.34008,
  		w: 259.20639,
  		om: 124.29589,
  		i: 11.536,
  		e: 0.4245616,
  		a: 1.2717683
  	},
  	{
  		H: 19.8,
  		desig: "2003 EE16",
  		epoch: 2459200.5,
  		ma: 267.65304,
  		w: 259.57759,
  		om: 127.14631,
  		i: 0.65031,
  		e: 0.6141722,
  		a: 1.4174366
  	},
  	{
  		H: 17.53,
  		desig: "2004 HK33",
  		epoch: 2459200.5,
  		ma: 122.77789,
  		w: 221.43097,
  		om: 104.79054,
  		i: 5.4391,
  		e: 0.5204873,
  		a: 1.8885455
  	},
  	{
  		H: 20.2,
  		desig: "2002 TD66",
  		epoch: 2459200.5,
  		ma: 35.44274,
  		w: 125.88424,
  		om: 335.55594,
  		i: 4.92754,
  		e: 0.535073,
  		a: 1.8573775
  	},
  	{
  		H: 17.5,
  		desig: "2003 QZ30",
  		epoch: 2459200.5,
  		ma: 192.46702,
  		w: 243.08876,
  		om: 178.08041,
  		i: 8.56766,
  		e: 0.6315644,
  		a: 2.419736
  	},
  	{
  		H: 19.4,
  		desig: "2004 VW14",
  		epoch: 2459200.5,
  		ma: 53.96966,
  		w: 42.29522,
  		om: 101.15791,
  		i: 3.85154,
  		e: 0.6006001,
  		a: 2.1180946
  	},
  	{
  		H: 18.21,
  		desig: "2000 DP107",
  		epoch: 2459200.5,
  		ma: 277.13351,
  		w: 289.77936,
  		om: 358.67629,
  		i: 8.6717,
  		e: 0.3766333,
  		a: 1.3653131
  	},
  	{
  		H: 17.3,
  		desig: "2004 GA1",
  		epoch: 2459200.5,
  		ma: 111.01265,
  		w: 54.58116,
  		om: 261.55739,
  		i: 7.77546,
  		e: 0.6726244,
  		a: 2.4317876
  	},
  	{
  		H: 19.1,
  		desig: "2005 JS108",
  		epoch: 2459200.5,
  		ma: 234.81307,
  		w: 243.88297,
  		om: 110.86306,
  		i: 6.04064,
  		e: 0.3225107,
  		a: 1.356144
  	},
  	{
  		H: 19.88,
  		desig: "2000 MU1",
  		epoch: 2459200.5,
  		ma: 306.60557,
  		w: 63.6398,
  		om: 130.08345,
  		i: 13.09481,
  		e: 0.3824878,
  		a: 1.3730124
  	},
  	{
  		H: 19.3,
  		desig: "2003 NC",
  		epoch: 2459200.5,
  		ma: 207.37148,
  		w: 224.20077,
  		om: 288.51042,
  		i: 21.60881,
  		e: 0.8056589,
  		a: 1.405667
  	},
  	{
  		H: 20.3,
  		desig: "1998 VO",
  		epoch: 2459200.5,
  		ma: 23.65652,
  		w: 75.95121,
  		om: 228.13568,
  		i: 10.06061,
  		e: 0.2265721,
  		a: 1.0747255
  	},
  	{
  		H: 17.25,
  		desig: "1998 WZ6",
  		epoch: 2459200.5,
  		ma: 157.67751,
  		w: 110.68214,
  		om: 68.72614,
  		i: 24.75359,
  		e: 0.407929,
  		a: 1.4520107
  	},
  	{
  		H: 20.3,
  		desig: "2001 SG10",
  		epoch: 2459200.5,
  		ma: 43.46225,
  		w: 101.6062,
  		om: 184.96894,
  		i: 4.25739,
  		e: 0.4243804,
  		a: 1.4484642
  	},
  	{
  		H: 18.2,
  		desig: "2001 UY4",
  		epoch: 2459200.5,
  		ma: 6.3891,
  		w: 107.7582,
  		om: 160.75208,
  		i: 5.43797,
  		e: 0.7874724,
  		a: 1.4528087
  	},
  	{
  		H: 18,
  		desig: "2002 TW55",
  		epoch: 2459200.5,
  		ma: 357.32983,
  		w: 251.12774,
  		om: 33.57081,
  		i: 59.37262,
  		e: 0.6648286,
  		a: 2.1171216
  	},
  	{
  		H: 20.2,
  		desig: "2003 RM10",
  		epoch: 2459200.5,
  		ma: 337.41665,
  		w: 287.28696,
  		om: 341.31822,
  		i: 13.72887,
  		e: 0.5916103,
  		a: 1.8469261
  	},
  	{
  		H: 17.26,
  		desig: "2004 HE12",
  		epoch: 2459200.5,
  		ma: 238.88765,
  		w: 162.22478,
  		om: 338.04078,
  		i: 42.72715,
  		e: 0.4661729,
  		a: 1.8451412
  	},
  	{
  		H: 18.07,
  		desig: "2005 WJ56",
  		epoch: 2459200.5,
  		ma: 177.91952,
  		w: 297.69325,
  		om: 288.05316,
  		i: 21.61601,
  		e: 0.1520556,
  		a: 0.9589666
  	},
  	{
  		H: 18.22,
  		desig: "2005 YY128",
  		epoch: 2459200.5,
  		ma: 330.26749,
  		w: 314.7817,
  		om: 300.3147,
  		i: 3.7714,
  		e: 0.7315447,
  		a: 1.6495256
  	},
  	{
  		H: 19.27,
  		desig: "2007 AE12",
  		epoch: 2459200.5,
  		ma: 217.25911,
  		w: 86.90419,
  		om: 245.5008,
  		i: 2.28488,
  		e: 0.5694195,
  		a: 1.6842282
  	},
  	{
  		H: 17.47,
  		desig: "2001 XN254",
  		epoch: 2459200.5,
  		ma: 102.25134,
  		w: 278.33944,
  		om: 264.44967,
  		i: 1.93936,
  		e: 0.5583751,
  		a: 2.3252062
  	},
  	{
  		H: 19.8,
  		desig: "2006 US216",
  		epoch: 2459200.5,
  		ma: 63.54623,
  		w: 56.41722,
  		om: 193.24596,
  		i: 3.43234,
  		e: 0.5624238,
  		a: 0.636946
  	},
  	{
  		H: 18.2,
  		desig: "2002 BK25",
  		epoch: 2459200.5,
  		ma: 127.50184,
  		w: 103.94612,
  		om: 156.147,
  		i: 11.93514,
  		e: 0.7477637,
  		a: 2.2980685
  	},
  	{
  		H: 18.69,
  		desig: "2003 RB",
  		epoch: 2459200.5,
  		ma: 69.96382,
  		w: 44.01342,
  		om: 317.15201,
  		i: 6.72516,
  		e: 0.4389008,
  		a: 1.7882419
  	},
  	{
  		H: 17.1,
  		desig: "2004 NL8",
  		epoch: 2459200.5,
  		ma: 328.31121,
  		w: 278.04143,
  		om: 150.97224,
  		i: 5.01601,
  		e: 0.7151384,
  		a: 2.5781798
  	},
  	{
  		H: 20.3,
  		desig: "2006 AS2",
  		epoch: 2459200.5,
  		ma: 314.26332,
  		w: 79.58657,
  		om: 125.96101,
  		i: 2.59336,
  		e: 0.6385882,
  		a: 2.0937029
  	},
  	{
  		H: 19.3,
  		desig: "1991 JW",
  		epoch: 2459200.5,
  		ma: 229.4182,
  		w: 301.93669,
  		om: 53.86393,
  		i: 8.70982,
  		e: 0.1186769,
  		a: 1.0390637
  	},
  	{
  		H: 20.5,
  		desig: "1999 AQ10",
  		epoch: 2459200.5,
  		ma: 304.89017,
  		w: 300.48575,
  		om: 327.08973,
  		i: 6.49884,
  		e: 0.2356544,
  		a: 0.9343287
  	},
  	{
  		H: 20.7,
  		desig: "2000 CT101",
  		epoch: 2459200.5,
  		ma: 67.01545,
  		w: 292.43337,
  		om: 135.56439,
  		i: 23.29845,
  		e: 0.3546869,
  		a: 1.2993711
  	},
  	{
  		H: 17.65,
  		desig: "2006 SV19",
  		epoch: 2459200.5,
  		ma: 234.1156,
  		w: 182.57216,
  		om: 116.21383,
  		i: 7.35561,
  		e: 0.5155227,
  		a: 2.1329046
  	},
  	{
  		H: 16.4,
  		desig: "2007 PA8",
  		epoch: 2459200.5,
  		ma: 248.79999,
  		w: 293.86787,
  		om: 141.3764,
  		i: 1.99445,
  		e: 0.6539303,
  		a: 2.8458489
  	},
  	{
  		H: 19.38,
  		desig: "2003 HF2",
  		epoch: 2459200.5,
  		ma: 101.64821,
  		w: 231.02982,
  		om: 189.89273,
  		i: 3.05645,
  		e: 0.6753997,
  		a: 1.1138727
  	},
  	{
  		H: 18.8,
  		desig: "2006 SU19",
  		epoch: 2459200.5,
  		ma: 81.54595,
  		w: 10.55925,
  		om: 152.24247,
  		i: 2.09175,
  		e: 0.5863261,
  		a: 1.5269597
  	},
  	{
  		H: 20.27,
  		desig: "2006 WH1",
  		epoch: 2459200.5,
  		ma: 147.04876,
  		w: 263.51147,
  		om: 240.45805,
  		i: 2.6324,
  		e: 0.4847863,
  		a: 1.6718986
  	},
  	{
  		H: 20.6,
  		desig: "2001 HY7",
  		epoch: 2459200.5,
  		ma: 310.27241,
  		w: 211.28615,
  		om: 205.09956,
  		i: 5.21068,
  		e: 0.4120705,
  		a: 0.9138089
  	},
  	{
  		H: 21.1,
  		desig: "2000 QK130",
  		epoch: 2459200.5,
  		ma: 2.3793,
  		w: 66.30536,
  		om: 173.87784,
  		i: 4.72232,
  		e: 0.2617698,
  		a: 1.1805896
  	},
  	{
  		H: 19.71,
  		desig: "2005 SN25",
  		epoch: 2459200.5,
  		ma: 189.64836,
  		w: 45.14786,
  		om: 168.3093,
  		i: 13.0113,
  		e: 0.2704662,
  		a: 1.229868
  	},
  	{
  		H: 16.62,
  		name: "Lugh",
  		desig: "1990 HA",
  		epoch: 2459200.5,
  		ma: 179.93336,
  		w: 312.46139,
  		om: 180.89177,
  		i: 4.12143,
  		e: 0.7086221,
  		a: 2.5469027
  	},
  	{
  		H: 17.3,
  		desig: "2004 VA",
  		epoch: 2459200.5,
  		ma: 14.74385,
  		w: 43.13428,
  		om: 109.63947,
  		i: 3.69871,
  		e: 0.5961485,
  		a: 1.9000524
  	},
  	{
  		H: 19.4,
  		desig: "2006 BC10",
  		epoch: 2459200.5,
  		ma: 20.22673,
  		w: 234.03958,
  		om: 21.23854,
  		i: 0.92769,
  		e: 0.6582358,
  		a: 2.0146412
  	},
  	{
  		H: 19,
  		desig: "1996 EO",
  		epoch: 2459200.5,
  		ma: 45.41944,
  		w: 64.7094,
  		om: 356.47764,
  		i: 21.59212,
  		e: 0.4006167,
  		a: 1.3414962
  	},
  	{
  		H: 20.1,
  		desig: "2003 UX34",
  		epoch: 2459200.5,
  		ma: 117.11498,
  		w: 218.53117,
  		om: 4.3436,
  		i: 2.56348,
  		e: 0.6157749,
  		a: 1.0950999
  	},
  	{
  		H: 19.5,
  		desig: "2003 WR21",
  		epoch: 2459200.5,
  		ma: 36.53687,
  		w: 107.97858,
  		om: 85.83939,
  		i: 9.27497,
  		e: 0.2613411,
  		a: 1.1185232
  	},
  	{
  		H: 18.52,
  		desig: "2000 WK10",
  		epoch: 2459200.5,
  		ma: 103.76355,
  		w: 244.48516,
  		om: 57.96974,
  		i: 14.73708,
  		e: 0.7020969,
  		a: 1.478992
  	},
  	{
  		H: 19.1,
  		desig: "2001 BE10",
  		epoch: 2459200.5,
  		ma: 354.33819,
  		w: 30.5657,
  		om: 297.77755,
  		i: 17.5073,
  		e: 0.3692282,
  		a: 0.8231101
  	},
  	{
  		H: 20.5,
  		desig: "2003 BH",
  		epoch: 2459200.5,
  		ma: 93.53315,
  		w: 313.40945,
  		om: 119.77444,
  		i: 13.11451,
  		e: 0.3561555,
  		a: 1.4563916
  	},
  	{
  		H: 17.59,
  		desig: "2001 FO32",
  		epoch: 2459200.5,
  		ma: 299.16005,
  		w: 123.31366,
  		om: 181.73154,
  		i: 38.98192,
  		e: 0.8261262,
  		a: 1.7011288
  	},
  	{
  		H: 19.82,
  		desig: "2004 AR1",
  		epoch: 2459200.5,
  		ma: 229.29348,
  		w: 50.27167,
  		om: 336.52718,
  		i: 9.07762,
  		e: 0.4695157,
  		a: 1.5759412
  	},
  	{
  		H: 21.3,
  		desig: "2000 EW70",
  		epoch: 2459200.5,
  		ma: 214.55989,
  		w: 125.76876,
  		om: 178.04302,
  		i: 5.42759,
  		e: 0.3212949,
  		a: 0.9375711
  	},
  	{
  		H: 18.7,
  		desig: "2004 VC",
  		epoch: 2459200.5,
  		ma: 194.22258,
  		w: 94.20209,
  		om: 194.16635,
  		i: 39.14414,
  		e: 0.2588458,
  		a: 1.1333889
  	},
  	{
  		H: 15.66,
  		desig: "2003 RN10",
  		epoch: 2459200.5,
  		ma: 74.86028,
  		w: 4.6132,
  		om: 267.20618,
  		i: 39.64716,
  		e: 0.5412484,
  		a: 2.2301815
  	},
  	{
  		H: 14.87,
  		desig: "2004 QY2",
  		epoch: 2459200.5,
  		ma: 91.963,
  		w: 104.97948,
  		om: 295.29212,
  		i: 37.03191,
  		e: 0.477106,
  		a: 1.0839212
  	},
  	{
  		H: 17.38,
  		desig: "2005 NZ6",
  		epoch: 2459200.5,
  		ma: 41.65435,
  		w: 48.95147,
  		om: 38.81646,
  		i: 8.41764,
  		e: 0.86511,
  		a: 1.8333609
  	},
  	{
  		H: 18.1,
  		desig: "2005 UK1",
  		epoch: 2459200.5,
  		ma: 249.30005,
  		w: 345.92017,
  		om: 180.34192,
  		i: 0.79045,
  		e: 0.6953388,
  		a: 2.5003291
  	},
  	{
  		H: 17.35,
  		desig: "1995 SA",
  		epoch: 2459200.5,
  		ma: 259.39539,
  		w: 52.83064,
  		om: 170.32897,
  		i: 19.93707,
  		e: 0.6409303,
  		a: 2.4588907
  	},
  	{
  		H: 18.41,
  		desig: "2004 BE68",
  		epoch: 2459200.5,
  		ma: 112.84619,
  		w: 191.25249,
  		om: 210.89005,
  		i: 15.73471,
  		e: 0.4443175,
  		a: 1.7605382
  	},
  	{
  		H: 19.3,
  		desig: "2001 XU",
  		epoch: 2459200.5,
  		ma: 207.04428,
  		w: 285.96187,
  		om: 261.08511,
  		i: 19.07062,
  		e: 0.8367665,
  		a: 2.5723934
  	},
  	{
  		H: 18.03,
  		desig: "2005 GE59",
  		epoch: 2459200.5,
  		ma: 106.08415,
  		w: 243.03423,
  		om: 194.76249,
  		i: 16.07877,
  		e: 0.6024427,
  		a: 2.1081571
  	},
  	{
  		H: 19.7,
  		desig: "2005 QC5",
  		epoch: 2459200.5,
  		ma: 229.6421,
  		w: 108.69935,
  		om: 48.09163,
  		i: 9.44972,
  		e: 0.3645683,
  		a: 0.8930152
  	},
  	{
  		H: 18.49,
  		desig: "2005 RR6",
  		epoch: 2459200.5,
  		ma: 347.15257,
  		w: 59.96088,
  		om: 27.29646,
  		i: 6.93131,
  		e: 0.7001095,
  		a: 2.9595242
  	},
  	{
  		H: 16.8,
  		desig: "2007 SJ",
  		epoch: 2459200.5,
  		ma: 149.14367,
  		w: 175.06554,
  		om: 306.81488,
  		i: 8.19726,
  		e: 0.5339082,
  		a: 2.0157487
  	},
  	{
  		H: 19.7,
  		desig: "1997 US2",
  		epoch: 2459200.5,
  		ma: 198.93055,
  		w: 100.21056,
  		om: 65.97484,
  		i: 3.17009,
  		e: 0.6615963,
  		a: 1.6741353
  	},
  	{
  		H: 19.41,
  		desig: "2001 TX44",
  		epoch: 2459200.5,
  		ma: 16.06976,
  		w: 136.00584,
  		om: 57.78654,
  		i: 15.20951,
  		e: 0.5458957,
  		a: 0.8747998
  	},
  	{
  		H: 17.1,
  		desig: "2003 YG118",
  		epoch: 2459200.5,
  		ma: 291.5437,
  		w: 232.61899,
  		om: 348.19649,
  		i: 8.09018,
  		e: 0.6413712,
  		a: 2.2868193
  	},
  	{
  		H: 18.36,
  		desig: "2005 UH6",
  		epoch: 2459200.5,
  		ma: 116.1463,
  		w: 200.22339,
  		om: 19.30716,
  		i: 2.63944,
  		e: 0.6323674,
  		a: 1.0011607
  	},
  	{
  		H: 18.3,
  		desig: "2004 QT24",
  		epoch: 2459200.5,
  		ma: 66.14745,
  		w: 76.62693,
  		om: 36.11713,
  		i: 17.74573,
  		e: 0.252043,
  		a: 1.1328642
  	},
  	{
  		H: 18.4,
  		desig: "2009 KD5",
  		epoch: 2459200.5,
  		ma: 177.39459,
  		w: 294.33708,
  		om: 104.50508,
  		i: 13.4738,
  		e: 0.2614154,
  		a: 1.0461074
  	},
  	{
  		H: 21.1,
  		desig: "2000 AZ93",
  		epoch: 2459200.5,
  		ma: 333.44184,
  		w: 8.13323,
  		om: 277.37946,
  		i: 8.58892,
  		e: 0.3598556,
  		a: 0.7469965
  	},
  	{
  		H: 20.3,
  		desig: "2003 DX10",
  		epoch: 2459200.5,
  		ma: 320.21304,
  		w: 193.88616,
  		om: 61.90767,
  		i: 3.14548,
  		e: 0.4107635,
  		a: 1.3757106
  	},
  	{
  		H: 18.77,
  		desig: "2004 BW58",
  		epoch: 2459200.5,
  		ma: 261.8367,
  		w: 301.82857,
  		om: 132.63192,
  		i: 15.21269,
  		e: 0.3784903,
  		a: 1.4548982
  	},
  	{
  		H: 21.2,
  		desig: "2005 EE",
  		epoch: 2459200.5,
  		ma: 143.94092,
  		w: 284.79226,
  		om: 110.80772,
  		i: 6.17282,
  		e: 0.3277664,
  		a: 1.1290659
  	},
  	{
  		H: 18.2,
  		desig: "2000 EK26",
  		epoch: 2459200.5,
  		ma: 231.90936,
  		w: 305.54099,
  		om: 126.44455,
  		i: 15.64564,
  		e: 0.6576506,
  		a: 2.4087053
  	},
  	{
  		H: 19.72,
  		desig: "2001 AD2",
  		epoch: 2459200.5,
  		ma: 14.63016,
  		w: 111.84761,
  		om: 210.63711,
  		i: 1.64252,
  		e: 0.6599509,
  		a: 1.0401863
  	},
  	{
  		H: 17.92,
  		desig: "2001 VK5",
  		epoch: 2459200.5,
  		ma: 179.50415,
  		w: 263.92388,
  		om: 54.2366,
  		i: 19.43088,
  		e: 0.5141286,
  		a: 1.2691464
  	},
  	{
  		H: 16.02,
  		desig: "2002 JB9",
  		epoch: 2459200.5,
  		ma: 33.6444,
  		w: 277.91104,
  		om: 70.32974,
  		i: 46.75288,
  		e: 0.7846443,
  		a: 2.718071
  	},
  	{
  		H: 18.89,
  		desig: "2003 CA",
  		epoch: 2459200.5,
  		ma: 53.9284,
  		w: 234.77175,
  		om: 126.19871,
  		i: 21.15276,
  		e: 0.7195931,
  		a: 1.3793067
  	},
  	{
  		H: 18.3,
  		desig: "2003 FC5",
  		epoch: 2459200.5,
  		ma: 264.87981,
  		w: 271.22289,
  		om: 188.78998,
  		i: 5.82656,
  		e: 0.6084437,
  		a: 1.9177682
  	},
  	{
  		H: 18.4,
  		desig: "1996 RG3",
  		epoch: 2459200.5,
  		ma: 170.02175,
  		w: 300.19228,
  		om: 158.13399,
  		i: 3.57273,
  		e: 0.6045068,
  		a: 2.0007081
  	},
  	{
  		H: 19,
  		desig: "2000 RS11",
  		epoch: 2459200.5,
  		ma: 273.51603,
  		w: 301.70315,
  		om: 172.16946,
  		i: 17.0993,
  		e: 0.3206493,
  		a: 1.2801551
  	},
  	{
  		H: 18.7,
  		desig: "2002 AJ129",
  		epoch: 2459200.5,
  		ma: 305.42345,
  		w: 210.99756,
  		om: 138.0465,
  		i: 15.45802,
  		e: 0.9149822,
  		a: 1.3704031
  	},
  	{
  		H: 20,
  		desig: "2005 WK4",
  		epoch: 2459200.5,
  		ma: 165.12037,
  		w: 74.09627,
  		om: 138.12834,
  		i: 9.84361,
  		e: 0.2373349,
  		a: 1.0106183
  	},
  	{
  		H: 19.2,
  		desig: "2005 YP180",
  		epoch: 2459200.5,
  		ma: 138.28878,
  		w: 92.38537,
  		om: 288.95686,
  		i: 4.11134,
  		e: 0.6169274,
  		a: 1.372039
  	},
  	{
  		H: 19.7,
  		desig: "1998 KM3",
  		epoch: 2459200.5,
  		ma: 119.07138,
  		w: 85.21902,
  		om: 263.11338,
  		i: 4.6603,
  		e: 0.6110217,
  		a: 1.6714152
  	},
  	{
  		H: 19,
  		desig: "2000 JE5",
  		epoch: 2459200.5,
  		ma: 280.5025,
  		w: 285.16865,
  		om: 41.23639,
  		i: 50.73921,
  		e: 0.4006641,
  		a: 1.2381753
  	},
  	{
  		H: 20.7,
  		desig: "2008 JV19",
  		epoch: 2459200.5,
  		ma: 60.68976,
  		w: 310.60972,
  		om: 141.96701,
  		i: 7.22599,
  		e: 0.2485653,
  		a: 0.9855218
  	},
  	{
  		H: 17.2,
  		desig: "1998 QE2",
  		epoch: 2459200.5,
  		ma: 3.04983,
  		w: 345.71331,
  		om: 250.12693,
  		i: 12.85847,
  		e: 0.5715375,
  		a: 2.4234798
  	},
  	{
  		H: 21.14,
  		desig: "2001 TX1",
  		epoch: 2459200.5,
  		ma: 239.64813,
  		w: 354.1249,
  		om: 159.18526,
  		i: 2.80124,
  		e: 0.4826625,
  		a: 1.0472433
  	},
  	{
  		H: 18.5,
  		desig: "2005 AN26",
  		epoch: 2459200.5,
  		ma: 208.28411,
  		w: 208.44708,
  		om: 175.79416,
  		i: 4.92002,
  		e: 0.6378919,
  		a: 2.3188719
  	},
  	{
  		H: 17.5,
  		desig: "2005 VC",
  		epoch: 2459200.5,
  		ma: 289.2102,
  		w: 290.20373,
  		om: 227.97233,
  		i: 4.48327,
  		e: 0.5947842,
  		a: 2.0827618
  	},
  	{
  		H: 19.4,
  		desig: "2006 SU49",
  		epoch: 2459200.5,
  		ma: 51.8256,
  		w: 198.97589,
  		om: 303.12045,
  		i: 2.51919,
  		e: 0.3121725,
  		a: 1.4123925
  	},
  	{
  		H: 17.09,
  		desig: "2008 CM",
  		epoch: 2459200.5,
  		ma: 212.71083,
  		w: 130.66862,
  		om: 279.56227,
  		i: 36.01444,
  		e: 0.4080784,
  		a: 1.5658763
  	},
  	{
  		H: 16.8,
  		desig: "1996 SK",
  		epoch: 2459200.5,
  		ma: 112.449,
  		w: 285.02723,
  		om: 196.83472,
  		i: 1.96177,
  		e: 0.7937059,
  		a: 2.4392972
  	},
  	{
  		H: 19.3,
  		desig: "1998 SC15",
  		epoch: 2459200.5,
  		ma: 96.89869,
  		w: 277.46815,
  		om: 198.71533,
  		i: 16.08016,
  		e: 0.4146526,
  		a: 1.2730174
  	},
  	{
  		H: 18.6,
  		desig: "2000 SP43",
  		epoch: 2459200.5,
  		ma: 342.94909,
  		w: 224.44087,
  		om: 350.56058,
  		i: 10.34565,
  		e: 0.4667741,
  		a: 0.8115335
  	},
  	{
  		H: 19.6,
  		desig: "1990 UA",
  		epoch: 2459200.5,
  		ma: 151.79557,
  		w: 202.58692,
  		om: 104.26546,
  		i: 0.92845,
  		e: 0.5261905,
  		a: 1.6421339
  	},
  	{
  		H: 19.9,
  		desig: "2001 TD45",
  		epoch: 2459200.5,
  		ma: 59.54243,
  		w: 212.45442,
  		om: 30.2636,
  		i: 25.38907,
  		e: 0.7774509,
  		a: 0.7967546
  	},
  	{
  		H: 19.01,
  		desig: "2003 FH",
  		epoch: 2459200.5,
  		ma: 242.19545,
  		w: 274.37007,
  		om: 24.13633,
  		i: 25.79752,
  		e: 0.5407069,
  		a: 1.3890416
  	},
  	{
  		H: 20.5,
  		desig: "2005 BY2",
  		epoch: 2459200.5,
  		ma: 355.30884,
  		w: 130.21419,
  		om: 74.47167,
  		i: 7.29076,
  		e: 0.3304387,
  		a: 1.2689259
  	},
  	{
  		H: 18.9,
  		desig: "2006 SX217",
  		epoch: 2459200.5,
  		ma: 350.08637,
  		w: 176.1715,
  		om: 32.62303,
  		i: 21.04098,
  		e: 0.3099956,
  		a: 1.4116179
  	},
  	{
  		H: 21.5,
  		desig: "1993 VD",
  		epoch: 2459200.5,
  		ma: 122.69051,
  		w: 254.22372,
  		om: 2.19458,
  		i: 2.06738,
  		e: 0.5514549,
  		a: 0.8758353
  	},
  	{
  		H: 18,
  		desig: "2001 XP1",
  		epoch: 2459200.5,
  		ma: 294.64024,
  		w: 246.35282,
  		om: 268.05195,
  		i: 39.20808,
  		e: 0.7524708,
  		a: 2.8913113
  	},
  	{
  		H: 18.57,
  		desig: "2002 XP90",
  		epoch: 2459200.5,
  		ma: 16.48814,
  		w: 324.15106,
  		om: 78.58174,
  		i: 23.10585,
  		e: 0.585675,
  		a: 2.0799067
  	},
  	{
  		H: 16.44,
  		desig: "2005 GO21",
  		epoch: 2459200.5,
  		ma: 213.45437,
  		w: 156.6394,
  		om: 272.68859,
  		i: 24.92801,
  		e: 0.3399459,
  		a: 0.7532304
  	},
  	{
  		H: 21.9,
  		desig: "2005 YU55",
  		epoch: 2459200.5,
  		ma: 160.55098,
  		w: 273.58468,
  		om: 35.91999,
  		i: 0.34025,
  		e: 0.4305589,
  		a: 1.1571139
  	},
  	{
  		H: 19.85,
  		desig: "2000 CH59",
  		epoch: 2459200.5,
  		ma: 164.3771,
  		w: 109.5466,
  		om: 213.62261,
  		i: 3.25905,
  		e: 0.4232496,
  		a: 0.86278
  	},
  	{
  		H: 17.7,
  		desig: "2001 QL142",
  		epoch: 2459200.5,
  		ma: 63.91934,
  		w: 72.12583,
  		om: 165.57781,
  		i: 26.60652,
  		e: 0.4990069,
  		a: 1.0493897
  	},
  	{
  		H: 17.11,
  		desig: "2004 BB103",
  		epoch: 2459200.5,
  		ma: 168.31879,
  		w: 71.46417,
  		om: 271.11141,
  		i: 55.86448,
  		e: 0.6221272,
  		a: 1.9074103
  	},
  	{
  		H: 18.2,
  		desig: "2004 DC",
  		epoch: 2459200.5,
  		ma: 355.46751,
  		w: 156.25902,
  		om: 74.94208,
  		i: 19.45054,
  		e: 0.3994441,
  		a: 1.6336985
  	},
  	{
  		H: 19.4,
  		desig: "2007 TA19",
  		epoch: 2459200.5,
  		ma: 135.4733,
  		w: 58.05114,
  		om: 181.19646,
  		i: 22.62786,
  		e: 0.5094574,
  		a: 0.9540445
  	},
  	{
  		H: 17.4,
  		name: "Dryope",
  		desig: "2005 CZ36",
  		epoch: 2459200.5,
  		ma: 220.0249,
  		w: 139.38089,
  		om: 116.80811,
  		i: 16.14636,
  		e: 0.574776,
  		a: 2.2380665
  	},
  	{
  		H: 18.5,
  		desig: "2005 NJ1",
  		epoch: 2459200.5,
  		ma: 322.74341,
  		w: 82.49271,
  		om: 316.25194,
  		i: 6.46551,
  		e: 0.6506807,
  		a: 2.1332207
  	},
  	{
  		H: 19.8,
  		desig: "2002 DJ5",
  		epoch: 2459200.5,
  		ma: 48.74939,
  		w: 296.14645,
  		om: 347.93385,
  		i: 6.43895,
  		e: 0.5677626,
  		a: 1.4001374
  	},
  	{
  		H: 21.7,
  		name: "Akhenaten",
  		desig: "1998 HE3",
  		epoch: 2459200.5,
  		ma: 70.64937,
  		w: 309.34155,
  		om: 53.45714,
  		i: 3.37843,
  		e: 0.4402126,
  		a: 0.8788931
  	},
  	{
  		H: 19.4,
  		desig: "2002 OA22",
  		epoch: 2459200.5,
  		ma: 250.57825,
  		w: 318.65713,
  		om: 174.09167,
  		i: 6.88387,
  		e: 0.2431879,
  		a: 0.935379
  	},
  	{
  		H: 17.6,
  		desig: "2003 KU2",
  		epoch: 2459200.5,
  		ma: 319.15578,
  		w: 246.7105,
  		om: 105.27423,
  		i: 5.40257,
  		e: 0.677542,
  		a: 2.6870169
  	},
  	{
  		H: 18.7,
  		desig: "2006 KV86",
  		epoch: 2459200.5,
  		ma: 90.96025,
  		w: 153.83126,
  		om: 220.05498,
  		i: 37.07217,
  		e: 0.3739082,
  		a: 1.5432648
  	},
  	{
  		H: 20.44,
  		desig: "2004 CL",
  		epoch: 2459200.5,
  		ma: 255.71444,
  		w: 274.63956,
  		om: 109.41956,
  		i: 13.30592,
  		e: 0.5361611,
  		a: 1.28463
  	},
  	{
  		H: 19.7,
  		desig: "2008 AF4",
  		epoch: 2459200.5,
  		ma: 15.58131,
  		w: 293.44555,
  		om: 109.34835,
  		i: 8.9216,
  		e: 0.4106494,
  		a: 1.3827291
  	},
  	{
  		H: 20,
  		desig: "2005 PO",
  		epoch: 2459200.5,
  		ma: 81.75753,
  		w: 249.4787,
  		om: 300.5233,
  		i: 12.51461,
  		e: 0.3730278,
  		a: 1.2522379
  	},
  	{
  		H: 20.13,
  		desig: "2006 KM103",
  		epoch: 2459200.5,
  		ma: 56.52739,
  		w: 196.98381,
  		om: 169.46469,
  		i: 11.68038,
  		e: 0.376528,
  		a: 1.5734559
  	},
  	{
  		H: 19.7,
  		desig: "1998 QC1",
  		epoch: 2459200.5,
  		ma: 327.82891,
  		w: 115.42357,
  		om: 308.37828,
  		i: 9.64946,
  		e: 0.5896506,
  		a: 1.9839495
  	},
  	{
  		H: 19.3,
  		desig: "2001 SG262",
  		epoch: 2459200.5,
  		ma: 333.37353,
  		w: 100.28976,
  		om: 359.04259,
  		i: 4.82031,
  		e: 0.5828774,
  		a: 1.9614614
  	},
  	{
  		H: 20,
  		desig: "2008 EV5",
  		epoch: 2459200.5,
  		ma: 34.38206,
  		w: 234.937,
  		om: 93.3744,
  		i: 7.43717,
  		e: 0.0833663,
  		a: 0.958146
  	},
  	{
  		H: 20.1,
  		desig: "2008 YU32",
  		epoch: 2459200.5,
  		ma: 138.70869,
  		w: 83.92664,
  		om: 232.61499,
  		i: 3.41008,
  		e: 0.5956074,
  		a: 1.537288
  	},
  	{
  		H: 18.8,
  		desig: "1998 HJ3",
  		epoch: 2459200.5,
  		ma: 4.54694,
  		w: 94.12613,
  		om: 223.62354,
  		i: 6.56477,
  		e: 0.7465243,
  		a: 1.9856986
  	},
  	{
  		H: 21.5,
  		desig: "2005 AY28",
  		epoch: 2459200.5,
  		ma: 76.29212,
  		w: 155.92587,
  		om: 117.51434,
  		i: 5.88453,
  		e: 0.5701746,
  		a: 0.8725836
  	},
  	{
  		H: 18,
  		desig: "2005 BC",
  		epoch: 2459200.5,
  		ma: 140.39272,
  		w: 84.20952,
  		om: 292.46604,
  		i: 30.12432,
  		e: 0.2780208,
  		a: 1.1896816
  	},
  	{
  		H: 17.28,
  		desig: "2005 JF21",
  		epoch: 2459200.5,
  		ma: 214.58771,
  		w: 206.09706,
  		om: 132.19807,
  		i: 10.84855,
  		e: 0.5355274,
  		a: 2.2255596
  	},
  	{
  		H: 18.3,
  		desig: "2006 YT13",
  		epoch: 2459200.5,
  		ma: 18.06752,
  		w: 105.4851,
  		om: 116.72013,
  		i: 38.24543,
  		e: 0.425721,
  		a: 1.323038
  	},
  	{
  		H: 18.6,
  		desig: "2008 QY",
  		epoch: 2459200.5,
  		ma: 324.56223,
  		w: 254.8339,
  		om: 1.95253,
  		i: 13.57696,
  		e: 0.5814542,
  		a: 1.1672895
  	},
  	{
  		H: 21.14,
  		desig: "2000 EA14",
  		epoch: 2459200.5,
  		ma: 310.6954,
  		w: 206.05342,
  		om: 203.83727,
  		i: 3.55529,
  		e: 0.2024808,
  		a: 1.1169967
  	},
  	{
  		H: 20.8,
  		desig: "2002 AW",
  		epoch: 2459200.5,
  		ma: 237.7085,
  		w: 119.23468,
  		om: 162.10297,
  		i: 0.57443,
  		e: 0.256349,
  		a: 1.0708811
  	},
  	{
  		H: 19.5,
  		desig: "2007 AG12",
  		epoch: 2459200.5,
  		ma: 258.39267,
  		w: 68.18263,
  		om: 305.43824,
  		i: 41.98535,
  		e: 0.6564814,
  		a: 2.0898662
  	},
  	{
  		H: 20.7,
  		desig: "2002 DU3",
  		epoch: 2459200.5,
  		ma: 56.64289,
  		w: 245.54691,
  		om: 0.67938,
  		i: 8.70084,
  		e: 0.2382061,
  		a: 1.1453148
  	},
  	{
  		H: 18.9,
  		desig: "1998 QA1",
  		epoch: 2459200.5,
  		ma: 131.731,
  		w: 333.00539,
  		om: 299.00787,
  		i: 8.1727,
  		e: 0.5327052,
  		a: 2.1037144
  	},
  	{
  		H: 19,
  		desig: "1999 YG3",
  		epoch: 2459200.5,
  		ma: 90.92297,
  		w: 250.2266,
  		om: 293.27807,
  		i: 34.51892,
  		e: 0.3294742,
  		a: 1.2847728
  	},
  	{
  		H: 19.45,
  		desig: "1999 YR14",
  		epoch: 2459200.5,
  		ma: 355.59101,
  		w: 9.64604,
  		om: 2.99214,
  		i: 3.72667,
  		e: 0.3999769,
  		a: 1.6513161
  	},
  	{
  		H: 19.41,
  		desig: "2000 EJ26",
  		epoch: 2459200.5,
  		ma: 218.93318,
  		w: 285.90611,
  		om: 10.49056,
  		i: 9.22738,
  		e: 0.614802,
  		a: 1.3827789
  	},
  	{
  		H: 19.3,
  		desig: "2004 BL86",
  		epoch: 2459200.5,
  		ma: 91.53961,
  		w: 311.51885,
  		om: 126.66647,
  		i: 23.78482,
  		e: 0.4025998,
  		a: 1.5022273
  	},
  	{
  		H: 19.5,
  		desig: "2004 XL35",
  		epoch: 2459200.5,
  		ma: 56.34156,
  		w: 356.2057,
  		om: 73.76665,
  		i: 27.2986,
  		e: 0.2784352,
  		a: 1.3554908
  	},
  	{
  		H: 20.32,
  		desig: "2005 EY95",
  		epoch: 2459200.5,
  		ma: 54.29276,
  		w: 342.08571,
  		om: 72.91233,
  		i: 3.16947,
  		e: 0.5382618,
  		a: 1.0835616
  	},
  	{
  		H: 19.1,
  		desig: "2007 NS4",
  		epoch: 2459200.5,
  		ma: 35.67402,
  		w: 47.57224,
  		om: 10.96803,
  		i: 5.78291,
  		e: 0.5968275,
  		a: 1.8749307
  	},
  	{
  		H: 18.9,
  		desig: "2008 CR118",
  		epoch: 2459200.5,
  		ma: 347.83605,
  		w: 157.05183,
  		om: 121.53829,
  		i: 3.92356,
  		e: 0.5111584,
  		a: 1.8400138
  	},
  	{
  		H: 20,
  		desig: "2009 CN5",
  		epoch: 2459200.5,
  		ma: 99.23158,
  		w: 53.23943,
  		om: 349.71759,
  		i: 11.90627,
  		e: 0.4652941,
  		a: 1.5449814
  	},
  	{
  		H: 18.4,
  		desig: "2009 YG",
  		epoch: 2459200.5,
  		ma: 159.1017,
  		w: 67.47497,
  		om: 138.86676,
  		i: 3.38812,
  		e: 0.698012,
  		a: 2.1459146
  	},
  	{
  		H: 20.6,
  		desig: "1988 TA",
  		epoch: 2459200.5,
  		ma: 327.46027,
  		w: 105.22415,
  		om: 194.69989,
  		i: 2.53156,
  		e: 0.4785763,
  		a: 1.5396417
  	},
  	{
  		H: 19.11,
  		desig: "2007 YV29",
  		epoch: 2459200.5,
  		ma: 64.35319,
  		w: 321.84281,
  		om: 59.31554,
  		i: 21.8808,
  		e: 0.3566965,
  		a: 1.373307
  	},
  	{
  		H: 19.41,
  		desig: "1998 OK1",
  		epoch: 2459200.5,
  		ma: 7.25002,
  		w: 298.57803,
  		om: 109.67374,
  		i: 13.99368,
  		e: 0.4290043,
  		a: 1.3556944
  	},
  	{
  		H: 19.5,
  		desig: "1998 ST27",
  		epoch: 2459200.5,
  		ma: 216.84778,
  		w: 322.46977,
  		om: 197.54212,
  		i: 21.05999,
  		e: 0.5299845,
  		a: 0.8193632
  	},
  	{
  		H: 19.09,
  		desig: "2000 CO101",
  		epoch: 2459200.5,
  		ma: 329.67319,
  		w: 64.95605,
  		om: 353.0407,
  		i: 15.32222,
  		e: 0.090037,
  		a: 1.0764075
  	},
  	{
  		H: 19.9,
  		desig: "2000 RD53",
  		epoch: 2459200.5,
  		ma: 166.7106,
  		w: 192.78412,
  		om: 175.95242,
  		i: 9.28223,
  		e: 0.4277723,
  		a: 1.7867442
  	},
  	{
  		H: 20.14,
  		desig: "2001 GQ2",
  		epoch: 2459200.5,
  		ma: 202.13675,
  		w: 280.29593,
  		om: 37.12821,
  		i: 21.82125,
  		e: 0.5031198,
  		a: 1.2144327
  	},
  	{
  		H: 21.37,
  		desig: "2002 NV16",
  		epoch: 2459200.5,
  		ma: 89.84405,
  		w: 179.24512,
  		om: 183.31778,
  		i: 3.50157,
  		e: 0.2197546,
  		a: 1.2373027
  	},
  	{
  		H: 18.4,
  		desig: "2003 UC20",
  		epoch: 2459200.5,
  		ma: 68.34753,
  		w: 59.7034,
  		om: 188.39916,
  		i: 3.8042,
  		e: 0.3368296,
  		a: 0.7812313
  	},
  	{
  		H: 21.03,
  		desig: "2004 FG11",
  		epoch: 2459200.5,
  		ma: 99.30454,
  		w: 228.48534,
  		om: 83.76355,
  		i: 3.12747,
  		e: 0.7238421,
  		a: 1.5872164
  	},
  	{
  		H: 18.8,
  		desig: "2004 XN50",
  		epoch: 2459200.5,
  		ma: 142.41569,
  		w: 253.36717,
  		om: 62.4388,
  		i: 3.31306,
  		e: 0.7785081,
  		a: 1.6816202
  	},
  	{
  		H: 17.77,
  		desig: "2005 JE46",
  		epoch: 2459200.5,
  		ma: 285.0482,
  		w: 114.71384,
  		om: 238.37008,
  		i: 8.27016,
  		e: 0.5523435,
  		a: 1.9030337
  	},
  	{
  		H: 19.22,
  		desig: "2005 PY16",
  		epoch: 2459200.5,
  		ma: 190.5579,
  		w: 193.48622,
  		om: 159.31226,
  		i: 6.41564,
  		e: 0.5251911,
  		a: 1.9755332
  	},
  	{
  		H: 20.2,
  		desig: "2006 CJ",
  		epoch: 2459200.5,
  		ma: 69.16919,
  		w: 29.64238,
  		om: 303.24504,
  		i: 10.23223,
  		e: 0.7549041,
  		a: 0.6765276
  	},
  	{
  		H: 20.2,
  		desig: "2008 OX2",
  		epoch: 2459200.5,
  		ma: 86.34919,
  		w: 251.94231,
  		om: 220.21132,
  		i: 6.64955,
  		e: 0.6020817,
  		a: 1.0475454
  	},
  	{
  		H: 18.1,
  		desig: "2009 AV",
  		epoch: 2459200.5,
  		ma: 199.25995,
  		w: 322.10101,
  		om: 150.73986,
  		i: 45.86718,
  		e: 0.0739122,
  		a: 1.0297478
  	},
  	{
  		H: 21.9,
  		desig: "2010 KX7",
  		epoch: 2459200.5,
  		ma: 9.75007,
  		w: 61.89535,
  		om: 46.47303,
  		i: 21.49301,
  		e: 0.1709132,
  		a: 0.9894622
  	},
  	{
  		H: 20.14,
  		desig: "2004 LJ",
  		epoch: 2459200.5,
  		ma: 273.89325,
  		w: 256.08928,
  		om: 246.72945,
  		i: 18.2829,
  		e: 0.4615818,
  		a: 1.0867359
  	},
  	{
  		H: 17.6,
  		desig: "2004 TB18",
  		epoch: 2459200.5,
  		ma: 166.22186,
  		w: 13.11091,
  		om: 121.00713,
  		i: 13.2081,
  		e: 0.4504065,
  		a: 1.8156765
  	},
  	{
  		H: 20,
  		desig: "2007 MK13",
  		epoch: 2459200.5,
  		ma: 294.79408,
  		w: 259.93468,
  		om: 95.09144,
  		i: 19.88124,
  		e: 0.1397935,
  		a: 1.0245798
  	},
  	{
  		H: 21.8,
  		desig: "2011 AG5",
  		epoch: 2459200.5,
  		ma: 247.75728,
  		w: 53.54327,
  		om: 135.65975,
  		i: 3.68249,
  		e: 0.390306,
  		a: 1.4307832
  	},
  	{
  		H: 20.4,
  		desig: "2001 KO2",
  		epoch: 2459200.5,
  		ma: 348.37898,
  		w: 327.861,
  		om: 243.04293,
  		i: 12.23442,
  		e: 0.6117321,
  		a: 2.4925917
  	},
  	{
  		H: 19.9,
  		desig: "2004 FE5",
  		epoch: 2459200.5,
  		ma: 64.78118,
  		w: 243.44923,
  		om: 189.41286,
  		i: 18.30255,
  		e: 0.6003874,
  		a: 1.2451306
  	},
  	{
  		H: 21.3,
  		desig: "2008 DK5",
  		epoch: 2459200.5,
  		ma: 245.46183,
  		w: 80.96548,
  		om: 345.66055,
  		i: 4.26911,
  		e: 0.6149615,
  		a: 1.5546858
  	},
  	{
  		H: 16.37,
  		desig: "2009 MS",
  		epoch: 2459200.5,
  		ma: 143.48491,
  		w: 219.52847,
  		om: 252.08427,
  		i: 52.38787,
  		e: 0.5696526,
  		a: 2.0050673
  	},
  	{
  		H: 21,
  		desig: "2007 CN26",
  		epoch: 2459200.5,
  		ma: 12.65258,
  		w: 135.66725,
  		om: 159.29151,
  		i: 7.584,
  		e: 0.2692313,
  		a: 1.292519
  	},
  	{
  		H: 19.5,
  		desig: "2011 SD173",
  		epoch: 2459200.5,
  		ma: 193.31051,
  		w: 59.47181,
  		om: 203.1418,
  		i: 4.38816,
  		e: 0.4974497,
  		a: 1.6526809
  	},
  	{
  		H: 17.1,
  		desig: "2004 HW",
  		epoch: 2459200.5,
  		ma: 270.96745,
  		w: 62.86744,
  		om: 219.85755,
  		i: 0.83011,
  		e: 0.6346114,
  		a: 2.6946277
  	},
  	{
  		H: 18.8,
  		desig: "2004 UL",
  		epoch: 2459200.5,
  		ma: 70.86275,
  		w: 149.56496,
  		om: 39.57884,
  		i: 23.77807,
  		e: 0.9266257,
  		a: 1.2663694
  	},
  	{
  		H: 16.8,
  		desig: "2006 VV2",
  		epoch: 2459200.5,
  		ma: 265.75318,
  		w: 145.08701,
  		om: 9.81636,
  		i: 23.73014,
  		e: 0.6055945,
  		a: 2.3860228
  	},
  	{
  		H: 20.01,
  		desig: "2006 VQ13",
  		epoch: 2459200.5,
  		ma: 134.20591,
  		w: 73.80789,
  		om: 233.70063,
  		i: 16.69711,
  		e: 0.4458231,
  		a: 1.0996897
  	},
  	{
  		H: 20.7,
  		desig: "2007 PF6",
  		epoch: 2459200.5,
  		ma: 67.03614,
  		w: 251.21922,
  		om: 316.37105,
  		i: 25.60288,
  		e: 0.4163361,
  		a: 1.2985144
  	},
  	{
  		H: 18.4,
  		desig: "2007 TD71",
  		epoch: 2459200.5,
  		ma: 82.22886,
  		w: 220.74867,
  		om: 49.58462,
  		i: 49.75382,
  		e: 0.2797762,
  		a: 1.2861622
  	},
  	{
  		H: 19.5,
  		desig: "2002 WQ4",
  		epoch: 2459200.5,
  		ma: 177.12871,
  		w: 244.49785,
  		om: 266.99954,
  		i: 3.93797,
  		e: 0.555863,
  		a: 1.9589084
  	},
  	{
  		H: 17.04,
  		desig: "2005 XJ8",
  		epoch: 2459200.5,
  		ma: 183.19571,
  		w: 67.31823,
  		om: 115.94821,
  		i: 23.57756,
  		e: 0.6213603,
  		a: 1.9301715
  	},
  	{
  		H: 19.59,
  		desig: "2006 WX1",
  		epoch: 2459200.5,
  		ma: 181.98316,
  		w: 290.93669,
  		om: 327.99117,
  		i: 11.64373,
  		e: 0.30023,
  		a: 0.9165548
  	},
  	{
  		H: 19.3,
  		desig: "2007 LD",
  		epoch: 2459200.5,
  		ma: 9.37746,
  		w: 316.86515,
  		om: 226.24515,
  		i: 16.49345,
  		e: 0.4390757,
  		a: 1.7262608
  	},
  	{
  		H: 19.77,
  		desig: "2004 XN14",
  		epoch: 2459200.5,
  		ma: 170.28477,
  		w: 115.72836,
  		om: 120.85827,
  		i: 10.74377,
  		e: 0.2664426,
  		a: 0.9312924
  	},
  	{
  		H: 18.79,
  		desig: "2006 SU131",
  		epoch: 2459200.5,
  		ma: 152.98378,
  		w: 167.74076,
  		om: 107.39826,
  		i: 9.6598,
  		e: 0.3952802,
  		a: 1.727025
  	},
  	{
  		H: 17.83,
  		desig: "2010 CL19",
  		epoch: 2459200.5,
  		ma: 271.01556,
  		w: 76.76984,
  		om: 243.81965,
  		i: 7.31294,
  		e: 0.6457615,
  		a: 1.5428201
  	},
  	{
  		H: 16.46,
  		desig: "1990 SM",
  		epoch: 2459200.5,
  		ma: 350.13145,
  		w: 107.71049,
  		om: 136.21632,
  		i: 11.61237,
  		e: 0.7638631,
  		a: 2.1058854
  	},
  	{
  		H: 20.4,
  		desig: "1996 AJ1",
  		epoch: 2459200.5,
  		ma: 281.15038,
  		w: 238.27031,
  		om: 90.97461,
  		i: 2.53604,
  		e: 0.7815138,
  		a: 1.3096812
  	},
  	{
  		H: 20.3,
  		desig: "2003 CC",
  		epoch: 2459200.5,
  		ma: 194.55558,
  		w: 103.18306,
  		om: 136.3265,
  		i: 2.32414,
  		e: 0.3267787,
  		a: 1.5005221
  	},
  	{
  		H: 20.2,
  		desig: "2003 GY",
  		epoch: 2459200.5,
  		ma: 264.53203,
  		w: 334.16002,
  		om: 321.8076,
  		i: 4.67447,
  		e: 0.3172018,
  		a: 1.3797137
  	},
  	{
  		H: 19.3,
  		desig: "2003 XB22",
  		epoch: 2459200.5,
  		ma: 346.75599,
  		w: 118.26963,
  		om: 108.7959,
  		i: 29.95332,
  		e: 0.3933273,
  		a: 1.4054365
  	},
  	{
  		H: 17.6,
  		desig: "1994 AW1",
  		epoch: 2459200.5,
  		ma: 207.50002,
  		w: 37.02571,
  		om: 290.36378,
  		i: 24.09691,
  		e: 0.07578,
  		a: 1.1052838
  	},
  	{
  		H: 19.4,
  		desig: "2001 EB18",
  		epoch: 2459200.5,
  		ma: 34.48814,
  		w: 101.93699,
  		om: 155.47283,
  		i: 50.06437,
  		e: 0.183693,
  		a: 1.0529422
  	},
  	{
  		H: 16.58,
  		desig: "2002 LV",
  		epoch: 2459200.5,
  		ma: 68.80141,
  		w: 224.17896,
  		om: 132.17779,
  		i: 29.53872,
  		e: 0.6049987,
  		a: 2.3154267
  	},
  	{
  		H: 19,
  		desig: "2005 EJ225",
  		epoch: 2459200.5,
  		ma: 332.04472,
  		w: 290.59972,
  		om: 342.10362,
  		i: 8.86053,
  		e: 0.5731072,
  		a: 1.7064104
  	},
  	{
  		H: 20,
  		desig: "2008 XM",
  		epoch: 2459200.5,
  		ma: 359.90093,
  		w: 27.38443,
  		om: 240.61468,
  		i: 5.44544,
  		e: 0.9091517,
  		a: 1.2222531
  	},
  	{
  		H: 18.07,
  		desig: "2010 LR33",
  		epoch: 2459200.5,
  		ma: 262.1477,
  		w: 333.18811,
  		om: 352.09778,
  		i: 5.83425,
  		e: 0.4625904,
  		a: 1.6920521
  	},
  	{
  		H: 18.4,
  		desig: "1998 KN3",
  		epoch: 2459200.5,
  		ma: 248.2715,
  		w: 71.09183,
  		om: 313.37949,
  		i: 2.29083,
  		e: 0.8733419,
  		a: 1.5418366
  	},
  	{
  		H: 20.4,
  		desig: "2002 SZ",
  		epoch: 2459200.5,
  		ma: 168.95093,
  		w: 276.55923,
  		om: 346.85857,
  		i: 22.89388,
  		e: 0.4333943,
  		a: 1.2972153
  	},
  	{
  		H: 20,
  		desig: "2003 MH4",
  		epoch: 2459200.5,
  		ma: 146.67935,
  		w: 323.03934,
  		om: 259.81926,
  		i: 3.88412,
  		e: 0.5137729,
  		a: 1.9632981
  	},
  	{
  		H: 18.9,
  		desig: "2006 DP14",
  		epoch: 2459200.5,
  		ma: 131.78063,
  		w: 59.30416,
  		om: 317.16288,
  		i: 11.77688,
  		e: 0.7761949,
  		a: 1.3658424
  	},
  	{
  		H: 20.46,
  		desig: "2008 TZ3",
  		epoch: 2459200.5,
  		ma: 94.17804,
  		w: 219.7205,
  		om: 44.05829,
  		i: 8.71864,
  		e: 0.3909025,
  		a: 1.5897991
  	},
  	{
  		H: 18.1,
  		desig: "2011 QD48",
  		epoch: 2459200.5,
  		ma: 218.35526,
  		w: 106.7683,
  		om: 358.81519,
  		i: 19.06619,
  		e: 0.4920794,
  		a: 1.5454646
  	},
  	{
  		H: 19.69,
  		desig: "2003 HB",
  		epoch: 2459200.5,
  		ma: 25.50317,
  		w: 306.74902,
  		om: 70.38335,
  		i: 18.10897,
  		e: 0.3804985,
  		a: 0.849637
  	},
  	{
  		H: 20.46,
  		desig: "2005 GP21",
  		epoch: 2459200.5,
  		ma: 353.61504,
  		w: 1.3799,
  		om: 9.99911,
  		i: 18.8028,
  		e: 0.2244446,
  		a: 1.3083204
  	},
  	{
  		H: 18.53,
  		desig: "2006 HZ51",
  		epoch: 2459200.5,
  		ma: 179.11876,
  		w: 193.36717,
  		om: 84.29238,
  		i: 12.41249,
  		e: 0.4500666,
  		a: 1.8974781
  	},
  	{
  		H: 19.66,
  		desig: "2010 HQ80",
  		epoch: 2459200.5,
  		ma: 96.9609,
  		w: 66.29928,
  		om: 218.48739,
  		i: 27.85026,
  		e: 0.4895005,
  		a: 1.567961
  	},
  	{
  		H: 19.4,
  		name: "Agni",
  		desig: "2010 LE15",
  		epoch: 2459200.5,
  		ma: 205.50539,
  		w: 328.62962,
  		om: 134.21648,
  		i: 13.24933,
  		e: 0.2734256,
  		a: 0.8643573
  	},
  	{
  		H: 19.1,
  		desig: "2002 PD43",
  		epoch: 2459200.5,
  		ma: 236.37987,
  		w: 210.82847,
  		om: 315.1448,
  		i: 26.0381,
  		e: 0.9560251,
  		a: 2.5081745
  	},
  	{
  		H: 18.56,
  		desig: "2005 NB7",
  		epoch: 2459200.5,
  		ma: 125.20701,
  		w: 348.18752,
  		om: 199.16599,
  		i: 12.69795,
  		e: 0.5173686,
  		a: 2.0441375
  	},
  	{
  		H: 20.2,
  		desig: "2000 KW43",
  		epoch: 2459200.5,
  		ma: 310.39952,
  		w: 63.53155,
  		om: 82.68152,
  		i: 24.27613,
  		e: 0.4781601,
  		a: 1.4523141
  	},
  	{
  		H: 18.8,
  		desig: "2002 RW25",
  		epoch: 2459200.5,
  		ma: 347.84935,
  		w: 72.12764,
  		om: 91.96681,
  		i: 1.34938,
  		e: 0.2866031,
  		a: 0.8246609
  	},
  	{
  		H: 20.86,
  		desig: "2011 HS4",
  		epoch: 2459200.5,
  		ma: 309.19588,
  		w: 314.27895,
  		om: 117.50302,
  		i: 5.4634,
  		e: 0.6800086,
  		a: 0.9383297
  	},
  	{
  		H: 18.04,
  		desig: "2003 QC10",
  		epoch: 2459200.5,
  		ma: 240.48011,
  		w: 120.8533,
  		om: 359.98379,
  		i: 5.04073,
  		e: 0.7315362,
  		a: 1.3735187
  	},
  	{
  		H: 20.3,
  		desig: "2005 YO180",
  		epoch: 2459200.5,
  		ma: 135.86832,
  		w: 87.7127,
  		om: 7.75272,
  		i: 5.77149,
  		e: 0.4481857,
  		a: 1.4805263
  	},
  	{
  		H: 20.3,
  		desig: "2007 AB2",
  		epoch: 2459200.5,
  		ma: 106.47901,
  		w: 280.79102,
  		om: 127.02663,
  		i: 1.46005,
  		e: 0.5452301,
  		a: 1.9177929
  	},
  	{
  		H: 20.4,
  		desig: "2000 GF2",
  		epoch: 2459200.5,
  		ma: 75.09706,
  		w: 108.0784,
  		om: 176.03367,
  		i: 9.63109,
  		e: 0.3775786,
  		a: 1.3406432
  	},
  	{
  		H: 18.11,
  		desig: "2006 QY110",
  		epoch: 2459200.5,
  		ma: 104.92296,
  		w: 221.61614,
  		om: 222.65717,
  		i: 6.40556,
  		e: 0.5743239,
  		a: 1.9238317
  	},
  	{
  		H: 20.7,
  		desig: "2008 RG1",
  		epoch: 2459200.5,
  		ma: 105.00561,
  		w: 257.38806,
  		om: 347.83211,
  		i: 13.09291,
  		e: 0.4428383,
  		a: 1.3158315
  	},
  	{
  		H: 18,
  		desig: "2009 FG19",
  		epoch: 2459200.5,
  		ma: 99.73101,
  		w: 120.37807,
  		om: 187.55562,
  		i: 54.49583,
  		e: 0.719934,
  		a: 2.9105519
  	},
  	{
  		H: 21.98,
  		desig: "2010 DF1",
  		epoch: 2459200.5,
  		ma: 82.89466,
  		w: 101.7823,
  		om: 154.87553,
  		i: 20.08627,
  		e: 0.5028405,
  		a: 1.5977884
  	},
  	{
  		H: 20.2,
  		desig: "1996 FO3",
  		epoch: 2459200.5,
  		ma: 128.10024,
  		w: 162.7045,
  		om: 333.5925,
  		i: 5.81394,
  		e: 0.2904528,
  		a: 1.4429573
  	},
  	{
  		H: 19.45,
  		desig: "2003 TL4",
  		epoch: 2459200.5,
  		ma: 258.63552,
  		w: 321.95522,
  		om: 220.01923,
  		i: 12.18721,
  		e: 0.3814061,
  		a: 0.776703
  	},
  	{
  		H: 20.3,
  		desig: "2005 UL5",
  		epoch: 2459200.5,
  		ma: 154.51008,
  		w: 127.74741,
  		om: 58.90487,
  		i: 14.31756,
  		e: 0.5697466,
  		a: 0.9362585
  	},
  	{
  		H: 19.11,
  		desig: "2007 EL88",
  		epoch: 2459200.5,
  		ma: 150.94176,
  		w: 116.14897,
  		om: 198.45573,
  		i: 30.84088,
  		e: 0.5219119,
  		a: 1.1196286
  	},
  	{
  		H: 18.6,
  		desig: "2008 OC6",
  		epoch: 2459200.5,
  		ma: 255.71803,
  		w: 295.86486,
  		om: 177.59845,
  		i: 21.84549,
  		e: 0.1992283,
  		a: 0.922945
  	},
  	{
  		H: 17.7,
  		desig: "2008 OB9",
  		epoch: 2459200.5,
  		ma: 22.22903,
  		w: 238.5889,
  		om: 202.69646,
  		i: 13.49515,
  		e: 0.7586891,
  		a: 3.206449
  	},
  	{
  		H: 21.9,
  		desig: "2011 EM51",
  		epoch: 2459200.5,
  		ma: 96.87335,
  		w: 142.24314,
  		om: 134.16823,
  		i: 1.86433,
  		e: 0.3351208,
  		a: 1.3210654
  	},
  	{
  		H: 15.89,
  		desig: "2011 UL21",
  		epoch: 2459200.5,
  		ma: 323.95435,
  		w: 284.77809,
  		om: 275.55653,
  		i: 34.85186,
  		e: 0.6528176,
  		a: 2.1227023
  	},
  	{
  		H: 19.9,
  		desig: "1998 XX2",
  		epoch: 2459200.5,
  		ma: 50.93694,
  		w: 153.02669,
  		om: 74.43177,
  		i: 6.97252,
  		e: 0.3672713,
  		a: 0.7414404
  	},
  	{
  		H: 19.3,
  		desig: "2000 GV147",
  		epoch: 2459200.5,
  		ma: 316.42281,
  		w: 216.07884,
  		om: 68.68163,
  		i: 10.5648,
  		e: 0.4566165,
  		a: 1.7462291
  	},
  	{
  		H: 19.4,
  		desig: "2002 TR190",
  		epoch: 2459200.5,
  		ma: 16.73726,
  		w: 104.74035,
  		om: 24.22866,
  		i: 26.91659,
  		e: 0.1600173,
  		a: 1.0769359
  	},
  	{
  		H: 18.59,
  		desig: "2004 LC2",
  		epoch: 2459200.5,
  		ma: 152.08833,
  		w: 290.64293,
  		om: 84.31316,
  		i: 10.98158,
  		e: 0.7345707,
  		a: 1.864692
  	},
  	{
  		H: 19.59,
  		desig: "2005 GC120",
  		epoch: 2459200.5,
  		ma: 294.92241,
  		w: 258.26814,
  		om: 67.96075,
  		i: 16.53107,
  		e: 0.4975832,
  		a: 1.1934348
  	},
  	{
  		H: 18.4,
  		desig: "2005 XL80",
  		epoch: 2459200.5,
  		ma: 175.43185,
  		w: 143.59017,
  		om: 53.3678,
  		i: 10.89473,
  		e: 0.4874259,
  		a: 1.7267717
  	},
  	{
  		H: 19.59,
  		desig: "2005 YS",
  		epoch: 2459200.5,
  		ma: 189.9712,
  		w: 327.90333,
  		om: 288.61601,
  		i: 19.59247,
  		e: 0.5503812,
  		a: 0.7110471
  	},
  	{
  		H: 20.88,
  		desig: "2006 KL21",
  		epoch: 2459200.5,
  		ma: 311.00642,
  		w: 214.21208,
  		om: 117.20936,
  		i: 9.35559,
  		e: 0.1273801,
  		a: 1.1990471
  	},
  	{
  		H: 18.41,
  		desig: "2006 WQ29",
  		epoch: 2459200.5,
  		ma: 153.618,
  		w: 136.59183,
  		om: 112.00356,
  		i: 8.07285,
  		e: 0.3935782,
  		a: 1.600961
  	},
  	{
  		H: 18.5,
  		desig: "2006 XG1",
  		epoch: 2459200.5,
  		ma: 234.1621,
  		w: 344.10015,
  		om: 38.46708,
  		i: 20.4993,
  		e: 0.5958755,
  		a: 2.4565708
  	},
  	{
  		H: 20.1,
  		desig: "2007 FA",
  		epoch: 2459200.5,
  		ma: 224.98154,
  		w: 135.42628,
  		om: 156.42077,
  		i: 16.32949,
  		e: 0.265775,
  		a: 1.2502819
  	},
  	{
  		H: 18.22,
  		desig: "2007 MB24",
  		epoch: 2459200.5,
  		ma: 111.78488,
  		w: 269.14365,
  		om: 271.14917,
  		i: 47.70568,
  		e: 0.6998885,
  		a: 1.8760499
  	},
  	{
  		H: 18.72,
  		desig: "2007 TB23",
  		epoch: 2459200.5,
  		ma: 279.82394,
  		w: 173.82227,
  		om: 40.11059,
  		i: 38.28696,
  		e: 0.1977357,
  		a: 1.2621786
  	},
  	{
  		H: 19.6,
  		desig: "2007 WV4",
  		epoch: 2459200.5,
  		ma: 9.01163,
  		w: 297.62269,
  		om: 249.89952,
  		i: 38.33131,
  		e: 0.4409339,
  		a: 1.4864464
  	},
  	{
  		H: 19.4,
  		desig: "2008 AG33",
  		epoch: 2459200.5,
  		ma: 93.94353,
  		w: 155.63317,
  		om: 38.3407,
  		i: 15.99904,
  		e: 0.3372508,
  		a: 1.4607524
  	},
  	{
  		H: 20.29,
  		desig: "2008 LV16",
  		epoch: 2459200.5,
  		ma: 28.52144,
  		w: 121.88773,
  		om: 236.53632,
  		i: 4.71233,
  		e: 0.6253928,
  		a: 2.0894399
  	},
  	{
  		H: 20.55,
  		desig: "2008 WM64",
  		epoch: 2459200.5,
  		ma: 78.073,
  		w: 256.61244,
  		om: 91.44813,
  		i: 33.52739,
  		e: 0.1064509,
  		a: 1.00546
  	},
  	{
  		H: 19.9,
  		desig: "2010 DW1",
  		epoch: 2459200.5,
  		ma: 348.82136,
  		w: 9.61174,
  		om: 157.12608,
  		i: 23.7676,
  		e: 0.2002257,
  		a: 1.2250827
  	},
  	{
  		H: 20.5,
  		desig: "2010 SO16",
  		epoch: 2459200.5,
  		ma: 270.31931,
  		w: 109.1352,
  		om: 40.36814,
  		i: 14.51601,
  		e: 0.0754206,
  		a: 1.0034285
  	},
  	{
  		H: 19.7,
  		desig: "2011 AH37",
  		epoch: 2459200.5,
  		ma: 177.10085,
  		w: 322.38481,
  		om: 102.07318,
  		i: 9.65815,
  		e: 0.6720246,
  		a: 2.5458122
  	},
  	{
  		H: 20.46,
  		desig: "2011 HF",
  		epoch: 2459200.5,
  		ma: 98.24456,
  		w: 149.64442,
  		om: 204.89344,
  		i: 10.62174,
  		e: 0.2346411,
  		a: 1.2835497
  	},
  	{
  		H: 21.5,
  		desig: "2000 AC6",
  		epoch: 2459200.5,
  		ma: 25.28435,
  		w: 188.06093,
  		om: 101.45311,
  		i: 4.69569,
  		e: 0.2864499,
  		a: 0.8532759
  	},
  	{
  		H: 18.16,
  		desig: "2000 PD3",
  		epoch: 2459200.5,
  		ma: 42.79375,
  		w: 110.17071,
  		om: 298.68557,
  		i: 7.69873,
  		e: 0.5916397,
  		a: 1.9986488
  	},
  	{
  		H: 16.76,
  		desig: "2001 WS1",
  		epoch: 2459200.5,
  		ma: 204.00168,
  		w: 5.17284,
  		om: 1.29006,
  		i: 13.24783,
  		e: 0.6181644,
  		a: 2.5894987
  	},
  	{
  		H: 20.8,
  		desig: "2005 ED318",
  		epoch: 2459200.5,
  		ma: 67.56761,
  		w: 164.2142,
  		om: 82.06237,
  		i: 2.3895,
  		e: 0.4495973,
  		a: 1.8501379
  	},
  	{
  		H: 19.7,
  		desig: "2006 BQ6",
  		epoch: 2459200.5,
  		ma: 43.82053,
  		w: 304.78031,
  		om: 307.65356,
  		i: 12.99847,
  		e: 0.4047775,
  		a: 1.4717928
  	},
  	{
  		H: 19.5,
  		desig: "2008 DG5",
  		epoch: 2459200.5,
  		ma: 265.97052,
  		w: 59.7044,
  		om: 244.03013,
  		i: 5.7068,
  		e: 0.242584,
  		a: 1.25543
  	},
  	{
  		H: 21.2,
  		desig: "2011 CP4",
  		epoch: 2459200.5,
  		ma: 1.17592,
  		w: 159.91324,
  		om: 147.99578,
  		i: 9.46192,
  		e: 0.8703295,
  		a: 0.9116754
  	},
  	{
  		H: 20,
  		desig: "2006 VC",
  		epoch: 2459200.5,
  		ma: 57.29221,
  		w: 19.20065,
  		om: 87.57692,
  		i: 12.26079,
  		e: 0.4927331,
  		a: 1.9411613
  	},
  	{
  		H: 20.05,
  		desig: "2009 SG2",
  		epoch: 2459200.5,
  		ma: 245.09992,
  		w: 252.96683,
  		om: 9.08365,
  		i: 25.97762,
  		e: 0.1701267,
  		a: 1.1209511
  	},
  	{
  		H: 19.8,
  		desig: "2011 EU29",
  		epoch: 2459200.5,
  		ma: 186.70617,
  		w: 251.2262,
  		om: 177.18762,
  		i: 2.5754,
  		e: 0.6999019,
  		a: 2.4996949
  	},
  	{
  		H: 17.5,
  		desig: "2000 OH",
  		epoch: 2459200.5,
  		ma: 151.04792,
  		w: 355.42364,
  		om: 283.78326,
  		i: 18.6831,
  		e: 0.5918231,
  		a: 2.4216903
  	},
  	{
  		H: 18.6,
  		desig: "2002 GM2",
  		epoch: 2459200.5,
  		ma: 293.20024,
  		w: 84.66694,
  		om: 339.05729,
  		i: 3.34725,
  		e: 0.8064554,
  		a: 2.201403
  	},
  	{
  		H: 17.9,
  		desig: "2005 AD13",
  		epoch: 2459200.5,
  		ma: 328.87525,
  		w: 263.57,
  		om: 102.80082,
  		i: 12.37858,
  		e: 0.7548549,
  		a: 1.9491154
  	},
  	{
  		H: 20.7,
  		desig: "1997 XR2",
  		epoch: 2459200.5,
  		ma: 295.56793,
  		w: 84.59419,
  		om: 250.68484,
  		i: 7.19196,
  		e: 0.2009157,
  		a: 1.0761772
  	},
  	{
  		H: 18.1,
  		desig: "2002 GO5",
  		epoch: 2459200.5,
  		ma: 76.01773,
  		w: 65.3325,
  		om: 22.64759,
  		i: 13.77138,
  		e: 0.7678725,
  		a: 1.8952866
  	},
  	{
  		H: 18.8,
  		desig: "2003 AD23",
  		epoch: 2459200.5,
  		ma: 218.50946,
  		w: 241.60936,
  		om: 101.52631,
  		i: 23.34527,
  		e: 0.7628343,
  		a: 1.645388
  	},
  	{
  		H: 21.3,
  		desig: "2003 HG2",
  		epoch: 2459200.5,
  		ma: 165.18189,
  		w: 225.38551,
  		om: 214.25305,
  		i: 19.77784,
  		e: 0.1346104,
  		a: 1.0622128
  	},
  	{
  		H: 18.52,
  		desig: "2004 JG6",
  		epoch: 2459200.5,
  		ma: 131.61665,
  		w: 353.00229,
  		om: 37.02033,
  		i: 18.94475,
  		e: 0.5310954,
  		a: 0.635232
  	},
  	{
  		H: 20.9,
  		desig: "2005 WB1",
  		epoch: 2459200.5,
  		ma: 272.99401,
  		w: 265.70546,
  		om: 61.42451,
  		i: 22.88238,
  		e: 0.3553935,
  		a: 1.263749
  	},
  	{
  		H: 17.5,
  		desig: "2006 BZ7",
  		epoch: 2459200.5,
  		ma: 62.43377,
  		w: 188.79136,
  		om: 262.95464,
  		i: 68.42081,
  		e: 0.3665128,
  		a: 1.4900207
  	},
  	{
  		H: 20,
  		desig: "2006 FX",
  		epoch: 2459200.5,
  		ma: 48.2785,
  		w: 299.4652,
  		om: 181.18038,
  		i: 24.6338,
  		e: 0.4384256,
  		a: 1.4948182
  	},
  	{
  		H: 17.1,
  		desig: "2007 LQ19",
  		epoch: 2459200.5,
  		ma: 72.14865,
  		w: 207.6035,
  		om: 110.87813,
  		i: 17.07458,
  		e: 0.6303743,
  		a: 2.6037434
  	},
  	{
  		H: 18.8,
  		desig: "2008 QT3",
  		epoch: 2459200.5,
  		ma: 72.52015,
  		w: 160.97204,
  		om: 271.92877,
  		i: 7.24908,
  		e: 0.5283,
  		a: 2.0117199
  	},
  	{
  		H: 20.1,
  		desig: "2010 GX62",
  		epoch: 2459200.5,
  		ma: 45.54926,
  		w: 316.16161,
  		om: 207.87354,
  		i: 21.64747,
  		e: 0.7038505,
  		a: 2.9569651
  	},
  	{
  		H: 17.9,
  		desig: "2011 SV71",
  		epoch: 2459200.5,
  		ma: 98.8876,
  		w: 190.49288,
  		om: 80.61868,
  		i: 13.42904,
  		e: 0.611095,
  		a: 2.6252731
  	},
  	{
  		H: 19.85,
  		desig: "2011 UW158",
  		epoch: 2459200.5,
  		ma: 225.32017,
  		w: 8.78366,
  		om: 285.98843,
  		i: 4.57222,
  		e: 0.3763736,
  		a: 1.6207438
  	},
  	{
  		H: 18.4,
  		desig: "2012 KY3",
  		epoch: 2459200.5,
  		ma: 149.71551,
  		w: 87.28948,
  		om: 21.54492,
  		i: 21.39156,
  		e: 0.4864452,
  		a: 1.2320618
  	},
  	{
  		H: 21,
  		desig: "1998 HD14",
  		epoch: 2459200.5,
  		ma: 74.69657,
  		w: 260.8987,
  		om: 183.77489,
  		i: 7.81395,
  		e: 0.3126371,
  		a: 0.9631079
  	},
  	{
  		H: 21.15,
  		desig: "1999 MN",
  		epoch: 2459200.5,
  		ma: 141.16018,
  		w: 9.73454,
  		om: 80.88136,
  		i: 2.02108,
  		e: 0.6654294,
  		a: 0.6738527
  	},
  	{
  		H: 19.8,
  		desig: "2001 XU30",
  		epoch: 2459200.5,
  		ma: 283.98443,
  		w: 106.56813,
  		om: 72.4705,
  		i: 8.91482,
  		e: 0.6671717,
  		a: 2.1920063
  	},
  	{
  		H: 18.65,
  		desig: "2005 GO22",
  		epoch: 2459200.5,
  		ma: 351.89061,
  		w: 19.09407,
  		om: 61.76091,
  		i: 1.56341,
  		e: 0.823088,
  		a: 1.914243
  	},
  	{
  		H: 19.3,
  		desig: "2008 EP6",
  		epoch: 2459200.5,
  		ma: 273.8354,
  		w: 130.31945,
  		om: 303.25042,
  		i: 17.72344,
  		e: 0.2931401,
  		a: 1.2091003
  	},
  	{
  		H: 20.65,
  		desig: "2009 XO",
  		epoch: 2459200.5,
  		ma: 103.04459,
  		w: 140.71625,
  		om: 27.73483,
  		i: 0.35075,
  		e: 0.542498,
  		a: 1.8596945
  	},
  	{
  		H: 21.06,
  		desig: "2010 LN14",
  		epoch: 2459200.5,
  		ma: 105.04356,
  		w: 33.48374,
  		om: 342.79316,
  		i: 1.48869,
  		e: 0.4742986,
  		a: 1.1533223
  	},
  	{
  		H: 18.7,
  		desig: "2013 NK4",
  		epoch: 2459200.5,
  		ma: 339.55809,
  		w: 50.57986,
  		om: 33.75041,
  		i: 6.52371,
  		e: 0.5498304,
  		a: 1.0230373
  	},
  	{
  		H: 19.5,
  		desig: "1999 XM141",
  		epoch: 2459200.5,
  		ma: 53.92242,
  		w: 105.71653,
  		om: 73.02111,
  		i: 21.62,
  		e: 0.3692924,
  		a: 1.2364073
  	},
  	{
  		H: 18.8,
  		desig: "2004 OB",
  		epoch: 2459200.5,
  		ma: 142.12568,
  		w: 223.32808,
  		om: 174.53529,
  		i: 3.44185,
  		e: 0.4301778,
  		a: 1.6808131
  	},
  	{
  		H: 18.6,
  		desig: "2008 WZ13",
  		epoch: 2459200.5,
  		ma: 36.60646,
  		w: 133.65786,
  		om: 51.94638,
  		i: 8.178,
  		e: 0.5605493,
  		a: 1.9974075
  	},
  	{
  		H: 21.39,
  		desig: "2010 NY65",
  		epoch: 2459200.5,
  		ma: 242.02961,
  		w: 251.78229,
  		om: 267.97881,
  		i: 11.56575,
  		e: 0.3703399,
  		a: 1.0019676
  	},
  	{
  		H: 19.21,
  		desig: "2010 PR66",
  		epoch: 2459200.5,
  		ma: 34.60049,
  		w: 319.5329,
  		om: 292.74736,
  		i: 17.58873,
  		e: 0.6870435,
  		a: 2.9280938
  	},
  	{
  		H: 19.5,
  		desig: "2011 WU95",
  		epoch: 2459200.5,
  		ma: 154.20197,
  		w: 242.37387,
  		om: 67.69962,
  		i: 6.71553,
  		e: 0.4247242,
  		a: 1.6667292
  	},
  	{
  		H: 17.98,
  		desig: "2013 WT67",
  		epoch: 2459200.5,
  		ma: 288.4654,
  		w: 99.03776,
  		om: 322.76518,
  		i: 21.47009,
  		e: 0.1921437,
  		a: 1.0349718
  	},
  	{
  		H: 22,
  		desig: "1998 FL3",
  		epoch: 2459200.5,
  		ma: 296.89455,
  		w: 121.33139,
  		om: 180.11431,
  		i: 26.38643,
  		e: 0.2477472,
  		a: 1.2598234
  	},
  	{
  		H: 19.4,
  		desig: "2001 UZ16",
  		epoch: 2459200.5,
  		ma: 89.0652,
  		w: 28.56485,
  		om: 323.13884,
  		i: 12.67689,
  		e: 0.4261973,
  		a: 1.7594504
  	},
  	{
  		H: 20.5,
  		desig: "2004 AS1",
  		epoch: 2459200.5,
  		ma: 9.09671,
  		w: 262.0858,
  		om: 322.54428,
  		i: 17.21558,
  		e: 0.1743867,
  		a: 1.0705499
  	},
  	{
  		H: 18.14,
  		desig: "2005 SE71",
  		epoch: 2459200.5,
  		ma: 215.15778,
  		w: 78.28338,
  		om: 39.11413,
  		i: 24.83178,
  		e: 0.1944231,
  		a: 1.0695452
  	},
  	{
  		H: 20.2,
  		desig: "2006 UK",
  		epoch: 2459200.5,
  		ma: 220.32048,
  		w: 252.26569,
  		om: 244.00231,
  		i: 4.74483,
  		e: 0.5391988,
  		a: 1.4940753
  	},
  	{
  		H: 20,
  		desig: "2010 DM56",
  		epoch: 2459200.5,
  		ma: 146.17667,
  		w: 48.18071,
  		om: 349.62812,
  		i: 25.60264,
  		e: 0.2924714,
  		a: 1.3058893
  	},
  	{
  		H: 20.3,
  		desig: "2013 BJ18",
  		epoch: 2459200.5,
  		ma: 50.47314,
  		w: 159.60688,
  		om: 90.84356,
  		i: 3.71068,
  		e: 0.3637738,
  		a: 1.4778337
  	},
  	{
  		H: 18.3,
  		desig: "1998 SJ70",
  		epoch: 2459200.5,
  		ma: 252.10997,
  		w: 246.98425,
  		om: 21.47357,
  		i: 7.3024,
  		e: 0.7050822,
  		a: 2.2390022
  	},
  	{
  		H: 20.3,
  		desig: "2001 VB76",
  		epoch: 2459200.5,
  		ma: 244.24522,
  		w: 248.42664,
  		om: 259.45619,
  		i: 4.23644,
  		e: 0.3485691,
  		a: 1.4585294
  	},
  	{
  		H: 19.7,
  		desig: "2007 JX2",
  		epoch: 2459200.5,
  		ma: 62.47583,
  		w: 87.76225,
  		om: 44.4378,
  		i: 4.22094,
  		e: 0.5266829,
  		a: 1.7080364
  	},
  	{
  		H: 19.6,
  		desig: "2008 DE",
  		epoch: 2459200.5,
  		ma: 219.22235,
  		w: 179.18346,
  		om: 55.94141,
  		i: 14.75891,
  		e: 0.4134896,
  		a: 1.714394
  	},
  	{
  		H: 20.9,
  		desig: "2011 BN24",
  		epoch: 2459200.5,
  		ma: 329.18132,
  		w: 61.82869,
  		om: 195.76268,
  		i: 3.93507,
  		e: 0.4120826,
  		a: 1.5441563
  	},
  	{
  		H: 19.8,
  		desig: "1998 XN2",
  		epoch: 2459200.5,
  		ma: 297.90304,
  		w: 126.91276,
  		om: 255.2531,
  		i: 1.78896,
  		e: 0.5419104,
  		a: 1.998551
  	},
  	{
  		H: 18.7,
  		desig: "2003 WD158",
  		epoch: 2459200.5,
  		ma: 287.18253,
  		w: 102.27667,
  		om: 92.26934,
  		i: 16.71565,
  		e: 0.4092748,
  		a: 1.4266001
  	},
  	{
  		H: 20.6,
  		desig: "2004 AE",
  		epoch: 2459200.5,
  		ma: 305.10344,
  		w: 193.15466,
  		om: 307.5878,
  		i: 18.73031,
  		e: 0.3328666,
  		a: 1.4315272
  	},
  	{
  		H: 18.8,
  		desig: "2004 LV3",
  		epoch: 2459200.5,
  		ma: 307.50604,
  		w: 121.32102,
  		om: 273.48477,
  		i: 35.34246,
  		e: 0.2755783,
  		a: 1.2312601
  	},
  	{
  		H: 20.5,
  		desig: "2004 QD14",
  		epoch: 2459200.5,
  		ma: 55.18573,
  		w: 109.31246,
  		om: 75.2659,
  		i: 6.24805,
  		e: 0.3378257,
  		a: 0.9417359
  	},
  	{
  		H: 18.12,
  		desig: "2008 BT18",
  		epoch: 2459200.5,
  		ma: 281.58233,
  		w: 139.35276,
  		om: 107.62382,
  		i: 8.13496,
  		e: 0.5931293,
  		a: 2.22198
  	},
  	{
  		H: 19.4,
  		desig: "2008 UD1",
  		epoch: 2459200.5,
  		ma: 54.43503,
  		w: 6.58637,
  		om: 154.21831,
  		i: 6.47682,
  		e: 0.4634488,
  		a: 1.7156605
  	},
  	{
  		H: 18,
  		desig: "2009 KC3",
  		epoch: 2459200.5,
  		ma: 351.46753,
  		w: 337.27809,
  		om: 340.07815,
  		i: 10.02353,
  		e: 0.6995555,
  		a: 3.2056878
  	},
  	{
  		H: 20.9,
  		desig: "2009 SQ104",
  		epoch: 2459200.5,
  		ma: 124.85316,
  		w: 95.63238,
  		om: 56.54188,
  		i: 4.01774,
  		e: 0.2796038,
  		a: 1.2846744
  	},
  	{
  		H: 19.2,
  		desig: "2010 TK54",
  		epoch: 2459200.5,
  		ma: 123.44699,
  		w: 222.96713,
  		om: 28.16931,
  		i: 30.8005,
  		e: 0.4951239,
  		a: 1.8403089
  	},
  	{
  		H: 21.5,
  		desig: "2011 AK5",
  		epoch: 2459200.5,
  		ma: 71.85295,
  		w: 325.68372,
  		om: 316.7956,
  		i: 5.52309,
  		e: 0.230737,
  		a: 1.1876505
  	},
  	{
  		H: 20.21,
  		desig: "1995 YR1",
  		epoch: 2459200.5,
  		ma: 72.60279,
  		w: 109.43799,
  		om: 107.04815,
  		i: 3.57015,
  		e: 0.8270632,
  		a: 1.6975676
  	},
  	{
  		H: 20,
  		desig: "2002 AC5",
  		epoch: 2459200.5,
  		ma: 59.28966,
  		w: 331.69311,
  		om: 82.40248,
  		i: 16.5487,
  		e: 0.4931592,
  		a: 1.7592347
  	},
  	{
  		H: 21.3,
  		desig: "2006 KV89",
  		epoch: 2459200.5,
  		ma: 340.6136,
  		w: 87.75635,
  		om: 71.71575,
  		i: 3.55409,
  		e: 0.2727739,
  		a: 1.1498384
  	},
  	{
  		H: 20.3,
  		desig: "2010 BB",
  		epoch: 2459200.5,
  		ma: 24.31921,
  		w: 28.96386,
  		om: 279.73908,
  		i: 10.02444,
  		e: 0.2774843,
  		a: 0.8201321
  	},
  	{
  		H: 18.6,
  		desig: "2010 XY72",
  		epoch: 2459200.5,
  		ma: 146.49754,
  		w: 307.03532,
  		om: 34.43631,
  		i: 31.48107,
  		e: 0.2287523,
  		a: 1.1332405
  	},
  	{
  		H: 18.84,
  		desig: "2011 BO24",
  		epoch: 2459200.5,
  		ma: 269.40487,
  		w: 178.61647,
  		om: 91.48691,
  		i: 20.3653,
  		e: 0.2779116,
  		a: 1.3806701
  	},
  	{
  		H: 18.57,
  		desig: "2011 JK",
  		epoch: 2459200.5,
  		ma: 221.1526,
  		w: 10.87637,
  		om: 203.34664,
  		i: 6.68663,
  		e: 0.4635862,
  		a: 1.9113633
  	},
  	{
  		H: 21.9,
  		desig: "2013 BZ45",
  		epoch: 2459200.5,
  		ma: 186.70636,
  		w: 98.67928,
  		om: 131.07242,
  		i: 11.85128,
  		e: 0.1446532,
  		a: 1.0147384
  	},
  	{
  		H: 20.14,
  		desig: "2013 BO73",
  		epoch: 2459200.5,
  		ma: 178.00467,
  		w: 298.12857,
  		om: 24.79108,
  		i: 4.54355,
  		e: 0.4183817,
  		a: 1.3315439
  	},
  	{
  		H: 20.3,
  		desig: "2013 BP73",
  		epoch: 2459200.5,
  		ma: 142.17593,
  		w: 251.84682,
  		om: 80.05406,
  		i: 6.85007,
  		e: 0.6288557,
  		a: 1.3284457
  	},
  	{
  		H: 21.1,
  		desig: "1994 UG",
  		epoch: 2459200.5,
  		ma: 122.73831,
  		w: 225.44493,
  		om: 13.61896,
  		i: 5.21421,
  		e: 0.2927313,
  		a: 1.2392212
  	},
  	{
  		H: 20.7,
  		desig: "1999 VF22",
  		epoch: 2459200.5,
  		ma: 46.01731,
  		w: 271.81327,
  		om: 3.4087,
  		i: 3.90866,
  		e: 0.7386349,
  		a: 1.312485
  	},
  	{
  		H: 20.8,
  		desig: "2000 ED14",
  		epoch: 2459200.5,
  		ma: 353.68072,
  		w: 310.11429,
  		om: 3.88249,
  		i: 13.77878,
  		e: 0.5666736,
  		a: 0.8349804
  	},
  	{
  		H: 18,
  		desig: "2002 EL6",
  		epoch: 2459200.5,
  		ma: 111.12829,
  		w: 186.54784,
  		om: 84.94464,
  		i: 9.51616,
  		e: 0.5772002,
  		a: 2.301452
  	},
  	{
  		H: 19.3,
  		desig: "2005 EK94",
  		epoch: 2459200.5,
  		ma: 209.23124,
  		w: 154.95702,
  		om: 103.05516,
  		i: 14.18497,
  		e: 0.4796615,
  		a: 1.9783524
  	},
  	{
  		H: 21,
  		desig: "2007 YV56",
  		epoch: 2459200.5,
  		ma: 226.36296,
  		w: 265.72288,
  		om: 102.40089,
  		i: 6.2444,
  		e: 0.6219937,
  		a: 1.5755137
  	},
  	{
  		H: 22,
  		desig: "2009 DZ",
  		epoch: 2459200.5,
  		ma: 281.54325,
  		w: 335.85396,
  		om: 151.47253,
  		i: 14.11654,
  		e: 0.3020358,
  		a: 1.4526574
  	},
  	{
  		H: 18.38,
  		desig: "2009 KN4",
  		epoch: 2459200.5,
  		ma: 69.3389,
  		w: 38.2962,
  		om: 308.23347,
  		i: 9.14415,
  		e: 0.5247814,
  		a: 1.9411269
  	},
  	{
  		H: 20.2,
  		desig: "2010 DA",
  		epoch: 2459200.5,
  		ma: 46.19154,
  		w: 122.23684,
  		om: 162.32511,
  		i: 20.53449,
  		e: 0.5656972,
  		a: 1.0303748
  	},
  	{
  		H: 17.6,
  		desig: "2010 EW45",
  		epoch: 2459200.5,
  		ma: 249.11137,
  		w: 135.44476,
  		om: 233.00241,
  		i: 2.11432,
  		e: 0.6687535,
  		a: 2.0642612
  	},
  	{
  		H: 19.5,
  		desig: "2011 AM12",
  		epoch: 2459200.5,
  		ma: 13.40001,
  		w: 237.69159,
  		om: 124.78654,
  		i: 38.50793,
  		e: 0.5376228,
  		a: 1.8542979
  	},
  	{
  		H: 17.4,
  		desig: "2011 AL52",
  		epoch: 2459200.5,
  		ma: 31.42096,
  		w: 171.75734,
  		om: 272.71043,
  		i: 13.42639,
  		e: 0.635366,
  		a: 2.8055277
  	},
  	{
  		H: 19.4,
  		desig: "2011 KQ12",
  		epoch: 2459200.5,
  		ma: 327.68353,
  		w: 142.8808,
  		om: 83.66074,
  		i: 19.2832,
  		e: 0.5029669,
  		a: 1.8103612
  	},
  	{
  		H: 19.7,
  		desig: "2013 MY5",
  		epoch: 2459200.5,
  		ma: 137.83706,
  		w: 279.00192,
  		om: 102.89309,
  		i: 2.99639,
  		e: 0.4529635,
  		a: 1.6618788
  	},
  	{
  		H: 20.8,
  		desig: "1999 LS7",
  		epoch: 2459200.5,
  		ma: 346.1668,
  		w: 123.7595,
  		om: 252.3013,
  		i: 13.05217,
  		e: 0.3007831,
  		a: 1.010131
  	},
  	{
  		H: 18.8,
  		desig: "2006 GY2",
  		epoch: 2459200.5,
  		ma: 262.44547,
  		w: 216.73838,
  		om: 54.30917,
  		i: 30.5575,
  		e: 0.4960148,
  		a: 1.8580611
  	},
  	{
  		H: 20.6,
  		desig: "2008 CN1",
  		epoch: 2459200.5,
  		ma: 146.8607,
  		w: 7.24498,
  		om: 331.46487,
  		i: 7.21811,
  		e: 0.3476883,
  		a: 0.7707355
  	},
  	{
  		H: 19.57,
  		desig: "2009 CB3",
  		epoch: 2459200.5,
  		ma: 332.41506,
  		w: 229.4805,
  		om: 158.74997,
  		i: 21.51011,
  		e: 0.7235614,
  		a: 1.0646887
  	},
  	{
  		H: 21.09,
  		desig: "2011 DU",
  		epoch: 2459200.5,
  		ma: 155.80879,
  		w: 120.11399,
  		om: 176.92637,
  		i: 2.94385,
  		e: 0.3178663,
  		a: 1.1716807
  	},
  	{
  		H: 18.36,
  		desig: "2013 CT82",
  		epoch: 2459200.5,
  		ma: 291.67063,
  		w: 90.41416,
  		om: 271.47466,
  		i: 1.79833,
  		e: 0.6248709,
  		a: 2.0840512
  	},
  	{
  		H: 21.4,
  		desig: "2009 EK1",
  		epoch: 2459200.5,
  		ma: 311.7194,
  		w: 21.84155,
  		om: 358.39678,
  		i: 9.12582,
  		e: 0.2290287,
  		a: 1.2408138
  	},
  	{
  		H: 20.36,
  		desig: "2009 JR5",
  		epoch: 2459200.5,
  		ma: 234.70552,
  		w: 309.92524,
  		om: 128.21047,
  		i: 3.94934,
  		e: 0.3514145,
  		a: 1.2526346
  	},
  	{
  		H: 21.71,
  		desig: "2010 FR",
  		epoch: 2459200.5,
  		ma: 31.4711,
  		w: 272.72533,
  		om: 167.28366,
  		i: 14.24339,
  		e: 0.3652959,
  		a: 1.1310781
  	},
  	{
  		H: 21,
  		desig: "2010 GA24",
  		epoch: 2459200.5,
  		ma: 167.36999,
  		w: 237.54564,
  		om: 30.72669,
  		i: 7.68741,
  		e: 0.5455058,
  		a: 2.0981578
  	},
  	{
  		H: 19.66,
  		desig: "2010 UT7",
  		epoch: 2459200.5,
  		ma: 55.67257,
  		w: 277.28838,
  		om: 65.78913,
  		i: 25.43226,
  		e: 0.6606081,
  		a: 1.5836088
  	},
  	{
  		H: 18.25,
  		desig: "2012 FZ23",
  		epoch: 2459200.5,
  		ma: 79.55842,
  		w: 357.82927,
  		om: 179.36577,
  		i: 75.37947,
  		e: 0.6080611,
  		a: 2.4896627
  	},
  	{
  		H: 18.64,
  		desig: "2014 GY48",
  		epoch: 2459200.5,
  		ma: 74.23494,
  		w: 212.80097,
  		om: 37.6312,
  		i: 39.62275,
  		e: 0.4182489,
  		a: 1.6097259
  	},
  	{
  		H: 19.93,
  		desig: "1996 AW1",
  		epoch: 2459200.5,
  		ma: 84.39412,
  		w: 229.39476,
  		om: 117.52427,
  		i: 4.76511,
  		e: 0.5184009,
  		a: 1.5352286
  	},
  	{
  		H: 19.47,
  		desig: "2000 QW7",
  		epoch: 2459200.5,
  		ma: 166.73348,
  		w: 190.94163,
  		om: 158.56679,
  		i: 4.15245,
  		e: 0.4689375,
  		a: 1.9486943
  	},
  	{
  		H: 20.5,
  		desig: "2002 LT38",
  		epoch: 2459200.5,
  		ma: 144.62821,
  		w: 162.77116,
  		om: 259.39782,
  		i: 6.19574,
  		e: 0.3137434,
  		a: 0.8450806
  	},
  	{
  		H: 20.4,
  		desig: "2003 KO2",
  		epoch: 2459200.5,
  		ma: 288.13843,
  		w: 204.03713,
  		om: 215.48053,
  		i: 23.49587,
  		e: 0.5106741,
  		a: 0.7276841
  	},
  	{
  		H: 19.2,
  		desig: "2006 JF42",
  		epoch: 2459200.5,
  		ma: 321.08798,
  		w: 17.80674,
  		om: 40.8792,
  		i: 5.95036,
  		e: 0.5816485,
  		a: 0.6718624
  	},
  	{
  		H: 21.1,
  		desig: "2012 XD112",
  		epoch: 2459200.5,
  		ma: 48.15489,
  		w: 76.69498,
  		om: 97.81235,
  		i: 3.72202,
  		e: 0.3656601,
  		a: 1.3227606
  	},
  	{
  		H: 21.9,
  		desig: "2004 KH17",
  		epoch: 2459200.5,
  		ma: 39.88142,
  		w: 340.70015,
  		om: 79.1468,
  		i: 22.12362,
  		e: 0.4982901,
  		a: 0.7120982
  	},
  	{
  		H: 20.79,
  		desig: "2010 JE87",
  		epoch: 2459200.5,
  		ma: 29.42702,
  		w: 242.31901,
  		om: 120.50586,
  		i: 16.92222,
  		e: 0.4368831,
  		a: 0.9043603
  	},
  	{
  		H: 21.7,
  		desig: "2014 KQ76",
  		epoch: 2459200.5,
  		ma: 307.38389,
  		w: 324.86982,
  		om: 127.87593,
  		i: 4.77435,
  		e: 0.4233525,
  		a: 1.0069851
  	},
  	{
  		H: 20.7,
  		desig: "2005 WC1",
  		epoch: 2459200.5,
  		ma: 349.93788,
  		w: 256.71949,
  		om: 265.01405,
  		i: 19.98462,
  		e: 0.4865977,
  		a: 1.4005114
  	},
  	{
  		H: 19.4,
  		desig: "2007 LB15",
  		epoch: 2459200.5,
  		ma: 50.21336,
  		w: 237.33674,
  		om: 262.79551,
  		i: 25.19233,
  		e: 0.3953468,
  		a: 0.9385296
  	},
  	{
  		H: 21.7,
  		desig: "2011 BT15",
  		epoch: 2459200.5,
  		ma: 288.63348,
  		w: 308.80265,
  		om: 105.3662,
  		i: 1.66143,
  		e: 0.3023373,
  		a: 1.292992
  	},
  	{
  		H: 18.24,
  		desig: "2011 BX18",
  		epoch: 2459200.5,
  		ma: 330.57996,
  		w: 303.9509,
  		om: 310.90441,
  		i: 14.55269,
  		e: 0.7294203,
  		a: 2.8775091
  	},
  	{
  		H: 19.4,
  		desig: "2011 KW15",
  		epoch: 2459200.5,
  		ma: 132.69733,
  		w: 97.48815,
  		om: 283.37607,
  		i: 23.65806,
  		e: 0.4937123,
  		a: 1.1698913
  	},
  	{
  		H: 18.54,
  		name: "Jormungandr",
  		desig: "2013 KN6",
  		epoch: 2459200.5,
  		ma: 125.46388,
  		w: 232.46132,
  		om: 229.50381,
  		i: 23.56381,
  		e: 0.8508878,
  		a: 1.4657587
  	},
  	{
  		H: 20.64,
  		desig: "1999 FA",
  		epoch: 2459200.5,
  		ma: 212.77659,
  		w: 296.9883,
  		om: 166.09252,
  		i: 12.02879,
  		e: 0.1327323,
  		a: 1.0782582
  	},
  	{
  		H: 20.93,
  		desig: "1999 SO5",
  		epoch: 2459200.5,
  		ma: 75.41591,
  		w: 359.69744,
  		om: 196.07524,
  		i: 13.36501,
  		e: 0.0652252,
  		a: 1.085915
  	},
  	{
  		H: 20,
  		desig: "2001 HZ7",
  		epoch: 2459200.5,
  		ma: 57.87256,
  		w: 312.85668,
  		om: 156.30172,
  		i: 5.42527,
  		e: 0.498699,
  		a: 1.4694294
  	},
  	{
  		H: 21.21,
  		desig: "2006 TS7",
  		epoch: 2459200.5,
  		ma: 53.42985,
  		w: 299.99752,
  		om: 225.19174,
  		i: 5.50095,
  		e: 0.5802912,
  		a: 0.9464578
  	},
  	{
  		H: 19.8,
  		desig: "2008 SE85",
  		epoch: 2459200.5,
  		ma: 283.23677,
  		w: 294.91144,
  		om: 177.43483,
  		i: 29.60833,
  		e: 0.5252417,
  		a: 1.6257945
  	},
  	{
  		H: 20.71,
  		desig: "2009 ES",
  		epoch: 2459200.5,
  		ma: 198.92096,
  		w: 311.18011,
  		om: 343.72429,
  		i: 30.3326,
  		e: 0.3293354,
  		a: 1.4362784
  	},
  	{
  		H: 21.68,
  		desig: "2009 XZ1",
  		epoch: 2459200.5,
  		ma: 206.35862,
  		w: 152.98858,
  		om: 81.98771,
  		i: 8.15875,
  		e: 0.5337987,
  		a: 0.8557007
  	},
  	{
  		H: 19.23,
  		desig: "2010 DJ56",
  		epoch: 2459200.5,
  		ma: 324.22905,
  		w: 309.29224,
  		om: 149.92605,
  		i: 34.84526,
  		e: 0.2453584,
  		a: 1.249893
  	},
  	{
  		H: 18.5,
  		desig: "2012 TS78",
  		epoch: 2459200.5,
  		ma: 167.22257,
  		w: 196.70266,
  		om: 8.2868,
  		i: 32.67512,
  		e: 0.3814652,
  		a: 1.6080408
  	},
  	{
  		H: 20.9,
  		desig: "1994 XL1",
  		epoch: 2459200.5,
  		ma: 328.12967,
  		w: 356.56755,
  		om: 252.66028,
  		i: 28.16353,
  		e: 0.5263114,
  		a: 0.6708169
  	},
  	{
  		H: 20.8,
  		desig: "1998 VF32",
  		epoch: 2459200.5,
  		ma: 305.92844,
  		w: 320.93508,
  		om: 236.27615,
  		i: 23.74459,
  		e: 0.4438207,
  		a: 0.8508236
  	},
  	{
  		H: 19.7,
  		desig: "1998 YM4",
  		epoch: 2459200.5,
  		ma: 127.14592,
  		w: 344.54223,
  		om: 341.75572,
  		i: 3.43375,
  		e: 0.7196837,
  		a: 1.4768207
  	},
  	{
  		H: 20.78,
  		desig: "2001 PT9",
  		epoch: 2459200.5,
  		ma: 356.30462,
  		w: 261.55335,
  		om: 330.04041,
  		i: 7.18246,
  		e: 0.4548849,
  		a: 1.4682724
  	},
  	{
  		H: 20.7,
  		desig: "2001 YE4",
  		epoch: 2459200.5,
  		ma: 247.20129,
  		w: 318.86574,
  		om: 305.47423,
  		i: 4.84535,
  		e: 0.5404149,
  		a: 0.6768441
  	},
  	{
  		H: 20.23,
  		desig: "2003 QH5",
  		epoch: 2459200.5,
  		ma: 131.78526,
  		w: 321.14949,
  		om: 299.23031,
  		i: 17.61762,
  		e: 0.220188,
  		a: 1.2596198
  	},
  	{
  		H: 20,
  		desig: "2006 BB27",
  		epoch: 2459200.5,
  		ma: 18.8931,
  		w: 144.67592,
  		om: 132.18754,
  		i: 27.15745,
  		e: 0.2457835,
  		a: 1.362327
  	},
  	{
  		H: 19.94,
  		desig: "2006 SF6",
  		epoch: 2459200.5,
  		ma: 331.98608,
  		w: 305.5335,
  		om: 227.97938,
  		i: 5.83898,
  		e: 0.2805747,
  		a: 0.9500847
  	},
  	{
  		H: 21,
  		desig: "2006 XD2",
  		epoch: 2459200.5,
  		ma: 249.16876,
  		w: 109.47611,
  		om: 65.62068,
  		i: 3.56078,
  		e: 0.4251655,
  		a: 1.2666348
  	},
  	{
  		H: 17.6,
  		desig: "2007 CA19",
  		epoch: 2459200.5,
  		ma: 322.84635,
  		w: 102.52917,
  		om: 170.0097,
  		i: 9.59558,
  		e: 0.8213356,
  		a: 2.8099764
  	},
  	{
  		H: 19.7,
  		desig: "2007 LE",
  		epoch: 2459200.5,
  		ma: 170.75268,
  		w: 120.14799,
  		om: 73.71858,
  		i: 29.52679,
  		e: 0.5166484,
  		a: 1.8382147
  	},
  	{
  		H: 18.61,
  		desig: "2008 UL90",
  		epoch: 2459200.5,
  		ma: 141.11454,
  		w: 183.65241,
  		om: 81.13994,
  		i: 24.30933,
  		e: 0.3798496,
  		a: 0.6950612
  	},
  	{
  		H: 19.9,
  		desig: "2011 LL2",
  		epoch: 2459200.5,
  		ma: 336.20925,
  		w: 163.5923,
  		om: 68.25063,
  		i: 24.67569,
  		e: 0.0963537,
  		a: 1.1340147
  	},
  	{
  		H: 19.7,
  		desig: "2011 WL15",
  		epoch: 2459200.5,
  		ma: 76.85749,
  		w: 170.68425,
  		om: 72.92674,
  		i: 18.3882,
  		e: 0.2819288,
  		a: 1.3519619
  	},
  	{
  		H: 17.9,
  		desig: "2012 LK9",
  		epoch: 2459200.5,
  		ma: 3.82437,
  		w: 314.48586,
  		om: 61.89072,
  		i: 10.13336,
  		e: 0.6195005,
  		a: 2.5120257
  	},
  	{
  		H: 19.7,
  		desig: "2012 SW20",
  		epoch: 2459200.5,
  		ma: 66.31518,
  		w: 62.31387,
  		om: 209.64235,
  		i: 10.17011,
  		e: 0.6793202,
  		a: 2.4586918
  	},
  	{
  		H: 19.6,
  		desig: "2013 BK18",
  		epoch: 2459200.5,
  		ma: 272.65864,
  		w: 64.62166,
  		om: 137.73808,
  		i: 28.89431,
  		e: 0.4943494,
  		a: 1.6266011
  	},
  	{
  		H: 19.3,
  		desig: "2013 GF69",
  		epoch: 2459200.5,
  		ma: 216.65367,
  		w: 153.16462,
  		om: 174.89008,
  		i: 10.00968,
  		e: 0.4979915,
  		a: 1.9665147
  	},
  	{
  		H: 19.5,
  		desig: "2013 QJ10",
  		epoch: 2459200.5,
  		ma: 2.80088,
  		w: 243.84571,
  		om: 327.46087,
  		i: 18.15206,
  		e: 0.4250051,
  		a: 0.959202
  	},
  	{
  		H: 18.3,
  		desig: "2013 QK48",
  		epoch: 2459200.5,
  		ma: 298.83346,
  		w: 46.99864,
  		om: 141.57443,
  		i: 19.01291,
  		e: 0.8292801,
  		a: 1.5858946
  	},
  	{
  		H: 20.4,
  		desig: "2000 CE59",
  		epoch: 2459200.5,
  		ma: 318.77003,
  		w: 307.47865,
  		om: 318.64499,
  		i: 12.26494,
  		e: 0.16656,
  		a: 1.1373106
  	},
  	{
  		H: 20.3,
  		desig: "2000 DO1",
  		epoch: 2459200.5,
  		ma: 23.37023,
  		w: 302.76243,
  		om: 335.8406,
  		i: 3.4577,
  		e: 0.6819269,
  		a: 1.4297986
  	},
  	{
  		H: 20.21,
  		desig: "2001 DF47",
  		epoch: 2459200.5,
  		ma: 343.76629,
  		w: 260.25554,
  		om: 146.63639,
  		i: 18.47371,
  		e: 0.3706467,
  		a: 1.2151539
  	},
  	{
  		H: 20.1,
  		desig: "2003 CR1",
  		epoch: 2459200.5,
  		ma: 111.90897,
  		w: 101.97124,
  		om: 310.96368,
  		i: 12.72074,
  		e: 0.4628957,
  		a: 1.4530319
  	},
  	{
  		H: 19.24,
  		desig: "2004 BV1",
  		epoch: 2459200.5,
  		ma: 317.05672,
  		w: 223.25717,
  		om: 96.75633,
  		i: 12.15977,
  		e: 0.3674812,
  		a: 1.4628549
  	},
  	{
  		H: 20.5,
  		desig: "2006 CY10",
  		epoch: 2459200.5,
  		ma: 131.64496,
  		w: 167.36572,
  		om: 32.51158,
  		i: 6.78137,
  		e: 0.4854339,
  		a: 1.9585295
  	},
  	{
  		H: 19.68,
  		desig: "2007 XH16",
  		epoch: 2459200.5,
  		ma: 336.05388,
  		w: 58.29749,
  		om: 91.29037,
  		i: 27.43002,
  		e: 0.2348951,
  		a: 1.1871059
  	},
  	{
  		H: 20,
  		desig: "2008 ER7",
  		epoch: 2459200.5,
  		ma: 76.56873,
  		w: 80.99193,
  		om: 323.45394,
  		i: 2.23765,
  		e: 0.6237995,
  		a: 1.4865183
  	},
  	{
  		H: 17.1,
  		desig: "2008 EC69",
  		epoch: 2459200.5,
  		ma: 266.30834,
  		w: 178.18614,
  		om: 93.30387,
  		i: 24.75725,
  		e: 0.6174497,
  		a: 2.7581807
  	},
  	{
  		H: 18.5,
  		desig: "2009 UN3",
  		epoch: 2459200.5,
  		ma: 25.98159,
  		w: 338.79508,
  		om: 141.96992,
  		i: 37.45316,
  		e: 0.5763995,
  		a: 2.3259707
  	},
  	{
  		H: 16.5,
  		desig: "2011 WO41",
  		epoch: 2459200.5,
  		ma: 247.59903,
  		w: 125.23365,
  		om: 112.15707,
  		i: 20.05545,
  		e: 0.7315984,
  		a: 3.0138332
  	},
  	{
  		H: 21.2,
  		desig: "2014 YQ15",
  		epoch: 2459200.5,
  		ma: 212.6126,
  		w: 252.338,
  		om: 81.8393,
  		i: 10.9178,
  		e: 0.2358239,
  		a: 0.9637821
  	},
  	{
  		H: 19.1,
  		desig: "1994 XD",
  		epoch: 2459200.5,
  		ma: 98.77674,
  		w: 249.37708,
  		om: 96.15201,
  		i: 4.31031,
  		e: 0.7338706,
  		a: 2.3469657
  	},
  	{
  		H: 21.85,
  		desig: "2000 AF205",
  		epoch: 2459200.5,
  		ma: 61.53999,
  		w: 127.32784,
  		om: 220.00821,
  		i: 2.40753,
  		e: 0.276853,
  		a: 1.0341902
  	},
  	{
  		H: 20.6,
  		desig: "2001 FE90",
  		epoch: 2459200.5,
  		ma: 104.4217,
  		w: 145.11498,
  		om: 98.5336,
  		i: 8.79274,
  		e: 0.4945633,
  		a: 1.9345925
  	},
  	{
  		H: 19.3,
  		desig: "2004 XK50",
  		epoch: 2459200.5,
  		ma: 19.55478,
  		w: 103.96017,
  		om: 94.1403,
  		i: 38.21486,
  		e: 0.6886377,
  		a: 1.4512515
  	},
  	{
  		H: 19.43,
  		desig: "2007 GS3",
  		epoch: 2459200.5,
  		ma: 123.95313,
  		w: 61.04366,
  		om: 215.40361,
  		i: 15.08898,
  		e: 0.1290917,
  		a: 1.0612191
  	},
  	{
  		H: 21.3,
  		desig: "2009 FF19",
  		epoch: 2459200.5,
  		ma: 174.35683,
  		w: 244.8584,
  		om: 84.84261,
  		i: 0.55844,
  		e: 0.409323,
  		a: 1.2131112
  	},
  	{
  		H: 19.96,
  		desig: "2009 WZ104",
  		epoch: 2459200.5,
  		ma: 127.13461,
  		w: 10.5604,
  		om: 263.26614,
  		i: 9.8345,
  		e: 0.1927553,
  		a: 0.8553529
  	},
  	{
  		H: 20.4,
  		desig: "2000 UG11",
  		epoch: 2459200.5,
  		ma: 167.54031,
  		w: 240.6555,
  		om: 224.115,
  		i: 8.91475,
  		e: 0.5724263,
  		a: 1.9291692
  	},
  	{
  		H: 20.1,
  		desig: "2004 JQ1",
  		epoch: 2459200.5,
  		ma: 189.99546,
  		w: 272.62033,
  		om: 77.07168,
  		i: 32.82932,
  		e: 0.4500815,
  		a: 1.1937364
  	},
  	{
  		H: 20.7,
  		desig: "2004 SW55",
  		epoch: 2459200.5,
  		ma: 152.16583,
  		w: 352.7962,
  		om: 75.15626,
  		i: 8.78867,
  		e: 0.333765,
  		a: 1.4268551
  	},
  	{
  		H: 20.8,
  		desig: "2005 MO13",
  		epoch: 2459200.5,
  		ma: 332.07779,
  		w: 250.18725,
  		om: 176.60519,
  		i: 6.31626,
  		e: 0.4106729,
  		a: 0.8634253
  	},
  	{
  		H: 19.7,
  		desig: "2010 JU39",
  		epoch: 2459200.5,
  		ma: 168.26297,
  		w: 311.37219,
  		om: 95.17624,
  		i: 36.21222,
  		e: 0.546018,
  		a: 0.9191474
  	},
  	{
  		H: 21.1,
  		desig: "2012 VO76",
  		epoch: 2459200.5,
  		ma: 308.68461,
  		w: 297.3596,
  		om: 229.48431,
  		i: 36.94914,
  		e: 0.2151676,
  		a: 1.2044345
  	},
  	{
  		H: 19.1,
  		desig: "2007 XJ16",
  		epoch: 2459200.5,
  		ma: 346.36351,
  		w: 32.8849,
  		om: 309.10975,
  		i: 6.23925,
  		e: 0.5566154,
  		a: 2.2575722
  	},
  	{
  		H: 20.8,
  		desig: "2008 EL6",
  		epoch: 2459200.5,
  		ma: 206.80444,
  		w: 38.32632,
  		om: 177.6869,
  		i: 13.1429,
  		e: 0.4801742,
  		a: 1.728551
  	},
  	{
  		H: 20.5,
  		desig: "1989 UP",
  		epoch: 2459200.5,
  		ma: 73.13366,
  		w: 17.83339,
  		om: 53.17136,
  		i: 3.8552,
  		e: 0.4720348,
  		a: 1.8610872
  	},
  	{
  		H: 19.9,
  		desig: "1989 VB",
  		epoch: 2459200.5,
  		ma: 95.14698,
  		w: 330.87699,
  		om: 37.84941,
  		i: 2.18481,
  		e: 0.4599939,
  		a: 1.8615675
  	},
  	{
  		H: 19.5,
  		desig: "1999 XL136",
  		epoch: 2459200.5,
  		ma: 185.88446,
  		w: 275.05673,
  		om: 270.34071,
  		i: 8.91181,
  		e: 0.6476565,
  		a: 1.817345
  	},
  	{
  		H: 20.4,
  		desig: "2001 HB",
  		epoch: 2459200.5,
  		ma: 63.98533,
  		w: 237.97791,
  		om: 195.84058,
  		i: 9.28185,
  		e: 0.6938659,
  		a: 1.3139661
  	},
  	{
  		H: 18.24,
  		desig: "2004 FU4",
  		epoch: 2459200.5,
  		ma: 41.03349,
  		w: 46.32346,
  		om: 31.57515,
  		i: 23.24945,
  		e: 0.2638582,
  		a: 1.2602154
  	},
  	{
  		H: 17.4,
  		desig: "2005 FH",
  		epoch: 2459200.5,
  		ma: 221.9214,
  		w: 318.30862,
  		om: 143.66358,
  		i: 35.08036,
  		e: 0.6543925,
  		a: 2.7002532
  	},
  	{
  		H: 20.51,
  		desig: "2010 TH19",
  		epoch: 2459200.5,
  		ma: 218.67048,
  		w: 201.45781,
  		om: 254.23335,
  		i: 6.82549,
  		e: 0.3100609,
  		a: 1.4645405
  	},
  	{
  		H: 17.14,
  		desig: "2011 WV134",
  		epoch: 2459200.5,
  		ma: 314.53875,
  		w: 25.69437,
  		om: 157.71515,
  		i: 6.04038,
  		e: 0.6782984,
  		a: 2.7855655
  	},
  	{
  		H: 19.8,
  		desig: "1998 WZ1",
  		epoch: 2459200.5,
  		ma: 321.79452,
  		w: 137.43519,
  		om: 344.84275,
  		i: 4.31431,
  		e: 0.556962,
  		a: 2.1628678
  	},
  	{
  		H: 19.5,
  		desig: "2003 UV11",
  		epoch: 2459200.5,
  		ma: 256.7476,
  		w: 124.81878,
  		om: 31.87198,
  		i: 5.92637,
  		e: 0.7631046,
  		a: 1.453252
  	},
  	{
  		H: 17.6,
  		desig: "2005 UJ159",
  		epoch: 2459200.5,
  		ma: 160.2512,
  		w: 95.50798,
  		om: 80.67629,
  		i: 35.48331,
  		e: 0.8315096,
  		a: 3.34064
  	},
  	{
  		H: 18.9,
  		desig: "2006 VD13",
  		epoch: 2459200.5,
  		ma: 38.39027,
  		w: 162.87896,
  		om: 313.977,
  		i: 11.72521,
  		e: 0.4846667,
  		a: 1.9472369
  	},
  	{
  		H: 19.8,
  		desig: "2009 EO2",
  		epoch: 2459200.5,
  		ma: 106.89489,
  		w: 220.45129,
  		om: 264.73739,
  		i: 11.49126,
  		e: 0.4810825,
  		a: 1.7118119
  	},
  	{
  		H: 21.9,
  		desig: "2010 CO1",
  		epoch: 2459200.5,
  		ma: 164.77672,
  		w: 252.67082,
  		om: 351.56996,
  		i: 24.02061,
  		e: 0.2178011,
  		a: 1.0125223
  	},
  	{
  		H: 19.4,
  		desig: "2012 TV78",
  		epoch: 2459200.5,
  		ma: 65.04528,
  		w: 244.56089,
  		om: 252.0277,
  		i: 7.47895,
  		e: 0.5495764,
  		a: 1.8156632
  	},
  	{
  		H: 18.55,
  		desig: "2014 SR339",
  		epoch: 2459200.5,
  		ma: 5.66501,
  		w: 299.6607,
  		om: 138.75649,
  		i: 29.79529,
  		e: 0.3039207,
  		a: 1.2997058
  	},
  	{
  		H: 18.95,
  		desig: "2015 UM67",
  		epoch: 2459200.5,
  		ma: 258.15056,
  		w: 132.23371,
  		om: 150.06726,
  		i: 6.00468,
  		e: 0.6871832,
  		a: 1.5580648
  	},
  	{
  		H: 20.6,
  		desig: "2003 UW29",
  		epoch: 2459200.5,
  		ma: 245.05209,
  		w: 55.20358,
  		om: 196.54118,
  		i: 3.75853,
  		e: 0.838441,
  		a: 1.1695775
  	},
  	{
  		H: 21.2,
  		desig: "2006 VW2",
  		epoch: 2459200.5,
  		ma: 5.77948,
  		w: 299.61237,
  		om: 229.80237,
  		i: 10.04786,
  		e: 0.2945161,
  		a: 1.2358295
  	},
  	{
  		H: 18.2,
  		desig: "2007 VW137",
  		epoch: 2459200.5,
  		ma: 298.73659,
  		w: 245.05378,
  		om: 299.66855,
  		i: 5.94616,
  		e: 0.7390708,
  		a: 2.2275237
  	},
  	{
  		H: 16.38,
  		desig: "2013 UP8",
  		epoch: 2459200.5,
  		ma: 337.06529,
  		w: 187.36028,
  		om: 55.17103,
  		i: 47.75953,
  		e: 0.6175125,
  		a: 2.5391798
  	},
  	{
  		H: 19.75,
  		desig: "1999 JE1",
  		epoch: 2459200.5,
  		ma: 27.66649,
  		w: 302.69525,
  		om: 53.09248,
  		i: 20.90901,
  		e: 0.7017466,
  		a: 1.3232837
  	},
  	{
  		H: 20.9,
  		desig: "2003 YX1",
  		epoch: 2459200.5,
  		ma: 325.01956,
  		w: 223.18041,
  		om: 89.65464,
  		i: 5.75713,
  		e: 0.2670212,
  		a: 0.8798307
  	},
  	{
  		H: 18.4,
  		desig: "2004 VC17",
  		epoch: 2459200.5,
  		ma: 78.80355,
  		w: 65.12187,
  		om: 229.23488,
  		i: 20.40591,
  		e: 0.810967,
  		a: 1.8955637
  	},
  	{
  		H: 19.2,
  		desig: "2006 OC5",
  		epoch: 2459200.5,
  		ma: 294.76008,
  		w: 245.73367,
  		om: 149.13891,
  		i: 4.74495,
  		e: 0.6519806,
  		a: 2.400979
  	},
  	{
  		H: 20.1,
  		desig: "2007 AG",
  		epoch: 2459200.5,
  		ma: 96.8923,
  		w: 5.6995,
  		om: 283.23091,
  		i: 11.94617,
  		e: 0.3741338,
  		a: 0.7206076
  	},
  	{
  		H: 20.5,
  		desig: "2007 LF",
  		epoch: 2459200.5,
  		ma: 87.35908,
  		w: 333.76266,
  		om: 239.44459,
  		i: 6.98604,
  		e: 0.4197826,
  		a: 1.6824685
  	},
  	{
  		H: 20.1,
  		desig: "2008 WQ63",
  		epoch: 2459200.5,
  		ma: 64.00301,
  		w: 228.74924,
  		om: 317.35654,
  		i: 0.92055,
  		e: 0.6070834,
  		a: 1.7339039
  	},
  	{
  		H: 19.4,
  		desig: "2009 QL8",
  		epoch: 2459200.5,
  		ma: 48.3963,
  		w: 339.65589,
  		om: 84.48607,
  		i: 4.24012,
  		e: 0.5405954,
  		a: 1.9311034
  	},
  	{
  		H: 21.6,
  		desig: "2010 FH81",
  		epoch: 2459200.5,
  		ma: 286.83587,
  		w: 158.27727,
  		om: 84.62395,
  		i: 16.79335,
  		e: 0.2104011,
  		a: 1.2256355
  	},
  	{
  		H: 21.7,
  		desig: "2012 EY11",
  		epoch: 2459200.5,
  		ma: 143.73201,
  		w: 238.899,
  		om: 167.59831,
  		i: 9.02069,
  		e: 0.1507389,
  		a: 1.1482879
  	},
  	{
  		H: 18.5,
  		desig: "2013 PX6",
  		epoch: 2459200.5,
  		ma: 255.88874,
  		w: 229.66257,
  		om: 187.44017,
  		i: 13.66173,
  		e: 0.651546,
  		a: 2.5953156
  	},
  	{
  		H: 20.82,
  		desig: "2015 BN509",
  		epoch: 2459200.5,
  		ma: 240.01283,
  		w: 143.20154,
  		om: 120.11401,
  		i: 4.15398,
  		e: 0.568412,
  		a: 1.0065439
  	},
  	{
  		H: 20.5,
  		desig: "2015 VO66",
  		epoch: 2459200.5,
  		ma: 245.92554,
  		w: 219.2887,
  		om: 64.47578,
  		i: 14.02511,
  		e: 0.599934,
  		a: 0.9522147
  	},
  	{
  		H: 21.2,
  		desig: "1998 QP",
  		epoch: 2459200.5,
  		ma: 107.61122,
  		w: 78.41416,
  		om: 326.46454,
  		i: 9.35326,
  		e: 0.5823284,
  		a: 1.785575
  	},
  	{
  		H: 20.4,
  		desig: "2004 MD6",
  		epoch: 2459200.5,
  		ma: 359.02642,
  		w: 231.42882,
  		om: 263.86507,
  		i: 29.32399,
  		e: 0.5630676,
  		a: 0.9508036
  	},
  	{
  		H: 22,
  		desig: "2007 DM41",
  		epoch: 2459200.5,
  		ma: 217.16548,
  		w: 274.46467,
  		om: 1.73239,
  		i: 2.26453,
  		e: 0.527655,
  		a: 1.1813605
  	},
  	{
  		H: 20,
  		desig: "2009 EV",
  		epoch: 2459200.5,
  		ma: 138.27157,
  		w: 250.23413,
  		om: 138.57102,
  		i: 17.00395,
  		e: 0.5232903,
  		a: 1.728427
  	},
  	{
  		H: 21.4,
  		desig: "2015 KJ57",
  		epoch: 2459200.5,
  		ma: 250.80442,
  		w: 336.4338,
  		om: 14.39934,
  		i: 2.62776,
  		e: 0.4040824,
  		a: 1.5588224
  	},
  	{
  		H: 19.3,
  		desig: "1994 RC",
  		epoch: 2459200.5,
  		ma: 268.35512,
  		w: 286.56951,
  		om: 344.281,
  		i: 4.75704,
  		e: 0.6032569,
  		a: 2.2651161
  	},
  	{
  		H: 19.67,
  		desig: "2003 FG",
  		epoch: 2459200.5,
  		ma: 248.78688,
  		w: 312.88551,
  		om: 6.99972,
  		i: 15.66535,
  		e: 0.7150572,
  		a: 1.2416549
  	},
  	{
  		H: 21.1,
  		desig: "2015 JA2",
  		epoch: 2459200.5,
  		ma: 1.49183,
  		w: 246.20829,
  		om: 126.61896,
  		i: 16.42171,
  		e: 0.3492083,
  		a: 1.0341587
  	},
  	{
  		H: 19.39,
  		desig: "2016 CL32",
  		epoch: 2459200.5,
  		ma: 214.54713,
  		w: 292.92808,
  		om: 123.51336,
  		i: 12.21479,
  		e: 0.4600783,
  		a: 1.5431091
  	},
  	{
  		H: 20.19,
  		desig: "2016 DP",
  		epoch: 2459200.5,
  		ma: 138.43702,
  		w: 254.00047,
  		om: 54.38395,
  		i: 13.32772,
  		e: 0.4771029,
  		a: 1.0225461
  	},
  	{
  		H: 19.93,
  		desig: "2013 EM20",
  		epoch: 2459200.5,
  		ma: 17.82531,
  		w: 350.16548,
  		om: 73.90198,
  		i: 8.36355,
  		e: 0.3179518,
  		a: 1.3714227
  	},
  	{
  		H: 18.85,
  		desig: "2015 DE198",
  		epoch: 2459200.5,
  		ma: 304.49068,
  		w: 218.19149,
  		om: 33.2607,
  		i: 12.24406,
  		e: 0.5827572,
  		a: 2.0628486
  	},
  	{
  		H: 20.11,
  		desig: "2008 KZ5",
  		epoch: 2459200.5,
  		ma: 329.17045,
  		w: 194.34011,
  		om: 142.60714,
  		i: 8.36867,
  		e: 0.4541533,
  		a: 1.8423009
  	},
  	{
  		H: 17.4,
  		desig: "2008 UZ94",
  		epoch: 2459200.5,
  		ma: 257.63021,
  		w: 159.67076,
  		om: 248.25845,
  		i: 30.2531,
  		e: 0.5720954,
  		a: 2.1898261
  	},
  	{
  		H: 21.7,
  		desig: "2010 CF19",
  		epoch: 2459200.5,
  		ma: 163.99847,
  		w: 265.29912,
  		om: 154.72291,
  		i: 7.17725,
  		e: 0.2698966,
  		a: 1.1929244
  	},
  	{
  		H: 18.9,
  		desig: "2010 DM",
  		epoch: 2459200.5,
  		ma: 269.09392,
  		w: 220.97385,
  		om: 140.78936,
  		i: 5.005,
  		e: 0.839954,
  		a: 2.0802922
  	},
  	{
  		H: 21.13,
  		desig: "2016 JP",
  		epoch: 2459200.5,
  		ma: 312.27063,
  		w: 255.68989,
  		om: 202.59103,
  		i: 11.32854,
  		e: 0.3835045,
  		a: 0.9942238
  	},
  	{
  		H: 17.7,
  		desig: "2001 HA4",
  		epoch: 2459200.5,
  		ma: 181.89723,
  		w: 95.62055,
  		om: 354.11811,
  		i: 17.17683,
  		e: 0.7938712,
  		a: 2.6865844
  	},
  	{
  		H: 20.8,
  		desig: "2003 ED50",
  		epoch: 2459200.5,
  		ma: 159.87467,
  		w: 93.98679,
  		om: 173.51461,
  		i: 33.73236,
  		e: 0.5467472,
  		a: 1.4158939
  	},
  	{
  		H: 20.2,
  		desig: "2005 CJ",
  		epoch: 2459200.5,
  		ma: 326.96013,
  		w: 81.97557,
  		om: 357.85179,
  		i: 1.08247,
  		e: 0.5253172,
  		a: 1.7494814
  	},
  	{
  		H: 19.4,
  		desig: "2005 PJ2",
  		epoch: 2459200.5,
  		ma: 197.34107,
  		w: 128.87678,
  		om: 326.45539,
  		i: 17.42358,
  		e: 0.6594561,
  		a: 1.1981335
  	},
  	{
  		H: 19.6,
  		desig: "2008 CB22",
  		epoch: 2459200.5,
  		ma: 208.3495,
  		w: 33.33955,
  		om: 51.316,
  		i: 7.28071,
  		e: 0.6540614,
  		a: 2.3638061
  	},
  	{
  		H: 16.2,
  		desig: "2009 OG",
  		epoch: 2459200.5,
  		ma: 187.48105,
  		w: 114.16537,
  		om: 309.40131,
  		i: 48.38806,
  		e: 0.8584438,
  		a: 2.7039149
  	},
  	{
  		H: 18.54,
  		desig: "2011 GQ61",
  		epoch: 2459200.5,
  		ma: 311.0929,
  		w: 155.08278,
  		om: 333.51838,
  		i: 65.1682,
  		e: 0.4124967,
  		a: 1.5900016
  	},
  	{
  		H: 20.7,
  		desig: "2011 SR5",
  		epoch: 2459200.5,
  		ma: 37.97338,
  		w: 305.52269,
  		om: 180.13842,
  		i: 29.11691,
  		e: 0.7059132,
  		a: 1.1781848
  	},
  	{
  		H: 19.3,
  		desig: "2011 WO4",
  		epoch: 2459200.5,
  		ma: 324.19111,
  		w: 236.01421,
  		om: 225.18223,
  		i: 60.92942,
  		e: 0.4974135,
  		a: 1.7376229
  	},
  	{
  		H: 20.8,
  		desig: "2012 MU2",
  		epoch: 2459200.5,
  		ma: 315.5093,
  		w: 16.62875,
  		om: 250.31876,
  		i: 11.2196,
  		e: 0.514021,
  		a: 2.0551405
  	},
  	{
  		H: 18.6,
  		desig: "2012 OD1",
  		epoch: 2459200.5,
  		ma: 162.2108,
  		w: 224.36268,
  		om: 303.74284,
  		i: 42.27457,
  		e: 0.5026019,
  		a: 0.828813
  	},
  	{
  		H: 20.03,
  		desig: "2014 DN112",
  		epoch: 2459200.5,
  		ma: 314.79179,
  		w: 145.82811,
  		om: 260.23138,
  		i: 4.29939,
  		e: 0.4937173,
  		a: 1.8490104
  	},
  	{
  		H: 20.6,
  		desig: "2014 PG51",
  		epoch: 2459200.5,
  		ma: 349.73111,
  		w: 294.05066,
  		om: 275.81759,
  		i: 3.79263,
  		e: 0.4525655,
  		a: 1.2055957
  	},
  	{
  		H: 19,
  		desig: "2014 YB35",
  		epoch: 2459200.5,
  		ma: 79.72555,
  		w: 188.65104,
  		om: 3.74126,
  		i: 12.64052,
  		e: 0.4832588,
  		a: 1.876926
  	},
  	{
  		H: 19.4,
  		desig: "2015 FP118",
  		epoch: 2459200.5,
  		ma: 274.55933,
  		w: 108.13392,
  		om: 201.36421,
  		i: 2.67864,
  		e: 0.550301,
  		a: 2.1202171
  	},
  	{
  		H: 20.23,
  		desig: "2000 YF29",
  		epoch: 2459200.5,
  		ma: 318.97566,
  		w: 27.93839,
  		om: 124.84686,
  		i: 6.3003,
  		e: 0.3714341,
  		a: 1.4915091
  	},
  	{
  		H: 19.3,
  		desig: "2007 ML24",
  		epoch: 2459200.5,
  		ma: 358.99699,
  		w: 201.46248,
  		om: 281.88334,
  		i: 33.43928,
  		e: 0.3586438,
  		a: 0.7586359
  	},
  	{
  		H: 20.5,
  		desig: "2008 VB1",
  		epoch: 2459200.5,
  		ma: 28.8464,
  		w: 136.89619,
  		om: 50.37832,
  		i: 10.31617,
  		e: 0.2749651,
  		a: 1.2775907
  	},
  	{
  		H: 20.7,
  		desig: "2008 WN2",
  		epoch: 2459200.5,
  		ma: 358.83116,
  		w: 283.28659,
  		om: 227.14674,
  		i: 3.74707,
  		e: 0.3120786,
  		a: 1.41797
  	},
  	{
  		H: 18.1,
  		desig: "2009 ST103",
  		epoch: 2459200.5,
  		ma: 175.02859,
  		w: 234.45968,
  		om: 226.76757,
  		i: 15.77053,
  		e: 0.719708,
  		a: 2.6961058
  	},
  	{
  		H: 21.2,
  		desig: "2010 SH13",
  		epoch: 2459200.5,
  		ma: 52.16063,
  		w: 10.96101,
  		om: 190.59412,
  		i: 13.86145,
  		e: 0.1369329,
  		a: 1.2059759
  	},
  	{
  		H: 18.3,
  		desig: "2011 GN44",
  		epoch: 2459200.5,
  		ma: 256.97823,
  		w: 319.36399,
  		om: 16.92626,
  		i: 55.01664,
  		e: 0.5980944,
  		a: 2.2443307
  	},
  	{
  		H: 20.6,
  		desig: "1998 FF14",
  		epoch: 2459200.5,
  		ma: 348.33809,
  		w: 301.12175,
  		om: 359.83898,
  		i: 38.69126,
  		e: 0.312454,
  		a: 1.2533555
  	},
  	{
  		H: 20.2,
  		desig: "1998 SZ27",
  		epoch: 2459200.5,
  		ma: 20.36791,
  		w: 47.73032,
  		om: 166.70198,
  		i: 23.64188,
  		e: 0.5066176,
  		a: 0.9053466
  	},
  	{
  		H: 19.38,
  		desig: "2002 KJ4",
  		epoch: 2459200.5,
  		ma: 163.2785,
  		w: 155.20401,
  		om: 75.6461,
  		i: 27.86882,
  		e: 0.5595243,
  		a: 2.2653558
  	},
  	{
  		H: 20.5,
  		desig: "2002 VE68",
  		epoch: 2459200.5,
  		ma: 326.41447,
  		w: 355.42108,
  		om: 231.48945,
  		i: 9.03449,
  		e: 0.4100619,
  		a: 0.7236664
  	},
  	{
  		H: 18.69,
  		desig: "2003 NW1",
  		epoch: 2459200.5,
  		ma: 202.11001,
  		w: 118.79057,
  		om: 265.08127,
  		i: 6.15455,
  		e: 0.6431465,
  		a: 2.4229426
  	},
  	{
  		H: 21.2,
  		desig: "2004 UU1",
  		epoch: 2459200.5,
  		ma: 358.894,
  		w: 113.58331,
  		om: 217.77471,
  		i: 29.96041,
  		e: 0.2735678,
  		a: 1.2260905
  	},
  	{
  		H: 20.8,
  		desig: "2004 VB",
  		epoch: 2459200.5,
  		ma: 14.85831,
  		w: 71.54838,
  		om: 52.39257,
  		i: 10.85919,
  		e: 0.409405,
  		a: 1.458791
  	},
  	{
  		H: 21.3,
  		desig: "2004 XL14",
  		epoch: 2459200.5,
  		ma: 278.22302,
  		w: 157.57122,
  		om: 85.61679,
  		i: 21.46254,
  		e: 0.410351,
  		a: 0.7595854
  	},
  	{
  		H: 18.6,
  		desig: "2005 BG14",
  		epoch: 2459200.5,
  		ma: 254.64211,
  		w: 280.95763,
  		om: 94.973,
  		i: 21.67969,
  		e: 0.7274502,
  		a: 1.9932194
  	},
  	{
  		H: 21.27,
  		desig: "2005 GL",
  		epoch: 2459200.5,
  		ma: 87.57793,
  		w: 265.33001,
  		om: 43.62104,
  		i: 15.89653,
  		e: 0.306238,
  		a: 1.0561515
  	},
  	{
  		H: 20.03,
  		desig: "2006 TB",
  		epoch: 2459200.5,
  		ma: 106.69545,
  		w: 180.94864,
  		om: 169.31509,
  		i: 27.5663,
  		e: 0.324488,
  		a: 1.5620514
  	},
  	{
  		H: 20.8,
  		desig: "2006 UL217",
  		epoch: 2459200.5,
  		ma: 114.36015,
  		w: 310.08998,
  		om: 45.1933,
  		i: 9.92209,
  		e: 0.3485747,
  		a: 1.4302742
  	},
  	{
  		H: 19.41,
  		desig: "2007 FE",
  		epoch: 2459200.5,
  		ma: 235.89624,
  		w: 135.22328,
  		om: 122.63845,
  		i: 6.99719,
  		e: 0.456806,
  		a: 1.7938709
  	},
  	{
  		H: 19.9,
  		desig: "2007 YQ56",
  		epoch: 2459200.5,
  		ma: 160.97267,
  		w: 273.06444,
  		om: 276.02236,
  		i: 26.45291,
  		e: 0.2880438,
  		a: 1.1409151
  	},
  	{
  		H: 21.55,
  		desig: "2008 HS3",
  		epoch: 2459200.5,
  		ma: 6.70416,
  		w: 5.01585,
  		om: 227.71471,
  		i: 8.1732,
  		e: 0.225362,
  		a: 1.3500374
  	},
  	{
  		H: 19,
  		desig: "2009 BJ58",
  		epoch: 2459200.5,
  		ma: 233.57593,
  		w: 85.59483,
  		om: 131.45537,
  		i: 13.0277,
  		e: 0.7112265,
  		a: 1.8509146
  	},
  	{
  		H: 20.4,
  		desig: "2009 WM1",
  		epoch: 2459200.5,
  		ma: 245.8009,
  		w: 162.62915,
  		om: 240.26629,
  		i: 25.76638,
  		e: 0.1688841,
  		a: 1.180421
  	},
  	{
  		H: 17.71,
  		desig: "2010 JL33",
  		epoch: 2459200.5,
  		ma: 116.14752,
  		w: 309.80715,
  		om: 52.49892,
  		i: 5.37352,
  		e: 0.7347324,
  		a: 2.680083
  	},
  	{
  		H: 19.6,
  		desig: "2010 MF1",
  		epoch: 2459200.5,
  		ma: 223.24709,
  		w: 27.8204,
  		om: 286.96655,
  		i: 9.10222,
  		e: 0.58845,
  		a: 2.4996107
  	},
  	{
  		H: 21,
  		desig: "2010 UD",
  		epoch: 2459200.5,
  		ma: 10.52726,
  		w: 262.26024,
  		om: 23.74979,
  		i: 26.28747,
  		e: 0.2640604,
  		a: 1.0977631
  	},
  	{
  		H: 18.7,
  		desig: "2010 XC11",
  		epoch: 2459200.5,
  		ma: 153.54558,
  		w: 121.29535,
  		om: 94.22414,
  		i: 9.11088,
  		e: 0.8499245,
  		a: 2.5153384
  	},
  	{
  		H: 21.6,
  		desig: "2011 LT17",
  		epoch: 2459200.5,
  		ma: 29.66543,
  		w: 270.58649,
  		om: 83.46558,
  		i: 20.89762,
  		e: 0.2873449,
  		a: 1.0996753
  	},
  	{
  		H: 20.75,
  		desig: "2012 BN11",
  		epoch: 2459200.5,
  		ma: 335.57276,
  		w: 69.67149,
  		om: 153.74738,
  		i: 4.35715,
  		e: 0.394642,
  		a: 1.4574553
  	},
  	{
  		H: 19.93,
  		desig: "2012 DJ61",
  		epoch: 2459200.5,
  		ma: 252.00193,
  		w: 311.96237,
  		om: 346.27152,
  		i: 53.63405,
  		e: 0.5153711,
  		a: 0.9175987
  	},
  	{
  		H: 20.26,
  		desig: "2012 MM11",
  		epoch: 2459200.5,
  		ma: 252.22037,
  		w: 124.13062,
  		om: 245.49668,
  		i: 3.18214,
  		e: 0.6479076,
  		a: 2.1116964
  	},
  	{
  		H: 19.79,
  		desig: "2013 BE19",
  		epoch: 2459200.5,
  		ma: 279.11867,
  		w: 311.97832,
  		om: 309.27191,
  		i: 31.00686,
  		e: 0.2974192,
  		a: 0.9113549
  	},
  	{
  		H: 18.5,
  		desig: "2013 BW76",
  		epoch: 2459200.5,
  		ma: 243.26013,
  		w: 0.52421,
  		om: 58.24746,
  		i: 40.35562,
  		e: 0.5334057,
  		a: 2.0581022
  	},
  	{
  		H: 21.4,
  		desig: "2013 CU83",
  		epoch: 2459200.5,
  		ma: 308.90477,
  		w: 18.56387,
  		om: 303.41568,
  		i: 10.35059,
  		e: 0.1822291,
  		a: 1.2837247
  	},
  	{
  		H: 21.8,
  		desig: "2014 AY28",
  		epoch: 2459200.5,
  		ma: 340.80138,
  		w: 22.63189,
  		om: 169.59057,
  		i: 5.70842,
  		e: 0.282533,
  		a: 1.4254698
  	},
  	{
  		H: 20.2,
  		desig: "2014 GG17",
  		epoch: 2459200.5,
  		ma: 154.39017,
  		w: 239.56864,
  		om: 195.29122,
  		i: 39.15041,
  		e: 0.3524937,
  		a: 1.3669725
  	},
  	{
  		H: 16.09,
  		desig: "2014 LJ21",
  		epoch: 2459200.5,
  		ma: 130.25902,
  		w: 302.81326,
  		om: 126.65453,
  		i: 24.25255,
  		e: 0.895185,
  		a: 2.8894719
  	},
  	{
  		H: 18,
  		desig: "2014 NE52",
  		epoch: 2459200.5,
  		ma: 242.39746,
  		w: 337.57984,
  		om: 54.53274,
  		i: 3.85979,
  		e: 0.6585574,
  		a: 2.3838702
  	},
  	{
  		H: 21.88,
  		desig: "2015 BY310",
  		epoch: 2459200.5,
  		ma: 306.90363,
  		w: 229.22138,
  		om: 328.79997,
  		i: 4.85753,
  		e: 0.3998444,
  		a: 1.5845409
  	},
  	{
  		H: 20.4,
  		desig: "2015 DV215",
  		epoch: 2459200.5,
  		ma: 69.86202,
  		w: 41.36852,
  		om: 13.93385,
  		i: 13.19945,
  		e: 0.4025107,
  		a: 1.5384312
  	},
  	{
  		H: 20.3,
  		desig: "2015 LG2",
  		epoch: 2459200.5,
  		ma: 283.62724,
  		w: 188.89629,
  		om: 133.13074,
  		i: 21.28651,
  		e: 0.1816298,
  		a: 1.259377
  	},
  	{
  		H: 19.39,
  		desig: "2016 CA136",
  		epoch: 2459200.5,
  		ma: 262.28154,
  		w: 124.85863,
  		om: 239.86845,
  		i: 1.25545,
  		e: 0.781273,
  		a: 2.0312827
  	},
  	{
  		H: 19.1,
  		desig: "2016 MK1",
  		epoch: 2459200.5,
  		ma: 64.18116,
  		w: 240.67885,
  		om: 178.32036,
  		i: 10.77789,
  		e: 0.7157506,
  		a: 1.5007457
  	},
  	{
  		H: 20.7,
  		desig: "2011 WL2",
  		epoch: 2459200.5,
  		ma: 122.37068,
  		w: 88.83718,
  		om: 212.92494,
  		i: 14.13096,
  		e: 0.2834188,
  		a: 1.0776871
  	},
  	{
  		H: 21.71,
  		desig: "2013 HT15",
  		epoch: 2459200.5,
  		ma: 150.93675,
  		w: 315.70374,
  		om: 23.45242,
  		i: 2.92109,
  		e: 0.422938,
  		a: 1.1007369
  	},
  	{
  		H: 18.6,
  		desig: "1979 XB",
  		epoch: 2459200.5,
  		ma: 132.66714,
  		w: 76.75121,
  		om: 84.6849,
  		i: 24.55609,
  		e: 0.7080281,
  		a: 2.2197373
  	},
  	{
  		H: 19.48,
  		desig: "1983 LC",
  		epoch: 2459200.5,
  		ma: 302.06068,
  		w: 184.8566,
  		om: 159.70946,
  		i: 1.56316,
  		e: 0.7151494,
  		a: 2.6007633
  	},
  	{
  		H: 20,
  		desig: "1991 GO",
  		epoch: 2459200.5,
  		ma: 58.71058,
  		w: 89.66635,
  		om: 24.05918,
  		i: 9.55415,
  		e: 0.6550221,
  		a: 1.9251674
  	},
  	{
  		H: 21.4,
  		desig: "1994 CJ1",
  		epoch: 2459200.5,
  		ma: 217.68361,
  		w: 65.27997,
  		om: 172.04134,
  		i: 2.30724,
  		e: 0.3253166,
  		a: 1.4905474
  	},
  	{
  		H: 20.3,
  		desig: "1994 EK",
  		epoch: 2459200.5,
  		ma: 202.18229,
  		w: 99.4086,
  		om: 332.89334,
  		i: 6.04079,
  		e: 0.6387487,
  		a: 2.1502365
  	},
  	{
  		H: 19.8,
  		desig: "1994 NE",
  		epoch: 2459200.5,
  		ma: 21.20518,
  		w: 246.72393,
  		om: 104.47362,
  		i: 27.45198,
  		e: 0.6045305,
  		a: 2.036503
  	},
  	{
  		H: 21.8,
  		desig: "1995 CR",
  		epoch: 2459200.5,
  		ma: 274.73247,
  		w: 322.5877,
  		om: 342.56567,
  		i: 4.06748,
  		e: 0.8684362,
  		a: 0.9069602
  	},
  	{
  		H: 21,
  		desig: "1996 JA1",
  		epoch: 2459200.5,
  		ma: 349.27987,
  		w: 248.51845,
  		om: 55.81943,
  		i: 21.6005,
  		e: 0.7008976,
  		a: 2.5616169
  	},
  	{
  		H: 19.12,
  		desig: "1997 GL3",
  		epoch: 2459200.5,
  		ma: 340.14465,
  		w: 262.57475,
  		om: 194.34341,
  		i: 6.68118,
  		e: 0.7839238,
  		a: 2.26991
  	},
  	{
  		H: 21.5,
  		desig: "1997 GD32",
  		epoch: 2459200.5,
  		ma: 276.21239,
  		w: 226.6757,
  		om: 55.2448,
  		i: 5.25265,
  		e: 0.5981343,
  		a: 2.0943001
  	},
  	{
  		H: 20.08,
  		desig: "1997 QK1",
  		epoch: 2459200.5,
  		ma: 0.13229,
  		w: 2.97959,
  		om: 306.76247,
  		i: 2.89132,
  		e: 0.6475333,
  		a: 2.7800538
  	},
  	{
  		H: 19.6,
  		desig: "1997 VG6",
  		epoch: 2459200.5,
  		ma: 150.32543,
  		w: 250.88572,
  		om: 51.68467,
  		i: 18.50281,
  		e: 0.5643582,
  		a: 1.6105609
  	},
  	{
  		H: 20.8,
  		desig: "1997 WQ23",
  		epoch: 2459200.5,
  		ma: 52.56388,
  		w: 296.58589,
  		om: 55.83171,
  		i: 2.44798,
  		e: 0.494828,
  		a: 1.7374229
  	},
  	{
  		H: 21.5,
  		desig: "1998 BY7",
  		epoch: 2459200.5,
  		ma: 320.44894,
  		w: 90.47887,
  		om: 122.01942,
  		i: 3.28208,
  		e: 0.606666,
  		a: 2.0219424
  	},
  	{
  		H: 20.8,
  		desig: "1998 HT31",
  		epoch: 2459200.5,
  		ma: 210.13167,
  		w: 80.68132,
  		om: 213.50268,
  		i: 6.8072,
  		e: 0.6963048,
  		a: 2.5312808
  	},
  	{
  		H: 21.3,
  		desig: "1998 HH49",
  		epoch: 2459200.5,
  		ma: 216.70479,
  		w: 287.87552,
  		om: 23.48817,
  		i: 8.41858,
  		e: 0.5023475,
  		a: 1.5507639
  	},
  	{
  		H: 19.2,
  		desig: "1998 QK28",
  		epoch: 2459200.5,
  		ma: 79.00221,
  		w: 204.75476,
  		om: 174.52163,
  		i: 7.86585,
  		e: 0.5783743,
  		a: 2.338437
  	},
  	{
  		H: 19,
  		desig: "1998 QA62",
  		epoch: 2459200.5,
  		ma: 150.16824,
  		w: 273.5031,
  		om: 181.15306,
  		i: 24.92354,
  		e: 0.7468185,
  		a: 2.0733059
  	},
  	{
  		H: 20.8,
  		desig: "1998 SH2",
  		epoch: 2459200.5,
  		ma: 355.76797,
  		w: 268.46086,
  		om: 6.36334,
  		i: 2.4039,
  		e: 0.7142143,
  		a: 2.7425235
  	},
  	{
  		H: 21.3,
  		desig: "1998 SU4",
  		epoch: 2459200.5,
  		ma: 83.29907,
  		w: 241.82274,
  		om: 350.60629,
  		i: 23.15441,
  		e: 0.5803843,
  		a: 1.1478984
  	},
  	{
  		H: 20.6,
  		desig: "1998 SY14",
  		epoch: 2459200.5,
  		ma: 221.71695,
  		w: 22.52754,
  		om: 39.68367,
  		i: 3.4732,
  		e: 0.6699858,
  		a: 2.833499
  	},
  	{
  		H: 20.3,
  		desig: "1998 SL36",
  		epoch: 2459200.5,
  		ma: 132.08643,
  		w: 116.77393,
  		om: 353.11067,
  		i: 19.05297,
  		e: 0.4183433,
  		a: 1.3909074
  	},
  	{
  		H: 20.9,
  		desig: "1998 US18",
  		epoch: 2459200.5,
  		ma: 106.71479,
  		w: 115.38273,
  		om: 207.31974,
  		i: 9.65306,
  		e: 0.676679,
  		a: 2.6065847
  	},
  	{
  		H: 21.8,
  		desig: "1998 WB2",
  		epoch: 2459200.5,
  		ma: 321.79201,
  		w: 78.69025,
  		om: 52.248,
  		i: 2.38276,
  		e: 0.5878168,
  		a: 1.9750387
  	},
  	{
  		H: 20.7,
  		desig: "1998 XD12",
  		epoch: 2459200.5,
  		ma: 151.58591,
  		w: 69.56941,
  		om: 259.68848,
  		i: 13.4952,
  		e: 0.6235161,
  		a: 1.3976444
  	},
  	{
  		H: 22,
  		desig: "1999 FR19",
  		epoch: 2459200.5,
  		ma: 145.92604,
  		w: 106.94031,
  		om: 0.54831,
  		i: 20.82103,
  		e: 0.4768445,
  		a: 1.5441059
  	},
  	{
  		H: 19.7,
  		desig: "1999 GL4",
  		epoch: 2459200.5,
  		ma: 35.91779,
  		w: 293.8982,
  		om: 178.42195,
  		i: 7.26184,
  		e: 0.6033099,
  		a: 2.1188692
  	},
  	{
  		H: 21.8,
  		desig: "1999 JZ10",
  		epoch: 2459200.5,
  		ma: 208.06804,
  		w: 80.0062,
  		om: 54.52342,
  		i: 25.92084,
  		e: 0.4732435,
  		a: 1.306233
  	},
  	{
  		H: 20.6,
  		desig: "1999 LX1",
  		epoch: 2459200.5,
  		ma: 7.92895,
  		w: 133.52617,
  		om: 251.81331,
  		i: 19.82571,
  		e: 0.7261879,
  		a: 1.16421
  	},
  	{
  		H: 19.76,
  		desig: "1999 RM45",
  		epoch: 2459200.5,
  		ma: 303.7914,
  		w: 88.77176,
  		om: 162.83608,
  		i: 10.88953,
  		e: 0.6440586,
  		a: 1.6812629
  	},
  	{
  		H: 20.5,
  		desig: "1999 SG10",
  		epoch: 2459200.5,
  		ma: 0.55375,
  		w: 103.38396,
  		om: 13.42223,
  		i: 23.56046,
  		e: 0.613577,
  		a: 1.4536894
  	},
  	{
  		H: 21.4,
  		desig: "1999 TO13",
  		epoch: 2459200.5,
  		ma: 254.03193,
  		w: 302.37472,
  		om: 14.90026,
  		i: 20.29105,
  		e: 0.4355965,
  		a: 1.581817
  	},
  	{
  		H: 19.8,
  		desig: "1999 TT16",
  		epoch: 2459200.5,
  		ma: 208.61599,
  		w: 149.48546,
  		om: 327.15543,
  		i: 1.98912,
  		e: 0.663107,
  		a: 2.1605694
  	},
  	{
  		H: 21.5,
  		desig: "1999 UR",
  		epoch: 2459200.5,
  		ma: 19.95329,
  		w: 18.24878,
  		om: 50.65453,
  		i: 3.59214,
  		e: 0.5037398,
  		a: 1.89872
  	},
  	{
  		H: 20.8,
  		desig: "1999 VR6",
  		epoch: 2459200.5,
  		ma: 163.74996,
  		w: 294.58593,
  		om: 212.45744,
  		i: 8.53327,
  		e: 0.7592228,
  		a: 2.1917687
  	},
  	{
  		H: 17.2,
  		desig: "1999 XS35",
  		epoch: 2459200.5,
  		ma: 101.81099,
  		w: 332.95003,
  		om: 49.07445,
  		i: 19.48105,
  		e: 0.9474359,
  		a: 17.7738531
  	},
  	{
  		H: 20.3,
  		desig: "1999 XK136",
  		epoch: 2459200.5,
  		ma: 271.66569,
  		w: 303.32764,
  		om: 62.87975,
  		i: 2.68566,
  		e: 0.7025101,
  		a: 2.3768855
  	},
  	{
  		H: 21.1,
  		desig: "1999 YD",
  		epoch: 2459200.5,
  		ma: 158.81158,
  		w: 61.84905,
  		om: 9.39556,
  		i: 1.37695,
  		e: 0.5935716,
  		a: 2.4615832
  	},
  	{
  		H: 19.7,
  		desig: "2000 BO28",
  		epoch: 2459200.5,
  		ma: 98.71661,
  		w: 303.34755,
  		om: 319.80373,
  		i: 6.34253,
  		e: 0.5999025,
  		a: 1.698369
  	},
  	{
  		H: 20.8,
  		desig: "2000 CM33",
  		epoch: 2459200.5,
  		ma: 231.96076,
  		w: 50.20737,
  		om: 132.84818,
  		i: 11.55178,
  		e: 0.2721948,
  		a: 1.3226995
  	},
  	{
  		H: 21.1,
  		desig: "2000 CO33",
  		epoch: 2459200.5,
  		ma: 316.72124,
  		w: 179.24302,
  		om: 319.54074,
  		i: 18.30028,
  		e: 0.5688711,
  		a: 2.3222548
  	},
  	{
  		H: 19.9,
  		desig: "2000 CP101",
  		epoch: 2459200.5,
  		ma: 318.91268,
  		w: 247.90334,
  		om: 160.22379,
  		i: 10.44266,
  		e: 0.6193195,
  		a: 1.7749146
  	},
  	{
  		H: 19.9,
  		desig: "2000 DN1",
  		epoch: 2459200.5,
  		ma: 81.09369,
  		w: 146.33576,
  		om: 42.17677,
  		i: 7.76962,
  		e: 0.6674744,
  		a: 2.8907581
  	},
  	{
  		H: 18.9,
  		desig: "2000 EU70",
  		epoch: 2459200.5,
  		ma: 125.0828,
  		w: 254.10094,
  		om: 165.31307,
  		i: 13.01853,
  		e: 0.7672354,
  		a: 2.216293
  	},
  	{
  		H: 21.7,
  		desig: "2000 KA",
  		epoch: 2459200.5,
  		ma: 176.39984,
  		w: 83.23037,
  		om: 62.48176,
  		i: 6.73008,
  		e: 0.4621026,
  		a: 1.3322636
  	},
  	{
  		H: 21.6,
  		desig: "2000 LF3",
  		epoch: 2459200.5,
  		ma: 324.77881,
  		w: 224.24173,
  		om: 81.9178,
  		i: 14.60729,
  		e: 0.6550712,
  		a: 2.5923159
  	},
  	{
  		H: 21.1,
  		desig: "2000 PY5",
  		epoch: 2459200.5,
  		ma: 298.70671,
  		w: 94.7682,
  		om: 147.3627,
  		i: 3.79148,
  		e: 0.6007171,
  		a: 2.3164189
  	},
  	{
  		H: 19.1,
  		desig: "2000 PP9",
  		epoch: 2459200.5,
  		ma: 260.8551,
  		w: 159.58808,
  		om: 171.68309,
  		i: 5.59472,
  		e: 0.5509937,
  		a: 2.3289872
  	},
  	{
  		H: 19.5,
  		desig: "2000 QS7",
  		epoch: 2459200.5,
  		ma: 218.15695,
  		w: 218.85945,
  		om: 153.42438,
  		i: 3.20272,
  		e: 0.6671565,
  		a: 2.671241
  	},
  	{
  		H: 21.4,
  		desig: "2000 QV7",
  		epoch: 2459200.5,
  		ma: 92.20712,
  		w: 79.5335,
  		om: 154.78265,
  		i: 9.12444,
  		e: 0.5230026,
  		a: 1.4090008
  	},
  	{
  		H: 21.9,
  		desig: "2000 SL10",
  		epoch: 2459200.5,
  		ma: 250.05408,
  		w: 78.59901,
  		om: 208.71727,
  		i: 1.46399,
  		e: 0.3386177,
  		a: 1.3720664
  	},
  	{
  		H: 21.1,
  		desig: "2000 TU28",
  		epoch: 2459200.5,
  		ma: 336.7539,
  		w: 280.93558,
  		om: 203.00875,
  		i: 15.594,
  		e: 0.1829439,
  		a: 1.072702
  	},
  	{
  		H: 18.7,
  		desig: "2000 YG29",
  		epoch: 2459200.5,
  		ma: 190.59605,
  		w: 359.17487,
  		om: 92.22931,
  		i: 18.90292,
  		e: 0.6844385,
  		a: 3.2105543
  	},
  	{
  		H: 18.5,
  		desig: "2001 EC",
  		epoch: 2459200.5,
  		ma: 285.53177,
  		w: 115.78586,
  		om: 316.05586,
  		i: 0.60689,
  		e: 0.7653982,
  		a: 2.5978502
  	},
  	{
  		H: 21.4,
  		desig: "2001 FA58",
  		epoch: 2459200.5,
  		ma: 274.94411,
  		w: 114.53631,
  		om: 155.84021,
  		i: 8.21443,
  		e: 0.7194985,
  		a: 2.2566396
  	},
  	{
  		H: 20.4,
  		desig: "2001 FC58",
  		epoch: 2459200.5,
  		ma: 128.68774,
  		w: 261.23063,
  		om: 174.61714,
  		i: 6.77327,
  		e: 0.3433622,
  		a: 1.0206035
  	},
  	{
  		H: 19.8,
  		desig: "2001 FB90",
  		epoch: 2459200.5,
  		ma: 22.95938,
  		w: 15.17729,
  		om: 265.6249,
  		i: 1.88487,
  		e: 0.7776134,
  		a: 2.465631
  	},
  	{
  		H: 20.6,
  		desig: "2001 GL2",
  		epoch: 2459200.5,
  		ma: 187.24373,
  		w: 42.87497,
  		om: 191.92233,
  		i: 34.81112,
  		e: 0.6491854,
  		a: 2.6555674
  	},
  	{
  		H: 21.6,
  		desig: "2001 GR2",
  		epoch: 2459200.5,
  		ma: 244.32085,
  		w: 99.34175,
  		om: 190.22689,
  		i: 11.82887,
  		e: 0.6217724,
  		a: 1.8624543
  	},
  	{
  		H: 19.8,
  		desig: "2001 GT2",
  		epoch: 2459200.5,
  		ma: 118.51477,
  		w: 358.76034,
  		om: 146.15088,
  		i: 3.67304,
  		e: 0.631196,
  		a: 2.406884
  	},
  	{
  		H: 21.48,
  		desig: "2001 JV1",
  		epoch: 2459200.5,
  		ma: 265.70292,
  		w: 201.02819,
  		om: 92.28689,
  		i: 6.62899,
  		e: 0.4354798,
  		a: 1.7046865
  	},
  	{
  		H: 20.1,
  		desig: "2001 KF54",
  		epoch: 2459200.5,
  		ma: 138.03079,
  		w: 170.85545,
  		om: 172.47606,
  		i: 1.63044,
  		e: 0.6503169,
  		a: 2.3391856
  	},
  	{
  		H: 20.4,
  		desig: "2001 LD",
  		epoch: 2459200.5,
  		ma: 222.1272,
  		w: 114.25105,
  		om: 79.26217,
  		i: 30.15132,
  		e: 0.3756904,
  		a: 1.4201689
  	},
  	{
  		H: 20.2,
  		desig: "2001 QC34",
  		epoch: 2459000.5,
  		ma: 97.36577,
  		w: 215.43606,
  		om: 271.47688,
  		i: 6.23646,
  		e: 0.1876945,
  		a: 1.128616
  	},
  	{
  		H: 21.6,
  		desig: "2001 SQ3",
  		epoch: 2459200.5,
  		ma: 228.50186,
  		w: 268.19994,
  		om: 356.16485,
  		i: 23.89599,
  		e: 0.2544938,
  		a: 1.1102618
  	},
  	{
  		H: 21.5,
  		desig: "2001 SY269",
  		epoch: 2459200.5,
  		ma: 273.0401,
  		w: 223.84926,
  		om: 232.14308,
  		i: 1.86309,
  		e: 0.5971794,
  		a: 1.6802142
  	},
  	{
  		H: 19.6,
  		desig: "2001 SZ269",
  		epoch: 2459200.5,
  		ma: 120.85962,
  		w: 191.16261,
  		om: 98.96376,
  		i: 2.45202,
  		e: 0.6619303,
  		a: 2.3645992
  	},
  	{
  		H: 21,
  		desig: "2001 SG286",
  		epoch: 2459200.5,
  		ma: 84.93865,
  		w: 56.27145,
  		om: 241.1339,
  		i: 7.77387,
  		e: 0.3473377,
  		a: 1.3583325
  	},
  	{
  		H: 22,
  		desig: "2001 TA2",
  		epoch: 2459200.5,
  		ma: 78.57562,
  		w: 227.36853,
  		om: 50.39046,
  		i: 3.26225,
  		e: 0.6473212,
  		a: 1.7710658
  	},
  	{
  		H: 19.2,
  		desig: "2001 TC45",
  		epoch: 2459200.5,
  		ma: 268.63692,
  		w: 66.96022,
  		om: 35.23109,
  		i: 15.46701,
  		e: 0.6422947,
  		a: 2.2194589
  	},
  	{
  		H: 18.4,
  		desig: "2001 VB",
  		epoch: 2459200.5,
  		ma: 113.34542,
  		w: 230.72046,
  		om: 299.62258,
  		i: 8.55212,
  		e: 0.8941088,
  		a: 2.3422041
  	},
  	{
  		H: 21.3,
  		desig: "2001 VC2",
  		epoch: 2459200.5,
  		ma: 241.1519,
  		w: 103.8196,
  		om: 67.05832,
  		i: 12.50911,
  		e: 0.1321817,
  		a: 1.0411117
  	},
  	{
  		H: 22,
  		desig: "2001 VJ5",
  		epoch: 2459200.5,
  		ma: 22.03782,
  		w: 67.64482,
  		om: 44.72784,
  		i: 6.06009,
  		e: 0.5620341,
  		a: 1.9322058
  	},
  	{
  		H: 19.2,
  		desig: "2001 XQ",
  		epoch: 2459200.5,
  		ma: 268.45948,
  		w: 189.74611,
  		om: 250.84686,
  		i: 28.65574,
  		e: 0.721408,
  		a: 3.6247389
  	},
  	{
  		H: 22,
  		desig: "2001 YP3",
  		epoch: 2459200.5,
  		ma: 281.42883,
  		w: 36.29881,
  		om: 101.92995,
  		i: 7.93019,
  		e: 0.6220836,
  		a: 2.4938906
  	},
  	{
  		H: 20.59,
  		desig: "2001 YV3",
  		epoch: 2459200.5,
  		ma: 18.00311,
  		w: 244.34744,
  		om: 107.25804,
  		i: 5.20005,
  		e: 0.7188879,
  		a: 1.9467659
  	},
  	{
  		H: 20.9,
  		desig: "2001 YB5",
  		epoch: 2459200.5,
  		ma: 80.01441,
  		w: 115.51496,
  		om: 108.16013,
  		i: 5.56113,
  		e: 0.8654532,
  		a: 2.3462971
  	},
  	{
  		H: 20.9,
  		desig: "2002 AV",
  		epoch: 2459200.5,
  		ma: 332.08447,
  		w: 285.97251,
  		om: 123.6527,
  		i: 2.8469,
  		e: 0.6567653,
  		a: 2.4728609
  	},
  	{
  		H: 20.8,
  		desig: "2002 AY1",
  		epoch: 2459200.5,
  		ma: 88.97961,
  		w: 323.84422,
  		om: 287.85869,
  		i: 29.89288,
  		e: 0.4373839,
  		a: 0.7789753
  	},
  	{
  		H: 21.4,
  		desig: "2002 AZ1",
  		epoch: 2459200.5,
  		ma: 32.92283,
  		w: 97.03151,
  		om: 113.68591,
  		i: 8.14403,
  		e: 0.6645285,
  		a: 2.1141918
  	},
  	{
  		H: 21.2,
  		desig: "2002 AT4",
  		epoch: 2459200.5,
  		ma: 132.12015,
  		w: 203.08573,
  		om: 323.46309,
  		i: 1.49998,
  		e: 0.4465009,
  		a: 1.8672925
  	},
  	{
  		H: 21,
  		desig: "2002 AC9",
  		epoch: 2459200.5,
  		ma: 213.69152,
  		w: 28.55173,
  		om: 2.50244,
  		i: 2.27814,
  		e: 0.5605443,
  		a: 1.7037504
  	},
  	{
  		H: 20.1,
  		desig: "2002 BM26",
  		epoch: 2459200.5,
  		ma: 213.9816,
  		w: 180.53183,
  		om: 319.61275,
  		i: 16.22562,
  		e: 0.4448028,
  		a: 1.8323601
  	},
  	{
  		H: 19.2,
  		desig: "2002 CY9",
  		epoch: 2459200.5,
  		ma: 358.29729,
  		w: 117.36418,
  		om: 305.30919,
  		i: 41.96356,
  		e: 0.5071908,
  		a: 1.6466456
  	},
  	{
  		H: 20.48,
  		desig: "2002 CD14",
  		epoch: 2459200.5,
  		ma: 287.48823,
  		w: 141.23977,
  		om: 127.67323,
  		i: 2.88752,
  		e: 0.5792928,
  		a: 1.7781937
  	},
  	{
  		H: 22,
  		desig: "2002 DO3",
  		epoch: 2459200.5,
  		ma: 126.47828,
  		w: 165.55312,
  		om: 56.12376,
  		i: 3.80129,
  		e: 0.4992207,
  		a: 1.8600468
  	},
  	{
  		H: 19.4,
  		desig: "2002 EY2",
  		epoch: 2459200.5,
  		ma: 178.82006,
  		w: 51.06897,
  		om: 343.40625,
  		i: 21.73332,
  		e: 0.4864108,
  		a: 1.7252616
  	},
  	{
  		H: 21.9,
  		desig: "2002 EU11",
  		epoch: 2459200.5,
  		ma: 65.7975,
  		w: 274.90153,
  		om: 345.92141,
  		i: 2.92078,
  		e: 0.6809167,
  		a: 2.3454229
  	},
  	{
  		H: 20,
  		desig: "2002 EV11",
  		epoch: 2459200.5,
  		ma: 82.69933,
  		w: 218.08306,
  		om: 183.59886,
  		i: 11.59996,
  		e: 0.8894385,
  		a: 2.0997896
  	},
  	{
  		H: 19.16,
  		desig: "2002 FC",
  		epoch: 2459200.5,
  		ma: 320.22984,
  		w: 195.03447,
  		om: 50.32479,
  		i: 6.78007,
  		e: 0.6587027,
  		a: 2.8379538
  	},
  	{
  		H: 20.5,
  		desig: "2002 FQ5",
  		epoch: 2459200.5,
  		ma: 354.6546,
  		w: 80.77169,
  		om: 196.19705,
  		i: 7.55913,
  		e: 0.5884437,
  		a: 1.91504
  	},
  	{
  		H: 21.5,
  		desig: "2002 GM5",
  		epoch: 2459200.5,
  		ma: 11.01162,
  		w: 274.59378,
  		om: 13.41053,
  		i: 7.28149,
  		e: 0.69507,
  		a: 2.1123892
  	},
  	{
  		H: 18.73,
  		desig: "2002 GZ8",
  		epoch: 2459200.5,
  		ma: 356.40176,
  		w: 161.48959,
  		om: 309.78413,
  		i: 5.31431,
  		e: 0.6398159,
  		a: 2.8253906
  	},
  	{
  		H: 20.4,
  		desig: "2002 HP11",
  		epoch: 2459200.5,
  		ma: 119.02669,
  		w: 90.50972,
  		om: 9.1468,
  		i: 5.13392,
  		e: 0.7651997,
  		a: 2.0677703
  	},
  	{
  		H: 20.43,
  		desig: "2002 JX8",
  		epoch: 2459200.5,
  		ma: 1.584,
  		w: 338.09805,
  		om: 68.58861,
  		i: 4.31449,
  		e: 0.3052629,
  		a: 0.7699677
  	},
  	{
  		H: 21,
  		desig: "2002 JZ8",
  		epoch: 2459200.5,
  		ma: 43.14094,
  		w: 338.78336,
  		om: 200.62778,
  		i: 9.79195,
  		e: 0.6463001,
  		a: 2.7435454
  	},
  	{
  		H: 21.4,
  		desig: "2002 JE9",
  		epoch: 2459000.5,
  		ma: 210.23316,
  		w: 255.46107,
  		om: 200.03934,
  		i: 8.82836,
  		e: 0.4167455,
  		a: 1.0679695
  	},
  	{
  		H: 19.2,
  		desig: "2002 JQ9",
  		epoch: 2459200.5,
  		ma: 40.56278,
  		w: 76.07921,
  		om: 51.90835,
  		i: 24.99671,
  		e: 0.3944726,
  		a: 1.1562154
  	},
  	{
  		H: 20.9,
  		desig: "2002 KG4",
  		epoch: 2459200.5,
  		ma: 251.35142,
  		w: 149.78376,
  		om: 64.50224,
  		i: 27.6389,
  		e: 0.6631378,
  		a: 2.9384818
  	},
  	{
  		H: 21,
  		desig: "2002 KK8",
  		epoch: 2459200.5,
  		ma: 282.26347,
  		w: 174.16999,
  		om: 76.98289,
  		i: 24.52878,
  		e: 0.4659089,
  		a: 1.9538668
  	},
  	{
  		H: 20.9,
  		desig: "2002 LX",
  		epoch: 2459200.5,
  		ma: 249.60486,
  		w: 345.27909,
  		om: 197.6274,
  		i: 3.23605,
  		e: 0.6698512,
  		a: 2.5133187
  	},
  	{
  		H: 21.2,
  		desig: "2002 LX64",
  		epoch: 2459200.5,
  		ma: 297.45294,
  		w: 230.85615,
  		om: 285.60683,
  		i: 4.85067,
  		e: 0.5708807,
  		a: 1.3570505
  	},
  	{
  		H: 21.7,
  		desig: "2002 MX",
  		epoch: 2459200.5,
  		ma: 252.79147,
  		w: 237.96126,
  		om: 283.9032,
  		i: 1.95447,
  		e: 0.7964295,
  		a: 2.504019
  	},
  	{
  		H: 21.4,
  		desig: "2002 MR3",
  		epoch: 2459200.5,
  		ma: 18.84568,
  		w: 67.27972,
  		om: 110.3115,
  		i: 9.79033,
  		e: 0.6205089,
  		a: 1.5063309
  	},
  	{
  		H: 19.9,
  		desig: "2002 MT3",
  		epoch: 2459200.5,
  		ma: 347.40231,
  		w: 25.30051,
  		om: 168.4101,
  		i: 6.51163,
  		e: 0.6903941,
  		a: 2.8070548
  	},
  	{
  		H: 19,
  		desig: "2002 NY40",
  		epoch: 2459200.5,
  		ma: 72.85914,
  		w: 269.86572,
  		om: 145.30516,
  		i: 5.89408,
  		e: 0.7077928,
  		a: 2.0502757
  	},
  	{
  		H: 21.9,
  		desig: "2002 PR1",
  		epoch: 2459200.5,
  		ma: 226.92414,
  		w: 208.34381,
  		om: 148.28503,
  		i: 6.58787,
  		e: 0.5878949,
  		a: 2.4924556
  	},
  	{
  		H: 20.9,
  		desig: "2002 PF43",
  		epoch: 2459200.5,
  		ma: 250.87567,
  		w: 191.60414,
  		om: 142.76057,
  		i: 13.86127,
  		e: 0.3662214,
  		a: 1.6437268
  	},
  	{
  		H: 18.2,
  		desig: "2002 PE130",
  		epoch: 2459200.5,
  		ma: 160.8706,
  		w: 33.94421,
  		om: 357.20367,
  		i: 15.5544,
  		e: 0.6246454,
  		a: 2.5511031
  	},
  	{
  		H: 20.3,
  		desig: "2002 QH10",
  		epoch: 2459200.5,
  		ma: 3.33208,
  		w: 23.75037,
  		om: 0.32762,
  		i: 4.78329,
  		e: 0.5594438,
  		a: 2.3629378
  	},
  	{
  		H: 21.5,
  		desig: "2002 QQ40",
  		epoch: 2459200.5,
  		ma: 183.72183,
  		w: 356.52239,
  		om: 104.06819,
  		i: 1.72197,
  		e: 0.5641277,
  		a: 1.2150375
  	},
  	{
  		H: 20.5,
  		desig: "2002 QW47",
  		epoch: 2459200.5,
  		ma: 244.24322,
  		w: 140.91767,
  		om: 116.29159,
  		i: 4.22138,
  		e: 0.5181552,
  		a: 1.9716422
  	},
  	{
  		H: 20.1,
  		desig: "2002 SQ41",
  		epoch: 2459200.5,
  		ma: 102.60337,
  		w: 95.88217,
  		om: 21.7931,
  		i: 25.10996,
  		e: 0.7998485,
  		a: 2.6104199
  	},
  	{
  		H: 21.9,
  		desig: "2002 TP69",
  		epoch: 2459200.5,
  		ma: 238.92112,
  		w: 316.76534,
  		om: 94.62997,
  		i: 1.96779,
  		e: 0.4693439,
  		a: 1.9455064
  	},
  	{
  		H: 21.6,
  		desig: "2002 TB70",
  		epoch: 2459200.5,
  		ma: 223.6278,
  		w: 350.84971,
  		om: 195.03366,
  		i: 16.65864,
  		e: 0.1317659,
  		a: 1.1328376
  	},
  	{
  		H: 21.9,
  		desig: "2002 UK11",
  		epoch: 2459200.5,
  		ma: 281.10386,
  		w: 84.41646,
  		om: 69.25394,
  		i: 5.3679,
  		e: 0.575599,
  		a: 1.3229566
  	},
  	{
  		H: 17.9,
  		desig: "2002 VP69",
  		epoch: 2459200.5,
  		ma: 82.63422,
  		w: 188.76533,
  		om: 306.93975,
  		i: 10.15751,
  		e: 0.5283772,
  		a: 2.0183111
  	},
  	{
  		H: 20.3,
  		desig: "2002 VR85",
  		epoch: 2459200.5,
  		ma: 113.85647,
  		w: 298.91294,
  		om: 204.74238,
  		i: 6.01405,
  		e: 0.603533,
  		a: 1.8152629
  	},
  	{
  		H: 19.3,
  		desig: "2003 AY2",
  		epoch: 2459000.5,
  		ma: 358.64592,
  		w: 285.95691,
  		om: 275.02031,
  		i: 10.32273,
  		e: 0.5638399,
  		a: 1.8226868
  	},
  	{
  		H: 20.2,
  		desig: "2003 AA3",
  		epoch: 2459200.5,
  		ma: 217.17058,
  		w: 347.01061,
  		om: 106.40431,
  		i: 13.78351,
  		e: 0.289172,
  		a: 1.4210573
  	},
  	{
  		H: 21.9,
  		desig: "2003 AC23",
  		epoch: 2459200.5,
  		ma: 204.73015,
  		w: 126.46996,
  		om: 43.73126,
  		i: 2.05957,
  		e: 0.5822239,
  		a: 2.1700901
  	},
  	{
  		H: 21.02,
  		desig: "2003 AF23",
  		epoch: 2459200.5,
  		ma: 68.58846,
  		w: 43.96758,
  		om: 286.76708,
  		i: 23.22688,
  		e: 0.4259298,
  		a: 0.8746592
  	},
  	{
  		H: 20.9,
  		desig: "2003 BB21",
  		epoch: 2459200.5,
  		ma: 114.74698,
  		w: 212.80363,
  		om: 344.13205,
  		i: 4.77229,
  		e: 0.5537934,
  		a: 2.2309481
  	},
  	{
  		H: 17.8,
  		desig: "2003 BK47",
  		epoch: 2459200.5,
  		ma: 15.96171,
  		w: 235.2359,
  		om: 138.86066,
  		i: 20.66884,
  		e: 0.706043,
  		a: 2.7484144
  	},
  	{
  		H: 21.4,
  		desig: "2003 BR47",
  		epoch: 2459200.5,
  		ma: 237.88178,
  		w: 112.68064,
  		om: 314.4397,
  		i: 4.42288,
  		e: 0.5002317,
  		a: 1.6283905
  	},
  	{
  		H: 20.5,
  		desig: "2003 CG11",
  		epoch: 2459200.5,
  		ma: 86.95985,
  		w: 107.1886,
  		om: 130.42777,
  		i: 21.28466,
  		e: 0.7350226,
  		a: 2.590262
  	},
  	{
  		H: 19.3,
  		desig: "2003 EG16",
  		epoch: 2459200.5,
  		ma: 267.37808,
  		w: 110.61743,
  		om: 151.33232,
  		i: 20.37993,
  		e: 0.6887887,
  		a: 2.3933893
  	},
  	{
  		H: 22,
  		desig: "2003 GG21",
  		epoch: 2459200.5,
  		ma: 247.64373,
  		w: 97.14639,
  		om: 11.2421,
  		i: 10.14604,
  		e: 0.7117044,
  		a: 2.1418553
  	},
  	{
  		H: 21.48,
  		desig: "2003 GQ22",
  		epoch: 2459200.5,
  		ma: 86.49954,
  		w: 168.76068,
  		om: 199.50249,
  		i: 17.0201,
  		e: 0.181911,
  		a: 0.8719953
  	},
  	{
  		H: 22,
  		desig: "2003 GR22",
  		epoch: 2459200.5,
  		ma: 48.24634,
  		w: 276.81631,
  		om: 23.44466,
  		i: 6.1699,
  		e: 0.6087155,
  		a: 1.5450295
  	},
  	{
  		H: 22,
  		desig: "2003 GP51",
  		epoch: 2459200.5,
  		ma: 225.55296,
  		w: 357.62993,
  		om: 141.73377,
  		i: 2.86987,
  		e: 0.6041567,
  		a: 2.1543814
  	},
  	{
  		H: 21.8,
  		desig: "2003 HM",
  		epoch: 2459200.5,
  		ma: 171.2829,
  		w: 19.32269,
  		om: 30.46145,
  		i: 26.27404,
  		e: 0.2698895,
  		a: 0.8134607
  	},
  	{
  		H: 20.4,
  		desig: "2003 MU",
  		epoch: 2459200.5,
  		ma: 320.42766,
  		w: 175.61715,
  		om: 143.63931,
  		i: 5.89705,
  		e: 0.4950983,
  		a: 2.0528731
  	},
  	{
  		H: 21.29,
  		desig: "2003 MS2",
  		epoch: 2459200.5,
  		ma: 90.09604,
  		w: 254.45476,
  		om: 100.84961,
  		i: 20.02646,
  		e: 0.1262919,
  		a: 1.0419834
  	},
  	{
  		H: 20.9,
  		desig: "2003 MK4",
  		epoch: 2459200.5,
  		ma: 109.88844,
  		w: 109.63016,
  		om: 282.59997,
  		i: 22.31762,
  		e: 0.1812078,
  		a: 1.0804072
  	},
  	{
  		H: 18.8,
  		desig: "2003 OC3",
  		epoch: 2459000.5,
  		ma: 17.90082,
  		w: 23.04415,
  		om: 172.35182,
  		i: 13.10602,
  		e: 0.5953811,
  		a: 2.253823
  	},
  	{
  		H: 21.7,
  		desig: "2003 RS1",
  		epoch: 2459200.5,
  		ma: 248.75351,
  		w: 164.11201,
  		om: 172.34339,
  		i: 2.65685,
  		e: 0.641979,
  		a: 2.7754523
  	},
  	{
  		H: 21.2,
  		desig: "2003 RB5",
  		epoch: 2459200.5,
  		ma: 271.92157,
  		w: 27.89466,
  		om: 341.84164,
  		i: 44.43264,
  		e: 0.4674479,
  		a: 1.8659047
  	},
  	{
  		H: 21.2,
  		desig: "2003 SK84",
  		epoch: 2459200.5,
  		ma: 82.87278,
  		w: 118.31154,
  		om: 344.11097,
  		i: 8.95233,
  		e: 0.7430385,
  		a: 2.5353609
  	},
  	{
  		H: 21.8,
  		desig: "2003 SS84",
  		epoch: 2459200.5,
  		ma: 131.43261,
  		w: 234.90135,
  		om: 198.19367,
  		i: 5.49232,
  		e: 0.5717594,
  		a: 1.9304592
  	},
  	{
  		H: 19.83,
  		desig: "2003 TK2",
  		epoch: 2459200.5,
  		ma: 296.55724,
  		w: 321.00803,
  		om: 0.9788,
  		i: 4.28842,
  		e: 0.6477081,
  		a: 2.3465224
  	},
  	{
  		H: 21.9,
  		desig: "2003 TO9",
  		epoch: 2459200.5,
  		ma: 185.25734,
  		w: 225.08561,
  		om: 198.01485,
  		i: 3.1119,
  		e: 0.6043917,
  		a: 2.4260842
  	},
  	{
  		H: 21.3,
  		desig: "2003 TR9",
  		epoch: 2459200.5,
  		ma: 89.30129,
  		w: 71.03652,
  		om: 198.38462,
  		i: 13.46608,
  		e: 0.701582,
  		a: 1.6414546
  	},
  	{
  		H: 20.3,
  		desig: "2003 UX5",
  		epoch: 2459200.5,
  		ma: 294.68262,
  		w: 50.39939,
  		om: 50.52479,
  		i: 21.44563,
  		e: 0.3407257,
  		a: 1.4410131
  	},
  	{
  		H: 19.3,
  		desig: "2003 VE1",
  		epoch: 2459200.5,
  		ma: 135.41068,
  		w: 323.27337,
  		om: 29.53885,
  		i: 16.33072,
  		e: 0.4950981,
  		a: 1.9426992
  	},
  	{
  		H: 19.1,
  		desig: "2003 WG",
  		epoch: 2459200.5,
  		ma: 187.3279,
  		w: 261.95179,
  		om: 46.68771,
  		i: 27.13956,
  		e: 0.7841796,
  		a: 2.4390404
  	},
  	{
  		H: 21.5,
  		desig: "2003 WP21",
  		epoch: 2459200.5,
  		ma: 348.66585,
  		w: 124.03071,
  		om: 37.65369,
  		i: 4.29483,
  		e: 0.7848585,
  		a: 2.2619545
  	},
  	{
  		H: 20.4,
  		desig: "2003 WC158",
  		epoch: 2459200.5,
  		ma: 358.83908,
  		w: 144.42458,
  		om: 251.10531,
  		i: 9.01168,
  		e: 0.6273802,
  		a: 2.6396697
  	},
  	{
  		H: 22,
  		desig: "2003 WH166",
  		epoch: 2459200.5,
  		ma: 90.43822,
  		w: 328.81674,
  		om: 186.10499,
  		i: 0.69269,
  		e: 0.5563823,
  		a: 1.9377005
  	},
  	{
  		H: 21.8,
  		desig: "2003 YP1",
  		epoch: 2459200.5,
  		ma: 347.65019,
  		w: 131.35725,
  		om: 276.74448,
  		i: 7.48622,
  		e: 0.6418543,
  		a: 2.6554055
  	},
  	{
  		H: 21.6,
  		desig: "2003 YS17",
  		epoch: 2459200.5,
  		ma: 222.0448,
  		w: 134.59315,
  		om: 98.93926,
  		i: 6.52817,
  		e: 0.3129214,
  		a: 0.9302167
  	},
  	{
  		H: 21,
  		desig: "2003 YD45",
  		epoch: 2459200.5,
  		ma: 128.55957,
  		w: 104.91212,
  		om: 252.25229,
  		i: 8.42212,
  		e: 0.6930956,
  		a: 2.4972793
  	},
  	{
  		H: 21.6,
  		desig: "2003 YL118",
  		epoch: 2459200.5,
  		ma: 97.95922,
  		w: 65.71237,
  		om: 278.7352,
  		i: 7.61128,
  		e: 0.4862141,
  		a: 1.1305719
  	},
  	{
  		H: 19.4,
  		desig: "2003 YH136",
  		epoch: 2459200.5,
  		ma: 243.86445,
  		w: 307.77463,
  		om: 302.89025,
  		i: 16.72586,
  		e: 0.8927802,
  		a: 2.3499846
  	},
  	{
  		H: 21.6,
  		desig: "2004 CO49",
  		epoch: 2459200.5,
  		ma: 194.96085,
  		w: 315.95831,
  		om: 115.13585,
  		i: 4.26182,
  		e: 0.3883612,
  		a: 1.374745
  	},
  	{
  		H: 20.7,
  		desig: "2004 DM44",
  		epoch: 2459200.5,
  		ma: 125.21655,
  		w: 95.69412,
  		om: 350.7405,
  		i: 10.54059,
  		e: 0.7111935,
  		a: 2.4765744
  	},
  	{
  		H: 20.9,
  		desig: "2004 FW1",
  		epoch: 2459200.5,
  		ma: 41.19547,
  		w: 91.21469,
  		om: 194.61679,
  		i: 10.1628,
  		e: 0.7172253,
  		a: 1.6104397
  	},
  	{
  		H: 20.9,
  		desig: "2004 FJ11",
  		epoch: 2459200.5,
  		ma: 323.4089,
  		w: 232.55051,
  		om: 20.89911,
  		i: 2.38824,
  		e: 0.5616514,
  		a: 2.2488732
  	},
  	{
  		H: 21.9,
  		desig: "2004 FY31",
  		epoch: 2459200.5,
  		ma: 75.85037,
  		w: 197.45605,
  		om: 28.76755,
  		i: 11.19978,
  		e: 0.5560256,
  		a: 2.1671174
  	},
  	{
  		H: 21,
  		desig: "2004 GB2",
  		epoch: 2459200.5,
  		ma: 172.78721,
  		w: 255.16144,
  		om: 209.23459,
  		i: 12.41865,
  		e: 0.6502991,
  		a: 2.1182658
  	},
  	{
  		H: 21.5,
  		desig: "2004 GE2",
  		epoch: 2459200.5,
  		ma: 241.96367,
  		w: 261.06128,
  		om: 44.23982,
  		i: 2.15278,
  		e: 0.7064033,
  		a: 2.039655
  	},
  	{
  		H: 21.1,
  		desig: "2004 HD2",
  		epoch: 2459200.5,
  		ma: 262.04204,
  		w: 63.99265,
  		om: 24.66875,
  		i: 15.1117,
  		e: 0.8324006,
  		a: 2.3337086
  	},
  	{
  		H: 20.5,
  		desig: "2004 HF12",
  		epoch: 2459200.5,
  		ma: 136.50924,
  		w: 105.27509,
  		om: 22.40651,
  		i: 13.35501,
  		e: 0.6501746,
  		a: 2.1360843
  	},
  	{
  		H: 21.5,
  		desig: "2004 HC39",
  		epoch: 2459200.5,
  		ma: 273.53411,
  		w: 224.24945,
  		om: 56.07216,
  		i: 14.65402,
  		e: 0.5005419,
  		a: 1.8126716
  	},
  	{
  		H: 21,
  		desig: "2004 KB",
  		epoch: 2459200.5,
  		ma: 19.16289,
  		w: 243.24063,
  		om: 230.93871,
  		i: 20.6771,
  		e: 0.2890512,
  		a: 1.1880021
  	},
  	{
  		H: 21.5,
  		desig: "2004 KE17",
  		epoch: 2459200.5,
  		ma: 211.88802,
  		w: 175.39964,
  		om: 68.86994,
  		i: 26.9513,
  		e: 0.6209783,
  		a: 2.7690855
  	},
  	{
  		H: 21.6,
  		desig: "2004 LB",
  		epoch: 2459000.5,
  		ma: 157.1086,
  		w: 144.69015,
  		om: 254.0204,
  		i: 37.3267,
  		e: 0.0528832,
  		a: 1.0512995
  	},
  	{
  		H: 21.5,
  		desig: "2004 LY5",
  		epoch: 2459200.5,
  		ma: 225.76089,
  		w: 295.59915,
  		om: 86.86355,
  		i: 16.03697,
  		e: 0.7772677,
  		a: 1.8274471
  	},
  	{
  		H: 20.2,
  		desig: "2004 MD",
  		epoch: 2459000.5,
  		ma: 20.76266,
  		w: 124.18675,
  		om: 85.49194,
  		i: 9.76553,
  		e: 0.5375832,
  		a: 1.9159675
  	},
  	{
  		H: 19.3,
  		desig: "2004 MX2",
  		epoch: 2459200.5,
  		ma: 193.44708,
  		w: 243.6716,
  		om: 116.20504,
  		i: 18.10197,
  		e: 0.718466,
  		a: 2.7628817
  	},
  	{
  		H: 21.7,
  		desig: "2004 MP7",
  		epoch: 2459200.5,
  		ma: 243.74672,
  		w: 112.11796,
  		om: 95.31487,
  		i: 17.64099,
  		e: 0.7194959,
  		a: 2.7238137
  	},
  	{
  		H: 21.4,
  		desig: "2004 PJ2",
  		epoch: 2459200.5,
  		ma: 286.93886,
  		w: 281.67744,
  		om: 317.17377,
  		i: 2.57752,
  		e: 0.3418539,
  		a: 1.418315
  	},
  	{
  		H: 21.3,
  		desig: "2004 PS42",
  		epoch: 2459200.5,
  		ma: 325.55289,
  		w: 323.43079,
  		om: 304.31971,
  		i: 23.19466,
  		e: 0.1672867,
  		a: 1.2418483
  	},
  	{
  		H: 19.8,
  		desig: "2004 QB",
  		epoch: 2459200.5,
  		ma: 135.88785,
  		w: 111.54767,
  		om: 131.39931,
  		i: 11.01963,
  		e: 0.6542703,
  		a: 2.1093124
  	},
  	{
  		H: 21.7,
  		desig: "2004 QX2",
  		epoch: 2459200.5,
  		ma: 102.12349,
  		w: 218.87996,
  		om: 320.10844,
  		i: 18.9701,
  		e: 0.9026803,
  		a: 1.2866462
  	},
  	{
  		H: 20.9,
  		desig: "2004 RQ10",
  		epoch: 2459200.5,
  		ma: 147.14216,
  		w: 349.5437,
  		om: 335.23062,
  		i: 5.68402,
  		e: 0.4415069,
  		a: 1.8652317
  	},
  	{
  		H: 20.9,
  		desig: "2004 RW10",
  		epoch: 2459200.5,
  		ma: 195.28857,
  		w: 71.83247,
  		om: 206.12383,
  		i: 3.10841,
  		e: 0.5930775,
  		a: 2.3526344
  	},
  	{
  		H: 21.1,
  		desig: "2004 RY10",
  		epoch: 2459200.5,
  		ma: 144.82944,
  		w: 283.46086,
  		om: 165.72518,
  		i: 15.52112,
  		e: 0.6229977,
  		a: 1.6770768
  	},
  	{
  		H: 21.9,
  		desig: "2004 RE84",
  		epoch: 2459200.5,
  		ma: 149.49114,
  		w: 131.84044,
  		om: 321.93962,
  		i: 1.99688,
  		e: 0.6059174,
  		a: 1.6740759
  	},
  	{
  		H: 18.4,
  		desig: "2004 RF84",
  		epoch: 2459200.5,
  		ma: 358.06359,
  		w: 122.66445,
  		om: 344.52864,
  		i: 23.29168,
  		e: 0.603921,
  		a: 2.1639764
  	},
  	{
  		H: 19,
  		desig: "2004 RY109",
  		epoch: 2459200.5,
  		ma: 327.18811,
  		w: 306.85769,
  		om: 352.36742,
  		i: 26.1351,
  		e: 0.4250946,
  		a: 1.6273667
  	},
  	{
  		H: 19,
  		desig: "2004 RZ164",
  		epoch: 2459200.5,
  		ma: 331.88808,
  		w: 345.91231,
  		om: 74.75724,
  		i: 13.83651,
  		e: 0.6065028,
  		a: 2.5644712
  	},
  	{
  		H: 21.9,
  		desig: "2004 SS",
  		epoch: 2459200.5,
  		ma: 358.47414,
  		w: 353.2933,
  		om: 1.38178,
  		i: 6.51951,
  		e: 0.5289849,
  		a: 2.1971685
  	},
  	{
  		H: 21.8,
  		desig: "2004 TN1",
  		epoch: 2459200.5,
  		ma: 183.49491,
  		w: 233.85012,
  		om: 213.75034,
  		i: 8.39727,
  		e: 0.6955295,
  		a: 2.7513487
  	},
  	{
  		H: 20.7,
  		desig: "2004 TP1",
  		epoch: 2459200.5,
  		ma: 322.31756,
  		w: 87.78274,
  		om: 30.07306,
  		i: 7.48337,
  		e: 0.3892477,
  		a: 1.2903593
  	},
  	{
  		H: 21.4,
  		desig: "2004 TB10",
  		epoch: 2459200.5,
  		ma: 204.43683,
  		w: 149.88304,
  		om: 12.83336,
  		i: 22.50399,
  		e: 0.0937651,
  		a: 1.1033929
  	},
  	{
  		H: 19.4,
  		desig: "2004 TG10",
  		epoch: 2459200.5,
  		ma: 272.46025,
  		w: 317.38054,
  		om: 205.07353,
  		i: 4.18279,
  		e: 0.8619584,
  		a: 2.2334449
  	},
  	{
  		H: 21.3,
  		desig: "2004 TL10",
  		epoch: 2459200.5,
  		ma: 269.46694,
  		w: 325.52684,
  		om: 9.97724,
  		i: 9.50966,
  		e: 0.6580491,
  		a: 2.649792
  	},
  	{
  		H: 21,
  		desig: "2004 UE",
  		epoch: 2459200.5,
  		ma: 277.75202,
  		w: 217.49652,
  		om: 225.60071,
  		i: 14.58765,
  		e: 0.6453124,
  		a: 2.6319155
  	},
  	{
  		H: 20.5,
  		desig: "2004 UR1",
  		epoch: 2459200.5,
  		ma: 29.44193,
  		w: 73.37466,
  		om: 250.98927,
  		i: 4.07832,
  		e: 0.6164968,
  		a: 2.1755537
  	},
  	{
  		H: 17.7,
  		desig: "2004 UV1",
  		epoch: 2459200.5,
  		ma: 131.45631,
  		w: 20.48227,
  		om: 76.43287,
  		i: 20.801,
  		e: 0.6517046,
  		a: 2.8179876
  	},
  	{
  		H: 21,
  		desig: "2004 WK1",
  		epoch: 2459200.5,
  		ma: 136.98728,
  		w: 223.14074,
  		om: 51.80406,
  		i: 34.46928,
  		e: 0.7301344,
  		a: 1.0844193
  	},
  	{
  		H: 21.6,
  		desig: "2004 XO",
  		epoch: 2459200.5,
  		ma: 175.03286,
  		w: 71.47423,
  		om: 249.97878,
  		i: 26.03886,
  		e: 0.0968201,
  		a: 1.0352565
  	},
  	{
  		H: 19.4,
  		desig: "2004 XP14",
  		epoch: 2459200.5,
  		ma: 215.20755,
  		w: 273.70224,
  		om: 281.02624,
  		i: 32.94817,
  		e: 0.15863,
  		a: 1.0519173
  	},
  	{
  		H: 22,
  		desig: "2004 XN29",
  		epoch: 2459200.5,
  		ma: 98.95051,
  		w: 37.22934,
  		om: 319.73259,
  		i: 2.36769,
  		e: 0.704308,
  		a: 2.4280265
  	},
  	{
  		H: 20.5,
  		desig: "2005 AV27",
  		epoch: 2459200.5,
  		ma: 233.56143,
  		w: 138.84268,
  		om: 67.96587,
  		i: 5.86089,
  		e: 0.6521608,
  		a: 2.2537774
  	},
  	{
  		H: 20.3,
  		desig: "2005 CL",
  		epoch: 2459000.5,
  		ma: 135.1245,
  		w: 298.43241,
  		om: 318.52626,
  		i: 4.44287,
  		e: 0.7540909,
  		a: 1.9876091
  	},
  	{
  		H: 20.3,
  		desig: "2005 DD",
  		epoch: 2459200.5,
  		ma: 357.64091,
  		w: 252.29166,
  		om: 157.15017,
  		i: 7.32562,
  		e: 0.5676436,
  		a: 1.9342666
  	},
  	{
  		H: 21,
  		desig: "2005 EA",
  		epoch: 2459200.5,
  		ma: 177.18322,
  		w: 298.8843,
  		om: 346.89221,
  		i: 14.05862,
  		e: 0.6393955,
  		a: 1.3013522
  	},
  	{
  		H: 21.3,
  		desig: "2005 EO33",
  		epoch: 2459200.5,
  		ma: 273.92932,
  		w: 158.78794,
  		om: 289.52444,
  		i: 4.61821,
  		e: 0.5719254,
  		a: 1.9720911
  	},
  	{
  		H: 19.7,
  		desig: "2005 EW169",
  		epoch: 2459200.5,
  		ma: 137.65633,
  		w: 221.84828,
  		om: 223.58896,
  		i: 1.50609,
  		e: 0.5691367,
  		a: 2.3813725
  	},
  	{
  		H: 19.3,
  		desig: "2005 FE3",
  		epoch: 2459200.5,
  		ma: 25.26963,
  		w: 145.20069,
  		om: 90.55859,
  		i: 13.11291,
  		e: 0.5316082,
  		a: 2.116612
  	},
  	{
  		H: 20,
  		desig: "2005 GU",
  		epoch: 2459200.5,
  		ma: 8.81999,
  		w: 275.78745,
  		om: 26.89906,
  		i: 25.0491,
  		e: 0.6148563,
  		a: 1.5515999
  	},
  	{
  		H: 20.4,
  		desig: "2005 GJ8",
  		epoch: 2459200.5,
  		ma: 274.88131,
  		w: 214.77856,
  		om: 252.63227,
  		i: 3.39305,
  		e: 0.5512113,
  		a: 1.7668575
  	},
  	{
  		H: 21.9,
  		desig: "2005 GY8",
  		epoch: 2459200.5,
  		ma: 102.85218,
  		w: 103.45454,
  		om: 179.69955,
  		i: 2.8297,
  		e: 0.6732799,
  		a: 2.0472208
  	},
  	{
  		H: 21.7,
  		desig: "2005 GD60",
  		epoch: 2459200.5,
  		ma: 28.95961,
  		w: 100.07209,
  		om: 199.07701,
  		i: 9.89521,
  		e: 0.3742624,
  		a: 1.3299276
  	},
  	{
  		H: 21.6,
  		desig: "2005 GH81",
  		epoch: 2459200.5,
  		ma: 292.81552,
  		w: 118.55868,
  		om: 19.59553,
  		i: 11.72405,
  		e: 0.5456736,
  		a: 1.9467009
  	},
  	{
  		H: 21.6,
  		desig: "2005 JU1",
  		epoch: 2459200.5,
  		ma: 116.34372,
  		w: 269.50637,
  		om: 33.04695,
  		i: 6.06729,
  		e: 0.686106,
  		a: 2.3370408
  	},
  	{
  		H: 21.8,
  		desig: "2005 JU81",
  		epoch: 2459200.5,
  		ma: 150.40458,
  		w: 72.46014,
  		om: 56.33318,
  		i: 17.28779,
  		e: 0.2774833,
  		a: 1.1164291
  	},
  	{
  		H: 21.3,
  		desig: "2005 KJ10",
  		epoch: 2459200.5,
  		ma: 321.27417,
  		w: 234.01062,
  		om: 81.16399,
  		i: 8.2138,
  		e: 0.58339,
  		a: 1.898136
  	},
  	{
  		H: 21.6,
  		desig: "2005 LW3",
  		epoch: 2459200.5,
  		ma: 341.6439,
  		w: 288.20261,
  		om: 59.61899,
  		i: 6.04788,
  		e: 0.4620988,
  		a: 1.4311148
  	},
  	{
  		H: 20.8,
  		desig: "2005 LX36",
  		epoch: 2459200.5,
  		ma: 6.03164,
  		w: 239.11757,
  		om: 252.75926,
  		i: 32.9756,
  		e: 0.5754192,
  		a: 1.0298996
  	},
  	{
  		H: 20,
  		desig: "2005 LW39",
  		epoch: 2459200.5,
  		ma: 208.79594,
  		w: 275.14526,
  		om: 251.54357,
  		i: 28.45966,
  		e: 0.7161005,
  		a: 1.9874877
  	},
  	{
  		H: 19,
  		desig: "2005 NE7",
  		epoch: 2459200.5,
  		ma: 75.20565,
  		w: 306.9627,
  		om: 80.30734,
  		i: 9.5274,
  		e: 0.6465617,
  		a: 2.0470225
  	},
  	{
  		H: 20.6,
  		desig: "2005 OX",
  		epoch: 2459200.5,
  		ma: 323.37053,
  		w: 100.44175,
  		om: 323.62839,
  		i: 7.61689,
  		e: 0.6174857,
  		a: 1.3311035
  	},
  	{
  		H: 21.2,
  		desig: "2005 OD3",
  		epoch: 2459200.5,
  		ma: 64.39035,
  		w: 38.27226,
  		om: 323.74995,
  		i: 16.19723,
  		e: 0.602956,
  		a: 2.3732452
  	},
  	{
  		H: 20.3,
  		desig: "2005 OE3",
  		epoch: 2459200.5,
  		ma: 272.51487,
  		w: 58.3889,
  		om: 321.04318,
  		i: 25.37157,
  		e: 0.4284538,
  		a: 1.5667645
  	},
  	{
  		H: 21.8,
  		desig: "2005 PA5",
  		epoch: 2459200.5,
  		ma: 62.1284,
  		w: 149.03336,
  		om: 133.06192,
  		i: 15.32907,
  		e: 0.2268235,
  		a: 1.3215874
  	},
  	{
  		H: 20.3,
  		desig: "2005 QZ151",
  		epoch: 2459200.5,
  		ma: 212.12479,
  		w: 63.13186,
  		om: 20.7807,
  		i: 4.84949,
  		e: 0.5798241,
  		a: 1.9376517
  	},
  	{
  		H: 19.7,
  		desig: "2005 RC34",
  		epoch: 2459200.5,
  		ma: 61.36776,
  		w: 36.12539,
  		om: 290.96619,
  		i: 10.7691,
  		e: 0.5131935,
  		a: 2.061138
  	},
  	{
  		H: 20.2,
  		desig: "2005 SQ",
  		epoch: 2459200.5,
  		ma: 100.61245,
  		w: 294.86755,
  		om: 317.25238,
  		i: 1.20042,
  		e: 0.5744081,
  		a: 1.654827
  	},
  	{
  		H: 20.8,
  		desig: "2005 TP",
  		epoch: 2459200.5,
  		ma: 132.70617,
  		w: 353.73414,
  		om: 86.40472,
  		i: 7.88201,
  		e: 0.5886824,
  		a: 2.2774105
  	},
  	{
  		H: 21.1,
  		desig: "2005 TS15",
  		epoch: 2459200.5,
  		ma: 195.45606,
  		w: 106.09697,
  		om: 16.20857,
  		i: 33.99545,
  		e: 0.3530039,
  		a: 1.2605126
  	},
  	{
  		H: 19,
  		desig: "2005 TF49",
  		epoch: 2459200.5,
  		ma: 166.40953,
  		w: 302.45404,
  		om: 25.73007,
  		i: 24.5486,
  		e: 0.0253942,
  		a: 1.0419457
  	},
  	{
  		H: 20.2,
  		desig: "2005 TR50",
  		epoch: 2459200.5,
  		ma: 120.40781,
  		w: 49.27866,
  		om: 29.44398,
  		i: 34.0471,
  		e: 0.4559805,
  		a: 1.614214
  	},
  	{
  		H: 21.4,
  		desig: "2005 TU50",
  		epoch: 2459200.5,
  		ma: 359.9591,
  		w: 259.57973,
  		om: 22.27256,
  		i: 12.42131,
  		e: 0.5964721,
  		a: 1.4260212
  	},
  	{
  		H: 21.6,
  		desig: "2005 UR",
  		epoch: 2459200.5,
  		ma: 156.38267,
  		w: 141.18689,
  		om: 19.35495,
  		i: 6.9774,
  		e: 0.879438,
  		a: 2.2570939
  	},
  	{
  		H: 21.8,
  		desig: "2005 UW6",
  		epoch: 2459200.5,
  		ma: 51.26559,
  		w: 180.55353,
  		om: 334.71503,
  		i: 0.91401,
  		e: 0.7400654,
  		a: 2.0381779
  	},
  	{
  		H: 20.2,
  		desig: "2005 UT64",
  		epoch: 2459200.5,
  		ma: 21.12881,
  		w: 327.39727,
  		om: 161.57796,
  		i: 10.51081,
  		e: 0.5222791,
  		a: 1.82096
  	},
  	{
  		H: 19.8,
  		desig: "2005 VO5",
  		epoch: 2459200.5,
  		ma: 128.71397,
  		w: 241.98654,
  		om: 100.99506,
  		i: 14.24443,
  		e: 0.5611764,
  		a: 2.0090632
  	},
  	{
  		H: 21.3,
  		desig: "2005 VR7",
  		epoch: 2459200.5,
  		ma: 198.48102,
  		w: 101.06276,
  		om: 254.87386,
  		i: 25.24927,
  		e: 0.2871445,
  		a: 1.0828719
  	},
  	{
  		H: 21.9,
  		desig: "2005 WD",
  		epoch: 2458600.5,
  		ma: 308.27985,
  		w: 160.96732,
  		om: 227.679,
  		i: 26.15706,
  		e: 0.5600458,
  		a: 2.307363
  	},
  	{
  		H: 21.6,
  		desig: "2005 WA1",
  		epoch: 2459200.5,
  		ma: 89.50304,
  		w: 241.6673,
  		om: 247.24853,
  		i: 10.93138,
  		e: 0.5850131,
  		a: 2.0077838
  	},
  	{
  		H: 20.7,
  		desig: "2005 WY55",
  		epoch: 2459200.5,
  		ma: 280.75489,
  		w: 286.17636,
  		om: 248.18676,
  		i: 7.27481,
  		e: 0.7202501,
  		a: 2.4885022
  	},
  	{
  		H: 21.2,
  		desig: "2005 XT77",
  		epoch: 2459200.5,
  		ma: 26.96056,
  		w: 149.96214,
  		om: 84.8097,
  		i: 17.21852,
  		e: 0.266283,
  		a: 0.8411699
  	},
  	{
  		H: 19.8,
  		desig: "2005 YU3",
  		epoch: 2459200.5,
  		ma: 254.0194,
  		w: 341.48402,
  		om: 2.46986,
  		i: 3.01924,
  		e: 0.8414604,
  		a: 2.5514434
  	},
  	{
  		H: 20,
  		desig: "2005 YS8",
  		epoch: 2459200.5,
  		ma: 310.18722,
  		w: 298.34355,
  		om: 56.32942,
  		i: 17.37269,
  		e: 0.5289715,
  		a: 1.6956407
  	},
  	{
  		H: 20.4,
  		desig: "2005 YQ96",
  		epoch: 2459200.5,
  		ma: 321.93763,
  		w: 340.13124,
  		om: 282.6854,
  		i: 22.22349,
  		e: 0.3336106,
  		a: 0.7433866
  	},
  	{
  		H: 20.6,
  		desig: "2006 AR3",
  		epoch: 2459200.5,
  		ma: 323.53845,
  		w: 40.76886,
  		om: 12.3343,
  		i: 4.70799,
  		e: 0.6358813,
  		a: 2.4700867
  	},
  	{
  		H: 21.8,
  		desig: "2006 AM4",
  		epoch: 2459200.5,
  		ma: 39.34521,
  		w: 139.79034,
  		om: 123.19088,
  		i: 4.13536,
  		e: 0.6492076,
  		a: 0.9821941
  	},
  	{
  		H: 21.4,
  		desig: "2006 BX39",
  		epoch: 2459200.5,
  		ma: 223.41676,
  		w: 79.50487,
  		om: 140.13035,
  		i: 14.3333,
  		e: 0.6357419,
  		a: 1.9009188
  	},
  	{
  		H: 21.9,
  		desig: "2006 BE55",
  		epoch: 2459200.5,
  		ma: 69.87918,
  		w: 125.94747,
  		om: 125.69069,
  		i: 2.42497,
  		e: 0.4244945,
  		a: 1.1957069
  	},
  	{
  		H: 20.3,
  		desig: "2006 CF",
  		epoch: 2459200.5,
  		ma: 137.53105,
  		w: 268.59412,
  		om: 112.05855,
  		i: 4.66127,
  		e: 0.6788626,
  		a: 2.2931434
  	},
  	{
  		H: 22,
  		desig: "2006 CU",
  		epoch: 2459200.5,
  		ma: 44.4806,
  		w: 253.21937,
  		om: 148.73706,
  		i: 3.79738,
  		e: 0.4536738,
  		a: 1.5101359
  	},
  	{
  		H: 21.7,
  		desig: "2006 CM10",
  		epoch: 2459200.5,
  		ma: 255.71166,
  		w: 92.26801,
  		om: 143.09198,
  		i: 18.31162,
  		e: 0.7010325,
  		a: 2.1343483
  	},
  	{
  		H: 21.2,
  		desig: "2006 CT10",
  		epoch: 2459200.5,
  		ma: 8.53251,
  		w: 30.49877,
  		om: 111.21017,
  		i: 12.90423,
  		e: 0.6631879,
  		a: 2.8879466
  	},
  	{
  		H: 18,
  		desig: "2006 DU62",
  		epoch: 2459200.5,
  		ma: 64.63444,
  		w: 71.84347,
  		om: 322.11936,
  		i: 16.452,
  		e: 0.7380868,
  		a: 1.6397452
  	},
  	{
  		H: 20.34,
  		desig: "2006 GB",
  		epoch: 2459200.5,
  		ma: 338.59794,
  		w: 242.88272,
  		om: 183.81009,
  		i: 10.06295,
  		e: 0.1792098,
  		a: 0.9587958
  	},
  	{
  		H: 21,
  		desig: "2006 GC1",
  		epoch: 2459200.5,
  		ma: 245.76333,
  		w: 232.86348,
  		om: 196.15569,
  		i: 5.9685,
  		e: 0.8167236,
  		a: 1.7053549
  	},
  	{
  		H: 21.8,
  		desig: "2006 HC2",
  		epoch: 2459200.5,
  		ma: 179.16844,
  		w: 66.68118,
  		om: 198.19527,
  		i: 3.74809,
  		e: 0.4870124,
  		a: 1.7098764
  	},
  	{
  		H: 20.9,
  		desig: "2006 HD2",
  		epoch: 2459200.5,
  		ma: 51.1277,
  		w: 95.72945,
  		om: 30.31507,
  		i: 4.01821,
  		e: 0.6030431,
  		a: 2.029145
  	},
  	{
  		H: 19.8,
  		desig: "2006 HV5",
  		epoch: 2459200.5,
  		ma: 233.59611,
  		w: 317.53013,
  		om: 35.95888,
  		i: 32.00134,
  		e: 0.3162419,
  		a: 0.842275
  	},
  	{
  		H: 21.2,
  		desig: "2006 HQ30",
  		epoch: 2459200.5,
  		ma: 161.92859,
  		w: 180.06483,
  		om: 85.49894,
  		i: 12.02081,
  		e: 0.6069224,
  		a: 2.5964607
  	},
  	{
  		H: 20.2,
  		desig: "2006 HT30",
  		epoch: 2459200.5,
  		ma: 177.58517,
  		w: 224.05679,
  		om: 73.59398,
  		i: 1.63985,
  		e: 0.6176177,
  		a: 2.5664927
  	},
  	{
  		H: 20.4,
  		desig: "2006 HW57",
  		epoch: 2459200.5,
  		ma: 213.48289,
  		w: 34.06115,
  		om: 250.938,
  		i: 7.11713,
  		e: 0.51887,
  		a: 2.1467909
  	},
  	{
  		H: 22,
  		desig: "2006 KQ1",
  		epoch: 2459200.5,
  		ma: 293.41503,
  		w: 18.28401,
  		om: 88.65976,
  		i: 9.60726,
  		e: 0.175752,
  		a: 1.2447581
  	},
  	{
  		H: 20.4,
  		desig: "2006 KK21",
  		epoch: 2459200.5,
  		ma: 101.70735,
  		w: 285.45452,
  		om: 189.31382,
  		i: 12.43489,
  		e: 0.8713333,
  		a: 2.7238988
  	},
  	{
  		H: 18.5,
  		desig: "2006 KD40",
  		epoch: 2459200.5,
  		ma: 12.04521,
  		w: 217.90793,
  		om: 86.70977,
  		i: 21.10753,
  		e: 0.5128503,
  		a: 2.0167605
  	},
  	{
  		H: 19.7,
  		desig: "2006 KY86",
  		epoch: 2459200.5,
  		ma: 77.89339,
  		w: 321.2293,
  		om: 222.65599,
  		i: 7.40865,
  		e: 0.6454188,
  		a: 2.3005673
  	},
  	{
  		H: 21.4,
  		desig: "2006 KN89",
  		epoch: 2459200.5,
  		ma: 4.70498,
  		w: 108.71453,
  		om: 217.33459,
  		i: 5.81896,
  		e: 0.5312979,
  		a: 1.7891857
  	},
  	{
  		H: 19.7,
  		desig: "2006 LK",
  		epoch: 2459200.5,
  		ma: 336.37385,
  		w: 194.2445,
  		om: 157.77966,
  		i: 10.1789,
  		e: 0.6389613,
  		a: 2.8555193
  	},
  	{
  		H: 20.9,
  		desig: "2006 LD1",
  		epoch: 2459200.5,
  		ma: 14.28456,
  		w: 276.16458,
  		om: 65.48621,
  		i: 5.96695,
  		e: 0.7029332,
  		a: 2.3272178
  	},
  	{
  		H: 21.3,
  		desig: "2006 ON1",
  		epoch: 2459200.5,
  		ma: 183.02341,
  		w: 51.59174,
  		om: 287.7431,
  		i: 3.50153,
  		e: 0.609079,
  		a: 2.5561363
  	},
  	{
  		H: 19.7,
  		desig: "2006 PA1",
  		epoch: 2459200.5,
  		ma: 308.73636,
  		w: 85.81359,
  		om: 322.23556,
  		i: 2.43074,
  		e: 0.5500861,
  		a: 2.034281
  	},
  	{
  		H: 19.2,
  		desig: "2006 PY17",
  		epoch: 2459200.5,
  		ma: 135.04624,
  		w: 133.08724,
  		om: 310.06514,
  		i: 2.84806,
  		e: 0.6406718,
  		a: 1.8953178
  	},
  	{
  		H: 20,
  		desig: "2006 QQ23",
  		epoch: 2459200.5,
  		ma: 148.57814,
  		w: 125.30383,
  		om: 4.21315,
  		i: 3.45815,
  		e: 0.284378,
  		a: 0.8036654
  	},
  	{
  		H: 22,
  		desig: "2006 QJ65",
  		epoch: 2459200.5,
  		ma: 99.05456,
  		w: 267.02292,
  		om: 152.58148,
  		i: 5.09697,
  		e: 0.6878306,
  		a: 2.6418962
  	},
  	{
  		H: 20.3,
  		desig: "2006 RZ",
  		epoch: 2459200.5,
  		ma: 233.82828,
  		w: 221.0944,
  		om: 197.40986,
  		i: 9.01371,
  		e: 0.6421064,
  		a: 2.4645211
  	},
  	{
  		H: 21.8,
  		desig: "2006 RK1",
  		epoch: 2459200.5,
  		ma: 109.10662,
  		w: 131.8773,
  		om: 153.75146,
  		i: 9.55859,
  		e: 0.5164903,
  		a: 1.9462457
  	},
  	{
  		H: 21.4,
  		desig: "2006 SS134",
  		epoch: 2459200.5,
  		ma: 127.62043,
  		w: 256.10244,
  		om: 9.0242,
  		i: 19.53569,
  		e: 0.4420413,
  		a: 1.1714567
  	},
  	{
  		H: 21.9,
  		desig: "2006 TU7",
  		epoch: 2459200.5,
  		ma: 285.91873,
  		w: 69.19007,
  		om: 91.37605,
  		i: 2.95053,
  		e: 0.4703772,
  		a: 0.8512389
  	},
  	{
  		H: 20.9,
  		desig: "2006 TA8",
  		epoch: 2459200.5,
  		ma: 225.25901,
  		w: 218.22179,
  		om: 207.87118,
  		i: 21.70947,
  		e: 0.6987402,
  		a: 3.0740913
  	},
  	{
  		H: 21.14,
  		desig: "2006 UO",
  		epoch: 2459200.5,
  		ma: 340.60844,
  		w: 78.15767,
  		om: 25.64999,
  		i: 2.29183,
  		e: 0.6676012,
  		a: 2.822533
  	},
  	{
  		H: 21.6,
  		desig: "2006 UF17",
  		epoch: 2459200.5,
  		ma: 239.63737,
  		w: 235.79337,
  		om: 47.62645,
  		i: 3.72575,
  		e: 0.8112707,
  		a: 2.4780563
  	},
  	{
  		H: 21.9,
  		desig: "2006 UQ17",
  		epoch: 2459200.5,
  		ma: 271.83436,
  		w: 10.37076,
  		om: 82.10353,
  		i: 1.74295,
  		e: 0.3807802,
  		a: 1.6237457
  	},
  	{
  		H: 21.4,
  		desig: "2006 VG13",
  		epoch: 2459200.5,
  		ma: 228.32759,
  		w: 115.23169,
  		om: 96.56459,
  		i: 5.86056,
  		e: 0.3034892,
  		a: 0.8176434
  	},
  	{
  		H: 20.8,
  		desig: "2006 VT13",
  		epoch: 2459200.5,
  		ma: 152.92596,
  		w: 43.94447,
  		om: 321.61291,
  		i: 2.11113,
  		e: 0.624675,
  		a: 2.5831498
  	},
  	{
  		H: 20,
  		desig: "2006 WT1",
  		epoch: 2459200.5,
  		ma: 223.6723,
  		w: 170.56664,
  		om: 244.8853,
  		i: 13.69111,
  		e: 0.6011087,
  		a: 2.4704509
  	},
  	{
  		H: 19.93,
  		desig: "2006 WJ3",
  		epoch: 2459200.5,
  		ma: 25.39147,
  		w: 178.53265,
  		om: 232.56893,
  		i: 15.35954,
  		e: 0.4238311,
  		a: 1.7516386
  	},
  	{
  		H: 21.8,
  		desig: "2007 AC2",
  		epoch: 2459200.5,
  		ma: 267.95974,
  		w: 91.0461,
  		om: 294.47588,
  		i: 9.50862,
  		e: 0.7432601,
  		a: 2.4136814
  	},
  	{
  		H: 21.1,
  		desig: "2007 AV2",
  		epoch: 2459200.5,
  		ma: 336.89734,
  		w: 293.32383,
  		om: 285.90605,
  		i: 12.31039,
  		e: 0.4738777,
  		a: 1.4379791
  	},
  	{
  		H: 18.9,
  		desig: "2007 AB12",
  		epoch: 2459200.5,
  		ma: 9.83366,
  		w: 282.94456,
  		om: 65.51679,
  		i: 7.80271,
  		e: 0.7207166,
  		a: 2.2951833
  	},
  	{
  		H: 21.1,
  		desig: "2007 BD7",
  		epoch: 2459200.5,
  		ma: 12.16453,
  		w: 219.90057,
  		om: 343.59267,
  		i: 4.8469,
  		e: 0.4978428,
  		a: 1.5623937
  	},
  	{
  		H: 18.7,
  		desig: "2007 BJ29",
  		epoch: 2459000.5,
  		ma: 63.92907,
  		w: 119.47623,
  		om: 242.06405,
  		i: 11.07943,
  		e: 0.8254801,
  		a: 2.184846
  	},
  	{
  		H: 21.1,
  		desig: "2007 CS26",
  		epoch: 2459200.5,
  		ma: 314.95291,
  		w: 24.082,
  		om: 143.69082,
  		i: 21.94627,
  		e: 0.5679756,
  		a: 2.331108
  	},
  	{
  		H: 21.1,
  		desig: "2007 DY40",
  		epoch: 2459200.5,
  		ma: 2.76666,
  		w: 115.01471,
  		om: 160.21107,
  		i: 5.88986,
  		e: 0.5927152,
  		a: 1.7182688
  	},
  	{
  		H: 20.7,
  		desig: "2007 DL41",
  		epoch: 2459200.5,
  		ma: 221.65916,
  		w: 140.21677,
  		om: 150.73859,
  		i: 4.6722,
  		e: 0.4764324,
  		a: 1.4572508
  	},
  	{
  		H: 20.8,
  		desig: "2007 DS84",
  		epoch: 2459200.5,
  		ma: 131.41482,
  		w: 172.79123,
  		om: 30.61109,
  		i: 8.91305,
  		e: 0.4467834,
  		a: 1.8660592
  	},
  	{
  		H: 19.2,
  		desig: "2007 DT103",
  		epoch: 2459200.5,
  		ma: 38.17418,
  		w: 134.15749,
  		om: 137.00445,
  		i: 5.45597,
  		e: 0.5754771,
  		a: 2.2055126
  	},
  	{
  		H: 21.4,
  		desig: "2007 EF",
  		epoch: 2459200.5,
  		ma: 291.28331,
  		w: 226.0244,
  		om: 158.35273,
  		i: 21.73521,
  		e: 0.4100654,
  		a: 0.8203032
  	},
  	{
  		H: 21,
  		desig: "2007 ED125",
  		epoch: 2459200.5,
  		ma: 76.66262,
  		w: 290.39093,
  		om: 173.35858,
  		i: 3.77017,
  		e: 0.5857024,
  		a: 1.9225347
  	},
  	{
  		H: 21.8,
  		desig: "2007 FF1",
  		epoch: 2459200.5,
  		ma: 88.51674,
  		w: 234.61651,
  		om: 21.60097,
  		i: 8.22298,
  		e: 0.4822733,
  		a: 1.5196409
  	},
  	{
  		H: 20,
  		desig: "2007 FT3",
  		epoch: 2459200.5,
  		ma: 123.75364,
  		w: 277.56149,
  		om: 9.78143,
  		i: 26.72772,
  		e: 0.3057629,
  		a: 1.1246126
  	},
  	{
  		H: 22,
  		desig: "2007 GQ3",
  		epoch: 2459200.5,
  		ma: 215.31232,
  		w: 209.65934,
  		om: 34.50946,
  		i: 10.18736,
  		e: 0.4498705,
  		a: 1.8049253
  	},
  	{
  		H: 20.3,
  		desig: "2007 HA",
  		epoch: 2459200.5,
  		ma: 353.82934,
  		w: 133.15711,
  		om: 205.79571,
  		i: 32.98508,
  		e: 0.4702655,
  		a: 0.8925482
  	},
  	{
  		H: 19.7,
  		desig: "2007 HE15",
  		epoch: 2459200.5,
  		ma: 103.18411,
  		w: 342.30462,
  		om: 297.72451,
  		i: 9.54425,
  		e: 0.5405294,
  		a: 2.1446571
  	},
  	{
  		H: 21.7,
  		desig: "2007 JY2",
  		epoch: 2459200.5,
  		ma: 34.2892,
  		w: 107.55782,
  		om: 223.4907,
  		i: 1.61476,
  		e: 0.6869699,
  		a: 2.2033405
  	},
  	{
  		H: 21.7,
  		desig: "2007 JH22",
  		epoch: 2459200.5,
  		ma: 93.03671,
  		w: 22.79359,
  		om: 150.8923,
  		i: 5.56832,
  		e: 0.6064566,
  		a: 2.1822853
  	},
  	{
  		H: 20.6,
  		desig: "2007 KG7",
  		epoch: 2459200.5,
  		ma: 231.23809,
  		w: 318.50769,
  		om: 66.08205,
  		i: 4.74812,
  		e: 0.8663139,
  		a: 1.7774967
  	},
  	{
  		H: 21.3,
  		desig: "2007 LU19",
  		epoch: 2459200.5,
  		ma: 266.39689,
  		w: 142.76257,
  		om: 63.8073,
  		i: 2.60371,
  		e: 0.6216269,
  		a: 2.3689955
  	},
  	{
  		H: 22,
  		desig: "2007 PR25",
  		epoch: 2459200.5,
  		ma: 335.86103,
  		w: 292.90696,
  		om: 153.42918,
  		i: 3.50495,
  		e: 0.8422876,
  		a: 1.9283131
  	},
  	{
  		H: 20.2,
  		desig: "2007 PV27",
  		epoch: 2459000.5,
  		ma: 255.87122,
  		w: 107.65068,
  		om: 324.44584,
  		i: 24.60244,
  		e: 0.3708102,
  		a: 1.2734116
  	},
  	{
  		H: 19.1,
  		desig: "2007 PF28",
  		epoch: 2459200.5,
  		ma: 75.85078,
  		w: 261.98122,
  		om: 179.45462,
  		i: 5.8813,
  		e: 0.8027714,
  		a: 2.1358748
  	},
  	{
  		H: 20.7,
  		desig: "2007 RF2",
  		epoch: 2459000.5,
  		ma: 184.61423,
  		w: 83.45237,
  		om: 12.08747,
  		i: 6.0589,
  		e: 0.6642728,
  		a: 1.731251
  	},
  	{
  		H: 20.7,
  		desig: "2007 RU9",
  		epoch: 2459200.5,
  		ma: 325.78668,
  		w: 286.5642,
  		om: 163.89238,
  		i: 5.65667,
  		e: 0.6293584,
  		a: 1.919055
  	},
  	{
  		H: 20.34,
  		desig: "2007 RV9",
  		epoch: 2459200.5,
  		ma: 283.06664,
  		w: 116.89098,
  		om: 340.37388,
  		i: 6.40726,
  		e: 0.5660536,
  		a: 1.9408249
  	},
  	{
  		H: 18.1,
  		desig: "2007 RU17",
  		epoch: 2459200.5,
  		ma: 157.23991,
  		w: 130.12693,
  		om: 17.14315,
  		i: 9.10509,
  		e: 0.8286105,
  		a: 2.0393057
  	},
  	{
  		H: 21.9,
  		desig: "2007 SQ6",
  		epoch: 2459200.5,
  		ma: 49.23507,
  		w: 283.79799,
  		om: 191.39546,
  		i: 9.10146,
  		e: 0.1456217,
  		a: 1.0430836
  	},
  	{
  		H: 22,
  		desig: "2007 SR11",
  		epoch: 2459200.5,
  		ma: 8.46927,
  		w: 99.49363,
  		om: 218.46715,
  		i: 1.47398,
  		e: 0.6506151,
  		a: 2.6819454
  	},
  	{
  		H: 22,
  		desig: "2007 TH1",
  		epoch: 2459200.5,
  		ma: 146.47313,
  		w: 282.38249,
  		om: 13.70076,
  		i: 20.10945,
  		e: 0.4178535,
  		a: 1.3617841
  	},
  	{
  		H: 20.6,
  		desig: "2007 TS19",
  		epoch: 2459200.5,
  		ma: 181.35975,
  		w: 118.02264,
  		om: 24.17132,
  		i: 15.62991,
  		e: 0.5004402,
  		a: 1.0838537
  	},
  	{
  		H: 21.4,
  		desig: "2007 TL23",
  		epoch: 2459200.5,
  		ma: 14.9939,
  		w: 101.96325,
  		om: 136.73739,
  		i: 2.1244,
  		e: 0.7364499,
  		a: 1.1346475
  	},
  	{
  		H: 20.5,
  		desig: "2007 TR24",
  		epoch: 2459200.5,
  		ma: 22.71407,
  		w: 36.9504,
  		om: 87.15714,
  		i: 3.57247,
  		e: 0.6694594,
  		a: 1.8736332
  	},
  	{
  		H: 20.3,
  		desig: "2007 TU24",
  		epoch: 2459200.5,
  		ma: 155.6947,
  		w: 334.28894,
  		om: 126.99658,
  		i: 5.62588,
  		e: 0.5342808,
  		a: 2.043237
  	},
  	{
  		H: 21.1,
  		desig: "2007 UL12",
  		epoch: 2459200.5,
  		ma: 257.31639,
  		w: 95.65891,
  		om: 67.07431,
  		i: 4.18751,
  		e: 0.8057616,
  		a: 1.9644819
  	},
  	{
  		H: 21.4,
  		desig: "2007 UR51",
  		epoch: 2459200.5,
  		ma: 101.45153,
  		w: 73.0211,
  		om: 208.29954,
  		i: 7.26736,
  		e: 0.6918622,
  		a: 1.6484944
  	},
  	{
  		H: 21.1,
  		desig: "2007 VG",
  		epoch: 2459200.5,
  		ma: 308.92804,
  		w: 261.61426,
  		om: 33.38334,
  		i: 51.16187,
  		e: 0.6651241,
  		a: 1.9577335
  	},
  	{
  		H: 21.4,
  		desig: "2007 VN3",
  		epoch: 2459200.5,
  		ma: 337.27317,
  		w: 320.25202,
  		om: 21.92535,
  		i: 15.62015,
  		e: 0.5775825,
  		a: 2.2439417
  	},
  	{
  		H: 20.5,
  		desig: "2007 VT6",
  		epoch: 2459200.5,
  		ma: 264.75955,
  		w: 294.20054,
  		om: 213.33142,
  		i: 7.3923,
  		e: 0.6449131,
  		a: 1.9489962
  	},
  	{
  		H: 19.9,
  		desig: "2007 VD12",
  		epoch: 2459200.5,
  		ma: 183.1589,
  		w: 91.27265,
  		om: 62.70493,
  		i: 22.85634,
  		e: 0.3648616,
  		a: 1.1460495
  	},
  	{
  		H: 21.6,
  		desig: "2007 VZ137",
  		epoch: 2459200.5,
  		ma: 4.96544,
  		w: 63.75115,
  		om: 226.37825,
  		i: 5.21796,
  		e: 0.5856033,
  		a: 1.7042217
  	},
  	{
  		H: 22,
  		desig: "2007 VK184",
  		epoch: 2459200.5,
  		ma: 301.2683,
  		w: 73.59485,
  		om: 253.60805,
  		i: 1.22116,
  		e: 0.5698031,
  		a: 1.7260051
  	},
  	{
  		H: 21,
  		desig: "2007 VM184",
  		epoch: 2459200.5,
  		ma: 4.73114,
  		w: 110.14447,
  		om: 65.76138,
  		i: 23.27522,
  		e: 0.5232201,
  		a: 1.1821832
  	},
  	{
  		H: 21.4,
  		desig: "2007 VP243",
  		epoch: 2459200.5,
  		ma: 334.80535,
  		w: 312.10391,
  		om: 13.94306,
  		i: 5.64554,
  		e: 0.5820734,
  		a: 2.2577597
  	},
  	{
  		H: 19.9,
  		desig: "2007 XN",
  		epoch: 2459200.5,
  		ma: 332.93997,
  		w: 215.47524,
  		om: 256.52322,
  		i: 24.7324,
  		e: 0.5695067,
  		a: 2.215892
  	},
  	{
  		H: 21,
  		desig: "2007 XY9",
  		epoch: 2459200.5,
  		ma: 175.02699,
  		w: 127.24549,
  		om: 234.01919,
  		i: 3.34053,
  		e: 0.6193895,
  		a: 2.048619
  	},
  	{
  		H: 20.8,
  		desig: "2007 XD10",
  		epoch: 2459200.5,
  		ma: 66.54895,
  		w: 80.18554,
  		om: 270.12816,
  		i: 18.53211,
  		e: 0.6664379,
  		a: 2.1531918
  	},
  	{
  		H: 19.2,
  		desig: "2007 XK11",
  		epoch: 2459200.5,
  		ma: 309.89992,
  		w: 197.02935,
  		om: 167.49505,
  		i: 3.43883,
  		e: 0.6214885,
  		a: 2.7677085
  	},
  	{
  		H: 18.2,
  		desig: "2007 YB2",
  		epoch: 2459200.5,
  		ma: 128.69971,
  		w: 213.83289,
  		om: 330.63446,
  		i: 16.49522,
  		e: 0.6906539,
  		a: 3.0835864
  	},
  	{
  		H: 21.5,
  		desig: "2008 AX1",
  		epoch: 2459200.5,
  		ma: 290.69476,
  		w: 126.46023,
  		om: 263.25954,
  		i: 12.91166,
  		e: 0.4759203,
  		a: 1.5466471
  	},
  	{
  		H: 21.9,
  		desig: "2008 AZ30",
  		epoch: 2459200.5,
  		ma: 181.28284,
  		w: 25.85267,
  		om: 326.63703,
  		i: 2.34021,
  		e: 0.6537755,
  		a: 1.3327919
  	},
  	{
  		H: 19.5,
  		desig: "2008 AH33",
  		epoch: 2459200.5,
  		ma: 80.86678,
  		w: 176.90665,
  		om: 335.8765,
  		i: 36.76803,
  		e: 0.5476866,
  		a: 2.1041841
  	},
  	{
  		H: 20.6,
  		desig: "2008 AK33",
  		epoch: 2459200.5,
  		ma: 345.37069,
  		w: 88.62119,
  		om: 283.6006,
  		i: 34.09203,
  		e: 0.7199801,
  		a: 2.2186011
  	},
  	{
  		H: 20.6,
  		desig: "2008 BD15",
  		epoch: 2459200.5,
  		ma: 79.87891,
  		w: 113.62541,
  		om: 130.34006,
  		i: 32.17092,
  		e: 0.139882,
  		a: 1.0787294
  	},
  	{
  		H: 20.2,
  		desig: "2008 CH",
  		epoch: 2459200.5,
  		ma: 233.53185,
  		w: 294.54919,
  		om: 133.37081,
  		i: 22.13076,
  		e: 0.6884088,
  		a: 2.3340216
  	},
  	{
  		H: 20.1,
  		desig: "2008 CS1",
  		epoch: 2459200.5,
  		ma: 108.98078,
  		w: 95.00618,
  		om: 134.12118,
  		i: 29.85287,
  		e: 0.3723889,
  		a: 1.2306246
  	},
  	{
  		H: 22,
  		desig: "2008 CC6",
  		epoch: 2459200.5,
  		ma: 343.93422,
  		w: 136.57926,
  		om: 146.79075,
  		i: 9.14739,
  		e: 0.7736894,
  		a: 1.2610695
  	},
  	{
  		H: 20.3,
  		desig: "2008 CL116",
  		epoch: 2459200.5,
  		ma: 125.29948,
  		w: 113.31587,
  		om: 126.43746,
  		i: 18.72553,
  		e: 0.7426,
  		a: 3.0728219
  	},
  	{
  		H: 20.4,
  		desig: "2008 DD",
  		epoch: 2459200.5,
  		ma: 257.43356,
  		w: 186.75257,
  		om: 355.51356,
  		i: 15.34565,
  		e: 0.4636491,
  		a: 1.9420511
  	},
  	{
  		H: 20.5,
  		desig: "2008 DJ",
  		epoch: 2459200.5,
  		ma: 231.11996,
  		w: 117.98211,
  		om: 319.09659,
  		i: 5.05454,
  		e: 0.6029606,
  		a: 1.9831394
  	},
  	{
  		H: 19.7,
  		desig: "2008 EE5",
  		epoch: 2459200.5,
  		ma: 120.05575,
  		w: 20.0361,
  		om: 321.26993,
  		i: 44.81134,
  		e: 0.0715324,
  		a: 0.9447625
  	},
  	{
  		H: 21.2,
  		desig: "2008 EM7",
  		epoch: 2459200.5,
  		ma: 211.49621,
  		w: 42.74482,
  		om: 347.77844,
  		i: 33.13353,
  		e: 0.243243,
  		a: 1.2380444
  	},
  	{
  		H: 21.5,
  		desig: "2008 FW5",
  		epoch: 2459200.5,
  		ma: 33.886,
  		w: 359.63279,
  		om: 160.70297,
  		i: 13.47613,
  		e: 0.5453001,
  		a: 2.1377733
  	},
  	{
  		H: 21,
  		desig: "2008 FW6",
  		epoch: 2459200.5,
  		ma: 275.66948,
  		w: 34.8182,
  		om: 79.95654,
  		i: 6.47428,
  		e: 0.6379108,
  		a: 2.263379
  	},
  	{
  		H: 22,
  		desig: "2008 GC110",
  		epoch: 2459200.5,
  		ma: 273.78589,
  		w: 142.63139,
  		om: 206.45472,
  		i: 13.98002,
  		e: 0.154157,
  		a: 1.0908591
  	},
  	{
  		H: 21.9,
  		desig: "2008 HH",
  		epoch: 2459200.5,
  		ma: 278.14362,
  		w: 116.01514,
  		om: 196.66408,
  		i: 16.31882,
  		e: 0.3556408,
  		a: 1.3660467
  	},
  	{
  		H: 21.2,
  		desig: "2008 HB38",
  		epoch: 2459200.5,
  		ma: 326.21496,
  		w: 209.51115,
  		om: 102.69106,
  		i: 1.02131,
  		e: 0.4926276,
  		a: 1.8539693
  	},
  	{
  		H: 20.87,
  		desig: "2008 JG",
  		epoch: 2459200.5,
  		ma: 125.02727,
  		w: 242.31164,
  		om: 128.82571,
  		i: 7.90705,
  		e: 0.2960143,
  		a: 1.052025
  	},
  	{
  		H: 19.6,
  		desig: "2008 JW2",
  		epoch: 2459200.5,
  		ma: 122.93599,
  		w: 142.24605,
  		om: 35.50994,
  		i: 8.85687,
  		e: 0.6367931,
  		a: 2.4364475
  	},
  	{
  		H: 21.2,
  		desig: "2008 KV2",
  		epoch: 2459000.5,
  		ma: 327.22313,
  		w: 347.78353,
  		om: 66.87252,
  		i: 5.03739,
  		e: 0.4120775,
  		a: 0.8498081
  	},
  	{
  		H: 20.74,
  		desig: "2008 KE6",
  		epoch: 2459200.5,
  		ma: 229.6701,
  		w: 224.24467,
  		om: 113.72771,
  		i: 3.42779,
  		e: 0.521051,
  		a: 1.6901048
  	},
  	{
  		H: 20,
  		desig: "2008 LW16",
  		epoch: 2459000.5,
  		ma: 140.74439,
  		w: 347.91545,
  		om: 97.9829,
  		i: 29.6897,
  		e: 0.1035469,
  		a: 1.0661646
  	},
  	{
  		H: 21.9,
  		desig: "2008 MP1",
  		epoch: 2459200.5,
  		ma: 266.26667,
  		w: 243.48612,
  		om: 105.38628,
  		i: 3.7774,
  		e: 0.5650705,
  		a: 1.8894898
  	},
  	{
  		H: 18.7,
  		desig: "2008 NO3",
  		epoch: 2459200.5,
  		ma: 246.27696,
  		w: 206.75073,
  		om: 36.41162,
  		i: 11.66236,
  		e: 0.6730086,
  		a: 2.7893568
  	},
  	{
  		H: 20.3,
  		desig: "2008 NQ3",
  		epoch: 2459200.5,
  		ma: 89.83342,
  		w: 155.43299,
  		om: 109.31388,
  		i: 27.14997,
  		e: 0.577993,
  		a: 2.4579227
  	},
  	{
  		H: 19.7,
  		desig: "2008 OO",
  		epoch: 2459200.5,
  		ma: 44.08685,
  		w: 253.53685,
  		om: 306.11724,
  		i: 5.48742,
  		e: 0.7004922,
  		a: 2.1066688
  	},
  	{
  		H: 21.5,
  		desig: "2008 OX1",
  		epoch: 2459200.5,
  		ma: 176.54864,
  		w: 281.32872,
  		om: 304.84093,
  		i: 29.73822,
  		e: 0.277527,
  		a: 1.2062298
  	},
  	{
  		H: 20.4,
  		desig: "2008 OS7",
  		epoch: 2459200.5,
  		ma: 276.26666,
  		w: 73.13027,
  		om: 137.0944,
  		i: 7.03732,
  		e: 0.6444234,
  		a: 1.9084162
  	},
  	{
  		H: 19.7,
  		desig: "2008 OP8",
  		epoch: 2459200.5,
  		ma: 299.65944,
  		w: 37.51351,
  		om: 186.14905,
  		i: 5.21415,
  		e: 0.6754949,
  		a: 2.2091059
  	},
  	{
  		H: 19.9,
  		desig: "2008 ON13",
  		epoch: 2459200.5,
  		ma: 299.98274,
  		w: 46.72885,
  		om: 143.90115,
  		i: 5.88466,
  		e: 0.8152819,
  		a: 2.2132925
  	},
  	{
  		H: 22,
  		desig: "2008 PF1",
  		epoch: 2459200.5,
  		ma: 245.52049,
  		w: 284.21614,
  		om: 129.56928,
  		i: 2.75507,
  		e: 0.4944747,
  		a: 1.3598574
  	},
  	{
  		H: 22,
  		desig: "2008 PK3",
  		epoch: 2459200.5,
  		ma: 292.54056,
  		w: 109.47886,
  		om: 122.44614,
  		i: 17.11963,
  		e: 0.598135,
  		a: 1.8925003
  	},
  	{
  		H: 21.9,
  		desig: "2008 PJ9",
  		epoch: 2459200.5,
  		ma: 26.45039,
  		w: 135.09182,
  		om: 115.30519,
  		i: 4.77073,
  		e: 0.6610651,
  		a: 2.5495987
  	},
  	{
  		H: 19.9,
  		desig: "2008 QS11",
  		epoch: 2459200.5,
  		ma: 281.17304,
  		w: 30.70482,
  		om: 11.51759,
  		i: 12.48561,
  		e: 0.4825771,
  		a: 1.8610393
  	},
  	{
  		H: 21.7,
  		desig: "2008 RV",
  		epoch: 2459200.5,
  		ma: 219.9059,
  		w: 192.35268,
  		om: 119.91256,
  		i: 2.28102,
  		e: 0.5639945,
  		a: 2.2692617
  	},
  	{
  		H: 20.4,
  		desig: "2008 RM98",
  		epoch: 2459200.5,
  		ma: 325.64772,
  		w: 166.95155,
  		om: 284.7281,
  		i: 1.89538,
  		e: 0.6433638,
  		a: 2.5533728
  	},
  	{
  		H: 21.7,
  		desig: "2008 SC",
  		epoch: 2459200.5,
  		ma: 209.08291,
  		w: 122.64812,
  		om: 6.72614,
  		i: 16.87511,
  		e: 0.7024369,
  		a: 1.0931261
  	},
  	{
  		H: 20.3,
  		desig: "2008 SR1",
  		epoch: 2459200.5,
  		ma: 135.59538,
  		w: 116.80862,
  		om: 178.02675,
  		i: 16.88055,
  		e: 0.6504164,
  		a: 2.3722031
  	},
  	{
  		H: 18.4,
  		desig: "2008 SV11",
  		epoch: 2459200.5,
  		ma: 285.33034,
  		w: 103.68591,
  		om: 14.8702,
  		i: 8.33433,
  		e: 0.7255759,
  		a: 2.6123141
  	},
  	{
  		H: 21.4,
  		desig: "2008 SH82",
  		epoch: 2459200.5,
  		ma: 54.62984,
  		w: 158.15476,
  		om: 268.6067,
  		i: 4.62902,
  		e: 0.5949258,
  		a: 2.4361544
  	},
  	{
  		H: 20.6,
  		desig: "2008 SJ82",
  		epoch: 2459200.5,
  		ma: 123.26267,
  		w: 218.33507,
  		om: 135.15936,
  		i: 9.69005,
  		e: 0.5774381,
  		a: 2.3800924
  	},
  	{
  		H: 21.8,
  		desig: "2008 SY148",
  		epoch: 2459200.5,
  		ma: 284.94884,
  		w: 164.34888,
  		om: 187.23874,
  		i: 28.71066,
  		e: 0.1920485,
  		a: 1.2480866
  	},
  	{
  		H: 21.93,
  		desig: "2008 TD2",
  		epoch: 2459200.5,
  		ma: 185.43245,
  		w: 315.9687,
  		om: 16.00505,
  		i: 4.0159,
  		e: 0.3342859,
  		a: 1.5302739
  	},
  	{
  		H: 21.5,
  		desig: "2008 TC4",
  		epoch: 2459200.5,
  		ma: 119.13397,
  		w: 324.27667,
  		om: 212.60243,
  		i: 10.64766,
  		e: 0.5544212,
  		a: 0.7803666
  	},
  	{
  		H: 19.9,
  		desig: "2008 UU1",
  		epoch: 2459200.5,
  		ma: 10.49764,
  		w: 118.98992,
  		om: 157.18305,
  		i: 12.08992,
  		e: 0.7505994,
  		a: 1.6074395
  	},
  	{
  		H: 20.4,
  		desig: "2008 UE7",
  		epoch: 2459200.5,
  		ma: 225.75478,
  		w: 48.76584,
  		om: 81.16978,
  		i: 3.94893,
  		e: 0.4483408,
  		a: 1.6486921
  	},
  	{
  		H: 21.7,
  		desig: "2008 UW91",
  		epoch: 2459200.5,
  		ma: 241.38113,
  		w: 282.77562,
  		om: 248.06618,
  		i: 7.31854,
  		e: 0.5716284,
  		a: 1.1464417
  	},
  	{
  		H: 21.1,
  		desig: "2008 VL14",
  		epoch: 2459200.5,
  		ma: 269.40382,
  		w: 246.73184,
  		om: 37.24952,
  		i: 1.90724,
  		e: 0.8212534,
  		a: 2.2037081
  	},
  	{
  		H: 20.7,
  		desig: "2008 WK61",
  		epoch: 2459200.5,
  		ma: 217.94923,
  		w: 212.59153,
  		om: 253.41796,
  		i: 17.1452,
  		e: 0.419076,
  		a: 1.658734
  	},
  	{
  		H: 20.1,
  		desig: "2008 WZ94",
  		epoch: 2459200.5,
  		ma: 104.23193,
  		w: 320.96928,
  		om: 248.89578,
  		i: 6.52511,
  		e: 0.7735269,
  		a: 1.5218601
  	},
  	{
  		H: 21.4,
  		desig: "2008 XN",
  		epoch: 2459200.5,
  		ma: 252.87586,
  		w: 63.50006,
  		om: 97.92884,
  		i: 5.31287,
  		e: 0.5892387,
  		a: 2.1646604
  	},
  	{
  		H: 20.9,
  		desig: "2008 XB1",
  		epoch: 2459200.5,
  		ma: 332.22,
  		w: 84.04721,
  		om: 270.35046,
  		i: 12.68416,
  		e: 0.3727683,
  		a: 1.3325201
  	},
  	{
  		H: 22,
  		desig: "2008 XM1",
  		epoch: 2459200.5,
  		ma: 94.21045,
  		w: 276.36222,
  		om: 259.63109,
  		i: 4.99252,
  		e: 0.7825649,
  		a: 2.3683133
  	},
  	{
  		H: 21.5,
  		desig: "2008 XA2",
  		epoch: 2459200.5,
  		ma: 110.44215,
  		w: 334.46137,
  		om: 39.67396,
  		i: 2.92616,
  		e: 0.612586,
  		a: 2.3851162
  	},
  	{
  		H: 20.3,
  		desig: "2008 XQ2",
  		epoch: 2459200.5,
  		ma: 264.46373,
  		w: 355.02731,
  		om: 34.58257,
  		i: 14.52882,
  		e: 0.5525474,
  		a: 2.1991335
  	},
  	{
  		H: 20.7,
  		desig: "2008 XW2",
  		epoch: 2459200.5,
  		ma: 36.97477,
  		w: 259.8568,
  		om: 71.77546,
  		i: 26.4563,
  		e: 0.4438944,
  		a: 1.0649243
  	},
  	{
  		H: 20.9,
  		desig: "2008 YF",
  		epoch: 2459200.5,
  		ma: 294.05085,
  		w: 321.12218,
  		om: 86.95933,
  		i: 21.98304,
  		e: 0.4380957,
  		a: 1.6282836
  	},
  	{
  		H: 21.2,
  		desig: "2008 YS27",
  		epoch: 2459200.5,
  		ma: 264.30881,
  		w: 13.22089,
  		om: 91.06961,
  		i: 4.87556,
  		e: 0.3173744,
  		a: 1.4678479
  	},
  	{
  		H: 21.8,
  		desig: "2009 AL",
  		epoch: 2459200.5,
  		ma: 356.98842,
  		w: 313.91418,
  		om: 223.97263,
  		i: 3.93119,
  		e: 0.6639721,
  		a: 2.4933059
  	},
  	{
  		H: 21.4,
  		desig: "2009 AC16",
  		epoch: 2459200.5,
  		ma: 81.97752,
  		w: 99.91769,
  		om: 106.72662,
  		i: 18.38252,
  		e: 0.5379689,
  		a: 1.5259707
  	},
  	{
  		H: 18.77,
  		desig: "2009 AE16",
  		epoch: 2459200.5,
  		ma: 331.26988,
  		w: 280.45895,
  		om: 309.8302,
  		i: 46.14554,
  		e: 0.7368294,
  		a: 1.7890309
  	},
  	{
  		H: 21.7,
  		desig: "2009 BE58",
  		epoch: 2459200.5,
  		ma: 321.5012,
  		w: 120.94704,
  		om: 149.52131,
  		i: 1.86422,
  		e: 0.559616,
  		a: 0.9369864
  	},
  	{
  		H: 20.7,
  		desig: "2009 BD81",
  		epoch: 2459200.5,
  		ma: 289.18546,
  		w: 191.0026,
  		om: 344.08463,
  		i: 12.28865,
  		e: 0.6317619,
  		a: 2.6040295
  	},
  	{
  		H: 21,
  		desig: "2009 BE81",
  		epoch: 2459200.5,
  		ma: 129.9802,
  		w: 333.4777,
  		om: 118.01567,
  		i: 18.80163,
  		e: 0.3496398,
  		a: 1.5225566
  	},
  	{
  		H: 19.7,
  		desig: "2009 CS",
  		epoch: 2459200.5,
  		ma: 82.96002,
  		w: 170.86033,
  		om: 250.04489,
  		i: 3.20668,
  		e: 0.5951644,
  		a: 2.0076068
  	},
  	{
  		H: 19.1,
  		desig: "2009 CC3",
  		epoch: 2459200.5,
  		ma: 210.82077,
  		w: 15.41823,
  		om: 194.92442,
  		i: 11.37456,
  		e: 0.5374478,
  		a: 2.1998899
  	},
  	{
  		H: 21.5,
  		desig: "2009 DR3",
  		epoch: 2459200.5,
  		ma: 72.38502,
  		w: 237.53543,
  		om: 344.67778,
  		i: 4.08137,
  		e: 0.5606589,
  		a: 1.9762997
  	},
  	{
  		H: 21,
  		desig: "2009 DS10",
  		epoch: 2459200.5,
  		ma: 227.7641,
  		w: 123.44289,
  		om: 313.08384,
  		i: 7.51154,
  		e: 0.5880997,
  		a: 2.2126654
  	},
  	{
  		H: 18.8,
  		desig: "2009 DH39",
  		epoch: 2459200.5,
  		ma: 229.54155,
  		w: 68.2592,
  		om: 155.43541,
  		i: 53.70674,
  		e: 0.599522,
  		a: 1.8490209
  	},
  	{
  		H: 19.6,
  		desig: "2009 DZ42",
  		epoch: 2459200.5,
  		ma: 35.88858,
  		w: 183.47074,
  		om: 295.13958,
  		i: 13.11464,
  		e: 0.5835796,
  		a: 2.4456203
  	},
  	{
  		H: 21.2,
  		desig: "2009 DM45",
  		epoch: 2459200.5,
  		ma: 157.16172,
  		w: 90.90277,
  		om: 336.33588,
  		i: 26.69308,
  		e: 0.3673318,
  		a: 1.1722859
  	},
  	{
  		H: 22,
  		desig: "2009 DL46",
  		epoch: 2459200.5,
  		ma: 220.57094,
  		w: 160.29185,
  		om: 63.40331,
  		i: 7.91576,
  		e: 0.3071513,
  		a: 1.4609156
  	},
  	{
  		H: 21.6,
  		desig: "2009 EP2",
  		epoch: 2459200.5,
  		ma: 329.37485,
  		w: 129.8318,
  		om: 175.16851,
  		i: 27.70299,
  		e: 0.3562785,
  		a: 0.926986
  	},
  	{
  		H: 21.3,
  		desig: "2009 FE",
  		epoch: 2459200.5,
  		ma: 314.89655,
  		w: 201.09881,
  		om: 39.80046,
  		i: 1.90573,
  		e: 0.6099817,
  		a: 2.5359452
  	},
  	{
  		H: 21.8,
  		desig: "2009 FF",
  		epoch: 2459200.5,
  		ma: 154.77302,
  		w: 11.03548,
  		om: 265.88801,
  		i: 0.98297,
  		e: 0.4682125,
  		a: 1.4738379
  	},
  	{
  		H: 17.8,
  		desig: "2009 FU4",
  		epoch: 2459200.5,
  		ma: 37.03668,
  		w: 233.11241,
  		om: 42.12525,
  		i: 12.91419,
  		e: 0.6166011,
  		a: 2.3796307
  	},
  	{
  		H: 21,
  		desig: "2009 FY4",
  		epoch: 2459200.5,
  		ma: 293.85329,
  		w: 244.66188,
  		om: 162.62122,
  		i: 20.98158,
  		e: 0.3273284,
  		a: 1.0125562
  	},
  	{
  		H: 20,
  		desig: "2009 FU23",
  		epoch: 2459000.5,
  		ma: 21.84401,
  		w: 315.24321,
  		om: 57.78545,
  		i: 13.90478,
  		e: 0.2821827,
  		a: 0.8369395
  	},
  	{
  		H: 21.3,
  		desig: "2009 HV2",
  		epoch: 2459000.5,
  		ma: 65.69186,
  		w: 260.9998,
  		om: 37.99775,
  		i: 6.72729,
  		e: 0.4992877,
  		a: 1.6409641
  	},
  	{
  		H: 20.8,
  		desig: "2009 HA21",
  		epoch: 2459200.5,
  		ma: 277.97859,
  		w: 219.89475,
  		om: 205.41593,
  		i: 6.40556,
  		e: 0.728938,
  		a: 1.4606669
  	},
  	{
  		H: 18.2,
  		desig: "2009 HD21",
  		epoch: 2459200.5,
  		ma: 164.30628,
  		w: 134.25298,
  		om: 179.23591,
  		i: 18.64197,
  		e: 0.6881621,
  		a: 2.771935
  	},
  	{
  		H: 19.6,
  		desig: "2009 HV58",
  		epoch: 2459200.5,
  		ma: 95.1985,
  		w: 50.92536,
  		om: 69.75855,
  		i: 46.99389,
  		e: 0.583945,
  		a: 1.9833333
  	},
  	{
  		H: 21.4,
  		desig: "2009 JR",
  		epoch: 2459200.5,
  		ma: 59.4745,
  		w: 294.9857,
  		om: 225.53305,
  		i: 8.39695,
  		e: 0.4892298,
  		a: 1.7301047
  	},
  	{
  		H: 20.58,
  		desig: "2009 KK",
  		epoch: 2459200.5,
  		ma: 66.00376,
  		w: 247.30743,
  		om: 68.14678,
  		i: 18.21612,
  		e: 0.4553426,
  		a: 1.5021911
  	},
  	{
  		H: 21.4,
  		desig: "2009 KD3",
  		epoch: 2459200.5,
  		ma: 216.01966,
  		w: 116.73757,
  		om: 38.82413,
  		i: 7.97714,
  		e: 0.6775484,
  		a: 2.1945771
  	},
  	{
  		H: 18.3,
  		desig: "2009 KE3",
  		epoch: 2459200.5,
  		ma: 224.91435,
  		w: 319.87825,
  		om: 13.79546,
  		i: 5.85557,
  		e: 0.7028775,
  		a: 2.6707718
  	},
  	{
  		H: 18.82,
  		desig: "2009 KK8",
  		epoch: 2459200.5,
  		ma: 27.26232,
  		w: 194.06594,
  		om: 120.51069,
  		i: 2.27406,
  		e: 0.5948195,
  		a: 2.4010618
  	},
  	{
  		H: 21.7,
  		desig: "2009 LQ",
  		epoch: 2459200.5,
  		ma: 308.64415,
  		w: 244.0852,
  		om: 114.53504,
  		i: 5.38313,
  		e: 0.5969749,
  		a: 1.5536245
  	},
  	{
  		H: 19.7,
  		desig: "2009 LW2",
  		epoch: 2459200.5,
  		ma: 359.33851,
  		w: 41.0727,
  		om: 101.11866,
  		i: 33.1515,
  		e: 0.2594925,
  		a: 1.2056994
  	},
  	{
  		H: 21.5,
  		desig: "2009 OF",
  		epoch: 2459200.5,
  		ma: 45.21373,
  		w: 217.99433,
  		om: 126.89955,
  		i: 9.37491,
  		e: 0.5990005,
  		a: 2.3529042
  	},
  	{
  		H: 22,
  		desig: "2009 QS",
  		epoch: 2459200.5,
  		ma: 267.15849,
  		w: 287.37821,
  		om: 326.35298,
  		i: 8.21974,
  		e: 0.5944928,
  		a: 2.1124599
  	},
  	{
  		H: 19.3,
  		desig: "2009 QJ9",
  		epoch: 2459200.5,
  		ma: 177.73473,
  		w: 202.17548,
  		om: 157.77202,
  		i: 19.27447,
  		e: 0.6205516,
  		a: 2.7189596
  	},
  	{
  		H: 21.9,
  		desig: "2009 RV1",
  		epoch: 2459200.5,
  		ma: 183.141,
  		w: 56.44809,
  		om: 2.01001,
  		i: 1.89534,
  		e: 0.6375125,
  		a: 2.6954616
  	},
  	{
  		H: 18.7,
  		desig: "2009 RZ3",
  		epoch: 2459200.5,
  		ma: 121.879,
  		w: 114.23185,
  		om: 344.71979,
  		i: 52.6589,
  		e: 0.6752813,
  		a: 2.2099384
  	},
  	{
  		H: 20.5,
  		desig: "2009 SB",
  		epoch: 2459200.5,
  		ma: 123.95499,
  		w: 269.71571,
  		om: 217.15488,
  		i: 5.4441,
  		e: 0.8039708,
  		a: 2.2099659
  	},
  	{
  		H: 21.7,
  		desig: "2009 SN",
  		epoch: 2459200.5,
  		ma: 229.33043,
  		w: 38.11259,
  		om: 344.6335,
  		i: 26.20787,
  		e: 0.3161769,
  		a: 1.4156156
  	},
  	{
  		H: 19.9,
  		desig: "2009 SW17",
  		epoch: 2459200.5,
  		ma: 313.85901,
  		w: 42.18909,
  		om: 42.44148,
  		i: 8.40177,
  		e: 0.5978776,
  		a: 2.0136336
  	},
  	{
  		H: 17.9,
  		desig: "2009 SG18",
  		epoch: 2459200.5,
  		ma: 34.63454,
  		w: 204.55388,
  		om: 177.42808,
  		i: 57.8451,
  		e: 0.6733853,
  		a: 3.0401879
  	},
  	{
  		H: 18.39,
  		desig: "2009 ST19",
  		epoch: 2459200.5,
  		ma: 39.31545,
  		w: 336.8537,
  		om: 0.17239,
  		i: 6.72955,
  		e: 0.5950752,
  		a: 2.3605347
  	},
  	{
  		H: 20.6,
  		desig: "2009 TK12",
  		epoch: 2459200.5,
  		ma: 344.54332,
  		w: 245.36937,
  		om: 245.67344,
  		i: 3.83778,
  		e: 0.585311,
  		a: 1.6956154
  	},
  	{
  		H: 21.7,
  		desig: "2009 UQ",
  		epoch: 2459200.5,
  		ma: 266.07485,
  		w: 306.02283,
  		om: 8.71896,
  		i: 14.5057,
  		e: 0.5347343,
  		a: 1.7852422
  	},
  	{
  		H: 20.9,
  		desig: "2009 UY17",
  		epoch: 2459200.5,
  		ma: 157.11057,
  		w: 30.57022,
  		om: 202.07359,
  		i: 42.061,
  		e: 0.3162416,
  		a: 0.8185209
  	},
  	{
  		H: 21.6,
  		desig: "2009 VW",
  		epoch: 2459200.5,
  		ma: 187.8509,
  		w: 256.07228,
  		om: 54.42726,
  		i: 7.15831,
  		e: 0.5625158,
  		a: 1.4396551
  	},
  	{
  		H: 21.3,
  		desig: "2009 VZ",
  		epoch: 2459200.5,
  		ma: 198.48667,
  		w: 221.47055,
  		om: 233.68321,
  		i: 12.30501,
  		e: 0.3253066,
  		a: 1.4125937
  	},
  	{
  		H: 20.7,
  		desig: "2009 VA26",
  		epoch: 2459200.5,
  		ma: 261.7124,
  		w: 307.44337,
  		om: 230.72871,
  		i: 38.94679,
  		e: 0.3835695,
  		a: 1.5129149
  	},
  	{
  		H: 21.9,
  		desig: "2009 VQ44",
  		epoch: 2459200.5,
  		ma: 115.03564,
  		w: 237.86571,
  		om: 46.69376,
  		i: 29.54768,
  		e: 0.7232308,
  		a: 1.3302935
  	},
  	{
  		H: 21.2,
  		desig: "2009 WJ1",
  		epoch: 2459200.5,
  		ma: 296.23468,
  		w: 195.02445,
  		om: 276.66514,
  		i: 0.62196,
  		e: 0.6782702,
  		a: 2.4595616
  	},
  	{
  		H: 21,
  		desig: "2009 XV",
  		epoch: 2459200.5,
  		ma: 254.00205,
  		w: 327.10518,
  		om: 44.50534,
  		i: 3.3409,
  		e: 0.6876436,
  		a: 2.5660454
  	},
  	{
  		H: 20.2,
  		desig: "2009 XT6",
  		epoch: 2459200.5,
  		ma: 168.71691,
  		w: 81.89528,
  		om: 264.99875,
  		i: 5.73662,
  		e: 0.7675293,
  		a: 2.17864
  	},
  	{
  		H: 21.7,
  		desig: "2010 AF30",
  		epoch: 2459200.5,
  		ma: 346.38497,
  		w: 162.79781,
  		om: 62.42958,
  		i: 3.05865,
  		e: 0.3715445,
  		a: 1.3248409
  	},
  	{
  		H: 22,
  		desig: "2010 AG40",
  		epoch: 2459200.5,
  		ma: 226.32598,
  		w: 183.77314,
  		om: 21.57513,
  		i: 2.03026,
  		e: 0.6081939,
  		a: 1.7550645
  	},
  	{
  		H: 22,
  		desig: "2010 BK2",
  		epoch: 2459200.5,
  		ma: 328.35083,
  		w: 72.62678,
  		om: 278.0556,
  		i: 6.04562,
  		e: 0.447855,
  		a: 0.9038372
  	},
  	{
  		H: 19.6,
  		desig: "2010 CN44",
  		epoch: 2459200.5,
  		ma: 88.90812,
  		w: 303.24926,
  		om: 189.47464,
  		i: 3.84405,
  		e: 0.6756351,
  		a: 2.8550492
  	},
  	{
  		H: 22,
  		desig: "2010 CJ188",
  		epoch: 2459000.5,
  		ma: 165.18073,
  		w: 14.33863,
  		om: 103.94253,
  		i: 22.19264,
  		e: 0.335274,
  		a: 1.5383894
  	},
  	{
  		H: 21.7,
  		desig: "2010 DO",
  		epoch: 2459200.5,
  		ma: 78.0108,
  		w: 116.80665,
  		om: 154.4598,
  		i: 11.93758,
  		e: 0.7458248,
  		a: 1.6125379
  	},
  	{
  		H: 20.2,
  		desig: "2010 EF44",
  		epoch: 2459200.5,
  		ma: 132.43302,
  		w: 235.08501,
  		om: 173.71442,
  		i: 38.0288,
  		e: 0.8880955,
  		a: 2.1866664
  	},
  	{
  		H: 19.8,
  		desig: "2010 EK44",
  		epoch: 2459200.5,
  		ma: 70.24024,
  		w: 107.67814,
  		om: 180.71165,
  		i: 11.25797,
  		e: 0.7730099,
  		a: 2.8339334
  	},
  	{
  		H: 20,
  		desig: "2010 FQ",
  		epoch: 2459200.5,
  		ma: 265.07381,
  		w: 359.49102,
  		om: 140.44715,
  		i: 10.5578,
  		e: 0.35659,
  		a: 1.5268489
  	},
  	{
  		H: 21.76,
  		desig: "2010 FF10",
  		epoch: 2459200.5,
  		ma: 312.8031,
  		w: 105.34167,
  		om: 166.14521,
  		i: 5.07792,
  		e: 0.6317425,
  		a: 2.3795878
  	},
  	{
  		H: 21.8,
  		desig: "2010 FC81",
  		epoch: 2459200.5,
  		ma: 155.28177,
  		w: 63.67422,
  		om: 144.31513,
  		i: 1.68261,
  		e: 0.6232242,
  		a: 2.6766163
  	},
  	{
  		H: 21.5,
  		desig: "2010 GS7",
  		epoch: 2459200.5,
  		ma: 136.57687,
  		w: 56.97194,
  		om: 190.89011,
  		i: 9.1305,
  		e: 0.6601282,
  		a: 2.6901012
  	},
  	{
  		H: 20.2,
  		desig: "2010 GT7",
  		epoch: 2459200.5,
  		ma: 151.20714,
  		w: 60.26822,
  		om: 73.51775,
  		i: 8.94921,
  		e: 0.6877114,
  		a: 2.7217035
  	},
  	{
  		H: 21.1,
  		desig: "2010 GU21",
  		epoch: 2459200.5,
  		ma: 99.61049,
  		w: 201.01021,
  		om: 57.20349,
  		i: 3.1893,
  		e: 0.5633438,
  		a: 2.1795456
  	},
  	{
  		H: 20.9,
  		desig: "2010 JG",
  		epoch: 2459200.5,
  		ma: 342.92849,
  		w: 291.99899,
  		om: 49.74055,
  		i: 23.30847,
  		e: 0.3197592,
  		a: 1.1902174
  	},
  	{
  		H: 20.9,
  		desig: "2010 JK33",
  		epoch: 2459200.5,
  		ma: 40.79791,
  		w: 289.79823,
  		om: 28.60047,
  		i: 4.0412,
  		e: 0.6102643,
  		a: 2.2318029
  	},
  	{
  		H: 20.8,
  		desig: "2010 JV34",
  		epoch: 2459200.5,
  		ma: 221.28393,
  		w: 86.99427,
  		om: 225.34954,
  		i: 7.2097,
  		e: 0.5441695,
  		a: 1.7229259
  	},
  	{
  		H: 21.8,
  		desig: "2010 JJ41",
  		epoch: 2459200.5,
  		ma: 263.21195,
  		w: 29.35662,
  		om: 50.13752,
  		i: 3.28116,
  		e: 0.6725642,
  		a: 1.0726707
  	},
  	{
  		H: 21.4,
  		desig: "2010 JN71",
  		epoch: 2459200.5,
  		ma: 310.50857,
  		w: 185.61043,
  		om: 62.44136,
  		i: 17.71724,
  		e: 0.5887192,
  		a: 2.3839305
  	},
  	{
  		H: 21.5,
  		desig: "2010 JE88",
  		epoch: 2459200.5,
  		ma: 181.3591,
  		w: 259.11083,
  		om: 225.65998,
  		i: 10.72871,
  		e: 0.7642392,
  		a: 2.1123398
  	},
  	{
  		H: 21.6,
  		desig: "2010 KQ10",
  		epoch: 2459200.5,
  		ma: 337.28535,
  		w: 286.55161,
  		om: 244.97147,
  		i: 6.67916,
  		e: 0.6669045,
  		a: 2.3748623
  	},
  	{
  		H: 19.5,
  		desig: "2010 KR10",
  		epoch: 2459200.5,
  		ma: 93.19572,
  		w: 233.01577,
  		om: 94.45063,
  		i: 1.0464,
  		e: 0.5863493,
  		a: 2.1690268
  	},
  	{
  		H: 20.5,
  		desig: "2010 KB61",
  		epoch: 2459200.5,
  		ma: 76.90068,
  		w: 234.96501,
  		om: 55.94658,
  		i: 44.59826,
  		e: 0.2337386,
  		a: 1.2748597
  	},
  	{
  		H: 21.7,
  		desig: "2010 KD149",
  		epoch: 2459200.5,
  		ma: 358.14968,
  		w: 131.02595,
  		om: 324.44048,
  		i: 14.23573,
  		e: 0.2116983,
  		a: 0.8886987
  	},
  	{
  		H: 21.9,
  		desig: "2010 LK34",
  		epoch: 2459200.5,
  		ma: 67.16649,
  		w: 249.25862,
  		om: 130.12356,
  		i: 5.32534,
  		e: 0.8072962,
  		a: 1.8310555
  	},
  	{
  		H: 20.1,
  		desig: "2010 LZ63",
  		epoch: 2459200.5,
  		ma: 328.12316,
  		w: 79.43438,
  		om: 307.06376,
  		i: 13.90747,
  		e: 0.7640992,
  		a: 1.9116245
  	},
  	{
  		H: 20.7,
  		desig: "2010 MU112",
  		epoch: 2459200.5,
  		ma: 152.29195,
  		w: 119.18911,
  		om: 261.12568,
  		i: 48.0347,
  		e: 0.5399251,
  		a: 1.7560438
  	},
  	{
  		H: 20.2,
  		desig: "2010 ON101",
  		epoch: 2459200.5,
  		ma: 14.07346,
  		w: 8.11627,
  		om: 251.59795,
  		i: 9.30658,
  		e: 0.4090123,
  		a: 1.6290676
  	},
  	{
  		H: 21.8,
  		desig: "2010 PK9",
  		epoch: 2459200.5,
  		ma: 284.93599,
  		w: 195.62047,
  		om: 306.53818,
  		i: 12.59386,
  		e: 0.6758919,
  		a: 0.6820968
  	},
  	{
  		H: 19.3,
  		desig: "2010 RA147",
  		epoch: 2459200.5,
  		ma: 46.29224,
  		w: 116.71655,
  		om: 8.28943,
  		i: 5.81671,
  		e: 0.6558936,
  		a: 2.1578242
  	},
  	{
  		H: 20.7,
  		desig: "2010 RF181",
  		epoch: 2459000.5,
  		ma: 325.14125,
  		w: 2.43435,
  		om: 51.07585,
  		i: 6.22125,
  		e: 0.5446367,
  		a: 2.2112222
  	},
  	{
  		H: 19.87,
  		desig: "2010 SC41",
  		epoch: 2459200.5,
  		ma: 320.87712,
  		w: 266.44546,
  		om: 236.65716,
  		i: 0.24808,
  		e: 0.6080928,
  		a: 1.8641415
  	},
  	{
  		H: 21.7,
  		desig: "2010 TP54",
  		epoch: 2459200.5,
  		ma: 260.33832,
  		w: 67.1461,
  		om: 351.61186,
  		i: 3.46873,
  		e: 0.5958331,
  		a: 2.3909407
  	},
  	{
  		H: 20.5,
  		desig: "2010 TP55",
  		epoch: 2459200.5,
  		ma: 321.42046,
  		w: 69.5371,
  		om: 232.82536,
  		i: 3.32772,
  		e: 0.6701207,
  		a: 2.3476459
  	},
  	{
  		H: 20,
  		desig: "2010 TS149",
  		epoch: 2459200.5,
  		ma: 112.01137,
  		w: 13.25718,
  		om: 128.13408,
  		i: 3.42588,
  		e: 0.3902478,
  		a: 1.4979863
  	},
  	{
  		H: 20.7,
  		desig: "2010 TU149",
  		epoch: 2459200.5,
  		ma: 24.10981,
  		w: 91.69699,
  		om: 59.72125,
  		i: 1.97138,
  		e: 0.8282023,
  		a: 2.2017777
  	},
  	{
  		H: 18.6,
  		desig: "2010 TV149",
  		epoch: 2459200.5,
  		ma: 173.25537,
  		w: 42.77141,
  		om: 78.67962,
  		i: 9.79935,
  		e: 0.5187782,
  		a: 1.6993959
  	},
  	{
  		H: 20.1,
  		desig: "2010 TX168",
  		epoch: 2459000.5,
  		ma: 71.81306,
  		w: 101.47027,
  		om: 32.99365,
  		i: 26.01452,
  		e: 0.5235478,
  		a: 1.4832435
  	},
  	{
  		H: 20.2,
  		desig: "2010 UY6",
  		epoch: 2459200.5,
  		ma: 125.4055,
  		w: 20.34284,
  		om: 9.02606,
  		i: 19.86791,
  		e: 0.6160022,
  		a: 2.6512221
  	},
  	{
  		H: 21.7,
  		desig: "2010 UG7",
  		epoch: 2459200.5,
  		ma: 356.19966,
  		w: 102.00987,
  		om: 25.9056,
  		i: 15.99524,
  		e: 0.7739454,
  		a: 2.2365631
  	},
  	{
  		H: 20.1,
  		desig: "2010 UQ7",
  		epoch: 2459200.5,
  		ma: 244.63027,
  		w: 76.5326,
  		om: 236.87644,
  		i: 4.51287,
  		e: 0.6787451,
  		a: 2.4543034
  	},
  	{
  		H: 18.9,
  		desig: "2010 US7",
  		epoch: 2459200.5,
  		ma: 227.2142,
  		w: 247.95536,
  		om: 240.87002,
  		i: 55.17874,
  		e: 0.6380169,
  		a: 1.9625425
  	},
  	{
  		H: 19.9,
  		desig: "2010 UK8",
  		epoch: 2459200.5,
  		ma: 21.86236,
  		w: 135.41551,
  		om: 11.53415,
  		i: 1.86815,
  		e: 0.7003722,
  		a: 2.1847594
  	},
  	{
  		H: 19.3,
  		desig: "2010 VZ",
  		epoch: 2459200.5,
  		ma: 226.7993,
  		w: 215.60201,
  		om: 181.94963,
  		i: 8.46348,
  		e: 0.5922251,
  		a: 2.4446504
  	},
  	{
  		H: 20.6,
  		desig: "2010 VG1",
  		epoch: 2459200.5,
  		ma: 182.97565,
  		w: 100.47489,
  		om: 353.88482,
  		i: 12.36054,
  		e: 0.5318046,
  		a: 1.6979908
  	},
  	{
  		H: 21.5,
  		desig: "2010 VT11",
  		epoch: 2459200.5,
  		ma: 148.15424,
  		w: 65.69054,
  		om: 249.4293,
  		i: 2.47871,
  		e: 0.6113979,
  		a: 1.7544204
  	},
  	{
  		H: 21.4,
  		desig: "2010 VD72",
  		epoch: 2459200.5,
  		ma: 60.30614,
  		w: 310.21446,
  		om: 224.08693,
  		i: 19.19328,
  		e: 0.1811943,
  		a: 0.9183921
  	},
  	{
  		H: 21.9,
  		desig: "2010 WV8",
  		epoch: 2459200.5,
  		ma: 103.06675,
  		w: 288.0572,
  		om: 55.16412,
  		i: 8.43688,
  		e: 0.6721859,
  		a: 2.1270233
  	},
  	{
  		H: 20.7,
  		desig: "2010 WZ8",
  		epoch: 2459200.5,
  		ma: 208.59939,
  		w: 200.35471,
  		om: 284.30389,
  		i: 3.70419,
  		e: 0.5028543,
  		a: 1.9738734
  	},
  	{
  		H: 21.43,
  		desig: "2010 XC15",
  		epoch: 2459200.5,
  		ma: 151.70458,
  		w: 157.65902,
  		om: 94.47443,
  		i: 8.38479,
  		e: 0.4166467,
  		a: 0.7349701
  	},
  	{
  		H: 21.8,
  		desig: "2010 XB24",
  		epoch: 2459200.5,
  		ma: 252.10251,
  		w: 285.82423,
  		om: 263.35752,
  		i: 5.53314,
  		e: 0.4391625,
  		a: 1.2861671
  	},
  	{
  		H: 20.9,
  		desig: "2010 XC25",
  		epoch: 2459200.5,
  		ma: 95.13493,
  		w: 237.18361,
  		om: 304.00578,
  		i: 2.97651,
  		e: 0.5281239,
  		a: 1.743536
  	},
  	{
  		H: 21.9,
  		desig: "2010 XA68",
  		epoch: 2459200.5,
  		ma: 300.89577,
  		w: 107.46504,
  		om: 74.33438,
  		i: 59.27375,
  		e: 0.3013879,
  		a: 1.15743
  	},
  	{
  		H: 21.4,
  		desig: "2010 XP69",
  		epoch: 2459200.5,
  		ma: 133.73547,
  		w: 197.31198,
  		om: 199.85763,
  		i: 14.59252,
  		e: 0.3426663,
  		a: 1.5230512
  	},
  	{
  		H: 20.7,
  		desig: "2010 YB",
  		epoch: 2459200.5,
  		ma: 36.60327,
  		w: 94.48143,
  		om: 314.50546,
  		i: 3.60342,
  		e: 0.4942212,
  		a: 1.8222581
  	},
  	{
  		H: 20.5,
  		desig: "2011 AM24",
  		epoch: 2459200.5,
  		ma: 38.4443,
  		w: 214.83275,
  		om: 127.20645,
  		i: 9.13379,
  		e: 0.1499815,
  		a: 1.178675
  	},
  	{
  		H: 21.6,
  		desig: "2011 AT26",
  		epoch: 2459200.5,
  		ma: 259.88053,
  		w: 125.31799,
  		om: 242.93936,
  		i: 1.76602,
  		e: 0.7027362,
  		a: 2.4024856
  	},
  	{
  		H: 18.2,
  		desig: "2011 BX10",
  		epoch: 2459200.5,
  		ma: 34.07232,
  		w: 348.64699,
  		om: 79.1024,
  		i: 9.75842,
  		e: 0.6444856,
  		a: 2.8151544
  	},
  	{
  		H: 20.84,
  		desig: "2011 BY18",
  		epoch: 2459200.5,
  		ma: 337.34507,
  		w: 240.0647,
  		om: 135.23953,
  		i: 3.64517,
  		e: 0.783301,
  		a: 2.2645176
  	},
  	{
  		H: 18.3,
  		desig: "2011 BE38",
  		epoch: 2459200.5,
  		ma: 88.41538,
  		w: 302.65288,
  		om: 321.34658,
  		i: 8.1652,
  		e: 0.7117773,
  		a: 2.6264436
  	},
  	{
  		H: 21.6,
  		desig: "2011 BM45",
  		epoch: 2459200.5,
  		ma: 283.20156,
  		w: 63.15357,
  		om: 302.28582,
  		i: 5.32566,
  		e: 0.8033138,
  		a: 1.9212359
  	},
  	{
  		H: 21.2,
  		desig: "2011 BO59",
  		epoch: 2459200.5,
  		ma: 327.41053,
  		w: 221.31615,
  		om: 343.55769,
  		i: 4.74875,
  		e: 0.463861,
  		a: 1.8301508
  	},
  	{
  		H: 20.9,
  		desig: "2011 BT59",
  		epoch: 2459200.5,
  		ma: 231.1005,
  		w: 306.43799,
  		om: 35.90958,
  		i: 3.69372,
  		e: 0.9426573,
  		a: 2.4421679
  	},
  	{
  		H: 21.4,
  		desig: "2011 CG2",
  		epoch: 2459200.5,
  		ma: 195.73562,
  		w: 283.85502,
  		om: 293.20912,
  		i: 2.75714,
  		e: 0.1584116,
  		a: 1.1772457
  	},
  	{
  		H: 20.5,
  		desig: "2011 CT4",
  		epoch: 2459200.5,
  		ma: 167.4535,
  		w: 69.57643,
  		om: 304.83246,
  		i: 2.6477,
  		e: 0.7184632,
  		a: 1.7256475
  	},
  	{
  		H: 21,
  		desig: "2011 CC22",
  		epoch: 2459200.5,
  		ma: 306.27675,
  		w: 171.26697,
  		om: 130.3229,
  		i: 34.82544,
  		e: 0.1153729,
  		a: 1.1226202
  	},
  	{
  		H: 19.9,
  		desig: "2011 CY46",
  		epoch: 2459200.5,
  		ma: 22.04256,
  		w: 221.21252,
  		om: 11.09249,
  		i: 11.55447,
  		e: 0.6114344,
  		a: 2.1495339
  	},
  	{
  		H: 20.9,
  		desig: "2011 CB50",
  		epoch: 2459200.5,
  		ma: 26.73862,
  		w: 165.3965,
  		om: 339.88912,
  		i: 12.24391,
  		e: 0.6374636,
  		a: 2.8321991
  	},
  	{
  		H: 20.6,
  		desig: "2011 DV",
  		epoch: 2459200.5,
  		ma: 306.99907,
  		w: 350.64488,
  		om: 35.13234,
  		i: 10.59337,
  		e: 0.0498652,
  		a: 0.9567981
  	},
  	{
  		H: 20.2,
  		desig: "2011 DS9",
  		epoch: 2459200.5,
  		ma: 94.14964,
  		w: 146.29633,
  		om: 93.33949,
  		i: 3.69818,
  		e: 0.643133,
  		a: 2.6199354
  	},
  	{
  		H: 19.8,
  		desig: "2011 EL11",
  		epoch: 2459200.5,
  		ma: 211.74364,
  		w: 82.14844,
  		om: 313.79096,
  		i: 3.91124,
  		e: 0.6900961,
  		a: 1.9955
  	},
  	{
  		H: 19.2,
  		desig: "2011 EF17",
  		epoch: 2459200.5,
  		ma: 221.65789,
  		w: 282.39262,
  		om: 3.8929,
  		i: 4.2156,
  		e: 0.7431196,
  		a: 2.345125
  	},
  	{
  		H: 20.6,
  		desig: "2011 EG17",
  		epoch: 2459200.5,
  		ma: 79.39867,
  		w: 241.56367,
  		om: 170.11681,
  		i: 20.10774,
  		e: 0.4186137,
  		a: 1.3800224
  	},
  	{
  		H: 21.5,
  		desig: "2011 EO40",
  		epoch: 2459200.5,
  		ma: 251.9653,
  		w: 17.14623,
  		om: 50.26824,
  		i: 3.35921,
  		e: 0.5401194,
  		a: 1.653666
  	},
  	{
  		H: 22,
  		desig: "2011 EJ47",
  		epoch: 2459200.5,
  		ma: 106.27418,
  		w: 111.54474,
  		om: 330.02137,
  		i: 13.28569,
  		e: 0.35925,
  		a: 1.3580254
  	},
  	{
  		H: 21.9,
  		desig: "2011 EL51",
  		epoch: 2459200.5,
  		ma: 127.89609,
  		w: 94.81835,
  		om: 198.50908,
  		i: 10.96962,
  		e: 0.5685066,
  		a: 1.190729
  	},
  	{
  		H: 21.1,
  		desig: "2011 EO51",
  		epoch: 2459200.5,
  		ma: 24.92449,
  		w: 227.41406,
  		om: 175.09483,
  		i: 6.7484,
  		e: 0.7858732,
  		a: 1.5652651
  	},
  	{
  		H: 20.8,
  		desig: "2011 GA",
  		epoch: 2459200.5,
  		ma: 318.32894,
  		w: 109.77695,
  		om: 200.39354,
  		i: 9.8311,
  		e: 0.5914189,
  		a: 1.802844
  	},
  	{
  		H: 19.5,
  		desig: "2011 GM44",
  		epoch: 2459200.5,
  		ma: 111.58747,
  		w: 37.52362,
  		om: 10.82948,
  		i: 49.33087,
  		e: 0.518972,
  		a: 0.7816482
  	},
  	{
  		H: 19,
  		desig: "2011 GS60",
  		epoch: 2459200.5,
  		ma: 214.4842,
  		w: 307.518,
  		om: 137.57837,
  		i: 19.28528,
  		e: 0.9226206,
  		a: 3.3576693
  	},
  	{
  		H: 21.3,
  		desig: "2011 JA",
  		epoch: 2459200.5,
  		ma: 216.7407,
  		w: 286.17717,
  		om: 215.01888,
  		i: 41.61188,
  		e: 0.2876072,
  		a: 1.1850343
  	},
  	{
  		H: 21.7,
  		desig: "2011 JD1",
  		epoch: 2459200.5,
  		ma: 131.55125,
  		w: 85.68091,
  		om: 34.26047,
  		i: 21.95806,
  		e: 0.3580279,
  		a: 1.1121912
  	},
  	{
  		H: 19.5,
  		desig: "2011 JR13",
  		epoch: 2459200.5,
  		ma: 125.74086,
  		w: 129.54584,
  		om: 235.10849,
  		i: 24.68682,
  		e: 0.7257051,
  		a: 1.299093
  	},
  	{
  		H: 19.8,
  		desig: "2011 KE",
  		epoch: 2459200.5,
  		ma: 318.38692,
  		w: 188.55834,
  		om: 205.00093,
  		i: 5.87997,
  		e: 0.9545474,
  		a: 2.2065665
  	},
  	{
  		H: 21.8,
  		desig: "2011 KU15",
  		epoch: 2459200.5,
  		ma: 165.9347,
  		w: 167.01727,
  		om: 214.28519,
  		i: 4.38868,
  		e: 0.8738875,
  		a: 1.9448863
  	},
  	{
  		H: 20.2,
  		desig: "2011 KO17",
  		epoch: 2459200.5,
  		ma: 214.68165,
  		w: 308.72111,
  		om: 256.53264,
  		i: 4.03639,
  		e: 0.5752957,
  		a: 2.401712
  	},
  	{
  		H: 19.18,
  		desig: "2011 LA19",
  		epoch: 2459200.5,
  		ma: 313.79291,
  		w: 202.75619,
  		om: 97.96308,
  		i: 19.22156,
  		e: 0.6520041,
  		a: 2.9119849
  	},
  	{
  		H: 18.9,
  		desig: "2011 LC19",
  		epoch: 2459200.5,
  		ma: 218.2121,
  		w: 139.11834,
  		om: 219.43607,
  		i: 10.49149,
  		e: 0.7319719,
  		a: 3.2000397
  	},
  	{
  		H: 21.3,
  		desig: "2011 LJ19",
  		epoch: 2459000.5,
  		ma: 23.58434,
  		w: 30.33886,
  		om: 296.52095,
  		i: 1.53883,
  		e: 0.6211774,
  		a: 2.6205884
  	},
  	{
  		H: 20.28,
  		desig: "2011 MU",
  		epoch: 2459200.5,
  		ma: 338.88043,
  		w: 281.87582,
  		om: 100.02114,
  		i: 7.29562,
  		e: 0.6649687,
  		a: 1.3499745
  	},
  	{
  		H: 21.2,
  		desig: "2011 OA",
  		epoch: 2459200.5,
  		ma: 345.44825,
  		w: 28.13479,
  		om: 280.88557,
  		i: 9.15057,
  		e: 0.5196545,
  		a: 2.1592536
  	},
  	{
  		H: 19.3,
  		desig: "2011 OB",
  		epoch: 2459000.5,
  		ma: 191.20114,
  		w: 48.88803,
  		om: 106.25351,
  		i: 27.74491,
  		e: 0.5241028,
  		a: 0.9039707
  	},
  	{
  		H: 21,
  		desig: "2011 OR15",
  		epoch: 2459200.5,
  		ma: 111.86368,
  		w: 251.09017,
  		om: 146.09805,
  		i: 5.01305,
  		e: 0.4429472,
  		a: 1.6555137
  	},
  	{
  		H: 19.7,
  		desig: "2011 OV18",
  		epoch: 2459200.5,
  		ma: 125.38129,
  		w: 148.97143,
  		om: 271.31923,
  		i: 16.93482,
  		e: 0.4390509,
  		a: 1.6304376
  	},
  	{
  		H: 20.4,
  		desig: "2011 PS",
  		epoch: 2459200.5,
  		ma: 277.07255,
  		w: 26.82815,
  		om: 19.09401,
  		i: 3.7326,
  		e: 0.5148898,
  		a: 1.8063999
  	},
  	{
  		H: 20.9,
  		desig: "2011 PO1",
  		epoch: 2459200.5,
  		ma: 113.14281,
  		w: 166.73047,
  		om: 210.64868,
  		i: 5.73722,
  		e: 0.634245,
  		a: 2.5175724
  	},
  	{
  		H: 21.19,
  		desig: "2011 SO32",
  		epoch: 2459200.5,
  		ma: 358.47424,
  		w: 243.60425,
  		om: 198.76538,
  		i: 9.91036,
  		e: 0.4768126,
  		a: 1.7246276
  	},
  	{
  		H: 19.6,
  		desig: "2011 SM68",
  		epoch: 2459200.5,
  		ma: 167.48422,
  		w: 109.14125,
  		om: 24.08972,
  		i: 19.22951,
  		e: 0.6643036,
  		a: 1.3959183
  	},
  	{
  		H: 21.5,
  		desig: "2011 TK",
  		epoch: 2459200.5,
  		ma: 121.42679,
  		w: 122.21251,
  		om: 328.36768,
  		i: 7.78154,
  		e: 0.6466454,
  		a: 2.4614594
  	},
  	{
  		H: 20.4,
  		desig: "2011 TC4",
  		epoch: 2459000.5,
  		ma: 218.56052,
  		w: 309.14374,
  		om: 200.87768,
  		i: 3.12496,
  		e: 0.7200416,
  		a: 1.4913486
  	},
  	{
  		H: 21.9,
  		desig: "2011 TX8",
  		epoch: 2459200.5,
  		ma: 136.17258,
  		w: 313.29356,
  		om: 207.89773,
  		i: 5.97377,
  		e: 0.7084615,
  		a: 0.9094597
  	},
  	{
  		H: 21.3,
  		desig: "2011 TN9",
  		epoch: 2459200.5,
  		ma: 187.86377,
  		w: 163.08111,
  		om: 199.16053,
  		i: 4.10339,
  		e: 0.4510665,
  		a: 1.8989522
  	},
  	{
  		H: 21.4,
  		desig: "2011 UG20",
  		epoch: 2459200.5,
  		ma: 197.40932,
  		w: 305.01774,
  		om: 205.74896,
  		i: 18.97938,
  		e: 0.6868341,
  		a: 1.1242141
  	},
  	{
  		H: 21,
  		desig: "2011 UH20",
  		epoch: 2459200.5,
  		ma: 314.59076,
  		w: 257.18276,
  		om: 21.61912,
  		i: 35.77457,
  		e: 0.3360447,
  		a: 1.2308253
  	},
  	{
  		H: 20.5,
  		desig: "2011 UT20",
  		epoch: 2459200.5,
  		ma: 290.02895,
  		w: 246.38758,
  		om: 271.39986,
  		i: 6.56111,
  		e: 0.4408553,
  		a: 1.1905999
  	},
  	{
  		H: 21.7,
  		desig: "2011 UV63",
  		epoch: 2459200.5,
  		ma: 193.71035,
  		w: 189.83793,
  		om: 13.6724,
  		i: 9.78706,
  		e: 0.1338271,
  		a: 1.1925812
  	},
  	{
  		H: 21.4,
  		desig: "2011 UE305",
  		epoch: 2459200.5,
  		ma: 162.43303,
  		w: 52.89591,
  		om: 303.71099,
  		i: 4.71981,
  		e: 0.6707343,
  		a: 2.4224921
  	},
  	{
  		H: 20.4,
  		desig: "2011 VU5",
  		epoch: 2459000.5,
  		ma: 222.48146,
  		w: 24.94183,
  		om: 44.08401,
  		i: 30.48147,
  		e: 0.5564225,
  		a: 2.1986364
  	},
  	{
  		H: 19.6,
  		desig: "2011 WN15",
  		epoch: 2459200.5,
  		ma: 301.40433,
  		w: 218.55134,
  		om: 75.57333,
  		i: 33.44542,
  		e: 0.8579872,
  		a: 1.216781
  	},
  	{
  		H: 21.1,
  		desig: "2011 WN46",
  		epoch: 2459200.5,
  		ma: 83.81696,
  		w: 104.06878,
  		om: 43.04742,
  		i: 26.63589,
  		e: 0.4156424,
  		a: 1.1473049
  	},
  	{
  		H: 20,
  		desig: "2011 WR46",
  		epoch: 2459200.5,
  		ma: 109.66714,
  		w: 323.56023,
  		om: 240.55344,
  		i: 4.86893,
  		e: 0.8943511,
  		a: 2.4631088
  	},
  	{
  		H: 20.4,
  		desig: "2011 XA3",
  		epoch: 2459200.5,
  		ma: 1.5131,
  		w: 323.91594,
  		om: 273.45218,
  		i: 28.02242,
  		e: 0.9259366,
  		a: 1.4666919
  	},
  	{
  		H: 21,
  		desig: "2011 YE6",
  		epoch: 2459200.5,
  		ma: 314.26932,
  		w: 348.15116,
  		om: 182.11609,
  		i: 3.05978,
  		e: 0.7301404,
  		a: 2.8098093
  	},
  	{
  		H: 21.1,
  		desig: "2011 YG6",
  		epoch: 2459200.5,
  		ma: 113.40875,
  		w: 267.31814,
  		om: 92.83576,
  		i: 28.05741,
  		e: 0.2988174,
  		a: 1.1644553
  	},
  	{
  		H: 20.4,
  		desig: "2011 YH28",
  		epoch: 2459200.5,
  		ma: 20.48489,
  		w: 287.39765,
  		om: 285.49179,
  		i: 8.62416,
  		e: 0.7118621,
  		a: 2.6259068
  	},
  	{
  		H: 21.3,
  		desig: "2011 YJ28",
  		epoch: 2459200.5,
  		ma: 315.43703,
  		w: 306.01963,
  		om: 290.11072,
  		i: 27.07297,
  		e: 0.0925333,
  		a: 1.0597973
  	},
  	{
  		H: 21.3,
  		desig: "2011 YV62",
  		epoch: 2459200.5,
  		ma: 152.71858,
  		w: 85.29705,
  		om: 243.87983,
  		i: 7.78702,
  		e: 0.5998349,
  		a: 1.6364577
  	},
  	{
  		H: 19.7,
  		desig: "2012 AD3",
  		epoch: 2459200.5,
  		ma: 303.73307,
  		w: 216.12141,
  		om: 149.78614,
  		i: 5.2192,
  		e: 0.6061628,
  		a: 2.1954601
  	},
  	{
  		H: 20.1,
  		desig: "2012 AA11",
  		epoch: 2459200.5,
  		ma: 54.01665,
  		w: 145.74161,
  		om: 21.26855,
  		i: 6.40728,
  		e: 0.4843414,
  		a: 1.9781893
  	},
  	{
  		H: 21.5,
  		desig: "2012 BS23",
  		epoch: 2459000.5,
  		ma: 5.29229,
  		w: 258.89291,
  		om: 317.80621,
  		i: 5.3848,
  		e: 0.5790625,
  		a: 1.9364034
  	},
  	{
  		H: 19,
  		desig: "2012 BT23",
  		epoch: 2459200.5,
  		ma: 42.38019,
  		w: 43.30782,
  		om: 182.29896,
  		i: 9.10329,
  		e: 0.6001853,
  		a: 1.9753386
  	},
  	{
  		H: 21.5,
  		desig: "2012 BU61",
  		epoch: 2459200.5,
  		ma: 95.61765,
  		w: 73.8926,
  		om: 296.32611,
  		i: 5.22632,
  		e: 0.7767594,
  		a: 2.5273389
  	},
  	{
  		H: 21.3,
  		desig: "2012 BJ86",
  		epoch: 2459200.5,
  		ma: 84.24715,
  		w: 99.8993,
  		om: 301.96572,
  		i: 1.34013,
  		e: 0.6368946,
  		a: 1.9815242
  	},
  	{
  		H: 21.8,
  		desig: "2012 BM86",
  		epoch: 2459200.5,
  		ma: 273.99894,
  		w: 56.3522,
  		om: 164.14321,
  		i: 11.39522,
  		e: 0.6331517,
  		a: 2.1500294
  	},
  	{
  		H: 21.2,
  		desig: "2012 BB124",
  		epoch: 2459200.5,
  		ma: 309.19198,
  		w: 122.78966,
  		om: 137.65451,
  		i: 15.78762,
  		e: 0.2110812,
  		a: 1.154857
  	},
  	{
  		H: 19.1,
  		desig: "2012 CA21",
  		epoch: 2459200.5,
  		ma: 9.14163,
  		w: 35.58464,
  		om: 128.11548,
  		i: 28.85078,
  		e: 0.6587224,
  		a: 2.6534168
  	},
  	{
  		H: 21.9,
  		desig: "2012 CA55",
  		epoch: 2459200.5,
  		ma: 208.09998,
  		w: 41.39562,
  		om: 175.93109,
  		i: 8.64099,
  		e: 0.4786813,
  		a: 1.8015136
  	},
  	{
  		H: 21.7,
  		desig: "2012 DE31",
  		epoch: 2459200.5,
  		ma: 118.86427,
  		w: 262.18741,
  		om: 141.64254,
  		i: 29.67978,
  		e: 0.3726018,
  		a: 1.1500024
  	},
  	{
  		H: 21.9,
  		desig: "2012 DK31",
  		epoch: 2459200.5,
  		ma: 321.68769,
  		w: 149.22488,
  		om: 165.20519,
  		i: 11.14956,
  		e: 0.5765807,
  		a: 0.6940124
  	},
  	{
  		H: 20.3,
  		desig: "2012 DX75",
  		epoch: 2459200.5,
  		ma: 137.66718,
  		w: 211.88311,
  		om: 13.56987,
  		i: 14.82633,
  		e: 0.5737166,
  		a: 2.3593811
  	},
  	{
  		H: 19.3,
  		desig: "2012 FQ1",
  		epoch: 2459200.5,
  		ma: 356.71936,
  		w: 169.33929,
  		om: 98.27249,
  		i: 5.17292,
  		e: 0.6162117,
  		a: 2.6050635
  	},
  	{
  		H: 19.1,
  		desig: "2012 FR1",
  		epoch: 2459200.5,
  		ma: 287.93594,
  		w: 87.16334,
  		om: 354.61198,
  		i: 13.28757,
  		e: 0.7097469,
  		a: 2.1802868
  	},
  	{
  		H: 22,
  		desig: "2012 FG58",
  		epoch: 2459200.5,
  		ma: 259.65799,
  		w: 220.54556,
  		om: 32.84442,
  		i: 13.51025,
  		e: 0.5461472,
  		a: 2.148519
  	},
  	{
  		H: 20.2,
  		desig: "2012 FO62",
  		epoch: 2459200.5,
  		ma: 48.63006,
  		w: 212.79,
  		om: 258.52145,
  		i: 3.98361,
  		e: 0.5169938,
  		a: 2.0135705
  	},
  	{
  		H: 21.1,
  		desig: "2012 GV17",
  		epoch: 2459200.5,
  		ma: 338.82849,
  		w: 311.81153,
  		om: 6.7762,
  		i: 11.04183,
  		e: 0.4592096,
  		a: 1.6415172
  	},
  	{
  		H: 17.9,
  		desig: "2012 HJ1",
  		epoch: 2459200.5,
  		ma: 333.47376,
  		w: 291.20345,
  		om: 44.66145,
  		i: 31.29537,
  		e: 0.6068324,
  		a: 2.0024279
  	},
  	{
  		H: 19.7,
  		desig: "2012 HG8",
  		epoch: 2459200.5,
  		ma: 106.65144,
  		w: 256.73135,
  		om: 214.66037,
  		i: 25.60023,
  		e: 0.728474,
  		a: 2.45745
  	},
  	{
  		H: 18.9,
  		desig: "2012 HG31",
  		epoch: 2459200.5,
  		ma: 215.40276,
  		w: 173.09187,
  		om: 148.27924,
  		i: 10.24173,
  		e: 0.5324534,
  		a: 2.1730665
  	},
  	{
  		H: 20.4,
  		desig: "2012 HZ33",
  		epoch: 2459200.5,
  		ma: 158.16296,
  		w: 231.57278,
  		om: 54.91534,
  		i: 23.87588,
  		e: 0.2102777,
  		a: 1.1974367
  	},
  	{
  		H: 21.1,
  		desig: "2012 KA4",
  		epoch: 2459200.5,
  		ma: 198.33293,
  		w: 237.4701,
  		om: 214.93252,
  		i: 5.80396,
  		e: 0.77998,
  		a: 1.1002578
  	},
  	{
  		H: 21.6,
  		desig: "2012 KC6",
  		epoch: 2459200.5,
  		ma: 116.30544,
  		w: 337.97168,
  		om: 195.38656,
  		i: 11.31945,
  		e: 0.2463679,
  		a: 1.2407156
  	},
  	{
  		H: 21.9,
  		desig: "2012 KN11",
  		epoch: 2459200.5,
  		ma: 320.93317,
  		w: 238.03984,
  		om: 261.17792,
  		i: 5.4381,
  		e: 0.6566325,
  		a: 2.0978697
  	},
  	{
  		H: 21.6,
  		desig: "2012 KU12",
  		epoch: 2459200.5,
  		ma: 85.8502,
  		w: 74.21916,
  		om: 53.17183,
  		i: 8.62746,
  		e: 0.4890795,
  		a: 1.6382654
  	},
  	{
  		H: 20.5,
  		desig: "2012 LR1",
  		epoch: 2459200.5,
  		ma: 248.35507,
  		w: 66.56956,
  		om: 83.11071,
  		i: 42.32163,
  		e: 0.3814856,
  		a: 1.3365794
  	},
  	{
  		H: 19.9,
  		desig: "2012 LZ1",
  		epoch: 2459200.5,
  		ma: 26.21933,
  		w: 14.29819,
  		om: 264.50527,
  		i: 26.11513,
  		e: 0.590457,
  		a: 2.5564352
  	},
  	{
  		H: 20.3,
  		desig: "2012 LK11",
  		epoch: 2459200.5,
  		ma: 79.78154,
  		w: 159.94639,
  		om: 152.19626,
  		i: 5.15292,
  		e: 0.5938148,
  		a: 2.4269741
  	},
  	{
  		H: 18.7,
  		desig: "2012 MS4",
  		epoch: 2459200.5,
  		ma: 197.92845,
  		w: 257.59089,
  		om: 265.83537,
  		i: 67.67309,
  		e: 0.7206153,
  		a: 2.2640254
  	},
  	{
  		H: 21.1,
  		desig: "2012 MJ6",
  		epoch: 2459200.5,
  		ma: 183.91912,
  		w: 127.10145,
  		om: 82.34172,
  		i: 9.22015,
  		e: 0.4897756,
  		a: 1.8225709
  	},
  	{
  		H: 21.5,
  		desig: "2012 MZ6",
  		epoch: 2459200.5,
  		ma: 271.81878,
  		w: 225.12841,
  		om: 317.0979,
  		i: 1.35776,
  		e: 0.7125073,
  		a: 2.1426317
  	},
  	{
  		H: 20.9,
  		desig: "2012 NN",
  		epoch: 2459200.5,
  		ma: 22.1117,
  		w: 6.36948,
  		om: 237.53018,
  		i: 4.6277,
  		e: 0.6269739,
  		a: 2.5766645
  	},
  	{
  		H: 20.6,
  		desig: "2012 OO",
  		epoch: 2459200.5,
  		ma: 273.37172,
  		w: 179.88173,
  		om: 160.90121,
  		i: 4.83528,
  		e: 0.3835751,
  		a: 1.6963246
  	},
  	{
  		H: 21.9,
  		desig: "2012 OQ",
  		epoch: 2459200.5,
  		ma: 119.00072,
  		w: 100.68818,
  		om: 294.08495,
  		i: 7.09854,
  		e: 0.3949584,
  		a: 1.1908128
  	},
  	{
  		H: 20,
  		desig: "2012 OP4",
  		epoch: 2459200.5,
  		ma: 237.74873,
  		w: 262.81046,
  		om: 143.60694,
  		i: 20.65316,
  		e: 0.6582623,
  		a: 2.1172057
  	},
  	{
  		H: 21.3,
  		desig: "2012 PS4",
  		epoch: 2459000.5,
  		ma: 141.57987,
  		w: 144.1942,
  		om: 86.23741,
  		i: 3.93784,
  		e: 0.5926725,
  		a: 1.7677728
  	},
  	{
  		H: 19.3,
  		desig: "2012 PP28",
  		epoch: 2459200.5,
  		ma: 328.74596,
  		w: 133.5946,
  		om: 254.10239,
  		i: 5.66963,
  		e: 0.6064422,
  		a: 1.9900289
  	},
  	{
  		H: 17.9,
  		desig: "2012 QC8",
  		epoch: 2459200.5,
  		ma: 264.55478,
  		w: 47.6725,
  		om: 22.29146,
  		i: 5.67986,
  		e: 0.7588337,
  		a: 2.8191585
  	},
  	{
  		H: 20.9,
  		desig: "2012 QQ10",
  		epoch: 2459200.5,
  		ma: 50.41953,
  		w: 227.9398,
  		om: 65.55381,
  		i: 3.96101,
  		e: 0.4684489,
  		a: 1.9348524
  	},
  	{
  		H: 20.9,
  		desig: "2012 QG42",
  		epoch: 2459000.5,
  		ma: 84.52742,
  		w: 116.15093,
  		om: 344.79008,
  		i: 6.80854,
  		e: 0.3745074,
  		a: 1.0256685
  	},
  	{
  		H: 18.9,
  		desig: "2012 QE50",
  		epoch: 2459200.5,
  		ma: 197.88752,
  		w: 224.87815,
  		om: 193.93847,
  		i: 11.90288,
  		e: 0.4409084,
  		a: 1.7327003
  	},
  	{
  		H: 19.8,
  		desig: "2012 RG15",
  		epoch: 2459200.5,
  		ma: 208.46593,
  		w: 247.21311,
  		om: 336.62893,
  		i: 48.92789,
  		e: 0.4533625,
  		a: 1.0767798
  	},
  	{
  		H: 20.1,
  		desig: "2012 SD22",
  		epoch: 2459200.5,
  		ma: 324.03161,
  		w: 313.85561,
  		om: 140.24554,
  		i: 7.91204,
  		e: 0.5724922,
  		a: 1.9641309
  	},
  	{
  		H: 21.4,
  		desig: "2012 TY52",
  		epoch: 2459200.5,
  		ma: 253.68437,
  		w: 252.85965,
  		om: 221.61056,
  		i: 9.62929,
  		e: 0.5530964,
  		a: 1.6638002
  	},
  	{
  		H: 21.2,
  		desig: "2012 TF53",
  		epoch: 2459200.5,
  		ma: 226.58788,
  		w: 282.38757,
  		om: 201.07026,
  		i: 6.12834,
  		e: 0.3689836,
  		a: 1.4262218
  	},
  	{
  		H: 19.85,
  		desig: "2012 TO139",
  		epoch: 2459200.5,
  		ma: 73.64866,
  		w: 56.27164,
  		om: 179.23831,
  		i: 5.36686,
  		e: 0.8885746,
  		a: 2.4383982
  	},
  	{
  		H: 20.3,
  		desig: "2012 TP139",
  		epoch: 2459200.5,
  		ma: 271.34754,
  		w: 3.30934,
  		om: 271.82379,
  		i: 2.34129,
  		e: 0.4647231,
  		a: 1.4678173
  	},
  	{
  		H: 19.2,
  		desig: "2012 UZ33",
  		epoch: 2459200.5,
  		ma: 194.46444,
  		w: 224.75353,
  		om: 85.91391,
  		i: 3.35575,
  		e: 0.5806987,
  		a: 2.2293097
  	},
  	{
  		H: 19.1,
  		desig: "2012 UR136",
  		epoch: 2459200.5,
  		ma: 78.44476,
  		w: 202.77798,
  		om: 87.52914,
  		i: 6.0622,
  		e: 0.4603258,
  		a: 1.9166678
  	},
  	{
  		H: 21.2,
  		desig: "2012 UU136",
  		epoch: 2459200.5,
  		ma: 288.97848,
  		w: 227.75059,
  		om: 36.09249,
  		i: 35.59017,
  		e: 0.2118628,
  		a: 1.160098
  	},
  	{
  		H: 21.4,
  		desig: "2012 UR138",
  		epoch: 2459000.5,
  		ma: 301.90581,
  		w: 49.01974,
  		om: 255.931,
  		i: 7.77458,
  		e: 0.5427355,
  		a: 1.9674328
  	},
  	{
  		H: 20.7,
  		desig: "2012 UR158",
  		epoch: 2459200.5,
  		ma: 138.89501,
  		w: 238.15005,
  		om: 287.63024,
  		i: 3.21687,
  		e: 0.8555395,
  		a: 2.2380954
  	},
  	{
  		H: 20.1,
  		desig: "2012 VK6",
  		epoch: 2459200.5,
  		ma: 131.67043,
  		w: 339.57055,
  		om: 290.85857,
  		i: 1.83221,
  		e: 0.7028971,
  		a: 2.3091035
  	},
  	{
  		H: 20.8,
  		desig: "2012 VL6",
  		epoch: 2459200.5,
  		ma: 90.71883,
  		w: 19.2672,
  		om: 19.46918,
  		i: 8.72868,
  		e: 0.5653308,
  		a: 2.3434266
  	},
  	{
  		H: 21.5,
  		desig: "2012 VO6",
  		epoch: 2459200.5,
  		ma: 304.77932,
  		w: 243.76858,
  		om: 242.53336,
  		i: 3.57003,
  		e: 0.5360312,
  		a: 1.965022
  	},
  	{
  		H: 21,
  		desig: "2012 VF37",
  		epoch: 2459200.5,
  		ma: 16.11687,
  		w: 58.63799,
  		om: 82.55142,
  		i: 4.90797,
  		e: 0.6534963,
  		a: 2.458846
  	},
  	{
  		H: 20.2,
  		desig: "2012 VE46",
  		epoch: 2459200.5,
  		ma: 10.15639,
  		w: 190.50773,
  		om: 8.77702,
  		i: 6.67474,
  		e: 0.3613007,
  		a: 0.7130297
  	},
  	{
  		H: 20.2,
  		desig: "2012 VC82",
  		epoch: 2459200.5,
  		ma: 73.8809,
  		w: 29.23459,
  		om: 355.34751,
  		i: 10.81338,
  		e: 0.5806998,
  		a: 2.3808232
  	},
  	{
  		H: 19.1,
  		desig: "2012 XY6",
  		epoch: 2459200.5,
  		ma: 259.26504,
  		w: 173.29912,
  		om: 348.3625,
  		i: 7.79231,
  		e: 0.4916897,
  		a: 2.0075892
  	},
  	{
  		H: 21.2,
  		desig: "2012 XO111",
  		epoch: 2459200.5,
  		ma: 265.09945,
  		w: 189.81744,
  		om: 328.11011,
  		i: 4.28427,
  		e: 0.4995392,
  		a: 2.0035177
  	},
  	{
  		H: 22,
  		desig: "2012 XS111",
  		epoch: 2459200.5,
  		ma: 116.18882,
  		w: 191.96038,
  		om: 62.23228,
  		i: 7.61144,
  		e: 0.4995047,
  		a: 0.773537
  	},
  	{
  		H: 21,
  		desig: "2012 XA133",
  		epoch: 2459200.5,
  		ma: 139.00353,
  		w: 77.95724,
  		om: 225.60042,
  		i: 4.06005,
  		e: 0.6978184,
  		a: 1.3279739
  	},
  	{
  		H: 21.5,
  		desig: "2012 XJ134",
  		epoch: 2459200.5,
  		ma: 353.2712,
  		w: 124.32713,
  		om: 237.15573,
  		i: 2.4639,
  		e: 0.7377662,
  		a: 2.5661311
  	},
  	{
  		H: 21.3,
  		desig: "2012 YO1",
  		epoch: 2459200.5,
  		ma: 101.24345,
  		w: 312.70272,
  		om: 85.83361,
  		i: 17.46508,
  		e: 0.4897995,
  		a: 1.824688
  	},
  	{
  		H: 21,
  		desig: "2012 YQ1",
  		epoch: 2459200.5,
  		ma: 281.35418,
  		w: 42.08351,
  		om: 120.15533,
  		i: 5.15485,
  		e: 0.5646356,
  		a: 1.9956471
  	},
  	{
  		H: 21.2,
  		desig: "2012 YO3",
  		epoch: 2459200.5,
  		ma: 47.10289,
  		w: 351.40249,
  		om: 30.9738,
  		i: 3.59569,
  		e: 0.6721173,
  		a: 2.4408069
  	},
  	{
  		H: 21.3,
  		desig: "2012 YY6",
  		epoch: 2459200.5,
  		ma: 112.64812,
  		w: 317.75711,
  		om: 22.62946,
  		i: 4.02837,
  		e: 0.6812541,
  		a: 1.5251249
  	},
  	{
  		H: 21.8,
  		desig: "2013 AN20",
  		epoch: 2459200.5,
  		ma: 173.85684,
  		w: 355.81352,
  		om: 105.36231,
  		i: 23.07209,
  		e: 0.3048891,
  		a: 1.4646779
  	},
  	{
  		H: 21.4,
  		desig: "2013 AS27",
  		epoch: 2459000.5,
  		ma: 214.52017,
  		w: 253.41947,
  		om: 105.22716,
  		i: 33.59036,
  		e: 0.228462,
  		a: 1.1047885
  	},
  	{
  		H: 20.21,
  		desig: "2013 AX52",
  		epoch: 2459200.5,
  		ma: 200.19864,
  		w: 356.62311,
  		om: 289.12212,
  		i: 32.60179,
  		e: 0.1219894,
  		a: 1.1981154
  	},
  	{
  		H: 21.9,
  		desig: "2013 AN60",
  		epoch: 2459200.5,
  		ma: 42.01858,
  		w: 125.66,
  		om: 248.5463,
  		i: 6.94747,
  		e: 0.5822442,
  		a: 1.8945806
  	},
  	{
  		H: 19,
  		desig: "2013 BC18",
  		epoch: 2459200.5,
  		ma: 249.98304,
  		w: 262.28658,
  		om: 286.1914,
  		i: 24.81432,
  		e: 0.7699948,
  		a: 2.7528542
  	},
  	{
  		H: 21.2,
  		desig: "2013 BD18",
  		epoch: 2459200.5,
  		ma: 71.6169,
  		w: 250.94108,
  		om: 285.81396,
  		i: 17.32285,
  		e: 0.6603954,
  		a: 2.324438
  	},
  	{
  		H: 20.4,
  		desig: "2013 BO76",
  		epoch: 2459200.5,
  		ma: 135.36406,
  		w: 4.46986,
  		om: 242.63291,
  		i: 1.93956,
  		e: 0.5198082,
  		a: 1.7027839
  	},
  	{
  		H: 22,
  		desig: "2013 CW32",
  		epoch: 2459200.5,
  		ma: 155.34426,
  		w: 228.83564,
  		om: 132.09368,
  		i: 26.06527,
  		e: 0.3783214,
  		a: 0.9045532
  	},
  	{
  		H: 17.9,
  		desig: "2013 EW27",
  		epoch: 2459200.5,
  		ma: 4.12008,
  		w: 205.65164,
  		om: 302.19166,
  		i: 24.18514,
  		e: 0.5945195,
  		a: 2.45759
  	},
  	{
  		H: 21.5,
  		desig: "2013 ED28",
  		epoch: 2459200.5,
  		ma: 38.67073,
  		w: 258.52837,
  		om: 152.94717,
  		i: 4.88493,
  		e: 0.6664183,
  		a: 1.5501909
  	},
  	{
  		H: 20.2,
  		desig: "2013 ER89",
  		epoch: 2459200.5,
  		ma: 144.17733,
  		w: 283.64108,
  		om: 0.9631,
  		i: 26.98151,
  		e: 0.5358701,
  		a: 1.6950428
  	},
  	{
  		H: 20.7,
  		desig: "2013 EV108",
  		epoch: 2459200.5,
  		ma: 15.46139,
  		w: 215.27379,
  		om: 33.34557,
  		i: 8.41519,
  		e: 0.6341394,
  		a: 2.3975081
  	},
  	{
  		H: 19.9,
  		desig: "2013 EO126",
  		epoch: 2459200.5,
  		ma: 60.08834,
  		w: 148.49219,
  		om: 153.48074,
  		i: 2.98026,
  		e: 0.7823218,
  		a: 2.2964247
  	},
  	{
  		H: 21.6,
  		desig: "2013 FX7",
  		epoch: 2459200.5,
  		ma: 124.05578,
  		w: 28.8495,
  		om: 211.55381,
  		i: 5.21875,
  		e: 0.3097885,
  		a: 1.2656905
  	},
  	{
  		H: 20.93,
  		desig: "2013 FA8",
  		epoch: 2459200.5,
  		ma: 342.46269,
  		w: 281.00757,
  		om: 165.46338,
  		i: 3.11619,
  		e: 0.6735505,
  		a: 1.9286445
  	},
  	{
  		H: 21.7,
  		desig: "2013 FW13",
  		epoch: 2459200.5,
  		ma: 247.65233,
  		w: 272.32063,
  		om: 175.81993,
  		i: 23.41179,
  		e: 0.3619139,
  		a: 1.1204436
  	},
  	{
  		H: 20.39,
  		desig: "2013 GY7",
  		epoch: 2459200.5,
  		ma: 81.88971,
  		w: 128.59679,
  		om: 189.90668,
  		i: 29.57429,
  		e: 0.2306536,
  		a: 1.2467526
  	},
  	{
  		H: 21.8,
  		desig: "2013 GR38",
  		epoch: 2459200.5,
  		ma: 46.91548,
  		w: 68.37507,
  		om: 218.67484,
  		i: 4.58828,
  		e: 0.556481,
  		a: 1.7899937
  	},
  	{
  		H: 21,
  		desig: "2013 GS66",
  		epoch: 2459200.5,
  		ma: 269.78062,
  		w: 273.39844,
  		om: 204.28351,
  		i: 2.43832,
  		e: 0.5840453,
  		a: 2.0110172
  	},
  	{
  		H: 18.7,
  		desig: "2013 GG69",
  		epoch: 2459200.5,
  		ma: 226.34277,
  		w: 144.68455,
  		om: 183.19107,
  		i: 9.25361,
  		e: 0.6697525,
  		a: 2.686148
  	},
  	{
  		H: 19.1,
  		desig: "2013 GZ73",
  		epoch: 2459200.5,
  		ma: 76.56386,
  		w: 340.21927,
  		om: 116.77311,
  		i: 7.34236,
  		e: 0.6175765,
  		a: 2.3707795
  	},
  	{
  		H: 21.5,
  		desig: "2013 GA80",
  		epoch: 2459200.5,
  		ma: 45.17775,
  		w: 133.09835,
  		om: 29.11757,
  		i: 32.18438,
  		e: 0.1534879,
  		a: 1.1738075
  	},
  	{
  		H: 20.7,
  		desig: "2013 GH84",
  		epoch: 2459200.5,
  		ma: 321.46079,
  		w: 186.42923,
  		om: 53.36801,
  		i: 14.89948,
  		e: 0.3712352,
  		a: 1.5645116
  	},
  	{
  		H: 20.74,
  		desig: "2013 JM7",
  		epoch: 2459200.5,
  		ma: 90.90688,
  		w: 154.82842,
  		om: 242.49038,
  		i: 4.95859,
  		e: 0.2738701,
  		a: 1.2111931
  	},
  	{
  		H: 21,
  		desig: "2013 JN7",
  		epoch: 2459200.5,
  		ma: 178.62396,
  		w: 167.47583,
  		om: 297.5526,
  		i: 2.25781,
  		e: 0.6403604,
  		a: 1.7199393
  	},
  	{
  		H: 21.6,
  		desig: "2013 JM14",
  		epoch: 2459200.5,
  		ma: 355.28428,
  		w: 44.31291,
  		om: 109.53248,
  		i: 8.11131,
  		e: 0.5108647,
  		a: 1.8937984
  	},
  	{
  		H: 21.3,
  		desig: "2013 JL22",
  		epoch: 2459000.5,
  		ma: 210.28176,
  		w: 69.03671,
  		om: 37.99746,
  		i: 3.06318,
  		e: 0.5944342,
  		a: 1.1871603
  	},
  	{
  		H: 21.7,
  		desig: "2013 JR28",
  		epoch: 2459200.5,
  		ma: 91.92699,
  		w: 230.51368,
  		om: 103.5752,
  		i: 6.55435,
  		e: 0.6548669,
  		a: 2.2016583
  	},
  	{
  		H: 21.5,
  		desig: "2013 KZ1",
  		epoch: 2459200.5,
  		ma: 274.57362,
  		w: 104.7057,
  		om: 236.03289,
  		i: 29.19659,
  		e: 0.5067196,
  		a: 1.5624961
  	},
  	{
  		H: 22,
  		desig: "2013 LF7",
  		epoch: 2459200.5,
  		ma: 337.30101,
  		w: 186.12614,
  		om: 127.99057,
  		i: 5.38121,
  		e: 0.5894081,
  		a: 2.4340204
  	},
  	{
  		H: 18.5,
  		desig: "2013 LE16",
  		epoch: 2459200.5,
  		ma: 289.62942,
  		w: 198.16784,
  		om: 81.78326,
  		i: 32.8214,
  		e: 0.6074861,
  		a: 2.5657427
  	},
  	{
  		H: 19.36,
  		desig: "2013 LG16",
  		epoch: 2459200.5,
  		ma: 64.93166,
  		w: 209.5629,
  		om: 232.80479,
  		i: 11.14777,
  		e: 0.4081499,
  		a: 1.6000481
  	},
  	{
  		H: 20.2,
  		desig: "2013 LM31",
  		epoch: 2459200.5,
  		ma: 48.97729,
  		w: 251.12864,
  		om: 103.17152,
  		i: 1.74975,
  		e: 0.6548624,
  		a: 2.2664249
  	},
  	{
  		H: 20,
  		desig: "2013 LN31",
  		epoch: 2459200.5,
  		ma: 59.83646,
  		w: 278.71718,
  		om: 100.84613,
  		i: 23.19941,
  		e: 0.8017516,
  		a: 2.2566067
  	},
  	{
  		H: 19.9,
  		desig: "2013 MW6",
  		epoch: 2459000.5,
  		ma: 46.39016,
  		w: 191.12542,
  		om: 0.81094,
  		i: 5.51887,
  		e: 0.4841297,
  		a: 1.7330002
  	},
  	{
  		H: 22,
  		desig: "2013 NJ",
  		epoch: 2459200.5,
  		ma: 327.06821,
  		w: 140.33915,
  		om: 238.59053,
  		i: 3.94036,
  		e: 0.2835068,
  		a: 1.2859826
  	},
  	{
  		H: 20.2,
  		desig: "2013 NV",
  		epoch: 2459200.5,
  		ma: 51.6668,
  		w: 227.79247,
  		om: 275.61012,
  		i: 29.29174,
  		e: 0.5111329,
  		a: 0.9584688
  	},
  	{
  		H: 18.2,
  		desig: "2013 NJ10",
  		epoch: 2459200.5,
  		ma: 29.91271,
  		w: 25.1296,
  		om: 90.74753,
  		i: 7.0396,
  		e: 0.4577491,
  		a: 1.6129342
  	},
  	{
  		H: 21.6,
  		desig: "2013 NF19",
  		epoch: 2459200.5,
  		ma: 185.80164,
  		w: 262.90392,
  		om: 283.43242,
  		i: 27.33592,
  		e: 0.6955015,
  		a: 1.6698061
  	},
  	{
  		H: 21.2,
  		desig: "2013 ND24",
  		epoch: 2459200.5,
  		ma: 172.63799,
  		w: 97.11298,
  		om: 295.20413,
  		i: 3.63647,
  		e: 0.7425923,
  		a: 2.0473835
  	},
  	{
  		H: 21,
  		desig: "2013 OD4",
  		epoch: 2459200.5,
  		ma: 282.73023,
  		w: 299.32712,
  		om: 127.39936,
  		i: 12.20392,
  		e: 0.7762033,
  		a: 1.8860524
  	},
  	{
  		H: 20.8,
  		desig: "2013 PV13",
  		epoch: 2459200.5,
  		ma: 210.4928,
  		w: 221.47241,
  		om: 151.13708,
  		i: 11.88879,
  		e: 0.6448363,
  		a: 2.7477343
  	},
  	{
  		H: 21.6,
  		desig: "2013 QR1",
  		epoch: 2459200.5,
  		ma: 229.10403,
  		w: 279.3667,
  		om: 151.55613,
  		i: 45.63211,
  		e: 0.7368401,
  		a: 1.9502318
  	},
  	{
  		H: 21.3,
  		desig: "2013 QU1",
  		epoch: 2459200.5,
  		ma: 339.12499,
  		w: 55.21973,
  		om: 149.14421,
  		i: 35.24118,
  		e: 0.2493855,
  		a: 1.1840025
  	},
  	{
  		H: 21.6,
  		desig: "2013 QC11",
  		epoch: 2459200.5,
  		ma: 11.96861,
  		w: 332.58792,
  		om: 250.58244,
  		i: 2.14467,
  		e: 0.6186917,
  		a: 1.5111064
  	},
  	{
  		H: 21,
  		desig: "2013 RZ73",
  		epoch: 2459200.5,
  		ma: 231.49945,
  		w: 262.33518,
  		om: 355.57023,
  		i: 25.12709,
  		e: 0.5338673,
  		a: 1.3687004
  	},
  	{
  		H: 20.9,
  		desig: "2013 RH74",
  		epoch: 2459000.5,
  		ma: 319.5945,
  		w: 227.77809,
  		om: 200.42084,
  		i: 5.4758,
  		e: 0.5935927,
  		a: 2.2850384
  	},
  	{
  		H: 19.1,
  		desig: "2013 RJ74",
  		epoch: 2459200.5,
  		ma: 167.19632,
  		w: 124.4292,
  		om: 348.38211,
  		i: 22.44295,
  		e: 0.7240315,
  		a: 2.811265
  	},
  	{
  		H: 21,
  		desig: "2013 SW24",
  		epoch: 2459200.5,
  		ma: 243.96676,
  		w: 323.85746,
  		om: 347.15811,
  		i: 6.14272,
  		e: 0.6516224,
  		a: 2.6743792
  	},
  	{
  		H: 20.1,
  		desig: "2013 TR132",
  		epoch: 2459200.5,
  		ma: 54.52851,
  		w: 330.05949,
  		om: 35.39711,
  		i: 31.9592,
  		e: 0.3613707,
  		a: 1.4503614
  	},
  	{
  		H: 19.9,
  		desig: "2013 TE135",
  		epoch: 2459200.5,
  		ma: 8.13425,
  		w: 103.09598,
  		om: 182.27015,
  		i: 6.05343,
  		e: 0.7586719,
  		a: 2.3625011
  	},
  	{
  		H: 21.9,
  		desig: "2013 TT135",
  		epoch: 2459200.5,
  		ma: 120.12739,
  		w: 327.26266,
  		om: 341.43513,
  		i: 6.48681,
  		e: 0.6014212,
  		a: 2.1453963
  	},
  	{
  		H: 19.5,
  		desig: "2013 TV135",
  		epoch: 2459200.5,
  		ma: 329.36836,
  		w: 23.78551,
  		om: 333.36878,
  		i: 6.74781,
  		e: 0.5944577,
  		a: 2.4251535
  	},
  	{
  		H: 22,
  		desig: "2013 UX",
  		epoch: 2459200.5,
  		ma: 108.8001,
  		w: 51.85142,
  		om: 259.44112,
  		i: 5.44584,
  		e: 0.5604094,
  		a: 1.6995255
  	},
  	{
  		H: 21.3,
  		desig: "2013 US3",
  		epoch: 2459200.5,
  		ma: 30.37254,
  		w: 134.10322,
  		om: 39.57443,
  		i: 12.31763,
  		e: 0.1852886,
  		a: 1.202253
  	},
  	{
  		H: 21.3,
  		desig: "2013 VO5",
  		epoch: 2459200.5,
  		ma: 3.91621,
  		w: 211.08538,
  		om: 74.00218,
  		i: 2.01746,
  		e: 0.6908171,
  		a: 1.2795973
  	},
  	{
  		H: 21.2,
  		desig: "2013 VY13",
  		epoch: 2459000.5,
  		ma: 336.09969,
  		w: 87.09758,
  		om: 261.23791,
  		i: 5.51963,
  		e: 0.5145155,
  		a: 1.7316895
  	},
  	{
  		H: 21.8,
  		desig: "2013 WR43",
  		epoch: 2459200.5,
  		ma: 129.32527,
  		w: 42.1661,
  		om: 280.18658,
  		i: 5.90344,
  		e: 0.3670643,
  		a: 1.4131708
  	},
  	{
  		H: 19.3,
  		desig: "2013 WT44",
  		epoch: 2459200.5,
  		ma: 2.15591,
  		w: 325.78466,
  		om: 182.73108,
  		i: 12.20599,
  		e: 0.5682577,
  		a: 2.259968
  	},
  	{
  		H: 20.3,
  		desig: "2013 WT45",
  		epoch: 2459200.5,
  		ma: 101.4797,
  		w: 121.97436,
  		om: 33.09722,
  		i: 9.3367,
  		e: 0.4669176,
  		a: 1.6301855
  	},
  	{
  		H: 22,
  		desig: "2013 WR67",
  		epoch: 2459200.5,
  		ma: 273.86776,
  		w: 74.95684,
  		om: 263.44916,
  		i: 4.93754,
  		e: 0.7164243,
  		a: 2.5528546
  	},
  	{
  		H: 20.3,
  		desig: "2013 WF108",
  		epoch: 2459200.5,
  		ma: 133.24729,
  		w: 309.02946,
  		om: 238.99803,
  		i: 23.44401,
  		e: 0.5742305,
  		a: 1.9933591
  	},
  	{
  		H: 20.6,
  		desig: "2013 XW3",
  		epoch: 2459200.5,
  		ma: 61.22548,
  		w: 284.3205,
  		om: 70.53291,
  		i: 4.62727,
  		e: 0.4802545,
  		a: 1.7369278
  	},
  	{
  		H: 19.3,
  		desig: "2013 XN24",
  		epoch: 2459200.5,
  		ma: 217.94883,
  		w: 173.04539,
  		om: 279.27571,
  		i: 13.99472,
  		e: 0.6226263,
  		a: 2.6872906
  	},
  	{
  		H: 21.4,
  		desig: "2013 YC",
  		epoch: 2459200.5,
  		ma: 288.59423,
  		w: 34.50604,
  		om: 262.33203,
  		i: 2.80306,
  		e: 0.9429786,
  		a: 2.4961921
  	},
  	{
  		H: 21.6,
  		desig: "2013 YP139",
  		epoch: 2459200.5,
  		ma: 326.68863,
  		w: 83.56821,
  		om: 292.10952,
  		i: 0.8169,
  		e: 0.6828714,
  		a: 2.3995744
  	},
  	{
  		H: 20.4,
  		desig: "2014 AF51",
  		epoch: 2459200.5,
  		ma: 279.18835,
  		w: 330.11557,
  		om: 237.76802,
  		i: 2.79188,
  		e: 0.4293218,
  		a: 1.7864458
  	},
  	{
  		H: 19.9,
  		desig: "2014 BW2",
  		epoch: 2459200.5,
  		ma: 210.49834,
  		w: 26.47055,
  		om: 163.29462,
  		i: 16.54606,
  		e: 0.4776074,
  		a: 1.8850331
  	},
  	{
  		H: 21.8,
  		desig: "2014 BX2",
  		epoch: 2459200.5,
  		ma: 11.54685,
  		w: 99.9618,
  		om: 135.82989,
  		i: 2.24553,
  		e: 0.7607576,
  		a: 2.2151133
  	},
  	{
  		H: 21,
  		desig: "2014 CY4",
  		epoch: 2459200.5,
  		ma: 224.98065,
  		w: 289.39795,
  		om: 126.6559,
  		i: 15.02165,
  		e: 0.8184847,
  		a: 2.65269
  	},
  	{
  		H: 21.3,
  		desig: "2014 CD13",
  		epoch: 2459200.5,
  		ma: 12.77853,
  		w: 284.45248,
  		om: 332.34384,
  		i: 6.88534,
  		e: 0.7565652,
  		a: 2.2068996
  	},
  	{
  		H: 22,
  		desig: "2014 CM13",
  		epoch: 2459200.5,
  		ma: 268.42534,
  		w: 78.07504,
  		om: 335.63696,
  		i: 9.60793,
  		e: 0.6563888,
  		a: 1.8676244
  	},
  	{
  		H: 21.9,
  		desig: "2014 CU13",
  		epoch: 2459200.5,
  		ma: 38.08497,
  		w: 249.79854,
  		om: 356.17034,
  		i: 5.94665,
  		e: 0.6744172,
  		a: 2.1515791
  	},
  	{
  		H: 19,
  		desig: "2014 DM22",
  		epoch: 2459200.5,
  		ma: 250.16716,
  		w: 112.73957,
  		om: 119.92928,
  		i: 42.13528,
  		e: 0.5589142,
  		a: 1.800698
  	},
  	{
  		H: 21.1,
  		desig: "2014 EQ12",
  		epoch: 2459200.5,
  		ma: 193.87068,
  		w: 92.39917,
  		om: 177.95617,
  		i: 11.01276,
  		e: 0.7442884,
  		a: 2.6378312
  	},
  	{
  		H: 21.9,
  		desig: "2014 EG45",
  		epoch: 2459200.5,
  		ma: 139.30918,
  		w: 296.26223,
  		om: 164.19221,
  		i: 25.50378,
  		e: 0.4984206,
  		a: 1.6085633
  	},
  	{
  		H: 21.8,
  		desig: "2014 EQ49",
  		epoch: 2459200.5,
  		ma: 246.07774,
  		w: 50.37973,
  		om: 11.51007,
  		i: 15.15945,
  		e: 0.2066854,
  		a: 1.1477083
  	},
  	{
  		H: 18.5,
  		desig: "2014 ER49",
  		epoch: 2459200.5,
  		ma: 131.61523,
  		w: 160.13563,
  		om: 100.27509,
  		i: 13.68503,
  		e: 0.6428099,
  		a: 2.8228521
  	},
  	{
  		H: 20.3,
  		desig: "2014 FO47",
  		epoch: 2459200.5,
  		ma: 309.6571,
  		w: 347.46064,
  		om: 358.64902,
  		i: 19.19724,
  		e: 0.271145,
  		a: 0.7521496
  	},
  	{
  		H: 20.09,
  		desig: "2014 GE35",
  		epoch: 2459200.5,
  		ma: 241.68369,
  		w: 232.05564,
  		om: 223.4325,
  		i: 19.16007,
  		e: 0.5204999,
  		a: 1.891874
  	},
  	{
  		H: 22,
  		desig: "2014 HE124",
  		epoch: 2459200.5,
  		ma: 172.12202,
  		w: 230.02447,
  		om: 204.11623,
  		i: 18.68301,
  		e: 0.8494623,
  		a: 1.959054
  	},
  	{
  		H: 18.92,
  		desig: "2014 HQ124",
  		epoch: 2459200.5,
  		ma: 349.07608,
  		w: 144.51277,
  		om: 257.55644,
  		i: 26.37113,
  		e: 0.2590987,
  		a: 0.8507492
  	},
  	{
  		H: 21.1,
  		desig: "2014 HK129",
  		epoch: 2459200.5,
  		ma: 19.28277,
  		w: 44.99026,
  		om: 93.97033,
  		i: 6.68714,
  		e: 0.4907498,
  		a: 1.704907
  	},
  	{
  		H: 21,
  		desig: "2014 HV177",
  		epoch: 2459200.5,
  		ma: 43.95824,
  		w: 127.54277,
  		om: 24.5343,
  		i: 4.5788,
  		e: 0.5518317,
  		a: 2.1686998
  	},
  	{
  		H: 17.8,
  		desig: "2014 JO25",
  		epoch: 2459200.5,
  		ma: 96.73359,
  		w: 49.90915,
  		om: 30.29774,
  		i: 25.16432,
  		e: 0.8865302,
  		a: 2.0655048
  	},
  	{
  		H: 21.2,
  		desig: "2014 JS54",
  		epoch: 2459200.5,
  		ma: 97.39861,
  		w: 206.53985,
  		om: 235.05453,
  		i: 3.36131,
  		e: 0.8940047,
  		a: 2.0742708
  	},
  	{
  		H: 20.1,
  		desig: "2014 JV55",
  		epoch: 2459200.5,
  		ma: 270.63974,
  		w: 106.38927,
  		om: 59.78633,
  		i: 41.44545,
  		e: 0.6923129,
  		a: 2.4557534
  	},
  	{
  		H: 20.5,
  		desig: "2014 JN57",
  		epoch: 2459200.5,
  		ma: 298.6863,
  		w: 143.7221,
  		om: 68.29021,
  		i: 28.58456,
  		e: 0.1677513,
  		a: 1.2432594
  	},
  	{
  		H: 21.3,
  		desig: "2014 KM4",
  		epoch: 2459200.5,
  		ma: 155.68686,
  		w: 10.12553,
  		om: 143.78248,
  		i: 5.19187,
  		e: 0.676628,
  		a: 2.8070524
  	},
  	{
  		H: 19.3,
  		desig: "2014 KP4",
  		epoch: 2459200.5,
  		ma: 323.30075,
  		w: 235.92856,
  		om: 249.04649,
  		i: 9.32448,
  		e: 0.8207821,
  		a: 2.3221947
  	},
  	{
  		H: 21.9,
  		desig: "2014 KS40",
  		epoch: 2459200.5,
  		ma: 316.07657,
  		w: 4.70724,
  		om: 251.38775,
  		i: 2.92286,
  		e: 0.5376528,
  		a: 2.2941428
  	},
  	{
  		H: 20.3,
  		desig: "2014 KZ45",
  		epoch: 2459200.5,
  		ma: 102.07408,
  		w: 231.46652,
  		om: 121.63568,
  		i: 13.76279,
  		e: 0.406383,
  		a: 1.5289664
  	},
  	{
  		H: 20.9,
  		desig: "2014 KE46",
  		epoch: 2459200.5,
  		ma: 334.24588,
  		w: 35.4999,
  		om: 263.67478,
  		i: 8.54379,
  		e: 0.5375813,
  		a: 2.2188222
  	},
  	{
  		H: 21.1,
  		desig: "2014 KT76",
  		epoch: 2459200.5,
  		ma: 264.25852,
  		w: 298.38105,
  		om: 207.99703,
  		i: 4.42955,
  		e: 0.7005711,
  		a: 2.4851339
  	},
  	{
  		H: 20.78,
  		desig: "2014 KP84",
  		epoch: 2459200.5,
  		ma: 338.21558,
  		w: 29.48677,
  		om: 56.22626,
  		i: 22.33892,
  		e: 0.351282,
  		a: 1.4885832
  	},
  	{
  		H: 20.55,
  		desig: "2014 KV86",
  		epoch: 2459200.5,
  		ma: 209.16783,
  		w: 37.23296,
  		om: 130.97227,
  		i: 25.58342,
  		e: 0.6406318,
  		a: 2.6331561
  	},
  	{
  		H: 20.23,
  		desig: "2014 KB91",
  		epoch: 2459200.5,
  		ma: 284.82103,
  		w: 127.09606,
  		om: 201.86918,
  		i: 4.93682,
  		e: 0.576497,
  		a: 2.3308398
  	},
  	{
  		H: 21.8,
  		desig: "2014 MP5",
  		epoch: 2459200.5,
  		ma: 357.33173,
  		w: 183.11005,
  		om: 133.41265,
  		i: 9.76028,
  		e: 0.521591,
  		a: 2.1651129
  	},
  	{
  		H: 20.7,
  		desig: "2014 MF6",
  		epoch: 2459200.5,
  		ma: 239.11723,
  		w: 234.65057,
  		om: 89.84738,
  		i: 4.33394,
  		e: 0.6133002,
  		a: 2.4450225
  	},
  	{
  		H: 21.6,
  		desig: "2014 MJ6",
  		epoch: 2459200.5,
  		ma: 184.73573,
  		w: 102.50522,
  		om: 271.52597,
  		i: 4.48997,
  		e: 0.6419241,
  		a: 1.8425166
  	},
  	{
  		H: 17.8,
  		desig: "2014 MR26",
  		epoch: 2459200.5,
  		ma: 130.38193,
  		w: 293.39115,
  		om: 141.15897,
  		i: 10.78842,
  		e: 0.8434107,
  		a: 2.8849123
  	},
  	{
  		H: 21.4,
  		desig: "2014 MK55",
  		epoch: 2459200.5,
  		ma: 311.61701,
  		w: 207.78085,
  		om: 162.94888,
  		i: 2.93416,
  		e: 0.370027,
  		a: 1.3703661
  	},
  	{
  		H: 21.9,
  		desig: "2014 NB52",
  		epoch: 2459200.5,
  		ma: 154.57846,
  		w: 115.3392,
  		om: 279.39896,
  		i: 24.41107,
  		e: 0.3735566,
  		a: 1.2531715
  	},
  	{
  		H: 21.3,
  		desig: "2014 NK52",
  		epoch: 2459200.5,
  		ma: 11.65137,
  		w: 268.6192,
  		om: 256.28093,
  		i: 2.5438,
  		e: 0.8381375,
  		a: 2.2004161
  	},
  	{
  		H: 21.9,
  		desig: "2014 NG65",
  		epoch: 2459200.5,
  		ma: 305.11635,
  		w: 305.23608,
  		om: 97.3753,
  		i: 8.34821,
  		e: 0.3854432,
  		a: 1.3634025
  	},
  	{
  		H: 19.1,
  		desig: "2014 OY1",
  		epoch: 2459200.5,
  		ma: 209.13151,
  		w: 186.7579,
  		om: 76.31242,
  		i: 23.01287,
  		e: 0.624643,
  		a: 2.5791405
  	},
  	{
  		H: 21.7,
  		desig: "2014 OT111",
  		epoch: 2459200.5,
  		ma: 348.08532,
  		w: 320.42197,
  		om: 307.21225,
  		i: 8.35575,
  		e: 0.5537797,
  		a: 2.2134826
  	},
  	{
  		H: 19.5,
  		desig: "2014 OX299",
  		epoch: 2459200.5,
  		ma: 323.1995,
  		w: 283.14135,
  		om: 154.36781,
  		i: 6.46468,
  		e: 0.8544565,
  		a: 2.207601
  	},
  	{
  		H: 21.45,
  		desig: "2014 OM339",
  		epoch: 2459200.5,
  		ma: 176.06773,
  		w: 18.22161,
  		om: 28.57375,
  		i: 3.44742,
  		e: 0.6445236,
  		a: 2.5774958
  	},
  	{
  		H: 21.7,
  		desig: "2014 OJ392",
  		epoch: 2459200.5,
  		ma: 106.36039,
  		w: 242.14736,
  		om: 316.92432,
  		i: 35.35731,
  		e: 0.2920783,
  		a: 1.1680967
  	},
  	{
  		H: 20.5,
  		desig: "2014 PS59",
  		epoch: 2459000.5,
  		ma: 21.75681,
  		w: 222.81131,
  		om: 162.49527,
  		i: 14.13566,
  		e: 0.5456705,
  		a: 1.9643915
  	},
  	{
  		H: 20.9,
  		desig: "2014 PW59",
  		epoch: 2459200.5,
  		ma: 261.50178,
  		w: 289.56342,
  		om: 301.03836,
  		i: 2.26796,
  		e: 0.6925766,
  		a: 2.4231833
  	},
  	{
  		H: 20.6,
  		desig: "2014 QC3",
  		epoch: 2459200.5,
  		ma: 225.42825,
  		w: 64.62162,
  		om: 146.36083,
  		i: 37.6192,
  		e: 0.3728594,
  		a: 1.2605443
  	},
  	{
  		H: 20.2,
  		desig: "2014 QO296",
  		epoch: 2459200.5,
  		ma: 224.39826,
  		w: 30.64104,
  		om: 193.53585,
  		i: 10.93066,
  		e: 0.4688028,
  		a: 1.835636
  	},
  	{
  		H: 21.1,
  		desig: "2014 QO390",
  		epoch: 2459200.5,
  		ma: 177.26982,
  		w: 233.04765,
  		om: 324.72275,
  		i: 25.64006,
  		e: 0.8780755,
  		a: 1.8776041
  	},
  	{
  		H: 19.8,
  		desig: "2014 QX432",
  		epoch: 2459200.5,
  		ma: 87.1147,
  		w: 68.62529,
  		om: 111.81688,
  		i: 6.43977,
  		e: 0.5868052,
  		a: 1.3665548
  	},
  	{
  		H: 19.9,
  		desig: "2014 QL433",
  		epoch: 2459200.5,
  		ma: 62.53587,
  		w: 260.45916,
  		om: 322.81395,
  		i: 4.42751,
  		e: 0.7176965,
  		a: 2.0920729
  	},
  	{
  		H: 19.1,
  		desig: "2014 QK434",
  		epoch: 2459200.5,
  		ma: 83.62497,
  		w: 166.12773,
  		om: 252.27417,
  		i: 5.97712,
  		e: 0.5030427,
  		a: 1.9407205
  	},
  	{
  		H: 21.7,
  		desig: "2014 SS1",
  		epoch: 2459200.5,
  		ma: 11.06431,
  		w: 341.55645,
  		om: 358.31593,
  		i: 1.47879,
  		e: 0.5184739,
  		a: 2.1228565
  	},
  	{
  		H: 21.6,
  		desig: "2014 SV141",
  		epoch: 2459200.5,
  		ma: 17.82682,
  		w: 141.69281,
  		om: 158.59483,
  		i: 7.80344,
  		e: 0.5225712,
  		a: 2.1306212
  	},
  	{
  		H: 21.7,
  		desig: "2014 SP142",
  		epoch: 2459200.5,
  		ma: 100.15543,
  		w: 81.20706,
  		om: 125.19382,
  		i: 5.57296,
  		e: 0.4199347,
  		a: 1.1604405
  	},
  	{
  		H: 20.3,
  		desig: "2014 SM143",
  		epoch: 2459200.5,
  		ma: 191.46038,
  		w: 89.61907,
  		om: 28.82744,
  		i: 24.21141,
  		e: 0.4227117,
  		a: 1.2057047
  	},
  	{
  		H: 21,
  		desig: "2014 SM260",
  		epoch: 2459200.5,
  		ma: 323.27757,
  		w: 247.12378,
  		om: 336.66755,
  		i: 7.78178,
  		e: 0.8841993,
  		a: 2.2594427
  	},
  	{
  		H: 21.5,
  		desig: "2014 TN17",
  		epoch: 2459200.5,
  		ma: 278.97079,
  		w: 106.21097,
  		om: 0.57176,
  		i: 16.27559,
  		e: 0.7023126,
  		a: 2.2568341
  	},
  	{
  		H: 21.8,
  		desig: "2014 TY33",
  		epoch: 2459200.5,
  		ma: 245.79906,
  		w: 180.534,
  		om: 196.54907,
  		i: 18.66276,
  		e: 0.2616233,
  		a: 1.4129624
  	},
  	{
  		H: 20.7,
  		desig: "2014 TA36",
  		epoch: 2459200.5,
  		ma: 83.62256,
  		w: 256.06978,
  		om: 229.37799,
  		i: 6.14828,
  		e: 0.7086054,
  		a: 2.833601
  	},
  	{
  		H: 19.1,
  		desig: "2014 UQ56",
  		epoch: 2459200.5,
  		ma: 18.53648,
  		w: 182.44318,
  		om: 45.42738,
  		i: 39.90464,
  		e: 0.3240036,
  		a: 1.437221
  	},
  	{
  		H: 19.8,
  		desig: "2014 UR116",
  		epoch: 2459200.5,
  		ma: 39.29567,
  		w: 286.85529,
  		om: 5.93519,
  		i: 6.57325,
  		e: 0.7274693,
  		a: 2.0686465
  	},
  	{
  		H: 21.37,
  		desig: "2014 VL6",
  		epoch: 2459200.5,
  		ma: 191.09325,
  		w: 279.90868,
  		om: 38.8917,
  		i: 6.08594,
  		e: 0.3291222,
  		a: 1.2433986
  	},
  	{
  		H: 21.8,
  		desig: "2014 WD7",
  		epoch: 2459200.5,
  		ma: 263.10733,
  		w: 308.55553,
  		om: 218.94834,
  		i: 2.30795,
  		e: 0.7518999,
  		a: 2.2583551
  	},
  	{
  		H: 20.5,
  		desig: "2014 WZ120",
  		epoch: 2459200.5,
  		ma: 288.06545,
  		w: 245.25074,
  		om: 244.79154,
  		i: 20.90817,
  		e: 0.6398037,
  		a: 2.2116085
  	},
  	{
  		H: 19.2,
  		desig: "2014 WD201",
  		epoch: 2459200.5,
  		ma: 63.60645,
  		w: 199.80071,
  		om: 105.71254,
  		i: 8.46835,
  		e: 0.5023614,
  		a: 2.0958323
  	},
  	{
  		H: 21.1,
  		desig: "2014 WT202",
  		epoch: 2459200.5,
  		ma: 320.51663,
  		w: 185.75788,
  		om: 58.81741,
  		i: 23.39188,
  		e: 0.0629925,
  		a: 0.9655765
  	},
  	{
  		H: 19.1,
  		desig: "2014 WV363",
  		epoch: 2459200.5,
  		ma: 187.83584,
  		w: 210.0407,
  		om: 77.96864,
  		i: 5.52668,
  		e: 0.5159149,
  		a: 1.8459975
  	},
  	{
  		H: 21,
  		desig: "2014 WE365",
  		epoch: 2459200.5,
  		ma: 70.89,
  		w: 67.33759,
  		om: 130.97604,
  		i: 7.23703,
  		e: 0.5002415,
  		a: 1.2305414
  	},
  	{
  		H: 20,
  		desig: "2014 WG365",
  		epoch: 2459200.5,
  		ma: 299.67939,
  		w: 111.07563,
  		om: 71.34896,
  		i: 25.12159,
  		e: 0.3333676,
  		a: 1.2959154
  	},
  	{
  		H: 21.4,
  		desig: "2014 WK368",
  		epoch: 2459200.5,
  		ma: 345.78829,
  		w: 105.14745,
  		om: 237.20621,
  		i: 14.30224,
  		e: 0.7123024,
  		a: 2.155177
  	},
  	{
  		H: 20.1,
  		desig: "2014 XJ3",
  		epoch: 2459200.5,
  		ma: 316.41996,
  		w: 161.62464,
  		om: 22.34376,
  		i: 1.22389,
  		e: 0.7270486,
  		a: 2.1332299
  	},
  	{
  		H: 21,
  		desig: "2014 XL7",
  		epoch: 2459200.5,
  		ma: 349.25711,
  		w: 250.75691,
  		om: 74.47855,
  		i: 7.50217,
  		e: 0.5333568,
  		a: 1.6540019
  	},
  	{
  		H: 19.1,
  		desig: "2014 YY8",
  		epoch: 2459200.5,
  		ma: 314.34387,
  		w: 134.63911,
  		om: 14.36301,
  		i: 20.01283,
  		e: 0.5955139,
  		a: 2.1278298
  	},
  	{
  		H: 20.6,
  		desig: "2014 YL14",
  		epoch: 2459200.5,
  		ma: 123.25167,
  		w: 290.97484,
  		om: 67.89844,
  		i: 5.91742,
  		e: 0.7640703,
  		a: 2.7520896
  	},
  	{
  		H: 21.5,
  		desig: "2014 YR15",
  		epoch: 2459200.5,
  		ma: 272.78698,
  		w: 308.96227,
  		om: 320.56849,
  		i: 5.70919,
  		e: 0.4092635,
  		a: 0.7496413
  	},
  	{
  		H: 20.8,
  		desig: "2014 YS34",
  		epoch: 2459200.5,
  		ma: 353.84419,
  		w: 321.87148,
  		om: 210.11294,
  		i: 6.88132,
  		e: 0.3853657,
  		a: 1.5534045
  	},
  	{
  		H: 21.7,
  		desig: "2014 YW34",
  		epoch: 2459200.5,
  		ma: 253.63734,
  		w: 57.26418,
  		om: 314.32756,
  		i: 6.02743,
  		e: 0.4254039,
  		a: 1.4067059
  	},
  	{
  		H: 21.59,
  		desig: "2015 AH",
  		epoch: 2459200.5,
  		ma: 72.52495,
  		w: 70.60369,
  		om: 255.31927,
  		i: 14.07068,
  		e: 0.240492,
  		a: 0.9068774
  	},
  	{
  		H: 22,
  		desig: "2015 AM45",
  		epoch: 2459200.5,
  		ma: 61.74661,
  		w: 107.65352,
  		om: 275.06641,
  		i: 5.58297,
  		e: 0.5171314,
  		a: 1.5502295
  	},
  	{
  		H: 19.8,
  		desig: "2015 AR45",
  		epoch: 2459200.5,
  		ma: 271.78672,
  		w: 239.58083,
  		om: 114.39455,
  		i: 9.23282,
  		e: 0.7013478,
  		a: 1.3851191
  	},
  	{
  		H: 20.83,
  		desig: "2015 AY245",
  		epoch: 2459200.5,
  		ma: 316.21342,
  		w: 13.04071,
  		om: 143.66617,
  		i: 13.59372,
  		e: 0.1096049,
  		a: 1.1270327
  	},
  	{
  		H: 21.4,
  		desig: "2015 BS4",
  		epoch: 2459200.5,
  		ma: 96.28018,
  		w: 186.75038,
  		om: 355.44259,
  		i: 6.13598,
  		e: 0.6452668,
  		a: 2.7508481
  	},
  	{
  		H: 22,
  		desig: "2015 BW310",
  		epoch: 2459200.5,
  		ma: 152.23591,
  		w: 322.45438,
  		om: 95.10205,
  		i: 10.03971,
  		e: 0.6388156,
  		a: 2.6213669
  	},
  	{
  		H: 21.32,
  		desig: "2015 BZ310",
  		epoch: 2459200.5,
  		ma: 343.99101,
  		w: 271.44806,
  		om: 305.11619,
  		i: 4.08289,
  		e: 0.5532453,
  		a: 2.033652
  	},
  	{
  		H: 21,
  		desig: "2015 BL311",
  		epoch: 2459200.5,
  		ma: 234.58242,
  		w: 143.21166,
  		om: 220.37945,
  		i: 1.71818,
  		e: 0.8442425,
  		a: 2.3660605
  	},
  	{
  		H: 20.5,
  		desig: "2015 BN311",
  		epoch: 2459200.5,
  		ma: 309.92813,
  		w: 228.13045,
  		om: 98.58047,
  		i: 16.81533,
  		e: 0.3236603,
  		a: 1.4156384
  	},
  	{
  		H: 21,
  		desig: "2015 BK515",
  		epoch: 2459200.5,
  		ma: 150.3197,
  		w: 59.19696,
  		om: 152.46147,
  		i: 5.27296,
  		e: 0.4464275,
  		a: 1.7494548
  	},
  	{
  		H: 21.1,
  		desig: "2015 BP515",
  		epoch: 2459200.5,
  		ma: 241.69517,
  		w: 196.58122,
  		om: 134.35014,
  		i: 17.75269,
  		e: 0.1714805,
  		a: 1.2506269
  	},
  	{
  		H: 18.1,
  		desig: "2015 BO519",
  		epoch: 2459200.5,
  		ma: 85.84651,
  		w: 283.35703,
  		om: 215.47448,
  		i: 6.05675,
  		e: 0.8114491,
  		a: 2.8013841
  	},
  	{
  		H: 20,
  		desig: "2015 CX12",
  		epoch: 2459200.5,
  		ma: 42.15476,
  		w: 227.543,
  		om: 195.89451,
  		i: 5.73655,
  		e: 0.6095289,
  		a: 2.0026626
  	},
  	{
  		H: 20.43,
  		desig: "2015 CV13",
  		epoch: 2459200.5,
  		ma: 195.55231,
  		w: 132.49334,
  		om: 124.82204,
  		i: 13.04022,
  		e: 0.2881104,
  		a: 1.3382721
  	},
  	{
  		H: 19,
  		desig: "2015 CZ13",
  		epoch: 2458600.5,
  		ma: 302.73596,
  		w: 77.42256,
  		om: 145.88491,
  		i: 19.03652,
  		e: 0.7625425,
  		a: 2.8056067
  	},
  	{
  		H: 21.8,
  		desig: "2015 DB1",
  		epoch: 2459200.5,
  		ma: 340.90972,
  		w: 242.37821,
  		om: 144.43511,
  		i: 38.11511,
  		e: 0.254612,
  		a: 1.1550268
  	},
  	{
  		H: 20.9,
  		desig: "2015 DH155",
  		epoch: 2459200.5,
  		ma: 204.39744,
  		w: 262.08433,
  		om: 169.89072,
  		i: 12.47104,
  		e: 0.6993625,
  		a: 2.4464434
  	},
  	{
  		H: 21.6,
  		desig: "2015 DP155",
  		epoch: 2459200.5,
  		ma: 252.48181,
  		w: 152.14153,
  		om: 89.15202,
  		i: 5.44035,
  		e: 0.2235454,
  		a: 1.3158617
  	},
  	{
  		H: 20.8,
  		desig: "2015 DU180",
  		epoch: 2459200.5,
  		ma: 84.53758,
  		w: 315.32676,
  		om: 51.82685,
  		i: 4.85296,
  		e: 0.9219524,
  		a: 1.9265636
  	},
  	{
  		H: 20.5,
  		desig: "2015 DC200",
  		epoch: 2459200.5,
  		ma: 126.99861,
  		w: 85.75502,
  		om: 224.15085,
  		i: 3.058,
  		e: 0.8659029,
  		a: 1.7773074
  	},
  	{
  		H: 19.8,
  		desig: "2015 DN215",
  		epoch: 2459200.5,
  		ma: 111.32785,
  		w: 80.72545,
  		om: 3.23517,
  		i: 10.36205,
  		e: 0.7481757,
  		a: 2.738879
  	},
  	{
  		H: 20.44,
  		desig: "2015 DR215",
  		epoch: 2459200.5,
  		ma: 69.75914,
  		w: 42.27896,
  		om: 314.95124,
  		i: 4.08822,
  		e: 0.4715261,
  		a: 0.6664035
  	},
  	{
  		H: 21.5,
  		desig: "2015 EO61",
  		epoch: 2459200.5,
  		ma: 52.77997,
  		w: 261.34791,
  		om: 43.65168,
  		i: 1.97844,
  		e: 0.7344073,
  		a: 1.4550434
  	},
  	{
  		H: 20.7,
  		desig: "2015 FJ",
  		epoch: 2458600.5,
  		ma: 336.76567,
  		w: 99.80518,
  		om: 189.68819,
  		i: 8.262,
  		e: 0.7842267,
  		a: 2.5822944
  	},
  	{
  		H: 20.9,
  		desig: "2015 FL",
  		epoch: 2459200.5,
  		ma: 98.57952,
  		w: 224.82243,
  		om: 11.67714,
  		i: 15.71074,
  		e: 0.6518745,
  		a: 2.6844612
  	},
  	{
  		H: 19.9,
  		desig: "2015 FF35",
  		epoch: 2459200.5,
  		ma: 32.99084,
  		w: 35.38906,
  		om: 235.16186,
  		i: 8.81693,
  		e: 0.5207714,
  		a: 1.8829289
  	},
  	{
  		H: 20.6,
  		desig: "2015 FQ117",
  		epoch: 2459200.5,
  		ma: 250.02636,
  		w: 63.0946,
  		om: 293.89254,
  		i: 4.55996,
  		e: 0.6204864,
  		a: 0.8606858
  	},
  	{
  		H: 21.9,
  		desig: "2015 FS117",
  		epoch: 2459200.5,
  		ma: 257.36157,
  		w: 54.19728,
  		om: 356.57245,
  		i: 28.3839,
  		e: 0.2544765,
  		a: 1.186656
  	},
  	{
  		H: 20.4,
  		desig: "2015 FN118",
  		epoch: 2459200.5,
  		ma: 304.50516,
  		w: 247.64901,
  		om: 195.09097,
  		i: 27.66902,
  		e: 0.5443716,
  		a: 1.6524798
  	},
  	{
  		H: 20.6,
  		desig: "2015 FT118",
  		epoch: 2459200.5,
  		ma: 63.7293,
  		w: 154.58869,
  		om: 196.74571,
  		i: 21.09469,
  		e: 0.1907355,
  		a: 1.167145
  	},
  	{
  		H: 21.1,
  		desig: "2015 FE120",
  		epoch: 2459200.5,
  		ma: 238.51566,
  		w: 188.97826,
  		om: 21.50894,
  		i: 22.79287,
  		e: 0.5512829,
  		a: 2.251155
  	},
  	{
  		H: 20.8,
  		desig: "2015 FV284",
  		epoch: 2459200.5,
  		ma: 173.0928,
  		w: 148.47012,
  		om: 317.15791,
  		i: 8.82488,
  		e: 0.4894171,
  		a: 1.782803
  	},
  	{
  		H: 18.44,
  		desig: "2015 FS332",
  		epoch: 2459200.5,
  		ma: 65.51932,
  		w: 135.76538,
  		om: 193.5159,
  		i: 35.13079,
  		e: 0.4748749,
  		a: 1.8067064
  	},
  	{
  		H: 20.6,
  		desig: "2015 GS",
  		epoch: 2459200.5,
  		ma: 205.43877,
  		w: 20.9426,
  		om: 113.82967,
  		i: 11.85862,
  		e: 0.4769698,
  		a: 1.727265
  	},
  	{
  		H: 21.7,
  		desig: "2015 GY",
  		epoch: 2459200.5,
  		ma: 317.99525,
  		w: 108.65726,
  		om: 207.77177,
  		i: 11.80604,
  		e: 0.2001437,
  		a: 1.0680014
  	},
  	{
  		H: 19.7,
  		desig: "2015 GZ13",
  		epoch: 2459200.5,
  		ma: 63.83444,
  		w: 282.3649,
  		om: 44.61091,
  		i: 33.50237,
  		e: 0.5985276,
  		a: 1.8216092
  	},
  	{
  		H: 18.2,
  		desig: "2015 HB10",
  		epoch: 2459200.5,
  		ma: 160.3194,
  		w: 79.63973,
  		om: 6.18621,
  		i: 5.70377,
  		e: 0.5719451,
  		a: 1.8535216
  	},
  	{
  		H: 21,
  		desig: "2015 HR11",
  		epoch: 2459200.5,
  		ma: 220.2365,
  		w: 198.02224,
  		om: 210.70396,
  		i: 31.15971,
  		e: 0.1693178,
  		a: 1.2141939
  	},
  	{
  		H: 17.5,
  		desig: "2015 HY116",
  		epoch: 2459200.5,
  		ma: 46.44567,
  		w: 248.328,
  		om: 92.81054,
  		i: 14.13077,
  		e: 0.6938643,
  		a: 2.7261714
  	},
  	{
  		H: 19,
  		desig: "2015 HX176",
  		epoch: 2459200.5,
  		ma: 268.82539,
  		w: 123.64898,
  		om: 15.7601,
  		i: 28.26895,
  		e: 0.8032439,
  		a: 3.8919599
  	},
  	{
  		H: 21.5,
  		desig: "2015 HV182",
  		epoch: 2459200.5,
  		ma: 284.51612,
  		w: 254.9472,
  		om: 155.19257,
  		i: 0.67828,
  		e: 0.2801664,
  		a: 1.4047401
  	},
  	{
  		H: 21.4,
  		desig: "2015 JV",
  		epoch: 2459200.5,
  		ma: 176.52939,
  		w: 73.77116,
  		om: 87.35367,
  		i: 7.2249,
  		e: 0.6700516,
  		a: 2.4553136
  	},
  	{
  		H: 20.6,
  		desig: "2015 JD1",
  		epoch: 2459200.5,
  		ma: 332.59443,
  		w: 128.07681,
  		om: 221.16905,
  		i: 19.14007,
  		e: 0.2225168,
  		a: 1.2180035
  	},
  	{
  		H: 20.85,
  		desig: "2015 JY1",
  		epoch: 2459200.5,
  		ma: 277.39458,
  		w: 16.79377,
  		om: 268.00877,
  		i: 8.51524,
  		e: 0.5051778,
  		a: 2.1142182
  	},
  	{
  		H: 21.8,
  		desig: "2015 KB19",
  		epoch: 2459200.5,
  		ma: 142.32586,
  		w: 40.25305,
  		om: 253.07502,
  		i: 7.01862,
  		e: 0.4344722,
  		a: 1.7194602
  	},
  	{
  		H: 22,
  		desig: "2015 KO120",
  		epoch: 2459200.5,
  		ma: 78.50155,
  		w: 199.04475,
  		om: 240.67159,
  		i: 2.19691,
  		e: 0.9346242,
  		a: 1.8817581
  	},
  	{
  		H: 22,
  		desig: "2015 KJ122",
  		epoch: 2459200.5,
  		ma: 195.99264,
  		w: 229.77995,
  		om: 187.91345,
  		i: 5.06604,
  		e: 0.7502668,
  		a: 0.7853672
  	},
  	{
  		H: 19.9,
  		desig: "2015 KH157",
  		epoch: 2459200.5,
  		ma: 140.9939,
  		w: 51.1857,
  		om: 89.42243,
  		i: 21.56829,
  		e: 0.5319682,
  		a: 1.792918
  	},
  	{
  		H: 19.1,
  		desig: "2015 KL157",
  		epoch: 2459200.5,
  		ma: 92.18403,
  		w: 5.09682,
  		om: 279.25763,
  		i: 35.55867,
  		e: 0.6182063,
  		a: 2.6410587
  	},
  	{
  		H: 21.6,
  		desig: "2015 LK24",
  		epoch: 2459200.5,
  		ma: 87.84906,
  		w: 202.49158,
  		om: 94.90173,
  		i: 14.42763,
  		e: 0.6181353,
  		a: 2.6713124
  	},
  	{
  		H: 21.6,
  		desig: "2015 MW53",
  		epoch: 2459200.5,
  		ma: 314.20612,
  		w: 314.81108,
  		om: 85.5251,
  		i: 36.45418,
  		e: 0.1967435,
  		a: 1.2022865
  	},
  	{
  		H: 18.8,
  		desig: "2015 MT96",
  		epoch: 2459200.5,
  		ma: 187.89613,
  		w: 173.24248,
  		om: 177.62321,
  		i: 10.42361,
  		e: 0.5359763,
  		a: 2.2615607
  	},
  	{
  		H: 19.5,
  		desig: "2015 ME131",
  		epoch: 2459200.5,
  		ma: 358.69816,
  		w: 156.86359,
  		om: 317.78836,
  		i: 33.64622,
  		e: 0.2124549,
  		a: 0.816232
  	},
  	{
  		H: 20.9,
  		desig: "2015 NU2",
  		epoch: 2459200.5,
  		ma: 222.0413,
  		w: 279.83703,
  		om: 243.71848,
  		i: 8.14081,
  		e: 0.6482866,
  		a: 1.1391235
  	},
  	{
  		H: 20.4,
  		desig: "2015 NJ3",
  		epoch: 2459200.5,
  		ma: 138.88837,
  		w: 251.39212,
  		om: 134.42362,
  		i: 12.27747,
  		e: 0.6705901,
  		a: 1.6880625
  	},
  	{
  		H: 21,
  		desig: "2015 NK13",
  		epoch: 2459200.5,
  		ma: 191.29768,
  		w: 192.40597,
  		om: 192.89158,
  		i: 8.09561,
  		e: 0.5586938,
  		a: 2.2529072
  	},
  	{
  		H: 19.43,
  		desig: "2015 NU13",
  		epoch: 2459200.5,
  		ma: 8.20035,
  		w: 260.40842,
  		om: 139.90797,
  		i: 4.20892,
  		e: 0.5900434,
  		a: 1.82994
  	},
  	{
  		H: 20.6,
  		desig: "2015 NZ13",
  		epoch: 2459200.5,
  		ma: 300.68224,
  		w: 239.65604,
  		om: 175.40914,
  		i: 6.57689,
  		e: 0.7804387,
  		a: 2.0156443
  	},
  	{
  		H: 20,
  		desig: "2015 OC22",
  		epoch: 2459200.5,
  		ma: 234.81505,
  		w: 321.63546,
  		om: 124.79864,
  		i: 11.65247,
  		e: 0.9030663,
  		a: 2.1510345
  	},