import {
  Form,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-AYOJ7M3M.js";

// browser-route-module:/Users/owner/Documents/Eli/remix-app/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, data && data.items && data.items.map((item) => /* @__PURE__ */ React.createElement("span", {
    key: item.id,
    style: { marginRight: "2px " }
  }, item.name === "coffee" ? /* @__PURE__ */ React.createElement("span", null, "C") : /* @__PURE__ */ React.createElement("span", null, "B"))), /* @__PURE__ */ React.createElement(Form, {
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
//# sourceMappingURL=/build/routes/index-D55E74YZ.js.map
