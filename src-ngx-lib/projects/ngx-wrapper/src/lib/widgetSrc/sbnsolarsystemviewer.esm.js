import { Scene, Clock, Vector3, PerspectiveCamera, WebGLRenderer, PCFSoftShadowMap, GammaEncoding, TextureLoader, Group, SphereGeometry, LineSegments, EdgesGeometry, LineBasicMaterial, MeshPhongMaterial, Mesh, Sprite, AdditiveBlending, Texture, DoubleSide, BufferGeometry, Line, Color, MeshStandardMaterial, BackSide, AxesHelper, DirectionalLight as DirectionalLight$1, DirectionalLightHelper } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { OrbitalUtils, SolarSystem } from 'kepler-utils';
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial';
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
  console.clear();
  return "\n\n   ______________________________    . \\  | / .\n  /                            / \\     \\ \\ / /\n |                            | ==========  - -\n  \\____________________________\\_/     / / \\ \\\n  ______________________________      \\  | / | \\\n /                            / \\     \\ \\ / /.   .\n|                            | ==========  - -\n \\____________________________\\_/     / / \\ \\    /\n   ______________________________   / |\\  | /  .\n  /                            / \\     \\ \\ / /\n |                            | ==========  -  - -\n  \\____________________________\\_/     / / \\ \\\n                                     .  / | \\  .\n\n  Are you trying to wreak havoc!?!\n\n  " + msg + "\n\n  Idiot.\n\n  ";
}

var imageBaseUrl = "https://sbn-solar-system-viewer.s3.amazonaws.com/"; // This is the size of each unit in this solar system
var orbitalParams = {
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
  // Moons
  MOON: {
    radiusMeters: 350000,
    periodDays: 29.5
  }
};

var secondsPerCentury = 3155692597.474;
var minutesPerCentury = secondsPerCentury / 60;
var hoursPerCentury = minutesPerCentury / 60;
var daysPerCentury = hoursPerCentury / 24;

function auToMeters(aus) {
  return 149597870700 * aus;
}

