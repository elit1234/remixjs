import {
  Form,
  React,
  init_react
} from "/build/_shared/chunk-B6JWOKCR.js";

// browser-route-module:/Users/owner/Documents/Eli/remix-app/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
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
//# sourceMappingURL=/build/routes/index-2HXFQI4K.js.map
