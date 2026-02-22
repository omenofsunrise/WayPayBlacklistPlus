import G, { useRef as Z, useState as B, useEffect as U, createContext as Ae, useContext as Be, useMemo as _e } from "react";
import o, { keyframes as Oe } from "styled-components";
import { motion as K, AnimatePresence as le } from "framer-motion";
var oe = { exports: {} }, Q = {};
var ce;
function Ye() {
  if (ce) return Q;
  ce = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, d) {
    var p = null;
    if (d !== void 0 && (p = "" + d), r.key !== void 0 && (p = "" + r.key), "key" in r) {
      d = {};
      for (var b in r)
        b !== "key" && (d[b] = r[b]);
    } else d = r;
    return r = d.ref, {
      $$typeof: e,
      type: i,
      key: p,
      ref: r !== void 0 ? r : null,
      props: d
    };
  }
  return Q.Fragment = n, Q.jsx = s, Q.jsxs = s, Q;
}
var ee = {};
var de;
function We() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === _ ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case D:
          return "Fragment";
        case L:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case F:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case l:
            return "Portal";
          case I:
            return a.displayName || "Context";
          case S:
            return (a._context.displayName || "Context") + ".Consumer";
          case z:
            var $ = a.render;
            return a = a.displayName, a || (a = $.displayName || $.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case R:
            return $ = a.displayName || null, $ !== null ? $ : e(a.type) || "Memo";
          case A:
            $ = a._payload, a = a._init;
            try {
              return e(a($));
            } catch {
            }
        }
      return null;
    }
    function n(a) {
      return "" + a;
    }
    function s(a) {
      try {
        n(a);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var T = $.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return T.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), n(a);
      }
    }
    function i(a) {
      if (a === D) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === A)
        return "<...>";
      try {
        var $ = e(a);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = v.A;
      return a === null ? null : a.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (c.call(a, "key")) {
        var $ = Object.getOwnPropertyDescriptor(a, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function b(a, $) {
      function T() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: T,
        configurable: !0
      });
    }
    function k() {
      var a = e(this.type);
      return P[a] || (P[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function f(a, $, T, O, H, X) {
      var N = T.ref;
      return a = {
        $$typeof: u,
        type: a,
        key: $,
        props: T,
        _owner: O
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function g(a, $, T, O, H, X) {
      var N = $.children;
      if (N !== void 0)
        if (O)
          if (j(N)) {
            for (O = 0; O < N.length; O++)
              x(N[O]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(N);
      if (c.call($, "key")) {
        N = e(a);
        var q = Object.keys($).filter(function(Fe) {
          return Fe !== "key";
        });
        O = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", C[N + O] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          N,
          q,
          N
        ), C[N + O] = !0);
      }
      if (N = null, T !== void 0 && (s(T), N = "" + T), p($) && (s($.key), N = "" + $.key), "key" in $) {
        T = {};
        for (var ne in $)
          ne !== "key" && (T[ne] = $[ne]);
      } else T = $;
      return N && b(
        T,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), f(
        a,
        N,
        T,
        r(),
        H,
        X
      );
    }
    function x(a) {
      m(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === A && (a._payload.status === "fulfilled" ? m(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function m(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    var h = G, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), v = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, c = Object.prototype.hasOwnProperty, j = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var W, P = {}, V = h.react_stack_bottom_frame.bind(
      h,
      d
    )(), w = M(i(d)), C = {};
    ee.Fragment = D, ee.jsx = function(a, $, T) {
      var O = 1e4 > v.recentlyCreatedOwnerStacks++;
      return g(
        a,
        $,
        T,
        !1,
        O ? Error("react-stack-top-frame") : V,
        O ? M(i(a)) : w
      );
    }, ee.jsxs = function(a, $, T) {
      var O = 1e4 > v.recentlyCreatedOwnerStacks++;
      return g(
        a,
        $,
        T,
        !0,
        O ? Error("react-stack-top-frame") : V,
        O ? M(i(a)) : w
      );
    };
  })()), ee;
}
var pe;
function Ne() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? oe.exports = Ye() : oe.exports = We()), oe.exports;
}
var t = Ne();
const Te = ({ x: e, y: n, items: s, onClose: i, ...r }) => {
  const d = Z(null), [p, b] = B(null);
  U(() => {
    const h = (u) => {
      d.current && !d.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const f = (() => {
    if (!d.current) return { x: e, y: n };
    const h = d.current.offsetWidth, u = d.current.offsetHeight, l = window.innerWidth, D = window.innerHeight;
    let y = e, L = n;
    return y + h > l && (y = e - h), L + u > D && (L = n - u), { x: y, y: L };
  })(), g = (h, u) => {
    h.submenu ? b(p === u ? null : u) : h.action && (h.action(), i());
  }, x = (h) => {
    s[h].submenu && b(h);
  }, m = (h) => {
    const u = h.relatedTarget;
    d.current?.contains(u) || b(null);
  };
  return /* @__PURE__ */ t.jsx(
    He,
    {
      ref: d,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: f.y,
        left: f.x
      },
      onClick: (h) => h.stopPropagation(),
      onMouseLeave: m,
      ...r,
      children: s.map((h, u) => /* @__PURE__ */ t.jsxs(Ve, { $hasSubmenu: !!h.submenu, $disabled: h.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ze,
          {
            onClick: (l) => {
              l.stopPropagation(), h.disabled || g(h, u);
            },
            onMouseEnter: () => !h.disabled && x(u),
            whileHover: h.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: h.color,
            $disabled: h.disabled,
            children: /* @__PURE__ */ t.jsxs(Ue, { children: [
              h.label,
              h.submenu && /* @__PURE__ */ t.jsx(Xe, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        h.submenu && p === u && /* @__PURE__ */ t.jsx(
          Ge,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Te, { x: 0, y: -u * 40, items: h.submenu, onClose: () => b(null) })
          }
        )
      ] }, u))
    }
  );
}, He = o(K.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, Ve = o.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, Ze = o(K.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: n }) => n ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Ue = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, Xe = o.span`
  color: #666;
  margin-left: 8px;
`, Ge = o(K.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, si = ({
  columns: e,
  data: n,
  onRowDoubleClick: s,
  contextMenuActions: i = [],
  onSort: r,
  sortConfig: d,
  onRowClick: p,
  selectedRow: b,
  fixedHeight: k,
  hasTotalsRow: f,
  debtChecker: g,
  rowStyles: x = {},
  isLoading: m
}) => {
  const [h, u] = B(null), [l, D] = B(null), y = Z(null), L = Z(null), S = 500, I = b !== void 0 ? b : h, z = (w) => {
    !e[w].isSortable || !r || r(w);
  }, F = g || ((w) => {
    const C = w[8];
    return typeof C == "string" ? parseFloat(C.replace(/[^\d.]/g, "")) > 0 : !1;
  }), R = (w) => {
    b === void 0 && u(w === I ? null : w), p && p(n[w], w);
  }, A = (w, C) => {
    s && s(w, C);
  }, Y = (w, C) => {
    if (i.length === 0) return;
    w.preventDefault();
    const a = "touches" in w ? w.touches[0].clientX : w.clientX, $ = "touches" in w ? w.touches[0].clientY : w.clientY;
    D({
      x: a,
      y: $,
      rowIndex: C
    });
  }, _ = (w, C) => {
    w.preventDefault(), Y(w, C);
  }, v = (w, C) => {
    i.length !== 0 && (L.current && clearTimeout(L.current), L.current = window.setTimeout(() => {
      Y(w, C);
    }, S));
  }, c = () => {
    L.current && (clearTimeout(L.current), L.current = null);
  }, j = () => {
    L.current && window.clearTimeout(L.current);
  }, M = () => {
    D(null);
  };
  U(() => {
    const w = () => {
      l && M();
    };
    return document.addEventListener("click", w), () => {
      document.removeEventListener("click", w), L.current && clearTimeout(L.current);
    };
  }, [l]);
  const W = (w, C, a) => {
    if (C)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const $ = x[w] || {};
    return w === I ? {
      backgroundColor: $.backgroundColor || "#007D88",
      color: $.color || "#FFFFFF",
      fontWeight: $.fontWeight || "normal"
    } : a ? {
      backgroundColor: $.backgroundColor || "#E8D8D8",
      color: $.color || "inherit",
      fontWeight: $.fontWeight || "normal"
    } : n[w][n[w].length - 1] === !1 ? {
      backgroundColor: $.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: $.fontWeight || "normal"
    } : {
      backgroundColor: $.backgroundColor || "#FFFFFF",
      color: $.color || "inherit",
      fontWeight: $.fontWeight || "normal"
    };
  }, P = (w, C, a) => {
    if (C) return "#FFFFFF";
    const $ = W(w, C, a);
    return $.hoverBackgroundColor ? $.hoverBackgroundColor : w === I ? "#007D88" : a ? "#E8D8D8CC" : n[w][n[w].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, V = () => {
    if (!l || i.length === 0) return null;
    const w = (typeof i == "function" ? i(n[l.rowIndex]) : i).filter(
      (C) => typeof C == "object" && (typeof C.shouldShow != "function" || C.shouldShow(n[l.rowIndex]))
    );
    return w.length === 0 ? null : /* @__PURE__ */ t.jsx(
      et,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.15 },
        style: {
          position: "fixed",
          left: l.x,
          top: l.y,
          zIndex: 1e3
        },
        onClick: (C) => C.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Te,
          {
            items: w.map((C) => {
              const a = {
                label: C.label,
                color: C.color,
                disabled: C.disabled
              };
              return C.getSubmenu ? a.submenu = C.getSubmenu(n[l.rowIndex]) : C.action && (a.action = () => {
                C.action(n[l.rowIndex], l.rowIndex), M();
              }), a;
            }),
            onClose: M,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(Ke, { ref: y, children: m ? /* @__PURE__ */ t.jsx(qe, { children: /* @__PURE__ */ t.jsx(Je, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Qe, { children: [
      /* @__PURE__ */ t.jsx(tt, { children: /* @__PURE__ */ t.jsx(ue, { children: e.map(
        (w, C) => !w.isHidden && /* @__PURE__ */ t.jsx(
          nt,
          {
            $isSortable: w.isSortable,
            $isActive: d?.key === C,
            onClick: () => z(C),
            $align: w.align || "center",
            $isFirst: C === 0,
            $isLast: C === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(rt, { $align: w.align || "center", children: [
              w.name,
              w.isSortable && /* @__PURE__ */ t.jsx(
                it,
                {
                  $direction: d?.key === C ? d.direction : "asc",
                  animate: {
                    rotate: d?.key === C && d.direction === "desc" ? 180 : 0,
                    color: d?.key === C ? "#007D88" : "#6B7280"
                  },
                  transition: { duration: 0.2 },
                  children: /* @__PURE__ */ t.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
                    "path",
                    {
                      d: "M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",
                      fill: "currentColor"
                    }
                  ) })
                }
              )
            ] })
          },
          C
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(ot, { $fixedHeight: k, children: /* @__PURE__ */ t.jsx(le, { children: n.map((w, C) => {
        const a = !!(f && C === n.length - 1), $ = !!(!a && F(w)), T = W(C, a, $), O = P(C, a, $);
        return /* @__PURE__ */ t.jsx(
          ue,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: T.backgroundColor || "#FFFFFF",
              color: T.color || "inherit",
              fontWeight: T.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: C === n.length - 1,
            $isSelected: C === I,
            $isTotalsRow: a,
            onClick: () => !a && R(C),
            onDoubleClick: () => !a && A(w, C),
            onContextMenu: (H) => !a && _(H, C),
            onTouchStart: (H) => !a && v(H, C),
            onTouchEnd: c,
            onTouchMove: j,
            whileHover: a ? {} : {
              backgroundColor: O,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: T.backgroundColor || "#FFFFFF",
              color: T.color || "inherit",
              fontWeight: T.fontWeight || "normal"
            },
            children: w.map(
              (H, X) => !e[X]?.isHidden && /* @__PURE__ */ t.jsx(
                st,
                {
                  $align: e[X]?.align || "center",
                  $isFirst: X === 0,
                  $isLast: X === w.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && X < w.findIndex((N) => N === "Итого:"),
                  children: H
                },
                X
              )
            )
          },
          `row-${C}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(le, { children: V() })
  ] }) });
}, qe = o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`, Je = o.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007d88;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, Ke = o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, Qe = o.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-sizing: border-box;

  th,
  td {
    box-sizing: border-box;
    position: relative;
    border-right: 0.5px solid #d1d5db;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`, et = o(K.div)`
  z-index: 1000;
  pointer-events: auto;
`, tt = o.thead`
  text-align: center;
  position: relative;
`, ot = o.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, ue = o(K.tr)`
  position: relative;
  cursor: ${({ $isTotalsRow: e }) => e ? "default" : "pointer"};
  font-weight: ${({ $isTotalsRow: e }) => e ? "bold" : "normal"};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 1px;
    background: #d1d5db;
    display: ${({ $isLast: e, $isTotalsRow: n }) => e || n ? "none" : "block"};
  }
`, nt = o.th`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  font-weight: 500;
  position: relative;
  cursor: ${({ $isSortable: e }) => e ? "pointer" : "default"};
  transition: all 0.2s ease;
  background-color: #ffffff;
  color: ${({ $isActive: e }) => e ? "#007d88" : "inherit"};

  &:hover {
    background-color: ${({ $isSortable: e }) => e ? "#f3f4f6" : "inherit"};
  }
`, rt = o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, it = o(K.span)`
  display: inline-flex;
  align-items: center;
`, st = o.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: n }) => e || n ? "none" : "0.5px solid #d1d5db"};
`, ai = ({ onClick: e, tooltip: n, size: s = 32, margin: i }) => /* @__PURE__ */ t.jsx(at, { onClick: e, size: s, margin: i, title: n, children: /* @__PURE__ */ t.jsx(lt, { size: s }) }), at = o.button`
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  ${(e) => e.margin && `margin: ${e.margin};`}

  &:hover {
    background-color: rgba(249, 250, 250, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`, lt = o.div`
  position: relative;
  width: ${(e) => e.size * 0.5}px;
  height: ${(e) => e.size * 0.5}px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #50555c;
    border-radius: 2px;
  }

  &::before {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`, ct = o.button`
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  margin: 25px;

  &:hover {
    opacity: 0.8;
  }
`, li = ({ children: e, onClick: n }) => /* @__PURE__ */ t.jsxs(ct, { onClick: n, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "#50555C"
    }
  ) }),
  e
] }), dt = ({
  children: e = "Подтвердить",
  icon: n,
  disabled: s = !1,
  bg: i = "rgba(0, 125, 136, 1)",
  hoverBg: r = "rgba(0, 150, 163, 1)",
  disabledBg: d = "rgba(102, 177, 184, 1)",
  textColor: p = "white",
  fullWidth: b = !1,
  minWidth: k,
  ...f
}) => /* @__PURE__ */ t.jsxs(
  pt,
  {
    disabled: s,
    $bg: i,
    $hoverBg: r,
    $disabledBg: d,
    $textColor: p,
    $fullWidth: b,
    $minWidth: k,
    ...f,
    children: [
      n && /* @__PURE__ */ t.jsx(ut, { children: n }),
      /* @__PURE__ */ t.jsx("span", { children: e })
    ]
  }
), pt = o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled: e, $bg: n, $disabledBg: s }) => e ? s : n};
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $textColor: e }) => e};
  font-size: 15px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({ disabled: e }) => e ? 0.7 : 1};
  width: ${({ $fullWidth: e }) => e ? "100%" : "auto"};
  min-width: ${({ $minWidth: e }) => e || "auto"};

  &:hover {
    background-color: ${({ disabled: e, $hoverBg: n, $disabledBg: s }) => e ? s : n};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }
`, ut = o.span`
  display: inline-flex;
  align-items: center;
`, ci = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(ht, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: s * 0.5,
    height: s * 0.5,
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",
        fill: "#50555C"
      }
    )
  }
) }), ht = o.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`, di = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(xt, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: s * 0.5,
    height: s * 0.5,
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",
        fill: "#50555C"
      }
    )
  }
) }), xt = o.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`, ft = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), pi = ({
  children: e = "Экспорт",
  icon: n = /* @__PURE__ */ t.jsx(ft, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...d
}) => {
  const p = async (b) => {
    if (s)
      try {
        await s();
      } catch (k) {
        console.error("Export error:", k);
      }
    d.onClick && d.onClick(b);
  };
  return /* @__PURE__ */ t.jsx(gt, { ...d, onClick: p, disabled: i || d.disabled, children: i ? /* @__PURE__ */ t.jsxs(bt, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(mt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    n,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, gt = o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: inherit;
  font-size: 18px;
  height: 40px;
  margin: auto 0 10px 0;
  transition: background-color 0.2s ease;
  position: relative;
  overflow: hidden;
  color: rgba(80, 85, 92, 1);

  &:hover {
    background-color: rgba(209, 213, 219, 1);
    color: black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`, bt = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, mt = o.div`
  height: 2px;
  width: 100%;
  background-color: #e0e0e0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ progress: e }) => e}%;
    background-color: #000;
    transition: width 0.3s ease;
  }
`, ui = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: d,
  options: p,
  name: b,
  disabled: k = !1,
  required: f = !1,
  ...g
}) => {
  const [x, m] = G.useState(!1), [h, u] = G.useState(!1), l = G.useRef(null), D = !!(n && !s && !x), y = (E) => {
    i && !k && i({
      target: { value: E, name: b }
    }), u(!1), m(!1);
  }, L = (E) => {
    l.current && !l.current.contains(E.target) && (u(!1), m(!1));
  }, S = () => {
    k || (u(!h), m(!h));
  };
  G.useEffect(() => (document.addEventListener("mousedown", L), () => {
    document.removeEventListener("mousedown", L);
  }), []);
  const I = p.find((E) => E.value === s), z = I ? I.label : "";
  return /* @__PURE__ */ t.jsxs(wt, { ref: l, ...g, children: [
    /* @__PURE__ */ t.jsxs(vt, { children: [
      /* @__PURE__ */ t.jsxs(
        yt,
        {
          hasError: r,
          isOpen: h,
          disabled: k,
          onClick: S,
          onFocus: () => !k && m(!0),
          onBlur: () => m(!1),
          tabIndex: k ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(kt, { children: z || e && /* @__PURE__ */ t.jsx(jt, { children: e }) }),
            /* @__PURE__ */ t.jsx(Ct, { isOpen: h, disabled: k, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: k ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx($t, { children: p.map((E) => /* @__PURE__ */ t.jsxs(Mt, { $isSelected: E.value === s, onClick: () => y(E.value), children: [
        /* @__PURE__ */ t.jsx(St, { $isSelected: E.value === s, children: E.value === s && /* @__PURE__ */ t.jsx(Tt, {}) }),
        /* @__PURE__ */ t.jsx(Dt, { children: E.label })
      ] }, E.value)) })
    ] }),
    n && /* @__PURE__ */ t.jsx(Lt, { isVisible: D, children: n }),
    r && d && /* @__PURE__ */ t.jsx(Et, { children: d }),
    /* @__PURE__ */ t.jsx(Pt, { name: b, value: s || "", onChange: () => {
    }, tabIndex: -1, required: f, children: p.map((E) => /* @__PURE__ */ t.jsx("option", { value: E.value, children: E.label }, E.value)) })
  ] });
}, wt = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, vt = o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, yt = o.div`
  border: 1px solid
    ${({ hasError: e, isOpen: n, disabled: s }) => s ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : n ? "rgba(0, 125, 136, 1)" : "rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  box-sizing: border-box;
  background-color: ${({ disabled: e }) => e ? "rgba(249, 250, 251, 1)" : "white"};
  color: ${({ disabled: e }) => e ? "rgba(156, 163, 175, 1)" : "black"};
  padding: 10px 15px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-height: 37.5px;

  &:hover {
    border-color: ${({ hasError: e, disabled: n, isOpen: s }) => n ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }
`, kt = o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, jt = o.span`
  color: rgba(80, 85, 92, 1);
`, Ct = o.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, $t = o.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 1001;
  max-height: 300px;
  overflow-y: auto;
`, Mt = o.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  text-align: left;
  background: ${({ $isSelected: e }) => e ? "rgba(232, 216, 216, 1)" : "transparent"};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`, St = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Tt = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Dt = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Lt = o.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, Et = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Pt = o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, hi = ({ checked: e = !1, onChange: n, className: s, label: i, disabled: r = !1 }) => {
  const [d, p] = B(!1), b = () => {
    r || !n || n(!e);
  }, k = (f) => {
    r || (f.key === "Enter" || f.key === " ") && (f.preventDefault(), b());
  };
  return /* @__PURE__ */ t.jsxs(Rt, { className: s, onClick: b, onKeyPress: k, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      It,
      {
        checked: e,
        isFocused: d,
        disabled: r,
        onMouseEnter: () => !r && p(!0),
        onMouseLeave: () => !r && p(!1),
        onFocus: () => !r && p(!0),
        onBlur: () => !r && p(!1),
        children: e && /* @__PURE__ */ t.jsx(Ft, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(zt, { disabled: r, children: i })
  ] });
}, Rt = o.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, It = o.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  border: 1px solid
    ${(e) => e.disabled ? e.checked ? "rgba(173, 179, 188, 1)" : "rgba(230, 230, 230, 1)" : e.checked || e.isFocused ? "rgba(0, 125, 136, 1)" : "rgba(173, 179, 188, 1)"};

  background-color: ${(e) => e.disabled ? e.checked ? "rgba(230, 230, 230, 1)" : "transparent" : e.checked ? "rgba(0, 125, 136, 1)" : "transparent"};

  box-shadow: ${(e) => e.disabled ? "none" : e.checked && e.isFocused ? "0 0 0 4px rgba(121, 159, 162, 0.33)" : "none"};

  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, zt = o.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, Ft = o.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, At = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", he = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Bt = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], xe = ({ prefix: e = "Дата:", value: n = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [d, p] = B(!1), [b, k] = B(/* @__PURE__ */ new Date()), [f, g] = B(n ? new Date(n) : null), [x, m] = B(!1), [h, u] = B(!1), l = Z(null), D = Z(null), y = Z(null);
  U(() => {
    const c = (j) => {
      l.current && !l.current.contains(j.target) && p(!1), D.current && !D.current.contains(j.target) && m(!1), y.current && !y.current.contains(j.target) && u(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []), U(() => {
    g(n ? new Date(n) : null);
  }, [n]);
  const L = (c) => {
    const j = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()));
    g(c);
    const M = j.toISOString().split("T")[0];
    i?.(M), p(!1);
  }, S = () => {
    const c = /* @__PURE__ */ new Date();
    k(c);
    const M = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate())).toISOString().split("T")[0];
    i?.(M), p(!1);
  }, I = () => {
    g(null), i?.(""), r?.(), p(!1);
  }, z = (c) => {
    const j = new Date(b);
    j.setMonth(c), k(j), m(!1);
  }, E = (c) => {
    const j = new Date(b);
    j.setFullYear(c), k(j), u(!1);
  }, F = () => {
    const c = b.getFullYear(), j = b.getMonth(), M = new Date(c, j, 1), P = new Date(c, j + 1, 0).getDate(), V = M.getDay() === 0 ? 6 : M.getDay() - 1, w = [], C = 35, a = new Date(c, j, 0).getDate();
    for (let T = 0; T < V; T++) {
      const O = a - V + T + 1, H = new Date(c, j - 1, O), X = !!(f && H.getDate() === f.getDate() && H.getMonth() === f.getMonth() && H.getFullYear() === f.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: X, onClick: () => L(H), otherMonth: !0, children: O }, `prev-${O}`)
      );
    }
    for (let T = 1; T <= P; T++) {
      const O = new Date(c, j, T), H = !!(f && O.getDate() === f.getDate() && O.getMonth() === f.getMonth() && O.getFullYear() === f.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: H, onClick: () => L(O), children: T }, `current-${T}`)
      );
    }
    const $ = C - w.length;
    for (let T = 1; T <= $; T++) {
      const O = new Date(c, j + 1, T), H = !!(f && O.getDate() === f.getDate() && O.getMonth() === f.getMonth() && O.getFullYear() === f.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: H, onClick: () => L(O), otherMonth: !0, children: T }, `next-${T}`)
      );
    }
    return w;
  }, R = () => f ? f.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, A = () => {
    const c = (/* @__PURE__ */ new Date()).getFullYear(), j = [];
    for (let M = c - 10; M <= c + 10; M++)
      j.push(M);
    return j;
  }, Y = (c) => {
    c.preventDefault(), c.stopPropagation(), m(!x), u(!1);
  }, _ = (c) => {
    c.preventDefault(), c.stopPropagation(), u(!h), m(!1);
  }, v = (c) => {
    const j = c === "next" ? 1 : -1, M = new Date(b);
    M.setMonth(M.getMonth() + j), k(M);
  };
  return /* @__PURE__ */ t.jsxs(_t, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(Ot, { onClick: () => p(!d), children: [
      e && /* @__PURE__ */ t.jsx(Yt, { children: e }),
      /* @__PURE__ */ t.jsx(Wt, { isEmpty: !f, children: R() }),
      /* @__PURE__ */ t.jsx(Nt, { src: At, alt: "Календарь" })
    ] }),
    d && /* @__PURE__ */ t.jsxs(Ht, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Vt, { children: [
        /* @__PURE__ */ t.jsx(
          me,
          {
            onClick: (c) => {
              c.preventDefault(), c.stopPropagation(), v("prev");
            },
            onMouseDown: (c) => c.preventDefault(),
            children: /* @__PURE__ */ t.jsx(we, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Zt, { children: [
          /* @__PURE__ */ t.jsxs(Gt, { ref: D, children: [
            /* @__PURE__ */ t.jsxs(Ut, { onClick: (c) => Y(c), onMouseDown: (c) => c.preventDefault(), children: [
              he[b.getMonth()],
              /* @__PURE__ */ t.jsx(fe, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(ge, { $width: 120, onClick: (c) => c.stopPropagation(), children: he.map((c, j) => /* @__PURE__ */ t.jsx(
              be,
              {
                $selected: j === b.getMonth(),
                onClick: (M) => {
                  M.stopPropagation(), z(j);
                },
                children: c
              },
              c
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(qt, { ref: y, children: [
            /* @__PURE__ */ t.jsxs(Xt, { onClick: (c) => _(c), onMouseDown: (c) => c.preventDefault(), children: [
              b.getFullYear(),
              /* @__PURE__ */ t.jsx(fe, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(ge, { $width: 80, onClick: (c) => c.stopPropagation(), children: A().map((c) => /* @__PURE__ */ t.jsx(
              be,
              {
                $selected: c === b.getFullYear(),
                onClick: (j) => {
                  j.stopPropagation(), E(c);
                },
                children: c
              },
              c
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          me,
          {
            onClick: (c) => {
              c.preventDefault(), c.stopPropagation(), v("next");
            },
            onMouseDown: (c) => c.preventDefault(),
            children: /* @__PURE__ */ t.jsx(we, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Jt, { children: Bt.map((c) => /* @__PURE__ */ t.jsx(Kt, { children: c }, c)) }),
      /* @__PURE__ */ t.jsx(Qt, { children: F() }),
      /* @__PURE__ */ t.jsxs(eo, { children: [
        /* @__PURE__ */ t.jsx(ve, { onClick: I, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(ve, { onClick: S, children: "Сегодня" })
      ] })
    ] })
  ] });
}, _t = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`, Ot = o.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 1);
  cursor: pointer;
  background-color: white;
  width: 100%;
  transition: border-color 0.2s ease;
  height: auto;
  max-height: 38px;
  box-sizing: border-box;
  color: black;

  &:hover {
    border-color: rgba(0, 125, 136, 1);
  }

  &:focus-within {
    border-color: rgba(0, 125, 136, 1);
  }
`, Yt = o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`, Wt = o.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Nt = o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Ht = o.div`
  position: fixed;
  top: unset;
  bottom: unset;
  left: unset;
  transform: translate(0, 0);
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 9999;
  width: 280px;
  color: black;
`, Vt = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Zt = o.div`
  display: flex;
  gap: 8px;
  color: black;
`, De = o.button`
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 5px;
  padding: 6px 8px;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  transition: all 0.2s ease;
  color: black;

  &:hover {
    background-color: rgba(232, 216, 216, 0.2);
  }
`, Ut = o(De)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Xt = o(De)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Gt = o.div`
  position: relative;
`, qt = o.div`
  position: relative;
`, fe = o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, ge = o.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({ $width: e }) => e}px;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  margin-top: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(209, 213, 219, 1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(80, 85, 92, 1);
    border-radius: 3px;
  }
`, be = o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, me = o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
`, we = o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, Jt = o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, Kt = o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, Qt = o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`, re = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;

  color: ${({ otherMonth: e }) => e ? "rgba(173, 179, 188, 1)" : "#000"};
  background-color: ${({ selected: e }) => e ? "rgba(237, 224, 224, 1)" : "transparent"};

  &:hover {
    background-color: ${({ selected: e }) => e ? "rgba(237, 224, 224, 1)" : "rgba(0, 125, 136, 0.1)"};
  }
`, eo = o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, ve = o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, to = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: d = !1,
  errorMessage: p,
  ...b
}) => {
  const [k, f] = G.useState(!1), g = !!(n && !s && !k), x = (u) => {
    if (!r) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(u);
        break;
      case "rubles": {
        const y = u.target.selectionStart, L = u.target.value;
        let S = L.replace(/[^\d]/g, "");
        if (S === "") {
          u.target.value = "", r(u);
          break;
        }
        const I = parseInt(S, 10);
        if (!isNaN(I)) {
          let z = I.toLocaleString("ru-RU");
          z += " ₽";
          const E = m(L, y || 0), F = h(z, E);
          u.target.value = z, r(u), setTimeout(() => {
            u.target.setSelectionRange(F, F);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const y = l.split(".");
        y.length > 2 && (l = y[0] + "." + y.slice(1).join("")), y.length === 2 && y[1].length > 2 && (l = y[0] + "." + y[1].slice(0, 2));
        const L = parseFloat(l);
        if (isNaN(L) || (L > 100 ? l = "100" : L < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const S = u.target.selectionStart || 0, I = l.replace(" %", "");
          u.target.value = l, r(u), setTimeout(() => {
            S < I.length && u.target.setSelectionRange(S, S);
          }, 0);
        } else
          u.target.value = l, r(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let D = l.split(" ").filter((y) => y.length > 0);
        D = D.slice(0, 3), l = D.map((y) => {
          if (y.startsWith("-") && (y = y.substring(1)), (y.match(/-/g) || []).length > 1) {
            const S = y.split("-");
            y = S[0] + "-" + S.slice(1).join("");
          }
          return y.includes("-") ? y.split("-").map((S, I) => S.length === 0 ? "" : (I > 0, S[0].toUpperCase() + S.slice(1).toLowerCase())).join("-") : y.length > 0 ? y[0].toUpperCase() + y.slice(1).toLowerCase() : "";
        }).join(" "), l.length > 0 && l[l.length - 1] !== " " && u.target.value.length > 0 && u.target.value[u.target.value.length - 1] === " " && (l += " "), l.length > 100 && (l = l.slice(0, 100)), u.target.value = l, r(u);
        break;
      case "doc":
        l = l.replace(/\D/g, ""), l.length > 4 && (l = `${l.slice(0, 4)} ${l.slice(4, 10)}`), l.length > 11 && (l = l.slice(0, 11)), u.target.value = l, r(u);
        break;
      case "date": {
        l = l.replace(/\D/g, ""), l.length > 4 ? l = `${l.slice(0, 2)}.${l.slice(2, 4)}.${l.slice(4, 8)}` : l.length > 2 && (l = `${l.slice(0, 2)}.${l.slice(2, 4)}`), l.length > 10 && (l = l.slice(0, 10)), s?.length > l.length && [3, 6].includes(l.length) && (l = l.slice(0, l.length - 1)), u.target.value = l, r(u);
        break;
      }
      default:
        r(u);
        break;
    }
  }, m = (u, l) => {
    let D = 0;
    for (let y = 0; y < Math.min(l, u.length); y++)
      /\d/.test(u[y]) && D++;
    return D;
  }, h = (u, l) => {
    let D = 0;
    for (let y = 0; y < u.length; y++) {
      if (D >= l)
        return y;
      /\d/.test(u[y]) && D++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(oo, { children: [
    /* @__PURE__ */ t.jsx(
      no,
      {
        ...b,
        value: s,
        placeholder: g ? "" : e,
        onFocus: () => f(!0),
        onBlur: (u) => {
          f(!1), b.onBlur?.(u);
        },
        onChange: x,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: d
      }
    ),
    n && /* @__PURE__ */ t.jsx(ro, { isVisible: g, children: n }),
    d && p && /* @__PURE__ */ t.jsx(io, { children: p })
  ] });
}, oo = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, no = o.input`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  max-width: 500px;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

  &:hover {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`, ro = o.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, io = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, xi = ({ total: e, current: n = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [d, p] = B(n), b = (f) => {
    f < 1 || f > r || f === d || (p(f), s?.(f));
  }, k = () => {
    const f = [];
    let x = 1, m = r;
    if (r > 5) {
      const h = Math.floor(2.5);
      x = Math.max(d - h, 1), m = Math.min(d + h, r), d <= h + 1 ? m = 5 : d >= r - h && (x = r - 5 + 1);
    }
    for (let h = x; h <= m; h++)
      f.push(
        /* @__PURE__ */ t.jsx(te, { active: h === d, onClick: () => b(h), children: h }, h)
      );
    return x > 1 && (x > 2 && f.unshift(/* @__PURE__ */ t.jsx(te, { children: "..." }, "start-ellipsis")), f.unshift(
      /* @__PURE__ */ t.jsx(te, { active: d === 1, onClick: () => b(1), children: "1" }, 1)
    )), m < r && (m < r - 1 && f.push(/* @__PURE__ */ t.jsx(te, { children: "..." }, "end-ellipsis")), f.push(
      /* @__PURE__ */ t.jsx(te, { active: r === d, onClick: () => b(r), children: r }, r)
    )), f;
  };
  return /* @__PURE__ */ t.jsxs(so, { children: [
    /* @__PURE__ */ t.jsx(ye, { disabled: d === 1, onClick: () => b(d - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: d === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    k(),
    /* @__PURE__ */ t.jsx(ye, { disabled: d === r, onClick: () => b(d + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: d === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, so = o.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, te = o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ active: e }) => e ? "white" : "black"};
  background-color: ${({ active: e }) => e ? "rgba(0, 125, 136, 1)" : "transparent"};

  &:hover {
    color: ${({ active: e }) => e ? "white" : "rgba(0, 125, 136, 1)"};
  }
`, ye = o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background-color: rgba(0, 125, 136, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`, fi = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: d,
  rows: p = 3,
  ...b
}) => {
  const [k, f] = G.useState(!1), g = !!(n && !s && !k);
  return /* @__PURE__ */ t.jsxs(ao, { children: [
    /* @__PURE__ */ t.jsx(
      lo,
      {
        ...b,
        value: s,
        placeholder: g ? "" : e,
        onFocus: () => f(!0),
        onBlur: (x) => {
          f(!1), b.onBlur?.(x);
        },
        onChange: i,
        hasError: r,
        rows: p
      }
    ),
    n && /* @__PURE__ */ t.jsx(co, { isVisible: g, children: n }),
    r && d && /* @__PURE__ */ t.jsx(po, { children: d })
  ] });
}, ao = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, lo = o.textarea`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  min-height: 38px;
  box-sizing: border-box;
  max-width: 500px;
  background-color: white;
  color: black;
  padding: 12px 15px;
  resize: vertical;
  font-family: inherit;

  &:hover {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`, co = o.label`
  position: absolute;
  left: 12px;
  top: 12px;
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, po = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, uo = ({
  title: e,
  onClose: n,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: d = !1,
  isSubmitting: p = !1,
  mode: b = "create",
  hideSaveButton: k = !1,
  hideCanselButton: f = !1,
  width: g = "560px",
  saveButtonText: x = "Сохранить",
  customLayout: m
}) => {
  const h = b === "view", u = Z(null);
  U(() => {
    const y = (S) => {
      S.key === "Escape" && n();
    };
    document.addEventListener("keydown", y);
    const L = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => u.current?.focus(), 0), () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = L;
    };
  }, [n]);
  const l = (y) => {
    y.target === y.currentTarget && n();
  }, D = (y) => {
    y.preventDefault(), s();
  };
  return /* @__PURE__ */ t.jsx(ho, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    xo,
    {
      ref: u,
      $width: g,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Le, { children: [
          /* @__PURE__ */ t.jsx(Ee, { children: e }),
          /* @__PURE__ */ t.jsx(fo, { type: "button", onClick: n, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        m ? /* @__PURE__ */ t.jsx(go, { children: m }) : null,
        /* @__PURE__ */ t.jsxs(bo, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(mo, { children: r }),
          /* @__PURE__ */ t.jsxs(wo, { children: [
            f ? null : /* @__PURE__ */ t.jsx(vo, { type: "button", onClick: D, children: "Отменить" }),
            !h && !k ? /* @__PURE__ */ t.jsx(
              yo,
              {
                type: "submit",
                disabled: d || p,
                children: p ? "Сохранение..." : x
              }
            ) : null
          ] })
        ] })
      ]
    }
  ) });
}, ho = o.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, xo = o.div`
  width: min(100%, ${({ $width: e }) => e});
  max-height: min(85vh, 720px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 16px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  outline: none;
`, Le = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
`, Ee = o.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  /* чтобы длинные заголовки не ломали верстку */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, fo = o.button`
  width: 40px;
  height: 40px;
  margin-top: 2px;

  display: grid;
  place-items: center;

  border: none;
  border-radius: 0;
  background: transparent;
  color: rgba(15, 23, 42, 0.75);
  cursor: pointer;
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;

  font-size: 26px;
  line-height: 1;

  &:hover {
    background: transparent;
    color: rgba(15, 23, 42, 0.9);
  }

  &:active {
    transform: none;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`, go = o.div`
  padding: 12px 18px 0 18px;
`, bo = o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, mo = o.div`
  padding: 12px 18px 16px 18px;
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: #111827;

  & > * {
    width: 100%;
    box-sizing: border-box;
  }
`, wo = o.div`
  padding: 12px 18px 18px 18px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`, vo = o.button`
  min-width: 140px;
  padding: 10px 16px;

  border: 1px solid rgba(15, 23, 42, 0.14);
  border-radius: 10px;

  background: #f3f4f6;
  color: #0f172a;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #e5e7eb;
  }

  &:active {
    transform: translateY(1px);
  }
`, yo = o(dt)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, ko = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], gi = ({
  value: e = "",
  placeholder: n = "Выберите период",
  options: s = ko,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: d
}) => {
  const [p, b] = B(!1), [k, f] = B(!1), [g, x] = B(""), [m, h] = B(""), [u, l] = B(""), D = Z(null), y = Z(null);
  U(() => {
    if (e === "Custom" && m && u) {
      const R = E(m), A = E(u);
      x(`С ${R} по ${A}`);
    } else {
      const R = s.find((A) => A.value === e);
      x(R ? R.label : "");
    }
  }, [e, s, m, u]), U(() => {
    const R = (A) => {
      D.current && !D.current.contains(A.target) && b(!1), k && y.current && !y.current.contains(A.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((v) => v.contains(A.target)) || f(!1));
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [k]);
  const L = (R) => {
    r?.(R.value), b(!1);
  }, S = () => {
    b(!1), d ? d() : f(!0);
  }, I = () => {
    r?.(""), x(""), h(""), l("");
  }, z = () => {
    if (m && u) {
      const R = E(m), A = E(u), Y = `С ${R} по ${A}`;
      r?.("Custom", m, u), x(Y), f(!1);
    }
  }, E = (R) => {
    const A = new Date(R), Y = String(A.getDate()).padStart(2, "0"), _ = String(A.getMonth() + 1).padStart(2, "0"), v = A.getFullYear();
    return `${Y}.${_}.${v}`;
  }, F = () => /* @__PURE__ */ t.jsxs(Io, { children: [
    /* @__PURE__ */ t.jsx(Le, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Ee, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(zo, { onClick: I, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(jo, { ref: D, children: [
      /* @__PURE__ */ t.jsxs(Co, { onClick: () => b(!p), children: [
        /* @__PURE__ */ t.jsx($o, { children: g || n }),
        /* @__PURE__ */ t.jsx(Mo, { $isOpen: p, children: "▼" })
      ] }),
      p && /* @__PURE__ */ t.jsxs(So, { children: [
        s.map((R) => /* @__PURE__ */ t.jsxs(To, { onClick: () => L(R), $isSelected: e === R.value, children: [
          /* @__PURE__ */ t.jsx(Do, { $isSelected: e === R.value, children: e === R.value && /* @__PURE__ */ t.jsx(Lo, {}) }),
          /* @__PURE__ */ t.jsx(Eo, { children: R.label })
        ] }, R.id)),
        i && /* @__PURE__ */ t.jsx(Po, { onClick: S, children: "Другой период" })
      ] })
    ] }),
    k && /* @__PURE__ */ t.jsx("div", { ref: y, children: /* @__PURE__ */ t.jsx(
      uo,
      {
        title: "",
        onClose: () => f(!1),
        onCancel: () => f(!1),
        onSave: (R) => {
          R.preventDefault(), z();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(F, {}),
        children: /* @__PURE__ */ t.jsxs(Ro, { children: [
          /* @__PURE__ */ t.jsx(ke, { children: /* @__PURE__ */ t.jsx(xe, { value: m, onChange: (R) => h(R) }) }),
          /* @__PURE__ */ t.jsx(ke, { children: /* @__PURE__ */ t.jsx(xe, { value: u, onChange: (R) => l(R) }) })
        ] })
      }
    ) })
  ] });
}, jo = o.div`
  position: relative;
  width: 245px;
`, Co = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  width: 100%;
  height: 20px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #adb3bc;
  }

  &:focus {
    outline: none;
    border-color: #007d88;
  }
`, $o = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Mo = o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, So = o.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 100;
  max-height: 350px;
  overflow-y: auto;
`, To = o.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  background: ${({ $isSelected: e }) => e ? "rgba(232, 216, 216, 1)" : "transparent"};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`, Do = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Lo = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Eo = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Po = o.div`
  display: flex;
  flex-direction: column;
  padding: 10px 12px 0 0;
  min-height: 38px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #007d88;
  cursor: pointer;
  text-align: center;
  width: auto;

  &:hover {
    background: #f5f5f5;
  }
`, Ro = o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ke = o.div`
  flex: 1;
`, Io = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, zo = o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 4px;
  margin-right: 40px;

  &:hover {
    text-decoration: underline;
  }
`, bi = ({
  name: e,
  value: n,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: d = "8 (999) 500-50-50",
  customPlaceholder: p,
  tabIndex: b,
  disabled: k = !1,
  hasError: f = !1,
  errorMessage: g
}) => {
  const [x, m] = G.useState(!1), h = G.useRef(null), u = !!(p && !n && !x), l = (S) => {
    const z = S.replace(/\D/g, "").slice(0, 11);
    let E = "";
    return z.length > 0 && (E += "8"), z.length > 1 && (E += ` (${z.slice(1, 4)}`), z.length > 4 && (E += `) ${z.slice(4, 7)}`), z.length > 7 && (E += `-${z.slice(7, 9)}`), z.length > 9 && (E += `-${z.slice(9, 11)}`), E;
  }, D = (S) => {
    const I = l(S.target.value), z = {
      ...S,
      target: {
        ...S.target,
        name: e,
        value: I
      }
    };
    s(z);
  }, y = (S) => {
    m(!1), i?.(S);
  }, L = (S) => {
    r?.(S);
  };
  return /* @__PURE__ */ t.jsxs(Fo, { children: [
    /* @__PURE__ */ t.jsx(
      Ao,
      {
        ref: h,
        name: e,
        type: "tel",
        value: n,
        onChange: D,
        onKeyPress: L,
        placeholder: u ? "" : d,
        maxLength: 18,
        tabIndex: b,
        disabled: k,
        hasError: f,
        onFocus: () => m(!0),
        onBlur: y,
        inputMode: "tel"
      }
    ),
    p && /* @__PURE__ */ t.jsx(Bo, { isVisible: u, children: p }),
    f && g && /* @__PURE__ */ t.jsx(_o, { children: g })
  ] });
}, Fo = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Ao = o.input`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

  &:hover {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }

  &:disabled {
    background-color: rgba(248, 249, 250, 0.9);
    cursor: not-allowed;
  }
`, Bo = o.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, _o = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, mi = ({ tabs: e, activeTab: n, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const d = e.find((p) => p.id === n)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Oo, { children: /* @__PURE__ */ t.jsxs(Yo, { children: [
      e.map((p) => /* @__PURE__ */ t.jsxs(Wo, { $isActive: n === p.id, onClick: () => s(p.id), $fontSize: r, children: [
        p.label,
        n === p.id && /* @__PURE__ */ t.jsx(No, {})
      ] }, p.id)),
      i && /* @__PURE__ */ t.jsx(Ho, { children: i })
    ] }) }),
    d && /* @__PURE__ */ t.jsx(Vo, { children: d })
  ] });
}, Oo = o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Yo = o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Wo = o.li`
  position: relative;
  padding: 12px 0;
  cursor: pointer;
  font-size: ${(e) => typeof e.$fontSize == "number" ? `${e.$fontSize}px` : e.$fontSize};
  font-weight: ${(e) => e.$isActive ? "600" : "400"};
  color: ${(e) => e.$isActive ? "rgba(0, 125, 136, 1)" : "rgba(107, 114, 128, 1)"};
  transition: all 0.2s ease;

  &:hover {
    color: rgba(0, 125, 136, 0.8);
  }
`, No = o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Ho = o.li`
  margin-left: auto;
  padding: 4px 0;
`, Vo = o.div`
  margin-top: 20px;
`, wi = ({
  mode: e,
  primaryValue: n,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: d,
  disabled: p = !1,
  hasError: b = !1,
  errorMessage: k = "",
  customIcon: f
}) => {
  const x = f || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(Go, { children: [
    /* @__PURE__ */ t.jsx(qo, { children: n || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(Jo, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(Zo, { children: [
    /* @__PURE__ */ t.jsxs(Uo, { children: [
      /* @__PURE__ */ t.jsx(Xo, { type: "text", value: n || "", placeholder: i, readOnly: !0, disabled: p }),
      n && !p && /* @__PURE__ */ t.jsx(Qo, { type: "button", onClick: d, "aria-label": "Очистить", children: "×" })
    ] }),
    !p && /* @__PURE__ */ t.jsx(Ko, { type: "button", onClick: r, "aria-label": "Выбрать", children: x }),
    b && k && /* @__PURE__ */ t.jsx(en, { children: k })
  ] });
}, Zo = o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Uo = o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Xo = o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, Go = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, qo = o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, Jo = o.span`
  font-size: 13px;
  color: #666;
`, Ko = o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`, Qo = o.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #999;
  font-size: 30px;

  &:hover {
    color: #666;
  }
`, en = o.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, Pe = o.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, vi = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(tn, { children: [
  "Всего: ",
  e
] }) }), tn = o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, yi = o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, ki = o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, on = o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, nn = o.span`
  position: absolute;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 24px;
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  color: black;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: rgba(0, 125, 136, 1);
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({ checked: e }) => e ? "translateX(26px)" : "translateX(0)"};
  }
`, rn = o.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, ji = ({ checked: e, onChange: n, disabled: s }) => {
  const i = () => {
    s || n(!e);
  };
  return /* @__PURE__ */ t.jsxs(on, { children: [
    /* @__PURE__ */ t.jsx(rn, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(nn, { checked: e, disabled: s })
  ] });
}, Ci = ({ id: e, name: n, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(sn, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(an, { type: "radio", id: e, name: n, checked: s, onChange: i }),
  r
] }), sn = o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, an = o.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(173, 179, 188, 1);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: rgba(249, 250, 250, 1);
  transition: all 0.2s ease;

  &:checked {
    border-color: rgba(0, 125, 136, 1);
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: rgba(0, 125, 136, 1);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`, $i = ({
  percentage: e,
  onChange: n,
  draggable: s = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const r = Z(null), [d, p] = B(!1), b = (x) => {
    !s || !n || (x.preventDefault(), p(!0), g(x));
  }, k = (x) => {
    !d || !n || g(x);
  }, f = () => {
    p(!1);
  }, g = (x) => {
    if (!r.current || !n) return;
    const m = r.current.getBoundingClientRect();
    let u = (x.clientX - m.left) / m.width * 100;
    u = Math.max(0, Math.min(100, u)), n(Math.round(u));
  };
  return U(() => {
    if (d)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", f);
      };
  }, [d]), /* @__PURE__ */ t.jsxs(ln, { ref: r, $draggable: s, onMouseDown: b, children: [
    /* @__PURE__ */ t.jsx(cn, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(dn, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(pn, { $percentage: e, $primaryColor: i.primary })
  ] });
}, ln = o.div`
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  cursor: ${(e) => e.$draggable ? "pointer" : "default"};

  &:hover {
    cursor: ${(e) => e.$draggable ? "pointer" : "default"};
  }
`, cn = o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, dn = o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, pn = o.div`
  position: absolute;
  left: ${(e) => e.$percentage}%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${(e) => e.$primaryColor};
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: left 0.1s ease;

  &:active {
    cursor: grabbing;
  }
`, un = ["zoomControl", "fullscreenControl"];
let ie = null;
const hn = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((n, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => n(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Mi = ({
  onLocationSelect: e,
  initialAddress: n = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: d = 12,
  height: p = 400,
  width: b = "100%",
  inputPlaceholder: k = "Введите адрес или название места",
  searchButtonLabel: f = "Найти",
  draggablePlacemark: g = !0,
  controls: x = un,
  showSearch: m = !0,
  className: h,
  style: u,
  onError: l
}) => {
  const [D, y] = B(null), [L, S] = B(n), [I, z] = B(n), [E, F] = B(!1), R = Z(null);
  U(() => {
    let _ = !1, v;
    return (async () => {
      try {
        const j = await hn(r);
        if (_ || !R.current) return;
        v = new j.Map(R.current, {
          center: [s, i],
          zoom: d,
          controls: x
        });
        const M = new j.Placemark([s, i], {}, { draggable: g });
        v.geoObjects.add(M), v.events.add("click", (W) => {
          const P = W.get("coords");
          A(P, M, v);
        }), M.events.add("dragend", () => {
          const W = M.geometry.getCoordinates();
          A(W, M, v);
        }), y(v), F(!0);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
    })(), () => {
      _ = !0, v && v.destroy();
    };
  }, [r, s, i, d, x, g, l]);
  const A = async (_, v, c) => {
    if (window.ymaps)
      try {
        const W = (await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();
        v.geometry.setCoordinates(_), c.panTo(_, { flying: !0 }), z(W), S(W), e(W, _[0], _[1]);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
  }, Y = async () => {
    if (!(!L.trim() || !window.ymaps || !D))
      try {
        const v = (await window.ymaps.geocode(L)).geoObjects.get(0);
        if (v) {
          const c = v.geometry.getCoordinates(), j = v.properties.get("boundedBy");
          D.setBounds(j, { checkZoomRange: !0 });
          const M = new window.ymaps.Placemark(c, {}, { draggable: g });
          D.geoObjects.removeAll(), D.geoObjects.add(M);
          const W = v.getAddressLine();
          z(W), e(W, c[0], c[1]), M.events.add("dragend", () => {
            const P = M.geometry.getCoordinates();
            A(P, M, D);
          });
        }
      } catch (_) {
        l && _ instanceof Error && l(_);
      }
  };
  return /* @__PURE__ */ t.jsxs(xn, { className: h, style: u, children: [
    m && /* @__PURE__ */ t.jsxs(fn, { children: [
      /* @__PURE__ */ t.jsx(
        to,
        {
          type: "text",
          value: L,
          onChange: (_) => S(_.target.value),
          placeholder: k,
          onKeyPress: (_) => _.key === "Enter" && Y(),
          disabled: !E
        }
      ),
      /* @__PURE__ */ t.jsx(gn, { onClick: Y, disabled: !E, children: f })
    ] }),
    /* @__PURE__ */ t.jsxs(mn, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: I || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(bn, { ref: R, $height: p, $width: b }),
    /* @__PURE__ */ t.jsx(wn, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, xn = o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, fn = o.div`
  display: flex;
  gap: 8px;
`, gn = o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, bn = o.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, mn = o.div`
  font-size: 14px;
  color: #374151;
`, wn = o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, Re = o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;
function je(e, n = "₽") {
  if (!e || e.trim() === "")
    return `0${n}`;
  const s = e.replace(/[^\d-]/g, "");
  if (!s || s === "-" || s === "")
    return `0${n}`;
  const i = parseInt(s, 10);
  if (isNaN(i))
    return `0${n}`;
  const r = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(i);
  return !0 ? `${r}${n}` : r;
}
function Si(e) {
  if (!e) return 0;
  const n = e.replace(/\D/g, "");
  return parseInt(n, 10);
}
const Ti = ({ title: e, data: n, maxValue: s, step: i, height: r = 300, titleFontSize: d }) => {
  const [p, b] = B(null), k = [];
  for (let g = 0; g <= s; g += i)
    k.push(g);
  const f = n.length > 0 ? n[0].bars.map((g) => ({ name: g.name, color: g.color })) : [];
  return /* @__PURE__ */ t.jsxs(vn, { children: [
    /* @__PURE__ */ t.jsxs(Pe, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Re, { style: { fontSize: d }, children: e }),
      /* @__PURE__ */ t.jsx(yn, { children: f.map((g, x) => /* @__PURE__ */ t.jsxs(kn, { children: [
        /* @__PURE__ */ t.jsx(jn, { color: g.color }),
        /* @__PURE__ */ t.jsx(Cn, { children: g.name })
      ] }, x)) })
    ] }),
    /* @__PURE__ */ t.jsxs($n, { height: r, children: [
      /* @__PURE__ */ t.jsx(Mn, { children: k.map((g, x) => /* @__PURE__ */ t.jsx(Sn, { children: g.toLocaleString() }, x)) }),
      /* @__PURE__ */ t.jsxs(Tn, { children: [
        /* @__PURE__ */ t.jsxs(Dn, { children: [
          k.map((g, x) => {
            const m = g / s * 100;
            return /* @__PURE__ */ t.jsx(Ln, { position: 100 - m }, `line-${x}`);
          }),
          n.map((g, x) => /* @__PURE__ */ t.jsxs(En, { onMouseEnter: () => b(x), onMouseLeave: () => b(null), children: [
            g.bars.map((m, h) => {
              const u = g.bars.slice(h + 1).reduce((l, D) => l + D.value, 0);
              return /* @__PURE__ */ t.jsx(
                Pn,
                {
                  height: m.value / s * 100,
                  offset: u / s * 100,
                  color: m.color,
                  isHovered: p !== null && p !== x
                },
                h
              );
            }),
            p === x && /* @__PURE__ */ t.jsxs(zn, { children: [
              /* @__PURE__ */ t.jsxs(Fn, { children: [
                /* @__PURE__ */ t.jsxs(An, { children: [
                  "Всего: ",
                  je(g.total.toString())
                ] }),
                g.bars.map((m, h) => /* @__PURE__ */ t.jsxs(Bn, { children: [
                  m.name,
                  ": ",
                  je(m.value.toString())
                ] }, h))
              ] }),
              /* @__PURE__ */ t.jsx(_n, {})
            ] })
          ] }, x))
        ] }),
        /* @__PURE__ */ t.jsx(Rn, { children: n.map((g, x) => /* @__PURE__ */ t.jsx(In, { style: { flex: 1, textAlign: "center" }, children: g.label }, x)) })
      ] })
    ] })
  ] });
}, vn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, yn = o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, kn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, jn = o.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, Cn = o.span`
  font-size: 14px;
  color: #4b5563;
`, $n = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Mn = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, Sn = o.span`
  font-size: 12px;
  color: #6b7280;
`, Tn = o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Dn = o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, Ln = o.div`
  position: absolute;
  top: ${(e) => e.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`, En = o.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2px;
  flex: 1;
  min-width: 0;
  position: relative;
  height: 100%;
  margin-bottom: 2px;
  z-index: 1;
`, Pn = o.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, Rn = o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, In = o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, zn = o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, Fn = o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, An = o.div`
  font-weight: 600;
  margin-bottom: 6px;
`, Bn = o.div`
  margin-bottom: 2px;
`, _n = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, On = Oe`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Di = ({
  title: e,
  data: n,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: d,
  minY: p,
  xStep: b,
  yStep: k,
  height: f = 300,
  showLegend: g = !0,
  xAxisCustomLabels: x,
  showTooltip: m = !0,
  titleFontSize: h = "30px"
}) => {
  const [u, l] = B(null), [D, y] = B({ x: 0, y: 0 }), L = Z(null), S = Z(null), I = Math.max(...n.map((v) => v.x), r), z = [];
  for (let v = 0; v <= I; v += b)
    z.push(v);
  const E = [];
  for (let v = p; v <= d; v += k)
    E.push(v);
  const F = x || z.map((v) => v.toString()), R = g ? Array.from(new Set(n.filter((v) => v.label).map((v) => v.label))).map((v) => {
    const c = n.find((j) => j.label === v);
    return { name: v, color: c.color };
  }) : [], A = {};
  n.forEach((v) => {
    const c = v.label || "default";
    A[c] || (A[c] = []), A[c].push(v);
  });
  const Y = (v) => v / I * 100, _ = (v) => {
    const c = d - p;
    return 100 - (v - p) / c * 100;
  };
  return U(() => {
    if (u && S.current) {
      const v = S.current.getBoundingClientRect(), c = Y(u.x) / 100 * v.width, j = _(u.y) / 100 * v.height;
      y({
        x: c + v.left,
        y: j + v.top
      });
    }
  }, [u, r, d, p]), /* @__PURE__ */ t.jsxs(Yn, { children: [
    /* @__PURE__ */ t.jsxs(Pe, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Re, { style: { fontSize: h }, children: e }),
      g && R.length > 0 && /* @__PURE__ */ t.jsx(Wn, { children: R.map((v, c) => /* @__PURE__ */ t.jsxs(Nn, { children: [
        /* @__PURE__ */ t.jsx(Hn, { color: v.color }),
        /* @__PURE__ */ t.jsx(Vn, { children: v.name })
      ] }, c)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Zn, { height: f, children: [
      /* @__PURE__ */ t.jsxs(Un, { children: [
        E.map((v, c) => /* @__PURE__ */ t.jsx(Xn, { children: v.toLocaleString() }, c)),
        /* @__PURE__ */ t.jsx(Ce, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Gn, { ref: S, children: [
        E.map((v, c) => /* @__PURE__ */ t.jsx(qn, { position: _(v) }, `hline-${c}`)),
        Object.values(A).map((v, c) => v.map((j, M) => {
          if (M === 0) return null;
          const W = v[M - 1], P = Y(W.x), V = _(W.y), w = Y(j.x), C = _(j.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${P}%`, y1: `${V}%`, x2: `${w}%`, y2: `${C}%`, stroke: j.color, strokeWidth: "1" })
            },
            `line-${c}-${M}`
          );
        })),
        n.map((v, c) => /* @__PURE__ */ t.jsx(
          Jn,
          {
            x: Y(v.x),
            y: _(v.y),
            color: v.color,
            onMouseEnter: () => l(v),
            onMouseLeave: () => l(null),
            isHovered: u?.label === v.label
          },
          c
        ))
      ] })
    ] }),
    m && u && /* @__PURE__ */ t.jsxs(er, { ref: L, style: { left: D.x, top: D.y }, children: [
      /* @__PURE__ */ t.jsxs(tr, { children: [
        u.name && /* @__PURE__ */ t.jsx(or, { children: u.name }),
        /* @__PURE__ */ t.jsx(nr, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(rr, {})
    ] }),
    /* @__PURE__ */ t.jsxs(Kn, { children: [
      F.map((v, c) => {
        const M = z[c] / I * 100;
        return /* @__PURE__ */ t.jsx(Qn, { style: { left: `${M}%`, transform: "translateX(-50%)" }, children: v }, c);
      }),
      s && /* @__PURE__ */ t.jsx(Ce, { children: s })
    ] })
  ] });
}, Yn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Wn = o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Nn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Hn = o.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Vn = o.span`
  font-size: 14px;
  color: #4b5563;
`, Zn = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Un = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Xn = o.span`
  font-size: 12px;
  color: #6b7280;
`, Ce = o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, Gn = o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, qn = o.div`
  position: absolute;
  top: ${(e) => e.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`, Jn = o.div`
  position: absolute;
  left: ${(e) => e.x}%;
  top: ${(e) => e.y}%;
  width: ${(e) => e.isHovered ? "8px" : "6px"};
  height: ${(e) => e.isHovered ? "8px" : "6px"};
  background-color: ${(e) => e.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
`, Kn = o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, Qn = o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, er = o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${On} 0.15s ease-out forwards;
`, tr = o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, or = o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, nr = o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, rr = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, Li = ({ images: e, initialIndex: n, onClose: s }) => {
  const [i, r] = B(n), [d, p] = B(0), b = () => {
    r((x) => x > 0 ? x - 1 : e.length - 1), p(0);
  }, k = () => {
    r((x) => x < e.length - 1 ? x + 1 : 0), p(0);
  }, f = () => {
    p((x) => (x + 90) % 360);
  }, g = (x) => {
    x.key === "Escape" ? s() : x.key === "ArrowLeft" ? b() : x.key === "ArrowRight" ? k() : (x.key === "r" || x.key === "к") && f();
  };
  return /* @__PURE__ */ t.jsx(ir, { onClick: s, onKeyDown: g, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(sr, { onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(ar, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(lr, { children: /* @__PURE__ */ t.jsx(cr, { onClick: f, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(dr, { children: [
      /* @__PURE__ */ t.jsx($e, { $position: "left", onClick: b, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(pr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: d }),
      /* @__PURE__ */ t.jsx($e, { $position: "right", onClick: k, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(ur, { children: e.map((x, m) => /* @__PURE__ */ t.jsx(
      hr,
      {
        $active: m === i,
        onClick: () => {
          r(m), p(0);
        }
      },
      m
    )) })
  ] }) });
}, ir = o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  outline: none;
`, sr = o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, ar = o.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }
`, lr = o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, cr = o.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(249, 250, 250, 1);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: white;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`, dr = o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, pr = o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, $e = o.button`
  position: absolute;
  ${({ $position: e }) => e}: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.9);
  }

  svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${({ $position: e }) => e}: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`, ur = o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, hr = o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, xr = ({ isOpen: e, callPhone: n, error: s, onClose: i }) => {
  const [r, d] = B(!1);
  if (!e) return null;
  const p = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), b = () => {
    p ? window.location.href = `tel:${n}` : (navigator.clipboard.writeText(n), d(!0), setTimeout(() => d(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(fr, { onClick: i, children: /* @__PURE__ */ t.jsxs(gr, { onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(br, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Me, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      mr,
      {
        onClick: b,
        title: p ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          n,
          !p && r && /* @__PURE__ */ t.jsx(wr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Me, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    s && /* @__PURE__ */ t.jsx(vr, { children: s })
  ] }) });
}, fr = o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`, gr = o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, br = o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Me = o.p`
  margin-bottom: 15px;
  color: #555;
`, mr = o.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: rgba(0, 125, 136, 1);
  position: relative;
  cursor: ${(e) => e.$clickable ? "pointer" : "default"};
  transition: all 0.2s;

  ${(e) => e.$clickable && `
        &:hover {
            color: rgba(0, 100, 120, 1);
            text-decoration: underline;
        }
        &:active {
            transform: scale(0.98);
        }
    `}
`, wr = o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, vr = o.div`
  color: #e74c3c;
  margin: 10px 0;
`, yr = Ae({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), Ei = ({
  items: e,
  bottomItems: n = [],
  logo: s,
  arrowIcon: i,
  collapsed: r,
  onToggle: d,
  selectedKey: p,
  onSelect: b,
  autoCollapseOnSelect: k = !1,
  width: f = "315px",
  collapsedWidth: g = "70px",
  className: x,
  style: m
}) => {
  const h = Be(yr), [u, l] = B(
    r ?? h.collapsed ?? !1
  ), [D, y] = B(null), [L, S] = B(
    p ?? h.selectedSideMenuItem ?? null
  ), [I, z] = B({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), E = Z(null), F = r ?? h.collapsed ?? u, R = (P) => {
    l(P), h.toggleCollapsed(), d?.(P);
  }, A = p ?? h.selectedSideMenuItem ?? L, Y = (P) => {
    S(P), h.setSelectedSideMenuItem(P);
  };
  U(() => {
    r !== void 0 && (l(r), r && y(null));
  }, [r]), U(() => {
    p !== void 0 && Y(p);
  }, [p]), U(() => {
    const P = () => z((V) => ({ ...V, visible: !1 }));
    return document.addEventListener("click", P), () => document.removeEventListener("click", P);
  }, []);
  const _ = () => {
    const P = !F;
    R(P), P && y(null);
  }, v = (P) => {
    P.disabled || P.hidden || (Y(P.key), b?.(P), P.onClick?.(P), k && (R(!0), y(null)));
  }, c = (P) => {
    y((V) => V === P ? null : P);
  }, j = (P, V) => {
    const w = (P.children?.length || 0) > 0;
    if (F && w) {
      V.stopPropagation();
      const C = V.currentTarget.getBoundingClientRect();
      z({
        visible: !0,
        x: C.right + 6,
        y: C.top,
        items: P.children || []
      });
      return;
    }
    w ? c(P.key) : v(P);
  }, M = (P, V = !1) => P.filter((w) => !w.hidden).map((w) => {
    const C = (w.children?.length || 0) > 0, a = D === w.key, $ = A === w.key || !!w.children && w.children.some((T) => T.key === A);
    return /* @__PURE__ */ t.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Tr,
        {
          $collapsed: F,
          $selected: $,
          onClick: (T) => j(w, T),
          $disabled: w.disabled,
          title: w.label,
          children: [
            w.icon && /* @__PURE__ */ t.jsx(Lr, { $collapsed: F, children: w.icon }),
            !F && /* @__PURE__ */ t.jsx(Dr, { children: w.label }),
            !F && C && /* @__PURE__ */ t.jsx(Pr, { $expanded: a, children: "▾" })
          ]
        }
      ),
      !F && C && a && /* @__PURE__ */ t.jsx(Er, { children: M(w.children || [], !0) })
    ] }, w.key);
  }), W = _e(() => I.visible ? /* @__PURE__ */ t.jsx(Ir, { style: { left: I.x, top: I.y }, children: I.items.map((P) => /* @__PURE__ */ t.jsx(
    zr,
    {
      onClick: () => {
        v(P), z({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: A === P.key,
      children: P.label
    },
    P.key
  )) }) : null, [I, A]);
  return /* @__PURE__ */ t.jsxs(
    kr,
    {
      ref: E,
      $collapsed: F,
      $width: f,
      $collapsedWidth: g,
      className: x,
      style: m,
      children: [
        /* @__PURE__ */ t.jsxs(jr, { children: [
          /* @__PURE__ */ t.jsx(Cr, { onClick: _, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx($r, { $collapsed: F, children: "❮" }) }),
          !F && s && /* @__PURE__ */ t.jsx(Mr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(Sr, { children: [
          /* @__PURE__ */ t.jsx(Se, { children: M(e) }),
          n.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Rr, {}),
            /* @__PURE__ */ t.jsx(Se, { children: M(n) })
          ] })
        ] }),
        W,
        /* @__PURE__ */ t.jsx(Fr, { $collapsed: F })
      ]
    }
  );
}, kr = o.div`
  width: ${({ $collapsed: e, $width: n, $collapsedWidth: s }) => e ? s : n};
  height: 100vh;
  background-color: rgba(249, 250, 250, 1);
  color: rgba(80, 85, 92, 1);
  position: relative;
  padding: 22px 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`, jr = o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`, Cr = o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`, $r = o.span`
  display: inline-block;
  transform: rotate(${({ $collapsed: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`, Mr = o.div`
  flex: 1;
  display: flex;
  align-items: center;
`, Sr = o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, Se = o.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`, Tr = o.div`
  display: flex;
  align-items: center;
  gap: ${({ $collapsed: e }) => e ? "0" : "12px"};
  padding: ${({ $collapsed: e }) => e ? "15px 0" : "15px 17px"};
  border-radius: 8px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};

  &:hover {
    background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`, Dr = o.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Lr = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({ $collapsed: e }) => e ? "24px" : "21px"};
`, Er = o.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Pr = o.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Rr = o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Ir = o.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, zr = o.div`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "transparent"};

  &:hover {
    background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`, Fr = o.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Ar = (e) => {
  const n = e.replace(/\D/g, ""), i = (n.startsWith("8") || n.length === 0 ? n : `8${n}`).slice(0, 11);
  let r = "";
  return i.length > 0 && (r += "8"), i.length > 1 && (r += ` (${i.slice(1, 4)}`), i.length > 4 && (r += `) ${i.slice(4, 7)}`), i.length > 7 && (r += `-${i.slice(7, 9)}`), i.length > 9 && (r += `-${i.slice(9, 11)}`), r;
}, Br = ({ value: e, onChange: n, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (d) => {
    const p = Ar(d.target.value);
    n(p);
  };
  return /* @__PURE__ */ t.jsx(_r, { type: "text", value: e, onChange: r, placeholder: s, maxLength: 18, tabIndex: i });
}, _r = o.input`
  width: 100%;
  height: 54px;
  font-size: 16px;
  border: 2px solid rgba(0, 125, 136, 0.5);
  border-radius: 8px;
  padding: 0 15px;
  color: rgba(0, 125, 136, 1);
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`, Ie = "http://95.163.226.24:8080/api", se = "access_token", ae = "refresh_token", J = {
  setTokens(e, n) {
    localStorage.setItem(se, e), localStorage.setItem(ae, n);
  },
  getAccessToken() {
    return localStorage.getItem(se);
  },
  getRefreshToken() {
    return localStorage.getItem(ae);
  },
  clear() {
    localStorage.removeItem(se), localStorage.removeItem(ae);
  }
};
async function ze(e, n = {}) {
  const { method: s = "GET", body: i, headers: r = {}, token: d } = n, p = async (k) => {
    const f = {
      "Content-Type": "application/json",
      ...r
    };
    k && (f.Authorization = `Bearer ${k}`);
    const g = e.startsWith("http") ? e : `${Ie}${e}`;
    return await fetch(g, {
      method: s,
      headers: f,
      body: i ? JSON.stringify(i) : void 0
    });
  }, b = async (k, f = !0) => {
    const g = await p(k);
    if (g.ok) {
      if (g.status === 204)
        return null;
      const m = await g.text();
      if (!m) return null;
      try {
        return JSON.parse(m);
      } catch {
        return m;
      }
    }
    if (g.status === 401 && f) {
      const m = await Or();
      if (m)
        return b(m, !1);
    }
    let x = `Request failed with status ${g.status}`;
    try {
      const m = await g.json();
      m && typeof m.error == "string" ? x = m.error : typeof m == "string" && (x = m);
    } catch {
      const m = await g.text();
      m && (x = m);
    }
    throw new Error(x);
  };
  return b(d);
}
async function Or() {
  const e = J.getRefreshToken(), n = J.getAccessToken();
  if (!e || !n) return null;
  const s = await fetch(`${Ie}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: n,
      refresh_token: e
    })
  });
  if (!s.ok)
    return J.clear(), null;
  const i = await s.json();
  if (i.access_token) {
    const r = i.refresh_token || e;
    return J.setTokens(i.access_token, r), i.access_token;
  }
  return J.clear(), null;
}
const Yr = (e, n) => ze("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: n
  }
}), Wr = (e, n, s) => ze("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: n,
    user_type: s
  }
}), Pi = ({
  onLoginSuccess: e,
  userType: n = "delivery_operator",
  title: s = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: r = "8 (xxx) xxx-xx-xx",
  supportPhone: d = "8 989 924 24 24",
  supportLinkUrl: p = "https://info.waypay.one",
  supportLinkText: b = "info.waypay.one",
  className: k,
  style: f,
  pollingIntervalMs: g = 3e3
}) => {
  const [x, m] = B(!1), [h, u] = B(""), [l, D] = B(!1), [y, L] = B(""), [S, I] = B(""), [z, E] = B(!1), F = Z(void 0);
  U(() => () => {
    F.current && clearInterval(F.current);
  }, []);
  const R = (c) => {
    const j = c.replace(/\D/g, "");
    return j ? j.startsWith("8") ? `+7${j.slice(1)}` : j.startsWith("7") ? `+${j}` : `+${j}` : "";
  }, A = () => {
    D(!1), F.current && window.clearInterval(F.current);
  }, Y = async (c) => {
    if (c.preventDefault(), !h) {
      I("Введите номер телефона");
      return;
    }
    m(!0), I("");
    const j = R(h);
    try {
      const M = await Yr(j, n);
      L(M.call_phone), D(!0), _(j, M.check_id);
    } catch (M) {
      console.error("Auth error:", M), I(
        "Не удалось инициировать авторизацию. Проверьте номер."
      );
    } finally {
      m(!1);
    }
  }, _ = (c, j) => {
    F.current && window.clearInterval(F.current), F.current = window.setInterval(() => {
      v(c, j);
    }, g);
  }, v = async (c, j) => {
    if (!z) {
      E(!0);
      try {
        const M = await Wr(c, j, n);
        M.access_token && M.refresh_token && (J.setTokens(M.access_token, M.refresh_token), F.current && window.clearInterval(F.current), D(!1), e(M.access_token));
      } catch (M) {
        console.error("Verification error:", M), I("Ошибка проверки авторизации");
      } finally {
        E(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(Nr, { className: k, style: f, children: [
    /* @__PURE__ */ t.jsxs(Hr, { children: [
      /* @__PURE__ */ t.jsxs(Vr, { onSubmit: Y, children: [
        /* @__PURE__ */ t.jsx(Zr, { children: s }),
        /* @__PURE__ */ t.jsx(Ur, { children: /* @__PURE__ */ t.jsx(Xr, { children: /* @__PURE__ */ t.jsx(
          Br,
          {
            value: h,
            onChange: (c) => u(c),
            placeholder: r
          }
        ) }) }),
        S && /* @__PURE__ */ t.jsx(Qr, { children: /* @__PURE__ */ t.jsx("span", { children: S }) }),
        /* @__PURE__ */ t.jsx(Gr, { type: "submit", disabled: x, children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(qr, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(Jr, { href: `tel:${d}`, children: d }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(Kr, { href: p, target: "_blank", rel: "noreferrer", children: b })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      xr,
      {
        isOpen: l,
        onClose: A,
        callPhone: y,
        error: S
      }
    )
  ] });
}, Nr = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`, Hr = o.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 1) 0%,
      rgba(37, 203, 161, 1) 100%
    );
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`, Vr = o.form`
  display: flex;
  flex-direction: column;
`, Zr = o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, Ur = o.div`
  margin-bottom: 25px;
`, Xr = o.div`
  position: relative;
  width: auto;
`, Gr = o.button`
  background: linear-gradient(
    90deg,
    rgba(0, 125, 136, 1) 0%,
    rgba(37, 203, 161, 1) 100%
  );
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 0.5) 0%,
      rgba(37, 203, 161, 0.5) 100%
    );
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`, qr = o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, Jr = o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Kr = o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Qr = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff6f5;
  color: #b42318;
  border: 1px solid #f8d7da;
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  box-shadow: 0 6px 14px rgba(180, 35, 24, 0.08);
`, ei = (e) => {
  let n = 0;
  for (let i = 0; i < e.length; i++)
    n = e.charCodeAt(i) + ((n << 5) - n);
  return `hsl(${Math.abs(n % 360)}, 60%, 60%)`;
}, Ri = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Ii = (e, n = 100) => {
  const s = document.createElement("canvas");
  s.width = n, s.height = n;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = ei(e);
  i.fillStyle = r, i.beginPath(), i.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const d = n / 2;
  i.font = `bold ${d}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const p = d * 0.1;
  return i.fillText(e, n / 2, n / 2 + p), s.toDataURL("image/png");
}, zi = (e) => {
  if (!e) return "";
  const n = typeof e == "string" ? new Date(e) : e;
  if (isNaN(n.getTime())) return "";
  const s = n.getDate().toString().padStart(2, "0"), i = (n.getMonth() + 1).toString().padStart(2, "0"), r = n.getFullYear();
  return `${s}-${i}-${r}`;
};
function Fi(e) {
  return new Date(e);
}
const ti = (e) => {
  let n;
  try {
    if (e instanceof Date)
      n = e;
    else if (typeof e == "string" || typeof e == "number")
      n = new Date(e);
    else
      throw new Error("Неподдерживаемый тип данных");
    if (isNaN(n.getTime()))
      return "неверная дата";
    const s = /* @__PURE__ */ new Date();
    if (n > s) {
      const g = Math.floor((n.getTime() - s.getTime()) / 1e3), x = Math.floor(g / 60), m = Math.floor(x / 60), h = Math.floor(m / 24);
      return g < 10 ? "скоро" : g < 60 ? `через ${g} секунд` : x === 1 ? "через минуту" : x < 60 ? `через ${x} минут` : m === 1 ? "через час" : m < 24 ? `через ${m} часов` : h === 1 ? "завтра" : h < 7 ? `через ${h} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - n.getTime()) / 1e3), r = Math.floor(i / 60), d = Math.floor(r / 60), p = Math.floor(d / 24), b = Math.floor(p / 7), k = Math.floor(p / 30), f = Math.floor(p / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const g = Math.max(1, i);
      return g === 1 ? "секунду назад" : g < 5 ? `${g} секунды назад` : `${g} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : d < 24 ? d === 1 ? "час назад" : d < 5 ? `${d} часа назад` : `${d} часов назад` : p < 7 ? p === 1 ? "вчера" : p === 2 ? "позавчера" : `${p} дня назад` : b < 4 ? b === 1 ? "неделю назад" : b < 5 ? `${b} недели назад` : `${b} недель назад` : k < 12 ? k === 1 ? "месяц назад" : k < 5 ? `${k} месяца назад` : `${k} месяцев назад` : f === 1 ? "год назад" : f < 5 ? `${f} года назад` : `${f} лет назад`;
  } catch (s) {
    return console.error("Ошибка форматирования относительного времени:", s), "ошибка даты";
  }
}, oi = (e) => {
  try {
    return e.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return "неверная дата";
  }
}, Ai = (e, n = {}) => {
  const { useExactAfterMonths: s = 6, includeTime: i = !0 } = n, r = new Date(e);
  return isNaN(r.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= s ? i ? oi(r) : r.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : ti(r);
};
export {
  Ie as API_BASE_URL,
  ai as AddButton,
  xr as AuthCallModal,
  Pi as AuthPage,
  li as BackButton,
  uo as BaseModal,
  hi as Checkbox,
  Ti as ColumnChart,
  Te as ContextMenu,
  vi as CountInfoTitle,
  xe as CustomCalendar,
  to as CustomInput,
  Br as CustomPhoneInput,
  ui as CustomSelect,
  si as CustomTable,
  fi as CustomTextArea,
  Re as CustomTitle,
  dt as DefaultButton,
  ci as DeleteButton,
  di as EditButton,
  wi as EntitySelectContainer,
  pi as ExportButton,
  yi as InputTitle,
  ki as ModalInfoTitle,
  xi as Pagination,
  gi as PeriodField,
  bi as PhoneModalInput,
  Li as PhotoViewerModal,
  $i as ProgressBar,
  Ci as RadioButton,
  Di as ScatterPlot,
  Ei as SideMenu,
  yr as SideMenuContext,
  mi as Tabs,
  Pe as TitleField,
  ji as ToggleSwitch,
  Mi as YandexMapSelector,
  ze as apiRequest,
  Wr as confirmCallAuth,
  zi as formatDate,
  oi as formatExactDate,
  je as formatMoney,
  ti as formatRelativeTime,
  Ai as formatRelativeTimeExtended,
  Ii as generateAvatar,
  Ri as getInitials,
  Yr as initiateCallAuth,
  Fi as parseDateInput,
  Si as parseMoney,
  ei as stringToColor
};
