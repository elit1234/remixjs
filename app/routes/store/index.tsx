import { LinksFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import styles from "~/styles/store.css";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const Store = () => {
  const clickedItem = (item: ItemType, key: any) => {
    const allItems = document.querySelectorAll(".item");
    let notItems: any[] = [];
    Array.from(allItems).map((mapItem, itemKey) => {
      if (itemKey !== key) notItems.push(mapItem);
    });
    const isItem: any = allItems[key];
    notItems &&
      notItems.forEach((notItem) => {
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

  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        label: "First Item",
      },
      {
        id: 2,
        label: "Second Item",
      },
      {
        id: 3,
        label: "Third Item",
      },
      {
        id: 4,
        label: "Fourth Item",
      },
      {
        id: 5,
        label: "Fifth Item",
      },
      {
        id: 1,
        label: "First Item",
      },
    ]);
  }, []);
  return (
    <div className="container">
      <div className="items">
        {items.map((item: ItemType, key) => (
          <div
            className="item"
            key={key}
            onClick={() => clickedItem(item, key)}
            onAuxClick={() => {
              let newUrl = `/store/item/${item.id}`;
              window.open(newUrl);
            }}
          >
            <div className="itemImage" />
            <div className="itemDetails">
              <div className="itemName">{item?.label}</div>
              <div className="itemPrice">$ 99.00</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