var initialCameraParams = {
  aspectRatio: 2,
  fieldOfView: 60,
  nearPlane: /*#__PURE__*/auToMeters(0.00001),
  farPlane: /*#__PURE__*/auToMeters(3000)
};
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
  function AbstractSceneManager(_containerId, _isWorldFlippable) {
    var _this = this;

    if (_isWorldFlippable === void 0) {
      _isWorldFlippable = false;
    }

    this._containerId = _containerId;
    this._isWorldFlippable = _isWorldFlippable; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>

    this._scene = new Scene();
    this._canvas = document.createElement('canvas');
    this._clock = new Clock(false);
    this._initialViewingVector = new Vector3(10, 10, 10);
    this._isSceneReady = false;
    this._isRendering = false;
    this._isHelpersShown = false;
    this._isInit = false;
    this._container = null;
    this._fps = 60;
    this._camera = new PerspectiveCamera(initialCameraParams.fieldOfView, initialCameraParams.aspectRatio, initialCameraParams.nearPlane, initialCameraParams.farPlane);
    this._sceneEntities = [];

    this._preInitHook = function () {};

    this._postInitHook = function () {};

    this._destroyHook = function () {};

    this._updateCamera = function () {};

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

      var DPR, initiatedSceneEntityGroups;
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
              this._isInit = true; // Enable superclass constructor to adjust settings prior to initialization sequence

              this._preInitHook(); // Get container and add fitting canvas to it


              this._container = document.getElementById(this._containerId);

              if (this._container) {
                _context2.next = 7;
                break;
              }

              throw new Error('No container found with id: ' + this._containerId);

            case 7:
              this._canvas.style.width = '100%';
              this._canvas.style.height = '100%';

              this._container.append(this._canvas);

              this._container.style.setProperty('position', 'relative'); // React to resize events on window
              // this._updateCameraAspect = this.updateCameraAspect.bind(this);


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

              this._camera.lookAt(0, 0, 0); // Define and configure orbitControls
              // Do NOT attempt to create controls until
              // dependencies are set, or you'll get erratic behavior.
              // OrbitControls => Can't flip upside down
              // TrackballControls => Can flip upside down


              this._controls = !this._isWorldFlippable ? new OrbitControls(this._camera, this._renderer.domElement) : new TrackballControls(this._camera, this._renderer.domElement);

              if (!(this._controls instanceof OrbitControls)) {
                _context2.next = 28;
                break;
              }

              this._controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled

              this._controls.dampingFactor = 0.25;
              _context2.next = 36;
              break;

            case 28:
              if (!(this._controls instanceof TrackballControls)) {
                _context2.next = 35;
                break;
              }

              this._controls.rotateSpeed = 10.0;
              this._controls.zoomSpeed = 1.2;
              this._controls.panSpeed = 0.8;
              this._controls.keys = ['65', '83', '68']; // a s d

              _context2.next = 36;
              break;

            case 35:
              throw Error('Poor Logic');

            case 36:
              if (this._sceneEntities.length) {
                _context2.next = 38;
                break;
              }

              throw new Error(asciiError('You have no scene entities!'));

            case 38:
              _context2.next = 40;
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
              }()));

            case 40:
              initiatedSceneEntityGroups = _context2.sent;
              initiatedSceneEntityGroups.forEach(function (group) {
                return _this2._scene.add(group);
              }); // Run updater methods

              this.setHelpersVisibility(false);

              this._updateCameraAspect(); // Begin Animation


              this._startRendering(); // Enable superclass constructor to adjust settings after to initialization sequence


              this._postInitHook();

              console.log('FInished initing');

            case 47:
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
    var _this$_controls;

    // Get time
    var elapsedTime = this._clock.getElapsedTime(); // Loop through scene entities and trigger their update methods


    this._sceneEntities.forEach(function (el) {
      return el.update(elapsedTime);
    }); // Update camera


    this._updateCamera(elapsedTime); // Needed for TrackballControls


    (_this$_controls = this._controls) == null ? void 0 : _this$_controls.update(); // Finish loop

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
 *
 */
var addGlobalStyles = function addGlobalStyles() {

  var globalStyle = document.createElement('style');
  globalStyle.innerHTML = "\n    @keyframes global-fade-in {\n      from { opacity: 0; }\n      to   { opacity: 1; }\n    }\n  ";
  document.head.append(globalStyle); //
};

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

    button.style.setProperty('animation', "global-fade-in " + buttonFadeInSpecs); // Cursor behavior
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

