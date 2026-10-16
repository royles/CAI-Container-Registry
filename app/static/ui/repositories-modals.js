var pE = { exports: {} }, Xp = {}, Qm = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function J_() {
  if (qR) return gt;
  qR = 1;
  var J = Symbol.for("react.element"), K = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), Je = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), Ze = Symbol.for("react.provider"), S = Symbol.for("react.context"), Tt = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function me(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Z && _[Z] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, vt = {};
  function ht(_, P, He) {
    this.props = _, this.context = P, this.refs = vt, this.updater = He || te;
  }
  ht.prototype.isReactComponent = {}, ht.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, ht.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = ht.prototype;
  function pt(_, P, He) {
    this.props = _, this.context = P, this.refs = vt, this.updater = He || te;
  }
  var We = pt.prototype = new fn();
  We.constructor = pt, Ve(We, ht.prototype), We.isPureReactComponent = !0;
  var mt = Array.isArray, be = Object.prototype.hasOwnProperty, ct = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(_, P, He) {
    var Ae, lt = {}, nt = null, et = null;
    if (P != null) for (Ae in P.ref !== void 0 && (et = P.ref), P.key !== void 0 && (nt = "" + P.key), P) be.call(P, Ae) && !Fe.hasOwnProperty(Ae) && (lt[Ae] = P[Ae]);
    var rt = arguments.length - 2;
    if (rt === 1) lt.children = He;
    else if (1 < rt) {
      for (var ut = Array(rt), Vt = 0; Vt < rt; Vt++) ut[Vt] = arguments[Vt + 2];
      lt.children = ut;
    }
    if (_ && _.defaultProps) for (Ae in rt = _.defaultProps, rt) lt[Ae] === void 0 && (lt[Ae] = rt[Ae]);
    return { $$typeof: J, type: _, key: nt, ref: et, props: lt, _owner: ct.current };
  }
  function Ft(_, P) {
    return { $$typeof: J, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Xt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === J;
  }
  function an(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(He) {
      return P[He];
    });
  }
  var bt = /\/+/g;
  function De(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? an("" + _.key) : P.toString(36);
  }
  function At(_, P, He, Ae, lt) {
    var nt = typeof _;
    (nt === "undefined" || nt === "boolean") && (_ = null);
    var et = !1;
    if (_ === null) et = !0;
    else switch (nt) {
      case "string":
      case "number":
        et = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case J:
          case K:
            et = !0;
        }
    }
    if (et) return et = _, lt = lt(et), _ = Ae === "" ? "." + De(et, 0) : Ae, mt(lt) ? (He = "", _ != null && (He = _.replace(bt, "$&/") + "/"), At(lt, P, He, "", function(Vt) {
      return Vt;
    })) : lt != null && (Xt(lt) && (lt = Ft(lt, He + (!lt.key || et && et.key === lt.key ? "" : ("" + lt.key).replace(bt, "$&/") + "/") + _)), P.push(lt)), 1;
    if (et = 0, Ae = Ae === "" ? "." : Ae + ":", mt(_)) for (var rt = 0; rt < _.length; rt++) {
      nt = _[rt];
      var ut = Ae + De(nt, rt);
      et += At(nt, P, He, ut, lt);
    }
    else if (ut = me(_), typeof ut == "function") for (_ = ut.call(_), rt = 0; !(nt = _.next()).done; ) nt = nt.value, ut = Ae + De(nt, rt++), et += At(nt, P, He, ut, lt);
    else if (nt === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return et;
  }
  function _t(_, P, He) {
    if (_ == null) return _;
    var Ae = [], lt = 0;
    return At(_, Ae, "", "", function(nt) {
      return P.call(He, nt, lt++);
    }), Ae;
  }
  function Dt(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(He) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = He);
      }, function(He) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = He);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ce = { current: null }, X = { transition: null }, Re = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: X, ReactCurrentOwner: ct };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: _t, forEach: function(_, P, He) {
    _t(_, function() {
      P.apply(this, arguments);
    }, He);
  }, count: function(_) {
    var P = 0;
    return _t(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return _t(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Xt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, gt.Component = ht, gt.Fragment = z, gt.Profiler = Qe, gt.PureComponent = pt, gt.StrictMode = Je, gt.Suspense = le, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, gt.act = re, gt.cloneElement = function(_, P, He) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ae = Ve({}, _.props), lt = _.key, nt = _.ref, et = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (nt = P.ref, et = ct.current), P.key !== void 0 && (lt = "" + P.key), _.type && _.type.defaultProps) var rt = _.type.defaultProps;
      for (ut in P) be.call(P, ut) && !Fe.hasOwnProperty(ut) && (Ae[ut] = P[ut] === void 0 && rt !== void 0 ? rt[ut] : P[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1) Ae.children = He;
    else if (1 < ut) {
      rt = Array(ut);
      for (var Vt = 0; Vt < ut; Vt++) rt[Vt] = arguments[Vt + 2];
      Ae.children = rt;
    }
    return { $$typeof: J, type: _.type, key: lt, ref: nt, props: Ae, _owner: et };
  }, gt.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: Ze, _context: _ }, _.Consumer = _;
  }, gt.createElement = rn, gt.createFactory = function(_) {
    var P = rn.bind(null, _);
    return P.type = _, P;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(_) {
    return { $$typeof: Tt, render: _ };
  }, gt.isValidElement = Xt, gt.lazy = function(_) {
    return { $$typeof: Ue, _payload: { _status: -1, _result: _ }, _init: Dt };
  }, gt.memo = function(_, P) {
    return { $$typeof: se, type: _, compare: P === void 0 ? null : P };
  }, gt.startTransition = function(_) {
    var P = X.transition;
    X.transition = {};
    try {
      _();
    } finally {
      X.transition = P;
    }
  }, gt.unstable_act = re, gt.useCallback = function(_, P) {
    return Ce.current.useCallback(_, P);
  }, gt.useContext = function(_) {
    return Ce.current.useContext(_);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(_) {
    return Ce.current.useDeferredValue(_);
  }, gt.useEffect = function(_, P) {
    return Ce.current.useEffect(_, P);
  }, gt.useId = function() {
    return Ce.current.useId();
  }, gt.useImperativeHandle = function(_, P, He) {
    return Ce.current.useImperativeHandle(_, P, He);
  }, gt.useInsertionEffect = function(_, P) {
    return Ce.current.useInsertionEffect(_, P);
  }, gt.useLayoutEffect = function(_, P) {
    return Ce.current.useLayoutEffect(_, P);
  }, gt.useMemo = function(_, P) {
    return Ce.current.useMemo(_, P);
  }, gt.useReducer = function(_, P, He) {
    return Ce.current.useReducer(_, P, He);
  }, gt.useRef = function(_) {
    return Ce.current.useRef(_);
  }, gt.useState = function(_) {
    return Ce.current.useState(_);
  }, gt.useSyncExternalStore = function(_, P, He) {
    return Ce.current.useSyncExternalStore(_, P, He);
  }, gt.useTransition = function() {
    return Ce.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var Zp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Zp.exports;
var XR;
function Z_() {
  return XR || (XR = 1, function(J, K) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var z = "18.3.1", Je = Symbol.for("react.element"), Qe = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Tt = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), se = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), ht = Symbol.iterator, fn = "@@iterator";
      function pt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ht && h[ht] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, mt = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ct = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, rn = null;
      function Ft(h) {
        rn = h;
      }
      Fe.setExtraStackFrame = function(h) {
        rn = h;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = Fe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Xt = !1, an = !1, bt = !1, De = !1, At = !1, _t = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: mt,
        ReactCurrentOwner: ct
      };
      _t.ReactDebugCurrentFrame = Fe, _t.ReactCurrentActQueue = be;
      function Dt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          X("warn", h, N);
        }
      }
      function Ce(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          X("error", h, N);
        }
      }
      function X(h, C, N) {
        {
          var j = _t.ReactDebugCurrentFrame, q = j.getStackAddendum();
          q !== "" && (C += "%s", N = N.concat([q]));
          var Oe = N.map(function(ae) {
            return String(ae);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var Re = {};
      function re(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", q = j + "." + C;
          if (Re[q])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Re[q] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          re(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, j) {
          re(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, j) {
          re(h, "setState");
        }
      }, P = Object.assign, He = {};
      Object.freeze(He);
      function Ae(h, C, N) {
        this.props = h, this.context = C, this.refs = He, this.updater = N || _;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ae.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var lt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, nt = function(h, C) {
          Object.defineProperty(Ae.prototype, h, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var et in lt)
          lt.hasOwnProperty(et) && nt(et, lt[et]);
      }
      function rt() {
      }
      rt.prototype = Ae.prototype;
      function ut(h, C, N) {
        this.props = h, this.context = C, this.refs = He, this.updater = N || _;
      }
      var Vt = ut.prototype = new rt();
      Vt.constructor = ut, P(Vt, Ae.prototype), Vt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var xr = Array.isArray;
      function Cn(h) {
        return xr(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Vn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Vn(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var q = C.displayName || C.name || "";
        return q !== "" ? N + "(" + q + ")" : N;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function Kn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ze:
            return "Fragment";
          case Qe:
            return "Portal";
          case Tt:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case me:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              var C = h;
              return oa(C) + ".Consumer";
            case le:
              var N = h;
              return oa(N._context) + ".Provider";
            case Ue:
              return si(h, h.render, "ForwardRef");
            case te:
              var j = h.displayName || null;
              return j !== null ? j : Kn(h.type) || "Memo";
            case Ve: {
              var q = h, Oe = q._payload, ae = q._init;
              try {
                return Kn(ae(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, $n = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ya, Ln;
      Ln = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ia(h, C) {
        var N = function() {
          gr || (gr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, C) {
        var N = function() {
          Ya || (Ya = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = Kn(ct.current.type);
          Ln[C] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var Te = function(h, C, N, j, q, Oe, ae) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Je,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ne, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function at(h, C, N) {
        var j, q = {}, Oe = null, ae = null, Ne = null, dt = null;
        if (C != null) {
          Sr(C) && (ae = C.ref, ee(C)), sa(C) && (Yr(C.key), Oe = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, dt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (q[j] = C[j]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          q.children = N;
        else if (xt > 1) {
          for (var tn = Array(xt), It = 0; It < xt; It++)
            tn[It] = arguments[It + 2];
          Object.freeze && Object.freeze(tn), q.children = tn;
        }
        if (h && h.defaultProps) {
          var it = h.defaultProps;
          for (j in it)
            q[j] === void 0 && (q[j] = it[j]);
        }
        if (Oe || ae) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Ia(q, Qt), ae && ci(q, Qt);
        }
        return Te(h, Oe, ae, Ne, dt, ct.current, q);
      }
      function jt(h, C) {
        var N = Te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Jt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, q = P({}, h.props), Oe = h.key, ae = h.ref, Ne = h._self, dt = h._source, xt = h._owner;
        if (C != null) {
          Sr(C) && (ae = C.ref, xt = ct.current), sa(C) && (Yr(C.key), Oe = "" + C.key);
          var tn;
          h.type && h.type.defaultProps && (tn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (C[j] === void 0 && tn !== void 0 ? q[j] = tn[j] : q[j] = C[j]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          q.children = N;
        else if (It > 1) {
          for (var it = Array(It), Qt = 0; Qt < It; Qt++)
            it[Qt] = arguments[Qt + 2];
          q.children = it;
        }
        return Te(h.type, Oe, ae, Ne, dt, xt, q);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Je;
      }
      var ln = ".", qn = ":";
      function Zt(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(q) {
          return N[q];
        });
        return "$" + j;
      }
      var Bt = !1, $t = /\/+/g;
      function ca(h) {
        return h.replace($t, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), Zt("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, N, j, q) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Je:
                case Qe:
                  ae = !0;
              }
          }
        if (ae) {
          var Ne = h, dt = q(Ne), xt = j === "" ? ln + Er(Ne, 0) : j;
          if (Cn(dt)) {
            var tn = "";
            xt != null && (tn = ca(xt) + "/"), Ta(dt, C, tn, "", function(Kf) {
              return Kf;
            });
          } else dt != null && (vn(dt) && (dt.key && (!Ne || Ne.key !== dt.key) && Yr(dt.key), dt = jt(
            dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (dt.key && (!Ne || Ne.key !== dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + dt.key) + "/"
            ) : "") + xt
          )), C.push(dt));
          return 1;
        }
        var It, it, Qt = 0, hn = j === "" ? ln : j + qn;
        if (Cn(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            It = h[Cl], it = hn + Er(It, Cl), Qt += Ta(It, C, N, it, q);
        else {
          var Ko = pt(h);
          if (typeof Ko == "function") {
            var Vi = h;
            Ko === Vi.entries && (Bt || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var qo = Ko.call(Vi), ou, Gf = 0; !(ou = qo.next()).done; )
              It = ou.value, it = hn + Er(It, Gf++), Qt += Ta(It, C, N, it, q);
          } else if (Oe === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, C, N) {
        if (h == null)
          return h;
        var j = [], q = 0;
        return Ta(h, j, "", "", function(Oe) {
          return C.call(N, Oe, q++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Fi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, N) {
        Fi(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function dl(h) {
        return Fi(h, function(C) {
          return C;
        }) || [];
      }
      function pl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: se,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: le,
          _context: C
        };
        var N = !1, j = !1, q = !1;
        {
          var Oe = {
            $$typeof: se,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return j || (j = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                q || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), q = !0);
              }
            }
          }), C.Consumer = Oe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var br = -1, _r = 0, rr = 1, fi = 2;
      function Qa(h) {
        if (h._status === br) {
          var C = h._result, N = C();
          if (N.then(function(Oe) {
            if (h._status === _r || h._status === br) {
              var ae = h;
              ae._status = rr, ae._result = Oe;
            }
          }, function(Oe) {
            if (h._status === _r || h._status === br) {
              var ae = h;
              ae._status = fi, ae._result = Oe;
            }
          }), h._status === br) {
            var j = h;
            j._status = _r, j._result = N;
          }
        }
        if (h._status === rr) {
          var q = h._result;
          return q === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: br,
          _result: h
        }, N = {
          $$typeof: Ve,
          _payload: C,
          _init: Qa
        };
        {
          var j, q;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Oe, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Oe, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function pi(h) {
        h != null && h.$$typeof === te ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ue,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function B(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ze || h === Tt || At || h === S || h === Z || h === me || De || h === vt || Xt || an || bt || typeof h == "object" && h !== null && (h.$$typeof === Ve || h.$$typeof === te || h.$$typeof === le || h.$$typeof === se || h.$$typeof === Ue || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        B(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: te,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(q) {
              j = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return N;
      }
      function he() {
        var h = We.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ke(h) {
        var C = he();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = he();
        return C.useState(h);
      }
      function ft(h, C, N) {
        var j = he();
        return j.useReducer(h, C, N);
      }
      function ot(h) {
        var C = he();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var N = he();
        return N.useEffect(h, C);
      }
      function en(h, C) {
        var N = he();
        return N.useInsertionEffect(h, C);
      }
      function un(h, C) {
        var N = he();
        return N.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var N = he();
        return N.useCallback(h, C);
      }
      function Wa(h, C) {
        var N = he();
        return N.useMemo(h, C);
      }
      function Ga(h, C, N) {
        var j = he();
        return j.useImperativeHandle(h, C, N);
      }
      function qe(h, C) {
        {
          var N = he();
          return N.useDebugValue(h, C);
        }
      }
      function tt() {
        var h = he();
        return h.useTransition();
      }
      function Ka(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = he();
        return h.useId();
      }
      function ru(h, C, N) {
        var j = he();
        return j.useSyncExternalStore(h, C, N);
      }
      var vl = 0, Wu, hl, Ir, Io, kr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            Wu = console.log, hl = console.info, Ir = console.warn, Io = console.error, kr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          vl++;
        }
      }
      function fa() {
        {
          if (vl--, vl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Wu
              }),
              info: P({}, h, {
                value: hl
              }),
              warn: P({}, h, {
                value: Ir
              }),
              error: P({}, h, {
                value: Io
              }),
              group: P({}, h, {
                value: kr
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          vl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qa = _t.ReactCurrentDispatcher, Xa;
      function Ku(h, C, N) {
        {
          if (Xa === void 0)
            try {
              throw Error();
            } catch (q) {
              var j = q.stack.trim().match(/\n( *(at )?)/);
              Xa = j && j[1] || "";
            }
          return `
` + Xa + h;
        }
      }
      var au = !1, yl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new qu();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var N = yl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        au = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = qa.current, qa.current = null, ml();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (hn) {
                j = hn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var Ne = hn.stack.split(`
`), dt = j.stack.split(`
`), xt = Ne.length - 1, tn = dt.length - 1; xt >= 1 && tn >= 0 && Ne[xt] !== dt[tn]; )
              tn--;
            for (; xt >= 1 && tn >= 0; xt--, tn--)
              if (Ne[xt] !== dt[tn]) {
                if (xt !== 1 || tn !== 1)
                  do
                    if (xt--, tn--, tn < 0 || Ne[xt] !== dt[tn]) {
                      var It = `
` + Ne[xt].replace(" at new ", " at ");
                      return h.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, It), It;
                    }
                  while (xt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          au = !1, qa.current = Oe, fa(), Error.prepareStackTrace = q;
        }
        var it = h ? h.displayName || h.name : "", Qt = it ? Ku(it) : "";
        return typeof h == "function" && yl.set(h, Qt), Qt;
      }
      function Hi(h, C, N) {
        return Xu(h, !1);
      }
      function Qf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Pi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Qf(h));
        if (typeof h == "string")
          return Ku(h);
        switch (h) {
          case Z:
            return Ku("Suspense");
          case me:
            return Ku("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ue:
              return Hi(h.render);
            case te:
              return Pi(h.type, C, N);
            case Ve: {
              var j = h, q = j._payload, Oe = j._init;
              try {
                return Pi(Oe(q), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Ot = {}, Ju = _t.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(N);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Qo(h, C, N, j, q) {
        {
          var Oe = Function.call.bind(Rn);
          for (var ae in h)
            if (Oe(h, ae)) {
              var Ne = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var dt = Error((j || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                Ne = h[ae](C, ae, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Ne = xt;
              }
              Ne && !(Ne instanceof Error) && (wt(q), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, ae, typeof Ne), wt(null)), Ne instanceof Error && !(Ne.message in Ot) && (Ot[Ne.message] = !0, wt(q), Ce("Failed %s type: %s", N, Ne.message), wt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Ft(N);
        } else
          Ft(null);
      }
      var $e;
      $e = !1;
      function Zu() {
        if (ct.current) {
          var h = Kn(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function mi(h) {
        var C = Zu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function on(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = mi(C);
          if (!Dr[N]) {
            Dr[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ct.current && (j = " It was passed a child from " + Kn(h._owner.type) + "."), vi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), vi(null);
          }
        }
      }
      function Yt(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              vn(j) && on(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = pt(h);
            if (typeof q == "function" && q !== h.entries)
              for (var Oe = q.call(h), ae; !(ae = Oe.next()).done; )
                vn(ae.value) && on(ae.value, C);
          }
        }
      }
      function gl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ue || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === te))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Kn(C);
            Qo(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !$e) {
            $e = !0;
            var q = Kn(C);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              vi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, N) {
        var j = B(h);
        if (!j) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = hi(C);
          Oe ? q += Oe : q += Zu();
          var ae;
          h === null ? ae = "null" : Cn(h) ? ae = "array" : h !== void 0 && h.$$typeof === Je ? (ae = "<" + (Kn(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, q);
        }
        var Ne = at.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (j)
          for (var dt = 2; dt < arguments.length; dt++)
            Yt(arguments[dt], h);
        return h === Ze ? Yn(Ne) : gl(Ne), Ne;
      }
      var wa = !1;
      function iu(h) {
        var C = Or.bind(null, h);
        return C.type = h, wa || (wa = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, N) {
        for (var j = Jt.apply(this, arguments), q = 2; q < arguments.length; q++)
          Yt(arguments[q], j.type);
        return gl(j), j;
      }
      function Go(h, C) {
        var N = mt.transition;
        mt.transition = {};
        var j = mt.transition;
        mt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (mt.transition = N, N === null && j._updatedFibers) {
            var q = j._updatedFibers.size;
            q > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, lu = null;
      function Wf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = J && J[C];
            lu = N.call(J, "timers").setImmediate;
          } catch {
            lu = function(q) {
              Sl === !1 && (Sl = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = q, Oe.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var xa = 0, Ja = !1;
      function yi(h) {
        {
          var C = xa;
          xa++, be.current === null && (be.current = []);
          var N = be.isBatchingLegacy, j;
          try {
            if (be.isBatchingLegacy = !0, j = h(), !N && be.didScheduleLegacyUpdate) {
              var q = be.current;
              q !== null && (be.didScheduleLegacyUpdate = !1, El(q));
            }
          } catch (it) {
            throw ba(C), it;
          } finally {
            be.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Oe = j, ae = !1, Ne = {
              then: function(it, Qt) {
                ae = !0, Oe.then(function(hn) {
                  ba(C), xa === 0 ? eo(hn, it, Qt) : it(hn);
                }, function(hn) {
                  ba(C), Qt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Ja = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var dt = j;
            if (ba(C), xa === 0) {
              var xt = be.current;
              xt !== null && (El(xt), be.current = null);
              var tn = {
                then: function(it, Qt) {
                  be.current === null ? (be.current = [], eo(dt, it, Qt)) : it(dt);
                }
              };
              return tn;
            } else {
              var It = {
                then: function(it, Qt) {
                  it(dt);
                }
              };
              return It;
            }
          }
        }
      }
      function ba(h) {
        h !== xa - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function eo(h, C, N) {
        {
          var j = be.current;
          if (j !== null)
            try {
              El(j), Wf(function() {
                j.length === 0 ? (be.current = null, C(h)) : eo(h, C, N);
              });
            } catch (q) {
              N(q);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function El(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Or, no = Wo, ro = iu, Za = {
        map: Fi,
        forEach: eu,
        count: Zl,
        toArray: dl,
        only: pl
      };
      K.Children = Za, K.Component = Ae, K.Fragment = Ze, K.Profiler = Tt, K.PureComponent = ut, K.StrictMode = S, K.Suspense = Z, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, K.act = yi, K.cloneElement = no, K.createContext = tu, K.createElement = uu, K.createFactory = ro, K.createRef = On, K.forwardRef = pi, K.isValidElement = vn, K.lazy = di, K.memo = ie, K.startTransition = Go, K.unstable_act = yi, K.useCallback = ar, K.useContext = Ke, K.useDebugValue = qe, K.useDeferredValue = Ka, K.useEffect = Tn, K.useId = nu, K.useImperativeHandle = Ga, K.useInsertionEffect = en, K.useLayoutEffect = un, K.useMemo = Wa, K.useReducer = ft, K.useRef = ot, K.useState = Ye, K.useSyncExternalStore = ru, K.useTransition = tt, K.version = z, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var JR;
function ev() {
  return JR || (JR = 1, process.env.NODE_ENV === "production" ? Qm.exports = J_() : Qm.exports = Z_()), Qm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function ek() {
  if (ZR) return Xp;
  ZR = 1;
  var J = ev(), K = Symbol.for("react.element"), z = Symbol.for("react.fragment"), Je = Object.prototype.hasOwnProperty, Qe = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Tt, le, se) {
    var Ue, Z = {}, me = null, te = null;
    se !== void 0 && (me = "" + se), le.key !== void 0 && (me = "" + le.key), le.ref !== void 0 && (te = le.ref);
    for (Ue in le) Je.call(le, Ue) && !Ze.hasOwnProperty(Ue) && (Z[Ue] = le[Ue]);
    if (Tt && Tt.defaultProps) for (Ue in le = Tt.defaultProps, le) Z[Ue] === void 0 && (Z[Ue] = le[Ue]);
    return { $$typeof: K, type: Tt, key: me, ref: te, props: Z, _owner: Qe.current };
  }
  return Xp.Fragment = z, Xp.jsx = S, Xp.jsxs = S, Xp;
}
var Jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function tk() {
  return eT || (eT = 1, process.env.NODE_ENV !== "production" && function() {
    var J = ev(), K = Symbol.for("react.element"), z = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Tt = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), Ve = Symbol.iterator, vt = "@@iterator";
    function ht(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = Ve && R[Ve] || R[vt];
      return typeof B == "function" ? B : null;
    }
    var fn = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pt(R) {
      {
        for (var B = arguments.length, ie = new Array(B > 1 ? B - 1 : 0), he = 1; he < B; he++)
          ie[he - 1] = arguments[he];
        We("error", R, ie);
      }
    }
    function We(R, B, ie) {
      {
        var he = fn.ReactDebugCurrentFrame, Ke = he.getStackAddendum();
        Ke !== "" && (B += "%s", ie = ie.concat([Ke]));
        var Ye = ie.map(function(ft) {
          return String(ft);
        });
        Ye.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var mt = !1, be = !1, ct = !1, Fe = !1, rn = !1, Ft;
    Ft = Symbol.for("react.module.reference");
    function Xt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Je || R === Ze || rn || R === Qe || R === se || R === Ue || Fe || R === te || mt || be || ct || typeof R == "object" && R !== null && (R.$$typeof === me || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === Tt || R.$$typeof === le || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ft || R.getModuleId !== void 0));
    }
    function an(R, B, ie) {
      var he = R.displayName;
      if (he)
        return he;
      var Ke = B.displayName || B.name || "";
      return Ke !== "" ? ie + "(" + Ke + ")" : ie;
    }
    function bt(R) {
      return R.displayName || "Context";
    }
    function De(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && pt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Je:
          return "Fragment";
        case z:
          return "Portal";
        case Ze:
          return "Profiler";
        case Qe:
          return "StrictMode";
        case se:
          return "Suspense";
        case Ue:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Tt:
            var B = R;
            return bt(B) + ".Consumer";
          case S:
            var ie = R;
            return bt(ie._context) + ".Provider";
          case le:
            return an(R, R.render, "ForwardRef");
          case Z:
            var he = R.displayName || null;
            return he !== null ? he : De(R.type) || "Memo";
          case me: {
            var Ke = R, Ye = Ke._payload, ft = Ke._init;
            try {
              return De(ft(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, _t = 0, Dt, Ce, X, Re, re, _, P;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Ae() {
      {
        if (_t === 0) {
          Dt = console.log, Ce = console.info, X = console.warn, Re = console.error, re = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        _t++;
      }
    }
    function lt() {
      {
        if (_t--, _t === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: Dt
            }),
            info: At({}, R, {
              value: Ce
            }),
            warn: At({}, R, {
              value: X
            }),
            error: At({}, R, {
              value: Re
            }),
            group: At({}, R, {
              value: re
            }),
            groupCollapsed: At({}, R, {
              value: _
            }),
            groupEnd: At({}, R, {
              value: P
            })
          });
        }
        _t < 0 && pt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nt = fn.ReactCurrentDispatcher, et;
    function rt(R, B, ie) {
      {
        if (et === void 0)
          try {
            throw Error();
          } catch (Ke) {
            var he = Ke.stack.trim().match(/\n( *(at )?)/);
            et = he && he[1] || "";
          }
        return `
` + et + R;
      }
    }
    var ut = !1, Vt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Vt = new On();
    }
    function xr(R, B) {
      if (!R || ut)
        return "";
      {
        var ie = Vt.get(R);
        if (ie !== void 0)
          return ie;
      }
      var he;
      ut = !0;
      var Ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = nt.current, nt.current = null, Ae();
      try {
        if (B) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (qe) {
              he = qe;
            }
            Reflect.construct(R, [], ft);
          } else {
            try {
              ft.call();
            } catch (qe) {
              he = qe;
            }
            R.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            he = qe;
          }
          R();
        }
      } catch (qe) {
        if (qe && he && typeof qe.stack == "string") {
          for (var ot = qe.stack.split(`
`), Tn = he.stack.split(`
`), en = ot.length - 1, un = Tn.length - 1; en >= 1 && un >= 0 && ot[en] !== Tn[un]; )
            un--;
          for (; en >= 1 && un >= 0; en--, un--)
            if (ot[en] !== Tn[un]) {
              if (en !== 1 || un !== 1)
                do
                  if (en--, un--, un < 0 || ot[en] !== Tn[un]) {
                    var ar = `
` + ot[en].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Vt.set(R, ar), ar;
                  }
                while (en >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        ut = !1, nt.current = Ye, lt(), Error.prepareStackTrace = Ke;
      }
      var Wa = R ? R.displayName || R.name : "", Ga = Wa ? rt(Wa) : "";
      return typeof R == "function" && Vt.set(R, Ga), Ga;
    }
    function Cn(R, B, ie) {
      return xr(R, !1);
    }
    function nr(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function Vn(R, B, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return xr(R, nr(R));
      if (typeof R == "string")
        return rt(R);
      switch (R) {
        case se:
          return rt("Suspense");
        case Ue:
          return rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case le:
            return Cn(R.render);
          case Z:
            return Vn(R.type, B, ie);
          case me: {
            var he = R, Ke = he._payload, Ye = he._init;
            try {
              return Vn(Ye(Ke), B, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, si = fn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var B = R._owner, ie = Vn(R.type, R._source, B ? B.type : null);
        si.setExtraStackFrame(ie);
      } else
        si.setExtraStackFrame(null);
    }
    function Kn(R, B, ie, he, Ke) {
      {
        var Ye = Function.call.bind(Bn);
        for (var ft in R)
          if (Ye(R, ft)) {
            var ot = void 0;
            try {
              if (typeof R[ft] != "function") {
                var Tn = Error((he || "React class") + ": " + ie + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              ot = R[ft](B, ft, he, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              ot = en;
            }
            ot && !(ot instanceof Error) && (oa(Ke), pt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ie, ft, typeof ot), oa(null)), ot instanceof Error && !(ot.message in Yr) && (Yr[ot.message] = !0, oa(Ke), pt("Failed %s type: %s", ie, ot.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function $n(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ie = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
      }
    }
    function Ya(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ya(R))
        return pt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = fn.ReactCurrentOwner, Ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, ee;
    function Te(R) {
      if (Bn.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function at(R) {
      if (Bn.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function jt(R, B) {
      typeof R.ref == "string" && sa.current;
    }
    function Jt(R, B) {
      {
        var ie = function() {
          ci || (ci = !0, pt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function vn(R, B) {
      {
        var ie = function() {
          ee || (ee = !0, pt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var ln = function(R, B, ie, he, Ke, Ye, ft) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: K,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: ie,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return ot._store = {}, Object.defineProperty(ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function qn(R, B, ie, he, Ke) {
      {
        var Ye, ft = {}, ot = null, Tn = null;
        ie !== void 0 && (Sr(ie), ot = "" + ie), at(B) && (Sr(B.key), ot = "" + B.key), Te(B) && (Tn = B.ref, jt(B, Ke));
        for (Ye in B)
          Bn.call(B, Ye) && !Ia.hasOwnProperty(Ye) && (ft[Ye] = B[Ye]);
        if (R && R.defaultProps) {
          var en = R.defaultProps;
          for (Ye in en)
            ft[Ye] === void 0 && (ft[Ye] = en[Ye]);
        }
        if (ot || Tn) {
          var un = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ot && Jt(ft, un), Tn && vn(ft, un);
        }
        return ln(R, ot, Tn, Ke, he, sa.current, ft);
      }
    }
    var Zt = fn.ReactCurrentOwner, Bt = fn.ReactDebugCurrentFrame;
    function $t(R) {
      if (R) {
        var B = R._owner, ie = Vn(R.type, R._source, B ? B.type : null);
        Bt.setExtraStackFrame(ie);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === K;
    }
    function Ta() {
      {
        if (Zt.current) {
          var R = De(Zt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Fi(R) {
      return "";
    }
    var Zl = {};
    function eu(R) {
      {
        var B = Ta();
        if (!B) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (B = `

Check the top-level render call using <` + ie + ">.");
        }
        return B;
      }
    }
    function dl(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = eu(B);
        if (Zl[ie])
          return;
        Zl[ie] = !0;
        var he = "";
        R && R._owner && R._owner !== Zt.current && (he = " It was passed a child from " + De(R._owner.type) + "."), $t(R), pt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, he), $t(null);
      }
    }
    function pl(R, B) {
      {
        if (typeof R != "object")
          return;
        if ($n(R))
          for (var ie = 0; ie < R.length; ie++) {
            var he = R[ie];
            Er(he) && dl(he, B);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ke = ht(R);
          if (typeof Ke == "function" && Ke !== R.entries)
            for (var Ye = Ke.call(R), ft; !(ft = Ye.next()).done; )
              Er(ft.value) && dl(ft.value, B);
        }
      }
    }
    function tu(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var ie;
        if (typeof B == "function")
          ie = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === le || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === Z))
          ie = B.propTypes;
        else
          return;
        if (ie) {
          var he = De(B);
          Kn(ie, R.props, "prop", he, R);
        } else if (B.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Ke = De(B);
          pt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && pt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var B = Object.keys(R.props), ie = 0; ie < B.length; ie++) {
          var he = B[ie];
          if (he !== "children" && he !== "key") {
            $t(R), pt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), $t(null);
            break;
          }
        }
        R.ref !== null && ($t(R), pt("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var _r = {};
    function rr(R, B, ie, he, Ke, Ye) {
      {
        var ft = Xt(R);
        if (!ft) {
          var ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? ot += Tn : ot += Ta();
          var en;
          R === null ? en = "null" : $n(R) ? en = "array" : R !== void 0 && R.$$typeof === K ? (en = "<" + (De(R.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : en = typeof R, pt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, ot);
        }
        var un = qn(R, B, ie, Ke, Ye);
        if (un == null)
          return un;
        if (ft) {
          var ar = B.children;
          if (ar !== void 0)
            if (he)
              if ($n(ar)) {
                for (var Wa = 0; Wa < ar.length; Wa++)
                  pl(ar[Wa], R);
                Object.freeze && Object.freeze(ar);
              } else
                pt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(ar, R);
        }
        if (Bn.call(B, "key")) {
          var Ga = De(R), qe = Object.keys(B).filter(function(nu) {
            return nu !== "key";
          }), tt = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + tt]) {
            var Ka = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            pt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tt, Ga, Ka, Ga), _r[Ga + tt] = !0;
          }
        }
        return R === Je ? br(un) : tu(un), un;
      }
    }
    function fi(R, B, ie) {
      return rr(R, B, ie, !0);
    }
    function Qa(R, B, ie) {
      return rr(R, B, ie, !1);
    }
    var di = Qa, pi = fi;
    Jp.Fragment = Je, Jp.jsx = di, Jp.jsxs = pi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? pE.exports = ek() : pE.exports = tk();
var cn = pE.exports, vE = { exports: {} }, Ba = {}, Wm = { exports: {} }, fE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function nk() {
  return tT || (tT = 1, function(J) {
    function K(X, Re) {
      var re = X.length;
      X.push(Re);
      e: for (; 0 < re; ) {
        var _ = re - 1 >>> 1, P = X[_];
        if (0 < Qe(P, Re)) X[_] = Re, X[re] = P, re = _;
        else break e;
      }
    }
    function z(X) {
      return X.length === 0 ? null : X[0];
    }
    function Je(X) {
      if (X.length === 0) return null;
      var Re = X[0], re = X.pop();
      if (re !== Re) {
        X[0] = re;
        e: for (var _ = 0, P = X.length, He = P >>> 1; _ < He; ) {
          var Ae = 2 * (_ + 1) - 1, lt = X[Ae], nt = Ae + 1, et = X[nt];
          if (0 > Qe(lt, re)) nt < P && 0 > Qe(et, lt) ? (X[_] = et, X[nt] = re, _ = nt) : (X[_] = lt, X[Ae] = re, _ = Ae);
          else if (nt < P && 0 > Qe(et, re)) X[_] = et, X[nt] = re, _ = nt;
          else break e;
        }
      }
      return Re;
    }
    function Qe(X, Re) {
      var re = X.sortIndex - Re.sortIndex;
      return re !== 0 ? re : X.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ze = performance;
      J.unstable_now = function() {
        return Ze.now();
      };
    } else {
      var S = Date, Tt = S.now();
      J.unstable_now = function() {
        return S.now() - Tt;
      };
    }
    var le = [], se = [], Ue = 1, Z = null, me = 3, te = !1, Ve = !1, vt = !1, ht = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(X) {
      for (var Re = z(se); Re !== null; ) {
        if (Re.callback === null) Je(se);
        else if (Re.startTime <= X) Je(se), Re.sortIndex = Re.expirationTime, K(le, Re);
        else break;
        Re = z(se);
      }
    }
    function mt(X) {
      if (vt = !1, We(X), !Ve) if (z(le) !== null) Ve = !0, Dt(be);
      else {
        var Re = z(se);
        Re !== null && Ce(mt, Re.startTime - X);
      }
    }
    function be(X, Re) {
      Ve = !1, vt && (vt = !1, fn(rn), rn = -1), te = !0;
      var re = me;
      try {
        for (We(Re), Z = z(le); Z !== null && (!(Z.expirationTime > Re) || X && !an()); ) {
          var _ = Z.callback;
          if (typeof _ == "function") {
            Z.callback = null, me = Z.priorityLevel;
            var P = _(Z.expirationTime <= Re);
            Re = J.unstable_now(), typeof P == "function" ? Z.callback = P : Z === z(le) && Je(le), We(Re);
          } else Je(le);
          Z = z(le);
        }
        if (Z !== null) var He = !0;
        else {
          var Ae = z(se);
          Ae !== null && Ce(mt, Ae.startTime - Re), He = !1;
        }
        return He;
      } finally {
        Z = null, me = re, te = !1;
      }
    }
    var ct = !1, Fe = null, rn = -1, Ft = 5, Xt = -1;
    function an() {
      return !(J.unstable_now() - Xt < Ft);
    }
    function bt() {
      if (Fe !== null) {
        var X = J.unstable_now();
        Xt = X;
        var Re = !0;
        try {
          Re = Fe(!0, X);
        } finally {
          Re ? De() : (ct = !1, Fe = null);
        }
      } else ct = !1;
    }
    var De;
    if (typeof pt == "function") De = function() {
      pt(bt);
    };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), _t = At.port2;
      At.port1.onmessage = bt, De = function() {
        _t.postMessage(null);
      };
    } else De = function() {
      ht(bt, 0);
    };
    function Dt(X) {
      Fe = X, ct || (ct = !0, De());
    }
    function Ce(X, Re) {
      rn = ht(function() {
        X(J.unstable_now());
      }, Re);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, J.unstable_continueExecution = function() {
      Ve || te || (Ve = !0, Dt(be));
    }, J.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ft = 0 < X ? Math.floor(1e3 / X) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, J.unstable_getFirstCallbackNode = function() {
      return z(le);
    }, J.unstable_next = function(X) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = me;
      }
      var re = me;
      me = Re;
      try {
        return X();
      } finally {
        me = re;
      }
    }, J.unstable_pauseExecution = function() {
    }, J.unstable_requestPaint = function() {
    }, J.unstable_runWithPriority = function(X, Re) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var re = me;
      me = X;
      try {
        return Re();
      } finally {
        me = re;
      }
    }, J.unstable_scheduleCallback = function(X, Re, re) {
      var _ = J.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? _ + re : _) : re = _, X) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = re + P, X = { id: Ue++, callback: Re, priorityLevel: X, startTime: re, expirationTime: P, sortIndex: -1 }, re > _ ? (X.sortIndex = re, K(se, X), z(le) === null && X === z(se) && (vt ? (fn(rn), rn = -1) : vt = !0, Ce(mt, re - _))) : (X.sortIndex = P, K(le, X), Ve || te || (Ve = !0, Dt(be))), X;
    }, J.unstable_shouldYield = an, J.unstable_wrapCallback = function(X) {
      var Re = me;
      return function() {
        var re = me;
        me = Re;
        try {
          return X.apply(this, arguments);
        } finally {
          me = re;
        }
      };
    };
  }(fE)), fE;
}
var dE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function rk() {
  return nT || (nT = 1, function(J) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, z = 5;
      function Je(ee, Te) {
        var at = ee.length;
        ee.push(Te), S(ee, Te, at);
      }
      function Qe(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function Ze(ee) {
        if (ee.length === 0)
          return null;
        var Te = ee[0], at = ee.pop();
        return at !== Te && (ee[0] = at, Tt(ee, at, 0)), Te;
      }
      function S(ee, Te, at) {
        for (var jt = at; jt > 0; ) {
          var Jt = jt - 1 >>> 1, vn = ee[Jt];
          if (le(vn, Te) > 0)
            ee[Jt] = Te, ee[jt] = vn, jt = Jt;
          else
            return;
        }
      }
      function Tt(ee, Te, at) {
        for (var jt = at, Jt = ee.length, vn = Jt >>> 1; jt < vn; ) {
          var ln = (jt + 1) * 2 - 1, qn = ee[ln], Zt = ln + 1, Bt = ee[Zt];
          if (le(qn, Te) < 0)
            Zt < Jt && le(Bt, qn) < 0 ? (ee[jt] = Bt, ee[Zt] = Te, jt = Zt) : (ee[jt] = qn, ee[ln] = Te, jt = ln);
          else if (Zt < Jt && le(Bt, Te) < 0)
            ee[jt] = Bt, ee[Zt] = Te, jt = Zt;
          else
            return;
        }
      }
      function le(ee, Te) {
        var at = ee.sortIndex - Te.sortIndex;
        return at !== 0 ? at : ee.id - Te.id;
      }
      var se = 1, Ue = 2, Z = 3, me = 4, te = 5;
      function Ve(ee, Te) {
      }
      var vt = typeof performance == "object" && typeof performance.now == "function";
      if (vt) {
        var ht = performance;
        J.unstable_now = function() {
          return ht.now();
        };
      } else {
        var fn = Date, pt = fn.now();
        J.unstable_now = function() {
          return fn.now() - pt;
        };
      }
      var We = 1073741823, mt = -1, be = 250, ct = 5e3, Fe = 1e4, rn = We, Ft = [], Xt = [], an = 1, bt = null, De = Z, At = !1, _t = !1, Dt = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(ee) {
        for (var Te = Qe(Xt); Te !== null; ) {
          if (Te.callback === null)
            Ze(Xt);
          else if (Te.startTime <= ee)
            Ze(Xt), Te.sortIndex = Te.expirationTime, Je(Ft, Te);
          else
            return;
          Te = Qe(Xt);
        }
      }
      function _(ee) {
        if (Dt = !1, re(ee), !_t)
          if (Qe(Ft) !== null)
            _t = !0, Ln(P);
          else {
            var Te = Qe(Xt);
            Te !== null && Sr(_, Te.startTime - ee);
          }
      }
      function P(ee, Te) {
        _t = !1, Dt && (Dt = !1, sa()), At = !0;
        var at = De;
        try {
          var jt;
          if (!K) return He(ee, Te);
        } finally {
          bt = null, De = at, At = !1;
        }
      }
      function He(ee, Te) {
        var at = Te;
        for (re(at), bt = Qe(Ft); bt !== null && !(bt.expirationTime > at && (!ee || si())); ) {
          var jt = bt.callback;
          if (typeof jt == "function") {
            bt.callback = null, De = bt.priorityLevel;
            var Jt = bt.expirationTime <= at, vn = jt(Jt);
            at = J.unstable_now(), typeof vn == "function" ? bt.callback = vn : bt === Qe(Ft) && Ze(Ft), re(at);
          } else
            Ze(Ft);
          bt = Qe(Ft);
        }
        if (bt !== null)
          return !0;
        var ln = Qe(Xt);
        return ln !== null && Sr(_, ln.startTime - at), !1;
      }
      function Ae(ee, Te) {
        switch (ee) {
          case se:
          case Ue:
          case Z:
          case me:
          case te:
            break;
          default:
            ee = Z;
        }
        var at = De;
        De = ee;
        try {
          return Te();
        } finally {
          De = at;
        }
      }
      function lt(ee) {
        var Te;
        switch (De) {
          case se:
          case Ue:
          case Z:
            Te = Z;
            break;
          default:
            Te = De;
            break;
        }
        var at = De;
        De = Te;
        try {
          return ee();
        } finally {
          De = at;
        }
      }
      function nt(ee) {
        var Te = De;
        return function() {
          var at = De;
          De = Te;
          try {
            return ee.apply(this, arguments);
          } finally {
            De = at;
          }
        };
      }
      function et(ee, Te, at) {
        var jt = J.unstable_now(), Jt;
        if (typeof at == "object" && at !== null) {
          var vn = at.delay;
          typeof vn == "number" && vn > 0 ? Jt = jt + vn : Jt = jt;
        } else
          Jt = jt;
        var ln;
        switch (ee) {
          case se:
            ln = mt;
            break;
          case Ue:
            ln = be;
            break;
          case te:
            ln = rn;
            break;
          case me:
            ln = Fe;
            break;
          case Z:
          default:
            ln = ct;
            break;
        }
        var qn = Jt + ln, Zt = {
          id: an++,
          callback: Te,
          priorityLevel: ee,
          startTime: Jt,
          expirationTime: qn,
          sortIndex: -1
        };
        return Jt > jt ? (Zt.sortIndex = Jt, Je(Xt, Zt), Qe(Ft) === null && Zt === Qe(Xt) && (Dt ? sa() : Dt = !0, Sr(_, Jt - jt))) : (Zt.sortIndex = qn, Je(Ft, Zt), !_t && !At && (_t = !0, Ln(P))), Zt;
      }
      function rt() {
      }
      function ut() {
        !_t && !At && (_t = !0, Ln(P));
      }
      function Vt() {
        return Qe(Ft);
      }
      function On(ee) {
        ee.callback = null;
      }
      function xr() {
        return De;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = z, Yr = -1;
      function si() {
        var ee = J.unstable_now() - Yr;
        return !(ee < Bn);
      }
      function oa() {
      }
      function Kn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = z;
      }
      var Rn = function() {
        if (nr !== null) {
          var ee = J.unstable_now();
          Yr = ee;
          var Te = !0, at = !0;
          try {
            at = nr(Te, ee);
          } finally {
            at ? $n() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, $n;
      if (typeof Re == "function")
        $n = function() {
          Re(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ya = gr.port2;
        gr.port1.onmessage = Rn, $n = function() {
          Ya.postMessage(null);
        };
      } else
        $n = function() {
          Ce(Rn, 0);
        };
      function Ln(ee) {
        nr = ee, Cn || (Cn = !0, $n());
      }
      function Sr(ee, Te) {
        Vn = Ce(function() {
          ee(J.unstable_now());
        }, Te);
      }
      function sa() {
        X(Vn), Vn = -1;
      }
      var Ia = oa, ci = null;
      J.unstable_IdlePriority = te, J.unstable_ImmediatePriority = se, J.unstable_LowPriority = me, J.unstable_NormalPriority = Z, J.unstable_Profiling = ci, J.unstable_UserBlockingPriority = Ue, J.unstable_cancelCallback = On, J.unstable_continueExecution = ut, J.unstable_forceFrameRate = Kn, J.unstable_getCurrentPriorityLevel = xr, J.unstable_getFirstCallbackNode = Vt, J.unstable_next = lt, J.unstable_pauseExecution = rt, J.unstable_requestPaint = Ia, J.unstable_runWithPriority = Ae, J.unstable_scheduleCallback = et, J.unstable_shouldYield = si, J.unstable_wrapCallback = nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dE)), dE;
}
var rT;
function oT() {
  return rT || (rT = 1, process.env.NODE_ENV === "production" ? Wm.exports = nk() : Wm.exports = rk()), Wm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function ak() {
  if (aT) return Ba;
  aT = 1;
  var J = ev(), K = oT();
  function z(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Je = /* @__PURE__ */ new Set(), Qe = {};
  function Ze(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Qe[n] = r, n = 0; n < r.length; n++) Je.add(r[n]);
  }
  var Tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), le = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ue = {}, Z = {};
  function me(n) {
    return le.call(Z, n) ? !0 : le.call(Ue, n) ? !1 : se.test(n) ? Z[n] = !0 : (Ue[n] = !0, !1);
  }
  function te(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ve(n, r, l, o) {
    if (r === null || typeof r > "u" || te(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function vt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ht = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ht[n] = new vt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ht[r] = new vt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ht[n] = new vt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ht[n] = new vt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ht[n] = new vt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ht[n] = new vt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ht[n] = new vt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ht[n] = new vt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ht[n] = new vt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function pt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      pt
    );
    ht[r] = new vt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, pt);
    ht[r] = new vt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, pt);
    ht[r] = new vt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ht[n] = new vt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ht.xlinkHref = new vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ht[n] = new vt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = ht.hasOwnProperty(r) ? ht[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ve(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var mt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ct = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), Ft = Symbol.for("react.profiler"), Xt = Symbol.for("react.provider"), an = Symbol.for("react.context"), bt = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var He = !1;
  function Ae(n, r) {
    if (!n || He) return "";
    He = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      He = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function lt(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case ct:
        return "Portal";
      case Ft:
        return "Profiler";
      case rn:
        return "StrictMode";
      case De:
        return "Suspense";
      case At:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case an:
        return (n.displayName || "Context") + ".Consumer";
      case Xt:
        return (n._context.displayName || "Context") + ".Provider";
      case bt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _t:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function et(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return nt(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function rt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ut(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = ut(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function xr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ut(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = rt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = rt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, rt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Kn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + rt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $n(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(z(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(z(92));
        if (Kn(l)) {
          if (1 < l.length) throw Error(z(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: rt(l) };
  }
  function Ya(n, r) {
    var l = rt(r.value), o = rt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ia, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ia = Ia || document.createElement("div"), Ia.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ia.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Te = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, at = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    at.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function jt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = jt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(z(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(z(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(z(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(z(62));
    }
  }
  function qn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zt = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, ca = null, Er = null;
  function Ta(n) {
    if (n = _e(n)) {
      if (typeof $t != "function") throw Error(z(280));
      var r = n.stateNode;
      r && (r = mn(r), $t(n.stateNode, n.type, r));
    }
  }
  function Fi(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function tu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return eu(n, r, l);
    } finally {
      pl = !1, (ca !== null || Er !== null) && (dl(), Zl());
    }
  }
  function br(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(z(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (Tt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function fi(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (I) {
      this.onError(I);
    }
  }
  var Qa = !1, di = null, pi = !1, R = null, B = { onError: function(n) {
    Qa = !0, di = n;
  } };
  function ie(n, r, l, o, c, d, m, E, T) {
    Qa = !1, di = null, fi.apply(B, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (ie.apply(this, arguments), Qa) {
      if (Qa) {
        var U = di;
        Qa = !1, di = null;
      } else throw Error(z(198));
      pi || (pi = !0, R = U);
    }
  }
  function Ke(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ye(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ft(n) {
    if (Ke(n) !== n) throw Error(z(188));
  }
  function ot(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ke(n), r === null) throw Error(z(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ft(c), n;
          if (d === o) return ft(c), r;
          d = d.sibling;
        }
        throw Error(z(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(z(189));
        }
      }
      if (l.alternate !== o) throw Error(z(190));
    }
    if (l.tag !== 3) throw Error(z(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = ot(n), n !== null ? en(n) : null;
  }
  function en(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = en(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var un = K.unstable_scheduleCallback, ar = K.unstable_cancelCallback, Wa = K.unstable_shouldYield, Ga = K.unstable_requestPaint, qe = K.unstable_now, tt = K.unstable_getCurrentPriorityLevel, Ka = K.unstable_ImmediatePriority, nu = K.unstable_UserBlockingPriority, ru = K.unstable_NormalPriority, vl = K.unstable_LowPriority, Wu = K.unstable_IdlePriority, hl = null, Ir = null;
  function Io(n) {
    if (Ir && typeof Ir.onCommitFiberRoot == "function") try {
      Ir.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var ml = 64, fa = 4194304;
  function qa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Xa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qa(E) : (d &= m, d !== 0 && (o = qa(d)));
    } else m = l & ~c, m !== 0 ? o = qa(m) : d !== 0 && (o = qa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ku(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Ku(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = ml;
    return ml <<= 1, !(ml & 4194240) && (ml = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Qf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Qo, vi, $e, Zu, ir = !1, hi = [], Dr = null, mi = null, on = null, Yt = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), Yn = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        on = null;
        break;
      case "pointerover":
      case "pointerout":
        Yt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _e(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = iu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = iu(mi, n, r, l, o, c), !0;
      case "mouseover":
        return on = iu(on, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Yt.set(d, iu(Yt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, iu(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Ke(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ye(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Sl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Zt = o, l.target.dispatchEvent(o), Zt = null;
      } else return r = _e(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Wf() {
    ir = !1, Dr !== null && Sl(Dr) && (Dr = null), mi !== null && Sl(mi) && (mi = null), on !== null && Sl(on) && (on = null), Yt.forEach(lu), gl.forEach(lu);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Wf)));
  }
  function Ja(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < hi.length) {
      xa(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && xa(Dr, n), mi !== null && xa(mi, n), on !== null && xa(on, n), Yt.forEach(r), gl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var yi = mt.ReactCurrentBatchConfig, ba = !0;
  function eo(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 1, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 4, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (ba) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), wa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = _e(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Bt(o), n = vu(n), n !== null) if (r = Ke(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ye(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (tt()) {
          case Ka:
            return 1;
          case nu:
            return 4;
          case ru:
          case vl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : Oe, this.isPropagationStopped = Oe, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Ne = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dt = ae(Ne), xt = re({}, Ne, { view: 0, detail: 0 }), tn = ae(xt), It, it, Qt, hn = re({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (It = n.screenX - Qt.screenX, it = n.screenY - Qt.screenY) : it = It = 0, Qt = n), It);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : it;
  } }), Cl = ae(hn), Ko = re({}, hn, { dataTransfer: 0 }), Vi = ae(Ko), qo = re({}, xt, { relatedTarget: 0 }), ou = ae(qo), Gf = re({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ae(Gf), Kf = re({}, Ne, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = ae(Kf), qf = re({}, Ne, { data: 0 }), Xf = ae(qf), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Km = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Km[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return Bi;
  }
  var Zf = re({}, xt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = ae(Zf), td = re({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = ae(td), sc = re({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), iv = ae(sc), Qr = re({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $i = ae(Qr), Mn = re({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ae(Mn), nd = [9, 13, 27, 32], ao = Tt && "CompositionEvent" in window, Xo = null;
  Tt && "documentMode" in document && (Xo = document.documentMode);
  var Jo = Tt && "TextEvent" in window && !Xo, lv = Tt && (!ao || Xo && 8 < Xo && 11 >= Xo), uv = " ", cc = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && cc ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = N(), C = h = Za = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Fi(o), r = as(r, "onChange"), 0 < r.length && (l = new dt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, su = null;
  function dv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (xr(r)) return n;
  }
  function Jm(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (Tt) {
    var ad;
    if (Tt) {
      var id = "oninput" in document;
      if (!id) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), id = typeof vv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    pv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    gi && (gi.detachEvent("onpropertychange", mv), su = gi = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      rd(r, su, n, Bt(n)), tu(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (hv(), gi = r, su = l, gi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
  }
  function ey(n, r) {
    if (n === "click") return Zo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ty(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ty;
  function es(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!le.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function Rl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Rl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ny = Tt && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new dt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  Tt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Ev = vc("animationend"), Cv = vc("animationiteration"), Rv = vc("animationstart"), Tv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    cd.set(n, r), Ze(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], ry = fu.toLowerCase(), ay = fu[0].toUpperCase() + fu.slice(1);
    _a(ry, "on" + ay);
  }
  _a(Ev, "onAnimationEnd"), _a(Cv, "onAnimationIteration"), _a(Rv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Ze("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ze("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ze("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ze("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ze("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Ht(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Je.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var U = d, I = Bt(l), W = [];
      e: {
        var Y = cd.get(n);
        if (Y !== void 0) {
          var fe = dt, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = ed;
              break;
            case "focusin":
              ye = "focus", fe = ou;
              break;
            case "focusout":
              ye = "blur", fe = ou;
              break;
            case "beforeblur":
            case "afterblur":
              fe = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Vi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              fe = oc;
              break;
            case Tv:
              fe = $i;
              break;
            case "scroll":
              fe = tn;
              break;
            case "wheel":
              fe = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = av;
          }
          var Ee = (r & 4) !== 0, kn = !Ee && n === "scroll", k = Ee ? Y !== null ? Y + "Capture" : null : Y;
          Ee = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var Q = L.stateNode;
            if (L.tag === 5 && Q !== null && (L = Q, k !== null && (Q = br(x, k), Q != null && Ee.push(so(x, Q, L)))), kn) break;
            x = x.return;
          }
          0 < Ee.length && (Y = new fe(Y, ye, null, l, I), W.push({ event: Y, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", Y && l !== Zt && (ye = l.relatedTarget || l.fromElement) && (vu(ye) || ye[Ii])) break e;
          if ((fe || Y) && (Y = I.window === I ? I : (Y = I.ownerDocument) ? Y.defaultView || Y.parentWindow : window, fe ? (ye = l.relatedTarget || l.toElement, fe = U, ye = ye ? vu(ye) : null, ye !== null && (kn = Ke(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (fe = null, ye = U), fe !== ye)) {
            if (Ee = Cl, Q = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = av, Q = "onPointerLeave", k = "onPointerEnter", x = "pointer"), kn = fe == null ? Y : ti(fe), L = ye == null ? Y : ti(ye), Y = new Ee(Q, x + "leave", fe, l, I), Y.target = kn, Y.relatedTarget = L, Q = null, vu(I) === U && (Ee = new Ee(k, x + "enter", ye, l, I), Ee.target = L, Ee.relatedTarget = kn, Q = Ee), kn = Q, fe && ye) t: {
              for (Ee = fe, k = ye, x = 0, L = Ee; L; L = Tl(L)) x++;
              for (L = 0, Q = k; Q; Q = Tl(Q)) L++;
              for (; 0 < x - L; ) Ee = Tl(Ee), x--;
              for (; 0 < L - x; ) k = Tl(k), L--;
              for (; x--; ) {
                if (Ee === k || k !== null && Ee === k.alternate) break t;
                Ee = Tl(Ee), k = Tl(k);
              }
              Ee = null;
            }
            else Ee = null;
            fe !== null && xv(W, Y, fe, Ee, !1), ye !== null && kn !== null && xv(W, kn, ye, Ee, !0);
          }
        }
        e: {
          if (Y = U ? ti(U) : window, fe = Y.nodeName && Y.nodeName.toLowerCase(), fe === "select" || fe === "input" && Y.type === "file") var ge = Jm;
          else if (fv(Y)) if (pv) ge = gv;
          else {
            ge = yv;
            var Me = Zm;
          }
          else (fe = Y.nodeName) && fe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (ge = ey);
          if (ge && (ge = ge(n, U))) {
            rd(W, ge, l, I);
            break e;
          }
          Me && Me(n, Y, U), n === "focusout" && (Me = Y._wrapperState) && Me.controlled && Y.type === "number" && oa(Y, "number", Y.value);
        }
        switch (Me = U ? ti(U) : window, n) {
          case "focusin":
            (fv(Me) || Me.contentEditable === "true") && (uo = Me, ld = U, ns = null);
            break;
          case "focusout":
            ns = ld = uo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(W, l, I);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            od(W, l, I);
        }
        var ze;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Be = "onCompositionStart";
              break e;
            case "compositionend":
              Be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Be = "onCompositionUpdate";
              break e;
          }
          Be = void 0;
        }
        else io ? ov(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && (lv && l.locale !== "ko" && (io || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && io && (ze = N()) : (Za = I, h = "value" in Za ? Za.value : Za.textContent, io = !0)), Me = as(U, Be), 0 < Me.length && (Be = new Xf(Be, n, null, l, I), W.push({ event: Be, listeners: Me }), ze ? Be.data = ze : (ze = sv(l), ze !== null && (Be.data = ze)))), (ze = Jo ? cv(n, l) : qm(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && (I = new Xf("onBeforeInput", "beforeinput", null, l, I), W.push({ event: I, listeners: U }), I.data = ze));
      }
      du(W, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = br(n, l), d != null && o.unshift(so(n, d, c)), d = br(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function Tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = br(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = br(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(iy, "");
  }
  function Ec(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(z(425));
  }
  function wl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv < "u" ? function(n) {
    return kv.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Dv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var xl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + xl, ls = "__reactProps$" + xl, Ii = "__reactContainer$" + xl, us = "__reactEvents$" + xl, po = "__reactListeners$" + xl, ly = "__reactHandles$" + xl;
  function vu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ii] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Dv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = Dv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _e(n) {
    return n = n[Ei] || n[Ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(z(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var St = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function nn(n) {
    0 > ka || (n.current = St[ka], St[ka] = null, ka--);
  }
  function xe(n, r) {
    ka++, St[ka] = n.current, n.current = r;
  }
  var Cr = {}, En = Da(Cr), In = Da(!1), Wr = Cr;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    nn(In), nn(En);
  }
  function Ov(n, r, l) {
    if (En.current !== Cr) throw Error(z(168));
    xe(En, r), xe(In, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(z(108, et(n) || "Unknown", c));
    return re({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Wr = En.current, xe(En, n), xe(In, In.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(z(169));
    l ? (n = os(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, nn(In), nn(En), xe(En, n)) : nn(In), xe(In, l);
  }
  var Ci = null, ho = !1, Qi = !1;
  function xc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function bl(n) {
    ho = !0, xc(n);
  }
  function Ri() {
    if (!Qi && Ci !== null) {
      Qi = !0;
      var n = 0, r = Ot;
      try {
        var l = Ci;
        for (Ot = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), un(Ka, Ri), c;
      } finally {
        Ot = r, Qi = !1;
      }
    }
    return null;
  }
  var _l = [], kl = 0, Dl = null, Wi = 0, zn = [], Oa = 0, da = null, Ti = 1, wi = "";
  function hu(n, r) {
    _l[kl++] = Wi, _l[kl++] = Dl, Dl = n, Wi = r;
  }
  function Lv(n, r, l) {
    zn[Oa++] = Ti, zn[Oa++] = wi, zn[Oa++] = da, da = n;
    var o = Ti;
    n = wi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - kr(r) + c | l << c | o, wi = d + n;
    } else Ti = 1 << d | l << c | o, wi = n;
  }
  function bc(n) {
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Dl; ) Dl = _l[--kl], _l[kl] = null, Wi = _l[--kl], _l[kl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, wi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
  }
  var Kr = null, qr = null, dn = !1, La = null;
  function vd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, qr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, qr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, qr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = qr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (hd(n)) throw Error(z(418));
          r = Si(l.nextSibling);
          var o = Kr;
          r && Mv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Kr = n);
        }
      } else {
        if (hd(n)) throw Error(z(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Kr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function kc(n) {
    if (n !== Kr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = qr)) {
      if (hd(n)) throw ss(), Error(z(418));
      for (; r; ) vd(n, r), r = Si(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(z(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                qr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        qr = null;
      }
    } else qr = Kr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = qr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    qr = Kr = null, dn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var uy = mt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(z(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(z(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(z(284));
      if (!l._owner) throw Error(z(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(z(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, x) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function l(k, x) {
      if (!n) return null;
      for (; x !== null; ) r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Fl(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, L, Q) {
      return x === null || x.tag !== 6 ? (x = Wd(L, k.mode, Q), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function T(k, x, L, Q) {
      var ge = L.type;
      return ge === Fe ? I(k, x, L.props.children, Q, L.key) : x !== null && (x.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Dt && Nv(ge) === x.type) ? (Q = c(x, L.props), Q.ref = mu(k, x, L), Q.return = k, Q) : (Q = Hs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = mu(k, x, L), Q.return = k, Q);
    }
    function U(k, x, L, Q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = sf(L, k.mode, Q), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function I(k, x, L, Q, ge) {
      return x === null || x.tag !== 7 ? (x = el(L, k.mode, Q, ge), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function W(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wd("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case be:
            return L = Hs(x.type, x.key, x.props, null, k.mode, L), L.ref = mu(k, null, x), L.return = k, L;
          case ct:
            return x = sf(x, k.mode, L), x.return = k, x;
          case Dt:
            var Q = x._init;
            return W(k, Q(x._payload), L);
        }
        if (Kn(x) || Re(x)) return x = el(x, k.mode, L, null), x.return = k, x;
        Dc(k, x);
      }
      return null;
    }
    function Y(k, x, L, Q) {
      var ge = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ge !== null ? null : E(k, x, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            return L.key === ge ? T(k, x, L, Q) : null;
          case ct:
            return L.key === ge ? U(k, x, L, Q) : null;
          case Dt:
            return ge = L._init, Y(
              k,
              x,
              ge(L._payload),
              Q
            );
        }
        if (Kn(L) || Re(L)) return ge !== null ? null : I(k, x, L, Q, null);
        Dc(k, L);
      }
      return null;
    }
    function fe(k, x, L, Q, ge) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return k = k.get(L) || null, E(x, k, "" + Q, ge);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case be:
            return k = k.get(Q.key === null ? L : Q.key) || null, T(x, k, Q, ge);
          case ct:
            return k = k.get(Q.key === null ? L : Q.key) || null, U(x, k, Q, ge);
          case Dt:
            var Me = Q._init;
            return fe(k, x, L, Me(Q._payload), ge);
        }
        if (Kn(Q) || Re(Q)) return k = k.get(L) || null, I(x, k, Q, ge, null);
        Dc(x, Q);
      }
      return null;
    }
    function ye(k, x, L, Q) {
      for (var ge = null, Me = null, ze = x, Be = x = 0, er = null; ze !== null && Be < L.length; Be++) {
        ze.index > Be ? (er = ze, ze = null) : er = ze.sibling;
        var Nt = Y(k, ze, L[Be], Q);
        if (Nt === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Nt.alternate === null && r(k, ze), x = d(Nt, x, Be), Me === null ? ge = Nt : Me.sibling = Nt, Me = Nt, ze = er;
      }
      if (Be === L.length) return l(k, ze), dn && hu(k, Be), ge;
      if (ze === null) {
        for (; Be < L.length; Be++) ze = W(k, L[Be], Q), ze !== null && (x = d(ze, x, Be), Me === null ? ge = ze : Me.sibling = ze, Me = ze);
        return dn && hu(k, Be), ge;
      }
      for (ze = o(k, ze); Be < L.length; Be++) er = fe(ze, k, Be, L[Be], Q), er !== null && (n && er.alternate !== null && ze.delete(er.key === null ? Be : er.key), x = d(er, x, Be), Me === null ? ge = er : Me.sibling = er, Me = er);
      return n && ze.forEach(function(Vl) {
        return r(k, Vl);
      }), dn && hu(k, Be), ge;
    }
    function Ee(k, x, L, Q) {
      var ge = Re(L);
      if (typeof ge != "function") throw Error(z(150));
      if (L = ge.call(L), L == null) throw Error(z(151));
      for (var Me = ge = null, ze = x, Be = x = 0, er = null, Nt = L.next(); ze !== null && !Nt.done; Be++, Nt = L.next()) {
        ze.index > Be ? (er = ze, ze = null) : er = ze.sibling;
        var Vl = Y(k, ze, Nt.value, Q);
        if (Vl === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Vl.alternate === null && r(k, ze), x = d(Vl, x, Be), Me === null ? ge = Vl : Me.sibling = Vl, Me = Vl, ze = er;
      }
      if (Nt.done) return l(
        k,
        ze
      ), dn && hu(k, Be), ge;
      if (ze === null) {
        for (; !Nt.done; Be++, Nt = L.next()) Nt = W(k, Nt.value, Q), Nt !== null && (x = d(Nt, x, Be), Me === null ? ge = Nt : Me.sibling = Nt, Me = Nt);
        return dn && hu(k, Be), ge;
      }
      for (ze = o(k, ze); !Nt.done; Be++, Nt = L.next()) Nt = fe(ze, k, Be, Nt.value, Q), Nt !== null && (n && Nt.alternate !== null && ze.delete(Nt.key === null ? Be : Nt.key), x = d(Nt, x, Be), Me === null ? ge = Nt : Me.sibling = Nt, Me = Nt);
      return n && ze.forEach(function(hh) {
        return r(k, hh);
      }), dn && hu(k, Be), ge;
    }
    function kn(k, x, L, Q) {
      if (typeof L == "object" && L !== null && L.type === Fe && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            e: {
              for (var ge = L.key, Me = x; Me !== null; ) {
                if (Me.key === ge) {
                  if (ge = L.type, ge === Fe) {
                    if (Me.tag === 7) {
                      l(k, Me.sibling), x = c(Me, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Me.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Dt && Nv(ge) === Me.type) {
                    l(k, Me.sibling), x = c(Me, L.props), x.ref = mu(k, Me, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, Me);
                  break;
                } else r(k, Me);
                Me = Me.sibling;
              }
              L.type === Fe ? (x = el(L.props.children, k.mode, Q, L.key), x.return = k, k = x) : (Q = Hs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = mu(k, x, L), Q.return = k, k = Q);
            }
            return m(k);
          case ct:
            e: {
              for (Me = L.key; x !== null; ) {
                if (x.key === Me) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(k, x.sibling), x = c(x, L.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = sf(L, k.mode, Q), x.return = k, k = x;
            }
            return m(k);
          case Dt:
            return Me = L._init, kn(k, x, Me(L._payload), Q);
        }
        if (Kn(L)) return ye(k, x, L, Q);
        if (Re(L)) return Ee(k, x, L, Q);
        Dc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = Wd(L, k.mode, Q), x.return = k, k = x), m(k)) : l(k, x);
    }
    return kn;
  }
  var wn = yu(!0), ue = yu(!1), pa = Da(null), Xr = null, mo = null, yd = null;
  function gd() {
    yd = mo = Xr = null;
  }
  function Sd(n) {
    var r = pa.current;
    nn(pa), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Xr = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Xr === null) throw Error(z(308));
      mo = n, Xr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Et & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var I = n.alternate;
      I !== null && (I = I.updateQueue, E = I.lastBaseUpdate, E !== m && (E === null ? I.firstBaseUpdate = U : E.next = U, I.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, I = U = T = null, E = d;
      do {
        var Y = E.lane, fe = E.eventTime;
        if ((o & Y) === Y) {
          I !== null && (I = I.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (Y = r, fe = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  W = ye.call(fe, W, Y);
                  break e;
                }
                W = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, Y = typeof ye == "function" ? ye.call(fe, W, Y) : ye, Y == null) break e;
                W = re({}, W, Y);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else fe = { eventTime: fe, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, I === null ? (U = I = fe, T = W) : I = I.next = fe, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (I === null && (T = W), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = I, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(z(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, xi = Da(fs), ds = Da(fs), ps = Da(fs);
  function Su(n) {
    if (n === fs) throw Error(z(174));
    return n;
  }
  function xd(n, r) {
    switch (xe(ps, r), xe(ds, n), xe(xi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    nn(xi), xe(xi, r);
  }
  function Eu() {
    nn(xi), nn(ds), nn(ps);
  }
  function Av(n) {
    Su(ps.current);
    var r = Su(xi.current), l = sa(r, n.type);
    r !== l && (xe(ds, n), xe(xi, l));
  }
  function Lc(n) {
    ds.current === n && (nn(xi), nn(ds));
  }
  var gn = Da(0);
  function Mc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vs = [];
  function ke() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var st = mt.ReactCurrentDispatcher, Lt = mt.ReactCurrentBatchConfig, Wt = 0, Mt = null, Un = null, Jn = null, Nc = !1, hs = !1, Cu = 0, $ = 0;
  function kt() {
    throw Error(z(321));
  }
  function je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Wt = d, Mt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, st.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(z(301));
        d += 1, Jn = Un = null, r.updateQueue = null, st.current = Kc, n = l(o, c);
      } while (hs);
    }
    if (st.current = bu, r = Un !== null && Un.next !== null, Wt = 0, Jn = Un = Mt = null, Nc = !1, r) throw Error(z(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function xn() {
    if (Un === null) {
      var n = Mt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Mt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(z(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Mt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function qi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Nl(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(z(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var I = U.lane;
        if ((Wt & I) === I) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var W = {
            lane: I,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, Mt.lanes |= I, Di |= I;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Mt.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(z(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Mt, o = xn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(z(349));
      Wt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Mt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return xn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = xn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && je(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function $c(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Yc(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Ic(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, wu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Wt & 21 ? (ei(l, r) || (l = qu(), Mt.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Lt.transition;
    Lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, Lt.transition = o;
    }
  }
  function _d() {
    return xn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) jv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), qt(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) jv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), qt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Mt || r !== null && r === Mt;
  }
  function jv(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function qt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  var bu = { readContext: Ma, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Gc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Mt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Mt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(z(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(z(349));
      Wt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = wi, o = Ti;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = $++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Ma,
    useCallback: Qc,
    useContext: Ma,
    useEffect: ms,
    useImperativeHandle: Ic,
    useInsertionEffect: Yc,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: Nl,
    useRef: Bc,
    useState: function() {
      return Nl(qi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = xn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = Nl(qi)[0], r = xn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Ma, useCallback: Qc, useContext: Ma, useEffect: ms, useImperativeHandle: Ic, useInsertionEffect: Yc, useLayoutEffect: ys, useMemo: Wc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(qi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = xn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(qi)[0], r = xn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ke(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Nn(r) ? Wr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Nn(r) ? Wr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && qc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += lt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Ou = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([this]) : Al.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = mt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? ue(r, null, l, o) : wn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && bc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Xe(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function ws(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xe(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, xe(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, xe(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Nn(l) ? Wr : En.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && bc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function $v(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Na(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ma(U) : (U = Nn(l) ? Wr : En.current, U = Gr(r, U));
      var I = l.getDerivedStateFromProps, W = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Hv(r, m, o, U), ha = !1;
      var Y = r.memoizedState;
      m.state = Y, cs(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || In.current || ha ? (typeof I == "function" && (kd(r, l, I, o), T = r.memoizedState), (E = ha || Fv(r, l, E, o, Y, T, U)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ri(r.type, E), m.props = U, W = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Nn(l) ? Wr : En.current, T = Gr(r, T));
      var fe = l.getDerivedStateFromProps;
      (I = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || Y !== T) && Hv(r, m, o, T), ha = !1, Y = r.memoizedState, m.state = Y, cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== W || Y !== ye || In.current || ha ? (typeof fe == "function" && (kd(r, l, fe, o), ye = r.memoizedState), (U = ha || Fv(r, l, U, o, Y, ye, T) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xs(n, r, l, o, d, c);
  }
  function xs(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), za(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = wn(r, n.child, null, d), r.child = wn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), xd(n, r.containerInfo);
  }
  function Yv(n, r, l, o, c) {
    return Ol(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), xe(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Hl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Zc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Iv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Fl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Hl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && Gi(o), wn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(z(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && wn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(z(419)), o = Dd(d, o, void 0), bs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Id(), o = Dd(Error(z(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = hy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qr = Si(c.nextSibling), Kr = r, dn = !0, La = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = wi, zn[Oa++] = da, Ti = n.id, wi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function bi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (xe(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Mc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Mc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Na(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(z(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ol();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Nn(r.type) && Xn(r);
        break;
      case 4:
        xd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        xe(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (xe(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (xe(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        xe(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), xe(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, Qv, Wv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, Qv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(xi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      ln(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Qe.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Qe.hasOwnProperty(U) ? (T != null && U === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Zn(r), null;
      case 1:
        return Nn(r.type) && vo(), Zn(r), null;
      case 3:
        return o = r.stateNode, Eu(), nn(In), nn(En), ke(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Lu(La), La = null))), jn(n, r), Zn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Qv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(z(166));
            return Zn(r), null;
          }
          if (n = Su(xi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Ht(rs[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Vn(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                gr(o, d), Ht("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Qe.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), si(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[ls] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = qn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Ht(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = $n(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Qe.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && We(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + rt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(z(166));
          if (l = Su(ps.current), Su(xi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (nn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && qr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ol(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(z(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(z(317));
              d[Ei] = r;
            } else Ol(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Id())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return Sd(r.type._context), Zn(r), null;
      case 17:
        return Nn(r.type) && vo(), Zn(r), null;
      case 19:
        if (nn(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return xe(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && qe() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * qe() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qe(), r.sibling = null, l = gn.current, xe(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(z(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Nn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), nn(In), nn(En), ke(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (nn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(z(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nn(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, Tr = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var Kv = !1;
  function qv(n, r) {
    if (is = ba, n = ts(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, I = 0, W = n, Y = null;
          t: for (; ; ) {
            for (var fe; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (fe = W.firstChild) !== null; )
              Y = W, W = fe;
            for (; ; ) {
              if (W === n) break t;
              if (Y === l && ++U === c && (E = m), Y === d && ++I === o && (T = m), (fe = W.nextSibling) !== null) break;
              W = Y, Y = W.parentNode;
            }
            W = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, ba = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ri(r.type, Ee), kn);
              k.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(z(163));
        }
      } catch (Q) {
        pn(r, r.return, Q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return ye = Kv, Kv = !1, ye;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[ls], delete r[us], delete r[po], delete r[ly])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Xi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var bn = null, Mr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) Xv(n, r, l), l = l.sibling;
  }
  function Xv(n, r, l) {
    if (Ir && typeof Ir.onCommitFiberUnmount == "function") try {
      Ir.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || Eo(l, r);
      case 6:
        var o = bn, c = Mr;
        bn = null, Nr(n, r, l), bn = o, Mr = c, bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Mr, bn = l.stateNode.containerInfo, Mr = !0, Nr(n, r, l), bn = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!Tr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Nr(n, r, l), Tr = o) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new oy()), r.forEach(function(o) {
        var c = uh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Mr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Mr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(z(160));
        Xv(d, m, c), bn = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        pn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
          try {
            Os(5, n, n.return);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), qn(E, m);
            var U = qn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var I = T[m], W = T[m + 1];
              I === "style" ? Jt(c, W) : I === "dangerouslySetInnerHTML" ? ci(c, W) : I === "children" ? ee(c, W) : We(c, I, W, U);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Rn(c, !!d.multiple, fe, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(z(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Ee) {
          pn(n, n.return, Ee);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = qe())), o & 4 && Jv(n);
        break;
      case 22:
        if (I = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (U = Tr) || I, ai(r, n), Tr = U) : ai(r, n), ea(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !I && n.mode & 1) for (ve = n, I = n.child; I !== null; ) {
            for (W = ve = I; ve !== null; ) {
              switch (Y = ve, fe = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, Y, Y.return);
                  break;
                case 1:
                  Eo(Y, Y.return);
                  var ye = Y.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      pn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  Eo(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    Ns(W);
                    continue;
                  }
              }
              fe !== null ? (fe.return = Y, ve = fe) : Ns(W);
            }
            I = I.sibling;
          }
          e: for (I = null, W = n; ; ) {
            if (W.tag === 5) {
              if (I === null) {
                I = W;
                try {
                  c = W.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = jt("display", m));
                } catch (Ee) {
                  pn(n, n.return, Ee);
                }
              }
            } else if (W.tag === 6) {
              if (I === null) try {
                W.stateNode.nodeValue = U ? "" : W.memoizedProps;
              } catch (Ee) {
                pn(n, n.return, Ee);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              I === W && (I = null), W = W.return;
            }
            I === W && (I = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(z(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Xi(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Xi(n);
            _i(n, E, m);
            break;
          default:
            throw Error(z(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    ve = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = Ds;
          var U = Tr;
          if (Ds = m, (Tr = T) && !U) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : T !== null ? (T.return = m, ve = T) : Pd(c);
          for (; d !== null; ) ve = d, Hd(d), d = d.sibling;
          ve = c, Ds = E, Tr = U;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var I = U.memoizedState;
                  if (I !== null) {
                    var W = I.dehydrated;
                    W !== null && Ja(W);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (Y) {
          pn(r, r.return, Y);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ns(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Pd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var cy = Math.ceil, Ul = mt.ReactCurrentDispatcher, Du = mt.ReactCurrentOwner, or = mt.ReactCurrentBatchConfig, Et = 0, Wn = null, Fn = null, sr = 0, ma = 0, Co = Da(0), _n = 0, zs = null, Di = 0, Ro = 0, af = 0, Us = null, ta = null, Vd = 0, To = 1 / 0, ya = null, wo = !1, Ou = null, Al = null, lf = !1, Ji = null, As = 0, jl = 0, xo = null, js = -1, wr = 0;
  function Hn() {
    return Et & 6 ? qe() : js !== -1 ? js : js = qe();
  }
  function Oi(n) {
    return n.mode & 1 ? Et & 2 && sr !== 0 ? sr & -sr : uy.transition !== null ? (wr === 0 && (wr = qu()), wr) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < jl) throw jl = 0, xo = null, Error(z(185));
    Hi(n, l, o), (!(Et & 2) || n !== Wn) && (n === Wn && (!(Et & 2) && (Ro |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && Et === 0 && !(r.mode & 1) && (To = qe() + 500, ho && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Xa(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? bl(Bd.bind(null, n)) : xc(Bd.bind(null, n)), co(function() {
        !(Et & 6) && Ri();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = Ka;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = sh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, wr = 0, Et & 6) throw Error(z(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Xa(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Et;
      Et |= 2;
      var d = th();
      (Wn !== n || sr !== r) && (ya = null, To = qe() + 500, Zi(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      gd(), Ul.current = d, Et = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, Zi(n, 0), ii(n, o), na(n, qe()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !fy(c) && (r = of(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, Zi(n, 0), ii(n, o), na(n, qe()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(z(345));
          case 2:
            Nu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Vd + 500 - qe(), 10 < r)) {
              if (Xa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Nu.bind(null, n, ta, ya), r);
              break;
            }
            Nu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Nu.bind(null, n, ta, ya), o);
              break;
            }
            Nu(n, ta, ya);
            break;
          case 5:
            Nu(n, ta, ya);
            break;
          default:
            throw Error(z(329));
        }
      }
    }
    return na(n, qe()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (Zi(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function fy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Et & 6) throw Error(z(327));
    bo();
    var r = Xa(n, 0);
    if (!(r & 1)) return na(n, qe()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, Zi(n, 0), ii(n, r), na(n, qe()), l;
    if (l === 6) throw Error(z(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, ta, ya), na(n, qe()), null;
  }
  function $d(n, r) {
    var l = Et;
    Et |= 1;
    try {
      return n(r);
    } finally {
      Et = l, Et === 0 && (To = qe() + 500, ho && Ri());
    }
  }
  function Mu(n) {
    Ji !== null && Ji.tag === 0 && !(Et & 6) && bo();
    var r = Et;
    Et |= 1;
    var l = or.transition, o = Ot;
    try {
      if (or.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = o, or.transition = l, Et = r, !(Et & 6) && Ri();
    }
  }
  function Yd() {
    ma = Co.current, nn(Co);
  }
  function Zi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), nn(In), nn(En), ke();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          nn(gn);
          break;
        case 19:
          nn(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Fl(n.current, null), sr = ma = r, _n = 0, zs = null, af = Ro = Di = 0, ta = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Fn;
      try {
        if (gd(), st.current = bu, Nc) {
          for (var o = Mt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Wt = 0, Jn = Un = Mt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, I = E, W = I.tag;
            if (!(I.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var Y = I.alternate;
              Y ? (I.updateQueue = Y.updateQueue, I.memoizedState = Y.memoizedState, I.lanes = Y.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var fe = Vv(m);
            if (fe !== null) {
              fe.flags &= -257, zl(fe, m, E, d, r), fe.mode & 1 && Md(d, U, r), r = fe, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, U, r), Id();
                break e;
              }
              T = Error(z(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = Vv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), zl(kn, m, E, d, r), Gi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Pv(d, T, r);
                Uv(d, k);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Al === null || !Al.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Q = Ld(d, E, r);
                  Uv(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ge) {
        r = ge, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Ul.current;
    return Ul.current = bu, n === null ? bu : n;
  }
  function Id() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || !(Di & 268435455) && !(Ro & 268435455) || ii(Wn, sr);
  }
  function of(n, r) {
    var l = Et;
    Et |= 2;
    var o = th();
    (Wn !== n || sr !== r) && (ya = null, Zi(n, r));
    do
      try {
        dy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (gd(), Et = l, Ul.current = o, Fn !== null) throw Error(z(261));
    return Wn = null, sr = 0, _n;
  }
  function dy() {
    for (; Fn !== null; ) rh(Fn);
  }
  function nh() {
    for (; Fn !== null && !Wa(); ) rh(Fn);
  }
  function rh(n) {
    var r = oh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Fn = r, Du.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      } else if (l = Gv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function Nu(n, r, l) {
    var o = Ot, c = or.transition;
    try {
      or.transition = null, Ot = 1, py(n, r, l, o);
    } finally {
      or.transition = c, Ot = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      bo();
    while (Ji !== null);
    if (Et & 6) throw Error(z(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(z(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, sh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Ot;
      Ot = 1;
      var E = Et;
      Et |= 4, Du.current = null, qv(n, l), Fd(l, n), lo(pu), ba = !!is, pu = is = null, n.current = l, sy(l), Ga(), Et = E, Ot = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (Al = null), Io(l.stateNode), na(n, qe()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === xo ? jl++ : (jl = 0, xo = n) : jl = 0, Ri(), null;
  }
  function bo() {
    if (Ji !== null) {
      var n = Ju(As), r = or.transition, l = Ot;
      try {
        if (or.transition = null, Ot = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Et & 6) throw Error(z(331));
          var c = Et;
          for (Et |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ve = U; ve !== null; ) {
                    var I = ve;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, I, d);
                    }
                    var W = I.child;
                    if (W !== null) W.return = I, ve = W;
                    else for (; ve !== null; ) {
                      I = ve;
                      var Y = I.sibling, fe = I.return;
                      if (rf(I), I === U) {
                        ve = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = fe, ve = Y;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var kn = Ee.sibling;
                      Ee.sibling = null, Ee = kn;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ve = k;
                break e;
              }
              ve = d.return;
            }
          }
          var x = n.current;
          for (ve = x; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ve = L;
            else e: for (m = x; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ge) {
                pn(E, E.return, ge);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var Q = E.sibling;
              if (Q !== null) {
                Q.return = E.return, ve = Q;
                break e;
              }
              ve = E.return;
            }
          }
          if (Et = c, Ri(), Ir && typeof Ir.onPostCommitFiberRoot == "function") try {
            Ir.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ot = l, or.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = _u(l, r), r = Pv(n, r, 1), n = Ll(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Al === null || !Al.has(o))) {
          n = _u(l, n), n = Ld(r, n, 1), r = Ll(r, n, 1), n = Hn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > qe() - Vd ? Zi(n, 0) : af |= l), na(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function hy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function uh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(z(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || In.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, _s(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Lv(r, Wi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Na(n, r), n = r.pendingProps;
        var c = Gr(r, En.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = qc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = xs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && bc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Na(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = ri(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = $v(null, r, o, n, l);
              break e;
            case 11:
              r = Zr(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(z(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), $v(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(z(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(z(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(z(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (qr = Si(r.stateNode.containerInfo.firstChild), Kr = r, dn = !0, La = null, l = ue(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ol(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Nd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return xd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = wn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Zr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, xe(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !In.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Ki(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var I = U.pending;
                      I === null ? T.next = T : (T.next = I.next, I.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(z(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Ma(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), ku(n, r, o, c, l);
      case 15:
        return Xe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Nn(o) ? (n = !0, Xn(r)) : n = !1, yn(r, l), Xc(r, o, c), Rs(r, o, c, l), xs(null, r, o, !0, n, l);
      case 19:
        return bi(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(z(156, r.tag));
  };
  function sh(n, r) {
    return un(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === bt) return 11;
      if (n === _t) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Fe:
        return el(l.children, c, d, r);
      case rn:
        m = 8, c |= 8;
        break;
      case Ft:
        return n = Aa(12, l, r, c | 2), n.elementType = Ft, n.lanes = d, n;
      case De:
        return n = Aa(13, l, r, c), n.elementType = De, n.lanes = d, n;
      case At:
        return n = Aa(19, l, r, c), n.elementType = At, n.lanes = d, n;
      case Ce:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Xt:
            m = 10;
            break e;
          case an:
            m = 9;
            break e;
          case bt:
            m = 11;
            break e;
          case _t:
            m = 14;
            break e;
          case Dt:
            m = 16, o = null;
            break e;
        }
        throw Error(z(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function gy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ct, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Ke(n) !== n || n.tag !== 1) throw Error(z(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(z(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = Ki(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function dh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function qd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = qd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(z(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = qd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        ff(null, n, null, null);
      }), r[Ii] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $e();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Ii] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = df(T);
        E.call(U);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Ii] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = Sy(l, r, n, c, o);
    return df(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qa(r.pendingLanes);
          l !== 0 && (Pi(r, l | 1), na(r, qe()), !(Et & 6) && (To = qe() + 500, Ri()));
        }
        break;
      case 13:
        Mu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, $e = function() {
    return Ot;
  }, Zu = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(z(90));
              xr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, eu = $d, dl = Mu;
  var Ey = { usingClientEntryPoint: !1, Events: [_e, ti, mn, Fi, Zl, $d] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      hl = Pl.inject(vh), Ir = Pl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(z(200));
    return gy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(z(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Ii] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new qd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(z(188)) : (n = Object.keys(n).join(","), Error(z(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Mu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(z(200));
    return Ps(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(z(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Ii] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(z(200));
    return Ps(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(z(40));
    return n._reactRootContainer ? (Mu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ii] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = $d, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(z(200));
    if (n == null || n._reactInternals === void 0) throw Error(z(38));
    return Ps(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var $a = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function ik() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var J = ev(), K = oT(), z = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Je = !1;
    function Qe(e) {
      Je = e;
    }
    function Ze(e) {
      if (!Je) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Tt("warn", e, a);
      }
    }
    function S(e) {
      if (!Je) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Tt("error", e, a);
      }
    }
    function Tt(e, t, a) {
      {
        var i = z.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var le = 0, se = 1, Ue = 2, Z = 3, me = 4, te = 5, Ve = 6, vt = 7, ht = 8, fn = 9, pt = 10, We = 11, mt = 12, be = 13, ct = 14, Fe = 15, rn = 16, Ft = 17, Xt = 18, an = 19, bt = 21, De = 22, At = 23, _t = 24, Dt = 25, Ce = !0, X = !1, Re = !1, re = !1, _ = !1, P = !0, He = !0, Ae = !0, lt = !0, nt = /* @__PURE__ */ new Set(), et = {}, rt = {};
    function ut(e, t) {
      Vt(e, t), Vt(e + "Capture", t);
    }
    function Vt(e, t) {
      et[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), et[e] = t;
      {
        var a = e.toLowerCase();
        rt[a] = e, e === "onDoubleClick" && (rt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xr = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function Yr(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function si(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function Kn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    var $n = 0, gr = 1, Ya = 2, Ln = 3, Sr = 4, sa = 5, Ia = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Te = new RegExp("^[" + ci + "][" + ee + "]*$"), at = {}, jt = {};
    function Jt(e) {
      return xr.call(jt, e) ? !0 : xr.call(at, e) ? !1 : Te.test(e) ? (jt[e] = !0, !0) : (at[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ln(e, t, a, i) {
      if (a !== null && a.type === $n)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function qn(e, t, a, i) {
      if (t === null || typeof t > "u" || ln(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case Ia:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zt(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Bt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      $t[e] = new Bt(
        e,
        $n,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fi = "xlinkHref";
    $t[Fi] = new Bt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function dl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && dl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : qn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (qn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return qn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Jt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function br(e, t, a, i) {
      var u = Zt(t);
      if (!vn(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
          if (Jt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === Ln || b === Sr && a === !0 ? w = "" : (Bn(a, y), w = "" + a, u.sanitizeURL && dl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Ke = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), ft = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), en = Symbol.for("react.legacy_hidden"), un = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Wa = Symbol.iterator, Ga = "@@iterator";
    function qe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wa && e[Wa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var tt = Object.assign, Ka = 0, nu, ru, vl, Wu, hl, Ir, Io;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function lc() {
      {
        if (Ka === 0) {
          nu = console.log, ru = console.info, vl = console.warn, Wu = console.error, hl = console.group, Ir = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ka++;
      }
    }
    function uc() {
      {
        if (Ka--, Ka === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, e, {
              value: nu
            }),
            info: tt({}, e, {
              value: ru
            }),
            warn: tt({}, e, {
              value: vl
            }),
            error: tt({}, e, {
              value: Wu
            }),
            group: tt({}, e, {
              value: hl
            }),
            groupCollapsed: tt({}, e, {
              value: Ir
            }),
            groupEnd: tt({}, e, {
              value: Io
            })
          });
        }
        Ka < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = z.ReactCurrentDispatcher, ml;
    function fa(e, t, a) {
      {
        if (ml === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ml = i && i[1] || "";
          }
        return `
` + ml + e;
      }
    }
    var qa = !1, Xa;
    {
      var Ku = typeof WeakMap == "function" ? WeakMap : Map;
      Xa = new Ku();
    }
    function au(e, t) {
      if (!e || qa)
        return "";
      {
        var a = Xa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      qa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Xa.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        qa = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? fa(w) : "";
      return typeof e == "function" && Xa.set(e, M), M;
    }
    function yl(e, t, a) {
      return au(e, !0);
    }
    function qu(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ie:
          return fa("Suspense");
        case he:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return qu(e.render);
          case Ke:
            return Hi(e.type, t, a);
          case Ye: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case te:
          return fa(e.type);
        case rn:
          return fa("Lazy");
        case be:
          return fa("Suspense");
        case an:
          return fa("SuspenseList");
        case le:
        case Ue:
        case Fe:
          return qu(e.type);
        case We:
          return qu(e.type.render);
        case se:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Pi(e) {
      try {
        var t = "", a = e;
        do
          t += Qf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ot(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case rr:
          return "Portal";
        case di:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case ie:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case pi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case B:
            return Ot(e, e.render, "ForwardRef");
          case Ke:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function $e(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case fn:
          var i = a;
          return vi(i) + ".Consumer";
        case pt:
          var u = a;
          return vi(u._context) + ".Provider";
        case Xt:
          return "DehydratedFragment";
        case We:
          return Qo(a, a.render, "ForwardRef");
        case vt:
          return "Fragment";
        case te:
          return a;
        case me:
          return "Portal";
        case Z:
          return "Root";
        case Ve:
          return "Text";
        case rn:
          return wt(a);
        case ht:
          return a === Qa ? "StrictMode" : "Mode";
        case De:
          return "Offscreen";
        case mt:
          return "Profiler";
        case bt:
          return "Scope";
        case be:
          return "Suspense";
        case an:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case se:
        case le:
        case Ft:
        case Ue:
        case ct:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = z.ReactDebugCurrentFrame, ir = null, hi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return $e(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Pi(ir);
    }
    function on() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function Yt(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function gl() {
      return ir;
    }
    function Yn(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Wf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xa(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      Sl(e) || (e._valueTracker = xa(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ba(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, El = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && br(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !El && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), q(a, t);
    }
    function q(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), C(f, p);
          }
        }
      }
    }
    function Oe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ba(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var ae = !1, Ne = !1, dt = !1;
    function xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? J.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ne || (Ne = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dt || (dt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function tn(e, t) {
      t.value != null && e.setAttribute("value", Or(wa(t.value)));
    }
    var It = Array.isArray;
    function it(e) {
      return It(e);
    }
    var Qt;
    Qt = !1;
    function hn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cl = ["value", "defaultValue"];
    function Ko(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = it(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(wa(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function qo(e, t) {
      return tt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (it(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function nv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Km(e, t) {
      nv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Jf;
        default:
          return Bi;
      }
    }
    function td(e, t) {
      return e == null || e === Bi ? ed(t) : e === Zf && t === "foreignObject" ? Bi : e;
    }
    var av = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, iv = av(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, $i = 3, Mn = 8, Yi = 9, nd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Jo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      uv.forEach(function(t) {
        Jo[lv(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function io(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, Xm = /^-ms-/, fv = /-(.)/g, rd = /;\s*$/, gi = {}, su = {}, dv = !1, Zo = !1, Jm = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Jm(e.replace(Xm, "ms-"))
        ));
      }, ad = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : qm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var mv = cv;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || mv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ty(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ey(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, es = tt({
      menuitem: !0
    }, ei), Sv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ts = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, ny = new RegExp("^(aria)-[" + ee + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function ld(e, t) {
      {
        if (xr.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ny.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Rl(e, t) || ns(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, sd = /^on./, vc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ee + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      cu = function(e, t, a, i) {
        if (xr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (sd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = Zt(t), y = v !== null && v.type === $n;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && ln(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : ln(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Rl(e, t) || Rv(e, t, a);
    }
    var cd = 1, hc = 2, _a = 4, fd = cd | hc | _a, fu = null;
    function ry(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ay() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var mc = null, du = null, Ht = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Ht ? Ht.push(e) : Ht = [e] : du = e;
    }
    function wv() {
      return du !== null || Ht !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Ht;
        if (du = null, Ht = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, Tl = !1;
    function xv() {
      var e = wv();
      e && (as(), Sc());
    }
    function bv(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return so(e, t, a);
      } finally {
        Tl = !1, xv();
      }
    }
    function iy(e, t, a) {
      so = e, as = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (On)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          pd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var oe = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, F(), a.apply(i, oe), w = !1;
        }
        var we, Rt = !1, yt = !1;
        function D(O) {
          if (we = O.error, Rt = !0, we === null && O.colno === 0 && O.lineno === 0 && (yt = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && w && (Rt ? yt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", D), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var kv = Rc, co = !1, Tc = null, fo = !1, Si = null, Dv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function xl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, kv.apply(Dv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (xl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Si = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Si;
        throw fo = !1, Si = null, e;
      }
    }
    function Ii() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function ly(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), St = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), nn = (
      /*                     */
      64
    ), xe = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), In = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Xn = (
      /*                */
      65536
    ), wc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), xc = (
      /*                */
      8388608
    ), bl = (
      /*               */
      16777216
    ), Ri = (
      /*              */
      33554432
    ), _l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      St | In | 0
    ), kl = mn | St | ka | Da | En | Gr | Nn, Dl = St | nn | En | Nn, Wi = Wr | ka, zn = Qi | xc | ho, Oa = z.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function Ti(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function Lv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === se) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", $e(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function bc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = _c(e);
      return t !== null ? qr(t) : null;
    }
    function qr(e) {
      if (e.tag === te || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = qr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = _c(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === te || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = K.unstable_scheduleCallback, Mv = K.unstable_cancelCallback, hd = K.unstable_shouldYield, md = K.unstable_requestPaint, Qn = K.unstable_now, kc = K.unstable_getCurrentPriorityLevel, ss = K.unstable_ImmediatePriority, Ol = K.unstable_UserBlockingPriority, Gi = K.unstable_NormalPriority, uy = K.unstable_LowPriority, mu = K.unstable_IdlePriority, Dc = K.unstable_yieldValue, Nv = K.unstable_setDisableYieldValue, yu = null, wn = null, ue = null, pa = !1, Xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = tt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Ma
        })), yu = t.inject(e), wn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (wn && typeof wn.onScheduleFiberRoot == "function")
        try {
          wn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & xe) === xe;
          if (Ae) {
            var i;
            switch (t) {
              case Lr:
                i = ss;
                break;
              case bi:
                i = Ol;
                break;
              case Na:
                i = Gi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = Gi;
                break;
            }
            wn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (wn && typeof wn.onPostCommitFiberRoot == "function")
        try {
          wn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
          wn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (Nv(e), Qe(e)), wn && typeof wn.setStrictMode == "function")
        try {
          wn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      ue = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function Rd() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function va(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function ha() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function Td(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function xi(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function ps() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function Su(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function xd() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function Eu(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function Av() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Lc() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function gn(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Mc(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var ke = (
      /*                         */
      0
    ), st = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), Wt = (
      /*               */
      8
    ), Mt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : hs, Jn = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Nc | 0) | 0;
    }
    var Cu = 31, $ = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), xn = (
      /*                     */
      16
    ), qi = (
      /*                */
      32
    ), Nl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Ic = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), bd = wu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), xu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & je)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & xn)
          return "Default";
        if (e & qi)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var qt = -1, bu = Ru, Gc = wu;
    function Cs(e) {
      switch (zl(e)) {
        case je:
          return je;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case xn:
          return xn;
        case qi:
          return qi;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Yc:
          return e & Nl;
        case wu:
        case Ic:
        case gs:
        case Qc:
        case Wc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case xu:
          return xu;
        case Jr:
          return Jr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = Cs(p);
        else {
          var v = f & s;
          v !== $ && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = Cs(y) : s !== $ && (i = Cs(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = zl(i), b = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === xn && (b & Nl) !== $
        )
          return t;
      }
      (i & ni) !== $ && (i |= a & xn);
      var w = e.entangledLanes;
      if (w !== $)
        for (var M = e.entanglements, A = i & w; A > 0; ) {
          var F = An(A), oe = 1 << F;
          i |= M[F], A &= ~oe;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case je:
        case Ml:
        case ni:
          return t + 250;
        case Rr:
        case xn:
        case qi:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Yc:
          return t + 5e3;
        case wu:
        case Ic:
        case gs:
        case Qc:
        case Wc:
          return qt;
        case Ss:
        case Es:
        case xu:
        case Jr:
          return qt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function qc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === qt ? ((v & i) === $ || (v & u) !== $) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== $ ? t : t & Jr ? Jr : $;
    }
    function Hv(e) {
      return (e & je) !== $;
    }
    function Rs(e) {
      return (e & _d) !== $;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Dd(e) {
      var t = je | ni | xn;
      return (e & t) === $;
    }
    function Od(e) {
      return (e & Nl) === e;
    }
    function Jc(e, t) {
      var a = Ml | ni | Rr | xn;
      return (t & a) !== $;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Ld(e) {
      return (e & Nl) !== $;
    }
    function Md() {
      var e = bu;
      return bu <<= 1, (bu & Nl) === $ && (bu = Ru), e;
    }
    function Vv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === $ && (Gc = wu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Ts(e) {
      return zl(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Zr(e, t) {
      return (e & t) !== $;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function $v(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = qt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = $, u[p] = qt, s[p] = qt, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ni:
          i = Ml;
          break;
        case xn:
          i = Rr;
          break;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Yc:
        case wu:
        case Ic:
        case gs:
        case Qc:
        case Wc:
          i = qi;
          break;
        case xu:
          i = Es;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function bs(e, t, a) {
      if (Xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Iv(e, t) {
      if (Xr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Lr = je, bi = ni, Na = xn, za = xu, _s = kt;
    function Ua() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function Qv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Wv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = zl(e);
      return Zn(Lr, t) ? Zn(bi, t) ? Rs(t) ? Na : za : bi : Lr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function Tr(e) {
      Ds = e;
    }
    function oy(e) {
      Ds(e);
    }
    var ve;
    function Eo(e) {
      ve = e;
    }
    var nf;
    function Kv(e) {
      nf = e;
    }
    var qv;
    function Os(e) {
      qv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Xi = null, _i = null, ki = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Jv(e) {
      return Xv.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xi = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function sy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Xi = ea(Xi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ea(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Mr.set(b, ea(Mr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = qv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Zn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), ay();
        } else {
          var f = Do(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function cy() {
      rf = !1, Xi !== null && Ns(Xi) && (Xi = null), _i !== null && Ns(_i) && (_i = null), ki !== null && Ns(ki) && (ki = null), bn.forEach(Pd), Mr.forEach(Pd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, cy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Ul(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && Ul(Xi, e), _i !== null && Ul(_i, e), ki !== null && Ul(ki, e);
      var i = function(p) {
        return Ul(p, e);
      };
      bn.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Nr.length; u++) {
        var s = Nr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Nr.length > 0; ) {
        var f = Nr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Nr.shift();
      }
    }
    var or = z.ReactCurrentBatchConfig, Et = !0;
    function Wn(e) {
      Et = !!e;
    }
    function Fn() {
      return Et;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case bi:
          u = Co;
          break;
        case Na:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(Lr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(bi), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Et && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Di, a), Fd(e, i);
        return;
      }
      if (sy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & _a && Jv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && oy(s);
          var f = Ro(e, t, a, i);
          if (f === null && _y(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Di = null;
    function Ro(e, t, a, i) {
      Di = null;
      var u = dd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (tf(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
    }
    function af(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return bi;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Lr;
            case Ol:
              return bi;
            case Gi:
            case uy:
              return Na;
            case mu:
              return za;
            default:
              return Na;
          }
        }
        default:
          return Na;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, wo = null, Ou = null;
    function Al(e) {
      return ya = e, wo = As(), !0;
    }
    function lf() {
      ya = null, wo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = wo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function wr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = xo : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = wr(Hn), zr = tt({}, Hn, {
      view: 0,
      detail: 0
    }), na = wr(zr), uf, Fs, Lu;
    function fy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var ii = tt({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (fy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Bd = wr(ii), $d = tt({}, ii, {
      dataTransfer: 0
    }), Mu = wr($d), Yd = tt({}, zr, {
      relatedTarget: 0
    }), Zi = wr(Yd), eh = tt({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = wr(eh), Id = tt({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = wr(Id), dy = tt({}, Hn, {
      data: 0
    }), nh = wr(dy), rh = nh, ah = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function py(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nu[e.keyCode] || "Unidentified" : "";
    }
    var bo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return ih;
    }
    var vy = tt({}, zr, {
      key: py,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = wr(vy), hy = tt({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), uh = wr(hy), oh = tt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), sh = wr(oh), my = tt({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = wr(my), Qd = tt({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), yy = wr(Qd), Fl = [9, 13, 27, 32], Hs = 229, el = On && "CompositionEvent" in window, Hl = null;
    On && "documentMode" in document && (Hl = document.documentMode);
    var Wd = On && "TextEvent" in window && !Hl, sf = On && (!el || Hl && Hl > 8 && Hl <= 11), ch = 32, cf = String.fromCharCode(ch);
    function gy() {
      ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ut("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (el ? s = ff(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !dh(i) && (!zu && s === "onCompositionStart" ? zu = Al(u) : s === "onCompositionEnd" && zu && (f = Ji()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Xd(e, t) {
      if (zu) {
        if (e === "compositionend" || !el && Kd(e, t)) {
          var a = Ji();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Wd ? s = vf(t, i) : s = Xd(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ph(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var Sy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ey(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      ut("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      oo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Pl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, dd(e)), bv(o, t);
    }
    function o(e) {
      _E(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Ey("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Pl = e, n = t, Pl.attachEvent("onpropertychange", U);
    }
    function T() {
      Pl && (Pl.detachEvent("onpropertychange", U), Pl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function W(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function Y(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ye : (v = W, y = I) : Y(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ee(p);
    }
    function k() {
      Vt("onMouseEnter", ["mouseout", "mouseover"]), Vt("onMouseLeave", ["mouseout", "mouseover"]), Vt("onPointerEnter", ["pointerout", "pointerover"]), Vt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function x(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (w = a, M = A ? Ys(A) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== te && M.tag !== Ve) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var oe = Bd, Le = "onMouseLeave", we = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (oe = uh, Le = "onPointerLeave", we = "onPointerEnter", Rt = "pointer");
          var yt = w == null ? g : Cf(w), D = M == null ? g : Cf(M), H = new oe(Le, Rt + "leave", w, i, u);
          H.target = yt, H.relatedTarget = D;
          var O = null, G = Ys(u);
          if (G === a) {
            var pe = new oe(we, Rt + "enter", M, i, u);
            pe.target = D, pe.relatedTarget = yt, O = pe;
          }
          OT(e, H, O, w, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Q = typeof Object.is == "function" ? Object.is : L;
    function ge(e, t) {
      if (Q(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!xr.call(t, s) || !Q(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Be(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(ze(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Nt(e, u, s, f, p);
    }
    function Nt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          b = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Vl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Be(e, f), g = Be(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === $i;
    }
    function mE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? mE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function dT(e) {
      return e && e.ownerDocument && mE(e.ownerDocument.documentElement, e);
    }
    function pT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function yE() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (pT(t))
          e = t.contentWindow;
        else
          return t;
        t = ba(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vT() {
      var e = yE();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? mT(e) : null
      };
    }
    function hT(e) {
      var t = yE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && dT(a)) {
        i !== null && Cy(a) && yT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function mT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function yT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Vl(e, t);
    }
    var gT = On && "documentMode" in document && document.documentMode <= 11;
    function ST() {
      ut("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ry = null, Jd = null, Ty = !1;
    function ET(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function CT(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function gE(e, t, a) {
      var i = CT(a);
      if (!(Ty || mf == null || mf !== ba(i))) {
        var u = ET(mf);
        if (!Jd || !ge(Jd, u)) {
          Jd = u;
          var s = Sh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function RT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, Ry = a, Jd = null);
          break;
        case "focusout":
          mf = null, Ry = null, Jd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, gE(e, i, u);
          break;
        case "selectionchange":
          if (gT)
            break;
        case "keydown":
        case "keyup":
          gE(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, wy = {}, SE = {};
    On && (SE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function yh(e) {
      if (wy[e])
        return wy[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in SE)
          return wy[e] = t[a];
      return e;
    }
    var EE = yh("animationend"), CE = yh("animationiteration"), RE = yh("animationstart"), TE = yh("transitionend"), wE = /* @__PURE__ */ new Map(), xE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      wE.set(e, t), ut(t, [e]);
    }
    function TT() {
      for (var e = 0; e < xE.length; e++) {
        var t = xE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(EE, "onAnimationEnd"), _o(CE, "onAnimationIteration"), _o(RE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(TE, "onTransitionEnd");
    }
    function wT(e, t, a, i, u, s, f) {
      var p = wE.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = Zi;
            break;
          case "focusout":
            y = "blur", v = Zi;
            break;
          case "beforeblur":
          case "afterblur":
            v = Zi;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Mu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case EE:
          case CE:
          case RE:
            v = th;
            break;
          case TE:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = yy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & _a) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = kT(a, p, i.type, g, b);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    TT(), k(), Vs(), ST(), gy();
    function xT(e, t, a, i, u, s, f) {
      wT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (x(e, t, a, i, u), kn(e, t, a, i, u), RT(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function bE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function bT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          bE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          bE(e, M, w), i = b;
        }
    }
    function _E(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        bT(s, f, a);
      }
      ls();
    }
    function _T(e, t, a, i, u) {
      var s = dd(a), f = [];
      xT(f, e, i, a, s, t), _E(f, t);
    }
    function Sn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = rw(t), u = LT(e);
      i.has(u) || (kE(t, e, hc, a), i.add(u));
    }
    function by(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), kE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[gh]) {
        e[gh] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, by("selectionchange", !1, t)));
      }
    }
    function kE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === me) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === me)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === Z || b === me) {
                    var w = g.stateNode.containerInfo;
                    if (DE(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var A = M.tag;
                if (A === te || A === Ve) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return _T(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === te && w !== null && (g = w, p !== null)) {
          var A = wl(y, p);
          A != null && v.push(tp(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === te && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = wl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== te);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function OE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === te && g !== null) {
          var w = g;
          if (u) {
            var M = wl(p, s);
            M != null && f.unshift(tp(p, M, w));
          } else if (!u) {
            var A = wl(p, s);
            A != null && f.push(tp(p, A, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function OT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && OE(e, t, i, s, !1), u !== null && a !== null && OE(e, a, u, s, !0);
    }
    function LT(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", LE = "autoFocus", Bs = "children", $s = "style", Ch = "__html", ky, Rh, rp, ME, Th, NE, zE;
    ky = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      ud(e, t), pc(e, t), Tv(e, t, {
        registrationNameDependencies: et,
        possibleRegistrationNames: rt
      });
    }, NE = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = wh(a), u = wh(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, ME = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, zE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var MT = /\r\n?/g, NT = /\u0000|\uFFFD/g;
    function wh(e) {
      Kn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(MT, `
`).replace(NT, "");
    }
    function xh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function UE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function zT() {
    }
    function bh(e) {
      e.onclick = zT;
    }
    function UT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), yv(t, f);
          else if (s === np) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Eh || s === ko || s === LE || (et.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function AT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? yv(e, f) : s === np ? iv(e, f) : s === Bs ? ao(e, f) : br(e, s, f, i);
      }
    }
    function jT(e, t, a, i) {
      var u, s = UE(a), f, p = i;
      if (p === Bi && (p = ed(e)), p === Bi) {
        if (u = Rl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !xr.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FT(e, t) {
      return UE(t).createTextNode(e);
    }
    function HT(e, t, a, i) {
      var u = Rl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            Sn(Zd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Za(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          xt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), s = qf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), UT(t, e, i, s, u), t) {
        case "input":
          Ja(e), N(e, a, !1);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "option":
          tn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function PT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), p = qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === $s) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Bs || v === Eh || v === ko || v === LE || (et.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === $s)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === np) {
            var A = w ? w[Ch] : void 0, F = M ? M[Ch] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === ko || (et.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && Sn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ty(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function VT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (AT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function BT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function $T(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Rl(t, a), Rh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            Sn(Zd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Za(e, a), Sn("invalid", e);
          break;
        case "option":
          xt(e, a);
          break;
        case "select":
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), Sn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Bs)
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && xh(e.textContent, F, s, f), M = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && xh(e.textContent, F, s, f), M = [Bs, "" + F]);
          else if (et.hasOwnProperty(A))
            F != null && (typeof F != "function" && Th(A, F), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var oe = void 0, Le = Zt(A);
            if (a[ko] !== !0) {
              if (!(A === Eh || A === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var we = e.innerHTML, Rt = F ? F[Ch] : void 0;
                  if (Rt != null) {
                    var yt = zE(e, Rt);
                    yt !== we && rp(A, we, yt);
                  }
                } else if (A === $s) {
                  if (v.delete(A), NE) {
                    var D = Zm(F);
                    oe = e.getAttribute("style"), D !== oe && rp(A, oe, D);
                  }
                } else if (p && !_)
                  v.delete(A.toLowerCase()), oe = tu(e, A, F), F !== oe && rp(A, oe, F);
                else if (!vn(A, Le, p) && !qn(A, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), oe = pl(e, A, F, Le);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var G = BT(A);
                      G !== null && G !== A && (H = !0, v.delete(G)), v.delete(A);
                    }
                    oe = tu(e, A, F);
                  }
                  var pe = _;
                  !pe && F !== oe && !H && rp(A, oe, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && ME(v), t) {
        case "input":
          Ja(e), N(e, a, !0);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return M;
    }
    function YT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function IT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Km(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var QT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], AE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], WT = AE.concat(["button"]), GT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], jE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = tt({}, e || jE), i = {
          tag: t
        };
        return AE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), WT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), QT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var KT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return GT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, qT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, FE = {};
      ap = function(e, t, a) {
        a = a || jE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = KT(e, u) ? null : i, f = s ? null : qT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", lp = "$?", up = "$!", XT = "style", Ny = null, zy = null;
    function JT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case nd: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function fk(e) {
      return e;
    }
    function e1(e) {
      Ny = Fn(), zy = vT();
      var t = null;
      return Wn(!1), t;
    }
    function t1(e) {
      hT(zy), Wn(Ny), Ny = null, zy = null;
    }
    function n1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = jT(e, t, a, s);
      return cp(u, y), By(y, t), y;
    }
    function r1(e, t) {
      e.appendChild(t);
    }
    function a1(e, t, a, i, u) {
      switch (HT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function i1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return PT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function l1(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = FT(e, t);
      return cp(i, s), s;
    }
    function u1() {
      var e = window.event;
      return e === void 0 ? Na : af(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, o1 = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, HE = typeof Promise == "function" ? Promise : void 0, s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof HE < "u" ? function(e) {
      return HE.resolve(null).then(e).catch(c1);
    } : Ay;
    function c1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function f1(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function d1(e, t, a, i, u, s) {
      VT(e, t, a, i, u), By(e, u);
    }
    function PE(e) {
      ao(e, "");
    }
    function p1(e, t, a) {
      e.nodeValue = a;
    }
    function v1(e, t) {
      e.appendChild(t);
    }
    function h1(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function m1(e, t, a) {
      e.insertBefore(t, a);
    }
    function y1(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function g1(e, t) {
      e.removeChild(t);
    }
    function S1(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === kh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function E1(e, t) {
      e.nodeType === Mn ? Fy(e.parentNode, t) : e.nodeType === Qr && Fy(e, t), Du(e);
    }
    function C1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function R1(e) {
      e.nodeValue = "";
    }
    function T1(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function w1(e, t) {
      e.nodeValue = t;
    }
    function x1(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function b1(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _1(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function k1(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function VE(e) {
      return e.data === lp;
    }
    function Hy(e) {
      return e.data === up;
    }
    function D1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function O1(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === $i)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === kh || a === up || a === lp)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Oh(e.nextSibling);
    }
    function L1(e) {
      return Oh(e.firstChild);
    }
    function M1(e) {
      return Oh(e.firstChild);
    }
    function N1(e) {
      return Oh(e.nextSibling);
    }
    function z1(e, t, a, i, u, s, f) {
      cp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & st) !== ke;
      return $T(e, t, a, p, i, y, f);
    }
    function U1(e, t, a, i) {
      return cp(a, e), a.mode & st, YT(e, t);
    }
    function A1(e, t) {
      cp(t, e);
    }
    function j1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === kh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function BE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === kh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function F1(e) {
      Du(e);
    }
    function H1(e) {
      Du(e);
    }
    function P1(e) {
      return e !== "head" && e !== "body";
    }
    function V1(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function B1(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function $1(e, t) {
      t.nodeType === Qr ? Dy(e, t) : t.nodeType === Mn || Oy(e, t);
    }
    function Y1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Dy(a, t) : t.nodeType === Mn || Oy(a, t));
      }
    }
    function I1(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Qr ? Dy(a, i) : i.nodeType === Mn || Oy(a, i));
    }
    function Q1(e, t, a) {
      Ly(e, t);
    }
    function W1(e, t) {
      My(e, t);
    }
    function G1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function K1(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function q1(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ly(a, i);
    }
    function X1(e, t, a, i, u) {
      (u || t[_h] !== !0) && My(a, i);
    }
    function J1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Z1(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Py = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Vy = "__reactEvents$" + Sf, ew = "__reactListeners$" + Sf, tw = "__reactHandles$" + Sf;
    function nw(e) {
      delete e[Ef], delete e[Py], delete e[Vy], delete e[ew], delete e[tw];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Lh(e, t) {
      t[sp] = e;
    }
    function $E(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Ys(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = BE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = BE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === te || t.tag === Ve || t.tag === be || t.tag === Z) ? t : null;
    }
    function Cf(e) {
      if (e.tag === te || e.tag === Ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function rw(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var YE = {}, IE = z.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        IE.setExtraStackFrame(a);
      } else
        IE.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(xr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in YE) && (YE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var $y = [], zh;
    zh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[Uu] && S("Unexpected Fiber popped."), e.current = $y[Uu], $y[Uu] = null, zh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, $y[Uu] = e.current, zh[Uu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Au = Oo(li), Bl = Oo(!1), Iy = li;
    function Rf(e, t, a) {
      return a && $l(t) ? Iy : Au.current;
    }
    function QE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = $e(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && QE(e, t, s), s;
      }
    }
    function Uh() {
      return Bl.current;
    }
    function $l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ra(Bl, e), ra(Au, e);
    }
    function Qy(e) {
      ra(Bl, e), ra(Au, e);
    }
    function WE(e, t, a) {
      {
        if (Au.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Au, t, e), aa(Bl, a, e);
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = $e(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error(($e(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = $e(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return tt({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Iy = Au.current, aa(Au, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = GE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Au, e), aa(Au, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function aw(e) {
      {
        if (!hu(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case se: {
              var a = t.type;
              if ($l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Fh = 1, ju = null, Wy = !1, Gy = !1;
    function qE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function iw(e) {
      Wy = !0, qE(e);
    }
    function XE() {
      Wy && Mo();
    }
    function Mo() {
      if (!Gy && ju !== null) {
        Gy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = ju;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Wy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), vd(ss, Mo), s;
        } finally {
          jn(t), Gy = !1;
        }
      }
      return null;
    }
    var wf = [], xf = 0, Hh = null, Ph = 0, Li = [], Mi = 0, Is = null, Fu = 1, Hu = "";
    function lw(e) {
      return Ws(), (e.flags & Ci) !== _e;
    }
    function uw(e) {
      return Ws(), Ph;
    }
    function ow() {
      var e = Hu, t = Fu, a = t & ~sw(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), wf[xf++] = Ph, wf[xf++] = Hh, Hh = e, Ph = t;
    }
    function JE(e, t, a) {
      Ws(), Li[Mi++] = Fu, Li[Mi++] = Hu, Li[Mi++] = Is, Is = e;
      var i = Fu, u = Hu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, A = Vh(t) + M, F = p << M, oe = F | w, Le = b + u;
        Fu = 1 << A | oe, Hu = Le;
      } else {
        var we = p << s, Rt = we | f, yt = u;
        Fu = 1 << v | Rt, Hu = yt;
      }
    }
    function Ky(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), JE(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Un(e);
    }
    function sw(e) {
      return 1 << Vh(e) - 1;
    }
    function qy(e) {
      for (; e === Hh; )
        Hh = wf[--xf], wf[xf] = null, Ph = wf[--xf], wf[xf] = null;
      for (; e === Is; )
        Is = Li[--Mi], Li[Mi] = null, Hu = Li[--Mi], Li[Mi] = null, Fu = Li[--Mi], Li[Mi] = null;
    }
    function cw() {
      return Ws(), Is !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function fw(e, t) {
      Ws(), Li[Mi++] = Fu, Li[Mi++] = Hu, Li[Mi++] = Is, Fu = t.id, Hu = t.overflow, Is = e;
    }
    function Ws() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Gs = !1, No = null;
    function dw() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      Gs = !0;
    }
    function pw() {
      return Gs;
    }
    function vw(e) {
      var t = e.stateNode.containerInfo;
      return Ni = M1(t), Ur = e, nl = !0, No = null, Gs = !1, !0;
    }
    function hw(e, t, a) {
      return Ni = N1(t), Ur = e, nl = !0, No = null, Gs = !1, a !== null && fw(e, a), !0;
    }
    function eC(e, t) {
      switch (e.tag) {
        case Z: {
          $1(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & st) !== ke;
          I1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && Y1(i.dehydrated, t);
          break;
        }
      }
    }
    function tC(e, t) {
      eC(e, t);
      var a = S_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, Q1(a, i);
                break;
              case Ve:
                var u = t.pendingProps;
                W1(a, u);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case te: {
                var v = t.type, y = t.pendingProps, g = (e.mode & st) !== ke;
                q1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ve: {
                var b = t.pendingProps, w = (e.mode & st) !== ke;
                X1(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case be: {
            var M = e.memoizedState, A = M.dehydrated;
            if (A !== null) switch (t.tag) {
              case te:
                var F = t.type;
                t.pendingProps, G1(A, F);
                break;
              case Ve:
                var oe = t.pendingProps;
                K1(A, oe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function nC(e, t) {
      t.flags = t.flags & ~Gr | mn, Xy(e, t);
    }
    function rC(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = b1(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = L1(i), !0) : !1;
        }
        case Ve: {
          var u = e.pendingProps, s = _1(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case be: {
          var f = k1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: cw(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = E_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & st) !== ke && (e.flags & xe) === _e;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          Jy(e) && (Xy(Ur, e), Zy()), nC(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!rC(e, t)) {
          Jy(e) && (Xy(Ur, e), Zy()), t = op(a);
          var i = Ur;
          if (!t || !rC(e, t)) {
            nC(Ur, e), nl = !1, Ur = e;
            return;
          }
          tC(i, a);
        }
      }
    }
    function mw(e, t, a) {
      var i = e.stateNode, u = !Gs, s = z1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function yw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = U1(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & st) !== ke;
              V1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case te: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & st) !== ke;
              B1(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function gw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      A1(a, e);
    }
    function Sw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return j1(a);
    }
    function aC(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== Z && t.tag !== be; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return aC(e), nl = !0, !1;
      if (e.tag !== Z && (e.tag !== te || P1(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Jy(e))
            iC(e), Zy();
          else
            for (; t; )
              tC(e, t), t = op(t);
      }
      return aC(e), e.tag === be ? Ni = Sw(e) : Ni = Ur ? op(e.stateNode) : null, !0;
    }
    function Ew() {
      return nl && Ni !== null;
    }
    function iC(e) {
      for (var t = Ni; t; )
        eC(e, t), t = op(t);
    }
    function bf() {
      Ur = null, Ni = null, nl = !1, Gs = !1;
    }
    function lC() {
      No !== null && (Z0(No), No = null);
    }
    function Ar() {
      return nl;
    }
    function tg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var Cw = z.ReactCurrentBatchConfig, Rw = null;
    function Tw() {
      return Cw.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var ww = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Wt && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          e.add($e(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          t.add($e(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          a.add($e(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          i.add($e(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          u.add($e(w) || "Component"), qs.add(w.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(w) {
          s.add($e(w) || "Component"), qs.add(w.type);
        }), yp = []), t.size > 0) {
          var f = Ks(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ks(e);
          Ze(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ks(a);
          Ze(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ks(u);
          Ze(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var $h = /* @__PURE__ */ new Map(), uC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = ww(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uC.has(e.type)) {
          var i = $h.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], $h.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        $h.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add($e(s) || "Component"), uC.add(s.type);
            });
            var u = Ks(i);
            try {
              Yt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              on();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], $h = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, oC = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, oC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = $e(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Wt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== se) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = $e(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = $e(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cC(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= ka) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(D, H) {
        var O = ic(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ci, H;
        var G = D.alternate;
        if (G !== null) {
          var pe = G.index;
          return pe < H ? (D.flags |= mn, H) : pe;
        } else
          return D.flags |= mn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= mn), D;
      }
      function p(D, H, O, G) {
        if (H === null || H.tag !== Ve) {
          var pe = tE(O, D.mode, G);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, G) {
        var pe = O.type;
        if (pe === fi)
          return g(D, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        hR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Ye && sC(pe) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = gp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var Pe = eE(O, D.mode, G);
        return Pe.ref = gp(D, H, O), Pe.return = D, Pe;
      }
      function y(D, H, O, G) {
        if (H === null || H.tag !== me || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = nE(O, D.mode, G);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, G, pe) {
        if (H === null || H.tag !== vt) {
          var ce = Yo(O, D.mode, G, pe);
          return ce.return = D, ce;
        } else {
          var Pe = u(H, O);
          return Pe.return = D, Pe;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = tE("" + H, D.mode, O);
          return G.return = D, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case _r: {
              var pe = eE(H, D.mode, O);
              return pe.ref = gp(D, null, H), pe.return = D, pe;
            }
            case rr: {
              var ce = nE(H, D.mode, O);
              return ce.return = D, ce;
            }
            case Ye: {
              var Pe = H._payload, Ge = H._init;
              return b(D, Ge(Pe), O);
            }
          }
          if (it(H) || qe(H)) {
            var Kt = Yo(H, D.mode, O, null);
            return Kt.return = D, Kt;
          }
          Yh(D, H);
        }
        return typeof H == "function" && Ih(D), null;
      }
      function w(D, H, O, G) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(D, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return O.key === pe ? v(D, H, O, G) : null;
            case rr:
              return O.key === pe ? y(D, H, O, G) : null;
            case Ye: {
              var ce = O._payload, Pe = O._init;
              return w(D, H, Pe(ce), G);
            }
          }
          if (it(O) || qe(O))
            return pe !== null ? null : g(D, H, O, G, null);
          Yh(D, O);
        }
        return typeof O == "function" && Ih(D), null;
      }
      function M(D, H, O, G, pe) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + G, pe);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case _r: {
              var Pe = D.get(G.key === null ? O : G.key) || null;
              return v(H, Pe, G, pe);
            }
            case rr: {
              var Ge = D.get(G.key === null ? O : G.key) || null;
              return y(H, Ge, G, pe);
            }
            case Ye:
              var Kt = G._payload, zt = G._init;
              return M(D, H, O, zt(Kt), pe);
          }
          if (it(G) || qe(G)) {
            var Gn = D.get(O) || null;
            return g(H, Gn, G, pe, null);
          }
          Yh(H, G);
        }
        return typeof G == "function" && Ih(H), null;
      }
      function A(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case _r:
            case rr:
              oC(D, O);
              var G = D.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Ye:
              var pe = D._payload, ce = D._init;
              A(ce(pe), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, G) {
        for (var pe = null, ce = 0; ce < O.length; ce++) {
          var Pe = O[ce];
          pe = A(Pe, pe, D);
        }
        for (var Ge = null, Kt = null, zt = H, Gn = 0, Ut = 0, Pn = null; zt !== null && Ut < O.length; Ut++) {
          zt.index > Ut ? (Pn = zt, zt = null) : Pn = zt.sibling;
          var la = w(D, zt, O[Ut], G);
          if (la === null) {
            zt === null && (zt = Pn);
            break;
          }
          e && zt && la.alternate === null && t(D, zt), Gn = s(la, Gn, Ut), Kt === null ? Ge = la : Kt.sibling = la, Kt = la, zt = Pn;
        }
        if (Ut === O.length) {
          if (a(D, zt), Ar()) {
            var $r = Ut;
            Qs(D, $r);
          }
          return Ge;
        }
        if (zt === null) {
          for (; Ut < O.length; Ut++) {
            var oi = b(D, O[Ut], G);
            oi !== null && (Gn = s(oi, Gn, Ut), Kt === null ? Ge = oi : Kt.sibling = oi, Kt = oi);
          }
          if (Ar()) {
            var Ca = Ut;
            Qs(D, Ca);
          }
          return Ge;
        }
        for (var Ra = i(D, zt); Ut < O.length; Ut++) {
          var ua = M(Ra, D, Ut, O[Ut], G);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? Ut : ua.key), Gn = s(ua, Gn, Ut), Kt === null ? Ge = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && Ra.forEach(function(If) {
          return t(D, If);
        }), Ar()) {
          var Qu = Ut;
          Qs(D, Qu);
        }
        return Ge;
      }
      function oe(D, H, O, G) {
        var pe = qe(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === pe && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var ce = pe.call(O);
          if (ce)
            for (var Pe = null, Ge = ce.next(); !Ge.done; Ge = ce.next()) {
              var Kt = Ge.value;
              Pe = A(Kt, Pe, D);
            }
        }
        var zt = pe.call(O);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Ut = null, Pn = H, la = 0, $r = 0, oi = null, Ca = zt.next(); Pn !== null && !Ca.done; $r++, Ca = zt.next()) {
          Pn.index > $r ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var Ra = w(D, Pn, Ca.value, G);
          if (Ra === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && Ra.alternate === null && t(D, Pn), la = s(Ra, la, $r), Ut === null ? Gn = Ra : Ut.sibling = Ra, Ut = Ra, Pn = oi;
        }
        if (Ca.done) {
          if (a(D, Pn), Ar()) {
            var ua = $r;
            Qs(D, ua);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ca.done; $r++, Ca = zt.next()) {
            var Qu = b(D, Ca.value, G);
            Qu !== null && (la = s(Qu, la, $r), Ut === null ? Gn = Qu : Ut.sibling = Qu, Ut = Qu);
          }
          if (Ar()) {
            var If = $r;
            Qs(D, If);
          }
          return Gn;
        }
        for (var qp = i(D, Pn); !Ca.done; $r++, Ca = zt.next()) {
          var Xl = M(qp, D, $r, Ca.value, G);
          Xl !== null && (e && Xl.alternate !== null && qp.delete(Xl.key === null ? $r : Xl.key), la = s(Xl, la, $r), Ut === null ? Gn = Xl : Ut.sibling = Xl, Ut = Xl);
        }
        if (e && qp.forEach(function(X_) {
          return t(D, X_);
        }), Ar()) {
          var q_ = $r;
          Qs(D, q_);
        }
        return Gn;
      }
      function Le(D, H, O, G) {
        if (H !== null && H.tag === Ve) {
          a(D, H.sibling);
          var pe = u(H, O);
          return pe.return = D, pe;
        }
        a(D, H);
        var ce = tE(O, D.mode, G);
        return ce.return = D, ce;
      }
      function we(D, H, O, G) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe) {
            var Pe = O.type;
            if (Pe === fi) {
              if (ce.tag === vt) {
                a(D, ce.sibling);
                var Ge = u(ce, O.props.children);
                return Ge.return = D, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (ce.elementType === Pe || // Keep this check inline so it only runs on the false path:
            hR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ye && sC(Pe) === ce.type) {
              a(D, ce.sibling);
              var Kt = u(ce, O.props);
              return Kt.ref = gp(D, ce, O), Kt.return = D, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === fi) {
          var zt = Yo(O.props.children, D.mode, G, O.key);
          return zt.return = D, zt;
        } else {
          var Gn = eE(O, D.mode, G);
          return Gn.ref = gp(D, H, O), Gn.return = D, Gn;
        }
      }
      function Rt(D, H, O, G) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === me && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var Pe = u(ce, O.children || []);
              return Pe.return = D, Pe;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var Ge = nE(O, D.mode, G);
        return Ge.return = D, Ge;
      }
      function yt(D, H, O, G) {
        var pe = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return f(we(D, H, O, G));
            case rr:
              return f(Rt(D, H, O, G));
            case Ye:
              var ce = O._payload, Pe = O._init;
              return yt(D, H, Pe(ce), G);
          }
          if (it(O))
            return F(D, H, O, G);
          if (qe(O))
            return oe(D, H, O, G);
          Yh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, G)) : (typeof O == "function" && Ih(D), a(D, H));
      }
      return yt;
    }
    var _f = cC(!0), fC = cC(!1);
    function bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _w(e, t) {
      for (var a = e.child; a !== null; )
        v_(a, t), a = a.sibling;
    }
    var ug = Oo(null), og;
    og = {};
    var Qh = null, kf = null, sg = null, Wh = !1;
    function Gh() {
      Qh = null, kf = null, sg = null, Wh = !1;
    }
    function dC() {
      Wh = !0;
    }
    function pC() {
      Wh = !1;
    }
    function vC(e, t, a) {
      aa(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ra(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e, t, a) {
      Dw(e, t, a);
    }
    function Dw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === se) {
                var p = Ts(a), v = Pu(qt, p);
                v.tag = qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Xe(w.lanes, a)), fg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === pt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Xt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var A = M.alternate;
          A !== null && (A.lanes = Xe(A.lanes, a)), fg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Qh = e, kf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function tr(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Qh.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function dg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Ow() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function hC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Lw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Fa(e, t) {
      return Kh(e, t);
    }
    var Nw = Kh;
    function Kh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== _e && fR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (mn | Gr)) !== _e && fR(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mC = 0, yC = 1, qh = 2, pg = 3, Xh = !1, vg, Jh;
    vg = !1, Jh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), Lb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Nw(e, a);
      } else
        return Mw(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function zw(e, t, a, i, u, s) {
      switch (a.tag) {
        case yC: {
          var f = a.payload;
          if (typeof f == "function") {
            dC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Wt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pC();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~Xn | xe;
        case mC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dC(), y = v.call(s, i, u);
            {
              if (e.mode & Wt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pC();
            }
          } else
            y = v;
          return y == null ? i : tt({}, i, y);
        }
        case qh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, A = $, F = null, oe = null, Le = null, we = s;
        do {
          var Rt = we.lane, yt = we.eventTime;
          if (ku(i, Rt)) {
            if (Le !== null) {
              var H = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = zw(e, u, we, M, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== kt) {
              e.flags |= nn;
              var G = u.effects;
              G === null ? u.effects = [we] : G.push(we);
            }
          } else {
            var D = {
              eventTime: yt,
              lane: Rt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Le === null ? (oe = Le = D, F = M) : Le = Le.next = D, A = Xe(A, Rt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, we = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = oe, u.lastBaseUpdate = Le;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var Ge = Pe;
          do
            A = Xe(A, Ge.lane), Ge = Ge.next;
          while (Ge !== Pe);
        } else s === null && (u.shared.lanes = $);
        Ip(A), e.lanes = A, e.memoizedState = M;
      }
      Jh = null;
    }
    function Uw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SC() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function EC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Uw(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), nm = Oo(Sp);
    function rm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CC() {
      var e = rm(nm.current);
      return e;
    }
    function yg(e, t) {
      aa(nm, t, e), aa(Ep, e, e), aa(Uo, Sp, e);
      var a = JT(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Of(e) {
      ra(Uo, e), ra(Ep, e), ra(nm, e);
    }
    function gg() {
      var e = rm(Uo.current);
      return e;
    }
    function RC(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = ZT(t, e.type);
      t !== a && (aa(Ep, e, e), aa(Uo, a, e));
    }
    function Sg(e) {
      Ep.current === e && (ra(Uo, e), ra(Ep, e));
    }
    var Aw = 0, TC = 1, wC = 1, Cp = 2, al = Oo(Aw);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & TC;
    }
    function Cg(e, t) {
      return e & TC | t;
    }
    function jw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(al, t, e);
    }
    function Mf(e) {
      ra(al, e);
    }
    function Fw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || VE(i) || Hy(i))
              return t;
          }
        } else if (t.tag === an && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & xe) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function Hw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = z.ReactCurrentDispatcher, Rp = z.ReactCurrentBatchConfig, wg, Nf;
    wg = /* @__PURE__ */ new Set();
    var Js = $, Gt = null, dr = null, pr = null, im = !1, Tp = !1, wp = 0, Pw = 0, Vw = 25, V = null, zi = null, jo = -1, xg = !1;
    function Pt() {
      {
        var e = V;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function ne() {
      {
        var e = V;
        zi !== null && (jo++, zi[jo] !== e && Bw(e));
      }
    }
    function zf(e) {
      e != null && !it(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Bw(e) {
      {
        var t = $e(Gt);
        if (!wg.has(t) && (wg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = zi[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, Gt = t, zi = e !== null ? e._debugHookTypes : null, jo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? de.current = QC : zi !== null ? de.current = IC : de.current = YC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, wp = 0, p >= Vw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, de.current = WC, f = a(i, u);
        } while (Tp);
      }
      de.current = gm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Js = $, Gt = null, dr = null, pr = null, V = null, zi = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & st) !== ke && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function xC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Mt) !== ke ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function bC() {
      if (de.current = gm, im) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Js = $, Gt = null, dr = null, pr = null, zi = null, jo = -1, V = null, HC = !1, Tp = !1, wp = 0;
    }
    function Il() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Gt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Gt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? Gt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function _C() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function kg(e, t, a) {
      var i = Il(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Qw.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, M = null, A = null, F = g;
        do {
          var oe = F.lane;
          if (ku(Js, oe)) {
            if (A !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = we;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Rt = F.action;
              b = e(b, Rt);
            }
          } else {
            var Le = {
              lane: oe,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (M = A = Le, w = b) : A = A.next = Le, Gt.lanes = Xe(Gt.lanes, oe), Ip(oe);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? w = b : A.next = M, Q(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = w, i.baseQueue = A, u.lastRenderedState = b;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var D = yt;
        do {
          var H = D.lane;
          Gt.lanes = Xe(Gt.lanes, H), Ip(H), D = D.next;
        } while (D !== yt);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Q(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function dk(e, t, a) {
    }
    function pk(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Gt, u = Il(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          Q(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || kC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(OC.bind(null, i, y, e), [e]), i.flags |= Wr, xp(cr | jr, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Gt, u = Ui(), s = t();
      if (!Nf) {
        var f = t();
        Q(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !Q(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(OC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, xp(cr | jr, DC.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || kC(i, t, s);
      }
      return s;
    }
    function kC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = _C(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LC(t) && MC(e);
    }
    function OC(e, t, a) {
      var i = function() {
        LC(t) && MC(e);
      };
      return a(i);
    }
    function LC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Q(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Fa(e, je);
      t !== null && yr(t, e, je, qt);
    }
    function um(e) {
      var t = Il();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ww.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return Dg(_g);
    }
    function Ng(e) {
      return Og(_g);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = _C(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = Il();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Il(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = xp(cr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = xp(cr | t, a, f, s);
    }
    function cm(e, t) {
      return (Gt.mode & Mt) !== ke ? bp(Ri | Wr | xc, jr, e, t) : bp(Wr | xc, jr, e, t);
    }
    function _p(e, t) {
      return sm(Wr, jr, e, t);
    }
    function Ug(e, t) {
      return bp(St, Yl, e, t);
    }
    function fm(e, t) {
      return sm(St, Yl, e, t);
    }
    function Ag(e, t) {
      var a = St;
      return a |= Qi, (Gt.mode & Mt) !== ke && (a |= bl), bp(a, fr, e, t);
    }
    function dm(e, t) {
      return sm(St, fr, e, t);
    }
    function NC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function jg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = St;
      return u |= Qi, (Gt.mode & Mt) !== ke && (u |= bl), bp(u, fr, NC.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(St, fr, NC.bind(null, t, e), i);
    }
    function $w(e, t) {
    }
    var vm = $w;
    function Fg(e, t) {
      var a = Il(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Il(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Pg(e) {
      var t = Il();
      return t.memoizedState = e, e;
    }
    function zC(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return AC(t, i, e);
    }
    function UC(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return AC(t, a, e);
    }
    function AC(e, t, a) {
      var i = !Dd(Js);
      if (i) {
        if (!Q(a, t)) {
          var u = Md();
          Gt.lanes = Xe(Gt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Yw(e, t, a) {
      var i = Ua();
      jn(Wv(i, bi)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ze("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = um(!1), t = e[0], a = e[1], i = Yw.bind(null, a), u = Il();
      return u.memoizedState = i, [t, i];
    }
    function jC() {
      var e = Mg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Ng(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var HC = !1;
    function Iw() {
      return HC;
    }
    function Bg() {
      var e = Il(), t = jm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = ow();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Pw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function Qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PC(e))
        VC(t, u);
      else {
        var s = hC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), BC(s, t, i);
        }
      }
      $C(e, i);
    }
    function Ww(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PC(e))
        VC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Q(y, v)) {
                Lw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = hC(e, t, u, i);
        if (g !== null) {
          var b = Ea();
          yr(g, e, i, b), BC(g, t, i);
        }
      }
      $C(e, i);
    }
    function PC(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function VC(e, t) {
      Tp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function $C(e, t, a) {
      vs(e, t);
    }
    var gm = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: X
    }, YC = null, IC = null, QC = null, WC = null, Ql = null, il = null, Sm = null;
    {
      var $g = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Pt(), zf(t), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Pt(), zf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Pt(), zf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Pt(), zf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Pt(), zf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Pt(), zf(t);
          var a = de.current;
          de.current = Ql;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Pt();
          var i = de.current;
          de.current = Ql;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Pt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Pt();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Pt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Pt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Pt(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", Pt(), Bg();
        },
        unstable_isNewReconciler: X
      }, IC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = de.current;
          de.current = Ql;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = de.current;
          de.current = Ql;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), zg(e);
        },
        useState: function(e) {
          V = "useState", ne();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", ne(), Bg();
        },
        unstable_isNewReconciler: X
      }, QC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = de.current;
          de.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), om();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = de.current;
          de.current = il;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ne(), ym();
        },
        unstable_isNewReconciler: X
      }, WC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = de.current;
          de.current = Sm;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = de.current;
          de.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), om();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = de.current;
          de.current = Sm;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), UC(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ne(), ym();
        },
        unstable_isNewReconciler: X
      }, Ql = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), Pt(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), Pt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), Pt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), Pt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), Pt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), Pt();
          var a = de.current;
          de.current = Ql;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), Pt();
          var i = de.current;
          de.current = Ql;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), Pt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Ie(), Pt();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), Pt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), Pt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), Pt(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ie(), Pt(), Bg();
        },
        unstable_isNewReconciler: X
      }, il = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), ne();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), ne();
          var i = de.current;
          de.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), ne(), om();
        },
        useState: function(e) {
          V = "useState", Ie(), ne();
          var t = de.current;
          de.current = il;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), ne(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), ne(), ym();
        },
        unstable_isNewReconciler: X
      }, Sm = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), ne(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), ne();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), ne();
          var i = de.current;
          de.current = il;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), ne(), om();
        },
        useState: function(e) {
          V = "useState", Ie(), ne();
          var t = de.current;
          de.current = il;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), ne(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), ne(), UC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), ne(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), ne(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), ne(), ym();
        },
        unstable_isNewReconciler: X
      };
    }
    var Fo = K.unstable_now, GC = 0, Em = -1, kp = -1, Cm = -1, Yg = !1, Rm = !1;
    function KC() {
      return Yg;
    }
    function Gw() {
      Rm = !0;
    }
    function Kw() {
      Yg = !1, Rm = !1;
    }
    function qw() {
      Yg = Rm, Rm = !1;
    }
    function qC() {
      return GC;
    }
    function XC() {
      GC = Fo();
    }
    function Ig(e) {
      kp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function JC(e) {
      kp = -1;
    }
    function Tm(e, t) {
      if (kp >= 0) {
        var a = Fo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Wl(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (Cm >= 0) {
        var t = Fo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      Em = Fo();
    }
    function Wg() {
      Cm = Fo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = tt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Kg = {}, qg, Xg, Jg, Zg, eS, ZC, wm, tS, nS, rS, Dp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var e0 = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          e0.has(a) || (e0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ZC = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Kg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Kg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Wt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        ZC(t, s);
      }
      var f = s == null ? u : tt({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.tag = yC, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Pu(i, u);
        s.tag = qh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), Zh(f, a, u)), Mc(a, u);
      }
    };
    function t0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Wt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function Xw(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === ke && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === ke && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || it(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function n0(e, t) {
      t.updater = iS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Kg;
    }
    function r0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & Wt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      n0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = wt(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || A !== null || F !== null) {
            var oe = wt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(oe) || (Zg.add(oe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, oe, Le, M !== null ? `
  ` + M : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && QE(e, u, s), g;
    }
    function Jw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", $e(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function a0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = $e(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      Xw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Wt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Jw(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = St;
        y |= Qi, (e.mode & Mt) !== ke && (y |= bl), e.flags |= y;
      }
    }
    function Zw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && a0(e, u, a, v), SC();
      var w = e.memoizedState, M = u.state = w;
      if (em(e, a, u, i), M = e.memoizedState, s === a && w === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var A = St;
          A |= Qi, (e.mode & Mt) !== ke && (A |= bl), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), M = e.memoizedState);
      var F = tm() || t0(e, t, s, a, w, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var oe = St;
          oe |= Qi, (e.mode & Mt) !== ke && (oe |= bl), e.flags |= oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = St;
          Le |= Qi, (e.mode & Mt) !== ke && (Le |= bl), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function ex(e, t, a, i, u) {
      var s = t.stateNode;
      gC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var w = Rf(t, a, !0);
        b = Tf(t, w);
      }
      var M = a.getDerivedStateFromProps, A = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && a0(t, s, i, b), SC();
      var F = t.memoizedState, oe = s.state = F;
      if (em(t, i, s, u), oe = t.memoizedState, f === v && F === oe && !Uh() && !tm() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= In), !1;
      typeof M == "function" && (aS(t, a, M, i), oe = t.memoizedState);
      var Le = tm() || t0(t, a, p, i, F, oe, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Le ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, oe, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, oe, b)), typeof s.componentDidUpdate == "function" && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= In)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= In), t.memoizedProps = i, t.memoizedState = oe), s.props = i, s.state = oe, s.context = b, Le;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Pi(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function tx(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = tx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(i);
        }
        var p = u ? $e(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = $e(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var nx = typeof WeakMap == "function" ? WeakMap : Map;
    function i0(e, t, a) {
      var i = Pu(qt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Gb(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Pu(qt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mR(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mR(e), oS(e, t), typeof u != "function" && Qb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", $e(e) || "Unknown"));
      }), i;
    }
    function l0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new nx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Kb.bind(null, e, t, a);
        Xr && Qp(e, a), t.then(s, s);
      }
    }
    function rx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ax(e, t) {
      var a = e.tag;
      if ((e.mode & st) === ke && (a === le || a === We || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u0(e) {
      var t = e;
      do {
        if (t.tag === be && Fw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function o0(e, t, a, i, u) {
      if ((e.mode & st) === ke) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= xe, a.flags |= wc, a.flags &= -52805, a.tag === se) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ft;
            else {
              var f = Pu(qt, je);
              f.tag = qh, zo(a, f, je);
            }
          }
          a.lanes = Xe(a.lanes, je);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function ix(e, t, a, i, u) {
      if (a.flags |= os, Xr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ax(a), Ar() && a.mode & st && ZE();
        var f = u0(t);
        if (f !== null) {
          f.flags &= ~Cr, o0(f, t, a, e, u), f.mode & st && l0(e, s, u), rx(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            l0(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & st) {
        ZE();
        var v = u0(t);
        if (v !== null) {
          (v.flags & Xn) === _e && (v.flags |= Cr), o0(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Fb(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= Xn;
            var b = Ts(u);
            y.lanes = Xe(y.lanes, b);
            var w = i0(y, g, b);
            mg(y, w);
            return;
          }
          case se:
            var M = i, A = y.type, F = y.stateNode;
            if ((y.flags & xe) === _e && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !uR(F))) {
              y.flags |= Xn;
              var oe = Ts(u);
              y.lanes = Xe(y.lanes, oe);
              var Le = sS(y, M, oe);
              mg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function lx() {
      return null;
    }
    var Op = z.ReactCurrentOwner, ul = !1, cS, Lp, fS, dS, pS, ec, vS, xm, Mp;
    cS = {}, Lp = {}, fS = {}, dS = {}, pS = {}, ec = !1, vS = {}, xm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = fC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function ux(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function s0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, Yn(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Wt) {
          yn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ul ? (xC(e, t, u), Vu(e, t, u)) : (Ar() && y && Ky(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function c0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (d_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Fe, t.type = f, yS(t, s), f0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && tl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var w = e.child, M = TS(e, u);
      if (!M) {
        var A = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ge, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var oe = ic(w, i);
      return oe.ref = t.ref, oe.return = t, t.child = oe, oe;
    }
    function f0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && tl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & wc) !== _e && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function d0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || re)
        if ((t.mode & st) === ke) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (Zr(a, Jr)) {
          var b = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Fm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, Fm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function ox(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function sx(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function cx(e, t, a) {
      {
        t.flags |= St;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function p0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, Yn(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Wt) {
          yn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ul ? (xC(e, t, u), Vu(e, t, u)) : (Ar() && y && Ky(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function v0(e, t, a, i, u) {
      {
        switch (__(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= xe, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = Xe(t.lanes, g);
            var b = sS(t, Zs(y, t), g);
            mg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && tl(
            w,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      $l(a) ? (M = !0, jh(t)) : M = !1, Df(t, u);
      var A = t.stateNode, F;
      A === null ? (_m(e, t), r0(t, a, i), lS(t, a, i, u), F = !0) : e === null ? F = Zw(t, a, i, u) : F = ex(e, t, a, i, u);
      var oe = mS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", $e(t) || "a component"), ec = !0);
      }
      return oe;
    }
    function mS(e, t, a, i, u, s) {
      p0(e, t);
      var f = (t.flags & xe) !== _e;
      if (!i && !f)
        return u && KE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JC();
      else {
        va(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Wt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? ux(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && KE(t, a, !0), t.child;
    }
    function h0(e) {
      var t = e.stateNode;
      t.pendingContext ? WE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && WE(e, t.context, !1), yg(e, t.containerInfo);
    }
    function fx(e, t, a) {
      if (h0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gC(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m0(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m0(e, t, p, a, b);
        } else {
          vw(t);
          var w = fC(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function m0(e, t, a, i, u) {
      return bf(), tg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function dx(e, t, a) {
      RC(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Da), p0(e, t), ga(e, t, f, a), t.child;
    }
    function px(e, t) {
      return e === null && eg(t), null;
    }
    function vx(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = p_(v), g = ll(v, u), b;
      switch (y) {
        case le:
          return yS(t, v), t.type = v = Yf(v), b = hS(null, t, v, g, i), b;
        case se:
          return t.type = v = WS(v), b = v0(null, t, v, g, i), b;
        case We:
          return t.type = v = GS(v), b = s0(null, t, v, g, i), b;
        case ct: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && tl(
              w,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = c0(
            null,
            t,
            v,
            ll(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function hx(e, t, a, i, u) {
      _m(e, t), t.tag = se;
      var s;
      return $l(a) ? (s = !0, jh(t)) : s = !1, Df(t, u), r0(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function mx(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Wt && rl.recordLegacyContextWarning(t, null), Yn(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), Yn(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Lp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Lp[b] = !0);
        }
        t.tag = se, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return $l(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), n0(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = le, t.mode & Wt) {
          yn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && Ky(t), ga(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: lx(),
        transitions: null
      };
    }
    function yx(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function gx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Cp);
    }
    function Sx(e, t) {
      return ws(e.childLanes, t);
    }
    function y0(e, t, a) {
      var i = t.pendingProps;
      k_(t) && (t.flags |= xe);
      var u = al.current, s = !1, f = (t.flags & xe) !== _e;
      if (f || gx(u, e) ? (s = !0, t.flags &= ~xe) : (e === null || e.memoizedState !== null) && (u = jw(u, wC)), u = Lf(u), Ao(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return wx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Ex(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return ES(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var A = M.dehydrated;
          if (A !== null)
            return xx(e, t, f, i, A, M, a);
        }
        if (s) {
          var F = i.fallback, oe = i.children, Le = Rx(e, t, oe, F, a), we = t.child, Rt = e.child.memoizedState;
          return we.memoizedState = Rt === null ? SS(a) : yx(Rt, a), we.childLanes = Sx(e, a), t.memoizedState = gS, Le;
        } else {
          var yt = i.children, D = Cx(e, t, yt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Ex(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & st) === ke && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Lt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = CS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return gR(e, t, $, null);
    }
    function g0(e, t) {
      return ic(e, t);
    }
    function Cx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = g0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & st) === ke && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function Rx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & st) === ke && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Lt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = g0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Yo(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && tg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Tx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & st) !== ke && _f(t, e.child, null, u), v;
    }
    function wx(e, t, a) {
      return (e.mode & st) === ke ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Hy(t) ? e.lanes = Rr : e.lanes = Jr, null;
    }
    function xx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var D = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= xe, null;
          var H = i.children, O = i.fallback, G = Tx(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (dw(), (t.mode & st) === ke)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = D1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(b, p, y);
          return bm(e, t, f, w);
        }
        var M = Zr(f, e.childLanes);
        if (ul || M) {
          var A = jm();
          if (A !== null) {
            var F = Ud(A, f);
            if (F !== kt && F !== s.retryLane) {
              s.retryLane = F;
              var oe = qt;
              Fa(e, F), yr(A, e, F, oe);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Le);
        } else if (VE(u)) {
          t.flags |= xe, t.child = e.child;
          var we = qb.bind(null, e);
          return O1(u, we), null;
        } else {
          hw(t, u, s.treeContext);
          var Rt = i.children, yt = ES(t, Rt);
          return yt.flags |= Gr, yt;
        }
      }
    }
    function S0(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), fg(e.return, t, a);
    }
    function bx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && S0(i, a, e);
        } else if (i.tag === an)
          S0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _x(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Dx(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function E0(e, t) {
      {
        var a = it(e), i = !a && typeof qe(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ox(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (it(e)) {
          for (var a = 0; a < e.length; a++)
            if (!E0(e[a], a))
              return;
        } else {
          var i = qe(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!E0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function C0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      kx(u), Dx(s, u), Ox(f, u), ga(e, t, f, a);
      var p = al.current, v = Eg(p, Cp);
      if (v)
        p = Cg(p, Cp), t.flags |= xe;
      else {
        var y = e !== null && (e.flags & xe) !== _e;
        y && bx(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & st) === ke)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = _x(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var A = M.alternate;
              if (A !== null && am(A) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = w, w = M, M = F;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Lx(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var R0 = !1;
    function Mx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || R0 || (R0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (vC(t, u, p), f !== null) {
        var y = f.value;
        if (Q(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          kw(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var T0 = !1;
    function Nx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (T0 || (T0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Op.current = t, Yn(!0), p = s(f), Yn(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Np() {
      ul = !0;
    }
    function _m(e, t) {
      (t.mode & st) === ke && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JC(), Ip(t.lanes), Zr(a, t.childLanes) ? (bw(e, t), t.child) : null;
    }
    function zx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= mn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function Ux(e, t, a) {
      switch (t.tag) {
        case Z:
          h0(t), t.stateNode, bf();
          break;
        case te:
          RC(t);
          break;
        case se: {
          var i = t.type;
          $l(i) && jh(t);
          break;
        }
        case me:
          yg(t, t.stateNode.containerInfo);
          break;
        case pt: {
          var u = t.memoizedProps.value, s = t.type._context;
          vC(t, s, u);
          break;
        }
        case mt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= St);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(al.current)), t.flags |= xe, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return y0(e, t, a);
            Ao(t, Lf(al.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(al.current));
          break;
        }
        case an: {
          var w = (e.flags & xe) !== _e, M = Zr(a, t.childLanes);
          if (w) {
            if (M)
              return C0(e, t, a);
            t.flags |= xe;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, al.current), M)
            break;
          return null;
        }
        case De:
        case At:
          return t.lanes = $, d0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function w0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return zx(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & xe) === _e)
            return ul = !1, Ux(e, t, a);
          (e.flags & wc) !== _e ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && lw(t)) {
        var f = t.index, p = uw();
        JE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case Ue:
          return mx(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return vx(e, t, v, a);
        }
        case le: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ll(y, g);
          return hS(e, t, y, b, a);
        }
        case se: {
          var w = t.type, M = t.pendingProps, A = t.elementType === w ? M : ll(w, M);
          return v0(e, t, w, A, a);
        }
        case Z:
          return fx(e, t, a);
        case te:
          return dx(e, t, a);
        case Ve:
          return px(e, t);
        case be:
          return y0(e, t, a);
        case me:
          return Lx(e, t, a);
        case We: {
          var F = t.type, oe = t.pendingProps, Le = t.elementType === F ? oe : ll(F, oe);
          return s0(e, t, F, Le, a);
        }
        case vt:
          return ox(e, t, a);
        case ht:
          return sx(e, t, a);
        case mt:
          return cx(e, t, a);
        case pt:
          return Mx(e, t, a);
        case fn:
          return Nx(e, t, a);
        case ct: {
          var we = t.type, Rt = t.pendingProps, yt = ll(we, Rt);
          if (t.type !== t.elementType) {
            var D = we.propTypes;
            D && tl(
              D,
              yt,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return yt = ll(we.type, yt), c0(e, t, we, yt, a);
        }
        case Fe:
          return f0(e, t, t.type, t.pendingProps, a);
        case Ft: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : ll(H, O);
          return hx(e, t, H, G, a);
        }
        case an:
          return C0(e, t, a);
        case bt:
          break;
        case De:
          return d0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= St;
    }
    function x0(e) {
      e.flags |= En, e.flags |= ho;
    }
    var b0, wS, _0, k0;
    b0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === te || u.tag === Ve)
          r1(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, _0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = i1(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, k0 = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function zp(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = _e;
      if (t) {
        if ((e.mode & Lt) !== ke) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== ke) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ax(e, t, a) {
      if (Ew() && (t.mode & st) !== ke && (t.flags & xe) === _e)
        return iC(t), bf(), t.flags |= Cr | os | Xn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (gw(t), Fr(t), (t.mode & Lt) !== ke) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & xe) === _e && (t.memoizedState = null), t.flags |= St, Fr(t), (t.mode & Lt) !== ke) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lC(), !0;
    }
    function D0(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case Ue:
        case rn:
        case Fe:
        case le:
        case We:
        case vt:
        case ht:
        case mt:
        case fn:
        case ct:
          return Fr(t), null;
        case se: {
          var u = t.type;
          return $l(u) && Ah(t), Fr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Of(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== _e) && (t.flags |= In, lC());
            }
          }
          return wS(e, t), Fr(t), null;
        }
        case te: {
          Sg(t);
          var v = CC(), y = t.type;
          if (e !== null && t.stateNode != null)
            _0(e, t, y, i, v), e.ref !== t.ref && x0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = gg(), b = Bh(t);
            if (b)
              mw(t, v, g) && jf(t);
            else {
              var w = n1(y, i, v, g, t);
              b0(w, t, !1, !1), t.stateNode = w, a1(w, y, i, v) && jf(t);
            }
            t.ref !== null && x0(t);
          }
          return Fr(t), null;
        }
        case Ve: {
          var M = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            k0(e, t, A, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = CC(), oe = gg(), Le = Bh(t);
            Le ? yw(t) && jf(t) : t.stateNode = l1(M, F, oe, t);
          }
          return Fr(t), null;
        }
        case be: {
          Mf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = Ax(e, t, we);
            if (!Rt)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & xe) !== _e)
            return t.lanes = a, (t.mode & Lt) !== ke && Gg(t), t;
          var yt = we !== null, D = e !== null && e.memoizedState !== null;
          if (yt !== D && yt) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & st) !== ke) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(al.current, wC) ? jb() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= St), Fr(t), (t.mode & Lt) !== ke && yt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Of(t), wS(e, t), e === null && Z1(t.stateNode.containerInfo), Fr(t), null;
        case pt:
          var ce = t.type._context;
          return cg(ce, t), Fr(t), null;
        case Ft: {
          var Pe = t.type;
          return $l(Pe) && Ah(t), Fr(t), null;
        }
        case an: {
          Mf(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Fr(t), null;
          var Kt = (t.flags & xe) !== _e, zt = Ge.rendering;
          if (zt === null)
            if (Kt)
              zp(Ge, !1);
            else {
              var Gn = Hb() && (e === null || (e.flags & xe) === _e);
              if (!Gn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Pn = am(Ut);
                  if (Pn !== null) {
                    Kt = !0, t.flags |= xe, zp(Ge, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= St), t.subtreeFlags = _e, _w(t, a), Ao(t, Cg(al.current, Cp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Ge.tail !== null && Qn() > q0() && (t.flags |= xe, Kt = !0, zp(Ge, !1), t.lanes = bd);
            }
          else {
            if (!Kt) {
              var $r = am(zt);
              if ($r !== null) {
                t.flags |= xe, Kt = !0;
                var oi = $r.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= St), zp(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !zt.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Ge.renderingStartTime > q0() && a !== Jr && (t.flags |= xe, Kt = !0, zp(Ge, !1), t.lanes = bd);
            }
            if (Ge.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Ca = Ge.last;
              Ca !== null ? Ca.sibling = zt : t.child = zt, Ge.last = zt;
            }
          }
          if (Ge.tail !== null) {
            var Ra = Ge.tail;
            Ge.rendering = Ra, Ge.tail = Ra.sibling, Ge.renderingStartTime = Qn(), Ra.sibling = null;
            var ua = al.current;
            return Kt ? ua = Cg(ua, Cp) : ua = Lf(ua), Ao(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case bt:
          break;
        case De:
        case At: {
          VS(t);
          var Qu = t.memoizedState, If = Qu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Xl = qp !== null;
            Xl !== If && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !re && (t.flags |= Nn);
          }
          return !If || (t.mode & st) === ke ? Fr(t) : Zr(ql, Jr) && (Fr(t), t.subtreeFlags & (mn | St) && (t.flags |= Nn)), null;
        }
        case _t:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jx(e, t, a) {
      switch (qy(t), t.tag) {
        case se: {
          var i = t.type;
          $l(i) && Ah(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | xe, (t.mode & Lt) !== ke && Gg(t), t) : null;
        }
        case Z: {
          t.stateNode, Of(t), Qy(t), Tg();
          var s = t.flags;
          return (s & Xn) !== _e && (s & xe) === _e ? (t.flags = s & ~Xn | xe, t) : null;
        }
        case te:
          return Sg(t), null;
        case be: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | xe, (t.mode & Lt) !== ke && Gg(t), t) : null;
        }
        case an:
          return Mf(t), null;
        case me:
          return Of(t), null;
        case pt:
          var v = t.type._context;
          return cg(v, t), null;
        case De:
        case At:
          return VS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function O0(e, t, a) {
      switch (qy(t), t.tag) {
        case se: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case Z: {
          t.stateNode, Of(t), Qy(t), Tg();
          break;
        }
        case te: {
          Sg(t);
          break;
        }
        case me:
          Of(t);
          break;
        case be:
          Mf(t);
          break;
        case an:
          Mf(t);
          break;
        case pt:
          var u = t.type._context;
          cg(u, t);
          break;
        case De:
        case At:
          VS(t);
          break;
      }
    }
    var L0 = null;
    L0 = /* @__PURE__ */ new Set();
    var km = !1, Hr = !1, Fx = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Ff = null, Hf = null;
    function Hx(e) {
      xl(null, function() {
        throw e;
      }), us();
    }
    var Px = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Wl(e);
        }
      else
        t.componentWillUnmount();
    };
    function M0(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        Px(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function Vx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function N0(e, t) {
      try {
        U0(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ae && lt && e.mode & Lt)
              try {
                Gl(), i = a(null);
              } finally {
                Wl(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var z0 = !1;
    function Bx(e, t) {
      e1(e.containerInfo), Se = t, $x();
      var a = z0;
      return z0 = !1, a;
    }
    function $x() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & _l) !== _e && t !== null ? (t.return = e, Se = t) : Yx();
      }
    }
    function Yx() {
      for (; Se !== null; ) {
        var e = Se;
        Yt(e);
        try {
          Ix(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        on();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Ix(e) {
      var t = e.alternate, a = e.flags;
      if ((a & In) !== _e) {
        switch (Yt(e), e.tag) {
          case le:
          case We:
          case Fe:
            break;
          case se: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = L0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", $e(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              x1(v.containerInfo);
            }
            break;
          }
          case te:
          case Ve:
          case me:
          case Ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        on();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? Ki(t) : (e & fr) !== Ha && cs(t), (e & Yl) !== Ha && Wp(!0), Dm(t, a, p), (e & Yl) !== Ha && Wp(!1), (e & jr) !== Ha ? Ll() : (e & fr) !== Ha && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? Td(t) : (e & fr) !== Ha && Oc(t);
            var f = s.create;
            (e & Yl) !== Ha && Wp(!0), s.destroy = f(), (e & Yl) !== Ha && Wp(!1), (e & jr) !== Ha ? zv() : (e & fr) !== Ha && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== _e ? v = "useLayoutEffect" : (s.tag & Yl) !== _e ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Qx(e, t) {
      if ((t.flags & St) !== _e)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            KC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case mt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Wx(e, t, a, i) {
      if ((a.flags & Dl) !== _e)
        switch (a.tag) {
          case le:
          case We:
          case Fe: {
            if (!Hr)
              if (a.mode & Lt)
                try {
                  Gl(), Ho(fr | cr, a);
                } finally {
                  Wl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case se: {
            var u = a.stateNode;
            if (a.flags & St && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & Lt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & Lt)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), EC(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case te:
                    y = a.child.stateNode;
                    break;
                  case se:
                    y = a.child.stateNode;
                    break;
                }
              EC(a, v, y);
            }
            break;
          }
          case te: {
            var g = a.stateNode;
            if (t === null && a.flags & St) {
              var b = a.type, w = a.memoizedProps;
              f1(g, b, w);
            }
            break;
          }
          case Ve:
            break;
          case me:
            break;
          case mt: {
            {
              var M = a.memoizedProps, A = M.onCommit, F = M.onRender, oe = a.stateNode.effectDuration, Le = qC(), we = t === null ? "mount" : "update";
              KC() && (we = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof A == "function" && A(a.memoizedProps.id, we, oe, Le), Yb(a);
                var Rt = a.return;
                e: for (; Rt !== null; ) {
                  switch (Rt.tag) {
                    case Z:
                      var yt = Rt.stateNode;
                      yt.effectDuration += oe;
                      break e;
                    case mt:
                      var D = Rt.stateNode;
                      D.effectDuration += oe;
                      break e;
                  }
                  Rt = Rt.return;
                }
              }
            }
            break;
          }
          case be: {
            tb(e, a);
            break;
          }
          case an:
          case Ft:
          case bt:
          case De:
          case At:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && U0(a);
    }
    function Gx(e) {
      switch (e.tag) {
        case le:
        case We:
        case Fe: {
          if (e.mode & Lt)
            try {
              Gl(), M0(e, e.return);
            } finally {
              Wl(e);
            }
          else
            M0(e, e.return);
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vx(e, e.return, t), N0(e, e.return);
          break;
        }
        case te: {
          N0(e, e.return);
          break;
        }
      }
    }
    function Kx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? C1(u) : T1(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === Ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? R1(s) : w1(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === De || i.tag === At) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function U0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case te:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Lt)
            try {
              Gl(), u = t(i);
            } finally {
              Wl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", $e(e)), t.current = i;
      }
    }
    function qx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function A0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, A0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && nw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xx(e) {
      for (var t = e.return; t !== null; ) {
        if (j0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function j0(e) {
      return e.tag === te || e.tag === Z || e.tag === me;
    }
    function F0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || j0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== te && t.tag !== Ve && t.tag !== Xt; ) {
          if (t.flags & mn || t.child === null || t.tag === me)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function Jx(e) {
      var t = Xx(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & Da && (PE(a), t.flags &= ~Da);
          var i = F0(e);
          _S(e, i, a);
          break;
        }
        case Z:
        case me: {
          var u = t.stateNode.containerInfo, s = F0(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === te || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? y1(a, s, t) : h1(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === te || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? m1(a, s, t) : v1(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, sl = !1;
    function Zx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case te: {
              Pr = i.stateNode, sl = !1;
              break e;
            }
            case Z: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case me: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        H0(e, t, a), Pr = null, sl = !1;
      }
      qx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        H0(e, t, i), i = i.sibling;
    }
    function H0(e, t, a) {
      switch (Ed(a), a.tag) {
        case te:
          Hr || Pf(a, t);
        case Ve: {
          {
            var i = Pr, u = sl;
            Pr = null, Po(e, t, a), Pr = i, sl = u, Pr !== null && (sl ? S1(Pr, a.stateNode) : g1(Pr, a.stateNode));
          }
          return;
        }
        case Xt: {
          Pr !== null && (sl ? E1(Pr, a.stateNode) : Fy(Pr, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Pr, f = sl;
            Pr = a.stateNode.containerInfo, sl = !0, Po(e, t, a), Pr = s, sl = f;
          }
          return;
        }
        case le:
        case We:
        case ct:
        case Fe: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & Yl) !== Ha ? Dm(a, t, w) : (M & fr) !== Ha && (cs(a), a.mode & Lt ? (Gl(), Dm(a, t, w), Wl(a)) : Dm(a, t, w), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case se: {
          if (!Hr) {
            Pf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && xS(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case bt: {
          Po(e, t, a);
          return;
        }
        case De: {
          if (
            // TODO: Remove this dead flag
            a.mode & st
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Po(e, t, a), Hr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function eb(e) {
      e.memoizedState;
    }
    function tb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && H1(s);
          }
        }
      }
    }
    function P0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Fx()), t.forEach(function(i) {
          var u = Xb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xr)
              if (Ff !== null && Hf !== null)
                Qp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function nb(e, t, a) {
      Ff = a, Hf = e, Yt(t), V0(t, e), Yt(t), Ff = null, Hf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zx(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          Yt(p), V0(p, e), p = p.sibling;
      Yt(f);
    }
    function V0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case le:
        case We:
        case ct:
        case Fe: {
          if (cl(t, e), Kl(e), u & St) {
            try {
              ol(Yl | cr, e, e.return), Ho(Yl | cr, e);
            } catch (Pe) {
              sn(e, e.return, Pe);
            }
            if (e.mode & Lt) {
              try {
                Gl(), ol(fr | cr, e, e.return);
              } catch (Pe) {
                sn(e, e.return, Pe);
              }
              Wl(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (Pe) {
                sn(e, e.return, Pe);
              }
          }
          return;
        }
        case se: {
          cl(t, e), Kl(e), u & En && i !== null && Pf(i, i.return);
          return;
        }
        case te: {
          cl(t, e), Kl(e), u & En && i !== null && Pf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                PE(s);
              } catch (Pe) {
                sn(e, e.return, Pe);
              }
            }
            if (u & St) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    d1(f, g, y, v, p, e);
                  } catch (Pe) {
                    sn(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case Ve: {
          if (cl(t, e), Kl(e), u & St) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              p1(b, M, w);
            } catch (Pe) {
              sn(e, e.return, Pe);
            }
          }
          return;
        }
        case Z: {
          if (cl(t, e), Kl(e), u & St && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                F1(t.containerInfo);
              } catch (Pe) {
                sn(e, e.return, Pe);
              }
          }
          return;
        }
        case me: {
          cl(t, e), Kl(e);
          return;
        }
        case be: {
          cl(t, e), Kl(e);
          var F = e.child;
          if (F.flags & Nn) {
            var oe = F.stateNode, Le = F.memoizedState, we = Le !== null;
            if (oe.isHidden = we, we) {
              var Rt = F.alternate !== null && F.alternate.memoizedState !== null;
              Rt || Ab();
            }
          }
          if (u & St) {
            try {
              eb(e);
            } catch (Pe) {
              sn(e, e.return, Pe);
            }
            P0(e);
          }
          return;
        }
        case De: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & st
          ) {
            var D = Hr;
            Hr = D || yt, cl(t, e), Hr = D;
          } else
            cl(t, e);
          if (Kl(e), u & Nn) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, pe = e;
            if (H.isHidden = G, G && !yt && (pe.mode & st) !== ke) {
              Se = pe;
              for (var ce = pe.child; ce !== null; )
                Se = ce, ab(ce), ce = ce.sibling;
            }
            Kx(pe, G);
          }
          return;
        }
        case an: {
          cl(t, e), Kl(e), u & St && P0(e);
          return;
        }
        case bt:
          return;
        default: {
          cl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          Jx(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function rb(e, t, a) {
      Ff = a, Hf = t, Se = e, B0(e, t, a), Ff = null, Hf = null;
    }
    function B0(e, t, a) {
      for (var i = (e.mode & st) !== ke; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === De && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            kS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = km, w = Hr;
            km = p, Hr = g, Hr && !w && (Se = u, ib(u));
            for (var M = s; M !== null; )
              Se = M, B0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, km = b, Hr = w, kS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Dl) !== _e && s !== null ? (s.return = u, Se = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Dl) !== _e) {
          var u = i.alternate;
          Yt(i);
          try {
            Wx(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          on();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function ab(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case le:
          case We:
          case ct:
          case Fe: {
            if (t.mode & Lt)
              try {
                Gl(), ol(fr, t, t.return);
              } finally {
                Wl(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case se: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case te: {
            Pf(t, t.return);
            break;
          }
          case De: {
            var u = t.memoizedState !== null;
            if (u) {
              $0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : $0(e);
      }
    }
    function $0(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ib(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === De) {
          var i = t.memoizedState !== null;
          if (i) {
            Y0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : Y0(e);
      }
    }
    function Y0(e) {
      for (; Se !== null; ) {
        var t = Se;
        Yt(t);
        try {
          Gx(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (on(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function lb(e, t, a, i) {
      Se = t, ub(t, e, a, i);
    }
    function ub(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Wi) !== _e && s !== null ? (s.return = u, Se = s) : ob(e, t, a, i);
      }
    }
    function ob(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Wr) !== _e) {
          Yt(u);
          try {
            sb(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          on();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function sb(e, t, a, i) {
      switch (t.tag) {
        case le:
        case We:
        case Fe: {
          if (t.mode & Lt) {
            Wg();
            try {
              Ho(jr | cr, t);
            } finally {
              Qg(t);
            }
          } else
            Ho(jr | cr, t);
          break;
        }
      }
    }
    function cb(e) {
      Se = e, fb();
    }
    function fb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & ka) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, vb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Wi) !== _e && t !== null ? (t.return = e, Se = t) : db();
      }
    }
    function db() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Wr) !== _e && (Yt(e), pb(e), on());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function pb(e) {
      switch (e.tag) {
        case le:
        case We:
        case Fe: {
          e.mode & Lt ? (Wg(), ol(jr | cr, e, e.return), Qg(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function vb(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Yt(a), mb(a, t), on();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : hb(e);
      }
    }
    function hb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (A0(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function mb(e, t) {
      switch (e.tag) {
        case le:
        case We:
        case Fe: {
          e.mode & Lt ? (Wg(), ol(jr, e, t), Qg(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case le:
        case We:
        case Fe: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case le:
        case We:
        case Fe: {
          try {
            Ho(jr | cr, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case le:
        case We:
        case Fe: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function Eb(e) {
      switch (e.tag) {
        case le:
        case We:
        case Fe:
          try {
            ol(jr | cr, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var Cb = [];
    function Rb() {
      Cb.forEach(function(e) {
        return e();
      });
    }
    var Tb = z.ReactCurrentActQueue;
    function wb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function I0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Tb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xb = Math.ceil, DS = z.ReactCurrentDispatcher, OS = z.ReactCurrentOwner, Vr = z.ReactCurrentBatchConfig, fl = z.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), Q0 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Om = 3, jp = 4, W0 = 5, LS = 6, Ct = vr, Sa = null, Dn = null, hr = $, ql = $, MS = Oo($), mr = Bu, Fp = null, Lm = $, Hp = $, Mm = $, Pp = null, Pa = null, NS = 0, G0 = 500, K0 = 1 / 0, bb = 500, $u = null;
    function Vp() {
      K0 = Qn() + bb;
    }
    function q0() {
      return K0;
    }
    var Nm = !1, zS = null, Vf = null, nc = !1, Vo = null, Bp = $, US = [], AS = null, _b = 50, $p = 0, jS = null, FS = !1, zm = !1, kb = 50, Bf = 0, Um = null, Yp = qt, Am = $, X0 = !1;
    function jm() {
      return Sa;
    }
    function Ea() {
      return (Ct & (Br | Ai)) !== vr ? Qn() : (Yp !== qt || (Yp = Qn()), Yp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & st) === ke)
        return je;
      if ((Ct & Br) !== vr && hr !== $)
        return Ts(hr);
      var a = Tw() !== Rw;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === kt && (Am = Md()), Am;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = u1();
      return s;
    }
    function Db(e) {
      var t = e.mode;
      return (t & st) === ke ? je : Vv();
    }
    function yr(e, t, a, i) {
      Zb(), X0 && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), So(e, a, i), (Ct & Br) !== $ && e === Sa ? n_(t) : (Xr && bs(e, t, a), r_(t), e === Sa && ((Ct & Br) === vr && (Hp = Xe(Hp, a)), mr === jp && $o(e, hr)), Va(e, i), a === je && Ct === vr && (t.mode & st) === ke && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Vp(), XE()));
    }
    function Ob(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function Lb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      qc(e, t);
      var i = Kc(e, e === Sa ? hr : $);
      if (i === $) {
        a !== null && pR(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== IS)) {
        a == null && s !== je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pR(a);
      var f;
      if (u === je)
        e.tag === Lo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), iw(eR.bind(null, e))) : qE(eR.bind(null, e)), fl.current !== null ? fl.current.push(Mo) : s1(function() {
          (Ct & (Br | Ai)) === vr && Mo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Lr:
            p = ss;
            break;
          case bi:
            p = Ol;
            break;
          case Na:
            p = Gi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = Gi;
            break;
        }
        f = QS(p, J0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function J0(e, t) {
      if (Kw(), Yp = qt, Am = $, (Ct & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Iu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Kc(e, e === Sa ? hr : $);
      if (u === $)
        return null;
      var s = !Jc(e, u) && !Pv(e, u) && !t, f = s ? Vb(e, u) : Hm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== $ && (u = p, f = HS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, $), $o(e, u), Va(e, Qn()), v;
        }
        if (f === LS)
          $o(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Nb(g)) {
            if (f = Hm(e, u), f === tc) {
              var b = Xc(e);
              b !== $ && (u = b, f = HS(e, b));
            }
            if (f === Ap) {
              var w = Fp;
              throw rc(e, $), $o(e, u), Va(e, Qn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Mb(e, f, u);
        }
      }
      return Va(e, Qn()), e.callbackNode === a ? J0.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, J1(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Pa;
        Pa = a, s !== null && Z0(s);
      }
      return u;
    }
    function Z0(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function Mb(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Pa, $u);
          break;
        }
        case Om: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !vR()) {
            var i = NS + G0 - Qn();
            if (i > 10) {
              var u = Kc(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(ac.bind(null, e, Pa, $u), i);
              break;
            }
          }
          ac(e, Pa, $u);
          break;
        }
        case jp: {
          if ($o(e, a), Od(a))
            break;
          if (!vR()) {
            var f = ri(e, a), p = f, v = Qn() - p, y = Jb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(ac.bind(null, e, Pa, $u), y);
              break;
            }
          }
          ac(e, Pa, $u);
          break;
        }
        case W0: {
          ac(e, Pa, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Nb(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Q(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = ws(t, Mm), t = ws(t, Hp), Yv(e, t);
    }
    function eR(e) {
      if (qw(), (Ct & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Iu();
      var t = Kc(e, $);
      if (!Zr(t, je))
        return Va(e, Qn()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== $ && (t = i, a = HS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, $), $o(e, t), Va(e, Qn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Pa, $u), Va(e, Qn()), null;
    }
    function zb(e, t) {
      t !== $ && (ef(e, Xe(t, je)), Va(e, Qn()), (Ct & (Br | Ai)) === vr && (Vp(), Mo()));
    }
    function PS(e, t) {
      var a = Ct;
      Ct |= Q0;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Vp(), XE());
      }
    }
    function Ub(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Vr.transition = f, Ct === vr && Vp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Lo && (Ct & (Br | Ai)) === vr && Iu();
      var t = Ct;
      Ct |= Q0;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Vr.transition = a, Ct = t, (Ct & (Br | Ai)) === vr && Mo();
      }
    }
    function tR() {
      return (Ct & (Br | Ai)) !== vr;
    }
    function Fm(e, t) {
      aa(MS, ql, e), ql = Xe(ql, t);
    }
    function VS(e) {
      ql = MS.current, ra(MS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, o1(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          O0(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return Dn = s, hr = ql = t, mr = Bu, Fp = null, Lm = $, Hp = $, Mm = $, Pp = null, Pa = null, Ow(), rl.discardPendingWarnings(), s;
    }
    function nR(e, t) {
      do {
        var a = Dn;
        try {
          if (Gh(), bC(), on(), OS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, Dn = null;
            return;
          }
          if (Ae && a.mode & Lt && Tm(a, !0), He)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xi(a, i, hr);
            } else
              fs(a, t, hr);
          ix(e, a.return, a, t, hr), lR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function rR() {
      var e = DS.current;
      return DS.current = gm, e === null ? gm : e;
    }
    function aR(e) {
      DS.current = e;
    }
    function Ab() {
      NS = Qn();
    }
    function Ip(e) {
      Lm = Xe(e, Lm);
    }
    function jb() {
      mr === Bu && (mr = Om);
    }
    function BS() {
      (mr === Bu || mr === Om || mr === tc) && (mr = jp), Sa !== null && (Rs(Lm) || Rs(Hp)) && $o(Sa, hr);
    }
    function Fb(e) {
      mr !== jp && (mr = tc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Hb() {
      return mr === Bu;
    }
    function Hm(e, t) {
      var a = Ct;
      Ct |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), Iv(e, t);
        }
        $u = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Pb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      if (Gh(), Ct = a, aR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = $, mr;
    }
    function Pb() {
      for (; Dn !== null; )
        iR(Dn);
    }
    function Vb(e, t) {
      var a = Ct;
      Ct |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), Iv(e, t);
        }
        $u = Ad(), Vp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Bb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      return Gh(), aR(i), Ct = a, Dn !== null ? (Av(), Bu) : (Lc(), Sa = null, hr = $, mr);
    }
    function Bb() {
      for (; Dn !== null && !hd(); )
        iR(Dn);
    }
    function iR(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & Lt) !== ke ? (Ig(e), a = $S(t, e, ql), Tm(e, !0)) : a = $S(t, e, ql), on(), e.memoizedProps = e.pendingProps, a === null ? lR(e) : Dn = a, OS.current = null;
    }
    function lR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === _e) {
          Yt(t);
          var u = void 0;
          if ((t.mode & Lt) === ke ? u = D0(a, t, ql) : (Ig(t), u = D0(a, t, ql), Tm(t, !1)), on(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = jx(a, t);
          if (s !== null) {
            s.flags &= Ov, Dn = s;
            return;
          }
          if ((t.mode & Lt) !== ke) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = _e, i.deletions = null;
          else {
            mr = LS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Bu && (mr = W0);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, jn(Lr), $b(e, t, a, i);
      } finally {
        Vr.transition = u, jn(i);
      }
      return null;
    }
    function $b(e, t, a, i) {
      do
        Iu();
      while (Vo !== null);
      if (e_(), (Ct & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = Xe(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, Dn = null, hr = $), ((u.subtreeFlags & Wi) !== _e || (u.flags & Wi) !== _e) && (nc || (nc = !0, AS = a, QS(Gi, function() {
        return Iu(), null;
      })));
      var p = (u.subtreeFlags & (_l | kl | Dl | Wi)) !== _e, v = (u.flags & (_l | kl | Dl | Wi)) !== _e;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Ct;
        Ct |= Ai, OS.current = null, Bx(e, u), XC(), nb(e, u, s), t1(e.containerInfo), e.current = u, ds(s), rb(u, e, s), ps(), md(), Ct = b, jn(g), Vr.transition = y;
      } else
        e.current = u, XC();
      var w = nc;
      if (nc ? (nc = !1, Vo = e, Bp = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === $ && (Vf = null), w || cR(e.current, !1), gd(u.stateNode, i), Xr && e.memoizedUpdaters.clear(), Rb(), Va(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], oe = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: oe,
            digest: Le
          });
        }
      if (Nm) {
        Nm = !1;
        var we = zS;
        throw zS = null, we;
      }
      return Zr(Bp, je) && e.tag !== Lo && Iu(), f = e.pendingLanes, Zr(f, je) ? (Gw(), e === jS ? $p++ : ($p = 0, jS = e)) : $p = 0, Mo(), Rd(), null;
    }
    function Iu() {
      if (Vo !== null) {
        var e = Gv(Bp), t = ks(Na, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, jn(t), Ib();
        } finally {
          jn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Yb(e) {
      US.push(e), nc || (nc = !0, QS(Gi, function() {
        return Iu(), null;
      }));
    }
    function Ib() {
      if (Vo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = $, (Ct & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, Su(a);
      var i = Ct;
      Ct |= Ai, cb(t.current), lb(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Qx(t, f);
        }
      }
      xd(), cR(t.current, !0), Ct = i, Mo(), zm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, FS = !1, zm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Qb(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function Wb(e) {
      Nm || (Nm = !0, zS = e);
    }
    var Gb = Wb;
    function oR(e, t, a) {
      var i = Zs(a, t), u = i0(e, i, je), s = zo(e, u, je), f = Ea();
      s !== null && (So(s, je, f), Va(s, f));
    }
    function sn(e, t, a) {
      if (Hx(a), Wp(!1), e.tag === Z) {
        oR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          oR(i, e, a);
          return;
        } else if (i.tag === se) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uR(s)) {
            var f = Zs(a, e), p = sS(i, f, je), v = zo(i, p, je), y = Ea();
            v !== null && (So(v, je, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Kb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Zc(e, a), a_(e), Sa === e && ku(hr, a) && (mr === jp || mr === Om && _u(hr) && Qn() - NS < G0 ? rc(e, $) : Mm = Xe(Mm, a)), Va(e, u);
    }
    function sR(e, t) {
      t === kt && (t = Db(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function qb(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), sR(e, a);
    }
    function Xb(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case an:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sR(e, a);
    }
    function Jb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xb(e / 1960) * 1960;
    }
    function Zb() {
      if ($p > _b)
        throw $p = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > kb && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function e_() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function cR(e, t) {
      Yt(e), Pm(e, bl, Sb), t && Pm(e, Ri, Eb), Pm(e, bl, yb), t && Pm(e, Ri, gb), on();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function fR(e) {
      {
        if ((Ct & Br) !== vr || !(e.mode & st))
          return;
        var t = e.tag;
        if (t !== Ue && t !== Z && t !== se && t !== le && t !== We && t !== ct && t !== Fe)
          return;
        var a = $e(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Yt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : on();
        }
      }
    }
    var $S;
    {
      var t_ = null;
      $S = function(e, t, a) {
        var i = SR(t_, t);
        try {
          return w0(e, t, a);
        } catch (s) {
          if (pw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), bC(), O0(e, t), SR(t, i), t.mode & Lt && Ig(t), xl(null, w0, null, e, t, a), Ii()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function n_(e) {
      if (hi && !Iw())
        switch (e.tag) {
          case le:
          case We:
          case Fe: {
            var t = Dn && $e(Dn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = $e(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case se: {
            dR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (Xr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), IS) : vd(e, t);
      }
    }
    function pR(e) {
      if (e !== IS)
        return Mv(e);
    }
    function vR() {
      return fl.current !== null;
    }
    function r_(e) {
      {
        if (e.mode & st) {
          if (!I0())
            return;
        } else if (!wb() || Ct !== vr || e.tag !== le && e.tag !== We && e.tag !== Fe)
          return;
        if (fl.current === null) {
          var t = ir;
          try {
            Yt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, $e(e));
          } finally {
            t ? Yt(e) : on();
          }
        }
      }
    }
    function a_(e) {
      e.tag !== Lo && I0() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      X0 = e;
    }
    var ji = null, $f = null, i_ = function(e) {
      ji = e;
    };
    function Yf(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Yf(e);
    }
    function GS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: B,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function hR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case se: {
            typeof i == "function" && (u = !0);
            break;
          }
          case le: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case We: {
            (s === B || s === Ye) && (u = !0);
            break;
          }
          case ct:
          case Fe: {
            (s === Ke || s === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function mR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var l_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Iu(), Yu(function() {
          KS(e.current, i, a);
        });
      }
    }, u_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Iu(), Yu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function KS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case le:
          case Fe:
          case se:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ji(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === se ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Fa(e, je);
          w !== null && yr(w, e, je, qt);
        }
        u !== null && !g && KS(u, t, a), s !== null && KS(s, t, a);
      }
    }
    var o_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case le:
          case Fe:
          case se:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? s_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function s_(e, t) {
      {
        var a = c_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case te:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function c_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === te)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var yR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function f_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new f_(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function d_(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function p_(e) {
      if (typeof e == "function")
        return JS(e) ? se : le;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return We;
        if (t === Ke)
          return ct;
      }
      return Ue;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ue:
        case le:
        case Fe:
          a.type = Yf(e.type);
          break;
        case se:
          a.type = WS(e.type);
          break;
        case We:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function v_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function h_(e, t, a) {
      var i;
      return e === Fh ? (i = st, t === !0 && (i |= Wt, i |= Mt)) : i = ke, Xr && (i |= Lt), ui(Z, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Ue, p = e;
      if (typeof e == "function")
        JS(e) ? (f = se, p = WS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = te;
      else
        e: switch (e) {
          case fi:
            return Yo(a.children, u, s, t);
          case Qa:
            f = ht, u |= Wt, (u & st) !== ke && (u |= Mt);
            break;
          case di:
            return m_(a, u, s, t);
          case ie:
            return y_(a, u, s, t);
          case he:
            return g_(a, u, s, t);
          case Tn:
            return gR(a, u, s, t);
          case en:
          case ft:
          case un:
          case ar:
          case ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = pt;
                  break e;
                case R:
                  f = fn;
                  break e;
                case B:
                  f = We, p = GS(p);
                  break e;
                case Ke:
                  f = ct;
                  break e;
                case Ye:
                  f = rn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? $e(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function eE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ui(vt, e, i, t);
      return u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(mt, e, i, t | Lt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function y_(e, t, a, i) {
      var u = ui(be, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function g_(e, t, a, i) {
      var u = ui(an, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function gR(e, t, a, i) {
      var u = ui(De, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function tE(e, t, a) {
      var i = ui(Ve, e, null, t);
      return i.lanes = a, i;
    }
    function S_() {
      var e = ui(te, null, null, ke);
      return e.elementType = "DELETED", e;
    }
    function E_(e) {
      var t = ui(Xt, null, null, ke);
      return t.stateNode = e, t;
    }
    function nE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function SR(e, t) {
      return e === null && (e = ui(Ue, null, null, ke)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function C_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = xs($), this.expirationTimes = xs(qt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = xs($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ER(e, t, a, i, u, s, f, p, v, y) {
      var g = new C_(e, t, a, p, v), b = h_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return hg(b), g;
    }
    var rE = "18.3.1";
    function R_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var aE, iE;
    aE = !1, iE = {};
    function CR(e) {
      if (!e)
        return li;
      var t = po(e), a = aw(t);
      if (t.tag === se) {
        var i = t.type;
        if ($l(i))
          return GE(t, i, a);
      }
      return a;
    }
    function T_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & Wt) {
          var s = $e(a) || "Component";
          if (!iE[s]) {
            iE[s] = !0;
            var f = ir;
            try {
              Yt(u), a.mode & Wt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Yt(f) : on();
            }
          }
        }
        return u.stateNode;
      }
    }
    function RR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return ER(e, t, v, y, a, i, u, s, f);
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = ER(a, i, g, e, u, s, f, p, v);
      b.context = CR(null);
      var w = b.current, M = Ea(), A = Bo(w), F = Pu(M, A);
      return F.callback = t ?? null, zo(w, F, A), Ob(b, A, M), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      gn(f);
      var p = CR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !aE && (aE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, $e(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case te:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function w_(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fv(t);
            zb(t, a);
          }
          break;
        }
        case be: {
          Yu(function() {
            var u = Fa(e, je);
            if (u !== null) {
              var s = Ea();
              yr(u, e, je, s);
            }
          });
          var i = je;
          lE(e, i);
          break;
        }
      }
    }
    function wR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function lE(e, t) {
      wR(e, t);
      var a = e.alternate;
      a && wR(a, t);
    }
    function x_(e) {
      if (e.tag === be) {
        var t = Ss, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function b_(e) {
      if (e.tag === be) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function xR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function __(e) {
      return bR(e);
    }
    var _R = function(e) {
      return !1;
    };
    function k_(e) {
      return _R(e);
    }
    var kR = null, DR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null;
    {
      var jR = function(e, t, a) {
        var i = t[a], u = it(e) ? e.slice() : tt({}, e);
        return a + 1 === t.length ? (it(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return jR(e, t, 0);
      }, HR = function(e, t, a, i) {
        var u = t[i], s = it(e) ? e.slice() : tt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], it(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = HR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, PR = function(e, t, a) {
        if (t.length !== a.length) {
          Ze("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ze("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return HR(e, t, a, 0);
      }, VR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = it(e) ? e.slice() : tt({}, e);
        return s[u] = VR(e[u], t, a + 1, i), s;
      }, BR = function(e, t, a) {
        return VR(e, t, 0, a);
      }, uE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, qt);
        }
      }, DR = function(e, t, a) {
        var i = uE(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = tt({}, e.memoizedProps);
          var s = Fa(e, je);
          s !== null && yr(s, e, je, qt);
        }
      }, OR = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = PR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, qt);
        }
      }, LR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, qt);
      }, MR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, je);
        a !== null && yr(a, e, je, qt);
      }, NR = function(e, t, a) {
        e.pendingProps = PR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, qt);
      }, zR = function(e) {
        var t = Fa(e, je);
        t !== null && yr(t, e, je, qt);
      }, UR = function(e) {
        bR = e;
      }, AR = function(e) {
        _R = e;
      };
    }
    function D_(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function O_(e) {
      return null;
    }
    function L_() {
      return ir;
    }
    function M_(e) {
      var t = e.findFiberByHostInstance, a = z.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: DR,
        overrideHookStateRenamePath: OR,
        overrideProps: LR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: NR,
        setErrorHandler: UR,
        setSuspenseHandler: AR,
        scheduleUpdate: zR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: D_,
        findFiberByHostInstance: t || O_,
        // React Refresh
        findHostInstancesForRefresh: o_,
        scheduleRefresh: l_,
        scheduleRoot: u_,
        setRefreshHandler: i_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: L_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: rE
      });
    }
    var $R = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function oE(e) {
      this._internalRoot = e;
    }
    $m.prototype.render = oE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = xR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, $m.prototype.unmount = oE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          Gp(null, e, null, null);
        }), $E(t);
      }
    };
    function N_(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YR(e);
      var a = !1, i = !1, u = "", s = $R;
      t != null && (t.hydrate ? Ze("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = RR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new oE(f);
    }
    function $m(e) {
      this._internalRoot = e;
    }
    function z_(e) {
      e && Zv(e);
    }
    $m.prototype.unstable_scheduleHydration = z_;
    function U_(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $R;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = TR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Hw(y, b);
        }
      return new $m(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Yi || e.nodeType === nd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var A_ = z.ReactCurrentOwner, IR;
    IR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = xR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = sE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function sE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function j_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = TR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = RR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ep(b), Yu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function F_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Im(e, t, a, i, u) {
      IR(a), F_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = j_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Bm(f);
    }
    var WR = !1;
    function H_(e) {
      {
        WR || (WR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = A_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : T_(e, "findDOMNode");
    }
    function P_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Im(null, e, t, !0, a);
    }
    function V_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Im(null, e, t, !1, a);
    }
    function B_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ly(e))
        throw new Error("parentComponent must be a valid React Component");
      return Im(e, t, a, !1, i);
    }
    var GR = !1;
    function $_(e) {
      if (GR || (GR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = sE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Im(null, null, e, !1, function() {
            e._reactRootContainer = null, $E(e);
          });
        }), !0;
      } else {
        {
          var u = sE(e), s = !!(u && Do(u)), f = e.nodeType === Qr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(w_), Eo(x_), Kv(b_), Os(Ua), jd(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(IT), iy(PS, Ub, Yu);
    function Y_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return R_(e, t, null, a);
    }
    function I_(e, t, a, i) {
      return B_(e, t, a, i);
    }
    var cE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Mh, oo, Sc, PS]
    };
    function Q_(e, t) {
      return cE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N_(e, t);
    }
    function W_(e, t, a) {
      return cE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t, a);
    }
    function G_(e) {
      return tR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var K_ = M_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: rE,
      rendererPackageName: "react-dom"
    });
    if (!K_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cE, $a.createPortal = Y_, $a.createRoot = Q_, $a.findDOMNode = H_, $a.flushSync = G_, $a.hydrate = P_, $a.hydrateRoot = W_, $a.render = V_, $a.unmountComponentAtNode = $_, $a.unstable_batchedUpdates = PS, $a.unstable_renderSubtreeIntoContainer = I_, $a.version = rE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $a;
}
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (J) {
      console.error(J);
    }
  }
}
process.env.NODE_ENV === "production" ? (sT(), vE.exports = ak()) : vE.exports = ik();
var cT = vE.exports, hE, Gm = cT;
if (process.env.NODE_ENV === "production")
  hE = Gm.createRoot, Gm.hydrateRoot;
else {
  var lT = Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hE = function(J, K) {
    lT.usingClientEntryPoint = !0;
    try {
      return Gm.createRoot(J, K);
    } finally {
      lT.usingClientEntryPoint = !1;
    }
  };
}
var Jl = ev();
function lk() {
  return {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e4,
    padding: 16
  };
}
function uk() {
  return {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #e3e6ea",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
    maxWidth: 480,
    width: "100%",
    padding: "22px 24px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#3c3c3c"
  };
}
function fT({
  title: J,
  children: K,
  onClose: z
}) {
  return Jl.useEffect(() => {
    const Je = (Qe) => {
      Qe.key === "Escape" && z();
    };
    return window.addEventListener("keydown", Je), () => window.removeEventListener("keydown", Je);
  }, [z]), cT.createPortal(
    /* @__PURE__ */ cn.jsx("div", { style: lk(), role: "presentation", onMouseDown: (Je) => Je.target === Je.currentTarget && z(), children: /* @__PURE__ */ cn.jsxs("div", { style: uk(), role: "dialog", "aria-modal": "true", "aria-labelledby": "registry-modal-title", children: [
      /* @__PURE__ */ cn.jsx("h2", { id: "registry-modal-title", style: { margin: "0 0 12px", fontSize: "1.15rem" }, children: J }),
      K
    ] }) }),
    document.body
  );
}
function ok({
  repository: J,
  onClose: K
}) {
  const [z, Je] = Jl.useState(""), [Qe, Ze] = Jl.useState(!1), [S, Tt] = Jl.useState(null), le = z.trim() === J, se = async () => {
    var Ue, Z, me;
    if (!(!le || Qe)) {
      Ze(!0), Tt(null);
      try {
        const te = (Ue = window.registryRepoPathUrl) == null ? void 0 : Ue.call(window, "/ui/repositories", J);
        if (!te) throw new Error("UI not initialized");
        const Ve = await fetch(`${te}/delete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            confirm_name: J,
            app_api_key: ((Z = window.registryRepoApiKey) == null ? void 0 : Z.call(window)) ?? null
          })
        }), vt = await Ve.json();
        if (!Ve.ok) throw new Error(vt.detail || "Delete failed");
        (me = window.registryRepoReload) == null || me.call(window);
      } catch (te) {
        Tt(te instanceof Error ? te.message : String(te)), Ze(!1);
      }
    }
  };
  return /* @__PURE__ */ cn.jsxs(fT, { title: "Delete repository", onClose: K, children: [
    /* @__PURE__ */ cn.jsxs("p", { style: { margin: "0 0 12px", fontSize: 14, lineHeight: 1.5, color: "#5c6570" }, children: [
      "This removes all tags and manifest metadata for ",
      /* @__PURE__ */ cn.jsx("strong", { children: J }),
      ". Clients will no longer pull images from this path. Blob files remain on disk until you run garbage collection."
    ] }),
    /* @__PURE__ */ cn.jsx("label", { style: { display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }, children: "Type the repository name to confirm" }),
    /* @__PURE__ */ cn.jsx(
      "input",
      {
        type: "text",
        value: z,
        autoFocus: !0,
        onChange: (Ue) => Je(Ue.target.value),
        placeholder: J,
        style: {
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #cfd5df",
          borderRadius: 8,
          fontSize: 14,
          boxSizing: "border-box"
        }
      }
    ),
    S ? /* @__PURE__ */ cn.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: S }) : null,
    /* @__PURE__ */ cn.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ cn.jsx("button", { type: "button", onClick: K, disabled: Qe, className: "registry-modal-btn secondary", children: "Cancel" }),
      /* @__PURE__ */ cn.jsx(
        "button",
        {
          type: "button",
          onClick: se,
          disabled: !le || Qe,
          className: "registry-modal-btn danger",
          children: Qe ? "Deleting…" : "Delete repository"
        }
      )
    ] })
  ] });
}
function sk({
  repository: J,
  onClose: K
}) {
  const [z, Je] = Jl.useState(!1), [Qe, Ze] = Jl.useState(null), S = async () => {
    var Tt, le, se;
    if (!z) {
      Je(!0), Ze(null);
      try {
        const Ue = (Tt = window.registryRepoPathUrl) == null ? void 0 : Tt.call(window, "/ui/repositories", J);
        if (!Ue) throw new Error("UI not initialized");
        const Z = await fetch(`${Ue}/unlock`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ app_api_key: ((le = window.registryRepoApiKey) == null ? void 0 : le.call(window)) ?? null })
        }), me = await Z.json();
        if (!Z.ok) throw new Error(me.detail || "Unlock failed");
        (se = window.registryRepoReload) == null || se.call(window);
      } catch (Ue) {
        Ze(Ue instanceof Error ? Ue.message : String(Ue)), Je(!1);
      }
    }
  };
  return /* @__PURE__ */ cn.jsxs(fT, { title: "Unlock repository?", onClose: K, children: [
    /* @__PURE__ */ cn.jsxs("p", { style: { margin: "0 0 10px", fontSize: 14, lineHeight: 1.5, color: "#5c6570" }, children: [
      /* @__PURE__ */ cn.jsx("strong", { children: J }),
      " is protected. Unlocking allows administrators to:"
    ] }),
    /* @__PURE__ */ cn.jsxs("ul", { style: { margin: "0 0 14px", paddingLeft: 20, fontSize: 14, color: "#5c6570", lineHeight: 1.5 }, children: [
      /* @__PURE__ */ cn.jsx("li", { children: "Delete the repository and all of its tags" }),
      /* @__PURE__ */ cn.jsx("li", { children: "Rename the repository (updates metadata and image references)" }),
      /* @__PURE__ */ cn.jsx("li", { children: "Delete individual tags inside the repository" })
    ] }),
    /* @__PURE__ */ cn.jsx("p", { style: { margin: 0, fontSize: 13, color: "#8b95a5" }, children: "Push, pull, and replicate are not blocked by the lock. Re-lock anytime from the Repositories page." }),
    Qe ? /* @__PURE__ */ cn.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: Qe }) : null,
    /* @__PURE__ */ cn.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ cn.jsx("button", { type: "button", onClick: K, disabled: z, className: "registry-modal-btn secondary", children: "Keep locked" }),
      /* @__PURE__ */ cn.jsx("button", { type: "button", onClick: S, disabled: z, className: "registry-modal-btn primary", children: z ? "Unlocking…" : "Unlock repository" })
    ] })
  ] });
}
function ck() {
  const [J, K] = Jl.useState(null), [z, Je] = Jl.useState(""), Qe = Jl.useCallback(() => {
    K(null), Je("");
  }, []);
  return Jl.useEffect(() => (window.RegistryRepositoriesUi = {
    openDeleteRepository: (Ze) => {
      Je(Ze), K("delete");
    },
    openUnlockRepository: (Ze) => {
      Je(Ze), K("unlock");
    }
  }, () => {
    delete window.RegistryRepositoriesUi;
  }), []), !J || !z ? null : J === "delete" ? /* @__PURE__ */ cn.jsx(ok, { repository: z, onClose: Qe }) : /* @__PURE__ */ cn.jsx(sk, { repository: z, onClose: Qe });
}
const uT = document.getElementById("registry-modals-root");
uT && hE(uT).render(/* @__PURE__ */ cn.jsx(ck, {}));
