import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remix-asics\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());

// app/styles/home.css
var home_default = "/build/_assets/home-S6GVHZZ4.css";

// app/routes/index.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: home_default
  }
];
function Index() {
  const [width, setWidth] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      const options = {
        root: null,
        rootMargin: "0px"
      };
      const observer = new IntersectionObserver(function(entries, observer2) {
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
      const topParagraph = document.querySelector(".top-paragraph");
      observer.observe(topParagraph);
      const getStarted = document.querySelector(".top-getStarted");
      observer.observe(getStarted);
    }
  }, []);
  let windowWidth = 100;
  if (typeof window !== "undefined")
    windowWidth = window.innerWidth;
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-image"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-overlay"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-text top-text-animate"
  }, "Make Your"), /* @__PURE__ */ React.createElement("div", {
    className: "top-secondText top-text-animate"
  }, "Home Beautiful"), /* @__PURE__ */ React.createElement("div", {
    className: "top-paragraph"
  }, "The best simple place where you can discore the most wonder furniture and make your home beautiful."), /* @__PURE__ */ React.createElement("a", {
    href: "/store"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "top-getStarted"
  }, "Get Started")))));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-XCMDXEIV.js.map