var buttonToggleLights = function buttonToggleLights(container, onClickCB) {
  // --->>>
  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!'); // Set properties unique to this button

  var button = document.createElement('div');
  button.innerText = 'Toggle Lights';
  button.style.setProperty('top', '10px');
  button.style.setProperty('left', '10px'); // Set properties common to all buttons; append to container when ready

  injectCommonButtonProperties(button, container, onClickCB); // Finish him

  return button;
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

var getTexture = function getTexture(url, _name) {
  return new Promise(function (resolve) {
    new TextureLoader().load(url, function (texture) {
      if (_name != null && _name.includes('EARTH')) {
        console.log('>>> texture loaded', url, texture);
      }

      texture.encoding = GammaEncoding;
      resolve(texture);
    });
  });
};

/**
 * Base class that any entity must extend in order that its threeJs group
 * might get added to the threeJs scene owned by the manager
 */

var AbstractSceneEntity = function AbstractSceneEntity() {
  var _this = this;

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>
  this._sceneEntityGroup = new Group();

  this.getSceneEntityGroup = function () {
    return _this._sceneEntityGroup;
  };
};

/**
 * Base class for orbiting object (planet, asteroid, etc.)
 */

var AbstractToyMesh = /*#__PURE__*/function (_AbstractSceneEntity) {
  _inheritsLoose(AbstractToyMesh, _AbstractSceneEntity);

  function AbstractToyMesh(_name, _radius, options) {
    var _this;

    _this = _AbstractSceneEntity.call(this) || this;
    _this._name = _name;
    _this._radius = _radius;
    _this._isToyScale = false;

    var _sphereSegments$toySc = _extends({
      sphereSegments: 32,
      toyScale: 3000,
      realScale: 1
    }, options),
        sphereSegments = _sphereSegments$toySc.sphereSegments,
        toyScale = _sphereSegments$toySc.toyScale,
        realScale = _sphereSegments$toySc.realScale;

    _this._realScale = realScale;
    _this._toyScale = toyScale; // Default geometry and appearance

    _this._geometry = new SphereGeometry(_this._radius, sphereSegments, sphereSegments);
    _this._wireframe = new LineSegments(new EdgesGeometry(_this._geometry), new LineBasicMaterial());
    _this._wireframe.userData.isHelper = true;
    _this._material = new MeshPhongMaterial(); // this._material = new THREE.MeshStandardMaterial();

    _this._mesh = new Mesh(_this._geometry, _this._material);
    _this._mesh.receiveShadow = true;
    _this._mesh.castShadow = true;
    _this._mesh.name = _this._name; //

    _this._sceneEntityGroup.name = _this._name; // this._sceneEntityGroup.add(this._mesh);

    _this._sceneEntityGroup.add(_this._wireframe);

    return _this;
  }

  var _proto = AbstractToyMesh.prototype;

  _proto.setIsToyScale = function setIsToyScale(value) {
    // Note: once set, an animated transition to the new scale will take place within the update loop
    this._isToyScale = value;
  };

  _proto._setToToyScale = function _setToToyScale() {
    // Update scale instantly (rather than depending on animated transition)
    this._isToyScale = true;
    var t = this._toyScale; // 't' for 'target'

    if (this._mesh) this._mesh.scale.set(t, t, t);
    if (!!this._wireframe) this._wireframe.scale.set(t, t, t);
  };

  _proto._updateMeshScale = function _updateMeshScale() {
    // Test if planet is already at target scale
    var t = this._isToyScale ? this._toyScale : this._realScale; // 't' for 'target'

    var _this$_mesh$scale = this._mesh.scale,
        sx = _this$_mesh$scale.x,
        sy = _this$_mesh$scale.y,
        sz = _this$_mesh$scale.z;
    if (sx === t) return; // Update-mesh-scale logic

    var ds = this._toyScale / 50;

    if (sx < t) {
      // Increase deficient scale
      this._mesh.scale.set(sx + ds, sy + ds, sz + ds);

      if (!!this._wireframe) this._wireframe.scale.set(sx + ds, sy + ds, sz + ds);
    }

    if (sx > t) {
      // Decrease excessive scale
      this._mesh.scale.set(sx - ds, sy - ds, sz - ds);

      if (!!this._wireframe) this._wireframe.scale.set(sx - ds, sy - ds, sz - ds);
    }

    if (Math.abs(sx - t) < ds) {
      // Snap scale to target
      this._mesh.scale.set(t, t, t);

      if (!!this._wireframe) this._wireframe.scale.set(t, t, t);
    }
  };

  _proto._updateToyScale = function _updateToyScale(_time) {
    // Check if planet needs to be resized
    this._updateMeshScale();
  };

  return AbstractToyMesh;
}(AbstractSceneEntity);

/**
 * When a sprite is loaded it is given a size of '1'
 * So it needs to be scaled, in this case, to the size of the Sun
 * Further, the Sun only takes up a fraction of this image, so we need this factor
 * to scale the image further
 */

var imageToSunRatio = 10;
var sunRadiusMeters = orbitalParams.SUN.radiusMeters;
var sunToyScale = sunRadiusMeters * imageToSunRatio * 40;
var sunRealScale = sunRadiusMeters * imageToSunRatio;
var Sun = /*#__PURE__*/function (_AbstractToyMesh) {
  _inheritsLoose(Sun, _AbstractToyMesh);

  function Sun() {
    var _this;

    _this = _AbstractToyMesh.call(this, 'SUN', sunRadiusMeters, {
      toyScale: sunToyScale,
      realScale: sunRealScale
    }) || this; // ~~~>>>

    _this.name = 'SUN';
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
                  var texture, sprite;
                  return runtime_1.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return getTexture(imageBaseUrl + "sun.png");

                        case 2:
                          texture = _context.sent;
                          sprite = new Sprite(new SpriteMaterial({
                            blending: AdditiveBlending,
                            depthWrite: false,
                            map: texture
                          }));
                          sprite.updateMatrix();
                          sprite.matrixAutoUpdate = true; // Hide sun's spherical toy mesh

                          // Hide sun's spherical toy mesh
                          _this2._mesh.visible = false; // Overwrite representation of sun with sprite in place of sphere
                          // AbstractToyMesh will then handle scaling of sprite

                          // Overwrite representation of sun with sprite in place of sphere
                          // AbstractToyMesh will then handle scaling of sprite
                          _this2._mesh = sprite; // Reregister sun but as sprite

                          // Reregister sun but as sprite
                          _this2._sceneEntityGroup.name = _this2.name;

                          _this2._sceneEntityGroup.add(_this2._mesh);

                          resolve(_this2._sceneEntityGroup);

                        case 11:
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

  _proto.update = function update(_tCenturiesSinceJ200) {
    this._updateMeshScale();
  };

  return Sun;
}(AbstractToyMesh);

/**
 * This function is adapted from `https://github.com/jeromeetienne/threex.planets/blob/master/threex.planets.js`, based on instructions from `http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/`
 * Jpg doesnt have channel, so the idea is to load cloud image from jpg and remove pixels manually to create an alpha-channel effect; I havent worked through exactly how the details work, but it does
 */

function createEarthCloudMesh(cloudPlanetRadius) {
  // ---------------------------------------------------->>>
  return new Promise(function (resolve) {
    // ----------------------->>>
    // create destination canvas
    var canvasResult = document.createElement('canvas');
    canvasResult.width = 1024;
    canvasResult.height = 512;
    var contextResult = canvasResult.getContext('2d'); // load earthcloudmap

    var imageMap = new Image();
    imageMap.crossOrigin = 'Anonymous';
    var geometry = new SphereGeometry(cloudPlanetRadius, 32, 32);
    var material = new MeshPhongMaterial({
      map: new Texture(canvasResult),
      side: DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    var mesh = new Mesh(geometry, material);
    imageMap.addEventListener('load', function () {
      // ---->>>
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
        // ---------------------------------------->>>
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


          contextResult.putImageData(dataResult, 0, 0);
          if (!!material && !!material.map) material.map.needsUpdate = true;
        } catch (error) {
          console.log('Error: ', error);
          resolve(mesh);
        }

        resolve(mesh);
      });
      imageTrans.src = imageBaseUrl + "earthcloudmaptrans.jpg";
    }, false);
    imageMap.src = imageBaseUrl + "earthcloudcolor.jpg";
  });
}

function getPlanetRadiusMeters(name) {
  // --->>>
  return orbitalParams[name].radiusMeters;
}

var EOrbitalType;

(function (EOrbitalType) {
  EOrbitalType["PLANET"] = "PLANET";
  EOrbitalType["SUN"] = "SUN";
  EOrbitalType["ASTEROID"] = "ASTEROID";
})(EOrbitalType || (EOrbitalType = {}));

function getPlanetPosition(name, tCenturiesSinceJ200) {
  // --->>>
  {
    var planetPosition = OrbitalUtils.calcOrbitals(SolarSystem[name.toLowerCase()], tCenturiesSinceJ200).helioCentricCoords;
    planetPosition.x = auToMeters(planetPosition.x);
    planetPosition.y = auToMeters(planetPosition.y);
    planetPosition.z = auToMeters(planetPosition.z);
    return planetPosition;
  }
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

function kmToAu(km) {
  return km / 149597870.7;
}

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
  )
};

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
  function Orbit(name, orbitalType) {
    var _this = this;

    if (orbitalType === void 0) {
      orbitalType = EOrbitalType.PLANET;
    }

    // --->>>
    this.name = name;
    this.orbitalType = orbitalType; // ~~~>>>

    this.cachedPositions = [];
    this.projectedOrbitPoints = [];
    this.projectedOrbitMaterial = new LineBasicMaterial({
      linewidth: 2,
      color: 'white'
    });
    this.projectedOrbitLine = new Line(new BufferGeometry(), this.projectedOrbitMaterial);

    this.loadPlanet = function () {
      _this.projectedOrbitMaterial.color = new Color('white');
      _this.SKEph = EphemPresets[_this.name];
      _this.SKOrbit = new SKOrbit(_this.SKEph, {
        color: 'white',
        eclipticLineColor: undefined,
        orbitPathSettings: undefined
      });
      _this.SKprojectedOrbitLine = _this.SKOrbit.getOrbitShape();
    };

    this.loadAsteroid = function () {
      _this.projectedOrbitMaterial.color = new Color('cyan');
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
        color: undefined,
        eclipticLineColor: undefined,
        orbitPathSettings: undefined
      });
      _this.SKprojectedOrbitLine = _this.SKOrbit.getOrbitShape();
    };

    this.getProjectedOrbitLine = function () {
      return _this.SKprojectedOrbitLine;
    }; // this.calcRevolutionPath();


    console.log('>>>> 0', name, orbitalType);

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

      default:
        {
          this.loadPlanet();
          break;
        }
    } //
    // @ts-ignore
    // console.log('>>>>', this.projectedOrbitLine, this.SKprojectedOrbitLine);

  }

  var _proto = Orbit.prototype;

  _proto.calcRevolutionPath = function calcRevolutionPath(tCenturiesSinceJ200) {
    if (tCenturiesSinceJ200 === void 0) {
      tCenturiesSinceJ200 = 0;
    }

    // --->>>
    // Calc path increments in units of centuries
    var dayInCenturies = 1 / (100 * 365.25);
    var dt = dayInCenturies * 1;
    this.projectedOrbitPoints = [];
    var orbitalPeriod = orbitalParams[this.name].periodDays || 0;

    for (var i = 0; i < orbitalPeriod * 1.01; i++) {
      var _this$getXyzMeters = this.getXyzMeters(tCenturiesSinceJ200 + dt * i),
          x = _this$getXyzMeters.x,
          y = _this$getXyzMeters.y,
          z = _this$getXyzMeters.z;

      this.projectedOrbitPoints.push(new Vector3(x, y, z));
    } // Convert array of points to THREE.Line:


    this.projectedOrbitLine.geometry = new BufferGeometry().setFromPoints(this.projectedOrbitPoints);
  } // getProjectedOrbitLine = () => this.projectedOrbitLine;
  ;

  _proto.getPlanetXyzMeters = function getPlanetXyzMeters(tCenturiesSinceJ200) {
    if (tCenturiesSinceJ200 === void 0) {
      tCenturiesSinceJ200 = 0;
    }

    // --->>>
    if (!!this.cachedPositions[tCenturiesSinceJ200]) return this.cachedPositions[tCenturiesSinceJ200];
    var planetPosition = getPlanetPosition(this.name, tCenturiesSinceJ200);
    this.cachedPositions[tCenturiesSinceJ200] = planetPosition;
    return planetPosition;
  };

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

