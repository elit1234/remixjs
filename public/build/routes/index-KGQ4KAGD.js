import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());

// app/styles/home.css
var home_default = "/build/_assets/home-2JNGGA7X.css";

// app/routes/index.tsx
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
    className: "top-image"
  }));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-KGQ4KAGD.js.map
