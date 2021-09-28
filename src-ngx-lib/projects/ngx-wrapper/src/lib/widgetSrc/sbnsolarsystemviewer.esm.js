import { Scene, Clock, Vector3, PerspectiveCamera, WebGLRenderer, PCFSoftShadowMap, GammaEncoding, TextureLoader, Group, Sprite, SpriteMaterial, AdditiveBlending, LineSegments, EdgesGeometry, SphereGeometry, LineBasicMaterial, Color, CanvasTexture, Box3, Mesh, BufferGeometry, Line, Float32BufferAttribute, CylinderGeometry, Matrix4, MeshPhongMaterial, DoubleSide, AxesHelper, AmbientLight, DodecahedronGeometry, PointLight as PointLight$1, PointLightHelper, Object3D, BufferGeometryLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import julian from 'julian';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * This module is the SSOT for global "initial" settings for the app
 * that get set before the threejs scene begins
 */
var options = {
  isAsyncLoad: !true
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
var isInit = false;
/**
 * Simple loader div; removed by `remove-loader-div`
 * It consists of two divs; the outer 'loaderDiv' that is just a shell
 * for centering the div with the actual animation, and the 'animDiv'
 * that does the spinning, etc.
 */

var addLoaderDiv = function addLoaderDiv(containerDiv) {
  // --->>>
  // Only add once
  if (isInit) return;
  isInit = true; // Injects key frames for spin animation

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
  loaderDiv.style.setProperty('justify-content', 'center');
  loaderDiv.style.setProperty('pointer-events', 'none'); // Calc size of radius based on size of container

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

/**
 * Wrapper to console with time taken
 */

var myprint = function myprint() {
  var _console;

  for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
    msg[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, [' >>> ', +new Date() - +getInitDate(), ' >>> '].concat(msg));
};

var setLoaderDivVisibility = function setLoaderDivVisibility(isVisible, fadeOutTimeMs) {
  if (fadeOutTimeMs === void 0) {
    fadeOutTimeMs = 3000;
  }

  // --->>>
  var loaderDiv = document.getElementById(loaderDivId);
  loaderDiv == null ? void 0 : loaderDiv.style.setProperty('transition', "opacity " + fadeOutTimeMs + "ms ease-in-out"); // pointer-events:none

  loaderDiv == null ? void 0 : loaderDiv.style.setProperty('opacity', "" + (isVisible ? 1 : 0));
  /*   setTimeout(() => {
    loaderDiv?.style.setProperty('display', isVisible ? 'block' : 'none');
  }, fadeOutTimeMs); */
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

    // --->>
    this._containerId = _containerId;
    this._scene = new Scene();
    this._canvas = document.createElement('canvas');
    this._clock = new Clock(false);
    this._initialViewingVector = new Vector3();
    this._isSceneReady = false;
    this._isRendering = false;
    this._isHelpersShown = false;
    this._isInit = false;
    this._isLoaderVisible = true;
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
      myprint('Starting animation...');
      _this._isRendering = true;

      _this._clock.start();

      _this._render();
    };

    this._stopRendering = function () {
      myprint('Stopping animation...');
      _this._isRendering = false;

      _this._clock.stop();
    }; // Get container and add fitting canvas to it


    this._container = document.getElementById(this._containerId);

    if (!this._container) {
      throw new Error('No container found with id: ' + this._containerId);
    }

    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';

    this._container.append(this._canvas);

    this._container.style.setProperty('position', 'relative');

    this._container.style.setProperty('background-color', 'black');

    addLoaderDiv(this._container);
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
              this._isInit = true; // Time initialization

              setInitDate(new Date()); // Enable superclass constructor to adjust settings prior to initialization sequence

              this._preInitHook(); // React to resize events on window


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
                _context2.next = 22;
                break;
              }

              throw new Error(asciiError('You have no scene entities!'));

            case 22:
              _context2.next = 24;
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

            case 24:
              initiatedSceneEntityGroups = _context2.sent;
              initiatedSceneEntityGroups.forEach(function (group) {
                return _this2._scene.add(group);
              }); // Run updater methods

              this.setHelpersVisibility(false);

              this._updateCameraAspect(); // Begin Animation


              this._startRendering(); // Enable superclass constructor to adjust settings after to initialization sequence


              this._postInitHook(); // Remove loader div


              this.setIsLoaderDivVisible(false); //
              // Finish

              myprint('Finished initiating scene.');

            case 32:
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

  _proto.setIsLoaderDivVisible = function setIsLoaderDivVisible(val, fadeInOutTimeMs) {
    if (fadeInOutTimeMs === void 0) {
      fadeInOutTimeMs = 3000;
    }

    this._isLoaderVisible = val;
    setLoaderDivVisibility(this._isLoaderVisible, fadeInOutTimeMs);
  };

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
 * Time to finish switch from log to normal scales
 */

var timeToCompleteTransition = 2;
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
    _this.isLogScale = false;
    _this.logTransitionClock = new Clock();
    return _this;
  }

  var _proto = AbstractToyModel.prototype;

  _proto.setIsZoomToToyScale = function setIsZoomToToyScale(value) {
    this._isZoomToToyScale = value;
  };

  _proto.setToyScale = function setToyScale(val) {
    this._toyScale = val;
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

  _proto.setIsLogScale = function setIsLogScale(val) {
    // Update flag
    this.isLogScale = val; // Restart clock

    this.logTransitionClock = new Clock(true);
    this.logTransitionClock.start(); // Update toyScale for log
    // const nonLogToyScale = getPlanetToyScale(this.NAME);

    var logToyScale = 1000;
    this.setToyScale(this.isLogScale ? logToyScale : 3000);
  };

  _proto.toggleIsLogScale = function toggleIsLogScale() {
    this.setIsLogScale(!this.isLogScale);
  };

  _proto.getLogInterpolationParam = function getLogInterpolationParam() {
    var t = this.logTransitionClock.getElapsedTime() / timeToCompleteTransition;
    var v = t < 1 ? t : 1;
    return this.isLogScale ? v : 1 - v;
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
 * Constants for widget
 */

var buttonFontFamily = "'Odibee Sans', cursive";
/**
 * Root url of file server with copy of /images
 */

var assetsBaseUrl = /*#__PURE__*/getAssetsBaseUrl();

function getAssetsBaseUrl() {
  return "https://sbn-solar-system-viewer.s3.amazonaws.com";
}
/**
 * Often handy to use this as a scale
 */


var au = /*#__PURE__*/auToMeters(1);

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
                          spriteUrl = assetsBaseUrl + "/stars/sun3-sprite-512.png";

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

                          myprint('RESOLVED SUN');
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
      imageTrans.src = assetsBaseUrl + "/planets/earth/earth-clouds-trans-1024.png";
    };

    imageMap.src = assetsBaseUrl + "/planets/earth/earth-clouds-color-1024.png";
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
    // epoch: 2458600.5,
    // a: 2.7658,
    // e: 0.078,
    // i: 10.607,
    // om: 80.7,
    // w: 73.1,
    // ma: 77.37209589,
    //
    //
    // From MPC data
    epoch: 2459200.5,
    a: 2.7660891,
    e: 0.0781685,
    i: 10.5879,
    om: 80.27236,
    w: 73.72487,
    ma: 205.54542
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

/**
 * Scale a given position to be a distance logged from the center
 * adjusted to leave the position of earth unaffected
 */

function getLoggedPosition(position) {
  // --->>
  // Get old length in aus
  var oldLengthAus = position.length() / au; // Take log and add 1 to keep earth untransformed and venus/mercury to not have negative length

  var newLengthAus = Math.log10(oldLengthAus) + 1; // Compute scale factor with which to multiply position
  // to leave Earth unchanged, etc.; au's will cancel.

  var f = newLengthAus / oldLengthAus; // Clone, transform and return

  var newPosition = position.clone();
  newPosition.multiplyScalar(f);
  return newPosition;
}

var au$1 = /*#__PURE__*/auToMeters(1);
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
      }); // this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();

      _this.SKprojectedOrbitLine = _this.getMorphedOrbitLine();
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
      }); // this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();

      _this.SKprojectedOrbitLine = _this.getMorphedOrbitLine();
      _this.SKprojectedOrbitLine.material.color = new Color('cyan');
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

  _proto.getMorphedOrbitLine = function getMorphedOrbitLine() {
    if (!!this.orbitLine) return this.orbitLine;
    if (!this.SKOrbit) throw new Error('Poor logic mi amigo');
    var geometry = this.SKOrbit.getEllipseGeometry();
    geometry.morphAttributes.position = [];
    var positionAttribute = geometry.attributes.position;
    var loggedPositions = [];

    for (var i = 0; i < positionAttribute.count; i++) {
      var x0 = positionAttribute.getX(i);
      var y0 = positionAttribute.getY(i);
      var z0 = positionAttribute.getZ(i);
      var position = new Vector3(x0, y0, z0);
      var logpos = getLoggedPosition(position);
      var x = logpos.x,
          y = logpos.y,
          z = logpos.z;
      loggedPositions.push(x, y, z);
    }

    geometry.morphAttributes.position[0] = new Float32BufferAttribute(loggedPositions, 3); // this.orbitLine = new THREE.Line(

    this.orbitLine = new Line(geometry, new LineBasicMaterial({
      color: new Color(this.color || 0x444444),
      morphTargets: true
    }));
    return this.orbitLine;
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

  _proto.getPosition = function getPosition(tCenturiesSinceJ200) {
    if (tCenturiesSinceJ200 === void 0) {
      tCenturiesSinceJ200 = 0;
    }

    var _this$getXyzMeters = this.getXyzMeters(tCenturiesSinceJ200),
        x = _this$getXyzMeters.x,
        y = _this$getXyzMeters.y,
        z = _this$getXyzMeters.z;

    return new Vector3(x, y, z);
  };

  _proto.getTail = function getTail(radius, tailLength, tCenturiesSinceJ200) {
    if (tailLength === void 0) {
      tailLength = au$1 * 0.3;
    }

    if (tCenturiesSinceJ200 === void 0) {
      tCenturiesSinceJ200 = 0;
    }

    // --->>
    // Calc positions
    var realBodyPosition = this.getPosition(tCenturiesSinceJ200);
    var loggedBodyPosition = getLoggedPosition(realBodyPosition); // Compute times for real and logged positions to stretch out to tailLength

    var realTargetTime = tCenturiesSinceJ200;
    var loggedTargetTime = tCenturiesSinceJ200;
    var realDiffLength = 0;
    var loggedDiffLength = 0;
    var isRealSearch = true;
    var isLoggedSearch = true;

    while (isRealSearch || isLoggedSearch) {
      // --->
      isRealSearch = realDiffLength < tailLength;
      isLoggedSearch = loggedDiffLength < tailLength;

      if (isRealSearch) {
        realTargetTime += 0.5;
        realDiffLength = realBodyPosition.distanceTo(this.getPosition(realTargetTime));
      }

      if (isLoggedSearch) {
        loggedTargetTime += 0.5;
        loggedDiffLength = loggedBodyPosition.distanceTo(getLoggedPosition(this.getPosition(loggedTargetTime)));
      }
    } // Set up loop to generate segments


    var radialSegments = 3;
    var heightSegments = 1;
    var numberOfSegments = 5;
    var realDt = (realTargetTime - tCenturiesSinceJ200) / numberOfSegments;
    var loggedDt = (loggedTargetTime - tCenturiesSinceJ200) / numberOfSegments;
    var dSegmentRadius = radius / numberOfSegments;
    var geometries = [];
    var lastRealPosition = realBodyPosition.clone();
    var lastLoggedPosition = loggedBodyPosition.clone();
    var nextRealPosition = realBodyPosition.clone();
    var nextLoggedPosition = loggedBodyPosition.clone();
    var lastSegmentRadius = radius;

    for (var segment = 1; segment <= numberOfSegments; segment++) {
      // Extrapolate back in time to compute positions of tail
      var tReal = tCenturiesSinceJ200 + segment * realDt;
      var tLogged = tCenturiesSinceJ200 + segment * loggedDt;
      nextRealPosition = this.getPosition(tReal);
      nextLoggedPosition = getLoggedPosition(this.getPosition(tLogged)); // Compute radius of the end of this segment

      var nextSegmentRadius = lastSegmentRadius - dSegmentRadius; // Compute height of segment

      var realSegmentHeight = lastRealPosition.distanceTo(nextRealPosition);
      var loggedSegmentHeight = lastLoggedPosition.distanceTo(nextLoggedPosition); // Create tail segments at coord origin

      var realSegmentGeometry = new CylinderGeometry(lastSegmentRadius, nextSegmentRadius, realSegmentHeight, radialSegments, heightSegments, !true);
      var loggedSegmentGeometry = new CylinderGeometry(lastSegmentRadius, nextSegmentRadius, loggedSegmentHeight, radialSegments, heightSegments, !true); // Position and rotate geometry

      {
        var _lastRealPosition = lastRealPosition,
            x = _lastRealPosition.x,
            y = _lastRealPosition.y,
            z = _lastRealPosition.z;
        var orientation = new Matrix4();
        orientation.makeTranslation(x, y, z);
        orientation.lookAt(lastRealPosition, nextRealPosition, new Vector3(0, 0, 1));
        realSegmentGeometry.translate(0, -realSegmentHeight / 2, 0); // Rotate around end

        realSegmentGeometry.rotateX(Math.PI / 2);
        realSegmentGeometry.applyMatrix4(orientation);
      }
      {
        var _lastLoggedPosition = lastLoggedPosition,
            _x = _lastLoggedPosition.x,
            _y = _lastLoggedPosition.y,
            _z = _lastLoggedPosition.z;

        var _orientation = new Matrix4();

        _orientation.makeTranslation(_x, _y, _z);

        _orientation.lookAt(lastLoggedPosition, nextLoggedPosition, new Vector3(0, 0, 1));

        loggedSegmentGeometry.translate(0, -loggedSegmentHeight / 2, 0); // Rotate around end

        loggedSegmentGeometry.rotateX(Math.PI / 2);
        loggedSegmentGeometry.applyMatrix4(_orientation);
      } // Store segments

      geometries.push({
        realSegmentGeometry: realSegmentGeometry,
        loggedSegmentGeometry: loggedSegmentGeometry
      }); // End loop

      lastRealPosition = nextRealPosition;
      lastLoggedPosition = nextLoggedPosition;
      lastSegmentRadius = nextSegmentRadius;
    } // Merge segments into single geometry


    var realGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries.map(function (el) {
      return el.realSegmentGeometry;
    }), true);
    var loggedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries.map(function (el) {
      return el.loggedSegmentGeometry;
    }), true);
    return {
      realGeometry: realGeometry,
      loggedGeometry: loggedGeometry
    };
  };

  return Orbit;
}();

