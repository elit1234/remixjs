import {
  Form,
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-MTFJ5JSG.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/owner/Documents/Eli/remix-app/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_db = __toESM(require_db());
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, data.items.map((item) => /* @__PURE__ */ React.createElement("span", {
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
  }, "Coffee"))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-7WR72Y6H.js.map
