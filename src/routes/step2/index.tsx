import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-100 p-4">
      <h1 class="mb-4 text-center text-2xl font-bold">Шаг 2</h1>
      <p class="text-center text-gray-700">
        Привет, /*name*/! Добро пожаловать на второй шаг.
      </p>
      <a
        href="/finish"
        class="mx-auto mt-4 block rounded bg-green-500 p-2 text-white hover:bg-green-600"
      >
        Завершить
      </a>
    </div>
  );
});
