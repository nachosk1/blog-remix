import { cssBundleHref } from "@remix-run/css-bundle";
import {
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
];

function Layout() {
  return (
    <>
      <header>
        <h1>peigDev! </h1>
      </header>
      <Outlet />
      <footer>
        <p>&copy; Copyright 2024 peidev. Con mucho amor</p>
      </footer>
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
