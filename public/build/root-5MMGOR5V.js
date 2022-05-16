import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-MCRKNRUJ.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_db = __toESM(require_db());

// app/styles/global.css
var global_default = "/build/_assets/global-NDUZ6VGK.css";

// app/styles/topbar.css
var topbar_default = "/build/_assets/topbar-NCD2ZP7K.css";

// app/styles/sidebar.css
var sidebar_default = "/build/_assets/sidebar-WKPUJSDG.css";

// app/styles/cart.css
var cart_default = "/build/_assets/cart-YHBTMKA6.css";

// app/shared/components/Topbar.tsx
init_react();
var import_react = __toESM(require_react());
function Topbar() {
  const [active, setActive] = (0, import_react.useState)(false);
  const [activeCart, setActiveCart] = (0, import_react.useState)(false);
  function clickedMenu() {
    const cart = document.querySelector(".cart__container");
    let localCartActive = cart.classList.contains("active");
    if (localCartActive)
      clickedCart();
    const sidebar = document.querySelector(".sidebar__container");
    const secondPage = document.querySelector(".sidebar__secondPage");
    const thirdPage = document.querySelector(".sidebar__thirdPage");
    if (thirdPage && thirdPage.classList.contains("active")) {
      thirdPage.classList.toggle("active");
    } else if (secondPage && secondPage.classList.contains("active")) {
      secondPage.classList.toggle("active");
    } else {
      sidebar.classList.toggle("active");
      console.log("toggled");
    }
    let localActive = sidebar.classList.contains("active");
    setActive(localActive);
  }
  function clickedCart() {
    const sidebar = document.querySelector(".sidebar__container");
    let localSidebarActive = sidebar.classList.contains("active");
    if (localSidebarActive)
      clickedMenu();
    const cart = document.querySelector(".cart__container");
    cart.classList.toggle("active");
    let localActive = cart.classList.contains("active");
    setActiveCart(localActive);
  }
  (0, import_react.useEffect)(() => {
    const menuButton = document.querySelector(".menuIcon");
    ["click", "touch"].forEach(function(e) {
      menuButton.addEventListener(e, () => clickedMenu());
    });
    return () => {
      menuButton.removeEventListener("touchstart", () => {
        clickedMenu();
      });
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const cartIcon = document.querySelector(".cartIcon");
    ["click", "touch"].forEach(function(e) {
      cartIcon.addEventListener(e, () => clickedCart());
    });
    return () => {
      ["click", "touch"].forEach(function(e) {
        cartIcon.removeEventListener(e, () => {
          clickedCart();
        });
      });
    };
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "topbar__container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "topbar__logo"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "A")), /* @__PURE__ */ React.createElement("div", {
    className: "topbar__right"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
  })), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "cartIcon"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  })), !active ? /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "menuIcon"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
  })) : /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "menuIcon"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0H24V24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21 18v2H3v-2h18zM6.596 3.904L8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"
  }))));
}

// app/shared/components/Sidebar.tsx
init_react();
var import_react2 = __toESM(require_react());
function Sidebar({ items }) {
  const [firstCategories, setFirstCategories] = (0, import_react2.useState)([]);
  const [secondCategories, setSecondCategories] = (0, import_react2.useState)([]);
  const [thirdCategories, setThirdCategories] = (0, import_react2.useState)([]);
  const [current, setCurrent] = (0, import_react2.useState)({});
  (0, import_react2.useEffect)(() => {
    console.log(items);
    const localFirst = items && items.filter((it) => it.page === 1);
    setFirstCategories(localFirst);
  }, [items]);
  const RightArrow = () => /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36",
    style: { flex: 1, justifySelf: "flex-end" },
    className: "sidebar__rightArrow_svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
  }));
  function clickedFirstOpt(category) {
    const secondPage = document.querySelector(".sidebar__secondPage");
    const localSecond = items && items.filter((it) => it.page === 2 && it.parentID === category.id);
    setSecondCategories(localSecond);
    secondPage.classList.add("active");
    setCurrent(category);
  }
  function clickedSecondOpt(category) {
    const thirdPage = document.querySelector(".sidebar__thirdPage");
    const localThird = items && items.filter((it) => it.page === 3 && it.parentID === category.id);
    setThirdCategories(localThird);
    thirdPage.classList.add("active");
    setCurrent(category);
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
  }), secondCategories && !secondCategories[0] ? /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__category nothing"
  }, "Nothing here!") : /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__category"
  }, "View All ", current == null ? void 0 : current.label), " ")), /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__page sidebar__thirdPage"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__categories"
  }, thirdCategories && thirdCategories.map((thirdCat, key) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sidebar__category",
      key
    }, thirdCat.label, /* @__PURE__ */ React.createElement(RightArrow, null));
  }), thirdCategories && !thirdCategories[0] ? /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__category nothing"
  }, "Nothing here!") : /* @__PURE__ */ React.createElement("div", {
    className: "sidebar__category"
  }, "View All ", current == null ? void 0 : current.label))));
}

// app/shared/components/Cart.tsx
init_react();
var import_react3 = __toESM(require_react());
var Cart = () => {
  const [items, setItems] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    const localItems = localStorage.getItem("cart");
    let parsedItems;
    if (localItems)
      parsedItems = JSON.parse(localItems);
    setItems(parsedItems);
    window.addEventListener("storage", () => {
      const newLocalItems = localStorage.getItem("cart");
      let newParse;
      if (newLocalItems)
        newParse = JSON.parse(newLocalItems);
      setItems(newParse);
    });
    return () => {
      window.removeEventListener("storage", () => {
      });
    };
  }, []);
  const clickedDelete = (Item, key) => {
    if (typeof window !== "undefined") {
      const localItemsRaw = localStorage.getItem("cart");
      let localItems;
      if (localItemsRaw)
        localItems = JSON.parse(localItemsRaw);
      console.log(localItems);
      const filtered = localItems.filter((item, idx) => idx !== key);
      localStorage.setItem("cart", JSON.stringify(filtered));
      window.dispatchEvent(new Event("storage"));
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "cart__container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cart__title"
  }, "My Cart"), /* @__PURE__ */ React.createElement("div", {
    className: "cart__items"
  }, items && items.map((Item, key) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "cart__item",
      key
    }, /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemImage"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemName"
    }, "Item Name"), /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemPrice"
    }, "$ 25.00"), /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemQuantity"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemQuantityButton"
    }, "-"), " ", Item.quantity, " +"), /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemRemove"
    }, /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "36",
      height: "36",
      onClick: () => clickedDelete(Item, key)
    }, /* @__PURE__ */ React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
    }))));
  })), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(items, null, 4)));
};
var Cart_default = Cart;

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
    },
    {
      rel: "stylesheet",
      href: cart_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function Document({ children }) {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    style: { overflowY: "auto", overflowX: "hidden", width: "100vw" }
  }, /* @__PURE__ */ React.createElement(Topbar, null), /* @__PURE__ */ React.createElement(Sidebar, {
    items: data && data.items ? data.items : []
  }), /* @__PURE__ */ React.createElement(Cart_default, null), /* @__PURE__ */ React.createElement("div", null, children), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null))));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-5MMGOR5V.js.map
