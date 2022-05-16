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
function Index() {
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var currentTheme = window.document.documentElement.getAttribute("data-theme");
      console.log(currentTheme);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "styles.container"
  });
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-3YMNP2XP.js.map
