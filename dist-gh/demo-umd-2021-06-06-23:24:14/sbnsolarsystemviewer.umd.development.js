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
      // Loop through scene entities and trigger their update methods
      // If they need 'universal' time, they can access this._clock, etc.
      this._sceneEntities.forEach(function (el) {
        return el.update();
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
      _this._toyScale = _toyScale;
      _this._realScale = 1;
      _this._isZoomToToyScale = false;
      return _this;
    }

    var _proto = AbstractToyModel.prototype;

    _proto.setIsZoomToToyScale = function setIsZoomToToyScale(value) {
      // Note: once set, an animated transition to the new scale will take place within the update loop
      this._isZoomToToyScale = value;
    };

    _proto.getScale = function getScale() {
      return this._isZoomToToyScale ? this._toyScale : this._realScale;
    };

    _proto._setToToyScale = function _setToToyScale() {
      if (!this._toyModel) return; // Update scale instantly (rather than depending on animated transition)

      this._isZoomToToyScale = true;
      var t = this._toyScale; // 't' for 'target'

      this._toyModel.scale.set(t, t, t);
    };

    _proto._updateModelScale = function _updateModelScale() {
      if (!this._toyModel) return; // Test if planet is already at target scale

      var t = this._isZoomToToyScale ? this._toyScale : this._realScale; // 't' for 'target'

      var _this$_toyModel$scale = this._toyModel.scale,
          sx = _this$_toyModel$scale.x,
          sy = _this$_toyModel$scale.y,
          sz = _this$_toyModel$scale.z;
      if (sx === t) return; // Update-mesh-scale logic

      var ds = this._toyScale / 100;

      if (sx < t) {
        // Increase deficient scale
        this._toyModel.scale.set(sx + ds, sy + ds, sz + ds);
      }

      if (sx > t) {
        // Decrease excessive scale
        this._toyModel.scale.set(sx - ds, sy - ds, sz - ds);
      }

      if (Math.abs(sx - t) < ds) {
        // Snap scale to target
        this._toyModel.scale.set(t, t, t);
      }
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
                            _this2._toyModel = _this2.model;
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
  // om?: number; // Longitude of Ascending Node
  // w?: number; // Argument of Perihelion
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
      }) // THREE.LineStrip
      );
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
    function Orbit(name, orbitalType) {
      var _this = this;

      if (orbitalType === void 0) {
        orbitalType = EOrbitalType.PLANET;
      }

      // --->>>
      this.name = name;
      this.orbitalType = orbitalType;

      this.loadPlanet = function () {
        _this.SKEph = EphemPresets[_this.name];
        _this.SKOrbit = new SKOrbit(_this.SKEph, {
          color: _this.orbitalType === EOrbitalType.PLANET ? 'white' : 'pink',
          eclipticLineColor: undefined,
          orbitPathSettings: undefined
        });
        _this.SKprojectedOrbitLine = _this.SKOrbit.getOrbitShape();
      };

      this.loadAsteroid = function () {
        _this.SKEph = new SKEphem({
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

      _this.radius = getPlanetRadiusMeters(NAME);
      _this.orbit = new Orbit(_this.NAME, getPlanetType(NAME));

      _this._sceneEntityGroup.add(_this.orbit.getProjectedOrbitLine()); // Make the model toy-scalable


      _this._toyModel = _this.model; // Set up helper

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

  var DirectionalLight = /*#__PURE__*/function (_AbstractSceneEntity) {
    _inheritsLoose(DirectionalLight, _AbstractSceneEntity);

    function DirectionalLight() {
      var _this;

      // ~~~>>>
      _this = _AbstractSceneEntity.apply(this, arguments) || this;
      _this.NAME = 'Directional Light';

      _this.update = function () {};

      return _this;
    }

    var _proto = DirectionalLight.prototype;

    _proto.init = /*#__PURE__*/function () {
      var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var _this2 = this;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  // Create light
                  _this2._light = new THREE.DirectionalLight(0xffffff, 1);
                  var s = auToMeters(4);

                  _this2._light.position.set(s, s, s);

                  _this2._light.lookAt(0, 0, 0);

                  _this2._light.castShadow = true;

                  _this2._sceneEntityGroup.add(_this2._light);

                  var helper = new THREE.SpotLightHelper(_this2._light.clone(), 5);
                  helper.userData.isHelper = true;
                  helper.visible = true;
                  helper.userData.name = 'my-directional-light-helper';

                  _this2._sceneEntityGroup.add(_this2._light);

                  _this2._sceneEntityGroup.add(helper); // console.log('=============', this._light, this._light.clone(), helper);


                  // console.log('=============', this._light, this._light.clone(), helper);
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

    return DirectionalLight;
  }(AbstractSceneEntity);

  /**
   * Function to take a dodecahedron and warp the points to createa jagged
   * asteroid shape
   */

  var createAsteroidGeometry = function createAsteroidGeometry(size) {
    // --->>>
    var wf = 0.25; // Warp Factor

    var geometry = new THREE.DodecahedronGeometry(size, 1);
    var positionAttribute = geometry.getAttribute('position');
    var point = new THREE.Vector3();
    var vertices = {}; // Collect all repeated points into a hashmap of unique vertices

    for (var i = 0; i < positionAttribute.count; i++) {
      point.fromBufferAttribute(positionAttribute, i); // read vertex

      var key = [point.x, point.y, point.z].join(',');
      if (!vertices[key]) vertices[key] = {
        x: point.x += Math.random() * size * wf,
        y: point.y += Math.random() * size * wf,
        z: point.z += Math.random() * size * wf
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
    }

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
      _this.radius = radius;
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

      _this.orbit = new Orbit(NAME, EOrbitalType.ASTEROID);
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
                            _context.t1 = geometry.clone();
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

                            _this2._toyModel = _this2.model;

                            _this2._sceneEntityGroup.add(_this2.model);

                            _this2._sceneEntityGroup.add(_this2.orbit.getProjectedOrbitLine());

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
    div.style.setProperty('width', '250px');
    div.style.setProperty('height', '40px');
    div.style.setProperty('background-color', 'green'); //

    input.value = 'Earth';
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

  var updateTraversalFraction = function updateTraversalFraction(clock) {
    var searchTimeElapsed = clock.getElapsedTime();
    var fraction = Math.pow(searchTimeElapsed, 6.0) / 1000;
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

    var separation = distanceBetweenTwoVector3s(newCameraPosition, new THREE.Vector3(x, z, y));
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

  /**
   * Implement a scene for this app with 'real' scene entities
   */

  var SceneManager = /*#__PURE__*/function (_AbstractSceneManager) {
    _inheritsLoose(SceneManager, _AbstractSceneManager);

    function SceneManager(containerId) {
      var _this;

      // --->>>
      _this = _AbstractSceneManager.call(this, containerId) || this;
      _this.sun = new Sun();
      _this.isToyScale = true;
      _this.tCenturiesSinceJ2000 = jsDateToCenturiesSinceJ2000(new Date()); // Zooming logic

      _this.zoomableBodies = [];
      _this.zoomTarget = _this.sun;
      _this.isZoomingPosition = false;
      _this.isZoomingAngle = false;
      _this.zoomTraversalFraction = 0;
      _this.destinationCameraPosition = new THREE.Vector3();
      _this.zoomClock = new THREE.Clock(); //Controls movement of camera when touring planets

      _this.lookDirection = new THREE.Vector3();

      _this.setIsToyScale = function (isToyScale) {
        _this.isToyScale = !!isToyScale;

        _this.sun.setIsZoomToToyScale(_this.isToyScale);

        _this.planets.forEach(function (_) {
          return _.setIsZoomToToyScale(_this.isToyScale);
        });

        _this.asteroids.forEach(function (_) {
          return _.setIsZoomToToyScale(_this.isToyScale);
        });
      };

      _this.toggleIsToyScale = function () {
        _this.isToyScale = !_this.isToyScale;

        _this.setIsToyScale(_this.isToyScale);
      };

      _this.tryToStartZooming = function (text) {
        var TEXT = text.toUpperCase();

        var foundTarget = _this.zoomableBodies.find(function (el) {
          return el.NAME === TEXT;
        });

        if (foundTarget) {
          _this.isZoomingPosition = true;
          _this.isZoomingAngle = true;
          _this.zoomTarget = foundTarget;
          _this.zoomClock = new THREE.Clock(true);
          _this._controls.enabled = true;
        }
      };

      _this.tryToStopZooming = function () {
        if (!_this.isZoomingAngle && !_this.isZoomingPosition) {
          _this._controls.target = _this.zoomTarget.getPosition();
          _this._controls.enabled = true;
        }
      };

      _this.updateCamera = function () {
        // Zooming logic
        if (_this.isZoomingPosition || _this.isZoomingAngle) {
          _this.zoomTraversalFraction = updateTraversalFraction(_this.zoomClock);

          if (_this.isZoomingPosition) {
            _this.isZoomingPosition = updateCameraPosition(_this._camera, _this.zoomTarget, _this.zoomTraversalFraction);
          }

          if (_this.isZoomingAngle) {
            _this.isZoomingAngle = updateCameraViewingAngle(_this._camera, _this.zoomTarget, _this.zoomTraversalFraction);
          } else {
            // Keep looking at target even if position is still updating
            var _this$zoomTarget$getP = _this.zoomTarget.getPosition(),
                x = _this$zoomTarget$getP.x,
                y = _this$zoomTarget$getP.y,
                z = _this$zoomTarget$getP.z;

            _this._camera.lookAt(x, y, z);
          }

          _this.tryToStopZooming();
        } else {
          // Orbit controls only update when NOT zooming
          _this._controls.update();
        } // Debug
      };

      _this._camera.getWorldDirection(_this.lookDirection);

      _this.planets = [new Planet('MERCURY'), new Planet('VENUS'), new Planet('EARTH'), new Planet('MARS'), new Planet('CERES'), new Planet('JUPITER'), new Planet('SATURN'), new Planet('URANUS'), new Planet('NEPTUNE'), new Planet('PLUTO'), new Planet('HAUMEA'), new Planet('MAKEMAKE'), new Planet('ERIS')];
      _this.asteroids = [new Asteroid('65P')];
      _this.starField = new StarField(auToMeters(999));
      _this.zoomableBodies = [].concat(_this.planets, _this.asteroids, [_this.sun]);

      _this.registerSceneEntities([_this.starField].concat(_this.planets, [new DirectionalLight(), new MiscHelpers(), new SimpleLight(0.4), new PointLight(5, solarSystemData.SUN.radiusMeters)], _this.asteroids, [
      /** Sun MUST come last due to its sprite-blending settings **/
      _this.sun])); // Logic to run before scene initialization


      _this._preInitHook = function () {
        var radius = auToMeters(4); // const radius = auToMeters(100); // See all planets

        _this._initialViewingVector = new THREE.Vector3(0, 0, radius);
      }; // Logic to run after scene initialization


      _this._postInitHook = function () {
        // Add html
        searchField(_this._container, _this.tryToStartZooming);
        buttonToggleToyScale(_this._container, _this.toggleIsToyScale);
        buttonToggleHelpers(_this._container, _this.toggleHelpersVisibility); // Misc

        _this._controls.maxDistance = auToMeters(100);

        _this.setIsToyScale(true); // this.setHelpersVisibility(!true);
        //


        _this._camera.position.set( // Earth
        // -180595912325.3482,
        // 34587914945.44637,
        // 3906449321.9052143
        // Haumea
        // -4514678652999.103,
        // -996799575287.2986,
        // 1431642047889.7205
        // Over Jupiter's Shoulder
        // 349450170005.93274,
        // 1508896562129.965,
        // 622420704159.6792
        // 65P
        35426284497.8745, -725267146538.4939, -111665855099.58893);
      }; // Clean up on instance destruction


      _this._destroyHook = function () {};

      return _this;
    }

    return SceneManager;
  }(AbstractSceneManager);

  /**
   *  React wrapper
   */

  function SbnSolarSystemViewer(props) {
    // --->>>
    var _width$height$backgro = _extends({
      width: '100%',
      height: '100%',
      backgroundColor: 'grey'
    }, props),
        width = _width$height$backgro.width,
        height = _width$height$backgro.height,
        backgroundColor = _width$height$backgro.backgroundColor;

    var id = 'this-id-will-never-be-duplicated-says-007';
    React.useEffect(function () {
      init(id);
      return function () {
        destroy();
        console.log('Widget app removed!!!');
      };
    }, []);
    return React.createElement("div", {
      id: id,
      style: {
        width: width,
        height: height,
        backgroundColor: backgroundColor
      }
    });
  }

  var threejsScene;
  exports.initDate = /*#__PURE__*/new Date();
  var setInitDate = function setInitDate(date) {
    return exports.initDate = date;
  };
  var getInitDate = function getInitDate() {
    return exports.initDate;
  };
  /**
   * Create threeJs canvas and inject into container
   */

  function init(containerId, options) {
    if (containerId === void 0) {
      containerId = 'threejs-canvas-container';
    }

    // --->>>
    if (!!options) setOptions(options); // Get div to contain canvas

    var canvasContainer = document.getElementById(containerId);
    if (!canvasContainer) throw new Error("Can't find div of id " + containerId);
    threejsScene = new SceneManager(containerId);
    threejsScene.init(); //@ts-ignore

    var eph = new SKEphem({
      epoch: 2458426.5,
      a: 3.870968969437096e-1,
      e: 2.056515875393916e-1,
      i: 7.003891682749818,
      om: 4.830774804443502e1,
      w: 2.917940253442659e1,
      ma: 2.56190975209273e2
    }, 'deg', true
    /* locked */
    );
  }
  /**
   * Destroy
   */

  function destroy() {
    // --->>>
    threejsScene.destroy();
  }

  exports.SbnSolarSystemViewer = SbnSolarSystemViewer;
  exports.destroy = destroy;
  exports.getInitDate = getInitDate;
  exports.init = init;
  exports.setInitDate = setInitDate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sbnsolarsystemviewer.umd.development.js.map