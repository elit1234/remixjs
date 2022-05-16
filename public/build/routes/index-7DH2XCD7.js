import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// node_modules/remix-image/build/index.js
var require_build = __commonJS({
  "node_modules/remix-image/build/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var React2 = require_react();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React2);
    function toVal(mix) {
      var k, y, str = "";
      if (typeof mix === "string" || typeof mix === "number") {
        str += mix;
      } else if (typeof mix === "object") {
        if (Array.isArray(mix)) {
          for (k = 0; k < mix.length; k++) {
            if (mix[k]) {
              if (y = toVal(mix[k])) {
                str && (str += " ");
                str += y;
              }
            }
          }
        } else {
          for (k in mix) {
            if (mix[k]) {
              str && (str += " ");
              str += k;
            }
          }
        }
      }
      return str;
    }
    function clsx() {
      var i = 0, tmp, x, str = "";
      while (i < arguments.length) {
        if (tmp = arguments[i++]) {
          if (x = toVal(tmp)) {
            str && (str += " ");
            str += x;
          }
        }
      }
      return str;
    }
    var queryString = {};
    var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
    var token = "%[a-f0-9]{2}";
    var singleMatcher = new RegExp(token, "gi");
    var multiMatcher = new RegExp("(" + token + ")+", "gi");
    function decodeComponents(components, split) {
      try {
        return decodeURIComponent(components.join(""));
      } catch (err) {
      }
      if (components.length === 1) {
        return components;
      }
      split = split || 1;
      var left = components.slice(0, split);
      var right = components.slice(split);
      return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
    }
    function decode(input) {
      try {
        return decodeURIComponent(input);
      } catch (err) {
        var tokens = input.match(singleMatcher);
        for (var i = 1; i < tokens.length; i++) {
          input = decodeComponents(tokens, i).join("");
          tokens = input.match(singleMatcher);
        }
        return input;
      }
    }
    function customDecodeURIComponent(input) {
      var replaceMap = {
        "%FE%FF": "\uFFFD\uFFFD",
        "%FF%FE": "\uFFFD\uFFFD"
      };
      var match = multiMatcher.exec(input);
      while (match) {
        try {
          replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
          var result = decode(match[0]);
          if (result !== match[0]) {
            replaceMap[match[0]] = result;
          }
        }
        match = multiMatcher.exec(input);
      }
      replaceMap["%C2"] = "\uFFFD";
      var entries = Object.keys(replaceMap);
      for (var i = 0; i < entries.length; i++) {
        var key = entries[i];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
      }
      return input;
    }
    var decodeUriComponent = function(encodedURI) {
      if (typeof encodedURI !== "string") {
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
      }
      try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        return decodeURIComponent(encodedURI);
      } catch (err) {
        return customDecodeURIComponent(encodedURI);
      }
    };
    var splitOnFirst = (string, separator) => {
      if (!(typeof string === "string" && typeof separator === "string")) {
        throw new TypeError("Expected the arguments to be of type `string`");
      }
      if (separator === "") {
        return [string];
      }
      const separatorIndex = string.indexOf(separator);
      if (separatorIndex === -1) {
        return [string];
      }
      return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
      ];
    };
    var filterObj = function(obj, predicate) {
      var ret = {};
      var keys = Object.keys(obj);
      var isArr = Array.isArray(predicate);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
          ret[key] = val;
        }
      }
      return ret;
    };
    (function(exports2) {
      const strictUriEncode$1 = strictUriEncode;
      const decodeComponent = decodeUriComponent;
      const splitOnFirst$1 = splitOnFirst;
      const filterObject = filterObj;
      const isNullOrUndefined = (value) => value === null || value === void 0;
      const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
      function encoderForArrayFormat(options) {
        switch (options.arrayFormat) {
          case "index":
            return (key) => (result, value) => {
              const index = result.length;
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), "[", index, "]"].join("")];
              }
              return [
                ...result,
                [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
              ];
            };
          case "bracket":
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), "[]"].join("")];
              }
              return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
            };
          case "colon-list-separator":
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), ":list="].join("")];
              }
              return [...result, [encode(key, options), ":list=", encode(value, options)].join("")];
            };
          case "comma":
          case "separator":
          case "bracket-separator": {
            const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              value = value === null ? "" : value;
              if (result.length === 0) {
                return [[encode(key, options), keyValueSep, encode(value, options)].join("")];
              }
              return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
            };
          }
          default:
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, encode(key, options)];
              }
              return [...result, [encode(key, options), "=", encode(value, options)].join("")];
            };
        }
      }
      function parserForArrayFormat(options) {
        let result;
        switch (options.arrayFormat) {
          case "index":
            return (key, value, accumulator) => {
              result = /\[(\d*)\]$/.exec(key);
              key = key.replace(/\[\d*\]$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = {};
              }
              accumulator[key][result[1]] = value;
            };
          case "bracket":
            return (key, value, accumulator) => {
              result = /(\[\])$/.exec(key);
              key = key.replace(/\[\]$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = [value];
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
          case "colon-list-separator":
            return (key, value, accumulator) => {
              result = /(:list)$/.exec(key);
              key = key.replace(/:list$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = [value];
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
          case "comma":
          case "separator":
            return (key, value, accumulator) => {
              const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
              const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
              value = isEncodedArray ? decode2(value, options) : value;
              const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
              accumulator[key] = newValue;
            };
          case "bracket-separator":
            return (key, value, accumulator) => {
              const isArray = /(\[\])$/.test(key);
              key = key.replace(/\[\]$/, "");
              if (!isArray) {
                accumulator[key] = value ? decode2(value, options) : value;
                return;
              }
              const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
              if (accumulator[key] === void 0) {
                accumulator[key] = arrayValue;
                return;
              }
              accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
          default:
            return (key, value, accumulator) => {
              if (accumulator[key] === void 0) {
                accumulator[key] = value;
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
        }
      }
      function validateArrayFormatSeparator(value) {
        if (typeof value !== "string" || value.length !== 1) {
          throw new TypeError("arrayFormatSeparator must be single character string");
        }
      }
      function encode(value, options) {
        if (options.encode) {
          return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
        }
        return value;
      }
      function decode2(value, options) {
        if (options.decode) {
          return decodeComponent(value);
        }
        return value;
      }
      function keysSorter(input) {
        if (Array.isArray(input)) {
          return input.sort();
        }
        if (typeof input === "object") {
          return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
        }
        return input;
      }
      function removeHash(input) {
        const hashStart = input.indexOf("#");
        if (hashStart !== -1) {
          input = input.slice(0, hashStart);
        }
        return input;
      }
      function getHash(url) {
        let hash = "";
        const hashStart = url.indexOf("#");
        if (hashStart !== -1) {
          hash = url.slice(hashStart);
        }
        return hash;
      }
      function extract(input) {
        input = removeHash(input);
        const queryStart = input.indexOf("?");
        if (queryStart === -1) {
          return "";
        }
        return input.slice(queryStart + 1);
      }
      function parseValue(value, options) {
        if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
          value = Number(value);
        } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
          value = value.toLowerCase() === "true";
        }
        return value;
      }
      function parse(query, options) {
        options = Object.assign({
          decode: true,
          sort: true,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
          parseNumbers: false,
          parseBooleans: false
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        const formatter = parserForArrayFormat(options);
        const ret = /* @__PURE__ */ Object.create(null);
        if (typeof query !== "string") {
          return ret;
        }
        query = query.trim().replace(/^[?#&]/, "");
        if (!query) {
          return ret;
        }
        for (const param of query.split("&")) {
          if (param === "") {
            continue;
          }
          let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
          value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
          formatter(decode2(key, options), value, ret);
        }
        for (const key of Object.keys(ret)) {
          const value = ret[key];
          if (typeof value === "object" && value !== null) {
            for (const k of Object.keys(value)) {
              value[k] = parseValue(value[k], options);
            }
          } else {
            ret[key] = parseValue(value, options);
          }
        }
        if (options.sort === false) {
          return ret;
        }
        return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
          const value = ret[key];
          if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
            result[key] = keysSorter(value);
          } else {
            result[key] = value;
          }
          return result;
        }, /* @__PURE__ */ Object.create(null));
      }
      exports2.extract = extract;
      exports2.parse = parse;
      exports2.stringify = (object, options) => {
        if (!object) {
          return "";
        }
        options = Object.assign({
          encode: true,
          strict: true,
          arrayFormat: "none",
          arrayFormatSeparator: ","
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
        const formatter = encoderForArrayFormat(options);
        const objectCopy = {};
        for (const key of Object.keys(object)) {
          if (!shouldFilter(key)) {
            objectCopy[key] = object[key];
          }
        }
        const keys = Object.keys(objectCopy);
        if (options.sort !== false) {
          keys.sort(options.sort);
        }
        return keys.map((key) => {
          const value = object[key];
          if (value === void 0) {
            return "";
          }
          if (value === null) {
            return encode(key, options);
          }
          if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") {
              return encode(key, options) + "[]";
            }
            return value.reduce(formatter(key), []).join("&");
          }
          return encode(key, options) + "=" + encode(value, options);
        }).filter((x) => x.length > 0).join("&");
      };
      exports2.parseUrl = (url, options) => {
        options = Object.assign({
          decode: true
        }, options);
        const [url_, hash] = splitOnFirst$1(url, "#");
        return Object.assign({
          url: url_.split("?")[0] || "",
          query: parse(extract(url), options)
        }, options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode2(hash, options) } : {});
      };
      exports2.stringifyUrl = (object, options) => {
        options = Object.assign({
          encode: true,
          strict: true,
          [encodeFragmentIdentifier]: true
        }, options);
        const url = removeHash(object.url).split("?")[0] || "";
        const queryFromUrl = exports2.extract(object.url);
        const parsedQueryFromUrl = exports2.parse(queryFromUrl, { sort: false });
        const query = Object.assign(parsedQueryFromUrl, object.query);
        let queryString2 = exports2.stringify(query, options);
        if (queryString2) {
          queryString2 = `?${queryString2}`;
        }
        let hash = getHash(object.url);
        if (object.fragmentIdentifier) {
          hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
        }
        return `${url}${queryString2}${hash}`;
      };
      exports2.pick = (input, filter, options) => {
        options = Object.assign({
          parseFragmentIdentifier: true,
          [encodeFragmentIdentifier]: false
        }, options);
        const { url, query, fragmentIdentifier } = exports2.parseUrl(input, options);
        return exports2.stringifyUrl({
          url,
          query: filterObject(query, filter),
          fragmentIdentifier
        }, options);
      };
      exports2.exclude = (input, filter, options) => {
        const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
        return exports2.pick(input, exclusionFilter, options);
      };
    })(queryString);
    var RemixImageError = class extends Error {
      errorCode;
      constructor(message, errorCode) {
        super(message);
        Object.setPrototypeOf(this, RemixImageError.prototype);
        this.errorCode = errorCode || 500;
      }
      toString() {
        return this.message;
      }
    };
    var UnsupportedImageError = class extends RemixImageError {
      constructor(message) {
        super(message, 415);
        Object.setPrototypeOf(this, UnsupportedImageError.prototype);
      }
    };
    var encodeQuery = (url, query) => {
      const fixedQuery = query;
      if (Object.prototype.hasOwnProperty.call(query, "crop")) {
        fixedQuery.crop = JSON.stringify(fixedQuery.crop);
      }
      return queryString.stringifyUrl({
        url,
        query: fixedQuery
      }, {
        skipNull: true,
        arrayFormat: "bracket",
        sort: false
      });
    };
    var useResponsiveImage = (image, loaderUrl, responsive, options = {}) => {
      let largestSrc = image.src || "";
      let largestWidth = 0;
      const srcSet = [];
      for (const { size } of responsive) {
        const srcSetUrl = encodeQuery(loaderUrl, {
          src: encodeURI(image.src || ""),
          width: size.width,
          height: size.height,
          ...options
        });
        srcSet.push(srcSetUrl + ` ${size.width}w`);
        if (size.width > largestWidth) {
          largestWidth = size.width;
          largestSrc = srcSetUrl;
        }
      }
      const sizes = [...responsive].sort((resp1, resp2) => resp1.size.width - resp2.size.width).map((resp) => resp.maxWidth ? `(max-width: ${resp.maxWidth}px) ${resp.size.width}px` : `${resp.size.width}px`);
      if (responsive.length === 1 && responsive[0].maxWidth != null) {
        sizes.push(`${responsive[0].size.width}px`);
      }
      return {
        src: largestSrc,
        ...srcSet.length && {
          srcSet: srcSet.join(", "),
          sizes: sizes.join(", ")
        }
      };
    };
    var classes = { "root": "Image-module_root__56rgX" };
    var Image2 = React__default["default"].forwardRef(({ className, loaderUrl = "/api/image", responsive = [], options = {}, ...imgProps }, ref) => {
      const responsiveProps = useResponsiveImage(imgProps, loaderUrl, responsive, options);
      return React__default["default"].createElement("img", { ref, className: clsx(classes.root, className), ...imgProps, ...responsiveProps });
    });
    Image2.displayName = "Image";
    exports.CacheStatus = void 0;
    (function(CacheStatus) {
      CacheStatus["HIT"] = "hit";
      CacheStatus["STALE"] = "stale";
      CacheStatus["MISS"] = "miss";
    })(exports.CacheStatus || (exports.CacheStatus = {}));
    var Cache = class {
    };
    exports.MimeType = void 0;
    (function(MimeType) {
      MimeType["SVG"] = "image/svg+xml";
      MimeType["JPEG"] = "image/jpeg";
      MimeType["PNG"] = "image/png";
      MimeType["GIF"] = "image/gif";
      MimeType["WEBP"] = "image/webp";
      MimeType["BMP"] = "image/bmp";
      MimeType["TIFF"] = "image/tiff";
      MimeType["AVIF"] = "image/avif";
    })(exports.MimeType || (exports.MimeType = {}));
    exports.ImageFit = void 0;
    (function(ImageFit) {
      ImageFit["CONTAIN"] = "contain";
      ImageFit["COVER"] = "cover";
      ImageFit["FILL"] = "fill";
      ImageFit["INSIDE"] = "inside";
      ImageFit["OUTSIDE"] = "outside";
    })(exports.ImageFit || (exports.ImageFit = {}));
    exports.ImagePosition = void 0;
    (function(ImagePosition) {
      ImagePosition["LEFT"] = "left";
      ImagePosition["CENTER"] = "center";
      ImagePosition["RIGHT"] = "right";
    })(exports.ImagePosition || (exports.ImagePosition = {}));
    exports.FlipDirection = void 0;
    (function(FlipDirection) {
      FlipDirection["HORIZONTAL"] = "horizontal";
      FlipDirection["VERTICAL"] = "vertical";
      FlipDirection["BOTH"] = "both";
    })(exports.FlipDirection || (exports.FlipDirection = {}));
    exports.Cache = Cache;
    exports.Image = Image2;
    exports.RemixImageError = RemixImageError;
    exports.UnsupportedImageError = UnsupportedImageError;
    exports["default"] = Image2;
    exports.useResponsiveImage = useResponsiveImage;
  }
});

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());

// app/styles/home.css
var home_default = "/build/_assets/home-5AZSODG7.css";

// app/routes/index.tsx
var import_remix_image = __toESM(require_build());
var links = () => [
  {
    rel: "stylesheet",
    href: home_default
  }
];
function Index() {
  const [width, setWidth] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var currentTheme = window.document.documentElement.getAttribute("data-theme");
      console.log(currentTheme);
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }
  }, []);
  let windowWidth = 100;
  if (typeof window !== "undefined")
    windowWidth = window.innerWidth;
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overlay-text"
  }, "Welcome to"), /* @__PURE__ */ React.createElement(import_remix_image.Image, {
    loaderUrl: "https://i.ibb.co/ZMWnczX/ezgif-com-gif-maker-3.webp",
    height: "100%",
    alt: "...",
    responsive: [
      {
        size: {
          width: 700
        }
      }
    ]
  }));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-7DH2XCD7.js.map
