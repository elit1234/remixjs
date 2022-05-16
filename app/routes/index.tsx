import { useEffect, useState } from "react";
import styles from "~/styles/home.css";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { Image } from "remix-image";

// import type { Beverage } from "@prisma/client";

// type LoaderData = { items: Array<Beverage> };

// export const loader: LoaderFunction = async () => {
//   const data = {
//     items: await db.beverage.findMany(),
//   };
//   return data;
// };

// export const action: ActionFunction = async ({ request }) => {
//   const form = await request.formData();
//   const beverageName: any = form.get("beverageName");

//   if (beverageName && beverageName.length < 2)
//     throw new Error("Name not long enough");

//   await db.beverage.create({ data: { name: beverageName } });
//   return redirect("/");
// };

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];
export default function Index() {
  const [width, setWidth] = useState<Number>(0);
  // const data = useLoaderData<LoaderData>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setWidth(window.innerWidth));

      const options = {
        root: null,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("show");
          }
        });
      }, options);

      const topTexts = document.querySelectorAll(".top-text-animate");
      topTexts.forEach((text) => observer.observe(text));
      const topParagraph = document.querySelector(".top-paragraph")!;
      observer.observe(topParagraph);
      const getStarted = document.querySelector(".top-getStarted")!;
      observer.observe(getStarted);
    }
  }, []);
  let windowWidth = 100;
  if (typeof window !== "undefined") windowWidth = window.innerWidth;
  return (
    <div className="container">
      {/* {data &&
        data.items &&
        data.items.map((item) => (
          <span key={item.id} style={{ marginRight: "2px " }}>
            {item.name === "coffee" ? <span>C</span> : <span>B</span>}
          </span>
        ))} */}
      <div className="top-image">
        <div className="top-overlay">
          <div className="top-text top-text-animate">Make Your</div>
          <div className="top-secondText top-text-animate">Home Beautiful</div>
          <div className="top-paragraph">
            The best simple place where you can discore the most wonder
            furniture and make your home beautiful.
          </div>

          <a href="/store" className="top-getStarted">
            Get Started
          </a>
        </div>
      </div>
      {/* <img
          src="https://i.ibb.co/ZMWnczX/ezgif-com-gif-maker-3.webp"
          className="top-image"
        /> */}
    </div>
  );
}
