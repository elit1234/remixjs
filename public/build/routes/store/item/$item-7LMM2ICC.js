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
var ViewingItem = () => {
  const { item: itemId } = useParams();
  console.log(itemId);
  return /* @__PURE__ */ React.createElement("div", {
    style: { paddingTop: "5.5rem" }
  }, "Yyou are viewing item");
};
var item_default = ViewingItem;
export {
  item_default as default
};
//# sourceMappingURL=/build/routes/store/item/$item-7LMM2ICC.js.map
