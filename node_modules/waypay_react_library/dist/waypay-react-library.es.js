import q, { useRef as X, useState as B, useEffect as U, createContext as Fe, useContext as Ae, useMemo as _e } from "react";
import n, { keyframes as Oe } from "styled-components";
import { motion as J, AnimatePresence as le } from "framer-motion";
var re = { exports: {} }, ee = {};
var ce;
function Ne() {
  if (ce) return ee;
  ce = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(r, s, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      c = {};
      for (var g in s)
        g !== "key" && (c[g] = s[g]);
    } else c = s;
    return s = c.ref, {
      $$typeof: e,
      type: r,
      key: u,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return ee.Fragment = o, ee.jsx = i, ee.jsxs = i, ee;
}
var te = {};
var de;
function We() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === A ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case P:
          return "Fragment";
        case E:
          return "Profiler";
        case k:
          return "StrictMode";
        case T:
          return "Suspense";
        case V:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case l:
            return "Portal";
          case O:
            return a.displayName || "Context";
          case R:
            return (a._context.displayName || "Context") + ".Consumer";
          case F:
            var C = a.render;
            return a = a.displayName, a || (a = C.displayName || C.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case z:
            return C = a.displayName || null, C !== null ? C : e(a.type) || "Memo";
          case N:
            C = a._payload, a = a._init;
            try {
              return e(a(C));
            } catch {
            }
        }
      return null;
    }
    function o(a) {
      return "" + a;
    }
    function i(a) {
      try {
        o(a);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var I = C.error, f = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return I.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), o(a);
      }
    }
    function r(a) {
      if (a === P) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === N)
        return "<...>";
      try {
        var C = e(a);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var a = w.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (p.call(a, "key")) {
        var C = Object.getOwnPropertyDescriptor(a, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function g(a, C) {
      function I() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: I,
        configurable: !0
      });
    }
    function y() {
      var a = e(this.type);
      return H[a] || (H[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function b(a, C, I, f, L, S) {
      var _ = I.ref;
      return a = {
        $$typeof: d,
        type: a,
        key: C,
        props: I,
        _owner: f
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: y
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
        value: L
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, C, I, f, L, S) {
      var _ = C.children;
      if (_ !== void 0)
        if (f)
          if ($(_)) {
            for (f = 0; f < _.length; f++)
              x(_[f]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(_);
      if (p.call(C, "key")) {
        _ = e(a);
        var G = Object.keys(C).filter(function(Q) {
          return Q !== "key";
        });
        f = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", M[_ + f] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          _,
          G,
          _
        ), M[_ + f] = !0);
      }
      if (_ = null, I !== void 0 && (i(I), _ = "" + I), u(C) && (i(C.key), _ = "" + C.key), "key" in C) {
        I = {};
        for (var K in C)
          K !== "key" && (I[K] = C[K]);
      } else I = C;
      return _ && g(
        I,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), b(
        a,
        _,
        I,
        s(),
        L,
        S
      );
    }
    function x(a) {
      v(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === N && (a._payload.status === "fulfilled" ? v(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function v(a) {
      return typeof a == "object" && a !== null && a.$$typeof === d;
    }
    var h = q, d = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), O = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), z = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), A = /* @__PURE__ */ Symbol.for("react.client.reference"), w = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, $ = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var Y, H = {}, Z = h.react_stack_bottom_frame.bind(
      h,
      c
    )(), j = D(r(c)), M = {};
    te.Fragment = P, te.jsx = function(a, C, I) {
      var f = 1e4 > w.recentlyCreatedOwnerStacks++;
      return m(
        a,
        C,
        I,
        !1,
        f ? Error("react-stack-top-frame") : Z,
        f ? D(r(a)) : j
      );
    }, te.jsxs = function(a, C, I) {
      var f = 1e4 > w.recentlyCreatedOwnerStacks++;
      return m(
        a,
        C,
        I,
        !0,
        f ? Error("react-stack-top-frame") : Z,
        f ? D(r(a)) : j
      );
    };
  })()), te;
}
var pe;
function Ye() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? re.exports = Ne() : re.exports = We()), re.exports;
}
var t = Ye();
const De = ({ x: e, y: o, items: i, onClose: r, ...s }) => {
  const c = X(null), [u, g] = B(null);
  U(() => {
    const h = (d) => {
      c.current && !c.current.contains(d.target) && r();
    };
    return document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [r]);
  const b = (() => {
    if (!c.current) return { x: e, y: o };
    const h = c.current.offsetWidth, d = c.current.offsetHeight, l = window.innerWidth, P = window.innerHeight;
    let k = e, E = o;
    return k + h > l && (k = e - h), E + d > P && (E = o - d), { x: k, y: E };
  })(), m = (h, d) => {
    h.submenu ? g(u === d ? null : d) : h.action && (h.action(), r());
  }, x = (h) => {
    i[h].submenu && g(h);
  }, v = (h) => {
    const d = h.relatedTarget;
    c.current?.contains(d) || g(null);
  };
  return /* @__PURE__ */ t.jsx(
    He,
    {
      ref: c,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: b.y,
        left: b.x
      },
      onClick: (h) => h.stopPropagation(),
      onMouseLeave: v,
      ...s,
      children: i.map((h, d) => /* @__PURE__ */ t.jsxs(Ve, { $hasSubmenu: !!h.submenu, $disabled: h.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ze,
          {
            onClick: (l) => {
              l.stopPropagation(), h.disabled || m(h, d);
            },
            onMouseEnter: () => !h.disabled && x(d),
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
        h.submenu && u === d && /* @__PURE__ */ t.jsx(
          qe,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(De, { x: 0, y: -d * 40, items: h.submenu, onClose: () => g(null) })
          }
        )
      ] }, d))
    }
  );
}, He = n(J.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, Ve = n.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, Ze = n(J.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: o }) => o ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Ue = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, Xe = n.span`
  color: #666;
  margin-left: 8px;
`, qe = n(J.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, yi = ({
  columns: e,
  data: o,
  onRowDoubleClick: i,
  contextMenuActions: r = [],
  onSort: s,
  sortConfig: c,
  onRowClick: u,
  selectedRow: g,
  fixedHeight: y,
  hasTotalsRow: b,
  debtChecker: m,
  rowStyles: x = {},
  isLoading: v
}) => {
  const [h, d] = B(null), [l, P] = B(null), k = X(null), E = X(null), R = 500, O = g !== void 0 ? g : h, F = (j) => {
    !e[j].isSortable || !s || s(j);
  }, V = m || ((j) => {
    const M = j[8];
    return typeof M == "string" ? parseFloat(M.replace(/[^\d.]/g, "")) > 0 : !1;
  }), z = (j) => {
    g === void 0 && d(j === O ? null : j), u && u(o[j], j);
  }, N = (j, M) => {
    i && i(j, M);
  }, W = (j, M) => {
    if (r.length === 0) return;
    j.preventDefault();
    const a = "touches" in j ? j.touches[0].clientX : j.clientX, C = "touches" in j ? j.touches[0].clientY : j.clientY;
    P({
      x: a,
      y: C,
      rowIndex: M
    });
  }, A = (j, M) => {
    j.preventDefault(), W(j, M);
  }, w = (j, M) => {
    r.length !== 0 && (E.current && clearTimeout(E.current), E.current = window.setTimeout(() => {
      W(j, M);
    }, R));
  }, p = () => {
    E.current && (clearTimeout(E.current), E.current = null);
  }, $ = () => {
    E.current && window.clearTimeout(E.current);
  }, D = () => {
    P(null);
  };
  U(() => {
    const j = () => {
      l && D();
    };
    return document.addEventListener("click", j), () => {
      document.removeEventListener("click", j), E.current && clearTimeout(E.current);
    };
  }, [l]);
  const Y = (j, M, a) => {
    if (M)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const C = x[j] || {};
    return j === O ? {
      backgroundColor: C.backgroundColor || "#007D88",
      color: C.color || "#FFFFFF",
      fontWeight: C.fontWeight || "normal"
    } : a ? {
      backgroundColor: C.backgroundColor || "#E8D8D8",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    } : o[j][o[j].length - 1] === !1 ? {
      backgroundColor: C.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: C.fontWeight || "normal"
    } : {
      backgroundColor: C.backgroundColor || "#FFFFFF",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    };
  }, H = (j, M, a) => {
    if (M) return "#FFFFFF";
    const C = Y(j, M, a);
    return C.hoverBackgroundColor ? C.hoverBackgroundColor : j === O ? "#007D88" : a ? "#E8D8D8CC" : o[j][o[j].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, Z = () => {
    if (!l || r.length === 0) return null;
    const j = (typeof r == "function" ? r(o[l.rowIndex]) : r).filter(
      (M) => typeof M == "object" && (typeof M.shouldShow != "function" || M.shouldShow(o[l.rowIndex]))
    );
    return j.length === 0 ? null : /* @__PURE__ */ t.jsx(
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
        onClick: (M) => M.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          De,
          {
            items: j.map((M) => {
              const a = {
                label: M.label,
                color: M.color,
                disabled: M.disabled
              };
              return M.getSubmenu ? a.submenu = M.getSubmenu(o[l.rowIndex]) : M.action && (a.action = () => {
                M.action(o[l.rowIndex], l.rowIndex), D();
              }), a;
            }),
            onClose: D,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(Ke, { ref: k, children: v ? /* @__PURE__ */ t.jsx(Ge, { children: /* @__PURE__ */ t.jsx(Je, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Qe, { children: [
      /* @__PURE__ */ t.jsx(tt, { children: /* @__PURE__ */ t.jsx(ue, { children: e.map(
        (j, M) => !j.isHidden && /* @__PURE__ */ t.jsx(
          ot,
          {
            $isSortable: j.isSortable,
            $isActive: c?.key === M,
            onClick: () => F(M),
            $align: j.align || "center",
            $isFirst: M === 0,
            $isLast: M === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(rt, { $align: j.align || "center", children: [
              j.name,
              j.isSortable && /* @__PURE__ */ t.jsx(
                it,
                {
                  $direction: c?.key === M ? c.direction : "asc",
                  animate: {
                    rotate: c?.key === M && c.direction === "desc" ? 180 : 0,
                    color: c?.key === M ? "#007D88" : "#6B7280"
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
          M
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(nt, { $fixedHeight: y, children: /* @__PURE__ */ t.jsx(le, { children: o.map((j, M) => {
        const a = !!(b && M === o.length - 1), C = !!(!a && V(j)), I = Y(M, a, C), f = H(M, a, C);
        return /* @__PURE__ */ t.jsx(
          ue,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: I.backgroundColor || "#FFFFFF",
              color: I.color || "inherit",
              fontWeight: I.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: M === o.length - 1,
            $isSelected: M === O,
            $isTotalsRow: a,
            onClick: () => !a && z(M),
            onDoubleClick: () => !a && N(j, M),
            onContextMenu: (L) => !a && A(L, M),
            onTouchStart: (L) => !a && w(L, M),
            onTouchEnd: p,
            onTouchMove: $,
            whileHover: a ? {} : {
              backgroundColor: f,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: I.backgroundColor || "#FFFFFF",
              color: I.color || "inherit",
              fontWeight: I.fontWeight || "normal"
            },
            children: j.map(
              (L, S) => !e[S]?.isHidden && /* @__PURE__ */ t.jsx(
                st,
                {
                  $align: e[S]?.align || "center",
                  $isFirst: S === 0,
                  $isLast: S === j.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && S < j.findIndex((_) => _ === "Итого:"),
                  children: L
                },
                S
              )
            )
          },
          `row-${M}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(le, { children: Z() })
  ] }) });
}, Ge = n.div`
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
`, Je = n.div`
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
`, Ke = n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, Qe = n.table`
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
`, et = n(J.div)`
  z-index: 1000;
  pointer-events: auto;
`, tt = n.thead`
  text-align: center;
  position: relative;
`, nt = n.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, ue = n(J.tr)`
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
    display: ${({ $isLast: e, $isTotalsRow: o }) => e || o ? "none" : "block"};
  }
`, ot = n.th`
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
`, rt = n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, it = n(J.span)`
  display: inline-flex;
  align-items: center;
`, st = n.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: o }) => e || o ? "none" : "0.5px solid #d1d5db"};
`, ki = ({ onClick: e, tooltip: o, size: i = 32, margin: r }) => /* @__PURE__ */ t.jsx(at, { onClick: e, size: i, margin: r, title: o, children: /* @__PURE__ */ t.jsx(lt, { size: i }) }), at = n.button`
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
`, lt = n.div`
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
`, Te = "/api";
async function oe(e, o = {}) {
  const {
    method: i = "GET",
    body: r,
    headers: s = {},
    token: c,
    withCredentials: u = !0,
    isFormData: g = !1
  } = o, y = async (m) => {
    const x = {
      ...s
    };
    g || (x["Content-Type"] = "application/json"), m && (x.Authorization = `Bearer ${m}`);
    const v = e.startsWith("http") ? e : `${Te}${e}`;
    let h;
    return r && (g ? h = r : h = JSON.stringify(r)), await fetch(v, {
      method: i,
      headers: x,
      body: h,
      credentials: u ? "include" : "same-origin"
    });
  }, b = async (m, x = !0) => {
    const v = await y(m);
    if (v.ok) {
      if (v.status === 204)
        return null;
      const d = await v.text();
      if (!d) return null;
      try {
        return JSON.parse(d);
      } catch {
        return d;
      }
    }
    if (v.status === 401 && x) {
      const d = await ct();
      if (d)
        return b(d, !1);
    }
    let h = `Request failed with status ${v.status}`;
    try {
      const d = await v.text();
      if (d)
        try {
          const l = JSON.parse(d);
          l && typeof l.error == "string" ? h = l.error : typeof l == "string" ? h = l : typeof l?.message == "string" && (h = l.message);
        } catch {
          h = d;
        }
    } catch {
    }
    throw new Error(h);
  };
  return b(c);
}
async function ct() {
  const e = await fetch(`${Te}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  if (!e.ok)
    return null;
  const o = await e.json();
  return o.access_token ? o.access_token : null;
}
const ji = {
  async isAuthenticated() {
    try {
      return !!(await this.getSessionInfo())?.client?.id;
    } catch {
      return !1;
    }
  },
  async getSessionInfo() {
    try {
      return await oe("/auth/session/info", {
        method: "GET"
      });
    } catch {
      return null;
    }
  },
  async logout(e) {
    try {
      await oe("/auth/session/revoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: e ? { token_id: e } : {}
      });
    } catch (o) {
      throw console.error("Logout error:", o), o;
    }
  },
  async getClientId() {
    return (await this.getSessionInfo())?.client?.id || null;
  },
  async hasPin() {
    return (await this.getSessionInfo())?.has_pin || !1;
  }
}, dt = n.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: rgba(0, 125, 136, 1);
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: white;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: ${({ disabled: e }) => e ? 0.7 : 1};

  &:hover {
    background-color: ${({ disabled: e }) => e ? "rgba(0, 125, 136, 1)" : "rgba(0, 150, 163, 1)"};
  }
`, Ci = ({ children: e, onClick: o, disabled: i, ...r }) => /* @__PURE__ */ t.jsxs(dt, { onClick: o, disabled: i, ...r, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "currentColor"
    }
  ) }),
  e
] }), ae = ({
  children: e = "Подтвердить",
  icon: o,
  disabled: i = !1,
  bg: r,
  hoverBg: s,
  disabledBg: c,
  textColor: u,
  fullWidth: g = !1,
  minWidth: y,
  width: b,
  isPrimary: m = !0,
  ...x
}) => {
  const h = r ? {
    bg: r,
    hoverBg: s || r,
    disabledBg: c || r,
    textColor: u || (m ? "white" : "black")
  } : m ? {
    bg: "rgba(0, 125, 136, 1)",
    hoverBg: "rgba(0, 150, 163, 1)",
    disabledBg: "rgba(102, 177, 184, 1)",
    textColor: "white"
  } : {
    bg: "rgba(209, 213, 219, 1)",
    hoverBg: "rgba(209, 233, 239, 1)",
    disabledBg: "rgba(209, 213, 219, 0.7)",
    textColor: "black"
  };
  return /* @__PURE__ */ t.jsxs(
    pt,
    {
      disabled: i,
      $bg: h.bg,
      $hoverBg: h.hoverBg,
      $disabledBg: h.disabledBg,
      $textColor: h.textColor,
      $fullWidth: g,
      $minWidth: y,
      $width: b,
      ...x,
      children: [
        o && /* @__PURE__ */ t.jsx(ut, { children: o }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, pt = n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled: e, $bg: o, $disabledBg: i }) => e ? i : o};
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $textColor: e }) => e};
  font-size: 18px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({ disabled: e }) => e ? 0.7 : 1};
  width: ${({ $fullWidth: e, $width: o }) => e ? "100%" : o ? typeof o == "number" ? `${o}px` : o : "auto"};
  min-width: ${({ $minWidth: e }) => e || "auto"};

  &:hover {
    background-color: ${({ disabled: e, $hoverBg: o, $disabledBg: i }) => e ? i : o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({ $bg: e }) => e === "rgba(209, 213, 219, 1)" ? "rgba(209, 233, 239, 1)" : "rgba(156, 163, 175, 0.5)"};
  }
`, ut = n.span`
  display: inline-flex;
  align-items: center;
`, $i = ({ onClick: e, tooltip: o, size: i = 32 }) => /* @__PURE__ */ t.jsx(ht, { onClick: e, size: i, title: o, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: i * 0.5,
    height: i * 0.5,
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
) }), ht = n.button`
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
`, Mi = ({ onClick: e, tooltip: o, size: i = 32 }) => /* @__PURE__ */ t.jsx(xt, { onClick: e, size: i, title: o, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: i * 0.5,
    height: i * 0.5,
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
) }), xt = n.button`
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
`, gt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), Si = ({
  children: e = "Экспорт",
  icon: o = /* @__PURE__ */ t.jsx(gt, {}),
  onExport: i,
  isExporting: r = !1,
  exportProgress: s = 0,
  ...c
}) => {
  const u = async (g) => {
    if (i)
      try {
        await i();
      } catch (y) {
        console.error("Export error:", y);
      }
    c.onClick && c.onClick(g);
  };
  return /* @__PURE__ */ t.jsx(ft, { ...c, onClick: u, disabled: r || c.disabled, children: r ? /* @__PURE__ */ t.jsxs(bt, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      s,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(mt, { progress: s })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    o,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, ft = n.button`
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
`, bt = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, mt = n.div`
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
`, Li = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: i,
  onChange: r,
  hasError: s = !1,
  errorMessage: c,
  options: u,
  name: g,
  disabled: y = !1,
  required: b = !1,
  ...m
}) => {
  const [x, v] = q.useState(!1), [h, d] = q.useState(!1), l = q.useRef(null), P = !!(o && !i && !x), k = (T) => {
    r && !y && r({
      target: { value: T, name: g }
    }), d(!1), v(!1);
  }, E = (T) => {
    l.current && !l.current.contains(T.target) && (d(!1), v(!1));
  }, R = () => {
    y || (d(!h), v(!h));
  };
  q.useEffect(() => (document.addEventListener("mousedown", E), () => {
    document.removeEventListener("mousedown", E);
  }), []);
  const O = u.find((T) => T.value === i), F = O ? O.label : "";
  return /* @__PURE__ */ t.jsxs(wt, { ref: l, ...m, children: [
    /* @__PURE__ */ t.jsxs(vt, { children: [
      /* @__PURE__ */ t.jsxs(
        yt,
        {
          hasError: s,
          isOpen: h,
          disabled: y,
          onClick: R,
          onFocus: () => !y && v(!0),
          onBlur: () => v(!1),
          tabIndex: y ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(kt, { children: F || e && /* @__PURE__ */ t.jsx(jt, { children: e }) }),
            /* @__PURE__ */ t.jsx(Ct, { isOpen: h, disabled: y, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: y ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx($t, { children: u.map((T) => /* @__PURE__ */ t.jsxs(Mt, { $isSelected: T.value === i, onClick: () => k(T.value), children: [
        /* @__PURE__ */ t.jsx(St, { $isSelected: T.value === i, children: T.value === i && /* @__PURE__ */ t.jsx(Lt, {}) }),
        /* @__PURE__ */ t.jsx(Dt, { children: T.label })
      ] }, T.value)) })
    ] }),
    o && /* @__PURE__ */ t.jsx(Tt, { isVisible: P, children: o }),
    s && c && /* @__PURE__ */ t.jsx(Et, { children: c }),
    /* @__PURE__ */ t.jsx(It, { name: g, value: i || "", onChange: () => {
    }, tabIndex: -1, required: b, children: u.map((T) => /* @__PURE__ */ t.jsx("option", { value: T.value, children: T.label }, T.value)) })
  ] });
}, wt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, vt = n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, yt = n.div`
  border: 1px solid
    ${({ hasError: e, isOpen: o, disabled: i }) => i ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : o ? "rgba(0, 125, 136, 1)" : "rgba(209, 213, 219, 1)"};
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
    border-color: ${({ hasError: e, disabled: o, isOpen: i }) => o ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }
`, kt = n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, jt = n.span`
  color: rgba(80, 85, 92, 1);
`, Ct = n.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, $t = n.div`
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
`, Mt = n.div`
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
`, St = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Lt = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Dt = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Tt = n.label`
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
`, Et = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, It = n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, Di = ({ checked: e = !1, onChange: o, className: i, label: r, disabled: s = !1 }) => {
  const [c, u] = B(!1), g = () => {
    s || !o || o(!e);
  }, y = (b) => {
    s || (b.key === "Enter" || b.key === " ") && (b.preventDefault(), g());
  };
  return /* @__PURE__ */ t.jsxs(Pt, { className: i, onClick: g, onKeyPress: y, tabIndex: s ? -1 : 0, disabled: s, children: [
    /* @__PURE__ */ t.jsx(
      Rt,
      {
        checked: e,
        isFocused: c,
        disabled: s,
        onMouseEnter: () => !s && u(!0),
        onMouseLeave: () => !s && u(!1),
        onFocus: () => !s && u(!0),
        onBlur: () => !s && u(!1),
        children: e && /* @__PURE__ */ t.jsx(Bt, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: s, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: s ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    r && /* @__PURE__ */ t.jsx(zt, { disabled: s, children: r })
  ] });
}, Pt = n.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, Rt = n.div`
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
`, zt = n.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, Bt = n.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, Ft = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", he = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], At = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], xe = ({ prefix: e = "Дата:", value: o = "", placeholder: i = "Выберите дату", onChange: r, onReset: s }) => {
  const [c, u] = B(!1), [g, y] = B(/* @__PURE__ */ new Date()), [b, m] = B(o ? new Date(o) : null), [x, v] = B(!1), [h, d] = B(!1), l = X(null), P = X(null), k = X(null);
  U(() => {
    const p = ($) => {
      l.current && !l.current.contains($.target) && u(!1), P.current && !P.current.contains($.target) && v(!1), k.current && !k.current.contains($.target) && d(!1);
    };
    return document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, []), U(() => {
    m(o ? new Date(o) : null);
  }, [o]);
  const E = (p) => {
    const $ = new Date(Date.UTC(p.getFullYear(), p.getMonth(), p.getDate()));
    m(p);
    const D = $.toISOString().split("T")[0];
    r?.(D), u(!1);
  }, R = () => {
    const p = /* @__PURE__ */ new Date();
    y(p);
    const D = new Date(Date.UTC(p.getFullYear(), p.getMonth(), p.getDate())).toISOString().split("T")[0];
    r?.(D), u(!1);
  }, O = () => {
    m(null), r?.(""), s?.(), u(!1);
  }, F = (p) => {
    const $ = new Date(g);
    $.setMonth(p), y($), v(!1);
  }, T = (p) => {
    const $ = new Date(g);
    $.setFullYear(p), y($), d(!1);
  }, V = () => {
    const p = g.getFullYear(), $ = g.getMonth(), D = new Date(p, $, 1), H = new Date(p, $ + 1, 0).getDate(), Z = D.getDay() === 0 ? 6 : D.getDay() - 1, j = [], M = 35, a = new Date(p, $, 0).getDate();
    for (let I = 0; I < Z; I++) {
      const f = a - Z + I + 1, L = new Date(p, $ - 1, f), S = !!(b && L.getDate() === b.getDate() && L.getMonth() === b.getMonth() && L.getFullYear() === b.getFullYear());
      j.push(
        /* @__PURE__ */ t.jsx(ie, { selected: S, onClick: () => E(L), otherMonth: !0, children: f }, `prev-${f}`)
      );
    }
    for (let I = 1; I <= H; I++) {
      const f = new Date(p, $, I), L = !!(b && f.getDate() === b.getDate() && f.getMonth() === b.getMonth() && f.getFullYear() === b.getFullYear());
      j.push(
        /* @__PURE__ */ t.jsx(ie, { selected: L, onClick: () => E(f), children: I }, `current-${I}`)
      );
    }
    const C = M - j.length;
    for (let I = 1; I <= C; I++) {
      const f = new Date(p, $ + 1, I), L = !!(b && f.getDate() === b.getDate() && f.getMonth() === b.getMonth() && f.getFullYear() === b.getFullYear());
      j.push(
        /* @__PURE__ */ t.jsx(ie, { selected: L, onClick: () => E(f), otherMonth: !0, children: I }, `next-${I}`)
      );
    }
    return j;
  }, z = () => b ? b.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : i, N = () => {
    const p = (/* @__PURE__ */ new Date()).getFullYear(), $ = [];
    for (let D = p - 10; D <= p + 10; D++)
      $.push(D);
    return $;
  }, W = (p) => {
    p.preventDefault(), p.stopPropagation(), v(!x), d(!1);
  }, A = (p) => {
    p.preventDefault(), p.stopPropagation(), d(!h), v(!1);
  }, w = (p) => {
    const $ = p === "next" ? 1 : -1, D = new Date(g);
    D.setMonth(D.getMonth() + $), y(D);
  };
  return /* @__PURE__ */ t.jsxs(_t, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(Ot, { onClick: () => u(!c), children: [
      e && /* @__PURE__ */ t.jsx(Nt, { children: e }),
      /* @__PURE__ */ t.jsx(Wt, { isEmpty: !b, children: z() }),
      /* @__PURE__ */ t.jsx(Yt, { src: Ft, alt: "Календарь" })
    ] }),
    c && /* @__PURE__ */ t.jsxs(Ht, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Vt, { children: [
        /* @__PURE__ */ t.jsx(
          me,
          {
            onClick: (p) => {
              p.preventDefault(), p.stopPropagation(), w("prev");
            },
            onMouseDown: (p) => p.preventDefault(),
            children: /* @__PURE__ */ t.jsx(we, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Zt, { children: [
          /* @__PURE__ */ t.jsxs(qt, { ref: P, children: [
            /* @__PURE__ */ t.jsxs(Ut, { onClick: (p) => W(p), onMouseDown: (p) => p.preventDefault(), children: [
              he[g.getMonth()],
              /* @__PURE__ */ t.jsx(ge, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(fe, { $width: 120, onClick: (p) => p.stopPropagation(), children: he.map((p, $) => /* @__PURE__ */ t.jsx(
              be,
              {
                $selected: $ === g.getMonth(),
                onClick: (D) => {
                  D.stopPropagation(), F($);
                },
                children: p
              },
              p
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(Gt, { ref: k, children: [
            /* @__PURE__ */ t.jsxs(Xt, { onClick: (p) => A(p), onMouseDown: (p) => p.preventDefault(), children: [
              g.getFullYear(),
              /* @__PURE__ */ t.jsx(ge, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(fe, { $width: 80, onClick: (p) => p.stopPropagation(), children: N().map((p) => /* @__PURE__ */ t.jsx(
              be,
              {
                $selected: p === g.getFullYear(),
                onClick: ($) => {
                  $.stopPropagation(), T(p);
                },
                children: p
              },
              p
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          me,
          {
            onClick: (p) => {
              p.preventDefault(), p.stopPropagation(), w("next");
            },
            onMouseDown: (p) => p.preventDefault(),
            children: /* @__PURE__ */ t.jsx(we, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Jt, { children: At.map((p) => /* @__PURE__ */ t.jsx(Kt, { children: p }, p)) }),
      /* @__PURE__ */ t.jsx(Qt, { children: V() }),
      /* @__PURE__ */ t.jsxs(en, { children: [
        /* @__PURE__ */ t.jsx(ve, { onClick: O, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(ve, { onClick: R, children: "Сегодня" })
      ] })
    ] })
  ] });
}, _t = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`, Ot = n.div`
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
`, Nt = n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`, Wt = n.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Yt = n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Ht = n.div`
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
`, Vt = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Zt = n.div`
  display: flex;
  gap: 8px;
  color: black;
`, Ee = n.button`
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
`, Ut = n(Ee)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Xt = n(Ee)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, qt = n.div`
  position: relative;
`, Gt = n.div`
  position: relative;
`, ge = n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, fe = n.div`
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
`, be = n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, me = n.button`
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
`, we = n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, Jt = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, Kt = n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, Qt = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`, ie = n.div`
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
`, en = n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, ve = n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, Ti = n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`, Ei = n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`, Ii = n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`, Ie = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: i,
  inputType: r = "text",
  onChange: s,
  hasError: c = !1,
  errorMessage: u,
  ...g
}) => {
  const [y, b] = q.useState(!1), m = !!(o && !i && !y), x = (d) => {
    if (!s) return;
    let l = d.target.value;
    switch (r) {
      case "number":
        /^\d*$/.test(l) && s?.(d);
        break;
      case "rubles": {
        const k = d.target.selectionStart, E = d.target.value;
        let R = E.replace(/[^\d]/g, "");
        if (R === "") {
          d.target.value = "", s(d);
          break;
        }
        const O = parseInt(R, 10);
        if (!isNaN(O)) {
          let F = O.toLocaleString("ru-RU");
          F += " ₽";
          const T = v(E, k || 0), V = h(F, T);
          d.target.value = F, s(d), setTimeout(() => {
            d.target.setSelectionRange(V, V);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const k = l.split(".");
        k.length > 2 && (l = k[0] + "." + k.slice(1).join("")), k.length === 2 && k[1].length > 2 && (l = k[0] + "." + k[1].slice(0, 2));
        const E = parseFloat(l);
        if (isNaN(E) || (E > 100 ? l = "100" : E < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const R = d.target.selectionStart || 0, O = l.replace(" %", "");
          d.target.value = l, s(d), setTimeout(() => {
            R < O.length && d.target.setSelectionRange(R, R);
          }, 0);
        } else
          d.target.value = l, s(d);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let P = l.split(" ").filter((k) => k.length > 0);
        P = P.slice(0, 3), l = P.map((k) => {
          if (k.startsWith("-") && (k = k.substring(1)), (k.match(/-/g) || []).length > 1) {
            const R = k.split("-");
            k = R[0] + "-" + R.slice(1).join("");
          }
          return k.includes("-") ? k.split("-").map((R, O) => R.length === 0 ? "" : (O > 0, R[0].toUpperCase() + R.slice(1).toLowerCase())).join("-") : k.length > 0 ? k[0].toUpperCase() + k.slice(1).toLowerCase() : "";
        }).join(" "), l.length > 0 && l[l.length - 1] !== " " && d.target.value.length > 0 && d.target.value[d.target.value.length - 1] === " " && (l += " "), l.length > 100 && (l = l.slice(0, 100)), d.target.value = l, s(d);
        break;
      case "doc":
        l = l.replace(/\D/g, ""), l.length > 4 && (l = `${l.slice(0, 4)} ${l.slice(4, 10)}`), l.length > 11 && (l = l.slice(0, 11)), d.target.value = l, s(d);
        break;
      case "date": {
        l = l.replace(/\D/g, ""), l.length > 4 ? l = `${l.slice(0, 2)}.${l.slice(2, 4)}.${l.slice(4, 8)}` : l.length > 2 && (l = `${l.slice(0, 2)}.${l.slice(2, 4)}`), l.length > 10 && (l = l.slice(0, 10)), i?.length > l.length && [3, 6].includes(l.length) && (l = l.slice(0, l.length - 1)), d.target.value = l, s(d);
        break;
      }
      default:
        s(d);
        break;
    }
  }, v = (d, l) => {
    let P = 0;
    for (let k = 0; k < Math.min(l, d.length); k++)
      /\d/.test(d[k]) && P++;
    return P;
  }, h = (d, l) => {
    let P = 0;
    for (let k = 0; k < d.length; k++) {
      if (P >= l)
        return k;
      /\d/.test(d[k]) && P++;
    }
    return d.length;
  };
  return /* @__PURE__ */ t.jsxs(tn, { children: [
    /* @__PURE__ */ t.jsx(
      nn,
      {
        ...g,
        value: i,
        placeholder: m ? "" : e,
        onFocus: () => b(!0),
        onBlur: (d) => {
          b(!1), g.onBlur?.(d);
        },
        onChange: x,
        inputMode: r === "number" || r === "doc" || r === "date" || r === "rubles" || r === "percents" ? "numeric" : "text",
        maxLength: r === "doc" ? 11 : r === "date" ? 10 : void 0,
        hasError: c
      }
    ),
    o && /* @__PURE__ */ t.jsx(on, { isVisible: m, children: o }),
    c && u && /* @__PURE__ */ t.jsx(rn, { children: u })
  ] });
}, tn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, nn = n.input`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 16px;
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
`, on = n.label`
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
`, rn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Pi = ({ total: e, current: o = 1, onChange: i, itemsPerPage: r = 10 }) => {
  const s = Math.ceil(e / r), [c, u] = B(o), g = (b) => {
    b < 1 || b > s || b === c || (u(b), i?.(b));
  }, y = () => {
    const b = [];
    let x = 1, v = s;
    if (s > 5) {
      const h = Math.floor(2.5);
      x = Math.max(c - h, 1), v = Math.min(c + h, s), c <= h + 1 ? v = 5 : c >= s - h && (x = s - 5 + 1);
    }
    for (let h = x; h <= v; h++)
      b.push(
        /* @__PURE__ */ t.jsx(ne, { active: h === c, onClick: () => g(h), children: h }, h)
      );
    return x > 1 && (x > 2 && b.unshift(/* @__PURE__ */ t.jsx(ne, { children: "..." }, "start-ellipsis")), b.unshift(
      /* @__PURE__ */ t.jsx(ne, { active: c === 1, onClick: () => g(1), children: "1" }, 1)
    )), v < s && (v < s - 1 && b.push(/* @__PURE__ */ t.jsx(ne, { children: "..." }, "end-ellipsis")), b.push(
      /* @__PURE__ */ t.jsx(ne, { active: s === c, onClick: () => g(s), children: s }, s)
    )), b;
  };
  return /* @__PURE__ */ t.jsxs(sn, { children: [
    /* @__PURE__ */ t.jsx(ye, { disabled: c === 1, onClick: () => g(c - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    y(),
    /* @__PURE__ */ t.jsx(ye, { disabled: c === s, onClick: () => g(c + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === s ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, sn = n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, ne = n.div`
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
`, ye = n.button`
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
`, Ri = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: i,
  onChange: r,
  hasError: s = !1,
  errorMessage: c,
  rows: u = 3,
  ...g
}) => {
  const [y, b] = q.useState(!1), m = !!(o && !i && !y);
  return /* @__PURE__ */ t.jsxs(an, { children: [
    /* @__PURE__ */ t.jsx(
      ln,
      {
        ...g,
        value: i,
        placeholder: m ? "" : e,
        onFocus: () => b(!0),
        onBlur: (x) => {
          b(!1), g.onBlur?.(x);
        },
        onChange: r,
        hasError: s,
        rows: u
      }
    ),
    o && /* @__PURE__ */ t.jsx(cn, { isVisible: m, children: o }),
    s && c && /* @__PURE__ */ t.jsx(dn, { children: c })
  ] });
}, an = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, ln = n.textarea`
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
`, cn = n.label`
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
`, dn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, pn = ({
  title: e,
  onClose: o,
  onCancel: i,
  onSave: r,
  children: s,
  isSaveDisabled: c = !1,
  isSubmitting: u = !1,
  mode: g = "create",
  hideSaveButton: y = !1,
  hideCanselButton: b = !1,
  width: m = "560px",
  saveButtonText: x = "Сохранить",
  customLayout: v
}) => {
  const h = g === "view", d = X(null);
  U(() => {
    const k = (R) => {
      R.key === "Escape" && o();
    };
    document.addEventListener("keydown", k);
    const E = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => d.current?.focus(), 0), () => {
      document.removeEventListener("keydown", k), document.body.style.overflow = E;
    };
  }, [o]);
  const l = (k) => {
    k.target === k.currentTarget && o();
  }, P = (k) => {
    k.preventDefault(), i();
  };
  return /* @__PURE__ */ t.jsx(un, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    hn,
    {
      ref: d,
      $width: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Pe, { children: [
          /* @__PURE__ */ t.jsx(Re, { children: e }),
          /* @__PURE__ */ t.jsx(xn, { type: "button", onClick: o, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        v ? /* @__PURE__ */ t.jsx(gn, { children: v }) : null,
        /* @__PURE__ */ t.jsxs(fn, { onSubmit: r, children: [
          /* @__PURE__ */ t.jsx(bn, { children: s }),
          /* @__PURE__ */ t.jsxs(mn, { children: [
            /* @__PURE__ */ t.jsx(wn, { children: b ? null : /* @__PURE__ */ t.jsx(yn, { isPrimary: !1, onClick: P, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(vn, { children: !h && !y ? /* @__PURE__ */ t.jsx(
              kn,
              {
                type: "submit",
                disabled: c || u,
                children: u ? "Сохранение..." : x
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, un = n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, hn = n.div`
  width: min(100%, ${({ $width: e }) => e});
  max-height: min(85vh, 820px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 8px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  padding: 40px;

  display: flex;
  flex-direction: column;
  outline: none;

  @media (max-width: 768px) {
    padding: 6px;
  }
`, Pe = n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`, Re = n.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`, xn = n.button`
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
`, gn = n.div`
  padding: 12px 18px 0 18px;
`, fn = n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, bn = n.div`
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
`, mn = n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, wn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, vn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, yn = n(ae)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, kn = n(ae)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, jn = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], zi = ({
  value: e = "",
  placeholder: o = "Выберите период",
  options: i = jn,
  showCustomPeriodButton: r = !0,
  onChange: s,
  onCustomPeriodClick: c
}) => {
  const [u, g] = B(!1), [y, b] = B(!1), [m, x] = B(""), [v, h] = B(""), [d, l] = B(""), P = X(null), k = X(null);
  U(() => {
    if (e === "Custom" && v && d) {
      const z = T(v), N = T(d);
      x(`С ${z} по ${N}`);
    } else {
      const z = i.find((N) => N.value === e);
      x(z ? z.label : "");
    }
  }, [e, i, v, d]), U(() => {
    const z = (N) => {
      P.current && !P.current.contains(N.target) && g(!1), y && k.current && !k.current.contains(N.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((w) => w.contains(N.target)) || b(!1));
    };
    return document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [y]);
  const E = (z) => {
    s?.(z.value), g(!1);
  }, R = () => {
    g(!1), c ? c() : b(!0);
  }, O = () => {
    s?.(""), x(""), h(""), l("");
  }, F = () => {
    if (v && d) {
      const z = T(v), N = T(d), W = `С ${z} по ${N}`;
      s?.("Custom", v, d), x(W), b(!1);
    }
  }, T = (z) => {
    const N = new Date(z), W = String(N.getDate()).padStart(2, "0"), A = String(N.getMonth() + 1).padStart(2, "0"), w = N.getFullYear();
    return `${W}.${A}.${w}`;
  }, V = () => /* @__PURE__ */ t.jsxs(zn, { children: [
    /* @__PURE__ */ t.jsx(Pe, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Re, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(Bn, { onClick: O, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Cn, { ref: P, children: [
      /* @__PURE__ */ t.jsxs($n, { onClick: () => g(!u), children: [
        /* @__PURE__ */ t.jsx(Mn, { children: m || o }),
        /* @__PURE__ */ t.jsx(Sn, { $isOpen: u, children: "▼" })
      ] }),
      u && /* @__PURE__ */ t.jsxs(Ln, { children: [
        i.map((z) => /* @__PURE__ */ t.jsxs(Dn, { onClick: () => E(z), $isSelected: e === z.value, children: [
          /* @__PURE__ */ t.jsx(Tn, { $isSelected: e === z.value, children: e === z.value && /* @__PURE__ */ t.jsx(En, {}) }),
          /* @__PURE__ */ t.jsx(In, { children: z.label })
        ] }, z.id)),
        r && /* @__PURE__ */ t.jsx(Pn, { onClick: R, children: "Другой период" })
      ] })
    ] }),
    y && /* @__PURE__ */ t.jsx("div", { ref: k, children: /* @__PURE__ */ t.jsx(
      pn,
      {
        title: "",
        onClose: () => b(!1),
        onCancel: () => b(!1),
        onSave: (z) => {
          z.preventDefault(), F();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(V, {}),
        children: /* @__PURE__ */ t.jsxs(Rn, { children: [
          /* @__PURE__ */ t.jsx(ke, { children: /* @__PURE__ */ t.jsx(xe, { value: v, onChange: (z) => h(z) }) }),
          /* @__PURE__ */ t.jsx(ke, { children: /* @__PURE__ */ t.jsx(xe, { value: d, onChange: (z) => l(z) }) })
        ] })
      }
    ) })
  ] });
}, Cn = n.div`
  position: relative;
  width: 245px;
`, $n = n.div`
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
`, Mn = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Sn = n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, Ln = n.div`
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
`, Dn = n.div`
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
`, Tn = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, En = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, In = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Pn = n.div`
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
`, Rn = n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ke = n.div`
  flex: 1;
`, zn = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, Bn = n.button`
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
`, Bi = ({
  name: e,
  value: o,
  onChange: i,
  onBlur: r,
  onKeyPress: s,
  placeholder: c = "8 (999) 500-50-50",
  customPlaceholder: u,
  tabIndex: g,
  disabled: y = !1,
  hasError: b = !1,
  errorMessage: m
}) => {
  const [x, v] = q.useState(!1), h = q.useRef(null), d = !!(u && !o && !x), l = (R) => {
    const F = R.replace(/\D/g, "").slice(0, 11);
    let T = "";
    return F.length > 0 && (T += "8"), F.length > 1 && (T += ` (${F.slice(1, 4)}`), F.length > 4 && (T += `) ${F.slice(4, 7)}`), F.length > 7 && (T += `-${F.slice(7, 9)}`), F.length > 9 && (T += `-${F.slice(9, 11)}`), T;
  }, P = (R) => {
    const O = l(R.target.value), F = {
      ...R,
      target: {
        ...R.target,
        name: e,
        value: O
      }
    };
    i(F);
  }, k = (R) => {
    v(!1), r?.(R);
  }, E = (R) => {
    s?.(R);
  };
  return /* @__PURE__ */ t.jsxs(Fn, { children: [
    /* @__PURE__ */ t.jsx(
      An,
      {
        ref: h,
        name: e,
        type: "tel",
        value: o,
        onChange: P,
        onKeyPress: E,
        placeholder: d ? "" : c,
        maxLength: 18,
        tabIndex: g,
        disabled: y,
        hasError: b,
        onFocus: () => v(!0),
        onBlur: k,
        inputMode: "tel"
      }
    ),
    u && /* @__PURE__ */ t.jsx(_n, { isVisible: d, children: u }),
    b && m && /* @__PURE__ */ t.jsx(On, { children: m })
  ] });
}, Fn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, An = n.input`
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
`, _n = n.label`
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
`, On = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Fi = ({ tabs: e, activeTab: o, onChange: i, addButton: r, fontSize: s = 14 }) => {
  const c = e.find((u) => u.id === o)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Nn, { children: /* @__PURE__ */ t.jsxs(Wn, { children: [
      e.map((u) => /* @__PURE__ */ t.jsxs(Yn, { $isActive: o === u.id, onClick: () => i(u.id), $fontSize: s, children: [
        u.label,
        o === u.id && /* @__PURE__ */ t.jsx(Hn, {})
      ] }, u.id)),
      r && /* @__PURE__ */ t.jsx(Vn, { children: r })
    ] }) }),
    c && /* @__PURE__ */ t.jsx(Zn, { children: c })
  ] });
}, Nn = n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Wn = n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Yn = n.li`
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
`, Hn = n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Vn = n.li`
  margin-left: auto;
  padding: 4px 0;
`, Zn = n.div`
  margin-top: 20px;
`, Ai = ({
  mode: e,
  primaryValue: o,
  secondaryValue: i,
  placeholder: r = "Выберите значение",
  onSelect: s,
  onClear: c,
  disabled: u = !1,
  hasError: g = !1,
  errorMessage: y = "",
  customIcon: b
}) => {
  const x = b || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(Gn, { children: [
    /* @__PURE__ */ t.jsx(Jn, { children: o || "Не указано" }),
    i && /* @__PURE__ */ t.jsx(Kn, { children: i })
  ] }) : /* @__PURE__ */ t.jsxs(Un, { children: [
    /* @__PURE__ */ t.jsxs(Xn, { children: [
      /* @__PURE__ */ t.jsx(qn, { type: "text", value: o || "", placeholder: r, readOnly: !0, disabled: u }),
      o && !u && /* @__PURE__ */ t.jsx(eo, { type: "button", onClick: c, "aria-label": "Очистить", children: "×" })
    ] }),
    !u && /* @__PURE__ */ t.jsx(Qn, { type: "button", onClick: s, "aria-label": "Выбрать", children: x }),
    g && y && /* @__PURE__ */ t.jsx(to, { children: y })
  ] });
}, Un = n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Xn = n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, qn = n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, Gn = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, Jn = n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, Kn = n.span`
  font-size: 13px;
  color: #666;
`, Qn = n.button`
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
`, eo = n.button`
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
`, to = n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, ze = n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, _i = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(no, { children: [
  "Всего: ",
  e
] }) }), no = n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, Oi = n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, Ni = n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, oo = n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, ro = n.span`
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
`, io = n.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, Wi = ({ checked: e, onChange: o, disabled: i }) => {
  const r = () => {
    i || o(!e);
  };
  return /* @__PURE__ */ t.jsxs(oo, { children: [
    /* @__PURE__ */ t.jsx(io, { checked: e, onChange: r, disabled: i }),
    /* @__PURE__ */ t.jsx(ro, { checked: e, disabled: i })
  ] });
}, Yi = ({ id: e, name: o, checked: i, onChange: r, children: s }) => /* @__PURE__ */ t.jsxs(so, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(ao, { type: "radio", id: e, name: o, checked: i, onChange: r }),
  s
] }), so = n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, ao = n.input`
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
`, Hi = ({
  percentage: e,
  onChange: o,
  draggable: i = !1,
  colors: r = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const s = X(null), [c, u] = B(!1), g = (x) => {
    !i || !o || (x.preventDefault(), u(!0), m(x));
  }, y = (x) => {
    !c || !o || m(x);
  }, b = () => {
    u(!1);
  }, m = (x) => {
    if (!s.current || !o) return;
    const v = s.current.getBoundingClientRect();
    let d = (x.clientX - v.left) / v.width * 100;
    d = Math.max(0, Math.min(100, d)), o(Math.round(d));
  };
  return U(() => {
    if (c)
      return document.addEventListener("mousemove", y), document.addEventListener("mouseup", b), () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", b);
      };
  }, [c]), /* @__PURE__ */ t.jsxs(lo, { ref: s, $draggable: i, onMouseDown: g, children: [
    /* @__PURE__ */ t.jsx(co, { $secondaryColor: r.secondary }),
    /* @__PURE__ */ t.jsx(po, { $percentage: e, $primaryColor: r.primary }),
    i && /* @__PURE__ */ t.jsx(uo, { $percentage: e, $primaryColor: r.primary })
  ] });
}, lo = n.div`
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
`, co = n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, po = n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, uo = n.div`
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
`, ho = ["zoomControl", "fullscreenControl"];
let se = null;
const xo = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (se || (se = new Promise((o, i) => {
  const r = document.createElement("script"), s = e ? `&apikey=${e}` : "";
  r.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`, r.async = !0, r.onload = () => {
    window.ymaps ? window.ymaps.ready(() => o(window.ymaps)) : i(new Error("Yandex Maps failed to load"));
  }, r.onerror = () => i(new Error("Failed to load Yandex Maps script")), document.head.appendChild(r);
})), se), Vi = ({
  onLocationSelect: e,
  initialAddress: o = "",
  initialLat: i = 55.751244,
  initialLon: r = 37.618423,
  apiKey: s,
  zoom: c = 12,
  height: u = 400,
  width: g = "100%",
  inputPlaceholder: y = "Введите адрес или название места",
  searchButtonLabel: b = "Найти",
  draggablePlacemark: m = !0,
  controls: x = ho,
  showSearch: v = !0,
  className: h,
  style: d,
  onError: l
}) => {
  const [P, k] = B(null), [E, R] = B(o), [O, F] = B(o), [T, V] = B(!1), z = X(null);
  U(() => {
    let A = !1, w;
    return (async () => {
      try {
        const $ = await xo(s);
        if (A || !z.current) return;
        w = new $.Map(z.current, {
          center: [i, r],
          zoom: c,
          controls: x
        });
        const D = new $.Placemark([i, r], {}, { draggable: m });
        w.geoObjects.add(D), w.events.add("click", (Y) => {
          const H = Y.get("coords");
          N(H, D, w);
        }), D.events.add("dragend", () => {
          const Y = D.geometry.getCoordinates();
          N(Y, D, w);
        }), k(w), V(!0);
      } catch ($) {
        l && $ instanceof Error && l($);
      }
    })(), () => {
      A = !0, w && w.destroy();
    };
  }, [s, i, r, c, x, m, l]);
  const N = async (A, w, p) => {
    if (window.ymaps)
      try {
        const Y = (await window.ymaps.geocode(A)).geoObjects.get(0).getAddressLine();
        w.geometry.setCoordinates(A), p.panTo(A, { flying: !0 }), F(Y), R(Y), e(Y, A[0], A[1]);
      } catch ($) {
        l && $ instanceof Error && l($);
      }
  }, W = async () => {
    if (!(!E.trim() || !window.ymaps || !P))
      try {
        const w = (await window.ymaps.geocode(E)).geoObjects.get(0);
        if (w) {
          const p = w.geometry.getCoordinates(), $ = w.properties.get("boundedBy");
          P.setBounds($, { checkZoomRange: !0 });
          const D = new window.ymaps.Placemark(p, {}, { draggable: m });
          P.geoObjects.removeAll(), P.geoObjects.add(D);
          const Y = w.getAddressLine();
          F(Y), e(Y, p[0], p[1]), D.events.add("dragend", () => {
            const H = D.geometry.getCoordinates();
            N(H, D, P);
          });
        }
      } catch (A) {
        l && A instanceof Error && l(A);
      }
  };
  return /* @__PURE__ */ t.jsxs(go, { className: h, style: d, children: [
    v && /* @__PURE__ */ t.jsxs(fo, { children: [
      /* @__PURE__ */ t.jsx(
        Ie,
        {
          type: "text",
          value: E,
          onChange: (A) => R(A.target.value),
          placeholder: y,
          onKeyPress: (A) => A.key === "Enter" && W(),
          disabled: !T
        }
      ),
      /* @__PURE__ */ t.jsx(bo, { onClick: W, disabled: !T, children: b })
    ] }),
    /* @__PURE__ */ t.jsxs(wo, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: O || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(mo, { ref: z, $height: u, $width: g }),
    /* @__PURE__ */ t.jsx(vo, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, go = n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, fo = n.div`
  display: flex;
  gap: 8px;
`, bo = n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, mo = n.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, wo = n.div`
  font-size: 14px;
  color: #374151;
`, vo = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, Be = n.h1`
  margin-right: auto;
  text-align: left;
  font-size: clamp(20px, 4vw, 30px);
  line-height: 1.2;
  color: var(--wp-title-color, #111);
  font-weight: 600;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;
function je(e, o = "₽") {
  if (!e || e.trim() === "")
    return `0${o}`;
  const i = e.replace(/[^\d-]/g, "");
  if (!i || i === "-" || i === "")
    return `0${o}`;
  const r = parseInt(i, 10);
  if (isNaN(r))
    return `0${o}`;
  const s = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(r);
  return !0 ? `${s}${o}` : s;
}
function Zi(e) {
  if (!e) return 0;
  const o = e.replace(/\D/g, "");
  return parseInt(o, 10);
}
const Ui = ({ title: e, data: o, maxValue: i, step: r, height: s = 300, titleFontSize: c }) => {
  const [u, g] = B(null), y = [];
  for (let m = 0; m <= i; m += r)
    y.push(m);
  const b = o.length > 0 ? o[0].bars.map((m) => ({ name: m.name, color: m.color })) : [];
  return /* @__PURE__ */ t.jsxs(yo, { children: [
    /* @__PURE__ */ t.jsxs(ze, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Be, { style: { fontSize: c }, children: e }),
      /* @__PURE__ */ t.jsx(ko, { children: b.map((m, x) => /* @__PURE__ */ t.jsxs(jo, { children: [
        /* @__PURE__ */ t.jsx(Co, { color: m.color }),
        /* @__PURE__ */ t.jsx($o, { children: m.name })
      ] }, x)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Mo, { height: s, children: [
      /* @__PURE__ */ t.jsx(So, { children: y.map((m, x) => /* @__PURE__ */ t.jsx(Lo, { children: m.toLocaleString() }, x)) }),
      /* @__PURE__ */ t.jsxs(Do, { children: [
        /* @__PURE__ */ t.jsxs(To, { children: [
          y.map((m, x) => {
            const v = m / i * 100;
            return /* @__PURE__ */ t.jsx(Eo, { position: 100 - v }, `line-${x}`);
          }),
          o.map((m, x) => /* @__PURE__ */ t.jsxs(Io, { onMouseEnter: () => g(x), onMouseLeave: () => g(null), children: [
            m.bars.map((v, h) => {
              const d = m.bars.slice(h + 1).reduce((l, P) => l + P.value, 0);
              return /* @__PURE__ */ t.jsx(
                Po,
                {
                  height: v.value / i * 100,
                  offset: d / i * 100,
                  color: v.color,
                  isHovered: u !== null && u !== x
                },
                h
              );
            }),
            u === x && /* @__PURE__ */ t.jsxs(Bo, { children: [
              /* @__PURE__ */ t.jsxs(Fo, { children: [
                /* @__PURE__ */ t.jsxs(Ao, { children: [
                  "Всего: ",
                  je(m.total.toString())
                ] }),
                m.bars.map((v, h) => /* @__PURE__ */ t.jsxs(_o, { children: [
                  v.name,
                  ": ",
                  je(v.value.toString())
                ] }, h))
              ] }),
              /* @__PURE__ */ t.jsx(Oo, {})
            ] })
          ] }, x))
        ] }),
        /* @__PURE__ */ t.jsx(Ro, { children: o.map((m, x) => /* @__PURE__ */ t.jsx(zo, { style: { flex: 1, textAlign: "center" }, children: m.label }, x)) })
      ] })
    ] })
  ] });
}, yo = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, ko = n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, jo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Co = n.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, $o = n.span`
  font-size: 14px;
  color: #4b5563;
`, Mo = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, So = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, Lo = n.span`
  font-size: 12px;
  color: #6b7280;
`, Do = n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, To = n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, Eo = n.div`
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
`, Io = n.div`
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
`, Po = n.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, Ro = n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, zo = n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, Bo = n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, Fo = n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, Ao = n.div`
  font-weight: 600;
  margin-bottom: 6px;
`, _o = n.div`
  margin-bottom: 2px;
`, Oo = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, No = Oe`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Xi = ({
  title: e,
  data: o,
  xAxisLabel: i,
  yAxisLabel: r,
  maxX: s,
  maxY: c,
  minY: u,
  xStep: g,
  yStep: y,
  height: b = 300,
  showLegend: m = !0,
  xAxisCustomLabels: x,
  showTooltip: v = !0,
  titleFontSize: h = "30px"
}) => {
  const [d, l] = B(null), [P, k] = B({ x: 0, y: 0 }), E = X(null), R = X(null), O = Math.max(...o.map((w) => w.x), s), F = [];
  for (let w = 0; w <= O; w += g)
    F.push(w);
  const T = [];
  for (let w = u; w <= c; w += y)
    T.push(w);
  const V = x || F.map((w) => w.toString()), z = m ? Array.from(new Set(o.filter((w) => w.label).map((w) => w.label))).map((w) => {
    const p = o.find(($) => $.label === w);
    return { name: w, color: p.color };
  }) : [], N = {};
  o.forEach((w) => {
    const p = w.label || "default";
    N[p] || (N[p] = []), N[p].push(w);
  });
  const W = (w) => w / O * 100, A = (w) => {
    const p = c - u;
    return 100 - (w - u) / p * 100;
  };
  return U(() => {
    if (d && R.current) {
      const w = R.current.getBoundingClientRect(), p = W(d.x) / 100 * w.width, $ = A(d.y) / 100 * w.height;
      k({
        x: p + w.left,
        y: $ + w.top
      });
    }
  }, [d, s, c, u]), /* @__PURE__ */ t.jsxs(Wo, { children: [
    /* @__PURE__ */ t.jsxs(ze, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Be, { style: { fontSize: h }, children: e }),
      m && z.length > 0 && /* @__PURE__ */ t.jsx(Yo, { children: z.map((w, p) => /* @__PURE__ */ t.jsxs(Ho, { children: [
        /* @__PURE__ */ t.jsx(Vo, { color: w.color }),
        /* @__PURE__ */ t.jsx(Zo, { children: w.name })
      ] }, p)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Uo, { height: b, children: [
      /* @__PURE__ */ t.jsxs(Xo, { children: [
        T.map((w, p) => /* @__PURE__ */ t.jsx(qo, { children: w.toLocaleString() }, p)),
        /* @__PURE__ */ t.jsx(Ce, { children: r })
      ] }),
      /* @__PURE__ */ t.jsxs(Go, { ref: R, children: [
        T.map((w, p) => /* @__PURE__ */ t.jsx(Jo, { position: A(w) }, `hline-${p}`)),
        Object.values(N).map((w, p) => w.map(($, D) => {
          if (D === 0) return null;
          const Y = w[D - 1], H = W(Y.x), Z = A(Y.y), j = W($.x), M = A($.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${H}%`, y1: `${Z}%`, x2: `${j}%`, y2: `${M}%`, stroke: $.color, strokeWidth: "1" })
            },
            `line-${p}-${D}`
          );
        })),
        o.map((w, p) => /* @__PURE__ */ t.jsx(
          Ko,
          {
            x: W(w.x),
            y: A(w.y),
            color: w.color,
            onMouseEnter: () => l(w),
            onMouseLeave: () => l(null),
            isHovered: d?.label === w.label
          },
          p
        ))
      ] })
    ] }),
    v && d && /* @__PURE__ */ t.jsxs(tr, { ref: E, style: { left: P.x, top: P.y }, children: [
      /* @__PURE__ */ t.jsxs(nr, { children: [
        d.name && /* @__PURE__ */ t.jsx(or, { children: d.name }),
        /* @__PURE__ */ t.jsx(rr, { children: d.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(ir, {})
    ] }),
    /* @__PURE__ */ t.jsxs(Qo, { children: [
      V.map((w, p) => {
        const D = F[p] / O * 100;
        return /* @__PURE__ */ t.jsx(er, { style: { left: `${D}%`, transform: "translateX(-50%)" }, children: w }, p);
      }),
      i && /* @__PURE__ */ t.jsx(Ce, { children: i })
    ] })
  ] });
}, Wo = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Yo = n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Ho = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Vo = n.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Zo = n.span`
  font-size: 14px;
  color: #4b5563;
`, Uo = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Xo = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, qo = n.span`
  font-size: 12px;
  color: #6b7280;
`, Ce = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, Go = n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, Jo = n.div`
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
`, Ko = n.div`
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
`, Qo = n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, er = n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, tr = n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${No} 0.15s ease-out forwards;
`, nr = n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, or = n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, rr = n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, ir = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, qi = ({ images: e, initialIndex: o, onClose: i }) => {
  const [r, s] = B(o), [c, u] = B(0), g = () => {
    s((x) => x > 0 ? x - 1 : e.length - 1), u(0);
  }, y = () => {
    s((x) => x < e.length - 1 ? x + 1 : 0), u(0);
  }, b = () => {
    u((x) => (x + 90) % 360);
  }, m = (x) => {
    x.key === "Escape" ? i() : x.key === "ArrowLeft" ? g() : x.key === "ArrowRight" ? y() : (x.key === "r" || x.key === "к") && b();
  };
  return /* @__PURE__ */ t.jsx(sr, { onClick: i, onKeyDown: m, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(ar, { onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(lr, { onClick: i, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(cr, { children: /* @__PURE__ */ t.jsx(dr, { onClick: b, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(pr, { children: [
      /* @__PURE__ */ t.jsx($e, { $position: "left", onClick: g, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(ur, { src: e[r], alt: `Photo ${r + 1}`, $rotation: c }),
      /* @__PURE__ */ t.jsx($e, { $position: "right", onClick: y, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(hr, { children: e.map((x, v) => /* @__PURE__ */ t.jsx(
      xr,
      {
        $active: v === r,
        onClick: () => {
          s(v), u(0);
        }
      },
      v
    )) })
  ] }) });
}, sr = n.div`
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
`, ar = n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, lr = n.button`
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
`, cr = n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, dr = n.button`
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
`, pr = n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, ur = n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, $e = n.button`
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
`, hr = n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, xr = n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, gr = ({ isOpen: e, callPhone: o, error: i, onClose: r }) => {
  const [s, c] = B(!1);
  if (!e) return null;
  const u = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), g = () => {
    u ? window.location.href = `tel:${o}` : (navigator.clipboard.writeText(o), c(!0), setTimeout(() => c(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(fr, { onClick: r, children: /* @__PURE__ */ t.jsxs(br, { onClick: (y) => y.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(mr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Me, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      wr,
      {
        onClick: g,
        title: u ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          o,
          !u && s && /* @__PURE__ */ t.jsx(vr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Me, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    i && /* @__PURE__ */ t.jsx(yr, { children: i })
  ] }) });
}, fr = n.div`
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
`, br = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, mr = n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Me = n.p`
  margin-bottom: 15px;
  color: #555;
`, wr = n.div`
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
`, vr = n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, yr = n.div`
  color: #e74c3c;
  margin: 10px 0;
`, kr = Fe({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), jr = ({ collapsed: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: `rotate(${e ? "180deg" : "0deg"})`,
      transition: "transform 0.3s ease"
    },
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",
        fill: "#50555C",
        stroke: "#50555C"
      }
    )
  }
), Gi = ({
  items: e,
  bottomItems: o = [],
  bottomContent: i,
  logo: r,
  arrowIcon: s,
  collapsed: c,
  onToggle: u,
  selectedKey: g,
  onSelect: y,
  autoCollapseOnSelect: b = !1,
  width: m = "315px",
  collapsedWidth: x = "85px",
  className: v,
  style: h,
  mobileBreakpoint: d = 768,
  showBottomLabels: l = !0,
  children: P
}) => {
  const k = Ae(kr), [E, R] = B(window.innerWidth <= d);
  U(() => {
    const f = () => {
      R(window.innerWidth <= d);
    };
    return window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, [d]);
  const [O, F] = B(
    c ?? k.collapsed ?? !1
  ), [T, V] = B(null), [z, N] = B(
    g ?? k.selectedSideMenuItem ?? null
  ), [W, A] = B({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), w = X(null), p = c ?? k.collapsed ?? O, $ = (f) => {
    F(f), k.toggleCollapsed(), u?.(f);
  }, D = g ?? k.selectedSideMenuItem ?? z, Y = (f) => {
    N(f), k.setSelectedSideMenuItem(f);
  };
  U(() => {
    c !== void 0 && (F(c), c && V(null));
  }, [c]), U(() => {
    g !== void 0 && Y(g);
  }, [g]), U(() => {
    const f = () => A((L) => ({ ...L, visible: !1 }));
    return document.addEventListener("click", f), () => document.removeEventListener("click", f);
  }, []);
  const H = () => {
    const f = !p;
    $(f), f && V(null);
  }, Z = (f) => {
    f.disabled || f.hidden || (Y(f.key), y?.(f), f.onClick?.(f), b && ($(!0), V(null)));
  }, j = (f) => {
    V((L) => L === f ? null : f);
  }, M = (f, L) => {
    const S = (f.children?.length || 0) > 0;
    if (p && S) {
      L.stopPropagation();
      const _ = L.currentTarget.getBoundingClientRect();
      A({
        visible: !0,
        x: _.right + 6,
        y: _.top,
        items: f.children || []
      });
      return;
    }
    S ? j(f.key) : Z(f);
  }, a = (f, L = !1) => f.filter((S) => !S.hidden).map((S) => {
    const _ = (S.children?.length || 0) > 0, G = T === S.key, K = D === S.key || !!S.children && S.children.some((Q) => Q.key === D);
    return /* @__PURE__ */ t.jsxs(q.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        zr,
        {
          $collapsed: p,
          $selected: K,
          onClick: (Q) => M(S, Q),
          $disabled: S.disabled,
          title: S.label,
          children: [
            S.icon && /* @__PURE__ */ t.jsx(Fr, { $collapsed: p, children: S.icon }),
            !p && /* @__PURE__ */ t.jsx(Br, { children: S.label }),
            !p && _ && /* @__PURE__ */ t.jsx(_r, { $expanded: G, children: "▾" })
          ]
        }
      ),
      !p && _ && G && /* @__PURE__ */ t.jsx(Ar, { children: a(S.children || [], !0) })
    ] }, S.key);
  }), C = _e(() => W.visible ? /* @__PURE__ */ t.jsx(Or, { style: { left: W.x, top: W.y }, children: W.items.map((f) => /* @__PURE__ */ t.jsx(
    Nr,
    {
      onClick: () => {
        Z(f), A({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: D === f.key,
      children: f.label
    },
    f.key
  )) }) : null, [W, D]), I = () => {
    const f = [...e, ...o].filter((L) => !L.hidden);
    return /* @__PURE__ */ t.jsx(Mr, { children: f.map((L) => {
      const S = D === L.key;
      return /* @__PURE__ */ t.jsxs(
        Sr,
        {
          $selected: S,
          onClick: () => Z(L),
          $disabled: L.disabled,
          children: [
            L.icon && /* @__PURE__ */ t.jsx(Lr, { $selected: S, children: L.icon }),
            l && /* @__PURE__ */ t.jsx(Dr, { $selected: S, children: L.label })
          ]
        },
        L.key
      );
    }) });
  };
  return E ? /* @__PURE__ */ t.jsxs(Cr, { className: v, style: h, children: [
    /* @__PURE__ */ t.jsx($r, { children: P }),
    I()
  ] }) : /* @__PURE__ */ t.jsxs(
    Tr,
    {
      ref: w,
      $collapsed: p,
      $width: m,
      $collapsedWidth: x,
      className: v,
      style: h,
      children: [
        /* @__PURE__ */ t.jsxs(Er, { children: [
          /* @__PURE__ */ t.jsx(Ir, { onClick: H, "aria-label": "Переключить меню", children: s ?? /* @__PURE__ */ t.jsx(jr, { collapsed: p }) }),
          !p && r && /* @__PURE__ */ t.jsx(Pr, { children: r })
        ] }),
        /* @__PURE__ */ t.jsxs(Rr, { children: [
          /* @__PURE__ */ t.jsx(Se, { children: a(e) }),
          o.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Le, {}),
            /* @__PURE__ */ t.jsx(Se, { children: a(o) })
          ] }),
          i && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            (o.length > 0 || e.length > 0) && /* @__PURE__ */ t.jsx(Le, {}),
            /* @__PURE__ */ t.jsx(Yr, { $collapsed: p, children: i })
          ] })
        ] }),
        C,
        /* @__PURE__ */ t.jsx(Wr, { $collapsed: p }),
        P
      ]
    }
  );
}, Cr = n.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  height: 100svh;
  min-height: 100svh;
  height: 100dvh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`, $r = n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`, Mr = n.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(209, 213, 219, 1);
  padding: 8px 4px;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`, Sr = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 0.3)" : "transparent"};
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;

  &:active {
    background-color: rgba(209, 213, 219, 0.5);
  }
`, Lr = n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
`, Dr = n.span`
  font-size: 12px;
  font-weight: ${({ $selected: e }) => e ? "600" : "400"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  text-align: center;
  white-space: nowrap;
`, Tr = n.div`
  width: ${({ $collapsed: e, $width: o, $collapsedWidth: i }) => e ? i : o};
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
`, Er = n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`, Ir = n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`, Pr = n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`, Rr = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, Se = n.div`
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
`, zr = n.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed: e }) => e ? "center" : "flex-start"};
  gap: ${({ $collapsed: e }) => e ? "0" : "12px"};
  padding: ${({ $collapsed: e }) => e ? "0" : "10px 17px"};
  margin: 4px 0;
  border-radius: 8px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
  
  /* В свернутом состоянии делаем иконку квадратной с отступами */
  ${({ $collapsed: e }) => e && `
    width: 48px;
    height: 48px;
    margin: 4px auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`, Br = n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Fr = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $collapsed: e }) => e ? `
    width: 48px;
    height: 48px;
  ` : `
    min-width: 21px;
    width: 21px;
    height: auto;
  `}
  
  & > svg {
    ${({ $collapsed: e }) => e ? `
      width: 24px;
      height: 24px;
    ` : `
      width: 100%;
      height: auto;
    `}
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`, Ar = n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, _r = n.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Le = n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Or = n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, Nr = n.div`
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
`, Wr = n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Yr = n.div`
  width: 100%;
  margin-top: auto;
  padding: ${({ $collapsed: e }) => e ? "8px 0" : "12px 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Адаптация для свернутого состояния */
  ${({ $collapsed: e }) => e && `
    & > * {
      transform: scale(0.9);
    }
  `}
`, Hr = (e) => {
  const o = e.replace(/\D/g, ""), r = (o.startsWith("8") || o.length === 0 ? o : `8${o}`).slice(0, 11);
  let s = "";
  return r.length > 0 && (s += "8"), r.length > 1 && (s += ` (${r.slice(1, 4)}`), r.length > 4 && (s += `) ${r.slice(4, 7)}`), r.length > 7 && (s += `-${r.slice(7, 9)}`), r.length > 9 && (s += `-${r.slice(9, 11)}`), s;
}, Vr = ({ value: e, onChange: o, placeholder: i = "8 (xxx) xxx-xx-xx", tabIndex: r }) => {
  const s = (c) => {
    const u = Hr(c.target.value);
    o(u);
  };
  return /* @__PURE__ */ t.jsx(Zr, { type: "text", value: e, onChange: s, placeholder: i, maxLength: 18, tabIndex: r });
}, Zr = n.input`
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
  display: block;

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`, Ur = (e) => ({
  call_phone: e.call_phone ?? e.callPhone,
  check_id: e.check_id ?? e.checkId,
  name_required: e.name_required ?? e.nameRequired
}), Xr = async (e, o) => {
  const r = await oe("/auth/call/initiate", {
    method: "POST",
    body: {
      phone: e,
      user_type: o
    }
  });
  return Ur(r);
}, qr = (e, o, i, r) => oe("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: o,
    checkId: o,
    user_type: i,
    userType: i,
    name: r
  }
}), Ji = () => oe("/auth/session/info", { method: "GET" }), Gr = ({
  isOpen: e,
  onClose: o,
  onSubmit: i,
  error: r,
  isLoading: s = !1
}) => {
  const [c, u] = B("");
  if (!e) return null;
  const g = (y) => {
    y.preventDefault(), i(c);
  };
  return /* @__PURE__ */ t.jsx(Jr, { onClick: o, children: /* @__PURE__ */ t.jsx(Kr, { onClick: (y) => y.stopPropagation(), children: /* @__PURE__ */ t.jsxs(Qr, { onSubmit: g, children: [
    /* @__PURE__ */ t.jsx(ei, { children: "Как вас зовут?" }),
    /* @__PURE__ */ t.jsxs(ti, { children: [
      /* @__PURE__ */ t.jsx(
        Ie,
        {
          type: "text",
          value: c,
          onChange: (y) => u(y.target.value),
          placeholder: "Иванов Иван Иванович",
          disabled: s,
          autoFocus: !0,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ t.jsx(
        ni,
        {
          type: "submit",
          disabled: s || !c.trim(),
          children: s ? "..." : "→"
        }
      )
    ] }),
    r && /* @__PURE__ */ t.jsx(oi, { children: r })
  ] }) }) });
}, Jr = n.div`
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
`, Kr = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`, Qr = n.form`
  display: flex;
  flex-direction: column;
`, ei = n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`, ti = n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`, ni = n(ae)`
  width: auto;
  min-width: 50px;
  height: 40px;
  padding: 0 10px;
  font-size: 20px;
  border-radius: 8px;
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, oi = n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`, Ki = ({
  onLoginSuccess: e,
  userType: o = "delivery_operator",
  title: i = "Авторизация",
  submitLabel: r = "Войти",
  placeholder: s = "8 (xxx) xxx-xx-xx",
  supportPhone: c = "8 989 924 24 24",
  supportLinkUrl: u = "https://waypay.one",
  supportLinkText: g = "waypay.one",
  className: y,
  style: b,
  pollingIntervalMs: m = 3e3,
  enableRegistration: x = !1,
  enableSupport: v = !0
}) => {
  const [h, d] = B(!1), [l, P] = B(""), [k, E] = B(!1), [R, O] = B(""), [F, T] = B(""), [V, z] = B(!1), [N, W] = B(!1), [A, w] = B(""), [p, $] = B(""), [D, Y] = B(null), H = X(void 0);
  U(() => () => {
    H.current && clearInterval(H.current);
  }, []);
  const Z = (f) => {
    const L = f.replace(/\D/g, "");
    return L ? L.startsWith("8") ? `+7${L.slice(1)}` : L.startsWith("7") ? `+${L}` : `+${L}` : "";
  }, j = () => {
    E(!1), W(!1), w(""), $(""), Y(null), H.current && window.clearInterval(H.current);
  }, M = async (f) => {
    if (f.preventDefault(), !l) {
      T("Введите номер телефона");
      return;
    }
    d(!0), T("");
    const L = Z(l);
    try {
      const S = await Xr(L, o);
      Y({
        phone: L,
        checkId: S.check_id,
        callPhone: S.call_phone
      }), x && "name_required" in S && S.name_required ? (W(!0), O(S.call_phone)) : !x && "name_required" in S && S.name_required ? (T(
        "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
      ), Y(null)) : (O(S.call_phone), E(!0), C(L, S.check_id));
    } catch (S) {
      console.error("Auth error:", S), S && S.response && S.response.data ? T(S.response.data) : S instanceof Error ? T(S.message) : T("Произошла ошибка при авторизации");
    } finally {
      d(!1);
    }
  }, a = async (f) => {
    if (!f.trim()) {
      $("Введите ФИО");
      return;
    }
    if (D) {
      d(!0), $("");
      try {
        w(f), W(!1), E(!0), C(D.phone, D.checkId, f);
      } catch (L) {
        console.error("Registration error:", L), $("Не удалось завершить регистрацию");
      } finally {
        d(!1);
      }
    }
  }, C = (f, L, S) => {
    H.current && window.clearInterval(H.current), H.current = window.setInterval(() => {
      I(f, L, S);
    }, m);
  }, I = async (f, L, S) => {
    if (!V) {
      z(!0);
      try {
        const _ = await qr(f, L, o, S || A);
        (_.access_token && _.refresh_token || _.accessToken && _.refreshToken) && (H.current && window.clearInterval(H.current), E(!1), W(!1), w(""), Y(null), e(_.access_token ?? _.accessToken));
      } catch (_) {
        console.error("Verification error:", _);
      } finally {
        z(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(ri, { className: y, style: b, children: [
    /* @__PURE__ */ t.jsxs(ii, { children: [
      /* @__PURE__ */ t.jsxs(si, { onSubmit: M, children: [
        /* @__PURE__ */ t.jsx(ai, { children: i }),
        /* @__PURE__ */ t.jsx(li, { children: /* @__PURE__ */ t.jsx(ci, { children: /* @__PURE__ */ t.jsx(
          Vr,
          {
            value: l,
            onChange: (f) => P(f),
            placeholder: s
          }
        ) }) }),
        F && /* @__PURE__ */ t.jsx(xi, { children: /* @__PURE__ */ t.jsx("span", { children: F }) }),
        /* @__PURE__ */ t.jsx(di, { type: "submit", disabled: h, children: h ? "Загрузка..." : r })
      ] }),
      v && /* @__PURE__ */ t.jsxs(pi, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(ui, { href: `tel:${c}`, children: c }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(hi, { href: u, target: "_blank", rel: "noreferrer", children: g })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      Gr,
      {
        isOpen: N,
        onClose: j,
        onSubmit: a,
        error: p,
        isLoading: h
      }
    ),
    /* @__PURE__ */ t.jsx(
      gr,
      {
        isOpen: k,
        onClose: j,
        callPhone: R,
        error: F
      }
    )
  ] });
}, ri = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`, ii = n.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  max-height: calc(100vh - 40px); /* Ограничиваем высоту с учетом padding контейнера */
  overflow-y: auto; /* Добавляем прокрутку внутри карточки если контент не помещается */
  padding: 40px;
  position: relative;

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
    max-height: calc(100vh - 40px);
  }

  /* Скрываем скроллбар для Chrome, Safari и Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Скрываем скроллбар для IE, Edge и Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`, si = n.form`
  display: flex;
  flex-direction: column;
`, ai = n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, li = n.div`
  margin-bottom: 25px;
`, ci = n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`, di = n.button`
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
`, pi = n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, ui = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, hi = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, xi = n.div`
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
`, gi = (e) => {
  let o = 0;
  for (let r = 0; r < e.length; r++)
    o = e.charCodeAt(r) + ((o << 5) - o);
  return `hsl(${Math.abs(o % 360)}, 60%, 60%)`;
}, Qi = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((r) => r.length > 0).map((r) => r[0].toUpperCase()).join("").slice(0, 2) || "?", es = (e, o = 100) => {
  const i = document.createElement("canvas");
  i.width = o, i.height = o;
  const r = i.getContext("2d");
  if (!r) return "";
  const s = gi(e);
  r.fillStyle = s, r.beginPath(), r.arc(o / 2, o / 2, o / 2, 0, Math.PI * 2), r.fill(), r.fillStyle = "#ffffff";
  const c = o / 2;
  r.font = `bold ${c}px "Manrope", Arial, sans-serif`, r.textAlign = "center", r.textBaseline = "middle";
  const u = c * 0.1;
  return r.fillText(e, o / 2, o / 2 + u), i.toDataURL("image/png");
}, ts = (e) => {
  if (!e) return "";
  const o = typeof e == "string" ? new Date(e) : e;
  if (isNaN(o.getTime())) return "";
  const i = o.getDate().toString().padStart(2, "0"), r = (o.getMonth() + 1).toString().padStart(2, "0"), s = o.getFullYear();
  return `${i}-${r}-${s}`;
};
function ns(e) {
  return new Date(e);
}
const fi = (e) => {
  let o;
  try {
    if (e instanceof Date)
      o = e;
    else if (typeof e == "string" || typeof e == "number")
      o = new Date(e);
    else
      throw new Error("Неподдерживаемый тип данных");
    if (isNaN(o.getTime()))
      return "неверная дата";
    const i = /* @__PURE__ */ new Date();
    if (o > i) {
      const m = Math.floor((o.getTime() - i.getTime()) / 1e3), x = Math.floor(m / 60), v = Math.floor(x / 60), h = Math.floor(v / 24);
      return m < 10 ? "скоро" : m < 60 ? `через ${m} секунд` : x === 1 ? "через минуту" : x < 60 ? `через ${x} минут` : v === 1 ? "через час" : v < 24 ? `через ${v} часов` : h === 1 ? "завтра" : h < 7 ? `через ${h} дней` : "в будущем";
    }
    const r = Math.floor((i.getTime() - o.getTime()) / 1e3), s = Math.floor(r / 60), c = Math.floor(s / 60), u = Math.floor(c / 24), g = Math.floor(u / 7), y = Math.floor(u / 30), b = Math.floor(u / 365);
    if (r < 10)
      return "только что";
    if (r < 60) {
      const m = Math.max(1, r);
      return m === 1 ? "секунду назад" : m < 5 ? `${m} секунды назад` : `${m} секунд назад`;
    }
    return s < 60 ? s === 1 ? "минуту назад" : s < 5 ? `${s} минуты назад` : `${s} минут назад` : c < 24 ? c === 1 ? "час назад" : c < 5 ? `${c} часа назад` : `${c} часов назад` : u < 7 ? u === 1 ? "вчера" : u === 2 ? "позавчера" : `${u} дня назад` : g < 4 ? g === 1 ? "неделю назад" : g < 5 ? `${g} недели назад` : `${g} недель назад` : y < 12 ? y === 1 ? "месяц назад" : y < 5 ? `${y} месяца назад` : `${y} месяцев назад` : b === 1 ? "год назад" : b < 5 ? `${b} года назад` : `${b} лет назад`;
  } catch (i) {
    return console.error("Ошибка форматирования относительного времени:", i), "ошибка даты";
  }
}, bi = (e) => {
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
}, os = (e, o = {}) => {
  const { useExactAfterMonths: i = 6, includeTime: r = !0 } = o, s = new Date(e);
  return isNaN(s.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= i ? r ? bi(s) : s.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : fi(s);
};
export {
  Te as API_BASE_URL,
  ki as AddButton,
  gr as AuthCallModal,
  Ki as AuthPage,
  Ci as BackButton,
  pn as BaseModal,
  Di as Checkbox,
  Ui as ColumnChart,
  De as ContextMenu,
  _i as CountInfoTitle,
  xe as CustomCalendar,
  Ie as CustomInput,
  Vr as CustomPhoneInput,
  Li as CustomSelect,
  yi as CustomTable,
  Ri as CustomTextArea,
  Be as CustomTitle,
  ae as DefaultButton,
  $i as DeleteButton,
  Mi as EditButton,
  Ai as EntitySelectContainer,
  Si as ExportButton,
  Ii as InputContainer,
  Ei as InputLabel,
  Ti as InputRow,
  Oi as InputTitle,
  Ni as ModalInfoTitle,
  Pi as Pagination,
  zi as PeriodField,
  Bi as PhoneModalInput,
  qi as PhotoViewerModal,
  Hi as ProgressBar,
  Yi as RadioButton,
  Xi as ScatterPlot,
  Gi as SideMenu,
  kr as SideMenuContext,
  Fi as Tabs,
  ze as TitleField,
  Wi as ToggleSwitch,
  Vi as YandexMapSelector,
  oe as apiRequest,
  ji as authStorage,
  qr as confirmCallAuth,
  ts as formatDate,
  bi as formatExactDate,
  je as formatMoney,
  fi as formatRelativeTime,
  os as formatRelativeTimeExtended,
  es as generateAvatar,
  Qi as getInitials,
  Ji as getSessionInfo,
  Xr as initiateCallAuth,
  ns as parseDateInput,
  Zi as parseMoney,
  ct as refreshAccessToken,
  gi as stringToColor
};
