import { Scene, Clock, Vector3, PerspectiveCamera, WebGLRenderer, PCFSoftShadowMap, GammaEncoding, TextureLoader, Group, Sprite, SpriteMaterial, AdditiveBlending, LineSegments, EdgesGeometry, SphereGeometry, LineBasicMaterial, Color, CanvasTexture, Box3, Mesh, BufferGeometry, Line, MeshPhongMaterial, DoubleSide, AxesHelper, AmbientLight, DodecahedronGeometry, PointLight as PointLight$1, PointLightHelper } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import julian from 'julian';
import React from 'react';

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
    this._scene = new Scene();
    this._canvas = document.createElement('canvas');
    this._clock = new Clock(false);
    this._initialViewingVector = new Vector3();
    this._isSceneReady = false;
    this._isRendering = false;
    this._isHelpersShown = false;
    this._isInit = false;
    this._fps = 60;
    this._camera = new PerspectiveCamera(fov, ar, near, far);
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
              this._renderer = new WebGLRenderer({
                canvas: this._canvas,
                antialias: true,
                alpha: true
              });

              this._renderer.setPixelRatio(DPR);

              this._renderer.sortObjects = false; // This prevents pesky rendering-disruption effect

              this._renderer.shadowMap.enabled = true;
              this._renderer.shadowMap.type = PCFSoftShadowMap;
              this._renderer.outputEncoding = GammaEncoding; // Init camera position and orientation

              this._camera.position.copy(this._initialViewingVector);

              this._camera.up = new Vector3(0, 0, 1); // Vector defining up direction of camera

              this._camera.lookAt(0, 0, 0); // Configure orbitControls
              // ! Don't move this code to earlier position or controls will be screwy
              // ! Note sure why; treat as brute fact supervening on inscrutable metaphysical states of affair


              this._controls = new OrbitControls(this._camera, this._renderer.domElement);
              this._controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled

              this._controls.dampingFactor = 0.25;
              this._controls.target = new Vector3(); // Initiate Scene Entities

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
    new TextureLoader().load(url, function (texture) {
      texture.encoding = GammaEncoding;
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

  this._sceneEntityGroup = new Group();

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
    _this.position = new Vector3(0, 0, 0);
    _this.sunRadiusMeters = solarSystemData.SUN.radiusMeters;
    _this.model = new Group();
    _this.sprite = new Sprite(new SpriteMaterial({
      blending: AdditiveBlending,
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


    _this.helper = new LineSegments(new EdgesGeometry(new SphereGeometry(_this.sunRadiusMeters, 32)), new LineBasicMaterial({
      color: new Color('cyan')
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

        resolve(new CanvasTexture(canvasResult));
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
  var boundingBox = new Box3().setFromObject(object);

  var _boundingBox$getCente = boundingBox.getCenter(new Vector3()).toArray(),
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
    if (child instanceof Mesh) {
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

      points.push(new Vector3(pos[0], pos[1], pos[2]));
    } // const pointsGeometry = new THREE.Geometry();
    // pointsGeometry.vertices = points;


    var pointsGeometry = new BufferGeometry();
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
      return new Vector3(values[0], values[1], values[2]);
    }); // const pointGeometry = new THREE.Geometry();
    // pointGeometry.vertices = points;

    var pointGeometry = new BufferGeometry();
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


      pts.push(new Vector3(auToMeters(pos[0]), auToMeters(pos[1]), auToMeters(pos[2]))); //
    }

    pts.push(pts[0]); // const pointGeometry = new THREE.Geometry();
    // pointGeometry.vertices = pts;

    var pointGeometry = new BufferGeometry();
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
    this._orbitShape = new Line(pointGeometry, new LineBasicMaterial({
      color: new Color(this._options.color || 0x444444)
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

    var geometry = new BufferGeometry();
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

    this._eclipticDropLines = new LineSegments(geometry, new LineBasicMaterial({
      color: this._options.eclipticLineColor || 0x333333,
      blending: AdditiveBlending
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

    if ((_this$_orbitShape2 = this._orbitShape) != null && (_this$_orbitShape2$ma = _this$_orbitShape2.material) != null && _this$_orbitShape2$ma.color) this._orbitShape.material.color = new Color(hexVal);
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
        color: _this.color || 'cyan',
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
    _this.model = new Group();
    _this.loadPlanetAsObject = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var name, objUrl, tempMesh, onObjectLoad;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _this.NAME.toLowerCase();
              objUrl = imageBaseUrl + "/planets/" + name + "/" + name + ".glb"; // Add temporary sphere till object is loaded

              tempMesh = new Mesh(new SphereGeometry(_this.radius, 32, 32), new MeshPhongMaterial());
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
              mesh = new Mesh(new SphereGeometry(_this.radius, 32, 32), new MeshPhongMaterial({
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
                  _this.clouds = new Mesh(new SphereGeometry(_this.radius * crf, 32, 32), new MeshPhongMaterial({
                    map: earthClouds,
                    side: DoubleSide,
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


    _this._toyModel = _this.model; // Set up helper

    _this.helper = new LineSegments(new EdgesGeometry(new SphereGeometry(_this.radius * hrf, 32)), new LineBasicMaterial({
      color: new Color('cyan')
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

  return new CanvasTexture(canvas);
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

    _this.material = new MeshPhongMaterial({
      side: DoubleSide,
      transparent: true,
      color: 'black',
      opacity: 0,
      shininess: 0
    });
    _this.mesh = new Mesh(new SphereGeometry(radius, 32, 32), _this.material);
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
                            texture.encoding = GammaEncoding; // this.material.map = texture;
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
                          _this2.material.color = new Color();
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
                var axesHelper = new AxesHelper(auToMeters(100)); // Mark this as helper in order to be toggle-able

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
                _this2._light = new AmbientLight(0x333333, _this2._defaultIntensity);
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
  var geometry = new DodecahedronGeometry(size, 1);
  var positionAttribute = geometry.getAttribute('position');
  var point = new Vector3();
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

    _this.model = new Group();

    _this.getPosition = function () {
      var _this$orbit$getXyzMet = _this.orbit.getXyzMeters(),
          x = _this$orbit$getXyzMet.x,
          y = _this$orbit$getXyzMet.y,
          z = _this$orbit$getXyzMet.z;

      return new Vector3(x, y, z);
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
                          _context.t0 = Mesh;
                          _context.t1 = geometry;
                          _context.t2 = MeshPhongMaterial;
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
                _this2._light = new PointLight$1(0x333333, _this2._defaultIntensity);
                var helper = new PointLightHelper(_this2._light, _this2._radius, new Color('red'));
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
  return new Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
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

    return new Vector3(x + 3 * radius * scale, y + 3 * radius * scale, z);
  } // Logic to find 'scenic' destination with sun in view in the distance
  // to the side of target based on some back-of-envelope high-school geometry


  var X = zoomTarget.getPosition().clone();
  var r = 2 * radius * scale;
  var sinAlpha = r / X.length();
  var alpha = Math.asin(sinAlpha);
  X.applyAxisAngle(new Vector3(0, 0, 1), alpha);
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
  var relativeDestinationCameraVector = new Vector3(x - cp.x, y - cp.y, z - cp.z); // Traverse the camera some fraction along said vector

  var newCameraPosition = new Vector3(cp.x + relativeDestinationCameraVector.x * zoomTraversalFraction, cp.y + relativeDestinationCameraVector.y * zoomTraversalFraction, cp.z + relativeDestinationCameraVector.z * zoomTraversalFraction); // Return signal to stop/continue

  var isZoomingPosition = true; // Decide whether to stop searching and instead lock onto destinationCameraPosition

  var separation = distanceBetweenTwoVector3s(newCameraPosition, new Vector3(x, y, z));
  var smallThresholdSeparation = 0.001;

  if (separation < smallThresholdSeparation) {
    isZoomingPosition = false;
    newCameraPosition = new Vector3(x, y, z);
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
  var destinationLookVector = new Vector3(destinationLookPosition.x - camPos.x, destinationLookPosition.y - camPos.y, destinationLookPosition.z - camPos.z); // Get unitary vector of direction camera is presently pointing

  var presentLookVector = camera.getWorldDirection(new Vector3()); // In order for the change in viewing angle to feel like it matches
  // the change in position, we need to multiply the unitary vector to
  // be on the same order of size as the destinationLookVector

  presentLookVector.multiplyScalar(destinationLookVector.length()); // Use these two vectors to compute the vector "to-be-fractionally-traversed"
  // N.b. you might need to sketch a diagram to understand why this works

  var relativeDestinationLookVector = new Vector3(destinationLookVector.x - presentLookVector.x, destinationLookVector.y - presentLookVector.y, destinationLookVector.z - presentLookVector.z); // Fractionally traverse said vector

  var newLookPosition = new Vector3(camera.position.x + presentLookVector.x + relativeDestinationLookVector.x * zoomTraversalFraction, camera.position.y + presentLookVector.y + relativeDestinationLookVector.y * zoomTraversalFraction, camera.position.z + presentLookVector.z + relativeDestinationLookVector.z * zoomTraversalFraction); // Signal whether to stop/continue

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

var asteroidData = [
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

var au = /*#__PURE__*/auToMeters(1);
var AsteroidBelt = /*#__PURE__*/function (_AbstractToyModel) {
  _inheritsLoose(AsteroidBelt, _AbstractToyModel);

  function AsteroidBelt(NAME) {
    var _this;

    _this = _AbstractToyModel.call(this, 3000) || this;
    _this.NAME = NAME; // --->>>

    _this.orbits = [];
    _this.model = new Group();
    _this.radius = getPlanetRadiusMeters('CERES') * 500;

    _this.getPosition = function () {
      return new Vector3();
    };

    _this.getRadius = function () {
      return _this.radius;
    };

    _this._toyModel = _this.model;
    return _this;
  }

  var _proto = AsteroidBelt.prototype;

  _proto.init = /*#__PURE__*/function () {
    var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      var _this2 = this;

      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(resolve) {
                  var url, texture, meshes, data, promises;
                  return runtime_1.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          // --->>
                          url = imageBaseUrl + "/misc/asteroid-texture-1024.jpg";
                          _context2.next = 3;
                          return getTextureFromImageUrl(url)["catch"](function (_) {
                            return null;
                          });

                        case 3:
                          texture = _context2.sent;
                          meshes = [];
                          data = asteroidData;
                          promises = data.map( /*#__PURE__*/function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(datum, ind) {
                              var orbit, geometry, mesh, _orbit$getXyzMeters, x, y, z;

                              return runtime_1.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      // --->>
                                      orbit = getOrbit(datum, 'red', 0.01);

                                      _this2.orbits.push(orbit); // const geometry = getSphereGeometry();


                                      // const geometry = getSphereGeometry();
                                      geometry = createAsteroidGeometry(_this2.radius * (0.1 + 5 * Math.random()), 0.25 * (1.5 - Math.random()));
                                      mesh = new Mesh(geometry, new MeshPhongMaterial({
                                        color: new Color('grey'),
                                        map: texture,
                                        shininess: 0,
                                        transparent: true
                                      }));
                                      _orbit$getXyzMeters = orbit.getXyzMeters(), x = _orbit$getXyzMeters.x, y = _orbit$getXyzMeters.y, z = _orbit$getXyzMeters.z;
                                      mesh.position.set(x, y, z);
                                      meshes.push(mesh);

                                      _this2.model.add(mesh); // const orbitLine = orbit.getProjectedOrbitLine();
                                      // this._sceneEntityGroup.add(orbitLine);


                                    case 8:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x2, _x3) {
                              return _ref2.apply(this, arguments);
                            };
                          }());

                          _this2._sceneEntityGroup.add(_this2.model);

                          resolve(_this2._sceneEntityGroup);

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.update = function update(_camera) {
    // Toy Model Scale
    // this._updateModelScale();
    if (!_camera) return;

    var dist = _camera.position.distanceTo(new Vector3());

    this.model.traverse(function (child) {
      if (child instanceof Mesh) {
        // --->
        // Scaling size linearly with dist <=> belt visibility ~constant
        // const mu = 1;
        // const s = dist ** mu / au;
        var s = dist / au;
        child.scale.set(s, s, s); // Scale opacity to peak when camera is in belt, and then
        // tend toward zero when moving away; takes a bit of tuning
        // in the exponential if you change asteroid size

        var p = 2.8 * au; // 'Peak' distance to belt based on Ceres

        var opacity = 1 / Math.pow(Math.abs((dist - p) / p), 1.1);
        child.material.opacity = opacity;
        child.material.needsUpdate = true; // if (Math.random() < 0.00001) console.log('dist', dist / au, s, opacity);
      }
    });
  };

  return AsteroidBelt;
}(AbstractToyModel);

function getSKEphem(datum) {
  var epoch = datum.epoch,
      a = datum.a,
      e = datum.e,
      i = datum.i,
      om = datum.om,
      w = datum.w,
      ma = datum.ma;
  return new SKEphem({
    epoch: epoch,
    a: a,
    e: e,
    i: i,
    om: om,
    w: w,
    ma: ma
  }, 'deg', true);
}

function getOrbit(datum, color, opacity) {
  return new Orbit(datum.desig, EOrbitalType.ASTEROID, getSKEphem(datum), color, opacity);
}

/**
 *
 * @param container
 */

var buttonToggleOrbits = function buttonToggleOrbits(container, onClickCB) {
  // --->>>
  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!'); // Set properties unique to this button

  var button = document.createElement('div');
  button.innerText = 'Toggle Orbits';
  button.style.setProperty('bottom', '10px');
  button.style.setProperty('right', '10px'); // Set properties common to all buttons; append to container when ready

  injectCommonButtonProperties(button, container, onClickCB); // Finish him

  return button;
};

/**
 * Implement a scene for this app with 'real' scene entities
 */

var SceneManager = /*#__PURE__*/function (_AbstractSceneManager) {
  _inheritsLoose(SceneManager, _AbstractSceneManager);

  function SceneManager(containerId) {
    var _this;

    // --->>>
    _this = _AbstractSceneManager.call(this, containerId) || this; // ~~~>>>
    // Toy-scalable bodies

    _this.sun = new Sun();
    _this.isToyScale = true;
    _this.isOrbitsVisible = true;
    _this.tCenturiesSinceJ2000 = jsDateToCenturiesSinceJ2000(new Date()); // Zooming logic

    _this.zoomables = [];
    _this.zoomableOrbitals = [];
    _this.zoomTarget = _this.sun;
    _this.isZoomingPosition = false;
    _this.isZoomingAngle = false;
    _this.zoomTraversalFraction = 0;
    _this.destinationCameraPosition = new Vector3();
    _this.zoomClock = new Clock(); //Controls movement of camera when touring planets

    _this.lookDirection = new Vector3();

    _this.setIsToyScale = function (isToyScale) {
      _this.isToyScale = !!isToyScale;

      _this.toyScalables.forEach(function (_) {
        return _.setIsZoomToToyScale(_this.isToyScale);
      });
    };

    _this.toggleIsToyScale = function () {
      _this.isToyScale = !_this.isToyScale;

      _this.setIsToyScale(_this.isToyScale);
    };

    _this.setIsOrbitsVisible = function (isOrbitsVisible) {
      _this.isOrbitsVisible = !!isOrbitsVisible;

      _this.zoomableOrbitals.forEach(function (_) {
        return _.setIsOrbitVisible(_this.isOrbitsVisible);
      });
    };

    _this.toggleIsOrbitsVisible = function () {
      _this.isOrbitsVisible = !_this.isOrbitsVisible;

      _this.setIsOrbitsVisible(_this.isOrbitsVisible);
    };

    _this.tryToStartZooming = function (text) {
      var TEXT = text.toUpperCase();

      var foundTarget = _this.zoomables.find(function (el) {
        return el.NAME === TEXT;
      });

      if (foundTarget) {
        _this.isZoomingPosition = true;
        _this.isZoomingAngle = true;
        _this.zoomTarget = foundTarget;
        _this.zoomClock = new Clock(true);
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
    _this.asteroidBelts = [new AsteroidBelt('MBA')];
    _this.asteroids = [new Asteroid('65P')];
    _this.starField = new StarField(auToMeters(999));
    _this.zoomables = [].concat(_this.planets, _this.asteroids, [_this.sun]);
    _this.zoomableOrbitals = [].concat(_this.planets, _this.asteroids);
    _this.toyScalables = [].concat(_this.planets, _this.asteroids, [// ...this.asteroidBelts,
    _this.sun]);

    _this.registerSceneEntities([// this.starField,
    // new DirectionalLight(),
    new MiscHelpers(), new SimpleLight(0.4), new PointLight(5, solarSystemData.SUN.radiusMeters)].concat(_this.planets, _this.asteroids, _this.asteroidBelts, [
    /** Sun MUST come last due to its sprite-blending settings **/
    _this.sun])); // Logic to run before scene initialization


    _this._preInitHook = function () {
      var radius = auToMeters(4); // const radius = auToMeters(100); // See all planets

      _this._initialViewingVector = new Vector3(0, 0, radius);
    }; // Logic to run after scene initialization


    _this._postInitHook = function () {
      // Add html
      searchField(_this._container, _this.tryToStartZooming);
      buttonToggleToyScale(_this._container, _this.toggleIsToyScale);
      buttonToggleHelpers(_this._container, _this.toggleHelpersVisibility);
      buttonToggleOrbits(_this._container, _this.toggleIsOrbitsVisible); // Misc

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
var initDate = /*#__PURE__*/new Date();
var setInitDate = function setInitDate(date) {
  return initDate = date;
};
var getInitDate = function getInitDate() {
  return initDate;
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

export { SbnSolarSystemViewer, destroy, getInitDate, init, initDate, setInitDate };
//# sourceMappingURL=sbnsolarsystemviewer.esm.js.map
