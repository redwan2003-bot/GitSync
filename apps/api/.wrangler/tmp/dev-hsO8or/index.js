var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-jgGhTq/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-jgGhTq/checked-fetch.js"() {
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../node_modules/.pnpm/wrangler@4.95.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/.pnpm/wrangler@4.95.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/@neondatabase+serverless@0.10.0/node_modules/@neondatabase/serverless/index.js
var require_serverless = __commonJS({
  "../../node_modules/.pnpm/@neondatabase+serverless@0.10.0/node_modules/@neondatabase/serverless/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var no = Object.create;
    var Ie = Object.defineProperty;
    var io = Object.getOwnPropertyDescriptor;
    var so = Object.getOwnPropertyNames;
    var oo = Object.getPrototypeOf;
    var ao = Object.prototype.hasOwnProperty;
    var uo = /* @__PURE__ */ __name((r, e, t) => e in r ? Ie(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, "uo");
    var a = /* @__PURE__ */ __name((r, e) => Ie(r, "name", { value: e, configurable: true }), "a");
    var z = /* @__PURE__ */ __name((r, e) => () => (r && (e = r(r = 0)), e), "z");
    var I = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "I");
    var te = /* @__PURE__ */ __name((r, e) => {
      for (var t in e)
        Ie(r, t, { get: e[t], enumerable: true });
    }, "te");
    var In = /* @__PURE__ */ __name((r, e, t, n) => {
      if (e && typeof e == "object" || typeof e == "function") for (let i of so(e)) !ao.call(r, i) && i !== t && Ie(r, i, { get: /* @__PURE__ */ __name(() => e[i], "get"), enumerable: !(n = io(e, i)) || n.enumerable });
      return r;
    }, "In");
    var Pe = /* @__PURE__ */ __name((r, e, t) => (t = r != null ? no(oo(r)) : {}, In(e || !r || !r.__esModule ? Ie(t, "default", {
      value: r,
      enumerable: true
    }) : t, r)), "Pe");
    var N = /* @__PURE__ */ __name((r) => In(Ie({}, "__esModule", { value: true }), r), "N");
    var _ = /* @__PURE__ */ __name((r, e, t) => uo(r, typeof e != "symbol" ? e + "" : e, t), "_");
    var Ln = I((it) => {
      "use strict";
      p();
      it.byteLength = ho;
      it.toByteArray = fo;
      it.fromByteArray = mo;
      var oe = [], re = [], co = typeof Uint8Array < "u" ? Uint8Array : Array, Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (Ae = 0, Pn = Rt.length; Ae < Pn; ++Ae)
        oe[Ae] = Rt[Ae], re[Rt.charCodeAt(Ae)] = Ae;
      var Ae, Pn;
      re[45] = 62;
      re[95] = 63;
      function Bn(r) {
        var e = r.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var t = r.indexOf("=");
        t === -1 && (t = e);
        var n = t === e ? 0 : 4 - t % 4;
        return [t, n];
      }
      __name(Bn, "Bn");
      a(
        Bn,
        "getLens"
      );
      function ho(r) {
        var e = Bn(r), t = e[0], n = e[1];
        return (t + n) * 3 / 4 - n;
      }
      __name(ho, "ho");
      a(ho, "byteLength");
      function lo(r, e, t) {
        return (e + t) * 3 / 4 - t;
      }
      __name(lo, "lo");
      a(lo, "_byteLength");
      function fo(r) {
        var e, t = Bn(r), n = t[0], i = t[1], s = new co(lo(r, n, i)), o = 0, u = i > 0 ? n - 4 : n, c;
        for (c = 0; c < u; c += 4) e = re[r.charCodeAt(c)] << 18 | re[r.charCodeAt(c + 1)] << 12 | re[r.charCodeAt(c + 2)] << 6 | re[r.charCodeAt(c + 3)], s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255;
        return i === 2 && (e = re[r.charCodeAt(c)] << 2 | re[r.charCodeAt(c + 1)] >> 4, s[o++] = e & 255), i === 1 && (e = re[r.charCodeAt(
          c
        )] << 10 | re[r.charCodeAt(c + 1)] << 4 | re[r.charCodeAt(c + 2)] >> 2, s[o++] = e >> 8 & 255, s[o++] = e & 255), s;
      }
      __name(fo, "fo");
      a(fo, "toByteArray");
      function po(r) {
        return oe[r >> 18 & 63] + oe[r >> 12 & 63] + oe[r >> 6 & 63] + oe[r & 63];
      }
      __name(po, "po");
      a(po, "tripletToBase64");
      function yo(r, e, t) {
        for (var n, i = [], s = e; s < t; s += 3) n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(po(n));
        return i.join(
          ""
        );
      }
      __name(yo, "yo");
      a(yo, "encodeChunk");
      function mo(r) {
        for (var e, t = r.length, n = t % 3, i = [], s = 16383, o = 0, u = t - n; o < u; o += s) i.push(yo(r, o, o + s > u ? u : o + s));
        return n === 1 ? (e = r[t - 1], i.push(oe[e >> 2] + oe[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(oe[e >> 10] + oe[e >> 4 & 63] + oe[e << 2 & 63] + "=")), i.join("");
      }
      __name(mo, "mo");
      a(mo, "fromByteArray");
    });
    var Rn = I((Ft) => {
      p();
      Ft.read = function(r, e, t, n, i) {
        var s, o, u = i * 8 - n - 1, c = (1 << u) - 1, h = c >> 1, l = -7, d = t ? i - 1 : 0, b = t ? -1 : 1, C = r[e + d];
        for (d += b, s = C & (1 << -l) - 1, C >>= -l, l += u; l > 0; s = s * 256 + r[e + d], d += b, l -= 8) ;
        for (o = s & (1 << -l) - 1, s >>= -l, l += n; l > 0; o = o * 256 + r[e + d], d += b, l -= 8) ;
        if (s === 0) s = 1 - h;
        else {
          if (s === c) return o ? NaN : (C ? -1 : 1) * (1 / 0);
          o = o + Math.pow(2, n), s = s - h;
        }
        return (C ? -1 : 1) * o * Math.pow(2, s - n);
      };
      Ft.write = function(r, e, t, n, i, s) {
        var o, u, c, h = s * 8 - i - 1, l = (1 << h) - 1, d = l >> 1, b = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = n ? 0 : s - 1, B = n ? 1 : -1, j = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + d >= 1 ? e += b / c : e += b * Math.pow(2, 1 - d), e * c >= 2 && (o++, c /= 2), o + d >= l ? (u = 0, o = l) : o + d >= 1 ? (u = (e * c - 1) * Math.pow(
          2,
          i
        ), o = o + d) : (u = e * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; r[t + C] = u & 255, C += B, u /= 256, i -= 8) ;
        for (o = o << i | u, h += i; h > 0; r[t + C] = o & 255, C += B, o /= 256, h -= 8) ;
        r[t + C - B] |= j * 128;
      };
    });
    var zn = I((Fe) => {
      "use strict";
      p();
      var Mt = Ln(), Le = Rn(), Fn = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
      Fe.Buffer = f;
      Fe.SlowBuffer = xo;
      Fe.INSPECT_MAX_BYTES = 50;
      var st = 2147483647;
      Fe.kMaxLength = st;
      f.TYPED_ARRAY_SUPPORT = go();
      !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function go() {
        try {
          let r = new Uint8Array(1), e = { foo: a(function() {
            return 42;
          }, "foo") };
          return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(
            r,
            e
          ), r.foo() === 42;
        } catch {
          return false;
        }
      }
      __name(go, "go");
      a(go, "typedArraySupport");
      Object.defineProperty(
        f.prototype,
        "parent",
        { enumerable: true, get: a(function() {
          if (f.isBuffer(this)) return this.buffer;
        }, "get") }
      );
      Object.defineProperty(f.prototype, "offset", { enumerable: true, get: a(
        function() {
          if (f.isBuffer(this)) return this.byteOffset;
        },
        "get"
      ) });
      function fe(r) {
        if (r > st) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let e = new Uint8Array(
          r
        );
        return Object.setPrototypeOf(e, f.prototype), e;
      }
      __name(fe, "fe");
      a(fe, "createBuffer");
      function f(r, e, t) {
        if (typeof r == "number") {
          if (typeof e == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return Ut(r);
        }
        return On(
          r,
          e,
          t
        );
      }
      __name(f, "f");
      a(f, "Buffer");
      f.poolSize = 8192;
      function On(r, e, t) {
        if (typeof r == "string") return bo(
          r,
          e
        );
        if (ArrayBuffer.isView(r)) return So(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (ae(r, ArrayBuffer) || r && ae(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ae(r, SharedArrayBuffer) || r && ae(r.buffer, SharedArrayBuffer)))
          return kt(r, e, t);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return f.from(n, e, t);
        let i = Eo(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return f.from(r[Symbol.toPrimitive]("string"), e, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
      }
      __name(On, "On");
      a(On, "from");
      f.from = function(r, e, t) {
        return On(r, e, t);
      };
      Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(
        f,
        Uint8Array
      );
      function Un(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"');
      }
      __name(Un, "Un");
      a(Un, "assertSize");
      function wo(r, e, t) {
        return Un(r), r <= 0 ? fe(r) : e !== void 0 ? typeof t == "string" ? fe(r).fill(e, t) : fe(r).fill(e) : fe(r);
      }
      __name(wo, "wo");
      a(
        wo,
        "alloc"
      );
      f.alloc = function(r, e, t) {
        return wo(r, e, t);
      };
      function Ut(r) {
        return Un(r), fe(
          r < 0 ? 0 : Nt(r) | 0
        );
      }
      __name(Ut, "Ut");
      a(Ut, "allocUnsafe");
      f.allocUnsafe = function(r) {
        return Ut(r);
      };
      f.allocUnsafeSlow = function(r) {
        return Ut(r);
      };
      function bo(r, e) {
        if ((typeof e != "string" || e === "") && (e = "utf8"), !f.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
        let t = Nn(r, e) | 0, n = fe(t), i = n.write(r, e);
        return i !== t && (n = n.slice(0, i)), n;
      }
      __name(bo, "bo");
      a(bo, "fromString");
      function Dt(r) {
        let e = r.length < 0 ? 0 : Nt(r.length) | 0, t = fe(e);
        for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
        return t;
      }
      __name(Dt, "Dt");
      a(Dt, "fromArrayLike");
      function So(r) {
        if (ae(r, Uint8Array)) {
          let e = new Uint8Array(r);
          return kt(e.buffer, e.byteOffset, e.byteLength);
        }
        return Dt(r);
      }
      __name(So, "So");
      a(So, "fromArrayView");
      function kt(r, e, t) {
        if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return e === void 0 && t === void 0 ? n = new Uint8Array(
          r
        ) : t === void 0 ? n = new Uint8Array(r, e) : n = new Uint8Array(r, e, t), Object.setPrototypeOf(
          n,
          f.prototype
        ), n;
      }
      __name(kt, "kt");
      a(kt, "fromArrayBuffer");
      function Eo(r) {
        if (f.isBuffer(r)) {
          let e = Nt(
            r.length
          ) | 0, t = fe(e);
          return t.length === 0 || r.copy(t, 0, 0, e), t;
        }
        if (r.length !== void 0)
          return typeof r.length != "number" || Qt(r.length) ? fe(0) : Dt(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return Dt(r.data);
      }
      __name(Eo, "Eo");
      a(Eo, "fromObject");
      function Nt(r) {
        if (r >= st) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + st.toString(16) + " bytes");
        return r | 0;
      }
      __name(Nt, "Nt");
      a(Nt, "checked");
      function xo(r) {
        return +r != r && (r = 0), f.alloc(+r);
      }
      __name(xo, "xo");
      a(xo, "SlowBuffer");
      f.isBuffer = a(function(e) {
        return e != null && e._isBuffer === true && e !== f.prototype;
      }, "isBuffer");
      f.compare = a(function(e, t) {
        if (ae(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), ae(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let n = e.length, i = t.length;
        for (let s = 0, o = Math.min(n, i); s < o; ++s) if (e[s] !== t[s]) {
          n = e[s], i = t[s];
          break;
        }
        return n < i ? -1 : i < n ? 1 : 0;
      }, "compare");
      f.isEncoding = a(function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      }, "isEncoding");
      f.concat = a(function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0) return f.alloc(0);
        let n;
        if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        let i = f.allocUnsafe(t), s = 0;
        for (n = 0; n < e.length; ++n) {
          let o = e[n];
          if (ae(o, Uint8Array)) s + o.length > i.length ? (f.isBuffer(
            o
          ) || (o = f.from(o)), o.copy(i, s)) : Uint8Array.prototype.set.call(i, o, s);
          else if (f.isBuffer(
            o
          )) o.copy(i, s);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          s += o.length;
        }
        return i;
      }, "concat");
      function Nn(r, e) {
        if (f.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || ae(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        let t = r.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && t === 0) return 0;
        let i = false;
        for (; ; ) switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
            return Ot(r).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return t * 2;
          case "hex":
            return t >>> 1;
          case "base64":
            return Kn(r).length;
          default:
            if (i) return n ? -1 : Ot(r).length;
            e = ("" + e).toLowerCase(), i = true;
        }
      }
      __name(Nn, "Nn");
      a(Nn, "byteLength");
      f.byteLength = Nn;
      function vo(r, e, t) {
        let n = false;
        if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
        for (r || (r = "utf8"); ; ) switch (r) {
          case "hex":
            return Fo(
              this,
              e,
              t
            );
          case "utf8":
          case "utf-8":
            return Qn(this, e, t);
          case "ascii":
            return Lo(
              this,
              e,
              t
            );
          case "latin1":
          case "binary":
            return Ro(this, e, t);
          case "base64":
            return Po(
              this,
              e,
              t
            );
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Mo(this, e, t);
          default:
            if (n) throw new TypeError("Unknown encoding: " + r);
            r = (r + "").toLowerCase(), n = true;
        }
      }
      __name(vo, "vo");
      a(
        vo,
        "slowToString"
      );
      f.prototype._isBuffer = true;
      function Ce(r, e, t) {
        let n = r[e];
        r[e] = r[t], r[t] = n;
      }
      __name(Ce, "Ce");
      a(Ce, "swap");
      f.prototype.swap16 = a(function() {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) Ce(this, t, t + 1);
        return this;
      }, "swap16");
      f.prototype.swap32 = a(function() {
        let e = this.length;
        if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4) Ce(this, t, t + 3), Ce(this, t + 1, t + 2);
        return this;
      }, "swap32");
      f.prototype.swap64 = a(function() {
        let e = this.length;
        if (e % 8 !== 0) throw new RangeError(
          "Buffer size must be a multiple of 64-bits"
        );
        for (let t = 0; t < e; t += 8) Ce(this, t, t + 7), Ce(this, t + 1, t + 6), Ce(this, t + 2, t + 5), Ce(this, t + 3, t + 4);
        return this;
      }, "swap64");
      f.prototype.toString = a(function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? Qn(
          this,
          0,
          e
        ) : vo.apply(this, arguments);
      }, "toString");
      f.prototype.toLocaleString = f.prototype.toString;
      f.prototype.equals = a(function(e) {
        if (!f.isBuffer(e)) throw new TypeError(
          "Argument must be a Buffer"
        );
        return this === e ? true : f.compare(this, e) === 0;
      }, "equals");
      f.prototype.inspect = a(function() {
        let e = "", t = Fe.INSPECT_MAX_BYTES;
        return e = this.toString(
          "hex",
          0,
          t
        ).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      }, "inspect");
      Fn && (f.prototype[Fn] = f.prototype.inspect);
      f.prototype.compare = a(function(e, t, n, i, s) {
        if (ae(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), s === void 0 && (s = this.length), t < 0 || n > e.length || i < 0 || s > this.length) throw new RangeError("out of range index");
        if (i >= s && t >= n) return 0;
        if (i >= s) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === e) return 0;
        let o = s - i, u = n - t, c = Math.min(o, u), h = this.slice(i, s), l = e.slice(t, n);
        for (let d = 0; d < c; ++d)
          if (h[d] !== l[d]) {
            o = h[d], u = l[d];
            break;
          }
        return o < u ? -1 : u < o ? 1 : 0;
      }, "compare");
      function qn(r, e, t, n, i) {
        if (r.length === 0) return -1;
        if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Qt(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
          if (i) return -1;
          t = r.length - 1;
        } else if (t < 0) if (i) t = 0;
        else return -1;
        if (typeof e == "string" && (e = f.from(e, n)), f.isBuffer(e)) return e.length === 0 ? -1 : Mn(r, e, t, n, i);
        if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Mn(
          r,
          [e],
          t,
          n,
          i
        );
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(qn, "qn");
      a(qn, "bidirectionalIndexOf");
      function Mn(r, e, t, n, i) {
        let s = 1, o = r.length, u = e.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (r.length < 2 || e.length < 2) return -1;
          s = 2, o /= 2, u /= 2, t /= 2;
        }
        function c(l, d) {
          return s === 1 ? l[d] : l.readUInt16BE(d * s);
        }
        __name(c, "c");
        a(c, "read");
        let h;
        if (i) {
          let l = -1;
          for (h = t; h < o; h++) if (c(r, h) === c(e, l === -1 ? 0 : h - l)) {
            if (l === -1 && (l = h), h - l + 1 === u) return l * s;
          } else l !== -1 && (h -= h - l), l = -1;
        } else for (t + u > o && (t = o - u), h = t; h >= 0; h--) {
          let l = true;
          for (let d = 0; d < u; d++)
            if (c(r, h + d) !== c(e, d)) {
              l = false;
              break;
            }
          if (l) return h;
        }
        return -1;
      }
      __name(Mn, "Mn");
      a(Mn, "arrayIndexOf");
      f.prototype.includes = a(function(e, t, n) {
        return this.indexOf(e, t, n) !== -1;
      }, "includes");
      f.prototype.indexOf = a(function(e, t, n) {
        return qn(this, e, t, n, true);
      }, "indexOf");
      f.prototype.lastIndexOf = a(function(e, t, n) {
        return qn(this, e, t, n, false);
      }, "lastIndexOf");
      function _o(r, e, t, n) {
        t = Number(t) || 0;
        let i = r.length - t;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let s = e.length;
        n > s / 2 && (n = s / 2);
        let o;
        for (o = 0; o < n; ++o) {
          let u = parseInt(e.substr(o * 2, 2), 16);
          if (Qt(u))
            return o;
          r[t + o] = u;
        }
        return o;
      }
      __name(_o, "_o");
      a(_o, "hexWrite");
      function Ao(r, e, t, n) {
        return ot(Ot(
          e,
          r.length - t
        ), r, t, n);
      }
      __name(Ao, "Ao");
      a(Ao, "utf8Write");
      function Co(r, e, t, n) {
        return ot(Uo(e), r, t, n);
      }
      __name(Co, "Co");
      a(Co, "asciiWrite");
      function To(r, e, t, n) {
        return ot(Kn(e), r, t, n);
      }
      __name(To, "To");
      a(To, "base64Write");
      function Io(r, e, t, n) {
        return ot(No(e, r.length - t), r, t, n);
      }
      __name(Io, "Io");
      a(Io, "ucs2Write");
      f.prototype.write = a(function(e, t, n, i) {
        if (t === void 0) i = "utf8", n = this.length, t = 0;
        else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let s = this.length - t;
        if ((n === void 0 || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError(
          "Attempt to write outside buffer bounds"
        );
        i || (i = "utf8");
        let o = false;
        for (; ; ) switch (i) {
          case "hex":
            return _o(this, e, t, n);
          case "utf8":
          case "utf-8":
            return Ao(this, e, t, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Co(this, e, t, n);
          case "base64":
            return To(
              this,
              e,
              t,
              n
            );
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Io(this, e, t, n);
          default:
            if (o) throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), o = true;
        }
      }, "write");
      f.prototype.toJSON = a(function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      }, "toJSON");
      function Po(r, e, t) {
        return e === 0 && t === r.length ? Mt.fromByteArray(r) : Mt.fromByteArray(r.slice(e, t));
      }
      __name(Po, "Po");
      a(Po, "base64Slice");
      function Qn(r, e, t) {
        t = Math.min(r.length, t);
        let n = [], i = e;
        for (; i < t; ) {
          let s = r[i], o = null, u = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
          if (i + u <= t) {
            let c, h, l, d;
            switch (u) {
              case 1:
                s < 128 && (o = s);
                break;
              case 2:
                c = r[i + 1], (c & 192) === 128 && (d = (s & 31) << 6 | c & 63, d > 127 && (o = d));
                break;
              case 3:
                c = r[i + 1], h = r[i + 2], (c & 192) === 128 && (h & 192) === 128 && (d = (s & 15) << 12 | (c & 63) << 6 | h & 63, d > 2047 && (d < 55296 || d > 57343) && (o = d));
                break;
              case 4:
                c = r[i + 1], h = r[i + 2], l = r[i + 3], (c & 192) === 128 && (h & 192) === 128 && (l & 192) === 128 && (d = (s & 15) << 18 | (c & 63) << 12 | (h & 63) << 6 | l & 63, d > 65535 && d < 1114112 && (o = d));
            }
          }
          o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += u;
        }
        return Bo(n);
      }
      __name(Qn, "Qn");
      a(Qn, "utf8Slice");
      var Dn = 4096;
      function Bo(r) {
        let e = r.length;
        if (e <= Dn) return String.fromCharCode.apply(String, r);
        let t = "", n = 0;
        for (; n < e; ) t += String.fromCharCode.apply(String, r.slice(n, n += Dn));
        return t;
      }
      __name(Bo, "Bo");
      a(Bo, "decodeCodePointsArray");
      function Lo(r, e, t) {
        let n = "";
        t = Math.min(r.length, t);
        for (let i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
        return n;
      }
      __name(Lo, "Lo");
      a(Lo, "asciiSlice");
      function Ro(r, e, t) {
        let n = "";
        t = Math.min(r.length, t);
        for (let i = e; i < t; ++i) n += String.fromCharCode(r[i]);
        return n;
      }
      __name(Ro, "Ro");
      a(Ro, "latin1Slice");
      function Fo(r, e, t) {
        let n = r.length;
        (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
        let i = "";
        for (let s = e; s < t; ++s) i += qo[r[s]];
        return i;
      }
      __name(Fo, "Fo");
      a(Fo, "hexSlice");
      function Mo(r, e, t) {
        let n = r.slice(e, t), i = "";
        for (let s = 0; s < n.length - 1; s += 2) i += String.fromCharCode(n[s] + n[s + 1] * 256);
        return i;
      }
      __name(Mo, "Mo");
      a(Mo, "utf16leSlice");
      f.prototype.slice = a(function(e, t) {
        let n = this.length;
        e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
        let i = this.subarray(
          e,
          t
        );
        return Object.setPrototypeOf(i, f.prototype), i;
      }, "slice");
      function q(r, e, t) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + e > t) throw new RangeError(
          "Trying to access beyond buffer length"
        );
      }
      __name(q, "q");
      a(q, "checkOffset");
      f.prototype.readUintLE = f.prototype.readUIntLE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
        let i = this[e], s = 1, o = 0;
        for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
        return i;
      }, "readUIntLE");
      f.prototype.readUintBE = f.prototype.readUIntBE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
        let i = this[e + --t], s = 1;
        for (; t > 0 && (s *= 256); ) i += this[e + --t] * s;
        return i;
      }, "readUIntBE");
      f.prototype.readUint8 = f.prototype.readUInt8 = a(function(e, t) {
        return e = e >>> 0, t || q(e, 1, this.length), this[e];
      }, "readUInt8");
      f.prototype.readUint16LE = f.prototype.readUInt16LE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 2, this.length), this[e] | this[e + 1] << 8;
      }, "readUInt16LE");
      f.prototype.readUint16BE = f.prototype.readUInt16BE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 2, this.length), this[e] << 8 | this[e + 1];
      }, "readUInt16BE");
      f.prototype.readUint32LE = f.prototype.readUInt32LE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      }, "readUInt32LE");
      f.prototype.readUint32BE = f.prototype.readUInt32BE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      }, "readUInt32BE");
      f.prototype.readBigUInt64LE = we(a(function(e) {
        e = e >>> 0, Re(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(s) << BigInt(32));
      }, "readBigUInt64LE"));
      f.prototype.readBigUInt64BE = we(a(function(e) {
        e = e >>> 0, Re(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
        return (BigInt(
          i
        ) << BigInt(32)) + BigInt(s);
      }, "readBigUInt64BE"));
      f.prototype.readIntLE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
        let i = this[e], s = 1, o = 0;
        for (; ++o < t && (s *= 256); )
          i += this[e + o] * s;
        return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i;
      }, "readIntLE");
      f.prototype.readIntBE = a(function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
        let i = t, s = 1, o = this[e + --i];
        for (; i > 0 && (s *= 256); ) o += this[e + --i] * s;
        return s *= 128, o >= s && (o -= Math.pow(2, 8 * t)), o;
      }, "readIntBE");
      f.prototype.readInt8 = a(function(e, t) {
        return e = e >>> 0, t || q(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      }, "readInt8");
      f.prototype.readInt16LE = a(function(e, t) {
        e = e >>> 0, t || q(e, 2, this.length);
        let n = this[e] | this[e + 1] << 8;
        return n & 32768 ? n | 4294901760 : n;
      }, "readInt16LE");
      f.prototype.readInt16BE = a(
        function(e, t) {
          e = e >>> 0, t || q(e, 2, this.length);
          let n = this[e + 1] | this[e] << 8;
          return n & 32768 ? n | 4294901760 : n;
        },
        "readInt16BE"
      );
      f.prototype.readInt32LE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      }, "readInt32LE");
      f.prototype.readInt32BE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      }, "readInt32BE");
      f.prototype.readBigInt64LE = we(a(function(e) {
        e = e >>> 0, Re(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(
          e,
          this.length - 8
        );
        let i = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
        return (BigInt(
          i
        ) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      }, "readBigInt64LE"));
      f.prototype.readBigInt64BE = we(a(function(e) {
        e = e >>> 0, Re(e, "offset");
        let t = this[e], n = this[e + 7];
        (t === void 0 || n === void 0) && We(e, this.length - 8);
        let i = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(i) << BigInt(32)) + BigInt(
          this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n
        );
      }, "readBigInt64BE"));
      f.prototype.readFloatLE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 4, this.length), Le.read(
          this,
          e,
          true,
          23,
          4
        );
      }, "readFloatLE");
      f.prototype.readFloatBE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 4, this.length), Le.read(this, e, false, 23, 4);
      }, "readFloatBE");
      f.prototype.readDoubleLE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 8, this.length), Le.read(this, e, true, 52, 8);
      }, "readDoubleLE");
      f.prototype.readDoubleBE = a(function(e, t) {
        return e = e >>> 0, t || q(e, 8, this.length), Le.read(this, e, false, 52, 8);
      }, "readDoubleBE");
      function Y(r, e, t, n, i, s) {
        if (!f.isBuffer(
          r
        )) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
        if (t + n > r.length) throw new RangeError(
          "Index out of range"
        );
      }
      __name(Y, "Y");
      a(Y, "checkInt");
      f.prototype.writeUintLE = f.prototype.writeUIntLE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
          let u = Math.pow(2, 8 * n) - 1;
          Y(
            this,
            e,
            t,
            n,
            u,
            0
          );
        }
        let s = 1, o = 0;
        for (this[t] = e & 255; ++o < n && (s *= 256); ) this[t + o] = e / s & 255;
        return t + n;
      }, "writeUIntLE");
      f.prototype.writeUintBE = f.prototype.writeUIntBE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
          let u = Math.pow(2, 8 * n) - 1;
          Y(this, e, t, n, u, 0);
        }
        let s = n - 1, o = 1;
        for (this[t + s] = e & 255; --s >= 0 && (o *= 256); ) this[t + s] = e / o & 255;
        return t + n;
      }, "writeUIntBE");
      f.prototype.writeUint8 = f.prototype.writeUInt8 = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      }, "writeUInt8");
      f.prototype.writeUint16LE = f.prototype.writeUInt16LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(
          this,
          e,
          t,
          2,
          65535,
          0
        ), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      }, "writeUInt16LE");
      f.prototype.writeUint16BE = f.prototype.writeUInt16BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(
          this,
          e,
          t,
          2,
          65535,
          0
        ), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      }, "writeUInt16BE");
      f.prototype.writeUint32LE = f.prototype.writeUInt32LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(
          this,
          e,
          t,
          4,
          4294967295,
          0
        ), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      }, "writeUInt32LE");
      f.prototype.writeUint32BE = f.prototype.writeUInt32BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      }, "writeUInt32BE");
      function jn(r, e, t, n, i) {
        Vn(
          e,
          n,
          i,
          r,
          t,
          7
        );
        let s = Number(e & BigInt(4294967295));
        r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s;
        let o = Number(e >> BigInt(32) & BigInt(4294967295));
        return r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, t;
      }
      __name(jn, "jn");
      a(jn, "wrtBigUInt64LE");
      function Wn(r, e, t, n, i) {
        Vn(e, n, i, r, t, 7);
        let s = Number(e & BigInt(4294967295));
        r[t + 7] = s, s = s >> 8, r[t + 6] = s, s = s >> 8, r[t + 5] = s, s = s >> 8, r[t + 4] = s;
        let o = Number(e >> BigInt(32) & BigInt(4294967295));
        return r[t + 3] = o, o = o >> 8, r[t + 2] = o, o = o >> 8, r[t + 1] = o, o = o >> 8, r[t] = o, t + 8;
      }
      __name(Wn, "Wn");
      a(Wn, "wrtBigUInt64BE");
      f.prototype.writeBigUInt64LE = we(a(function(e, t = 0) {
        return jn(this, e, t, BigInt(0), BigInt(
          "0xffffffffffffffff"
        ));
      }, "writeBigUInt64LE"));
      f.prototype.writeBigUInt64BE = we(a(function(e, t = 0) {
        return Wn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      }, "writeBigUInt64BE"));
      f.prototype.writeIntLE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, !i) {
          let c = Math.pow(
            2,
            8 * n - 1
          );
          Y(this, e, t, n, c - 1, -c);
        }
        let s = 0, o = 1, u = 0;
        for (this[t] = e & 255; ++s < n && (o *= 256); ) e < 0 && u === 0 && this[t + s - 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
        return t + n;
      }, "writeIntLE");
      f.prototype.writeIntBE = a(function(e, t, n, i) {
        if (e = +e, t = t >>> 0, !i) {
          let c = Math.pow(
            2,
            8 * n - 1
          );
          Y(this, e, t, n, c - 1, -c);
        }
        let s = n - 1, o = 1, u = 0;
        for (this[t + s] = e & 255; --s >= 0 && (o *= 256); ) e < 0 && u === 0 && this[t + s + 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
        return t + n;
      }, "writeIntBE");
      f.prototype.writeInt8 = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(
          this,
          e,
          t,
          1,
          127,
          -128
        ), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      }, "writeInt8");
      f.prototype.writeInt16LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      }, "writeInt16LE");
      f.prototype.writeInt16BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      }, "writeInt16BE");
      f.prototype.writeInt32LE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      }, "writeInt32LE");
      f.prototype.writeInt32BE = a(function(e, t, n) {
        return e = +e, t = t >>> 0, n || Y(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      }, "writeInt32BE");
      f.prototype.writeBigInt64LE = we(a(function(e, t = 0) {
        return jn(this, e, t, -BigInt(
          "0x8000000000000000"
        ), BigInt("0x7fffffffffffffff"));
      }, "writeBigInt64LE"));
      f.prototype.writeBigInt64BE = we(a(function(e, t = 0) {
        return Wn(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }, "writeBigInt64BE"));
      function Hn(r, e, t, n, i, s) {
        if (t + n > r.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError(
          "Index out of range"
        );
      }
      __name(Hn, "Hn");
      a(Hn, "checkIEEE754");
      function Gn(r, e, t, n, i) {
        return e = +e, t = t >>> 0, i || Hn(r, e, t, 4, 34028234663852886e22, -34028234663852886e22), Le.write(
          r,
          e,
          t,
          n,
          23,
          4
        ), t + 4;
      }
      __name(Gn, "Gn");
      a(Gn, "writeFloat");
      f.prototype.writeFloatLE = a(function(e, t, n) {
        return Gn(
          this,
          e,
          t,
          true,
          n
        );
      }, "writeFloatLE");
      f.prototype.writeFloatBE = a(function(e, t, n) {
        return Gn(
          this,
          e,
          t,
          false,
          n
        );
      }, "writeFloatBE");
      function $n(r, e, t, n, i) {
        return e = +e, t = t >>> 0, i || Hn(
          r,
          e,
          t,
          8,
          17976931348623157e292,
          -17976931348623157e292
        ), Le.write(r, e, t, n, 52, 8), t + 8;
      }
      __name($n, "$n");
      a($n, "writeDouble");
      f.prototype.writeDoubleLE = a(function(e, t, n) {
        return $n(
          this,
          e,
          t,
          true,
          n
        );
      }, "writeDoubleLE");
      f.prototype.writeDoubleBE = a(function(e, t, n) {
        return $n(
          this,
          e,
          t,
          false,
          n
        );
      }, "writeDoubleBE");
      f.prototype.copy = a(function(e, t, n, i) {
        if (!f.isBuffer(
          e
        )) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError(
          "sourceEnd out of bounds"
        );
        i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
        let s = i - n;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), s;
      }, "copy");
      f.prototype.fill = a(function(e, t, n, i) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
          if (typeof i == "string" && !f.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (i === "utf8" && o < 128 || i === "latin1") && (e = o);
          }
        } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
        let s;
        if (typeof e == "number") for (s = t; s < n; ++s)
          this[s] = e;
        else {
          let o = f.isBuffer(e) ? e : f.from(e, i), u = o.length;
          if (u === 0) throw new TypeError(
            'The value "' + e + '" is invalid for argument "value"'
          );
          for (s = 0; s < n - t; ++s) this[s + t] = o[s % u];
        }
        return this;
      }, "fill");
      var Be = {};
      function qt(r, e, t) {
        var n;
        Be[r] = (n = class extends t {
          static {
            __name(this, "n");
          }
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: e.apply(this, arguments),
              writable: true,
              configurable: true
            }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
          }
          get code() {
            return r;
          }
          set code(s) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value: s,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${r}]: ${this.message}`;
          }
        }, a(n, "NodeError"), n);
      }
      __name(qt, "qt");
      a(qt, "E");
      qt("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      qt("ERR_INVALID_ARG_TYPE", function(r, e) {
        return `The "${r}" argument must be of type number. Received type ${typeof e}`;
      }, TypeError);
      qt("ERR_OUT_OF_RANGE", function(r, e, t) {
        let n = `The value of "${r}" is out of range.`, i = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = kn(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = kn(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n;
      }, RangeError);
      function kn(r) {
        let e = "", t = r.length, n = r[0] === "-" ? 1 : 0;
        for (; t >= n + 4; t -= 3) e = `_${r.slice(t - 3, t)}${e}`;
        return `${r.slice(
          0,
          t
        )}${e}`;
      }
      __name(kn, "kn");
      a(kn, "addNumericalSeparator");
      function Do(r, e, t) {
        Re(e, "offset"), (r[e] === void 0 || r[e + t] === void 0) && We(e, r.length - (t + 1));
      }
      __name(Do, "Do");
      a(Do, "checkBounds");
      function Vn(r, e, t, n, i, s) {
        if (r > t || r < e) {
          let o = typeof e == "bigint" ? "n" : "", u;
          throw s > 3 ? e === 0 || e === BigInt(0) ? u = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}` : u = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and < 2 ** ${(s + 1) * 8 - 1}${o}` : u = `>= ${e}${o} and <= ${t}${o}`, new Be.ERR_OUT_OF_RANGE(
            "value",
            u,
            r
          );
        }
        Do(n, i, s);
      }
      __name(Vn, "Vn");
      a(Vn, "checkIntBI");
      function Re(r, e) {
        if (typeof r != "number")
          throw new Be.ERR_INVALID_ARG_TYPE(e, "number", r);
      }
      __name(Re, "Re");
      a(Re, "validateNumber");
      function We(r, e, t) {
        throw Math.floor(r) !== r ? (Re(r, t), new Be.ERR_OUT_OF_RANGE(
          t || "offset",
          "an integer",
          r
        )) : e < 0 ? new Be.ERR_BUFFER_OUT_OF_BOUNDS() : new Be.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${e}`, r);
      }
      __name(We, "We");
      a(We, "boundsError");
      var ko = /[^+/0-9A-Za-z-_]/g;
      function Oo(r) {
        if (r = r.split("=")[0], r = r.trim().replace(ko, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0; ) r = r + "=";
        return r;
      }
      __name(Oo, "Oo");
      a(Oo, "base64clean");
      function Ot(r, e) {
        e = e || 1 / 0;
        let t, n = r.length, i = null, s = [];
        for (let o = 0; o < n; ++o) {
          if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
            if (!i) {
              if (t > 56319) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              } else if (o + 1 === n) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = t;
              continue;
            }
            if (t < 56320) {
              (e -= 3) > -1 && s.push(
                239,
                191,
                189
              ), i = t;
              continue;
            }
            t = (i - 55296 << 10 | t - 56320) + 65536;
          } else i && (e -= 3) > -1 && s.push(
            239,
            191,
            189
          );
          if (i = null, t < 128) {
            if ((e -= 1) < 0) break;
            s.push(t);
          } else if (t < 2048) {
            if ((e -= 2) < 0) break;
            s.push(t >> 6 | 192, t & 63 | 128);
          } else if (t < 65536) {
            if ((e -= 3) < 0) break;
            s.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
          } else if (t < 1114112) {
            if ((e -= 4) < 0) break;
            s.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return s;
      }
      __name(Ot, "Ot");
      a(
        Ot,
        "utf8ToBytes"
      );
      function Uo(r) {
        let e = [];
        for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(
          t
        ) & 255);
        return e;
      }
      __name(Uo, "Uo");
      a(Uo, "asciiToBytes");
      function No(r, e) {
        let t, n, i, s = [];
        for (let o = 0; o < r.length && !((e -= 2) < 0); ++o) t = r.charCodeAt(o), n = t >> 8, i = t % 256, s.push(i), s.push(n);
        return s;
      }
      __name(No, "No");
      a(No, "utf16leToBytes");
      function Kn(r) {
        return Mt.toByteArray(Oo(r));
      }
      __name(Kn, "Kn");
      a(Kn, "base64ToBytes");
      function ot(r, e, t, n) {
        let i;
        for (i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)
          e[i + t] = r[i];
        return i;
      }
      __name(ot, "ot");
      a(ot, "blitBuffer");
      function ae(r, e) {
        return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name;
      }
      __name(ae, "ae");
      a(ae, "isInstance");
      function Qt(r) {
        return r !== r;
      }
      __name(Qt, "Qt");
      a(Qt, "numberIsNaN");
      var qo = (function() {
        let r = "0123456789abcdef", e = new Array(256);
        for (let t = 0; t < 16; ++t) {
          let n = t * 16;
          for (let i = 0; i < 16; ++i) e[n + i] = r[t] + r[i];
        }
        return e;
      })();
      function we(r) {
        return typeof BigInt > "u" ? Qo : r;
      }
      __name(we, "we");
      a(we, "defineBigIntMethod");
      function Qo() {
        throw new Error("BigInt not supported");
      }
      __name(Qo, "Qo");
      a(Qo, "BufferBigIntNotDefined");
    });
    var S;
    var E;
    var x;
    var g;
    var y;
    var m;
    var p = z(() => {
      "use strict";
      S = globalThis, E = globalThis.setImmediate ?? ((r) => setTimeout(
        r,
        0
      )), x = globalThis.clearImmediate ?? ((r) => clearTimeout(r)), g = globalThis.crypto ?? {};
      g.subtle ?? (g.subtle = {});
      y = typeof globalThis.Buffer == "function" && typeof globalThis.Buffer.allocUnsafe == "function" ? globalThis.Buffer : zn().Buffer, m = globalThis.process ?? {};
      m.env ?? (m.env = {});
      try {
        m.nextTick(() => {
        });
      } catch {
        let e = Promise.resolve();
        m.nextTick = e.then.bind(e);
      }
    });
    var be = I((rh, jt) => {
      "use strict";
      p();
      var Me = typeof Reflect == "object" ? Reflect : null, Yn = Me && typeof Me.apply == "function" ? Me.apply : a(function(e, t, n) {
        return Function.prototype.apply.call(e, t, n);
      }, "ReflectApply"), at;
      Me && typeof Me.ownKeys == "function" ? at = Me.ownKeys : Object.getOwnPropertySymbols ? at = a(function(e) {
        return Object.getOwnPropertyNames(
          e
        ).concat(Object.getOwnPropertySymbols(e));
      }, "ReflectOwnKeys") : at = a(function(e) {
        return Object.getOwnPropertyNames(e);
      }, "ReflectOwnKeys");
      function jo(r) {
        console && console.warn && console.warn(r);
      }
      __name(jo, "jo");
      a(jo, "ProcessEmitWarning");
      var Jn = Number.isNaN || a(function(e) {
        return e !== e;
      }, "NumberIsNaN");
      function L() {
        L.init.call(this);
      }
      __name(L, "L");
      a(L, "EventEmitter");
      jt.exports = L;
      jt.exports.once = $o;
      L.EventEmitter = L;
      L.prototype._events = void 0;
      L.prototype._eventsCount = 0;
      L.prototype._maxListeners = void 0;
      var Zn = 10;
      function ut(r) {
        if (typeof r != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
      }
      __name(ut, "ut");
      a(ut, "checkListener");
      Object.defineProperty(L, "defaultMaxListeners", { enumerable: true, get: a(function() {
        return Zn;
      }, "get"), set: a(function(r) {
        if (typeof r != "number" || r < 0 || Jn(r)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
        Zn = r;
      }, "set") });
      L.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      };
      L.prototype.setMaxListeners = a(
        function(e) {
          if (typeof e != "number" || e < 0 || Jn(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this._maxListeners = e, this;
        },
        "setMaxListeners"
      );
      function Xn(r) {
        return r._maxListeners === void 0 ? L.defaultMaxListeners : r._maxListeners;
      }
      __name(Xn, "Xn");
      a(Xn, "_getMaxListeners");
      L.prototype.getMaxListeners = a(function() {
        return Xn(this);
      }, "getMaxListeners");
      L.prototype.emit = a(function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var i = e === "error", s = this._events;
        if (s !== void 0) i = i && s.error === void 0;
        else if (!i) return false;
        if (i) {
          var o;
          if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
          var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
          throw u.context = o, u;
        }
        var c = s[e];
        if (c === void 0) return false;
        if (typeof c == "function") Yn(c, this, t);
        else for (var h = c.length, l = ii(c, h), n = 0; n < h; ++n) Yn(
          l[n],
          this,
          t
        );
        return true;
      }, "emit");
      function ei(r, e, t, n) {
        var i, s, o;
        if (ut(t), s = r._events, s === void 0 ? (s = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (s.newListener !== void 0 && (r.emit(
          "newListener",
          e,
          t.listener ? t.listener : t
        ), s = r._events), o = s[e]), o === void 0) o = s[e] = t, ++r._eventsCount;
        else if (typeof o == "function" ? o = s[e] = n ? [t, o] : [o, t] : n ? o.unshift(
          t
        ) : o.push(t), i = Xn(r), i > 0 && o.length > i && !o.warned) {
          o.warned = true;
          var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          u.name = "MaxListenersExceededWarning", u.emitter = r, u.type = e, u.count = o.length, jo(u);
        }
        return r;
      }
      __name(ei, "ei");
      a(ei, "_addListener");
      L.prototype.addListener = a(function(e, t) {
        return ei(this, e, t, false);
      }, "addListener");
      L.prototype.on = L.prototype.addListener;
      L.prototype.prependListener = a(function(e, t) {
        return ei(this, e, t, true);
      }, "prependListener");
      function Wo() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      __name(Wo, "Wo");
      a(
        Wo,
        "onceWrapper"
      );
      function ti(r, e, t) {
        var n = {
          fired: false,
          wrapFn: void 0,
          target: r,
          type: e,
          listener: t
        }, i = Wo.bind(n);
        return i.listener = t, n.wrapFn = i, i;
      }
      __name(ti, "ti");
      a(ti, "_onceWrap");
      L.prototype.once = a(function(e, t) {
        return ut(t), this.on(e, ti(this, e, t)), this;
      }, "once");
      L.prototype.prependOnceListener = a(function(e, t) {
        return ut(t), this.prependListener(e, ti(
          this,
          e,
          t
        )), this;
      }, "prependOnceListener");
      L.prototype.removeListener = a(
        function(e, t) {
          var n, i, s, o, u;
          if (ut(t), i = this._events, i === void 0) return this;
          if (n = i[e], n === void 0) return this;
          if (n === t || n.listener === t) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
          else if (typeof n != "function") {
            for (s = -1, o = n.length - 1; o >= 0; o--) if (n[o] === t || n[o].listener === t) {
              u = n[o].listener, s = o;
              break;
            }
            if (s < 0) return this;
            s === 0 ? n.shift() : Ho(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, u || t);
          }
          return this;
        },
        "removeListener"
      );
      L.prototype.off = L.prototype.removeListener;
      L.prototype.removeAllListeners = a(function(e) {
        var t, n, i;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
        if (arguments.length === 0) {
          var s = Object.keys(n), o;
          for (i = 0; i < s.length; ++i) o = s[i], o !== "removeListener" && this.removeAllListeners(o);
          return this.removeAllListeners(
            "removeListener"
          ), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if (t = n[e], typeof t == "function") this.removeListener(e, t);
        else if (t !== void 0) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this;
      }, "removeAllListeners");
      function ri(r, e, t) {
        var n = r._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? Go(i) : ii(i, i.length);
      }
      __name(ri, "ri");
      a(ri, "_listeners");
      L.prototype.listeners = a(function(e) {
        return ri(this, e, true);
      }, "listeners");
      L.prototype.rawListeners = a(function(e) {
        return ri(this, e, false);
      }, "rawListeners");
      L.listenerCount = function(r, e) {
        return typeof r.listenerCount == "function" ? r.listenerCount(e) : ni.call(r, e);
      };
      L.prototype.listenerCount = ni;
      function ni(r) {
        var e = this._events;
        if (e !== void 0) {
          var t = e[r];
          if (typeof t == "function") return 1;
          if (t !== void 0) return t.length;
        }
        return 0;
      }
      __name(ni, "ni");
      a(ni, "listenerCount");
      L.prototype.eventNames = a(function() {
        return this._eventsCount > 0 ? at(this._events) : [];
      }, "eventNames");
      function ii(r, e) {
        for (var t = new Array(e), n = 0; n < e; ++n) t[n] = r[n];
        return t;
      }
      __name(ii, "ii");
      a(ii, "arrayClone");
      function Ho(r, e) {
        for (; e + 1 < r.length; e++) r[e] = r[e + 1];
        r.pop();
      }
      __name(Ho, "Ho");
      a(Ho, "spliceOne");
      function Go(r) {
        for (var e = new Array(r.length), t = 0; t < e.length; ++t)
          e[t] = r[t].listener || r[t];
        return e;
      }
      __name(Go, "Go");
      a(Go, "unwrapListeners");
      function $o(r, e) {
        return new Promise(
          function(t, n) {
            function i(o) {
              r.removeListener(e, s), n(o);
            }
            __name(i, "i");
            a(i, "errorListener");
            function s() {
              typeof r.removeListener == "function" && r.removeListener("error", i), t([].slice.call(
                arguments
              ));
            }
            __name(s, "s");
            a(s, "resolver"), si(r, e, s, { once: true }), e !== "error" && Vo(r, i, { once: true });
          }
        );
      }
      __name($o, "$o");
      a($o, "once");
      function Vo(r, e, t) {
        typeof r.on == "function" && si(r, "error", e, t);
      }
      __name(Vo, "Vo");
      a(
        Vo,
        "addErrorHandlerIfEventEmitter"
      );
      function si(r, e, t, n) {
        if (typeof r.on == "function")
          n.once ? r.once(e, t) : r.on(e, t);
        else if (typeof r.addEventListener == "function") r.addEventListener(
          e,
          a(/* @__PURE__ */ __name(function i(s) {
            n.once && r.removeEventListener(e, i), t(s);
          }, "i"), "wrapListener")
        );
        else
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
      }
      __name(si, "si");
      a(si, "eventTargetAgnosticAddListener");
    });
    var He = {};
    te(He, { default: /* @__PURE__ */ __name(() => Ko, "default") });
    var Ko;
    var Ge = z(() => {
      "use strict";
      p();
      Ko = {};
    });
    function $e(r) {
      let e = 1779033703, t = 3144134277, n = 1013904242, i = 2773480762, s = 1359893119, o = 2600822924, u = 528734635, c = 1541459225, h = 0, l = 0, d = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ], b = a(
        (A, w) => A >>> w | A << 32 - w,
        "rrot"
      ), C = new Uint32Array(64), B = new Uint8Array(64), j = a(() => {
        for (let R = 0, G = 0; R < 16; R++, G += 4) C[R] = B[G] << 24 | B[G + 1] << 16 | B[G + 2] << 8 | B[G + 3];
        for (let R = 16; R < 64; R++) {
          let G = b(C[R - 15], 7) ^ b(C[R - 15], 18) ^ C[R - 15] >>> 3, he = b(C[R - 2], 17) ^ b(C[R - 2], 19) ^ C[R - 2] >>> 10;
          C[R] = C[R - 16] + G + C[R - 7] + he | 0;
        }
        let A = e, w = t, P = n, V = i, O = s, W = o, ce = u, ee = c;
        for (let R = 0; R < 64; R++) {
          let G = b(
            O,
            6
          ) ^ b(O, 11) ^ b(O, 25), he = O & W ^ ~O & ce, ye = ee + G + he + d[R] + C[R] | 0, ve = b(A, 2) ^ b(A, 13) ^ b(A, 22), le = A & w ^ A & P ^ w & P, Te = ve + le | 0;
          ee = ce, ce = W, W = O, O = V + ye | 0, V = P, P = w, w = A, A = ye + Te | 0;
        }
        e = e + A | 0, t = t + w | 0, n = n + P | 0, i = i + V | 0, s = s + O | 0, o = o + W | 0, u = u + ce | 0, c = c + ee | 0, l = 0;
      }, "process"), X = a((A) => {
        typeof A == "string" && (A = new TextEncoder().encode(A));
        for (let w = 0; w < A.length; w++) B[l++] = A[w], l === 64 && j();
        h += A.length;
      }, "add"), de = a(() => {
        if (B[l++] = 128, l == 64 && j(), l + 8 > 64) {
          for (; l < 64; ) B[l++] = 0;
          j();
        }
        for (; l < 58; ) B[l++] = 0;
        let A = h * 8;
        B[l++] = A / 1099511627776 & 255, B[l++] = A / 4294967296 & 255, B[l++] = A >>> 24, B[l++] = A >>> 16 & 255, B[l++] = A >>> 8 & 255, B[l++] = A & 255, j();
        let w = new Uint8Array(32);
        return w[0] = e >>> 24, w[1] = e >>> 16 & 255, w[2] = e >>> 8 & 255, w[3] = e & 255, w[4] = t >>> 24, w[5] = t >>> 16 & 255, w[6] = t >>> 8 & 255, w[7] = t & 255, w[8] = n >>> 24, w[9] = n >>> 16 & 255, w[10] = n >>> 8 & 255, w[11] = n & 255, w[12] = i >>> 24, w[13] = i >>> 16 & 255, w[14] = i >>> 8 & 255, w[15] = i & 255, w[16] = s >>> 24, w[17] = s >>> 16 & 255, w[18] = s >>> 8 & 255, w[19] = s & 255, w[20] = o >>> 24, w[21] = o >>> 16 & 255, w[22] = o >>> 8 & 255, w[23] = o & 255, w[24] = u >>> 24, w[25] = u >>> 16 & 255, w[26] = u >>> 8 & 255, w[27] = u & 255, w[28] = c >>> 24, w[29] = c >>> 16 & 255, w[30] = c >>> 8 & 255, w[31] = c & 255, w;
      }, "digest");
      return r === void 0 ? { add: X, digest: de } : (X(r), de());
    }
    __name($e, "$e");
    var oi = z(
      () => {
        "use strict";
        p();
        a($e, "sha256");
      }
    );
    var U;
    var Ve;
    var ai = z(() => {
      "use strict";
      p();
      U = class U2 {
        static {
          __name(this, "U");
        }
        constructor() {
          _(
            this,
            "_dataLength",
            0
          );
          _(this, "_bufferLength", 0);
          _(this, "_state", new Int32Array(4));
          _(
            this,
            "_buffer",
            new ArrayBuffer(68)
          );
          _(this, "_buffer8");
          _(this, "_buffer32");
          this._buffer8 = new Uint8Array(
            this._buffer,
            0,
            68
          ), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
        }
        static hashByteArray(e, t = false) {
          return this.onePassHasher.start().appendByteArray(e).end(t);
        }
        static hashStr(e, t = false) {
          return this.onePassHasher.start().appendStr(e).end(t);
        }
        static hashAsciiStr(e, t = false) {
          return this.onePassHasher.start().appendAsciiStr(e).end(t);
        }
        static _hex(e) {
          let t = U2.hexChars, n = U2.hexOut, i, s, o, u;
          for (u = 0; u < 4; u += 1) for (s = u * 8, i = e[u], o = 0; o < 8; o += 2) n[s + 1 + o] = t.charAt(i & 15), i >>>= 4, n[s + 0 + o] = t.charAt(i & 15), i >>>= 4;
          return n.join("");
        }
        static _md5cycle(e, t) {
          let n = e[0], i = e[1], s = e[2], o = e[3];
          n += (i & s | ~i & o) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[10] - 42063 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & o | s & ~o) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i ^ s ^ o) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (s ^ (i | ~o)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + s | 0, e[0] = n + e[0] | 0, e[1] = i + e[1] | 0, e[2] = s + e[2] | 0, e[3] = o + e[3] | 0;
        }
        start() {
          return this._dataLength = 0, this._bufferLength = 0, this._state.set(U2.stateIdentity), this;
        }
        appendStr(e) {
          let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o;
          for (o = 0; o < e.length; o += 1) {
            if (s = e.charCodeAt(o), s < 128) t[i++] = s;
            else if (s < 2048) t[i++] = (s >>> 6) + 192, t[i++] = s & 63 | 128;
            else if (s < 55296 || s > 56319) t[i++] = (s >>> 12) + 224, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
            else {
              if (s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, s > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
              t[i++] = (s >>> 18) + 240, t[i++] = s >>> 12 & 63 | 128, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
            }
            i >= 64 && (this._dataLength += 64, U2._md5cycle(this._state, n), i -= 64, n[0] = n[16]);
          }
          return this._bufferLength = i, this;
        }
        appendAsciiStr(e) {
          let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
          for (; ; ) {
            for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e.charCodeAt(o++);
            if (i < 64) break;
            this._dataLength += 64, U2._md5cycle(
              this._state,
              n
            ), i = 0;
          }
          return this._bufferLength = i, this;
        }
        appendByteArray(e) {
          let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
          for (; ; ) {
            for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e[o++];
            if (i < 64) break;
            this._dataLength += 64, U2._md5cycle(
              this._state,
              n
            ), i = 0;
          }
          return this._bufferLength = i, this;
        }
        getState() {
          let e = this._state;
          return { buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)), buflen: this._bufferLength, length: this._dataLength, state: [e[0], e[1], e[2], e[3]] };
        }
        setState(e) {
          let t = e.buffer, n = e.state, i = this._state, s;
          for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], s = 0; s < t.length; s += 1) this._buffer8[s] = t.charCodeAt(s);
        }
        end(e = false) {
          let t = this._bufferLength, n = this._buffer8, i = this._buffer32, s = (t >> 2) + 1;
          this._dataLength += t;
          let o = this._dataLength * 8;
          if (n[t] = 128, n[t + 1] = n[t + 2] = n[t + 3] = 0, i.set(U2.buffer32Identity.subarray(s), s), t > 55 && (U2._md5cycle(this._state, i), i.set(U2.buffer32Identity)), o <= 4294967295)
            i[14] = o;
          else {
            let u = o.toString(16).match(/(.*?)(.{0,8})$/);
            if (u === null) return;
            let c = parseInt(
              u[2],
              16
            ), h = parseInt(u[1], 16) || 0;
            i[14] = c, i[15] = h;
          }
          return U2._md5cycle(this._state, i), e ? this._state : U2._hex(this._state);
        }
      };
      a(U, "Md5"), _(U, "stateIdentity", new Int32Array(
        [1732584193, -271733879, -1732584194, 271733878]
      )), _(U, "buffer32Identity", new Int32Array(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      )), _(U, "hexChars", "0123456789abcdef"), _(U, "hexOut", []), _(U, "onePassHasher", new U());
      Ve = U;
    });
    var Wt = {};
    te(Wt, { createHash: /* @__PURE__ */ __name(() => Yo, "createHash"), createHmac: /* @__PURE__ */ __name(() => Zo, "createHmac"), randomBytes: /* @__PURE__ */ __name(() => zo, "randomBytes") });
    function zo(r) {
      return g.getRandomValues(y.alloc(r));
    }
    __name(zo, "zo");
    function Yo(r) {
      if (r === "sha256") return { update: a(
        function(e) {
          return { digest: a(function() {
            return y.from($e(e));
          }, "digest") };
        },
        "update"
      ) };
      if (r === "md5") return { update: a(function(e) {
        return { digest: a(function() {
          return typeof e == "string" ? Ve.hashStr(e) : Ve.hashByteArray(e);
        }, "digest") };
      }, "update") };
      throw new Error(
        `Hash type '${r}' not supported`
      );
    }
    __name(Yo, "Yo");
    function Zo(r, e) {
      if (r !== "sha256") throw new Error(
        `Only sha256 is supported (requested: '${r}')`
      );
      return { update: a(function(t) {
        return {
          digest: a(function() {
            typeof e == "string" && (e = new TextEncoder().encode(e)), typeof t == "string" && (t = new TextEncoder().encode(t));
            let n = e.length;
            if (n > 64) e = $e(e);
            else if (n < 64) {
              let c = new Uint8Array(64);
              c.set(e), e = c;
            }
            let i = new Uint8Array(64), s = new Uint8Array(
              64
            );
            for (let c = 0; c < 64; c++) i[c] = 54 ^ e[c], s[c] = 92 ^ e[c];
            let o = new Uint8Array(t.length + 64);
            o.set(i, 0), o.set(t, 64);
            let u = new Uint8Array(96);
            return u.set(s, 0), u.set(
              $e(o),
              64
            ), y.from($e(u));
          }, "digest")
        };
      }, "update") };
    }
    __name(Zo, "Zo");
    var Ht = z(() => {
      "use strict";
      p();
      oi();
      ai();
      a(zo, "randomBytes");
      a(Yo, "createHash");
      a(Zo, "createHmac");
    });
    var $t = I((ui) => {
      "use strict";
      p();
      ui.parse = function(r, e) {
        return new Gt(r, e).parse();
      };
      var ct = class ct2 {
        static {
          __name(this, "ct");
        }
        constructor(e, t) {
          this.source = e, this.transform = t || Jo, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
        }
        isEof() {
          return this.position >= this.source.length;
        }
        nextCharacter() {
          var e = this.source[this.position++];
          return e === "\\" ? { value: this.source[this.position++], escaped: true } : { value: e, escaped: false };
        }
        record(e) {
          this.recorded.push(e);
        }
        newEntry(e) {
          var t;
          (this.recorded.length > 0 || e) && (t = this.recorded.join(""), t === "NULL" && !e && (t = null), t !== null && (t = this.transform(t)), this.entries.push(
            t
          ), this.recorded = []);
        }
        consumeDimensions() {
          if (this.source[0] === "[") for (; !this.isEof(); ) {
            var e = this.nextCharacter();
            if (e.value === "=") break;
          }
        }
        parse(e) {
          var t, n, i;
          for (this.consumeDimensions(); !this.isEof(); ) if (t = this.nextCharacter(), t.value === "{" && !i) this.dimension++, this.dimension > 1 && (n = new ct2(this.source.substr(this.position - 1), this.transform), this.entries.push(
            n.parse(true)
          ), this.position += n.position - 2);
          else if (t.value === "}" && !i) {
            if (this.dimension--, !this.dimension && (this.newEntry(), e)) return this.entries;
          } else t.value === '"' && !t.escaped ? (i && this.newEntry(true), i = !i) : t.value === "," && !i ? this.newEntry() : this.record(
            t.value
          );
          if (this.dimension !== 0) throw new Error("array dimension not balanced");
          return this.entries;
        }
      };
      a(ct, "ArrayParser");
      var Gt = ct;
      function Jo(r) {
        return r;
      }
      __name(Jo, "Jo");
      a(Jo, "identity");
    });
    var Vt = I((bh, ci) => {
      p();
      var Xo = $t();
      ci.exports = { create: a(function(r, e) {
        return { parse: a(
          function() {
            return Xo.parse(r, e);
          },
          "parse"
        ) };
      }, "create") };
    });
    var fi = I((xh, li) => {
      "use strict";
      p();
      var ea = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, ta = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, ra = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, na = /^-?infinity$/;
      li.exports = a(function(e) {
        if (na.test(e)) return Number(e.replace("i", "I"));
        var t = ea.exec(e);
        if (!t) return ia(e) || null;
        var n = !!t[8], i = parseInt(t[1], 10);
        n && (i = hi(i));
        var s = parseInt(
          t[2],
          10
        ) - 1, o = t[3], u = parseInt(t[4], 10), c = parseInt(t[5], 10), h = parseInt(t[6], 10), l = t[7];
        l = l ? 1e3 * parseFloat(l) : 0;
        var d, b = sa(e);
        return b != null ? (d = new Date(Date.UTC(
          i,
          s,
          o,
          u,
          c,
          h,
          l
        )), Kt(i) && d.setUTCFullYear(i), b !== 0 && d.setTime(d.getTime() - b)) : (d = new Date(
          i,
          s,
          o,
          u,
          c,
          h,
          l
        ), Kt(i) && d.setFullYear(i)), d;
      }, "parseDate");
      function ia(r) {
        var e = ta.exec(r);
        if (e) {
          var t = parseInt(e[1], 10), n = !!e[4];
          n && (t = hi(t));
          var i = parseInt(
            e[2],
            10
          ) - 1, s = e[3], o = new Date(t, i, s);
          return Kt(t) && o.setFullYear(t), o;
        }
      }
      __name(ia, "ia");
      a(ia, "getDate");
      function sa(r) {
        if (r.endsWith("+00")) return 0;
        var e = ra.exec(r.split(" ")[1]);
        if (e) {
          var t = e[1];
          if (t === "Z") return 0;
          var n = t === "-" ? -1 : 1, i = parseInt(e[2], 10) * 3600 + parseInt(
            e[3] || 0,
            10
          ) * 60 + parseInt(e[4] || 0, 10);
          return i * n * 1e3;
        }
      }
      __name(sa, "sa");
      a(sa, "timeZoneOffset");
      function hi(r) {
        return -(r - 1);
      }
      __name(hi, "hi");
      a(hi, "bcYearToNegativeYear");
      function Kt(r) {
        return r >= 0 && r < 100;
      }
      __name(Kt, "Kt");
      a(
        Kt,
        "is0To99"
      );
    });
    var di = I((Ah, pi) => {
      p();
      pi.exports = aa;
      var oa = Object.prototype.hasOwnProperty;
      function aa(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var n in t) oa.call(
            t,
            n
          ) && (r[n] = t[n]);
        }
        return r;
      }
      __name(aa, "aa");
      a(aa, "extend");
    });
    var gi = I((Ih, mi) => {
      "use strict";
      p();
      var ua = di();
      mi.exports = De;
      function De(r) {
        if (!(this instanceof De)) return new De(r);
        ua(this, Sa(r));
      }
      __name(De, "De");
      a(De, "PostgresInterval");
      var ca = ["seconds", "minutes", "hours", "days", "months", "years"];
      De.prototype.toPostgres = function() {
        var r = ca.filter(this.hasOwnProperty, this);
        return this.milliseconds && r.indexOf("seconds") < 0 && r.push("seconds"), r.length === 0 ? "0" : r.map(function(e) {
          var t = this[e] || 0;
          return e === "seconds" && this.milliseconds && (t = (t + this.milliseconds / 1e3).toFixed(6).replace(
            /\.?0+$/,
            ""
          )), t + " " + e;
        }, this).join(" ");
      };
      var ha = { years: "Y", months: "M", days: "D", hours: "H", minutes: "M", seconds: "S" }, la = ["years", "months", "days"], fa = ["hours", "minutes", "seconds"];
      De.prototype.toISOString = De.prototype.toISO = function() {
        var r = la.map(t, this).join(""), e = fa.map(t, this).join("");
        return "P" + r + "T" + e;
        function t(n) {
          var i = this[n] || 0;
          return n === "seconds" && this.milliseconds && (i = (i + this.milliseconds / 1e3).toFixed(6).replace(
            /0+$/,
            ""
          )), i + ha[n];
        }
        __name(t, "t");
      };
      var zt = "([+-]?\\d+)", pa = zt + "\\s+years?", da = zt + "\\s+mons?", ya = zt + "\\s+days?", ma = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", ga = new RegExp([
        pa,
        da,
        ya,
        ma
      ].map(function(r) {
        return "(" + r + ")?";
      }).join("\\s*")), yi = {
        years: 2,
        months: 4,
        days: 6,
        hours: 9,
        minutes: 10,
        seconds: 11,
        milliseconds: 12
      }, wa = ["hours", "minutes", "seconds", "milliseconds"];
      function ba(r) {
        var e = r + "000000".slice(r.length);
        return parseInt(
          e,
          10
        ) / 1e3;
      }
      __name(ba, "ba");
      a(ba, "parseMilliseconds");
      function Sa(r) {
        if (!r) return {};
        var e = ga.exec(
          r
        ), t = e[8] === "-";
        return Object.keys(yi).reduce(function(n, i) {
          var s = yi[i], o = e[s];
          return !o || (o = i === "milliseconds" ? ba(o) : parseInt(o, 10), !o) || (t && ~wa.indexOf(i) && (o *= -1), n[i] = o), n;
        }, {});
      }
      __name(Sa, "Sa");
      a(Sa, "parse");
    });
    var bi = I((Lh, wi) => {
      "use strict";
      p();
      wi.exports = a(function(e) {
        if (/^\\x/.test(e)) return new y(
          e.substr(2),
          "hex"
        );
        for (var t = "", n = 0; n < e.length; ) if (e[n] !== "\\") t += e[n], ++n;
        else if (/[0-7]{3}/.test(e.substr(n + 1, 3))) t += String.fromCharCode(parseInt(e.substr(n + 1, 3), 8)), n += 4;
        else {
          for (var i = 1; n + i < e.length && e[n + i] === "\\"; ) i++;
          for (var s = 0; s < Math.floor(i / 2); ++s) t += "\\";
          n += Math.floor(i / 2) * 2;
        }
        return new y(t, "binary");
      }, "parseBytea");
    });
    var Ci = I((Mh, Ai) => {
      p();
      var Ke = $t(), ze = Vt(), ht = fi(), Ei = gi(), xi = bi();
      function lt(r) {
        return a(function(t) {
          return t === null ? t : r(t);
        }, "nullAllowed");
      }
      __name(lt, "lt");
      a(lt, "allowNull");
      function vi(r) {
        return r === null ? r : r === "TRUE" || r === "t" || r === "true" || r === "y" || r === "yes" || r === "on" || r === "1";
      }
      __name(vi, "vi");
      a(vi, "parseBool");
      function Ea(r) {
        return r ? Ke.parse(r, vi) : null;
      }
      __name(Ea, "Ea");
      a(Ea, "parseBoolArray");
      function xa(r) {
        return parseInt(r, 10);
      }
      __name(xa, "xa");
      a(xa, "parseBaseTenInt");
      function Yt(r) {
        return r ? Ke.parse(r, lt(xa)) : null;
      }
      __name(Yt, "Yt");
      a(Yt, "parseIntegerArray");
      function va(r) {
        return r ? Ke.parse(r, lt(function(e) {
          return _i(e).trim();
        })) : null;
      }
      __name(va, "va");
      a(va, "parseBigIntegerArray");
      var _a = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
          return t !== null && (t = er(t)), t;
        });
        return e.parse();
      }, "parsePointArray"), Zt = a(function(r) {
        if (!r)
          return null;
        var e = ze.create(r, function(t) {
          return t !== null && (t = parseFloat(t)), t;
        });
        return e.parse();
      }, "parseFloatArray"), ne = a(function(r) {
        if (!r) return null;
        var e = ze.create(r);
        return e.parse();
      }, "parseStringArray"), Jt = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
          return t !== null && (t = ht(t)), t;
        });
        return e.parse();
      }, "parseDateArray"), Aa = a(function(r) {
        if (!r) return null;
        var e = ze.create(r, function(t) {
          return t !== null && (t = Ei(t)), t;
        });
        return e.parse();
      }, "parseIntervalArray"), Ca = a(function(r) {
        return r ? Ke.parse(r, lt(xi)) : null;
      }, "parseByteAArray"), Xt = a(function(r) {
        return parseInt(
          r,
          10
        );
      }, "parseInteger"), _i = a(function(r) {
        var e = String(r);
        return /^\d+$/.test(e) ? e : r;
      }, "parseBigInteger"), Si = a(
        function(r) {
          return r ? Ke.parse(r, lt(JSON.parse)) : null;
        },
        "parseJsonArray"
      ), er = a(function(r) {
        return r[0] !== "(" ? null : (r = r.substring(1, r.length - 1).split(","), { x: parseFloat(r[0]), y: parseFloat(r[1]) });
      }, "parsePoint"), Ta = a(function(r) {
        if (r[0] !== "<" && r[1] !== "(") return null;
        for (var e = "(", t = "", n = false, i = 2; i < r.length - 1; i++) {
          if (n || (e += r[i]), r[i] === ")") {
            n = true;
            continue;
          } else if (!n) continue;
          r[i] !== "," && (t += r[i]);
        }
        var s = er(e);
        return s.radius = parseFloat(t), s;
      }, "parseCircle"), Ia = a(function(r) {
        r(
          20,
          _i
        ), r(21, Xt), r(23, Xt), r(26, Xt), r(700, parseFloat), r(701, parseFloat), r(16, vi), r(
          1082,
          ht
        ), r(1114, ht), r(1184, ht), r(600, er), r(651, ne), r(718, Ta), r(1e3, Ea), r(1001, Ca), r(
          1005,
          Yt
        ), r(1007, Yt), r(1028, Yt), r(1016, va), r(1017, _a), r(1021, Zt), r(1022, Zt), r(1231, Zt), r(1014, ne), r(1015, ne), r(1008, ne), r(1009, ne), r(1040, ne), r(1041, ne), r(1115, Jt), r(
          1182,
          Jt
        ), r(1185, Jt), r(1186, Ei), r(1187, Aa), r(17, xi), r(114, JSON.parse.bind(JSON)), r(
          3802,
          JSON.parse.bind(JSON)
        ), r(199, Si), r(3807, Si), r(3907, ne), r(2951, ne), r(791, ne), r(
          1183,
          ne
        ), r(1270, ne);
      }, "init");
      Ai.exports = { init: Ia };
    });
    var Ii = I((Oh, Ti) => {
      "use strict";
      p();
      var Z = 1e6;
      function Pa(r) {
        var e = r.readInt32BE(
          0
        ), t = r.readUInt32BE(4), n = "";
        e < 0 && (e = ~e + (t === 0), t = ~t + 1 >>> 0, n = "-");
        var i = "", s, o, u, c, h, l;
        {
          if (s = e % Z, e = e / Z >>> 0, o = 4294967296 * s + t, t = o / Z >>> 0, u = "" + (o - Z * t), t === 0 && e === 0) return n + u + i;
          for (c = "", h = 6 - u.length, l = 0; l < h; l++) c += "0";
          i = c + u + i;
        }
        {
          if (s = e % Z, e = e / Z >>> 0, o = 4294967296 * s + t, t = o / Z >>> 0, u = "" + (o - Z * t), t === 0 && e === 0) return n + u + i;
          for (c = "", h = 6 - u.length, l = 0; l < h; l++) c += "0";
          i = c + u + i;
        }
        {
          if (s = e % Z, e = e / Z >>> 0, o = 4294967296 * s + t, t = o / Z >>> 0, u = "" + (o - Z * t), t === 0 && e === 0) return n + u + i;
          for (c = "", h = 6 - u.length, l = 0; l < h; l++) c += "0";
          i = c + u + i;
        }
        return s = e % Z, o = 4294967296 * s + t, u = "" + o % Z, n + u + i;
      }
      __name(Pa, "Pa");
      a(Pa, "readInt8");
      Ti.exports = Pa;
    });
    var Fi = I((qh, Ri) => {
      p();
      var Ba = Ii(), F = a(function(r, e, t, n, i) {
        t = t || 0, n = n || false, i = i || function(C, B, j) {
          return C * Math.pow(2, j) + B;
        };
        var s = t >> 3, o = a(function(C) {
          return n ? ~C & 255 : C;
        }, "inv"), u = 255, c = 8 - t % 8;
        e < c && (u = 255 << 8 - e & 255, c = e), t && (u = u >> t % 8);
        var h = 0;
        t % 8 + e >= 8 && (h = i(0, o(r[s]) & u, c));
        for (var l = e + t >> 3, d = s + 1; d < l; d++) h = i(h, o(r[d]), 8);
        var b = (e + t) % 8;
        return b > 0 && (h = i(h, o(r[l]) >> 8 - b, b)), h;
      }, "parseBits"), Li = a(function(r, e, t) {
        var n = Math.pow(2, t - 1) - 1, i = F(r, 1), s = F(r, t, 1);
        if (s === 0) return 0;
        var o = 1, u = a(function(h, l, d) {
          h === 0 && (h = 1);
          for (var b = 1; b <= d; b++) o /= 2, (l & 1 << d - b) > 0 && (h += o);
          return h;
        }, "parsePrecisionBits"), c = F(r, e, t + 1, false, u);
        return s == Math.pow(2, t + 1) - 1 ? c === 0 ? i === 0 ? 1 / 0 : -1 / 0 : NaN : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * c;
      }, "parseFloatFromBits"), La = a(function(r) {
        return F(r, 1) == 1 ? -1 * (F(r, 15, 1, true) + 1) : F(r, 15, 1);
      }, "parseInt16"), Pi = a(function(r) {
        return F(r, 1) == 1 ? -1 * (F(
          r,
          31,
          1,
          true
        ) + 1) : F(r, 31, 1);
      }, "parseInt32"), Ra = a(function(r) {
        return Li(r, 23, 8);
      }, "parseFloat32"), Fa = a(function(r) {
        return Li(r, 52, 11);
      }, "parseFloat64"), Ma = a(function(r) {
        var e = F(r, 16, 32);
        if (e == 49152) return NaN;
        for (var t = Math.pow(1e4, F(r, 16, 16)), n = 0, i = [], s = F(r, 16), o = 0; o < s; o++) n += F(r, 16, 64 + 16 * o) * t, t /= 1e4;
        var u = Math.pow(10, F(r, 16, 48));
        return (e === 0 ? 1 : -1) * Math.round(n * u) / u;
      }, "parseNumeric"), Bi = a(function(r, e) {
        var t = F(
          e,
          1
        ), n = F(e, 63, 1), i = new Date((t === 0 ? 1 : -1) * n / 1e3 + 9466848e5);
        return r || i.setTime(i.getTime() + i.getTimezoneOffset() * 6e4), i.usec = n % 1e3, i.getMicroSeconds = function() {
          return this.usec;
        }, i.setMicroSeconds = function(s) {
          this.usec = s;
        }, i.getUTCMicroSeconds = function() {
          return this.usec;
        }, i;
      }, "parseDate"), Ye = a(function(r) {
        for (var e = F(r, 32), t = F(r, 32, 32), n = F(r, 32, 64), i = 96, s = [], o = 0; o < e; o++) s[o] = F(r, 32, i), i += 32, i += 32;
        var u = a(function(h) {
          var l = F(r, 32, i);
          if (i += 32, l == 4294967295) return null;
          var d;
          if (h == 23 || h == 20) return d = F(r, l * 8, i), i += l * 8, d;
          if (h == 25) return d = r.toString(this.encoding, i >> 3, (i += l << 3) >> 3), d;
          console.log("ERROR: ElementType not implemented: " + h);
        }, "parseElement"), c = a(function(h, l) {
          var d = [], b;
          if (h.length > 1) {
            var C = h.shift();
            for (b = 0; b < C; b++) d[b] = c(h, l);
            h.unshift(
              C
            );
          } else for (b = 0; b < h[0]; b++) d[b] = u(l);
          return d;
        }, "parse");
        return c(s, n);
      }, "parseArray"), Da = a(function(r) {
        return r.toString("utf8");
      }, "parseText"), ka = a(function(r) {
        return r === null ? null : F(r, 8) > 0;
      }, "parseBool"), Oa = a(function(r) {
        r(20, Ba), r(21, La), r(23, Pi), r(
          26,
          Pi
        ), r(1700, Ma), r(700, Ra), r(701, Fa), r(16, ka), r(1114, Bi.bind(null, false)), r(1184, Bi.bind(
          null,
          true
        )), r(1e3, Ye), r(1007, Ye), r(1016, Ye), r(1008, Ye), r(1009, Ye), r(25, Da);
      }, "init");
      Ri.exports = { init: Oa };
    });
    var Di = I((Wh, Mi) => {
      p();
      Mi.exports = {
        BOOL: 16,
        BYTEA: 17,
        CHAR: 18,
        INT8: 20,
        INT2: 21,
        INT4: 23,
        REGPROC: 24,
        TEXT: 25,
        OID: 26,
        TID: 27,
        XID: 28,
        CID: 29,
        JSON: 114,
        XML: 142,
        PG_NODE_TREE: 194,
        SMGR: 210,
        PATH: 602,
        POLYGON: 604,
        CIDR: 650,
        FLOAT4: 700,
        FLOAT8: 701,
        ABSTIME: 702,
        RELTIME: 703,
        TINTERVAL: 704,
        CIRCLE: 718,
        MACADDR8: 774,
        MONEY: 790,
        MACADDR: 829,
        INET: 869,
        ACLITEM: 1033,
        BPCHAR: 1042,
        VARCHAR: 1043,
        DATE: 1082,
        TIME: 1083,
        TIMESTAMP: 1114,
        TIMESTAMPTZ: 1184,
        INTERVAL: 1186,
        TIMETZ: 1266,
        BIT: 1560,
        VARBIT: 1562,
        NUMERIC: 1700,
        REFCURSOR: 1790,
        REGPROCEDURE: 2202,
        REGOPER: 2203,
        REGOPERATOR: 2204,
        REGCLASS: 2205,
        REGTYPE: 2206,
        UUID: 2950,
        TXID_SNAPSHOT: 2970,
        PG_LSN: 3220,
        PG_NDISTINCT: 3361,
        PG_DEPENDENCIES: 3402,
        TSVECTOR: 3614,
        TSQUERY: 3615,
        GTSVECTOR: 3642,
        REGCONFIG: 3734,
        REGDICTIONARY: 3769,
        JSONB: 3802,
        REGNAMESPACE: 4089,
        REGROLE: 4096
      };
    });
    var Xe = I((Je) => {
      p();
      var Ua = Ci(), Na = Fi(), qa = Vt(), Qa = Di();
      Je.getTypeParser = ja;
      Je.setTypeParser = Wa;
      Je.arrayParser = qa;
      Je.builtins = Qa;
      var Ze = { text: {}, binary: {} };
      function ki(r) {
        return String(
          r
        );
      }
      __name(ki, "ki");
      a(ki, "noParse");
      function ja(r, e) {
        return e = e || "text", Ze[e] && Ze[e][r] || ki;
      }
      __name(ja, "ja");
      a(
        ja,
        "getTypeParser"
      );
      function Wa(r, e, t) {
        typeof e == "function" && (t = e, e = "text"), Ze[e][r] = t;
      }
      __name(Wa, "Wa");
      a(Wa, "setTypeParser");
      Ua.init(function(r, e) {
        Ze.text[r] = e;
      });
      Na.init(function(r, e) {
        Ze.binary[r] = e;
      });
    });
    var et = I((Kh, tr) => {
      "use strict";
      p();
      tr.exports = {
        host: "localhost",
        user: m.platform === "win32" ? m.env.USERNAME : m.env.USER,
        database: void 0,
        password: null,
        connectionString: void 0,
        port: 5432,
        rows: 0,
        binary: false,
        max: 10,
        idleTimeoutMillis: 3e4,
        client_encoding: "",
        ssl: false,
        application_name: void 0,
        fallback_application_name: void 0,
        options: void 0,
        parseInputDatesAsUTC: false,
        statement_timeout: false,
        lock_timeout: false,
        idle_in_transaction_session_timeout: false,
        query_timeout: false,
        connect_timeout: 0,
        keepalives: 1,
        keepalives_idle: 0
      };
      var ke = Xe(), Ha = ke.getTypeParser(
        20,
        "text"
      ), Ga = ke.getTypeParser(1016, "text");
      tr.exports.__defineSetter__("parseInt8", function(r) {
        ke.setTypeParser(20, "text", r ? ke.getTypeParser(23, "text") : Ha), ke.setTypeParser(1016, "text", r ? ke.getTypeParser(1007, "text") : Ga);
      });
    });
    var tt = I((Yh, Ui) => {
      "use strict";
      p();
      var $a = (Ht(), N(Wt)), Va = et();
      function Ka(r) {
        var e = r.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
        return '"' + e + '"';
      }
      __name(Ka, "Ka");
      a(Ka, "escapeElement");
      function Oi(r) {
        for (var e = "{", t = 0; t < r.length; t++) t > 0 && (e = e + ","), r[t] === null || typeof r[t] > "u" ? e = e + "NULL" : Array.isArray(r[t]) ? e = e + Oi(r[t]) : r[t] instanceof y ? e += "\\\\x" + r[t].toString("hex") : e += Ka(ft(r[t]));
        return e = e + "}", e;
      }
      __name(Oi, "Oi");
      a(Oi, "arrayString");
      var ft = a(function(r, e) {
        if (r == null) return null;
        if (r instanceof y) return r;
        if (ArrayBuffer.isView(r)) {
          var t = y.from(r.buffer, r.byteOffset, r.byteLength);
          return t.length === r.byteLength ? t : t.slice(
            r.byteOffset,
            r.byteOffset + r.byteLength
          );
        }
        return r instanceof Date ? Va.parseInputDatesAsUTC ? Za(r) : Ya(r) : Array.isArray(r) ? Oi(r) : typeof r == "object" ? za(r, e) : r.toString();
      }, "prepareValue");
      function za(r, e) {
        if (r && typeof r.toPostgres == "function") {
          if (e = e || [], e.indexOf(r) !== -1) throw new Error('circular reference detected while preparing "' + r + '" for query');
          return e.push(r), ft(r.toPostgres(ft), e);
        }
        return JSON.stringify(r);
      }
      __name(za, "za");
      a(za, "prepareObject");
      function H(r, e) {
        for (r = "" + r; r.length < e; ) r = "0" + r;
        return r;
      }
      __name(H, "H");
      a(
        H,
        "pad"
      );
      function Ya(r) {
        var e = -r.getTimezoneOffset(), t = r.getFullYear(), n = t < 1;
        n && (t = Math.abs(t) + 1);
        var i = H(t, 4) + "-" + H(r.getMonth() + 1, 2) + "-" + H(r.getDate(), 2) + "T" + H(r.getHours(), 2) + ":" + H(r.getMinutes(), 2) + ":" + H(r.getSeconds(), 2) + "." + H(
          r.getMilliseconds(),
          3
        );
        return e < 0 ? (i += "-", e *= -1) : i += "+", i += H(Math.floor(e / 60), 2) + ":" + H(e % 60, 2), n && (i += " BC"), i;
      }
      __name(Ya, "Ya");
      a(Ya, "dateToString");
      function Za(r) {
        var e = r.getUTCFullYear(), t = e < 1;
        t && (e = Math.abs(e) + 1);
        var n = H(e, 4) + "-" + H(r.getUTCMonth() + 1, 2) + "-" + H(r.getUTCDate(), 2) + "T" + H(r.getUTCHours(), 2) + ":" + H(r.getUTCMinutes(), 2) + ":" + H(r.getUTCSeconds(), 2) + "." + H(r.getUTCMilliseconds(), 3);
        return n += "+00:00", t && (n += " BC"), n;
      }
      __name(Za, "Za");
      a(Za, "dateToStringUTC");
      function Ja(r, e, t) {
        return r = typeof r == "string" ? { text: r } : r, e && (typeof e == "function" ? r.callback = e : r.values = e), t && (r.callback = t), r;
      }
      __name(Ja, "Ja");
      a(Ja, "normalizeQueryConfig");
      var rr = a(function(r) {
        return $a.createHash("md5").update(r, "utf-8").digest("hex");
      }, "md5"), Xa = a(function(r, e, t) {
        var n = rr(e + r), i = rr(y.concat([y.from(n), t]));
        return "md5" + i;
      }, "postgresMd5PasswordHash");
      Ui.exports = { prepareValue: a(function(e) {
        return ft(
          e
        );
      }, "prepareValueWrapper"), normalizeQueryConfig: Ja, postgresMd5PasswordHash: Xa, md5: rr };
    });
    var Wi = I((Xh, ji) => {
      "use strict";
      p();
      var nr = (Ht(), N(Wt));
      function eu(r) {
        if (r.indexOf(
          "SCRAM-SHA-256"
        ) === -1) throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");
        let e = nr.randomBytes(18).toString("base64");
        return { mechanism: "SCRAM-SHA-256", clientNonce: e, response: "n,,n=*,r=" + e, message: "SASLInitialResponse" };
      }
      __name(eu, "eu");
      a(eu, "startSession");
      function tu(r, e, t) {
        if (r.message !== "SASLInitialResponse") throw new Error(
          "SASL: Last message was not SASLInitialResponse"
        );
        if (typeof e != "string") throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string"
        );
        if (typeof t != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
        let n = iu(t);
        if (n.nonce.startsWith(r.clientNonce)) {
          if (n.nonce.length === r.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
        } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
        var i = y.from(n.salt, "base64"), s = au(
          e,
          i,
          n.iteration
        ), o = Oe(s, "Client Key"), u = ou(o), c = "n=*,r=" + r.clientNonce, h = "r=" + n.nonce + ",s=" + n.salt + ",i=" + n.iteration, l = "c=biws,r=" + n.nonce, d = c + "," + h + "," + l, b = Oe(u, d), C = Qi(
          o,
          b
        ), B = C.toString("base64"), j = Oe(s, "Server Key"), X = Oe(j, d);
        r.message = "SASLResponse", r.serverSignature = X.toString("base64"), r.response = l + ",p=" + B;
      }
      __name(tu, "tu");
      a(tu, "continueSession");
      function ru(r, e) {
        if (r.message !== "SASLResponse") throw new Error("SASL: Last message was not SASLResponse");
        if (typeof e != "string") throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
        let { serverSignature: t } = su(
          e
        );
        if (t !== r.serverSignature) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
      }
      __name(ru, "ru");
      a(ru, "finalizeSession");
      function nu(r) {
        if (typeof r != "string") throw new TypeError("SASL: text must be a string");
        return r.split("").map(
          (e, t) => r.charCodeAt(t)
        ).every((e) => e >= 33 && e <= 43 || e >= 45 && e <= 126);
      }
      __name(nu, "nu");
      a(nu, "isPrintableChars");
      function Ni(r) {
        return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r);
      }
      __name(Ni, "Ni");
      a(Ni, "isBase64");
      function qi(r) {
        if (typeof r != "string") throw new TypeError(
          "SASL: attribute pairs text must be a string"
        );
        return new Map(r.split(",").map((e) => {
          if (!/^.=/.test(e)) throw new Error("SASL: Invalid attribute pair entry");
          let t = e[0], n = e.substring(2);
          return [t, n];
        }));
      }
      __name(qi, "qi");
      a(qi, "parseAttributePairs");
      function iu(r) {
        let e = qi(
          r
        ), t = e.get("r");
        if (t) {
          if (!nu(t)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
        } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
        let n = e.get("s");
        if (n) {
          if (!Ni(n)) throw new Error(
            "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64"
          );
        } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
        let i = e.get("i");
        if (i) {
          if (!/^[1-9][0-9]*$/.test(i)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
        } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
        let s = parseInt(i, 10);
        return { nonce: t, salt: n, iteration: s };
      }
      __name(iu, "iu");
      a(iu, "parseServerFirstMessage");
      function su(r) {
        let t = qi(r).get("v");
        if (t) {
          if (!Ni(t)) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
        } else throw new Error(
          "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing"
        );
        return { serverSignature: t };
      }
      __name(su, "su");
      a(su, "parseServerFinalMessage");
      function Qi(r, e) {
        if (!y.isBuffer(r)) throw new TypeError(
          "first argument must be a Buffer"
        );
        if (!y.isBuffer(e)) throw new TypeError("second argument must be a Buffer");
        if (r.length !== e.length) throw new Error("Buffer lengths must match");
        if (r.length === 0) throw new Error("Buffers cannot be empty");
        return y.from(r.map((t, n) => r[n] ^ e[n]));
      }
      __name(Qi, "Qi");
      a(Qi, "xorBuffers");
      function ou(r) {
        return nr.createHash(
          "sha256"
        ).update(r).digest();
      }
      __name(ou, "ou");
      a(ou, "sha256");
      function Oe(r, e) {
        return nr.createHmac(
          "sha256",
          r
        ).update(e).digest();
      }
      __name(Oe, "Oe");
      a(Oe, "hmacSha256");
      function au(r, e, t) {
        for (var n = Oe(
          r,
          y.concat([e, y.from([0, 0, 0, 1])])
        ), i = n, s = 0; s < t - 1; s++) n = Oe(r, n), i = Qi(i, n);
        return i;
      }
      __name(au, "au");
      a(au, "Hi");
      ji.exports = { startSession: eu, continueSession: tu, finalizeSession: ru };
    });
    var ir = {};
    te(ir, { join: /* @__PURE__ */ __name(() => uu, "join") });
    function uu(...r) {
      return r.join("/");
    }
    __name(uu, "uu");
    var sr = z(() => {
      "use strict";
      p();
      a(uu, "join");
    });
    var or = {};
    te(or, { stat: /* @__PURE__ */ __name(() => cu, "stat") });
    function cu(r, e) {
      e(new Error("No filesystem"));
    }
    __name(cu, "cu");
    var ar = z(
      () => {
        "use strict";
        p();
        a(cu, "stat");
      }
    );
    var ur = {};
    te(ur, { default: /* @__PURE__ */ __name(() => hu, "default") });
    var hu;
    var cr = z(() => {
      "use strict";
      p();
      hu = {};
    });
    var Hi = {};
    te(Hi, { StringDecoder: /* @__PURE__ */ __name(() => hr, "StringDecoder") });
    var lr;
    var hr;
    var Gi = z(() => {
      "use strict";
      p();
      lr = class lr {
        static {
          __name(this, "lr");
        }
        constructor(e) {
          _(this, "td");
          this.td = new TextDecoder(e);
        }
        write(e) {
          return this.td.decode(e, { stream: true });
        }
        end(e) {
          return this.td.decode(e);
        }
      };
      a(lr, "StringDecoder");
      hr = lr;
    });
    var zi = I((cl, Ki) => {
      "use strict";
      p();
      var { Transform: lu } = (cr(), N(ur)), { StringDecoder: fu } = (Gi(), N(Hi)), Se = /* @__PURE__ */ Symbol("last"), pt = /* @__PURE__ */ Symbol("decoder");
      function pu(r, e, t) {
        let n;
        if (this.overflow) {
          if (n = this[pt].write(r).split(this.matcher), n.length === 1) return t();
          n.shift(), this.overflow = false;
        } else this[Se] += this[pt].write(r), n = this[Se].split(this.matcher);
        this[Se] = n.pop();
        for (let i = 0; i < n.length; i++) try {
          Vi(this, this.mapper(n[i]));
        } catch (s) {
          return t(
            s
          );
        }
        if (this.overflow = this[Se].length > this.maxLength, this.overflow && !this.skipOverflow) {
          t(new Error("maximum buffer reached"));
          return;
        }
        t();
      }
      __name(pu, "pu");
      a(pu, "transform");
      function du(r) {
        if (this[Se] += this[pt].end(), this[Se]) try {
          Vi(this, this.mapper(this[Se]));
        } catch (e) {
          return r(e);
        }
        r();
      }
      __name(du, "du");
      a(du, "flush");
      function Vi(r, e) {
        e !== void 0 && r.push(e);
      }
      __name(Vi, "Vi");
      a(Vi, "push");
      function $i(r) {
        return r;
      }
      __name($i, "$i");
      a($i, "noop");
      function yu(r, e, t) {
        switch (r = r || /\r?\n/, e = e || $i, t = t || {}, arguments.length) {
          case 1:
            typeof r == "function" ? (e = r, r = /\r?\n/) : typeof r == "object" && !(r instanceof RegExp) && !r[Symbol.split] && (t = r, r = /\r?\n/);
            break;
          case 2:
            typeof r == "function" ? (t = e, e = r, r = /\r?\n/) : typeof e == "object" && (t = e, e = $i);
        }
        t = Object.assign({}, t), t.autoDestroy = true, t.transform = pu, t.flush = du, t.readableObjectMode = true;
        let n = new lu(t);
        return n[Se] = "", n[pt] = new fu("utf8"), n.matcher = r, n.mapper = e, n.maxLength = t.maxLength, n.skipOverflow = t.skipOverflow || false, n.overflow = false, n._destroy = function(i, s) {
          this._writableState.errorEmitted = false, s(i);
        }, n;
      }
      __name(yu, "yu");
      a(yu, "split");
      Ki.exports = yu;
    });
    var Ji = I((fl, pe) => {
      "use strict";
      p();
      var Yi = (sr(), N(ir)), mu = (cr(), N(ur)).Stream, gu = zi(), Zi = (Ge(), N(He)), wu = 5432, dt = m.platform === "win32", rt = m.stderr, bu = 56, Su = 7, Eu = 61440, xu = 32768;
      function vu(r) {
        return (r & Eu) == xu;
      }
      __name(vu, "vu");
      a(vu, "isRegFile");
      var Ue = [
        "host",
        "port",
        "database",
        "user",
        "password"
      ], fr = Ue.length, _u = Ue[fr - 1];
      function pr() {
        var r = rt instanceof mu && rt.writable === true;
        if (r) {
          var e = Array.prototype.slice.call(arguments).concat(`
`);
          rt.write(Zi.format.apply(Zi, e));
        }
      }
      __name(pr, "pr");
      a(pr, "warn");
      Object.defineProperty(
        pe.exports,
        "isWin",
        { get: a(function() {
          return dt;
        }, "get"), set: a(function(r) {
          dt = r;
        }, "set") }
      );
      pe.exports.warnTo = function(r) {
        var e = rt;
        return rt = r, e;
      };
      pe.exports.getFileName = function(r) {
        var e = r || m.env, t = e.PGPASSFILE || (dt ? Yi.join(e.APPDATA || "./", "postgresql", "pgpass.conf") : Yi.join(e.HOME || "./", ".pgpass"));
        return t;
      };
      pe.exports.usePgPass = function(r, e) {
        return Object.prototype.hasOwnProperty.call(m.env, "PGPASSWORD") ? false : dt ? true : (e = e || "<unkn>", vu(r.mode) ? r.mode & (bu | Su) ? (pr('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', e), false) : true : (pr('WARNING: password file "%s" is not a plain file', e), false));
      };
      var Au = pe.exports.match = function(r, e) {
        return Ue.slice(0, -1).reduce(function(t, n, i) {
          return i == 1 && Number(r[n] || wu) === Number(
            e[n]
          ) ? t && true : t && (e[n] === "*" || e[n] === r[n]);
        }, true);
      };
      pe.exports.getPassword = function(r, e, t) {
        var n, i = e.pipe(gu());
        function s(c) {
          var h = Cu(c);
          h && Tu(h) && Au(r, h) && (n = h[_u], i.end());
        }
        __name(s, "s");
        a(s, "onLine");
        var o = a(function() {
          e.destroy(), t(n);
        }, "onEnd"), u = a(function(c) {
          e.destroy(), pr("WARNING: error on reading file: %s", c), t(void 0);
        }, "onErr");
        e.on("error", u), i.on("data", s).on("end", o).on("error", u);
      };
      var Cu = pe.exports.parseLine = function(r) {
        if (r.length < 11 || r.match(/^\s+#/)) return null;
        for (var e = "", t = "", n = 0, i = 0, s = 0, o = {}, u = false, c = a(function(l, d, b) {
          var C = r.substring(d, b);
          Object.hasOwnProperty.call(
            m.env,
            "PGPASS_NO_DEESCAPE"
          ) || (C = C.replace(/\\([:\\])/g, "$1")), o[Ue[l]] = C;
        }, "addToObj"), h = 0; h < r.length - 1; h += 1) {
          if (e = r.charAt(h + 1), t = r.charAt(h), u = n == fr - 1, u) {
            c(n, i);
            break;
          }
          h >= 0 && e == ":" && t !== "\\" && (c(n, i, h + 1), i = h + 2, n += 1);
        }
        return o = Object.keys(o).length === fr ? o : null, o;
      }, Tu = pe.exports.isValidEntry = function(r) {
        for (var e = { 0: function(o) {
          return o.length > 0;
        }, 1: function(o) {
          return o === "*" ? true : (o = Number(o), isFinite(o) && o > 0 && o < 9007199254740992 && Math.floor(o) === o);
        }, 2: function(o) {
          return o.length > 0;
        }, 3: function(o) {
          return o.length > 0;
        }, 4: function(o) {
          return o.length > 0;
        } }, t = 0; t < Ue.length; t += 1) {
          var n = e[t], i = r[Ue[t]] || "", s = n(i);
          if (!s) return false;
        }
        return true;
      };
    });
    var es = I((ml, dr) => {
      "use strict";
      p();
      var yl = (sr(), N(ir)), Xi = (ar(), N(or)), yt = Ji();
      dr.exports = function(r, e) {
        var t = yt.getFileName();
        Xi.stat(t, function(n, i) {
          if (n || !yt.usePgPass(i, t)) return e(void 0);
          var s = Xi.createReadStream(t);
          yt.getPassword(
            r,
            s,
            e
          );
        });
      };
      dr.exports.warnTo = yt.warnTo;
    });
    var gt = I((wl, ts) => {
      "use strict";
      p();
      var Iu = Xe();
      function mt(r) {
        this._types = r || Iu, this.text = {}, this.binary = {};
      }
      __name(mt, "mt");
      a(mt, "TypeOverrides");
      mt.prototype.getOverrides = function(r) {
        switch (r) {
          case "text":
            return this.text;
          case "binary":
            return this.binary;
          default:
            return {};
        }
      };
      mt.prototype.setTypeParser = function(r, e, t) {
        typeof e == "function" && (t = e, e = "text"), this.getOverrides(e)[r] = t;
      };
      mt.prototype.getTypeParser = function(r, e) {
        return e = e || "text", this.getOverrides(e)[r] || this._types.getTypeParser(r, e);
      };
      ts.exports = mt;
    });
    var rs = {};
    te(rs, { default: /* @__PURE__ */ __name(() => Pu, "default") });
    var Pu;
    var ns = z(() => {
      "use strict";
      p();
      Pu = {};
    });
    var is = {};
    te(is, { parse: /* @__PURE__ */ __name(() => yr, "parse") });
    function yr(r, e = false) {
      let { protocol: t } = new URL(r), n = "http:" + r.substring(t.length), {
        username: i,
        password: s,
        host: o,
        hostname: u,
        port: c,
        pathname: h,
        search: l,
        searchParams: d,
        hash: b
      } = new URL(n);
      s = decodeURIComponent(s), i = decodeURIComponent(
        i
      ), h = decodeURIComponent(h);
      let C = i + ":" + s, B = e ? Object.fromEntries(d.entries()) : l;
      return {
        href: r,
        protocol: t,
        auth: C,
        username: i,
        password: s,
        host: o,
        hostname: u,
        port: c,
        pathname: h,
        search: l,
        query: B,
        hash: b
      };
    }
    __name(yr, "yr");
    var mr = z(() => {
      "use strict";
      p();
      a(yr, "parse");
    });
    var os = I((_l, ss) => {
      "use strict";
      p();
      var Bu = (mr(), N(is)), gr = (ar(), N(or));
      function wr(r) {
        if (r.charAt(0) === "/") {
          var t = r.split(" ");
          return { host: t[0], database: t[1] };
        }
        var e = Bu.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r) ? encodeURI(r).replace(
          /\%25(\d\d)/g,
          "%$1"
        ) : r, true), t = e.query;
        for (var n in t) Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
        var i = (e.auth || ":").split(":");
        if (t.user = i[0], t.password = i.splice(1).join(":"), t.port = e.port, e.protocol == "socket:") return t.host = decodeURI(e.pathname), t.database = e.query.db, t.client_encoding = e.query.encoding, t;
        t.host || (t.host = e.hostname);
        var s = e.pathname;
        if (!t.host && s && /^%2f/i.test(s)) {
          var o = s.split("/");
          t.host = decodeURIComponent(
            o[0]
          ), s = o.splice(1).join("/");
        }
        switch (s && s.charAt(0) === "/" && (s = s.slice(1) || null), t.database = s && decodeURI(s), (t.ssl === "true" || t.ssl === "1") && (t.ssl = true), t.ssl === "0" && (t.ssl = false), (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}), t.sslcert && (t.ssl.cert = gr.readFileSync(t.sslcert).toString()), t.sslkey && (t.ssl.key = gr.readFileSync(
          t.sslkey
        ).toString()), t.sslrootcert && (t.ssl.ca = gr.readFileSync(t.sslrootcert).toString()), t.sslmode) {
          case "disable": {
            t.ssl = false;
            break;
          }
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full":
            break;
          case "no-verify": {
            t.ssl.rejectUnauthorized = false;
            break;
          }
        }
        return t;
      }
      __name(wr, "wr");
      a(wr, "parse");
      ss.exports = wr;
      wr.parse = wr;
    });
    var wt = I((Tl, cs) => {
      "use strict";
      p();
      var Lu = (ns(), N(rs)), us = et(), as = os().parse, $ = a(
        function(r, e, t) {
          return t === void 0 ? t = m.env["PG" + r.toUpperCase()] : t === false || (t = m.env[t]), e[r] || t || us[r];
        },
        "val"
      ), Ru = a(function() {
        switch (m.env.PGSSLMODE) {
          case "disable":
            return false;
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full":
            return true;
          case "no-verify":
            return { rejectUnauthorized: false };
        }
        return us.ssl;
      }, "readSSLConfigFromEnvironment"), Ne = a(
        function(r) {
          return "'" + ("" + r).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
        },
        "quoteParamValue"
      ), ie = a(function(r, e, t) {
        var n = e[t];
        n != null && r.push(t + "=" + Ne(n));
      }, "add"), Sr = class Sr {
        static {
          __name(this, "Sr");
        }
        constructor(e) {
          e = typeof e == "string" ? as(e) : e || {}, e.connectionString && (e = Object.assign({}, e, as(e.connectionString))), this.user = $("user", e), this.database = $("database", e), this.database === void 0 && (this.database = this.user), this.port = parseInt(
            $("port", e),
            10
          ), this.host = $("host", e), Object.defineProperty(this, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: $("password", e)
          }), this.binary = $("binary", e), this.options = $("options", e), this.ssl = typeof e.ssl > "u" ? Ru() : e.ssl, typeof this.ssl == "string" && this.ssl === "true" && (this.ssl = true), this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: false }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this.client_encoding = $("client_encoding", e), this.replication = $("replication", e), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = $("application_name", e, "PGAPPNAME"), this.fallback_application_name = $("fallback_application_name", e, false), this.statement_timeout = $("statement_timeout", e, false), this.lock_timeout = $(
            "lock_timeout",
            e,
            false
          ), this.idle_in_transaction_session_timeout = $("idle_in_transaction_session_timeout", e, false), this.query_timeout = $("query_timeout", e, false), e.connectionTimeoutMillis === void 0 ? this.connect_timeout = m.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(e.connectionTimeoutMillis / 1e3), e.keepAlive === false ? this.keepalives = 0 : e.keepAlive === true && (this.keepalives = 1), typeof e.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(e.keepAliveInitialDelayMillis / 1e3));
        }
        getLibpqConnectionString(e) {
          var t = [];
          ie(t, this, "user"), ie(t, this, "password"), ie(t, this, "port"), ie(t, this, "application_name"), ie(t, this, "fallback_application_name"), ie(t, this, "connect_timeout"), ie(
            t,
            this,
            "options"
          );
          var n = typeof this.ssl == "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
          if (ie(t, n, "sslmode"), ie(t, n, "sslca"), ie(t, n, "sslkey"), ie(t, n, "sslcert"), ie(t, n, "sslrootcert"), this.database && t.push("dbname=" + Ne(this.database)), this.replication && t.push("replication=" + Ne(this.replication)), this.host && t.push("host=" + Ne(this.host)), this.isDomainSocket) return e(null, t.join(" "));
          this.client_encoding && t.push("client_encoding=" + Ne(this.client_encoding)), Lu.lookup(this.host, function(i, s) {
            return i ? e(i, null) : (t.push("hostaddr=" + Ne(s)), e(null, t.join(" ")));
          });
        }
      };
      a(Sr, "ConnectionParameters");
      var br = Sr;
      cs.exports = br;
    });
    var fs = I((Bl, ls) => {
      "use strict";
      p();
      var Fu = Xe(), hs = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, xr = class xr {
        static {
          __name(this, "xr");
        }
        constructor(e, t) {
          this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = t, this.RowCtor = null, this.rowAsArray = e === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray);
        }
        addCommandComplete(e) {
          var t;
          e.text ? t = hs.exec(e.text) : t = hs.exec(e.command), t && (this.command = t[1], t[3] ? (this.oid = parseInt(t[2], 10), this.rowCount = parseInt(t[3], 10)) : t[2] && (this.rowCount = parseInt(
            t[2],
            10
          )));
        }
        _parseRowAsArray(e) {
          for (var t = new Array(e.length), n = 0, i = e.length; n < i; n++) {
            var s = e[n];
            s !== null ? t[n] = this._parsers[n](s) : t[n] = null;
          }
          return t;
        }
        parseRow(e) {
          for (var t = {}, n = 0, i = e.length; n < i; n++) {
            var s = e[n], o = this.fields[n].name;
            s !== null ? t[o] = this._parsers[n](
              s
            ) : t[o] = null;
          }
          return t;
        }
        addRow(e) {
          this.rows.push(e);
        }
        addFields(e) {
          this.fields = e, this.fields.length && (this._parsers = new Array(e.length));
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            this._types ? this._parsers[t] = this._types.getTypeParser(n.dataTypeID, n.format || "text") : this._parsers[t] = Fu.getTypeParser(n.dataTypeID, n.format || "text");
          }
        }
      };
      a(xr, "Result");
      var Er = xr;
      ls.exports = Er;
    });
    var ms = I((Fl, ys) => {
      "use strict";
      p();
      var { EventEmitter: Mu } = be(), ps = fs(), ds = tt(), _r = class _r extends Mu {
        static {
          __name(this, "_r");
        }
        constructor(e, t, n) {
          super(), e = ds.normalizeQueryConfig(e, t, n), this.text = e.text, this.values = e.values, this.rows = e.rows, this.types = e.types, this.name = e.name, this.binary = e.binary, this.portal = e.portal || "", this.callback = e.callback, this._rowMode = e.rowMode, m.domain && e.callback && (this.callback = m.domain.bind(e.callback)), this._result = new ps(this._rowMode, this.types), this._results = this._result, this.isPreparedStatement = false, this._canceledDueToError = false, this._promise = null;
        }
        requiresPreparation() {
          return this.name || this.rows ? true : !this.text || !this.values ? false : this.values.length > 0;
        }
        _checkForMultirow() {
          this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new ps(
            this._rowMode,
            this.types
          ), this._results.push(this._result));
        }
        handleRowDescription(e) {
          this._checkForMultirow(), this._result.addFields(e.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
        }
        handleDataRow(e) {
          let t;
          if (!this._canceledDueToError) {
            try {
              t = this._result.parseRow(e.fields);
            } catch (n) {
              this._canceledDueToError = n;
              return;
            }
            this.emit("row", t, this._result), this._accumulateRows && this._result.addRow(t);
          }
        }
        handleCommandComplete(e, t) {
          this._checkForMultirow(), this._result.addCommandComplete(e), this.rows && t.sync();
        }
        handleEmptyQuery(e) {
          this.rows && e.sync();
        }
        handleError(e, t) {
          if (this._canceledDueToError && (e = this._canceledDueToError, this._canceledDueToError = false), this.callback) return this.callback(e);
          this.emit("error", e);
        }
        handleReadyForQuery(e) {
          if (this._canceledDueToError) return this.handleError(
            this._canceledDueToError,
            e
          );
          if (this.callback) try {
            this.callback(null, this._results);
          } catch (t) {
            m.nextTick(() => {
              throw t;
            });
          }
          this.emit("end", this._results);
        }
        submit(e) {
          if (typeof this.text != "string" && typeof this.name != "string") return new Error("A query must have either text or a name. Supplying neither is unsupported.");
          let t = e.parsedStatements[this.name];
          return this.text && t && this.text !== t ? new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error("Query values must be an array") : (this.requiresPreparation() ? this.prepare(e) : e.query(this.text), null);
        }
        hasBeenParsed(e) {
          return this.name && e.parsedStatements[this.name];
        }
        handlePortalSuspended(e) {
          this._getRows(e, this.rows);
        }
        _getRows(e, t) {
          e.execute(
            { portal: this.portal, rows: t }
          ), t ? e.flush() : e.sync();
        }
        prepare(e) {
          this.isPreparedStatement = true, this.hasBeenParsed(e) || e.parse({ text: this.text, name: this.name, types: this.types });
          try {
            e.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: ds.prepareValue });
          } catch (t) {
            this.handleError(t, e);
            return;
          }
          e.describe(
            { type: "P", name: this.portal || "" }
          ), this._getRows(e, this.rows);
        }
        handleCopyInResponse(e) {
          e.sendCopyFail("No source stream defined");
        }
        handleCopyData(e, t) {
        }
      };
      a(_r, "Query");
      var vr = _r;
      ys.exports = vr;
    });
    var bs = {};
    te(bs, { Socket: /* @__PURE__ */ __name(() => Ee, "Socket"), isIP: /* @__PURE__ */ __name(() => Du, "isIP") });
    function Du(r) {
      return 0;
    }
    __name(Du, "Du");
    var ws;
    var gs;
    var v;
    var Ee;
    var bt = z(() => {
      "use strict";
      p();
      ws = Pe(be(), 1);
      a(Du, "isIP");
      gs = /^[^.]+\./, v = class v2 extends ws.EventEmitter {
        static {
          __name(this, "v");
        }
        constructor() {
          super(...arguments);
          _(this, "opts", {});
          _(this, "connecting", false);
          _(this, "pending", true);
          _(this, "writable", true);
          _(this, "encrypted", false);
          _(this, "authorized", false);
          _(this, "destroyed", false);
          _(this, "ws", null);
          _(this, "writeBuffer");
          _(this, "tlsState", 0);
          _(
            this,
            "tlsRead"
          );
          _(this, "tlsWrite");
        }
        static get poolQueryViaFetch() {
          return v2.opts.poolQueryViaFetch ?? v2.defaults.poolQueryViaFetch;
        }
        static set poolQueryViaFetch(t) {
          v2.opts.poolQueryViaFetch = t;
        }
        static get fetchEndpoint() {
          return v2.opts.fetchEndpoint ?? v2.defaults.fetchEndpoint;
        }
        static set fetchEndpoint(t) {
          v2.opts.fetchEndpoint = t;
        }
        static get fetchConnectionCache() {
          return true;
        }
        static set fetchConnectionCache(t) {
          console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)");
        }
        static get fetchFunction() {
          return v2.opts.fetchFunction ?? v2.defaults.fetchFunction;
        }
        static set fetchFunction(t) {
          v2.opts.fetchFunction = t;
        }
        static get webSocketConstructor() {
          return v2.opts.webSocketConstructor ?? v2.defaults.webSocketConstructor;
        }
        static set webSocketConstructor(t) {
          v2.opts.webSocketConstructor = t;
        }
        get webSocketConstructor() {
          return this.opts.webSocketConstructor ?? v2.webSocketConstructor;
        }
        set webSocketConstructor(t) {
          this.opts.webSocketConstructor = t;
        }
        static get wsProxy() {
          return v2.opts.wsProxy ?? v2.defaults.wsProxy;
        }
        static set wsProxy(t) {
          v2.opts.wsProxy = t;
        }
        get wsProxy() {
          return this.opts.wsProxy ?? v2.wsProxy;
        }
        set wsProxy(t) {
          this.opts.wsProxy = t;
        }
        static get coalesceWrites() {
          return v2.opts.coalesceWrites ?? v2.defaults.coalesceWrites;
        }
        static set coalesceWrites(t) {
          v2.opts.coalesceWrites = t;
        }
        get coalesceWrites() {
          return this.opts.coalesceWrites ?? v2.coalesceWrites;
        }
        set coalesceWrites(t) {
          this.opts.coalesceWrites = t;
        }
        static get useSecureWebSocket() {
          return v2.opts.useSecureWebSocket ?? v2.defaults.useSecureWebSocket;
        }
        static set useSecureWebSocket(t) {
          v2.opts.useSecureWebSocket = t;
        }
        get useSecureWebSocket() {
          return this.opts.useSecureWebSocket ?? v2.useSecureWebSocket;
        }
        set useSecureWebSocket(t) {
          this.opts.useSecureWebSocket = t;
        }
        static get forceDisablePgSSL() {
          return v2.opts.forceDisablePgSSL ?? v2.defaults.forceDisablePgSSL;
        }
        static set forceDisablePgSSL(t) {
          v2.opts.forceDisablePgSSL = t;
        }
        get forceDisablePgSSL() {
          return this.opts.forceDisablePgSSL ?? v2.forceDisablePgSSL;
        }
        set forceDisablePgSSL(t) {
          this.opts.forceDisablePgSSL = t;
        }
        static get disableSNI() {
          return v2.opts.disableSNI ?? v2.defaults.disableSNI;
        }
        static set disableSNI(t) {
          v2.opts.disableSNI = t;
        }
        get disableSNI() {
          return this.opts.disableSNI ?? v2.disableSNI;
        }
        set disableSNI(t) {
          this.opts.disableSNI = t;
        }
        static get pipelineConnect() {
          return v2.opts.pipelineConnect ?? v2.defaults.pipelineConnect;
        }
        static set pipelineConnect(t) {
          v2.opts.pipelineConnect = t;
        }
        get pipelineConnect() {
          return this.opts.pipelineConnect ?? v2.pipelineConnect;
        }
        set pipelineConnect(t) {
          this.opts.pipelineConnect = t;
        }
        static get subtls() {
          return v2.opts.subtls ?? v2.defaults.subtls;
        }
        static set subtls(t) {
          v2.opts.subtls = t;
        }
        get subtls() {
          return this.opts.subtls ?? v2.subtls;
        }
        set subtls(t) {
          this.opts.subtls = t;
        }
        static get pipelineTLS() {
          return v2.opts.pipelineTLS ?? v2.defaults.pipelineTLS;
        }
        static set pipelineTLS(t) {
          v2.opts.pipelineTLS = t;
        }
        get pipelineTLS() {
          return this.opts.pipelineTLS ?? v2.pipelineTLS;
        }
        set pipelineTLS(t) {
          this.opts.pipelineTLS = t;
        }
        static get rootCerts() {
          return v2.opts.rootCerts ?? v2.defaults.rootCerts;
        }
        static set rootCerts(t) {
          v2.opts.rootCerts = t;
        }
        get rootCerts() {
          return this.opts.rootCerts ?? v2.rootCerts;
        }
        set rootCerts(t) {
          this.opts.rootCerts = t;
        }
        wsProxyAddrForHost(t, n) {
          let i = this.wsProxy;
          if (i === void 0) throw new Error("No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string");
          return typeof i == "function" ? i(t, n) : `${i}?address=${t}:${n}`;
        }
        setNoDelay() {
          return this;
        }
        setKeepAlive() {
          return this;
        }
        ref() {
          return this;
        }
        unref() {
          return this;
        }
        connect(t, n, i) {
          this.connecting = true, i && this.once("connect", i);
          let s = a(() => {
            this.connecting = false, this.pending = false, this.emit("connect"), this.emit("ready");
          }, "handleWebSocketOpen"), o = a((c, h = false) => {
            c.binaryType = "arraybuffer", c.addEventListener("error", (l) => {
              this.emit("error", l), this.emit("close");
            }), c.addEventListener("message", (l) => {
              if (this.tlsState === 0) {
                let d = y.from(l.data);
                this.emit(
                  "data",
                  d
                );
              }
            }), c.addEventListener("close", () => {
              this.emit("close");
            }), h ? s() : c.addEventListener(
              "open",
              s
            );
          }, "configureWebSocket"), u;
          try {
            u = this.wsProxyAddrForHost(n, typeof t == "string" ? parseInt(t, 10) : t);
          } catch (c) {
            this.emit("error", c), this.emit("close");
            return;
          }
          try {
            let h = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + u;
            if (this.webSocketConstructor !== void 0) this.ws = new this.webSocketConstructor(h), o(this.ws);
            else try {
              this.ws = new WebSocket(
                h
              ), o(this.ws);
            } catch {
              this.ws = new __unstable_WebSocket(h), o(this.ws);
            }
          } catch (c) {
            let l = (this.useSecureWebSocket ? "https:" : "http:") + "//" + u;
            fetch(l, { headers: { Upgrade: "websocket" } }).then((d) => {
              if (this.ws = d.webSocket, this.ws == null) throw c;
              this.ws.accept(), o(
                this.ws,
                true
              );
            }).catch((d) => {
              this.emit("error", new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${d.message}`)), this.emit("close");
            });
          }
        }
        async startTls(t) {
          if (this.subtls === void 0) throw new Error("For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.");
          this.tlsState = 1;
          let n = this.subtls.TrustedCert.fromPEM(this.rootCerts), i = new this.subtls.WebSocketReadQueue(this.ws), s = i.read.bind(
            i
          ), o = this.rawWrite.bind(this), [u, c] = await this.subtls.startTls(t, n, s, o, { useSNI: !this.disableSNI, expectPreData: this.pipelineTLS ? new Uint8Array([83]) : void 0 });
          this.tlsRead = u, this.tlsWrite = c, this.tlsState = 2, this.encrypted = true, this.authorized = true, this.emit(
            "secureConnection",
            this
          ), this.tlsReadLoop();
        }
        async tlsReadLoop() {
          for (; ; ) {
            let t = await this.tlsRead();
            if (t === void 0) break;
            {
              let n = y.from(t);
              this.emit("data", n);
            }
          }
        }
        rawWrite(t) {
          if (!this.coalesceWrites) {
            this.ws.send(t);
            return;
          }
          if (this.writeBuffer === void 0) this.writeBuffer = t, setTimeout(
            () => {
              this.ws.send(this.writeBuffer), this.writeBuffer = void 0;
            },
            0
          );
          else {
            let n = new Uint8Array(this.writeBuffer.length + t.length);
            n.set(this.writeBuffer), n.set(t, this.writeBuffer.length), this.writeBuffer = n;
          }
        }
        write(t, n = "utf8", i = (s) => {
        }) {
          return t.length === 0 ? (i(), true) : (typeof t == "string" && (t = y.from(t, n)), this.tlsState === 0 ? (this.rawWrite(t), i()) : this.tlsState === 1 ? this.once("secureConnection", () => {
            this.write(
              t,
              n,
              i
            );
          }) : (this.tlsWrite(t), i()), true);
        }
        end(t = y.alloc(0), n = "utf8", i = () => {
        }) {
          return this.write(t, n, () => {
            this.ws.close(), i();
          }), this;
        }
        destroy() {
          return this.destroyed = true, this.end();
        }
      };
      a(v, "Socket"), _(v, "defaults", {
        poolQueryViaFetch: false,
        fetchEndpoint: a((t, n, i) => {
          let s;
          return i?.jwtAuth ? s = t.replace(gs, "apiauth.") : s = t.replace(gs, "api."), "https://" + s + "/sql";
        }, "fetchEndpoint"),
        fetchConnectionCache: true,
        fetchFunction: void 0,
        webSocketConstructor: void 0,
        wsProxy: a((t) => t + "/v2", "wsProxy"),
        useSecureWebSocket: true,
        forceDisablePgSSL: true,
        coalesceWrites: true,
        pipelineConnect: "password",
        subtls: void 0,
        rootCerts: "",
        pipelineTLS: false,
        disableSNI: false
      }), _(v, "opts", {});
      Ee = v;
    });
    var Xr = I((T) => {
      "use strict";
      p();
      Object.defineProperty(T, "__esModule", { value: true });
      T.NoticeMessage = T.DataRowMessage = T.CommandCompleteMessage = T.ReadyForQueryMessage = T.NotificationResponseMessage = T.BackendKeyDataMessage = T.AuthenticationMD5Password = T.ParameterStatusMessage = T.ParameterDescriptionMessage = T.RowDescriptionMessage = T.Field = T.CopyResponse = T.CopyDataMessage = T.DatabaseError = T.copyDone = T.emptyQuery = T.replicationStart = T.portalSuspended = T.noData = T.closeComplete = T.bindComplete = T.parseComplete = void 0;
      T.parseComplete = { name: "parseComplete", length: 5 };
      T.bindComplete = { name: "bindComplete", length: 5 };
      T.closeComplete = { name: "closeComplete", length: 5 };
      T.noData = { name: "noData", length: 5 };
      T.portalSuspended = { name: "portalSuspended", length: 5 };
      T.replicationStart = { name: "replicationStart", length: 4 };
      T.emptyQuery = { name: "emptyQuery", length: 4 };
      T.copyDone = { name: "copyDone", length: 4 };
      var Nr = class Nr extends Error {
        static {
          __name(this, "Nr");
        }
        constructor(e, t, n) {
          super(
            e
          ), this.length = t, this.name = n;
        }
      };
      a(Nr, "DatabaseError");
      var Ar = Nr;
      T.DatabaseError = Ar;
      var qr = class qr {
        static {
          __name(this, "qr");
        }
        constructor(e, t) {
          this.length = e, this.chunk = t, this.name = "copyData";
        }
      };
      a(qr, "CopyDataMessage");
      var Cr = qr;
      T.CopyDataMessage = Cr;
      var Qr = class Qr {
        static {
          __name(this, "Qr");
        }
        constructor(e, t, n, i) {
          this.length = e, this.name = t, this.binary = n, this.columnTypes = new Array(i);
        }
      };
      a(Qr, "CopyResponse");
      var Tr = Qr;
      T.CopyResponse = Tr;
      var jr = class jr {
        static {
          __name(this, "jr");
        }
        constructor(e, t, n, i, s, o, u) {
          this.name = e, this.tableID = t, this.columnID = n, this.dataTypeID = i, this.dataTypeSize = s, this.dataTypeModifier = o, this.format = u;
        }
      };
      a(jr, "Field");
      var Ir = jr;
      T.Field = Ir;
      var Wr = class Wr {
        static {
          __name(this, "Wr");
        }
        constructor(e, t) {
          this.length = e, this.fieldCount = t, this.name = "rowDescription", this.fields = new Array(
            this.fieldCount
          );
        }
      };
      a(Wr, "RowDescriptionMessage");
      var Pr = Wr;
      T.RowDescriptionMessage = Pr;
      var Hr = class Hr {
        static {
          __name(this, "Hr");
        }
        constructor(e, t) {
          this.length = e, this.parameterCount = t, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
        }
      };
      a(Hr, "ParameterDescriptionMessage");
      var Br = Hr;
      T.ParameterDescriptionMessage = Br;
      var Gr = class Gr {
        static {
          __name(this, "Gr");
        }
        constructor(e, t, n) {
          this.length = e, this.parameterName = t, this.parameterValue = n, this.name = "parameterStatus";
        }
      };
      a(Gr, "ParameterStatusMessage");
      var Lr = Gr;
      T.ParameterStatusMessage = Lr;
      var $r = class $r {
        static {
          __name(this, "$r");
        }
        constructor(e, t) {
          this.length = e, this.salt = t, this.name = "authenticationMD5Password";
        }
      };
      a($r, "AuthenticationMD5Password");
      var Rr = $r;
      T.AuthenticationMD5Password = Rr;
      var Vr = class Vr {
        static {
          __name(this, "Vr");
        }
        constructor(e, t, n) {
          this.length = e, this.processID = t, this.secretKey = n, this.name = "backendKeyData";
        }
      };
      a(
        Vr,
        "BackendKeyDataMessage"
      );
      var Fr = Vr;
      T.BackendKeyDataMessage = Fr;
      var Kr = class Kr {
        static {
          __name(this, "Kr");
        }
        constructor(e, t, n, i) {
          this.length = e, this.processId = t, this.channel = n, this.payload = i, this.name = "notification";
        }
      };
      a(Kr, "NotificationResponseMessage");
      var Mr = Kr;
      T.NotificationResponseMessage = Mr;
      var zr = class zr {
        static {
          __name(this, "zr");
        }
        constructor(e, t) {
          this.length = e, this.status = t, this.name = "readyForQuery";
        }
      };
      a(zr, "ReadyForQueryMessage");
      var Dr = zr;
      T.ReadyForQueryMessage = Dr;
      var Yr = class Yr {
        static {
          __name(this, "Yr");
        }
        constructor(e, t) {
          this.length = e, this.text = t, this.name = "commandComplete";
        }
      };
      a(Yr, "CommandCompleteMessage");
      var kr = Yr;
      T.CommandCompleteMessage = kr;
      var Zr = class Zr {
        static {
          __name(this, "Zr");
        }
        constructor(e, t) {
          this.length = e, this.fields = t, this.name = "dataRow", this.fieldCount = t.length;
        }
      };
      a(Zr, "DataRowMessage");
      var Or = Zr;
      T.DataRowMessage = Or;
      var Jr = class Jr {
        static {
          __name(this, "Jr");
        }
        constructor(e, t) {
          this.length = e, this.message = t, this.name = "notice";
        }
      };
      a(Jr, "NoticeMessage");
      var Ur = Jr;
      T.NoticeMessage = Ur;
    });
    var Ss = I((St) => {
      "use strict";
      p();
      Object.defineProperty(St, "__esModule", { value: true });
      St.Writer = void 0;
      var tn = class tn {
        static {
          __name(this, "tn");
        }
        constructor(e = 256) {
          this.size = e, this.offset = 5, this.headerPosition = 0, this.buffer = y.allocUnsafe(e);
        }
        ensure(e) {
          var t = this.buffer.length - this.offset;
          if (t < e) {
            var n = this.buffer, i = n.length + (n.length >> 1) + e;
            this.buffer = y.allocUnsafe(
              i
            ), n.copy(this.buffer);
          }
        }
        addInt32(e) {
          return this.ensure(4), this.buffer[this.offset++] = e >>> 24 & 255, this.buffer[this.offset++] = e >>> 16 & 255, this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
        }
        addInt16(e) {
          return this.ensure(2), this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
        }
        addCString(e) {
          if (!e) this.ensure(1);
          else {
            var t = y.byteLength(e);
            this.ensure(t + 1), this.buffer.write(
              e,
              this.offset,
              "utf-8"
            ), this.offset += t;
          }
          return this.buffer[this.offset++] = 0, this;
        }
        addString(e = "") {
          var t = y.byteLength(e);
          return this.ensure(t), this.buffer.write(e, this.offset), this.offset += t, this;
        }
        add(e) {
          return this.ensure(e.length), e.copy(this.buffer, this.offset), this.offset += e.length, this;
        }
        join(e) {
          if (e) {
            this.buffer[this.headerPosition] = e;
            let t = this.offset - (this.headerPosition + 1);
            this.buffer.writeInt32BE(t, this.headerPosition + 1);
          }
          return this.buffer.slice(e ? 0 : 5, this.offset);
        }
        flush(e) {
          var t = this.join(e);
          return this.offset = 5, this.headerPosition = 0, this.buffer = y.allocUnsafe(this.size), t;
        }
      };
      a(tn, "Writer");
      var en = tn;
      St.Writer = en;
    });
    var xs = I((xt) => {
      "use strict";
      p();
      Object.defineProperty(xt, "__esModule", { value: true });
      xt.serialize = void 0;
      var rn = Ss(), M = new rn.Writer(), ku = a((r) => {
        M.addInt16(3).addInt16(
          0
        );
        for (let n of Object.keys(r)) M.addCString(n).addCString(r[n]);
        M.addCString("client_encoding").addCString("UTF8");
        var e = M.addCString("").flush(), t = e.length + 4;
        return new rn.Writer().addInt32(t).add(e).flush();
      }, "startup"), Ou = a(() => {
        let r = y.allocUnsafe(8);
        return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
      }, "requestSsl"), Uu = a((r) => M.addCString(r).flush(112), "password"), Nu = a(function(r, e) {
        return M.addCString(r).addInt32(
          y.byteLength(e)
        ).addString(e), M.flush(112);
      }, "sendSASLInitialResponseMessage"), qu = a(
        function(r) {
          return M.addString(r).flush(112);
        },
        "sendSCRAMClientFinalMessage"
      ), Qu = a(
        (r) => M.addCString(r).flush(81),
        "query"
      ), Es = [], ju = a((r) => {
        let e = r.name || "";
        e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause conflicts and silent errors executing queries"));
        let t = r.types || Es;
        for (var n = t.length, i = M.addCString(e).addCString(r.text).addInt16(n), s = 0; s < n; s++) i.addInt32(t[s]);
        return M.flush(80);
      }, "parse"), qe = new rn.Writer(), Wu = a(function(r, e) {
        for (let t = 0; t < r.length; t++) {
          let n = e ? e(r[t], t) : r[t];
          n == null ? (M.addInt16(0), qe.addInt32(-1)) : n instanceof y ? (M.addInt16(1), qe.addInt32(n.length), qe.add(n)) : (M.addInt16(0), qe.addInt32(y.byteLength(
            n
          )), qe.addString(n));
        }
      }, "writeValues"), Hu = a((r = {}) => {
        let e = r.portal || "", t = r.statement || "", n = r.binary || false, i = r.values || Es, s = i.length;
        return M.addCString(e).addCString(t), M.addInt16(s), Wu(i, r.valueMapper), M.addInt16(s), M.add(qe.flush()), M.addInt16(n ? 1 : 0), M.flush(66);
      }, "bind"), Gu = y.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]), $u = a((r) => {
        if (!r || !r.portal && !r.rows) return Gu;
        let e = r.portal || "", t = r.rows || 0, n = y.byteLength(e), i = 4 + n + 1 + 4, s = y.allocUnsafe(1 + i);
        return s[0] = 69, s.writeInt32BE(i, 1), s.write(e, 5, "utf-8"), s[n + 5] = 0, s.writeUInt32BE(t, s.length - 4), s;
      }, "execute"), Vu = a((r, e) => {
        let t = y.allocUnsafe(16);
        return t.writeInt32BE(16, 0), t.writeInt16BE(1234, 4), t.writeInt16BE(5678, 6), t.writeInt32BE(
          r,
          8
        ), t.writeInt32BE(e, 12), t;
      }, "cancel"), nn = a(
        (r, e) => {
          let n = 4 + y.byteLength(e) + 1, i = y.allocUnsafe(1 + n);
          return i[0] = r, i.writeInt32BE(n, 1), i.write(e, 5, "utf-8"), i[n] = 0, i;
        },
        "cstringMessage"
      ), Ku = M.addCString("P").flush(68), zu = M.addCString("S").flush(68), Yu = a((r) => r.name ? nn(68, `${r.type}${r.name || ""}`) : r.type === "P" ? Ku : zu, "describe"), Zu = a(
        (r) => {
          let e = `${r.type}${r.name || ""}`;
          return nn(67, e);
        },
        "close"
      ), Ju = a((r) => M.add(r).flush(
        100
      ), "copyData"), Xu = a((r) => nn(102, r), "copyFail"), Et = a((r) => y.from([r, 0, 0, 0, 4]), "codeOnlyBuffer"), ec = Et(72), tc = Et(83), rc = Et(88), nc = Et(99), ic = {
        startup: ku,
        password: Uu,
        requestSsl: Ou,
        sendSASLInitialResponseMessage: Nu,
        sendSCRAMClientFinalMessage: qu,
        query: Qu,
        parse: ju,
        bind: Hu,
        execute: $u,
        describe: Yu,
        close: Zu,
        flush: a(() => ec, "flush"),
        sync: a(
          () => tc,
          "sync"
        ),
        end: a(() => rc, "end"),
        copyData: Ju,
        copyDone: a(() => nc, "copyDone"),
        copyFail: Xu,
        cancel: Vu
      };
      xt.serialize = ic;
    });
    var vs = I((vt) => {
      "use strict";
      p();
      Object.defineProperty(vt, "__esModule", { value: true });
      vt.BufferReader = void 0;
      var sc = y.allocUnsafe(0), on = class on {
        static {
          __name(this, "on");
        }
        constructor(e = 0) {
          this.offset = e, this.buffer = sc, this.encoding = "utf-8";
        }
        setBuffer(e, t) {
          this.offset = e, this.buffer = t;
        }
        int16() {
          let e = this.buffer.readInt16BE(this.offset);
          return this.offset += 2, e;
        }
        byte() {
          let e = this.buffer[this.offset];
          return this.offset++, e;
        }
        int32() {
          let e = this.buffer.readInt32BE(this.offset);
          return this.offset += 4, e;
        }
        string(e) {
          let t = this.buffer.toString(this.encoding, this.offset, this.offset + e);
          return this.offset += e, t;
        }
        cstring() {
          let e = this.offset, t = e;
          for (; this.buffer[t++] !== 0; ) ;
          return this.offset = t, this.buffer.toString(this.encoding, e, t - 1);
        }
        bytes(e) {
          let t = this.buffer.slice(this.offset, this.offset + e);
          return this.offset += e, t;
        }
      };
      a(on, "BufferReader");
      var sn = on;
      vt.BufferReader = sn;
    });
    var Cs = I((_t) => {
      "use strict";
      p();
      Object.defineProperty(_t, "__esModule", { value: true });
      _t.Parser = void 0;
      var D = Xr(), oc = vs(), an = 1, ac = 4, _s = an + ac, As = y.allocUnsafe(0), cn = class cn {
        static {
          __name(this, "cn");
        }
        constructor(e) {
          if (this.buffer = As, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new oc.BufferReader(), e?.mode === "binary") throw new Error("Binary mode not supported yet");
          this.mode = e?.mode || "text";
        }
        parse(e, t) {
          this.mergeBuffer(e);
          let n = this.bufferOffset + this.bufferLength, i = this.bufferOffset;
          for (; i + _s <= n; ) {
            let s = this.buffer[i], o = this.buffer.readUInt32BE(
              i + an
            ), u = an + o;
            if (u + i <= n) {
              let c = this.handlePacket(i + _s, s, o, this.buffer);
              t(c), i += u;
            } else
              break;
          }
          i === n ? (this.buffer = As, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = n - i, this.bufferOffset = i);
        }
        mergeBuffer(e) {
          if (this.bufferLength > 0) {
            let t = this.bufferLength + e.byteLength;
            if (t + this.bufferOffset > this.buffer.byteLength) {
              let i;
              if (t <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) i = this.buffer;
              else {
                let s = this.buffer.byteLength * 2;
                for (; t >= s; ) s *= 2;
                i = y.allocUnsafe(s);
              }
              this.buffer.copy(
                i,
                0,
                this.bufferOffset,
                this.bufferOffset + this.bufferLength
              ), this.buffer = i, this.bufferOffset = 0;
            }
            e.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = t;
          } else this.buffer = e, this.bufferOffset = 0, this.bufferLength = e.byteLength;
        }
        handlePacket(e, t, n, i) {
          switch (t) {
            case 50:
              return D.bindComplete;
            case 49:
              return D.parseComplete;
            case 51:
              return D.closeComplete;
            case 110:
              return D.noData;
            case 115:
              return D.portalSuspended;
            case 99:
              return D.copyDone;
            case 87:
              return D.replicationStart;
            case 73:
              return D.emptyQuery;
            case 68:
              return this.parseDataRowMessage(
                e,
                n,
                i
              );
            case 67:
              return this.parseCommandCompleteMessage(e, n, i);
            case 90:
              return this.parseReadyForQueryMessage(e, n, i);
            case 65:
              return this.parseNotificationMessage(
                e,
                n,
                i
              );
            case 82:
              return this.parseAuthenticationResponse(e, n, i);
            case 83:
              return this.parseParameterStatusMessage(e, n, i);
            case 75:
              return this.parseBackendKeyData(e, n, i);
            case 69:
              return this.parseErrorMessage(e, n, i, "error");
            case 78:
              return this.parseErrorMessage(
                e,
                n,
                i,
                "notice"
              );
            case 84:
              return this.parseRowDescriptionMessage(e, n, i);
            case 116:
              return this.parseParameterDescriptionMessage(e, n, i);
            case 71:
              return this.parseCopyInMessage(
                e,
                n,
                i
              );
            case 72:
              return this.parseCopyOutMessage(e, n, i);
            case 100:
              return this.parseCopyData(
                e,
                n,
                i
              );
            default:
              return new D.DatabaseError("received invalid response: " + t.toString(
                16
              ), n, "error");
          }
        }
        parseReadyForQueryMessage(e, t, n) {
          this.reader.setBuffer(e, n);
          let i = this.reader.string(1);
          return new D.ReadyForQueryMessage(t, i);
        }
        parseCommandCompleteMessage(e, t, n) {
          this.reader.setBuffer(e, n);
          let i = this.reader.cstring();
          return new D.CommandCompleteMessage(
            t,
            i
          );
        }
        parseCopyData(e, t, n) {
          let i = n.slice(e, e + (t - 4));
          return new D.CopyDataMessage(
            t,
            i
          );
        }
        parseCopyInMessage(e, t, n) {
          return this.parseCopyMessage(e, t, n, "copyInResponse");
        }
        parseCopyOutMessage(e, t, n) {
          return this.parseCopyMessage(e, t, n, "copyOutResponse");
        }
        parseCopyMessage(e, t, n, i) {
          this.reader.setBuffer(e, n);
          let s = this.reader.byte() !== 0, o = this.reader.int16(), u = new D.CopyResponse(t, i, s, o);
          for (let c = 0; c < o; c++) u.columnTypes[c] = this.reader.int16();
          return u;
        }
        parseNotificationMessage(e, t, n) {
          this.reader.setBuffer(
            e,
            n
          );
          let i = this.reader.int32(), s = this.reader.cstring(), o = this.reader.cstring();
          return new D.NotificationResponseMessage(t, i, s, o);
        }
        parseRowDescriptionMessage(e, t, n) {
          this.reader.setBuffer(e, n);
          let i = this.reader.int16(), s = new D.RowDescriptionMessage(t, i);
          for (let o = 0; o < i; o++) s.fields[o] = this.parseField();
          return s;
        }
        parseField() {
          let e = this.reader.cstring(), t = this.reader.int32(), n = this.reader.int16(), i = this.reader.int32(), s = this.reader.int16(), o = this.reader.int32(), u = this.reader.int16() === 0 ? "text" : "binary";
          return new D.Field(e, t, n, i, s, o, u);
        }
        parseParameterDescriptionMessage(e, t, n) {
          this.reader.setBuffer(
            e,
            n
          );
          let i = this.reader.int16(), s = new D.ParameterDescriptionMessage(t, i);
          for (let o = 0; o < i; o++) s.dataTypeIDs[o] = this.reader.int32();
          return s;
        }
        parseDataRowMessage(e, t, n) {
          this.reader.setBuffer(e, n);
          let i = this.reader.int16(), s = new Array(i);
          for (let o = 0; o < i; o++) {
            let u = this.reader.int32();
            s[o] = u === -1 ? null : this.reader.string(u);
          }
          return new D.DataRowMessage(
            t,
            s
          );
        }
        parseParameterStatusMessage(e, t, n) {
          this.reader.setBuffer(e, n);
          let i = this.reader.cstring(), s = this.reader.cstring();
          return new D.ParameterStatusMessage(t, i, s);
        }
        parseBackendKeyData(e, t, n) {
          this.reader.setBuffer(e, n);
          let i = this.reader.int32(), s = this.reader.int32();
          return new D.BackendKeyDataMessage(t, i, s);
        }
        parseAuthenticationResponse(e, t, n) {
          this.reader.setBuffer(
            e,
            n
          );
          let i = this.reader.int32(), s = { name: "authenticationOk", length: t };
          switch (i) {
            case 0:
              break;
            case 3:
              s.length === 8 && (s.name = "authenticationCleartextPassword");
              break;
            case 5:
              if (s.length === 12) {
                s.name = "authenticationMD5Password";
                let u = this.reader.bytes(4);
                return new D.AuthenticationMD5Password(t, u);
              }
              break;
            case 10:
              s.name = "authenticationSASL", s.mechanisms = [];
              let o;
              do
                o = this.reader.cstring(), o && s.mechanisms.push(o);
              while (o);
              break;
            case 11:
              s.name = "authenticationSASLContinue", s.data = this.reader.string(t - 8);
              break;
            case 12:
              s.name = "authenticationSASLFinal", s.data = this.reader.string(t - 8);
              break;
            default:
              throw new Error("Unknown authenticationOk message type " + i);
          }
          return s;
        }
        parseErrorMessage(e, t, n, i) {
          this.reader.setBuffer(e, n);
          let s = {}, o = this.reader.string(1);
          for (; o !== "\0"; ) s[o] = this.reader.cstring(), o = this.reader.string(1);
          let u = s.M, c = i === "notice" ? new D.NoticeMessage(
            t,
            u
          ) : new D.DatabaseError(u, t, i);
          return c.severity = s.S, c.code = s.C, c.detail = s.D, c.hint = s.H, c.position = s.P, c.internalPosition = s.p, c.internalQuery = s.q, c.where = s.W, c.schema = s.s, c.table = s.t, c.column = s.c, c.dataType = s.d, c.constraint = s.n, c.file = s.F, c.line = s.L, c.routine = s.R, c;
        }
      };
      a(cn, "Parser");
      var un = cn;
      _t.Parser = un;
    });
    var hn = I((xe) => {
      "use strict";
      p();
      Object.defineProperty(xe, "__esModule", { value: true });
      xe.DatabaseError = xe.serialize = xe.parse = void 0;
      var uc = Xr();
      Object.defineProperty(
        xe,
        "DatabaseError",
        { enumerable: true, get: a(function() {
          return uc.DatabaseError;
        }, "get") }
      );
      var cc = xs();
      Object.defineProperty(xe, "serialize", { enumerable: true, get: a(function() {
        return cc.serialize;
      }, "get") });
      var hc = Cs();
      function lc(r, e) {
        let t = new hc.Parser();
        return r.on("data", (n) => t.parse(n, e)), new Promise((n) => r.on("end", () => n()));
      }
      __name(lc, "lc");
      a(lc, "parse");
      xe.parse = lc;
    });
    var Ts = {};
    te(Ts, { connect: /* @__PURE__ */ __name(() => fc, "connect") });
    function fc({ socket: r, servername: e }) {
      return r.startTls(e), r;
    }
    __name(fc, "fc");
    var Is = z(() => {
      "use strict";
      p();
      a(fc, "connect");
    });
    var pn = I((sf, Ls) => {
      "use strict";
      p();
      var Ps = (bt(), N(bs)), pc = be().EventEmitter, {
        parse: dc,
        serialize: Q
      } = hn(), Bs = Q.flush(), yc = Q.sync(), mc = Q.end(), fn = class fn extends pc {
        static {
          __name(this, "fn");
        }
        constructor(e) {
          super(), e = e || {}, this.stream = e.stream || new Ps.Socket(), this._keepAlive = e.keepAlive, this._keepAliveInitialDelayMillis = e.keepAliveInitialDelayMillis, this.lastBuffer = false, this.parsedStatements = {}, this.ssl = e.ssl || false, this._ending = false, this._emitMessage = false;
          var t = this;
          this.on("newListener", function(n) {
            n === "message" && (t._emitMessage = true);
          });
        }
        connect(e, t) {
          var n = this;
          this._connecting = true, this.stream.setNoDelay(true), this.stream.connect(
            e,
            t
          ), this.stream.once("connect", function() {
            n._keepAlive && n.stream.setKeepAlive(
              true,
              n._keepAliveInitialDelayMillis
            ), n.emit("connect");
          });
          let i = a(function(s) {
            n._ending && (s.code === "ECONNRESET" || s.code === "EPIPE") || n.emit("error", s);
          }, "reportStreamError");
          if (this.stream.on("error", i), this.stream.on("close", function() {
            n.emit("end");
          }), !this.ssl) return this.attachListeners(this.stream);
          this.stream.once("data", function(s) {
            var o = s.toString("utf8");
            switch (o) {
              case "S":
                break;
              case "N":
                return n.stream.end(), n.emit("error", new Error("The server does not support SSL connections"));
              default:
                return n.stream.end(), n.emit("error", new Error("There was an error establishing an SSL connection"));
            }
            var u = (Is(), N(Ts));
            let c = { socket: n.stream };
            n.ssl !== true && (Object.assign(
              c,
              n.ssl
            ), "key" in n.ssl && (c.key = n.ssl.key)), Ps.isIP(t) === 0 && (c.servername = t);
            try {
              n.stream = u.connect(c);
            } catch (h) {
              return n.emit("error", h);
            }
            n.attachListeners(n.stream), n.stream.on("error", i), n.emit("sslconnect");
          });
        }
        attachListeners(e) {
          e.on("end", () => {
            this.emit("end");
          }), dc(e, (t) => {
            var n = t.name === "error" ? "errorMessage" : t.name;
            this._emitMessage && this.emit("message", t), this.emit(n, t);
          });
        }
        requestSsl() {
          this.stream.write(Q.requestSsl());
        }
        startup(e) {
          this.stream.write(Q.startup(e));
        }
        cancel(e, t) {
          this._send(Q.cancel(e, t));
        }
        password(e) {
          this._send(Q.password(e));
        }
        sendSASLInitialResponseMessage(e, t) {
          this._send(Q.sendSASLInitialResponseMessage(
            e,
            t
          ));
        }
        sendSCRAMClientFinalMessage(e) {
          this._send(Q.sendSCRAMClientFinalMessage(e));
        }
        _send(e) {
          return this.stream.writable ? this.stream.write(e) : false;
        }
        query(e) {
          this._send(Q.query(
            e
          ));
        }
        parse(e) {
          this._send(Q.parse(e));
        }
        bind(e) {
          this._send(Q.bind(e));
        }
        execute(e) {
          this._send(Q.execute(e));
        }
        flush() {
          this.stream.writable && this.stream.write(Bs);
        }
        sync() {
          this._ending = true, this._send(Bs), this._send(yc);
        }
        ref() {
          this.stream.ref();
        }
        unref() {
          this.stream.unref();
        }
        end() {
          if (this._ending = true, !this._connecting || !this.stream.writable) {
            this.stream.end();
            return;
          }
          return this.stream.write(mc, () => {
            this.stream.end();
          });
        }
        close(e) {
          this._send(Q.close(e));
        }
        describe(e) {
          this._send(Q.describe(e));
        }
        sendCopyFromChunk(e) {
          this._send(Q.copyData(e));
        }
        endCopyFrom() {
          this._send(Q.copyDone());
        }
        sendCopyFail(e) {
          this._send(Q.copyFail(e));
        }
      };
      a(fn, "Connection");
      var ln = fn;
      Ls.exports = ln;
    });
    var Ms = I((cf, Fs) => {
      "use strict";
      p();
      var gc = be().EventEmitter, uf = (Ge(), N(He)), wc = tt(), dn = Wi(), bc = es(), Sc = gt(), Ec = wt(), Rs = ms(), xc = et(), vc = pn(), yn = class yn extends gc {
        static {
          __name(this, "yn");
        }
        constructor(e) {
          super(), this.connectionParameters = new Ec(e), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: this.connectionParameters.password }), this.replication = this.connectionParameters.replication;
          var t = e || {};
          this._Promise = t.Promise || S.Promise, this._types = new Sc(t.types), this._ending = false, this._connecting = false, this._connected = false, this._connectionError = false, this._queryable = true, this.connection = t.connection || new vc({ stream: t.stream, ssl: this.connectionParameters.ssl, keepAlive: t.keepAlive || false, keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || "utf8" }), this.queryQueue = [], this.binary = t.binary || xc.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || false, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0;
        }
        _errorAllQueries(e) {
          let t = a(
            (n) => {
              m.nextTick(() => {
                n.handleError(e, this.connection);
              });
            },
            "enqueueError"
          );
          this.activeQuery && (t(this.activeQuery), this.activeQuery = null), this.queryQueue.forEach(t), this.queryQueue.length = 0;
        }
        _connect(e) {
          var t = this, n = this.connection;
          if (this._connectionCallback = e, this._connecting || this._connected) {
            let i = new Error("Client has already been connected. You cannot reuse a client.");
            m.nextTick(() => {
              e(i);
            });
            return;
          }
          this._connecting = true, this.connectionTimeoutHandle, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
            n._ending = true, n.stream.destroy(new Error("timeout expired"));
          }, this._connectionTimeoutMillis)), this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
            t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
          }), n.on("sslconnect", function() {
            n.startup(t.getStartupConf());
          }), this._attachListeners(n), n.once("end", () => {
            let i = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
            clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(i), this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(i) : this._handleErrorEvent(i) : this._connectionError || this._handleErrorEvent(
              i
            )), m.nextTick(() => {
              this.emit("end");
            });
          });
        }
        connect(e) {
          if (e) {
            this._connect(e);
            return;
          }
          return new this._Promise((t, n) => {
            this._connect((i) => {
              i ? n(i) : t();
            });
          });
        }
        _attachListeners(e) {
          e.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), e.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), e.on("authenticationSASL", this._handleAuthSASL.bind(this)), e.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), e.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), e.on("backendKeyData", this._handleBackendKeyData.bind(this)), e.on("error", this._handleErrorEvent.bind(this)), e.on(
            "errorMessage",
            this._handleErrorMessage.bind(this)
          ), e.on("readyForQuery", this._handleReadyForQuery.bind(this)), e.on("notice", this._handleNotice.bind(this)), e.on("rowDescription", this._handleRowDescription.bind(this)), e.on("dataRow", this._handleDataRow.bind(this)), e.on("portalSuspended", this._handlePortalSuspended.bind(this)), e.on(
            "emptyQuery",
            this._handleEmptyQuery.bind(this)
          ), e.on("commandComplete", this._handleCommandComplete.bind(this)), e.on("parseComplete", this._handleParseComplete.bind(this)), e.on("copyInResponse", this._handleCopyInResponse.bind(this)), e.on("copyData", this._handleCopyData.bind(this)), e.on("notification", this._handleNotification.bind(this));
        }
        _checkPgPass(e) {
          let t = this.connection;
          typeof this.password == "function" ? this._Promise.resolve().then(
            () => this.password()
          ).then((n) => {
            if (n !== void 0) {
              if (typeof n != "string") {
                t.emit("error", new TypeError("Password must be a string"));
                return;
              }
              this.connectionParameters.password = this.password = n;
            } else this.connectionParameters.password = this.password = null;
            e();
          }).catch((n) => {
            t.emit("error", n);
          }) : this.password !== null ? e() : bc(
            this.connectionParameters,
            (n) => {
              n !== void 0 && (this.connectionParameters.password = this.password = n), e();
            }
          );
        }
        _handleAuthCleartextPassword(e) {
          this._checkPgPass(() => {
            this.connection.password(this.password);
          });
        }
        _handleAuthMD5Password(e) {
          this._checkPgPass(() => {
            let t = wc.postgresMd5PasswordHash(
              this.user,
              this.password,
              e.salt
            );
            this.connection.password(t);
          });
        }
        _handleAuthSASL(e) {
          this._checkPgPass(() => {
            this.saslSession = dn.startSession(e.mechanisms), this.connection.sendSASLInitialResponseMessage(
              this.saslSession.mechanism,
              this.saslSession.response
            );
          });
        }
        _handleAuthSASLContinue(e) {
          dn.continueSession(this.saslSession, this.password, e.data), this.connection.sendSCRAMClientFinalMessage(
            this.saslSession.response
          );
        }
        _handleAuthSASLFinal(e) {
          dn.finalizeSession(
            this.saslSession,
            e.data
          ), this.saslSession = null;
        }
        _handleBackendKeyData(e) {
          this.processID = e.processID, this.secretKey = e.secretKey;
        }
        _handleReadyForQuery(e) {
          this._connecting && (this._connecting = false, this._connected = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
          let { activeQuery: t } = this;
          this.activeQuery = null, this.readyForQuery = true, t && t.handleReadyForQuery(this.connection), this._pulseQueryQueue();
        }
        _handleErrorWhileConnecting(e) {
          if (!this._connectionError) {
            if (this._connectionError = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback) return this._connectionCallback(e);
            this.emit("error", e);
          }
        }
        _handleErrorEvent(e) {
          if (this._connecting) return this._handleErrorWhileConnecting(e);
          this._queryable = false, this._errorAllQueries(e), this.emit("error", e);
        }
        _handleErrorMessage(e) {
          if (this._connecting)
            return this._handleErrorWhileConnecting(e);
          let t = this.activeQuery;
          if (!t) {
            this._handleErrorEvent(
              e
            );
            return;
          }
          this.activeQuery = null, t.handleError(e, this.connection);
        }
        _handleRowDescription(e) {
          this.activeQuery.handleRowDescription(e);
        }
        _handleDataRow(e) {
          this.activeQuery.handleDataRow(
            e
          );
        }
        _handlePortalSuspended(e) {
          this.activeQuery.handlePortalSuspended(this.connection);
        }
        _handleEmptyQuery(e) {
          this.activeQuery.handleEmptyQuery(this.connection);
        }
        _handleCommandComplete(e) {
          this.activeQuery.handleCommandComplete(e, this.connection);
        }
        _handleParseComplete(e) {
          this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
        }
        _handleCopyInResponse(e) {
          this.activeQuery.handleCopyInResponse(
            this.connection
          );
        }
        _handleCopyData(e) {
          this.activeQuery.handleCopyData(e, this.connection);
        }
        _handleNotification(e) {
          this.emit("notification", e);
        }
        _handleNotice(e) {
          this.emit("notice", e);
        }
        getStartupConf() {
          var e = this.connectionParameters, t = { user: e.user, database: e.database }, n = e.application_name || e.fallback_application_name;
          return n && (t.application_name = n), e.replication && (t.replication = "" + e.replication), e.statement_timeout && (t.statement_timeout = String(parseInt(
            e.statement_timeout,
            10
          ))), e.lock_timeout && (t.lock_timeout = String(parseInt(e.lock_timeout, 10))), e.idle_in_transaction_session_timeout && (t.idle_in_transaction_session_timeout = String(parseInt(
            e.idle_in_transaction_session_timeout,
            10
          ))), e.options && (t.options = e.options), t;
        }
        cancel(e, t) {
          if (e.activeQuery === t) {
            var n = this.connection;
            this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
              n.cancel(
                e.processID,
                e.secretKey
              );
            });
          } else e.queryQueue.indexOf(t) !== -1 && e.queryQueue.splice(e.queryQueue.indexOf(t), 1);
        }
        setTypeParser(e, t, n) {
          return this._types.setTypeParser(e, t, n);
        }
        getTypeParser(e, t) {
          return this._types.getTypeParser(e, t);
        }
        escapeIdentifier(e) {
          return '"' + e.replace(
            /"/g,
            '""'
          ) + '"';
        }
        escapeLiteral(e) {
          for (var t = false, n = "'", i = 0; i < e.length; i++) {
            var s = e[i];
            s === "'" ? n += s + s : s === "\\" ? (n += s + s, t = true) : n += s;
          }
          return n += "'", t === true && (n = " E" + n), n;
        }
        _pulseQueryQueue() {
          if (this.readyForQuery === true) if (this.activeQuery = this.queryQueue.shift(), this.activeQuery) {
            this.readyForQuery = false, this.hasExecuted = true;
            let e = this.activeQuery.submit(this.connection);
            e && m.nextTick(() => {
              this.activeQuery.handleError(e, this.connection), this.readyForQuery = true, this._pulseQueryQueue();
            });
          } else this.hasExecuted && (this.activeQuery = null, this.emit("drain"));
        }
        query(e, t, n) {
          var i, s, o, u, c;
          if (e == null) throw new TypeError("Client was passed a null or undefined query");
          return typeof e.submit == "function" ? (o = e.query_timeout || this.connectionParameters.query_timeout, s = i = e, typeof t == "function" && (i.callback = i.callback || t)) : (o = this.connectionParameters.query_timeout, i = new Rs(
            e,
            t,
            n
          ), i.callback || (s = new this._Promise((h, l) => {
            i.callback = (d, b) => d ? l(d) : h(b);
          }))), o && (c = i.callback, u = setTimeout(() => {
            var h = new Error("Query read timeout");
            m.nextTick(
              () => {
                i.handleError(h, this.connection);
              }
            ), c(h), i.callback = () => {
            };
            var l = this.queryQueue.indexOf(i);
            l > -1 && this.queryQueue.splice(l, 1), this._pulseQueryQueue();
          }, o), i.callback = (h, l) => {
            clearTimeout(u), c(h, l);
          }), this.binary && !i.binary && (i.binary = true), i._result && !i._result._types && (i._result._types = this._types), this._queryable ? this._ending ? (m.nextTick(() => {
            i.handleError(
              new Error("Client was closed and is not queryable"),
              this.connection
            );
          }), s) : (this.queryQueue.push(i), this._pulseQueryQueue(), s) : (m.nextTick(
            () => {
              i.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
            }
          ), s);
        }
        ref() {
          this.connection.ref();
        }
        unref() {
          this.connection.unref();
        }
        end(e) {
          if (this._ending = true, !this.connection._connecting) if (e) e();
          else return this._Promise.resolve();
          if (this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), e) this.connection.once("end", e);
          else return new this._Promise((t) => {
            this.connection.once("end", t);
          });
        }
      };
      a(yn, "Client");
      var At = yn;
      At.Query = Rs;
      Fs.exports = At;
    });
    var Us = I((ff, Os) => {
      "use strict";
      p();
      var _c = be().EventEmitter, Ds = a(function() {
      }, "NOOP"), ks = a(
        (r, e) => {
          let t = r.findIndex(e);
          return t === -1 ? void 0 : r.splice(t, 1)[0];
        },
        "removeWhere"
      ), wn = class wn {
        static {
          __name(this, "wn");
        }
        constructor(e, t, n) {
          this.client = e, this.idleListener = t, this.timeoutId = n;
        }
      };
      a(wn, "IdleItem");
      var mn = wn, bn = class bn {
        static {
          __name(this, "bn");
        }
        constructor(e) {
          this.callback = e;
        }
      };
      a(bn, "PendingItem");
      var Qe = bn;
      function Ac() {
        throw new Error("Release called on client which has already been released to the pool.");
      }
      __name(Ac, "Ac");
      a(Ac, "throwOnDoubleRelease");
      function Ct(r, e) {
        if (e) return { callback: e, result: void 0 };
        let t, n, i = a(function(o, u) {
          o ? t(o) : n(u);
        }, "cb"), s = new r(function(o, u) {
          n = o, t = u;
        }).catch((o) => {
          throw Error.captureStackTrace(
            o
          ), o;
        });
        return { callback: i, result: s };
      }
      __name(Ct, "Ct");
      a(Ct, "promisify");
      function Cc(r, e) {
        return a(
          /* @__PURE__ */ __name(function t(n) {
            n.client = e, e.removeListener("error", t), e.on("error", () => {
              r.log("additional client error after disconnection due to error", n);
            }), r._remove(e), r.emit("error", n, e);
          }, "t"),
          "idleListener"
        );
      }
      __name(Cc, "Cc");
      a(Cc, "makeIdleListener");
      var Sn = class Sn extends _c {
        static {
          __name(this, "Sn");
        }
        constructor(e, t) {
          super(), this.options = Object.assign({}, e), e != null && "password" in e && Object.defineProperty(
            this.options,
            "password",
            { configurable: true, enumerable: false, writable: true, value: e.password }
          ), e != null && e.ssl && e.ssl.key && Object.defineProperty(this.options.ssl, "key", { enumerable: false }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || false, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {
          }, this.Client = this.options.Client || t || Tt().Client, this.Promise = this.options.Promise || S.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = /* @__PURE__ */ new WeakSet(), this._pendingQueue = [], this._endCallback = void 0, this.ending = false, this.ended = false;
        }
        _isFull() {
          return this._clients.length >= this.options.max;
        }
        _pulseQueue() {
          if (this.log("pulse queue"), this.ended) {
            this.log("pulse queue ended");
            return;
          }
          if (this.ending) {
            this.log(
              "pulse queue on ending"
            ), this._idle.length && this._idle.slice().map((t) => {
              this._remove(
                t.client
              );
            }), this._clients.length || (this.ended = true, this._endCallback());
            return;
          }
          if (!this._pendingQueue.length) {
            this.log("no queued requests");
            return;
          }
          if (!this._idle.length && this._isFull()) return;
          let e = this._pendingQueue.shift();
          if (this._idle.length) {
            let t = this._idle.pop();
            clearTimeout(t.timeoutId);
            let n = t.client;
            n.ref && n.ref();
            let i = t.idleListener;
            return this._acquireClient(n, e, i, false);
          }
          if (!this._isFull()) return this.newClient(e);
          throw new Error("unexpected condition");
        }
        _remove(e) {
          let t = ks(this._idle, (n) => n.client === e);
          t !== void 0 && clearTimeout(t.timeoutId), this._clients = this._clients.filter((n) => n !== e), e.end(), this.emit("remove", e);
        }
        connect(e) {
          if (this.ending) {
            let i = new Error("Cannot use a pool after calling end on the pool");
            return e ? e(i) : this.Promise.reject(
              i
            );
          }
          let t = Ct(this.Promise, e), n = t.result;
          if (this._isFull() || this._idle.length) {
            if (this._idle.length && m.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis)
              return this._pendingQueue.push(new Qe(t.callback)), n;
            let i = a((u, c, h) => {
              clearTimeout(
                o
              ), t.callback(u, c, h);
            }, "queueCallback"), s = new Qe(i), o = setTimeout(() => {
              ks(
                this._pendingQueue,
                (u) => u.callback === i
              ), s.timedOut = true, t.callback(new Error("timeout exceeded when trying to connect"));
            }, this.options.connectionTimeoutMillis);
            return this._pendingQueue.push(s), n;
          }
          return this.newClient(new Qe(t.callback)), n;
        }
        newClient(e) {
          let t = new this.Client(this.options);
          this._clients.push(t);
          let n = Cc(this, t);
          this.log("checking client timeout");
          let i, s = false;
          this.options.connectionTimeoutMillis && (i = setTimeout(() => {
            this.log("ending client due to timeout"), s = true, t.connection ? t.connection.stream.destroy() : t.end();
          }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), t.connect((o) => {
            if (i && clearTimeout(i), t.on("error", n), o) this.log("client failed to connect", o), this._clients = this._clients.filter((u) => u !== t), s && (o.message = "Connection terminated due to connection timeout"), this._pulseQueue(), e.timedOut || e.callback(
              o,
              void 0,
              Ds
            );
            else {
              if (this.log("new client connected"), this.options.maxLifetimeSeconds !== 0) {
                let u = setTimeout(() => {
                  this.log("ending client due to expired lifetime"), this._expired.add(t), this._idle.findIndex((h) => h.client === t) !== -1 && this._acquireClient(
                    t,
                    new Qe((h, l, d) => d()),
                    n,
                    false
                  );
                }, this.options.maxLifetimeSeconds * 1e3);
                u.unref(), t.once(
                  "end",
                  () => clearTimeout(u)
                );
              }
              return this._acquireClient(t, e, n, true);
            }
          });
        }
        _acquireClient(e, t, n, i) {
          i && this.emit("connect", e), this.emit("acquire", e), e.release = this._releaseOnce(e, n), e.removeListener("error", n), t.timedOut ? i && this.options.verify ? this.options.verify(
            e,
            e.release
          ) : e.release() : i && this.options.verify ? this.options.verify(e, (s) => {
            if (s) return e.release(s), t.callback(s, void 0, Ds);
            t.callback(void 0, e, e.release);
          }) : t.callback(
            void 0,
            e,
            e.release
          );
        }
        _releaseOnce(e, t) {
          let n = false;
          return (i) => {
            n && Ac(), n = true, this._release(
              e,
              t,
              i
            );
          };
        }
        _release(e, t, n) {
          if (e.on("error", t), e._poolUseCount = (e._poolUseCount || 0) + 1, this.emit("release", n, e), n || this.ending || !e._queryable || e._ending || e._poolUseCount >= this.options.maxUses) {
            e._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(e), this._pulseQueue();
            return;
          }
          if (this._expired.has(e)) {
            this.log("remove expired client"), this._expired.delete(e), this._remove(e), this._pulseQueue();
            return;
          }
          let s;
          this.options.idleTimeoutMillis && (s = setTimeout(() => {
            this.log("remove idle client"), this._remove(e);
          }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && s.unref()), this.options.allowExitOnIdle && e.unref(), this._idle.push(new mn(e, t, s)), this._pulseQueue();
        }
        query(e, t, n) {
          if (typeof e == "function") {
            let s = Ct(this.Promise, e);
            return E(function() {
              return s.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
            }), s.result;
          }
          typeof t == "function" && (n = t, t = void 0);
          let i = Ct(this.Promise, n);
          return n = i.callback, this.connect((s, o) => {
            if (s)
              return n(s);
            let u = false, c = a((h) => {
              u || (u = true, o.release(h), n(h));
            }, "onError");
            o.once("error", c), this.log("dispatching query");
            try {
              o.query(e, t, (h, l) => {
                if (this.log("query dispatched"), o.removeListener("error", c), !u) return u = true, o.release(h), h ? n(h) : n(
                  void 0,
                  l
                );
              });
            } catch (h) {
              return o.release(h), n(h);
            }
          }), i.result;
        }
        end(e) {
          if (this.log("ending"), this.ending) {
            let n = new Error("Called end on pool more than once");
            return e ? e(n) : this.Promise.reject(n);
          }
          this.ending = true;
          let t = Ct(this.Promise, e);
          return this._endCallback = t.callback, this._pulseQueue(), t.result;
        }
        get waitingCount() {
          return this._pendingQueue.length;
        }
        get idleCount() {
          return this._idle.length;
        }
        get expiredCount() {
          return this._clients.reduce((e, t) => e + (this._expired.has(t) ? 1 : 0), 0);
        }
        get totalCount() {
          return this._clients.length;
        }
      };
      a(Sn, "Pool");
      var gn = Sn;
      Os.exports = gn;
    });
    var Ns = {};
    te(Ns, { default: /* @__PURE__ */ __name(() => Tc, "default") });
    var Tc;
    var qs = z(() => {
      "use strict";
      p();
      Tc = {};
    });
    var Qs = I((mf, Ic) => {
      Ic.exports = { name: "pg", version: "8.8.0", description: "PostgreSQL client - pure javascript & libpq with the same API", keywords: [
        "database",
        "libpq",
        "pg",
        "postgre",
        "postgres",
        "postgresql",
        "rdbms"
      ], homepage: "https://github.com/brianc/node-postgres", repository: { type: "git", url: "git://github.com/brianc/node-postgres.git", directory: "packages/pg" }, author: "Brian Carlson <brian.m.carlson@gmail.com>", main: "./lib", dependencies: {
        "buffer-writer": "2.0.0",
        "packet-reader": "1.0.0",
        "pg-connection-string": "^2.5.0",
        "pg-pool": "^3.5.2",
        "pg-protocol": "^1.5.0",
        "pg-types": "^2.1.0",
        pgpass: "1.x"
      }, devDependencies: { async: "2.6.4", bluebird: "3.5.2", co: "4.6.0", "pg-copy-streams": "0.3.0" }, peerDependencies: { "pg-native": ">=3.0.1" }, peerDependenciesMeta: {
        "pg-native": { optional: true }
      }, scripts: { test: "make test-all" }, files: ["lib", "SPONSORS.md"], license: "MIT", engines: { node: ">= 8.0.0" }, gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655" };
    });
    var Hs = I((gf, Ws) => {
      "use strict";
      p();
      var js = be().EventEmitter, Pc = (Ge(), N(He)), En = tt(), je = Ws.exports = function(r, e, t) {
        js.call(this), r = En.normalizeQueryConfig(r, e, t), this.text = r.text, this.values = r.values, this.name = r.name, this.callback = r.callback, this.state = "new", this._arrayMode = r.rowMode === "array", this._emitRowEvents = false, this.on("newListener", function(n) {
          n === "row" && (this._emitRowEvents = true);
        }.bind(this));
      };
      Pc.inherits(
        je,
        js
      );
      var Bc = { sqlState: "code", statementPosition: "position", messagePrimary: "message", context: "where", schemaName: "schema", tableName: "table", columnName: "column", dataTypeName: "dataType", constraintName: "constraint", sourceFile: "file", sourceLine: "line", sourceFunction: "routine" };
      je.prototype.handleError = function(r) {
        var e = this.native.pq.resultErrorFields();
        if (e) for (var t in e) {
          var n = Bc[t] || t;
          r[n] = e[t];
        }
        this.callback ? this.callback(r) : this.emit("error", r), this.state = "error";
      };
      je.prototype.then = function(r, e) {
        return this._getPromise().then(r, e);
      };
      je.prototype.catch = function(r) {
        return this._getPromise().catch(r);
      };
      je.prototype._getPromise = function() {
        return this._promise ? this._promise : (this._promise = new Promise(function(r, e) {
          this._once("end", r), this._once(
            "error",
            e
          );
        }.bind(this)), this._promise);
      };
      je.prototype.submit = function(r) {
        this.state = "running";
        var e = this;
        this.native = r.native, r.native.arrayMode = this._arrayMode;
        var t = a(
          function(s, o, u) {
            if (r.native.arrayMode = false, E(function() {
              e.emit("_done");
            }), s) return e.handleError(s);
            e._emitRowEvents && (u.length > 1 ? o.forEach((c, h) => {
              c.forEach((l) => {
                e.emit(
                  "row",
                  l,
                  u[h]
                );
              });
            }) : o.forEach(function(c) {
              e.emit("row", c, u);
            })), e.state = "end", e.emit(
              "end",
              u
            ), e.callback && e.callback(null, u);
          },
          "after"
        );
        if (m.domain && (t = m.domain.bind(
          t
        )), this.name) {
          this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error(
            "You supplied %s (%s)",
            this.name,
            this.name.length
          ), console.error("This can cause conflicts and silent errors executing queries"));
          var n = (this.values || []).map(En.prepareValue);
          if (r.namedQueries[this.name]) {
            if (this.text && r.namedQueries[this.name] !== this.text) {
              let s = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
              return t(s);
            }
            return r.native.execute(this.name, n, t);
          }
          return r.native.prepare(
            this.name,
            this.text,
            n.length,
            function(s) {
              return s ? t(s) : (r.namedQueries[e.name] = e.text, e.native.execute(e.name, n, t));
            }
          );
        } else if (this.values) {
          if (!Array.isArray(this.values)) {
            let s = new Error("Query values must be an array");
            return t(s);
          }
          var i = this.values.map(En.prepareValue);
          r.native.query(this.text, i, t);
        } else r.native.query(this.text, t);
      };
    });
    var Ks = I((Ef, Vs) => {
      "use strict";
      p();
      var Lc = (qs(), N(Ns)), Rc = gt(), Sf = Qs(), Gs = be().EventEmitter, Fc = (Ge(), N(He)), Mc = wt(), $s = Hs(), J = Vs.exports = function(r) {
        Gs.call(this), r = r || {}, this._Promise = r.Promise || S.Promise, this._types = new Rc(r.types), this.native = new Lc({ types: this._types }), this._queryQueue = [], this._ending = false, this._connecting = false, this._connected = false, this._queryable = true;
        var e = this.connectionParameters = new Mc(
          r
        );
        this.user = e.user, Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: e.password
        }), this.database = e.database, this.host = e.host, this.port = e.port, this.namedQueries = {};
      };
      J.Query = $s;
      Fc.inherits(J, Gs);
      J.prototype._errorAllQueries = function(r) {
        let e = a(
          (t) => {
            m.nextTick(() => {
              t.native = this.native, t.handleError(r);
            });
          },
          "enqueueError"
        );
        this._hasActiveQuery() && (e(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(e), this._queryQueue.length = 0;
      };
      J.prototype._connect = function(r) {
        var e = this;
        if (this._connecting) {
          m.nextTick(() => r(new Error("Client has already been connected. You cannot reuse a client.")));
          return;
        }
        this._connecting = true, this.connectionParameters.getLibpqConnectionString(function(t, n) {
          if (t) return r(
            t
          );
          e.native.connect(n, function(i) {
            if (i) return e.native.end(), r(i);
            e._connected = true, e.native.on("error", function(s) {
              e._queryable = false, e._errorAllQueries(s), e.emit("error", s);
            }), e.native.on("notification", function(s) {
              e.emit("notification", { channel: s.relname, payload: s.extra });
            }), e.emit("connect"), e._pulseQueryQueue(true), r();
          });
        });
      };
      J.prototype.connect = function(r) {
        if (r) {
          this._connect(r);
          return;
        }
        return new this._Promise(
          (e, t) => {
            this._connect((n) => {
              n ? t(n) : e();
            });
          }
        );
      };
      J.prototype.query = function(r, e, t) {
        var n, i, s, o, u;
        if (r == null) throw new TypeError("Client was passed a null or undefined query");
        if (typeof r.submit == "function") s = r.query_timeout || this.connectionParameters.query_timeout, i = n = r, typeof e == "function" && (r.callback = e);
        else if (s = this.connectionParameters.query_timeout, n = new $s(r, e, t), !n.callback) {
          let c, h;
          i = new this._Promise((l, d) => {
            c = l, h = d;
          }), n.callback = (l, d) => l ? h(l) : c(d);
        }
        return s && (u = n.callback, o = setTimeout(() => {
          var c = new Error("Query read timeout");
          m.nextTick(() => {
            n.handleError(c, this.connection);
          }), u(c), n.callback = () => {
          };
          var h = this._queryQueue.indexOf(n);
          h > -1 && this._queryQueue.splice(h, 1), this._pulseQueryQueue();
        }, s), n.callback = (c, h) => {
          clearTimeout(o), u(c, h);
        }), this._queryable ? this._ending ? (n.native = this.native, m.nextTick(() => {
          n.handleError(
            new Error("Client was closed and is not queryable")
          );
        }), i) : (this._queryQueue.push(
          n
        ), this._pulseQueryQueue(), i) : (n.native = this.native, m.nextTick(() => {
          n.handleError(
            new Error("Client has encountered a connection error and is not queryable")
          );
        }), i);
      };
      J.prototype.end = function(r) {
        var e = this;
        this._ending = true, this._connected || this.once(
          "connect",
          this.end.bind(this, r)
        );
        var t;
        return r || (t = new this._Promise(function(n, i) {
          r = a((s) => s ? i(s) : n(), "cb");
        })), this.native.end(function() {
          e._errorAllQueries(new Error(
            "Connection terminated"
          )), m.nextTick(() => {
            e.emit("end"), r && r();
          });
        }), t;
      };
      J.prototype._hasActiveQuery = function() {
        return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
      };
      J.prototype._pulseQueryQueue = function(r) {
        if (this._connected && !this._hasActiveQuery()) {
          var e = this._queryQueue.shift();
          if (!e) {
            r || this.emit("drain");
            return;
          }
          this._activeQuery = e, e.submit(this);
          var t = this;
          e.once(
            "_done",
            function() {
              t._pulseQueryQueue();
            }
          );
        }
      };
      J.prototype.cancel = function(r) {
        this._activeQuery === r ? this.native.cancel(function() {
        }) : this._queryQueue.indexOf(r) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
      };
      J.prototype.ref = function() {
      };
      J.prototype.unref = function() {
      };
      J.prototype.setTypeParser = function(r, e, t) {
        return this._types.setTypeParser(r, e, t);
      };
      J.prototype.getTypeParser = function(r, e) {
        return this._types.getTypeParser(r, e);
      };
    });
    var xn = I((_f, zs) => {
      "use strict";
      p();
      zs.exports = Ks();
    });
    var Tt = I((Cf, nt) => {
      "use strict";
      p();
      var Dc = Ms(), kc = et(), Oc = pn(), Uc = Us(), { DatabaseError: Nc } = hn(), qc = a((r) => {
        var e;
        return e = class extends Uc {
          static {
            __name(this, "e");
          }
          constructor(n) {
            super(n, r);
          }
        }, a(e, "BoundPool"), e;
      }, "poolFactory"), vn = a(function(r) {
        this.defaults = kc, this.Client = r, this.Query = this.Client.Query, this.Pool = qc(this.Client), this._pools = [], this.Connection = Oc, this.types = Xe(), this.DatabaseError = Nc;
      }, "PG");
      typeof m.env.NODE_PG_FORCE_NATIVE < "u" ? nt.exports = new vn(xn()) : (nt.exports = new vn(Dc), Object.defineProperty(nt.exports, "native", { configurable: true, enumerable: false, get() {
        var r = null;
        try {
          r = new vn(xn());
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND") throw e;
        }
        return Object.defineProperty(nt.exports, "native", { value: r }), r;
      } }));
    });
    var Gc = {};
    te(Gc, {
      Client: /* @__PURE__ */ __name(() => Pt, "Client"),
      ClientBase: /* @__PURE__ */ __name(() => se.ClientBase, "ClientBase"),
      Connection: /* @__PURE__ */ __name(() => se.Connection, "Connection"),
      DatabaseError: /* @__PURE__ */ __name(() => se.DatabaseError, "DatabaseError"),
      NeonDbError: /* @__PURE__ */ __name(() => ue, "NeonDbError"),
      Pool: /* @__PURE__ */ __name(() => An, "Pool"),
      Query: /* @__PURE__ */ __name(() => se.Query, "Query"),
      defaults: /* @__PURE__ */ __name(() => se.defaults, "defaults"),
      neon: /* @__PURE__ */ __name(() => _n, "neon"),
      neonConfig: /* @__PURE__ */ __name(() => Ee, "neonConfig"),
      types: /* @__PURE__ */ __name(() => se.types, "types")
    });
    module.exports = N(Gc);
    p();
    var Bt = Pe(Tt());
    bt();
    p();
    bt();
    mr();
    var Js = Pe(tt());
    var Xs = Pe(gt());
    var It = class It2 extends Error {
      static {
        __name(this, "It");
      }
      constructor(t) {
        super(t);
        _(this, "name", "NeonDbError");
        _(this, "severity");
        _(this, "code");
        _(this, "detail");
        _(this, "hint");
        _(this, "position");
        _(this, "internalPosition");
        _(this, "internalQuery");
        _(this, "where");
        _(this, "schema");
        _(this, "table");
        _(this, "column");
        _(this, "dataType");
        _(this, "constraint");
        _(this, "file");
        _(this, "line");
        _(this, "routine");
        _(this, "sourceError");
        "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(
          this,
          It2
        );
      }
    };
    a(It, "NeonDbError");
    var ue = It;
    var Ys = "transaction() expects an array of queries, or a function returning an array of queries";
    var Qc = [
      "severity",
      "code",
      "detail",
      "hint",
      "position",
      "internalPosition",
      "internalQuery",
      "where",
      "schema",
      "table",
      "column",
      "dataType",
      "constraint",
      "file",
      "line",
      "routine"
    ];
    function _n(r, {
      arrayMode: e,
      fullResults: t,
      fetchOptions: n,
      isolationLevel: i,
      readOnly: s,
      deferrable: o,
      queryCallback: u,
      resultCallback: c,
      authToken: h
    } = {}) {
      if (!r) throw new Error("No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?");
      let l;
      try {
        l = yr(r);
      } catch {
        throw new Error("Database connection string provided to `neon()` is not a valid URL. Connection string: " + String(r));
      }
      let {
        protocol: d,
        username: b,
        hostname: C,
        port: B,
        pathname: j
      } = l;
      if (d !== "postgres:" && d !== "postgresql:" || !b || !C || !j) throw new Error("Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
      function X(A, ...w) {
        let P, V;
        if (typeof A == "string") P = A, V = w[1], w = w[0] ?? [];
        else {
          P = "";
          for (let W = 0; W < A.length; W++)
            P += A[W], W < w.length && (P += "$" + (W + 1));
        }
        w = w.map((W) => (0, Js.prepareValue)(W));
        let O = {
          query: P,
          params: w
        };
        return u && u(O), jc(de, O, V);
      }
      __name(X, "X");
      a(X, "resolve"), X.transaction = async (A, w) => {
        if (typeof A == "function" && (A = A(X)), !Array.isArray(A)) throw new Error(Ys);
        A.forEach((O) => {
          if (O[Symbol.toStringTag] !== "NeonQueryPromise") throw new Error(Ys);
        });
        let P = A.map((O) => O.parameterizedQuery), V = A.map((O) => O.opts ?? {});
        return de(P, V, w);
      };
      async function de(A, w, P) {
        let {
          fetchEndpoint: V,
          fetchFunction: O
        } = Ee, W = typeof V == "function" ? V(C, B, { jwtAuth: h !== void 0 }) : V, ce = Array.isArray(A) ? { queries: A } : A, ee = n ?? {}, R = e ?? false, G = t ?? false, he = i, ye = s, ve = o;
        P !== void 0 && (P.fetchOptions !== void 0 && (ee = { ...ee, ...P.fetchOptions }), P.arrayMode !== void 0 && (R = P.arrayMode), P.fullResults !== void 0 && (G = P.fullResults), P.isolationLevel !== void 0 && (he = P.isolationLevel), P.readOnly !== void 0 && (ye = P.readOnly), P.deferrable !== void 0 && (ve = P.deferrable)), w !== void 0 && !Array.isArray(w) && w.fetchOptions !== void 0 && (ee = {
          ...ee,
          ...w.fetchOptions
        });
        let le = { "Neon-Connection-String": r, "Neon-Raw-Text-Output": "true", "Neon-Array-Mode": "true" }, Te = await Wc(h);
        Te && (le.Authorization = `Bearer ${Te}`), Array.isArray(A) && (he !== void 0 && (le["Neon-Batch-Isolation-Level"] = he), ye !== void 0 && (le["Neon-Batch-Read-Only"] = String(ye)), ve !== void 0 && (le["Neon-Batch-Deferrable"] = String(ve)));
        let me;
        try {
          me = await (O ?? fetch)(W, { method: "POST", body: JSON.stringify(ce), headers: le, ...ee });
        } catch (K) {
          let k = new ue(`Error connecting to database: ${K.message}`);
          throw k.sourceError = K, k;
        }
        if (me.ok) {
          let K = await me.json();
          if (Array.isArray(A)) {
            let k = K.results;
            if (!Array.isArray(k)) throw new ue("Neon internal error: unexpected result format");
            return k.map((ge, _e) => {
              let Lt = w[_e] ?? {}, to = Lt.arrayMode ?? R, ro = Lt.fullResults ?? G;
              return Zs(ge, {
                arrayMode: to,
                fullResults: ro,
                parameterizedQuery: A[_e],
                resultCallback: c,
                types: Lt.types
              });
            });
          } else {
            let k = w ?? {}, ge = k.arrayMode ?? R, _e = k.fullResults ?? G;
            return Zs(K, {
              arrayMode: ge,
              fullResults: _e,
              parameterizedQuery: A,
              resultCallback: c,
              types: k.types
            });
          }
        } else {
          let { status: K } = me;
          if (K === 400) {
            let k = await me.json(), ge = new ue(
              k.message
            );
            for (let _e of Qc) ge[_e] = k[_e] ?? void 0;
            throw ge;
          } else {
            let k = await me.text();
            throw new ue(`Server error (HTTP status ${K}): ${k}`);
          }
        }
      }
      __name(de, "de");
      return a(de, "execute"), X;
    }
    __name(_n, "_n");
    a(_n, "neon");
    function jc(r, e, t) {
      return {
        [Symbol.toStringTag]: "NeonQueryPromise",
        parameterizedQuery: e,
        opts: t,
        then: a((n, i) => r(e, t).then(n, i), "then"),
        catch: a((n) => r(e, t).catch(n), "catch"),
        finally: a((n) => r(e, t).finally(n), "finally")
      };
    }
    __name(jc, "jc");
    a(jc, "createNeonQueryPromise");
    function Zs(r, {
      arrayMode: e,
      fullResults: t,
      parameterizedQuery: n,
      resultCallback: i,
      types: s
    }) {
      let o = new Xs.default(
        s
      ), u = r.fields.map((l) => l.name), c = r.fields.map((l) => o.getTypeParser(l.dataTypeID)), h = e === true ? r.rows.map((l) => l.map((d, b) => d === null ? null : c[b](d))) : r.rows.map((l) => Object.fromEntries(
        l.map((d, b) => [u[b], d === null ? null : c[b](d)])
      ));
      return i && i(n, r, h, { arrayMode: e, fullResults: t }), t ? (r.viaNeonFetch = true, r.rowAsArray = e, r.rows = h, r._parsers = c, r._types = o, r) : h;
    }
    __name(Zs, "Zs");
    a(Zs, "processQueryResult");
    async function Wc(r) {
      if (typeof r == "string") return r;
      if (typeof r == "function") try {
        return await Promise.resolve(r());
      } catch (e) {
        let t = new ue("Error getting auth token.");
        throw e instanceof Error && (t = new ue(`Error getting auth token: ${e.message}`)), t;
      }
    }
    __name(Wc, "Wc");
    a(Wc, "getAuthToken");
    var eo = Pe(wt());
    var se = Pe(Tt());
    var Cn = class Cn extends Bt.Client {
      static {
        __name(this, "Cn");
      }
      constructor(t) {
        super(t);
        this.config = t;
      }
      get neonConfig() {
        return this.connection.stream;
      }
      connect(t) {
        let { neonConfig: n } = this;
        n.forceDisablePgSSL && (this.ssl = this.connection.ssl = false), this.ssl && n.useSecureWebSocket && console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");
        let i = this.config?.host !== void 0 || this.config?.connectionString !== void 0 || m.env.PGHOST !== void 0, s = m.env.USER ?? m.env.USERNAME;
        if (!i && this.host === "localhost" && this.user === s && this.database === s && this.password === null) throw new Error(`No database host or connection string was set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`);
        let o = super.connect(t), u = n.pipelineTLS && this.ssl, c = n.pipelineConnect === "password";
        if (!u && !n.pipelineConnect) return o;
        let h = this.connection;
        if (u && h.on("connect", () => h.stream.emit("data", "S")), c) {
          h.removeAllListeners(
            "authenticationCleartextPassword"
          ), h.removeAllListeners("readyForQuery"), h.once(
            "readyForQuery",
            () => h.on("readyForQuery", this._handleReadyForQuery.bind(this))
          );
          let l = this.ssl ? "sslconnect" : "connect";
          h.on(l, () => {
            this._handleAuthCleartextPassword(), this._handleReadyForQuery();
          });
        }
        return o;
      }
      async _handleAuthSASLContinue(t) {
        let n = this.saslSession, i = this.password, s = t.data;
        if (n.message !== "SASLInitialResponse" || typeof i != "string" || typeof s != "string") throw new Error("SASL: protocol error");
        let o = Object.fromEntries(s.split(",").map((K) => {
          if (!/^.=/.test(K)) throw new Error("SASL: Invalid attribute pair entry");
          let k = K[0], ge = K.substring(2);
          return [k, ge];
        })), u = o.r, c = o.s, h = o.i;
        if (!u || !/^[!-+--~]+$/.test(u)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");
        if (!c || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(c)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");
        if (!h || !/^[1-9][0-9]*$/.test(h)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");
        if (!u.startsWith(n.clientNonce)) throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce"
        );
        if (u.length === n.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
        let l = parseInt(h, 10), d = y.from(c, "base64"), b = new TextEncoder(), C = b.encode(i), B = await g.subtle.importKey("raw", C, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), j = new Uint8Array(await g.subtle.sign("HMAC", B, y.concat([d, y.from(
          [0, 0, 0, 1]
        )]))), X = j;
        for (var de = 0; de < l - 1; de++) j = new Uint8Array(await g.subtle.sign(
          "HMAC",
          B,
          j
        )), X = y.from(X.map((K, k) => X[k] ^ j[k]));
        let A = X, w = await g.subtle.importKey(
          "raw",
          A,
          { name: "HMAC", hash: { name: "SHA-256" } },
          false,
          ["sign"]
        ), P = new Uint8Array(await g.subtle.sign("HMAC", w, b.encode("Client Key"))), V = await g.subtle.digest(
          "SHA-256",
          P
        ), O = "n=*,r=" + n.clientNonce, W = "r=" + u + ",s=" + c + ",i=" + l, ce = "c=biws,r=" + u, ee = O + "," + W + "," + ce, R = await g.subtle.importKey(
          "raw",
          V,
          { name: "HMAC", hash: { name: "SHA-256" } },
          false,
          ["sign"]
        );
        var G = new Uint8Array(await g.subtle.sign("HMAC", R, b.encode(ee))), he = y.from(P.map((K, k) => P[k] ^ G[k])), ye = he.toString("base64");
        let ve = await g.subtle.importKey(
          "raw",
          A,
          { name: "HMAC", hash: { name: "SHA-256" } },
          false,
          ["sign"]
        ), le = await g.subtle.sign(
          "HMAC",
          ve,
          b.encode("Server Key")
        ), Te = await g.subtle.importKey("raw", le, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
        var me = y.from(await g.subtle.sign(
          "HMAC",
          Te,
          b.encode(ee)
        ));
        n.message = "SASLResponse", n.serverSignature = me.toString("base64"), n.response = ce + ",p=" + ye, this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
      }
    };
    a(Cn, "NeonClient");
    var Pt = Cn;
    function Hc(r, e) {
      if (e) return {
        callback: e,
        result: void 0
      };
      let t, n, i = a(function(o, u) {
        o ? t(o) : n(u);
      }, "cb"), s = new r(function(o, u) {
        n = o, t = u;
      });
      return { callback: i, result: s };
    }
    __name(Hc, "Hc");
    a(Hc, "promisify");
    var Tn = class Tn extends Bt.Pool {
      static {
        __name(this, "Tn");
      }
      constructor() {
        super(...arguments);
        _(this, "Client", Pt);
        _(this, "hasFetchUnsupportedListeners", false);
      }
      on(t, n) {
        return t !== "error" && (this.hasFetchUnsupportedListeners = true), super.on(t, n);
      }
      query(t, n, i) {
        if (!Ee.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof t == "function")
          return super.query(t, n, i);
        typeof n == "function" && (i = n, n = void 0);
        let s = Hc(
          this.Promise,
          i
        );
        i = s.callback;
        try {
          let o = new eo.default(this.options), u = encodeURIComponent, c = encodeURI, h = `postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`, l = typeof t == "string" ? t : t.text, d = n ?? t.values ?? [];
          _n(h, { fullResults: true, arrayMode: t.rowMode === "array" })(l, d, { types: t.types ?? this.options?.types }).then((C) => i(void 0, C)).catch((C) => i(
            C
          ));
        } catch (o) {
          i(o);
        }
        return s.result;
      }
    };
    a(Tn, "NeonPool");
    var An = Tn;
  }
});

// ../../node_modules/.pnpm/@prisma+debug@5.22.0/node_modules/@prisma/debug/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/@prisma+debug@5.22.0/node_modules/@prisma/debug/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export2(src_exports2, {
      Debug: /* @__PURE__ */ __name(() => Debug2, "Debug"),
      clearLogs: /* @__PURE__ */ __name(() => clearLogs, "clearLogs"),
      default: /* @__PURE__ */ __name(() => src_default2, "default"),
      getLogs: /* @__PURE__ */ __name(() => getLogs, "getLogs")
    });
    module.exports = __toCommonJS(src_exports2);
    var colors_exports = {};
    __export2(colors_exports, {
      $: /* @__PURE__ */ __name(() => $, "$"),
      bgBlack: /* @__PURE__ */ __name(() => bgBlack, "bgBlack"),
      bgBlue: /* @__PURE__ */ __name(() => bgBlue, "bgBlue"),
      bgCyan: /* @__PURE__ */ __name(() => bgCyan, "bgCyan"),
      bgGreen: /* @__PURE__ */ __name(() => bgGreen, "bgGreen"),
      bgMagenta: /* @__PURE__ */ __name(() => bgMagenta, "bgMagenta"),
      bgRed: /* @__PURE__ */ __name(() => bgRed, "bgRed"),
      bgWhite: /* @__PURE__ */ __name(() => bgWhite, "bgWhite"),
      bgYellow: /* @__PURE__ */ __name(() => bgYellow, "bgYellow"),
      black: /* @__PURE__ */ __name(() => black, "black"),
      blue: /* @__PURE__ */ __name(() => blue, "blue"),
      bold: /* @__PURE__ */ __name(() => bold, "bold"),
      cyan: /* @__PURE__ */ __name(() => cyan, "cyan"),
      dim: /* @__PURE__ */ __name(() => dim, "dim"),
      gray: /* @__PURE__ */ __name(() => gray, "gray"),
      green: /* @__PURE__ */ __name(() => green, "green"),
      grey: /* @__PURE__ */ __name(() => grey, "grey"),
      hidden: /* @__PURE__ */ __name(() => hidden, "hidden"),
      inverse: /* @__PURE__ */ __name(() => inverse, "inverse"),
      italic: /* @__PURE__ */ __name(() => italic, "italic"),
      magenta: /* @__PURE__ */ __name(() => magenta, "magenta"),
      red: /* @__PURE__ */ __name(() => red, "red"),
      reset: /* @__PURE__ */ __name(() => reset, "reset"),
      strikethrough: /* @__PURE__ */ __name(() => strikethrough, "strikethrough"),
      underline: /* @__PURE__ */ __name(() => underline, "underline"),
      white: /* @__PURE__ */ __name(() => white, "white"),
      yellow: /* @__PURE__ */ __name(() => yellow, "yellow")
    });
    var FORCE_COLOR;
    var NODE_DISABLE_COLORS;
    var NO_COLOR;
    var TERM;
    var isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
      isTTY = process.stdout && process.stdout.isTTY;
    }
    var $ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
    };
    function init(x, y) {
      let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
      let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
      return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
      };
    }
    __name(init, "init");
    var reset = init(0, 0);
    var bold = init(1, 22);
    var dim = init(2, 22);
    var italic = init(3, 23);
    var underline = init(4, 24);
    var inverse = init(7, 27);
    var hidden = init(8, 28);
    var strikethrough = init(9, 29);
    var black = init(30, 39);
    var red = init(31, 39);
    var green = init(32, 39);
    var yellow = init(33, 39);
    var blue = init(34, 39);
    var magenta = init(35, 39);
    var cyan = init(36, 39);
    var white = init(37, 39);
    var gray = init(90, 39);
    var grey = init(90, 39);
    var bgBlack = init(40, 49);
    var bgRed = init(41, 49);
    var bgGreen = init(42, 49);
    var bgYellow = init(43, 49);
    var bgBlue = init(44, 49);
    var bgMagenta = init(45, 49);
    var bgCyan = init(46, 49);
    var bgWhite = init(47, 49);
    var MAX_ARGS_HISTORY = 100;
    var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var argsHistory = [];
    var lastTimestamp = Date.now();
    var lastColor = 0;
    var processEnv = typeof process !== "undefined" ? process.env : {};
    globalThis.DEBUG ??= processEnv.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
    var topProps = {
      enable(namespace) {
        if (typeof namespace === "string") {
          globalThis.DEBUG = namespace;
        }
      },
      disable() {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
      },
      // this is the core logic to check if logging should happen or not
      enabled(namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
          return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace) => {
          if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
          return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace) => {
          if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
          return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
      },
      log: /* @__PURE__ */ __name((...args) => {
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
      }, "log"),
      formatters: {}
      // not implemented
    };
    function debugCreate(namespace) {
      const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: /* @__PURE__ */ __name(() => {
        }, "extend")
        // not implemented
      };
      const debugCall = /* @__PURE__ */ __name((...args) => {
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
          argsHistory.push([namespace2, ...args]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
          argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
          const stringArgs = args.map((arg) => {
            if (typeof arg === "string") {
              return arg;
            }
            return safeStringify2(arg);
          });
          const ms = `+${Date.now() - lastTimestamp}ms`;
          lastTimestamp = Date.now();
          if (globalThis.DEBUG_COLORS) {
            log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
          } else {
            log(namespace2, ...stringArgs, ms);
          }
        }
      }, "debugCall");
      return new Proxy(debugCall, {
        get: /* @__PURE__ */ __name((_, prop) => instanceProps[prop], "get"),
        set: /* @__PURE__ */ __name((_, prop, value) => instanceProps[prop] = value, "set")
      });
    }
    __name(debugCreate, "debugCreate");
    var Debug2 = new Proxy(debugCreate, {
      get: /* @__PURE__ */ __name((_, prop) => topProps[prop], "get"),
      set: /* @__PURE__ */ __name((_, prop, value) => topProps[prop] = value, "set")
    });
    function safeStringify2(value, indent = 2) {
      const cache = /* @__PURE__ */ new Set();
      return JSON.stringify(
        value,
        (key, value2) => {
          if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
              return `[Circular *]`;
            }
            cache.add(value2);
          } else if (typeof value2 === "bigint") {
            return value2.toString();
          }
          return value2;
        },
        indent
      );
    }
    __name(safeStringify2, "safeStringify");
    function getLogs(numChars = 7500) {
      const logs = argsHistory.map(([namespace, ...args]) => {
        return `${namespace} ${args.map((arg) => {
          if (typeof arg === "string") {
            return arg;
          } else {
            return JSON.stringify(arg);
          }
        }).join(" ")}`;
      }).join("\n");
      if (logs.length < numChars) {
        return logs;
      }
      return logs.slice(-numChars);
    }
    __name(getLogs, "getLogs");
    function clearLogs() {
      argsHistory.length = 0;
    }
    __name(clearLogs, "clearLogs");
    var src_default2 = Debug2;
  }
});

// ../../node_modules/.pnpm/@prisma+driver-adapter-utils@5.22.0/node_modules/@prisma/driver-adapter-utils/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+driver-adapter-utils@5.22.0/node_modules/@prisma/driver-adapter-utils/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export2(src_exports2, {
      ColumnTypeEnum: /* @__PURE__ */ __name(() => ColumnTypeEnum, "ColumnTypeEnum"),
      Debug: /* @__PURE__ */ __name(() => import_debug.Debug, "Debug"),
      bindAdapter: /* @__PURE__ */ __name(() => bindAdapter, "bindAdapter"),
      err: /* @__PURE__ */ __name(() => err, "err"),
      ok: /* @__PURE__ */ __name(() => ok, "ok")
    });
    module.exports = __toCommonJS(src_exports2);
    function ok(value) {
      return {
        ok: true,
        value,
        map(fn) {
          return ok(fn(value));
        },
        flatMap(fn) {
          return fn(value);
        }
      };
    }
    __name(ok, "ok");
    function err(error) {
      return {
        ok: false,
        error,
        map() {
          return err(error);
        },
        flatMap() {
          return err(error);
        }
      };
    }
    __name(err, "err");
    var ErrorRegistryInternal = class {
      static {
        __name(this, "ErrorRegistryInternal");
      }
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(id) {
        return this.registeredErrors[id];
      }
      registerNewError(error) {
        let i = 0;
        while (this.registeredErrors[i] !== void 0) {
          i++;
        }
        this.registeredErrors[i] = { error };
        return i;
      }
    };
    var bindAdapter = /* @__PURE__ */ __name((adapter) => {
      const errorRegistry = new ErrorRegistryInternal();
      const createTransactionContext = wrapAsync(errorRegistry, adapter.transactionContext.bind(adapter));
      const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        provider: adapter.provider,
        transactionContext: /* @__PURE__ */ __name(async (...args) => {
          const ctx = await createTransactionContext(...args);
          return ctx.map((tx) => bindTransactionContext(errorRegistry, tx));
        }, "transactionContext")
      };
      if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
      }
      return boundAdapter;
    }, "bindAdapter");
    var bindTransactionContext = /* @__PURE__ */ __name((errorRegistry, ctx) => {
      const startTransaction = wrapAsync(errorRegistry, ctx.startTransaction.bind(ctx));
      return {
        adapterName: ctx.adapterName,
        provider: ctx.provider,
        queryRaw: wrapAsync(errorRegistry, ctx.queryRaw.bind(ctx)),
        executeRaw: wrapAsync(errorRegistry, ctx.executeRaw.bind(ctx)),
        startTransaction: /* @__PURE__ */ __name(async (...args) => {
          const result = await startTransaction(...args);
          return result.map((tx) => bindTransaction(errorRegistry, tx));
        }, "startTransaction")
      };
    }, "bindTransactionContext");
    var bindTransaction = /* @__PURE__ */ __name((errorRegistry, transaction) => {
      return {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
      };
    }, "bindTransaction");
    function wrapAsync(registry, fn) {
      return async (...args) => {
        try {
          return await fn(...args);
        } catch (error) {
          const id = registry.registerNewError(error);
          return err({ kind: "GenericJs", id });
        }
      };
    }
    __name(wrapAsync, "wrapAsync");
    function wrapSync(registry, fn) {
      return (...args) => {
        try {
          return fn(...args);
        } catch (error) {
          const id = registry.registerNewError(error);
          return err({ kind: "GenericJs", id });
        }
      };
    }
    __name(wrapSync, "wrapSync");
    var ColumnTypeEnum = {
      // Scalars
      Int32: 0,
      Int64: 1,
      Float: 2,
      Double: 3,
      Numeric: 4,
      Boolean: 5,
      Character: 6,
      Text: 7,
      Date: 8,
      Time: 9,
      DateTime: 10,
      Json: 11,
      Enum: 12,
      Bytes: 13,
      Set: 14,
      Uuid: 15,
      // Arrays
      Int32Array: 64,
      Int64Array: 65,
      FloatArray: 66,
      DoubleArray: 67,
      NumericArray: 68,
      BooleanArray: 69,
      CharacterArray: 70,
      TextArray: 71,
      DateArray: 72,
      TimeArray: 73,
      DateTimeArray: 74,
      JsonArray: 75,
      EnumArray: 76,
      BytesArray: 77,
      UuidArray: 78,
      // Custom
      UnknownNumber: 128
    };
    var import_debug = require_dist();
  }
});

// ../../node_modules/.pnpm/postgres-array@3.0.2/node_modules/postgres-array/index.js
var require_postgres_array = __commonJS({
  "../../node_modules/.pnpm/postgres-array@3.0.2/node_modules/postgres-array/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    exports.parse = function(source, transform) {
      return parsePostgresArray(source, transform);
    };
    function parsePostgresArray(source, transform, nested = false) {
      let character = "";
      let quote = false;
      let position = 0;
      let dimension = 0;
      const entries = [];
      let recorded = "";
      const newEntry = /* @__PURE__ */ __name(function(includeEmpty) {
        let entry = recorded;
        if (entry.length > 0 || includeEmpty) {
          if (entry === "NULL" && !includeEmpty) {
            entry = null;
          }
          if (entry !== null && transform) {
            entry = transform(entry);
          }
          entries.push(entry);
          recorded = "";
        }
      }, "newEntry");
      if (source[0] === "[") {
        while (position < source.length) {
          const char = source[position++];
          if (char === "=") {
            break;
          }
        }
      }
      while (position < source.length) {
        let escaped = false;
        character = source[position++];
        if (character === "\\") {
          character = source[position++];
          escaped = true;
        }
        if (character === "{" && !quote) {
          dimension++;
          if (dimension > 1) {
            const parser = parsePostgresArray(source.substr(position - 1), transform, true);
            entries.push(parser.entries);
            position += parser.position - 2;
          }
        } else if (character === "}" && !quote) {
          dimension--;
          if (!dimension) {
            newEntry();
            if (nested) {
              return {
                entries,
                position
              };
            }
          }
        } else if (character === '"' && !escaped) {
          if (quote) {
            newEntry(true);
          }
          quote = !quote;
        } else if (character === "," && !quote) {
          newEntry();
        } else {
          recorded += character;
        }
      }
      if (dimension !== 0) {
        throw new Error("array dimension not balanced");
      }
      return entries;
    }
    __name(parsePostgresArray, "parsePostgresArray");
  }
});

// ../../node_modules/.pnpm/@prisma+adapter-neon@5.22.0_@neondatabase+serverless@0.10.0/node_modules/@prisma/adapter-neon/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/.pnpm/@prisma+adapter-neon@5.22.0_@neondatabase+serverless@0.10.0/node_modules/@prisma/adapter-neon/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name2 in all)
        __defProp2(target, name2, { get: all[name2], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export2(src_exports2, {
      PrismaNeon: /* @__PURE__ */ __name(() => PrismaNeon, "PrismaNeon"),
      PrismaNeonHTTP: /* @__PURE__ */ __name(() => PrismaNeonHTTP, "PrismaNeonHTTP")
    });
    module.exports = __toCommonJS(src_exports2);
    var neon = __toESM2(require_serverless());
    var import_driver_adapter_utils2 = require_dist2();
    var name = "@prisma/adapter-neon";
    var import_serverless = require_serverless();
    var import_driver_adapter_utils = require_dist2();
    var import_postgres_array = require_postgres_array();
    var { builtins: ScalarColumnType, getTypeParser } = import_serverless.types;
    var ArrayColumnType = {
      BIT_ARRAY: 1561,
      BOOL_ARRAY: 1e3,
      BYTEA_ARRAY: 1001,
      BPCHAR_ARRAY: 1014,
      CHAR_ARRAY: 1002,
      CIDR_ARRAY: 651,
      DATE_ARRAY: 1182,
      FLOAT4_ARRAY: 1021,
      FLOAT8_ARRAY: 1022,
      INET_ARRAY: 1041,
      INT2_ARRAY: 1005,
      INT4_ARRAY: 1007,
      INT8_ARRAY: 1016,
      JSONB_ARRAY: 3807,
      JSON_ARRAY: 199,
      MONEY_ARRAY: 791,
      NUMERIC_ARRAY: 1231,
      OID_ARRAY: 1028,
      TEXT_ARRAY: 1009,
      TIMESTAMP_ARRAY: 1115,
      TIME_ARRAY: 1183,
      UUID_ARRAY: 2951,
      VARBIT_ARRAY: 1563,
      VARCHAR_ARRAY: 1015,
      XML_ARRAY: 143
    };
    var _UnsupportedNativeDataType = class _UnsupportedNativeDataType2 extends Error {
      static {
        __name(this, "_UnsupportedNativeDataType");
      }
      constructor(code) {
        super();
        this.type = _UnsupportedNativeDataType2.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
      }
    };
    _UnsupportedNativeDataType.typeNames = {
      16: "bool",
      17: "bytea",
      18: "char",
      19: "name",
      20: "int8",
      21: "int2",
      22: "int2vector",
      23: "int4",
      24: "regproc",
      25: "text",
      26: "oid",
      27: "tid",
      28: "xid",
      29: "cid",
      30: "oidvector",
      32: "pg_ddl_command",
      71: "pg_type",
      75: "pg_attribute",
      81: "pg_proc",
      83: "pg_class",
      114: "json",
      142: "xml",
      194: "pg_node_tree",
      269: "table_am_handler",
      325: "index_am_handler",
      600: "point",
      601: "lseg",
      602: "path",
      603: "box",
      604: "polygon",
      628: "line",
      650: "cidr",
      700: "float4",
      701: "float8",
      705: "unknown",
      718: "circle",
      774: "macaddr8",
      790: "money",
      829: "macaddr",
      869: "inet",
      1033: "aclitem",
      1042: "bpchar",
      1043: "varchar",
      1082: "date",
      1083: "time",
      1114: "timestamp",
      1184: "timestamptz",
      1186: "interval",
      1266: "timetz",
      1560: "bit",
      1562: "varbit",
      1700: "numeric",
      1790: "refcursor",
      2202: "regprocedure",
      2203: "regoper",
      2204: "regoperator",
      2205: "regclass",
      2206: "regtype",
      2249: "record",
      2275: "cstring",
      2276: "any",
      2277: "anyarray",
      2278: "void",
      2279: "trigger",
      2280: "language_handler",
      2281: "internal",
      2283: "anyelement",
      2287: "_record",
      2776: "anynonarray",
      2950: "uuid",
      2970: "txid_snapshot",
      3115: "fdw_handler",
      3220: "pg_lsn",
      3310: "tsm_handler",
      3361: "pg_ndistinct",
      3402: "pg_dependencies",
      3500: "anyenum",
      3614: "tsvector",
      3615: "tsquery",
      3642: "gtsvector",
      3734: "regconfig",
      3769: "regdictionary",
      3802: "jsonb",
      3831: "anyrange",
      3838: "event_trigger",
      3904: "int4range",
      3906: "numrange",
      3908: "tsrange",
      3910: "tstzrange",
      3912: "daterange",
      3926: "int8range",
      4072: "jsonpath",
      4089: "regnamespace",
      4096: "regrole",
      4191: "regcollation",
      4451: "int4multirange",
      4532: "nummultirange",
      4533: "tsmultirange",
      4534: "tstzmultirange",
      4535: "datemultirange",
      4536: "int8multirange",
      4537: "anymultirange",
      4538: "anycompatiblemultirange",
      4600: "pg_brin_bloom_summary",
      4601: "pg_brin_minmax_multi_summary",
      5017: "pg_mcv_list",
      5038: "pg_snapshot",
      5069: "xid8",
      5077: "anycompatible",
      5078: "anycompatiblearray",
      5079: "anycompatiblenonarray",
      5080: "anycompatiblerange"
    };
    var UnsupportedNativeDataType = _UnsupportedNativeDataType;
    function fieldToColumnType(fieldTypeId) {
      switch (fieldTypeId) {
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
          return import_driver_adapter_utils.ColumnTypeEnum.Int32;
        case ScalarColumnType.INT8:
          return import_driver_adapter_utils.ColumnTypeEnum.Int64;
        case ScalarColumnType.FLOAT4:
          return import_driver_adapter_utils.ColumnTypeEnum.Float;
        case ScalarColumnType.FLOAT8:
          return import_driver_adapter_utils.ColumnTypeEnum.Double;
        case ScalarColumnType.BOOL:
          return import_driver_adapter_utils.ColumnTypeEnum.Boolean;
        case ScalarColumnType.DATE:
          return import_driver_adapter_utils.ColumnTypeEnum.Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
          return import_driver_adapter_utils.ColumnTypeEnum.Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
          return import_driver_adapter_utils.ColumnTypeEnum.DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
          return import_driver_adapter_utils.ColumnTypeEnum.Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
          return import_driver_adapter_utils.ColumnTypeEnum.Json;
        case ScalarColumnType.UUID:
          return import_driver_adapter_utils.ColumnTypeEnum.Uuid;
        case ScalarColumnType.OID:
          return import_driver_adapter_utils.ColumnTypeEnum.Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
          return import_driver_adapter_utils.ColumnTypeEnum.Text;
        case ScalarColumnType.BYTEA:
          return import_driver_adapter_utils.ColumnTypeEnum.Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.TextArray;
        case ArrayColumnType.DATE_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.DateArray;
        case ArrayColumnType.TIME_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.BytesArray;
        case ArrayColumnType.UUID_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
          return import_driver_adapter_utils.ColumnTypeEnum.Int64Array;
        default:
          if (fieldTypeId >= 1e4) {
            return import_driver_adapter_utils.ColumnTypeEnum.Text;
          }
          throw new UnsupportedNativeDataType(fieldTypeId);
      }
    }
    __name(fieldToColumnType, "fieldToColumnType");
    function normalize_array(element_normalizer) {
      return (str) => (0, import_postgres_array.parse)(str, element_normalizer);
    }
    __name(normalize_array, "normalize_array");
    function normalize_numeric(numeric) {
      return numeric;
    }
    __name(normalize_numeric, "normalize_numeric");
    function normalize_date(date) {
      return date;
    }
    __name(normalize_date, "normalize_date");
    function normalize_timestamp(time) {
      return time;
    }
    __name(normalize_timestamp, "normalize_timestamp");
    function normalize_timestampz(time) {
      return time.split("+")[0];
    }
    __name(normalize_timestampz, "normalize_timestampz");
    function normalize_time(time) {
      return time;
    }
    __name(normalize_time, "normalize_time");
    function normalize_timez(time) {
      return time.split("+")[0];
    }
    __name(normalize_timez, "normalize_timez");
    function normalize_money(money) {
      return money.slice(1);
    }
    __name(normalize_money, "normalize_money");
    function normalize_xml(xml) {
      return xml;
    }
    __name(normalize_xml, "normalize_xml");
    function toJson(json) {
      return json;
    }
    __name(toJson, "toJson");
    function encodeBuffer(buffer) {
      return Array.from(new Uint8Array(buffer));
    }
    __name(encodeBuffer, "encodeBuffer");
    var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
    var parseBytesArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
    function normalizeByteaArray(serializedBytesArray) {
      const buffers = parseBytesArray(serializedBytesArray);
      return buffers.map((buf) => buf ? encodeBuffer(buf) : null);
    }
    __name(normalizeByteaArray, "normalizeByteaArray");
    function convertBytes(serializedBytes) {
      const buffer = parsePgBytes(serializedBytes);
      return encodeBuffer(buffer);
    }
    __name(convertBytes, "convertBytes");
    function normalizeBit(bit) {
      return bit;
    }
    __name(normalizeBit, "normalizeBit");
    var customParsers = {
      [ScalarColumnType.NUMERIC]: normalize_numeric,
      [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
      [ScalarColumnType.TIME]: normalize_time,
      [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
      [ScalarColumnType.TIMETZ]: normalize_timez,
      [ScalarColumnType.DATE]: normalize_date,
      [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
      [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
      [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
      [ScalarColumnType.TIMESTAMPTZ]: normalize_timestampz,
      [ScalarColumnType.MONEY]: normalize_money,
      [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
      [ScalarColumnType.JSON]: toJson,
      [ScalarColumnType.JSONB]: toJson,
      [ScalarColumnType.BYTEA]: convertBytes,
      [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
      [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
      [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
      [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
    };
    function fixArrayBufferValues(values) {
      for (let i = 0; i < values.length; i++) {
        const list = values[i];
        if (!Array.isArray(list)) {
          continue;
        }
        for (let j = 0; j < list.length; j++) {
          const listItem = list[j];
          if (ArrayBuffer.isView(listItem)) {
            list[j] = Buffer.from(listItem.buffer, listItem.byteOffset, listItem.byteLength);
          }
        }
      }
      return values;
    }
    __name(fixArrayBufferValues, "fixArrayBufferValues");
    var debug = (0, import_driver_adapter_utils2.Debug)("prisma:driver-adapter:neon");
    var NeonQueryable = class {
      static {
        __name(this, "NeonQueryable");
      }
      constructor() {
        this.provider = "postgres";
        this.adapterName = name;
      }
      /**
       * Execute a query given as SQL, interpolating the given parameters.
       */
      async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const res = await this.performIO(query);
        if (!res.ok) {
          return (0, import_driver_adapter_utils2.err)(res.error);
        }
        const { fields, rows } = res.value;
        const columnNames = fields.map((field) => field.name);
        let columnTypes = [];
        try {
          columnTypes = fields.map((field) => fieldToColumnType(field.dataTypeID));
        } catch (e) {
          if (e instanceof UnsupportedNativeDataType) {
            return (0, import_driver_adapter_utils2.err)({
              kind: "UnsupportedNativeDataType",
              type: e.type
            });
          }
          throw e;
        }
        return (0, import_driver_adapter_utils2.ok)({
          columnNames,
          columnTypes,
          rows
        });
      }
      /**
       * Execute a query given as SQL, interpolating the given parameters and
       * returning the number of affected rows.
       * Note: Queryable expects a u64, but napi.rs only supports u32.
       */
      async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).map((r) => r.rowCount ?? 0);
      }
    };
    var NeonWsQueryable = class extends NeonQueryable {
      static {
        __name(this, "NeonWsQueryable");
      }
      constructor(client) {
        super();
        this.client = client;
      }
      async performIO(query) {
        const { sql, args: values } = query;
        try {
          const result = await this.client.query(
            {
              text: sql,
              values: fixArrayBufferValues(values),
              rowMode: "array",
              types: {
                // This is the error expected:
                // No overload matches this call.
                // The last overload gave the following error.
                //   Type '(oid: number, format?: any) => (json: string) => unknown' is not assignable to type '{ <T>(oid: number): TypeParser<string, string | T>; <T>(oid: number, format: "text"): TypeParser<string, string | T>; <T>(oid: number, format: "binary"): TypeParser<...>; }'.
                //     Type '(json: string) => unknown' is not assignable to type 'TypeParser<Buffer, any>'.
                //       Types of parameters 'json' and 'value' are incompatible.
                //         Type 'Buffer' is not assignable to type 'string'.ts(2769)
                //
                // Because pg-types types expect us to handle both binary and text protocol versions,
                // where as far we can see, pg will ever pass only text version.
                //
                // @ts-expect-error
                getTypeParser: /* @__PURE__ */ __name((oid, format) => {
                  if (format === "text" && customParsers[oid]) {
                    return customParsers[oid];
                  }
                  return neon.types.getTypeParser(oid, format);
                }, "getTypeParser")
              }
            },
            fixArrayBufferValues(values)
          );
          return (0, import_driver_adapter_utils2.ok)(result);
        } catch (e) {
          debug("Error in performIO: %O", e);
          if (e && typeof e.code === "string" && typeof e.severity === "string" && typeof e.message === "string") {
            return (0, import_driver_adapter_utils2.err)({
              kind: "Postgres",
              code: e.code,
              severity: e.severity,
              message: e.message,
              detail: e.detail,
              column: e.column,
              hint: e.hint
            });
          }
          throw e;
        }
      }
    };
    var NeonTransaction = class extends NeonWsQueryable {
      static {
        __name(this, "NeonTransaction");
      }
      constructor(client, options) {
        super(client);
        this.options = options;
      }
      async commit() {
        debug(`[js::commit]`);
        this.client.release();
        return Promise.resolve((0, import_driver_adapter_utils2.ok)(void 0));
      }
      async rollback() {
        debug(`[js::rollback]`);
        this.client.release();
        return Promise.resolve((0, import_driver_adapter_utils2.ok)(void 0));
      }
    };
    var NeonTransactionContext = class extends NeonWsQueryable {
      static {
        __name(this, "NeonTransactionContext");
      }
      constructor(conn) {
        super(conn);
        this.conn = conn;
      }
      async startTransaction() {
        const options = {
          usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        return (0, import_driver_adapter_utils2.ok)(new NeonTransaction(this.conn, options));
      }
    };
    var PrismaNeon = class extends NeonWsQueryable {
      static {
        __name(this, "PrismaNeon");
      }
      constructor(pool, options) {
        if (!(pool instanceof neon.Pool)) {
          throw new TypeError(`PrismaNeon must be initialized with an instance of Pool:
import { Pool } from '@neondatabase/serverless'
const pool = new Pool({ connectionString: url })
const adapter = new PrismaNeon(pool)
`);
        }
        super(pool);
        this.options = options;
        this.isRunning = true;
      }
      getConnectionInfo() {
        return (0, import_driver_adapter_utils2.ok)({
          schemaName: this.options?.schema
        });
      }
      async transactionContext() {
        const conn = await this.client.connect();
        return (0, import_driver_adapter_utils2.ok)(new NeonTransactionContext(conn));
      }
      async close() {
        if (this.isRunning) {
          await this.client.end();
          this.isRunning = false;
        }
        return (0, import_driver_adapter_utils2.ok)(void 0);
      }
    };
    var PrismaNeonHTTP = class extends NeonQueryable {
      static {
        __name(this, "PrismaNeonHTTP");
      }
      constructor(client) {
        super();
        this.client = client;
      }
      async performIO(query) {
        const { sql, args: values } = query;
        return (0, import_driver_adapter_utils2.ok)(
          await this.client(sql, values, {
            arrayMode: true,
            fullResults: true
          })
        );
      }
      transactionContext() {
        return Promise.reject(new Error("Transactions are not supported in HTTP mode"));
      }
    };
  }
});

// ../../node_modules/.pnpm/ws@8.21.0/node_modules/ws/browser.js
var require_browser = __commonJS({
  "../../node_modules/.pnpm/ws@8.21.0/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/@prisma/client/runtime/wasm.js
var require_wasm = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/@prisma/client/runtime/wasm.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var Uo = Object.create;
    var kt = Object.defineProperty;
    var qo = Object.getOwnPropertyDescriptor;
    var Bo = Object.getOwnPropertyNames;
    var $o = Object.getPrototypeOf;
    var Vo = Object.prototype.hasOwnProperty;
    var se = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "se");
    var De = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "De");
    var Mt = /* @__PURE__ */ __name((e, t) => {
      for (var r in t) kt(e, r, { get: t[r], enumerable: true });
    }, "Mt");
    var rn = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of Bo(t)) !Vo.call(e, i) && i !== r && kt(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(n = qo(t, i)) || n.enumerable });
      return e;
    }, "rn");
    var Fe = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? Uo($o(e)) : {}, rn(t || !e || !e.__esModule ? kt(r, "default", { value: e, enumerable: true }) : r, e)), "Fe");
    var jo = /* @__PURE__ */ __name((e) => rn(kt({}, "__esModule", { value: true }), e), "jo");
    function gr(e, t) {
      if (t = t.toLowerCase(), t === "utf8" || t === "utf-8") return new y(Wo.encode(e));
      if (t === "base64" || t === "base64url") return e = e.replace(/-/g, "+").replace(/_/g, "/"), e = e.replace(/[^A-Za-z0-9+/]/g, ""), new y([...atob(e)].map((r) => r.charCodeAt(0)));
      if (t === "binary" || t === "ascii" || t === "latin1" || t === "latin-1") return new y([...e].map((r) => r.charCodeAt(0)));
      if (t === "ucs2" || t === "ucs-2" || t === "utf16le" || t === "utf-16le") {
        let r = new y(e.length * 2), n = new DataView(r.buffer);
        for (let i = 0; i < e.length; i++) n.setUint16(i * 2, e.charCodeAt(i), true);
        return r;
      }
      if (t === "hex") {
        let r = new y(e.length / 2);
        for (let n = 0, i = 0; i < e.length; i += 2, n++) r[n] = parseInt(e.slice(i, i + 2), 16);
        return r;
      }
      on(`encoding "${t}"`);
    }
    __name(gr, "gr");
    function Qo(e) {
      let r = Object.getOwnPropertyNames(DataView.prototype).filter((a) => a.startsWith("get") || a.startsWith("set")), n = r.map((a) => a.replace("get", "read").replace("set", "write")), i = /* @__PURE__ */ __name((a, u) => function(g = 0) {
        return B(g, "offset"), Y(g, "offset"), V(g, "offset", this.length - 1), new DataView(this.buffer)[r[a]](g, u);
      }, "i"), o = /* @__PURE__ */ __name((a, u) => function(g, T = 0) {
        let C = r[a].match(/set(\w+\d+)/)[1].toLowerCase(), O = Go[C];
        return B(T, "offset"), Y(T, "offset"), V(T, "offset", this.length - 1), Jo(g, "value", O[0], O[1]), new DataView(this.buffer)[r[a]](T, g, u), T + parseInt(r[a].match(/\d+/)[0]) / 8;
      }, "o"), s = /* @__PURE__ */ __name((a) => {
        a.forEach((u) => {
          u.includes("Uint") && (e[u.replace("Uint", "UInt")] = e[u]), u.includes("Float64") && (e[u.replace("Float64", "Double")] = e[u]), u.includes("Float32") && (e[u.replace("Float32", "Float")] = e[u]);
        });
      }, "s");
      n.forEach((a, u) => {
        a.startsWith("read") && (e[a] = i(u, false), e[a + "LE"] = i(u, true), e[a + "BE"] = i(u, false)), a.startsWith("write") && (e[a] = o(u, false), e[a + "LE"] = o(u, true), e[a + "BE"] = o(u, false)), s([a, a + "LE", a + "BE"]);
      });
    }
    __name(Qo, "Qo");
    function on(e) {
      throw new Error(`Buffer polyfill does not implement "${e}"`);
    }
    __name(on, "on");
    function It(e, t) {
      if (!(e instanceof Uint8Array)) throw new TypeError(`The "${t}" argument must be an instance of Buffer or Uint8Array`);
    }
    __name(It, "It");
    function V(e, t, r = zo + 1) {
      if (e < 0 || e > r) {
        let n = new RangeError(`The value of "${t}" is out of range. It must be >= 0 && <= ${r}. Received ${e}`);
        throw n.code = "ERR_OUT_OF_RANGE", n;
      }
    }
    __name(V, "V");
    function B(e, t) {
      if (typeof e != "number") {
        let r = new TypeError(`The "${t}" argument must be of type number. Received type ${typeof e}.`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(B, "B");
    function Y(e, t) {
      if (!Number.isInteger(e) || Number.isNaN(e)) {
        let r = new RangeError(`The value of "${t}" is out of range. It must be an integer. Received ${e}`);
        throw r.code = "ERR_OUT_OF_RANGE", r;
      }
    }
    __name(Y, "Y");
    function Jo(e, t, r, n) {
      if (e < r || e > n) {
        let i = new RangeError(`The value of "${t}" is out of range. It must be >= ${r} and <= ${n}. Received ${e}`);
        throw i.code = "ERR_OUT_OF_RANGE", i;
      }
    }
    __name(Jo, "Jo");
    function nn(e, t) {
      if (typeof e != "string") {
        let r = new TypeError(`The "${t}" argument must be of type string. Received type ${typeof e}`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(nn, "nn");
    function Yo(e, t = "utf8") {
      return y.from(e, t);
    }
    __name(Yo, "Yo");
    var y;
    var Go;
    var Wo;
    var Ko;
    var Ho;
    var zo;
    var b;
    var hr;
    var c = se(() => {
      "use strict";
      y = class e extends Uint8Array {
        static {
          __name(this, "e");
        }
        constructor() {
          super(...arguments);
          this._isBuffer = true;
        }
        get offset() {
          return this.byteOffset;
        }
        static alloc(r, n = 0, i = "utf8") {
          return nn(i, "encoding"), e.allocUnsafe(r).fill(n, i);
        }
        static allocUnsafe(r) {
          return e.from(r);
        }
        static allocUnsafeSlow(r) {
          return e.from(r);
        }
        static isBuffer(r) {
          return r && !!r._isBuffer;
        }
        static byteLength(r, n = "utf8") {
          if (typeof r == "string") return gr(r, n).byteLength;
          if (r && r.byteLength) return r.byteLength;
          let i = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw i.code = "ERR_INVALID_ARG_TYPE", i;
        }
        static isEncoding(r) {
          return Ho.includes(r);
        }
        static compare(r, n) {
          It(r, "buff1"), It(n, "buff2");
          for (let i = 0; i < r.length; i++) {
            if (r[i] < n[i]) return -1;
            if (r[i] > n[i]) return 1;
          }
          return r.length === n.length ? 0 : r.length > n.length ? 1 : -1;
        }
        static from(r, n = "utf8") {
          if (r && typeof r == "object" && r.type === "Buffer") return new e(r.data);
          if (typeof r == "number") return new e(new Uint8Array(r));
          if (typeof r == "string") return gr(r, n);
          if (ArrayBuffer.isView(r)) {
            let { byteOffset: i, byteLength: o, buffer: s } = r;
            return "map" in r && typeof r.map == "function" ? new e(r.map((a) => a % 256), i, o) : new e(s, i, o);
          }
          if (r && typeof r == "object" && ("length" in r || "byteLength" in r || "buffer" in r)) return new e(r);
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        static concat(r, n) {
          if (r.length === 0) return e.alloc(0);
          let i = [].concat(...r.map((s) => [...s])), o = e.alloc(n !== void 0 ? n : i.length);
          return o.set(n !== void 0 ? i.slice(0, n) : i), o;
        }
        slice(r = 0, n = this.length) {
          return this.subarray(r, n);
        }
        subarray(r = 0, n = this.length) {
          return Object.setPrototypeOf(super.subarray(r, n), e.prototype);
        }
        reverse() {
          return super.reverse(), this;
        }
        readIntBE(r, n) {
          B(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++) o = o * 256 + i.getUint8(s);
          return i.getUint8(0) & 128 && (o -= Math.pow(256, n)), o;
        }
        readIntLE(r, n) {
          B(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++) o += i.getUint8(s) * Math.pow(256, s);
          return i.getUint8(n - 1) & 128 && (o -= Math.pow(256, n)), o;
        }
        readUIntBE(r, n) {
          B(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++) o = o * 256 + i.getUint8(s);
          return o;
        }
        readUintBE(r, n) {
          return this.readUIntBE(r, n);
        }
        readUIntLE(r, n) {
          B(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++) o += i.getUint8(s) * Math.pow(256, s);
          return o;
        }
        readUintLE(r, n) {
          return this.readUIntLE(r, n);
        }
        writeIntBE(r, n, i) {
          return r = r < 0 ? r + Math.pow(256, i) : r, this.writeUIntBE(r, n, i);
        }
        writeIntLE(r, n, i) {
          return r = r < 0 ? r + Math.pow(256, i) : r, this.writeUIntLE(r, n, i);
        }
        writeUIntBE(r, n, i) {
          B(n, "offset"), Y(n, "offset"), V(n, "offset", this.length - 1), B(i, "byteLength"), Y(i, "byteLength");
          let o = new DataView(this.buffer, n, i);
          for (let s = i - 1; s >= 0; s--) o.setUint8(s, r & 255), r = r / 256;
          return n + i;
        }
        writeUintBE(r, n, i) {
          return this.writeUIntBE(r, n, i);
        }
        writeUIntLE(r, n, i) {
          B(n, "offset"), Y(n, "offset"), V(n, "offset", this.length - 1), B(i, "byteLength"), Y(i, "byteLength");
          let o = new DataView(this.buffer, n, i);
          for (let s = 0; s < i; s++) o.setUint8(s, r & 255), r = r / 256;
          return n + i;
        }
        writeUintLE(r, n, i) {
          return this.writeUIntLE(r, n, i);
        }
        toJSON() {
          return { type: "Buffer", data: Array.from(this) };
        }
        swap16() {
          let r = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let n = 0; n < this.length; n += 2) r.setUint16(n, r.getUint16(n, true), false);
          return this;
        }
        swap32() {
          let r = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let n = 0; n < this.length; n += 4) r.setUint32(n, r.getUint32(n, true), false);
          return this;
        }
        swap64() {
          let r = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let n = 0; n < this.length; n += 8) r.setBigUint64(n, r.getBigUint64(n, true), false);
          return this;
        }
        compare(r, n = 0, i = r.length, o = 0, s = this.length) {
          return It(r, "target"), B(n, "targetStart"), B(i, "targetEnd"), B(o, "sourceStart"), B(s, "sourceEnd"), V(n, "targetStart"), V(i, "targetEnd", r.length), V(o, "sourceStart"), V(s, "sourceEnd", this.length), e.compare(this.slice(o, s), r.slice(n, i));
        }
        equals(r) {
          return It(r, "otherBuffer"), this.length === r.length && this.every((n, i) => n === r[i]);
        }
        copy(r, n = 0, i = 0, o = this.length) {
          V(n, "targetStart"), V(i, "sourceStart", this.length), V(o, "sourceEnd"), n >>>= 0, i >>>= 0, o >>>= 0;
          let s = 0;
          for (; i < o && !(this[i] === void 0 || r[n] === void 0); ) r[n] = this[i], s++, i++, n++;
          return s;
        }
        write(r, n, i, o = "utf8") {
          let s = typeof n == "string" ? 0 : n ?? 0, a = typeof i == "string" ? this.length - s : i ?? this.length - s;
          return o = typeof n == "string" ? n : typeof i == "string" ? i : o, B(s, "offset"), B(a, "length"), V(s, "offset", this.length), V(a, "length", this.length), (o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le") && (a = a - a % 2), gr(r, o).copy(this, s, 0, a);
        }
        fill(r = 0, n = 0, i = this.length, o = "utf-8") {
          let s = typeof n == "string" ? 0 : n, a = typeof i == "string" ? this.length : i;
          if (o = typeof n == "string" ? n : typeof i == "string" ? i : o, r = e.from(typeof r == "number" ? [r] : r ?? [], o), nn(o, "encoding"), V(s, "offset", this.length), V(a, "end", this.length), r.length !== 0) for (let u = s; u < a; u += r.length) super.set(r.slice(0, r.length + u >= this.length ? this.length - u : r.length), u);
          return this;
        }
        includes(r, n = null, i = "utf-8") {
          return this.indexOf(r, n, i) !== -1;
        }
        lastIndexOf(r, n = null, i = "utf-8") {
          return this.indexOf(r, n, i, true);
        }
        indexOf(r, n = null, i = "utf-8", o = false) {
          let s = o ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
          i = typeof n == "string" ? n : i;
          let a = e.from(typeof r == "number" ? [r] : r, i), u = typeof n == "string" ? 0 : n;
          return u = typeof n == "number" ? u : null, u = Number.isNaN(u) ? null : u, u ??= o ? this.length : 0, u = u < 0 ? this.length + u : u, a.length === 0 && o === false ? u >= this.length ? this.length : u : a.length === 0 && o === true ? (u >= this.length ? this.length : u) || this.length : s((g, T) => (o ? T <= u : T >= u) && this[T] === a[0] && a.every((O, A) => this[T + A] === O));
        }
        toString(r = "utf8", n = 0, i = this.length) {
          if (n = n < 0 ? 0 : n, r = r.toString().toLowerCase(), i <= 0) return "";
          if (r === "utf8" || r === "utf-8") return Ko.decode(this.slice(n, i));
          if (r === "base64" || r === "base64url") {
            let o = btoa(this.reduce((s, a) => s + hr(a), ""));
            return r === "base64url" ? o.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : o;
          }
          if (r === "binary" || r === "ascii" || r === "latin1" || r === "latin-1") return this.slice(n, i).reduce((o, s) => o + hr(s & (r === "ascii" ? 127 : 255)), "");
          if (r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le") {
            let o = new DataView(this.buffer.slice(n, i));
            return Array.from({ length: o.byteLength / 2 }, (s, a) => a * 2 + 1 < o.byteLength ? hr(o.getUint16(a * 2, true)) : "").join("");
          }
          if (r === "hex") return this.slice(n, i).reduce((o, s) => o + s.toString(16).padStart(2, "0"), "");
          on(`encoding "${r}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      };
      Go = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, Wo = new TextEncoder(), Ko = new TextDecoder(), Ho = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], zo = 4294967295;
      Qo(y.prototype);
      b = new Proxy(Yo, { construct(e, [t, r]) {
        return y.from(t, r);
      }, get(e, t) {
        return y[t];
      } }), hr = String.fromCodePoint;
    });
    var h;
    var m = se(() => {
      "use strict";
      h = { nextTick: /* @__PURE__ */ __name((e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"] };
    });
    var x;
    var p = se(() => {
      "use strict";
      x = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - e, "now") };
      })();
    });
    var E;
    var d = se(() => {
      "use strict";
      E = /* @__PURE__ */ __name(() => {
      }, "E");
      E.prototype = E;
    });
    var w;
    var f = se(() => {
      "use strict";
      w = class {
        static {
          __name(this, "w");
        }
        constructor(t) {
          this.value = t;
        }
        deref() {
          return this.value;
        }
      };
    });
    function un(e, t) {
      var r, n, i, o, s, a, u, g, T = e.constructor, C = T.precision;
      if (!e.s || !t.s) return t.s || (t = new T(e)), U ? D(t, C) : t;
      if (u = e.d, g = t.d, s = e.e, i = t.e, u = u.slice(), o = s - i, o) {
        for (o < 0 ? (n = u, o = -o, a = g.length) : (n = g, i = s, a = u.length), s = Math.ceil(C / N), a = s > a ? s + 1 : a + 1, o > a && (o = a, n.length = 1), n.reverse(); o--; ) n.push(0);
        n.reverse();
      }
      for (a = u.length, o = g.length, a - o < 0 && (o = a, n = g, g = u, u = n), r = 0; o; ) r = (u[--o] = u[o] + g[o] + r) / Q | 0, u[o] %= Q;
      for (r && (u.unshift(r), ++i), a = u.length; u[--a] == 0; ) u.pop();
      return t.d = u, t.e = i, U ? D(t, C) : t;
    }
    __name(un, "un");
    function le(e, t, r) {
      if (e !== ~~e || e < t || e > r) throw Error(Oe + e);
    }
    __name(le, "le");
    function ae(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++) n = e[t] + "", r = N - n.length, r && (o += Pe(r)), o += n;
        s = e[t], n = s + "", r = N - n.length, r && (o += Pe(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(ae, "ae");
    function cn(e, t) {
      var r, n, i, o, s, a, u = 0, g = 0, T = e.constructor, C = T.precision;
      if ($(e) > 16) throw Error(br + $(e));
      if (!e.s) return new T(Z);
      for (t == null ? (U = false, a = C) : a = t, s = new T(0.03125); e.abs().gte(0.1); ) e = e.times(s), g += 5;
      for (n = Math.log(Se(2, g)) / Math.LN10 * 2 + 5 | 0, a += n, r = i = o = new T(Z), T.precision = a; ; ) {
        if (i = D(i.times(e), a), r = r.times(++u), s = o.plus(ye(i, r, a)), ae(s.d).slice(0, a) === ae(o.d).slice(0, a)) {
          for (; g--; ) o = D(o.times(o), a);
          return T.precision = C, t == null ? (U = true, D(o, C)) : o;
        }
        o = s;
      }
    }
    __name(cn, "cn");
    function $(e) {
      for (var t = e.e * N, r = e.d[0]; r >= 10; r /= 10) t++;
      return t;
    }
    __name($, "$");
    function yr(e, t, r) {
      if (t > e.LN10.sd()) throw U = true, r && (e.precision = r), Error(re + "LN10 precision limit exceeded");
      return D(new e(e.LN10), t);
    }
    __name(yr, "yr");
    function Pe(e) {
      for (var t = ""; e--; ) t += "0";
      return t;
    }
    __name(Pe, "Pe");
    function it(e, t) {
      var r, n, i, o, s, a, u, g, T, C = 1, O = 10, A = e, M = A.d, S = A.constructor, I = S.precision;
      if (A.s < 1) throw Error(re + (A.s ? "NaN" : "-Infinity"));
      if (A.eq(Z)) return new S(0);
      if (t == null ? (U = false, g = I) : g = t, A.eq(10)) return t == null && (U = true), yr(S, g);
      if (g += O, S.precision = g, r = ae(M), n = r.charAt(0), o = $(A), Math.abs(o) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) A = A.times(e), r = ae(A.d), n = r.charAt(0), C++;
        o = $(A), n > 1 ? (A = new S("0." + r), o++) : A = new S(n + "." + r.slice(1));
      } else return u = yr(S, g + 2, I).times(o + ""), A = it(new S(n + "." + r.slice(1)), g - O).plus(u), S.precision = I, t == null ? (U = true, D(A, I)) : A;
      for (a = s = A = ye(A.minus(Z), A.plus(Z), g), T = D(A.times(A), g), i = 3; ; ) {
        if (s = D(s.times(T), g), u = a.plus(ye(s, new S(i), g)), ae(u.d).slice(0, g) === ae(a.d).slice(0, g)) return a = a.times(2), o !== 0 && (a = a.plus(yr(S, g + 2, I).times(o + ""))), a = ye(a, new S(C), g), S.precision = I, t == null ? (U = true, D(a, I)) : a;
        a = u, i += 2;
      }
    }
    __name(it, "it");
    function sn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
      for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
      if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = Ue(r / N), e.d = [], n = (r + 1) % N, r < 0 && (n += N), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= N; n < i; ) e.d.push(+t.slice(n, n += N));
          t = t.slice(n), n = N - t.length;
        } else n -= i;
        for (; n--; ) t += "0";
        if (e.d.push(+t), U && (e.e > Lt || e.e < -Lt)) throw Error(br + r);
      } else e.s = 0, e.e = 0, e.d = [0];
      return e;
    }
    __name(sn, "sn");
    function D(e, t, r) {
      var n, i, o, s, a, u, g, T, C = e.d;
      for (s = 1, o = C[0]; o >= 10; o /= 10) s++;
      if (n = t - s, n < 0) n += N, i = t, g = C[T = 0];
      else {
        if (T = Math.ceil((n + 1) / N), o = C.length, T >= o) return e;
        for (g = o = C[T], s = 1; o >= 10; o /= 10) s++;
        n %= N, i = n - N + s;
      }
      if (r !== void 0 && (o = Se(10, s - i - 1), a = g / o % 10 | 0, u = t < 0 || C[T + 1] !== void 0 || g % o, u = r < 4 ? (a || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : a > 5 || a == 5 && (r == 4 || u || r == 6 && (n > 0 ? i > 0 ? g / Se(10, s - i) : 0 : C[T - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !C[0]) return u ? (o = $(e), C.length = 1, t = t - o - 1, C[0] = Se(10, (N - t % N) % N), e.e = Ue(-t / N) || 0) : (C.length = 1, C[0] = e.e = e.s = 0), e;
      if (n == 0 ? (C.length = T, o = 1, T--) : (C.length = T + 1, o = Se(10, N - n), C[T] = i > 0 ? (g / Se(10, s - i) % Se(10, i) | 0) * o : 0), u) for (; ; ) if (T == 0) {
        (C[0] += o) == Q && (C[0] = 1, ++e.e);
        break;
      } else {
        if (C[T] += o, C[T] != Q) break;
        C[T--] = 0, o = 1;
      }
      for (n = C.length; C[--n] === 0; ) C.pop();
      if (U && (e.e > Lt || e.e < -Lt)) throw Error(br + $(e));
      return e;
    }
    __name(D, "D");
    function mn(e, t) {
      var r, n, i, o, s, a, u, g, T, C, O = e.constructor, A = O.precision;
      if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new O(e), U ? D(t, A) : t;
      if (u = e.d, C = t.d, n = t.e, g = e.e, u = u.slice(), s = g - n, s) {
        for (T = s < 0, T ? (r = u, s = -s, a = C.length) : (r = C, n = g, a = u.length), i = Math.max(Math.ceil(A / N), a) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; ) r.push(0);
        r.reverse();
      } else {
        for (i = u.length, a = C.length, T = i < a, T && (a = i), i = 0; i < a; i++) if (u[i] != C[i]) {
          T = u[i] < C[i];
          break;
        }
        s = 0;
      }
      for (T && (r = u, u = C, C = r, t.s = -t.s), a = u.length, i = C.length - a; i > 0; --i) u[a++] = 0;
      for (i = C.length; i > s; ) {
        if (u[--i] < C[i]) {
          for (o = i; o && u[--o] === 0; ) u[o] = Q - 1;
          --u[o], u[i] += Q;
        }
        u[i] -= C[i];
      }
      for (; u[--a] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --n;
      return u[0] ? (t.d = u, t.e = n, U ? D(t, A) : t) : new O(0);
    }
    __name(mn, "mn");
    function ke(e, t, r) {
      var n, i = $(e), o = ae(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Pe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Pe(-i - 1) + o, r && (n = r - s) > 0 && (o += Pe(n))) : i >= s ? (o += Pe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Pe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Pe(n))), e.s < 0 ? "-" + o : o;
    }
    __name(ke, "ke");
    function an(e, t) {
      if (e.length > t) return e.length = t, true;
    }
    __name(an, "an");
    function pn(e) {
      var t, r, n;
      function i(o) {
        var s = this;
        if (!(s instanceof i)) return new i(o);
        if (s.constructor = i, o instanceof i) {
          s.s = o.s, s.e = o.e, s.d = (o = o.d) ? o.slice() : o;
          return;
        }
        if (typeof o == "number") {
          if (o * 0 !== 0) throw Error(Oe + o);
          if (o > 0) s.s = 1;
          else if (o < 0) o = -o, s.s = -1;
          else {
            s.s = 0, s.e = 0, s.d = [0];
            return;
          }
          if (o === ~~o && o < 1e7) {
            s.e = 0, s.d = [o];
            return;
          }
          return sn(s, o.toString());
        } else if (typeof o != "string") throw Error(Oe + o);
        if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, Zo.test(o)) sn(s, o);
        else throw Error(Oe + o);
      }
      __name(i, "i");
      if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = pn, i.config = i.set = es, e === void 0 && (e = {}), e) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(pn, "pn");
    function es(e) {
      if (!e || typeof e != "object") throw Error(re + "Object expected");
      var t, r, n, i = ["precision", 1, Ne, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (t = 0; t < i.length; t += 3) if ((n = e[r = i[t]]) !== void 0) if (Ue(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Oe + r + ": " + n);
      if ((n = e[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
      else throw Error(Oe + r + ": " + n);
      return this;
    }
    __name(es, "es");
    var Ne;
    var Xo;
    var wr;
    var U;
    var re;
    var Oe;
    var br;
    var Ue;
    var Se;
    var Zo;
    var Z;
    var Q;
    var N;
    var ln;
    var Lt;
    var R;
    var ye;
    var wr;
    var _t;
    var dn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Ne = 1e9, Xo = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, U = true, re = "[DecimalError] ", Oe = re + "Invalid argument: ", br = re + "Exponent out of range: ", Ue = Math.floor, Se = Math.pow, Zo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Q = 1e7, N = 7, ln = 9007199254740991, Lt = Ue(ln / N), R = {};
      R.absoluteValue = R.abs = function() {
        var e = new this.constructor(this);
        return e.s && (e.s = 1), e;
      };
      R.comparedTo = R.cmp = function(e) {
        var t, r, n, i, o = this;
        if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
        if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
        for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
      };
      R.decimalPlaces = R.dp = function() {
        var e = this, t = e.d.length - 1, r = (t - e.e) * N;
        if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
        return r < 0 ? 0 : r;
      };
      R.dividedBy = R.div = function(e) {
        return ye(this, new this.constructor(e));
      };
      R.dividedToIntegerBy = R.idiv = function(e) {
        var t = this, r = t.constructor;
        return D(ye(t, new r(e), 0, 1), r.precision);
      };
      R.equals = R.eq = function(e) {
        return !this.cmp(e);
      };
      R.exponent = function() {
        return $(this);
      };
      R.greaterThan = R.gt = function(e) {
        return this.cmp(e) > 0;
      };
      R.greaterThanOrEqualTo = R.gte = function(e) {
        return this.cmp(e) >= 0;
      };
      R.isInteger = R.isint = function() {
        return this.e > this.d.length - 2;
      };
      R.isNegative = R.isneg = function() {
        return this.s < 0;
      };
      R.isPositive = R.ispos = function() {
        return this.s > 0;
      };
      R.isZero = function() {
        return this.s === 0;
      };
      R.lessThan = R.lt = function(e) {
        return this.cmp(e) < 0;
      };
      R.lessThanOrEqualTo = R.lte = function(e) {
        return this.cmp(e) < 1;
      };
      R.logarithm = R.log = function(e) {
        var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
        if (e === void 0) e = new n(10);
        else if (e = new n(e), e.s < 1 || e.eq(Z)) throw Error(re + "NaN");
        if (r.s < 1) throw Error(re + (r.s ? "NaN" : "-Infinity"));
        return r.eq(Z) ? new n(0) : (U = false, t = ye(it(r, o), it(e, o), o), U = true, D(t, i));
      };
      R.minus = R.sub = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? mn(t, e) : un(t, (e.s = -e.s, e));
      };
      R.modulo = R.mod = function(e) {
        var t, r = this, n = r.constructor, i = n.precision;
        if (e = new n(e), !e.s) throw Error(re + "NaN");
        return r.s ? (U = false, t = ye(r, e, 0, 1).times(e), U = true, r.minus(t)) : D(new n(r), i);
      };
      R.naturalExponential = R.exp = function() {
        return cn(this);
      };
      R.naturalLogarithm = R.ln = function() {
        return it(this);
      };
      R.negated = R.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e;
      };
      R.plus = R.add = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? un(t, e) : mn(t, (e.s = -e.s, e));
      };
      R.precision = R.sd = function(e) {
        var t, r, n, i = this;
        if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Oe + e);
        if (t = $(i) + 1, n = i.d.length - 1, r = n * N + 1, n = i.d[n], n) {
          for (; n % 10 == 0; n /= 10) r--;
          for (n = i.d[0]; n >= 10; n /= 10) r++;
        }
        return e && t > r ? t : r;
      };
      R.squareRoot = R.sqrt = function() {
        var e, t, r, n, i, o, s, a = this, u = a.constructor;
        if (a.s < 1) {
          if (!a.s) return new u(0);
          throw Error(re + "NaN");
        }
        for (e = $(a), U = false, i = Math.sqrt(+a), i == 0 || i == 1 / 0 ? (t = ae(a.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Ue((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = s = r + 3; ; ) if (o = n, n = o.plus(ye(a, o, s + 2)).times(0.5), ae(o.d).slice(0, s) === (t = ae(n.d)).slice(0, s)) {
          if (t = t.slice(s - 3, s + 1), i == s && t == "4999") {
            if (D(o, r + 1, 0), o.times(o).eq(a)) {
              n = o;
              break;
            }
          } else if (t != "9999") break;
          s += 4;
        }
        return U = true, D(n, r);
      };
      R.times = R.mul = function(e) {
        var t, r, n, i, o, s, a, u, g, T = this, C = T.constructor, O = T.d, A = (e = new C(e)).d;
        if (!T.s || !e.s) return new C(0);
        for (e.s *= T.s, r = T.e + e.e, u = O.length, g = A.length, u < g && (o = O, O = A, A = o, s = u, u = g, g = s), o = [], s = u + g, n = s; n--; ) o.push(0);
        for (n = g; --n >= 0; ) {
          for (t = 0, i = u + n; i > n; ) a = o[i] + A[n] * O[i - n - 1] + t, o[i--] = a % Q | 0, t = a / Q | 0;
          o[i] = (o[i] + t) % Q | 0;
        }
        for (; !o[--s]; ) o.pop();
        return t ? ++r : o.shift(), e.d = o, e.e = r, U ? D(e, C.precision) : e;
      };
      R.toDecimalPlaces = R.todp = function(e, t) {
        var r = this, n = r.constructor;
        return r = new n(r), e === void 0 ? r : (le(e, 0, Ne), t === void 0 ? t = n.rounding : le(t, 0, 8), D(r, e + $(r) + 1, t));
      };
      R.toExponential = function(e, t) {
        var r, n = this, i = n.constructor;
        return e === void 0 ? r = ke(n, true) : (le(e, 0, Ne), t === void 0 ? t = i.rounding : le(t, 0, 8), n = D(new i(n), e + 1, t), r = ke(n, true, e + 1)), r;
      };
      R.toFixed = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? ke(i) : (le(e, 0, Ne), t === void 0 ? t = o.rounding : le(t, 0, 8), n = D(new o(i), e + $(i) + 1, t), r = ke(n.abs(), false, e + $(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
      };
      R.toInteger = R.toint = function() {
        var e = this, t = e.constructor;
        return D(new t(e), $(e) + 1, t.rounding);
      };
      R.toNumber = function() {
        return +this;
      };
      R.toPower = R.pow = function(e) {
        var t, r, n, i, o, s, a = this, u = a.constructor, g = 12, T = +(e = new u(e));
        if (!e.s) return new u(Z);
        if (a = new u(a), !a.s) {
          if (e.s < 1) throw Error(re + "Infinity");
          return a;
        }
        if (a.eq(Z)) return a;
        if (n = u.precision, e.eq(Z)) return D(a, n);
        if (t = e.e, r = e.d.length - 1, s = t >= r, o = a.s, s) {
          if ((r = T < 0 ? -T : T) <= ln) {
            for (i = new u(Z), t = Math.ceil(n / N + 4), U = false; r % 2 && (i = i.times(a), an(i.d, t)), r = Ue(r / 2), r !== 0; ) a = a.times(a), an(a.d, t);
            return U = true, e.s < 0 ? new u(Z).div(i) : D(i, n);
          }
        } else if (o < 0) throw Error(re + "NaN");
        return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, a.s = 1, U = false, i = e.times(it(a, n + g)), U = true, i = cn(i), i.s = o, i;
      };
      R.toPrecision = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? (r = $(i), n = ke(i, r <= o.toExpNeg || r >= o.toExpPos)) : (le(e, 1, Ne), t === void 0 ? t = o.rounding : le(t, 0, 8), i = D(new o(i), e, t), r = $(i), n = ke(i, e <= r || r <= o.toExpNeg, e)), n;
      };
      R.toSignificantDigits = R.tosd = function(e, t) {
        var r = this, n = r.constructor;
        return e === void 0 ? (e = n.precision, t = n.rounding) : (le(e, 1, Ne), t === void 0 ? t = n.rounding : le(t, 0, 8)), D(new n(r), e, t);
      };
      R.toString = R.valueOf = R.val = R.toJSON = R[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
        var e = this, t = $(e), r = e.constructor;
        return ke(e, t <= r.toExpNeg || t >= r.toExpPos);
      };
      ye = /* @__PURE__ */ (function() {
        function e(n, i) {
          var o, s = 0, a = n.length;
          for (n = n.slice(); a--; ) o = n[a] * i + s, n[a] = o % Q | 0, s = o / Q | 0;
          return s && n.unshift(s), n;
        }
        __name(e, "e");
        function t(n, i, o, s) {
          var a, u;
          if (o != s) u = o > s ? 1 : -1;
          else for (a = u = 0; a < o; a++) if (n[a] != i[a]) {
            u = n[a] > i[a] ? 1 : -1;
            break;
          }
          return u;
        }
        __name(t, "t");
        function r(n, i, o) {
          for (var s = 0; o--; ) n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * Q + n[o] - i[o];
          for (; !n[0] && n.length > 1; ) n.shift();
        }
        __name(r, "r");
        return function(n, i, o, s) {
          var a, u, g, T, C, O, A, M, S, I, ne, z, _e, k, Ae, fr, ie, St, Ot = n.constructor, No = n.s == i.s ? 1 : -1, oe = n.d, q = i.d;
          if (!n.s) return new Ot(n);
          if (!i.s) throw Error(re + "Division by zero");
          for (u = n.e - i.e, ie = q.length, Ae = oe.length, A = new Ot(No), M = A.d = [], g = 0; q[g] == (oe[g] || 0); ) ++g;
          if (q[g] > (oe[g] || 0) && --u, o == null ? z = o = Ot.precision : s ? z = o + ($(n) - $(i)) + 1 : z = o, z < 0) return new Ot(0);
          if (z = z / N + 2 | 0, g = 0, ie == 1) for (T = 0, q = q[0], z++; (g < Ae || T) && z--; g++) _e = T * Q + (oe[g] || 0), M[g] = _e / q | 0, T = _e % q | 0;
          else {
            for (T = Q / (q[0] + 1) | 0, T > 1 && (q = e(q, T), oe = e(oe, T), ie = q.length, Ae = oe.length), k = ie, S = oe.slice(0, ie), I = S.length; I < ie; ) S[I++] = 0;
            St = q.slice(), St.unshift(0), fr = q[0], q[1] >= Q / 2 && ++fr;
            do
              T = 0, a = t(q, S, ie, I), a < 0 ? (ne = S[0], ie != I && (ne = ne * Q + (S[1] || 0)), T = ne / fr | 0, T > 1 ? (T >= Q && (T = Q - 1), C = e(q, T), O = C.length, I = S.length, a = t(C, S, O, I), a == 1 && (T--, r(C, ie < O ? St : q, O))) : (T == 0 && (a = T = 1), C = q.slice()), O = C.length, O < I && C.unshift(0), r(S, C, I), a == -1 && (I = S.length, a = t(q, S, ie, I), a < 1 && (T++, r(S, ie < I ? St : q, I))), I = S.length) : a === 0 && (T++, S = [0]), M[g++] = T, a && S[0] ? S[I++] = oe[k] || 0 : (S = [oe[k]], I = 1);
            while ((k++ < Ae || S[0] !== void 0) && z--);
          }
          return M[0] || M.shift(), A.e = u, D(A, s ? o + $(A) + 1 : o);
        };
      })();
      wr = pn(Xo);
      Z = new wr(1);
      _t = wr;
    });
    var v;
    var ue;
    var l = se(() => {
      "use strict";
      dn();
      v = class extends _t {
        static {
          __name(this, "v");
        }
        static isDecimal(t) {
          return t instanceof _t;
        }
        static random(t = 20) {
          {
            let n = crypto.getRandomValues(new Uint8Array(t)).reduce((i, o) => i + o, "");
            return new _t(`0.${n.slice(0, t)}`);
          }
        }
      }, ue = v;
    });
    function ts() {
      return false;
    }
    __name(ts, "ts");
    var rs;
    var ns;
    var yn;
    var bn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      rs = {}, ns = { existsSync: ts, promises: rs }, yn = ns;
    });
    function us(...e) {
      return e.join("/");
    }
    __name(us, "us");
    function cs(...e) {
      return e.join("/");
    }
    __name(cs, "cs");
    var In;
    var ms;
    var ps;
    var st;
    var Ln = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      In = "/", ms = { sep: In }, ps = { resolve: us, posix: ms, join: cs, sep: In }, st = ps;
    });
    var Ut;
    var Dn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Ut = class {
        static {
          __name(this, "Ut");
        }
        constructor() {
          this.events = {};
        }
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var Nn = De((Wc, Fn) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Fn.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Bn = De((am, qn) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      qn.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Vn = De((fm, $n) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      var bs = Bn();
      $n.exports = (e) => typeof e == "string" ? e.replace(bs(), "") : e;
    });
    var kr = De((Mf, Jn) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Jn.exports = /* @__PURE__ */ (function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, u, g, T, C, O, A, M, S, I, ne, z, _e, k = [];
          for (u = 0; u < i; u++) k.push(u + 1), k.push(t.charCodeAt(s + u));
          for (var Ae = k.length - 1; a < o - 3; ) for (I = r.charCodeAt(s + (g = a)), ne = r.charCodeAt(s + (T = a + 1)), z = r.charCodeAt(s + (C = a + 2)), _e = r.charCodeAt(s + (O = a + 3)), A = a += 4, u = 0; u < Ae; u += 2) M = k[u], S = k[u + 1], g = e(M, g, T, I, S), T = e(g, T, C, ne, S), C = e(T, C, O, z, S), A = e(C, O, A, _e, S), k[u] = A, O = C, C = T, T = g, g = M;
          for (; a < o; ) for (I = r.charCodeAt(s + (g = a)), A = ++a, u = 0; u < Ae; u += 2) M = k[u], k[u] = A = e(M, g, A, I, k[u + 1]), g = M;
          return A;
        };
      })();
    });
    var wi = De((oE, fa) => {
      fa.exports = { name: "@prisma/engines-version", version: "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "605197351a3c8bdd595af2d2a9bc3025bca48ea2" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Ei = De(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
    });
    var ul = {};
    Mt(ul, { Debug: /* @__PURE__ */ __name(() => Tr, "Debug"), Decimal: /* @__PURE__ */ __name(() => ue, "Decimal"), Extensions: /* @__PURE__ */ __name(() => Er, "Extensions"), MetricsClient: /* @__PURE__ */ __name(() => Ze, "MetricsClient"), NotFoundError: /* @__PURE__ */ __name(() => we, "NotFoundError"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => L, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => J, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => Ee, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => G, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => j, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => xr, "Public"), Sql: /* @__PURE__ */ __name(() => X, "Sql"), defineDmmfProperty: /* @__PURE__ */ __name(() => hi, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => $e, "deserializeJsonResponse"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => gi, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => Pi, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => _o, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => Ce, "getRuntime"), join: /* @__PURE__ */ __name(() => xi, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => Do, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => yi, "makeTypedQueryFactory"), objectEnumValues: /* @__PURE__ */ __name(() => Wt, "objectEnumValues"), raw: /* @__PURE__ */ __name(() => Vr, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => Zt, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => Xt, "skip"), sqltag: /* @__PURE__ */ __name(() => jr, "sqltag"), warnEnvConflicts: /* @__PURE__ */ __name(() => void 0, "warnEnvConflicts"), warnOnce: /* @__PURE__ */ __name(() => ct, "warnOnce") });
    module.exports = jo(ul);
    c();
    m();
    p();
    d();
    f();
    l();
    var Er = {};
    Mt(Er, { defineExtension: /* @__PURE__ */ __name(() => fn, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => gn, "getExtensionContext") });
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function fn(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(fn, "fn");
    c();
    m();
    p();
    d();
    f();
    l();
    function gn(e) {
      return e;
    }
    __name(gn, "gn");
    var xr = {};
    Mt(xr, { validator: /* @__PURE__ */ __name(() => hn, "validator") });
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function hn(...e) {
      return (t) => t;
    }
    __name(hn, "hn");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Pr;
    var wn;
    var En;
    var xn;
    var Pn = true;
    typeof h < "u" && ({ FORCE_COLOR: Pr, NODE_DISABLE_COLORS: wn, NO_COLOR: En, TERM: xn } = h.env || {}, Pn = h.stdout && h.stdout.isTTY);
    var is = { enabled: !wn && En == null && xn !== "dumb" && (Pr != null && Pr !== "0" || Pn) };
    function F(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !is.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(F, "F");
    var fu = F(0, 0);
    var Dt = F(1, 22);
    var Ft = F(2, 22);
    var gu = F(3, 23);
    var vn = F(4, 24);
    var hu = F(7, 27);
    var yu = F(8, 28);
    var bu = F(9, 29);
    var wu = F(30, 39);
    var qe = F(31, 39);
    var Tn = F(32, 39);
    var Cn = F(33, 39);
    var Rn = F(34, 39);
    var Eu = F(35, 39);
    var An = F(36, 39);
    var xu = F(37, 39);
    var Sn = F(90, 39);
    var Pu = F(90, 39);
    var vu = F(40, 49);
    var Tu = F(41, 49);
    var Cu = F(42, 49);
    var Ru = F(43, 49);
    var Au = F(44, 49);
    var Su = F(45, 49);
    var Ou = F(46, 49);
    var ku = F(47, 49);
    c();
    m();
    p();
    d();
    f();
    l();
    var os = 100;
    var On = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Nt = [];
    var kn = Date.now();
    var ss = 0;
    var vr = typeof h < "u" ? h.env : {};
    globalThis.DEBUG ??= vr.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= vr.DEBUG_COLORS ? vr.DEBUG_COLORS === "true" : true;
    var ot = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, "log"), formatters: {} };
    function as(e) {
      let t = { color: On[ss++ % On.length], enabled: ot.enabled(e), namespace: e, log: ot.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && Nt.push([o, ...n]), Nt.length > os && Nt.shift(), ot.enabled(o) || i) {
          let u = n.map((T) => typeof T == "string" ? T : ls(T)), g = `+${Date.now() - kn}ms`;
          kn = Date.now(), a(o, ...u, g);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t[i] = o, "set") });
    }
    __name(as, "as");
    var Tr = new Proxy(as, { get: /* @__PURE__ */ __name((e, t) => ot[t], "get"), set: /* @__PURE__ */ __name((e, t, r) => ot[t] = r, "set") });
    function ls(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    __name(ls, "ls");
    function Mn() {
      Nt.length = 0;
    }
    __name(Mn, "Mn");
    var ee = Tr;
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Cr = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    c();
    m();
    p();
    d();
    f();
    l();
    var _n = "library";
    function at(e) {
      let t = ds();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : _n);
    }
    __name(at, "at");
    function ds() {
      let e = h.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    __name(ds, "ds");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Me;
    ((t) => {
      let e;
      ((k) => (k.findUnique = "findUnique", k.findUniqueOrThrow = "findUniqueOrThrow", k.findFirst = "findFirst", k.findFirstOrThrow = "findFirstOrThrow", k.findMany = "findMany", k.create = "create", k.createMany = "createMany", k.createManyAndReturn = "createManyAndReturn", k.update = "update", k.updateMany = "updateMany", k.upsert = "upsert", k.delete = "delete", k.deleteMany = "deleteMany", k.groupBy = "groupBy", k.count = "count", k.aggregate = "aggregate", k.findRaw = "findRaw", k.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(Me ||= {});
    var ut = {};
    Mt(ut, { error: /* @__PURE__ */ __name(() => hs, "error"), info: /* @__PURE__ */ __name(() => gs, "info"), log: /* @__PURE__ */ __name(() => fs, "log"), query: /* @__PURE__ */ __name(() => ys, "query"), should: /* @__PURE__ */ __name(() => Un, "should"), tags: /* @__PURE__ */ __name(() => lt, "tags"), warn: /* @__PURE__ */ __name(() => Rr, "warn") });
    c();
    m();
    p();
    d();
    f();
    l();
    var lt = { error: qe("prisma:error"), warn: Cn("prisma:warn"), info: An("prisma:info"), query: Rn("prisma:query") };
    var Un = { warn: /* @__PURE__ */ __name(() => !h.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function fs(...e) {
      console.log(...e);
    }
    __name(fs, "fs");
    function Rr(e, ...t) {
      Un.warn() && console.warn(`${lt.warn} ${e}`, ...t);
    }
    __name(Rr, "Rr");
    function gs(e, ...t) {
      console.info(`${lt.info} ${e}`, ...t);
    }
    __name(gs, "gs");
    function hs(e, ...t) {
      console.error(`${lt.error} ${e}`, ...t);
    }
    __name(hs, "hs");
    function ys(e, ...t) {
      console.log(`${lt.query} ${e}`, ...t);
    }
    __name(ys, "ys");
    c();
    m();
    p();
    d();
    f();
    l();
    function qt(e, t) {
      if (!e) throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    __name(qt, "qt");
    c();
    m();
    p();
    d();
    f();
    l();
    function be(e, t) {
      throw new Error(t);
    }
    __name(be, "be");
    c();
    m();
    p();
    d();
    f();
    l();
    function Ar(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(Ar, "Ar");
    c();
    m();
    p();
    d();
    f();
    l();
    var Sr = /* @__PURE__ */ __name((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "Sr");
    c();
    m();
    p();
    d();
    f();
    l();
    function Be(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Be, "Be");
    c();
    m();
    p();
    d();
    f();
    l();
    function Or(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(Or, "Or");
    c();
    m();
    p();
    d();
    f();
    l();
    function K(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(K, "K");
    c();
    m();
    p();
    d();
    f();
    l();
    var jn = /* @__PURE__ */ new Set();
    var ct = /* @__PURE__ */ __name((e, t, ...r) => {
      jn.has(e) || (jn.add(e), Rr(t, ...r));
    }, "ct");
    c();
    m();
    p();
    d();
    f();
    l();
    var J = class extends Error {
      static {
        __name(this, "J");
      }
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    K(J, "PrismaClientKnownRequestError");
    var we = class extends J {
      static {
        __name(this, "we");
      }
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    K(we, "NotFoundError");
    c();
    m();
    p();
    d();
    f();
    l();
    var L = class e extends Error {
      static {
        __name(this, "e");
      }
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    K(L, "PrismaClientInitializationError");
    c();
    m();
    p();
    d();
    f();
    l();
    var Ee = class extends Error {
      static {
        __name(this, "Ee");
      }
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    K(Ee, "PrismaClientRustPanicError");
    c();
    m();
    p();
    d();
    f();
    l();
    var G = class extends Error {
      static {
        __name(this, "G");
      }
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    K(G, "PrismaClientUnknownRequestError");
    c();
    m();
    p();
    d();
    f();
    l();
    var j = class extends Error {
      static {
        __name(this, "j");
      }
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    K(j, "PrismaClientValidationError");
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function $e(e) {
      return e === null ? e : Array.isArray(e) ? e.map($e) : typeof e == "object" ? ws(e) ? Es(e) : Be(e, $e) : e;
    }
    __name($e, "$e");
    function ws(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(ws, "ws");
    function Es({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return b.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new ue(t);
        case "Json":
          return JSON.parse(t);
        default:
          be(t, "Unknown tagged value");
      }
    }
    __name(Es, "Es");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Ve(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Ve, "Ve");
    c();
    m();
    p();
    d();
    f();
    l();
    function je(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(je, "je");
    function Bt(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Bt, "Bt");
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function Qe(e) {
      return v.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(Qe, "Qe");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var xs = Fe(Nn());
    var Ps = { red: qe, gray: Sn, dim: Ft, bold: Dt, underline: vn, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var vs = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function Ts({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Ts, "Ts");
    function Cs({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], u = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)), t && a.push(s.underline(Rs(t))), i) {
        a.push("");
        let g = [i.toString()];
        o && (g.push(o), g.push(s.dim(")"))), a.push(g.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(Cs, "Cs");
    function Rs(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Rs, "Rs");
    function Je(e) {
      let t = e.showColors ? Ps : vs, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = Ts(e), Cs(r, t);
    }
    __name(Je, "Je");
    c();
    m();
    p();
    d();
    f();
    l();
    var Yn = Fe(kr());
    c();
    m();
    p();
    d();
    f();
    l();
    function Kn(e, t, r) {
      let n = Hn(e), i = As(n), o = Os(i);
      o ? $t(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(Kn, "Kn");
    function Hn(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Hn(t) : [t]);
    }
    __name(Hn, "Hn");
    function As(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Ss(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(As, "As");
    function Ss(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(Ss, "Ss");
    function Os(e) {
      return Or(e, (t, r) => {
        let n = Gn(t), i = Gn(r);
        return n !== i ? n - i : Wn(t) - Wn(r);
      });
    }
    __name(Os, "Os");
    function Gn(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(Gn, "Gn");
    function Wn(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(Wn, "Wn");
    c();
    m();
    p();
    d();
    f();
    l();
    var te = class {
      static {
        __name(this, "te");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Ge = class {
      static {
        __name(this, "Ge");
      }
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Vt = class {
      static {
        __name(this, "Vt");
      }
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var jt = /* @__PURE__ */ __name((e) => e, "jt");
    var Qt = { bold: jt, red: jt, green: jt, dim: jt, enabled: false };
    var zn = { bold: Dt, red: qe, green: Tn, dim: Ft, enabled: true };
    var We = { write(e) {
      e.writeLine(",");
    } };
    c();
    m();
    p();
    d();
    f();
    l();
    var ce = class {
      static {
        __name(this, "ce");
      }
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var ve = class {
      static {
        __name(this, "ve");
      }
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ke = class extends ve {
      static {
        __name(this, "Ke");
      }
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Vt(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new ce("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(We, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var He = class e extends ve {
      static {
        __name(this, "e");
      }
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o) return;
        let s = o;
        for (let a of i) {
          let u;
          if (s.value instanceof e ? u = s.value.getField(a) : s.value instanceof Ke && (u = s.value.getField(Number(a))), !u) return;
          s = u;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e)) return;
          let o = n.getSubSelectionValue(i);
          if (!o) return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n) return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e)) return;
          let a = s.getSelectionParent();
          if (!a) return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r) return { kind: "select", value: r };
        let n = this.getField("include")?.value.asObject();
        if (n) return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new ce("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(We, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var W = class extends ve {
      static {
        __name(this, "W");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new ce(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var mt = class {
      static {
        __name(this, "mt");
      }
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(We, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function $t(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Ms(e, t);
          break;
        case "IncludeOnScalar":
          Is(e, t);
          break;
        case "EmptySelection":
          Ls(e, t, r);
          break;
        case "UnknownSelectionField":
          Ns(e, t);
          break;
        case "InvalidSelectionValue":
          Us(e, t);
          break;
        case "UnknownArgument":
          qs(e, t);
          break;
        case "UnknownInputField":
          Bs(e, t);
          break;
        case "RequiredArgumentMissing":
          $s(e, t);
          break;
        case "InvalidArgumentType":
          Vs(e, t);
          break;
        case "InvalidArgumentValue":
          js(e, t);
          break;
        case "ValueTooLarge":
          Qs(e, t);
          break;
        case "SomeFieldsMissing":
          Js(e, t);
          break;
        case "TooManyFieldsGiven":
          Gs(e, t);
          break;
        case "Union":
          Kn(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name($t, "$t");
    function Ms(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(Ms, "Ms");
    function Is(e, t) {
      let [r, n] = pt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new te(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${dt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(Is, "Is");
    function Ls(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          _s(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          Ds(e, t);
          return;
        }
      }
      if (r?.[Ve(e.outputType.name)]) {
        Fs(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(Ls, "Ls");
    function _s(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new te(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(_s, "_s");
    function Ds(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), ei(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${dt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(Ds, "Ds");
    function Fs(e, t) {
      let r = new mt();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new te("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = pt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let u = a?.value.asObject() ?? new He();
          u.addSuggestion(n), a.value = u;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Fs, "Fs");
    function Ns(e, t) {
      let r = ti(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            ei(n, e.outputType);
            break;
          case "include":
            Ws(n, e.outputType);
            break;
          case "omit":
            Ks(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(dt(n)), i.join(" ");
      });
    }
    __name(Ns, "Ns");
    function Us(e, t) {
      let r = ti(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Us, "Us");
    function qs(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Hs(n, e.arguments)), t.addErrorMessage((i) => Xn(i, r, e.arguments.map((o) => o.name)));
    }
    __name(qs, "qs");
    function Bs(e, t) {
      let [r, n] = pt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && ri(o, e.inputType);
      }
      t.addErrorMessage((o) => Xn(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(Bs, "Bs");
    function Xn(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Ys(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(dt(e)), n.join(" ");
    }
    __name(Xn, "Xn");
    function $s(e, t) {
      let r;
      t.addErrorMessage((u) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${u.green(o)}\` must not be ${u.red("null")}.` : `Argument \`${u.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = pt(e.argumentPath), s = new mt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let u of e.inputTypes[0].fields) s.addField(u.name, u.typeNames.join(" | "));
        a.addSuggestion(new te(o, s).makeRequired());
      } else {
        let u = e.inputTypes.map(Zn).join(" | ");
        a.addSuggestion(new te(o, u).makeRequired());
      }
    }
    __name($s, "$s");
    function Zn(e) {
      return e.kind === "list" ? `${Zn(e.elementType)}[]` : e.name;
    }
    __name(Zn, "Zn");
    function Vs(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Jt("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Vs, "Vs");
    function js(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Jt("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(js, "js");
    function Qs(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof W && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Qs, "Qs");
    function Js(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && ri(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Jt("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(dt(i)), o.join(" ");
      });
    }
    __name(Js, "Js");
    function Gs(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Jt("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Gs, "Gs");
    function ei(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new te(r.name, "true"));
    }
    __name(ei, "ei");
    function Ws(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new te(r.name, "true"));
    }
    __name(Ws, "Ws");
    function Ks(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new te(r.name, "true"));
    }
    __name(Ks, "Ks");
    function Hs(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new te(r.name, r.typeNames.join(" | ")));
    }
    __name(Hs, "Hs");
    function ti(e, t) {
      let [r, n] = pt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), u = o?.getField(n);
      return o && u ? { parentKind: "select", parent: o, field: u, fieldName: n } : (u = s?.getField(n), s && u ? { parentKind: "include", field: u, parent: s, fieldName: n } : (u = a?.getField(n), a && u ? { parentKind: "omit", field: u, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(ti, "ti");
    function ri(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new te(r.name, r.typeNames.join(" | ")));
    }
    __name(ri, "ri");
    function pt(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(pt, "pt");
    function dt({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(dt, "dt");
    function Jt(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Jt, "Jt");
    var zs = 3;
    function Ys(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Yn.default)(e, i);
        o > zs || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(Ys, "Ys");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function ni(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(ni, "ni");
    c();
    m();
    p();
    d();
    f();
    l();
    var ft = class {
      static {
        __name(this, "ft");
      }
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function ze(e) {
      return e instanceof ft;
    }
    __name(ze, "ze");
    c();
    m();
    p();
    d();
    f();
    l();
    var Gt = /* @__PURE__ */ Symbol();
    var Mr = /* @__PURE__ */ new WeakMap();
    var xe = class {
      static {
        __name(this, "xe");
      }
      constructor(t) {
        t === Gt ? Mr.set(this, `Prisma.${this._getName()}`) : Mr.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Mr.get(this);
      }
    };
    var gt = class extends xe {
      static {
        __name(this, "gt");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var ht = class extends gt {
      static {
        __name(this, "ht");
      }
    };
    Ir(ht, "DbNull");
    var yt = class extends gt {
      static {
        __name(this, "yt");
      }
    };
    Ir(yt, "JsonNull");
    var bt = class extends gt {
      static {
        __name(this, "bt");
      }
    };
    Ir(bt, "AnyNull");
    var Wt = { classes: { DbNull: ht, JsonNull: yt, AnyNull: bt }, instances: { DbNull: new ht(Gt), JsonNull: new yt(Gt), AnyNull: new bt(Gt) } };
    function Ir(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Ir, "Ir");
    c();
    m();
    p();
    d();
    f();
    l();
    var ii = ": ";
    var Kt = class {
      static {
        __name(this, "Kt");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ii.length;
      }
      write(t) {
        let r = new ce(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ii).write(this.value);
      }
    };
    var Lr = class {
      static {
        __name(this, "Lr");
      }
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function Ye(e) {
      return new Lr(oi(e));
    }
    __name(Ye, "Ye");
    function oi(e) {
      let t = new He();
      for (let [r, n] of Object.entries(e)) {
        let i = new Kt(r, si(n));
        t.addField(i);
      }
      return t;
    }
    __name(oi, "oi");
    function si(e) {
      if (typeof e == "string") return new W(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new W(String(e));
      if (typeof e == "bigint") return new W(`${e}n`);
      if (e === null) return new W("null");
      if (e === void 0) return new W("undefined");
      if (Qe(e)) return new W(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return b.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Bt(e) ? e.toISOString() : "Invalid Date";
        return new W(`new Date("${t}")`);
      }
      return e instanceof xe ? new W(`Prisma.${e._getName()}`) : ze(e) ? new W(`prisma.${ni(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Xs(e) : typeof e == "object" ? oi(e) : new W(Object.prototype.toString.call(e));
    }
    __name(si, "si");
    function Xs(e) {
      let t = new Ke();
      for (let r of e) t.addItem(si(r));
      return t;
    }
    __name(Xs, "Xs");
    function Ht(e, t) {
      let r = t === "pretty" ? zn : Qt, n = e.renderAllMessages(r), i = new Ge(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Ht, "Ht");
    function zt({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = Ye(e);
      for (let C of t) $t(C, a, s);
      let { message: u, args: g } = Ht(a, r), T = Je({ message: u, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: g });
      throw new j(T, { clientVersion: o });
    }
    __name(zt, "zt");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var me = class {
      static {
        __name(this, "me");
      }
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    function wt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(wt, "wt");
    c();
    m();
    p();
    d();
    f();
    l();
    function pe(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(pe, "pe");
    c();
    m();
    p();
    d();
    f();
    l();
    function li(e, t, r) {
      let n = pe(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Zs({ ...e, ...ai(t.name, e, t.result.$allModels), ...ai(t.name, e, t.result[n]) });
    }
    __name(li, "li");
    function Zs(e) {
      let t = new me(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Be(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Zs, "Zs");
    function ai(e, t, r) {
      return r ? Be(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: ea(t, o, i) })) : {};
    }
    __name(ai, "ai");
    function ea(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(ea, "ea");
    function ui(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(ui, "ui");
    function ci(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(ci, "ci");
    var Yt = class {
      static {
        __name(this, "Yt");
      }
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new me();
        this.modelExtensionsCache = new me();
        this.queryCallbacksCache = new me();
        this.clientExtensions = wt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = wt(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => li(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = pe(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Xe = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Yt(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Yt(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var mi = /* @__PURE__ */ Symbol();
    var Et = class {
      static {
        __name(this, "Et");
      }
      constructor(t) {
        if (t !== mi) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Xt : t;
      }
    };
    var Xt = new Et(mi);
    function de(e) {
      return e instanceof Et;
    }
    __name(de, "de");
    var ta = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var pi = "explicitly `undefined` values are not allowed";
    function Zt({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = Xe.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: u, previewFeatures: g, globalOmit: T }) {
      let C = new _r({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: u, previewFeatures: g, globalOmit: T });
      return { modelName: e, action: ta[t], query: xt(r, C) };
    }
    __name(Zt, "Zt");
    function xt({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: fi(r, n), selection: ra(e, t, i, n) };
    }
    __name(xt, "xt");
    function ra(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), sa(e, n)) : na(n, t, r);
    }
    __name(ra, "ra");
    function na(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && ia(n, t, e), e.isPreviewFeatureOn("omitApi") && oa(n, r, e), n;
    }
    __name(na, "na");
    function ia(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (de(i)) continue;
        let o = r.nestSelection(n);
        if (Dr(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = xt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = xt(i, o);
      }
    }
    __name(ia, "ia");
    function oa(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = ci(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (de(a)) continue;
        Dr(a, r.nestSelection(s));
        let u = r.findField(s);
        n?.[s] && !u || (e[s] = !a);
      }
    }
    __name(oa, "oa");
    function sa(e, t) {
      let r = {}, n = t.getComputedFields(), i = ui(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (de(s)) continue;
        let a = t.nestSelection(o);
        Dr(s, a);
        let u = t.findField(o);
        if (!(n?.[o] && !u)) {
          if (s === false || s === void 0 || de(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            u?.kind === "object" ? r[o] = xt({}, a) : r[o] = true;
            continue;
          }
          r[o] = xt(s, a);
        }
      }
      return r;
    }
    __name(sa, "sa");
    function di(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (je(e)) {
        if (Bt(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (ze(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return aa(e, t);
      if (ArrayBuffer.isView(e)) return { $type: "Bytes", value: b.from(e).toString("base64") };
      if (la(e)) return e.values;
      if (Qe(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof xe) {
        if (e !== Wt.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (ua(e)) return e.toJSON();
      if (typeof e == "object") return fi(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(di, "di");
    function fi(e, t) {
      if (e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        de(i) || (i !== void 0 ? r[n] = di(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: pi }));
      }
      return r;
    }
    __name(fi, "fi");
    function aa(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || de(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(di(o, i));
      }
      return r;
    }
    __name(aa, "aa");
    function la(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(la, "la");
    function ua(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(ua, "ua");
    function Dr(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: pi });
    }
    __name(Dr, "Dr");
    var _r = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        zt({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Ve(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            be(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Ze = class {
      static {
        __name(this, "Ze");
      }
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    function gi(e) {
      return { models: Fr(e.models), enums: Fr(e.enums), types: Fr(e.types) };
    }
    __name(gi, "gi");
    function Fr(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    __name(Fr, "Fr");
    function hi(e, t) {
      let r = wt(() => ca(t));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(hi, "hi");
    function ca(e) {
      throw new Error("Prisma.dmmf is not available when running in edge runtimes.");
    }
    __name(ca, "ca");
    c();
    m();
    p();
    d();
    f();
    l();
    var Ur = /* @__PURE__ */ new WeakMap();
    var er = "$$PrismaTypedSql";
    var qr = class {
      static {
        __name(this, "qr");
      }
      constructor(t, r) {
        Ur.set(this, { sql: t, values: r }), Object.defineProperty(this, er, { value: er });
      }
      get sql() {
        return Ur.get(this).sql;
      }
      get values() {
        return Ur.get(this).values;
      }
    };
    function yi(e) {
      return (...t) => new qr(e, t);
    }
    __name(yi, "yi");
    function bi(e) {
      return e != null && e[er] === er;
    }
    __name(bi, "bi");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Pt(e) {
      return { ok: false, error: e, map() {
        return Pt(e);
      }, flatMap() {
        return Pt(e);
      } };
    }
    __name(Pt, "Pt");
    var Br = class {
      static {
        __name(this, "Br");
      }
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; ) r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var $r = /* @__PURE__ */ __name((e) => {
      let t = new Br(), r = fe(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: fe(t, e.queryRaw.bind(e)), executeRaw: fe(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: /* @__PURE__ */ __name(async (...i) => (await r(...i)).map((s) => ma(t, s)), "transactionContext") };
      return e.getConnectionInfo && (n.getConnectionInfo = da(t, e.getConnectionInfo.bind(e))), n;
    }, "$r");
    var ma = /* @__PURE__ */ __name((e, t) => {
      let r = fe(e, t.startTransaction.bind(t));
      return { adapterName: t.adapterName, provider: t.provider, queryRaw: fe(e, t.queryRaw.bind(t)), executeRaw: fe(e, t.executeRaw.bind(t)), startTransaction: /* @__PURE__ */ __name(async (...n) => (await r(...n)).map((o) => pa(e, o)), "startTransaction") };
    }, "ma");
    var pa = /* @__PURE__ */ __name((e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: fe(e, t.queryRaw.bind(t)), executeRaw: fe(e, t.executeRaw.bind(t)), commit: fe(e, t.commit.bind(t)), rollback: fe(e, t.rollback.bind(t)) }), "pa");
    function fe(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return Pt({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(fe, "fe");
    function da(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return Pt({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(da, "da");
    var Lo = Fe(wi());
    var ek = Fe(Ei());
    Dn();
    bn();
    Ln();
    c();
    m();
    p();
    d();
    f();
    l();
    var X = class e {
      static {
        __name(this, "e");
      }
      constructor(t, r) {
        if (t.length - 1 !== r.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let u = 0;
            for (; u < s.values.length; ) this.values[o++] = s.values[u++], this.strings[o] = s.strings[u];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function xi(e, t = ",", r = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new X([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(xi, "xi");
    function Vr(e) {
      return new X([e], []);
    }
    __name(Vr, "Vr");
    var Pi = Vr("");
    function jr(e, ...t) {
      return new X(e, t);
    }
    __name(jr, "jr");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function vt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(vt, "vt");
    c();
    m();
    p();
    d();
    f();
    l();
    function H(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(H, "H");
    c();
    m();
    p();
    d();
    f();
    l();
    function Ie(e) {
      let t = new me();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ie, "Ie");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var tr = { enumerable: true, configurable: true, writable: true };
    function rr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => tr, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t], "ownKeys") };
    }
    __name(rr, "rr");
    var vi = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
    function ge(e, t) {
      let r = ga(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ti(Reflect.ownKeys(o), r), a = Ti(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let u = r.get(s);
        return u ? u.getPropertyDescriptor ? { ...tr, ...u?.getPropertyDescriptor(s) } : tr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[vi] = function() {
        let o = { ...this };
        return delete o[vi], o;
      }, i;
    }
    __name(ge, "ge");
    function ga(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    __name(ga, "ga");
    function Ti(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(Ti, "Ti");
    c();
    m();
    p();
    d();
    f();
    l();
    function et(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(et, "et");
    c();
    m();
    p();
    d();
    f();
    l();
    function nr(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(nr, "nr");
    c();
    m();
    p();
    d();
    f();
    l();
    function Ci(e) {
      if (e === void 0) return "";
      let t = Ye(e);
      return new Ge(0, { colors: Qt }).write(t).toString();
    }
    __name(Ci, "Ci");
    c();
    m();
    p();
    d();
    f();
    l();
    var ha = "P2037";
    function ir({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new J(ya(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new G(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name(ir, "ir");
    function ya(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === ha && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(ya, "ya");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Qr = class {
      static {
        __name(this, "Qr");
      }
      getLocation() {
        return null;
      }
    };
    function Te(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Qr();
    }
    __name(Te, "Te");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Ri = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function tt(e = {}) {
      let t = wa(e);
      return Object.entries(t).reduce((n, [i, o]) => (Ri[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(tt, "tt");
    function wa(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(wa, "wa");
    function or(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(or, "or");
    function Ai(e, t) {
      let r = or(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: tt })(e);
    }
    __name(Ai, "Ai");
    c();
    m();
    p();
    d();
    f();
    l();
    function Ea(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? tt({ ...r, _count: t }) : tt({ ...r, _count: { _all: true } });
    }
    __name(Ea, "Ea");
    function xa(e = {}) {
      return typeof e.select == "object" ? (t) => or(e)(t)._count : (t) => or(e)(t)._count._all;
    }
    __name(xa, "xa");
    function Si(e, t) {
      return t({ action: "count", unpacker: xa(e), argsMapper: Ea })(e);
    }
    __name(Si, "Si");
    c();
    m();
    p();
    d();
    f();
    l();
    function Pa(e = {}) {
      let t = tt(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(Pa, "Pa");
    function va(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(va, "va");
    function Oi(e, t) {
      return t({ action: "groupBy", unpacker: va(e), argsMapper: Pa })(e);
    }
    __name(Oi, "Oi");
    function ki(e, t, r) {
      if (t === "aggregate") return (n) => Ai(n, r);
      if (t === "count") return (n) => Si(n, r);
      if (t === "groupBy") return (n) => Oi(n, r);
    }
    __name(ki, "ki");
    c();
    m();
    p();
    d();
    f();
    l();
    function Mi(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Sr(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new ft(e, o, s.type, s.isList, s.kind === "enum");
      }, ...rr(Object.keys(n)) });
    }
    __name(Mi, "Mi");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Ii = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "Ii");
    var Jr = /* @__PURE__ */ __name((e, t) => Ii(t).reduce((r, n) => r && r[n], e), "Jr");
    var Li = /* @__PURE__ */ __name((e, t, r) => Ii(t).reduceRight((n, i, o, s) => Object.assign({}, Jr(e, s.slice(0, o)), { [i]: n }), r), "Li");
    function Ta(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(Ta, "Ta");
    function Ca(e, t, r) {
      return t === void 0 ? e ?? {} : Li(t, r, e || true);
    }
    __name(Ca, "Ca");
    function Gr(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((u, g) => ({ ...u, [g.name]: g }), {});
      return (u) => {
        let g = Te(e._errorFormat), T = Ta(n, i), C = Ca(u, o, T), O = r({ dataPath: T, callsite: g })(C), A = Ra(e, t);
        return new Proxy(O, { get(M, S) {
          if (!A.includes(S)) return M[S];
          let ne = [a[S].type, r, S], z = [T, C];
          return Gr(e, ...ne, ...z);
        }, ...rr([...A, ...Object.getOwnPropertyNames(O)]) });
      };
    }
    __name(Gr, "Gr");
    function Ra(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(Ra, "Ra");
    c();
    m();
    p();
    d();
    f();
    l();
    function _i(e, t, r, n) {
      return e === Me.ModelAction.findFirstOrThrow || e === Me.ModelAction.findUniqueOrThrow ? Aa(t, r, n) : n;
    }
    __name(_i, "_i");
    function Aa(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Je({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new j(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof J && o.code === "P2025" ? new we(`No ${e} found`, t) : o;
        });
      };
    }
    __name(Aa, "Aa");
    var Sa = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Oa = ["aggregate", "count", "groupBy"];
    function Wr(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [ka(e, t), Ia(e, t), vt(r), H("name", () => t), H("$name", () => t), H("$parent", () => e._appliedParent)];
      return ge({}, n);
    }
    __name(Wr, "Wr");
    function ka(e, t) {
      let r = pe(t), n = Object.keys(Me.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((u) => e._request(u), "s");
        s = _i(o, t, e._clientVersion, s);
        let a = /* @__PURE__ */ __name((u) => (g) => {
          let T = Te(e._errorFormat);
          return e._createPrismaPromise((C) => {
            let O = { args: g, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: C, callsite: T };
            return s({ ...O, ...u });
          });
        }, "a");
        return Sa.includes(o) ? Gr(e, t, a) : Ma(i) ? ki(e, i, a) : a({});
      } };
    }
    __name(ka, "ka");
    function Ma(e) {
      return Oa.includes(e);
    }
    __name(Ma, "Ma");
    function Ia(e, t) {
      return Ie(H("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Mi(t, r);
      }));
    }
    __name(Ia, "Ia");
    c();
    m();
    p();
    d();
    f();
    l();
    function Di(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(Di, "Di");
    var Kr = /* @__PURE__ */ Symbol();
    function Tt(e) {
      let t = [La(e), H(Kr, () => e), H("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(vt(r)), ge(e, t);
    }
    __name(Tt, "Tt");
    function La(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(pe), n = [...new Set(t.concat(r))];
      return Ie({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Di(i);
        if (e._runtimeDataModel.models[o] !== void 0) return Wr(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return Wr(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(La, "La");
    function Fi(e) {
      return e[Kr] ? e[Kr] : e;
    }
    __name(Fi, "Fi");
    function Ni(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Tt(t);
    }
    __name(Ni, "Ni");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Ui({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let u of Object.values(o)) {
        if (n) {
          if (n[u.name]) continue;
          let g = u.needs.filter((T) => n[T]);
          g.length > 0 && a.push(et(g));
        } else if (r) {
          if (!r[u.name]) continue;
          let g = u.needs.filter((T) => !r[T]);
          g.length > 0 && a.push(et(g));
        }
        _a(e, u.needs) && s.push(Da(u, ge(e, s)));
      }
      return s.length > 0 || a.length > 0 ? ge(e, [...s, ...a]) : e;
    }
    __name(Ui, "Ui");
    function _a(e, t) {
      return t.every((r) => Ar(e, r));
    }
    __name(_a, "_a");
    function Da(e, t) {
      return Ie(H(e.name, () => e.compute(t)));
    }
    __name(Da, "Da");
    c();
    m();
    p();
    d();
    f();
    l();
    function sr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = sr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && qi({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && qi({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(sr, "sr");
    function qi({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || de(s)) continue;
        let u = n.models[r].fields.find((T) => T.name === o);
        if (!u || u.kind !== "object" || !u.relationName) continue;
        let g = typeof s == "object" ? s : {};
        t[o] = sr({ visitor: i, result: t[o], args: g, modelName: u.type, runtimeDataModel: n });
      }
    }
    __name(qi, "qi");
    function Bi({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : sr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, u, g) => {
        let T = pe(u);
        return Ui({ result: a, modelName: T, select: g.select, omit: g.select ? void 0 : { ...o?.[T], ...g.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Bi, "Bi");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function $i(e) {
      if (e instanceof X) return Fa(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = Ct(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = Ct(e[r]);
      return t;
    }
    __name($i, "$i");
    function Fa(e) {
      return new X(e.strings, e.values);
    }
    __name(Fa, "Fa");
    function Ct(e) {
      if (typeof e != "object" || e == null || e instanceof xe || ze(e)) return e;
      if (Qe(e)) return new ue(e.toFixed());
      if (je(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = Ct(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: Ct(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Ct(e[r]);
        return t;
      }
      be(e, "Unknown value");
    }
    __name(Ct, "Ct");
    function ji(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: $i(t.args ?? {}), __internalParams: t, query: /* @__PURE__ */ __name((s, a = t) => {
          let u = a.customDataProxyFetch;
          return a.customDataProxyFetch = Wi(o, u), a.args = s, ji(e, a, r, n + 1);
        }, "query") });
      });
    }
    __name(ji, "ji");
    function Qi(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return ji(e, t, s);
    }
    __name(Qi, "Qi");
    function Ji(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Gi(r, n, 0, e) : e(r);
      };
    }
    __name(Ji, "Ji");
    function Gi(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let u = a.customDataProxyFetch;
        return a.customDataProxyFetch = Wi(i, u), Gi(a, t, r + 1, n);
      } });
    }
    __name(Gi, "Gi");
    var Vi = /* @__PURE__ */ __name((e) => e, "Vi");
    function Wi(e = Vi, t = Vi) {
      return (r) => e(t(r));
    }
    __name(Wi, "Wi");
    c();
    m();
    p();
    d();
    f();
    l();
    var Ki = ee("prisma:client");
    var Hi = { Vercel: "vercel", "Netlify CI": "netlify" };
    function zi({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Ki("checkPlatformCaching:postinstall", e), Ki("checkPlatformCaching:ciName", t), e === true && t && t in Hi) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Hi[t]}-build`;
        throw console.error(n), new L(n, r);
      }
    }
    __name(zi, "zi");
    c();
    m();
    p();
    d();
    f();
    l();
    function Yi(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(Yi, "Yi");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Na = "Cloudflare-Workers";
    var Ua = "node";
    function Xi() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Na ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Ua ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(Xi, "Xi");
    var qa = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Ce() {
      let e = Xi();
      return { id: e, prettyName: qa[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Ce, "Ce");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function ar({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw Ce().id === "workerd" ? new L(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new L(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new L("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(ar, "ar");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Zi(e) {
      if (e?.kind === "itx") return e.options.id;
    }
    __name(Zi, "Zi");
    c();
    m();
    p();
    d();
    f();
    l();
    var Hr;
    var eo = { async loadLibrary(e) {
      let { clientVersion: t, adapter: r, engineWasm: n } = e;
      if (r === void 0) throw new L(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Ce().prettyName})`, t);
      if (n === void 0) throw new L("WASM engine was unexpectedly `undefined`", t);
      Hr === void 0 && (Hr = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new L("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let a = { "./query_engine_bg.js": o }, u = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(u.exports), o.QueryEngine;
      })());
      let i = await Hr;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var Ba = "P2036";
    var he = ee("prisma:client:libraryEngine");
    function $a(e) {
      return e.item_type === "query" && "query" in e;
    }
    __name($a, "$a");
    function Va(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    __name(Va, "Va");
    var VR = [...Cr, "native"];
    var Rt = class {
      static {
        __name(this, "Rt");
      }
      constructor(t, r) {
        this.name = "LibraryEngine";
        this.libraryLoader = r ?? eo, this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, t.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(t.overrideDatasources)[0], i = t.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(t, r, n) {
        await this.start();
        let i = JSON.stringify(r), o;
        if (t === "start") {
          let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          o = await this.engine?.startTransaction(a, i);
        } else t === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
        let s = this.parseEngineResponse(o);
        if (ja(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new J(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        }
        return s;
      }
      async instantiateLibrary() {
        if (he("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
      }
      async getCurrentBinaryTarget() {
      }
      parseEngineResponse(t) {
        if (!t) throw new G("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(t);
        } catch {
          throw new G("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let t = new w(this), { adapter: r } = this.config;
            r && he("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: h.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
              t.deref()?.logger(n);
            }, r);
          } catch (t) {
            let r = t, n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new L(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(t) {
        let r = this.parseEngineResponse(t);
        if (r) {
          if ("span" in r) {
            this.config.tracingHelper.createEngineSpan(r);
            return;
          }
          r.level = r?.level.toLowerCase() ?? "unknown", $a(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : (Va(r), this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path }));
        }
      }
      parseInitError(t) {
        try {
          return JSON.parse(t);
        } catch {
        }
        return t;
      }
      parseRequestError(t) {
        try {
          return JSON.parse(t);
        } catch {
        }
        return t;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return he(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let t = /* @__PURE__ */ __name(async () => {
          he("library starting");
          try {
            let r = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, he("library started");
          } catch (r) {
            let n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new L(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        }, "t");
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return he("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let t = /* @__PURE__ */ __name(async () => {
          await new Promise((n) => setTimeout(n, 5)), he("library stopping");
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, he("library stopped");
        }, "t");
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(t) {
        return this.library?.debugPanic(t);
      }
      async request(t, { traceparent: r, interactiveTransaction: n }) {
        he(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let s = this.parseEngineResponse(await this.executingQueryPromise);
          if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: s, elapsed: 0 };
        } catch (s) {
          if (s instanceof L) throw s;
          s.code === "GenericFailure" && s.message?.startsWith("PANIC:");
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new G(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(t, { transaction: r, traceparent: n }) {
        he("requestBatch");
        let i = nr(t, r);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Zi(r));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: u } = s;
        if (Array.isArray(a)) return a.map((g) => g.errors && g.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(g.errors[0]) : { data: g, elapsed: 0 });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(t) {
        t.user_facing_error.is_panic;
        let r = this.getExternalAdapterError(t.user_facing_error);
        return r ? r.error : ir(t, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(t) {
        if (t.error_code === Ba && this.config.adapter) {
          let r = t.meta?.id;
          qt(typeof r == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(r);
          return qt(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(t) {
        await this.start();
        let r = await this.engine.metrics(JSON.stringify(t));
        return t.format === "prometheus" ? r : this.parseEngineResponse(r);
      }
    };
    function ja(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    __name(ja, "ja");
    c();
    m();
    p();
    d();
    f();
    l();
    var At = "Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started";
    var lr = class {
      static {
        __name(this, "lr");
      }
      constructor(t) {
        this.config = t;
        this.name = "AccelerateEngine";
        this.resolveDatasourceUrl = this.config.accelerateUtils?.resolveDatasourceUrl;
        this.getBatchRequestPayload = this.config.accelerateUtils?.getBatchRequestPayload;
        this.prismaGraphQLToJSError = this.config.accelerateUtils?.prismaGraphQLToJSError;
        this.PrismaClientUnknownRequestError = this.config.accelerateUtils?.PrismaClientUnknownRequestError;
        this.PrismaClientInitializationError = this.config.accelerateUtils?.PrismaClientInitializationError;
        this.PrismaClientKnownRequestError = this.config.accelerateUtils?.PrismaClientKnownRequestError;
        this.debug = this.config.accelerateUtils?.debug;
        this.engineVersion = this.config.accelerateUtils?.engineVersion;
        this.clientVersion = this.config.accelerateUtils?.clientVersion;
      }
      onBeforeExit(t) {
      }
      async start() {
      }
      async stop() {
      }
      version(t) {
        return "unknown";
      }
      transaction(t, r, n) {
        throw new L(At, this.config.clientVersion);
      }
      metrics(t) {
        throw new L(At, this.config.clientVersion);
      }
      request(t, r) {
        throw new L(At, this.config.clientVersion);
      }
      requestBatch(t, r) {
        throw new L(At, this.config.clientVersion);
      }
      applyPendingMigrations() {
        throw new L(At, this.config.clientVersion);
      }
    };
    function to({ copyEngine: e = true }, t) {
      let r;
      try {
        r = ar({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...h.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
      e && n && ct("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = at(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", u = i === "binary";
      if (o && s || s && false) {
        let g;
        throw e ? r?.startsWith("prisma://") ? g = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : g = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : g = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new j(g.join(`
`), { clientVersion: t.clientVersion });
      }
      if (s) return new Rt(t);
      if (o) return new lr(t);
      {
        let g = [`PrismaClient failed to initialize because it wasn't configured to run in this environment (${Ce().prettyName}).`, "In order to run Prisma Client in an edge runtime, you will need to configure one of the following options:", "- Enable Driver Adapters: https://pris.ly/d/driver-adapters", "- Enable Accelerate: https://pris.ly/d/accelerate"];
        throw new j(g.join(`
`), { clientVersion: t.clientVersion });
      }
      throw new j("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    __name(to, "to");
    c();
    m();
    p();
    d();
    f();
    l();
    function ur({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(ur, "ur");
    c();
    m();
    p();
    d();
    f();
    l();
    var ro = /* @__PURE__ */ __name((e) => ({ command: e }), "ro");
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var no = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "no");
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function rt(e) {
      try {
        return io(e, "fast");
      } catch {
        return io(e, "slow");
      }
    }
    __name(rt, "rt");
    function io(e, t) {
      return JSON.stringify(e.map((r) => so(r, t)));
    }
    __name(io, "io");
    function so(e, t) {
      return Array.isArray(e) ? e.map((r) => so(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : je(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : ue.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : b.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Qa(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: b.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? ao(e) : e;
    }
    __name(so, "so");
    function Qa(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(Qa, "Qa");
    function ao(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(oo);
      let t = {};
      for (let r of Object.keys(e)) t[r] = oo(e[r]);
      return t;
    }
    __name(ao, "ao");
    function oo(e) {
      return typeof e == "bigint" ? e.toString() : ao(e);
    }
    __name(oo, "oo");
    c();
    m();
    p();
    d();
    f();
    l();
    var Ja = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var lo = Ja;
    var Ga = /^(\s*alter\s)/i;
    var uo = ee("prisma:client");
    function zr(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Ga.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(zr, "zr");
    var Yr = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (bi(r)) n = r.sql, i = { values: rt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: rt(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: rt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: rt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = no(r), i = { values: rt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? uo(`prisma.${e}(${n}, ${i.values})`) : uo(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "Yr");
    var co = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new X(t, r);
    } };
    var mo = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    c();
    m();
    p();
    d();
    f();
    l();
    function Xr(e) {
      return function(r) {
        let n, i = /* @__PURE__ */ __name((o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= po(r(o)) : po(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        }, "i");
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(Xr, "Xr");
    function po(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(po, "po");
    c();
    m();
    p();
    d();
    f();
    l();
    var fo = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Zr = class {
      static {
        __name(this, "Zr");
      }
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? fo;
      }
    };
    function go(e) {
      return e.includes("tracing") ? new Zr() : fo;
    }
    __name(go, "go");
    c();
    m();
    p();
    d();
    f();
    l();
    function ho(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(ho, "ho");
    c();
    m();
    p();
    d();
    f();
    l();
    function yo(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(yo, "yo");
    c();
    m();
    p();
    d();
    f();
    l();
    var cr = class {
      static {
        __name(this, "cr");
      }
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Eo = Fe(Vn());
    c();
    m();
    p();
    d();
    f();
    l();
    function mr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(mr, "mr");
    c();
    m();
    p();
    d();
    f();
    l();
    function bo(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(en(e.query.arguments)), t.push(en(e.query.selection)), t.join("");
    }
    __name(bo, "bo");
    function en(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${en(n)})` : r;
      }).join(" ")})`;
    }
    __name(en, "en");
    c();
    m();
    p();
    d();
    f();
    l();
    var Wa = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function tn(e) {
      return Wa[e];
    }
    __name(tn, "tn");
    c();
    m();
    p();
    d();
    f();
    l();
    var pr = class {
      static {
        __name(this, "pr");
      }
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, h.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function Le(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return b.from(t, "base64");
        case "decimal":
          return new ue(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Le("bigint", r));
        case "bytes-array":
          return t.map((r) => Le("bytes", r));
        case "decimal-array":
          return t.map((r) => Le("decimal", r));
        case "datetime-array":
          return t.map((r) => Le("datetime", r));
        case "date-array":
          return t.map((r) => Le("date", r));
        case "time-array":
          return t.map((r) => Le("time", r));
        default:
          return t;
      }
    }
    __name(Le, "Le");
    function wo(e) {
      let t = [], r = Ka(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = Le(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(wo, "wo");
    function Ka(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    __name(Ka, "Ka");
    var Ha = ee("prisma:client:request_handler");
    var dr = class {
      static {
        __name(this, "dr");
      }
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new pr({ batchLoader: Ji(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((C) => C.protocolQuery), u = this.client._tracingHelper.getTraceParent(s), g = n.some((C) => tn(C.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: u, transaction: za(o), containsWrite: g, customDataProxyFetch: i })).map((C, O) => {
            if (C instanceof Error) return C;
            try {
              return this.mapQueryEngineResult(n[O], C);
            } catch (A) {
              return A;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? xo(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: tn(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : bo(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
        return h.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Ha(t), Ya(t, i) || t instanceof we) throw t;
        if (t instanceof J && Xa(t)) {
          let g = Po(t.meta);
          zt({ args: o, errors: [g], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let u = t.message;
        if (n && (u = Je({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: u })), u = this.sanitizeMessage(u), t.code) {
          let g = s ? { modelName: s, ...t.meta } : t.meta;
          throw new J(u, { code: t.code, clientVersion: this.client._clientVersion, meta: g, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new Ee(u, this.client._clientVersion);
          if (t instanceof G) throw new G(u, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof L) throw new L(u, this.client._clientVersion);
          if (t instanceof Ee) throw new Ee(u, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Eo.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((g) => g !== "select" && g !== "include"), a = Jr(o, s), u = i === "queryRaw" ? wo(a) : $e(a);
        return n ? n(u) : u;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function za(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: xo(e) };
        be(e, "Unknown transaction kind");
      }
    }
    __name(za, "za");
    function xo(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(xo, "xo");
    function Ya(e, t) {
      return mr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Ya, "Ya");
    function Xa(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(Xa, "Xa");
    function Po(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Po) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(Po, "Po");
    c();
    m();
    p();
    d();
    f();
    l();
    var vo = "5.22.0";
    var To = vo;
    c();
    m();
    p();
    d();
    f();
    l();
    var Oo = Fe(kr());
    c();
    m();
    p();
    d();
    f();
    l();
    var _ = class extends Error {
      static {
        __name(this, "_");
      }
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    K(_, "PrismaClientConstructorValidationError");
    var Co = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var Ro = ["pretty", "colorless", "minimal"];
    var Ao = ["info", "query", "warn", "error"];
    var el = { datasources: /* @__PURE__ */ __name((e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = nt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new _(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new _(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, "datasources"), adapter: /* @__PURE__ */ __name((e, t) => {
      if (e === null) return;
      if (e === void 0) throw new _('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!ur(t).includes("driverAdapters")) throw new _('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (at() === "binary") throw new _('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, "adapter"), datasourceUrl: /* @__PURE__ */ __name((e) => {
      if (typeof e < "u" && typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, "datasourceUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Ro.includes(e)) {
          let t = nt(e, Ro);
          throw new _(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Ao.includes(r)) {
          let n = nt(r, Ao);
          throw new _(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = nt(i, o);
            throw new _(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new _(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new _(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new _(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t) => {
      if (typeof e != "object") throw new _('"omit" option is expected to be an object.');
      if (e === null) throw new _('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = rl(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let u = o.fields.find((g) => g.name === s);
          if (!u) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (u.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new _(nl(e, r));
    }, "omit"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new _(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = nt(r, t);
        throw new _(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function ko(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Co.includes(r)) {
          let i = nt(r, Co);
          throw new _(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        el[r](n, t);
      }
      if (e.datasourceUrl && e.datasources) throw new _('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(ko, "ko");
    function nt(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = tl(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(nt, "nt");
    function tl(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, Oo.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(tl, "tl");
    function rl(e, t) {
      return So(t.models, e) ?? So(t.types, e);
    }
    __name(rl, "rl");
    function So(e, t) {
      let r = Object.keys(e).find((n) => Ve(n) === t);
      if (r) return e[r];
    }
    __name(So, "So");
    function nl(e, t) {
      let r = Ye(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = Ht(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(nl, "nl");
    c();
    m();
    p();
    d();
    f();
    l();
    function Mo(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), u = /* @__PURE__ */ __name((g) => {
          o || (o = true, r(g));
        }, "u");
        for (let g = 0; g < e.length; g++) e[g].then((T) => {
          n[g] = T, a();
        }, (T) => {
          if (!mr(T)) {
            u(T);
            return;
          }
          T.batchRequestIdx === g ? u(T) : (i || (i = T), a());
        });
      });
    }
    __name(Mo, "Mo");
    var Re = ee("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var il = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var ol = /* @__PURE__ */ Symbol.for("prisma.client.transaction.id");
    var sl = { id: 0, nextId() {
      return ++this.id;
    } };
    function _o(e) {
      class t {
        static {
          __name(this, "t");
        }
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new cr();
          this._createPrismaPromise = Xr();
          this.$extends = Ni;
          e = n?.__internal?.configOverride?.(e) ?? e, zi(e), n && ko(n, e);
          let i = new Ut().on("error", () => {
          });
          this._extensions = Xe.empty(), this._previewFeatures = ur(e), this._clientVersion = e.clientVersion ?? To, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = go(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && st.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && st.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = $r(n.adapter);
            let u = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== u) throw new L(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${u}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new L("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let u = n ?? {}, g = u.__internal ?? {}, T = g.debug === true;
            T && ee.enable("prisma:client");
            let C = st.resolve(e.dirname, e.relativePath);
            yn.existsSync(C) || (C = e.dirname), Re("dirname", e.dirname), Re("relativePath", e.relativePath), Re("cwd", C);
            let O = g.engine || {};
            if (u.errorFormat ? this._errorFormat = u.errorFormat : h.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : h.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: C, dirname: e.dirname, enableDebugLogs: T, allowTriggerPanic: O.allowTriggerPanic, datamodelPath: st.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: O.binaryPath ?? void 0, engineEndpoint: O.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: u.log && yo(u.log), logQueries: u.log && !!(typeof u.log == "string" ? u.log === "query" : u.log.find((A) => typeof A == "string" ? A === "query" : A.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Yi(u, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: u.transactionOptions?.maxWait ?? 2e3, timeout: u.transactionOptions?.timeout ?? 5e3, isolationLevel: u.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: ar, getBatchRequestPayload: nr, prismaGraphQLToJSError: ir, PrismaClientUnknownRequestError: G, PrismaClientInitializationError: L, PrismaClientKnownRequestError: J, debug: ee("prisma:client:accelerateEngine"), engineVersion: Lo.version, clientVersion: e.clientVersion } }, Re("clientVersion", e.clientVersion), this._engine = to(e, this._engineConfig), this._requestHandler = new dr(this, i), u.log) for (let A of u.log) {
              let M = typeof A == "string" ? A : A.emit === "stdout" ? A.level : null;
              M && this.$on(M, (S) => {
                ut.log(`${ut.tags[M] ?? ""}`, S.message || S.query);
              });
            }
            this._metrics = new Ze(this._engine);
          } catch (u) {
            throw u.clientVersion = this._clientVersion, u;
          }
          return this._appliedParent = Tt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Mn();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Yr({ clientMethod: i, activeProvider: a }), callsite: Te(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Io(n, i);
              return zr(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new j("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (zr(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new j(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: ro, callsite: Te(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Yr({ clientMethod: i, activeProvider: a }), callsite: Te(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Io(n, i));
            throw new j("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new j("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = sl.nextId(), s = ho(n.length), a = n.map((u, g) => {
            if (u?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let T = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, C = { kind: "batch", id: o, index: g, isolationLevel: T, lock: s };
            return u.requestTransaction?.(C) ?? u;
          });
          return Mo(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), u;
          try {
            let g = { kind: "itx", ...a };
            u = await n(this._createItxClient(g)), await this._engine.transaction("commit", o, a);
          } catch (g) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), g;
          }
          return u;
        }
        _createItxClient(n) {
          return Tt(ge(Fi(this), [H("_appliedParent", () => this._appliedParent._createItxClient(n)), H("_createPrismaPromise", () => Xr(n)), H(ol, () => n.id), et(lo)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? il, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, u = /* @__PURE__ */ __name(async (g) => {
            let T = this._middlewares.get(++a);
            if (T) return this._tracingHelper.runInChildSpan(s.middleware, (I) => T(g, (ne) => (I?.end(), u(ne))));
            let { runInTransaction: C, args: O, ...A } = g, M = { ...n, ...A };
            O && (M.args = i.middlewareArgsToRequestArgs(O)), n.transaction !== void 0 && C === false && delete M.transaction;
            let S = await Qi(this, M);
            return M.model ? Bi({ result: S, modelName: M.model, args: M.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : S;
          }, "u");
          return this._tracingHelper.runInChildSpan(s.operation, () => u(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: u, argsMapper: g, transaction: T, unpacker: C, otelParentCtx: O, customDataProxyFetch: A }) {
          try {
            n = g ? g(n) : n;
            let M = { name: "serialize" }, S = this._tracingHelper.runInChildSpan(M, () => Zt({ modelName: u, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return ee.enabled("prisma:client") && (Re("Prisma Client call:"), Re(`prisma.${i}(${Ci(n)})`), Re("Generated request:"), Re(JSON.stringify(S, null, 2) + `
`)), T?.kind === "batch" && await T.lock, this._requestHandler.request({ protocolQuery: S, modelName: u, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: T, unpacker: C, otelParentCtx: O, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: A });
          } catch (M) {
            throw M.clientVersion = this._clientVersion, M;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics")) throw new j("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return t;
    }
    __name(_o, "_o");
    function Io(e, t) {
      return al(e) ? [new X(e, t), co] : [e, mo];
    }
    __name(Io, "Io");
    function al(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(al, "al");
    c();
    m();
    p();
    d();
    f();
    l();
    var ll = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Do(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!ll.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Do, "Do");
    c();
    m();
    p();
    d();
    f();
    l();
    l();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/query_engine_bg.js
var require_query_engine_bg = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/query_engine_bg.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var j = Object.defineProperty;
    var R = Object.getOwnPropertyDescriptor;
    var D = Object.getOwnPropertyNames;
    var M = Object.prototype.hasOwnProperty;
    var U = /* @__PURE__ */ __name((t, e) => {
      for (var n in e) j(t, n, { get: e[n], enumerable: true });
    }, "U");
    var B = /* @__PURE__ */ __name((t, e, n, _) => {
      if (e && typeof e == "object" || typeof e == "function") for (let o of D(e)) !M.call(t, o) && o !== n && j(t, o, { get: /* @__PURE__ */ __name(() => e[o], "get"), enumerable: !(_ = R(e, o)) || _.enumerable });
      return t;
    }, "B");
    var N = /* @__PURE__ */ __name((t) => B(j({}, "__esModule", { value: true }), t), "N");
    var Ee = {};
    U(Ee, { QueryEngine: /* @__PURE__ */ __name(() => G, "QueryEngine"), __wbg_String_88810dfeb4021902: /* @__PURE__ */ __name(() => Dt, "__wbg_String_88810dfeb4021902"), __wbg_buffer_344d9b41efe96da7: /* @__PURE__ */ __name(() => Ut, "__wbg_buffer_344d9b41efe96da7"), __wbg_call_53fc3abd42e24ec8: /* @__PURE__ */ __name(() => fe, "__wbg_call_53fc3abd42e24ec8"), __wbg_call_669127b9d730c650: /* @__PURE__ */ __name(() => Kt, "__wbg_call_669127b9d730c650"), __wbg_crypto_58f13aa23ffcb166: /* @__PURE__ */ __name(() => zt, "__wbg_crypto_58f13aa23ffcb166"), __wbg_done_bc26bf4ada718266: /* @__PURE__ */ __name(() => te, "__wbg_done_bc26bf4ada718266"), __wbg_entries_6d727b73ee02b7ce: /* @__PURE__ */ __name(() => me, "__wbg_entries_6d727b73ee02b7ce"), __wbg_exec_393fa168a3695345: /* @__PURE__ */ __name(() => Ft, "__wbg_exec_393fa168a3695345"), __wbg_getRandomValues_504510b5564925af: /* @__PURE__ */ __name(() => $t, "__wbg_getRandomValues_504510b5564925af"), __wbg_getTime_ed6ee333b702f8fc: /* @__PURE__ */ __name(() => ct, "__wbg_getTime_ed6ee333b702f8fc"), __wbg_get_2aff440840bb6202: /* @__PURE__ */ __name(() => re, "__wbg_get_2aff440840bb6202"), __wbg_get_4a9aa5157afeb382: /* @__PURE__ */ __name(() => Xt, "__wbg_get_4a9aa5157afeb382"), __wbg_get_94990005bd6ca07c: /* @__PURE__ */ __name(() => Rt, "__wbg_get_94990005bd6ca07c"), __wbg_getwithrefkey_5e6d9547403deab8: /* @__PURE__ */ __name(() => Et, "__wbg_getwithrefkey_5e6d9547403deab8"), __wbg_globalThis_17eff828815f7d84: /* @__PURE__ */ __name(() => ce, "__wbg_globalThis_17eff828815f7d84"), __wbg_global_46f939f6541643c5: /* @__PURE__ */ __name(() => ie, "__wbg_global_46f939f6541643c5"), __wbg_has_cdf8b85f6e903c80: /* @__PURE__ */ __name(() => rt, "__wbg_has_cdf8b85f6e903c80"), __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: /* @__PURE__ */ __name(() => ye, "__wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d"), __wbg_instanceof_Promise_cfbcc42300367513: /* @__PURE__ */ __name(() => at, "__wbg_instanceof_Promise_cfbcc42300367513"), __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: /* @__PURE__ */ __name(() => xe, "__wbg_instanceof_Uint8Array_19e6f142a5e7e1e1"), __wbg_isArray_38525be7442aa21e: /* @__PURE__ */ __name(() => se, "__wbg_isArray_38525be7442aa21e"), __wbg_isSafeInteger_c38b0a16d0c7cef7: /* @__PURE__ */ __name(() => ae, "__wbg_isSafeInteger_c38b0a16d0c7cef7"), __wbg_iterator_7ee1a391d310f8e4: /* @__PURE__ */ __name(() => gt, "__wbg_iterator_7ee1a391d310f8e4"), __wbg_length_a5587d6cd79ab197: /* @__PURE__ */ __name(() => le, "__wbg_length_a5587d6cd79ab197"), __wbg_length_cace2e0b3ddc0502: /* @__PURE__ */ __name(() => bt, "__wbg_length_cace2e0b3ddc0502"), __wbg_msCrypto_abcb1295e768d1f2: /* @__PURE__ */ __name(() => Qt, "__wbg_msCrypto_abcb1295e768d1f2"), __wbg_new0_ad75dd38f92424e2: /* @__PURE__ */ __name(() => ot, "__wbg_new0_ad75dd38f92424e2"), __wbg_new_00f9fd9cefd9f65c: /* @__PURE__ */ __name(() => vt, "__wbg_new_00f9fd9cefd9f65c"), __wbg_new_08236689f0afb357: /* @__PURE__ */ __name(() => Tt, "__wbg_new_08236689f0afb357"), __wbg_new_1b94180eeb48f2a2: /* @__PURE__ */ __name(() => St, "__wbg_new_1b94180eeb48f2a2"), __wbg_new_c728d68b8b34487e: /* @__PURE__ */ __name(() => At, "__wbg_new_c728d68b8b34487e"), __wbg_new_d8a000788389a31e: /* @__PURE__ */ __name(() => Nt, "__wbg_new_d8a000788389a31e"), __wbg_new_feb65b865d980ae2: /* @__PURE__ */ __name(() => Y, "__wbg_new_feb65b865d980ae2"), __wbg_newnoargs_ccdcae30fd002262: /* @__PURE__ */ __name(() => ue, "__wbg_newnoargs_ccdcae30fd002262"), __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: /* @__PURE__ */ __name(() => Bt, "__wbg_newwithbyteoffsetandlength_2dc04d99088b15e3"), __wbg_newwithlength_13b5319ab422dcf6: /* @__PURE__ */ __name(() => Ht, "__wbg_newwithlength_13b5319ab422dcf6"), __wbg_next_15da6a3df9290720: /* @__PURE__ */ __name(() => ne, "__wbg_next_15da6a3df9290720"), __wbg_next_1989a20442400aaa: /* @__PURE__ */ __name(() => Zt, "__wbg_next_1989a20442400aaa"), __wbg_node_523d7bd03ef69fba: /* @__PURE__ */ __name(() => Wt, "__wbg_node_523d7bd03ef69fba"), __wbg_now_28a6b413aca4a96a: /* @__PURE__ */ __name(() => we, "__wbg_now_28a6b413aca4a96a"), __wbg_now_4579335d3581594c: /* @__PURE__ */ __name(() => st, "__wbg_now_4579335d3581594c"), __wbg_now_8ed1a4454e40ecd1: /* @__PURE__ */ __name(() => ut, "__wbg_now_8ed1a4454e40ecd1"), __wbg_parse_3f0cb48976ca4123: /* @__PURE__ */ __name(() => _t, "__wbg_parse_3f0cb48976ca4123"), __wbg_process_5b786e71d465a513: /* @__PURE__ */ __name(() => Lt, "__wbg_process_5b786e71d465a513"), __wbg_push_fd3233d09cf81821: /* @__PURE__ */ __name(() => kt, "__wbg_push_fd3233d09cf81821"), __wbg_randomFillSync_a0d98aa11c81fe89: /* @__PURE__ */ __name(() => Vt, "__wbg_randomFillSync_a0d98aa11c81fe89"), __wbg_require_2784e593a4674877: /* @__PURE__ */ __name(() => Jt, "__wbg_require_2784e593a4674877"), __wbg_resolve_a3252b2860f0a09e: /* @__PURE__ */ __name(() => Oe, "__wbg_resolve_a3252b2860f0a09e"), __wbg_self_3fad056edded10bd: /* @__PURE__ */ __name(() => _e, "__wbg_self_3fad056edded10bd"), __wbg_setTimeout_631fe61f31fa2fad: /* @__PURE__ */ __name(() => Z, "__wbg_setTimeout_631fe61f31fa2fad"), __wbg_set_0ac78a2bc07da03c: /* @__PURE__ */ __name(() => It, "__wbg_set_0ac78a2bc07da03c"), __wbg_set_3355b9f2d3092e3b: /* @__PURE__ */ __name(() => jt, "__wbg_set_3355b9f2d3092e3b"), __wbg_set_40f7786a25a9cc7e: /* @__PURE__ */ __name(() => be, "__wbg_set_40f7786a25a9cc7e"), __wbg_set_841ac57cff3d672b: /* @__PURE__ */ __name(() => qt, "__wbg_set_841ac57cff3d672b"), __wbg_set_dcfd613a3420f908: /* @__PURE__ */ __name(() => de, "__wbg_set_dcfd613a3420f908"), __wbg_set_wasm: /* @__PURE__ */ __name(() => C, "__wbg_set_wasm"), __wbg_stringify_4039297315a25b00: /* @__PURE__ */ __name(() => ge, "__wbg_stringify_4039297315a25b00"), __wbg_subarray_6ca5cfa7fbb9abbe: /* @__PURE__ */ __name(() => Ct, "__wbg_subarray_6ca5cfa7fbb9abbe"), __wbg_then_1bbc9edafd859b06: /* @__PURE__ */ __name(() => je, "__wbg_then_1bbc9edafd859b06"), __wbg_then_89e1c559530b85cf: /* @__PURE__ */ __name(() => Ae, "__wbg_then_89e1c559530b85cf"), __wbg_valueOf_ff4b62641803432a: /* @__PURE__ */ __name(() => Yt, "__wbg_valueOf_ff4b62641803432a"), __wbg_value_0570714ff7d75f35: /* @__PURE__ */ __name(() => ee, "__wbg_value_0570714ff7d75f35"), __wbg_versions_c2ab80650590b6a2: /* @__PURE__ */ __name(() => Pt, "__wbg_versions_c2ab80650590b6a2"), __wbg_window_a4f46c98a61d4089: /* @__PURE__ */ __name(() => oe, "__wbg_window_a4f46c98a61d4089"), __wbindgen_bigint_from_i64: /* @__PURE__ */ __name(() => pt, "__wbindgen_bigint_from_i64"), __wbindgen_bigint_from_u64: /* @__PURE__ */ __name(() => yt, "__wbindgen_bigint_from_u64"), __wbindgen_bigint_get_as_i64: /* @__PURE__ */ __name(() => Te, "__wbindgen_bigint_get_as_i64"), __wbindgen_boolean_get: /* @__PURE__ */ __name(() => dt, "__wbindgen_boolean_get"), __wbindgen_cb_drop: /* @__PURE__ */ __name(() => Se, "__wbindgen_cb_drop"), __wbindgen_closure_wrapper7038: /* @__PURE__ */ __name(() => qe, "__wbindgen_closure_wrapper7038"), __wbindgen_debug_string: /* @__PURE__ */ __name(() => Ie, "__wbindgen_debug_string"), __wbindgen_error_new: /* @__PURE__ */ __name(() => X, "__wbindgen_error_new"), __wbindgen_in: /* @__PURE__ */ __name(() => xt, "__wbindgen_in"), __wbindgen_is_bigint: /* @__PURE__ */ __name(() => lt, "__wbindgen_is_bigint"), __wbindgen_is_function: /* @__PURE__ */ __name(() => Gt, "__wbindgen_is_function"), __wbindgen_is_object: /* @__PURE__ */ __name(() => ft, "__wbindgen_is_object"), __wbindgen_is_string: /* @__PURE__ */ __name(() => Ot, "__wbindgen_is_string"), __wbindgen_is_undefined: /* @__PURE__ */ __name(() => nt, "__wbindgen_is_undefined"), __wbindgen_jsval_eq: /* @__PURE__ */ __name(() => mt, "__wbindgen_jsval_eq"), __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(() => pe, "__wbindgen_jsval_loose_eq"), __wbindgen_memory: /* @__PURE__ */ __name(() => Mt, "__wbindgen_memory"), __wbindgen_number_get: /* @__PURE__ */ __name(() => wt, "__wbindgen_number_get"), __wbindgen_number_new: /* @__PURE__ */ __name(() => ht, "__wbindgen_number_new"), __wbindgen_object_clone_ref: /* @__PURE__ */ __name(() => et, "__wbindgen_object_clone_ref"), __wbindgen_object_drop_ref: /* @__PURE__ */ __name(() => it, "__wbindgen_object_drop_ref"), __wbindgen_string_get: /* @__PURE__ */ __name(() => K, "__wbindgen_string_get"), __wbindgen_string_new: /* @__PURE__ */ __name(() => tt, "__wbindgen_string_new"), __wbindgen_throw: /* @__PURE__ */ __name(() => he, "__wbindgen_throw"), debug_panic: /* @__PURE__ */ __name(() => Q, "debug_panic"), getBuildTimeInfo: /* @__PURE__ */ __name(() => J, "getBuildTimeInfo") });
    module.exports = N(Ee);
    var T = /* @__PURE__ */ __name(() => {
    }, "T");
    T.prototype = T;
    var c;
    function C(t) {
      c = t;
    }
    __name(C, "C");
    var w = new Array(128).fill(void 0);
    w.push(void 0, null, true, false);
    function r(t) {
      return w[t];
    }
    __name(r, "r");
    var a = 0;
    var I = null;
    function S() {
      return (I === null || I.byteLength === 0) && (I = new Uint8Array(c.memory.buffer)), I;
    }
    __name(S, "S");
    var $ = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    var A = new $("utf-8");
    var V = typeof A.encodeInto == "function" ? function(t, e) {
      return A.encodeInto(t, e);
    } : function(t, e) {
      const n = A.encode(t);
      return e.set(n), { read: t.length, written: n.length };
    };
    function d(t, e, n) {
      if (n === void 0) {
        const s = A.encode(t), y = e(s.length, 1) >>> 0;
        return S().subarray(y, y + s.length).set(s), a = s.length, y;
      }
      let _ = t.length, o = e(_, 1) >>> 0;
      const f = S();
      let u = 0;
      for (; u < _; u++) {
        const s = t.charCodeAt(u);
        if (s > 127) break;
        f[o + u] = s;
      }
      if (u !== _) {
        u !== 0 && (t = t.slice(u)), o = n(o, _, _ = u + t.length * 3, 1) >>> 0;
        const s = S().subarray(o + u, o + _), y = V(t, s);
        u += y.written, o = n(o, _, u, 1) >>> 0;
      }
      return a = u, o;
    }
    __name(d, "d");
    function p(t) {
      return t == null;
    }
    __name(p, "p");
    var m = null;
    function l() {
      return (m === null || m.buffer.detached === true || m.buffer.detached === void 0 && m.buffer !== c.memory.buffer) && (m = new DataView(c.memory.buffer)), m;
    }
    __name(l, "l");
    var z = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    var q = new z("utf-8", { ignoreBOM: true, fatal: true });
    q.decode();
    function x(t, e) {
      return t = t >>> 0, q.decode(S().subarray(t, t + e));
    }
    __name(x, "x");
    var h = w.length;
    function i(t) {
      h === w.length && w.push(w.length + 1);
      const e = h;
      return h = w[e], w[e] = t, e;
    }
    __name(i, "i");
    function L(t) {
      t < 132 || (w[t] = h, h = t);
    }
    __name(L, "L");
    function b(t) {
      const e = r(t);
      return L(t), e;
    }
    __name(b, "b");
    function O(t) {
      const e = typeof t;
      if (e == "number" || e == "boolean" || t == null) return `${t}`;
      if (e == "string") return `"${t}"`;
      if (e == "symbol") {
        const o = t.description;
        return o == null ? "Symbol" : `Symbol(${o})`;
      }
      if (e == "function") {
        const o = t.name;
        return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
      }
      if (Array.isArray(t)) {
        const o = t.length;
        let f = "[";
        o > 0 && (f += O(t[0]));
        for (let u = 1; u < o; u++) f += ", " + O(t[u]);
        return f += "]", f;
      }
      const n = /\[object ([^\]]+)\]/.exec(toString.call(t));
      let _;
      if (n.length > 1) _ = n[1];
      else return toString.call(t);
      if (_ == "Object") try {
        return "Object(" + JSON.stringify(t) + ")";
      } catch {
        return "Object";
      }
      return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : _;
    }
    __name(O, "O");
    var E = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((t) => {
      c.__wbindgen_export_2.get(t.dtor)(t.a, t.b);
    });
    function P(t, e, n, _) {
      const o = { a: t, b: e, cnt: 1, dtor: n }, f = /* @__PURE__ */ __name((...u) => {
        o.cnt++;
        const s = o.a;
        o.a = 0;
        try {
          return _(s, o.b, ...u);
        } finally {
          --o.cnt === 0 ? (c.__wbindgen_export_2.get(o.dtor)(s, o.b), E.unregister(o)) : o.a = s;
        }
      }, "f");
      return f.original = o, E.register(f, o, o), f;
    }
    __name(P, "P");
    function W(t, e, n) {
      c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9eef02caf99553a1(t, e, i(n));
    }
    __name(W, "W");
    function J() {
      const t = c.getBuildTimeInfo();
      return b(t);
    }
    __name(J, "J");
    function Q(t) {
      try {
        const f = c.__wbindgen_add_to_stack_pointer(-16);
        var e = p(t) ? 0 : d(t, c.__wbindgen_malloc, c.__wbindgen_realloc), n = a;
        c.debug_panic(f, e, n);
        var _ = l().getInt32(f + 4 * 0, true), o = l().getInt32(f + 4 * 1, true);
        if (o) throw b(_);
      } finally {
        c.__wbindgen_add_to_stack_pointer(16);
      }
    }
    __name(Q, "Q");
    function g(t, e) {
      try {
        return t.apply(this, e);
      } catch (n) {
        c.__wbindgen_exn_store(i(n));
      }
    }
    __name(g, "g");
    function H(t, e, n, _) {
      c.wasm_bindgen__convert__closures__invoke2_mut__h174c8485536aed69(t, e, i(n), i(_));
    }
    __name(H, "H");
    var k = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((t) => c.__wbg_queryengine_free(t >>> 0, 1));
    var G = class {
      static {
        __name(this, "G");
      }
      __destroy_into_raw() {
        const e = this.__wbg_ptr;
        return this.__wbg_ptr = 0, k.unregister(this), e;
      }
      free() {
        const e = this.__destroy_into_raw();
        c.__wbg_queryengine_free(e, 0);
      }
      constructor(e, n, _) {
        try {
          const s = c.__wbindgen_add_to_stack_pointer(-16);
          c.queryengine_new(s, i(e), i(n), i(_));
          var o = l().getInt32(s + 4 * 0, true), f = l().getInt32(s + 4 * 1, true), u = l().getInt32(s + 4 * 2, true);
          if (u) throw b(f);
          return this.__wbg_ptr = o >>> 0, k.register(this, this.__wbg_ptr, this), this;
        } finally {
          c.__wbindgen_add_to_stack_pointer(16);
        }
      }
      connect(e) {
        const n = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a, o = c.queryengine_connect(this.__wbg_ptr, n, _);
        return b(o);
      }
      disconnect(e) {
        const n = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a, o = c.queryengine_disconnect(this.__wbg_ptr, n, _);
        return b(o);
      }
      query(e, n, _) {
        const o = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), f = a, u = d(n, c.__wbindgen_malloc, c.__wbindgen_realloc), s = a;
        var y = p(_) ? 0 : d(_, c.__wbindgen_malloc, c.__wbindgen_realloc), v = a;
        const F = c.queryengine_query(this.__wbg_ptr, o, f, u, s, y, v);
        return b(F);
      }
      startTransaction(e, n) {
        const _ = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a, f = d(n, c.__wbindgen_malloc, c.__wbindgen_realloc), u = a, s = c.queryengine_startTransaction(this.__wbg_ptr, _, o, f, u);
        return b(s);
      }
      commitTransaction(e, n) {
        const _ = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a, f = d(n, c.__wbindgen_malloc, c.__wbindgen_realloc), u = a, s = c.queryengine_commitTransaction(this.__wbg_ptr, _, o, f, u);
        return b(s);
      }
      rollbackTransaction(e, n) {
        const _ = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a, f = d(n, c.__wbindgen_malloc, c.__wbindgen_realloc), u = a, s = c.queryengine_rollbackTransaction(this.__wbg_ptr, _, o, f, u);
        return b(s);
      }
      metrics(e) {
        const n = d(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a, o = c.queryengine_metrics(this.__wbg_ptr, n, _);
        return b(o);
      }
    };
    function K(t, e) {
      const n = r(e), _ = typeof n == "string" ? n : void 0;
      var o = p(_) ? 0 : d(_, c.__wbindgen_malloc, c.__wbindgen_realloc), f = a;
      l().setInt32(t + 4 * 1, f, true), l().setInt32(t + 4 * 0, o, true);
    }
    __name(K, "K");
    function X(t, e) {
      const n = new Error(x(t, e));
      return i(n);
    }
    __name(X, "X");
    function Y(t, e) {
      try {
        var n = { a: t, b: e }, _ = /* @__PURE__ */ __name((f, u) => {
          const s = n.a;
          n.a = 0;
          try {
            return H(s, n.b, f, u);
          } finally {
            n.a = s;
          }
        }, "_");
        const o = new Promise(_);
        return i(o);
      } finally {
        n.a = n.b = 0;
      }
    }
    __name(Y, "Y");
    function Z(t, e) {
      return setTimeout(r(t), e >>> 0);
    }
    __name(Z, "Z");
    function tt(t, e) {
      const n = x(t, e);
      return i(n);
    }
    __name(tt, "tt");
    function et(t) {
      const e = r(t);
      return i(e);
    }
    __name(et, "et");
    function nt(t) {
      return r(t) === void 0;
    }
    __name(nt, "nt");
    function rt() {
      return g(function(t, e) {
        return Reflect.has(r(t), r(e));
      }, arguments);
    }
    __name(rt, "rt");
    function _t() {
      return g(function(t, e) {
        const n = JSON.parse(x(t, e));
        return i(n);
      }, arguments);
    }
    __name(_t, "_t");
    function ot() {
      return i(/* @__PURE__ */ new Date());
    }
    __name(ot, "ot");
    function ct(t) {
      return r(t).getTime();
    }
    __name(ct, "ct");
    function it(t) {
      b(t);
    }
    __name(it, "it");
    function ut(t) {
      return r(t).now();
    }
    __name(ut, "ut");
    function st() {
      return Date.now();
    }
    __name(st, "st");
    function ft(t) {
      const e = r(t);
      return typeof e == "object" && e !== null;
    }
    __name(ft, "ft");
    function at(t) {
      let e;
      try {
        e = r(t) instanceof Promise;
      } catch {
        e = false;
      }
      return e;
    }
    __name(at, "at");
    function bt(t) {
      return r(t).length;
    }
    __name(bt, "bt");
    function gt() {
      return i(Symbol.iterator);
    }
    __name(gt, "gt");
    function dt(t) {
      const e = r(t);
      return typeof e == "boolean" ? e ? 1 : 0 : 2;
    }
    __name(dt, "dt");
    function lt(t) {
      return typeof r(t) == "bigint";
    }
    __name(lt, "lt");
    function wt(t, e) {
      const n = r(e), _ = typeof n == "number" ? n : void 0;
      l().setFloat64(t + 8 * 1, p(_) ? 0 : _, true), l().setInt32(t + 4 * 0, !p(_), true);
    }
    __name(wt, "wt");
    function pt(t) {
      return i(t);
    }
    __name(pt, "pt");
    function xt(t, e) {
      return r(t) in r(e);
    }
    __name(xt, "xt");
    function yt(t) {
      const e = BigInt.asUintN(64, t);
      return i(e);
    }
    __name(yt, "yt");
    function mt(t, e) {
      return r(t) === r(e);
    }
    __name(mt, "mt");
    function ht(t) {
      return i(t);
    }
    __name(ht, "ht");
    function Tt() {
      const t = new Array();
      return i(t);
    }
    __name(Tt, "Tt");
    function It(t, e, n) {
      r(t)[e >>> 0] = b(n);
    }
    __name(It, "It");
    function St() {
      return i(/* @__PURE__ */ new Map());
    }
    __name(St, "St");
    function At() {
      const t = new Object();
      return i(t);
    }
    __name(At, "At");
    function jt(t, e, n) {
      const _ = r(t).set(r(e), r(n));
      return i(_);
    }
    __name(jt, "jt");
    function Ot(t) {
      return typeof r(t) == "string";
    }
    __name(Ot, "Ot");
    function qt(t, e, n) {
      r(t)[b(e)] = b(n);
    }
    __name(qt, "qt");
    function Et(t, e) {
      const n = r(t)[r(e)];
      return i(n);
    }
    __name(Et, "Et");
    function kt(t, e) {
      return r(t).push(r(e));
    }
    __name(kt, "kt");
    function vt(t, e, n, _) {
      const o = new RegExp(x(t, e), x(n, _));
      return i(o);
    }
    __name(vt, "vt");
    function Ft(t, e, n) {
      const _ = r(t).exec(x(e, n));
      return p(_) ? 0 : i(_);
    }
    __name(Ft, "Ft");
    function Rt() {
      return g(function(t, e) {
        const n = r(t)[b(e)];
        return i(n);
      }, arguments);
    }
    __name(Rt, "Rt");
    function Dt(t, e) {
      const n = String(r(e)), _ = d(n, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a;
      l().setInt32(t + 4 * 1, o, true), l().setInt32(t + 4 * 0, _, true);
    }
    __name(Dt, "Dt");
    function Mt() {
      const t = c.memory;
      return i(t);
    }
    __name(Mt, "Mt");
    function Ut(t) {
      const e = r(t).buffer;
      return i(e);
    }
    __name(Ut, "Ut");
    function Bt(t, e, n) {
      const _ = new Uint8Array(r(t), e >>> 0, n >>> 0);
      return i(_);
    }
    __name(Bt, "Bt");
    function Nt(t) {
      const e = new Uint8Array(r(t));
      return i(e);
    }
    __name(Nt, "Nt");
    function Ct(t, e, n) {
      const _ = r(t).subarray(e >>> 0, n >>> 0);
      return i(_);
    }
    __name(Ct, "Ct");
    function $t() {
      return g(function(t, e) {
        r(t).getRandomValues(r(e));
      }, arguments);
    }
    __name($t, "$t");
    function Vt() {
      return g(function(t, e) {
        r(t).randomFillSync(b(e));
      }, arguments);
    }
    __name(Vt, "Vt");
    function zt(t) {
      const e = r(t).crypto;
      return i(e);
    }
    __name(zt, "zt");
    function Lt(t) {
      const e = r(t).process;
      return i(e);
    }
    __name(Lt, "Lt");
    function Pt(t) {
      const e = r(t).versions;
      return i(e);
    }
    __name(Pt, "Pt");
    function Wt(t) {
      const e = r(t).node;
      return i(e);
    }
    __name(Wt, "Wt");
    function Jt() {
      return g(function() {
        const t = module.require;
        return i(t);
      }, arguments);
    }
    __name(Jt, "Jt");
    function Qt(t) {
      const e = r(t).msCrypto;
      return i(e);
    }
    __name(Qt, "Qt");
    function Ht(t) {
      const e = new Uint8Array(t >>> 0);
      return i(e);
    }
    __name(Ht, "Ht");
    function Gt(t) {
      return typeof r(t) == "function";
    }
    __name(Gt, "Gt");
    function Kt() {
      return g(function(t, e) {
        const n = r(t).call(r(e));
        return i(n);
      }, arguments);
    }
    __name(Kt, "Kt");
    function Xt(t, e) {
      const n = r(t)[e >>> 0];
      return i(n);
    }
    __name(Xt, "Xt");
    function Yt(t) {
      return r(t).valueOf();
    }
    __name(Yt, "Yt");
    function Zt() {
      return g(function(t) {
        const e = r(t).next();
        return i(e);
      }, arguments);
    }
    __name(Zt, "Zt");
    function te(t) {
      return r(t).done;
    }
    __name(te, "te");
    function ee(t) {
      const e = r(t).value;
      return i(e);
    }
    __name(ee, "ee");
    function ne(t) {
      const e = r(t).next;
      return i(e);
    }
    __name(ne, "ne");
    function re() {
      return g(function(t, e) {
        const n = Reflect.get(r(t), r(e));
        return i(n);
      }, arguments);
    }
    __name(re, "re");
    function _e() {
      return g(function() {
        const t = self.self;
        return i(t);
      }, arguments);
    }
    __name(_e, "_e");
    function oe() {
      return g(function() {
        const t = window.window;
        return i(t);
      }, arguments);
    }
    __name(oe, "oe");
    function ce() {
      return g(function() {
        const t = globalThis.globalThis;
        return i(t);
      }, arguments);
    }
    __name(ce, "ce");
    function ie() {
      return g(function() {
        const t = global.global;
        return i(t);
      }, arguments);
    }
    __name(ie, "ie");
    function ue(t, e) {
      const n = new T(x(t, e));
      return i(n);
    }
    __name(ue, "ue");
    function se(t) {
      return Array.isArray(r(t));
    }
    __name(se, "se");
    function fe() {
      return g(function(t, e, n) {
        const _ = r(t).call(r(e), r(n));
        return i(_);
      }, arguments);
    }
    __name(fe, "fe");
    function ae(t) {
      return Number.isSafeInteger(r(t));
    }
    __name(ae, "ae");
    function be() {
      return g(function(t, e, n) {
        return Reflect.set(r(t), r(e), r(n));
      }, arguments);
    }
    __name(be, "be");
    function ge() {
      return g(function(t) {
        const e = JSON.stringify(r(t));
        return i(e);
      }, arguments);
    }
    __name(ge, "ge");
    function de(t, e, n) {
      r(t).set(r(e), n >>> 0);
    }
    __name(de, "de");
    function le(t) {
      return r(t).length;
    }
    __name(le, "le");
    function we() {
      return g(function() {
        return Date.now();
      }, arguments);
    }
    __name(we, "we");
    function pe(t, e) {
      return r(t) == r(e);
    }
    __name(pe, "pe");
    function xe(t) {
      let e;
      try {
        e = r(t) instanceof Uint8Array;
      } catch {
        e = false;
      }
      return e;
    }
    __name(xe, "xe");
    function ye(t) {
      let e;
      try {
        e = r(t) instanceof ArrayBuffer;
      } catch {
        e = false;
      }
      return e;
    }
    __name(ye, "ye");
    function me(t) {
      const e = Object.entries(r(t));
      return i(e);
    }
    __name(me, "me");
    function he(t, e) {
      throw new Error(x(t, e));
    }
    __name(he, "he");
    function Te(t, e) {
      const n = r(e), _ = typeof n == "bigint" ? n : void 0;
      l().setBigInt64(t + 8 * 1, p(_) ? BigInt(0) : _, true), l().setInt32(t + 4 * 0, !p(_), true);
    }
    __name(Te, "Te");
    function Ie(t, e) {
      const n = O(r(e)), _ = d(n, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a;
      l().setInt32(t + 4 * 1, o, true), l().setInt32(t + 4 * 0, _, true);
    }
    __name(Ie, "Ie");
    function Se(t) {
      const e = b(t).original;
      return e.cnt-- == 1 ? (e.a = 0, true) : false;
    }
    __name(Se, "Se");
    function Ae(t, e) {
      const n = r(t).then(r(e));
      return i(n);
    }
    __name(Ae, "Ae");
    function je(t, e, n) {
      const _ = r(t).then(r(e), r(n));
      return i(_);
    }
    __name(je, "je");
    function Oe(t) {
      const e = Promise.resolve(r(t));
      return i(e);
    }
    __name(Oe, "Oe");
    function qe(t, e, n) {
      const _ = P(t, e, 541, W);
      return i(_);
    }
    __name(qe, "qe");
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/wasm-worker-loader.mjs
var wasm_worker_loader_exports = {};
__export(wasm_worker_loader_exports, {
  default: () => wasm_worker_loader_default
});
var wasm_worker_loader_default;
var init_wasm_worker_loader = __esm({
  "../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/wasm-worker-loader.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    wasm_worker_loader_default = import("./8552dff651243a79886dd7f71c5a50258a0caeed-query_engine_bg.wasm");
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/wasm.js
var require_wasm2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/wasm.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_wasm();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.22.0",
      engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      emailVerified: "emailVerified",
      name: "name",
      image: "image",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.AccountScalarFieldEnum = {
      id: "id",
      userId: "userId",
      type: "type",
      provider: "provider",
      providerAccountId: "providerAccountId",
      refresh_token: "refresh_token",
      access_token: "access_token",
      expires_at: "expires_at",
      token_type: "token_type",
      scope: "scope",
      id_token: "id_token",
      session_state: "session_state"
    };
    exports.Prisma.SessionScalarFieldEnum = {
      id: "id",
      sessionToken: "sessionToken",
      userId: "userId",
      expires: "expires"
    };
    exports.Prisma.VerificationTokenScalarFieldEnum = {
      identifier: "identifier",
      token: "token",
      expires: "expires"
    };
    exports.Prisma.WorkspaceScalarFieldEnum = {
      id: "id",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.WorkspaceMemberScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      userId: "userId",
      role: "role"
    };
    exports.Prisma.WorkspaceSettingsScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      autoMode: "autoMode",
      maxPostsPerWeek: "maxPostsPerWeek",
      privateReposEnabled: "privateReposEnabled",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.TokenVaultEntryScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      provider: "provider",
      encryptedToken: "encryptedToken",
      iv: "iv",
      tag: "tag",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.GitHubInstallationScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      installationId: "installationId",
      accountLogin: "accountLogin",
      accountType: "accountType",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.RepositoryScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      githubRepoId: "githubRepoId",
      owner: "owner",
      name: "name",
      fullName: "fullName",
      visibility: "visibility",
      defaultBranch: "defaultBranch",
      htmlUrl: "htmlUrl",
      enabled: "enabled",
      selected: "selected",
      privateEnabled: "privateEnabled",
      autoMode: "autoMode",
      lastSyncedAt: "lastSyncedAt",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.WebhookDeliveryScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      deliveryId: "deliveryId",
      event: "event",
      payload: "payload",
      status: "status",
      errorMessage: "errorMessage",
      processedAt: "processedAt",
      expiresAt: "expiresAt",
      createdAt: "createdAt"
    };
    exports.Prisma.ContentDraftScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      repositoryId: "repositoryId",
      template: "template",
      payloadJson: "payloadJson",
      generatedJson: "generatedJson",
      generatedText: "generatedText",
      evidenceMap: "evidenceMap",
      status: "status",
      requiresReview: "requiresReview",
      linkedInPostUrn: "linkedInPostUrn",
      publishedAt: "publishedAt",
      usage: "usage",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.DraftVersionScalarFieldEnum = {
      id: "id",
      draftId: "draftId",
      version: "version",
      fullText: "fullText",
      editedById: "editedById",
      createdAt: "createdAt"
    };
    exports.Prisma.EvidenceSnapshotScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      draftId: "draftId",
      payload: "payload",
      expiresAt: "expiresAt",
      createdAt: "createdAt"
    };
    exports.Prisma.LinkedInPostScalarFieldEnum = {
      id: "id",
      draftId: "draftId",
      urn: "urn",
      publishedAt: "publishedAt"
    };
    exports.Prisma.ProjectCardScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      repositoryId: "repositoryId",
      title: "title",
      role: "role",
      description: "description",
      startDate: "startDate",
      endDate: "endDate",
      technologies: "technologies",
      links: "links",
      syncStatus: "syncStatus",
      linkedInProjectId: "linkedInProjectId",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.AuditLogScalarFieldEnum = {
      id: "id",
      workspaceId: "workspaceId",
      userId: "userId",
      action: "action",
      resourceType: "resourceType",
      resourceId: "resourceId",
      metadata: "metadata",
      createdAt: "createdAt"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.JsonNullValueInput = {
      JsonNull: Prisma.JsonNull
    };
    exports.Prisma.NullableJsonNullValueInput = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.JsonNullValueFilter = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull,
      AnyNull: Prisma.AnyNull
    };
    exports.Prisma.ModelName = {
      User: "User",
      Account: "Account",
      Session: "Session",
      VerificationToken: "VerificationToken",
      Workspace: "Workspace",
      WorkspaceMember: "WorkspaceMember",
      WorkspaceSettings: "WorkspaceSettings",
      TokenVaultEntry: "TokenVaultEntry",
      GitHubInstallation: "GitHubInstallation",
      Repository: "Repository",
      WebhookDelivery: "WebhookDelivery",
      ContentDraft: "ContentDraft",
      DraftVersion: "DraftVersion",
      EvidenceSnapshot: "EvidenceSnapshot",
      LinkedInPost: "LinkedInPost",
      ProjectCard: "ProjectCard",
      AuditLog: "AuditLog"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Redwan Ahmmed\\Desktop\\GitSync\\GitSync-main\\node_modules\\.pnpm\\@prisma+client@5.22.0_prisma@5.22.0\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [
          "driverAdapters"
        ],
        "sourceFilePath": "C:\\Users\\Redwan Ahmmed\\Desktop\\GitSync\\GitSync-main\\packages\\db\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null
      },
      "relativePath": "../../../../../../packages/db/prisma",
      "clientVersion": "5.22.0",
      "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider        = "prisma-client-js"\n  previewFeatures = ["driverAdapters"]\n  engineType      = "wasm"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\n// --- Auth.js (Prisma adapter) ---\n\nmodel User {\n  id            String            @id @default(cuid())\n  email         String            @unique\n  emailVerified DateTime?\n  name          String?\n  image         String?\n  createdAt     DateTime          @default(now())\n  updatedAt     DateTime          @updatedAt\n  accounts      Account[]\n  sessions      Session[]\n  workspaces    WorkspaceMember[]\n  auditLogs     AuditLog[]\n  draftVersions DraftVersion[]\n}\n\nmodel Account {\n  id                String  @id @default(cuid())\n  userId            String\n  type              String\n  provider          String\n  providerAccountId String\n  refresh_token     String? @db.Text\n  access_token      String? @db.Text\n  expires_at        Int?\n  token_type        String?\n  scope             String?\n  id_token          String? @db.Text\n  session_state     String?\n  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([provider, providerAccountId])\n}\n\nmodel Session {\n  id           String   @id @default(cuid())\n  sessionToken String   @unique\n  userId       String\n  expires      DateTime\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String   @unique\n  expires    DateTime\n\n  @@unique([identifier, token])\n}\n\n// --- Workspace ---\n\nmodel Workspace {\n  id                String               @id @default(cuid())\n  name              String\n  createdAt         DateTime             @default(now())\n  updatedAt         DateTime             @updatedAt\n  members           WorkspaceMember[]\n  settings          WorkspaceSettings?\n  repositories      Repository[]\n  drafts            ContentDraft[]\n  tokenVault        TokenVaultEntry[]\n  githubInstalls    GitHubInstallation[]\n  webhookDeliveries WebhookDelivery[]\n  auditLogs         AuditLog[]\n  evidenceSnapshots EvidenceSnapshot[]\n  projectCards      ProjectCard[]\n}\n\nmodel WorkspaceMember {\n  id          String    @id @default(cuid())\n  workspaceId String\n  userId      String\n  role        String    @default("OWNER")\n  workspace   Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([workspaceId, userId])\n}\n\nmodel WorkspaceSettings {\n  id                  String    @id @default(cuid())\n  workspaceId         String    @unique\n  autoMode            String    @default("REVIEW_REQUIRED")\n  maxPostsPerWeek     Int       @default(3)\n  privateReposEnabled Boolean   @default(false)\n  createdAt           DateTime  @default(now())\n  updatedAt           DateTime  @updatedAt\n  workspace           Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n}\n\n// --- Integrations ---\n\nmodel TokenVaultEntry {\n  id             String    @id @default(cuid())\n  workspaceId    String\n  provider       String\n  encryptedToken String\n  iv             String\n  tag            String\n  createdAt      DateTime  @default(now())\n  updatedAt      DateTime  @updatedAt\n  workspace      Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n\n  @@unique([workspaceId, provider])\n}\n\nmodel GitHubInstallation {\n  id             String    @id @default(cuid())\n  workspaceId    String\n  installationId BigInt    @unique\n  accountLogin   String\n  accountType    String\n  createdAt      DateTime  @default(now())\n  updatedAt      DateTime  @updatedAt\n  workspace      Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n}\n\n// --- GitHub ---\n\nmodel Repository {\n  id             String         @id @default(cuid())\n  workspaceId    String\n  githubRepoId   BigInt\n  owner          String\n  name           String\n  fullName       String\n  visibility     String\n  defaultBranch  String?\n  htmlUrl        String\n  enabled        Boolean        @default(false)\n  selected       Boolean        @default(false)\n  privateEnabled Boolean        @default(false)\n  autoMode       String         @default("REVIEW_REQUIRED")\n  lastSyncedAt   DateTime?\n  createdAt      DateTime       @default(now())\n  updatedAt      DateTime       @updatedAt\n  workspace      Workspace      @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n  drafts         ContentDraft[]\n  projectCards   ProjectCard[]\n\n  @@unique([workspaceId, githubRepoId])\n}\n\nmodel WebhookDelivery {\n  id           String     @id @default(cuid())\n  workspaceId  String?\n  deliveryId   String     @unique\n  event        String\n  payload      Json\n  status       String     @default("PENDING")\n  errorMessage String?\n  processedAt  DateTime?\n  expiresAt    DateTime?\n  createdAt    DateTime   @default(now())\n  workspace    Workspace? @relation(fields: [workspaceId], references: [id], onDelete: SetNull)\n}\n\n// --- Content ---\n\nmodel ContentDraft {\n  id                String             @id @default(cuid())\n  workspaceId       String\n  repositoryId      String?\n  template          String\n  payloadJson       Json\n  generatedJson     Json?\n  generatedText     String?\n  evidenceMap       Json?\n  status            String             @default("DETECTED")\n  requiresReview    Boolean            @default(true)\n  linkedInPostUrn   String?\n  publishedAt       DateTime?\n  usage             Json?\n  createdAt         DateTime           @default(now())\n  updatedAt         DateTime           @updatedAt\n  workspace         Workspace          @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n  repository        Repository?        @relation(fields: [repositoryId], references: [id], onDelete: SetNull)\n  versions          DraftVersion[]\n  linkedInPost      LinkedInPost?\n  evidenceSnapshots EvidenceSnapshot[]\n\n  @@index([workspaceId, status])\n}\n\nmodel DraftVersion {\n  id         String       @id @default(cuid())\n  draftId    String\n  version    Int\n  fullText   String       @db.Text\n  editedById String?\n  createdAt  DateTime     @default(now())\n  draft      ContentDraft @relation(fields: [draftId], references: [id], onDelete: Cascade)\n  editor     User?        @relation(fields: [editedById], references: [id], onDelete: SetNull)\n\n  @@unique([draftId, version])\n}\n\nmodel EvidenceSnapshot {\n  id          String        @id @default(cuid())\n  workspaceId String\n  draftId     String?\n  payload     Json\n  expiresAt   DateTime\n  createdAt   DateTime      @default(now())\n  workspace   Workspace     @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n  draft       ContentDraft? @relation(fields: [draftId], references: [id], onDelete: Cascade)\n}\n\nmodel LinkedInPost {\n  id          String       @id @default(cuid())\n  draftId     String       @unique\n  urn         String\n  publishedAt DateTime     @default(now())\n  draft       ContentDraft @relation(fields: [draftId], references: [id], onDelete: Cascade)\n}\n\nmodel ProjectCard {\n  id                String     @id @default(cuid())\n  workspaceId       String\n  repositoryId      String\n  title             String\n  role              String?\n  description       String     @db.Text\n  startDate         String?\n  endDate           String?\n  technologies      Json\n  links             Json\n  syncStatus        String     @default("MANUAL_READY")\n  linkedInProjectId String?\n  createdAt         DateTime   @default(now())\n  updatedAt         DateTime   @updatedAt\n  workspace         Workspace  @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n  repository        Repository @relation(fields: [repositoryId], references: [id], onDelete: Cascade)\n}\n\n// --- Audit ---\n\nmodel AuditLog {\n  id           String    @id @default(cuid())\n  workspaceId  String\n  userId       String?\n  action       String\n  resourceType String\n  resourceId   String?\n  metadata     Json?\n  createdAt    DateTime  @default(now())\n  workspace    Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)\n  user         User?     @relation(fields: [userId], references: [id], onDelete: SetNull)\n\n  @@index([workspaceId, createdAt])\n}\n',
      "inlineSchemaHash": "173ba7c394c683d7b54035b480e0160ae9d99429c41c195007afc373e76fdd51",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"DateTime"},{"name":"name","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"workspaces","kind":"object","type":"WorkspaceMember","relationName":"UserToWorkspaceMember"},{"name":"auditLogs","kind":"object","type":"AuditLog","relationName":"AuditLogToUser"},{"name":"draftVersions","kind":"object","type":"DraftVersion","relationName":"DraftVersionToUser"}],"dbName":null},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"type","kind":"scalar","type":"String"},{"name":"provider","kind":"scalar","type":"String"},{"name":"providerAccountId","kind":"scalar","type":"String"},{"name":"refresh_token","kind":"scalar","type":"String"},{"name":"access_token","kind":"scalar","type":"String"},{"name":"expires_at","kind":"scalar","type":"Int"},{"name":"token_type","kind":"scalar","type":"String"},{"name":"scope","kind":"scalar","type":"String"},{"name":"id_token","kind":"scalar","type":"String"},{"name":"session_state","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"}],"dbName":null},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"sessionToken","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"expires","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":null},"VerificationToken":{"fields":[{"name":"identifier","kind":"scalar","type":"String"},{"name":"token","kind":"scalar","type":"String"},{"name":"expires","kind":"scalar","type":"DateTime"}],"dbName":null},"Workspace":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"members","kind":"object","type":"WorkspaceMember","relationName":"WorkspaceToWorkspaceMember"},{"name":"settings","kind":"object","type":"WorkspaceSettings","relationName":"WorkspaceToWorkspaceSettings"},{"name":"repositories","kind":"object","type":"Repository","relationName":"RepositoryToWorkspace"},{"name":"drafts","kind":"object","type":"ContentDraft","relationName":"ContentDraftToWorkspace"},{"name":"tokenVault","kind":"object","type":"TokenVaultEntry","relationName":"TokenVaultEntryToWorkspace"},{"name":"githubInstalls","kind":"object","type":"GitHubInstallation","relationName":"GitHubInstallationToWorkspace"},{"name":"webhookDeliveries","kind":"object","type":"WebhookDelivery","relationName":"WebhookDeliveryToWorkspace"},{"name":"auditLogs","kind":"object","type":"AuditLog","relationName":"AuditLogToWorkspace"},{"name":"evidenceSnapshots","kind":"object","type":"EvidenceSnapshot","relationName":"EvidenceSnapshotToWorkspace"},{"name":"projectCards","kind":"object","type":"ProjectCard","relationName":"ProjectCardToWorkspace"}],"dbName":null},"WorkspaceMember":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"role","kind":"scalar","type":"String"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"WorkspaceToWorkspaceMember"},{"name":"user","kind":"object","type":"User","relationName":"UserToWorkspaceMember"}],"dbName":null},"WorkspaceSettings":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"autoMode","kind":"scalar","type":"String"},{"name":"maxPostsPerWeek","kind":"scalar","type":"Int"},{"name":"privateReposEnabled","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"WorkspaceToWorkspaceSettings"}],"dbName":null},"TokenVaultEntry":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"provider","kind":"scalar","type":"String"},{"name":"encryptedToken","kind":"scalar","type":"String"},{"name":"iv","kind":"scalar","type":"String"},{"name":"tag","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"TokenVaultEntryToWorkspace"}],"dbName":null},"GitHubInstallation":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"installationId","kind":"scalar","type":"BigInt"},{"name":"accountLogin","kind":"scalar","type":"String"},{"name":"accountType","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"GitHubInstallationToWorkspace"}],"dbName":null},"Repository":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"githubRepoId","kind":"scalar","type":"BigInt"},{"name":"owner","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"visibility","kind":"scalar","type":"String"},{"name":"defaultBranch","kind":"scalar","type":"String"},{"name":"htmlUrl","kind":"scalar","type":"String"},{"name":"enabled","kind":"scalar","type":"Boolean"},{"name":"selected","kind":"scalar","type":"Boolean"},{"name":"privateEnabled","kind":"scalar","type":"Boolean"},{"name":"autoMode","kind":"scalar","type":"String"},{"name":"lastSyncedAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"RepositoryToWorkspace"},{"name":"drafts","kind":"object","type":"ContentDraft","relationName":"ContentDraftToRepository"},{"name":"projectCards","kind":"object","type":"ProjectCard","relationName":"ProjectCardToRepository"}],"dbName":null},"WebhookDelivery":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"deliveryId","kind":"scalar","type":"String"},{"name":"event","kind":"scalar","type":"String"},{"name":"payload","kind":"scalar","type":"Json"},{"name":"status","kind":"scalar","type":"String"},{"name":"errorMessage","kind":"scalar","type":"String"},{"name":"processedAt","kind":"scalar","type":"DateTime"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"WebhookDeliveryToWorkspace"}],"dbName":null},"ContentDraft":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"repositoryId","kind":"scalar","type":"String"},{"name":"template","kind":"scalar","type":"String"},{"name":"payloadJson","kind":"scalar","type":"Json"},{"name":"generatedJson","kind":"scalar","type":"Json"},{"name":"generatedText","kind":"scalar","type":"String"},{"name":"evidenceMap","kind":"scalar","type":"Json"},{"name":"status","kind":"scalar","type":"String"},{"name":"requiresReview","kind":"scalar","type":"Boolean"},{"name":"linkedInPostUrn","kind":"scalar","type":"String"},{"name":"publishedAt","kind":"scalar","type":"DateTime"},{"name":"usage","kind":"scalar","type":"Json"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"ContentDraftToWorkspace"},{"name":"repository","kind":"object","type":"Repository","relationName":"ContentDraftToRepository"},{"name":"versions","kind":"object","type":"DraftVersion","relationName":"ContentDraftToDraftVersion"},{"name":"linkedInPost","kind":"object","type":"LinkedInPost","relationName":"ContentDraftToLinkedInPost"},{"name":"evidenceSnapshots","kind":"object","type":"EvidenceSnapshot","relationName":"ContentDraftToEvidenceSnapshot"}],"dbName":null},"DraftVersion":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"draftId","kind":"scalar","type":"String"},{"name":"version","kind":"scalar","type":"Int"},{"name":"fullText","kind":"scalar","type":"String"},{"name":"editedById","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"draft","kind":"object","type":"ContentDraft","relationName":"ContentDraftToDraftVersion"},{"name":"editor","kind":"object","type":"User","relationName":"DraftVersionToUser"}],"dbName":null},"EvidenceSnapshot":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"draftId","kind":"scalar","type":"String"},{"name":"payload","kind":"scalar","type":"Json"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"EvidenceSnapshotToWorkspace"},{"name":"draft","kind":"object","type":"ContentDraft","relationName":"ContentDraftToEvidenceSnapshot"}],"dbName":null},"LinkedInPost":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"draftId","kind":"scalar","type":"String"},{"name":"urn","kind":"scalar","type":"String"},{"name":"publishedAt","kind":"scalar","type":"DateTime"},{"name":"draft","kind":"object","type":"ContentDraft","relationName":"ContentDraftToLinkedInPost"}],"dbName":null},"ProjectCard":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"repositoryId","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"role","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"startDate","kind":"scalar","type":"String"},{"name":"endDate","kind":"scalar","type":"String"},{"name":"technologies","kind":"scalar","type":"Json"},{"name":"links","kind":"scalar","type":"Json"},{"name":"syncStatus","kind":"scalar","type":"String"},{"name":"linkedInProjectId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"ProjectCardToWorkspace"},{"name":"repository","kind":"object","type":"Repository","relationName":"ProjectCardToRepository"}],"dbName":null},"AuditLog":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workspaceId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"action","kind":"scalar","type":"String"},{"name":"resourceType","kind":"scalar","type":"String"},{"name":"resourceId","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"workspace","kind":"object","type":"Workspace","relationName":"AuditLogToWorkspace"},{"name":"user","kind":"object","type":"User","relationName":"AuditLogToUser"}],"dbName":null}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = {
      getRuntime: /* @__PURE__ */ __name(() => require_query_engine_bg(), "getRuntime"),
      getQueryEngineWasmModule: /* @__PURE__ */ __name(async () => {
        const loader = (await Promise.resolve().then(() => (init_wasm_worker_loader(), wasm_worker_loader_exports))).default;
        const engine = (await loader).default;
        return engine;
      }, "getQueryEngineWasmModule")
    };
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient;
    Object.assign(exports, Prisma);
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/.prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = { ...require_wasm2() };
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/@prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      ...require_default()
    };
  }
});

// ../../packages/db/dist/index.js
var require_dist4 = __commonJS({
  "../../packages/db/dist/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prisma = void 0;
    exports.getPrisma = getPrisma7;
    exports.ensureUserWorkspace = ensureUserWorkspace;
    var serverless_1 = require_serverless();
    var adapter_neon_1 = require_dist3();
    var ws_1 = __importDefault(require_browser());
    if (typeof WebSocket === "undefined" && typeof ws_1.default !== "undefined") {
      serverless_1.neonConfig.webSocketConstructor = ws_1.default;
    }
    var prisma;
    if (typeof process !== "undefined" && process.env?.DATABASE_URL) {
      const { PrismaClient } = require_default2();
      const connectionString = process.env.DATABASE_URL;
      const pool = new serverless_1.Pool({ connectionString });
      const adapter = new adapter_neon_1.PrismaNeon(pool);
      exports.prisma = prisma = new PrismaClient({
        adapter,
        log: true ? ["error", "warn"] : ["error"]
      });
    } else {
      exports.prisma = prisma = void 0;
    }
    function getPrisma7(databaseUrl) {
      const { PrismaClient } = require_default2();
      const pool = new serverless_1.Pool({ connectionString: databaseUrl });
      const adapter = new adapter_neon_1.PrismaNeon(pool);
      return new PrismaClient({ adapter });
    }
    __name(getPrisma7, "getPrisma");
    __exportStar(require_default2(), exports);
    async function ensureUserWorkspace(userId, email, name) {
      const databaseUrl = globalThis.DATABASE_URL;
      if (!databaseUrl) {
        throw new Error("DATABASE_URL is not defined in the Worker environment.");
      }
      const prisma2 = getPrisma7(databaseUrl);
      const existing = await prisma2.workspaceMember.findFirst({
        where: { userId },
        select: { workspaceId: true }
      });
      if (existing) {
        return { workspaceId: existing.workspaceId };
      }
      const workspace = await prisma2.workspace.create({
        data: {
          name: name ? `${name}'s workspace` : `${email.split("@")[0]}'s workspace`,
          members: { create: { userId, role: "OWNER" } },
          settings: {
            create: {
              autoMode: "REVIEW_REQUIRED",
              maxPostsPerWeek: 3,
              privateReposEnabled: false
            }
          }
        }
      });
      return { workspaceId: workspace.id };
    }
    __name(ensureUserWorkspace, "ensureUserWorkspace");
  }
});

// .wrangler/tmp/bundle-jgGhTq/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-jgGhTq/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError2 = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError2 = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError2)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/request/constants.js
init_checked_fetch();
init_modules_watch_stub();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  if (/(?:^|\.)__proto__\./.test(key)) {
    return;
  }
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * `.bytes()` parses the request body as a `Uint8Array`.
   *
   * @see {@link https://hono.dev/docs/api/request#bytes}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.bytes()
   * })
   * ```
   */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var createResponseInstance = /* @__PURE__ */ __name((body, init) => new Response(body, init), "createResponseInstance");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/utils/constants.js
init_checked_fetch();
init_modules_watch_stub();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class _Hono {
  static {
    __name(this, "_Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler, r.basePath);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = this.getPath(request).slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler, baseRoutePath) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler
    };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/matcher.js
init_checked_fetch();
init_modules_watch_stub();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name(((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }), "match2");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class _Node {
  static {
    __name(this, "_Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = /* @__PURE__ */ __name((children) => {
  for (const _ in children) {
    return true;
  }
  return false;
}, "hasChildren");
var Node2 = class _Node2 {
  static {
    __name(this, "_Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          if (matcher instanceof RegExp) {
            if (partOffsets === null) {
              partOffsets = new Array(len);
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.substring(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (hasChildren(child.#children)) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/middleware/cors/index.js
init_checked_fetch();
init_modules_watch_stub();
var cors = /* @__PURE__ */ __name((options) => {
  const opts = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: [],
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        if (opts.credentials) {
          return (origin) => origin || null;
        }
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*" || opts.credentials) {
        set("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*" || opts.credentials) {
      c.header("Vary", "Origin", { append: true });
    }
  }, "cors2");
}, "cors");

// src/posthog.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/entrypoints/index.edge.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/error-tracking/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/error-tracking/autocapture.mjs
init_checked_fetch();
init_modules_watch_stub();
function makeUncaughtExceptionHandler(captureFn, onFatalFn) {
  let calledFatalError = false;
  return Object.assign((error) => {
    const userProvidedListenersCount = global.process.listeners("uncaughtException").filter((listener) => "domainUncaughtExceptionClear" !== listener.name && true !== listener._posthogErrorHandler).length;
    const processWouldExit = 0 === userProvidedListenersCount;
    captureFn(error, {
      mechanism: {
        type: "onuncaughtexception",
        handled: false
      }
    });
    if (!calledFatalError && processWouldExit) {
      calledFatalError = true;
      onFatalFn(error);
    }
  }, {
    _posthogErrorHandler: true
  });
}
__name(makeUncaughtExceptionHandler, "makeUncaughtExceptionHandler");
function addUncaughtExceptionListener(captureFn, onFatalFn) {
  globalThis.process?.on("uncaughtException", makeUncaughtExceptionHandler(captureFn, onFatalFn));
}
__name(addUncaughtExceptionListener, "addUncaughtExceptionListener");
function addUnhandledRejectionListener(captureFn) {
  globalThis.process?.on("unhandledRejection", (reason) => captureFn(reason, {
    mechanism: {
      type: "onunhandledrejection",
      handled: false
    }
  }));
}
__name(addUnhandledRejectionListener, "addUnhandledRejectionListener");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/featureFlagUtils.mjs
init_checked_fetch();
init_modules_watch_stub();
var normalizeFlagsResponse = /* @__PURE__ */ __name((flagsResponse) => {
  if ("flags" in flagsResponse) {
    const featureFlags = getFlagValuesFromFlags(flagsResponse.flags);
    const featureFlagPayloads = getPayloadsFromFlags(flagsResponse.flags);
    return {
      ...flagsResponse,
      featureFlags,
      featureFlagPayloads
    };
  }
  {
    const featureFlags = flagsResponse.featureFlags ?? {};
    const featureFlagPayloads = Object.fromEntries(Object.entries(flagsResponse.featureFlagPayloads || {}).map(([k, v]) => [
      k,
      parsePayload(v)
    ]));
    const flags = Object.fromEntries(Object.entries(featureFlags).map(([key, value]) => [
      key,
      getFlagDetailFromFlagAndPayload(key, value, featureFlagPayloads[key])
    ]));
    return {
      ...flagsResponse,
      featureFlags,
      featureFlagPayloads,
      flags
    };
  }
}, "normalizeFlagsResponse");
function getFlagDetailFromFlagAndPayload(key, value, payload) {
  return {
    key,
    enabled: "string" == typeof value ? true : value,
    variant: "string" == typeof value ? value : void 0,
    reason: void 0,
    metadata: {
      id: void 0,
      version: void 0,
      payload: payload ? JSON.stringify(payload) : void 0,
      description: void 0
    }
  };
}
__name(getFlagDetailFromFlagAndPayload, "getFlagDetailFromFlagAndPayload");
var getFlagValuesFromFlags = /* @__PURE__ */ __name((flags) => Object.fromEntries(Object.entries(flags ?? {}).map(([key, detail]) => [
  key,
  getFeatureFlagValue(detail)
]).filter(([, value]) => void 0 !== value)), "getFlagValuesFromFlags");
var getPayloadsFromFlags = /* @__PURE__ */ __name((flags) => {
  const safeFlags = flags ?? {};
  return Object.fromEntries(Object.keys(safeFlags).filter((flag) => {
    const details = safeFlags[flag];
    return details.enabled && details.metadata && void 0 !== details.metadata.payload;
  }).map((flag) => {
    const payload = safeFlags[flag].metadata?.payload;
    return [
      flag,
      payload ? parsePayload(payload) : void 0
    ];
  }));
}, "getPayloadsFromFlags");
var getFeatureFlagValue = /* @__PURE__ */ __name((detail) => void 0 === detail ? void 0 : detail.variant ?? detail.enabled, "getFeatureFlagValue");
var parsePayload = /* @__PURE__ */ __name((response) => {
  if ("string" != typeof response) return response;
  try {
    return JSON.parse(response);
  } catch {
    return response;
  }
}, "parsePayload");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/gzip.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/types.mjs
init_checked_fetch();
init_modules_watch_stub();
var types_PostHogPersistedProperty = /* @__PURE__ */ (function(PostHogPersistedProperty) {
  PostHogPersistedProperty["AnonymousId"] = "anonymous_id";
  PostHogPersistedProperty["DistinctId"] = "distinct_id";
  PostHogPersistedProperty["Props"] = "props";
  PostHogPersistedProperty["EnablePersonProcessing"] = "enable_person_processing";
  PostHogPersistedProperty["PersonMode"] = "person_mode";
  PostHogPersistedProperty["FeatureFlagDetails"] = "feature_flag_details";
  PostHogPersistedProperty["FeatureFlags"] = "feature_flags";
  PostHogPersistedProperty["FeatureFlagPayloads"] = "feature_flag_payloads";
  PostHogPersistedProperty["BootstrapFeatureFlagDetails"] = "bootstrap_feature_flag_details";
  PostHogPersistedProperty["BootstrapFeatureFlags"] = "bootstrap_feature_flags";
  PostHogPersistedProperty["BootstrapFeatureFlagPayloads"] = "bootstrap_feature_flag_payloads";
  PostHogPersistedProperty["OverrideFeatureFlags"] = "override_feature_flags";
  PostHogPersistedProperty["Queue"] = "queue";
  PostHogPersistedProperty["LogsQueue"] = "logs_queue";
  PostHogPersistedProperty["OptedOut"] = "opted_out";
  PostHogPersistedProperty["SessionId"] = "session_id";
  PostHogPersistedProperty["SessionStartTimestamp"] = "session_start_timestamp";
  PostHogPersistedProperty["SessionLastTimestamp"] = "session_timestamp";
  PostHogPersistedProperty["PersonProperties"] = "person_properties";
  PostHogPersistedProperty["GroupProperties"] = "group_properties";
  PostHogPersistedProperty["InstalledAppBuild"] = "installed_app_build";
  PostHogPersistedProperty["InstalledAppVersion"] = "installed_app_version";
  PostHogPersistedProperty["SessionReplay"] = "session_replay";
  PostHogPersistedProperty["SurveyLastSeenDate"] = "survey_last_seen_date";
  PostHogPersistedProperty["SurveysSeen"] = "surveys_seen";
  PostHogPersistedProperty["Surveys"] = "surveys";
  PostHogPersistedProperty["RemoteConfig"] = "remote_config";
  PostHogPersistedProperty["FlagsEndpointWasHit"] = "flags_endpoint_was_hit";
  PostHogPersistedProperty["DeviceId"] = "device_id";
  return PostHogPersistedProperty;
})({});

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/gzip.mjs
function isGzipSupported() {
  return "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
}
__name(isGzipSupported, "isGzipSupported");
var NATIVE_GZIP_VALIDATION_ERROR = "NativeGzipValidationError";
var GZIP_MAGIC_FIRST_BYTE = 31;
var GZIP_MAGIC_SECOND_BYTE = 139;
var GZIP_DEFLATE_METHOD = 8;
var hasGzipMagic = /* @__PURE__ */ __name((bytes) => bytes.length >= 2 && bytes[0] === GZIP_MAGIC_FIRST_BYTE && bytes[1] === GZIP_MAGIC_SECOND_BYTE, "hasGzipMagic");
var crc32Table;
var getCrc32Table = /* @__PURE__ */ __name(() => {
  if (crc32Table) return crc32Table;
  crc32Table = [];
  for (let i = 0; i < 256; i++) {
    let crc = i;
    for (let j = 0; j < 8; j++) crc = 1 & crc ? 3988292384 ^ crc >>> 1 : crc >>> 1;
    crc32Table[i] = crc >>> 0;
  }
  return crc32Table;
}, "getCrc32Table");
var crc32 = /* @__PURE__ */ __name((bytes) => {
  const table = getCrc32Table();
  let crc = 4294967295;
  for (let i = 0; i < bytes.length; i++) crc = table[(crc ^ bytes[i]) & 255] ^ crc >>> 8;
  return (4294967295 ^ crc) >>> 0;
}, "crc32");
var throwNativeGzipValidationError = /* @__PURE__ */ __name((reason) => {
  const error = new Error(`Native gzip produced invalid output: ${reason}`);
  error.name = NATIVE_GZIP_VALIDATION_ERROR;
  throw error;
}, "throwNativeGzipValidationError");
var validateNativeGzip = /* @__PURE__ */ __name(async (compressed, inputBytes) => {
  if (compressed.size < 18) throwNativeGzipValidationError("too-short");
  const header = new Uint8Array(await compressed.slice(0, 10).arrayBuffer());
  if (!hasGzipMagic(header) || header[2] !== GZIP_DEFLATE_METHOD) throwNativeGzipValidationError("invalid-header");
  const trailer = new DataView(await compressed.slice(compressed.size - 8).arrayBuffer());
  if (trailer.getUint32(0, true) !== crc32(inputBytes)) throwNativeGzipValidationError("invalid-crc");
  const inputSize = inputBytes.length >>> 0;
  if (trailer.getUint32(4, true) !== inputSize) throwNativeGzipValidationError("invalid-size");
}, "validateNativeGzip");
async function gzipCompress(input, isDebug = true, options) {
  try {
    const inputBytes = new TextEncoder().encode(input);
    const compressedStream = new CompressionStream("gzip");
    const writer = compressedStream.writable.getWriter();
    const writePromise = writer.write(inputBytes).then(() => writer.close()).catch(async (err) => {
      try {
        await writer.abort(err);
      } catch {
      }
      throw err;
    });
    const responsePromise = new Response(compressedStream.readable).blob();
    const [compressed] = await Promise.all([
      responsePromise,
      writePromise
    ]);
    await validateNativeGzip(compressed, inputBytes);
    return compressed;
  } catch (error) {
    if (options?.rethrow) throw error;
    if (isDebug) console.error("Failed to gzip compress data", error);
    return null;
  }
}
__name(gzipCompress, "gzipCompress");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/logs/logs-utils.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/bot-detection.mjs
init_checked_fetch();
init_modules_watch_stub();
var DEFAULT_BLOCKED_UA_STRS = [
  "amazonbot",
  "amazonproductbot",
  "app.hypefactors.com",
  "applebot",
  "archive.org_bot",
  "awariobot",
  "backlinksextendedbot",
  "baiduspider",
  "bingbot",
  "bingpreview",
  "chrome-lighthouse",
  "dataforseobot",
  "deepscan",
  "duckduckbot",
  "facebookexternal",
  "facebookcatalog",
  "http://yandex.com/bots",
  "hubspot",
  "ia_archiver",
  "leikibot",
  "linkedinbot",
  "meta-externalagent",
  "mj12bot",
  "msnbot",
  "nessus",
  "petalbot",
  "pinterest",
  "prerender",
  "rogerbot",
  "screaming frog",
  "sebot-wa",
  "sitebulb",
  "slackbot",
  "slurp",
  "trendictionbot",
  "turnitin",
  "twitterbot",
  "vercel-screenshot",
  "vercelbot",
  "yahoo! slurp",
  "yandexbot",
  "zoombot",
  "bot.htm",
  "bot.php",
  "(bot;",
  "bot/",
  "crawler",
  "ahrefsbot",
  "ahrefssiteaudit",
  "semrushbot",
  "siteauditbot",
  "splitsignalbot",
  "gptbot",
  "oai-searchbot",
  "chatgpt-user",
  "perplexitybot",
  "better uptime bot",
  "sentryuptimebot",
  "uptimerobot",
  "headlesschrome",
  "cypress",
  "google-hoteladsverifier",
  "adsbot-google",
  "apis-google",
  "duplexweb-google",
  "feedfetcher-google",
  "google favicon",
  "google web preview",
  "google-read-aloud",
  "googlebot",
  "googleother",
  "google-cloudvertexbot",
  "googleweblight",
  "mediapartners-google",
  "storebot-google",
  "google-inspectiontool",
  "bytespider"
];
var isBlockedUA = /* @__PURE__ */ __name(function(ua, customBlockedUserAgents = []) {
  if (!ua) return false;
  const uaLower = ua.toLowerCase();
  return DEFAULT_BLOCKED_UA_STRS.concat(customBlockedUserAgents).some((blockedUA) => {
    const blockedUaLower = blockedUA.toLowerCase();
    return -1 !== uaLower.indexOf(blockedUaLower);
  });
}, "isBlockedUA");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/bucketed-rate-limiter.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/number-utils.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/type-utils.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/string-utils.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/type-utils.mjs
var nativeIsArray = Array.isArray;
var ObjProto = Object.prototype;
var type_utils_hasOwnProperty = ObjProto.hasOwnProperty;
var type_utils_toString = ObjProto.toString;
var isArray = nativeIsArray || function(obj) {
  return "[object Array]" === type_utils_toString.call(obj);
};
var isObject = /* @__PURE__ */ __name((x) => x === Object(x) && !isArray(x), "isObject");
var isUndefined = /* @__PURE__ */ __name((x) => void 0 === x, "isUndefined");
var isString = /* @__PURE__ */ __name((x) => "[object String]" == type_utils_toString.call(x), "isString");
var isEmptyString = /* @__PURE__ */ __name((x) => isString(x) && 0 === x.trim().length, "isEmptyString");
var isNumber = /* @__PURE__ */ __name((x) => "[object Number]" == type_utils_toString.call(x) && x === x, "isNumber");
var isPlainError = /* @__PURE__ */ __name((x) => x instanceof Error, "isPlainError");
function isPrimitive(value) {
  return null === value || "object" != typeof value;
}
__name(isPrimitive, "isPrimitive");
function isBuiltin(candidate, className) {
  return Object.prototype.toString.call(candidate) === `[object ${className}]`;
}
__name(isBuiltin, "isBuiltin");
function isErrorEvent(event) {
  return isBuiltin(event, "ErrorEvent");
}
__name(isErrorEvent, "isErrorEvent");
function isEvent(candidate) {
  return "undefined" != typeof Event && isInstanceOf(candidate, Event);
}
__name(isEvent, "isEvent");
function isPlainObject(candidate) {
  return isBuiltin(candidate, "Object");
}
__name(isPlainObject, "isPlainObject");
function isInstanceOf(candidate, base) {
  try {
    return candidate instanceof base;
  } catch {
    return false;
  }
}
__name(isInstanceOf, "isInstanceOf");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/number-utils.mjs
function clampToRange(value, min, max, logger, fallbackValue) {
  if (min > max) {
    logger.warn("min cannot be greater than max.");
    min = max;
  }
  if (isNumber(value)) if (value > max) {
    logger.warn(" cannot be  greater than max: " + max + ". Using max value instead.");
    return max;
  } else {
    if (!(value < min)) return value;
    logger.warn(" cannot be less than min: " + min + ". Using min value instead.");
    return min;
  }
  logger.warn(" must be a number. using max or fallback. max: " + max + ", fallback: " + fallbackValue);
  return clampToRange(fallbackValue || max, min, max, logger);
}
__name(clampToRange, "clampToRange");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/bucketed-rate-limiter.mjs
var ONE_DAY_IN_MS = 864e5;
var BucketedRateLimiter = class {
  static {
    __name(this, "BucketedRateLimiter");
  }
  constructor(options) {
    this._buckets = {};
    this._onBucketRateLimited = options._onBucketRateLimited;
    this._bucketSize = clampToRange(options.bucketSize, 0, 100, options._logger);
    this._refillRate = clampToRange(options.refillRate, 0, this._bucketSize, options._logger);
    this._refillInterval = clampToRange(options.refillInterval, 0, ONE_DAY_IN_MS, options._logger);
  }
  _applyRefill(bucket, now) {
    const elapsedMs = now - bucket.lastAccess;
    const refillIntervals = Math.floor(elapsedMs / this._refillInterval);
    if (refillIntervals > 0) {
      const tokensToAdd = refillIntervals * this._refillRate;
      bucket.tokens = Math.min(bucket.tokens + tokensToAdd, this._bucketSize);
      bucket.lastAccess = bucket.lastAccess + refillIntervals * this._refillInterval;
    }
  }
  consumeRateLimit(key) {
    const now = Date.now();
    const keyStr = String(key);
    let bucket = this._buckets[keyStr];
    if (bucket) this._applyRefill(bucket, now);
    else {
      bucket = {
        tokens: this._bucketSize,
        lastAccess: now
      };
      this._buckets[keyStr] = bucket;
    }
    if (0 === bucket.tokens) return true;
    bucket.tokens--;
    if (0 === bucket.tokens) this._onBucketRateLimited?.(key);
    return 0 === bucket.tokens;
  }
  stop() {
    this._buckets = {};
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/promise-queue.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/vendor/uuidv7.mjs
init_checked_fetch();
init_modules_watch_stub();
var DIGITS = "0123456789abcdef";
var UUID = class _UUID {
  static {
    __name(this, "UUID");
  }
  constructor(bytes) {
    this.bytes = bytes;
  }
  static ofInner(bytes) {
    if (16 === bytes.length) return new _UUID(bytes);
    throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(unixTsMs, randA, randBHi, randBLo) {
    if (!Number.isInteger(unixTsMs) || !Number.isInteger(randA) || !Number.isInteger(randBHi) || !Number.isInteger(randBLo) || unixTsMs < 0 || randA < 0 || randBHi < 0 || randBLo < 0 || unixTsMs > 281474976710655 || randA > 4095 || randBHi > 1073741823 || randBLo > 4294967295) throw new RangeError("invalid field value");
    const bytes = new Uint8Array(16);
    bytes[0] = unixTsMs / 2 ** 40;
    bytes[1] = unixTsMs / 2 ** 32;
    bytes[2] = unixTsMs / 2 ** 24;
    bytes[3] = unixTsMs / 2 ** 16;
    bytes[4] = unixTsMs / 256;
    bytes[5] = unixTsMs;
    bytes[6] = 112 | randA >>> 8;
    bytes[7] = randA;
    bytes[8] = 128 | randBHi >>> 24;
    bytes[9] = randBHi >>> 16;
    bytes[10] = randBHi >>> 8;
    bytes[11] = randBHi;
    bytes[12] = randBLo >>> 24;
    bytes[13] = randBLo >>> 16;
    bytes[14] = randBLo >>> 8;
    bytes[15] = randBLo;
    return new _UUID(bytes);
  }
  static parse(uuid) {
    let hex;
    switch (uuid.length) {
      case 32:
        hex = /^[0-9a-f]{32}$/i.exec(uuid)?.[0];
        break;
      case 36:
        hex = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)?.slice(1, 6).join("");
        break;
      case 38:
        hex = /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(uuid)?.slice(1, 6).join("");
        break;
      case 45:
        hex = /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)?.slice(1, 6).join("");
        break;
      default:
        break;
    }
    if (hex) {
      const inner = new Uint8Array(16);
      for (let i = 0; i < 16; i += 4) {
        const n = parseInt(hex.substring(2 * i, 2 * i + 8), 16);
        inner[i + 0] = n >>> 24;
        inner[i + 1] = n >>> 16;
        inner[i + 2] = n >>> 8;
        inner[i + 3] = n;
      }
      return new _UUID(inner);
    }
    throw new SyntaxError("could not parse UUID string");
  }
  toString() {
    let text = "";
    for (let i = 0; i < this.bytes.length; i++) {
      text += DIGITS.charAt(this.bytes[i] >>> 4);
      text += DIGITS.charAt(15 & this.bytes[i]);
      if (3 === i || 5 === i || 7 === i || 9 === i) text += "-";
    }
    return text;
  }
  toHex() {
    let text = "";
    for (let i = 0; i < this.bytes.length; i++) {
      text += DIGITS.charAt(this.bytes[i] >>> 4);
      text += DIGITS.charAt(15 & this.bytes[i]);
    }
    return text;
  }
  toJSON() {
    return this.toString();
  }
  getVariant() {
    const n = this.bytes[8] >>> 4;
    if (n < 0) throw new Error("unreachable");
    if (n <= 7) return this.bytes.every((e) => 0 === e) ? "NIL" : "VAR_0";
    if (n <= 11) return "VAR_10";
    if (n <= 13) return "VAR_110";
    if (n <= 15) return this.bytes.every((e) => 255 === e) ? "MAX" : "VAR_RESERVED";
    else throw new Error("unreachable");
  }
  getVersion() {
    return "VAR_10" === this.getVariant() ? this.bytes[6] >>> 4 : void 0;
  }
  clone() {
    return new _UUID(this.bytes.slice(0));
  }
  equals(other) {
    return 0 === this.compareTo(other);
  }
  compareTo(other) {
    for (let i = 0; i < 16; i++) {
      const diff = this.bytes[i] - other.bytes[i];
      if (0 !== diff) return Math.sign(diff);
    }
    return 0;
  }
};
var V7Generator = class {
  static {
    __name(this, "V7Generator");
  }
  constructor(randomNumberGenerator) {
    this.timestamp = 0;
    this.counter = 0;
    this.random = randomNumberGenerator ?? getDefaultRandom();
  }
  generate() {
    return this.generateOrResetCore(Date.now(), 1e4);
  }
  generateOrAbort() {
    return this.generateOrAbortCore(Date.now(), 1e4);
  }
  generateOrResetCore(unixTsMs, rollbackAllowance) {
    let value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    if (void 0 === value) {
      this.timestamp = 0;
      value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
    }
    return value;
  }
  generateOrAbortCore(unixTsMs, rollbackAllowance) {
    const MAX_COUNTER = 4398046511103;
    if (!Number.isInteger(unixTsMs) || unixTsMs < 1 || unixTsMs > 281474976710655) throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
    if (rollbackAllowance < 0 || rollbackAllowance > 281474976710655) throw new RangeError("`rollbackAllowance` out of reasonable range");
    if (unixTsMs > this.timestamp) {
      this.timestamp = unixTsMs;
      this.resetCounter();
    } else {
      if (!(unixTsMs + rollbackAllowance >= this.timestamp)) return;
      this.counter++;
      if (this.counter > MAX_COUNTER) {
        this.timestamp++;
        this.resetCounter();
      }
    }
    return UUID.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
  }
  resetCounter() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
  generateV4() {
    const bytes = new Uint8Array(Uint32Array.of(this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32()).buffer);
    bytes[6] = 64 | bytes[6] >>> 4;
    bytes[8] = 128 | bytes[8] >>> 2;
    return UUID.ofInner(bytes);
  }
};
var getDefaultRandom = /* @__PURE__ */ __name(() => ({
  nextUint32: /* @__PURE__ */ __name(() => 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random()), "nextUint32")
}), "getDefaultRandom");
var defaultGenerator;
var uuidv7 = /* @__PURE__ */ __name(() => uuidv7obj().toString(), "uuidv7");
var uuidv7obj = /* @__PURE__ */ __name(() => (defaultGenerator || (defaultGenerator = new V7Generator())).generate(), "uuidv7obj");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/promise-queue.mjs
var PromiseQueue = class {
  static {
    __name(this, "PromiseQueue");
  }
  add(promise) {
    const promiseUUID = uuidv7();
    this.promiseByIds[promiseUUID] = promise;
    promise.catch(() => {
    }).finally(() => {
      delete this.promiseByIds[promiseUUID];
    });
    return promise;
  }
  async join() {
    let promises = Object.values(this.promiseByIds);
    let length = promises.length;
    while (length > 0) {
      await Promise.all(promises);
      promises = Object.values(this.promiseByIds);
      length = promises.length;
    }
  }
  get length() {
    return Object.keys(this.promiseByIds).length;
  }
  constructor() {
    this.promiseByIds = {};
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/logger.mjs
init_checked_fetch();
init_modules_watch_stub();
function createConsole(consoleLike = console) {
  const lockedMethods = {
    log: consoleLike.log.bind(consoleLike),
    warn: consoleLike.warn.bind(consoleLike),
    error: consoleLike.error.bind(consoleLike),
    debug: consoleLike.debug.bind(consoleLike)
  };
  return lockedMethods;
}
__name(createConsole, "createConsole");
var _createLogger = /* @__PURE__ */ __name((prefix, maybeCall, consoleLike) => {
  function _log(level, ...args) {
    maybeCall(() => {
      const consoleMethod = consoleLike[level];
      consoleMethod(prefix, ...args);
    });
  }
  __name(_log, "_log");
  const logger = {
    debug: /* @__PURE__ */ __name((...args) => {
      _log("debug", ...args);
    }, "debug"),
    info: /* @__PURE__ */ __name((...args) => {
      _log("log", ...args);
    }, "info"),
    warn: /* @__PURE__ */ __name((...args) => {
      _log("warn", ...args);
    }, "warn"),
    error: /* @__PURE__ */ __name((...args) => {
      _log("error", ...args);
    }, "error"),
    critical: /* @__PURE__ */ __name((...args) => {
      consoleLike["error"](prefix, ...args);
    }, "critical"),
    createLogger: /* @__PURE__ */ __name((additionalPrefix) => _createLogger(`${prefix} ${additionalPrefix}`, maybeCall, consoleLike), "createLogger")
  };
  return logger;
}, "_createLogger");
var passThrough = /* @__PURE__ */ __name((fn) => fn(), "passThrough");
function createLogger(prefix, maybeCall = passThrough) {
  return _createLogger(prefix, maybeCall, createConsole());
}
__name(createLogger, "createLogger");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/user-agent-utils.mjs
init_checked_fetch();
init_modules_watch_stub();
var MOBILE = "Mobile";
var IOS = "iOS";
var ANDROID = "Android";
var TABLET = "Tablet";
var ANDROID_TABLET = ANDROID + " " + TABLET;
var APPLE = "Apple";
var APPLE_WATCH = APPLE + " Watch";
var SAFARI = "Safari";
var BLACKBERRY = "BlackBerry";
var SAMSUNG = "Samsung";
var SAMSUNG_BROWSER = SAMSUNG + "Browser";
var SAMSUNG_INTERNET = SAMSUNG + " Internet";
var CHROME = "Chrome";
var CHROME_OS = CHROME + " OS";
var CHROME_IOS = CHROME + " " + IOS;
var INTERNET_EXPLORER = "Internet Explorer";
var INTERNET_EXPLORER_MOBILE = INTERNET_EXPLORER + " " + MOBILE;
var OPERA = "Opera";
var OPERA_MINI = OPERA + " Mini";
var EDGE = "Edge";
var MICROSOFT_EDGE = "Microsoft " + EDGE;
var FIREFOX = "Firefox";
var FIREFOX_IOS = FIREFOX + " " + IOS;
var NINTENDO = "Nintendo";
var PLAYSTATION = "PlayStation";
var XBOX = "Xbox";
var ANDROID_MOBILE = ANDROID + " " + MOBILE;
var MOBILE_SAFARI = MOBILE + " " + SAFARI;
var WINDOWS = "Windows";
var WINDOWS_PHONE = WINDOWS + " Phone";
var GENERIC = "Generic";
var GENERIC_MOBILE = GENERIC + " " + MOBILE.toLowerCase();
var GENERIC_TABLET = GENERIC + " " + TABLET.toLowerCase();
var KONQUEROR = "Konqueror";
var OCULUS_BROWSER = "Oculus Browser";
var BROWSER_VERSION_REGEX_SUFFIX = "(\\d+(\\.\\d+)?)";
var DEFAULT_BROWSER_VERSION_REGEX = new RegExp("Version/" + BROWSER_VERSION_REGEX_SUFFIX);
var XBOX_REGEX = new RegExp(XBOX, "i");
var PLAYSTATION_REGEX = new RegExp(PLAYSTATION + " \\w+", "i");
var NINTENDO_REGEX = new RegExp(NINTENDO + " \\w+", "i");
var BLACKBERRY_REGEX = new RegExp(BLACKBERRY + "|PlayBook|BB10", "i");
var windowsVersionMap = {
  "NT3.51": "NT 3.11",
  "NT4.0": "NT 4.0",
  "5.0": "2000",
  "5.1": "XP",
  "5.2": "XP",
  "6.0": "Vista",
  "6.1": "7",
  "6.2": "8",
  "6.3": "8.1",
  "6.4": "10",
  "10.0": "10"
};
var versionRegexes = {
  [INTERNET_EXPLORER_MOBILE]: [
    new RegExp("rv:" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [MICROSOFT_EDGE]: [
    new RegExp(EDGE + "?\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [CHROME]: [
    new RegExp("(" + CHROME + "|CrMo)\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [CHROME_IOS]: [
    new RegExp("CriOS\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  "UC Browser": [
    new RegExp("(UCBrowser|UCWEB)\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [SAFARI]: [
    DEFAULT_BROWSER_VERSION_REGEX
  ],
  [MOBILE_SAFARI]: [
    DEFAULT_BROWSER_VERSION_REGEX
  ],
  [OPERA]: [
    new RegExp("(" + OPERA + "|OPR)\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [FIREFOX]: [
    new RegExp(FIREFOX + "\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [FIREFOX_IOS]: [
    new RegExp("FxiOS\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [KONQUEROR]: [
    new RegExp("Konqueror[:/]?" + BROWSER_VERSION_REGEX_SUFFIX, "i")
  ],
  [BLACKBERRY]: [
    new RegExp(BLACKBERRY + " " + BROWSER_VERSION_REGEX_SUFFIX),
    DEFAULT_BROWSER_VERSION_REGEX
  ],
  [ANDROID_MOBILE]: [
    new RegExp("android\\s" + BROWSER_VERSION_REGEX_SUFFIX, "i")
  ],
  [SAMSUNG_INTERNET]: [
    new RegExp(SAMSUNG_BROWSER + "\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [OCULUS_BROWSER]: [
    new RegExp("OculusBrowser\\/" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  [INTERNET_EXPLORER]: [
    new RegExp("(rv:|MSIE )" + BROWSER_VERSION_REGEX_SUFFIX)
  ],
  Mozilla: [
    new RegExp("rv:" + BROWSER_VERSION_REGEX_SUFFIX)
  ]
};
var osMatchers = [
  [
    new RegExp(XBOX + "; " + XBOX + " (.*?)[);]", "i"),
    (match2) => [
      XBOX,
      match2 && match2[1] || ""
    ]
  ],
  [
    new RegExp(NINTENDO, "i"),
    [
      NINTENDO,
      ""
    ]
  ],
  [
    new RegExp(PLAYSTATION, "i"),
    [
      PLAYSTATION,
      ""
    ]
  ],
  [
    BLACKBERRY_REGEX,
    [
      BLACKBERRY,
      ""
    ]
  ],
  [
    new RegExp(WINDOWS, "i"),
    (_, user_agent) => {
      if (/Phone/.test(user_agent) || /WPDesktop/.test(user_agent)) return [
        WINDOWS_PHONE,
        ""
      ];
      if (new RegExp(MOBILE).test(user_agent) && !/IEMobile\b/.test(user_agent)) return [
        WINDOWS + " " + MOBILE,
        ""
      ];
      const match2 = /Windows NT ([0-9.]+)/i.exec(user_agent);
      if (match2 && match2[1]) {
        const version2 = match2[1];
        let osVersion = windowsVersionMap[version2] || "";
        if (/arm/i.test(user_agent)) osVersion = "RT";
        return [
          WINDOWS,
          osVersion
        ];
      }
      return [
        WINDOWS,
        ""
      ];
    }
  ],
  [
    /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
    (match2) => {
      if (match2 && match2[3]) {
        const versionParts = [
          match2[3],
          match2[4],
          match2[5] || "0"
        ];
        return [
          IOS,
          versionParts.join(".")
        ];
      }
      return [
        IOS,
        ""
      ];
    }
  ],
  [
    /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
    (match2) => {
      let version2 = "";
      if (match2 && match2.length >= 3) version2 = isUndefined(match2[2]) ? match2[3] : match2[2];
      return [
        "watchOS",
        version2
      ];
    }
  ],
  [
    new RegExp("(" + ANDROID + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + ANDROID + ")", "i"),
    (match2) => {
      if (match2 && match2[2]) {
        const versionParts = [
          match2[2],
          match2[3],
          match2[4] || "0"
        ];
        return [
          ANDROID,
          versionParts.join(".")
        ];
      }
      return [
        ANDROID,
        ""
      ];
    }
  ],
  [
    /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
    (match2) => {
      const result = [
        "Mac OS X",
        ""
      ];
      if (match2 && match2[1]) {
        const versionParts = [
          match2[1],
          match2[2],
          match2[3] || "0"
        ];
        result[1] = versionParts.join(".");
      }
      return result;
    }
  ],
  [
    /Mac/i,
    [
      "Mac OS X",
      ""
    ]
  ],
  [
    /CrOS/,
    [
      CHROME_OS,
      ""
    ]
  ],
  [
    /Linux|debian/i,
    [
      "Linux",
      ""
    ]
  ]
];

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/utils/index.mjs
var STRING_FORMAT = "utf8";
function removeTrailingSlash(url) {
  return url?.replace(/\/+$/, "");
}
__name(removeTrailingSlash, "removeTrailingSlash");
async function retriable(fn, props) {
  let lastError = null;
  for (let i = 0; i < props.retryCount + 1; i++) {
    if (i > 0) await new Promise((r) => setTimeout(r, props.retryDelay));
    try {
      const res = await fn();
      return res;
    } catch (e) {
      lastError = e;
      if (!props.retryCheck(e)) throw e;
    }
  }
  throw lastError;
}
__name(retriable, "retriable");
function currentISOTime() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
__name(currentISOTime, "currentISOTime");
function safeSetTimeout(fn, timeout) {
  const t = setTimeout(fn, timeout);
  t?.unref && t?.unref();
  return t;
}
__name(safeSetTimeout, "safeSetTimeout");
var isError = /* @__PURE__ */ __name((x) => x instanceof Error, "isError");
function allSettled(promises) {
  return Promise.all(promises.map((p) => (p ?? Promise.resolve()).then((value) => ({
    status: "fulfilled",
    value
  }), (reason) => ({
    status: "rejected",
    reason
  }))));
}
__name(allSettled, "allSettled");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/logs/logs-utils.mjs
var OTLP_SEVERITY_MAP = {
  trace: {
    text: "TRACE",
    number: 1
  },
  debug: {
    text: "DEBUG",
    number: 5
  },
  info: {
    text: "INFO",
    number: 9
  },
  warn: {
    text: "WARN",
    number: 13
  },
  error: {
    text: "ERROR",
    number: 17
  },
  fatal: {
    text: "FATAL",
    number: 21
  }
};
var DEFAULT_OTLP_SEVERITY = OTLP_SEVERITY_MAP.info;

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/logs/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/surveys/validation.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/cookie.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/posthog-core.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/posthog-core-stateless.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/eventemitter.mjs
init_checked_fetch();
init_modules_watch_stub();
var SimpleEventEmitter = class {
  static {
    __name(this, "SimpleEventEmitter");
  }
  constructor() {
    this.events = {};
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
    return () => {
      this.events[event] = this.events[event].filter((x) => x !== listener);
    };
  }
  emit(event, payload) {
    for (const listener of this.events[event] || []) listener(payload);
    for (const listener of this.events["*"] || []) listener(event, payload);
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/posthog-core-stateless.mjs
var PostHogFetchHttpError = class extends Error {
  static {
    __name(this, "PostHogFetchHttpError");
  }
  constructor(response, reqByteLength) {
    super("HTTP error while fetching PostHog: status=" + response.status + ", reqByteLength=" + reqByteLength), this.response = response, this.reqByteLength = reqByteLength, this.name = "PostHogFetchHttpError";
  }
  get status() {
    return this.response.status;
  }
  get text() {
    return this.response.text();
  }
  get json() {
    return this.response.json();
  }
};
var PostHogFetchNetworkError = class extends Error {
  static {
    __name(this, "PostHogFetchNetworkError");
  }
  constructor(error) {
    super("Network error while fetching PostHog", error instanceof Error ? {
      cause: error
    } : {}), this.error = error, this.name = "PostHogFetchNetworkError";
  }
};
async function logFlushError(err) {
  if (err instanceof PostHogFetchHttpError) {
    let text = "";
    try {
      text = await err.text;
    } catch {
    }
    console.error(`Error while flushing PostHog: message=${err.message}, response body=${text}`, err);
  } else console.error("Error while flushing PostHog", err);
  return Promise.resolve();
}
__name(logFlushError, "logFlushError");
function isPostHogFetchError(err) {
  return "object" == typeof err && (err instanceof PostHogFetchHttpError || isPostHogFetchNetworkError(err));
}
__name(isPostHogFetchError, "isPostHogFetchError");
function isPostHogFetchNetworkError(err) {
  return err instanceof PostHogFetchNetworkError;
}
__name(isPostHogFetchNetworkError, "isPostHogFetchNetworkError");
function isPostHogFetchContentTooLargeError(err) {
  return "object" == typeof err && err instanceof PostHogFetchHttpError && 413 === err.status;
}
__name(isPostHogFetchContentTooLargeError, "isPostHogFetchContentTooLargeError");
var PostHogCoreStateless = class {
  static {
    __name(this, "PostHogCoreStateless");
  }
  constructor(apiKey, options = {}) {
    this.flushPromise = null;
    this.shutdownPromise = null;
    this.promiseQueue = new PromiseQueue();
    this._events = new SimpleEventEmitter();
    this._isInitialized = false;
    const normalizedApiKey = "string" == typeof apiKey ? apiKey.trim() : "";
    const normalizedHost = "string" == typeof options.host ? options.host.trim() : "";
    const missingApiKey = !normalizedApiKey;
    this._logger = createLogger("[PostHog]", this.logMsgIfDebug.bind(this));
    if (missingApiKey) this._logger.error("You must pass your PostHog project's api key. The client will be disabled.");
    this.apiKey = normalizedApiKey;
    this.host = removeTrailingSlash(normalizedHost || "https://us.i.posthog.com");
    this.flushAt = options.flushAt ? Math.max(options.flushAt, 1) : 20;
    this.maxBatchSize = Math.max(this.flushAt, options.maxBatchSize ?? 100);
    this.maxQueueSize = Math.max(this.flushAt, options.maxQueueSize ?? 1e3);
    this.flushInterval = options.flushInterval ?? 1e4;
    this.preloadFeatureFlags = options.preloadFeatureFlags ?? true;
    this.defaultOptIn = options.defaultOptIn ?? true;
    this.disableSurveys = options.disableSurveys ?? false;
    this._retryOptions = {
      retryCount: options.fetchRetryCount ?? 3,
      retryDelay: options.fetchRetryDelay ?? 3e3,
      retryCheck: isPostHogFetchError
    };
    this.requestTimeout = options.requestTimeout ?? 1e4;
    this.featureFlagsRequestTimeoutMs = options.featureFlagsRequestTimeoutMs ?? 3e3;
    this.remoteConfigRequestTimeoutMs = options.remoteConfigRequestTimeoutMs ?? 3e3;
    this.disableGeoip = options.disableGeoip ?? true;
    this.disabled = (options.disabled ?? false) || missingApiKey;
    this.historicalMigration = options?.historicalMigration ?? false;
    this._initPromise = Promise.resolve();
    this._isInitialized = true;
    this.evaluationContexts = options?.evaluationContexts ?? options?.evaluationEnvironments;
    if (options?.evaluationEnvironments && !options?.evaluationContexts) this._logger.warn("evaluationEnvironments is deprecated. Use evaluationContexts instead. This property will be removed in a future version.");
    this.disableCompression = !isGzipSupported() || (options?.disableCompression ?? false);
  }
  logMsgIfDebug(fn) {
    if (this.isDebug) fn();
  }
  wrap(fn) {
    if (this.disabled) return void this._logger.warn("The client is disabled");
    if (this._isInitialized) return fn();
    this._initPromise.then(() => fn());
  }
  getCommonEventProperties() {
    return {
      $lib: this.getLibraryId(),
      $lib_version: this.getLibraryVersion()
    };
  }
  get optedOut() {
    return this.getPersistedProperty(types_PostHogPersistedProperty.OptedOut) ?? !this.defaultOptIn;
  }
  async optIn() {
    this.wrap(() => {
      this.setPersistedProperty(types_PostHogPersistedProperty.OptedOut, false);
    });
  }
  async optOut() {
    this.wrap(() => {
      this.setPersistedProperty(types_PostHogPersistedProperty.OptedOut, true);
    });
  }
  on(event, cb) {
    return this._events.on(event, cb);
  }
  debug(enabled = true) {
    this.removeDebugCallback?.();
    if (enabled) {
      const removeDebugCallback = this.on("*", (event, payload) => this._logger.info(event, payload));
      this.removeDebugCallback = () => {
        removeDebugCallback();
        this.removeDebugCallback = void 0;
      };
    }
  }
  get isDebug() {
    return !!this.removeDebugCallback;
  }
  get isDisabled() {
    return this.disabled;
  }
  buildPayload(payload) {
    return {
      distinct_id: payload.distinct_id,
      event: payload.event,
      properties: {
        ...payload.properties || {},
        ...this.getCommonEventProperties()
      }
    };
  }
  addPendingPromise(promise) {
    return this.promiseQueue.add(promise);
  }
  identifyStateless(distinctId, properties, options) {
    this.wrap(() => {
      const payload = {
        ...this.buildPayload({
          distinct_id: distinctId,
          event: "$identify",
          properties
        })
      };
      this.enqueue("identify", payload, options);
    });
  }
  async identifyStatelessImmediate(distinctId, properties, options) {
    const payload = {
      ...this.buildPayload({
        distinct_id: distinctId,
        event: "$identify",
        properties
      })
    };
    await this.sendImmediate("identify", payload, options);
  }
  captureStateless(distinctId, event, properties, options) {
    this.wrap(() => {
      const payload = this.buildPayload({
        distinct_id: distinctId,
        event,
        properties
      });
      this.enqueue("capture", payload, options);
    });
  }
  async captureStatelessImmediate(distinctId, event, properties, options) {
    const payload = this.buildPayload({
      distinct_id: distinctId,
      event,
      properties
    });
    await this.sendImmediate("capture", payload, options);
  }
  aliasStateless(alias, distinctId, properties, options) {
    this.wrap(() => {
      const payload = this.buildPayload({
        event: "$create_alias",
        distinct_id: distinctId,
        properties: {
          ...properties || {},
          distinct_id: distinctId,
          alias
        }
      });
      this.enqueue("alias", payload, options);
    });
  }
  async aliasStatelessImmediate(alias, distinctId, properties, options) {
    const payload = this.buildPayload({
      event: "$create_alias",
      distinct_id: distinctId,
      properties: {
        ...properties || {},
        distinct_id: distinctId,
        alias
      }
    });
    await this.sendImmediate("alias", payload, options);
  }
  groupIdentifyStateless(groupType, groupKey, groupProperties, options, distinctId, eventProperties) {
    this.wrap(() => {
      const payload = this.buildPayload({
        distinct_id: distinctId || `$${groupType}_${groupKey}`,
        event: "$groupidentify",
        properties: {
          $group_type: groupType,
          $group_key: groupKey,
          $group_set: groupProperties || {},
          ...eventProperties || {}
        }
      });
      this.enqueue("capture", payload, options);
    });
  }
  async getRemoteConfig() {
    await this._initPromise;
    let host = this.host;
    if ("https://us.i.posthog.com" === host) host = "https://us-assets.i.posthog.com";
    else if ("https://eu.i.posthog.com" === host) host = "https://eu-assets.i.posthog.com";
    const url = `${host}/array/${this.apiKey}/config`;
    const fetchOptions = {
      method: "GET",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json"
      }
    };
    return this.fetchWithRetry(url, fetchOptions, {
      retryCount: 0
    }, this.remoteConfigRequestTimeoutMs).then((response) => response.json()).catch((error) => {
      this._logger.error("Remote config could not be loaded", error);
      this._events.emit("error", error);
    });
  }
  async getFlags(distinctId, groups = {}, personProperties = {}, groupProperties = {}, extraPayload = {}, fetchConfig = false) {
    await this._initPromise;
    const configParam = fetchConfig ? "&config=true" : "";
    const url = `${this.host}/flags/?v=2${configParam}`;
    const requestData = {
      token: this.apiKey,
      distinct_id: distinctId,
      groups,
      person_properties: personProperties,
      group_properties: groupProperties,
      ...extraPayload
    };
    if (personProperties.$device_id) requestData.$device_id = personProperties.$device_id;
    if (this.evaluationContexts && this.evaluationContexts.length > 0) requestData.evaluation_contexts = this.evaluationContexts;
    const fetchOptions = {
      method: "POST",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    };
    this._logger.info("Flags URL", url);
    return this.fetchWithRetry(url, fetchOptions, {
      retryCount: 0
    }, this.featureFlagsRequestTimeoutMs).then((response) => response.json()).then((response) => ({
      success: true,
      response: normalizeFlagsResponse(response)
    })).catch((error) => {
      this._events.emit("error", error);
      return {
        success: false,
        error: this.categorizeRequestError(error)
      };
    });
  }
  categorizeRequestError(error) {
    if (error instanceof PostHogFetchHttpError) return {
      type: "api_error",
      statusCode: error.status
    };
    if (error instanceof PostHogFetchNetworkError) {
      const cause = error.error;
      if (cause instanceof Error && ("AbortError" === cause.name || "TimeoutError" === cause.name)) return {
        type: "timeout"
      };
      return {
        type: "connection_error"
      };
    }
    return {
      type: "unknown_error"
    };
  }
  async getFeatureFlagStateless(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip) {
    await this._initPromise;
    const flagDetailResponse = await this.getFeatureFlagDetailStateless(key, distinctId, groups, personProperties, groupProperties, disableGeoip);
    if (void 0 === flagDetailResponse) return {
      response: void 0,
      requestId: void 0
    };
    let response = getFeatureFlagValue(flagDetailResponse.response);
    if (void 0 === response) response = false;
    return {
      response,
      requestId: flagDetailResponse.requestId
    };
  }
  async getFeatureFlagDetailStateless(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip) {
    await this._initPromise;
    const flagsResponse = await this.getFeatureFlagDetailsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, [
      key
    ]);
    if (void 0 === flagsResponse) return;
    const featureFlags = flagsResponse.flags;
    const flagDetail = featureFlags[key];
    return {
      response: flagDetail,
      requestId: flagsResponse.requestId,
      evaluatedAt: flagsResponse.evaluatedAt
    };
  }
  async getFeatureFlagPayloadStateless(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip) {
    await this._initPromise;
    const payloads = await this.getFeatureFlagPayloadsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, [
      key
    ]);
    if (!payloads) return;
    const response = payloads[key];
    if (void 0 === response) return null;
    return response;
  }
  async getFeatureFlagPayloadsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    const payloads = (await this.getFeatureFlagsAndPayloadsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, flagKeysToEvaluate)).payloads;
    return payloads;
  }
  async getFeatureFlagsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    return await this.getFeatureFlagsAndPayloadsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, flagKeysToEvaluate);
  }
  async getFeatureFlagsAndPayloadsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    const featureFlagDetails = await this.getFeatureFlagDetailsStateless(distinctId, groups, personProperties, groupProperties, disableGeoip, flagKeysToEvaluate);
    if (!featureFlagDetails) return {
      flags: void 0,
      payloads: void 0,
      requestId: void 0
    };
    return {
      flags: featureFlagDetails.featureFlags,
      payloads: featureFlagDetails.featureFlagPayloads,
      requestId: featureFlagDetails.requestId
    };
  }
  async getFeatureFlagDetailsStateless(distinctId, groups = {}, personProperties = {}, groupProperties = {}, disableGeoip, flagKeysToEvaluate) {
    await this._initPromise;
    const extraPayload = {};
    if (disableGeoip ?? this.disableGeoip) extraPayload["geoip_disable"] = true;
    if (flagKeysToEvaluate) extraPayload["flag_keys_to_evaluate"] = flagKeysToEvaluate;
    const result = await this.getFlags(distinctId, groups, personProperties, groupProperties, extraPayload);
    if (!result.success) return;
    const flagsResponse = result.response;
    if (flagsResponse.errorsWhileComputingFlags) console.error("[FEATURE FLAGS] Error while computing feature flags, some flags may be missing or incorrect. Learn more at https://posthog.com/docs/feature-flags/best-practices");
    if (flagsResponse.quotaLimited?.includes("feature_flags")) {
      console.warn("[FEATURE FLAGS] Feature flags quota limit exceeded - feature flags unavailable. Learn more about billing limits at https://posthog.com/docs/billing/limits-alerts");
      return {
        flags: {},
        featureFlags: {},
        featureFlagPayloads: {},
        requestId: flagsResponse?.requestId,
        quotaLimited: flagsResponse.quotaLimited
      };
    }
    return flagsResponse;
  }
  async getSurveysStateless() {
    await this._initPromise;
    if (this.disabled) return [];
    if (true === this.disableSurveys) {
      this._logger.info("Loading surveys is disabled.");
      return [];
    }
    const url = `${this.host}/api/surveys/?token=${this.apiKey}`;
    const fetchOptions = {
      method: "GET",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json"
      }
    };
    const response = await this.fetchWithRetry(url, fetchOptions).then((response2) => {
      if (200 !== response2.status || !response2.json) {
        const msg = `Surveys API could not be loaded: ${response2.status}`;
        const error = new Error(msg);
        this._logger.error(error);
        this._events.emit("error", new Error(msg));
        return;
      }
      return response2.json();
    }).catch((error) => {
      this._logger.error("Surveys API could not be loaded", error);
      this._events.emit("error", error);
    });
    const newSurveys = response?.surveys;
    if (newSurveys) this._logger.info("Surveys fetched from API: ", JSON.stringify(newSurveys));
    return newSurveys ?? [];
  }
  get props() {
    if (!this._props) this._props = this.getPersistedProperty(types_PostHogPersistedProperty.Props);
    return this._props || {};
  }
  set props(val) {
    this._props = val;
  }
  async register(properties) {
    this.wrap(() => {
      this.props = {
        ...this.props,
        ...properties
      };
      this.setPersistedProperty(types_PostHogPersistedProperty.Props, this.props);
    });
  }
  async unregister(property) {
    this.wrap(() => {
      delete this.props[property];
      this.setPersistedProperty(types_PostHogPersistedProperty.Props, this.props);
    });
  }
  processBeforeEnqueue(message) {
    return message;
  }
  async flushStorage() {
  }
  enqueue(type, _message, options) {
    this.wrap(() => {
      if (this.optedOut) return void this._events.emit(type, "Library is disabled. Not sending event. To re-enable, call posthog.optIn()");
      let message = this.prepareMessage(type, _message, options);
      message = this.processBeforeEnqueue(message);
      if (null === message) return;
      const queue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
      if (queue.length >= this.maxQueueSize) {
        queue.shift();
        this._logger.info("Queue is full, the oldest event is dropped.");
      }
      queue.push({
        message
      });
      this.setPersistedProperty(types_PostHogPersistedProperty.Queue, queue);
      this._events.emit(type, message);
      if (queue.length >= this.flushAt) this.flushBackground();
      if (this.flushInterval && !this._flushTimer) this._flushTimer = safeSetTimeout(() => this.flushBackground(), this.flushInterval);
    });
  }
  async sendImmediate(type, _message, options) {
    if (this.disabled) return void this._logger.warn("The client is disabled");
    if (!this._isInitialized) await this._initPromise;
    if (this.optedOut) return void this._events.emit(type, "Library is disabled. Not sending event. To re-enable, call posthog.optIn()");
    let message = this.prepareMessage(type, _message, options);
    message = this.processBeforeEnqueue(message);
    if (null === message) return;
    const data = {
      api_key: this.apiKey,
      batch: [
        message
      ],
      sent_at: currentISOTime()
    };
    if (this.historicalMigration) data.historical_migration = true;
    const payload = JSON.stringify(data);
    const url = `${this.host}/batch/`;
    const gzippedPayload = this.disableCompression ? null : await gzipCompress(payload, this.isDebug);
    const fetchOptions = {
      method: "POST",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json",
        ...null !== gzippedPayload && {
          "Content-Encoding": "gzip"
        }
      },
      body: gzippedPayload || payload
    };
    try {
      const response = await this.fetchWithRetry(url, fetchOptions);
      await response.body?.cancel()?.catch(() => {
      });
    } catch (err) {
      this._events.emit("error", err);
    }
  }
  prepareMessage(type, _message, options) {
    const message = {
      ..._message,
      type,
      library: this.getLibraryId(),
      library_version: this.getLibraryVersion(),
      timestamp: options?.timestamp ? options?.timestamp : currentISOTime(),
      uuid: options?.uuid ? options.uuid : uuidv7()
    };
    const addGeoipDisableProperty = options?.disableGeoip ?? this.disableGeoip;
    if (addGeoipDisableProperty) {
      if (!message.properties) message.properties = {};
      message["properties"]["$geoip_disable"] = true;
    }
    if (message.distinctId) {
      message.distinct_id = message.distinctId;
      delete message.distinctId;
    }
    return message;
  }
  clearFlushTimer() {
    if (this._flushTimer) {
      clearTimeout(this._flushTimer);
      this._flushTimer = void 0;
    }
  }
  flushBackground() {
    this.flush().catch(async (err) => {
      await logFlushError(err);
    });
  }
  async flush() {
    if (this.disabled) return;
    const nextFlushPromise = allSettled([
      this.flushPromise
    ]).then(() => this._flush());
    this.flushPromise = nextFlushPromise;
    this.addPendingPromise(nextFlushPromise);
    allSettled([
      nextFlushPromise
    ]).then(() => {
      if (this.flushPromise === nextFlushPromise) this.flushPromise = null;
    });
    return nextFlushPromise;
  }
  getCustomHeaders() {
    const customUserAgent = this.getCustomUserAgent();
    const headers = {};
    if (customUserAgent && "" !== customUserAgent) headers["User-Agent"] = customUserAgent;
    return headers;
  }
  async _flush() {
    this.clearFlushTimer();
    await this._initPromise;
    let queue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
    if (!queue.length) return;
    const sentMessages = [];
    const originalQueueLength = queue.length;
    while (queue.length > 0 && sentMessages.length < originalQueueLength) {
      const batchItems = queue.slice(0, this.maxBatchSize);
      const batchMessages = batchItems.map((item) => item.message);
      const persistQueueChange = /* @__PURE__ */ __name(async () => {
        const refreshedQueue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
        const newQueue = refreshedQueue.slice(batchItems.length);
        this.setPersistedProperty(types_PostHogPersistedProperty.Queue, newQueue);
        queue = newQueue;
        await this.flushStorage();
      }, "persistQueueChange");
      const data = {
        api_key: this.apiKey,
        batch: batchMessages,
        sent_at: currentISOTime()
      };
      if (this.historicalMigration) data.historical_migration = true;
      const payload = JSON.stringify(data);
      const url = `${this.host}/batch/`;
      const gzippedPayload = this.disableCompression ? null : await gzipCompress(payload, this.isDebug);
      const fetchOptions = {
        method: "POST",
        headers: {
          ...this.getCustomHeaders(),
          "Content-Type": "application/json",
          ...null !== gzippedPayload && {
            "Content-Encoding": "gzip"
          }
        },
        body: gzippedPayload || payload
      };
      const retryOptions = {
        retryCheck: /* @__PURE__ */ __name((err) => {
          if (isPostHogFetchContentTooLargeError(err)) return false;
          return isPostHogFetchError(err);
        }, "retryCheck")
      };
      try {
        const response = await this.fetchWithRetry(url, fetchOptions, retryOptions);
        await response.body?.cancel()?.catch(() => {
        });
      } catch (err) {
        if (isPostHogFetchContentTooLargeError(err) && batchMessages.length > 1) {
          this.maxBatchSize = Math.max(1, Math.floor(batchMessages.length / 2));
          this._logger.warn(`Received 413 when sending batch of size ${batchMessages.length}, reducing batch size to ${this.maxBatchSize}`);
          continue;
        }
        if (!(err instanceof PostHogFetchNetworkError)) await persistQueueChange();
        this._events.emit("error", err);
        throw err;
      }
      await persistQueueChange();
      sentMessages.push(...batchMessages);
    }
    this._events.emit("flush", sentMessages);
  }
  async _sendLogsBatch(payload) {
    if (this.disabled) return {
      kind: "fatal",
      error: new Error("The client is disabled")
    };
    const serialized = JSON.stringify(payload);
    const url = `${this.host}/i/v1/logs?token=${encodeURIComponent(this.apiKey)}`;
    const gzippedPayload = this.disableCompression ? null : await gzipCompress(serialized, this.isDebug);
    const fetchOptions = {
      method: "POST",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json",
        ...null !== gzippedPayload && {
          "Content-Encoding": "gzip"
        }
      },
      body: gzippedPayload || serialized
    };
    try {
      await this.fetchWithRetry(url, fetchOptions, {
        retryCheck: /* @__PURE__ */ __name((err) => {
          if (isPostHogFetchContentTooLargeError(err)) return false;
          return isPostHogFetchError(err);
        }, "retryCheck")
      });
      return {
        kind: "ok"
      };
    } catch (err) {
      if (isPostHogFetchContentTooLargeError(err)) return {
        kind: "too-large"
      };
      if (err instanceof PostHogFetchNetworkError) return {
        kind: "retry-later",
        error: err
      };
      return {
        kind: "fatal",
        error: err
      };
    }
  }
  async fetchWithRetry(url, options, retryOptions, requestTimeout) {
    const body = options.body ? options.body : "";
    let reqByteLength = -1;
    try {
      reqByteLength = body instanceof Blob ? body.size : Buffer.byteLength(body, STRING_FORMAT);
    } catch {
      if (body instanceof Blob) reqByteLength = body.size;
      else {
        const encoded = new TextEncoder().encode(body);
        reqByteLength = encoded.length;
      }
    }
    return await retriable(async () => {
      const ctrl = new AbortController();
      const timeoutMs = requestTimeout ?? this.requestTimeout;
      const timer = safeSetTimeout(() => ctrl.abort(), timeoutMs);
      let res = null;
      try {
        res = await this.fetch(url, {
          signal: ctrl.signal,
          ...options
        });
      } catch (e) {
        throw new PostHogFetchNetworkError(e);
      } finally {
        clearTimeout(timer);
      }
      const isNoCors = "no-cors" === options.mode;
      if (!isNoCors && (res.status < 200 || res.status >= 400)) throw new PostHogFetchHttpError(res, reqByteLength);
      return res;
    }, {
      ...this._retryOptions,
      ...retryOptions
    });
  }
  async _shutdown(shutdownTimeoutMs = 3e4) {
    await this._initPromise;
    let hasTimedOut = false;
    this.clearFlushTimer();
    if (this.disabled) return;
    const doShutdown = /* @__PURE__ */ __name(async () => {
      try {
        await this.promiseQueue.join();
        while (true) {
          const queue = this.getPersistedProperty(types_PostHogPersistedProperty.Queue) || [];
          if (0 === queue.length) break;
          await this.flush();
          if (hasTimedOut) break;
        }
      } catch (e) {
        if (!isPostHogFetchError(e)) throw e;
        await logFlushError(e);
      }
    }, "doShutdown");
    let timeoutHandle;
    try {
      return await Promise.race([
        new Promise((_, reject) => {
          timeoutHandle = safeSetTimeout(() => {
            this._logger.error("Timed out while shutting down PostHog");
            hasTimedOut = true;
            reject("Timeout while shutting down PostHog. Some events may not have been sent.");
          }, shutdownTimeoutMs);
        }),
        doShutdown()
      ]);
    } finally {
      clearTimeout(timeoutHandle);
    }
  }
  async shutdown(shutdownTimeoutMs = 3e4) {
    if (this.shutdownPromise) this._logger.warn("shutdown() called while already shutting down. shutdown() is meant to be called once before process exit - use flush() for per-request cleanup");
    else this.shutdownPromise = this._shutdown(shutdownTimeoutMs).finally(() => {
      this.shutdownPromise = null;
    });
    return this.shutdownPromise;
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/tracing-headers.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/index.mjs
var error_tracking_exports = {};
__export(error_tracking_exports, {
  DEFAULT_EXCEPTION_STEPS_CONFIG: () => DEFAULT_EXCEPTION_STEPS_CONFIG,
  DOMExceptionCoercer: () => DOMExceptionCoercer,
  EXCEPTION_STEP_INTERNAL_FIELDS: () => EXCEPTION_STEP_INTERNAL_FIELDS,
  ErrorCoercer: () => ErrorCoercer,
  ErrorEventCoercer: () => ErrorEventCoercer,
  ErrorPropertiesBuilder: () => ErrorPropertiesBuilder,
  EventCoercer: () => EventCoercer,
  ExceptionStepsBuffer: () => ExceptionStepsBuffer,
  ObjectCoercer: () => ObjectCoercer,
  PrimitiveCoercer: () => PrimitiveCoercer,
  PromiseRejectionEventCoercer: () => PromiseRejectionEventCoercer,
  ReduceableCache: () => ReduceableCache,
  StringCoercer: () => StringCoercer,
  chromeStackLineParser: () => chromeStackLineParser,
  createDefaultStackParser: () => createDefaultStackParser,
  createStackParser: () => createStackParser,
  geckoStackLineParser: () => geckoStackLineParser,
  getUtf8ByteLength: () => getUtf8ByteLength,
  nodeStackLineParser: () => nodeStackLineParser,
  opera10StackLineParser: () => opera10StackLineParser,
  opera11StackLineParser: () => opera11StackLineParser,
  resolveExceptionStepsConfig: () => resolveExceptionStepsConfig,
  reverseAndStripFrames: () => reverseAndStripFrames,
  stripReservedExceptionStepFields: () => stripReservedExceptionStepFields,
  winjsStackLineParser: () => winjsStackLineParser
});
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/error-properties-builder.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/chunk-ids.mjs
init_checked_fetch();
init_modules_watch_stub();
var parsedStackResults;
var lastKeysCount;
var cachedFilenameChunkIds;
function getFilenameToChunkIdMap(stackParser) {
  const chunkIdMap = globalThis._posthogChunkIds;
  if (!chunkIdMap) return;
  const chunkIdKeys = Object.keys(chunkIdMap);
  if (cachedFilenameChunkIds && chunkIdKeys.length === lastKeysCount) return cachedFilenameChunkIds;
  lastKeysCount = chunkIdKeys.length;
  cachedFilenameChunkIds = chunkIdKeys.reduce((acc, stackKey) => {
    if (!parsedStackResults) parsedStackResults = {};
    const result = parsedStackResults[stackKey];
    if (result) acc[result[0]] = result[1];
    else {
      const parsedStack = stackParser(stackKey);
      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        const filename = stackFrame?.filename;
        const chunkId = chunkIdMap[stackKey];
        if (filename && chunkId) {
          acc[filename] = chunkId;
          parsedStackResults[stackKey] = [
            filename,
            chunkId
          ];
          break;
        }
      }
    }
    return acc;
  }, {});
  return cachedFilenameChunkIds;
}
__name(getFilenameToChunkIdMap, "getFilenameToChunkIdMap");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/error-properties-builder.mjs
var MAX_CAUSE_RECURSION = 4;
var ErrorPropertiesBuilder = class {
  static {
    __name(this, "ErrorPropertiesBuilder");
  }
  constructor(coercers, stackParser, modifiers = []) {
    this.coercers = coercers;
    this.stackParser = stackParser;
    this.modifiers = modifiers;
  }
  buildFromUnknown(input, hint = {}) {
    const providedMechanism = hint && hint.mechanism;
    const mechanism = providedMechanism || {
      handled: true,
      type: "generic"
    };
    const coercingContext = this.buildCoercingContext(mechanism, hint, 0);
    const exceptionWithCause = coercingContext.apply(input);
    const parsingContext = this.buildParsingContext(hint);
    const exceptionWithStack = this.parseStacktrace(exceptionWithCause, parsingContext);
    const exceptionList = this.convertToExceptionList(exceptionWithStack, mechanism);
    return {
      $exception_list: exceptionList,
      $exception_level: "error"
    };
  }
  async modifyFrames(exceptionList) {
    for (const exc of exceptionList) if (exc.stacktrace && exc.stacktrace.frames && isArray(exc.stacktrace.frames)) exc.stacktrace.frames = await this.applyModifiers(exc.stacktrace.frames);
    return exceptionList;
  }
  coerceFallback(ctx) {
    return {
      type: "Error",
      value: "Unknown error",
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
  parseStacktrace(err, ctx) {
    let cause;
    if (null != err.cause) cause = this.parseStacktrace(err.cause, ctx);
    let stack;
    if ("" != err.stack && null != err.stack) stack = this.applyChunkIds(this.stackParser(err.stack, err.synthetic ? ctx.skipFirstLines : 0), ctx.chunkIdMap);
    return {
      ...err,
      cause,
      stack
    };
  }
  applyChunkIds(frames, chunkIdMap) {
    return frames.map((frame) => {
      if (frame.filename && chunkIdMap) frame.chunk_id = chunkIdMap[frame.filename];
      return frame;
    });
  }
  applyCoercers(input, ctx) {
    for (const adapter of this.coercers) if (adapter.match(input)) return adapter.coerce(input, ctx);
    return this.coerceFallback(ctx);
  }
  async applyModifiers(frames) {
    let newFrames = frames;
    for (const modifier of this.modifiers) newFrames = await modifier(newFrames);
    return newFrames;
  }
  convertToExceptionList(exceptionWithStack, mechanism) {
    const currentException = {
      type: exceptionWithStack.type,
      value: exceptionWithStack.value,
      mechanism: {
        type: mechanism.type ?? "generic",
        handled: mechanism.handled ?? true,
        synthetic: exceptionWithStack.synthetic ?? false
      }
    };
    if (exceptionWithStack.stack) currentException.stacktrace = {
      type: "raw",
      frames: exceptionWithStack.stack
    };
    const exceptionList = [
      currentException
    ];
    if (null != exceptionWithStack.cause) exceptionList.push(...this.convertToExceptionList(exceptionWithStack.cause, {
      ...mechanism,
      handled: true
    }));
    return exceptionList;
  }
  buildParsingContext(hint) {
    const context = {
      chunkIdMap: getFilenameToChunkIdMap(this.stackParser),
      skipFirstLines: hint.skipFirstLines ?? 1
    };
    return context;
  }
  buildCoercingContext(mechanism, hint, depth = 0) {
    const coerce = /* @__PURE__ */ __name((input, depth2) => {
      if (!(depth2 <= MAX_CAUSE_RECURSION)) return;
      {
        const ctx = this.buildCoercingContext(mechanism, hint, depth2);
        return this.applyCoercers(input, ctx);
      }
    }, "coerce");
    const context = {
      ...hint,
      syntheticException: 0 == depth ? hint.syntheticException : void 0,
      mechanism,
      apply: /* @__PURE__ */ __name((input) => coerce(input, depth), "apply"),
      next: /* @__PURE__ */ __name((input) => coerce(input, depth + 1), "next")
    };
    return context;
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/base.mjs
init_checked_fetch();
init_modules_watch_stub();
var UNKNOWN_FUNCTION = "?";
function createFrame(platform, filename, func, lineno, colno) {
  const frame = {
    platform,
    filename,
    function: "<anonymous>" === func ? UNKNOWN_FUNCTION : func,
    in_app: true
  };
  if (!isUndefined(lineno)) frame.lineno = lineno;
  if (!isUndefined(colno)) frame.colno = colno;
  return frame;
}
__name(createFrame, "createFrame");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/chrome.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/safari.mjs
init_checked_fetch();
init_modules_watch_stub();
var extractSafariExtensionDetails = /* @__PURE__ */ __name((func, filename) => {
  const isSafariExtension = -1 !== func.indexOf("safari-extension");
  const isSafariWebExtension = -1 !== func.indexOf("safari-web-extension");
  return isSafariExtension || isSafariWebExtension ? [
    -1 !== func.indexOf("@") ? func.split("@")[0] : UNKNOWN_FUNCTION,
    isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
  ] : [
    func,
    filename
  ];
}, "extractSafariExtensionDetails");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/chrome.mjs
var chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chromeStackLineParser = /* @__PURE__ */ __name((line, platform) => {
  const noFnParts = chromeRegexNoFnName.exec(line);
  if (noFnParts) {
    const [, filename, line2, col] = noFnParts;
    return createFrame(platform, filename, UNKNOWN_FUNCTION, +line2, +col);
  }
  const parts = chromeRegex.exec(line);
  if (parts) {
    const isEval = parts[2] && 0 === parts[2].indexOf("eval");
    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]);
      if (subMatch) {
        parts[2] = subMatch[1];
        parts[3] = subMatch[2];
        parts[4] = subMatch[3];
      }
    }
    const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
    return createFrame(platform, filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
  }
}, "chromeStackLineParser");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/gecko.mjs
init_checked_fetch();
init_modules_watch_stub();
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var geckoStackLineParser = /* @__PURE__ */ __name((line, platform) => {
  const parts = geckoREgex.exec(line);
  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]);
      if (subMatch) {
        parts[1] = parts[1] || "eval";
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = "";
      }
    }
    let filename = parts[3];
    let func = parts[1] || UNKNOWN_FUNCTION;
    [func, filename] = extractSafariExtensionDetails(func, filename);
    return createFrame(platform, filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
  }
}, "geckoStackLineParser");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/winjs.mjs
init_checked_fetch();
init_modules_watch_stub();
var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var winjsStackLineParser = /* @__PURE__ */ __name((line, platform) => {
  const parts = winjsRegex.exec(line);
  return parts ? createFrame(platform, parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
}, "winjsStackLineParser");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/opera.mjs
init_checked_fetch();
init_modules_watch_stub();
var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
var opera10StackLineParser = /* @__PURE__ */ __name((line, platform) => {
  const parts = opera10Regex.exec(line);
  return parts ? createFrame(platform, parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : void 0;
}, "opera10StackLineParser");
var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
var opera11StackLineParser = /* @__PURE__ */ __name((line, platform) => {
  const parts = opera11Regex.exec(line);
  return parts ? createFrame(platform, parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : void 0;
}, "opera11StackLineParser");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/node.mjs
init_checked_fetch();
init_modules_watch_stub();
var FILENAME_MATCH = /^\s*[-]{4,}$/;
var FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
var nodeStackLineParser = /* @__PURE__ */ __name((line, platform) => {
  const lineMatch = line.match(FULL_MATCH);
  if (lineMatch) {
    let object;
    let method;
    let functionName;
    let typeName;
    let methodName;
    if (lineMatch[1]) {
      functionName = lineMatch[1];
      let methodStart = functionName.lastIndexOf(".");
      if ("." === functionName[methodStart - 1]) methodStart--;
      if (methodStart > 0) {
        object = functionName.slice(0, methodStart);
        method = functionName.slice(methodStart + 1);
        const objectEnd = object.indexOf(".Module");
        if (objectEnd > 0) {
          functionName = functionName.slice(objectEnd + 1);
          object = object.slice(0, objectEnd);
        }
      }
      typeName = void 0;
    }
    if (method) {
      typeName = object;
      methodName = method;
    }
    if ("<anonymous>" === method) {
      methodName = void 0;
      functionName = void 0;
    }
    if (void 0 === functionName) {
      methodName = methodName || UNKNOWN_FUNCTION;
      functionName = typeName ? `${typeName}.${methodName}` : methodName;
    }
    let filename = lineMatch[2]?.startsWith("file://") ? lineMatch[2].slice(7) : lineMatch[2];
    const isNative = "native" === lineMatch[5];
    if (filename?.match(/\/[A-Z]:/)) filename = filename.slice(1);
    if (!filename && lineMatch[5] && !isNative) filename = lineMatch[5];
    return {
      filename: filename ? decodeURI(filename) : void 0,
      module: void 0,
      function: functionName,
      lineno: _parseIntOrUndefined(lineMatch[3]),
      colno: _parseIntOrUndefined(lineMatch[4]),
      in_app: filenameIsInApp(filename || "", isNative),
      platform
    };
  }
  if (line.match(FILENAME_MATCH)) return {
    filename: line,
    platform
  };
}, "nodeStackLineParser");
function filenameIsInApp(filename, isNative = false) {
  const isInternal = isNative || filename && !filename.startsWith("/") && !filename.match(/^[A-Z]:/) && !filename.startsWith(".") && !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  return !isInternal && void 0 !== filename && !filename.includes("node_modules/");
}
__name(filenameIsInApp, "filenameIsInApp");
function _parseIntOrUndefined(input) {
  return parseInt(input || "", 10) || void 0;
}
__name(_parseIntOrUndefined, "_parseIntOrUndefined");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/parsers/index.mjs
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STACKTRACE_FRAME_LIMIT = 50;
function reverseAndStripFrames(stack) {
  if (!stack.length) return [];
  const localStack = Array.from(stack);
  localStack.reverse();
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
__name(reverseAndStripFrames, "reverseAndStripFrames");
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
__name(getLastStackFrame, "getLastStackFrame");
function createDefaultStackParser() {
  return createStackParser("web:javascript", chromeStackLineParser, geckoStackLineParser);
}
__name(createDefaultStackParser, "createDefaultStackParser");
function createStackParser(platform, ...parsers) {
  return (stack, skipFirstLines = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i = skipFirstLines; i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 1024) continue;
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (!cleanedLine.match(/\S*Error: /)) {
        for (const parser of parsers) {
          const frame = parser(cleanedLine, platform);
          if (frame) {
            frames.push(frame);
            break;
          }
        }
        if (frames.length >= STACKTRACE_FRAME_LIMIT) break;
      }
    }
    return reverseAndStripFrames(frames);
  };
}
__name(createStackParser, "createStackParser");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/dom-exception-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();
var DOMExceptionCoercer = class {
  static {
    __name(this, "DOMExceptionCoercer");
  }
  match(err) {
    return this.isDOMException(err) || this.isDOMError(err);
  }
  coerce(err, ctx) {
    const hasStack = isString(err.stack);
    return {
      type: this.getType(err),
      value: this.getValue(err),
      stack: hasStack ? err.stack : void 0,
      cause: err.cause ? ctx.next(err.cause) : void 0,
      synthetic: false
    };
  }
  getType(candidate) {
    return this.isDOMError(candidate) ? "DOMError" : "DOMException";
  }
  getValue(err) {
    const name = err.name || (this.isDOMError(err) ? "DOMError" : "DOMException");
    const message = err.message ? `${name}: ${err.message}` : name;
    return message;
  }
  isDOMException(err) {
    return isBuiltin(err, "DOMException");
  }
  isDOMError(err) {
    return isBuiltin(err, "DOMError");
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/error-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();
var ErrorCoercer = class {
  static {
    __name(this, "ErrorCoercer");
  }
  match(err) {
    return isPlainError(err);
  }
  coerce(err, ctx) {
    return {
      type: this.getType(err),
      value: this.getMessage(err, ctx),
      stack: this.getStack(err),
      cause: err.cause ? ctx.next(err.cause) : void 0,
      synthetic: false
    };
  }
  getType(err) {
    return err.name || err.constructor.name;
  }
  getMessage(err, _ctx) {
    const message = err.message;
    if (message.error && "string" == typeof message.error.message) return String(message.error.message);
    return String(message);
  }
  getStack(err) {
    return err.stacktrace || err.stack || void 0;
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/error-event-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();
var ErrorEventCoercer = class {
  static {
    __name(this, "ErrorEventCoercer");
  }
  constructor() {
  }
  match(err) {
    return isErrorEvent(err) && void 0 != err.error;
  }
  coerce(err, ctx) {
    const exceptionLike = ctx.apply(err.error);
    if (!exceptionLike) return {
      type: "ErrorEvent",
      value: err.message,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
    return exceptionLike;
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/string-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();
var ERROR_TYPES_PATTERN = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
var StringCoercer = class {
  static {
    __name(this, "StringCoercer");
  }
  match(input) {
    return "string" == typeof input;
  }
  coerce(input, ctx) {
    const [type, value] = this.getInfos(input);
    return {
      type: type ?? "Error",
      value: value ?? input,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
  getInfos(candidate) {
    let type = "Error";
    let value = candidate;
    const groups = candidate.match(ERROR_TYPES_PATTERN);
    if (groups) {
      type = groups[1];
      value = groups[2];
    }
    return [
      type,
      value
    ];
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/object-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/types.mjs
init_checked_fetch();
init_modules_watch_stub();
var severityLevels = [
  "fatal",
  "error",
  "warning",
  "log",
  "info",
  "debug"
];

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/utils.mjs
init_checked_fetch();
init_modules_watch_stub();
function extractExceptionKeysForMessage(err, maxLength = 40) {
  const keys = Object.keys(err);
  keys.sort();
  if (!keys.length) return "[object has no keys]";
  for (let i = keys.length; i > 0; i--) {
    const serialized = keys.slice(0, i).join(", ");
    if (!(serialized.length > maxLength)) {
      if (i === keys.length) return serialized;
      return serialized.length <= maxLength ? serialized : `${serialized.slice(0, maxLength)}...`;
    }
  }
  return "";
}
__name(extractExceptionKeysForMessage, "extractExceptionKeysForMessage");

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/object-coercer.mjs
var ObjectCoercer = class {
  static {
    __name(this, "ObjectCoercer");
  }
  match(candidate) {
    return "object" == typeof candidate && null !== candidate;
  }
  coerce(candidate, ctx) {
    const errorProperty = this.getErrorPropertyFromObject(candidate);
    if (errorProperty) return ctx.apply(errorProperty);
    return {
      type: this.getType(candidate),
      value: this.getValue(candidate),
      stack: ctx.syntheticException?.stack,
      level: this.isSeverityLevel(candidate.level) ? candidate.level : "error",
      synthetic: true
    };
  }
  getType(err) {
    return isEvent(err) ? err.constructor.name : "Error";
  }
  getValue(err) {
    if ("name" in err && "string" == typeof err.name) {
      let message = `'${err.name}' captured as exception`;
      if ("message" in err && "string" == typeof err.message) message += ` with message: '${err.message}'`;
      return message;
    }
    if ("message" in err && "string" == typeof err.message) return err.message;
    const className = this.getObjectClassName(err);
    const keys = extractExceptionKeysForMessage(err);
    return `${className && "Object" !== className ? `'${className}'` : "Object"} captured as exception with keys: ${keys}`;
  }
  isSeverityLevel(x) {
    return isString(x) && !isEmptyString(x) && severityLevels.indexOf(x) >= 0;
  }
  getErrorPropertyFromObject(obj) {
    for (const prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const value = obj[prop];
      if (isError(value)) return value;
    }
  }
  getObjectClassName(obj) {
    try {
      const prototype = Object.getPrototypeOf(obj);
      return prototype ? prototype.constructor.name : void 0;
    } catch (e) {
      return;
    }
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/event-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();
var EventCoercer = class {
  static {
    __name(this, "EventCoercer");
  }
  match(err) {
    return isEvent(err);
  }
  coerce(evt, ctx) {
    const constructorName = evt.constructor.name;
    return {
      type: constructorName,
      value: `${constructorName} captured as exception with keys: ${extractExceptionKeysForMessage(evt)}`,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/primitive-coercer.mjs
init_checked_fetch();
init_modules_watch_stub();
var PrimitiveCoercer = class {
  static {
    __name(this, "PrimitiveCoercer");
  }
  match(candidate) {
    return isPrimitive(candidate);
  }
  coerce(value, ctx) {
    return {
      type: "Error",
      value: `Primitive value captured as exception: ${String(value)}`,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/coercers/promise-rejection-event.mjs
init_checked_fetch();
init_modules_watch_stub();
var PromiseRejectionEventCoercer = class {
  static {
    __name(this, "PromiseRejectionEventCoercer");
  }
  match(err) {
    return isBuiltin(err, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(err);
  }
  isCustomEventWrappingRejection(err) {
    if (!isEvent(err)) return false;
    try {
      const detail = err.detail;
      return null != detail && "object" == typeof detail && "reason" in detail;
    } catch {
      return false;
    }
  }
  coerce(err, ctx) {
    const reason = this.getUnhandledRejectionReason(err);
    if (isPrimitive(reason)) return {
      type: "UnhandledRejection",
      value: `Non-Error promise rejection captured with value: ${String(reason)}`,
      stack: ctx.syntheticException?.stack,
      synthetic: true
    };
    return ctx.apply(reason);
  }
  getUnhandledRejectionReason(error) {
    try {
      if ("reason" in error) return error.reason;
      if ("detail" in error && null != error.detail && "object" == typeof error.detail && "reason" in error.detail) return error.detail.reason;
    } catch {
    }
    return error;
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/utils.mjs
init_checked_fetch();
init_modules_watch_stub();
var ReduceableCache = class {
  static {
    __name(this, "ReduceableCache");
  }
  constructor(_maxSize) {
    this._maxSize = _maxSize;
    this._cache = /* @__PURE__ */ new Map();
  }
  get(key) {
    const value = this._cache.get(key);
    if (void 0 === value) return;
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  }
  set(key, value) {
    this._cache.set(key, value);
  }
  reduce() {
    while (this._cache.size >= this._maxSize) {
      const value = this._cache.keys().next().value;
      if (value) this._cache.delete(value);
    }
  }
};

// ../../node_modules/.pnpm/@posthog+core@1.29.12/node_modules/@posthog/core/dist/error-tracking/exception-steps.mjs
init_checked_fetch();
init_modules_watch_stub();
var EXCEPTION_STEP_INTERNAL_FIELDS = {
  MESSAGE: "$message",
  TIMESTAMP: "$timestamp"
};
var RESERVED_EXCEPTION_STEP_KEYS = /* @__PURE__ */ new Set([
  EXCEPTION_STEP_INTERNAL_FIELDS.MESSAGE,
  EXCEPTION_STEP_INTERNAL_FIELDS.TIMESTAMP
]);
var DEFAULT_EXCEPTION_STEPS_CONFIG = {
  enabled: true,
  max_bytes: 32768
};
function resolveExceptionStepsConfig(config) {
  if (!config) return {
    ...DEFAULT_EXCEPTION_STEPS_CONFIG
  };
  return {
    enabled: config.enabled ?? DEFAULT_EXCEPTION_STEPS_CONFIG.enabled,
    max_bytes: normalizePositiveInteger(config.max_bytes, DEFAULT_EXCEPTION_STEPS_CONFIG.max_bytes)
  };
}
__name(resolveExceptionStepsConfig, "resolveExceptionStepsConfig");
function stripReservedExceptionStepFields(properties) {
  if (!properties) return {
    sanitizedProperties: {},
    droppedKeys: []
  };
  const droppedKeys = [];
  const sanitizedProperties = Object.keys(properties).reduce((acc, key) => {
    if (RESERVED_EXCEPTION_STEP_KEYS.has(key)) {
      droppedKeys.push(key);
      return acc;
    }
    acc[key] = properties[key];
    return acc;
  }, {});
  return {
    sanitizedProperties,
    droppedKeys
  };
}
__name(stripReservedExceptionStepFields, "stripReservedExceptionStepFields");
var ExceptionStepsBuffer = class {
  static {
    __name(this, "ExceptionStepsBuffer");
  }
  constructor(config) {
    this._entries = [];
    this._totalBytes = 0;
    this._config = resolveExceptionStepsConfig(config);
  }
  setConfig(config) {
    this._config = resolveExceptionStepsConfig(config);
    this._trimToMaxBytes();
  }
  add(step) {
    const serialized = normalizeAndSerializeStep(step);
    if (!serialized) return;
    const bytes = getUtf8ByteLength(serialized.json);
    if (bytes > this._config.max_bytes) return;
    this._entries.push({
      step: serialized.step,
      bytes
    });
    this._totalBytes += bytes;
    this._trimToMaxBytes();
  }
  getAttachable() {
    return this._entries.map((e) => e.step);
  }
  clear() {
    this._entries = [];
    this._totalBytes = 0;
  }
  size() {
    return this._entries.length;
  }
  _trimToMaxBytes() {
    while (this._totalBytes > this._config.max_bytes && this._entries.length > 0) {
      const evicted = this._entries.shift();
      if (evicted) this._totalBytes -= evicted.bytes;
    }
  }
};
function normalizePositiveInteger(input, fallback) {
  if (!isNumber(input) || input === 1 / 0 || input === -1 / 0) return fallback;
  const normalized = Math.floor(input);
  if (normalized < 0) return fallback;
  return normalized;
}
__name(normalizePositiveInteger, "normalizePositiveInteger");
function normalizeAndSerializeStep(step) {
  const json = safeStringify(step);
  if (!json) return;
  try {
    const parsed = JSON.parse(json);
    if (!isObject(parsed)) return;
    const parsedStep = parsed;
    const message = parsedStep[EXCEPTION_STEP_INTERNAL_FIELDS.MESSAGE];
    const timestamp = parsedStep[EXCEPTION_STEP_INTERNAL_FIELDS.TIMESTAMP];
    if (!isString(message) || 0 === message.trim().length) return;
    if (!isString(timestamp) && !isNumber(timestamp)) return;
    return {
      step: parsedStep,
      json
    };
  } catch {
    return;
  }
}
__name(normalizeAndSerializeStep, "normalizeAndSerializeStep");
function safeStringify(value) {
  const seen = /* @__PURE__ */ new WeakSet();
  try {
    return JSON.stringify(value, (_key, replacementValue) => {
      if ("bigint" == typeof replacementValue) return replacementValue.toString();
      if ("function" == typeof replacementValue || "symbol" == typeof replacementValue) return;
      if (replacementValue instanceof Date) return replacementValue.toISOString();
      if (replacementValue instanceof Error) return {
        name: replacementValue.name,
        message: replacementValue.message,
        stack: replacementValue.stack
      };
      if (replacementValue && "object" == typeof replacementValue) {
        if (seen.has(replacementValue)) return "[Circular]";
        seen.add(replacementValue);
      }
      return replacementValue;
    });
  } catch {
    return;
  }
}
__name(safeStringify, "safeStringify");
function getUtf8ByteLength(value) {
  if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(value).length;
  const encoded = encodeURIComponent(value);
  let byteLength = 0;
  for (let i = 0; i < encoded.length; i++) if ("%" === encoded[i]) {
    byteLength += 1;
    i += 2;
  } else byteLength += 1;
  return byteLength;
}
__name(getUtf8ByteLength, "getUtf8ByteLength");

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/error-tracking/index.mjs
var SHUTDOWN_TIMEOUT = 2e3;
var ErrorTracking = class _ErrorTracking {
  static {
    __name(this, "ErrorTracking");
  }
  constructor(client, options, _logger) {
    this.client = client;
    this._exceptionAutocaptureEnabled = options.enableExceptionAutocapture || false;
    this._logger = _logger;
    this._rateLimiter = new BucketedRateLimiter({
      refillRate: 1,
      bucketSize: 10,
      refillInterval: 1e4,
      _logger: this._logger
    });
    this.startAutocaptureIfEnabled();
  }
  static isPreviouslyCapturedError(x) {
    return isObject(x) && "__posthog_previously_captured_error" in x && true === x.__posthog_previously_captured_error;
  }
  static async buildEventMessage(error, hint, distinctId, additionalProperties) {
    const properties = {
      ...additionalProperties
    };
    const exceptionProperties = this.errorPropertiesBuilder.buildFromUnknown(error, hint);
    exceptionProperties.$exception_list = await this.errorPropertiesBuilder.modifyFrames(exceptionProperties.$exception_list);
    return {
      event: "$exception",
      distinctId,
      properties: {
        ...exceptionProperties,
        ...properties
      },
      _originatedFromCaptureException: true
    };
  }
  startAutocaptureIfEnabled() {
    if (this.isEnabled()) {
      addUncaughtExceptionListener(this.onException.bind(this), this.onFatalError.bind(this));
      addUnhandledRejectionListener(this.onException.bind(this));
    }
  }
  onException(exception, hint) {
    this.client.addPendingPromise((async () => {
      if (!_ErrorTracking.isPreviouslyCapturedError(exception)) {
        const eventMessage = await _ErrorTracking.buildEventMessage(exception, hint);
        const exceptionProperties = eventMessage.properties;
        const exceptionType = exceptionProperties?.$exception_list[0]?.type ?? "Exception";
        const isRateLimited = this._rateLimiter.consumeRateLimit(exceptionType);
        if (isRateLimited) return void this._logger.info("Skipping exception capture because of client rate limiting.", {
          exception: exceptionType
        });
        return this.client.capture(eventMessage);
      }
    })());
  }
  async onFatalError(exception) {
    console.error(exception);
    await this.client.shutdown(SHUTDOWN_TIMEOUT);
    process.exit(1);
  }
  isEnabled() {
    return !this.client.isDisabled && this._exceptionAutocaptureEnabled;
  }
  shutdown() {
    this._rateLimiter.stop();
  }
};

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/client.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/version.mjs
init_checked_fetch();
init_modules_watch_stub();
var version = "5.35.5";

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/types.mjs
init_checked_fetch();
init_modules_watch_stub();
var FeatureFlagError2 = {
  ERRORS_WHILE_COMPUTING: "errors_while_computing_flags",
  FLAG_MISSING: "flag_missing",
  QUOTA_LIMITED: "quota_limited",
  UNKNOWN_ERROR: "unknown_error"
};

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/feature-flag-evaluations.mjs
init_checked_fetch();
init_modules_watch_stub();
var FeatureFlagEvaluations = class _FeatureFlagEvaluations {
  static {
    __name(this, "FeatureFlagEvaluations");
  }
  constructor(init) {
    this._host = init.host;
    this._distinctId = init.distinctId;
    this._groups = init.groups;
    this._disableGeoip = init.disableGeoip;
    this._flags = init.flags;
    this._requestId = init.requestId;
    this._evaluatedAt = init.evaluatedAt;
    this._flagDefinitionsLoadedAt = init.flagDefinitionsLoadedAt;
    this._errorsWhileComputing = init.errorsWhileComputing ?? false;
    this._quotaLimited = init.quotaLimited ?? false;
    this._accessed = init.accessed ?? /* @__PURE__ */ new Set();
    this._isSlice = init.isSlice ?? false;
  }
  isEnabled(key) {
    const flag = this._flags[key];
    this._recordAccess(key);
    return flag?.enabled ?? false;
  }
  getFlag(key) {
    const flag = this._flags[key];
    this._recordAccess(key);
    if (!flag) return;
    if (!flag.enabled) return false;
    return flag.variant ?? true;
  }
  getFlagPayload(key) {
    return this._flags[key]?.payload;
  }
  onlyAccessed() {
    const filtered = {};
    for (const key of this._accessed) {
      const flag = this._flags[key];
      if (flag) filtered[key] = flag;
    }
    return this._cloneWith(filtered);
  }
  only(keys) {
    const filtered = {};
    const missing = [];
    for (const key of keys) {
      const flag = this._flags[key];
      if (flag) filtered[key] = flag;
      else missing.push(key);
    }
    if (missing.length > 0) this._host.logWarning(`FeatureFlagEvaluations.only() was called with flag keys that are not in the evaluation set and will be dropped: ${missing.join(", ")}`);
    return this._cloneWith(filtered);
  }
  get keys() {
    return Object.keys(this._flags);
  }
  _getEventProperties() {
    const properties = {};
    const activeFlags = [];
    for (const [key, flag] of Object.entries(this._flags)) {
      const value = false === flag.enabled ? false : flag.variant ?? true;
      properties[`$feature/${key}`] = value;
      if (flag.enabled) activeFlags.push(key);
    }
    if (activeFlags.length > 0) {
      activeFlags.sort();
      properties["$active_feature_flags"] = activeFlags;
    }
    return properties;
  }
  _cloneWith(flags) {
    return new _FeatureFlagEvaluations({
      host: this._host,
      distinctId: this._distinctId,
      groups: this._groups,
      disableGeoip: this._disableGeoip,
      flags,
      requestId: this._requestId,
      evaluatedAt: this._evaluatedAt,
      flagDefinitionsLoadedAt: this._flagDefinitionsLoadedAt,
      errorsWhileComputing: this._errorsWhileComputing,
      quotaLimited: this._quotaLimited,
      accessed: new Set(this._accessed),
      isSlice: true
    });
  }
  _recordAccess(key) {
    this._accessed.add(key);
    if ("" === this._distinctId) return;
    if (this._isSlice && !(key in this._flags)) return;
    const flag = this._flags[key];
    const response = void 0 === flag ? void 0 : false === flag.enabled ? false : flag.variant ?? true;
    const properties = {
      $feature_flag: key,
      $feature_flag_response: response,
      $feature_flag_id: flag?.id,
      $feature_flag_version: flag?.version,
      $feature_flag_reason: flag?.reason,
      locally_evaluated: flag?.locallyEvaluated ?? false,
      [`$feature/${key}`]: response,
      $feature_flag_request_id: this._requestId,
      $feature_flag_evaluated_at: flag?.locallyEvaluated ? Date.now() : this._evaluatedAt
    };
    if (flag?.locallyEvaluated && void 0 !== this._flagDefinitionsLoadedAt) properties.$feature_flag_definitions_loaded_at = this._flagDefinitionsLoadedAt;
    const errors = [];
    if (this._errorsWhileComputing) errors.push(FeatureFlagError2.ERRORS_WHILE_COMPUTING);
    if (this._quotaLimited) errors.push(FeatureFlagError2.QUOTA_LIMITED);
    if (void 0 === flag) errors.push(FeatureFlagError2.FLAG_MISSING);
    if (errors.length > 0) properties.$feature_flag_error = errors.join(",");
    this._host.captureFlagCalledEventIfNeeded({
      distinctId: this._distinctId,
      key,
      response,
      groups: this._groups,
      disableGeoip: this._disableGeoip,
      properties
    });
  }
};

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/feature-flags/feature-flags.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/feature-flags/crypto.mjs
init_checked_fetch();
init_modules_watch_stub();
async function hashSHA1(text) {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) throw new Error("SubtleCrypto API not available");
  const hashBuffer = await subtle.digest("SHA-1", new TextEncoder().encode(text));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
__name(hashSHA1, "hashSHA1");

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/feature-flags/feature-flags.mjs
var SIXTY_SECONDS = 6e4;
var LONG_SCALE = 1152921504606847e3;
var NULL_VALUES_ALLOWED_OPERATORS = [
  "is_not",
  "is_set"
];
var ClientError = class _ClientError extends Error {
  static {
    __name(this, "ClientError");
  }
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = "ClientError";
    this.message = message;
    Object.setPrototypeOf(this, _ClientError.prototype);
  }
};
var InconclusiveMatchError = class _InconclusiveMatchError extends Error {
  static {
    __name(this, "InconclusiveMatchError");
  }
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, _InconclusiveMatchError.prototype);
  }
};
var RequiresServerEvaluation = class _RequiresServerEvaluation extends Error {
  static {
    __name(this, "RequiresServerEvaluation");
  }
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, _RequiresServerEvaluation.prototype);
  }
};
var FeatureFlagsPoller = class {
  static {
    __name(this, "FeatureFlagsPoller");
  }
  constructor({ pollingInterval, personalApiKey, projectApiKey, timeout, host, customHeaders, ...options }) {
    this.debugMode = false;
    this.shouldBeginExponentialBackoff = false;
    this.backOffCount = 0;
    this.pollingInterval = pollingInterval;
    this.personalApiKey = personalApiKey;
    this.featureFlags = [];
    this.featureFlagsByKey = {};
    this.groupTypeMapping = {};
    this.cohorts = {};
    this.loadedSuccessfullyOnce = false;
    this.timeout = timeout;
    this.projectApiKey = projectApiKey;
    this.host = host;
    this.poller = void 0;
    this.fetch = options.fetch || fetch;
    this.onError = options.onError;
    this.customHeaders = customHeaders;
    this.onLoad = options.onLoad;
    this.cacheProvider = options.cacheProvider;
    this.strictLocalEvaluation = options.strictLocalEvaluation ?? false;
    this.loadFeatureFlags();
  }
  debug(enabled = true) {
    this.debugMode = enabled;
  }
  logMsgIfDebug(fn) {
    if (this.debugMode) fn();
  }
  createEvaluationContext(distinctId, groups = {}, personProperties = {}, groupProperties = {}, evaluationCache = {}) {
    return {
      distinctId,
      groups,
      personProperties,
      groupProperties,
      evaluationCache
    };
  }
  async getFeatureFlag(key, distinctId, groups = {}, personProperties = {}, groupProperties = {}) {
    await this.loadFeatureFlags();
    let response;
    let featureFlag;
    if (!this.loadedSuccessfullyOnce) return response;
    featureFlag = this.featureFlagsByKey[key];
    if (void 0 !== featureFlag) {
      const evaluationContext = this.createEvaluationContext(distinctId, groups, personProperties, groupProperties);
      try {
        const result = await this.computeFlagAndPayloadLocally(featureFlag, evaluationContext);
        response = result.value;
        this.logMsgIfDebug(() => console.debug(`Successfully computed flag locally: ${key} -> ${response}`));
      } catch (e) {
        if (e instanceof RequiresServerEvaluation || e instanceof InconclusiveMatchError) this.logMsgIfDebug(() => console.debug(`${e.name} when computing flag locally: ${key}: ${e.message}`));
        else if (e instanceof Error) this.onError?.(new Error(`Error computing flag locally: ${key}: ${e}`));
      }
    }
    return response;
  }
  async getAllFlagsAndPayloads(evaluationContext, flagKeysToExplicitlyEvaluate) {
    await this.loadFeatureFlags();
    const response = {};
    const payloads = {};
    let fallbackToFlags = 0 == this.featureFlags.length;
    const flagsToEvaluate = flagKeysToExplicitlyEvaluate ? flagKeysToExplicitlyEvaluate.map((key) => this.featureFlagsByKey[key]).filter(Boolean) : this.featureFlags;
    const sharedEvaluationContext = {
      ...evaluationContext,
      evaluationCache: evaluationContext.evaluationCache ?? {}
    };
    await Promise.all(flagsToEvaluate.map(async (flag) => {
      try {
        const { value: matchValue, payload: matchPayload } = await this.computeFlagAndPayloadLocally(flag, sharedEvaluationContext);
        response[flag.key] = matchValue;
        if (matchPayload) payloads[flag.key] = matchPayload;
      } catch (e) {
        if (e instanceof RequiresServerEvaluation || e instanceof InconclusiveMatchError) this.logMsgIfDebug(() => console.debug(`${e.name} when computing flag locally: ${flag.key}: ${e.message}`));
        else if (e instanceof Error) this.onError?.(new Error(`Error computing flag locally: ${flag.key}: ${e}`));
        fallbackToFlags = true;
      }
    }));
    return {
      response,
      payloads,
      fallbackToFlags
    };
  }
  async computeFlagAndPayloadLocally(flag, evaluationContext, options = {}) {
    const { matchValue, skipLoadCheck = false } = options;
    if (!skipLoadCheck) await this.loadFeatureFlags();
    if (!this.loadedSuccessfullyOnce) return {
      value: false,
      payload: null
    };
    let flagValue;
    flagValue = void 0 !== matchValue ? matchValue : await this.computeFlagValueLocally(flag, evaluationContext);
    const payload = this.getFeatureFlagPayload(flag.key, flagValue);
    return {
      value: flagValue,
      payload
    };
  }
  async computeFlagValueLocally(flag, evaluationContext) {
    const { distinctId, groups, personProperties, groupProperties } = evaluationContext;
    if (!flag.active) return false;
    if (flag.ensure_experience_continuity) throw new InconclusiveMatchError("Flag has experience continuity enabled");
    const flagFilters = flag.filters || {};
    const aggregation_group_type_index = flagFilters.aggregation_group_type_index;
    if (void 0 != aggregation_group_type_index) {
      const groupName = this.groupTypeMapping[String(aggregation_group_type_index)];
      if (!groupName) {
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Unknown group type index ${aggregation_group_type_index} for feature flag ${flag.key}`));
        throw new InconclusiveMatchError("Flag has unknown group type index");
      }
      if (!(groupName in groups)) {
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Can't compute group feature flag: ${flag.key} without group names passed in`));
        return false;
      }
      if ("device_id" === flag.bucketing_identifier && (personProperties?.$device_id === void 0 || personProperties?.$device_id === null || personProperties?.$device_id === "")) this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Ignoring bucketing_identifier for group flag: ${flag.key}`));
      const focusedGroupProperties = groupProperties[groupName];
      return await this.matchFeatureFlagProperties(flag, groups[groupName], focusedGroupProperties, evaluationContext);
    }
    {
      const bucketingValue = this.getBucketingValueForFlag(flag, distinctId, personProperties);
      if (void 0 === bucketingValue) {
        this.logMsgIfDebug(() => console.warn(`[FEATURE FLAGS] Can't compute feature flag: ${flag.key} without $device_id, falling back to server evaluation`));
        throw new InconclusiveMatchError(`Can't compute feature flag: ${flag.key} without $device_id`);
      }
      return await this.matchFeatureFlagProperties(flag, bucketingValue, personProperties, evaluationContext);
    }
  }
  getBucketingValueForFlag(flag, distinctId, properties) {
    if (flag.filters?.aggregation_group_type_index != void 0) return distinctId;
    if ("device_id" === flag.bucketing_identifier) {
      const deviceId = properties?.$device_id;
      if (null == deviceId || "" === deviceId) return;
      return deviceId;
    }
    return distinctId;
  }
  getFeatureFlagPayload(key, flagValue) {
    let payload = null;
    if (false !== flagValue && null != flagValue) {
      if ("boolean" == typeof flagValue) payload = this.featureFlagsByKey?.[key]?.filters?.payloads?.[flagValue.toString()] || null;
      else if ("string" == typeof flagValue) payload = this.featureFlagsByKey?.[key]?.filters?.payloads?.[flagValue] || null;
      if (null != payload) {
        if ("object" == typeof payload) return payload;
        if ("string" == typeof payload) try {
          return JSON.parse(payload);
        } catch {
        }
        return payload;
      }
    }
    return null;
  }
  async evaluateFlagDependency(property, properties, evaluationContext) {
    const { evaluationCache } = evaluationContext;
    const targetFlagKey = property.key;
    if (!this.featureFlagsByKey) throw new InconclusiveMatchError("Feature flags not available for dependency evaluation");
    if (!("dependency_chain" in property)) throw new InconclusiveMatchError(`Flag dependency property for '${targetFlagKey}' is missing required 'dependency_chain' field`);
    const dependencyChain = property.dependency_chain;
    if (!Array.isArray(dependencyChain)) throw new InconclusiveMatchError(`Flag dependency property for '${targetFlagKey}' has an invalid 'dependency_chain' (expected array, got ${typeof dependencyChain})`);
    if (0 === dependencyChain.length) throw new InconclusiveMatchError(`Circular dependency detected for flag '${targetFlagKey}' (empty dependency chain)`);
    for (const depFlagKey of dependencyChain) {
      if (!(depFlagKey in evaluationCache)) {
        const depFlag = this.featureFlagsByKey[depFlagKey];
        if (depFlag) if (depFlag.active) try {
          const depResult = await this.computeFlagValueLocally(depFlag, evaluationContext);
          evaluationCache[depFlagKey] = depResult;
        } catch (error) {
          throw new InconclusiveMatchError(`Error evaluating flag dependency '${depFlagKey}' for flag '${targetFlagKey}': ${error}`);
        }
        else evaluationCache[depFlagKey] = false;
        else throw new InconclusiveMatchError(`Missing flag dependency '${depFlagKey}' for flag '${targetFlagKey}'`);
      }
      const cachedResult = evaluationCache[depFlagKey];
      if (null == cachedResult) throw new InconclusiveMatchError(`Dependency '${depFlagKey}' could not be evaluated`);
    }
    const targetFlagValue = evaluationCache[targetFlagKey];
    return this.flagEvaluatesToExpectedValue(property.value, targetFlagValue);
  }
  flagEvaluatesToExpectedValue(expectedValue, flagValue) {
    if ("boolean" == typeof expectedValue) return expectedValue === flagValue || "string" == typeof flagValue && "" !== flagValue && true === expectedValue;
    if ("string" == typeof expectedValue) return flagValue === expectedValue;
    return false;
  }
  async matchFeatureFlagProperties(flag, bucketingValue, properties, evaluationContext) {
    const flagFilters = flag.filters || {};
    const flagConditions = flagFilters.groups || [];
    const flagAggregation = flagFilters.aggregation_group_type_index;
    const { groups, groupProperties } = evaluationContext;
    let isInconclusive = false;
    let result;
    for (const condition of flagConditions) try {
      const conditionAggregation = void 0 !== condition.aggregation_group_type_index ? condition.aggregation_group_type_index : flagAggregation;
      let effectiveProperties = properties;
      let effectiveBucketingValue = bucketingValue;
      if (conditionAggregation !== flagAggregation) {
        if (null != conditionAggregation) {
          const groupName = this.groupTypeMapping[String(conditionAggregation)];
          if (!groupName || !(groupName in groups)) {
            this.logMsgIfDebug(() => console.debug(`[FEATURE FLAGS] Skipping group condition for flag '${flag.key}': group type index ${conditionAggregation} not available`));
            continue;
          }
          if (!(groupName in groupProperties)) {
            isInconclusive = true;
            continue;
          }
          effectiveProperties = groupProperties[groupName];
          effectiveBucketingValue = groups[groupName];
        }
      }
      if (await this.isConditionMatch(flag, effectiveBucketingValue, condition, effectiveProperties, evaluationContext)) {
        const variantOverride = condition.variant;
        const flagVariants = flagFilters.multivariate?.variants || [];
        result = variantOverride && flagVariants.some((variant) => variant.key === variantOverride) ? variantOverride : await this.getMatchingVariant(flag, effectiveBucketingValue) || true;
        break;
      }
    } catch (e) {
      if (e instanceof RequiresServerEvaluation) throw e;
      if (e instanceof InconclusiveMatchError) isInconclusive = true;
      else throw e;
    }
    if (void 0 !== result) return result;
    if (isInconclusive) throw new InconclusiveMatchError("Can't determine if feature flag is enabled or not with given properties");
    return false;
  }
  async isConditionMatch(flag, bucketingValue, condition, properties, evaluationContext) {
    const rolloutPercentage = condition.rollout_percentage;
    const warnFunction = /* @__PURE__ */ __name((msg) => {
      this.logMsgIfDebug(() => console.warn(msg));
    }, "warnFunction");
    if ((condition.properties || []).length > 0) {
      for (const prop of condition.properties) {
        const propertyType = prop.type;
        let matches = false;
        matches = "cohort" === propertyType ? await matchCohort(prop, properties, this.cohorts, this.debugMode, (depProp) => this.evaluateFlagDependency(depProp, properties, evaluationContext)) : "flag" === propertyType ? await this.evaluateFlagDependency(prop, properties, evaluationContext) : matchProperty(prop, properties, warnFunction);
        if (!matches) return false;
      }
      if (void 0 == rolloutPercentage) return true;
    }
    if (void 0 != rolloutPercentage && await _hash(flag.key, bucketingValue) > rolloutPercentage / 100) return false;
    return true;
  }
  async getMatchingVariant(flag, bucketingValue) {
    const hashValue = await _hash(flag.key, bucketingValue, "variant");
    const matchingVariant = this.variantLookupTable(flag).find((variant) => hashValue >= variant.valueMin && hashValue < variant.valueMax);
    if (matchingVariant) return matchingVariant.key;
  }
  variantLookupTable(flag) {
    const lookupTable = [];
    let valueMin = 0;
    let valueMax = 0;
    const flagFilters = flag.filters || {};
    const multivariates = flagFilters.multivariate?.variants || [];
    multivariates.forEach((variant) => {
      valueMax = valueMin + variant.rollout_percentage / 100;
      lookupTable.push({
        valueMin,
        valueMax,
        key: variant.key
      });
      valueMin = valueMax;
    });
    return lookupTable;
  }
  updateFlagState(flagData) {
    this.featureFlags = flagData.flags;
    this.featureFlagsByKey = flagData.flags.reduce((acc, curr) => (acc[curr.key] = curr, acc), {});
    this.groupTypeMapping = flagData.groupTypeMapping;
    this.cohorts = flagData.cohorts;
    this.loadedSuccessfullyOnce = true;
  }
  warnAboutExperienceContinuityFlags(flags) {
    if (this.strictLocalEvaluation) return;
    const experienceContinuityFlags = flags.filter((f) => f.ensure_experience_continuity);
    if (experienceContinuityFlags.length > 0) console.warn(`[PostHog] You are using local evaluation but ${experienceContinuityFlags.length} flag(s) have experience continuity enabled: ${experienceContinuityFlags.map((f) => f.key).join(", ")}. Experience continuity is incompatible with local evaluation and will cause a server request on every flag evaluation, negating local evaluation cost savings. To avoid server requests and unexpected costs, either disable experience continuity on these flags in PostHog, use strictLocalEvaluation: true in client init, or pass onlyEvaluateLocally: true per flag call (flags that cannot be evaluated locally will return undefined).`);
  }
  async loadFromCache(debugMessage) {
    if (!this.cacheProvider) return false;
    try {
      const cached = await this.cacheProvider.getFlagDefinitions();
      if (cached) {
        this.updateFlagState(cached);
        this.logMsgIfDebug(() => console.debug(`[FEATURE FLAGS] ${debugMessage} (${cached.flags.length} flags)`));
        this.onLoad?.(this.featureFlags.length);
        this.warnAboutExperienceContinuityFlags(cached.flags);
        return true;
      }
      return false;
    } catch (err) {
      this.onError?.(new Error(`Failed to load from cache: ${err}`));
      return false;
    }
  }
  async loadFeatureFlags(forceReload = false) {
    if (this.loadedSuccessfullyOnce && !forceReload) return;
    if (!forceReload && this.nextFetchAllowedAt && Date.now() < this.nextFetchAllowedAt) return void this.logMsgIfDebug(() => console.debug("[FEATURE FLAGS] Skipping fetch, in backoff period"));
    if (!this.loadingPromise) this.loadingPromise = this._loadFeatureFlags().catch((err) => this.logMsgIfDebug(() => console.debug(`[FEATURE FLAGS] Failed to load feature flags: ${err}`))).finally(() => {
      this.loadingPromise = void 0;
    });
    return this.loadingPromise;
  }
  isLocalEvaluationReady() {
    return (this.loadedSuccessfullyOnce ?? false) && (this.featureFlags?.length ?? 0) > 0;
  }
  getFlagDefinitionsLoadedAt() {
    return this.flagDefinitionsLoadedAt;
  }
  getPollingInterval() {
    if (!this.shouldBeginExponentialBackoff) return this.pollingInterval;
    return Math.min(SIXTY_SECONDS, this.pollingInterval * 2 ** this.backOffCount);
  }
  beginBackoff() {
    this.shouldBeginExponentialBackoff = true;
    this.backOffCount += 1;
    this.nextFetchAllowedAt = Date.now() + this.getPollingInterval();
  }
  clearBackoff() {
    this.shouldBeginExponentialBackoff = false;
    this.backOffCount = 0;
    this.nextFetchAllowedAt = void 0;
  }
  async _loadFeatureFlags() {
    if (this.poller) {
      clearTimeout(this.poller);
      this.poller = void 0;
    }
    this.poller = setTimeout(() => this.loadFeatureFlags(true), this.getPollingInterval());
    try {
      let shouldFetch = true;
      if (this.cacheProvider) try {
        shouldFetch = await this.cacheProvider.shouldFetchFlagDefinitions();
      } catch (err) {
        this.onError?.(new Error(`Error in shouldFetchFlagDefinitions: ${err}`));
      }
      if (!shouldFetch) {
        const loaded = await this.loadFromCache("Loaded flags from cache (skipped fetch)");
        if (loaded) return;
        if (this.loadedSuccessfullyOnce) return;
      }
      const res = await this._requestFeatureFlagDefinitions();
      if (!res) return;
      switch (res.status) {
        case 304:
          this.logMsgIfDebug(() => console.debug("[FEATURE FLAGS] Flags not modified (304), using cached data"));
          this.flagsEtag = res.headers?.get("ETag") ?? this.flagsEtag;
          this.loadedSuccessfullyOnce = true;
          this.clearBackoff();
          return;
        case 401:
          this.beginBackoff();
          throw new ClientError(`Your project key or personal API key is invalid. Setting next polling interval to ${this.getPollingInterval()}ms. More information: https://posthog.com/docs/api#rate-limiting`);
        case 402:
          console.warn("[FEATURE FLAGS] Feature flags quota limit exceeded - unsetting all local flags. Learn more about billing limits at https://posthog.com/docs/billing/limits-alerts");
          this.featureFlags = [];
          this.featureFlagsByKey = {};
          this.groupTypeMapping = {};
          this.cohorts = {};
          return;
        case 403:
          this.beginBackoff();
          throw new ClientError(`Your personal API key does not have permission to fetch feature flag definitions for local evaluation. Setting next polling interval to ${this.getPollingInterval()}ms. Are you sure you're using the correct personal and Project API key pair? More information: https://posthog.com/docs/api/overview`);
        case 429:
          this.beginBackoff();
          throw new ClientError(`You are being rate limited. Setting next polling interval to ${this.getPollingInterval()}ms. More information: https://posthog.com/docs/api#rate-limiting`);
        case 200: {
          const responseJson = await res.json() ?? {};
          if (!("flags" in responseJson)) return void this.onError?.(new Error(`Invalid response when getting feature flags: ${JSON.stringify(responseJson)}`));
          this.flagsEtag = res.headers?.get("ETag") ?? void 0;
          const flagData = {
            flags: responseJson.flags ?? [],
            groupTypeMapping: responseJson.group_type_mapping || {},
            cohorts: responseJson.cohorts || {}
          };
          this.updateFlagState(flagData);
          this.flagDefinitionsLoadedAt = Date.now();
          this.clearBackoff();
          if (this.cacheProvider && shouldFetch) try {
            await this.cacheProvider.onFlagDefinitionsReceived(flagData);
          } catch (err) {
            this.onError?.(new Error(`Failed to store in cache: ${err}`));
          }
          this.onLoad?.(this.featureFlags.length);
          this.warnAboutExperienceContinuityFlags(flagData.flags);
          break;
        }
        default:
          return;
      }
    } catch (err) {
      if (err instanceof ClientError) this.onError?.(err);
    }
  }
  getPersonalApiKeyRequestOptions(method = "GET", etag) {
    const headers = {
      ...this.customHeaders,
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.personalApiKey}`
    };
    if (etag) headers["If-None-Match"] = etag;
    return {
      method,
      headers
    };
  }
  _requestFeatureFlagDefinitions() {
    const url = `${this.host}/flags/definitions?token=${this.projectApiKey}&send_cohorts`;
    const options = this.getPersonalApiKeyRequestOptions("GET", this.flagsEtag);
    let abortTimeout = null;
    if (this.timeout && "number" == typeof this.timeout) {
      const controller = new AbortController();
      abortTimeout = safeSetTimeout(() => {
        controller.abort();
      }, this.timeout);
      options.signal = controller.signal;
    }
    try {
      const fetch1 = this.fetch;
      return fetch1(url, options);
    } finally {
      clearTimeout(abortTimeout);
    }
  }
  async stopPoller(timeoutMs = 3e4) {
    clearTimeout(this.poller);
    if (this.cacheProvider) try {
      const shutdownResult = this.cacheProvider.shutdown();
      if (shutdownResult instanceof Promise) await Promise.race([
        shutdownResult,
        new Promise((_, reject) => setTimeout(() => reject(new Error(`Cache shutdown timeout after ${timeoutMs}ms`)), timeoutMs))
      ]);
    } catch (err) {
      this.onError?.(new Error(`Error during cache shutdown: ${err}`));
    }
  }
};
async function _hash(key, bucketingValue, salt = "") {
  const hashString = await hashSHA1(`${key}.${bucketingValue}${salt}`);
  return parseInt(hashString.slice(0, 15), 16) / LONG_SCALE;
}
__name(_hash, "_hash");
function matchProperty(property, propertyValues, warnFunction) {
  const key = property.key;
  const value = property.value;
  const operator = property.operator || "exact";
  if (key in propertyValues) {
    if ("is_not_set" === operator) return false;
  } else {
    if ("is_not_set" === operator) return true;
    throw new InconclusiveMatchError(`Property ${key} not found in propertyValues`);
  }
  const overrideValue = propertyValues[key];
  if (null == overrideValue && !NULL_VALUES_ALLOWED_OPERATORS.includes(operator)) {
    if (warnFunction) warnFunction(`Property ${key} cannot have a value of null/undefined with the ${operator} operator`);
    return false;
  }
  function computeExactMatch(value2, overrideValue2) {
    if (Array.isArray(value2)) return value2.map((val) => String(val).toLowerCase()).includes(String(overrideValue2).toLowerCase());
    return String(value2).toLowerCase() === String(overrideValue2).toLowerCase();
  }
  __name(computeExactMatch, "computeExactMatch");
  function compare(lhs, rhs, operator2) {
    if ("gt" === operator2) return lhs > rhs;
    if ("gte" === operator2) return lhs >= rhs;
    if ("lt" === operator2) return lhs < rhs;
    if ("lte" === operator2) return lhs <= rhs;
    throw new Error(`Invalid operator: ${operator2}`);
  }
  __name(compare, "compare");
  switch (operator) {
    case "exact":
      return computeExactMatch(value, overrideValue);
    case "is_not":
      return !computeExactMatch(value, overrideValue);
    case "is_set":
      return key in propertyValues;
    case "icontains":
      return String(overrideValue).toLowerCase().includes(String(value).toLowerCase());
    case "not_icontains":
      return !String(overrideValue).toLowerCase().includes(String(value).toLowerCase());
    case "regex":
      return isValidRegex(String(value)) && null !== String(overrideValue).match(String(value));
    case "not_regex":
      return isValidRegex(String(value)) && null === String(overrideValue).match(String(value));
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      const parsedValue = "number" == typeof value ? value : parseFloat(String(value));
      let parsedOverride;
      parsedOverride = "number" == typeof overrideValue ? overrideValue : null != overrideValue ? parseFloat(String(overrideValue)) : NaN;
      if (Number.isFinite(parsedValue) && Number.isFinite(parsedOverride)) return compare(parsedOverride, parsedValue, operator);
      return compare(String(overrideValue), String(value), operator);
    }
    case "is_date_after":
    case "is_date_before": {
      if ("boolean" == typeof value) throw new InconclusiveMatchError("Date operations cannot be performed on boolean values");
      let parsedDate = relativeDateParseForFeatureFlagMatching(String(value));
      if (null == parsedDate) parsedDate = convertToDateTime(value);
      if (null == parsedDate) throw new InconclusiveMatchError(`Invalid date: ${value}`);
      const overrideDate = convertToDateTime(overrideValue);
      if ([
        "is_date_before"
      ].includes(operator)) return overrideDate < parsedDate;
      return overrideDate > parsedDate;
    }
    case "semver_eq": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return 0 === cmp;
    }
    case "semver_neq": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return 0 !== cmp;
    }
    case "semver_gt": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp > 0;
    }
    case "semver_gte": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp >= 0;
    }
    case "semver_lt": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp < 0;
    }
    case "semver_lte": {
      const cmp = compareSemverTuples(parseSemver(String(overrideValue)), parseSemver(String(value)));
      return cmp <= 0;
    }
    case "semver_tilde": {
      const overrideParsed = parseSemver(String(overrideValue));
      const { lower, upper } = computeTildeBounds(String(value));
      return compareSemverTuples(overrideParsed, lower) >= 0 && compareSemverTuples(overrideParsed, upper) < 0;
    }
    case "semver_caret": {
      const overrideParsed = parseSemver(String(overrideValue));
      const { lower, upper } = computeCaretBounds(String(value));
      return compareSemverTuples(overrideParsed, lower) >= 0 && compareSemverTuples(overrideParsed, upper) < 0;
    }
    case "semver_wildcard": {
      const overrideParsed = parseSemver(String(overrideValue));
      const { lower, upper } = computeWildcardBounds(String(value));
      return compareSemverTuples(overrideParsed, lower) >= 0 && compareSemverTuples(overrideParsed, upper) < 0;
    }
    default:
      throw new InconclusiveMatchError(`Unknown operator: ${operator}`);
  }
}
__name(matchProperty, "matchProperty");
function checkCohortExists(cohortId, cohortProperties) {
  if (!(cohortId in cohortProperties)) throw new RequiresServerEvaluation(`cohort ${cohortId} not found in local cohorts - likely a static cohort that requires server evaluation`);
}
__name(checkCohortExists, "checkCohortExists");
async function matchCohort(property, propertyValues, cohortProperties, debugMode = false, flagDependencyEvaluator) {
  const cohortId = String(property.value);
  checkCohortExists(cohortId, cohortProperties);
  const propertyGroup = cohortProperties[cohortId];
  return matchPropertyGroup(propertyGroup, propertyValues, cohortProperties, debugMode, flagDependencyEvaluator);
}
__name(matchCohort, "matchCohort");
async function matchPropertyGroup(propertyGroup, propertyValues, cohortProperties, debugMode = false, flagDependencyEvaluator) {
  if (!propertyGroup) return true;
  const propertyGroupType = propertyGroup.type;
  const properties = propertyGroup.values;
  if (!properties || 0 === properties.length) return true;
  let errorMatchingLocally = false;
  if ("values" in properties[0]) {
    for (const prop of properties) try {
      const matches = await matchPropertyGroup(prop, propertyValues, cohortProperties, debugMode, flagDependencyEvaluator);
      if ("AND" === propertyGroupType) {
        if (!matches) return false;
      } else if (matches) return true;
    } catch (err) {
      if (err instanceof RequiresServerEvaluation) throw err;
      if (err instanceof InconclusiveMatchError) {
        if (debugMode) console.debug(`Failed to compute property ${prop} locally: ${err}`);
        errorMatchingLocally = true;
      } else throw err;
    }
    if (errorMatchingLocally) throw new InconclusiveMatchError("Can't match cohort without a given cohort property value");
    return "AND" === propertyGroupType;
  }
  for (const prop of properties) try {
    let matches;
    if ("cohort" === prop.type) matches = await matchCohort(prop, propertyValues, cohortProperties, debugMode, flagDependencyEvaluator);
    else if ("flag" === prop.type) {
      if (!flagDependencyEvaluator) throw new InconclusiveMatchError(`Flag dependency '${prop.key || "unknown"}' cannot be evaluated without a flag dependency evaluator`);
      matches = await flagDependencyEvaluator(prop);
    } else matches = matchProperty(prop, propertyValues);
    const negation = prop.negation || false;
    if ("AND" === propertyGroupType) {
      if (!matches && !negation) return false;
      if (matches && negation) return false;
    } else {
      if (matches && !negation) return true;
      if (!matches && negation) return true;
    }
  } catch (err) {
    if (err instanceof RequiresServerEvaluation) throw err;
    if (err instanceof InconclusiveMatchError) {
      if (debugMode) console.debug(`Failed to compute property ${prop} locally: ${err}`);
      errorMatchingLocally = true;
    } else throw err;
  }
  if (errorMatchingLocally) throw new InconclusiveMatchError("can't match cohort without a given cohort property value");
  return "AND" === propertyGroupType;
}
__name(matchPropertyGroup, "matchPropertyGroup");
function isValidRegex(regex) {
  try {
    new RegExp(regex);
    return true;
  } catch (err) {
    return false;
  }
}
__name(isValidRegex, "isValidRegex");
function parseSemverNumericIdentifier(part, raw3) {
  if (!/^\d+$/.test(part)) throw new InconclusiveMatchError(`Invalid semver: ${raw3}`);
  if (part.length > 1 && "0" === part[0]) throw new InconclusiveMatchError(`Invalid semver: ${raw3}`);
  return parseInt(part, 10);
}
__name(parseSemverNumericIdentifier, "parseSemverNumericIdentifier");
function parseSemver(value) {
  const text = String(value).trim().replace(/^[vV]/, "");
  const baseVersion = text.split("-")[0].split("+")[0];
  if (!baseVersion || baseVersion.startsWith(".")) throw new InconclusiveMatchError(`Invalid semver: ${value}`);
  const parts = baseVersion.split(".");
  const parsePart = /* @__PURE__ */ __name((part) => {
    if (void 0 === part || "" === part) return 0;
    return parseSemverNumericIdentifier(part, value);
  }, "parsePart");
  const major = parsePart(parts[0]);
  const minor = parsePart(parts[1]);
  const patch = parsePart(parts[2]);
  return [
    major,
    minor,
    patch
  ];
}
__name(parseSemver, "parseSemver");
function compareSemverTuples(a, b) {
  for (let i = 0; i < 3; i++) {
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }
  return 0;
}
__name(compareSemverTuples, "compareSemverTuples");
function computeTildeBounds(value) {
  const parsed = parseSemver(value);
  const lower = [
    parsed[0],
    parsed[1],
    parsed[2]
  ];
  const upper = [
    parsed[0],
    parsed[1] + 1,
    0
  ];
  return {
    lower,
    upper
  };
}
__name(computeTildeBounds, "computeTildeBounds");
function computeCaretBounds(value) {
  const parsed = parseSemver(value);
  const [major, minor, patch] = parsed;
  const lower = [
    major,
    minor,
    patch
  ];
  let upper;
  upper = major > 0 ? [
    major + 1,
    0,
    0
  ] : minor > 0 ? [
    0,
    minor + 1,
    0
  ] : [
    0,
    0,
    patch + 1
  ];
  return {
    lower,
    upper
  };
}
__name(computeCaretBounds, "computeCaretBounds");
function computeWildcardBounds(value) {
  const text = String(value).trim().replace(/^[vV]/, "");
  const cleanedText = text.replace(/\.\*$/, "").replace(/\*$/, "");
  if (!cleanedText) throw new InconclusiveMatchError(`Invalid wildcard semver: ${value}`);
  const parts = cleanedText.split(".");
  const parseWildcardPart = /* @__PURE__ */ __name((part) => {
    try {
      return parseSemverNumericIdentifier(part, value);
    } catch {
      throw new InconclusiveMatchError(`Invalid wildcard semver: ${value}`);
    }
  }, "parseWildcardPart");
  const major = parseWildcardPart(parts[0]);
  let lower;
  let upper;
  if (1 === parts.length) {
    lower = [
      major,
      0,
      0
    ];
    upper = [
      major + 1,
      0,
      0
    ];
  } else {
    const minor = parseWildcardPart(parts[1]);
    lower = [
      major,
      minor,
      0
    ];
    upper = [
      major,
      minor + 1,
      0
    ];
  }
  return {
    lower,
    upper
  };
}
__name(computeWildcardBounds, "computeWildcardBounds");
function convertToDateTime(value) {
  if (value instanceof Date) return value;
  if ("string" == typeof value || "number" == typeof value) {
    const date = new Date(value);
    if (!isNaN(date.valueOf())) return date;
    throw new InconclusiveMatchError(`${value} is in an invalid date format`);
  }
  throw new InconclusiveMatchError(`The date provided ${value} must be a string, number, or date object`);
}
__name(convertToDateTime, "convertToDateTime");
function relativeDateParseForFeatureFlagMatching(value) {
  const regex = /^-?(?<number>[0-9]+)(?<interval>[a-z])$/;
  const match2 = value.match(regex);
  const parsedDt = new Date((/* @__PURE__ */ new Date()).toISOString());
  if (!match2) return null;
  {
    if (!match2.groups) return null;
    const number = parseInt(match2.groups["number"]);
    if (number >= 1e4) return null;
    const interval = match2.groups["interval"];
    if ("h" == interval) parsedDt.setUTCHours(parsedDt.getUTCHours() - number);
    else if ("d" == interval) parsedDt.setUTCDate(parsedDt.getUTCDate() - number);
    else if ("w" == interval) parsedDt.setUTCDate(parsedDt.getUTCDate() - 7 * number);
    else if ("m" == interval) parsedDt.setUTCMonth(parsedDt.getUTCMonth() - number);
    else {
      if ("y" != interval) return null;
      parsedDt.setUTCFullYear(parsedDt.getUTCFullYear() - number);
    }
    return parsedDt;
  }
}
__name(relativeDateParseForFeatureFlagMatching, "relativeDateParseForFeatureFlagMatching");

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/storage-memory.mjs
init_checked_fetch();
init_modules_watch_stub();
var PostHogMemoryStorage = class {
  static {
    __name(this, "PostHogMemoryStorage");
  }
  getProperty(key) {
    return this._memoryStorage[key];
  }
  setProperty(key, value) {
    this._memoryStorage[key] = null !== value ? value : void 0;
  }
  constructor() {
    this._memoryStorage = {};
  }
};

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/client.mjs
var MINIMUM_POLLING_INTERVAL = 100;
var THIRTY_SECONDS = 3e4;
var MAX_CACHE_SIZE = 5e4;
var WAITUNTIL_DEBOUNCE_MS = 50;
var WAITUNTIL_MAX_WAIT_MS = 500;
var DEFAULT_NODE_HOST = "https://us.i.posthog.com";
var _emittedDeprecations = /* @__PURE__ */ new Set();
function emitDeprecationWarningOnce(id, message) {
  if (_emittedDeprecations.has(id)) return;
  _emittedDeprecations.add(id);
  console.warn(`[PostHog] ${message}`);
}
__name(emitDeprecationWarningOnce, "emitDeprecationWarningOnce");
function normalizeApiKey(value) {
  return "string" == typeof value ? value.trim() : "";
}
__name(normalizeApiKey, "normalizeApiKey");
function normalizePersonalApiKey(value) {
  const normalizedValue = "string" == typeof value ? value.trim() : "";
  return normalizedValue || void 0;
}
__name(normalizePersonalApiKey, "normalizePersonalApiKey");
function normalizeHost(value) {
  const normalizedValue = "string" == typeof value ? value.trim() : "";
  return normalizedValue || DEFAULT_NODE_HOST;
}
__name(normalizeHost, "normalizeHost");
function buildFlagEventProperties(flagValues) {
  if (!flagValues) return {};
  const additionalProperties = {};
  for (const [feature, variant] of Object.entries(flagValues)) additionalProperties[`$feature/${feature}`] = variant;
  const activeFlags = Object.keys(flagValues).filter((flag) => false !== flagValues[flag]).sort();
  if (activeFlags.length > 0) additionalProperties["$active_feature_flags"] = activeFlags;
  return additionalProperties;
}
__name(buildFlagEventProperties, "buildFlagEventProperties");
var PostHogBackendClient = class extends PostHogCoreStateless {
  static {
    __name(this, "PostHogBackendClient");
  }
  constructor(apiKey, options = {}) {
    const normalizedApiKey = normalizeApiKey(apiKey);
    const normalizedOptions = {
      ...options,
      host: normalizeHost(options.host),
      personalApiKey: normalizePersonalApiKey(options.personalApiKey)
    };
    super(normalizedApiKey, normalizedOptions), this._memoryStorage = new PostHogMemoryStorage();
    this.options = normalizedOptions;
    this.context = this.initializeContext();
    this.options.featureFlagsPollingInterval = "number" == typeof normalizedOptions.featureFlagsPollingInterval ? Math.max(normalizedOptions.featureFlagsPollingInterval, MINIMUM_POLLING_INTERVAL) : THIRTY_SECONDS;
    if ("number" == typeof normalizedOptions.waitUntilDebounceMs) this.options.waitUntilDebounceMs = Math.max(normalizedOptions.waitUntilDebounceMs, 0);
    if ("number" == typeof normalizedOptions.waitUntilMaxWaitMs) this.options.waitUntilMaxWaitMs = Math.max(normalizedOptions.waitUntilMaxWaitMs, 0);
    if (normalizedOptions.personalApiKey) {
      if (normalizedOptions.personalApiKey.includes("phc_")) throw new Error('Your Personal API key is invalid. These keys are prefixed with "phx_" and can be created in PostHog project settings.');
      const shouldEnableLocalEvaluation = false !== normalizedOptions.enableLocalEvaluation;
      if (shouldEnableLocalEvaluation) this.featureFlagsPoller = new FeatureFlagsPoller({
        pollingInterval: this.options.featureFlagsPollingInterval,
        personalApiKey: normalizedOptions.personalApiKey,
        projectApiKey: normalizedApiKey,
        timeout: normalizedOptions.requestTimeout ?? 1e4,
        host: this.host,
        fetch: normalizedOptions.fetch,
        onError: /* @__PURE__ */ __name((err) => {
          this._events.emit("error", err);
        }, "onError"),
        onLoad: /* @__PURE__ */ __name((count) => {
          this._events.emit("localEvaluationFlagsLoaded", count);
        }, "onLoad"),
        customHeaders: this.getCustomHeaders(),
        cacheProvider: normalizedOptions.flagDefinitionCacheProvider,
        strictLocalEvaluation: normalizedOptions.strictLocalEvaluation
      });
    }
    this.errorTracking = new ErrorTracking(this, normalizedOptions, this._logger);
    this.distinctIdHasSentFlagCalls = {};
    this.maxCacheSize = normalizedOptions.maxCacheSize || MAX_CACHE_SIZE;
  }
  enqueue(type, message, options) {
    super.enqueue(type, message, options);
    this.scheduleDebouncedFlush();
  }
  async flush() {
    const flushPromise = super.flush();
    const waitUntil = this.options.waitUntil;
    if (waitUntil && !this._waitUntilCycle) try {
      waitUntil(flushPromise.catch(() => {
      }));
    } catch {
    }
    return flushPromise;
  }
  scheduleDebouncedFlush() {
    const waitUntil = this.options.waitUntil;
    if (!waitUntil) return;
    if (this.disabled || this.optedOut) return;
    if (!this._waitUntilCycle) {
      let resolve;
      const promise = new Promise((r) => {
        resolve = r;
      });
      try {
        waitUntil(promise);
      } catch {
        return;
      }
      this._waitUntilCycle = {
        resolve,
        startedAt: Date.now(),
        timer: void 0
      };
    }
    const elapsed = Date.now() - this._waitUntilCycle.startedAt;
    const maxWaitMs = this.options.waitUntilMaxWaitMs ?? WAITUNTIL_MAX_WAIT_MS;
    const flushNow = elapsed >= maxWaitMs;
    if (void 0 !== this._waitUntilCycle.timer) clearTimeout(this._waitUntilCycle.timer);
    if (flushNow) return void this.resolveWaitUntilFlush();
    const debounceMs = this.options.waitUntilDebounceMs ?? WAITUNTIL_DEBOUNCE_MS;
    this._waitUntilCycle.timer = safeSetTimeout(() => {
      this.resolveWaitUntilFlush();
    }, debounceMs);
  }
  _consumeWaitUntilCycle() {
    const cycle = this._waitUntilCycle;
    if (cycle) {
      clearTimeout(cycle.timer);
      this._waitUntilCycle = void 0;
    }
    return cycle?.resolve;
  }
  async resolveWaitUntilFlush() {
    const resolve = this._consumeWaitUntilCycle();
    try {
      await super.flush();
    } catch {
    } finally {
      resolve?.();
    }
  }
  getPersistedProperty(key) {
    return this._memoryStorage.getProperty(key);
  }
  setPersistedProperty(key, value) {
    return this._memoryStorage.setProperty(key, value);
  }
  fetch(url, options) {
    return this.options.fetch ? this.options.fetch(url, options) : fetch(url, options);
  }
  getLibraryVersion() {
    return version;
  }
  getCustomUserAgent() {
    return `${this.getLibraryId()}/${this.getLibraryVersion()}`;
  }
  enable() {
    return super.optIn();
  }
  disable() {
    return super.optOut();
  }
  debug(enabled = true) {
    super.debug(enabled);
    this.featureFlagsPoller?.debug(enabled);
  }
  capture(props) {
    if ("string" == typeof props) this._logger.warn("Called capture() with a string as the first argument when an object was expected.");
    if ("$exception" === props.event && !props._originatedFromCaptureException) this._logger.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically.");
    this.addPendingPromise(this.prepareEventMessage(props).then(({ distinctId, event, properties, options }) => super.captureStateless(distinctId, event, properties, {
      timestamp: options.timestamp,
      disableGeoip: options.disableGeoip,
      uuid: options.uuid
    })).catch((err) => {
      if (err) console.error(err);
    }));
  }
  async captureImmediate(props) {
    if ("string" == typeof props) this._logger.warn("Called captureImmediate() with a string as the first argument when an object was expected.");
    if ("$exception" === props.event && !props._originatedFromCaptureException) this._logger.warn("Capturing a `$exception` event via `posthog.captureImmediate('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureExceptionImmediate(error)` instead, which attaches this metadata by default.");
    return this.addPendingPromise(this.prepareEventMessage(props).then(({ distinctId, event, properties, options }) => super.captureStatelessImmediate(distinctId, event, properties, {
      timestamp: options.timestamp,
      disableGeoip: options.disableGeoip,
      uuid: options.uuid
    })).catch((err) => {
      if (err) console.error(err);
    }));
  }
  identify({ distinctId, properties = {}, disableGeoip }) {
    const { $set, $set_once, $anon_distinct_id, ...rest } = properties;
    const setProps = $set || rest;
    const setOnceProps = $set_once || {};
    const eventProperties = {
      $set: setProps,
      $set_once: setOnceProps,
      $anon_distinct_id: $anon_distinct_id ?? void 0
    };
    super.identifyStateless(distinctId, eventProperties, {
      disableGeoip
    });
  }
  async identifyImmediate({ distinctId, properties = {}, disableGeoip }) {
    const { $set, $set_once, $anon_distinct_id, ...rest } = properties;
    const setProps = $set || rest;
    const setOnceProps = $set_once || {};
    const eventProperties = {
      $set: setProps,
      $set_once: setOnceProps,
      $anon_distinct_id: $anon_distinct_id ?? void 0
    };
    await super.identifyStatelessImmediate(distinctId, eventProperties, {
      disableGeoip
    });
  }
  alias(data) {
    super.aliasStateless(data.alias, data.distinctId, void 0, {
      disableGeoip: data.disableGeoip
    });
  }
  async aliasImmediate(data) {
    await super.aliasStatelessImmediate(data.alias, data.distinctId, void 0, {
      disableGeoip: data.disableGeoip
    });
  }
  isLocalEvaluationReady() {
    return this.featureFlagsPoller?.isLocalEvaluationReady() ?? false;
  }
  async waitForLocalEvaluationReady(timeoutMs = THIRTY_SECONDS) {
    if (this.isLocalEvaluationReady()) return true;
    if (void 0 === this.featureFlagsPoller) return false;
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        cleanup();
        resolve(false);
      }, timeoutMs);
      const cleanup = this._events.on("localEvaluationFlagsLoaded", (count) => {
        clearTimeout(timeout);
        cleanup();
        resolve(count > 0);
      });
    });
  }
  _resolveDistinctId(distinctIdOrOptions, options) {
    if ("string" == typeof distinctIdOrOptions) return {
      distinctId: distinctIdOrOptions,
      options
    };
    return {
      distinctId: this.context?.get()?.distinctId,
      options: distinctIdOrOptions
    };
  }
  async _getFeatureFlagResult(key, distinctId, options = {}, matchValue) {
    const sendFeatureFlagEvents = options.sendFeatureFlagEvents ?? true;
    if (void 0 !== this._flagOverrides && key in this._flagOverrides) {
      const overrideValue = this._flagOverrides[key];
      if (void 0 === overrideValue) return;
      const overridePayload = this._payloadOverrides?.[key];
      return {
        key,
        enabled: false !== overrideValue,
        variant: "string" == typeof overrideValue ? overrideValue : void 0,
        payload: overridePayload
      };
    }
    const { groups, disableGeoip } = options;
    let { onlyEvaluateLocally, personProperties, groupProperties } = options;
    const adjustedProperties = this.addLocalPersonAndGroupProperties(distinctId, groups, personProperties, groupProperties);
    personProperties = adjustedProperties.allPersonProperties;
    groupProperties = adjustedProperties.allGroupProperties;
    const evaluationContext = this.createFeatureFlagEvaluationContext(distinctId, groups, personProperties, groupProperties);
    if (void 0 == onlyEvaluateLocally) onlyEvaluateLocally = this.options.strictLocalEvaluation ?? false;
    let result;
    let flagWasLocallyEvaluated = false;
    let requestId;
    let evaluatedAt;
    let featureFlagError;
    let flagId;
    let flagVersion;
    let flagReason;
    const localEvaluationEnabled = void 0 !== this.featureFlagsPoller;
    if (localEvaluationEnabled) {
      await this.featureFlagsPoller?.loadFeatureFlags();
      const flag = this.featureFlagsPoller?.featureFlagsByKey[key];
      if (flag) try {
        const localResult = await this.featureFlagsPoller?.computeFlagAndPayloadLocally(flag, evaluationContext, {
          matchValue
        });
        if (localResult) {
          flagWasLocallyEvaluated = true;
          const value = localResult.value;
          flagId = flag.id;
          flagReason = "Evaluated locally";
          result = {
            key,
            enabled: false !== value,
            variant: "string" == typeof value ? value : void 0,
            payload: localResult.payload ?? void 0
          };
        }
      } catch (e) {
        if (e instanceof RequiresServerEvaluation || e instanceof InconclusiveMatchError) this._logger?.info(`${e.name} when computing flag locally: ${key}: ${e.message}`);
        else throw e;
      }
    }
    if (!flagWasLocallyEvaluated && !onlyEvaluateLocally) {
      const flagsResponse = await super.getFeatureFlagDetailsStateless(evaluationContext.distinctId, evaluationContext.groups, evaluationContext.personProperties, evaluationContext.groupProperties, disableGeoip, [
        key
      ]);
      if (void 0 === flagsResponse) featureFlagError = FeatureFlagError2.UNKNOWN_ERROR;
      else {
        requestId = flagsResponse.requestId;
        evaluatedAt = flagsResponse.evaluatedAt;
        const errors = [];
        if (flagsResponse.errorsWhileComputingFlags) errors.push(FeatureFlagError2.ERRORS_WHILE_COMPUTING);
        if (flagsResponse.quotaLimited?.includes("feature_flags")) errors.push(FeatureFlagError2.QUOTA_LIMITED);
        const flagDetail = flagsResponse.flags[key];
        if (void 0 === flagDetail) errors.push(FeatureFlagError2.FLAG_MISSING);
        else {
          flagId = flagDetail.metadata?.id;
          flagVersion = flagDetail.metadata?.version;
          flagReason = flagDetail.reason?.description ?? flagDetail.reason?.code;
          let parsedPayload;
          if (flagDetail.metadata?.payload !== void 0) try {
            parsedPayload = JSON.parse(flagDetail.metadata.payload);
          } catch {
            parsedPayload = flagDetail.metadata.payload;
          }
          result = {
            key,
            enabled: flagDetail.enabled,
            variant: flagDetail.variant,
            payload: parsedPayload
          };
        }
        if (errors.length > 0) featureFlagError = errors.join(",");
      }
    }
    if (sendFeatureFlagEvents) {
      const response = void 0 === result ? void 0 : false === result.enabled ? false : result.variant ?? true;
      const properties = {
        $feature_flag: key,
        $feature_flag_response: response,
        $feature_flag_id: flagId,
        $feature_flag_version: flagVersion,
        $feature_flag_reason: flagReason,
        locally_evaluated: flagWasLocallyEvaluated,
        [`$feature/${key}`]: response,
        $feature_flag_request_id: requestId,
        $feature_flag_evaluated_at: flagWasLocallyEvaluated ? Date.now() : evaluatedAt
      };
      if (flagWasLocallyEvaluated && this.featureFlagsPoller) {
        const flagDefinitionsLoadedAt = this.featureFlagsPoller.getFlagDefinitionsLoadedAt();
        if (void 0 !== flagDefinitionsLoadedAt) properties.$feature_flag_definitions_loaded_at = flagDefinitionsLoadedAt;
      }
      if (featureFlagError) properties.$feature_flag_error = featureFlagError;
      this._captureFlagCalledEventIfNeeded({
        distinctId,
        key,
        response,
        groups,
        disableGeoip,
        properties
      });
    }
    if (void 0 !== result && void 0 !== this._payloadOverrides && key in this._payloadOverrides) result = {
      ...result,
      payload: this._payloadOverrides[key]
    };
    return result;
  }
  async getFeatureFlag(key, distinctId, options) {
    emitDeprecationWarningOnce("getFeatureFlag", "`getFeatureFlag` is deprecated and will be removed in a future major version. Use `posthog.evaluateFlags(distinctId, ...)` and call `flags.getFlag(key)` instead \u2014 this consolidates flag evaluation into a single `/flags` request per incoming request.");
    const result = await this._getFeatureFlagResult(key, distinctId, {
      ...options,
      sendFeatureFlagEvents: options?.sendFeatureFlagEvents ?? this.options.sendFeatureFlagEvent ?? true
    });
    if (void 0 === result) return;
    if (false === result.enabled) return false;
    return result.variant ?? true;
  }
  async getFeatureFlagPayload(key, distinctId, matchValue, options) {
    emitDeprecationWarningOnce("getFeatureFlagPayload", "`getFeatureFlagPayload` is deprecated and will be removed in a future major version. Use `posthog.evaluateFlags(distinctId, ...)` and call `flags.getFlagPayload(key)` instead \u2014 this consolidates flag evaluation into a single `/flags` request per incoming request.");
    if (void 0 !== this._payloadOverrides && key in this._payloadOverrides) return this._payloadOverrides[key];
    const result = await this._getFeatureFlagResult(key, distinctId, {
      ...options,
      sendFeatureFlagEvents: false
    }, matchValue);
    if (void 0 === result) return;
    return result.payload ?? null;
  }
  async getFeatureFlagResult(key, distinctIdOrOptions, options) {
    const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
    if (!resolvedDistinctId) return void this._logger.warn("[PostHog] distinctId is required \u2014 pass it explicitly or use withContext()");
    return this._getFeatureFlagResult(key, resolvedDistinctId, {
      ...resolvedOptions,
      sendFeatureFlagEvents: resolvedOptions?.sendFeatureFlagEvents ?? this.options.sendFeatureFlagEvent ?? true
    });
  }
  async getRemoteConfigPayload(flagKey) {
    if (!this.options.personalApiKey) throw new Error("Personal API key is required for remote config payload decryption");
    const response = await this._requestRemoteConfigPayload(flagKey);
    if (!response) return;
    const parsed = await response.json();
    if ("string" == typeof parsed) try {
      return JSON.parse(parsed);
    } catch (e) {
    }
    return parsed;
  }
  async isFeatureEnabled(key, distinctId, options) {
    emitDeprecationWarningOnce("isFeatureEnabled", "`isFeatureEnabled` is deprecated and will be removed in a future major version. Use `posthog.evaluateFlags(distinctId, ...)` and call `flags.isEnabled(key)` instead \u2014 this consolidates flag evaluation into a single `/flags` request per incoming request.");
    const result = await this._getFeatureFlagResult(key, distinctId, {
      ...options,
      sendFeatureFlagEvents: options?.sendFeatureFlagEvents ?? this.options.sendFeatureFlagEvent ?? true
    });
    if (void 0 === result) return;
    if (false === result.enabled) return false;
    const feat = result.variant ?? true;
    return !!feat || false;
  }
  async getAllFlags(distinctIdOrOptions, options) {
    const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
    if (!resolvedDistinctId) {
      this._logger.warn("[PostHog] distinctId is required to get feature flags \u2014 pass it explicitly or use withContext()");
      return {};
    }
    const response = await this.getAllFlagsAndPayloads(resolvedDistinctId, resolvedOptions);
    return response.featureFlags || {};
  }
  async getAllFlagsAndPayloads(distinctIdOrOptions, options) {
    const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
    if (!resolvedDistinctId) {
      this._logger.warn("[PostHog] distinctId is required to get feature flags and payloads \u2014 pass it explicitly or use withContext()");
      return {
        featureFlags: {},
        featureFlagPayloads: {}
      };
    }
    const { groups, disableGeoip, flagKeys } = resolvedOptions || {};
    let { onlyEvaluateLocally, personProperties, groupProperties } = resolvedOptions || {};
    const adjustedProperties = this.addLocalPersonAndGroupProperties(resolvedDistinctId, groups, personProperties, groupProperties);
    personProperties = adjustedProperties.allPersonProperties;
    groupProperties = adjustedProperties.allGroupProperties;
    const evaluationContext = this.createFeatureFlagEvaluationContext(resolvedDistinctId, groups, personProperties, groupProperties);
    if (void 0 == onlyEvaluateLocally) onlyEvaluateLocally = this.options.strictLocalEvaluation ?? false;
    const localEvaluationResult = await this.featureFlagsPoller?.getAllFlagsAndPayloads(evaluationContext, flagKeys);
    let featureFlags = {};
    let featureFlagPayloads = {};
    let fallbackToFlags = true;
    if (localEvaluationResult) {
      featureFlags = localEvaluationResult.response;
      featureFlagPayloads = localEvaluationResult.payloads;
      fallbackToFlags = localEvaluationResult.fallbackToFlags;
    }
    if (fallbackToFlags && !onlyEvaluateLocally) {
      const remoteEvaluationResult = await super.getFeatureFlagsAndPayloadsStateless(evaluationContext.distinctId, evaluationContext.groups, evaluationContext.personProperties, evaluationContext.groupProperties, disableGeoip, flagKeys);
      featureFlags = {
        ...featureFlags,
        ...remoteEvaluationResult.flags || {}
      };
      featureFlagPayloads = {
        ...featureFlagPayloads,
        ...remoteEvaluationResult.payloads || {}
      };
    }
    if (void 0 !== this._flagOverrides) featureFlags = {
      ...featureFlags,
      ...this._flagOverrides
    };
    if (void 0 !== this._payloadOverrides) featureFlagPayloads = {
      ...featureFlagPayloads,
      ...this._payloadOverrides
    };
    return {
      featureFlags,
      featureFlagPayloads
    };
  }
  async evaluateFlags(distinctIdOrOptions, options) {
    const { distinctId: resolvedDistinctId, options: resolvedOptions } = this._resolveDistinctId(distinctIdOrOptions, options);
    if (!resolvedDistinctId) {
      this._logger.warn("[PostHog] distinctId is required to evaluate feature flags \u2014 pass it explicitly or use withContext()");
      return new FeatureFlagEvaluations({
        host: this._getFeatureFlagEvaluationsHost(),
        distinctId: "",
        flags: {}
      });
    }
    const { groups, disableGeoip, flagKeys } = resolvedOptions || {};
    let { onlyEvaluateLocally, personProperties, groupProperties } = resolvedOptions || {};
    const adjustedProperties = this.addLocalPersonAndGroupProperties(resolvedDistinctId, groups, personProperties, groupProperties);
    personProperties = adjustedProperties.allPersonProperties;
    groupProperties = adjustedProperties.allGroupProperties;
    const evaluationContext = this.createFeatureFlagEvaluationContext(resolvedDistinctId, groups, personProperties, groupProperties);
    if (void 0 == onlyEvaluateLocally) onlyEvaluateLocally = this.options.strictLocalEvaluation ?? false;
    const records = {};
    let requestId;
    let evaluatedAt;
    let errorsWhileComputing = false;
    let quotaLimited = false;
    const localResult = await this.featureFlagsPoller?.getAllFlagsAndPayloads(evaluationContext, flagKeys);
    const locallyEvaluatedKeys = /* @__PURE__ */ new Set();
    if (localResult) for (const [key, value] of Object.entries(localResult.response)) {
      const flagDef = this.featureFlagsPoller?.featureFlagsByKey[key];
      records[key] = {
        key,
        enabled: false !== value,
        variant: "string" == typeof value ? value : void 0,
        payload: localResult.payloads[key],
        id: flagDef?.id,
        version: void 0,
        reason: "Evaluated locally",
        locallyEvaluated: true
      };
      locallyEvaluatedKeys.add(key);
    }
    const fallbackToFlags = localResult ? localResult.fallbackToFlags : true;
    if (fallbackToFlags && !onlyEvaluateLocally) {
      const details = await super.getFeatureFlagDetailsStateless(evaluationContext.distinctId, evaluationContext.groups, evaluationContext.personProperties, evaluationContext.groupProperties, disableGeoip, flagKeys);
      if (details) {
        requestId = details.requestId;
        evaluatedAt = details.evaluatedAt;
        errorsWhileComputing = Boolean(details.errorsWhileComputingFlags);
        quotaLimited = Array.isArray(details.quotaLimited) && details.quotaLimited.includes("feature_flags");
        for (const [key, detail] of Object.entries(details.flags)) {
          if (locallyEvaluatedKeys.has(key)) continue;
          let parsedPayload;
          if (detail.metadata?.payload !== void 0) try {
            parsedPayload = JSON.parse(detail.metadata.payload);
          } catch {
            parsedPayload = detail.metadata.payload;
          }
          records[key] = {
            key,
            enabled: detail.enabled,
            variant: detail.variant,
            payload: parsedPayload,
            id: detail.metadata?.id,
            version: detail.metadata?.version,
            reason: detail.reason?.description ?? detail.reason?.code,
            locallyEvaluated: false
          };
        }
      }
    }
    if (void 0 !== this._flagOverrides) for (const [key, value] of Object.entries(this._flagOverrides)) {
      if (void 0 === value) {
        delete records[key];
        continue;
      }
      const existing = records[key];
      records[key] = {
        key,
        enabled: false !== value,
        variant: "string" == typeof value ? value : void 0,
        payload: existing?.payload,
        id: existing?.id,
        version: existing?.version,
        reason: existing?.reason,
        locallyEvaluated: existing?.locallyEvaluated ?? false
      };
    }
    if (void 0 !== this._payloadOverrides) for (const [key, payload] of Object.entries(this._payloadOverrides)) {
      const existing = records[key];
      if (existing) records[key] = {
        ...existing,
        payload
      };
    }
    return new FeatureFlagEvaluations({
      host: this._getFeatureFlagEvaluationsHost(),
      distinctId: resolvedDistinctId,
      groups,
      disableGeoip,
      flags: records,
      requestId,
      evaluatedAt,
      flagDefinitionsLoadedAt: this.featureFlagsPoller?.getFlagDefinitionsLoadedAt(),
      errorsWhileComputing,
      quotaLimited
    });
  }
  _captureFlagCalledEventIfNeeded(params) {
    const { distinctId, key, response, groups, disableGeoip, properties } = params;
    const groupSuffix = groups && Object.keys(groups).length > 0 ? `_${JSON.stringify(Object.entries(groups).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0))}` : "";
    const featureFlagReportedKey = `${key}_${response}${groupSuffix}`;
    if (distinctId in this.distinctIdHasSentFlagCalls && this.distinctIdHasSentFlagCalls[distinctId].has(featureFlagReportedKey)) return;
    if (Object.keys(this.distinctIdHasSentFlagCalls).length >= this.maxCacheSize) this.distinctIdHasSentFlagCalls = {};
    if (this.distinctIdHasSentFlagCalls[distinctId] instanceof Set) this.distinctIdHasSentFlagCalls[distinctId].add(featureFlagReportedKey);
    else this.distinctIdHasSentFlagCalls[distinctId] = /* @__PURE__ */ new Set([
      featureFlagReportedKey
    ]);
    this.capture({
      distinctId,
      event: "$feature_flag_called",
      properties,
      groups,
      disableGeoip
    });
  }
  _getFeatureFlagEvaluationsHost() {
    if (!this._featureFlagEvaluationsHost) this._featureFlagEvaluationsHost = {
      captureFlagCalledEventIfNeeded: /* @__PURE__ */ __name((params) => this._captureFlagCalledEventIfNeeded(params), "captureFlagCalledEventIfNeeded"),
      logWarning: /* @__PURE__ */ __name((message) => {
        if (false !== this.options.featureFlagsLogWarnings) console.warn(`[PostHog] ${message}`);
      }, "logWarning")
    };
    return this._featureFlagEvaluationsHost;
  }
  groupIdentify({ groupType, groupKey, properties, distinctId, disableGeoip }) {
    super.groupIdentifyStateless(groupType, groupKey, properties, {
      disableGeoip
    }, distinctId);
  }
  async reloadFeatureFlags() {
    await this.featureFlagsPoller?.loadFeatureFlags(true);
  }
  overrideFeatureFlags(overrides) {
    const flagArrayToRecord = /* @__PURE__ */ __name((flags) => Object.fromEntries(flags.map((f) => [
      f,
      true
    ])), "flagArrayToRecord");
    if (false === overrides) {
      this._flagOverrides = void 0;
      this._payloadOverrides = void 0;
      return;
    }
    if (Array.isArray(overrides)) {
      this._flagOverrides = flagArrayToRecord(overrides);
      return;
    }
    if (this._isFeatureFlagOverrideOptions(overrides)) {
      if ("flags" in overrides) {
        if (false === overrides.flags) this._flagOverrides = void 0;
        else if (Array.isArray(overrides.flags)) this._flagOverrides = flagArrayToRecord(overrides.flags);
        else if (void 0 !== overrides.flags) this._flagOverrides = {
          ...overrides.flags
        };
      }
      if ("payloads" in overrides) {
        if (false === overrides.payloads) this._payloadOverrides = void 0;
        else if (void 0 !== overrides.payloads) this._payloadOverrides = {
          ...overrides.payloads
        };
      }
      return;
    }
    this._flagOverrides = {
      ...overrides
    };
  }
  _isFeatureFlagOverrideOptions(overrides) {
    if ("object" != typeof overrides || null === overrides || Array.isArray(overrides)) return false;
    const obj = overrides;
    if ("flags" in obj) {
      const flagsValue = obj["flags"];
      if (false === flagsValue || Array.isArray(flagsValue) || "object" == typeof flagsValue && null !== flagsValue) return true;
    }
    if ("payloads" in obj) {
      const payloadsValue = obj["payloads"];
      if (false === payloadsValue || "object" == typeof payloadsValue && null !== payloadsValue) return true;
    }
    return false;
  }
  withContext(data, fn, options) {
    if (!this.context) return fn();
    return this.context.run(data, fn, options);
  }
  getContext() {
    return this.context?.get();
  }
  enterContext(data, options) {
    this.context?.enter(data, options);
  }
  async _shutdown(shutdownTimeoutMs) {
    const resolve = this._consumeWaitUntilCycle();
    await this.featureFlagsPoller?.stopPoller(shutdownTimeoutMs);
    this.errorTracking.shutdown();
    try {
      return await super._shutdown(shutdownTimeoutMs);
    } finally {
      resolve?.();
    }
  }
  async _requestRemoteConfigPayload(flagKey) {
    if (!this.options.personalApiKey) return;
    const url = `${this.host}/api/projects/@current/feature_flags/${flagKey}/remote_config?token=${encodeURIComponent(this.apiKey)}`;
    const options = {
      method: "GET",
      headers: {
        ...this.getCustomHeaders(),
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.options.personalApiKey}`
      }
    };
    let abortTimeout = null;
    if (this.options.requestTimeout && "number" == typeof this.options.requestTimeout) {
      const controller = new AbortController();
      abortTimeout = safeSetTimeout(() => {
        controller.abort();
      }, this.options.requestTimeout);
      options.signal = controller.signal;
    }
    try {
      return await this.fetch(url, options);
    } catch (error) {
      this._events.emit("error", error);
      return;
    } finally {
      if (abortTimeout) clearTimeout(abortTimeout);
    }
  }
  extractPropertiesFromEvent(eventProperties, groups) {
    if (!eventProperties) return {
      personProperties: {},
      groupProperties: {}
    };
    const personProperties = {};
    const groupProperties = {};
    for (const [key, value] of Object.entries(eventProperties)) if (isPlainObject(value) && groups && key in groups) {
      const groupProps = {};
      for (const [groupKey, groupValue] of Object.entries(value)) groupProps[String(groupKey)] = String(groupValue);
      groupProperties[String(key)] = groupProps;
    } else personProperties[String(key)] = String(value);
    return {
      personProperties,
      groupProperties
    };
  }
  async getFeatureFlagsForEvent(distinctId, groups, disableGeoip, sendFeatureFlagsOptions) {
    const finalPersonProperties = sendFeatureFlagsOptions?.personProperties || {};
    const finalGroupProperties = sendFeatureFlagsOptions?.groupProperties || {};
    const flagKeys = sendFeatureFlagsOptions?.flagKeys;
    const onlyEvaluateLocally = sendFeatureFlagsOptions?.onlyEvaluateLocally ?? this.options.strictLocalEvaluation ?? false;
    if (onlyEvaluateLocally) if (!((this.featureFlagsPoller?.featureFlags?.length || 0) > 0)) return {};
    else {
      const groupsWithStringValues = {};
      for (const [key, value] of Object.entries(groups || {})) groupsWithStringValues[key] = String(value);
      return await this.getAllFlags(distinctId, {
        groups: groupsWithStringValues,
        personProperties: finalPersonProperties,
        groupProperties: finalGroupProperties,
        disableGeoip,
        onlyEvaluateLocally: true,
        flagKeys
      });
    }
    if ((this.featureFlagsPoller?.featureFlags?.length || 0) > 0) {
      const groupsWithStringValues = {};
      for (const [key, value] of Object.entries(groups || {})) groupsWithStringValues[key] = String(value);
      return await this.getAllFlags(distinctId, {
        groups: groupsWithStringValues,
        personProperties: finalPersonProperties,
        groupProperties: finalGroupProperties,
        disableGeoip,
        onlyEvaluateLocally: true,
        flagKeys
      });
    }
    return (await super.getFeatureFlagsStateless(distinctId, groups, finalPersonProperties, finalGroupProperties, disableGeoip)).flags;
  }
  addLocalPersonAndGroupProperties(distinctId, groups, personProperties, groupProperties) {
    const allPersonProperties = {
      distinct_id: distinctId,
      ...personProperties || {}
    };
    const allGroupProperties = {};
    if (groups) for (const groupName of Object.keys(groups)) allGroupProperties[groupName] = {
      $group_key: groups[groupName],
      ...groupProperties?.[groupName] || {}
    };
    return {
      allPersonProperties,
      allGroupProperties
    };
  }
  createFeatureFlagEvaluationContext(distinctId, groups, personProperties, groupProperties) {
    return {
      distinctId,
      groups: groups || {},
      personProperties: personProperties || {},
      groupProperties: groupProperties || {},
      evaluationCache: {}
    };
  }
  captureException(error, distinctId, additionalProperties, uuid, flags) {
    if (!ErrorTracking.isPreviouslyCapturedError(error)) {
      const syntheticException = new Error("PostHog syntheticException");
      this.addPendingPromise(ErrorTracking.buildEventMessage(error, {
        syntheticException
      }, distinctId, additionalProperties).then((msg) => this.capture({
        ...msg,
        uuid,
        flags
      })));
    }
  }
  async captureExceptionImmediate(error, distinctId, additionalProperties, flags) {
    if (!ErrorTracking.isPreviouslyCapturedError(error)) {
      const syntheticException = new Error("PostHog syntheticException");
      return this.addPendingPromise(ErrorTracking.buildEventMessage(error, {
        syntheticException
      }, distinctId, additionalProperties).then((msg) => this.captureImmediate({
        ...msg,
        flags
      })));
    }
  }
  async prepareEventMessage(props) {
    const { distinctId, event, properties, groups, flags, sendFeatureFlags, timestamp, disableGeoip, uuid } = props;
    const contextData = this.context?.get();
    let mergedDistinctId = distinctId || contextData?.distinctId;
    const mergedProperties = {
      ...this.props,
      ...contextData?.properties || {},
      ...properties || {}
    };
    if (!mergedDistinctId) {
      mergedDistinctId = uuidv7();
      mergedProperties.$process_person_profile = false;
    }
    if (contextData?.sessionId && !mergedProperties.$session_id) mergedProperties.$session_id = contextData.sessionId;
    const eventMessage = this._runBeforeSend({
      distinctId: mergedDistinctId,
      event,
      properties: mergedProperties,
      groups,
      flags,
      sendFeatureFlags,
      timestamp,
      disableGeoip,
      uuid
    });
    if (!eventMessage) return Promise.reject(null);
    const eventProperties = await Promise.resolve().then(async () => {
      if (flags) {
        if (sendFeatureFlags) console.warn("[PostHog] Both `flags` and `sendFeatureFlags` were passed to capture(); using `flags` and ignoring `sendFeatureFlags`.");
        return flags._getEventProperties();
      }
      if (sendFeatureFlags) {
        emitDeprecationWarningOnce("sendFeatureFlags", "`sendFeatureFlags` is deprecated and will be removed in a future major version. Pass a `flags` snapshot from `posthog.evaluateFlags(...)` instead \u2014 it avoids a second `/flags` request per capture and guarantees the event carries the exact flag values your code branched on.");
        const sendFeatureFlagsOptions = "object" == typeof sendFeatureFlags ? sendFeatureFlags : void 0;
        const flagValues = await this.getFeatureFlagsForEvent(eventMessage.distinctId, groups, disableGeoip, sendFeatureFlagsOptions);
        return buildFlagEventProperties(flagValues);
      }
      return {};
    }).catch(() => ({})).then((additionalProperties) => {
      const props2 = {
        ...additionalProperties,
        ...eventMessage.properties || {},
        $groups: eventMessage.groups || groups
      };
      return props2;
    });
    if ("$pageview" === eventMessage.event && this.options.__preview_capture_bot_pageviews && "string" == typeof eventProperties.$raw_user_agent) {
      if (isBlockedUA(eventProperties.$raw_user_agent, this.options.custom_blocked_useragents || [])) {
        eventMessage.event = "$bot_pageview";
        eventProperties.$browser_type = "bot";
      }
    }
    return {
      distinctId: eventMessage.distinctId,
      event: eventMessage.event,
      properties: eventProperties,
      options: {
        timestamp: eventMessage.timestamp,
        disableGeoip: eventMessage.disableGeoip,
        uuid: eventMessage.uuid
      }
    };
  }
  _runBeforeSend(eventMessage) {
    const beforeSend = this.options.before_send;
    if (!beforeSend) return eventMessage;
    const fns = Array.isArray(beforeSend) ? beforeSend : [
      beforeSend
    ];
    let result = eventMessage;
    for (const fn of fns) {
      result = fn(result);
      if (!result) {
        this._logger.info(`Event '${eventMessage.event}' was rejected in beforeSend function`);
        return null;
      }
      if (!result.properties || 0 === Object.keys(result.properties).length) {
        const message = `Event '${result.event}' has no properties after beforeSend function, this is likely an error.`;
        this._logger.warn(message);
      }
    }
    return result;
  }
};

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/exports.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/sentry-integration.mjs
init_checked_fetch();
init_modules_watch_stub();
var NAME = "posthog-node";
function createEventProcessor(_posthog, { organization, projectId, prefix, severityAllowList = [
  "error"
], sendExceptionsToPostHog = true } = {}) {
  return (event) => {
    const shouldProcessLevel = "*" === severityAllowList || severityAllowList.includes(event.level);
    if (!shouldProcessLevel) return event;
    if (!event.tags) event.tags = {};
    const userId = event.tags[PostHogSentryIntegration.POSTHOG_ID_TAG];
    if (void 0 === userId) return event;
    const uiHost = _posthog.options.host ?? "https://us.i.posthog.com";
    const personUrl = new URL(`/project/${_posthog.apiKey}/person/${userId}`, uiHost).toString();
    event.tags["PostHog Person URL"] = personUrl;
    const exceptions = event.exception?.values || [];
    const exceptionList = exceptions.map((exception) => ({
      ...exception,
      stacktrace: exception.stacktrace ? {
        ...exception.stacktrace,
        type: "raw",
        frames: (exception.stacktrace.frames || []).map((frame) => ({
          ...frame,
          platform: "node:javascript"
        }))
      } : void 0
    }));
    const properties = {
      $exception_message: exceptions[0]?.value || event.message,
      $exception_type: exceptions[0]?.type,
      $exception_level: event.level,
      $exception_list: exceptionList,
      $sentry_event_id: event.event_id,
      $sentry_exception: event.exception,
      $sentry_exception_message: exceptions[0]?.value || event.message,
      $sentry_exception_type: exceptions[0]?.type,
      $sentry_tags: event.tags
    };
    if (organization && projectId) properties["$sentry_url"] = (prefix || "https://sentry.io/organizations/") + organization + "/issues/?project=" + projectId + "&query=" + event.event_id;
    if (sendExceptionsToPostHog) _posthog.capture({
      event: "$exception",
      distinctId: userId,
      properties
    });
    return event;
  };
}
__name(createEventProcessor, "createEventProcessor");
var PostHogSentryIntegration = class {
  static {
    __name(this, "PostHogSentryIntegration");
  }
  static #_ = this.POSTHOG_ID_TAG = "posthog_distinct_id";
  constructor(_posthog, organization, prefix, severityAllowList, sendExceptionsToPostHog) {
    this.name = NAME;
    this.name = NAME;
    this.setupOnce = function(addGlobalEventProcessor, getCurrentHub) {
      const projectId = getCurrentHub()?.getClient()?.getDsn()?.projectId;
      addGlobalEventProcessor(createEventProcessor(_posthog, {
        organization,
        projectId,
        prefix,
        severityAllowList,
        sendExceptionsToPostHog: sendExceptionsToPostHog ?? true
      }));
    };
  }
};

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/express.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/extensions/tracing-headers.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/posthog-node@5.35.5_rxjs@7.8.2/node_modules/posthog-node/dist/entrypoints/index.edge.mjs
ErrorTracking.errorPropertiesBuilder = new error_tracking_exports.ErrorPropertiesBuilder([
  new error_tracking_exports.EventCoercer(),
  new error_tracking_exports.ErrorCoercer(),
  new error_tracking_exports.ObjectCoercer(),
  new error_tracking_exports.StringCoercer(),
  new error_tracking_exports.PrimitiveCoercer()
], error_tracking_exports.createStackParser("node:javascript", error_tracking_exports.nodeStackLineParser));
var PostHog = class extends PostHogBackendClient {
  static {
    __name(this, "PostHog");
  }
  getLibraryId() {
    return "posthog-edge";
  }
  initializeContext() {
  }
};

// src/posthog.ts
function createPostHogClient(env) {
  return new PostHog(env.POSTHOG_TOKEN, {
    host: env.POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0
  });
}
__name(createPostHogClient, "createPostHogClient");

// src/index.ts
var import_db6 = __toESM(require_dist4());

// src/routes/github.ts
init_checked_fetch();
init_modules_watch_stub();
var import_db = __toESM(require_dist4());
var githubRouter = new Hono2();
githubRouter.post("/webhooks/github", async (c) => {
  const deliveryId = c.req.header("x-github-delivery");
  const event = c.req.header("x-github-event");
  const signature = c.req.header("x-hub-signature-256");
  if (!deliveryId || !event) {
    return c.json({ error: "Missing required headers" }, 400);
  }
  const rawBodyBuffer = await c.req.arrayBuffer();
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(c.env.GITHUB_WEBHOOK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const sigHex = signature?.replace("sha256=", "") || "";
  const sigBytes = new Uint8Array(sigHex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || []);
  try {
    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      rawBodyBuffer
    );
    if (!isValid) {
      return c.json({ error: "Invalid signature" }, 401);
    }
  } catch (e) {
    return c.json({ error: "Signature verification failed" }, 401);
  }
  const decoder = new TextDecoder();
  const rawBodyText = decoder.decode(rawBodyBuffer);
  let payload;
  try {
    payload = JSON.parse(rawBodyText);
  } catch (e) {
    return c.json({ error: "Invalid JSON" }, 400);
  }
  const prisma = (0, import_db.getPrisma)(c.env.DATABASE_URL);
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setDate(expiresAt.getDate() + parseInt(c.env.WEBHOOK_RETENTION_DAYS || "90"));
  const existing = await prisma.webhookDelivery.findUnique({
    where: { deliveryId }
  });
  if (existing) {
    return c.json({ received: true, duplicate: true, queued: false });
  }
  await prisma.webhookDelivery.create({
    data: {
      deliveryId,
      event,
      payload,
      status: "PENDING",
      expiresAt
    }
  });
  await c.env.CF_QUEUE_GITHUB_EVENTS.send({
    deliveryId,
    event
  });
  return c.json({ received: true, duplicate: false, queued: true });
});

// src/routes/drafts.ts
init_checked_fetch();
init_modules_watch_stub();
var import_db2 = __toESM(require_dist4());

// src/auth/middleware.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.12.23/node_modules/hono/dist/helper/factory/index.js
init_checked_fetch();
init_modules_watch_stub();
var createMiddleware = /* @__PURE__ */ __name((middleware) => middleware, "createMiddleware");

// src/auth/middleware.ts
var internalAuthMiddleware = createMiddleware(
  async (c, next) => {
    const userId = c.req.header("x-user-id");
    const workspaceId = c.req.header("x-workspace-id");
    const timestamp = c.req.header("x-request-timestamp");
    const signature = c.req.header("x-internal-signature");
    if (!userId || !workspaceId || !timestamp || !signature) {
      return c.json({ error: "Missing authentication headers" }, 401);
    }
    const ts = Number(timestamp);
    if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > 5 * 60 * 1e3) {
      return c.json({ error: "Request timestamp expired" }, 401);
    }
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(c.env.INTERNAL_API_SECRET || ""),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const dataToSign = `${userId}:${workspaceId}:${timestamp}`;
    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(dataToSign)
    );
    const expectedHex = Array.from(new Uint8Array(signatureBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
    if (expectedHex !== signature) {
      return c.json({ error: "Invalid request signature" }, 401);
    }
    c.set("auth", {
      userId,
      workspaceId,
      userEmail: c.req.header("x-user-email") ?? ""
    });
    await next();
  }
);

// src/routes/drafts.ts
var draftsRouter = new Hono2();
draftsRouter.use("*", internalAuthMiddleware);
draftsRouter.get("/", async (c) => {
  const auth = c.get("auth");
  const prisma = (0, import_db2.getPrisma)(c.env.DATABASE_URL);
  const drafts = await prisma.contentDraft.findMany({
    where: { workspaceId: auth.workspaceId },
    orderBy: { createdAt: "desc" }
  });
  return c.json(drafts);
});
draftsRouter.get("/:id", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = (0, import_db2.getPrisma)(c.env.DATABASE_URL);
  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId }
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);
  return c.json(draft);
});
draftsRouter.put("/:id", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const { generatedText } = await c.req.json();
  const prisma = (0, import_db2.getPrisma)(c.env.DATABASE_URL);
  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId }
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);
  if (draft.status === "PUBLISHED") {
    return c.json({ error: "Published drafts cannot be edited in place. Create a new version." }, 409);
  }
  const latestVersion = await prisma.draftVersion.findFirst({
    where: { draftId: id },
    orderBy: { version: "desc" }
  });
  const nextVersion = (latestVersion?.version ?? 0) + 1;
  const updated = await prisma.$transaction(async (tx) => {
    await tx.draftVersion.create({
      data: {
        draftId: id,
        version: nextVersion,
        fullText: generatedText,
        editedById: auth.userId
      }
    });
    return tx.contentDraft.update({
      where: { id },
      data: {
        generatedText,
        status: "DRAFT_EDITED"
      }
    });
  });
  return c.json(updated);
});
draftsRouter.post("/:id/approve", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = (0, import_db2.getPrisma)(c.env.DATABASE_URL);
  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId }
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);
  const updated = await prisma.contentDraft.update({
    where: { id },
    data: { status: "APPROVED" }
  });
  return c.json(updated);
});
draftsRouter.post("/:id/publish", async (c) => {
  const auth = c.get("auth");
  const id = c.req.param("id");
  const prisma = (0, import_db2.getPrisma)(c.env.DATABASE_URL);
  const draft = await prisma.contentDraft.findFirst({
    where: { id, workspaceId: auth.workspaceId },
    include: { repository: true }
  });
  if (!draft) return c.json({ error: "Draft not found" }, 404);
  if (!draft.generatedText?.trim()) return c.json({ error: "Cannot publish empty draft" }, 400);
  if (draft.status === "PUBLISHED") return c.json({ error: "Draft already published" }, 409);
  if (draft.requiresReview && draft.status !== "APPROVED") return c.json({ error: "Draft must be approved" }, 400);
  const repo = draft.repository;
  if (repo?.visibility === "private" && !repo.privateEnabled) {
    return c.json({ error: "Private repo publishing not enabled" }, 403);
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const urn = `urn:li:share:${Math.floor(Math.random() * 1e9)}`;
  try {
    const result = await prisma.$transaction(async (tx) => {
      const linkedInPost = await tx.linkedInPost.create({
        data: { draftId: id, urn }
      });
      const updatedDraft = await tx.contentDraft.update({
        where: { id },
        data: {
          status: "PUBLISHED",
          linkedInPostUrn: urn,
          publishedAt: /* @__PURE__ */ new Date()
        }
      });
      return { linkedInPost, updatedDraft };
    });
    await prisma.auditLog.create({
      data: {
        workspaceId: auth.workspaceId,
        userId: auth.userId,
        action: "DRAFT_PUBLISHED",
        resourceType: "content_draft",
        resourceId: id,
        metadata: { urn }
      }
    });
    return c.json(result.updatedDraft);
  } catch (error) {
    return c.json({ error: "Publish failed" }, 502);
  }
});

// src/routes/account.ts
init_checked_fetch();
init_modules_watch_stub();
var import_db3 = __toESM(require_dist4());
var accountRouter = new Hono2();
accountRouter.use("*", internalAuthMiddleware);
accountRouter.delete("/", async (c) => {
  const auth = c.get("auth");
  const prisma = (0, import_db3.getPrisma)(c.env.DATABASE_URL);
  await prisma.auditLog.create({
    data: {
      workspaceId: auth.workspaceId,
      userId: auth.userId,
      action: "ACCOUNT_DELETED",
      resourceType: "user",
      resourceId: auth.userId
    }
  });
  await prisma.user.delete({
    where: { id: auth.userId }
  });
  return new Response(null, { status: 204 });
});

// src/routes/linkedin.ts
init_checked_fetch();
init_modules_watch_stub();
var import_db4 = __toESM(require_dist4());
var linkedinRouter = new Hono2();
linkedinRouter.get("/callback", async (c) => {
  const code = c.req.query("code");
  const error = c.req.query("error");
  const state = c.req.query("state");
  if (error) {
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error&message=${encodeURIComponent(error)}`);
  }
  if (!code) {
    return c.json({ error: "Missing authorization code" }, 400);
  }
  if (!state) {
    return c.json({ error: "Missing state parameter (workspaceId)" }, 400);
  }
  try {
    const tokenResponse = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: c.env.LINKEDIN_REDIRECT_URI || "",
        client_id: c.env.LINKEDIN_CLIENT_ID || "",
        client_secret: c.env.LINKEDIN_CLIENT_SECRET || ""
      }).toString()
    });
    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error("LinkedIn token exchange failed:", errText);
      return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error&message=token_exchange_failed`);
    }
    const tokenData = await tokenResponse.json();
    if (c.env.DATABASE_URL) {
      const prisma = (0, import_db4.getPrisma)(c.env.DATABASE_URL);
      const existing = await prisma.tokenVaultEntry.findFirst({
        where: { workspaceId: state, provider: "LINKEDIN" }
      });
      const encryptedToken = `ENC:${tokenData.access_token}`;
      if (existing) {
        await prisma.tokenVaultEntry.update({
          where: { id: existing.id },
          data: { encryptedToken, iv: "mock_iv", tag: "mock_tag" }
        });
      } else {
        await prisma.tokenVaultEntry.create({
          data: {
            workspaceId: state,
            provider: "LINKEDIN",
            encryptedToken,
            iv: "mock_iv",
            tag: "mock_tag"
          }
        });
      }
    }
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=connected`);
  } catch (err) {
    console.error("LinkedIn callback error:", err);
    return c.redirect(`${c.env.WEB_APP_URL}/dashboard?linkedin=error`);
  }
});
linkedinRouter.get("/connect", (c) => {
  const workspaceId = c.req.query("workspaceId");
  if (!workspaceId) {
    return c.json({ error: "Missing workspaceId" }, 400);
  }
  const scope = encodeURIComponent("openid profile w_member_social");
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${c.env.LINKEDIN_CLIENT_ID || ""}&redirect_uri=${encodeURIComponent(c.env.LINKEDIN_REDIRECT_URI || "")}&scope=${scope}&state=${encodeURIComponent(workspaceId)}`;
  return c.redirect(url);
});

// src/routes/github-app.ts
init_checked_fetch();
init_modules_watch_stub();
var import_db5 = __toESM(require_dist4());
var githubAppRouter = new Hono2();
githubAppRouter.get("/callback", async (c) => {
  const installationId = c.req.query("installation_id");
  const setupAction = c.req.query("setup_action");
  const state = c.req.query("state");
  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";
  if (!installationId) {
    return c.redirect(`${webUrl}/dashboard?github=error&message=missing_installation_id`);
  }
  if (!state) {
    return c.redirect(`${webUrl}/dashboard?github=error&message=missing_workspace_state`);
  }
  try {
    const prisma = (0, import_db5.getPrisma)(c.env.DATABASE_URL);
    const workspace = await prisma.workspace.findFirst({
      where: { id: state },
      include: {
        members: {
          take: 1,
          include: { user: true }
        }
      }
    });
    if (!workspace) {
      return c.redirect(`${webUrl}/dashboard?github=error&message=workspace_not_found`);
    }
    const owner = workspace.members[0]?.user;
    const existing = await prisma.gitHubInstallation.findFirst({
      where: { workspaceId: state }
    });
    if (existing) {
      await prisma.gitHubInstallation.update({
        where: { id: existing.id },
        data: {
          installationId: BigInt(installationId),
          accountLogin: owner?.name || owner?.email || "User"
        }
      });
    } else {
      await prisma.gitHubInstallation.create({
        data: {
          workspaceId: state,
          installationId: BigInt(installationId),
          accountLogin: owner?.name || owner?.email || "User",
          accountType: "User"
        }
      });
    }
    return c.redirect(`${webUrl}/dashboard?github=connected`);
  } catch (err) {
    console.error("GitHub App callback error:", err);
    return c.redirect(`${webUrl}/dashboard?github=error&message=${encodeURIComponent(err.message)}`);
  }
});
githubAppRouter.get("/connect", (c) => {
  const workspaceId = c.req.query("workspaceId");
  const appName = c.env.GITHUB_APP_SLUG || "gitsync-engine";
  const webUrl = c.env.WEB_APP_URL || "https://gitsyncweb.vercel.app";
  if (!workspaceId) {
    return c.json({ error: "Missing workspaceId" }, 400);
  }
  const installUrl = `https://github.com/apps/${appName}/installations/new?state=${encodeURIComponent(workspaceId)}`;
  return c.redirect(installUrl);
});

// src/index.ts
var app = new Hono2();
app.use("*", cors());
app.get("/", (c) => {
  const posthog = createPostHogClient(c.env);
  c.executionCtx.waitUntil(
    posthog.captureImmediate({
      distinctId: "anonymous",
      event: "api_root_request",
      properties: { $current_url: c.req.url }
    }).then(() => posthog.shutdown())
  );
  return c.text("GitSync API (Cloudflare Worker)");
});
app.route("/webhooks", githubRouter);
app.route("/drafts", draftsRouter);
app.route("/account", accountRouter);
app.route("/integrations/linkedin", linkedinRouter);
app.route("/integrations/github", githubAppRouter);
var src_default = {
  fetch: app.fetch,
  async queue(batch, env) {
    const prisma = (0, import_db6.getPrisma)(env.DATABASE_URL);
    for (const msg of batch.messages) {
      if (batch.queue === "reposignal-github-events") {
        const { deliveryId, event } = msg.body;
        try {
          await prisma.webhookDelivery.update({
            where: { deliveryId },
            data: { status: "PROCESSED", processedAt: /* @__PURE__ */ new Date() }
          });
          msg.ack();
        } catch (error) {
          await prisma.webhookDelivery.update({
            where: { deliveryId },
            data: { status: "FAILED", errorMessage: error.message }
          });
          msg.retry();
        }
      }
    }
  }
};

// ../../node_modules/.pnpm/wrangler@4.95.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/.pnpm/wrangler@4.95.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-jgGhTq/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../node_modules/.pnpm/wrangler@4.95.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-jgGhTq/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@neondatabase/serverless/index.js:
  (*! Bundled license information:
  
  ieee754/index.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  buffer/index.js:
    (*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     *)
  *)

@posthog/core/dist/vendor/uuidv7.mjs:
  (*! For license information please see uuidv7.mjs.LICENSE.txt *)
  (**
   * uuidv7: An experimental implementation of the proposed UUID Version 7
   *
   * @license Apache-2.0
   * @copyright 2021-2023 LiosK
   * @packageDocumentation
   *)
*/
//# sourceMappingURL=index.js.map
