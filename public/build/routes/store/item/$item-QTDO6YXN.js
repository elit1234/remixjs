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
var ViewingItem_default = "/build/_assets/ViewingItem-55DNWN2R.css";

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
    style: { paddingTop: "5.5rem" }
  }, "Yyou are viewing item");
};
var item_default = ViewingItem;
export {
  item_default as default,
  links
};
//# sourceMappingURL=/build/routes/store/item/$item-QTDO6YXN.js.map