var getSphereSegments = function getSphereSegments(orbitalType) {
  if (orbitalType === EOrbitalType.ASTEROID) return 8;
  return 32;
};
/**
 * Base class for orbiting object (planet, asteroid, etc.) with toy-scale presentation
 */


var AbstractOrbital = /*#__PURE__*/function (_AbstractToyMesh) {
  _inheritsLoose(AbstractOrbital, _AbstractToyMesh);

  function AbstractOrbital(_name, _orbitalType, radius, toyScale) {
    var _this;

    _this = _AbstractToyMesh.call(this, _name, radius, {
      toyScale: toyScale,
      realScale: 1,
      sphereSegments: getSphereSegments(_orbitalType)
    }) || this;
    _this._name = _name;
    _this._orbitalType = _orbitalType;

    _this.getOrbit = function () {
      return _this._orbit;
    }; // Default geometry and appearance


    _this._orbit = new Orbit(_this._name, _orbitalType);
    _this._sceneEntityGroup.name = _this._name;

    _this._sceneEntityGroup.add(_this._orbit.getProjectedOrbitLine());

    return _this;
  }

  var _proto = AbstractOrbital.prototype;

  _proto._getOrbitXyz = function _getOrbitXyz() {
    return {
      x: this._mesh.position.x,
      y: this._mesh.position.y,
      z: this._mesh.position.z
    };
  };

  _proto._updateOrbitalPosition = function _updateOrbitalPosition(tCenturiesSinceJ2000) {
    var t = tCenturiesSinceJ2000;

    var _this$_orbit$getXyzMe = this._orbit.getXyzMeters(t),
        x = _this$_orbit$getXyzMe.x,
        y = _this$_orbit$getXyzMe.y,
        z = _this$_orbit$getXyzMe.z;

    this._mesh.position.set(x, y, z);

    this._wireframe.position.set(x, y, z);
  };

  return AbstractOrbital;
}(AbstractToyMesh);

