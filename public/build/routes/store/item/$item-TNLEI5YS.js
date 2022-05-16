import {
  useParams
} from "/build/_shared/chunk-4WTPXKGU.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store\item\$item.tsx?browser
init_react();

// app/routes/store/item/$item.tsx
init_react();
var import_react2 = __toESM(require_react());

// app/styles/ViewingItem.css
var ViewingItem_default = "/build/_assets/ViewingItem-HD6YTQ6P.css";

// app/routes/store/item/$item.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: ViewingItem_default
  }
];
var ViewingItem = () => {
  const [activeCol, setActiveCol] = (0, import_react2.useState)(0);
  const { item: itemId } = useParams();
  console.log(itemId);
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
    height: "36"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 11h14v2H5z"
  }))), "01", /* @__PURE__ */ React.createElement("div", {
    className: "quantityButton"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36"
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
  }, "4.5")), /* @__PURE__ */ React.createElement("div", {
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
    className: "addTo"
  }, "Add to cart")));
};
var item_default = ViewingItem;
export {
  item_default as default,
  links
};
//# sourceMappingURL=/build/routes/store/item/$item-TNLEI5YS.js.map
