import {
  useParams
} from "/build/_shared/chunk-4WTPXKGU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store\item\$item.tsx?browser
init_react();

// app/routes/store/item/$item.tsx
init_react();

// app/styles/ViewingItem.css
var ViewingItem_default = "/build/_assets/ViewingItem-7NSWU5UF.css";

// app/routes/store/item/$item.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: ViewingItem_default
  }
];
var ViewingItem = () => {
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
    className: "color"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "color"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "color"
  }))), /* @__PURE__ */ React.createElement("div", {
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
  }, "Add to cart")), "You are viewing item");
};
var item_default = ViewingItem;
export {
  item_default as default,
  links
};
//# sourceMappingURL=/build/routes/store/item/$item-WYHVIIJZ.js.map
