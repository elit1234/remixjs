import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useState } from "react";
import styles from "~/styles/ViewingItem.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const ViewingItem = () => {
  const [activeCol, setActiveCol] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { item: itemId } = useParams();

  const clickedMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const clickedPlus = () => {
    setQuantity(quantity + 1);
  };

  const clickedAdd = () => {
    const newObj = {
      id: Number(itemId),
      quantity,
    };
    const localCartData = localStorage.getItem("cart");
    let localCart: any[] = [];
    if (localCartData) localCart = JSON.parse(localCartData);
    let currentItems: any[] = [];
    localCart[0] &&
      localCart.map((localCartItem: any) => {
        currentItems.push(localCartItem);
      });
    currentItems.push(newObj);

    localStorage.setItem("cart", JSON.stringify(currentItems));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container">
      <div className="topImage">
        <div
          className="backArrow"
          onClick={() => (window.location.href = "/store")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
          </svg>
        </div>
        <div className="colors">
          <div
            className={activeCol === 0 ? `color active` : `color`}
            onClick={() => setActiveCol(0)}
          />
          <div
            className={activeCol === 1 ? `color active` : `color`}
            onClick={() => setActiveCol(1)}
          />
          <div
            className={activeCol === 2 ? `color active` : `color`}
            onClick={() => setActiveCol(2)}
          />
        </div>
      </div>
      <div className="title">Item Name</div>
      <div className="details">
        <div className="price">$ 50</div>
        <div className="quantity">
          <div className="quantityButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              onClick={() => clickedMinus()}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 11h14v2H5z" />
            </svg>
          </div>
          <div className="quantityAmount">{quantity}</div>
          <div className="quantityButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              onClick={() => clickedPlus()}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="ratingLine">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
            fill="rgba(241,196,14,1)"
          />
        </svg>
        <div className="ratingAmount">4.5</div>
        <div className="reviews">(50 reviews)</div>
      </div>
      <div className="description">
        Minimal Stand is made of by natural wood. The design that is very simple
        and minimal. This is truly one of the best furnitures in any family for
        now. With 3 different colors, you can easy select the best match for
        your home.
      </div>
      <div className="bottomBar">
        <div className="saveIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z" />
          </svg>
        </div>
        <div className="addTo" onClick={() => clickedAdd()}>
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default ViewingItem;
