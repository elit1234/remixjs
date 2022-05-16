import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  init_react
} from "/build/_shared/chunk-MTFJ5JSG.js";

// browser-route-module:/Users/owner/Documents/Eli/remix-app/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-AKJE6BCK.css";

// app/styles/topbar.css
var topbar_default = "/build/_assets/topbar-NQBQEFWW.css";

// app/shared/components/Topbar.tsx
init_react();
function Topbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "topbar__container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Topbar!!!"));
}

// app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: topbar_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Topbar, null), children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-77ZMEPGS.js.map
