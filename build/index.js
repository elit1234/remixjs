var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.db) {
    global.db = new import_client.PrismaClient();
    global.db.$connect();
  }
  db = global.db;
}
var db_server_default = db;

// app/styles/global.css
var global_default = "/build/_assets/global-NDUZ6VGK.css";

// app/styles/topbar.css
var topbar_default = "/build/_assets/topbar-NCD2ZP7K.css";

// app/styles/sidebar.css
var sidebar_default = "/build/_assets/sidebar-WKPUJSDG.css";

// app/styles/cart.css
var cart_default = "/build/_assets/cart-IDXMUHHE.css";

// app/shared/components/Topbar.tsx
var import_react2 = require("react");
function Topbar() {
  const [active, setActive] = (0, import_react2.useState)(false);
  const [activeCart, setActiveCart] = (0, import_react2.useState)(false);
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
  (0, import_react2.useEffect)(() => {
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
  (0, import_react2.useEffect)(() => {
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
var import_react3 = require("react");
function Sidebar({ items }) {
  const [firstCategories, setFirstCategories] = (0, import_react3.useState)([]);
  const [secondCategories, setSecondCategories] = (0, import_react3.useState)([]);
  const [thirdCategories, setThirdCategories] = (0, import_react3.useState)([]);
  const [current, setCurrent] = (0, import_react3.useState)({});
  (0, import_react3.useEffect)(() => {
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
var import_react4 = require("react");
var Cart = () => {
  const [items, setItems] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
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
      const filtered = localItems.filter((item, idx) => idx !== key);
      localStorage.setItem("cart", JSON.stringify(filtered));
      window.dispatchEvent(new Event("storage"));
    }
  };
  const clickedMinus = (key) => {
    if (typeof window !== "undefined") {
      const localItemsRaw = localStorage.getItem("cart");
      let localItems;
      let newArr = [];
      if (localItemsRaw)
        localItems = JSON.parse(localItemsRaw);
      localItems && localItems.map((item, itemKey) => {
        const newAmount = item.quantity && item.quantity - 1;
        if (itemKey !== key)
          newArr.push(item);
        else
          newArr.push({
            id: item.id,
            quantity: newAmount,
            label: item.label
          });
      });
      localStorage.setItem("cart", JSON.stringify(newArr));
      window.dispatchEvent(new Event("storage"));
    }
  };
  const clickedPlus = (key) => {
    if (typeof window !== "undefined") {
      const localItemsRaw = localStorage.getItem("cart");
      let localItems;
      let newArr = [];
      if (localItemsRaw)
        localItems = JSON.parse(localItemsRaw);
      localItems && localItems.map((item, itemKey) => {
        const newAmount = item.quantity && item.quantity + 1;
        if (itemKey !== key)
          newArr.push(item);
        else
          newArr.push({
            id: item.id,
            quantity: newAmount,
            label: item.label
          });
      });
      localStorage.setItem("cart", JSON.stringify(newArr));
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
    }, /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      onClick: () => {
        if (Item.quantity && Item.quantity > 1)
          clickedMinus(key);
      }
    }, /* @__PURE__ */ React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M5 11h14v2H5z"
    }))), Item.quantity, /* @__PURE__ */ React.createElement("div", {
      className: "cart__itemQuantityButton"
    }, /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      onClick: () => {
        clickedPlus(key);
      }
    }, /* @__PURE__ */ React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
    })))), /* @__PURE__ */ React.createElement("div", {
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

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\root.tsx
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
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react5.Outlet, null)));
}
function Document({ children }) {
  const data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react5.Meta, null), /* @__PURE__ */ React.createElement(import_react5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    style: { overflowY: "auto", overflowX: "hidden", width: "100vw" }
  }, /* @__PURE__ */ React.createElement(Topbar, null), /* @__PURE__ */ React.createElement(Sidebar, {
    items: data && data.items ? data.items : []
  }), /* @__PURE__ */ React.createElement(Cart_default, null), /* @__PURE__ */ React.createElement("div", null, children), /* @__PURE__ */ React.createElement(import_react5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react5.Scripts, null), /* @__PURE__ */ React.createElement(import_react5.LiveReload, null))));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
