var hE = { exports: {} }, Xp = {}, Gm = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function ek() {
  if (ZR) return Et;
  ZR = 1;
  var I = Symbol.for("react.element"), B = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Re = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), S = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), J = Symbol.iterator;
  function ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ee = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Me = Object.assign, Ke = {};
  function st(_, P, Ye) {
    this.props = _, this.context = P, this.refs = Ke, this.updater = Ye || ee;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, st.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Jt() {
  }
  Jt.prototype = st.prototype;
  function yt(_, P, Ye) {
    this.props = _, this.context = P, this.refs = Ke, this.updater = Ye || ee;
  }
  var Je = yt.prototype = new Jt();
  Je.constructor = yt, Me(Je, st.prototype), Je.isPureReactComponent = !0;
  var gt = Array.isArray, ke = Object.prototype.hasOwnProperty, vt = { current: null }, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ln(_, P, Ye) {
    var Pe, ct = {}, it = null, rt = null;
    if (P != null) for (Pe in P.ref !== void 0 && (rt = P.ref), P.key !== void 0 && (it = "" + P.key), P) ke.call(P, Pe) && !Ie.hasOwnProperty(Pe) && (ct[Pe] = P[Pe]);
    var lt = arguments.length - 2;
    if (lt === 1) ct.children = Ye;
    else if (1 < lt) {
      for (var ft = Array(lt), Bt = 0; Bt < lt; Bt++) ft[Bt] = arguments[Bt + 2];
      ct.children = ft;
    }
    if (_ && _.defaultProps) for (Pe in lt = _.defaultProps, lt) ct[Pe] === void 0 && (ct[Pe] = lt[Pe]);
    return { $$typeof: I, type: _, key: it, ref: rt, props: ct, _owner: vt.current };
  }
  function Ht(_, P) {
    return { $$typeof: I, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Zt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === I;
  }
  function un(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Ye) {
      return P[Ye];
    });
  }
  var _t = /\/+/g;
  function Ne(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? un("" + _.key) : P.toString(36);
  }
  function jt(_, P, Ye, Pe, ct) {
    var it = typeof _;
    (it === "undefined" || it === "boolean") && (_ = null);
    var rt = !1;
    if (_ === null) rt = !0;
    else switch (it) {
      case "string":
      case "number":
        rt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case I:
          case B:
            rt = !0;
        }
    }
    if (rt) return rt = _, ct = ct(rt), _ = Pe === "" ? "." + Ne(rt, 0) : Pe, gt(ct) ? (Ye = "", _ != null && (Ye = _.replace(_t, "$&/") + "/"), jt(ct, P, Ye, "", function(Bt) {
      return Bt;
    })) : ct != null && (Zt(ct) && (ct = Ht(ct, Ye + (!ct.key || rt && rt.key === ct.key ? "" : ("" + ct.key).replace(_t, "$&/") + "/") + _)), P.push(ct)), 1;
    if (rt = 0, Pe = Pe === "" ? "." : Pe + ":", gt(_)) for (var lt = 0; lt < _.length; lt++) {
      it = _[lt];
      var ft = Pe + Ne(it, lt);
      rt += jt(it, P, Ye, ft, ct);
    }
    else if (ft = ce(_), typeof ft == "function") for (_ = ft.call(_), lt = 0; !(it = _.next()).done; ) it = it.value, ft = Pe + Ne(it, lt++), rt += jt(it, P, Ye, ft, ct);
    else if (it === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return rt;
  }
  function kt(_, P, Ye) {
    if (_ == null) return _;
    var Pe = [], ct = 0;
    return jt(_, Pe, "", "", function(it) {
      return P.call(Ye, it, ct++);
    }), Pe;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(Ye) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Ye);
      }, function(Ye) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Ye);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ce = { current: null }, te = { transition: null }, we = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: te, ReactCurrentOwner: vt };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: kt, forEach: function(_, P, Ye) {
    kt(_, function() {
      P.apply(this, arguments);
    }, Ye);
  }, count: function(_) {
    var P = 0;
    return kt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return kt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Zt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = st, Et.Fragment = k, Et.Profiler = Re, Et.PureComponent = yt, Et.StrictMode = $e, Et.Suspense = $, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Et.act = ie, Et.cloneElement = function(_, P, Ye) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Pe = Me({}, _.props), ct = _.key, it = _.ref, rt = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (it = P.ref, rt = vt.current), P.key !== void 0 && (ct = "" + P.key), _.type && _.type.defaultProps) var lt = _.type.defaultProps;
      for (ft in P) ke.call(P, ft) && !Ie.hasOwnProperty(ft) && (Pe[ft] = P[ft] === void 0 && lt !== void 0 ? lt[ft] : P[ft]);
    }
    var ft = arguments.length - 2;
    if (ft === 1) Pe.children = Ye;
    else if (1 < ft) {
      lt = Array(ft);
      for (var Bt = 0; Bt < ft; Bt++) lt[Bt] = arguments[Bt + 2];
      Pe.children = lt;
    }
    return { $$typeof: I, type: _.type, key: ct, ref: it, props: Pe, _owner: rt };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: je, _context: _ }, _.Consumer = _;
  }, Et.createElement = ln, Et.createFactory = function(_) {
    var P = ln.bind(null, _);
    return P.type = _, P;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: Ve, render: _ };
  }, Et.isValidElement = Zt, Et.lazy = function(_) {
    return { $$typeof: Te, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, Et.memo = function(_, P) {
    return { $$typeof: ne, type: _, compare: P === void 0 ? null : P };
  }, Et.startTransition = function(_) {
    var P = te.transition;
    te.transition = {};
    try {
      _();
    } finally {
      te.transition = P;
    }
  }, Et.unstable_act = ie, Et.useCallback = function(_, P) {
    return Ce.current.useCallback(_, P);
  }, Et.useContext = function(_) {
    return Ce.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return Ce.current.useDeferredValue(_);
  }, Et.useEffect = function(_, P) {
    return Ce.current.useEffect(_, P);
  }, Et.useId = function() {
    return Ce.current.useId();
  }, Et.useImperativeHandle = function(_, P, Ye) {
    return Ce.current.useImperativeHandle(_, P, Ye);
  }, Et.useInsertionEffect = function(_, P) {
    return Ce.current.useInsertionEffect(_, P);
  }, Et.useLayoutEffect = function(_, P) {
    return Ce.current.useLayoutEffect(_, P);
  }, Et.useMemo = function(_, P) {
    return Ce.current.useMemo(_, P);
  }, Et.useReducer = function(_, P, Ye) {
    return Ce.current.useReducer(_, P, Ye);
  }, Et.useRef = function(_) {
    return Ce.current.useRef(_);
  }, Et.useState = function(_) {
    return Ce.current.useState(_);
  }, Et.useSyncExternalStore = function(_, P, Ye) {
    return Ce.current.useSyncExternalStore(_, P, Ye);
  }, Et.useTransition = function() {
    return Ce.current.useTransition();
  }, Et.version = "18.3.1", Et;
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
var eT;
function tk() {
  return eT || (eT = 1, function(I, B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = "18.3.1", $e = Symbol.for("react.element"), Re = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), st = Symbol.iterator, Jt = "@@iterator";
      function yt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[Jt];
        return typeof C == "function" ? C : null;
      }
      var Je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, gt = {
        transition: null
      }, ke = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, vt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, ln = null;
      function Ht(h) {
        ln = h;
      }
      Ie.setExtraStackFrame = function(h) {
        ln = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        ln && (h += ln);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Zt = !1, un = !1, _t = !1, Ne = !1, jt = !1, kt = {
        ReactCurrentDispatcher: Je,
        ReactCurrentBatchConfig: gt,
        ReactCurrentOwner: vt
      };
      kt.ReactDebugCurrentFrame = Ie, kt.ReactCurrentActQueue = ke;
      function Ot(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          te("warn", h, z);
        }
      }
      function Ce(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          te("error", h, z);
        }
      }
      function te(h, C, z) {
        {
          var j = kt.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", z = z.concat([Z]));
          var ze = z.map(function(le) {
            return String(le);
          });
          ze.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ze);
        }
      }
      var we = {};
      function ie(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", Z = j + "." + C;
          if (we[Z])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), we[Z] = !0;
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
        enqueueForceUpdate: function(h, C, z) {
          ie(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, z, j) {
          ie(h, "replaceState");
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
        enqueueSetState: function(h, C, z, j) {
          ie(h, "setState");
        }
      }, P = Object.assign, Ye = {};
      Object.freeze(Ye);
      function Pe(h, C, z) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = z || _;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Pe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, it = function(h, C) {
          Object.defineProperty(Pe.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var rt in ct)
          ct.hasOwnProperty(rt) && it(rt, ct[rt]);
      }
      function lt() {
      }
      lt.prototype = Pe.prototype;
      function ft(h, C, z) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = z || _;
      }
      var Bt = ft.prototype = new lt();
      Bt.constructor = ft, P(Bt, Pe.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function Cn(h) {
        return br(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
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
      function ci(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? z + "(" + Z + ")" : z;
      }
      function sa(h) {
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
          case je:
            return "Fragment";
          case Re:
            return "Portal";
          case Ve:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ne:
              var C = h;
              return sa(C) + ".Consumer";
            case $:
              var z = h;
              return sa(z._context) + ".Provider";
            case Te:
              return ci(h, h.render, "ForwardRef");
            case ee:
              var j = h.displayName || null;
              return j !== null ? j : Kn(h.type) || "Memo";
            case Me: {
              var Z = h, ze = Z._payload, le = Z._init;
              try {
                return Kn(le(ze));
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
      }, Sr, Ya, Ln;
      Ln = {};
      function Er(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Qa(h, C) {
        var z = function() {
          Sr || (Sr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, C) {
        var z = function() {
          Ya || (Ya = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function re(h) {
        if (typeof h.ref == "string" && vt.current && h.__self && vt.current.stateNode !== h.__self) {
          var C = Kn(vt.current.type);
          Ln[C] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var xe = function(h, C, z, j, Z, ze, le) {
        var Fe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: $e,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: le,
          // Record the component responsible for creating this element.
          _owner: ze
        };
        return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Fe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Fe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
      };
      function ut(h, C, z) {
        var j, Z = {}, ze = null, le = null, Fe = null, mt = null;
        if (C != null) {
          Er(C) && (le = C.ref, re(C)), ca(C) && (Yr(C.key), ze = "" + C.key), Fe = C.__self === void 0 ? null : C.__self, mt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          Z.children = z;
        else if (bt > 1) {
          for (var rn = Array(bt), Qt = 0; Qt < bt; Qt++)
            rn[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(rn), Z.children = rn;
        }
        if (h && h.defaultProps) {
          var ot = h.defaultProps;
          for (j in ot)
            Z[j] === void 0 && (Z[j] = ot[j]);
        }
        if (ze || le) {
          var Wt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ze && Qa(Z, Wt), le && fi(Z, Wt);
        }
        return xe(h, ze, le, Fe, mt, vt.current, Z);
      }
      function Ft(h, C) {
        var z = xe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function en(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = P({}, h.props), ze = h.key, le = h.ref, Fe = h._self, mt = h._source, bt = h._owner;
        if (C != null) {
          Er(C) && (le = C.ref, bt = vt.current), ca(C) && (Yr(C.key), ze = "" + C.key);
          var rn;
          h.type && h.type.defaultProps && (rn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !$n.hasOwnProperty(j) && (C[j] === void 0 && rn !== void 0 ? Z[j] = rn[j] : Z[j] = C[j]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          Z.children = z;
        else if (Qt > 1) {
          for (var ot = Array(Qt), Wt = 0; Wt < Qt; Wt++)
            ot[Wt] = arguments[Wt + 2];
          Z.children = ot;
        }
        return xe(h.type, ze, le, Fe, mt, bt, Z);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === $e;
      }
      var on = ".", qn = ":";
      function tn(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return z[Z];
        });
        return "$" + j;
      }
      var $t = !1, It = /\/+/g;
      function fa(h) {
        return h.replace(It, "$&/");
      }
      function Cr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), tn("" + h.key)) : C.toString(36);
      }
      function wa(h, C, z, j, Z) {
        var ze = typeof h;
        (ze === "undefined" || ze === "boolean") && (h = null);
        var le = !1;
        if (h === null)
          le = !0;
        else
          switch (ze) {
            case "string":
            case "number":
              le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case $e:
                case Re:
                  le = !0;
              }
          }
        if (le) {
          var Fe = h, mt = Z(Fe), bt = j === "" ? on + Cr(Fe, 0) : j;
          if (Cn(mt)) {
            var rn = "";
            bt != null && (rn = fa(bt) + "/"), wa(mt, C, rn, "", function(Kf) {
              return Kf;
            });
          } else mt != null && (vn(mt) && (mt.key && (!Fe || Fe.key !== mt.key) && Yr(mt.key), mt = Ft(
            mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (mt.key && (!Fe || Fe.key !== mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + mt.key) + "/"
            ) : "") + bt
          )), C.push(mt));
          return 1;
        }
        var Qt, ot, Wt = 0, hn = j === "" ? on : j + qn;
        if (Cn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Qt = h[Rl], ot = hn + Cr(Qt, Rl), Wt += wa(Qt, C, z, ot, Z);
        else {
          var Ko = yt(h);
          if (typeof Ko == "function") {
            var Bi = h;
            Ko === Bi.entries && ($t || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var qo = Ko.call(Bi), ou, Gf = 0; !(ou = qo.next()).done; )
              Qt = ou.value, ot = hn + Cr(Qt, Gf++), Wt += wa(Qt, C, z, ot, Z);
          } else if (ze === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Wt;
      }
      function Hi(h, C, z) {
        if (h == null)
          return h;
        var j = [], Z = 0;
        return wa(h, j, "", "", function(ze) {
          return C.call(z, ze, Z++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, z) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: ne,
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
          $$typeof: $,
          _context: C
        };
        var z = !1, j = !1, Z = !1;
        {
          var ze = {
            $$typeof: ne,
            _context: C
          };
          Object.defineProperties(ze, {
            Provider: {
              get: function() {
                return j || (j = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(le) {
                C.Provider = le;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(le) {
                C._currentValue = le;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(le) {
                C._currentValue2 = le;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(le) {
                C._threadCount = le;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(le) {
                Z || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", le), Z = !0);
              }
            }
          }), C.Consumer = ze;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, kr = 0, rr = 1, di = 2;
      function Wa(h) {
        if (h._status === _r) {
          var C = h._result, z = C();
          if (z.then(function(ze) {
            if (h._status === kr || h._status === _r) {
              var le = h;
              le._status = rr, le._result = ze;
            }
          }, function(ze) {
            if (h._status === kr || h._status === _r) {
              var le = h;
              le._status = di, le._result = ze;
            }
          }), h._status === _r) {
            var j = h;
            j._status = kr, j._result = z;
          }
        }
        if (h._status === rr) {
          var Z = h._result;
          return Z === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, z = {
          $$typeof: Me,
          _payload: C,
          _init: Wa
        };
        {
          var j, Z;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(ze) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = ze, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(ze) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = ze, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === ee ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Te,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === je || h === Ve || jt || h === S || h === J || h === ce || Ne || h === Ke || Zt || un || _t || typeof h == "object" && h !== null && (h.$$typeof === Me || h.$$typeof === ee || h.$$typeof === $ || h.$$typeof === ne || h.$$typeof === Te || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        Y(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: ee,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(Z) {
              j = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return z;
      }
      function me() {
        var h = Je.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function et(h) {
        var C = me();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function qe(h) {
        var C = me();
        return C.useState(h);
      }
      function ht(h, C, z) {
        var j = me();
        return j.useReducer(h, C, z);
      }
      function dt(h) {
        var C = me();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = me();
        return z.useEffect(h, C);
      }
      function nn(h, C) {
        var z = me();
        return z.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var z = me();
        return z.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var z = me();
        return z.useCallback(h, C);
      }
      function Ga(h, C) {
        var z = me();
        return z.useMemo(h, C);
      }
      function Ka(h, C, z) {
        var j = me();
        return j.useImperativeHandle(h, C, z);
      }
      function tt(h, C) {
        {
          var z = me();
          return z.useDebugValue(h, C);
        }
      }
      function at() {
        var h = me();
        return h.useTransition();
      }
      function qa(h) {
        var C = me();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = me();
        return h.useId();
      }
      function ru(h, C, z) {
        var j = me();
        return j.useSyncExternalStore(h, C, z);
      }
      var hl = 0, Wu, ml, Qr, Yo, Dr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, Qr = console.warn, Yo = console.error, Dr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
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
                value: ml
              }),
              warn: P({}, h, {
                value: Qr
              }),
              error: P({}, h, {
                value: Yo
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = kt.ReactCurrentDispatcher, Ja;
      function Ku(h, C, z) {
        {
          if (Ja === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              Ja = j && j[1] || "";
            }
          return `
` + Ja + h;
        }
      }
      var au = !1, gl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new qu();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        au = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ze;
        ze = Xa.current, Xa.current = null, yl();
        try {
          if (C) {
            var le = function() {
              throw Error();
            };
            if (Object.defineProperty(le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(le, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], le);
            } else {
              try {
                le.call();
              } catch (hn) {
                j = hn;
              }
              h.call(le.prototype);
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
            for (var Fe = hn.stack.split(`
`), mt = j.stack.split(`
`), bt = Fe.length - 1, rn = mt.length - 1; bt >= 1 && rn >= 0 && Fe[bt] !== mt[rn]; )
              rn--;
            for (; bt >= 1 && rn >= 0; bt--, rn--)
              if (Fe[bt] !== mt[rn]) {
                if (bt !== 1 || rn !== 1)
                  do
                    if (bt--, rn--, rn < 0 || Fe[bt] !== mt[rn]) {
                      var Qt = `
` + Fe[bt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Qt), Qt;
                    }
                  while (bt >= 1 && rn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Xa.current = ze, da(), Error.prepareStackTrace = Z;
        }
        var ot = h ? h.displayName || h.name : "", Wt = ot ? Ku(ot) : "";
        return typeof h == "function" && gl.set(h, Wt), Wt;
      }
      function Pi(h, C, z) {
        return Xu(h, !1);
      }
      function Qf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Qf(h));
        if (typeof h == "string")
          return Ku(h);
        switch (h) {
          case J:
            return Ku("Suspense");
          case ce:
            return Ku("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Te:
              return Pi(h.render);
            case ee:
              return Vi(h.type, C, z);
            case Me: {
              var j = h, Z = j._payload, ze = j._init;
              try {
                return Vi(ze(Z), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ju = kt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(z);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Qo(h, C, z, j, Z) {
        {
          var ze = Function.call.bind(Rn);
          for (var le in h)
            if (ze(h, le)) {
              var Fe = void 0;
              try {
                if (typeof h[le] != "function") {
                  var mt = Error((j || "React class") + ": " + z + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw mt.name = "Invariant Violation", mt;
                }
                Fe = h[le](C, le, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Fe = bt;
              }
              Fe && !(Fe instanceof Error) && (xt(Z), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, le, typeof Fe), xt(null)), Fe instanceof Error && !(Fe.message in Lt) && (Lt[Fe.message] = !0, xt(Z), Ce("Failed %s type: %s", z, Fe.message), xt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ht(z);
        } else
          Ht(null);
      }
      var Ge;
      Ge = !1;
      function Zu() {
        if (vt.current) {
          var h = Kn(vt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = Zu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(C);
          if (!Or[z]) {
            Or[z] = !0;
            var j = "";
            h && h._owner && h._owner !== vt.current && (j = " It was passed a child from " + Kn(h._owner.type) + "."), hi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), hi(null);
          }
        }
      }
      function Yt(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              vn(j) && cn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = yt(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var ze = Z.call(h), le; !(le = ze.next()).done; )
                vn(le.value) && cn(le.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Te || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ee))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = Kn(C);
            Qo(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ge) {
            Ge = !0;
            var Z = Kn(C);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function In(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              hi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Lr(h, C, z) {
        var j = Y(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = mi(C);
          ze ? Z += ze : Z += Zu();
          var le;
          h === null ? le = "null" : Cn(h) ? le = "array" : h !== void 0 && h.$$typeof === $e ? (le = "<" + (Kn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, Z);
        }
        var Fe = ut.apply(this, arguments);
        if (Fe == null)
          return Fe;
        if (j)
          for (var mt = 2; mt < arguments.length; mt++)
            Yt(arguments[mt], h);
        return h === je ? In(Fe) : Sl(Fe), Fe;
      }
      var xa = !1;
      function iu(h) {
        var C = Lr.bind(null, h);
        return C.type = h, xa || (xa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, z) {
        for (var j = en.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          Yt(arguments[Z], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var z = gt.transition;
        gt.transition = {};
        var j = gt.transition;
        gt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (gt.transition = z, z === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Wf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = I && I[C];
            lu = z.call(I, "timers").setImmediate;
          } catch {
            lu = function(Z) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ze = new MessageChannel();
              ze.port1.onmessage = Z, ze.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var ba = 0, Za = !1;
      function gi(h) {
        {
          var C = ba;
          ba++, ke.current === null && (ke.current = []);
          var z = ke.isBatchingLegacy, j;
          try {
            if (ke.isBatchingLegacy = !0, j = h(), !z && ke.didScheduleLegacyUpdate) {
              var Z = ke.current;
              Z !== null && (ke.didScheduleLegacyUpdate = !1, Cl(Z));
            }
          } catch (ot) {
            throw _a(C), ot;
          } finally {
            ke.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var ze = j, le = !1, Fe = {
              then: function(ot, Wt) {
                le = !0, ze.then(function(hn) {
                  _a(C), ba === 0 ? eo(hn, ot, Wt) : ot(hn);
                }, function(hn) {
                  _a(C), Wt(hn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              le || (Za = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Fe;
          } else {
            var mt = j;
            if (_a(C), ba === 0) {
              var bt = ke.current;
              bt !== null && (Cl(bt), ke.current = null);
              var rn = {
                then: function(ot, Wt) {
                  ke.current === null ? (ke.current = [], eo(mt, ot, Wt)) : ot(mt);
                }
              };
              return rn;
            } else {
              var Qt = {
                then: function(ot, Wt) {
                  ot(mt);
                }
              };
              return Qt;
            }
          }
        }
      }
      function _a(h) {
        h !== ba - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function eo(h, C, z) {
        {
          var j = ke.current;
          if (j !== null)
            try {
              Cl(j), Wf(function() {
                j.length === 0 ? (ke.current = null, C(h)) : eo(h, C, z);
              });
            } catch (Z) {
              z(Z);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Lr, no = Wo, ro = iu, ei = {
        map: Hi,
        forEach: eu,
        count: Zl,
        toArray: pl,
        only: vl
      };
      B.Children = ei, B.Component = Pe, B.Fragment = je, B.Profiler = Ve, B.PureComponent = ft, B.StrictMode = S, B.Suspense = J, B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, B.act = gi, B.cloneElement = no, B.createContext = tu, B.createElement = uu, B.createFactory = ro, B.createRef = On, B.forwardRef = vi, B.isValidElement = vn, B.lazy = pi, B.memo = ue, B.startTransition = Go, B.unstable_act = gi, B.useCallback = ar, B.useContext = et, B.useDebugValue = tt, B.useDeferredValue = qa, B.useEffect = Tn, B.useId = nu, B.useImperativeHandle = Ka, B.useInsertionEffect = nn, B.useLayoutEffect = sn, B.useMemo = Ga, B.useReducer = ht, B.useRef = dt, B.useState = qe, B.useSyncExternalStore = ru, B.useTransition = at, B.version = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var tT;
function ev() {
  return tT || (tT = 1, process.env.NODE_ENV === "production" ? Gm.exports = ek() : Gm.exports = tk()), Gm.exports;
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
var nT;
function nk() {
  if (nT) return Xp;
  nT = 1;
  var I = ev(), B = Symbol.for("react.element"), k = Symbol.for("react.fragment"), $e = Object.prototype.hasOwnProperty, Re = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Ve, $, ne) {
    var Te, J = {}, ce = null, ee = null;
    ne !== void 0 && (ce = "" + ne), $.key !== void 0 && (ce = "" + $.key), $.ref !== void 0 && (ee = $.ref);
    for (Te in $) $e.call($, Te) && !je.hasOwnProperty(Te) && (J[Te] = $[Te]);
    if (Ve && Ve.defaultProps) for (Te in $ = Ve.defaultProps, $) J[Te] === void 0 && (J[Te] = $[Te]);
    return { $$typeof: B, type: Ve, key: ce, ref: ee, props: J, _owner: Re.current };
  }
  return Xp.Fragment = k, Xp.jsx = S, Xp.jsxs = S, Xp;
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
var rT;
function rk() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    var I = ev(), B = Symbol.for("react.element"), k = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ve = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), Me = Symbol.iterator, Ke = "@@iterator";
    function st(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = Me && R[Me] || R[Ke];
      return typeof Y == "function" ? Y : null;
    }
    var Jt = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function yt(R) {
      {
        for (var Y = arguments.length, ue = new Array(Y > 1 ? Y - 1 : 0), me = 1; me < Y; me++)
          ue[me - 1] = arguments[me];
        Je("error", R, ue);
      }
    }
    function Je(R, Y, ue) {
      {
        var me = Jt.ReactDebugCurrentFrame, et = me.getStackAddendum();
        et !== "" && (Y += "%s", ue = ue.concat([et]));
        var qe = ue.map(function(ht) {
          return String(ht);
        });
        qe.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, qe);
      }
    }
    var gt = !1, ke = !1, vt = !1, Ie = !1, ln = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Zt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === $e || R === je || ln || R === Re || R === ne || R === Te || Ie || R === ee || gt || ke || vt || typeof R == "object" && R !== null && (R.$$typeof === ce || R.$$typeof === J || R.$$typeof === S || R.$$typeof === Ve || R.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function un(R, Y, ue) {
      var me = R.displayName;
      if (me)
        return me;
      var et = Y.displayName || Y.name || "";
      return et !== "" ? ue + "(" + et + ")" : ue;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Ne(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && yt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case $e:
          return "Fragment";
        case k:
          return "Portal";
        case je:
          return "Profiler";
        case Re:
          return "StrictMode";
        case ne:
          return "Suspense";
        case Te:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ve:
            var Y = R;
            return _t(Y) + ".Consumer";
          case S:
            var ue = R;
            return _t(ue._context) + ".Provider";
          case $:
            return un(R, R.render, "ForwardRef");
          case J:
            var me = R.displayName || null;
            return me !== null ? me : Ne(R.type) || "Memo";
          case ce: {
            var et = R, qe = et._payload, ht = et._init;
            try {
              return Ne(ht(qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, kt = 0, Ot, Ce, te, we, ie, _, P;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Pe() {
      {
        if (kt === 0) {
          Ot = console.log, Ce = console.info, te = console.warn, we = console.error, ie = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
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
        kt++;
      }
    }
    function ct() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Ce
            }),
            warn: jt({}, R, {
              value: te
            }),
            error: jt({}, R, {
              value: we
            }),
            group: jt({}, R, {
              value: ie
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        kt < 0 && yt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = Jt.ReactCurrentDispatcher, rt;
    function lt(R, Y, ue) {
      {
        if (rt === void 0)
          try {
            throw Error();
          } catch (et) {
            var me = et.stack.trim().match(/\n( *(at )?)/);
            rt = me && me[1] || "";
          }
        return `
` + rt + R;
      }
    }
    var ft = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function br(R, Y) {
      if (!R || ft)
        return "";
      {
        var ue = Bt.get(R);
        if (ue !== void 0)
          return ue;
      }
      var me;
      ft = !0;
      var et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var qe;
      qe = it.current, it.current = null, Pe();
      try {
        if (Y) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (tt) {
              me = tt;
            }
            Reflect.construct(R, [], ht);
          } else {
            try {
              ht.call();
            } catch (tt) {
              me = tt;
            }
            R.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            me = tt;
          }
          R();
        }
      } catch (tt) {
        if (tt && me && typeof tt.stack == "string") {
          for (var dt = tt.stack.split(`
`), Tn = me.stack.split(`
`), nn = dt.length - 1, sn = Tn.length - 1; nn >= 1 && sn >= 0 && dt[nn] !== Tn[sn]; )
            sn--;
          for (; nn >= 1 && sn >= 0; nn--, sn--)
            if (dt[nn] !== Tn[sn]) {
              if (nn !== 1 || sn !== 1)
                do
                  if (nn--, sn--, sn < 0 || dt[nn] !== Tn[sn]) {
                    var ar = `
` + dt[nn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (nn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        ft = !1, it.current = qe, ct(), Error.prepareStackTrace = et;
      }
      var Ga = R ? R.displayName || R.name : "", Ka = Ga ? lt(Ga) : "";
      return typeof R == "function" && Bt.set(R, Ka), Ka;
    }
    function Cn(R, Y, ue) {
      return br(R, !1);
    }
    function nr(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Vn(R, Y, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return br(R, nr(R));
      if (typeof R == "string")
        return lt(R);
      switch (R) {
        case ne:
          return lt("Suspense");
        case Te:
          return lt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case $:
            return Cn(R.render);
          case J:
            return Vn(R.type, Y, ue);
          case ce: {
            var me = R, et = me._payload, qe = me._init;
            try {
              return Vn(qe(et), Y, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, ci = Jt.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var Y = R._owner, ue = Vn(R.type, R._source, Y ? Y.type : null);
        ci.setExtraStackFrame(ue);
      } else
        ci.setExtraStackFrame(null);
    }
    function Kn(R, Y, ue, me, et) {
      {
        var qe = Function.call.bind(Bn);
        for (var ht in R)
          if (qe(R, ht)) {
            var dt = void 0;
            try {
              if (typeof R[ht] != "function") {
                var Tn = Error((me || "React class") + ": " + ue + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              dt = R[ht](Y, ht, me, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              dt = nn;
            }
            dt && !(dt instanceof Error) && (sa(et), yt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ue, ht, typeof dt), sa(null)), dt instanceof Error && !(dt.message in Yr) && (Yr[dt.message] = !0, sa(et), yt("Failed %s type: %s", ue, dt.message), sa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function $n(R) {
      return Rn(R);
    }
    function Sr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ue = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
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
    function Er(R) {
      if (Ya(R))
        return yt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(R)), Ln(R);
    }
    var ca = Jt.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, re;
    function xe(R) {
      if (Bn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ut(R) {
      if (Bn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, Y) {
      typeof R.ref == "string" && ca.current;
    }
    function en(R, Y) {
      {
        var ue = function() {
          fi || (fi = !0, yt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function vn(R, Y) {
      {
        var ue = function() {
          re || (re = !0, yt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var on = function(R, Y, ue, me, et, qe, ht) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: B,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ue,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: qe
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: et
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function qn(R, Y, ue, me, et) {
      {
        var qe, ht = {}, dt = null, Tn = null;
        ue !== void 0 && (Er(ue), dt = "" + ue), ut(Y) && (Er(Y.key), dt = "" + Y.key), xe(Y) && (Tn = Y.ref, Ft(Y, et));
        for (qe in Y)
          Bn.call(Y, qe) && !Qa.hasOwnProperty(qe) && (ht[qe] = Y[qe]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (qe in nn)
            ht[qe] === void 0 && (ht[qe] = nn[qe]);
        }
        if (dt || Tn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          dt && en(ht, sn), Tn && vn(ht, sn);
        }
        return on(R, dt, Tn, et, me, ca.current, ht);
      }
    }
    var tn = Jt.ReactCurrentOwner, $t = Jt.ReactDebugCurrentFrame;
    function It(R) {
      if (R) {
        var Y = R._owner, ue = Vn(R.type, R._source, Y ? Y.type : null);
        $t.setExtraStackFrame(ue);
      } else
        $t.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === B;
    }
    function wa() {
      {
        if (tn.current) {
          var R = Ne(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Zl = {};
    function eu(R) {
      {
        var Y = wa();
        if (!Y) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && (Y = `

Check the top-level render call using <` + ue + ">.");
        }
        return Y;
      }
    }
    function pl(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = eu(Y);
        if (Zl[ue])
          return;
        Zl[ue] = !0;
        var me = "";
        R && R._owner && R._owner !== tn.current && (me = " It was passed a child from " + Ne(R._owner.type) + "."), It(R), yt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, me), It(null);
      }
    }
    function vl(R, Y) {
      {
        if (typeof R != "object")
          return;
        if ($n(R))
          for (var ue = 0; ue < R.length; ue++) {
            var me = R[ue];
            Cr(me) && pl(me, Y);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var et = st(R);
          if (typeof et == "function" && et !== R.entries)
            for (var qe = et.call(R), ht; !(ht = qe.next()).done; )
              Cr(ht.value) && pl(ht.value, Y);
        }
      }
    }
    function tu(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ue;
        if (typeof Y == "function")
          ue = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === J))
          ue = Y.propTypes;
        else
          return;
        if (ue) {
          var me = Ne(Y);
          Kn(ue, R.props, "prop", me, R);
        } else if (Y.PropTypes !== void 0 && !fa) {
          fa = !0;
          var et = Ne(Y);
          yt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", et || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && yt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var Y = Object.keys(R.props), ue = 0; ue < Y.length; ue++) {
          var me = Y[ue];
          if (me !== "children" && me !== "key") {
            It(R), yt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), It(null);
            break;
          }
        }
        R.ref !== null && (It(R), yt("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var kr = {};
    function rr(R, Y, ue, me, et, qe) {
      {
        var ht = Zt(R);
        if (!ht) {
          var dt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Hi();
          Tn ? dt += Tn : dt += wa();
          var nn;
          R === null ? nn = "null" : $n(R) ? nn = "array" : R !== void 0 && R.$$typeof === B ? (nn = "<" + (Ne(R.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, yt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, dt);
        }
        var sn = qn(R, Y, ue, et, qe);
        if (sn == null)
          return sn;
        if (ht) {
          var ar = Y.children;
          if (ar !== void 0)
            if (me)
              if ($n(ar)) {
                for (var Ga = 0; Ga < ar.length; Ga++)
                  vl(ar[Ga], R);
                Object.freeze && Object.freeze(ar);
              } else
                yt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, R);
        }
        if (Bn.call(Y, "key")) {
          var Ka = Ne(R), tt = Object.keys(Y).filter(function(nu) {
            return nu !== "key";
          }), at = tt.length > 0 ? "{key: someKey, " + tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[Ka + at]) {
            var qa = tt.length > 0 ? "{" + tt.join(": ..., ") + ": ...}" : "{}";
            yt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, Ka, qa, Ka), kr[Ka + at] = !0;
          }
        }
        return R === $e ? _r(sn) : tu(sn), sn;
      }
    }
    function di(R, Y, ue) {
      return rr(R, Y, ue, !0);
    }
    function Wa(R, Y, ue) {
      return rr(R, Y, ue, !1);
    }
    var pi = Wa, vi = di;
    Jp.Fragment = $e, Jp.jsx = pi, Jp.jsxs = vi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? hE.exports = nk() : hE.exports = rk();
var Le = hE.exports, mE = { exports: {} }, $a = {}, Km = { exports: {} }, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function ak() {
  return aT || (aT = 1, function(I) {
    function B(te, we) {
      var ie = te.length;
      te.push(we);
      e: for (; 0 < ie; ) {
        var _ = ie - 1 >>> 1, P = te[_];
        if (0 < Re(P, we)) te[_] = we, te[ie] = P, ie = _;
        else break e;
      }
    }
    function k(te) {
      return te.length === 0 ? null : te[0];
    }
    function $e(te) {
      if (te.length === 0) return null;
      var we = te[0], ie = te.pop();
      if (ie !== we) {
        te[0] = ie;
        e: for (var _ = 0, P = te.length, Ye = P >>> 1; _ < Ye; ) {
          var Pe = 2 * (_ + 1) - 1, ct = te[Pe], it = Pe + 1, rt = te[it];
          if (0 > Re(ct, ie)) it < P && 0 > Re(rt, ct) ? (te[_] = rt, te[it] = ie, _ = it) : (te[_] = ct, te[Pe] = ie, _ = Pe);
          else if (it < P && 0 > Re(rt, ie)) te[_] = rt, te[it] = ie, _ = it;
          else break e;
        }
      }
      return we;
    }
    function Re(te, we) {
      var ie = te.sortIndex - we.sortIndex;
      return ie !== 0 ? ie : te.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var je = performance;
      I.unstable_now = function() {
        return je.now();
      };
    } else {
      var S = Date, Ve = S.now();
      I.unstable_now = function() {
        return S.now() - Ve;
      };
    }
    var $ = [], ne = [], Te = 1, J = null, ce = 3, ee = !1, Me = !1, Ke = !1, st = typeof setTimeout == "function" ? setTimeout : null, Jt = typeof clearTimeout == "function" ? clearTimeout : null, yt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(te) {
      for (var we = k(ne); we !== null; ) {
        if (we.callback === null) $e(ne);
        else if (we.startTime <= te) $e(ne), we.sortIndex = we.expirationTime, B($, we);
        else break;
        we = k(ne);
      }
    }
    function gt(te) {
      if (Ke = !1, Je(te), !Me) if (k($) !== null) Me = !0, Ot(ke);
      else {
        var we = k(ne);
        we !== null && Ce(gt, we.startTime - te);
      }
    }
    function ke(te, we) {
      Me = !1, Ke && (Ke = !1, Jt(ln), ln = -1), ee = !0;
      var ie = ce;
      try {
        for (Je(we), J = k($); J !== null && (!(J.expirationTime > we) || te && !un()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, ce = J.priorityLevel;
            var P = _(J.expirationTime <= we);
            we = I.unstable_now(), typeof P == "function" ? J.callback = P : J === k($) && $e($), Je(we);
          } else $e($);
          J = k($);
        }
        if (J !== null) var Ye = !0;
        else {
          var Pe = k(ne);
          Pe !== null && Ce(gt, Pe.startTime - we), Ye = !1;
        }
        return Ye;
      } finally {
        J = null, ce = ie, ee = !1;
      }
    }
    var vt = !1, Ie = null, ln = -1, Ht = 5, Zt = -1;
    function un() {
      return !(I.unstable_now() - Zt < Ht);
    }
    function _t() {
      if (Ie !== null) {
        var te = I.unstable_now();
        Zt = te;
        var we = !0;
        try {
          we = Ie(!0, te);
        } finally {
          we ? Ne() : (vt = !1, Ie = null);
        }
      } else vt = !1;
    }
    var Ne;
    if (typeof yt == "function") Ne = function() {
      yt(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), kt = jt.port2;
      jt.port1.onmessage = _t, Ne = function() {
        kt.postMessage(null);
      };
    } else Ne = function() {
      st(_t, 0);
    };
    function Ot(te) {
      Ie = te, vt || (vt = !0, Ne());
    }
    function Ce(te, we) {
      ln = st(function() {
        te(I.unstable_now());
      }, we);
    }
    I.unstable_IdlePriority = 5, I.unstable_ImmediatePriority = 1, I.unstable_LowPriority = 4, I.unstable_NormalPriority = 3, I.unstable_Profiling = null, I.unstable_UserBlockingPriority = 2, I.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, I.unstable_continueExecution = function() {
      Me || ee || (Me = !0, Ot(ke));
    }, I.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < te ? Math.floor(1e3 / te) : 5;
    }, I.unstable_getCurrentPriorityLevel = function() {
      return ce;
    }, I.unstable_getFirstCallbackNode = function() {
      return k($);
    }, I.unstable_next = function(te) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = ce;
      }
      var ie = ce;
      ce = we;
      try {
        return te();
      } finally {
        ce = ie;
      }
    }, I.unstable_pauseExecution = function() {
    }, I.unstable_requestPaint = function() {
    }, I.unstable_runWithPriority = function(te, we) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var ie = ce;
      ce = te;
      try {
        return we();
      } finally {
        ce = ie;
      }
    }, I.unstable_scheduleCallback = function(te, we, ie) {
      var _ = I.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? _ + ie : _) : ie = _, te) {
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
      return P = ie + P, te = { id: Te++, callback: we, priorityLevel: te, startTime: ie, expirationTime: P, sortIndex: -1 }, ie > _ ? (te.sortIndex = ie, B(ne, te), k($) === null && te === k(ne) && (Ke ? (Jt(ln), ln = -1) : Ke = !0, Ce(gt, ie - _))) : (te.sortIndex = P, B($, te), Me || ee || (Me = !0, Ot(ke))), te;
    }, I.unstable_shouldYield = un, I.unstable_wrapCallback = function(te) {
      var we = ce;
      return function() {
        var ie = ce;
        ce = we;
        try {
          return te.apply(this, arguments);
        } finally {
          ce = ie;
        }
      };
    };
  }(pE)), pE;
}
var vE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function ik() {
  return iT || (iT = 1, function(I) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var B = !1, k = 5;
      function $e(re, xe) {
        var ut = re.length;
        re.push(xe), S(re, xe, ut);
      }
      function Re(re) {
        return re.length === 0 ? null : re[0];
      }
      function je(re) {
        if (re.length === 0)
          return null;
        var xe = re[0], ut = re.pop();
        return ut !== xe && (re[0] = ut, Ve(re, ut, 0)), xe;
      }
      function S(re, xe, ut) {
        for (var Ft = ut; Ft > 0; ) {
          var en = Ft - 1 >>> 1, vn = re[en];
          if ($(vn, xe) > 0)
            re[en] = xe, re[Ft] = vn, Ft = en;
          else
            return;
        }
      }
      function Ve(re, xe, ut) {
        for (var Ft = ut, en = re.length, vn = en >>> 1; Ft < vn; ) {
          var on = (Ft + 1) * 2 - 1, qn = re[on], tn = on + 1, $t = re[tn];
          if ($(qn, xe) < 0)
            tn < en && $($t, qn) < 0 ? (re[Ft] = $t, re[tn] = xe, Ft = tn) : (re[Ft] = qn, re[on] = xe, Ft = on);
          else if (tn < en && $($t, xe) < 0)
            re[Ft] = $t, re[tn] = xe, Ft = tn;
          else
            return;
        }
      }
      function $(re, xe) {
        var ut = re.sortIndex - xe.sortIndex;
        return ut !== 0 ? ut : re.id - xe.id;
      }
      var ne = 1, Te = 2, J = 3, ce = 4, ee = 5;
      function Me(re, xe) {
      }
      var Ke = typeof performance == "object" && typeof performance.now == "function";
      if (Ke) {
        var st = performance;
        I.unstable_now = function() {
          return st.now();
        };
      } else {
        var Jt = Date, yt = Jt.now();
        I.unstable_now = function() {
          return Jt.now() - yt;
        };
      }
      var Je = 1073741823, gt = -1, ke = 250, vt = 5e3, Ie = 1e4, ln = Je, Ht = [], Zt = [], un = 1, _t = null, Ne = J, jt = !1, kt = !1, Ot = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, we = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ie(re) {
        for (var xe = Re(Zt); xe !== null; ) {
          if (xe.callback === null)
            je(Zt);
          else if (xe.startTime <= re)
            je(Zt), xe.sortIndex = xe.expirationTime, $e(Ht, xe);
          else
            return;
          xe = Re(Zt);
        }
      }
      function _(re) {
        if (Ot = !1, ie(re), !kt)
          if (Re(Ht) !== null)
            kt = !0, Ln(P);
          else {
            var xe = Re(Zt);
            xe !== null && Er(_, xe.startTime - re);
          }
      }
      function P(re, xe) {
        kt = !1, Ot && (Ot = !1, ca()), jt = !0;
        var ut = Ne;
        try {
          var Ft;
          if (!B) return Ye(re, xe);
        } finally {
          _t = null, Ne = ut, jt = !1;
        }
      }
      function Ye(re, xe) {
        var ut = xe;
        for (ie(ut), _t = Re(Ht); _t !== null && !(_t.expirationTime > ut && (!re || ci())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, Ne = _t.priorityLevel;
            var en = _t.expirationTime <= ut, vn = Ft(en);
            ut = I.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === Re(Ht) && je(Ht), ie(ut);
          } else
            je(Ht);
          _t = Re(Ht);
        }
        if (_t !== null)
          return !0;
        var on = Re(Zt);
        return on !== null && Er(_, on.startTime - ut), !1;
      }
      function Pe(re, xe) {
        switch (re) {
          case ne:
          case Te:
          case J:
          case ce:
          case ee:
            break;
          default:
            re = J;
        }
        var ut = Ne;
        Ne = re;
        try {
          return xe();
        } finally {
          Ne = ut;
        }
      }
      function ct(re) {
        var xe;
        switch (Ne) {
          case ne:
          case Te:
          case J:
            xe = J;
            break;
          default:
            xe = Ne;
            break;
        }
        var ut = Ne;
        Ne = xe;
        try {
          return re();
        } finally {
          Ne = ut;
        }
      }
      function it(re) {
        var xe = Ne;
        return function() {
          var ut = Ne;
          Ne = xe;
          try {
            return re.apply(this, arguments);
          } finally {
            Ne = ut;
          }
        };
      }
      function rt(re, xe, ut) {
        var Ft = I.unstable_now(), en;
        if (typeof ut == "object" && ut !== null) {
          var vn = ut.delay;
          typeof vn == "number" && vn > 0 ? en = Ft + vn : en = Ft;
        } else
          en = Ft;
        var on;
        switch (re) {
          case ne:
            on = gt;
            break;
          case Te:
            on = ke;
            break;
          case ee:
            on = ln;
            break;
          case ce:
            on = Ie;
            break;
          case J:
          default:
            on = vt;
            break;
        }
        var qn = en + on, tn = {
          id: un++,
          callback: xe,
          priorityLevel: re,
          startTime: en,
          expirationTime: qn,
          sortIndex: -1
        };
        return en > Ft ? (tn.sortIndex = en, $e(Zt, tn), Re(Ht) === null && tn === Re(Zt) && (Ot ? ca() : Ot = !0, Er(_, en - Ft))) : (tn.sortIndex = qn, $e(Ht, tn), !kt && !jt && (kt = !0, Ln(P))), tn;
      }
      function lt() {
      }
      function ft() {
        !kt && !jt && (kt = !0, Ln(P));
      }
      function Bt() {
        return Re(Ht);
      }
      function On(re) {
        re.callback = null;
      }
      function br() {
        return Ne;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = k, Yr = -1;
      function ci() {
        var re = I.unstable_now() - Yr;
        return !(re < Bn);
      }
      function sa() {
      }
      function Kn(re) {
        if (re < 0 || re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        re > 0 ? Bn = Math.floor(1e3 / re) : Bn = k;
      }
      var Rn = function() {
        if (nr !== null) {
          var re = I.unstable_now();
          Yr = re;
          var xe = !0, ut = !0;
          try {
            ut = nr(xe, re);
          } finally {
            ut ? $n() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, $n;
      if (typeof we == "function")
        $n = function() {
          we(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), Ya = Sr.port2;
        Sr.port1.onmessage = Rn, $n = function() {
          Ya.postMessage(null);
        };
      } else
        $n = function() {
          Ce(Rn, 0);
        };
      function Ln(re) {
        nr = re, Cn || (Cn = !0, $n());
      }
      function Er(re, xe) {
        Vn = Ce(function() {
          re(I.unstable_now());
        }, xe);
      }
      function ca() {
        te(Vn), Vn = -1;
      }
      var Qa = sa, fi = null;
      I.unstable_IdlePriority = ee, I.unstable_ImmediatePriority = ne, I.unstable_LowPriority = ce, I.unstable_NormalPriority = J, I.unstable_Profiling = fi, I.unstable_UserBlockingPriority = Te, I.unstable_cancelCallback = On, I.unstable_continueExecution = ft, I.unstable_forceFrameRate = Kn, I.unstable_getCurrentPriorityLevel = br, I.unstable_getFirstCallbackNode = Bt, I.unstable_next = ct, I.unstable_pauseExecution = lt, I.unstable_requestPaint = Qa, I.unstable_runWithPriority = Pe, I.unstable_scheduleCallback = rt, I.unstable_shouldYield = ci, I.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vE)), vE;
}
var lT;
function fT() {
  return lT || (lT = 1, process.env.NODE_ENV === "production" ? Km.exports = ak() : Km.exports = ik()), Km.exports;
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
var uT;
function lk() {
  if (uT) return $a;
  uT = 1;
  var I = ev(), B = fT();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var $e = /* @__PURE__ */ new Set(), Re = {};
  function je(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Re[n] = r, n = 0; n < r.length; n++) $e.add(r[n]);
  }
  var Ve = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $ = Object.prototype.hasOwnProperty, ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Te = {}, J = {};
  function ce(n) {
    return $.call(J, n) ? !0 : $.call(Te, n) ? !1 : ne.test(n) ? J[n] = !0 : (Te[n] = !0, !1);
  }
  function ee(n, r, l, o) {
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
  function Me(n, r, l, o) {
    if (r === null || typeof r > "u" || ee(n, r, l, o)) return !0;
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
  function Ke(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new Ke(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new Ke(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new Ke(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new Ke(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new Ke(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new Ke(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new Ke(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new Ke(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new Ke(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Jt = /[\-:]([a-z])/g;
  function yt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Jt,
      yt
    );
    st[r] = new Ke(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Jt, yt);
    st[r] = new Ke(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Jt, yt);
    st[r] = new Ke(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Je(n, r, l, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Me(r, l, c, o) && (l = null), o || c === null ? ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var gt = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = Symbol.for("react.element"), vt = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), un = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), te = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, _;
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
  var Ye = !1;
  function Pe(n, r) {
    if (!n || Ye) return "";
    Ye = !0;
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
      Ye = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function ct(n) {
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
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function it(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ie:
        return "Fragment";
      case vt:
        return "Portal";
      case Ht:
        return "Profiler";
      case ln:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return it(n(r));
        } catch {
        }
    }
    return null;
  }
  function rt(n) {
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
        return it(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
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
  function lt(n) {
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
  function ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ft(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ft(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = lt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Je(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = lt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, lt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Kn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + lt(l), r = null, c = 0; c < n.length; c++) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(k(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(k(92));
        if (Kn(l)) {
          if (1 < l.length) throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: lt(l) };
  }
  function Ya(n, r) {
    var l = lt(r.value), o = lt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function re(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
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
  }, ut = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    ut.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function en(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(k(62));
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
  var tn = null;
  function $t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, fa = null, Cr = null;
  function wa(n) {
    if (n = De(n)) {
      if (typeof It != "function") throw Error(k(280));
      var r = n.stateNode;
      r && (r = mn(r), It(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Cr ? Cr.push(n) : Cr = [n] : fa = n;
  }
  function Zl() {
    if (fa) {
      var n = fa, r = Cr;
      if (Cr = fa = null, wa(n), r) for (n = 0; n < r.length; n++) wa(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Cr !== null) && (pl(), Zl());
    }
  }
  function _r(n, r) {
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
    if (l && typeof l != "function") throw Error(k(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (Ve) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (G) {
      this.onError(G);
    }
  }
  var Wa = !1, pi = null, vi = !1, R = null, Y = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function ue(n, r, l, o, c, d, m, E, T) {
    Wa = !1, pi = null, di.apply(Y, arguments);
  }
  function me(n, r, l, o, c, d, m, E, T) {
    if (ue.apply(this, arguments), Wa) {
      if (Wa) {
        var U = pi;
        Wa = !1, pi = null;
      } else throw Error(k(198));
      vi || (vi = !0, R = U);
    }
  }
  function et(n) {
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
  function qe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ht(n) {
    if (et(n) !== n) throw Error(k(188));
  }
  function dt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = et(n), r === null) throw Error(k(188));
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
          if (d === l) return ht(c), n;
          if (d === o) return ht(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
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
          if (!m) throw Error(k(189));
        }
      }
      if (l.alternate !== o) throw Error(k(190));
    }
    if (l.tag !== 3) throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = dt(n), n !== null ? nn(n) : null;
  }
  function nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = B.unstable_scheduleCallback, ar = B.unstable_cancelCallback, Ga = B.unstable_shouldYield, Ka = B.unstable_requestPaint, tt = B.unstable_now, at = B.unstable_getCurrentPriorityLevel, qa = B.unstable_ImmediatePriority, nu = B.unstable_UserBlockingPriority, ru = B.unstable_NormalPriority, hl = B.unstable_LowPriority, Wu = B.unstable_IdlePriority, ml = null, Qr = null;
  function Yo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Xa(n) {
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
  function Ja(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Ku(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Qf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var xt, Qo, hi, Ge, Zu, ir = !1, mi = [], Or = null, yi = null, cn = null, Yt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), In = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        Yt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = De(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = iu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = iu(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Yt.set(d, iu(Yt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = et(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = qe(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              hi(l);
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
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        tn = o, l.target.dispatchEvent(o), tn = null;
      } else return r = De(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Wf() {
    ir = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), cn !== null && El(cn) && (cn = null), Yt.forEach(lu), Sl.forEach(lu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, Wf)));
  }
  function Za(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < mi.length) {
      ba(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && ba(Or, n), yi !== null && ba(yi, n), cn !== null && ba(cn, n), Yt.forEach(r), Sl.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && In.shift();
  }
  var gi = gt.ReactCurrentBatchConfig, _a = !0;
  function eo(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), xa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = De(c);
          if (d !== null && xt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = $t(o), n = vu(n), n !== null) if (r = et(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = qe(r), n !== null) return n;
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
        switch (at()) {
          case qa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
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
  var ei = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Z() {
    return !0;
  }
  function ze() {
    return !1;
  }
  function le(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Z : ze, this.isPropagationStopped = ze, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Z);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Z);
    }, persist: function() {
    }, isPersistent: Z }), r;
  }
  var Fe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, mt = le(Fe), bt = ie({}, Fe, { view: 0, detail: 0 }), rn = le(bt), Qt, ot, Wt, hn = ie({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Qt = n.screenX - Wt.screenX, ot = n.screenY - Wt.screenY) : ot = Qt = 0, Wt = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ot;
  } }), Rl = le(hn), Ko = ie({}, hn, { dataTransfer: 0 }), Bi = le(Ko), qo = ie({}, bt, { relatedTarget: 0 }), ou = le(qo), Gf = ie({}, Fe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = le(Gf), Kf = ie({}, Fe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), rv = le(Kf), qf = ie({}, Fe, { data: 0 }), Xf = le(qf), av = {
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
  }, iv = {
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
  }, Xm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Xm[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return $i;
  }
  var Zf = ie({}, bt, { key: function(n) {
    if (n.key) {
      var r = av[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? iv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = le(Zf), td = ie({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lv = le(td), sc = ie({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), uv = le(sc), Wr = ie({}, Fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = le(Wr), Mn = ie({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = le(Mn), nd = [9, 13, 27, 32], ao = Ve && "CompositionEvent" in window, Xo = null;
  Ve && "documentMode" in document && (Xo = document.documentMode);
  var Jo = Ve && "TextEvent" in window && !Xo, ov = Ve && (!ao || Xo && 8 < Xo && 11 >= Xo), sv = " ", cc = !1;
  function cv(n, r) {
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
  function fv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function dv(n, r) {
    switch (n) {
      case "compositionend":
        return fv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, sv);
      case "textInput":
        return n = r.data, n === sv && cc ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (io) return n === "compositionend" || !ao && cv(n, r) ? (n = z(), C = h = ei = null, io = !1, n) : null;
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
        return ov && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new mt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function vv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ni(n);
    if (br(r)) return n;
  }
  function ey(n, r) {
    if (n === "change") return r;
  }
  var hv = !1;
  if (Ve) {
    var ad;
    if (Ve) {
      var id = "oninput" in document;
      if (!id) {
        var mv = document.createElement("div");
        mv.setAttribute("oninput", "return;"), id = typeof mv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    hv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function yv() {
    Si && (Si.detachEvent("onpropertychange", gv), su = Si = null);
  }
  function gv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      rd(r, su, n, $t(n)), tu(vv, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (yv(), Si = r, su = l, Si.attachEvent("onpropertychange", gv)) : n === "focusout" && yv();
  }
  function Sv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
  }
  function ny(n, r) {
    if (n === "click") return Zo(r);
  }
  function Ev(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : ry;
  function es(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!$.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Cv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = Cv(n);
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
      l = Cv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
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
  var ay = Ve && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new mt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  Ve && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Rv = vc("animationend"), Tv = vc("animationiteration"), wv = vc("animationstart"), xv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    cd.set(n, r), je(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], iy = fu.toLowerCase(), ly = fu[0].toUpperCase() + fu.slice(1);
    ka(iy, "on" + ly);
  }
  ka(Rv, "onAnimationEnd"), ka(Tv, "onAnimationIteration"), ka(wv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(xv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
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
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (bv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), bv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, $e.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function bv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
      var U = d, G = $t(l), q = [];
      e: {
        var W = cd.get(n);
        if (W !== void 0) {
          var de = mt, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              de = ed;
              break;
            case "focusin":
              ye = "focus", de = ou;
              break;
            case "focusout":
              ye = "blur", de = ou;
              break;
            case "beforeblur":
            case "afterblur":
              de = ou;
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
              de = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = uv;
              break;
            case Rv:
            case Tv:
            case wv:
              de = oc;
              break;
            case xv:
              de = Ii;
              break;
            case "scroll":
              de = rn;
              break;
            case "wheel":
              de = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = rv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = lv;
          }
          var Ee = (r & 4) !== 0, kn = !Ee && n === "scroll", D = Ee ? W !== null ? W + "Capture" : null : W;
          Ee = [];
          for (var x = U, M; x !== null; ) {
            M = x;
            var K = M.stateNode;
            if (M.tag === 5 && K !== null && (M = K, D !== null && (K = _r(x, D), K != null && Ee.push(so(x, K, M)))), kn) break;
            x = x.return;
          }
          0 < Ee.length && (W = new de(W, ye, null, l, G), q.push({ event: W, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", W && l !== tn && (ye = l.relatedTarget || l.fromElement) && (vu(ye) || ye[Qi])) break e;
          if ((de || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, de ? (ye = l.relatedTarget || l.toElement, de = U, ye = ye ? vu(ye) : null, ye !== null && (kn = et(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (de = null, ye = U), de !== ye)) {
            if (Ee = Rl, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = lv, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), kn = de == null ? W : ni(de), M = ye == null ? W : ni(ye), W = new Ee(K, x + "leave", de, l, G), W.target = kn, W.relatedTarget = M, K = null, vu(G) === U && (Ee = new Ee(D, x + "enter", ye, l, G), Ee.target = M, Ee.relatedTarget = kn, K = Ee), kn = K, de && ye) t: {
              for (Ee = de, D = ye, x = 0, M = Ee; M; M = wl(M)) x++;
              for (M = 0, K = D; K; K = wl(K)) M++;
              for (; 0 < x - M; ) Ee = wl(Ee), x--;
              for (; 0 < M - x; ) D = wl(D), M--;
              for (; x--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = wl(Ee), D = wl(D);
              }
              Ee = null;
            }
            else Ee = null;
            de !== null && _v(q, W, de, Ee, !1), ye !== null && kn !== null && _v(q, kn, ye, Ee, !0);
          }
        }
        e: {
          if (W = U ? ni(U) : window, de = W.nodeName && W.nodeName.toLowerCase(), de === "select" || de === "input" && W.type === "file") var ge = ey;
          else if (pv(W)) if (hv) ge = Ev;
          else {
            ge = Sv;
            var Ae = ty;
          }
          else (de = W.nodeName) && de.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ge = ny);
          if (ge && (ge = ge(n, U))) {
            rd(q, ge, l, G);
            break e;
          }
          Ae && Ae(n, W, U), n === "focusout" && (Ae = W._wrapperState) && Ae.controlled && W.type === "number" && sa(W, "number", W.value);
        }
        switch (Ae = U ? ni(U) : window, n) {
          case "focusin":
            (pv(Ae) || Ae.contentEditable === "true") && (uo = Ae, ld = U, ns = null);
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
            ud = !1, od(q, l, G);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            od(q, l, G);
        }
        var He;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var We = "onCompositionStart";
              break e;
            case "compositionend":
              We = "onCompositionEnd";
              break e;
            case "compositionupdate":
              We = "onCompositionUpdate";
              break e;
          }
          We = void 0;
        }
        else io ? cv(n, l) && (We = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (We = "onCompositionStart");
        We && (ov && l.locale !== "ko" && (io || We !== "onCompositionStart" ? We === "onCompositionEnd" && io && (He = z()) : (ei = G, h = "value" in ei ? ei.value : ei.textContent, io = !0)), Ae = as(U, We), 0 < Ae.length && (We = new Xf(We, n, null, l, G), q.push({ event: We, listeners: Ae }), He ? We.data = He : (He = fv(l), He !== null && (We.data = He)))), (He = Jo ? dv(n, l) : Jm(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && (G = new Xf("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: U }), G.data = He));
      }
      du(q, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(so(n, d, c)), d = _r(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function wl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _v(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = _r(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = _r(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var kv = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(kv, `
`).replace(uy, "");
  }
  function Ec(n, r, l) {
    if (r = Dv(r), Dv(n) !== r && l) throw Error(k(425));
  }
  function xl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ov = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ov < "u" ? function(n) {
    return Ov.resolve(null).then(n).catch(Tc);
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
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Ei(n) {
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
  function Lv(n) {
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
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Qi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, oy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Lv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Lv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function De(n) {
    return n = n[Ci] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(k(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var Ct = [], Da = -1;
  function Oa(n) {
    return { current: n };
  }
  function an(n) {
    0 > Da || (n.current = Ct[Da], Ct[Da] = null, Da--);
  }
  function _e(n, r) {
    Da++, Ct[Da] = n.current, n.current = r;
  }
  var Rr = {}, En = Oa(Rr), Yn = Oa(!1), Gr = Rr;
  function Kr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Rr;
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
    an(Yn), an(En);
  }
  function Mv(n, r, l) {
    if (En.current !== Rr) throw Error(k(168));
    _e(En, r), _e(Yn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(k(108, rt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rr, Gr = En.current, _e(En, n), _e(Yn, Yn.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(k(169));
    l ? (n = os(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, an(Yn), an(En), _e(En, n)) : an(Yn), _e(Yn, l);
  }
  var Ri = null, ho = !1, Wi = !1;
  function xc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    ho = !0, xc(n);
  }
  function Ti() {
    if (!Wi && Ri !== null) {
      Wi = !0;
      var n = 0, r = Lt;
      try {
        var l = Ri;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), sn(qa, Ti), c;
      } finally {
        Lt = r, Wi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, zn = [], La = 0, pa = null, wi = 1, xi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Nv(n, r, l) {
    zn[La++] = wi, zn[La++] = xi, zn[La++] = pa, pa = n;
    var o = wi;
    n = xi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, wi = 1 << 32 - Dr(r) + c | l << c | o, xi = d + n;
    } else wi = 1 << d | l << c | o, xi = n;
  }
  function bc(n) {
    n.return !== null && (hu(n, 1), Nv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === pa; ) pa = zn[--La], zn[La] = null, xi = zn[--La], zn[La] = null, wi = zn[--La], zn[La] = null;
  }
  var qr = null, Xr = null, dn = !1, Ma = null;
  function vd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function zv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: wi, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!zv(n, r)) {
          if (hd(n)) throw Error(k(418));
          r = Ei(l.nextSibling);
          var o = qr;
          r && zv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (hd(n)) throw Error(k(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function kc(n) {
    if (n !== qr) return !1;
    if (!dn) return Qn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (hd(n)) throw ss(), Error(k(418));
      for (; r; ) vd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Xr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Xr = qr = null, dn = !1;
  }
  function Ki(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var sy = gt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(k(284));
      if (!l._owner) throw Error(k(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(D, x) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [x], D.flags |= 16) : M.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Hl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < x ? (D.flags |= 2, x) : M) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, M, K) {
      return x === null || x.tag !== 6 ? (x = Wd(M, D.mode, K), x.return = D, x) : (x = c(x, M), x.return = D, x);
    }
    function T(D, x, M, K) {
      var ge = M.type;
      return ge === Ie ? G(D, x, M.props.children, K, M.key) : x !== null && (x.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Uv(ge) === x.type) ? (K = c(x, M.props), K.ref = mu(D, x, M), K.return = D, K) : (K = Hs(M.type, M.key, M.props, null, D.mode, K), K.ref = mu(D, x, M), K.return = D, K);
    }
    function U(D, x, M, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = sf(M, D.mode, K), x.return = D, x) : (x = c(x, M.children || []), x.return = D, x);
    }
    function G(D, x, M, K, ge) {
      return x === null || x.tag !== 7 ? (x = tl(M, D.mode, K, ge), x.return = D, x) : (x = c(x, M), x.return = D, x);
    }
    function q(D, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wd("" + x, D.mode, M), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ke:
            return M = Hs(x.type, x.key, x.props, null, D.mode, M), M.ref = mu(D, null, x), M.return = D, M;
          case vt:
            return x = sf(x, D.mode, M), x.return = D, x;
          case Ot:
            var K = x._init;
            return q(D, K(x._payload), M);
        }
        if (Kn(x) || we(x)) return x = tl(x, D.mode, M, null), x.return = D, x;
        Dc(D, x);
      }
      return null;
    }
    function W(D, x, M, K) {
      var ge = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return ge !== null ? null : E(D, x, "" + M, K);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ke:
            return M.key === ge ? T(D, x, M, K) : null;
          case vt:
            return M.key === ge ? U(D, x, M, K) : null;
          case Ot:
            return ge = M._init, W(
              D,
              x,
              ge(M._payload),
              K
            );
        }
        if (Kn(M) || we(M)) return ge !== null ? null : G(D, x, M, K, null);
        Dc(D, M);
      }
      return null;
    }
    function de(D, x, M, K, ge) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return D = D.get(M) || null, E(x, D, "" + K, ge);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case ke:
            return D = D.get(K.key === null ? M : K.key) || null, T(x, D, K, ge);
          case vt:
            return D = D.get(K.key === null ? M : K.key) || null, U(x, D, K, ge);
          case Ot:
            var Ae = K._init;
            return de(D, x, M, Ae(K._payload), ge);
        }
        if (Kn(K) || we(K)) return D = D.get(M) || null, G(x, D, K, ge, null);
        Dc(x, K);
      }
      return null;
    }
    function ye(D, x, M, K) {
      for (var ge = null, Ae = null, He = x, We = x = 0, er = null; He !== null && We < M.length; We++) {
        He.index > We ? (er = He, He = null) : er = He.sibling;
        var zt = W(D, He, M[We], K);
        if (zt === null) {
          He === null && (He = er);
          break;
        }
        n && He && zt.alternate === null && r(D, He), x = d(zt, x, We), Ae === null ? ge = zt : Ae.sibling = zt, Ae = zt, He = er;
      }
      if (We === M.length) return l(D, He), dn && hu(D, We), ge;
      if (He === null) {
        for (; We < M.length; We++) He = q(D, M[We], K), He !== null && (x = d(He, x, We), Ae === null ? ge = He : Ae.sibling = He, Ae = He);
        return dn && hu(D, We), ge;
      }
      for (He = o(D, He); We < M.length; We++) er = de(He, D, We, M[We], K), er !== null && (n && er.alternate !== null && He.delete(er.key === null ? We : er.key), x = d(er, x, We), Ae === null ? ge = er : Ae.sibling = er, Ae = er);
      return n && He.forEach(function(Bl) {
        return r(D, Bl);
      }), dn && hu(D, We), ge;
    }
    function Ee(D, x, M, K) {
      var ge = we(M);
      if (typeof ge != "function") throw Error(k(150));
      if (M = ge.call(M), M == null) throw Error(k(151));
      for (var Ae = ge = null, He = x, We = x = 0, er = null, zt = M.next(); He !== null && !zt.done; We++, zt = M.next()) {
        He.index > We ? (er = He, He = null) : er = He.sibling;
        var Bl = W(D, He, zt.value, K);
        if (Bl === null) {
          He === null && (He = er);
          break;
        }
        n && He && Bl.alternate === null && r(D, He), x = d(Bl, x, We), Ae === null ? ge = Bl : Ae.sibling = Bl, Ae = Bl, He = er;
      }
      if (zt.done) return l(
        D,
        He
      ), dn && hu(D, We), ge;
      if (He === null) {
        for (; !zt.done; We++, zt = M.next()) zt = q(D, zt.value, K), zt !== null && (x = d(zt, x, We), Ae === null ? ge = zt : Ae.sibling = zt, Ae = zt);
        return dn && hu(D, We), ge;
      }
      for (He = o(D, He); !zt.done; We++, zt = M.next()) zt = de(He, D, We, zt.value, K), zt !== null && (n && zt.alternate !== null && He.delete(zt.key === null ? We : zt.key), x = d(zt, x, We), Ae === null ? ge = zt : Ae.sibling = zt, Ae = zt);
      return n && He.forEach(function(yh) {
        return r(D, yh);
      }), dn && hu(D, We), ge;
    }
    function kn(D, x, M, K) {
      if (typeof M == "object" && M !== null && M.type === Ie && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ke:
            e: {
              for (var ge = M.key, Ae = x; Ae !== null; ) {
                if (Ae.key === ge) {
                  if (ge = M.type, ge === Ie) {
                    if (Ae.tag === 7) {
                      l(D, Ae.sibling), x = c(Ae, M.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Ae.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Uv(ge) === Ae.type) {
                    l(D, Ae.sibling), x = c(Ae, M.props), x.ref = mu(D, Ae, M), x.return = D, D = x;
                    break e;
                  }
                  l(D, Ae);
                  break;
                } else r(D, Ae);
                Ae = Ae.sibling;
              }
              M.type === Ie ? (x = tl(M.props.children, D.mode, K, M.key), x.return = D, D = x) : (K = Hs(M.type, M.key, M.props, null, D.mode, K), K.ref = mu(D, x, M), K.return = D, D = K);
            }
            return m(D);
          case vt:
            e: {
              for (Ae = M.key; x !== null; ) {
                if (x.key === Ae) if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                  l(D, x.sibling), x = c(x, M.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = sf(M, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case Ot:
            return Ae = M._init, kn(D, x, Ae(M._payload), K);
        }
        if (Kn(M)) return ye(D, x, M, K);
        if (we(M)) return Ee(D, x, M, K);
        Dc(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, M), x.return = D, D = x) : (l(D, x), x = Wd(M, D.mode, K), x.return = D, D = x), m(D)) : l(D, x);
    }
    return kn;
  }
  var wn = yu(!0), oe = yu(!1), va = Oa(null), Jr = null, mo = null, yd = null;
  function gd() {
    yd = mo = Jr = null;
  }
  function Sd(n) {
    var r = va.current;
    an(va), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Jr = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Jr === null) throw Error(k(308));
      mo = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Av(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function jv(n, r) {
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
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = U : E.next = U, G.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = U = T = null, E = d;
      do {
        var W = E.lane, de = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: de,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (W = r, de = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  q = ye.call(de, q, W);
                  break e;
                }
                q = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, W = typeof ye == "function" ? ye.call(de, q, W) : ye, W == null) break e;
                q = ie({}, q, W);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else de = { eventTime: de, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (U = G = de, T = q) : G = G.next = de, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(k(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, bi = Oa(fs), ds = Oa(fs), ps = Oa(fs);
  function Su(n) {
    if (n === fs) throw Error(k(174));
    return n;
  }
  function xd(n, r) {
    switch (_e(ps, r), _e(ds, n), _e(bi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    an(bi), _e(bi, r);
  }
  function Eu() {
    an(bi), an(ds), an(ps);
  }
  function Fv(n) {
    Su(ps.current);
    var r = Su(bi.current), l = ca(r, n.type);
    r !== l && (_e(ds, n), _e(bi, l));
  }
  function Lc(n) {
    ds.current === n && (an(bi), an(ds));
  }
  var gn = Oa(0);
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
  function Oe() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var pt = gt.ReactCurrentDispatcher, Mt = gt.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Jn = null, Nc = !1, hs = !1, Cu = 0, Q = 0;
  function Dt() {
    throw Error(k(321));
  }
  function Be(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, pt.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(k(301));
        d += 1, Jn = Un = null, r.updateQueue = null, pt.current = Kc, n = l(o, c);
      } while (hs);
    }
    if (pt.current = bu, r = Un !== null && Un.next !== null, Gt = 0, Jn = Un = Nt = null, Nc = !1, r) throw Error(k(300));
    return n;
  }
  function ri() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function xn() {
    if (Un === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Nt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(k(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(k(311));
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
        var G = U.lane;
        if ((Gt & G) === G) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: G,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, Nt.lanes |= G, Oi |= G;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Nt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Nt, o = xn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(k(349));
      Gt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = ha(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return xn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Tr();
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = xn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Be(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function $c(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Ic(n, r) {
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
  function Yc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, wu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Gt & 21 ? (ti(l, r) || (l = qu(), Nt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Mt.transition = o;
    }
  }
  function _d() {
    return xn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) Hv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      Ur(l, n, o, c), Xt(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) Hv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Hn(), Ur(l, n, o, c), Xt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function Hv(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Xt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Na, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Gc = { readContext: Na, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: $c, useImperativeHandle: function(n, r, l) {
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
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Tr();
    if (dn) {
      if (l === void 0) throw Error(k(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(k(349));
      Gt & 30 || Ac(o, r, l);
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
    var n = Tr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = xi, o = wi;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Q++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Na,
    useCallback: Qc,
    useContext: Na,
    useEffect: ms,
    useImperativeHandle: Yc,
    useInsertionEffect: Ic,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(Xi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = xn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Xi)[0], r = xn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Na, useCallback: Qc, useContext: Na, useEffect: ms, useImperativeHandle: Yc, useInsertionEffect: Ic, useLayoutEffect: ys, useMemo: Wc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(Xi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = xn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Xi)[0], r = xn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? et(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Li(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Li(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (Ur(r, n, o, l), Oc(r, n, o));
  } };
  function Pv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Rr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = Nn(r) ? Gr : En.current, o = r.contextTypes, d = (o = o != null) ? Kr(n, c) : Rr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Vv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = Nn(r) ? Gr : En.current, c.context = Kr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && qc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ct(o), o = o.return;
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
  function Bv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Ou = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = qi(-1, l), l.tag = 3;
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
      Od(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
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
    c.has(l) || (c.add(l), n = my.bind(null, n, r, l), r.then(n, n));
  }
  function $v(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = gt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? oe(r, null, l, o) : wn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Nl(n, r, l, o, d, c), l = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (dn && l && bc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, nt(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return Ua(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function nt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, Ua(n, r, c);
    }
    return Iv(n, r, l, o, c);
  }
  function ws(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Co, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _e(Co, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, _e(Co, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, _e(Co, ya), ya |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Iv(n, r, l, o, c) {
    var d = Nn(l) ? Gr : En.current;
    return d = Kr(r, d), yn(r, c), l = Nl(n, r, l, o, d, c), o = ri(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (dn && o && bc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Yv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) za(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Na(U) : (U = Nn(l) ? Gr : En.current, U = Kr(r, U));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Vv(r, m, o, U), ma = !1;
      var W = r.memoizedState;
      m.state = W, cs(r, o, m, c), T = r.memoizedState, E !== o || W !== T || Yn.current || ma ? (typeof G == "function" && (kd(r, l, G, o), T = r.memoizedState), (E = ma || Pv(r, l, E, o, W, T, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ai(r.type, E), m.props = U, q = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Na(T) : (T = Nn(l) ? Gr : En.current, T = Kr(r, T));
      var de = l.getDerivedStateFromProps;
      (G = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || W !== T) && Vv(r, m, o, T), ma = !1, W = r.memoizedState, m.state = W, cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== q || W !== ye || Yn.current || ma ? (typeof de == "function" && (kd(r, l, de, o), ye = r.memoizedState), (U = ma || Pv(r, l, U, o, W, ye, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xs(n, r, l, o, d, c);
  }
  function xs(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), Ua(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = wn(r, n.child, null, d), r.child = wn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Mv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mv(n, r.context, !1), xd(n, r.containerInfo);
  }
  function Qv(n, r, l, o, c) {
    return Ll(), Ki(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), _e(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Zc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Wv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && Ki(o), wn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(k(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && wn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(k(419)), o = Dd(d, o, void 0), bs(n, r, m, o);
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), Ur(o, n, c, -1));
      }
      return Yd(), o = Dd(Error(k(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Ei(c.nextSibling), qr = r, dn = !0, Ma = null, n !== null && (zn[La++] = wi, zn[La++] = xi, zn[La++] = pa, wi = n.id, xi = n.overflow, pa = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Mr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
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
    if (_e(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Mc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Mr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Mc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Mr(r, !0, l, null, d);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function za(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        Nn(r.type) && Xn(r);
        break;
      case 4:
        xd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        _e(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (_e(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (_e(gn, gn.current & 1), n = Ua(n, r, l), n !== null ? n.sibling : null);
        _e(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), _e(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return Ua(n, r, l);
  }
  var Aa, jn, Gv, Kv;
  Aa = function(n, r) {
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
  }, Gv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xl);
      }
      on(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Re.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Re.hasOwnProperty(U) ? (T != null && U === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Kv = function(n, r, l, o) {
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
  function qv(n, r, l) {
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
        return o = r.stateNode, Eu(), an(Yn), an(En), Oe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Lu(Ma), Ma = null))), jn(n, r), Zn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Gv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(k(166));
            return Zn(r), null;
          }
          if (n = Su(bi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Vn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                Sr(o, d), Pt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Re.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), ci(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ls] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = qn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = $n(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? en(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && re(n, T) : typeof T == "number" && re(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Re.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && Je(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), ci(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + lt(o.value));
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
                  typeof c.onClick == "function" && (n.onclick = xl);
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
        if (n && r.stateNode != null) Kv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(k(166));
          if (l = Su(ps.current), Su(bi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (an(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(k(317));
              d[Ci] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else Ma !== null && (Lu(Ma), Ma = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return Sd(r.type._context), Zn(r), null;
      case 17:
        return Nn(r.type) && vo(), Zn(r), null;
      case 19:
        if (an(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return _e(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && tt() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * tt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = tt(), r.sibling = null, l = gn.current, _e(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return Id(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Nn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), an(Yn), an(En), Oe(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (an(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(k(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return an(gn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, wr = !1, cy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
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
  var Xv = !1;
  function Jv(n, r) {
    if (is = _a, n = ts(), dc(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, G = 0, q = n, W = null;
          t: for (; ; ) {
            for (var de; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (de = q.firstChild) !== null; )
              W = q, q = de;
            for (; ; ) {
              if (q === n) break t;
              if (W === l && ++U === c && (E = m), W === d && ++G === o && (T = m), (de = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = de;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, _a = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, kn = ye.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ai(r.type, Ee), kn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (K) {
        pn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ye = Xv, Xv = !1, ye;
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
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ls], delete r[us], delete r[po], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
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
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var bn = null, Nr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) Zv(n, r, l), l = l.sibling;
  }
  function Zv(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        wr || Eo(l, r);
      case 6:
        var o = bn, c = Nr;
        bn = null, zr(n, r, l), bn = o, Nr = c, bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Nr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Za(n)) : fo(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Nr, bn = l.stateNode.containerInfo, Nr = !0, zr(n, r, l), bn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!wr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (o = wr) || l.memoizedState !== null, zr(n, r, l), wr = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function eh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new cy()), r.forEach(function(o) {
        var c = sh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Nr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(k(160));
        Zv(d, m, c), bn = null, Nr = !1;
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
        if (ii(r, n), ta(n), o & 4) {
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
        ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            re(c, "");
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
              var G = T[m], q = T[m + 1];
              G === "style" ? en(c, q) : G === "dangerouslySetInnerHTML" ? fi(c, q) : G === "children" ? re(c, q) : Je(c, G, q, U);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var de = d.value;
                de != null ? Rn(c, !!d.multiple, de, !1) : W !== !!d.multiple && (d.defaultValue != null ? Rn(
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
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Ee) {
          pn(n, n.return, Ee);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = tt())), o & 4 && eh(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (U = wr) || G, ii(r, n), wr = U) : ii(r, n), ta(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !G && n.mode & 1) for (he = n, G = n.child; G !== null; ) {
            for (q = he = G; he !== null; ) {
              switch (W = he, de = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, W, W.return);
                  break;
                case 1:
                  Eo(W, W.return);
                  var ye = W.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      pn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  Eo(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ns(q);
                    continue;
                  }
              }
              de !== null ? (de.return = W, he = de) : Ns(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Ee) {
                  pn(n, n.return, Ee);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (Ee) {
                pn(n, n.return, Ee);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && eh(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
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
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (re(c, ""), o.flags &= -33);
            var d = Ji(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            ki(n, E, m);
            break;
          default:
            throw Error(k(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    he = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || wr;
          E = Ds;
          var U = wr;
          if (Ds = m, (wr = T) && !U) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : T !== null ? (T.return = m, he = T) : Pd(c);
          for (; d !== null; ) he = d, Hd(d), d = d.sibling;
          he = c, Ds = E, wr = U;
        }
        th(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : th(n);
    }
  }
  function th(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              wr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !wr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
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
                  var G = U.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && Za(q);
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
              throw Error(k(163));
          }
          wr || r.flags & 512 && jd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Ns(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Pd(n) {
    for (; he !== null; ) {
      var r = he;
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
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var dy = Math.ceil, Al = gt.ReactCurrentDispatcher, Du = gt.ReactCurrentOwner, or = gt.ReactCurrentBatchConfig, Rt = 0, Wn = null, Fn = null, sr = 0, ya = 0, Co = Oa(0), _n = 0, zs = null, Oi = 0, Ro = 0, af = 0, Us = null, na = null, Vd = 0, To = 1 / 0, ga = null, wo = !1, Ou = null, jl = null, lf = !1, Zi = null, As = 0, Fl = 0, xo = null, js = -1, xr = 0;
  function Hn() {
    return Rt & 6 ? tt() : js !== -1 ? js : js = tt();
  }
  function Li(n) {
    return n.mode & 1 ? Rt & 2 && sr !== 0 ? sr & -sr : sy.transition !== null ? (xr === 0 && (xr = qu()), xr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, xo = null, Error(k(185));
    Pi(n, l, o), (!(Rt & 2) || n !== Wn) && (n === Wn && (!(Rt & 2) && (Ro |= l), _n === 4 && li(n, sr)), ra(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (To = tt() + 500, ho && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Ja(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : xc(Bd.bind(null, n)), co(function() {
        !(Rt & 6) && Ti();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = qa;
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
        l = fh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, xr = 0, Rt & 6) throw Error(k(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Ja(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = rh();
      (Wn !== n || sr !== r) && (ga = null, To = tt() + 500, el(n, r));
      do
        try {
          ah();
          break;
        } catch (E) {
          nh(n, E);
        }
      while (!0);
      gd(), Al.current = d, Rt = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, el(n, 0), li(n, o), ra(n, tt()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !py(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, el(n, 0), li(n, o), ra(n, tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Nu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Vd + 500 - tt(), 10 < r)) {
              if (Ja(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Nu.bind(null, n, na, ga), r);
              break;
            }
            Nu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * dy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Nu.bind(null, n, na, ga), o);
              break;
            }
            Nu(n, na, ga);
            break;
          case 5:
            Nu(n, na, ga);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return ra(n, tt()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = na, na = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function py(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
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
  function li(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Rt & 6) throw Error(k(327));
    bo();
    var r = Ja(n, 0);
    if (!(r & 1)) return ra(n, tt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, el(n, 0), li(n, r), ra(n, tt()), l;
    if (l === 6) throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, na, ga), ra(n, tt()), null;
  }
  function $d(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (To = tt() + 500, ho && Ti());
    }
  }
  function Mu(n) {
    Zi !== null && Zi.tag === 0 && !(Rt & 6) && bo();
    var r = Rt;
    Rt |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Rt = r, !(Rt & 6) && Ti();
    }
  }
  function Id() {
    ya = Co.current, an(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), an(Yn), an(En), Oe();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          an(gn);
          break;
        case 19:
          an(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ya = r, _n = 0, zs = null, af = Ro = Oi = 0, na = Us = null, gu !== null) {
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
  function nh(n, r) {
    do {
      var l = Fn;
      try {
        if (gd(), pt.current = bu, Nc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Gt = 0, Jn = Un = Nt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var de = $v(m);
            if (de !== null) {
              de.flags &= -257, Ul(de, m, E, d, r), de.mode & 1 && Md(d, U, r), r = de, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, U, r), Yd();
                break e;
              }
              T = Error(k(426));
            }
          } else if (dn && E.mode & 1) {
            var kn = $v(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Ul(kn, m, E, d, r), Ki(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Bv(d, T, r);
                jv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (jl === null || !jl.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Ld(d, E, r);
                  jv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        lh(l);
      } catch (ge) {
        r = ge, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rh() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Yd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || !(Oi & 268435455) && !(Ro & 268435455) || li(Wn, sr);
  }
  function of(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = rh();
    (Wn !== n || sr !== r) && (ga = null, el(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        nh(n, c);
      }
    while (!0);
    if (gd(), Rt = l, Al.current = o, Fn !== null) throw Error(k(261));
    return Wn = null, sr = 0, _n;
  }
  function vy() {
    for (; Fn !== null; ) ih(Fn);
  }
  function ah() {
    for (; Fn !== null && !Ga(); ) ih(Fn);
  }
  function ih(n) {
    var r = ch(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? lh(n) : Fn = r, Du.current = null;
  }
  function lh(n) {
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
      } else if (l = qv(l, r, ya), l !== null) {
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
    var o = Lt, c = or.transition;
    try {
      or.transition = null, Lt = 1, hy(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      bo();
    while (Zi !== null);
    if (Rt & 6) throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, fh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Rt;
      Rt |= 4, Du.current = null, Jv(n, l), Fd(l, n), lo(pu), _a = !!is, pu = is = null, n.current = l, fy(l), Ka(), Rt = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Zi = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), Yo(l.stateNode), ra(n, tt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === xo ? Fl++ : (Fl = 0, xo = n) : Fl = 0, Ti(), null;
  }
  function bo() {
    if (Zi !== null) {
      var n = Ju(As), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, As = 0, Rt & 6) throw Error(k(331));
          var c = Rt;
          for (Rt |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (he = U; he !== null; ) {
                    var G = he;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, he = q;
                    else for (; he !== null; ) {
                      G = he;
                      var W = G.sibling, de = G.return;
                      if (rf(G), G === U) {
                        he = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = de, he = W;
                        break;
                      }
                      he = de;
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
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, he = D;
                break e;
              }
              he = d.return;
            }
          }
          var x = n.current;
          for (he = x; he !== null; ) {
            m = he;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, he = M;
            else e: for (m = x; he !== null; ) {
              if (E = he, E.flags & 2048) try {
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
                he = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, he = K;
                break e;
              }
              he = E.return;
            }
          }
          if (Rt = c, Ti(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, or.transition = r;
      }
    }
    return !1;
  }
  function uh(n, r, l) {
    r = _u(l, r), r = Bv(n, r, 1), n = Ml(n, r, 1), r = Hn(), n !== null && (Pi(n, 1, r), ra(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) uh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        uh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = _u(l, n), n = Ld(r, n, 1), r = Ml(r, n, 1), n = Hn(), r !== null && (Pi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > tt() - Vd ? el(n, 0) : af |= l), ra(n, r);
  }
  function oh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Hn();
    n = ha(n, r), n !== null && (Pi(n, r, l), ra(n, l));
  }
  function yy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), oh(n, l);
  }
  function sh(n, r) {
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
        throw Error(k(314));
    }
    o !== null && o.delete(r), oh(n, l);
  }
  var ch;
  ch = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Yn.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, _s(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Nv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        za(n, r), n = r.pendingProps;
        var c = Kr(r, En.current);
        yn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = qc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = xs(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && bc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (za(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = ai(o, n), c) {
            case 0:
              r = Iv(null, r, o, n, l);
              break e;
            case 1:
              r = Yv(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Iv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Yv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(k(423)), r), r = Qv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(k(424)), r), r = Qv(n, r, o, l, c);
            break e;
          } else for (Xr = Ei(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, Ma = null, l = oe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = Ua(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fv(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Nd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return xd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = wn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, _e(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Yn.current) {
              r = Ua(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = qi(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var G = U.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(k(341));
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
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Na(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), ku(n, r, o, c, l);
      case 15:
        return nt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), za(n, r), r.tag = 1, Nn(o) ? (n = !0, Xn(r)) : n = !1, yn(r, l), Xc(r, o, c), Rs(r, o, c, l), xs(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function fh(n, r) {
    return sn(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ie:
        return tl(l.children, c, d, r);
      case ln:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = ja(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Ne:
        return n = ja(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
      case jt:
        return n = ja(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Ce:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(k(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function dh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new dh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: vt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Rr;
    n = n._reactInternals;
    e: {
      if (et(n) !== n || n.tag !== 1) throw Error(k(170));
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
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return os(n, l, r);
    }
    return r;
  }
  function ph(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Li(l), d = qi(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Pi(n, c, o), ra(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Li(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (Ur(n, c, m, d), Oc(n, c, m)), m;
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
  function vh() {
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
    if (r === null) throw Error(k(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = qd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        ff(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ge();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function hh() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = ph(r, o, n, 0, null, !1, !1, "", hh);
      return n._reactRootContainer = m, n[Qi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = df(T);
        E.call(U);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", hh);
    return n._reactRootContainer = T, n[Qi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
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
    } else m = Cy(l, r, n, c, o);
    return df(m);
  }
  xt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ra(r, tt()), !(Rt & 6) && (To = tt() + 500, Ti()));
        }
        break;
      case 13:
        Mu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Hn();
            Ur(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Hn();
        Ur(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Hn();
        Ur(l, n, r, o);
      }
      pf(n, r);
    }
  }, Ge = function() {
    return Lt;
  }, Zu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(k(90));
              br(o), Yr(o, c);
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
  }, eu = $d, pl = Mu;
  var Ry = { usingClientEntryPoint: !1, Events: [De, ni, mn, Hi, Zl, $d] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(mh), Qr = Vl;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(k(200));
    return Ey(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(k(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Qi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new qd(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Mu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(k(200));
    return Ps(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = ph(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, $a.render = function(n, r, l) {
    if (!hf(r)) throw Error(k(200));
    return Ps(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(k(40));
    return n._reactRootContainer ? (Mu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = $d, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(k(200));
    if (n == null || n._reactInternals === void 0) throw Error(k(38));
    return Ps(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function uk() {
  return oT || (oT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var I = ev(), B = fT(), k = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $e = !1;
    function Re(e) {
      $e = e;
    }
    function je(e) {
      if (!$e) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ve("warn", e, a);
      }
    }
    function S(e) {
      if (!$e) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ve("error", e, a);
      }
    }
    function Ve(e, t, a) {
      {
        var i = k.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $ = 0, ne = 1, Te = 2, J = 3, ce = 4, ee = 5, Me = 6, Ke = 7, st = 8, Jt = 9, yt = 10, Je = 11, gt = 12, ke = 13, vt = 14, Ie = 15, ln = 16, Ht = 17, Zt = 18, un = 19, _t = 21, Ne = 22, jt = 23, kt = 24, Ot = 25, Ce = !0, te = !1, we = !1, ie = !1, _ = !1, P = !0, Ye = !0, Pe = !0, ct = !0, it = /* @__PURE__ */ new Set(), rt = {}, lt = {};
    function ft(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      rt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), rt[e] = t;
      {
        var a = e.toLowerCase();
        lt[a] = e, e === "onDoubleClick" && (lt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        it.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", br = Object.prototype.hasOwnProperty;
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
    function ci(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function sa(e, t) {
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
    var $n = 0, Sr = 1, Ya = 2, Ln = 3, Er = 4, ca = 5, Qa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", re = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + fi + "][" + re + "]*$"), ut = {}, Ft = {};
    function en(e) {
      return br.call(Ft, e) ? !0 : br.call(ut, e) ? !1 : xe.test(e) ? (Ft[e] = !0, !0) : (ut[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
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
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Er:
            return t === !1;
          case ca:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Ln || t === Er, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var It = {}, fa = [
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
    fa.forEach(function(e) {
      It[e] = new $t(
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
      It[t] = new $t(
        t,
        Sr,
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
      It[e] = new $t(
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
      It[e] = new $t(
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
      It[e] = new $t(
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
      It[e] = new $t(
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
      It[e] = new $t(
        e,
        Er,
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
      It[e] = new $t(
        e,
        Qa,
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
      It[e] = new $t(
        e,
        ca,
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
    var Cr = /[\-\:]([a-z])/g, wa = function(e) {
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
      var t = e.replace(Cr, wa);
      It[t] = new $t(
        t,
        Sr,
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
      var t = e.replace(Cr, wa);
      It[t] = new $t(
        t,
        Sr,
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
      var t = e.replace(Cr, wa);
      It[t] = new $t(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new $t(
        e,
        Sr,
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
    var Hi = "xlinkHref";
    It[Hi] = new $t(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new $t(
        e,
        Sr,
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
    function pl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
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
        if (!en(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = tn(t);
      if (!vn(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
          if (en(t)) {
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
          b === Ln || b === Er && a === !0 ? w = "" : (Bn(a, y), w = "" + a, u.sanitizeURL && pl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var kr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), et = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), ht = Symbol.for("react.scope"), dt = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, Ka = "@@iterator";
    function tt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[Ka];
      return typeof t == "function" ? t : null;
    }
    var at = Object.assign, qa = 0, nu, ru, hl, Wu, ml, Qr, Yo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, Qr = console.groupCollapsed, Yo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
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
        qa++;
      }
    }
    function uc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, e, {
              value: nu
            }),
            info: at({}, e, {
              value: ru
            }),
            warn: at({}, e, {
              value: hl
            }),
            error: at({}, e, {
              value: Wu
            }),
            group: at({}, e, {
              value: ml
            }),
            groupCollapsed: at({}, e, {
              value: Qr
            }),
            groupEnd: at({}, e, {
              value: Yo
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = k.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Xa = !1, Ja;
    {
      var Ku = typeof WeakMap == "function" ? WeakMap : Map;
      Ja = new Ku();
    }
    function au(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ja.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
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
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ja.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? da(w) : "";
      return typeof e == "function" && Ja.set(e, N), N;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function qu(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case ue:
          return da("Suspense");
        case me:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return qu(e.render);
          case et:
            return Pi(e.type, t, a);
          case qe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ee:
          return da(e.type);
        case ln:
          return da("Lazy");
        case ke:
          return da("Suspense");
        case un:
          return da("SuspenseList");
        case $:
        case Te:
        case Ie:
          return qu(e.type);
        case Je:
          return qu(e.type.render);
        case ne:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
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
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case rr:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case ue:
          return "Suspense";
        case me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case vi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case Y:
            return Lt(e, e.render, "ForwardRef");
          case et:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case qe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
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
    function hi(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case Jt:
          var i = a;
          return hi(i) + ".Consumer";
        case yt:
          var u = a;
          return hi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case Je:
          return Qo(a, a.render, "ForwardRef");
        case Ke:
          return "Fragment";
        case ee:
          return a;
        case ce:
          return "Portal";
        case J:
          return "Root";
        case Me:
          return "Text";
        case ln:
          return xt(a);
        case st:
          return a === Wa ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case gt:
          return "Profiler";
        case _t:
          return "Scope";
        case ke:
          return "Suspense";
        case un:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case ne:
        case $:
        case Ht:
        case Te:
        case vt:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = k.ReactDebugCurrentFrame, ir = null, mi = !1;
    function Or() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function yi() {
      return ir === null ? "" : Vi(ir);
    }
    function cn() {
      Zu.getCurrentStack = null, ir = null, mi = !1;
    }
    function Yt(e) {
      Zu.getCurrentStack = e === null ? null : yi, ir = e, mi = !1;
    }
    function Sl() {
      return ir;
    }
    function In(e) {
      mi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function xa(e) {
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
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Wf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
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
    function Za(e) {
      El(e) || (e._valueTracker = ba(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = at({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ze(a, t.type, u) : t.hasOwnProperty("defaultValue") && ze(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = zh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function ze(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var le = !1, Fe = !1, mt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? I.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Fe || (Fe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mt || (mt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !le && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), le = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", Lr(xa(t.value)));
    }
    var Qt = Array.isArray;
    function ot(e) {
      return Qt(e);
    }
    var Wt;
    Wt = !1;
    function hn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function Ko(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = ot(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Lr(xa(a)), b = null, w = 0; w < u.length; w++) {
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
      return at({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var rv = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = at({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !rv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), rv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ot(u)) {
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
        initialValue: xa(i)
      };
    }
    function av(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function iv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Xm(e, t) {
      av(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Jf;
        default:
          return $i;
      }
    }
    function td(e, t) {
      return e == null || e === $i ? ed(t) : e === Zf && t === "foreignObject" ? $i : e;
    }
    var lv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, uv = lv(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Wr = 1, Ii = 3, Mn = 8, Yi = 9, nd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
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
    function ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      sv.forEach(function(t) {
        Jo[ov(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var cv = /([A-Z])/g, fv = /^ms-/;
    function io(e) {
      return e.replace(cv, "-$1").toLowerCase().replace(fv, "-ms-");
    }
    var dv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, Zm = /^-ms-/, pv = /-(.)/g, rd = /;\s*$/, Si = {}, su = {}, vv = !1, Zo = !1, ey = function(e) {
        return e.replace(pv, function(t, a) {
          return a.toUpperCase();
        });
      }, hv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ey(e.replace(Zm, "ms-"))
        ));
      }, ad = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, mv = function(e, t) {
        vv || (vv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, yv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      dv = function(e, t) {
        e.indexOf("-") > -1 ? hv(e) : Jm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? mv(e, t) : isFinite(t) || yv(e, t));
      };
    }
    var gv = dv;
    function ty(e) {
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
    function Sv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || gv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ev(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ry(e, t) {
      {
        if (!t)
          return;
        var a = Ev(e), i = Ev(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
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
    }, es = at({
      menuitem: !0
    }, ti), Cv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Cv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
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
    }, lo = {}, ay = new RegExp("^(aria)-[" + re + "]*$"), uo = new RegExp("^(aria)[A-Z][" + re + "]*$");
    function ld(e, t) {
      {
        if (br.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ay.test(t)) {
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
      Tl(e, t) || ns(e, t);
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
      var lr = {}, sd = /^on./, vc = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + re + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + re + "]*$");
      cu = function(e, t, a, i) {
        if (br.call(lr, t) && lr[t])
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
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === $n;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
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
    function xv(e, t, a) {
      Tl(e, t) || wv(e, t, a);
    }
    var cd = 1, hc = 2, ka = 4, fd = cd | hc | ka, fu = null;
    function iy(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ly() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var mc = null, du = null, Pt = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = zh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function bv() {
      return du !== null || Pt !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, wl = !1;
    function _v() {
      var e = bv();
      e && (as(), Sc());
    }
    function kv(e, t, a) {
      if (wl)
        return e(t, a);
      wl = !0;
      try {
        return so(e, t, a);
      } finally {
        wl = !1, _v();
      }
    }
    function uy(e, t, a) {
      so = e, as = a;
    }
    function Dv(e) {
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
          return !!(a.disabled && Dv(t));
        default:
          return !1;
      }
    }
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = zh(a);
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
        var g = document.createEvent("Event"), b = !1, w = !0, N = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          pd.removeEventListener(H, Ue, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Ue() {
          b = !0, F(), a.apply(i, se), w = !1;
        }
        var be, wt = !1, St = !1;
        function O(L) {
          if (be = L.error, wt = !0, be === null && L.colno === 0 && L.lineno === 0 && (St = !0), L.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), pd.addEventListener(H, Ue, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && w && (wt ? St && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", O), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var Ov = Rc, co = !1, Tc = null, fo = !1, Ei = null, Lv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, Ov.apply(Lv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Ei = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Ei;
        throw fo = !1, Ei = null, e;
      }
    }
    function Qi() {
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
    function oy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var De = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), _e = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Yn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), Kr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Mv = (
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
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), xc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Yn | 0
    ), Dl = mn | Ct | Da | Oa | En | Kr | Nn, Ol = Ct | an | En | Nn, Gi = Gr | Da, zn = Wi | xc | ho, La = k.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Kr)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function wi(e) {
      if (e.tag === ke) {
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
    function xi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return pa(e) === e;
    }
    function Nv(e) {
      {
        var t = La.current;
        if (t !== null && t.tag === ne) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? pa(u) === u : !1;
    }
    function bc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
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
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = _c(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === ee || e.tag === Me)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = _c(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === ee || e.tag === Me)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ce) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = B.unstable_scheduleCallback, zv = B.unstable_cancelCallback, hd = B.unstable_shouldYield, md = B.unstable_requestPaint, Qn = B.unstable_now, kc = B.unstable_getCurrentPriorityLevel, ss = B.unstable_ImmediatePriority, Ll = B.unstable_UserBlockingPriority, Ki = B.unstable_NormalPriority, sy = B.unstable_LowPriority, mu = B.unstable_IdlePriority, Dc = B.unstable_yieldValue, Uv = B.unstable_setDisableYieldValue, yu = null, wn = null, oe = null, va = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ye && (e = at({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Na
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
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & _e) === _e;
          if (Pe) {
            var i;
            switch (t) {
              case Mr:
                i = ss;
                break;
              case _i:
                i = Ll;
                break;
              case za:
                i = Ki;
                break;
              case Ua:
                i = mu;
                break;
              default:
                i = Ki;
                break;
            }
            wn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (wn && typeof wn.onPostCommitFiberRoot == "function")
        try {
          wn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
          wn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (Uv(e), Re(e)), wn && typeof wn.setStrictMode == "function")
        try {
          wn.setStrictMode(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      oe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Hv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Rd() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function ha(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function ma() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function Av() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function jv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function ps() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Su(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function xd() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function Eu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function Fv() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function Lc() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function gn(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function Mc(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var Oe = (
      /*                         */
      0
    ), pt = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Nt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : hs, Jn = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Nc | 0) | 0;
    }
    var Cu = 31, Q = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), Nl = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), xn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), zl = (
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
    ), Ic = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Yc = (
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
    ), Zr = (
      /*                   */
      1073741824
    );
    function Hv(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & xn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Xt = -1, bu = Ru, Gc = wu;
    function Cs(e) {
      switch (Ul(e)) {
        case Be:
          return Be;
        case Nl:
          return Nl;
        case ri:
          return ri;
        case Tr:
          return Tr;
        case xn:
          return xn;
        case Xi:
          return Xi;
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
        case Ic:
          return e & zl;
        case wu:
        case Yc:
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
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === Q)
        return Q;
      var i = Q, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Q) {
        var p = f & ~u;
        if (p !== Q)
          i = Cs(p);
        else {
          var v = f & s;
          v !== Q && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== Q ? i = Cs(y) : s !== Q && (i = Cs(s));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Q) {
        var g = Ul(i), b = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === xn && (b & zl) !== Q
        )
          return t;
      }
      (i & ri) !== Q && (i |= a & xn);
      var w = e.entangledLanes;
      if (w !== Q)
        for (var N = e.entanglements, A = i & w; A > 0; ) {
          var F = An(A), se = 1 << F;
          i |= N[F], A &= ~se;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case Be:
        case Nl:
        case ri:
          return t + 250;
        case Tr:
        case xn:
        case Xi:
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
        case Ic:
          return t + 5e3;
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          return Xt;
        case Ss:
        case Es:
        case xu:
        case Zr:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function qc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === Q || (v & u) !== Q) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Pv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Q ? t : t & Zr ? Zr : Q;
    }
    function Vv(e) {
      return (e & Be) !== Q;
    }
    function Rs(e) {
      return (e & _d) !== Q;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Dd(e) {
      var t = Be | ri | xn;
      return (e & t) === Q;
    }
    function Od(e) {
      return (e & zl) === e;
    }
    function Jc(e, t) {
      var a = Nl | ri | Tr | xn;
      return (t & a) !== Q;
    }
    function Bv(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function Ld(e) {
      return (e & zl) !== Q;
    }
    function Md() {
      var e = bu;
      return bu <<= 1, (bu & zl) === Q && (bu = Ru), e;
    }
    function $v() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === Q && (Gc = wu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function ea(e, t) {
      return (e & t) !== Q;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Yv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Qv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Q, u[p] = Xt, s[p] = Xt, f &= ~v;
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
      var a = Ul(t), i;
      switch (a) {
        case ri:
          i = Nl;
          break;
        case xn:
          i = Tr;
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
        case Ic:
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          i = Xi;
          break;
        case xu:
          i = Es;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function bs(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Wv(e, t) {
      if (Jr)
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
    var Mr = Be, _i = ri, za = xn, Ua = xu, _s = Dt;
    function Aa() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function Gv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Kv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = Ul(e);
      return Zn(Mr, t) ? Zn(_i, t) ? Rs(t) ? za : Ua : _i : Mr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function wr(e) {
      Ds = e;
    }
    function cy(e) {
      Ds(e);
    }
    var he;
    function Eo(e) {
      he = e;
    }
    var nf;
    function Xv(e) {
      nf = e;
    }
    var Jv;
    function Os(e) {
      Jv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Ji = null, ki = null, Di = null, bn = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), zr = [], Zv = [
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
    function eh(e) {
      return Zv.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
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
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
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
          Nr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && he(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function fy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ta(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ta(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ta(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ta(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Nr.set(b, ta(Nr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ke) {
            var u = wi(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function th(e) {
      for (var t = Jv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && Zn(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = Do(i);
          return f !== null && he(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function dy() {
      rf = !1, Ji !== null && Ns(Ji) && (Ji = null), ki !== null && Ns(ki) && (ki = null), Di !== null && Ns(Di) && (Di = null), bn.forEach(Pd), Nr.forEach(Pd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, dy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Al(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Al(Ji, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      bn.forEach(i), Nr.forEach(i);
      for (var u = 0; u < zr.length; u++) {
        var s = zr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var f = zr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && zr.shift();
      }
    }
    var or = k.ReactCurrentBatchConfig, Rt = !0;
    function Wn(e) {
      Rt = !!e;
    }
    function Fn() {
      return Rt;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Mr:
          u = ya;
          break;
        case _i:
          u = Co;
          break;
        case za:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = or.transition;
      or.transition = null;
      try {
        jn(Mr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Aa(), s = or.transition;
      or.transition = null;
      try {
        jn(_i), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Rt && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, Oi, a), Fd(e, i);
        return;
      }
      if (fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & ka && eh(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && cy(s);
          var f = Ro(e, t, a, i);
          if (f === null && Dy(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Oi = null;
    function Ro(e, t, a, i) {
      Oi = null;
      var u = dd(i), s = Is(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ke) {
            var v = wi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (tf(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
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
          return Mr;
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
          return _i;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Mr;
            case Ll:
              return _i;
            case Ki:
            case sy:
              return za;
            case mu:
              return Ua;
            default:
              return za;
          }
        }
        default:
          return za;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
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
    var ga = null, wo = null, Ou = null;
    function jl(e) {
      return ga = e, wo = As(), !0;
    }
    function lf() {
      ga = null, wo = null, Ou = null;
    }
    function Zi() {
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
      return "value" in ga ? ga.value : ga.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function xr(e) {
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
      return at(t.prototype, {
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
    }, Li = xr(Hn), Ur = at({}, Hn, {
      view: 0,
      detail: 0
    }), ra = xr(Ur), uf, Fs, Lu;
    function py(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var li = at({}, Ur, {
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
        return "movementX" in e ? e.movementX : (py(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Bd = xr(li), $d = at({}, li, {
      dataTransfer: 0
    }), Mu = xr($d), Id = at({}, Ur, {
      relatedTarget: 0
    }), el = xr(Id), nh = at({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rh = xr(nh), Yd = at({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr(Yd), vy = at({}, Hn, {
      data: 0
    }), ah = xr(vy), ih = ah, lh = {
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
    function hy(e) {
      if (e.key) {
        var t = lh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
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
    function uh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return uh;
    }
    var my = at({}, Ur, {
      key: hy,
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
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), oh = xr(my), yy = at({}, li, {
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
    }), sh = xr(yy), ch = at({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), fh = xr(ch), gy = at({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = xr(gy), Qd = at({}, li, {
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
    }), Sy = xr(Qd), Hl = [9, 13, 27, 32], Hs = 229, tl = On && "CompositionEvent" in window, Pl = null;
    On && "documentMode" in document && (Pl = document.documentMode);
    var Wd = On && "TextEvent" in window && !Pl, sf = On && (!tl || Pl && Pl > 8 && Pl <= 11), dh = 32, cf = String.fromCharCode(dh);
    function Ey() {
      ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ft("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ft("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ft("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function ph(e) {
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
          return Hl.indexOf(t.keyCode) !== -1;
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
    function vh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = ff(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !vh(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Zi()));
      var p = Ch(a, s);
      if (p.length > 0) {
        var v = new ah(s, t, null, i, u);
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
          return a !== dh ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Xd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && Kd(e, t)) {
          var a = Zi();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ph(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !vh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Wd ? s = vf(t, i) : s = Xd(t, i), !s)
        return null;
      var f = Ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ih("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function hh(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var Cy = {
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
      return t === "input" ? !!Cy[e.type] : t === "textarea";
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
    function Ry(e) {
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
      ft("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function mh(e, t, a, i) {
      oo(i);
      var u = Ch(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      mh(t, n, e, dd(e)), kv(o, t);
    }
    function o(e) {
      OE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Ry("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function de(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ze(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ye : (v = q, y = G) : W(p) && (v = de), v) {
        var g = v(t, a);
        if (g) {
          mh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ee(p);
    }
    function D() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function x(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || fp(y)))
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
        var w, N;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (w = a, N = A ? Is(A) : null, N !== null) {
            var F = pa(N);
            (N !== F || N.tag !== ee && N.tag !== Me) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var se = Bd, Ue = "onMouseLeave", be = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = sh, Ue = "onPointerLeave", be = "onPointerEnter", wt = "pointer");
          var St = w == null ? g : Cf(w), O = N == null ? g : Cf(N), H = new se(Ue, wt + "leave", w, i, u);
          H.target = St, H.relatedTarget = O;
          var L = null, X = Is(u);
          if (X === a) {
            var ve = new se(be, wt + "enter", N, i, u);
            ve.target = O, ve.relatedTarget = St, L = ve;
          }
          MT(e, H, L, w, N);
        }
      }
    }
    function M(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var K = typeof Object.is == "function" ? Object.is : M;
    function ge(e, t) {
      if (K(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !K(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ae(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function He(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function We(e, t) {
      for (var a = Ae(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ae(He(a));
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
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
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
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = We(e, f), g = We(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function yh(e) {
      return e && e.nodeType === Ii;
    }
    function SE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : yh(e) ? !1 : yh(t) ? SE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vT(e) {
      return e && e.ownerDocument && SE(e.ownerDocument.documentElement, e);
    }
    function hT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function EE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (hT(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mT() {
      var e = EE();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? gT(e) : null
      };
    }
    function yT(e) {
      var t = EE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vT(a)) {
        i !== null && Ty(a) && ST(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Wr && u.push({
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
    function gT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function ST(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var ET = On && "documentMode" in document && document.documentMode <= 11;
    function CT() {
      ft("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, wy = null, Jd = null, xy = !1;
    function RT(e) {
      if ("selectionStart" in e && Ty(e))
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
    function TT(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function CE(e, t, a) {
      var i = TT(a);
      if (!(xy || mf == null || mf !== _a(i))) {
        var u = RT(mf);
        if (!Jd || !ge(Jd, u)) {
          Jd = u;
          var s = Ch(wy, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function wT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, wy = a, Jd = null);
          break;
        case "focusout":
          mf = null, wy = null, Jd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, CE(e, i, u);
          break;
        case "selectionchange":
          if (ET)
            break;
        case "keydown":
        case "keyup":
          CE(e, i, u);
      }
    }
    function gh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: gh("Animation", "AnimationEnd"),
      animationiteration: gh("Animation", "AnimationIteration"),
      animationstart: gh("Animation", "AnimationStart"),
      transitionend: gh("Transition", "TransitionEnd")
    }, by = {}, RE = {};
    On && (RE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function Sh(e) {
      if (by[e])
        return by[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RE)
          return by[e] = t[a];
      return e;
    }
    var TE = Sh("animationend"), wE = Sh("animationiteration"), xE = Sh("animationstart"), bE = Sh("transitionend"), _E = /* @__PURE__ */ new Map(), kE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      _E.set(e, t), ft(t, [e]);
    }
    function xT() {
      for (var e = 0; e < kE.length; e++) {
        var t = kE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(TE, "onAnimationEnd"), _o(wE, "onAnimationIteration"), _o(xE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(bE, "onTransitionEnd");
    }
    function bT(e, t, a, i, u, s, f) {
      var p = _E.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = oh;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
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
            v = fh;
            break;
          case TE:
          case wE:
          case xE:
            v = rh;
            break;
          case bE:
            v = ja;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = Sy;
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
            v = sh;
            break;
        }
        var g = (s & ka) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = OT(a, p, i.type, g, b);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    xT(), D(), Vs(), CT(), Ey();
    function _T(e, t, a, i, u, s, f) {
      bT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (x(e, t, a, i, u), kn(e, t, a, i, u), wT(e, t, a, i, u), hh(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function DE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function kT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, N = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          DE(e, N, w), i = b;
        }
    }
    function OE(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        kT(s, f, a);
      }
      ls();
    }
    function DT(e, t, a, i, u) {
      var s = dd(a), f = [];
      _T(f, e, i, a, s, t), OE(f, t);
    }
    function Sn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = i1(t), u = NT(e);
      i.has(u) || (LE(t, e, hc, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), LE(a, e, i, t);
    }
    var Eh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[Eh]) {
        e[Eh] = !0, it.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Eh] || (t[Eh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function LE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : na(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function ME(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === ce) {
              var y = p.stateNode.containerInfo;
              if (ME(y, f))
                break;
              if (v === ce)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === ce) {
                    var w = g.stateNode.containerInfo;
                    if (ME(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Is(y);
                if (N === null)
                  return;
                var A = N.tag;
                if (A === ee || A === Me) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      kv(function() {
        return DT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function OT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, N = b.tag;
        if (N === ee && w !== null && (g = w, p !== null)) {
          var A = xl(y, p);
          A != null && v.push(tp(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ee && f !== null) {
          var v = f, y = xl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = xl(u, t);
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
      while (e && e.tag !== ee);
      return e || null;
    }
    function LT(e, t) {
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
    function NE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ee && g !== null) {
          var w = g;
          if (u) {
            var N = xl(p, s);
            N != null && f.unshift(tp(p, N, w));
          } else if (!u) {
            var A = xl(p, s);
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
    function MT(e, t, a, i, u) {
      var s = i && u ? LT(i, u) : null;
      i !== null && NE(e, t, i, s, !1), u !== null && a !== null && NE(e, a, u, s, !0);
    }
    function NT(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, np = "dangerouslySetInnerHTML", Rh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", zE = "autoFocus", Bs = "children", $s = "style", Th = "__html", Oy, wh, rp, UE, xh, AE, jE;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, wh = function(e, t) {
      ud(e, t), pc(e, t), xv(e, t, {
        registrationNameDependencies: rt,
        possibleRegistrationNames: lt
      });
    }, AE = On && !document.documentMode, rp = function(e, t, a) {
      if (!Fa) {
        var i = bh(a), u = bh(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, UE = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, jE = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var zT = /\r\n?/g, UT = /\u0000|\uFFFD/g;
    function bh(e) {
      Kn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zT, `
`).replace(UT, "");
    }
    function _h(e, t, a, i) {
      var u = bh(t), s = bh(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function FE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function AT() {
    }
    function kh(e) {
      e.onclick = AT;
    }
    function jT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), Sv(t, f);
          else if (s === np) {
            var p = f ? f[Th] : void 0;
            p != null && uv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Rh || s === ko || s === zE || (rt.hasOwnProperty(s) ? f != null && (typeof f != "function" && xh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function FT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? Sv(e, f) : s === np ? uv(e, f) : s === Bs ? ao(e, f) : _r(e, s, f, i);
      }
    }
    function HT(e, t, a, i) {
      var u, s = FE(a), f, p = i;
      if (p === $i && (p = ed(e)), p === $i) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(Oy, e) && (Oy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PT(e, t) {
      return FE(t).createTextNode(e);
    }
    function VT(e, t, a, i) {
      var u = Tl(t, a);
      wh(t, a);
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
          ei(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
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
      switch (fc(t, s), jT(t, e, i, s, u), t) {
        case "input":
          Za(e), z(e, a, !1);
          break;
        case "textarea":
          Za(e), iv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && kh(e);
          break;
      }
    }
    function BT(e, t, a, i, u) {
      wh(t, i);
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
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && kh(e);
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
          } else v === np || v === Bs || v === Rh || v === ko || v === zE || (rt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === $s)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === np) {
            var A = w ? w[Th] : void 0, F = N ? N[Th] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Rh || v === ko || (rt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && xh(v, w), v === "onScroll" && Sn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ry(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function $T(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (FT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          av(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function IT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function YT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), wh(t, a), t) {
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
          ei(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
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
      var N = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Bs)
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && _h(e.textContent, F, s, f), N = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && _h(e.textContent, F, s, f), N = [Bs, "" + F]);
          else if (rt.hasOwnProperty(A))
            F != null && (typeof F != "function" && xh(A, F), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Ue = tn(A);
            if (a[ko] !== !0) {
              if (!(A === Rh || A === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var be = e.innerHTML, wt = F ? F[Th] : void 0;
                  if (wt != null) {
                    var St = jE(e, wt);
                    St !== be && rp(A, be, St);
                  }
                } else if (A === $s) {
                  if (v.delete(A), AE) {
                    var O = ty(F);
                    se = e.getAttribute("style"), O !== se && rp(A, se, O);
                  }
                } else if (p && !_)
                  v.delete(A.toLowerCase()), se = tu(e, A, F), F !== se && rp(A, se, F);
                else if (!vn(A, Ue, p) && !qn(A, F, Ue, p)) {
                  var H = !1;
                  if (Ue !== null)
                    v.delete(Ue.attributeName), se = vl(e, A, F, Ue);
                  else {
                    var L = i;
                    if (L === $i && (L = ed(t)), L === $i)
                      v.delete(A.toLowerCase());
                    else {
                      var X = IT(A);
                      X !== null && X !== A && (H = !0, v.delete(X)), v.delete(A);
                    }
                    se = tu(e, A, F);
                  }
                  var ve = _;
                  !ve && F !== se && !H && rp(A, se, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && UE(v), t) {
        case "input":
          Za(e), z(e, a, !0);
          break;
        case "textarea":
          Za(e), iv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && kh(e);
          break;
      }
      return N;
    }
    function QT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function WT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Xm(e, a);
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
      var GT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HE = [
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
      ], KT = HE.concat(["button"]), qT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], PE = {
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
        var a = at({}, e || PE), i = {
          tag: t
        };
        return HE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), KT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), GT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var XT = function(e, t) {
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
            return qT.indexOf(t) === -1;
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
      }, JT = function(e, t) {
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
      }, VE = {};
      ap = function(e, t, a) {
        a = a || PE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = XT(e, u) ? null : i, f = s ? null : JT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!VE[y]) {
            VE[y] = !0;
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
    var Dh = "suppressHydrationWarning", Oh = "$", Lh = "/$", lp = "$?", up = "$!", ZT = "style", Uy = null, Ay = null;
    function ew(e) {
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
    function tw(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function mk(e) {
      return e;
    }
    function nw(e) {
      Uy = Fn(), Ay = mT();
      var t = null;
      return Wn(!1), t;
    }
    function rw(e) {
      yT(Ay), Wn(Uy), Uy = null, Ay = null;
    }
    function aw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = HT(e, t, a, s);
      return cp(u, y), Iy(y, t), y;
    }
    function iw(e, t) {
      e.appendChild(t);
    }
    function lw(e, t, a, i, u) {
      switch (VT(e, t, a, i), t) {
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
    function uw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return BT(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ow(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = PT(e, t);
      return cp(i, s), s;
    }
    function sw() {
      var e = window.event;
      return e === void 0 ? za : af(e.type);
    }
    var Fy = typeof setTimeout == "function" ? setTimeout : void 0, cw = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, BE = typeof Promise == "function" ? Promise : void 0, fw = typeof queueMicrotask == "function" ? queueMicrotask : typeof BE < "u" ? function(e) {
      return BE.resolve(null).then(e).catch(dw);
    } : Fy;
    function dw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pw(e, t, a, i) {
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
    function vw(e, t, a, i, u, s) {
      $T(e, t, a, i, u), Iy(e, u);
    }
    function $E(e) {
      ao(e, "");
    }
    function hw(e, t, a) {
      e.nodeValue = a;
    }
    function mw(e, t) {
      e.appendChild(t);
    }
    function yw(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && kh(a);
    }
    function gw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Sw(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Ew(e, t) {
      e.removeChild(t);
    }
    function Cw(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Lh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Oh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function Rw(e, t) {
      e.nodeType === Mn ? Py(e.parentNode, t) : e.nodeType === Wr && Py(e, t), Du(e);
    }
    function Tw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ww(e) {
      e.nodeValue = "";
    }
    function xw(e, t) {
      e = e;
      var a = t[ZT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function bw(e, t) {
      e.nodeValue = t;
    }
    function _w(e) {
      e.nodeType === Wr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function kw(e, t, a) {
      return e.nodeType !== Wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Dw(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function Ow(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function IE(e) {
      return e.data === lp;
    }
    function Vy(e) {
      return e.data === up;
    }
    function Lw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Mw(e, t) {
      e._reactRetry = t;
    }
    function Mh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Wr || t === Ii)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Oh || a === up || a === lp)
            break;
          if (a === Lh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Mh(e.nextSibling);
    }
    function Nw(e) {
      return Mh(e.firstChild);
    }
    function zw(e) {
      return Mh(e.firstChild);
    }
    function Uw(e) {
      return Mh(e.nextSibling);
    }
    function Aw(e, t, a, i, u, s, f) {
      cp(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & pt) !== Oe;
      return YT(e, t, a, p, i, y, f);
    }
    function jw(e, t, a, i) {
      return cp(a, e), a.mode & pt, QT(e, t);
    }
    function Fw(e, t) {
      cp(t, e);
    }
    function Hw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Lh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === Oh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function YE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Oh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === Lh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Pw(e) {
      Du(e);
    }
    function Vw(e) {
      Du(e);
    }
    function Bw(e) {
      return e !== "head" && e !== "body";
    }
    function $w(e, t, a, i) {
      var u = !0;
      _h(t.nodeValue, a, i, u);
    }
    function Iw(e, t, a, i, u, s) {
      if (t[Dh] !== !0) {
        var f = !0;
        _h(i.nodeValue, u, s, f);
      }
    }
    function Yw(e, t) {
      t.nodeType === Wr ? Ly(e, t) : t.nodeType === Mn || My(e, t);
    }
    function Qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Wr ? Ly(a, t) : t.nodeType === Mn || My(a, t));
      }
    }
    function Ww(e, t, a, i, u) {
      (u || t[Dh] !== !0) && (i.nodeType === Wr ? Ly(a, i) : i.nodeType === Mn || My(a, i));
    }
    function Gw(e, t, a) {
      Ny(e, t);
    }
    function Kw(e, t) {
      zy(e, t);
    }
    function qw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function Xw(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function Jw(e, t, a, i, u, s) {
      (s || t[Dh] !== !0) && Ny(a, i);
    }
    function Zw(e, t, a, i, u) {
      (u || t[Dh] !== !0) && zy(a, i);
    }
    function e1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function t1(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, By = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, $y = "__reactEvents$" + Sf, n1 = "__reactListeners$" + Sf, r1 = "__reactHandles$" + Sf;
    function a1(e) {
      delete e[Ef], delete e[By], delete e[$y], delete e[n1], delete e[r1];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Nh(e, t) {
      t[sp] = e;
    }
    function QE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Is(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = YE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = YE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === ee || t.tag === Me || t.tag === ke || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === ee || e.tag === Me)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function zh(e) {
      return e[By] || null;
    }
    function Iy(e, t) {
      e[By] = t;
    }
    function i1(e) {
      var t = e[$y];
      return t === void 0 && (t = e[$y] = /* @__PURE__ */ new Set()), t;
    }
    var WE = {}, GE = k.ReactDebugCurrentFrame;
    function Uh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        GE.setExtraStackFrame(a);
      } else
        GE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
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
            p && !(p instanceof Error) && (Uh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Uh(null)), p instanceof Error && !(p.message in WE) && (WE[p.message] = !0, Uh(u), S("Failed %s type: %s", a, p.message), Uh(null));
          }
      }
    }
    var Yy = [], Ah;
    Ah = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Ah[Uu] && S("Unexpected Fiber popped."), e.current = Yy[Uu], Yy[Uu] = null, Ah[Uu] = null, Uu--;
    }
    function ia(e, t, a) {
      Uu++, Yy[Uu] = e.current, Ah[Uu] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var ui = {};
    Object.freeze(ui);
    var Au = Oo(ui), $l = Oo(!1), Wy = ui;
    function Rf(e, t, a) {
      return a && Il(t) ? Wy : Au.current;
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ge(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && KE(e, t, s), s;
      }
    }
    function jh() {
      return $l.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fh(e) {
      aa($l, e), aa(Au, e);
    }
    function Gy(e) {
      aa($l, e), aa(Au, e);
    }
    function qE(e, t, a) {
      {
        if (Au.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Au, t, e), ia($l, a, e);
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return at({}, a, f);
      }
    }
    function Hh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Wy = Au.current, ia(Au, a, e), ia($l, $l.current, e), !0;
      }
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = XE(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, aa($l, e), aa(Au, e), ia(Au, u, e), ia($l, a, e);
        } else
          aa($l, e), ia($l, a, e);
      }
    }
    function l1(e) {
      {
        if (!hu(e) || e.tag !== ne)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case ne: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Ph = 1, ju = null, Ky = !1, qy = !1;
    function ZE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function u1(e) {
      Ky = !0, ZE(e);
    }
    function eC() {
      Ky && Mo();
    }
    function Mo() {
      if (!qy && ju !== null) {
        qy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = ju;
          for (jn(Mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Ky = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), vd(ss, Mo), s;
        } finally {
          jn(t), qy = !1;
        }
      }
      return null;
    }
    var wf = [], xf = 0, Vh = null, Bh = 0, Mi = [], Ni = 0, Ys = null, Fu = 1, Hu = "";
    function o1(e) {
      return Ws(), (e.flags & Ri) !== De;
    }
    function s1(e) {
      return Ws(), Bh;
    }
    function c1() {
      var e = Hu, t = Fu, a = t & ~f1(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), wf[xf++] = Bh, wf[xf++] = Vh, Vh = e, Bh = t;
    }
    function tC(e, t, a) {
      Ws(), Mi[Ni++] = Fu, Mi[Ni++] = Hu, Mi[Ni++] = Ys, Ys = e;
      var i = Fu, u = Hu, s = $h(i) - 1, f = i & ~(1 << s), p = a + 1, v = $h(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, N = s - y, A = $h(t) + N, F = p << N, se = F | w, Ue = b + u;
        Fu = 1 << A | se, Hu = Ue;
      } else {
        var be = p << s, wt = be | f, St = u;
        Fu = 1 << v | wt, Hu = St;
      }
    }
    function Xy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), tC(e, a, i);
      }
    }
    function $h(e) {
      return 32 - Un(e);
    }
    function f1(e) {
      return 1 << $h(e) - 1;
    }
    function Jy(e) {
      for (; e === Vh; )
        Vh = wf[--xf], wf[xf] = null, Bh = wf[--xf], wf[xf] = null;
      for (; e === Ys; )
        Ys = Mi[--Ni], Mi[Ni] = null, Hu = Mi[--Ni], Mi[Ni] = null, Fu = Mi[--Ni], Mi[Ni] = null;
    }
    function d1() {
      return Ws(), Ys !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function p1(e, t) {
      Ws(), Mi[Ni++] = Fu, Mi[Ni++] = Hu, Mi[Ni++] = Ys, Fu = t.id, Hu = t.overflow, Ys = e;
    }
    function Ws() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, zi = null, rl = !1, Gs = !1, No = null;
    function v1() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nC() {
      Gs = !0;
    }
    function h1() {
      return Gs;
    }
    function m1(e) {
      var t = e.stateNode.containerInfo;
      return zi = zw(t), Ar = e, rl = !0, No = null, Gs = !1, !0;
    }
    function y1(e, t, a) {
      return zi = Uw(t), Ar = e, rl = !0, No = null, Gs = !1, a !== null && p1(e, a), !0;
    }
    function rC(e, t) {
      switch (e.tag) {
        case J: {
          Yw(e.stateNode.containerInfo, t);
          break;
        }
        case ee: {
          var a = (e.mode & pt) !== Oe;
          Ww(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ke: {
          var i = e.memoizedState;
          i.dehydrated !== null && Qw(i.dehydrated, t);
          break;
        }
      }
    }
    function aC(e, t) {
      rC(e, t);
      var a = C_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ee:
                var i = t.type;
                t.pendingProps, Gw(a, i);
                break;
              case Me:
                var u = t.pendingProps;
                Kw(a, u);
                break;
            }
            break;
          }
          case ee: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ee: {
                var v = t.type, y = t.pendingProps, g = (e.mode & pt) !== Oe;
                Jw(
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
              case Me: {
                var b = t.pendingProps, w = (e.mode & pt) !== Oe;
                Zw(
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
          case ke: {
            var N = e.memoizedState, A = N.dehydrated;
            if (A !== null) switch (t.tag) {
              case ee:
                var F = t.type;
                t.pendingProps, qw(A, F);
                break;
              case Me:
                var se = t.pendingProps;
                Xw(A, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function iC(e, t) {
      t.flags = t.flags & ~Kr | mn, Zy(e, t);
    }
    function lC(e, t) {
      switch (e.tag) {
        case ee: {
          var a = e.type;
          e.pendingProps;
          var i = kw(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, zi = Nw(i), !0) : !1;
        }
        case Me: {
          var u = e.pendingProps, s = Dw(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, zi = null, !0) : !1;
        }
        case ke: {
          var f = Ow(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: d1(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = R_(f);
            return v.return = e, e.child = v, Ar = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & pt) !== Oe && (e.flags & _e) === De;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          eg(e) && (Zy(Ar, e), tg()), iC(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!lC(e, t)) {
          eg(e) && (Zy(Ar, e), tg()), t = op(a);
          var i = Ar;
          if (!t || !lC(e, t)) {
            iC(Ar, e), rl = !1, Ar = e;
            return;
          }
          aC(i, a);
        }
      }
    }
    function g1(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Aw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function S1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jw(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & pt) !== Oe;
              $w(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ee: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & pt) !== Oe;
              Iw(
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
    function E1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Fw(a, e);
    }
    function C1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Hw(a);
    }
    function uC(e) {
      for (var t = e.return; t !== null && t.tag !== ee && t.tag !== J && t.tag !== ke; )
        t = t.return;
      Ar = t;
    }
    function Ih(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return uC(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== ee || Bw(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (eg(e))
            oC(e), tg();
          else
            for (; t; )
              aC(e, t), t = op(t);
      }
      return uC(e), e.tag === ke ? zi = C1(e) : zi = Ar ? op(e.stateNode) : null, !0;
    }
    function R1() {
      return rl && zi !== null;
    }
    function oC(e) {
      for (var t = zi; t; )
        rC(e, t), t = op(t);
    }
    function bf() {
      Ar = null, zi = null, rl = !1, Gs = !1;
    }
    function sC() {
      No !== null && (nR(No), No = null);
    }
    function jr() {
      return rl;
    }
    function rg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var T1 = k.ReactCurrentBatchConfig, w1 = null;
    function x1() {
      return T1.transition;
    }
    var al = {
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
      var b1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          e.add(Ge(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          t.add(Ge(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          a.add(Ge(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          i.add(Ge(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          u.add(Ge(w) || "Component"), qs.add(w.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(w) {
          s.add(Ge(w) || "Component"), qs.add(w.type);
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
          je(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ks(a);
          je(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ks(u);
          je(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), cC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = b1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cC.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), cC.add(s.type);
            });
            var u = Ks(i);
            try {
              Yt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var ag, ig, lg, ug, og, fC = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, fC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        ug[a] || (ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ne) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ge(e) || "Component";
          lg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ne)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
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
    function Qh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Ge(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function dC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function pC(e) {
      function t(O, H) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [H], O.flags |= Da) : L.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var L = H; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, H) {
        for (var L = /* @__PURE__ */ new Map(), X = H; X !== null; )
          X.key !== null ? L.set(X.key, X) : L.set(X.index, X), X = X.sibling;
        return L;
      }
      function u(O, H) {
        var L = ic(O, H);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, H, L) {
        if (O.index = L, !e)
          return O.flags |= Ri, H;
        var X = O.alternate;
        if (X !== null) {
          var ve = X.index;
          return ve < H ? (O.flags |= mn, H) : ve;
        } else
          return O.flags |= mn, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= mn), O;
      }
      function p(O, H, L, X) {
        if (H === null || H.tag !== Me) {
          var ve = rE(L, O.mode, X);
          return ve.return = O, ve;
        } else {
          var fe = u(H, L);
          return fe.return = O, fe;
        }
      }
      function v(O, H, L, X) {
        var ve = L.type;
        if (ve === di)
          return g(O, H, L.props.children, X, L.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        gR(H, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === qe && dC(ve) === H.type)) {
          var fe = u(H, L.props);
          return fe.ref = gp(O, H, L), fe.return = O, fe._debugSource = L._source, fe._debugOwner = L._owner, fe;
        }
        var Qe = nE(L, O.mode, X);
        return Qe.ref = gp(O, H, L), Qe.return = O, Qe;
      }
      function y(O, H, L, X) {
        if (H === null || H.tag !== ce || H.stateNode.containerInfo !== L.containerInfo || H.stateNode.implementation !== L.implementation) {
          var ve = aE(L, O.mode, X);
          return ve.return = O, ve;
        } else {
          var fe = u(H, L.children || []);
          return fe.return = O, fe;
        }
      }
      function g(O, H, L, X, ve) {
        if (H === null || H.tag !== Ke) {
          var fe = Io(L, O.mode, X, ve);
          return fe.return = O, fe;
        } else {
          var Qe = u(H, L);
          return Qe.return = O, Qe;
        }
      }
      function b(O, H, L) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var X = rE("" + H, O.mode, L);
          return X.return = O, X;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case kr: {
              var ve = nE(H, O.mode, L);
              return ve.ref = gp(O, null, H), ve.return = O, ve;
            }
            case rr: {
              var fe = aE(H, O.mode, L);
              return fe.return = O, fe;
            }
            case qe: {
              var Qe = H._payload, Ze = H._init;
              return b(O, Ze(Qe), L);
            }
          }
          if (ot(H) || tt(H)) {
            var qt = Io(H, O.mode, L, null);
            return qt.return = O, qt;
          }
          Qh(O, H);
        }
        return typeof H == "function" && Wh(O), null;
      }
      function w(O, H, L, X) {
        var ve = H !== null ? H.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return ve !== null ? null : p(O, H, "" + L, X);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case kr:
              return L.key === ve ? v(O, H, L, X) : null;
            case rr:
              return L.key === ve ? y(O, H, L, X) : null;
            case qe: {
              var fe = L._payload, Qe = L._init;
              return w(O, H, Qe(fe), X);
            }
          }
          if (ot(L) || tt(L))
            return ve !== null ? null : g(O, H, L, X, null);
          Qh(O, L);
        }
        return typeof L == "function" && Wh(O), null;
      }
      function N(O, H, L, X, ve) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var fe = O.get(L) || null;
          return p(H, fe, "" + X, ve);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case kr: {
              var Qe = O.get(X.key === null ? L : X.key) || null;
              return v(H, Qe, X, ve);
            }
            case rr: {
              var Ze = O.get(X.key === null ? L : X.key) || null;
              return y(H, Ze, X, ve);
            }
            case qe:
              var qt = X._payload, Ut = X._init;
              return N(O, H, L, Ut(qt), ve);
          }
          if (ot(X) || tt(X)) {
            var Gn = O.get(L) || null;
            return g(H, Gn, X, ve, null);
          }
          Qh(H, X);
        }
        return typeof X == "function" && Wh(H), null;
      }
      function A(O, H, L) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case kr:
            case rr:
              fC(O, L);
              var X = O.key;
              if (typeof X != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(X);
                break;
              }
              if (!H.has(X)) {
                H.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case qe:
              var ve = O._payload, fe = O._init;
              A(fe(ve), H, L);
              break;
          }
        }
        return H;
      }
      function F(O, H, L, X) {
        for (var ve = null, fe = 0; fe < L.length; fe++) {
          var Qe = L[fe];
          ve = A(Qe, ve, O);
        }
        for (var Ze = null, qt = null, Ut = H, Gn = 0, At = 0, Pn = null; Ut !== null && At < L.length; At++) {
          Ut.index > At ? (Pn = Ut, Ut = null) : Pn = Ut.sibling;
          var ua = w(O, Ut, L[At], X);
          if (ua === null) {
            Ut === null && (Ut = Pn);
            break;
          }
          e && Ut && ua.alternate === null && t(O, Ut), Gn = s(ua, Gn, At), qt === null ? Ze = ua : qt.sibling = ua, qt = ua, Ut = Pn;
        }
        if (At === L.length) {
          if (a(O, Ut), jr()) {
            var Ir = At;
            Qs(O, Ir);
          }
          return Ze;
        }
        if (Ut === null) {
          for (; At < L.length; At++) {
            var si = b(O, L[At], X);
            si !== null && (Gn = s(si, Gn, At), qt === null ? Ze = si : qt.sibling = si, qt = si);
          }
          if (jr()) {
            var Ra = At;
            Qs(O, Ra);
          }
          return Ze;
        }
        for (var Ta = i(O, Ut); At < L.length; At++) {
          var oa = N(Ta, O, At, L[At], X);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? At : oa.key), Gn = s(oa, Gn, At), qt === null ? Ze = oa : qt.sibling = oa, qt = oa);
        }
        if (e && Ta.forEach(function(Yf) {
          return t(O, Yf);
        }), jr()) {
          var Qu = At;
          Qs(O, Qu);
        }
        return Ze;
      }
      function se(O, H, L, X) {
        var ve = tt(L);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ig || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), L.entries === ve && (ag || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var fe = ve.call(L);
          if (fe)
            for (var Qe = null, Ze = fe.next(); !Ze.done; Ze = fe.next()) {
              var qt = Ze.value;
              Qe = A(qt, Qe, O);
            }
        }
        var Ut = ve.call(L);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Pn = H, ua = 0, Ir = 0, si = null, Ra = Ut.next(); Pn !== null && !Ra.done; Ir++, Ra = Ut.next()) {
          Pn.index > Ir ? (si = Pn, Pn = null) : si = Pn.sibling;
          var Ta = w(O, Pn, Ra.value, X);
          if (Ta === null) {
            Pn === null && (Pn = si);
            break;
          }
          e && Pn && Ta.alternate === null && t(O, Pn), ua = s(Ta, ua, Ir), At === null ? Gn = Ta : At.sibling = Ta, At = Ta, Pn = si;
        }
        if (Ra.done) {
          if (a(O, Pn), jr()) {
            var oa = Ir;
            Qs(O, oa);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ra.done; Ir++, Ra = Ut.next()) {
            var Qu = b(O, Ra.value, X);
            Qu !== null && (ua = s(Qu, ua, Ir), At === null ? Gn = Qu : At.sibling = Qu, At = Qu);
          }
          if (jr()) {
            var Yf = Ir;
            Qs(O, Yf);
          }
          return Gn;
        }
        for (var qp = i(O, Pn); !Ra.done; Ir++, Ra = Ut.next()) {
          var Jl = N(qp, O, Ir, Ra.value, X);
          Jl !== null && (e && Jl.alternate !== null && qp.delete(Jl.key === null ? Ir : Jl.key), ua = s(Jl, ua, Ir), At === null ? Gn = Jl : At.sibling = Jl, At = Jl);
        }
        if (e && qp.forEach(function(Z_) {
          return t(O, Z_);
        }), jr()) {
          var J_ = Ir;
          Qs(O, J_);
        }
        return Gn;
      }
      function Ue(O, H, L, X) {
        if (H !== null && H.tag === Me) {
          a(O, H.sibling);
          var ve = u(H, L);
          return ve.return = O, ve;
        }
        a(O, H);
        var fe = rE(L, O.mode, X);
        return fe.return = O, fe;
      }
      function be(O, H, L, X) {
        for (var ve = L.key, fe = H; fe !== null; ) {
          if (fe.key === ve) {
            var Qe = L.type;
            if (Qe === di) {
              if (fe.tag === Ke) {
                a(O, fe.sibling);
                var Ze = u(fe, L.props.children);
                return Ze.return = O, Ze._debugSource = L._source, Ze._debugOwner = L._owner, Ze;
              }
            } else if (fe.elementType === Qe || // Keep this check inline so it only runs on the false path:
            gR(fe, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Qe == "object" && Qe !== null && Qe.$$typeof === qe && dC(Qe) === fe.type) {
              a(O, fe.sibling);
              var qt = u(fe, L.props);
              return qt.ref = gp(O, fe, L), qt.return = O, qt._debugSource = L._source, qt._debugOwner = L._owner, qt;
            }
            a(O, fe);
            break;
          } else
            t(O, fe);
          fe = fe.sibling;
        }
        if (L.type === di) {
          var Ut = Io(L.props.children, O.mode, X, L.key);
          return Ut.return = O, Ut;
        } else {
          var Gn = nE(L, O.mode, X);
          return Gn.ref = gp(O, H, L), Gn.return = O, Gn;
        }
      }
      function wt(O, H, L, X) {
        for (var ve = L.key, fe = H; fe !== null; ) {
          if (fe.key === ve)
            if (fe.tag === ce && fe.stateNode.containerInfo === L.containerInfo && fe.stateNode.implementation === L.implementation) {
              a(O, fe.sibling);
              var Qe = u(fe, L.children || []);
              return Qe.return = O, Qe;
            } else {
              a(O, fe);
              break;
            }
          else
            t(O, fe);
          fe = fe.sibling;
        }
        var Ze = aE(L, O.mode, X);
        return Ze.return = O, Ze;
      }
      function St(O, H, L, X) {
        var ve = typeof L == "object" && L !== null && L.type === di && L.key === null;
        if (ve && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case kr:
              return f(be(O, H, L, X));
            case rr:
              return f(wt(O, H, L, X));
            case qe:
              var fe = L._payload, Qe = L._init;
              return St(O, H, Qe(fe), X);
          }
          if (ot(L))
            return F(O, H, L, X);
          if (tt(L))
            return se(O, H, L, X);
          Qh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ue(O, H, "" + L, X)) : (typeof L == "function" && Wh(O), a(O, H));
      }
      return St;
    }
    var _f = pC(!0), vC = pC(!1);
    function k1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function D1(e, t) {
      for (var a = e.child; a !== null; )
        m_(a, t), a = a.sibling;
    }
    var sg = Oo(null), cg;
    cg = {};
    var Gh = null, kf = null, fg = null, Kh = !1;
    function qh() {
      Gh = null, kf = null, fg = null, Kh = !1;
    }
    function hC() {
      Kh = !0;
    }
    function mC() {
      Kh = !1;
    }
    function yC(e, t, a) {
      ia(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      aa(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function O1(e, t, a) {
      L1(e, t, a);
    }
    function L1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ne) {
                var p = Ts(a), v = Pu(Xt, p);
                v.tag = Jh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = nt(w.lanes, a)), pg(i.return, a, e), s.lanes = nt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === yt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = nt(N.lanes, a);
          var A = N.alternate;
          A !== null && (A.lanes = nt(A.lanes, a)), pg(N, a, e), u = i.sibling;
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
      Gh = e, kf = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function tr(e) {
      Kh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Gh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Gh.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function vg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function M1() {
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
    function gC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Xh(e, i);
    }
    function N1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function z1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Xh(e, i);
    }
    function Ha(e, t) {
      return Xh(e, t);
    }
    var U1 = Xh;
    function Xh(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (mn | Kr)) !== De && vR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = nt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (u.flags & (mn | Kr)) !== De && vR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var SC = 0, EC = 1, Jh = 2, hg = 3, Zh = !1, mg, em;
    mg = !1, em = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CC(e, t) {
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
        tag: SC,
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
      if (em === u && !mg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), Nb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, U1(e, a);
      } else
        return z1(e, u, t, a);
    }
    function tm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function gg(e, t) {
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
    function A1(e, t, a, i, u, s) {
      switch (a.tag) {
        case EC: {
          var f = a.payload;
          if (typeof f == "function") {
            hC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              mC();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~Xn | _e;
        case SC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            hC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              mC();
            }
          } else
            y = v;
          return y == null ? i : at({}, i, y);
        }
        case Jh:
          return Zh = !0, i;
      }
      return i;
    }
    function nm(e, t, a, i) {
      var u = e.updateQueue;
      Zh = !1, em = u.shared;
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
        var N = u.baseState, A = Q, F = null, se = null, Ue = null, be = s;
        do {
          var wt = be.lane, St = be.eventTime;
          if (ku(i, wt)) {
            if (Ue !== null) {
              var H = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Ue = Ue.next = H;
            }
            N = A1(e, u, be, N, t, a);
            var L = be.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Dt) {
              e.flags |= an;
              var X = u.effects;
              X === null ? u.effects = [be] : X.push(be);
            }
          } else {
            var O = {
              eventTime: St,
              lane: wt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ue === null ? (se = Ue = O, F = N) : Ue = Ue.next = O, A = nt(A, wt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, fe = ve.next;
            ve.next = null, be = fe, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Ue === null && (F = N), u.baseState = F, u.firstBaseUpdate = se, u.lastBaseUpdate = Ue;
        var Qe = u.shared.interleaved;
        if (Qe !== null) {
          var Ze = Qe;
          do
            A = nt(A, Ze.lane), Ze = Ze.next;
          while (Ze !== Qe);
        } else s === null && (u.shared.lanes = Q);
        Yp(A), e.lanes = A, e.memoizedState = N;
      }
      em = null;
    }
    function j1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function RC() {
      Zh = !1;
    }
    function rm() {
      return Zh;
    }
    function TC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, j1(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), am = Oo(Sp);
    function im(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wC() {
      var e = im(am.current);
      return e;
    }
    function Sg(e, t) {
      ia(am, t, e), ia(Ep, e, e), ia(Uo, Sp, e);
      var a = ew(t);
      aa(Uo, e), ia(Uo, a, e);
    }
    function Of(e) {
      aa(Uo, e), aa(Ep, e), aa(am, e);
    }
    function Eg() {
      var e = im(Uo.current);
      return e;
    }
    function xC(e) {
      im(am.current);
      var t = im(Uo.current), a = tw(t, e.type);
      t !== a && (ia(Ep, e, e), ia(Uo, a, e));
    }
    function Cg(e) {
      Ep.current === e && (aa(Uo, e), aa(Ep, e));
    }
    var F1 = 0, bC = 1, _C = 1, Cp = 2, il = Oo(F1);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & bC;
    }
    function Tg(e, t) {
      return e & bC | t;
    }
    function H1(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ia(il, t, e);
    }
    function Mf(e) {
      aa(il, e);
    }
    function P1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function lm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ke) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || IE(i) || Vy(i))
              return t;
          }
        } else if (t.tag === un && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _e) !== De;
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
    var Pa = (
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
    ), Fr = (
      /*   */
      8
    ), wg = [];
    function xg() {
      for (var e = 0; e < wg.length; e++) {
        var t = wg[e];
        t._workInProgressVersionPrimary = null;
      }
      wg.length = 0;
    }
    function V1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = k.ReactCurrentDispatcher, Rp = k.ReactCurrentBatchConfig, bg, Nf;
    bg = /* @__PURE__ */ new Set();
    var Js = Q, Kt = null, dr = null, pr = null, um = !1, Tp = !1, wp = 0, B1 = 0, $1 = 25, V = null, Ui = null, jo = -1, _g = !1;
    function Vt() {
      {
        var e = V;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ae() {
      {
        var e = V;
        Ui !== null && (jo++, Ui[jo] !== e && I1(e));
      }
    }
    function zf(e) {
      e != null && !ot(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function I1(e) {
      {
        var t = Ge(Kt);
        if (!bg.has(t) && (bg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = Ui[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!K(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, Kt = t, Ui = e !== null ? e._debugHookTypes : null, jo = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? pe.current = KC : Ui !== null ? pe.current = GC : pe.current = WC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, wp = 0, p >= $1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, pe.current = qC, f = a(i, u);
        } while (Tp);
      }
      pe.current = Em, t._debugHookTypes = Ui;
      var v = dr !== null && dr.next !== null;
      if (Js = Q, Kt = null, dr = null, pr = null, V = null, Ui = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pt) !== Oe && S("Internal React error: Expected static flag was missing. Please notify the React team."), um = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function kC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== Oe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function DC() {
      if (pe.current = Em, um) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        um = !1;
      }
      Js = Q, Kt = null, dr = null, pr = null, Ui = null, jo = -1, V = null, BC = !1, Tp = !1, wp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Kt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ai() {
      var e;
      if (dr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Kt.memoizedState : a = pr.next, a !== null)
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
        pr === null ? Kt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function OC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = G1.bind(null, Kt, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = Ai(), u = i.queue;
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
        var g = f.next, b = s.baseState, w = null, N = null, A = null, F = g;
        do {
          var se = F.lane;
          if (ku(Js, se)) {
            if (A !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = be;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var wt = F.action;
              b = e(b, wt);
            }
          } else {
            var Ue = {
              lane: se,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (N = A = Ue, w = b) : A = A.next = Ue, Kt.lanes = nt(Kt.lanes, se), Yp(se);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? w = b : A.next = N, K(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = w, i.baseQueue = A, u.lastRenderedState = b;
      }
      var St = u.interleaved;
      if (St !== null) {
        var O = St;
        do {
          var H = O.lane;
          Kt.lanes = nt(Kt.lanes, H), Yp(H), O = O.next;
        } while (O !== St);
      } else f === null && (u.lanes = Q);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Mg(e, t, a) {
      var i = Ai(), u = i.queue;
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
        K(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function yk(e, t, a) {
    }
    function gk(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = Kt, u = Ql(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          K(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = Hm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || LC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, dm(NC.bind(null, i, y, e), [e]), i.flags |= Gr, xp(cr | Fr, MC.bind(null, i, y, s, t), void 0, null), s;
    }
    function om(e, t, a) {
      var i = Kt, u = Ai(), s = t();
      if (!Nf) {
        var f = t();
        K(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !K(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(NC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Gr, xp(cr | Fr, MC.bind(null, i, y, s, t), void 0, null);
        var g = Hm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || LC(i, t, s);
      }
      return s;
    }
    function LC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Kt.updateQueue;
      if (u === null)
        u = OC(), Kt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function MC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zC(t) && UC(e);
    }
    function NC(e, t, a) {
      var i = function() {
        zC(t) && UC(e);
      };
      return a(i);
    }
    function zC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !K(a, i);
      } catch {
        return !0;
      }
    }
    function UC(e) {
      var t = Ha(e, Be);
      t !== null && yr(t, e, Be, Xt);
    }
    function sm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = K1.bind(null, Kt, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(Dg);
    }
    function Ug(e) {
      return Mg(Dg);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Kt.updateQueue;
      if (s === null)
        s = OC(), Kt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ag(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function cm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      Kt.flags |= e, u.memoizedState = xp(cr | t, a, void 0, s);
    }
    function fm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      Kt.flags |= e, u.memoizedState = xp(cr | t, a, f, s);
    }
    function dm(e, t) {
      return (Kt.mode & Nt) !== Oe ? bp(Ti | Gr | xc, Fr, e, t) : bp(Gr | xc, Fr, e, t);
    }
    function _p(e, t) {
      return fm(Gr, Fr, e, t);
    }
    function jg(e, t) {
      return bp(Ct, Yl, e, t);
    }
    function pm(e, t) {
      return fm(Ct, Yl, e, t);
    }
    function Fg(e, t) {
      var a = Ct;
      return a |= Wi, (Kt.mode & Nt) !== Oe && (a |= _l), bp(a, fr, e, t);
    }
    function vm(e, t) {
      return fm(Ct, fr, e, t);
    }
    function AC(e, t) {
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
    function Hg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Wi, (Kt.mode & Nt) !== Oe && (u |= _l), bp(u, fr, AC.bind(null, t, e), i);
    }
    function hm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return fm(Ct, fr, AC.bind(null, t, e), i);
    }
    function Y1(e, t) {
    }
    var mm = Y1;
    function Pg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function ym(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function gm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function jC(e) {
      var t = Ai(), a = dr, i = a.memoizedState;
      return HC(t, i, e);
    }
    function FC(e) {
      var t = Ai();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return HC(t, a, e);
    }
    function HC(e, t, a) {
      var i = !Dd(Js);
      if (i) {
        if (!K(a, t)) {
          var u = Md();
          Kt.lanes = nt(Kt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Q1(e, t, a) {
      var i = Aa();
      jn(Kv(i, _i)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function $g() {
      var e = sm(!1), t = e[0], a = e[1], i = Q1.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function PC() {
      var e = zg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function VC() {
      var e = Ug(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var BC = !1;
    function W1() {
      return BC;
    }
    function Ig() {
      var e = Ql(), t = Hm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = c1();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = B1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Sm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function G1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        IC(t, u);
      else {
        var s = gC(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          yr(s, e, i, f), YC(s, t, i);
        }
      }
      QC(e, i);
    }
    function K1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        IC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = pe.current, pe.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, K(y, v)) {
                N1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              pe.current = p;
            }
          }
        }
        var g = gC(e, t, u, i);
        if (g !== null) {
          var b = Ca();
          yr(g, e, i, b), YC(g, t, i);
        }
      }
      QC(e, i);
    }
    function $C(e) {
      var t = e.alternate;
      return e === Kt || t !== null && t === Kt;
    }
    function IC(e, t) {
      Tp = um = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = nt(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function QC(e, t, a) {
      vs(e, t);
    }
    var Em = {
      readContext: tr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: te
    }, WC = null, GC = null, KC = null, qC = null, Wl = null, ll = null, Cm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), zf(t), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), zf(t), dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), zf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), zf(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), zf(t), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), zf(t);
          var a = pe.current;
          pe.current = Wl;
          try {
            return Vg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), Ag(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return sm(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Ig();
        },
        unstable_isNewReconciler: te
      }, GC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Vg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), Ag(e);
        },
        useState: function(e) {
          V = "useState", ae();
          var t = pe.current;
          pe.current = Wl;
          try {
            return sm(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", ae(), Ig();
        },
        unstable_isNewReconciler: te
      }, KC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), ym(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), vm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = pe.current;
          pe.current = ll;
          try {
            return gm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = pe.current;
          pe.current = ll;
          try {
            return Lg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), cm();
        },
        useState: function(e) {
          V = "useState", ae();
          var t = pe.current;
          pe.current = ll;
          try {
            return zg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), mm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), jC(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), PC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), om(e, t);
        },
        useId: function() {
          return V = "useId", ae(), Sm();
        },
        unstable_isNewReconciler: te
      }, qC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), ym(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), vm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = pe.current;
          pe.current = Cm;
          try {
            return gm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = pe.current;
          pe.current = Cm;
          try {
            return Mg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), cm();
        },
        useState: function(e) {
          V = "useState", ae();
          var t = pe.current;
          pe.current = Cm;
          try {
            return Ug(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), mm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), FC(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), VC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), om(e, t);
        },
        useId: function() {
          return V = "useId", ae(), Sm();
        },
        unstable_isNewReconciler: te
      }, Wl = {
        readContext: function(e) {
          return Yg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Xe(), Vt(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Xe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Xe(), Vt(), dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Xe(), Vt(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Xe(), Vt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Xe(), Vt(), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Xe(), Vt();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Vg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Xe(), Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Xe(), Vt(), Ag(e);
        },
        useState: function(e) {
          V = "useState", Xe(), Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return sm(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Xe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Xe(), Vt(), Bg(e);
        },
        useTransition: function() {
          return V = "useTransition", Xe(), Vt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Xe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Xe(), Vt(), Ng(e, t, a);
        },
        useId: function() {
          return V = "useId", Xe(), Vt(), Ig();
        },
        unstable_isNewReconciler: te
      }, ll = {
        readContext: function(e) {
          return Yg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Xe(), ae(), ym(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Xe(), ae(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Xe(), ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Xe(), ae(), hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Xe(), ae(), pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Xe(), ae(), vm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Xe(), ae();
          var a = pe.current;
          pe.current = ll;
          try {
            return gm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Xe(), ae();
          var i = pe.current;
          pe.current = ll;
          try {
            return Lg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Xe(), ae(), cm();
        },
        useState: function(e) {
          V = "useState", Xe(), ae();
          var t = pe.current;
          pe.current = ll;
          try {
            return zg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Xe(), ae(), mm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Xe(), ae(), jC(e);
        },
        useTransition: function() {
          return V = "useTransition", Xe(), ae(), PC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Xe(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Xe(), ae(), om(e, t);
        },
        useId: function() {
          return V = "useId", Xe(), ae(), Sm();
        },
        unstable_isNewReconciler: te
      }, Cm = {
        readContext: function(e) {
          return Yg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Xe(), ae(), ym(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Xe(), ae(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Xe(), ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Xe(), ae(), hm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Xe(), ae(), pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Xe(), ae(), vm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Xe(), ae();
          var a = pe.current;
          pe.current = ll;
          try {
            return gm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Xe(), ae();
          var i = pe.current;
          pe.current = ll;
          try {
            return Mg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Xe(), ae(), cm();
        },
        useState: function(e) {
          V = "useState", Xe(), ae();
          var t = pe.current;
          pe.current = ll;
          try {
            return Ug(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Xe(), ae(), mm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Xe(), ae(), FC(e);
        },
        useTransition: function() {
          return V = "useTransition", Xe(), ae(), VC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Xe(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Xe(), ae(), om(e, t);
        },
        useId: function() {
          return V = "useId", Xe(), ae(), Sm();
        },
        unstable_isNewReconciler: te
      };
    }
    var Fo = B.unstable_now, XC = 0, Rm = -1, kp = -1, Tm = -1, Qg = !1, wm = !1;
    function JC() {
      return Qg;
    }
    function q1() {
      wm = !0;
    }
    function X1() {
      Qg = !1, wm = !1;
    }
    function J1() {
      Qg = wm, wm = !1;
    }
    function ZC() {
      return XC;
    }
    function e0() {
      XC = Fo();
    }
    function Wg(e) {
      kp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function t0(e) {
      kp = -1;
    }
    function xm(e, t) {
      if (kp >= 0) {
        var a = Fo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Gl(e) {
      if (Rm >= 0) {
        var t = Fo() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case gt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (Tm >= 0) {
        var t = Fo() - Tm;
        Tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case gt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      Rm = Fo();
    }
    function Kg() {
      Tm = Fo();
    }
    function qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = at({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Xg = {}, Jg, Zg, eS, tS, nS, n0, bm, rS, aS, iS, Dp;
    {
      Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var r0 = /* @__PURE__ */ new Set();
      bm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          r0.has(a) || (r0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, n0 = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          nS.has(a) || (nS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function lS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        n0(t, s);
      }
      var f = s == null ? u : at({}, u, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Nv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (bm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), tm(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.tag = EC, f.payload = t, a != null && (bm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), tm(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ca(), u = Bo(a), s = Pu(i, u);
        s.tag = Jh, t != null && (bm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), tm(f, a, u)), Mc(a, u);
      }
    };
    function a0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function Z1(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === Oe && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === Oe && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ot(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function i0(e, t) {
      t.updater = uS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Xg;
    }
    function l0(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !iS.has(t)) {
          iS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      i0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = xt(t) || "Component";
          Zg.has(w) || (Zg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), N !== null || A !== null || F !== null) {
            var se = xt(t) || "Component", Ue = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(se) || (tS.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Ue, N !== null ? `
  ` + N : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && KE(e, u, s), g;
    }
    function ex(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function u0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          Jg.has(s) || (Jg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      Z1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          rS.has(p) || (rS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ex(e, u), nm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= Wi, (e.mode & Nt) !== Oe && (y |= _l), e.flags |= y;
      }
    }
    function tx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && u0(e, u, a, v), RC();
      var w = e.memoizedState, N = u.state = w;
      if (nm(e, a, u, i), N = e.memoizedState, s === a && w === N && !jh() && !rm()) {
        if (typeof u.componentDidMount == "function") {
          var A = Ct;
          A |= Wi, (e.mode & Nt) !== Oe && (A |= _l), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (lS(e, t, g, a), N = e.memoizedState);
      var F = rm() || a0(e, t, s, a, w, N, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Ct;
          se |= Wi, (e.mode & Nt) !== Oe && (se |= _l), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ue = Ct;
          Ue |= Wi, (e.mode & Nt) !== Oe && (Ue |= _l), e.flags |= Ue;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, F;
    }
    function nx(e, t, a, i, u) {
      var s = t.stateNode;
      CC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var w = Rf(t, a, !0);
        b = Tf(t, w);
      }
      var N = a.getDerivedStateFromProps, A = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && u0(t, s, i, b), RC();
      var F = t.memoizedState, se = s.state = F;
      if (nm(t, i, s, u), se = t.memoizedState, f === v && F === se && !jh() && !rm() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Yn), !1;
      typeof N == "function" && (lS(t, a, N, i), se = t.memoizedState);
      var Ue = rm() || a0(t, a, p, i, F, se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Ue ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Yn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Yn), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = b, Ue;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function sS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rx(e, t) {
      return !0;
    }
    function cS(e, t) {
      try {
        var a = rx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ne)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ge(e) || "Anonymous";
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
    var ax = typeof WeakMap == "function" ? WeakMap : Map;
    function o0(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        qb(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = hg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SR(e), cS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SR(e), cS(e, t), typeof u != "function" && Gb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, Be) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function s0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ax(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Xb.bind(null, e, t, a);
        Jr && Qp(e, a), t.then(s, s);
      }
    }
    function ix(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function lx(e, t) {
      var a = e.tag;
      if ((e.mode & pt) === Oe && (a === $ || a === Je || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function c0(e) {
      var t = e;
      do {
        if (t.tag === ke && P1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function f0(e, t, a, i, u) {
      if ((e.mode & pt) === Oe) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= _e, a.flags |= wc, a.flags &= -52805, a.tag === ne) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Xt, Be);
              f.tag = Jh, zo(a, f, Be);
            }
          }
          a.lanes = nt(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function ux(e, t, a, i, u) {
      if (a.flags |= os, Jr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        lx(a), jr() && a.mode & pt && nC();
        var f = c0(t);
        if (f !== null) {
          f.flags &= ~Rr, f0(f, t, a, e, u), f.mode & pt && s0(e, s, u), ix(f, e, s);
          return;
        } else {
          if (!Vv(u)) {
            s0(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & pt) {
        nC();
        var v = c0(t);
        if (v !== null) {
          (v.flags & Xn) === De && (v.flags |= Rr), f0(v, t, a, e, u), rg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Pb(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Xn;
            var b = Ts(u);
            y.lanes = nt(y.lanes, b);
            var w = o0(y, g, b);
            gg(y, w);
            return;
          }
          case ne:
            var N = i, A = y.type, F = y.stateNode;
            if ((y.flags & _e) === De && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !cR(F))) {
              y.flags |= Xn;
              var se = Ts(u);
              y.lanes = nt(y.lanes, se);
              var Ue = fS(y, N, se);
              gg(y, Ue);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ox() {
      return null;
    }
    var Op = k.ReactCurrentOwner, ol = !1, dS, Lp, pS, vS, hS, ec, mS, _m, Mp;
    dS = {}, Lp = {}, pS = {}, vS = {}, hS = {}, ec = !1, mS = {}, _m = {}, Mp = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = vC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function sx(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function d0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), ha(t);
      {
        if (Op.current = t, In(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ma(), e !== null && !ol ? (kC(e, t, u), Vu(e, t, u)) : (jr() && y && Xy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (v_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = Ie, t.type = f, SS(t, s), v0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = tE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && nl(
          b,
          i,
          // Resolved props
          "prop",
          xt(g)
        );
      }
      var w = e.child, N = xS(e, u);
      if (!N) {
        var A = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ge, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var se = ic(w, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function v0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === qe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, xS(e, u))
            (e.flags & wc) !== De && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function h0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ie)
        if ((t.mode & pt) === Oe) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Pm(t, a);
        } else if (ea(a, Zr)) {
          var b = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Pm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = nt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Pm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = nt(s.baseLanes, a), t.memoizedState = null) : N = a, Pm(t, N);
      }
      return Sa(e, t, u, a), t.child;
    }
    function cx(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function fx(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function dx(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function m0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), ha(t);
      {
        if (Op.current = t, In(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ma(), e !== null && !ol ? (kC(e, t, u), Vu(e, t, u)) : (jr() && y && Xy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function y0(e, t, a, i, u) {
      {
        switch (D_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= _e, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = nt(t.lanes, g);
            var b = fS(t, Zs(y, t), g);
            gg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && nl(
            w,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var N;
      Il(a) ? (N = !0, Hh(t)) : N = !1, Df(t, u);
      var A = t.stateNode, F;
      A === null ? (Dm(e, t), l0(t, a, i), oS(t, a, i, u), F = !0) : e === null ? F = tx(t, a, i, u) : F = nx(e, t, a, i, u);
      var se = gS(e, t, a, F, N, u);
      {
        var Ue = t.stateNode;
        F && Ue.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), ec = !0);
      }
      return se;
    }
    function gS(e, t, a, i, u, s) {
      m0(e, t);
      var f = (t.flags & _e) !== De;
      if (!i && !f)
        return u && JE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, t0();
      else {
        ha(t);
        {
          if (In(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          In(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? sx(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && JE(t, a, !0), t.child;
    }
    function g0(e) {
      var t = e.stateNode;
      t.pendingContext ? qE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qE(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function px(e, t, a) {
      if (g0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CC(e, t), nm(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return S0(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return S0(e, t, p, a, b);
        } else {
          m1(t);
          var w = vC(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & ~mn | Kr, N = N.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function S0(e, t, a, i, u) {
      return bf(), rg(u), t.flags |= Rr, Sa(e, t, a, i), t.child;
    }
    function vx(e, t, a) {
      xC(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Oa), m0(e, t), Sa(e, t, f, a), t.child;
    }
    function hx(e, t) {
      return e === null && ng(t), null;
    }
    function mx(e, t, a, i) {
      Dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = h_(v), g = ul(v, u), b;
      switch (y) {
        case $:
          return SS(t, v), t.type = v = If(v), b = yS(null, t, v, g, i), b;
        case ne:
          return t.type = v = KS(v), b = y0(null, t, v, g, i), b;
        case Je:
          return t.type = v = qS(v), b = d0(null, t, v, g, i), b;
        case vt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && nl(
              w,
              g,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return b = p0(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === qe && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function yx(e, t, a, i, u) {
      Dm(e, t), t.tag = ne;
      var s;
      return Il(a) ? (s = !0, Hh(t)) : s = !1, Df(t, u), l0(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
    }
    function gx(e, t, a, i) {
      Dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          dS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), dS[y] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), In(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), In(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = xt(a) || "Unknown";
          Lp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Lp[b] = !0);
        }
        t.tag = ne, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Il(a) ? (w = !0, Hh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), i0(t, p), oS(t, a, u, i), gS(null, t, a, !0, w, i);
      } else {
        if (t.tag = $, t.mode & Gt) {
          yn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return jr() && v && Xy(t), Sa(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          pS[v] || (S("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: ox(),
        transitions: null
      };
    }
    function Sx(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ex(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Rg(e, Cp);
    }
    function Cx(e, t) {
      return ws(e.childLanes, t);
    }
    function E0(e, t, a) {
      var i = t.pendingProps;
      O_(t) && (t.flags |= _e);
      var u = il.current, s = !1, f = (t.flags & _e) !== De;
      if (f || Ex(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = H1(u, _C)), u = Lf(u), Ao(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return bx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Rx(t, y, g, a), w = t.child;
          return w.memoizedState = CS(a), t.memoizedState = ES, b;
        } else
          return RS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var A = N.dehydrated;
          if (A !== null)
            return _x(e, t, f, i, A, N, a);
        }
        if (s) {
          var F = i.fallback, se = i.children, Ue = wx(e, t, se, F, a), be = t.child, wt = e.child.memoizedState;
          return be.memoizedState = wt === null ? CS(a) : Sx(wt, a), be.childLanes = Cx(e, a), t.memoizedState = ES, Ue;
        } else {
          var St = i.children, O = Tx(e, t, St, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Rx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & pt) === Oe && s !== null ? (p = s, p.childLanes = Q, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = TS(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return CR(e, t, Q, null);
    }
    function C0(e, t) {
      return ic(e, t);
    }
    function Tx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = C0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pt) === Oe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function wx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & pt) === Oe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Q, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = C0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Io(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function km(e, t, a, i) {
      i !== null && rg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function xx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Io(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & pt) !== Oe && _f(t, e.child, null, u), v;
    }
    function bx(e, t, a) {
      return (e.mode & pt) === Oe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : Vy(t) ? e.lanes = Tr : e.lanes = Zr, null;
    }
    function _x(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var O = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return km(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var H = i.children, L = i.fallback, X = xx(e, t, H, L, f), ve = t.child;
          return ve.memoizedState = CS(f), t.memoizedState = ES, X;
        }
      else {
        if (v1(), (t.mode & pt) === Oe)
          return km(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = Lw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = sS(b, p, y);
          return km(e, t, f, w);
        }
        var N = ea(f, e.childLanes);
        if (ol || N) {
          var A = Hm();
          if (A !== null) {
            var F = Ud(A, f);
            if (F !== Dt && F !== s.retryLane) {
              s.retryLane = F;
              var se = Xt;
              Ha(e, F), yr(A, e, F, se);
            }
          }
          IS();
          var Ue = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return km(e, t, f, Ue);
        } else if (IE(u)) {
          t.flags |= _e, t.child = e.child;
          var be = Jb.bind(null, e);
          return Mw(u, be), null;
        } else {
          y1(t, u, s.treeContext);
          var wt = i.children, St = RS(t, wt);
          return St.flags |= Kr, St;
        }
      }
    }
    function R0(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), pg(e.return, t, a);
    }
    function kx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ke) {
          var u = i.memoizedState;
          u !== null && R0(i, a, e);
        } else if (i.tag === un)
          R0(i, a, e);
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
    function Dx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && lm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ox(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mS[e])
        if (mS[e] = !0, typeof e == "string")
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
    function Lx(e, t) {
      e !== void 0 && !_m[e] && (e !== "collapsed" && e !== "hidden" ? (_m[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_m[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function T0(e, t) {
      {
        var a = ot(e), i = !a && typeof tt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Mx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ot(e)) {
          for (var a = 0; a < e.length; a++)
            if (!T0(e[a], a))
              return;
        } else {
          var i = tt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!T0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function wS(e, t, a, i, u) {
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
    function w0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ox(u), Lx(s, u), Mx(f, u), Sa(e, t, f, a);
      var p = il.current, v = Rg(p, Cp);
      if (v)
        p = Tg(p, Cp), t.flags |= _e;
      else {
        var y = e !== null && (e.flags & _e) !== De;
        y && kx(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & pt) === Oe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Dx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), wS(
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
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var A = N.alternate;
              if (A !== null && lm(A) === null) {
                t.child = N;
                break;
              }
              var F = N.sibling;
              N.sibling = w, w = N, N = F;
            }
            wS(
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
            wS(
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
    function Nx(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var x0 = !1;
    function zx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || x0 || (x0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (yC(t, u, p), f !== null) {
        var y = f.value;
        if (K(y, p)) {
          if (f.children === s.children && !jh())
            return Vu(e, t, a);
        } else
          O1(t, u, a);
      }
      var g = s.children;
      return Sa(e, t, g, a), t.child;
    }
    var b0 = !1;
    function Ux(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (b0 || (b0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = tr(i);
      ha(t);
      var p;
      return Op.current = t, In(!0), p = s(f), In(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function Np() {
      ol = !0;
    }
    function Dm(e, t) {
      (t.mode & pt) === Oe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), t0(), Yp(t.lanes), ea(a, t.childLanes) ? (k1(e, t), t.child) : null;
    }
    function Ax(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= mn, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function jx(e, t, a) {
      switch (t.tag) {
        case J:
          g0(t), t.stateNode, bf();
          break;
        case ee:
          xC(t);
          break;
        case ne: {
          var i = t.type;
          Il(i) && Hh(t);
          break;
        }
        case ce:
          Sg(t, t.stateNode.containerInfo);
          break;
        case yt: {
          var u = t.memoizedProps.value, s = t.type._context;
          yC(t, s, u);
          break;
        }
        case gt:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ke: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(il.current)), t.flags |= _e, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return E0(e, t, a);
            Ao(t, Lf(il.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(il.current));
          break;
        }
        case un: {
          var w = (e.flags & _e) !== De, N = ea(a, t.childLanes);
          if (w) {
            if (N)
              return w0(e, t, a);
            t.flags |= _e;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, il.current), N)
            break;
          return null;
        }
        case Ne:
        case jt:
          return t.lanes = Q, h0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function _0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ax(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || jh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === De)
            return ol = !1, jx(e, t, a);
          (e.flags & wc) !== De ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && o1(t)) {
        var f = t.index, p = s1();
        tC(t, p, f);
      }
      switch (t.lanes = Q, t.tag) {
        case Te:
          return gx(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return mx(e, t, v, a);
        }
        case $: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ul(y, g);
          return yS(e, t, y, b, a);
        }
        case ne: {
          var w = t.type, N = t.pendingProps, A = t.elementType === w ? N : ul(w, N);
          return y0(e, t, w, A, a);
        }
        case J:
          return px(e, t, a);
        case ee:
          return vx(e, t, a);
        case Me:
          return hx(e, t);
        case ke:
          return E0(e, t, a);
        case ce:
          return Nx(e, t, a);
        case Je: {
          var F = t.type, se = t.pendingProps, Ue = t.elementType === F ? se : ul(F, se);
          return d0(e, t, F, Ue, a);
        }
        case Ke:
          return cx(e, t, a);
        case st:
          return fx(e, t, a);
        case gt:
          return dx(e, t, a);
        case yt:
          return zx(e, t, a);
        case Jt:
          return Ux(e, t, a);
        case vt: {
          var be = t.type, wt = t.pendingProps, St = ul(be, wt);
          if (t.type !== t.elementType) {
            var O = be.propTypes;
            O && nl(
              O,
              St,
              // Resolved for outer only
              "prop",
              xt(be)
            );
          }
          return St = ul(be.type, St), p0(e, t, be, St, a);
        }
        case Ie:
          return v0(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, L = t.pendingProps, X = t.elementType === H ? L : ul(H, L);
          return yx(e, t, H, X, a);
        }
        case un:
          return w0(e, t, a);
        case _t:
          break;
        case Ne:
          return h0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Ct;
    }
    function k0(e) {
      e.flags |= En, e.flags |= ho;
    }
    var D0, bS, O0, L0;
    D0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ee || u.tag === Me)
          iw(e, u.stateNode);
        else if (u.tag !== ce) {
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
    }, bS = function(e, t) {
    }, O0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = uw(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, L0 = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function zp(e, t) {
      if (!jr())
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
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = De;
      if (t) {
        if ((e.mode & Mt) !== Oe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== Oe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = nt(a, nt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = nt(a, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Fx(e, t, a) {
      if (R1() && (t.mode & pt) !== Oe && (t.flags & _e) === De)
        return oC(t), bf(), t.flags |= Rr | os | Xn, !1;
      var i = Ih(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (E1(t), Hr(t), (t.mode & Mt) !== Oe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & _e) === De && (t.memoizedState = null), t.flags |= Ct, Hr(t), (t.mode & Mt) !== Oe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sC(), !0;
    }
    function M0(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Te:
        case ln:
        case Ie:
        case $:
        case Je:
        case Ke:
        case st:
        case gt:
        case Jt:
        case vt:
          return Hr(t), null;
        case ne: {
          var u = t.type;
          return Il(u) && Fh(t), Hr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Of(t), Gy(t), xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ih(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== De) && (t.flags |= Yn, sC());
            }
          }
          return bS(e, t), Hr(t), null;
        }
        case ee: {
          Cg(t);
          var v = wC(), y = t.type;
          if (e !== null && t.stateNode != null)
            O0(e, t, y, i, v), e.ref !== t.ref && k0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = Eg(), b = Ih(t);
            if (b)
              g1(t, v, g) && jf(t);
            else {
              var w = aw(y, i, v, g, t);
              D0(w, t, !1, !1), t.stateNode = w, lw(w, y, i, v) && jf(t);
            }
            t.ref !== null && k0(t);
          }
          return Hr(t), null;
        }
        case Me: {
          var N = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            L0(e, t, A, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wC(), se = Eg(), Ue = Ih(t);
            Ue ? S1(t) && jf(t) : t.stateNode = ow(N, F, se, t);
          }
          return Hr(t), null;
        }
        case ke: {
          Mf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var wt = Fx(e, t, be);
            if (!wt)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & _e) !== De)
            return t.lanes = a, (t.mode & Mt) !== Oe && qg(t), t;
          var St = be !== null, O = e !== null && e.memoizedState !== null;
          if (St !== O && St) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & pt) !== Oe) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              L || Rg(il.current, _C) ? Hb() : IS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= Ct), Hr(t), (t.mode & Mt) !== Oe && St) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case ce:
          return Of(t), bS(e, t), e === null && t1(t.stateNode.containerInfo), Hr(t), null;
        case yt:
          var fe = t.type._context;
          return dg(fe, t), Hr(t), null;
        case Ht: {
          var Qe = t.type;
          return Il(Qe) && Fh(t), Hr(t), null;
        }
        case un: {
          Mf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Hr(t), null;
          var qt = (t.flags & _e) !== De, Ut = Ze.rendering;
          if (Ut === null)
            if (qt)
              zp(Ze, !1);
            else {
              var Gn = Vb() && (e === null || (e.flags & _e) === De);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Pn = lm(At);
                  if (Pn !== null) {
                    qt = !0, t.flags |= _e, zp(Ze, !1);
                    var ua = Pn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ct), t.subtreeFlags = De, D1(t, a), Ao(t, Tg(il.current, Cp)), t.child;
                  }
                  At = At.sibling;
                }
              Ze.tail !== null && Qn() > Z0() && (t.flags |= _e, qt = !0, zp(Ze, !1), t.lanes = bd);
            }
          else {
            if (!qt) {
              var Ir = lm(Ut);
              if (Ir !== null) {
                t.flags |= _e, qt = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ct), zp(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Ze.renderingStartTime > Z0() && a !== Zr && (t.flags |= _e, qt = !0, zp(Ze, !1), t.lanes = bd);
            }
            if (Ze.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ra = Ze.last;
              Ra !== null ? Ra.sibling = Ut : t.child = Ut, Ze.last = Ut;
            }
          }
          if (Ze.tail !== null) {
            var Ta = Ze.tail;
            Ze.rendering = Ta, Ze.tail = Ta.sibling, Ze.renderingStartTime = Qn(), Ta.sibling = null;
            var oa = il.current;
            return qt ? oa = Tg(oa, Cp) : oa = Lf(oa), Ao(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case _t:
          break;
        case Ne:
        case jt: {
          $S(t);
          var Qu = t.memoizedState, Yf = Qu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Jl = qp !== null;
            Jl !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ie && (t.flags |= Nn);
          }
          return !Yf || (t.mode & pt) === Oe ? Hr(t) : ea(Xl, Zr) && (Hr(t), t.subtreeFlags & (mn | Ct) && (t.flags |= Nn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hx(e, t, a) {
      switch (Jy(t), t.tag) {
        case ne: {
          var i = t.type;
          Il(i) && Fh(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | _e, (t.mode & Mt) !== Oe && qg(t), t) : null;
        }
        case J: {
          t.stateNode, Of(t), Gy(t), xg();
          var s = t.flags;
          return (s & Xn) !== De && (s & _e) === De ? (t.flags = s & ~Xn | _e, t) : null;
        }
        case ee:
          return Cg(t), null;
        case ke: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | _e, (t.mode & Mt) !== Oe && qg(t), t) : null;
        }
        case un:
          return Mf(t), null;
        case ce:
          return Of(t), null;
        case yt:
          var v = t.type._context;
          return dg(v, t), null;
        case Ne:
        case jt:
          return $S(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function N0(e, t, a) {
      switch (Jy(t), t.tag) {
        case ne: {
          var i = t.type.childContextTypes;
          i != null && Fh(t);
          break;
        }
        case J: {
          t.stateNode, Of(t), Gy(t), xg();
          break;
        }
        case ee: {
          Cg(t);
          break;
        }
        case ce:
          Of(t);
          break;
        case ke:
          Mf(t);
          break;
        case un:
          Mf(t);
          break;
        case yt:
          var u = t.type._context;
          dg(u, t);
          break;
        case Ne:
        case jt:
          $S(t);
          break;
      }
    }
    var z0 = null;
    z0 = /* @__PURE__ */ new Set();
    var Om = !1, Pr = !1, Px = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Ff = null, Hf = null;
    function Vx(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var Bx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function U0(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Bx(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function $x(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function A0(e, t) {
      try {
        F0(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Pe && ct && e.mode & Mt)
              try {
                Kl(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          a.current = null;
    }
    function Lm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var j0 = !1;
    function Ix(e, t) {
      nw(e.containerInfo), Se = t, Yx();
      var a = j0;
      return j0 = !1, a;
    }
    function Yx() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & kl) !== De && t !== null ? (t.return = e, Se = t) : Qx();
      }
    }
    function Qx() {
      for (; Se !== null; ) {
        var e = Se;
        Yt(e);
        try {
          Wx(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Wx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Yn) !== De) {
        switch (Yt(e), e.tag) {
          case $:
          case Je:
          case Ie:
            break;
          case ne: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = z0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              _w(v.containerInfo);
            }
            break;
          }
          case ee:
          case Me:
          case ce:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Pa ? qi(t) : (e & fr) !== Pa && cs(t), (e & Yl) !== Pa && Wp(!0), Lm(t, a, p), (e & Yl) !== Pa && Wp(!1), (e & Fr) !== Pa ? Ml() : (e & fr) !== Pa && wd());
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
            (e & Fr) !== Pa ? Td(t) : (e & fr) !== Pa && Oc(t);
            var f = s.create;
            (e & Yl) !== Pa && Wp(!0), s.destroy = f(), (e & Yl) !== Pa && Wp(!1), (e & Fr) !== Pa ? Av() : (e & fr) !== Pa && jv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== De ? v = "useLayoutEffect" : (s.tag & Yl) !== De ? v = "useInsertionEffect" : v = "useEffect";
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
    function Gx(e, t) {
      if ((t.flags & Ct) !== De)
        switch (t.tag) {
          case gt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZC(), p = t.alternate === null ? "mount" : "update";
            JC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case gt:
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
    function Kx(e, t, a, i) {
      if ((a.flags & Ol) !== De)
        switch (a.tag) {
          case $:
          case Je:
          case Ie: {
            if (!Pr)
              if (a.mode & Mt)
                try {
                  Kl(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case ne: {
            var u = a.stateNode;
            if (a.flags & Ct && !Pr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & Mt)
                  try {
                    Kl(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & Mt)
                  try {
                    Kl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), TC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ee:
                    y = a.child.stateNode;
                    break;
                  case ne:
                    y = a.child.stateNode;
                    break;
                }
              TC(a, v, y);
            }
            break;
          }
          case ee: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var b = a.type, w = a.memoizedProps;
              pw(g, b, w);
            }
            break;
          }
          case Me:
            break;
          case ce:
            break;
          case gt: {
            {
              var N = a.memoizedProps, A = N.onCommit, F = N.onRender, se = a.stateNode.effectDuration, Ue = ZC(), be = t === null ? "mount" : "update";
              JC() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ue);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, se, Ue), Qb(a);
                var wt = a.return;
                e: for (; wt !== null; ) {
                  switch (wt.tag) {
                    case J:
                      var St = wt.stateNode;
                      St.effectDuration += se;
                      break e;
                    case gt:
                      var O = wt.stateNode;
                      O.effectDuration += se;
                      break e;
                  }
                  wt = wt.return;
                }
              }
            }
            break;
          }
          case ke: {
            rb(e, a);
            break;
          }
          case un:
          case Ht:
          case _t:
          case Ne:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & En && F0(a);
    }
    function qx(e) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie: {
          if (e.mode & Mt)
            try {
              Kl(), U0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            U0(e, e.return);
          break;
        }
        case ne: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $x(e, e.return, t), A0(e, e.return);
          break;
        }
        case ee: {
          A0(e, e.return);
          break;
        }
      }
    }
    function Xx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ee) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Tw(u) : xw(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Me) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ww(s) : bw(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === jt) && i.memoizedState !== null && i !== e)) {
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
    function F0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ee:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              Kl(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function Jx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function H0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, H0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ee) {
          var a = e.stateNode;
          a !== null && a1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Zx(e) {
      for (var t = e.return; t !== null; ) {
        if (P0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function P0(e) {
      return e.tag === ee || e.tag === J || e.tag === ce;
    }
    function V0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || P0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ee && t.tag !== Me && t.tag !== Zt; ) {
          if (t.flags & mn || t.child === null || t.tag === ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function eb(e) {
      var t = Zx(e);
      switch (t.tag) {
        case ee: {
          var a = t.stateNode;
          t.flags & Oa && ($E(a), t.flags &= ~Oa);
          var i = V0(e);
          DS(e, i, a);
          break;
        }
        case J:
        case ce: {
          var u = t.stateNode.containerInfo, s = V0(e);
          kS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === ee || i === Me;
      if (u) {
        var s = e.stateNode;
        t ? Sw(a, s, t) : yw(a, s);
      } else if (i !== ce) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === ee || i === Me;
      if (u) {
        var s = e.stateNode;
        t ? gw(a, s, t) : mw(a, s);
      } else if (i !== ce) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, cl = !1;
    function tb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ee: {
              Vr = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case ce: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        B0(e, t, a), Vr = null, cl = !1;
      }
      Jx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        B0(e, t, i), i = i.sibling;
    }
    function B0(e, t, a) {
      switch (Ed(a), a.tag) {
        case ee:
          Pr || Pf(a, t);
        case Me: {
          {
            var i = Vr, u = cl;
            Vr = null, Po(e, t, a), Vr = i, cl = u, Vr !== null && (cl ? Cw(Vr, a.stateNode) : Ew(Vr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Vr !== null && (cl ? Rw(Vr, a.stateNode) : Py(Vr, a.stateNode));
          return;
        }
        case ce: {
          {
            var s = Vr, f = cl;
            Vr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Vr = s, cl = f;
          }
          return;
        }
        case $:
        case Je:
        case vt:
        case Ie: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, N = b.tag;
                  w !== void 0 && ((N & Yl) !== Pa ? Lm(a, t, w) : (N & fr) !== Pa && (cs(a), a.mode & Mt ? (Kl(), Lm(a, t, w), Gl(a)) : Lm(a, t, w), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case ne: {
          if (!Pr) {
            Pf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && _S(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & pt
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, Po(e, t, a), Pr = F;
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
    function nb(e) {
      e.memoizedState;
    }
    function rb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Vw(s);
          }
        }
      }
    }
    function $0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Px()), t.forEach(function(i) {
          var u = Zb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if (Ff !== null && Hf !== null)
                Qp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ab(e, t, a) {
      Ff = a, Hf = e, Yt(t), I0(t, e), Yt(t), Ff = null, Hf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            tb(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Yt(p), I0(p, e), p = p.sibling;
      Yt(f);
    }
    function I0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case $:
        case Je:
        case vt:
        case Ie: {
          if (fl(t, e), ql(e), u & Ct) {
            try {
              sl(Yl | cr, e, e.return), Ho(Yl | cr, e);
            } catch (Qe) {
              fn(e, e.return, Qe);
            }
            if (e.mode & Mt) {
              try {
                Kl(), sl(fr | cr, e, e.return);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
              Gl(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
          }
          return;
        }
        case ne: {
          fl(t, e), ql(e), u & En && i !== null && Pf(i, i.return);
          return;
        }
        case ee: {
          fl(t, e), ql(e), u & En && i !== null && Pf(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                $E(s);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    vw(f, g, y, v, p, e);
                  } catch (Qe) {
                    fn(e, e.return, Qe);
                  }
              }
            }
          }
          return;
        }
        case Me: {
          if (fl(t, e), ql(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              hw(b, N, w);
            } catch (Qe) {
              fn(e, e.return, Qe);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), ql(e), u & Ct && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Pw(t.containerInfo);
              } catch (Qe) {
                fn(e, e.return, Qe);
              }
          }
          return;
        }
        case ce: {
          fl(t, e), ql(e);
          return;
        }
        case ke: {
          fl(t, e), ql(e);
          var F = e.child;
          if (F.flags & Nn) {
            var se = F.stateNode, Ue = F.memoizedState, be = Ue !== null;
            if (se.isHidden = be, be) {
              var wt = F.alternate !== null && F.alternate.memoizedState !== null;
              wt || Fb();
            }
          }
          if (u & Ct) {
            try {
              nb(e);
            } catch (Qe) {
              fn(e, e.return, Qe);
            }
            $0(e);
          }
          return;
        }
        case Ne: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pt
          ) {
            var O = Pr;
            Pr = O || St, fl(t, e), Pr = O;
          } else
            fl(t, e);
          if (ql(e), u & Nn) {
            var H = e.stateNode, L = e.memoizedState, X = L !== null, ve = e;
            if (H.isHidden = X, X && !St && (ve.mode & pt) !== Oe) {
              Se = ve;
              for (var fe = ve.child; fe !== null; )
                Se = fe, lb(fe), fe = fe.sibling;
            }
            Xx(ve, X);
          }
          return;
        }
        case un: {
          fl(t, e), ql(e), u & Ct && $0(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          eb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Kr && (e.flags &= ~Kr);
    }
    function ib(e, t, a) {
      Ff = a, Hf = t, Se = e, Y0(e, t, a), Ff = null, Hf = null;
    }
    function Y0(e, t, a) {
      for (var i = (e.mode & pt) !== Oe; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || Om;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, b = Om, w = Pr;
            Om = p, Pr = g, Pr && !w && (Se = u, ub(u));
            for (var N = s; N !== null; )
              Se = N, Y0(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, Om = b, Pr = w, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== De && s !== null ? (s.return = u, Se = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Ol) !== De) {
          var u = i.alternate;
          Yt(i);
          try {
            Kx(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
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
    function lb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case $:
          case Je:
          case vt:
          case Ie: {
            if (t.mode & Mt)
              try {
                Kl(), sl(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case ne: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case ee: {
            Pf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              Q0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : Q0(e);
      }
    }
    function Q0(e) {
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
    function ub(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            W0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : W0(e);
      }
    }
    function W0(e) {
      for (; Se !== null; ) {
        var t = Se;
        Yt(t);
        try {
          qx(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
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
    function ob(e, t, a, i) {
      Se = t, sb(t, e, a, i);
    }
    function sb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Gi) !== De && s !== null ? (s.return = u, Se = s) : cb(e, t, a, i);
      }
    }
    function cb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Gr) !== De) {
          Yt(u);
          try {
            fb(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
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
    function fb(e, t, a, i) {
      switch (t.tag) {
        case $:
        case Je:
        case Ie: {
          if (t.mode & Mt) {
            Kg();
            try {
              Ho(Fr | cr, t);
            } finally {
              Gg(t);
            }
          } else
            Ho(Fr | cr, t);
          break;
        }
      }
    }
    function db(e) {
      Se = e, pb();
    }
    function pb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Da) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, mb(u, e);
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
        (e.subtreeFlags & Gi) !== De && t !== null ? (t.return = e, Se = t) : vb();
      }
    }
    function vb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Gr) !== De && (Yt(e), hb(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function hb(e) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie: {
          e.mode & Mt ? (Kg(), sl(Fr | cr, e, e.return), Gg(e)) : sl(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function mb(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Yt(a), gb(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : yb(e);
      }
    }
    function yb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (H0(t), t === e) {
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
    function gb(e, t) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie: {
          e.mode & Mt ? (Kg(), sl(Fr, e, t), Gg(e)) : sl(Fr, e, t);
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ne: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Eb(e) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie: {
          try {
            Ho(Fr | cr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Cb(e) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ne: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case $:
        case Je:
        case Ie:
          try {
            sl(Fr | cr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var Tb = [];
    function wb() {
      Tb.forEach(function(e) {
        return e();
      });
    }
    var xb = k.ReactCurrentActQueue;
    function bb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function G0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && xb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _b = Math.ceil, LS = k.ReactCurrentDispatcher, MS = k.ReactCurrentOwner, Br = k.ReactCurrentBatchConfig, dl = k.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), K0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Mm = 3, jp = 4, q0 = 5, NS = 6, Tt = vr, Ea = null, Dn = null, hr = Q, Xl = Q, zS = Oo(Q), mr = Bu, Fp = null, Nm = Q, Hp = Q, zm = Q, Pp = null, Va = null, US = 0, X0 = 500, J0 = 1 / 0, kb = 500, $u = null;
    function Vp() {
      J0 = Qn() + kb;
    }
    function Z0() {
      return J0;
    }
    var Um = !1, AS = null, Vf = null, nc = !1, Vo = null, Bp = Q, jS = [], FS = null, Db = 50, $p = 0, HS = null, PS = !1, Am = !1, Ob = 50, Bf = 0, jm = null, Ip = Xt, Fm = Q, eR = !1;
    function Hm() {
      return Ea;
    }
    function Ca() {
      return (Tt & ($r | ji)) !== vr ? Qn() : (Ip !== Xt || (Ip = Qn()), Ip);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & pt) === Oe)
        return Be;
      if ((Tt & $r) !== vr && hr !== Q)
        return Ts(hr);
      var a = x1() !== w1;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Fm === Dt && (Fm = Md()), Fm;
      }
      var u = Aa();
      if (u !== Dt)
        return u;
      var s = sw();
      return s;
    }
    function Lb(e) {
      var t = e.mode;
      return (t & pt) === Oe ? Be : $v();
    }
    function yr(e, t, a, i) {
      t_(), eR && S("useInsertionEffect must not schedule updates."), PS && (Am = !0), So(e, a, i), (Tt & $r) !== Q && e === Ea ? a_(t) : (Jr && bs(e, t, a), i_(t), e === Ea && ((Tt & $r) === vr && (Hp = nt(Hp, a)), mr === jp && $o(e, hr)), Ba(e, i), a === Be && Tt === vr && (t.mode & pt) === Oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Vp(), eC()));
    }
    function Mb(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Ba(e, a);
    }
    function Nb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & $r) !== vr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      qc(e, t);
      var i = Kc(e, e === Ea ? hr : Q);
      if (i === Q) {
        a !== null && mR(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== WS)) {
        a == null && s !== Be && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mR(a);
      var f;
      if (u === Be)
        e.tag === Lo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), u1(rR.bind(null, e))) : ZE(rR.bind(null, e)), dl.current !== null ? dl.current.push(Mo) : fw(function() {
          (Tt & ($r | ji)) === vr && Mo();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case Mr:
            p = ss;
            break;
          case _i:
            p = Ll;
            break;
          case za:
            p = Ki;
            break;
          case Ua:
            p = mu;
            break;
          default:
            p = Ki;
            break;
        }
        f = GS(p, tR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tR(e, t) {
      if (X1(), Ip = Xt, Fm = Q, (Tt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Kc(e, e === Ea ? hr : Q);
      if (u === Q)
        return null;
      var s = !Jc(e, u) && !Bv(e, u) && !t, f = s ? $b(e, u) : Vm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== Q && (u = p, f = VS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, Q), $o(e, u), Ba(e, Qn()), v;
        }
        if (f === NS)
          $o(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Ub(g)) {
            if (f = Vm(e, u), f === tc) {
              var b = Xc(e);
              b !== Q && (u = b, f = VS(e, b));
            }
            if (f === Ap) {
              var w = Fp;
              throw rc(e, Q), $o(e, u), Ba(e, Qn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, zb(e, f, u);
        }
      }
      return Ba(e, Qn()), e.callbackNode === a ? tR.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Rr, e1(e.containerInfo);
      }
      var u = Vm(e, t);
      if (u !== tc) {
        var s = Va;
        Va = a, s !== null && nR(s);
      }
      return u;
    }
    function nR(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function zb(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Va, $u);
          break;
        }
        case Mm: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !yR()) {
            var i = US + X0 - Qn();
            if (i > 10) {
              var u = Kc(e, Q);
              if (u !== Q)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ca(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Fy(ac.bind(null, e, Va, $u), i);
              break;
            }
          }
          ac(e, Va, $u);
          break;
        }
        case jp: {
          if ($o(e, a), Od(a))
            break;
          if (!yR()) {
            var f = ai(e, a), p = f, v = Qn() - p, y = e_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Fy(ac.bind(null, e, Va, $u), y);
              break;
            }
          }
          ac(e, Va, $u);
          break;
        }
        case q0: {
          ac(e, Va, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ub(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!K(f(), p))
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
      t = ws(t, zm), t = ws(t, Hp), Qv(e, t);
    }
    function rR(e) {
      if (J1(), (Tt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      Yu();
      var t = Kc(e, Q);
      if (!ea(t, Be))
        return Ba(e, Qn()), null;
      var a = Vm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== Q && (t = i, a = VS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, Q), $o(e, t), Ba(e, Qn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Va, $u), Ba(e, Qn()), null;
    }
    function Ab(e, t) {
      t !== Q && (ef(e, nt(t, Be)), Ba(e, Qn()), (Tt & ($r | ji)) === vr && (Vp(), Mo()));
    }
    function BS(e, t) {
      var a = Tt;
      Tt |= K0;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Vp(), eC());
      }
    }
    function jb(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, jn(Mr), e(t, a, i, u);
      } finally {
        jn(s), Br.transition = f, Tt === vr && Vp();
      }
    }
    function Iu(e) {
      Vo !== null && Vo.tag === Lo && (Tt & ($r | ji)) === vr && Yu();
      var t = Tt;
      Tt |= K0;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, jn(Mr), e ? e() : void 0;
      } finally {
        jn(i), Br.transition = a, Tt = t, (Tt & ($r | ji)) === vr && Mo();
      }
    }
    function aR() {
      return (Tt & ($r | ji)) !== vr;
    }
    function Pm(e, t) {
      ia(zS, Xl, e), Xl = nt(Xl, t);
    }
    function $S(e) {
      Xl = zS.current, aa(zS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, cw(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          N0(u, i), i = i.return;
        }
      Ea = e;
      var s = ic(e.current, null);
      return Dn = s, hr = Xl = t, mr = Bu, Fp = null, Nm = Q, Hp = Q, zm = Q, Pp = null, Va = null, M1(), al.discardPendingWarnings(), s;
    }
    function iR(e, t) {
      do {
        var a = Dn;
        try {
          if (qh(), DC(), cn(), MS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, Dn = null;
            return;
          }
          if (Pe && a.mode & Mt && xm(a, !0), Ye)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              fs(a, t, hr);
          ux(e, a.return, a, t, hr), sR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function lR() {
      var e = LS.current;
      return LS.current = Em, e === null ? Em : e;
    }
    function uR(e) {
      LS.current = e;
    }
    function Fb() {
      US = Qn();
    }
    function Yp(e) {
      Nm = nt(e, Nm);
    }
    function Hb() {
      mr === Bu && (mr = Mm);
    }
    function IS() {
      (mr === Bu || mr === Mm || mr === tc) && (mr = jp), Ea !== null && (Rs(Nm) || Rs(Hp)) && $o(Ea, hr);
    }
    function Pb(e) {
      mr !== jp && (mr = tc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Vb() {
      return mr === Bu;
    }
    function Vm(e, t) {
      var a = Tt;
      Tt |= $r;
      var i = lR();
      if (Ea !== e || hr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), Wv(e, t);
        }
        $u = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Bb();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      if (qh(), Tt = a, uR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Ea = null, hr = Q, mr;
    }
    function Bb() {
      for (; Dn !== null; )
        oR(Dn);
    }
    function $b(e, t) {
      var a = Tt;
      Tt |= $r;
      var i = lR();
      if (Ea !== e || hr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), Wv(e, t);
        }
        $u = Ad(), Vp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Ib();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      return qh(), uR(i), Tt = a, Dn !== null ? (Fv(), Bu) : (Lc(), Ea = null, hr = Q, mr);
    }
    function Ib() {
      for (; Dn !== null && !hd(); )
        oR(Dn);
    }
    function oR(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & Mt) !== Oe ? (Wg(e), a = YS(t, e, Xl), xm(e, !0)) : a = YS(t, e, Xl), cn(), e.memoizedProps = e.pendingProps, a === null ? sR(e) : Dn = a, MS.current = null;
    }
    function sR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === De) {
          Yt(t);
          var u = void 0;
          if ((t.mode & Mt) === Oe ? u = M0(a, t, Xl) : (Wg(t), u = M0(a, t, Xl), xm(t, !1)), cn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = Hx(a, t);
          if (s !== null) {
            s.flags &= Mv, Dn = s;
            return;
          }
          if ((t.mode & Mt) !== Oe) {
            xm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = De, i.deletions = null;
          else {
            mr = NS, Dn = null;
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
      mr === Bu && (mr = q0);
    }
    function ac(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, jn(Mr), Yb(e, t, a, i);
      } finally {
        Br.transition = u, jn(i);
      }
      return null;
    }
    function Yb(e, t, a, i) {
      do
        Yu();
      while (Vo !== null);
      if (n_(), (Tt & ($r | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === Q && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = nt(u.lanes, u.childLanes);
      zd(e, f), e === Ea && (Ea = null, Dn = null, hr = Q), ((u.subtreeFlags & Gi) !== De || (u.flags & Gi) !== De) && (nc || (nc = !0, FS = a, GS(Ki, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== De, v = (u.flags & (kl | Dl | Ol | Gi)) !== De;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Aa();
        jn(Mr);
        var b = Tt;
        Tt |= ji, MS.current = null, Ix(e, u), e0(), ab(e, u, s), rw(e.containerInfo), e.current = u, ds(s), ib(u, e, s), ps(), md(), Tt = b, jn(g), Br.transition = y;
      } else
        e.current = u, e0();
      var w = nc;
      if (nc ? (nc = !1, Vo = e, Bp = s) : (Bf = 0, jm = null), f = e.pendingLanes, f === Q && (Vf = null), w || pR(e.current, !1), gd(u.stateNode, i), Jr && e.memoizedUpdaters.clear(), wb(), Ba(e, Qn()), t !== null)
        for (var N = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], se = F.stack, Ue = F.digest;
          N(F.value, {
            componentStack: se,
            digest: Ue
          });
        }
      if (Um) {
        Um = !1;
        var be = AS;
        throw AS = null, be;
      }
      return ea(Bp, Be) && e.tag !== Lo && Yu(), f = e.pendingLanes, ea(f, Be) ? (q1(), e === HS ? $p++ : ($p = 0, HS = e)) : $p = 0, Mo(), Rd(), null;
    }
    function Yu() {
      if (Vo !== null) {
        var e = qv(Bp), t = ks(za, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, jn(t), Wb();
        } finally {
          jn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Qb(e) {
      jS.push(e), nc || (nc = !0, GS(Ki, function() {
        return Yu(), null;
      }));
    }
    function Wb() {
      if (Vo === null)
        return !1;
      var e = FS;
      FS = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = Q, (Tt & ($r | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, Am = !1, Su(a);
      var i = Tt;
      Tt |= ji, db(t.current), ob(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Gx(t, f);
        }
      }
      xd(), pR(t.current, !0), Tt = i, Mo(), Am ? t === jm ? Bf++ : (Bf = 0, jm = t) : Bf = 0, PS = !1, Am = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Gb(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function Kb(e) {
      Um || (Um = !0, AS = e);
    }
    var qb = Kb;
    function fR(e, t, a) {
      var i = Zs(a, t), u = o0(e, i, Be), s = zo(e, u, Be), f = Ca();
      s !== null && (So(s, Be, f), Ba(s, f));
    }
    function fn(e, t, a) {
      if (Vx(a), Wp(!1), e.tag === J) {
        fR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          fR(i, e, a);
          return;
        } else if (i.tag === ne) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cR(s)) {
            var f = Zs(a, e), p = fS(i, f, Be), v = zo(i, p, Be), y = Ca();
            v !== null && (So(v, Be, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Xb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      Zc(e, a), l_(e), Ea === e && ku(hr, a) && (mr === jp || mr === Mm && _u(hr) && Qn() - US < X0 ? rc(e, Q) : zm = nt(zm, a)), Ba(e, u);
    }
    function dR(e, t) {
      t === Dt && (t = Lb(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (So(i, t, a), Ba(i, a));
    }
    function Jb(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), dR(e, a);
    }
    function Zb(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case ke:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case un:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dR(e, a);
    }
    function e_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _b(e / 1960) * 1960;
    }
    function t_() {
      if ($p > Db)
        throw $p = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > Ob && (Bf = 0, jm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function n_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function pR(e, t) {
      Yt(e), Bm(e, _l, Cb), t && Bm(e, Ti, Rb), Bm(e, _l, Sb), t && Bm(e, Ti, Eb), cn();
    }
    function Bm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var $m = null;
    function vR(e) {
      {
        if ((Tt & $r) !== vr || !(e.mode & pt))
          return;
        var t = e.tag;
        if (t !== Te && t !== J && t !== ne && t !== $ && t !== Je && t !== vt && t !== Ie)
          return;
        var a = Ge(e) || "ReactComponent";
        if ($m !== null) {
          if ($m.has(a))
            return;
          $m.add(a);
        } else
          $m = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Yt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : cn();
        }
      }
    }
    var YS;
    {
      var r_ = null;
      YS = function(e, t, a) {
        var i = RR(r_, t);
        try {
          return _0(e, t, a);
        } catch (s) {
          if (h1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (qh(), DC(), N0(e, t), RR(t, i), t.mode & Mt && Wg(t), bl(null, _0, null, e, t, a), Qi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hR = !1, QS;
    QS = /* @__PURE__ */ new Set();
    function a_(e) {
      if (mi && !W1())
        switch (e.tag) {
          case $:
          case Je:
          case Ie: {
            var t = Dn && Ge(Dn) || "Unknown", a = t;
            if (!QS.has(a)) {
              QS.add(a);
              var i = Ge(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ne: {
            hR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var WS = {};
    function GS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), WS) : vd(e, t);
      }
    }
    function mR(e) {
      if (e !== WS)
        return zv(e);
    }
    function yR() {
      return dl.current !== null;
    }
    function i_(e) {
      {
        if (e.mode & pt) {
          if (!G0())
            return;
        } else if (!bb() || Tt !== vr || e.tag !== $ && e.tag !== Je && e.tag !== Ie)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            Yt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? Yt(e) : cn();
          }
        }
      }
    }
    function l_(e) {
      e.tag !== Lo && G0() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      eR = e;
    }
    var Fi = null, $f = null, u_ = function(e) {
      Fi = e;
    };
    function If(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function KS(e) {
      return If(e);
    }
    function qS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
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
    function gR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ne: {
            typeof i == "function" && (u = !0);
            break;
          }
          case $: {
            (typeof i == "function" || s === qe) && (u = !0);
            break;
          }
          case Je: {
            (s === Y || s === qe) && (u = !0);
            break;
          }
          case vt:
          case Ie: {
            (s === et || s === qe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function SR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var o_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          XS(e.current, i, a);
        });
      }
    }, s_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Yu(), Iu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case $:
          case Ie:
          case ne:
            v = p;
            break;
          case Je:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Fi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === ne ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ha(e, Be);
          w !== null && yr(w, e, Be, Xt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var c_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case $:
          case Ie:
          case ne:
            p = f;
            break;
          case Je:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? f_(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function f_(e, t) {
      {
        var a = d_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ee:
              t.add(i.stateNode);
              return;
            case ce:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function d_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ee)
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
    var ZS;
    {
      ZS = !1;
      try {
        var ER = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function p_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new p_(e, t, a, i);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function v_(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function h_(e) {
      if (typeof e == "function")
        return eE(e) ? ne : $;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return Je;
        if (t === et)
          return vt;
      }
      return Te;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Te:
        case $:
        case Ie:
          a.type = If(e.type);
          break;
        case ne:
          a.type = KS(e.type);
          break;
        case Je:
          a.type = qS(e.type);
          break;
      }
      return a;
    }
    function m_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function y_(e, t, a) {
      var i;
      return e === Ph ? (i = pt, t === !0 && (i |= Gt, i |= Nt)) : i = Oe, Jr && (i |= Mt), oi(J, null, null, i);
    }
    function tE(e, t, a, i, u, s) {
      var f = Te, p = e;
      if (typeof e == "function")
        eE(e) ? (f = ne, p = KS(p)) : p = If(p);
      else if (typeof e == "string")
        f = ee;
      else
        e: switch (e) {
          case di:
            return Io(a.children, u, s, t);
          case Wa:
            f = st, u |= Gt, (u & pt) !== Oe && (u |= Nt);
            break;
          case pi:
            return g_(a, u, s, t);
          case ue:
            return S_(a, u, s, t);
          case me:
            return E_(a, u, s, t);
          case Tn:
            return CR(a, u, s, t);
          case nn:
          case ht:
          case sn:
          case ar:
          case dt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = yt;
                  break e;
                case R:
                  f = Jt;
                  break e;
                case Y:
                  f = Je, p = qS(p);
                  break e;
                case et:
                  f = vt;
                  break e;
                case qe:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ge(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function nE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = tE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = oi(Ke, e, i, t);
      return u.lanes = a, u;
    }
    function g_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(gt, e, i, t | Mt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function S_(e, t, a, i) {
      var u = oi(ke, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function E_(e, t, a, i) {
      var u = oi(un, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function CR(e, t, a, i) {
      var u = oi(Ne, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function rE(e, t, a) {
      var i = oi(Me, e, null, t);
      return i.lanes = a, i;
    }
    function C_() {
      var e = oi(ee, null, null, Oe);
      return e.elementType = "DELETED", e;
    }
    function R_(e) {
      var t = oi(Zt, null, null, Oe);
      return t.stateNode = e, t;
    }
    function aE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function RR(e, t) {
      return e === null && (e = oi(Te, null, null, Oe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function T_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = xs(Q), this.expirationTimes = xs(Xt), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = xs(Q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ph:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = new T_(e, t, a, p, v), b = y_(t, s);
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
      return yg(b), g;
    }
    var iE = "18.3.1";
    function w_(e, t, a) {
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
    var lE, uE;
    lE = !1, uE = {};
    function wR(e) {
      if (!e)
        return ui;
      var t = po(e), a = l1(t);
      if (t.tag === ne) {
        var i = t.type;
        if (Il(i))
          return XE(t, i, a);
      }
      return a;
    }
    function x_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Ge(a) || "Component";
          if (!uE[s]) {
            uE[s] = !0;
            var f = ir;
            try {
              Yt(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Yt(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function xR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return TR(e, t, v, y, a, i, u, s, f);
    }
    function bR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = TR(a, i, g, e, u, s, f, p, v);
      b.context = wR(null);
      var w = b.current, N = Ca(), A = Bo(w), F = Pu(N, A);
      return F.callback = t ?? null, zo(w, F, A), Mb(b, A, N), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ca(), f = Bo(u);
      gn(f);
      var p = wR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && ir !== null && !lE && (lE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), tm(y, u, f)), f;
    }
    function Im(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ee:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function b_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Pv(t);
            Ab(t, a);
          }
          break;
        }
        case ke: {
          Iu(function() {
            var u = Ha(e, Be);
            if (u !== null) {
              var s = Ca();
              yr(u, e, Be, s);
            }
          });
          var i = Be;
          oE(e, i);
          break;
        }
      }
    }
    function _R(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function oE(e, t) {
      _R(e, t);
      var a = e.alternate;
      a && _R(a, t);
    }
    function __(e) {
      if (e.tag === ke) {
        var t = Ss, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function k_(e) {
      if (e.tag === ke) {
        var t = Bo(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function kR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var DR = function(e) {
      return null;
    };
    function D_(e) {
      return DR(e);
    }
    var OR = function(e) {
      return !1;
    };
    function O_(e) {
      return OR(e);
    }
    var LR = null, MR = null, NR = null, zR = null, UR = null, AR = null, jR = null, FR = null, HR = null;
    {
      var PR = function(e, t, a) {
        var i = t[a], u = ot(e) ? e.slice() : at({}, e);
        return a + 1 === t.length ? (ot(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = PR(e[i], t, a + 1), u);
      }, VR = function(e, t) {
        return PR(e, t, 0);
      }, BR = function(e, t, a, i) {
        var u = t[i], s = ot(e) ? e.slice() : at({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ot(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $R = function(e, t, a) {
        if (t.length !== a.length) {
          je("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              je("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BR(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ot(e) ? e.slice() : at({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, sE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = Ha(e, Be);
          f !== null && yr(f, e, Be, Xt);
        }
      }, MR = function(e, t, a) {
        var i = sE(e, t);
        if (i !== null) {
          var u = VR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = at({}, e.memoizedProps);
          var s = Ha(e, Be);
          s !== null && yr(s, e, Be, Xt);
        }
      }, NR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = Ha(e, Be);
          f !== null && yr(f, e, Be, Xt);
        }
      }, zR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Be);
        i !== null && yr(i, e, Be, Xt);
      }, UR = function(e, t) {
        e.pendingProps = VR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, Be);
        a !== null && yr(a, e, Be, Xt);
      }, AR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Be);
        i !== null && yr(i, e, Be, Xt);
      }, jR = function(e) {
        var t = Ha(e, Be);
        t !== null && yr(t, e, Be, Xt);
      }, FR = function(e) {
        DR = e;
      }, HR = function(e) {
        OR = e;
      };
    }
    function L_(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function M_(e) {
      return null;
    }
    function N_() {
      return ir;
    }
    function z_(e) {
      var t = e.findFiberByHostInstance, a = k.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LR,
        overrideHookStateDeletePath: MR,
        overrideHookStateRenamePath: NR,
        overrideProps: zR,
        overridePropsDeletePath: UR,
        overridePropsRenamePath: AR,
        setErrorHandler: FR,
        setSuspenseHandler: HR,
        scheduleUpdate: jR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: L_,
        findFiberByHostInstance: t || M_,
        // React Refresh
        findHostInstancesForRefresh: c_,
        scheduleRefresh: o_,
        scheduleRoot: s_,
        setRefreshHandler: u_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: N_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var QR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cE(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = cE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Qm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = kR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Ym.prototype.unmount = cE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Gp(null, e, null, null);
        }), QE(t);
      }
    };
    function U_(e, t) {
      if (!Qm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WR(e);
      var a = !1, i = !1, u = "", s = QR;
      t != null && (t.hydrate ? je("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = xR(e, Ph, null, a, i, u, s);
      Nh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new cE(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function A_(e) {
      e && th(e);
    }
    Ym.prototype.unstable_scheduleHydration = A_;
    function j_(e, t, a) {
      if (!Qm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = bR(t, null, e, Ph, i, s, f, p, v);
      if (Nh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          V1(y, b);
        }
      return new Ym(y);
    }
    function Qm(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === nd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function WR(e) {
      e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var F_ = k.ReactCurrentOwner, GR;
    GR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = kR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function KR() {
    }
    function H_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Im(f);
            s.call(w);
          };
        }
        var f = bR(
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
          KR
        );
        e._reactRootContainer = f, Nh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Im(g);
            y.call(w);
          };
        }
        var g = xR(
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
          KR
        );
        e._reactRootContainer = g, Nh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ep(b), Iu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function P_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      GR(a), P_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = H_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Im(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Im(f);
    }
    var qR = !1;
    function V_(e) {
      {
        qR || (qR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = F_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Wr ? e : x_(e, "findDOMNode");
    }
    function B_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function $_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function I_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var XR = !1;
    function Y_(e) {
      if (XR || (XR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, QE(e);
          });
        }), !0;
      } else {
        {
          var u = fE(e), s = !!(u && Do(u)), f = e.nodeType === Wr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wr(b_), Eo(__), Xv(k_), Os(Aa), jd(Gv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(WT), uy(BS, jb, Iu);
    function Q_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qm(t))
        throw new Error("Target container is not a DOM element.");
      return w_(e, t, null, a);
    }
    function W_(e, t, a, i) {
      return I_(e, t, a, i);
    }
    var dE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, zh, oo, Sc, BS]
    };
    function G_(e, t) {
      return dE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t);
    }
    function K_(e, t, a) {
      return dE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), j_(e, t, a);
    }
    function q_(e) {
      return aR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var X_ = z_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: iE,
      rendererPackageName: "react-dom"
    });
    if (!X_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JR = window.location.protocol;
      /^(https?|file):$/.test(JR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, Ia.createPortal = Q_, Ia.createRoot = G_, Ia.findDOMNode = V_, Ia.flushSync = q_, Ia.hydrate = B_, Ia.hydrateRoot = K_, Ia.render = $_, Ia.unmountComponentAtNode = Y_, Ia.unstable_batchedUpdates = BS, Ia.unstable_renderSubtreeIntoContainer = W_, Ia.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function dT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT);
    } catch (I) {
      console.error(I);
    }
  }
}
process.env.NODE_ENV === "production" ? (dT(), mE.exports = lk()) : mE.exports = uk();
var pT = mE.exports, yE, qm = pT;
if (process.env.NODE_ENV === "production")
  yE = qm.createRoot, qm.hydrateRoot;
else {
  var sT = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yE = function(I, B) {
    sT.usingClientEntryPoint = !0;
    try {
      return qm.createRoot(I, B);
    } finally {
      sT.usingClientEntryPoint = !1;
    }
  };
}
var gr = ev();
function tv(I) {
  if (!I || typeof I != "object") return "Request failed";
  const B = I.detail;
  return B == null ? "Request failed" : typeof B == "string" ? B : Array.isArray(B) ? B.map((k) => typeof k == "object" && k && "msg" in k ? String(k.msg) : JSON.stringify(k)).join("; ") : String(B);
}
function ok() {
  return {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e4,
    padding: 12
  };
}
function sk() {
  return {
    background: "#fff",
    borderRadius: 10,
    border: "1px solid #e3e6ea",
    boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
    maxWidth: 440,
    width: "100%",
    padding: "16px 18px",
    fontSize: 14,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#3c3c3c"
  };
}
function nv({
  title: I,
  children: B,
  onClose: k
}) {
  return gr.useEffect(() => {
    const $e = (Re) => {
      Re.key === "Escape" && k();
    };
    return window.addEventListener("keydown", $e), () => window.removeEventListener("keydown", $e);
  }, [k]), pT.createPortal(
    /* @__PURE__ */ Le.jsx("div", { style: ok(), role: "presentation", onMouseDown: ($e) => $e.target === $e.currentTarget && k(), children: /* @__PURE__ */ Le.jsxs("div", { style: sk(), role: "dialog", "aria-modal": "true", "aria-labelledby": "registry-modal-title", children: [
      /* @__PURE__ */ Le.jsx("h2", { id: "registry-modal-title", style: { margin: "0 0 8px", fontSize: "0.95rem", fontWeight: 700 }, children: I }),
      B
    ] }) }),
    document.body
  );
}
const gE = {
  width: "100%",
  padding: "7px 10px",
  border: "1px solid #cfd5df",
  borderRadius: 6,
  fontSize: 13,
  boxSizing: "border-box"
};
function ck({ repository: I, onClose: B }) {
  const [k, $e] = gr.useState(""), [Re, je] = gr.useState(!1), [S, Ve] = gr.useState(null), $ = k.trim() === I, ne = async () => {
    var Te, J, ce;
    if (!(!$ || Re)) {
      je(!0), Ve(null);
      try {
        const ee = (Te = window.registryRepoPathUrl) == null ? void 0 : Te.call(window, "/ui/repositories", I);
        if (!ee) throw new Error("UI not initialized");
        const Me = await fetch(`${ee}/delete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            confirm_name: I,
            app_api_key: ((J = window.registryRepoApiKey) == null ? void 0 : J.call(window)) ?? null
          })
        }), Ke = await Me.json();
        if (!Me.ok) throw new Error(tv(Ke));
        (ce = window.registryRepoReload) == null || ce.call(window);
      } catch (ee) {
        Ve(ee instanceof Error ? ee.message : String(ee)), je(!1);
      }
    }
  };
  return /* @__PURE__ */ Le.jsxs(nv, { title: "Delete repository", onClose: B, children: [
    /* @__PURE__ */ Le.jsxs("p", { style: { margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }, children: [
      "This removes all tags and manifest metadata for ",
      /* @__PURE__ */ Le.jsx("strong", { children: I }),
      ". Clients will no longer pull images from this path. Blob files remain on disk until you run garbage collection."
    ] }),
    /* @__PURE__ */ Le.jsx("label", { style: { display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }, children: "Type the repository name to confirm" }),
    /* @__PURE__ */ Le.jsx("input", { type: "text", value: k, autoFocus: !0, onChange: (Te) => $e(Te.target.value), placeholder: I, style: gE }),
    S ? /* @__PURE__ */ Le.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: S }) : null,
    /* @__PURE__ */ Le.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: B, disabled: Re, className: "registry-modal-btn secondary", children: "Cancel" }),
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: ne, disabled: !$ || Re, className: "registry-modal-btn danger", children: Re ? "Deleting…" : "Delete repository" })
    ] })
  ] });
}
function fk({ repository: I, onClose: B }) {
  const [k, $e] = gr.useState(!1), [Re, je] = gr.useState(null), S = async () => {
    var Ve, $, ne;
    if (!k) {
      $e(!0), je(null);
      try {
        const Te = (Ve = window.registryRepoPathUrl) == null ? void 0 : Ve.call(window, "/ui/repositories", I);
        if (!Te) throw new Error("UI not initialized");
        const J = await fetch(`${Te}/unlock`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ app_api_key: (($ = window.registryRepoApiKey) == null ? void 0 : $.call(window)) ?? null })
        }), ce = await J.json();
        if (!J.ok) throw new Error(tv(ce));
        (ne = window.registryRepoReload) == null || ne.call(window);
      } catch (Te) {
        je(Te instanceof Error ? Te.message : String(Te)), $e(!1);
      }
    }
  };
  return /* @__PURE__ */ Le.jsxs(nv, { title: "Unlock repository?", onClose: B, children: [
    /* @__PURE__ */ Le.jsxs("p", { style: { margin: "0 0 10px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }, children: [
      /* @__PURE__ */ Le.jsx("strong", { children: I }),
      " is protected. Unlocking allows administrators to:"
    ] }),
    /* @__PURE__ */ Le.jsxs("ul", { style: { margin: "0 0 10px", paddingLeft: 18, fontSize: 13, color: "#5c6570", lineHeight: 1.45 }, children: [
      /* @__PURE__ */ Le.jsx("li", { children: "Delete the repository and all of its tags" }),
      /* @__PURE__ */ Le.jsx("li", { children: "Rename the repository (updates metadata and image references)" }),
      /* @__PURE__ */ Le.jsx("li", { children: "Delete individual tags inside the repository" })
    ] }),
    /* @__PURE__ */ Le.jsx("p", { style: { margin: 0, fontSize: 13, color: "#8b95a5" }, children: "Push, pull, and replicate are not blocked by the lock. Re-lock anytime from the Repositories page." }),
    Re ? /* @__PURE__ */ Le.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: Re }) : null,
    /* @__PURE__ */ Le.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: B, disabled: k, className: "registry-modal-btn secondary", children: "Keep locked" }),
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: S, disabled: k, className: "registry-modal-btn primary", children: k ? "Unlocking…" : "Unlock repository" })
    ] })
  ] });
}
function dk({
  repository: I,
  tag: B,
  confirmRef: k,
  onClose: $e
}) {
  const [Re, je] = gr.useState(""), [S, Ve] = gr.useState(!1), [$, ne] = gr.useState(null), Te = Re.trim() === k, J = async () => {
    var ce, ee, Me;
    if (!(!Te || S)) {
      Ve(!0), ne(null);
      try {
        const Ke = (ce = window.registryRepoPathUrl) == null ? void 0 : ce.call(window, "/ui/repositories", I);
        if (!Ke) throw new Error("UI not initialized");
        const st = await fetch(`${Ke}/tags/${encodeURIComponent(B)}/delete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            confirm_ref: k,
            app_api_key: ((ee = window.registryRepoApiKey) == null ? void 0 : ee.call(window)) ?? null
          })
        }), Jt = await st.json();
        if (!st.ok) throw new Error(tv(Jt));
        (Me = window.registryRepoReload) == null || Me.call(window);
      } catch (Ke) {
        ne(Ke instanceof Error ? Ke.message : String(Ke)), Ve(!1);
      }
    }
  };
  return /* @__PURE__ */ Le.jsxs(nv, { title: "Delete tag", onClose: $e, children: [
    /* @__PURE__ */ Le.jsxs("p", { style: { margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }, children: [
      "Stop serving ",
      /* @__PURE__ */ Le.jsx("strong", { children: k }),
      ". Pull and Runtime Catalog references to this tag will fail until you push or replicate again."
    ] }),
    /* @__PURE__ */ Le.jsxs("label", { style: { display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }, children: [
      "Type ",
      /* @__PURE__ */ Le.jsx("code", { children: k }),
      " to confirm"
    ] }),
    /* @__PURE__ */ Le.jsx("input", { type: "text", value: Re, autoFocus: !0, onChange: (ce) => je(ce.target.value), placeholder: k, style: gE }),
    $ ? /* @__PURE__ */ Le.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: $ }) : null,
    /* @__PURE__ */ Le.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: $e, disabled: S, className: "registry-modal-btn secondary", children: "Cancel" }),
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: J, disabled: !Te || S, className: "registry-modal-btn danger", children: S ? "Deleting…" : "Delete tag" })
    ] })
  ] });
}
function pk({ repository: I, onClose: B }) {
  const [k, $e] = gr.useState(I), [Re, je] = gr.useState(!1), [S, Ve] = gr.useState(null), $ = k.trim() && k.trim() !== I, ne = async () => {
    var Te, J, ce;
    if (!(!$ || Re)) {
      je(!0), Ve(null);
      try {
        const ee = (Te = window.registryRepoPathUrl) == null ? void 0 : Te.call(window, "/ui/repositories", I);
        if (!ee) throw new Error("UI not initialized");
        const Me = await fetch(`${ee}/rename`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            new_name: k.trim(),
            app_api_key: ((J = window.registryRepoApiKey) == null ? void 0 : J.call(window)) ?? null
          })
        }), Ke = await Me.json();
        if (!Me.ok) throw new Error(tv(Ke));
        (ce = window.registryRepoReload) == null || ce.call(window);
      } catch (ee) {
        Ve(ee instanceof Error ? ee.message : String(ee)), je(!1);
      }
    }
  };
  return /* @__PURE__ */ Le.jsxs(nv, { title: "Rename repository", onClose: B, children: [
    /* @__PURE__ */ Le.jsxs("p", { style: { margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }, children: [
      "Updates on-disk metadata and image references that mention ",
      /* @__PURE__ */ Le.jsx("strong", { children: I }),
      "."
    ] }),
    /* @__PURE__ */ Le.jsx("label", { style: { display: "block", fontWeight: 600, fontSize: 13, marginBottom: 6 }, children: "New repository name" }),
    /* @__PURE__ */ Le.jsx("input", { type: "text", value: k, autoFocus: !0, onChange: (Te) => $e(Te.target.value), style: gE }),
    S ? /* @__PURE__ */ Le.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: S }) : null,
    /* @__PURE__ */ Le.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: B, disabled: Re, className: "registry-modal-btn secondary", children: "Cancel" }),
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: ne, disabled: !$ || Re, className: "registry-modal-btn primary", children: Re ? "Renaming…" : "Rename" })
    ] })
  ] });
}
function vk({ onClose: I }) {
  const [B, k] = gr.useState(!1), [$e, Re] = gr.useState(null), je = async () => {
    var S, Ve;
    if (!B) {
      k(!0), Re(null);
      try {
        const $ = await fetch("/ui/gc", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dry_run: !1, app_api_key: ((S = window.registryRepoApiKey) == null ? void 0 : S.call(window)) ?? null })
        }), ne = await $.json();
        if (!$.ok) throw new Error(tv(ne));
        (Ve = window.registryRepoOnGcComplete) == null || Ve.call(window, ne), I();
      } catch ($) {
        Re($ instanceof Error ? $.message : String($)), k(!1);
      }
    }
  };
  return /* @__PURE__ */ Le.jsxs(nv, { title: "Run garbage collection?", onClose: I, children: [
    /* @__PURE__ */ Le.jsx("p", { style: { margin: "0 0 12px", fontSize: 13, lineHeight: 1.45, color: "#5c6570" }, children: "Permanently delete blob files that are no longer referenced by any repository manifest. This cannot be undone." }),
    /* @__PURE__ */ Le.jsxs("p", { style: { margin: 0, fontSize: 13, color: "#8b95a5" }, children: [
      "Use ",
      /* @__PURE__ */ Le.jsx("strong", { children: "Preview garbage collection" }),
      " first to see how much space would be reclaimed."
    ] }),
    $e ? /* @__PURE__ */ Le.jsx("p", { style: { color: "#b42318", fontSize: 13, margin: "10px 0 0" }, role: "alert", children: $e }) : null,
    /* @__PURE__ */ Le.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 18 }, children: [
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: I, disabled: B, className: "registry-modal-btn secondary", children: "Cancel" }),
      /* @__PURE__ */ Le.jsx("button", { type: "button", onClick: je, disabled: B, className: "registry-modal-btn danger", children: B ? "Running…" : "Delete orphan blobs" })
    ] })
  ] });
}
function hk() {
  const [I, B] = gr.useState(null), [k, $e] = gr.useState(null), Re = gr.useCallback(() => {
    B(null), $e(null);
  }, []), je = gr.useCallback((S, Ve) => {
    B(S), $e(Ve);
  }, []);
  return gr.useEffect(() => {
    const S = {
      openDeleteRepository: ($) => je("delete", { repository: $ }),
      openUnlockRepository: ($) => je("unlock", { repository: $ }),
      openDeleteTag: ($, ne) => je("deleteTag", { repository: $, tag: ne, confirmRef: `${$}:${ne}` }),
      openRenameRepository: ($) => je("rename", { repository: $ }),
      openGarbageCollection: () => je("gc", { repository: "" })
    };
    window.RegistryRepositoriesUi = S;
    const Ve = window.__registryModalQueue;
    if (Ve != null && Ve.length) {
      for (const $ of Ve)
        $.kind === "delete" ? S.openDeleteRepository($.repository) : $.kind === "unlock" ? S.openUnlockRepository($.repository) : $.kind === "deleteTag" && $.tag ? S.openDeleteTag($.repository, $.tag) : $.kind === "rename" ? S.openRenameRepository($.repository) : $.kind === "gc" && S.openGarbageCollection();
      window.__registryModalQueue = [];
    }
    return window.dispatchEvent(new Event("registry-repositories-ui-ready")), () => {
      delete window.RegistryRepositoriesUi;
    };
  }, [je]), !I || !k ? null : I === "delete" ? /* @__PURE__ */ Le.jsx(ck, { repository: k.repository, onClose: Re }) : I === "unlock" ? /* @__PURE__ */ Le.jsx(fk, { repository: k.repository, onClose: Re }) : I === "deleteTag" && k.tag && k.confirmRef ? /* @__PURE__ */ Le.jsx(
    dk,
    {
      repository: k.repository,
      tag: k.tag,
      confirmRef: k.confirmRef,
      onClose: Re
    }
  ) : I === "rename" ? /* @__PURE__ */ Le.jsx(pk, { repository: k.repository, onClose: Re }) : I === "gc" ? /* @__PURE__ */ Le.jsx(vk, { onClose: Re }) : null;
}
const cT = document.getElementById("registry-modals-root");
cT && yE(cT).render(/* @__PURE__ */ Le.jsx(hk, {}));
