import type { LoaderFunction } from "@remix-run/node";
import { imageLoader, DiskCache, MemoryCache } from "remix-image/server";

const config = {
  selfUrl: "http://localhost:3000",
  whitelistedDomains: ["i.imgur.com"],
  cache: new DiskCache(),
};

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request);
};
