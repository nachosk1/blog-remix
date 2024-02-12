import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "./styles/global.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: globalStyles,
  },
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.min.css",
  },
];

function Layout() {
  return (
    <>
      <main>
        <header>
          <Link to={"/"}>
            <h1>PeigDev!🔥 </h1>
          </Link>
        </header>
        <Outlet />
        <footer>
          <small>&copy; Copyright 2024 Peigdev. Hecho con mucho amor ❤️</small>
        </footer>
      </main>
    </>
  );
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