var loader = async () => {
  const data = {
    items: await db_server_default.category.findMany()
  };
  return data;
};

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store\item\$item.tsx
var item_exports = {};
__export(item_exports, {
  default: () => item_default,
  links: () => links2
});
var import_react6 = require("@remix-run/react");
var import_react7 = require("react");

// app/styles/ViewingItem.css
var ViewingItem_default = "/build/_assets/ViewingItem-ZT6L6VIV.css";

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store\item\$item.tsx
var links2 = () => [
  {
    rel: "stylesheet",
    href: ViewingItem_default
  }
];
var ViewingItem = () => {
  const [activeCol, setActiveCol] = (0, import_react7.useState)(0);
  const [quantity, setQuantity] = (0, import_react7.useState)(1);
  const { item: itemId } = (0, import_react6.useParams)();
  const clickedMinus = () => {
    if (quantity > 1)
      setQuantity(quantity - 1);
  };
  const clickedPlus = () => {
    setQuantity(quantity + 1);
  };
  const clickedAdd = () => {
    const newObj = {
      id: Number(itemId),
      quantity
    };
    const localCartData = localStorage.getItem("cart");
    let localCart = [];
    if (localCartData)
      localCart = JSON.parse(localCartData);
    let currentItems = [];
    localCart[0] && localCart.map((localCartItem) => {
      currentItems.push(localCartItem);
    });
    currentItems.push(newObj);
    localStorage.setItem("cart", JSON.stringify(currentItems));
    window.dispatchEvent(new Event("storage"));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "topImage"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "backArrow",
    onClick: () => window.location.href = "/store"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "30",
    height: "30"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "colors"
  }, /* @__PURE__ */ React.createElement("div", {
    className: activeCol === 0 ? `color active` : `color`,
    onClick: () => setActiveCol(0)
  }), /* @__PURE__ */ React.createElement("div", {
    className: activeCol === 1 ? `color active` : `color`,
    onClick: () => setActiveCol(1)
  }), /* @__PURE__ */ React.createElement("div", {
    className: activeCol === 2 ? `color active` : `color`,
    onClick: () => setActiveCol(2)
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Item Name"), /* @__PURE__ */ React.createElement("div", {
    className: "details"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "price"
  }, "$ 50"), /* @__PURE__ */ React.createElement("div", {
    className: "quantity"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "quantityButton"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36",
    onClick: () => clickedMinus()
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 11h14v2H5z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "quantityAmount"
  }, quantity), /* @__PURE__ */ React.createElement("div", {
    className: "quantityButton"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36",
    onClick: () => clickedPlus()
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "ratingLine"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z",
    fill: "rgba(241,196,14,1)"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ratingAmount"
  }, "4.5"), /* @__PURE__ */ React.createElement("div", {
    className: "reviews"
  }, "(50 reviews)")), /* @__PURE__ */ React.createElement("div", {
    className: "description"
  }, "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easy select the best match for your home."), /* @__PURE__ */ React.createElement("div", {
    className: "bottomBar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "saveIcon"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "addTo",
    onClick: () => clickedAdd()
  }, "Add to cart")));
};
var item_default = ViewingItem;

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store\index.tsx
var store_exports = {};
__export(store_exports, {
  default: () => store_default2,
  links: () => links3
});
var import_react8 = require("react");

