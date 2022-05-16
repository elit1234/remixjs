import type { Category } from "@prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

interface SidebarProps {
  items: CategoryType[];
}

export default function Sidebar({ items }: SidebarProps) {
  const [firstCategories, setFirstCategories] = useState<CategoryType[] | null>(
    []
  );
  const [secondCategories, setSecondCategories] = useState<
    CategoryType[] | null
  >([]);
  const [thirdCategories, setThirdCategories] = useState<CategoryType[] | null>(
    []
  );

  const [current, setCurrent] = useState<CategoryType | null>({});

  useEffect(() => {
    console.log(items);
    const localFirst = items && items.filter((it) => it.page === 1);

    setFirstCategories(localFirst);
  }, [items]);

  const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      height="36"
      style={{ flex: 1, justifySelf: "flex-end" }}
      className="sidebar__rightArrow_svg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  );

  function clickedFirstOpt(category: CategoryType) {
    const secondPage = document.querySelector(".sidebar__secondPage")!;
    const localSecond =
      items &&
      items.filter((it) => it.page === 2 && it.parentID === category.id);
    setSecondCategories(localSecond);
    secondPage.classList.add("active");
    setCurrent(category);
  }

  function clickedSecondOpt(category: CategoryType) {
    const thirdPage = document.querySelector(".sidebar__thirdPage")!;
    const localThird =
      items &&
      items.filter((it) => it.page === 3 && it.parentID === category.id);

    setThirdCategories(localThird);

    thirdPage.classList.add("active");

    setCurrent(category);
  }

  return (
    <div className="sidebar__page sidebar__container">
      <div className="sidebar__categories">
        {firstCategories &&
          firstCategories.map((firstCat, key) => {
            return (
              <div
                className="sidebar__category"
                key={key}
                onClick={() => clickedFirstOpt(firstCat)}
              >
                {firstCat.label}
                <RightArrow />
              </div>
            );
          })}
      </div>
      <div className="sidebar__page sidebar__secondPage">
        <div className="sidebar__categories">
          {secondCategories &&
            secondCategories.map((secondCat, key) => {
              return (
                <div
                  className="sidebar__category"
                  key={key}
                  onClick={() => clickedSecondOpt(secondCat)}
                >
                  {secondCat.label}
                  <RightArrow />
                </div>
              );
            })}
          {secondCategories && !secondCategories[0] ? (
            <div className="sidebar__category nothing">Nothing here!</div>
          ) : (
            <div className="sidebar__category">View All {current?.label}</div>
          )}{" "}
        </div>
      </div>
      <div className="sidebar__page sidebar__thirdPage">
        <div className="sidebar__categories">
          {thirdCategories &&
            thirdCategories.map((thirdCat, key) => {
              return (
                <div className="sidebar__category" key={key}>
                  {thirdCat.label}
                  <RightArrow />
                </div>
              );
            })}
          {thirdCategories && !thirdCategories[0] ? (
            <div className="sidebar__category nothing">Nothing here!</div>
          ) : (
            <div className="sidebar__category">View All {current?.label}</div>
          )}
        </div>
      </div>
    </div>
  );
}
