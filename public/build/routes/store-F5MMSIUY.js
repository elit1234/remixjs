import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store.tsx?browser
init_react();

// app/routes/store.tsx
init_react();

// app/styles/store.css
var store_default = "/build/_assets/store-664JQYYJ.css";

// app/routes/store.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: store_default
  }
];
var Store = () => {
  const items = [
    "First",
    "Second",
    "First",
    "Second",
    "First",
    "Second",
    "First",
    "Second",
    "First",
    "Second",
    "First",
    "Second",
    "First",
    "Second"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "items"
  }, items.map((item, key) => /* @__PURE__ */ React.createElement("div", {
    className: "item",
    key
  }, /* @__PURE__ */ React.createElement("div", {
    className: "itemImage"
  }), item))));
};
var store_default2 = Store;
export {
  store_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/store-F5MMSIUY.js.map
