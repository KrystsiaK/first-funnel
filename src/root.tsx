import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik";
import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
      </head>
      <body lang="en">
        <div class="min-h-screen">
          <main>
            <h1 class="py-4 text-center text-2xl font-bold">Воронка</h1>
            <div class="mb-4 flex justify-center gap-4">
              <a
                href="/step1"
                class="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
              >
                Шаг 1
              </a>
              <a
                href="/step2"
                class="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
              >
                Шаг 2
              </a>
            </div>
            <RouterOutlet />
          </main>
        </div>
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
