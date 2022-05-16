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
var home_default = "/build/_assets/home-UYDEGP4N.css";

// app/routes/index.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: home_default
  }
];
function Index() {
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var currentTheme = window.document.documentElement.getAttribute("data-theme");
      console.log(currentTheme);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, "Home", /* @__PURE__ */ React.createElement(Image, {
    loaderUrl: "/api/image",
    src: "...",
    width: "...",
    height: "...",
    alt: "...",
    responsive: [
      {
        size: {
          width: 100,
          height: 100
        },
        maxWidth: 200
      }
    ]
  }));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-WNJFHLGL.js.map
