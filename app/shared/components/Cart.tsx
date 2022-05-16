import { useEffect, useState } from "react";

const Cart = () => {
  const [items, setItems] = useState<ItemType[] | null>(null);

  useEffect(() => {
    const localItems = localStorage.getItem("cart");
    let parsedItems: any;
    if (localItems) parsedItems = JSON.parse(localItems);

    setItems(parsedItems);
    window.addEventListener("storage", () => {
      const newLocalItems = localStorage.getItem("cart");
      let newParse: any;
      if (newLocalItems) newParse = JSON.parse(newLocalItems);

      setItems(newParse);
    });

    return () => {
      window.removeEventListener("storage", () => {});
    };
  }, []);

  const clickedDelete = (Item: ItemType, key: Number) => {
    if (typeof window !== "undefined") {
      const localItemsRaw = localStorage.getItem("cart");
      let localItems;
      if (localItemsRaw) localItems = JSON.parse(localItemsRaw);

      const filtered = localItems.filter(
        (item: ItemType, idx: Number) => idx !== key
      );

      localStorage.setItem("cart", JSON.stringify(filtered));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const clickedMinus = (key: Number) => {
    if (typeof window !== "undefined") {
      const localItemsRaw = localStorage.getItem("cart");
      let localItems;
      let newArr: ItemType[] = [];
      if (localItemsRaw) localItems = JSON.parse(localItemsRaw);

      localItems &&
        localItems.map((item: ItemType, itemKey: Number) => {
          const newAmount = item.quantity && item.quantity - 1;
          if (itemKey !== key) newArr.push(item);
          else
            newArr.push({
              id: item.id,
              quantity: newAmount,
              label: item.label,
            });
        });
      localStorage.setItem("cart", JSON.stringify(newArr));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const clickedPlus = (key: Number) => {
    if (typeof window !== "undefined") {
      const localItemsRaw = localStorage.getItem("cart");
      let localItems;
      let newArr: ItemType[] = [];
      if (localItemsRaw) localItems = JSON.parse(localItemsRaw);

      localItems &&
        localItems.map((item: ItemType, itemKey: Number) => {
          const newAmount = item.quantity && item.quantity + 1;
          if (itemKey !== key) newArr.push(item);
          else
            newArr.push({
              id: item.id,
              quantity: newAmount,
              label: item.label,
            });
        });
      localStorage.setItem("cart", JSON.stringify(newArr));
      window.dispatchEvent(new Event("storage"));
    }
  };
  return (
    <div className="cart__container">
      <div className="cart__title">My Cart</div>
      <div className="cart__items">
        {items &&
          items.map((Item: ItemType, key) => {
            return (
              <div className="cart__item" key={key}>
                <div className="cart__itemImage" />
                <div className="cart__itemName">Item Name</div>
                <div className="cart__itemPrice">$ 25.00</div>
                <div className="cart__itemQuantity">
                  <div className="cart__itemQuantityButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={() => {
                        if (Item.quantity && Item.quantity > 1)
                          clickedMinus(key);
                      }}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5 11h14v2H5z" />
                    </svg>
                  </div>
                  {Item.quantity}
                  <div className="cart__itemQuantityButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={() => {
                        clickedPlus(key);
                      }}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                    </svg>
                  </div>
                </div>
                <div className="cart__itemRemove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    onClick={() => clickedDelete(Item, key)}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
                  </svg>
                </div>
              </div>
            );
          })}
      </div>
      <pre>{JSON.stringify(items, null, 4)}</pre>
    </div>
  );
};

export default Cart;