// app/styles/store.css
var store_default = "/build/_assets/store-OSND5R42.css";

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store\index.tsx
var links3 = () => [
  {
    rel: "stylesheet",
    href: store_default
  }
];
var Store = () => {
  const clickedItem = (item, key) => {
    const allItems = document.querySelectorAll(".item");
    let notItems = [];
    Array.from(allItems).map((mapItem, itemKey) => {
      if (itemKey !== key)
        notItems.push(mapItem);
    });
    const isItem = allItems[key];
    notItems && notItems.forEach((notItem) => {
      notItem.classList.add("fade-away");
      let newUrl = `/store/item/${item.id}`;
      setTimeout(() => {
        notItem.remove();
      }, 400);
      setTimeout(() => {
        window.location.href = newUrl;
      }, 700);
    });
  };
  const [items, setItems] = (0, import_react8.useState)([]);
  (0, import_react8.useEffect)(() => {
    setItems([
      {
        id: 1,
        label: "First Item"
      },
      {
        id: 2,
        label: "Second Item"
      },
      {
        id: 3,
        label: "Third Item"
      },
      {
        id: 4,
        label: "Fourth Item"
      },
      {
        id: 5,
        label: "Fifth Item"
      },
      {
        id: 1,
        label: "First Item"
      }
    ]);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "items"
  }, items.map((item, key) => /* @__PURE__ */ React.createElement("div", {
    className: "item",
    key,
    onClick: () => clickedItem(item, key),
    onAuxClick: () => {
      let newUrl = `/store/item/${item.id}`;
      window.open(newUrl);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "itemImage"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "itemDetails"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "itemName"
  }, item == null ? void 0 : item.label), /* @__PURE__ */ React.createElement("div", {
    className: "itemPrice"
  }, "$ 99.00"))))));
};
var store_default2 = Store;

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\api\image.tsx
var image_exports = {};
__export(image_exports, {
  loader: () => loader2
});
var import_server2 = require("remix-image/server");
var config = {
  selfUrl: "http://localhost:3000",
  whitelistedDomains: ["i.imgur.com"],
  cache: new import_server2.DiskCache()
};
var loader2 = ({ request }) => {
  return (0, import_server2.imageLoader)(config, request);
};

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links4
});
var import_react9 = require("react");

// app/styles/home.css
var home_default = "/build/_assets/home-BWHJFKC3.css";

// route:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\index.tsx
var links4 = () => [
  {
    rel: "stylesheet",
    href: home_default
  }
];
function Index() {
  const [width, setWidth] = (0, import_react9.useState)(0);
  (0, import_react9.useEffect)(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      const options = {
        root: null,
        rootMargin: "0px"
      };
      const observer = new IntersectionObserver(function(entries, observer2) {
        entries.forEach((entry2) => {
          if (!entry2.isIntersecting) {
            return;
          } else {
            entry2.target.classList.add("show");
          }
        });
      }, options);
      const topTexts = document.querySelectorAll(".top-text-animate");
      topTexts.forEach((text) => observer.observe(text));
      const topParagraph = document.querySelector(".top-paragraph");
      observer.observe(topParagraph);
      const getStarted = document.querySelector(".top-getStarted");
      observer.observe(getStarted);
    }
  }, []);
  let windowWidth = 100;
  if (typeof window !== "undefined")
    windowWidth = window.innerWidth;
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-image"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-overlay"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-text top-text-animate"
  }, "Make Your"), /* @__PURE__ */ React.createElement("div", {
    className: "top-secondText top-text-animate"
  }, "Home Beautiful"), /* @__PURE__ */ React.createElement("div", {
    className: "top-paragraph"
  }, "The best simple place where you can discore the most wonder furniture and make your home beautiful."), /* @__PURE__ */ React.createElement("a", {
    href: "/store",
    className: "top-getStarted"
  }, "Get Started"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "b73ec67b", "entry": { "module": "/build/entry.client-UW25IXAA.js", "imports": ["/build/_shared/chunk-MCRKNRUJ.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-TJPMC2GU.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/image": { "id": "routes/api/image", "parentId": "root", "path": "api/image", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/image-N5GLMLCZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-INYABY4Q.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/store/index": { "id": "routes/store/index", "parentId": "root", "path": "store", "index": true, "caseSensitive": void 0, "module": "/build/routes/store/index-XENBD2KU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/store/item/$item": { "id": "routes/store/item/$item", "parentId": "root", "path": "store/item/:item", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/store/item/$item-Q5KFPXRD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B73EC67B.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/store/item/$item": {
    id: "routes/store/item/$item",
    parentId: "root",
    path: "store/item/:item",
    index: void 0,
    caseSensitive: void 0,
    module: item_exports
  },
  "routes/store/index": {
    id: "routes/store/index",
    parentId: "root",
    path: "store",
    index: true,
    caseSensitive: void 0,
    module: store_exports
  },
  "routes/api/image": {
    id: "routes/api/image",
    parentId: "root",
    path: "api/image",
    index: void 0,
    caseSensitive: void 0,
    module: image_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