var planetsWithBumpMaps = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'CERES', 'PLUTO'];
var planetsAsLoadableObjects = ['HAUMEA', 'MAKEMAKE', 'ERIS'];
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

    // --->>
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
              objUrl = assetsBaseUrl + "/planets/" + name + "/" + name + ".glb"; // Add temporary sphere till object is loaded

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
              imageUrl = assetsBaseUrl + "/planets/" + name + "/" + name + "-map-1024.jpg";
              bumpUrl = assetsBaseUrl + "/planets/" + name + "/" + name + "-bump-1024.png";
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
                    opacity: 0.6,
                    depthWrite: false
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
    }; // super(getPlanetToyScale('MERCURY'));


    _this.radius = getPlanetRadiusMeters(NAME); // this.radius = getPlanetRadiusMeters('MERCURY');

    _this.orbit = new Orbit(_this.NAME, getPlanetType(NAME));
    _this.SKprojectedOrbitLine = _this.orbit.getProjectedOrbitLine();

    _this._sceneEntityGroup.add(_this.SKprojectedOrbitLine); // Make the model toy-scalable


    _this._toyGroup.push(_this.model); // Set up helper


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
                          myprint('RESOLVED ' + _this2.NAME);

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
  }() // Gets position of planet in either normal or logged coords
  ;

  _proto.getDestinationPosition = function getDestinationPosition(_tCenturiesSinceJ200) {
    if (_tCenturiesSinceJ200 === void 0) {
      _tCenturiesSinceJ200 = 0;
    }

    var u = this.getLogInterpolationParam();
    var position = this.orbit.getPosition(_tCenturiesSinceJ200);
    var logpos = getLoggedPosition(position);
    return position.lerp(logpos, u);
  };

  _proto.updateOrbitLine = function updateOrbitLine() {
    var u = this.getLogInterpolationParam();
    this.SKprojectedOrbitLine.morphTargetInfluences[0] = u;
  };

  _proto.update = function update() {
    var _this$getDestinationP = this.getDestinationPosition(),
        x = _this$getDestinationP.x,
        y = _this$getDestinationP.y,
        z = _this$getDestinationP.z;

    this.model.position.set(x, y, z);
    this.updateOrbitLine(); // Toy Model Scale

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

    _this = _AbstractSceneEntity.call(this) || this; // --->>>

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
      // opacity: 0,
      opacity: 1,
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
                  var url;
                  return runtime_1.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // --->>>
                          // const url = `${assetsBaseUrl}/stars/galaxy_starfield6.png`;
                          url = assetsBaseUrl + "/stars/galaxy-starfield-4096.jpg";

                          if (!_this2._isAsyncLoad()) {
                            _context.next = 5;
                            break;
                          }

                          getTextureFromImageUrl(url, 'star-field').then(function (texture) {
                            _this2.texture = texture;
                            texture.encoding = GammaEncoding;
                            _this2.material.map = texture; // this.material.color = new THREE.Color();

                            // this.material.color = new THREE.Color();
                            _this2.material.needsUpdate = true;
                          });
                          _context.next = 11;
                          break;

                        case 5:
                          _context.next = 7;
                          return getTextureFromImageUrl(url, 'star-field');

                        case 7:
                          _this2.texture = _context.sent;
                          _this2.material.map = _this2.texture;
                          _this2.material.color = new Color();
                          _this2.material.needsUpdate = true;

                        case 11:
                          _this2._sceneEntityGroup.add(_this2.mesh);

                          console.log('Starfield resolved', +new Date() - +getInitDate());
                          resolve(_this2._sceneEntityGroup);

                        case 14:
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

var createAsteroidGeometry = function createAsteroidGeometry(size, warpFactor, position) {
  if (warpFactor === void 0) {
    warpFactor = 0.25;
  }

  if (position === void 0) {
    position = new Vector3();
  }

  // --->>>
  var realGeometry = new DodecahedronGeometry(size, 1);
  var positionAttribute = realGeometry.getAttribute('position');
  var point = new Vector3();
  var vertices = {}; // Collect all repeated points into a hashmap of unique vertices

  for (var i = 0; i < positionAttribute.count; i++) {
    point.fromBufferAttribute(positionAttribute, i); // read vertex

    var key = [point.x, point.y, point.z].join(',');

    if (!vertices[key]) {
      vertices[key] = {
        x: point.x += Math.random() * size * warpFactor,
        y: point.y += Math.random() * size * warpFactor,
        z: point.z += Math.random() * size * warpFactor
      };
    }

    var _vertices$key = vertices[key],
        x = _vertices$key.x,
        y = _vertices$key.y,
        z = _vertices$key.z;
    positionAttribute.setXYZ(i, x, y, z);
  } // Stretch/flatten asteroid randomly


  var sx = 0.5 + Math.random();
  var sy = 0.5 + Math.random();
  var sz = 0.5 + Math.random();
  realGeometry.scale(sx, sy, sz); // Get create logged stuff

  var loggedGeometry = realGeometry.clone();
  var loggedPosition = getLoggedPosition(position); // Translate geometries

  {
    var _position = position,
        _x = _position.x,
        _y = _position.y,
        _z = _position.z;
    realGeometry.translate(_x, _y, _z);
  }
  {
    var _x2 = loggedPosition.x,
        _y2 = loggedPosition.y,
        _z2 = loggedPosition.z;
    loggedGeometry.translate(_x2, _y2, _z2);
  }
  return {
    realGeometry: realGeometry,
    loggedGeometry: loggedGeometry
  };
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

    _this.orbit = new Orbit(NAME, EOrbitalType.ASTEROID); // this.SKprojectedOrbitLine = this.orbit.getProjectedOrbitLine();

    _this.SKprojectedOrbitLine = _this.orbit.getMorphedOrbitLine();

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
                          url = assetsBaseUrl + "/misc/asteroid-texture-1024.jpg"; // const url = `${imageBaseUrl}/misc/rock-texture-512.png`;

                          // const url = `${imageBaseUrl}/misc/rock-texture-512.png`;
                          geometry = createAsteroidGeometry(_this2.radius);
                          _context.t0 = Mesh;
                          _context.t1 = geometry.realGeometry;
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

  _proto.updateOrbitLine = function updateOrbitLine() {
    //
    var u = this.getLogInterpolationParam();
    this.SKprojectedOrbitLine.morphTargetInfluences[0] = u;
  } // Gets position of planet in either normal or logged coords
  ;

  _proto.getDestinationPosition = function getDestinationPosition(_tCenturiesSinceJ200) {
    if (_tCenturiesSinceJ200 === void 0) {
      _tCenturiesSinceJ200 = 0;
    }

    var u = this.getLogInterpolationParam();
    var position = this.orbit.getPosition(_tCenturiesSinceJ200);
    var logpos = getLoggedPosition(position);
    return position.lerp(logpos, u);
  };

  _proto.update = function update() {
    var _this$getDestinationP = this.getDestinationPosition(),
        x = _this$getDestinationP.x,
        y = _this$getDestinationP.y,
        z = _this$getDestinationP.z;

    this.model.position.set(x, y, z);
    this.updateOrbitLine(); // Toy Model Scale

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

var addSearchField = function addSearchField(container, onEnter) {
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
  return new Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
}

function distanceBetweenTwoVector3s(v1, v2) {
  return vectorBetweenTwoVector3s(v1, v2).length();
}

var dxy = au * 0.1;
/**
 * This entity doesn't draw anything, it's just an empty object
 * positioned so as to be zoomable from above the sun
 */

var BirdsEye = /*#__PURE__*/function (_AbstractToyModel) {
  _inheritsLoose(BirdsEye, _AbstractToyModel);

  function BirdsEye(NAME, zInAus) {
    var _this;

    if (NAME === void 0) {
      NAME = 'BIRDSEYE';
    }

    if (zInAus === void 0) {
      zInAus = 30;
    }

    _this = _AbstractToyModel.call(this, 1) || this;
    _this.NAME = NAME; // --->>>

    _this.token = new Object3D();
    _this.position = new Vector3(dxy, dxy, au * 30);

    _this.getPosition = function () {
      return _this.token.position;
    };

    _this.getRadius = function () {
      return 1;
    };

    _this.position.setZ(zInAus * au);

    var _this$position = _this.position,
        x = _this$position.x,
        y = _this$position.y,
        z = _this$position.z;

    _this.token.position.set(x, y, z);

    _this._sceneEntityGroup.add(_this.token);

    return _this;
  }

  var _proto = BirdsEye.prototype;

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
                          resolve(_this2._sceneEntityGroup);

                        case 1:
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

  return BirdsEye;
}(AbstractToyModel);

/**
 * By providing a zoomable target, this function will compute a 'scenic'
 * position that will be used by other functions to move the camera.
 */

var getDestinationCameraPosition = function getDestinationCameraPosition(zoomTarget) {
  var scale = zoomTarget.getScale();
  var radius = zoomTarget.getRadius();

  if (zoomTarget.NAME === 'SUN') {
    // Position around sun is arbitrary
    var _zoomTarget$getPositi = zoomTarget.getPosition(),
        x = _zoomTarget$getPositi.x,
        y = _zoomTarget$getPositi.y,
        z = _zoomTarget$getPositi.z;

    return new Vector3(x + 3 * radius * scale, y + 3 * radius * scale, z);
  }

  if (zoomTarget instanceof BirdsEye) {
    return zoomTarget.getPosition();
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
  var _getDestinationCamera = getDestinationCameraPosition(zoomTarget),
      x = _getDestinationCamera.x,
      y = _getDestinationCamera.y,
      z = _getDestinationCamera.z; // Get vector between present and destination positions
  // This is the vector "to-be-fractionally-traversed"


  var cp = camera.position;
  var relativeDestinationCameraVector = new Vector3(x - cp.x, y - cp.y, z - cp.z); // Traverse the camera some fraction along said vector

  var newCameraPosition = new Vector3(cp.x + relativeDestinationCameraVector.x * zoomTraversalFraction, cp.y + relativeDestinationCameraVector.y * zoomTraversalFraction, cp.z + relativeDestinationCameraVector.z * zoomTraversalFraction); // Return signal to stop/continue

  var isZoomingPosition = true; // Decide whether to stop searching and instead lock onto destinationCameraPosition

  var separation = distanceBetweenTwoVector3s(newCameraPosition, new Vector3(x, y, z));
  var smallThresholdSeparation = 0.0001 * au;

  if (separation < smallThresholdSeparation) {
    isZoomingPosition = false;
    newCameraPosition = new Vector3(x, y, z);
  } //Finally, update computed new camera position


  camera.position.set(newCameraPosition.x, newCameraPosition.y, newCameraPosition.z);
  return isZoomingPosition;
};

/**
 *
 *
 */

var getDestinationLookPosition = function getDestinationLookPosition(zoomTarget) {
  return zoomTarget instanceof BirdsEye ? new Vector3(0, 0, 0) : zoomTarget.getPosition();
};

/**
 * By providing a zoomable target, your camera, and a 'traversal fraction',
 * this function will compute the next modification in viewing direction for
 * the camera in order to pan towards the target
 */

var updateCameraViewingAngle = function updateCameraViewingAngle(camera, zoomTarget, zoomTraversalFraction) {
  // Get vector from where you are to where you want to look
  var camPos = camera.position;
  var destinationLookPosition = getDestinationLookPosition(zoomTarget);
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

/**
 * Permissible types of asteroid belt
 */
var asteroidBeltTypes = ['MBA', 'NEO1KM', 'NOT_NEO1KM', 'PHA', 'DISTANTOBJECT'];

/**
 * Maps asteroid belt to a color
 */
function getAsteroidBeltColor(belt) {
  switch (belt) {
    case 'MBA':
      {
        return 'grey';
      }

    case 'NEO1KM':
      {
        return 'orange';
      }

    case 'NOT_NEO1KM':
      {
        return 'pink';
      }

    case 'PHA':
      {
        return 'red';
      }

    case 'DISTANTOBJECT':
      {
        return 'cyan';
      }
  }
}

/**
 *
 */
function getVersionString() {
  //
  return '0.1.0';
}

/**
 * Wrapper around technique to fetch a worker script in a way
 * that does not require CORS config
 */
function getWorkerURL(url) {
  var content = "importScripts( \"" + url + "\" );";
  return URL.createObjectURL(new Blob([content], {
    type: 'text/javascript'
  }));
}

/**
 * Wraps around web worker to kick off thread to create merged geometries
 * then parse the returned data and return THREE.BufferGeometries
 */

function getAsteroidBeltMergedGeometries(_x, _x2) {
  return _getAsteroidBeltMergedGeometries.apply(this, arguments);
}

function _getAsteroidBeltMergedGeometries() {
  _getAsteroidBeltMergedGeometries = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(belts, parentSceneManager) {
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve0) {
                var baseUrl, url, worker_url, results;
                return runtime_1.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // --->>
                        // Build URL to worker script
                        baseUrl = "http://localhost:3001";

                        try {
                          // @ts-ignore: will be truthy if built by rollup
                          if (true) {
                            baseUrl = "https://sbn-solar-system-viewer.s3.amazonaws.com/scripts";
                          }
                        } catch (err) {}

                        url = baseUrl + "/asteroid-belt-worker-" + getVersionString() + ".js";
                        worker_url = getWorkerURL(url); // Define and kick off asteroid-belt worker

                        // Define and kick off asteroid-belt worker
                        myprint('Start getting worker');
                        _context.next = 7;
                        return Promise.all(belts.map(function (belt) {
                          return new Promise(function (resolve) {
                            var worker = new Worker(worker_url);

                            worker.onmessage = function (e) {
                              setTimeout(function () {
                                resolve({
                                  belt: belt,
                                  data: e.data
                                });
                              }, 100);
                            };

                            worker.postMessage(belt);
                          });
                        }));

                      case 7:
                        results = _context.sent;
                        parentSceneManager.updateMessageField('Loading asteroids belts');
                        parentSceneManager.setIsScenePaused(true);
                        setTimeout(function () {
                          //
                          var xxx = results.map(function (_ref2) {
                            var belt = _ref2.belt,
                                data = _ref2.data;
                            var asteroidBeltGeometriesStringified = JSON.parse(data);
                            var loader = new BufferGeometryLoader();
                            var asteroidBeltGeometries = {
                              mergedAsteroidGeometry: loader.parse(asteroidBeltGeometriesStringified.mergedAsteroidGeometry),
                              mergedTailsGeometry: loader.parse(asteroidBeltGeometriesStringified.mergedTailsGeometry),
                              belt: belt
                            };
                            return asteroidBeltGeometries;
                          });
                          parentSceneManager.updateMessageField('Asteroids Loaded');
                          parentSceneManager.setIsScenePaused(false);
                          resolve0(xxx);
                        }, 100);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
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
  return _getAsteroidBeltMergedGeometries.apply(this, arguments);
}

var getInitMeshes = function getInitMeshes() {
  return asteroidBeltTypes.reduce(function (acc, belt, ind) {
    acc[belt] = new Mesh(new BufferGeometry(), new MeshPhongMaterial({
      morphTargets: true
    }));
    return acc;
  }, {});
};

var AsteroidBelt = /*#__PURE__*/function (_AbstractToyModel) {
  _inheritsLoose(AsteroidBelt, _AbstractToyModel);

  function AsteroidBelt(belts, parentSceneManager) {
    var _this;

    _this = _AbstractToyModel.call(this, 3000) || this;
    _this.belts = belts;
    _this.parentSceneManager = parentSceneManager;
    _this.isMeshesLoaded = false;
    _this.isBeltVisible = true;
    _this.mergedAsteroidsMeshes = getInitMeshes();
    _this.mergedTailsMeshes = getInitMeshes();

    _this.getPosition = function () {
      return new Vector3();
    };

    _this.getRadius = function () {
      return 1;
    };

    _this.NAME = 'BELTS';

    _this.belts.forEach(function (belt) {
      _this._sceneEntityGroup.add(_this.mergedAsteroidsMeshes[belt]);

      _this._sceneEntityGroup.add(_this.mergedTailsMeshes[belt]);
    });

    _this.parentSceneManager.updateMessageField('Building asteroid belt');

    return _this;
  }

  var _proto = AsteroidBelt.prototype;

  _proto.init = /*#__PURE__*/function () {
    var _init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var _this2 = this;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(resolve) {
                  var textureUrl, texture;
                  return runtime_1.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // --->>
                          textureUrl = assetsBaseUrl + "/misc/rock-texture-512.png";
                          _context.next = 3;
                          return getTextureFromImageUrl(textureUrl)["catch"](function (_) {
                            return null;
                          });

                        case 3:
                          texture = _context.sent;
                          getAsteroidBeltMergedGeometries(_this2.belts, _this2.parentSceneManager)
                          /*         .then(asteroidBeltMergedGeometries => ({
                            asteroidBeltMergedGeometries,
                                   })) */
                          .
                          /*         .then(asteroidBeltMergedGeometries => ({
                            asteroidBeltMergedGeometries,
                                   })) */
                          then(function (xxx) {
                            // ]).then(([texture, { mergedAsteroidGeometry, mergedTailsGeometry }[]]) => {
                            // --->>
                            // const { belt, asteroidBeltMergedGeometries } = xxx;
                            xxx.forEach(function (_ref2) {
                              var belt = _ref2.belt,
                                  mergedAsteroidGeometry = _ref2.mergedAsteroidGeometry,
                                  mergedTailsGeometry = _ref2.mergedTailsGeometry;
                              //
                              var color = getAsteroidBeltColor(belt); // Update asteroids mesh with computed geometry, etc.

                              // Update asteroids mesh with computed geometry, etc.
                              _this2.mergedAsteroidsMeshes[belt].geometry = mergedAsteroidGeometry;
                              _this2.mergedAsteroidsMeshes[belt].material = new MeshPhongMaterial({
                                color: new Color(color),
                                map: texture,
                                shininess: 0,
                                transparent: true,
                                morphTargets: true
                              });
                              _this2.mergedAsteroidsMeshes[belt].material.needsUpdate = true;
                              _this2.mergedAsteroidsMeshes[belt].morphTargetInfluences = [0]; // Update tails mesh with computed geometry, etc.

                              // Update tails mesh with computed geometry, etc.
                              _this2.mergedTailsMeshes[belt].geometry = mergedTailsGeometry;
                              _this2.mergedTailsMeshes[belt].material = new MeshPhongMaterial({
                                color: new Color(color),
                                transparent: true,
                                morphTargets: true
                              });
                              _this2.mergedTailsMeshes[belt].material.needsUpdate = true;
                              _this2.mergedTailsMeshes[belt].morphTargetInfluences = [0];
                              myprint(_this2.NAME + ' LOADED');
                              _this2.isMeshesLoaded = true;
                            });
                          });
                          myprint('RESOLVED ' + _this2.NAME);
                          resolve(_this2._sceneEntityGroup);

                        case 7:
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

  _proto.updateMeshes = function updateMeshes() {
    var _this3 = this;

    // Interpolate between log and real scale
    var u = this.getLogInterpolationParam();
    this.belts.forEach(function (belt) {
      _this3.mergedAsteroidsMeshes[belt].morphTargetInfluences[0] = u;
      _this3.mergedTailsMeshes[belt].morphTargetInfluences[0] = u;
    });
  };

  _proto.setIsBeltVisible = function setIsBeltVisible(val) {
    var _this4 = this;

    this.isBeltVisible = val;
    this.belts.forEach(function (belt) {
      _this4.mergedAsteroidsMeshes[belt].visible = _this4.isBeltVisible;
      _this4.mergedTailsMeshes[belt].visible = _this4.isBeltVisible;
    });
  };

  _proto.toggleIsBeltVisible = function toggleIsBeltVisible() {
    this.setIsBeltVisible(!this.isBeltVisible);
  };

  _proto.update = function update(_camera) {
    var _this5 = this;

    // --->>
    this._updateModelScale();

    if (this.isMeshesLoaded) this.updateMeshes();
    if (!_camera) return; // Update mesh opacity based on distance from camera

    var dist = _camera.position.distanceTo(new Vector3());

    var cutoff = 4 * au;
    var opacity = 0;
    opacity = (dist - cutoff) / (0.5 * au);
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;
    this.belts.forEach(function (belt) {
      if (!_this5.isBeltVisible) return;
      _this5.mergedTailsMeshes[belt].material.opacity = opacity;
      _this5.mergedTailsMeshes[belt].visible = opacity !== 0;

      _this5.mergedTailsMeshes[belt].material.needsUpdate = true;
    });
  };

  return AsteroidBelt;
}(AbstractToyModel);

/**
 *
 */

function addMessageField(container) {
  // --->>
  addGlobalStyles();
  var div = document.createElement('div');
  div.id = 'message-field';
  div.style.setProperty('position', 'absolute'); // div.style.setProperty('top', '0px');
  // div.style.setProperty('top', '0px');

  div.style.setProperty('left', '50%');
  div.style.setProperty('right', '0px');
  div.style.setProperty('bottom', '0px');
  div.style.setProperty('height', '40px');
  div.style.setProperty('display', 'flex');
  div.style.setProperty('justify-content', 'flex-end');
  div.style.setProperty('align-items', 'center');
  div.style.setProperty('background-color', 'green');
  container.append(div);

  var cb = function cb(msg) {
    div.innerHTML = msg;
  };

  return cb;
}

/**
 * Implement a scene for this app with 'real' scene entities
 */

var SceneManager = /*#__PURE__*/function (_AbstractSceneManager) {
  _inheritsLoose(SceneManager, _AbstractSceneManager);

  function SceneManager(containerId) {
    var _this;

    // --->>>
    _this = _AbstractSceneManager.call(this, containerId) || this; // --->>>
    // Toy-scalable bodies

    _this.sun = new Sun();
    _this.isToyScale = true;
    _this.isOrbitsVisible = true;
    _this.isLogScale = false;
    _this.logScalables = []; // Zooming logic

    _this.zoomables = [];
    _this.zoomableOrbitals = [];
    _this.zoomTarget = _this.sun;
    _this.isZoomingPosition = false;
    _this.isZoomingAngle = false;
    _this.zoomTraversalFraction = 0;
    _this.zoomClock = new Clock(); //Controls movement of camera when touring planets

    _this.isScenePaused = false; //

    _this.updateMessageField = function () {
      console.log('denied!');
    };

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
        return _ instanceof Asteroid || _.setIsOrbitVisible(_this.isOrbitsVisible);
      });
    };

    _this.toggleIsOrbitsVisible = function () {
      _this.isOrbitsVisible = !_this.isOrbitsVisible;

      _this.setIsOrbitsVisible(_this.isOrbitsVisible);
    };

    _this.toggleAsteroids = function () {
      _this.asteroidBelts.forEach(function (asteroidBelt) {
        return asteroidBelt.toggleIsBeltVisible();
      });
    };

    _this.setIsLogScale = function (isLogScale) {
      _this.isLogScale = !!isLogScale;

      _this.logScalables.forEach(function (el) {
        return el.toggleIsLogScale();
      });

      _this.tryToStartZooming(_this.isLogScale ? 'BIRDSEYELOG' : 'BIRDSEYE');
    };

    _this.toggleIsLogScale = function () {
      _this.isLogScale = !_this.isLogScale;

      _this.setIsLogScale(_this.isLogScale);
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
        _this._controls.target = _this.zoomTarget instanceof BirdsEye ? new Vector3(0, 0, 0) : _this.zoomTarget.getPosition();
        _this._controls.enabled = true;
      }
    };

    _this.updateCamera = function () {
      //
      var t = _this._clock.getElapsedTime(); // Zooming logic


      if (_this.isZoomingPosition || _this.isZoomingAngle) {
        _this.zoomTraversalFraction = updateTraversalFraction(_this.zoomClock);

        if (_this.isZoomingPosition) {
          _this.isZoomingPosition = updateCameraPosition(_this._camera, _this.zoomTarget, _this.zoomTraversalFraction);
        }

        if (_this.isZoomingAngle) {
          _this.isZoomingAngle = updateCameraViewingAngle(_this._camera, _this.zoomTarget, _this.zoomTraversalFraction);
        } else {
          // Keep looking at target even if position is still updating
          var _getDestinationLookPo = getDestinationLookPosition(_this.zoomTarget),
              x = _getDestinationLookPo.x,
              y = _getDestinationLookPo.y,
              z = _getDestinationLookPo.z;

          _this._camera.lookAt(x, y, z); // this._camera.up.set(1, 1, 1);
          // console.log('0 >>>>', this._camera.up, this._camera.position);

        }

        _this.tryToStopZooming();
      } else {
        // Orbit controls only update when NOT zooming
        _this._controls.update();
      } // Debug
    }; // Add html


    _this.updateMessageField = addMessageField(_this._container);

    _this.updateMessageField('Working?');

    addSearchField(_this._container, _this.tryToStartZooming);
    _this.birdsEyes = [new BirdsEye(), new BirdsEye('BIRDSEYELOG', 5)];
    _this.planets = [new Planet('MERCURY'), new Planet('VENUS'), new Planet('EARTH'), new Planet('MARS'), new Planet('CERES'), new Planet('JUPITER'), new Planet('SATURN'), new Planet('URANUS'), new Planet('NEPTUNE'), new Planet('PLUTO'), new Planet('HAUMEA'), new Planet('MAKEMAKE'), new Planet('ERIS')];
    _this.asteroids = [//
      // new Asteroid('65P'),
    ];
    _this.asteroidBelts = [new AsteroidBelt(['DISTANTOBJECT', 'MBA', 'NEO1KM', 'PHA'], _assertThisInitialized(_this))];
    _this.starField = new StarField(auToMeters(999));
    _this.zoomables = [].concat(_this.planets, _this.asteroids, _this.birdsEyes, [_this.sun]);
    _this.zoomableOrbitals = [].concat(_this.planets, _this.asteroids);
    _this.toyScalables = [].concat(_this.planets, _this.asteroids, _this.asteroidBelts, [_this.sun]);
    _this.logScalables = [].concat(_this.planets, _this.asteroids, _this.asteroidBelts);
    myprint('Begin registering entities');

    _this.registerSceneEntities([// this.starField,
    new MiscHelpers(), new SimpleLight(0.4), new PointLight(5, solarSystemData.SUN.radiusMeters)].concat(_this.planets, _this.asteroids, _this.asteroidBelts, [
    /** Sun MUST come last due to its sprite-blending quirks **/
    _this.sun]));

    myprint('Finish registering entities'); // Logic to run before scene initialization

    _this._preInitHook = function () {
      var radius = auToMeters(4); // const radius = auToMeters(100); // See all planets

      _this._initialViewingVector = new Vector3(0, 0, radius);
    }; // Logic to run after scene initialization


    _this._postInitHook = function () {
      // Misc
      _this._controls.maxDistance = auToMeters(100);

      _this.setHelpersVisibility(!true); //


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
    }; // Temp
    // setTimeout(() => this.tryToStartZooming('CERES'), 500);


    setTimeout(function () {
      _this.setIsToyScale(true);

      _this.tryToStartZooming('BIRDSEYE');
    }, 3500);

    _this._camera.up.set(1, 1, 1); // Clean up on instance destruction


    _this._destroyHook = function () {};

    return _this;
  }

  var _proto = SceneManager.prototype;

  _proto.setIsScenePaused = function setIsScenePaused(val) {
    this.isScenePaused = val;

    if (this.isScenePaused) {
      this._clock.stop();

      this.setIsLoaderDivVisible(true, 0);
    } else {
      this._clock.start();

      this.setIsLoaderDivVisible(false, 0);
    }
  };

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
  threejsScene.init();
}
if (process.env.NODE_ENV === 'development') displayFpsStats();
/**
 * Loads and runs stats.min.js to display FPS, etc.
 */

function displayFpsStats() {
  var script = document.createElement('script');

  script.onload = function () {
    // @ts-ignore
    var stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };

  script.src = '//mrdoob.github.io/stats.js/build/stats.min.js';
  document.head.appendChild(script);
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
