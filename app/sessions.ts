// app/sessions.js
import { createCookieSessionStorage } from "@remix-run/node"; // or "@remix-run/cloudflare"

const { getSession, commitSession, destroySession } =
    createCookieSessionStorage({
        // a Cookie from `createCookie` or the CookieOptions to create one
        cookie: {
            name: "__session",

            // all of these are optional
            domain: "remix.run",
            expires: new Date(Date.now() + 60_000),
        },
    });

export { getSession, commitSession, destroySession };