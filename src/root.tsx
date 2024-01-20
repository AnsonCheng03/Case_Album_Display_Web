import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  console.log(process.env.NODE_ENV);
  const basePATH =
    (typeof process === "undefined" &&
      (process as any).env.NODE_ENV != "development" &&
      import.meta.env.PUBLIC_BASE_URL) ||
    "";

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href={`${basePATH}/manifest.json`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
