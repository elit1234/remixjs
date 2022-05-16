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
var global_default = "/build/_assets/global-5MNUTJBL.css";

// app/styles/topbar.css
var topbar_default = "/build/_assets/topbar-2MH37Y6I.css";

// app/styles/sidebar.css
var sidebar_default = "/build/_assets/sidebar-5K7WV3SE.css";

// app/shared/components/Topbar.tsx
init_react();
function Topbar() {
  function clickedMenu() {
    const sidebar = document.querySelector(".sidebar__container");
    const secondPage = document.querySelector(".sidebar__secondPage");
    const thirdPage = document.querySelector(".sidebar__thirdPage");
    if (secondPage && secondPage.classList.contains("active")) {
      return secondPage.classList.toggle("active");
    }
    if (thirdPage && thirdPage.classList.contains("active")) {
      return thirdPage.classList.toggle("active");
    }
    sidebar.classList.toggle("active");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "topbar__container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "topbar__logo"
  }, "A"), /* @__PURE__ */ React.createElement("div", {
    className: "topbar__right"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
  })), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  })), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36",
    onClick: () => clickedMenu()
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
  }))));
}

// app/shared/components/Sidebar.tsx
init_react();
function Sidebar() {
  let firstCategories = [
    {
      label: "Womens"
    },
    {
      label: "Mens"
    }
  ];
  let secondCategories = [
    {
      label: "Shoes"
    },
    {
      label: "Pants"
    }
  ];
  let thirdCategories = [
    {
      label: "First Item"
    },
    {
      label: "second Item"
    }
  ];
  const RightArrow = () => /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36",
    style: { flex: 1, justifySelf: "flex-end" }
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
  }));
  function clickedFirstOpt(category) {
    const secondPage = document.querySelector(".sidebar__secondPage");
    secondPage.classList.add("active");
  }
  function clickedSecondOpt(category) {
    const thirdPage = document.querySelector(".sidebar__thirdPage");
    thirdPage.classList.add("active");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__page sidebar__container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__categories"
  }, firstCategories && firstCategories.map((firstCat, key) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sidebar__category",
      key,
      onClick: () => clickedFirstOpt(firstCat)
    }, firstCat.label, /* @__PURE__ */ React.createElement(RightArrow, null));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__page sidebar__secondPage"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__categories"
  }, secondCategories && secondCategories.map((secondCat, key) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sidebar__category",
      key,
      onClick: () => clickedSecondOpt(secondCat)
    }, secondCat.label, /* @__PURE__ */ React.createElement(RightArrow, null));
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__page sidebar__thirdPage"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__categories"
  }, thirdCategories && thirdCategories.map((thirdCat, key) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sidebar__category",
      key
    }, thirdCat.label, /* @__PURE__ */ React.createElement(RightArrow, null));
  }))));
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
    },
    {
      rel: "stylesheet",
      href: sidebar_default
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
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "app-wrapper"
  }, /* @__PURE__ */ React.createElement(Topbar, null), /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement("div", {
    className: "body-wrapper"
  }, children), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null))));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-HY22U57T.js.map