var Planet = /*#__PURE__*/function (_AbstractOrbital) {
  _inheritsLoose(Planet, _AbstractOrbital);

  function Planet(name) {
    var _this;

    _this = _AbstractOrbital.call(this, name, EOrbitalType.PLANET, getPlanetRadiusMeters(name), name === 'PLUTO' ? 10000 : 3000) || this;
    _this.name = name;
    return _this;
  }

  var _proto = Planet.prototype;

  _proto.init = /*#__PURE__*/function () {
    var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var _this2 = this;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve) {
                  var texture, bumpTexture;
                  return runtime_1.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return getTexture("" + imageBaseUrl + _this2.name.toLowerCase() + (_this2.name === 'EARTH' ? '3' : '_small') + ".jpg", // `${imageBaseUrl}${this.name.toLowerCase()}.jpg`,
                          _this2._name + ' IMAGE');

                        case 2:
                          texture = _context.sent;
                          _this2._material.map = texture; //If Earth, then add fancy stuff; see: http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/

                          if (!(_this2._name === 'EARTH')) {
                            _context.next = 16;
                            break;
                          }

                          _context.next = 7;
                          return getTexture( // `${imageBaseUrl}earthBump_small.png`
                          imageBaseUrl + "earthbump2.jpg", _this2._name + ' BUMP IMAGE');

                        case 7:
                          bumpTexture = _context.sent;
                          _this2._material.bumpMap = bumpTexture;
                          _this2._material.bumpScale = 0.95;
                          _this2._material = new MeshStandardMaterial({
                            // ambient: 0x00aa00,
                            color: 0x00aa00,
                            bumpMap: bumpTexture,
                            bumpScale: 1
                          });
                          console.log('######## >>> ', _this2._material); // Use pixels in image to determine reflections on surface
                          // this._material.specularMap = await getTexture(
                          //   `${imageBaseUrl}earthspecular_small.jpg`,
                          //   'earth specular'
                          // );
                          // this._material.specular = new THREE.Color('grey');
                          // this._material.shininess = 5;
                          // Clouds

                          _context.next = 14;
                          return createEarthCloudMesh(1.035 * _this2._radius);

                        case 14:
                          _this2.earthCloudMesh = _context.sent;

                          if (!!_this2.earthCloudMesh) {
                            console.log('>>>>');

                            _this2._sceneEntityGroup.add(_this2.earthCloudMesh);
                          }

                        case 16:
                          //
                          _this2._sceneEntityGroup.add(_this2._mesh); // Rotate planet so images are right way up


                          // Rotate planet so images are right way up
                          _this2._mesh.rotation.x = Math.PI / 2;
                          if (!!_this2.earthCloudMesh) _this2.earthCloudMesh.rotation.x = Math.PI / 2;
                          if (!!_this2._wireframe) _this2._wireframe.rotation.x = Math.PI / 2; // Finish

                          // Finish
                          resolve(_this2._sceneEntityGroup);

                        case 21:
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

  _proto.update = function update(_tCenturiesSinceJ2000) {
    // ---
    this._updateOrbitalPosition(_tCenturiesSinceJ2000);

    this._updateMeshScale(); // ---


    var _this$_getOrbitXyz = this._getOrbitXyz(),
        x = _this$_getOrbitXyz.x,
        y = _this$_getOrbitXyz.y,
        z = _this$_getOrbitXyz.z;

    if (this.earthCloudMesh) this.earthCloudMesh.position.set(x, y, z); // Spin planet

    this._mesh.rotateY(0.001);

    if (!!this.earthCloudMesh) this.earthCloudMesh.rotateY(0.002);
  };

  return Planet;
}(AbstractOrbital);

var StarField = /*#__PURE__*/function (_AbstractSceneEntity) {
  _inheritsLoose(StarField, _AbstractSceneEntity);

  function StarField(radius) {
    var _this;

    _this = _AbstractSceneEntity.call(this) || this; // ~~~>>>

    _this.name = 'STARFIELD';
    _this.material = new MeshPhongMaterial({
      side: BackSide,
      transparent: true
    });
    _this.mesh = new Mesh(new SphereGeometry(radius, 32, 32), _this.material);
    _this.mesh.rotation.x = Math.PI / 2;

    _this._sceneEntityGroup.add(_this.mesh);

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
                  var texture;
                  return runtime_1.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return getTexture(imageBaseUrl + "galaxy_starfield.png", 'star field image');

                        case 2:
                          texture = _context.sent;
                          _this2.material.map = texture; // this.material.opacity = 0.3;

                          // this.material.opacity = 0.3;
                          resolve(_this2._sceneEntityGroup);

                        case 5:
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

  _proto.update = function update(_time) {};

  return StarField;
}(AbstractSceneEntity);

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

    _this = _AbstractSceneEntity.apply(this, arguments) || this;

    _this.update = function (time) {
      _this._sceneEntityGroup.position.x += time * 0;
    };

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
                var axesHelper = new AxesHelper(500); // Mark this as helper in order to be toggle-able

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

var DirectionalLight = /*#__PURE__*/function (_AbstractSceneEntity) {
  _inheritsLoose(DirectionalLight, _AbstractSceneEntity);

  function DirectionalLight() {
    var _this;

    // ~~~>>>
    _this = _AbstractSceneEntity.apply(this, arguments) || this;

    _this.update = function (_time) {// this._sceneEntityGroup.position.x += time * 0;
      // this._sceneEntityGroup.rotateZ(_time * 0 + 0.001);
    };

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
                _this2._light = new DirectionalLight$1(0xffffff, 10);
                var s = auToMeters(4); // this._light.position.set(10, 10, 10);

                // this._light.position.set(10, 10, 10);
                _this2._light.position.set(s, s, s);

                _this2._light.lookAt(0, 0, 0);

                _this2._light.castShadow = true;

                _this2._sceneEntityGroup.add(_this2._light); // Add light helper


                // Add light helper
                var helper = new DirectionalLightHelper(_this2._light.clone(), 5, 'cyan');
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

var defaultRadiusMeters = 10000;
var Asteroid = /*#__PURE__*/function (_AbstractOrbital) {
  _inheritsLoose(Asteroid, _AbstractOrbital);

  // ~~~>>>
  function Asteroid(name, radius) {
    if (radius === void 0) {
      radius = defaultRadiusMeters;
    }

    return _AbstractOrbital.call(this, name, EOrbitalType.ASTEROID, radius, 30000) || this;
  }

  var _proto = Asteroid.prototype;

  _proto.init = /*#__PURE__*/function () {
    var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var _this = this;

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
                          _this._sceneEntityGroup.add(_this._orbit.getProjectedOrbitLine());

                          resolve(_this._sceneEntityGroup);

                        case 2:
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

  _proto.update = function update(_tCenturiesSinceJ2000) {
    // ---
    this._updateOrbitalPosition(_tCenturiesSinceJ2000);

    this._updateMeshScale(); // Spin planet


    this._mesh.rotateY(0.01);
  };

  return Asteroid;
}(AbstractOrbital);

/**
 * Implement a scene for this app with 'real' scene entities
 */

var SceneManager = /*#__PURE__*/function (_AbstractSceneManager) {
  _inheritsLoose(SceneManager, _AbstractSceneManager);

  function SceneManager(containerId) {
    var _this;

    // --->>>
    _this = _AbstractSceneManager.call(this, containerId) || this;
    _this.isToyScale = true;
    _this.tCenturiesSinceJ2000 = jsDateToCenturiesSinceJ2000(new Date());

    _this.toggleIsToyScale = function () {
      _this.isToyScale = !_this.isToyScale;

      _this.setIsToyScale(_this.isToyScale);
    };

    _this.setIsToyScale = function (isToyScale) {
      _this.isToyScale = !!isToyScale;

      _this.sun.setIsToyScale(_this.isToyScale);

      _this.planets.forEach(function (_) {
        return _.setIsToyScale(_this.isToyScale);
      });

      _this.asteroids.forEach(function (_) {
        return _.setIsToyScale(_this.isToyScale);
      });
    };

    _this._updateCamera = function (_time) {
      var _this$_controls;

      var deltaDaysPerSec = 5000;

      var dt_real = _this._clock.getDelta();

      var dt = 1 / daysPerCentury * deltaDaysPerSec * dt_real;
      _this.tCenturiesSinceJ2000 += dt;

      _this._sceneEntities.forEach(function (el) {
        return el.update(_this.tCenturiesSinceJ2000);
      }); // Debug


      if (_this._controls instanceof TrackballControls) (_this$_controls = _this._controls) == null ? void 0 : _this$_controls.update();
    }; // Create scene entities with handles


    _this.sun = new Sun();
    _this.starField = new StarField(auToMeters(999));
    _this.planets = [new Planet('MERCURY'), new Planet('VENUS'), new Planet('EARTH'), new Planet('MARS'), new Planet('JUPITER'), new Planet('SATURN'), new Planet('URANUS'), new Planet('NEPTUNE'), new Planet('PLUTO')];
    _this.asteroids = [new Asteroid('65P')]; // Register scene entities

    _this.registerSceneEntities([new DirectionalLight(), new MiscHelpers()].concat(_this.planets, _this.asteroids, [_this.starField,
    /** Sun MUST come last due to its sprite-blending settings **/
    _this.sun])); // Logic to run before scene initialization


    _this._preInitHook = function () {
      var radius = auToMeters(4); // const radius = auToMeters(100); // See all planets

      _this._initialViewingVector = new Vector3(0, 0, radius);
    }; // Logic to run after scene initialization


    _this._postInitHook = function () {
      // Add buttons
      buttonToggleLights(_this._container, function () {});
      buttonToggleToyScale(_this._container, _this.toggleIsToyScale);
      buttonToggleHelpers(_this._container, _this.toggleHelpersVisibility); // Misc

      _this._controls.maxDistance = auToMeters(100);

      _this.setIsToyScale(true);

      _this.setHelpersVisibility(!true); //


      _this._camera.position.set(-180595912325.3482, 34587914945.44637, 3906449321.9052143);
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
/**
 * Create threeJs canvas and inject into container
 */

function init(containerId) {
  if (containerId === void 0) {
    containerId = 'threejs-canvas-container';
  }

  // --->>>
  // Get div to contain canvas
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
  ); //
  // const xxx = new SKOrbit(eph, {
  //   color: undefined,
  //   eclipticLineColor: undefined,
  //   orbitPathSettings: undefined,
  // });
  // // const xyz = xxx.getPositionAtTime(0);
  // const aaa = xxx.getOrbitShape();
  // console.log('>>>>> ', xyz, aaa);
}
/**
 * Destroy
 */

function destroy() {
  // --->>>
  threejsScene.destroy();
}

export { SbnSolarSystemViewer, destroy, init };
//# sourceMappingURL=sbnsolarsystemviewer.esm.js.map
