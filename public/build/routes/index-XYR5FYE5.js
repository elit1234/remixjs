import {
  Form,
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-AYOJ7M3M.js";

// browser-route-module:/Users/owner/Documents/Eli/remix-app/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react2 = __toESM(require_react());
function Index() {
  (0, import_react2.useEffect)(() => {
    if (typeof window !== "undefined") {
      var currentTheme = window.document.documentElement.getAttribute("data-theme");
      console.log(currentTheme);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    style: { marginTop: "30px" }
  }, /* @__PURE__ */ React.createElement("label", null, "Submit beverage consumed today:"), /* @__PURE__ */ React.createElement("select", {
    name: "beverageName"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "water"
  }, "Water"), /* @__PURE__ */ React.createElement("option", {
    value: "coffee"
  }, "Coffee")), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    style: { marginLeft: "5px" }
  }, "Submit")));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-XYR5FYE5.js.map
