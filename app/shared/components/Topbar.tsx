import { useEffect, useState } from "react";

export default function Topbar() {
  const [active, setActive] = useState<boolean>(false);
  const [activeCart, setActiveCart] = useState<boolean>(false);

  function clickedMenu() {
    const cart = document.querySelector(".cart__container")!;
    let localCartActive = cart.classList.contains("active");
    if (localCartActive) clickedCart();

    const sidebar = document.querySelector(".sidebar__container")!;
    const secondPage = document.querySelector(".sidebar__secondPage")!;
    const thirdPage = document.querySelector(".sidebar__thirdPage")!;
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
    const sidebar = document.querySelector(".sidebar__container")!;
    let localSidebarActive = sidebar.classList.contains("active");
    if (localSidebarActive) clickedMenu();

    const cart = document.querySelector(".cart__container")!;
    cart.classList.toggle("active");

    let localActive = cart.classList.contains("active");
    setActiveCart(localActive);
  }

  useEffect(() => {
    const menuButton = document.querySelector(".menuIcon")!;
    // menuButton.addEventListener("touchstart", () => clickedMenu());
    // menuButton.addEventListener("onclick", () => clickedMenu());
    ["click", "touch"].forEach(function (e) {
      menuButton.addEventListener(e, () => clickedMenu());
    });
    return () => {
      menuButton.removeEventListener("touchstart", () => {
        clickedMenu();
      });
    };
  }, []);

  useEffect(() => {
    const cartIcon = document.querySelector(".cartIcon")!;

    ["click", "touch"].forEach(function (e) {
      cartIcon.addEventListener(e, () => clickedCart());
    });

    return () => {
      ["click", "touch"].forEach(function (e) {
        cartIcon.removeEventListener(e, () => {
          clickedCart();
        });
      });
    };
  }, []);

  return (
    <div className="topbar__container">
      <div className="topbar__logo">
        <a href="/">A</a>
      </div>
      <div className="topbar__right">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="cartIcon"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        {!active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="menuIcon"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="menuIcon"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M21 18v2H3v-2h18zM6.596 3.904L8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z" />
          </svg>
        )}
      </div>
    </div>
  );
}
