import { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import db from "~/utils/db.server";

type LoaderData = { items: Array<Category> };

import globalStyles from "~/styles/global.css";
import topbarStyles from "~/styles/topbar.css";
import sidebarStyles from "~/styles/sidebar.css";
import cartStyles from "~/styles/cart.css";

import Topbar from "./shared/components/Topbar";
import Sidebar from "./shared/components/Sidebar";
import { Category } from "@prisma/client";
import Cart from "./shared/components/Cart";

export const meta = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStyles,
    },
    {
      rel: "stylesheet",
      href: topbarStyles,
    },
    {
      rel: "stylesheet",
      href: sidebarStyles,
    },
    {
      rel: "stylesheet",
      href: cartStyles,
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }: any) {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div style={{ overflowY: "auto", overflowX: "hidden", width: "100vw" }}>
          <Topbar />
          <Sidebar items={data && data.items ? data.items : []} />
          <Cart />
          <div>{children}</div>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </div>
      </body>
    </html>
  );
}

export function Layout({ children }: any) {
  return (
    /* 
    It is possible to define the Default Layout here. 
    In that way, all the pages are going to be in the same format.
    Examples of components to be added here: Toolbar/Navbar, Footer and etc...
    */
    <>{children}</>
  );
}

export const loader: LoaderFunction = async () => {
  const data = {
    items: await db.category.findMany(),
  };
  return data;
};
