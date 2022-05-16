import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\store.tsx?browser
init_react();

// app/routes/store.tsx
init_react();

// app/styles/store.css
var store_default = "/build/_assets/store-OSND5R42.css";

// app/routes/store.tsx
var links = () => [
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
    notItems && notItems.forEach((notItem) => {
      notItem.classList.add("fade-away");
      setTimeout(() => {
        notItem.remove();
      }, 600);
    });
    const isItem = allItems[key];
    isItem.style.width = "100%";
    isItem.style.maxWidth = "100%";
  };
  const items = [
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
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "items"
  }, items.map((item, key) => /* @__PURE__ */ React.createElement("div", {
    className: "item",
    key,
    onClick: () => clickedItem(item, key)
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
export {
  store_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/store-HJYO3OUS.js.map
