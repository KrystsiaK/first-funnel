import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FirstStep from "~/steps/FirstStep";
import SecondStep from "~/steps/SecondStep";

export default component$(() => {
  return (
    <>
      <FirstStep />
      <SecondStep />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
