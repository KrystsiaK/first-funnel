import { component$, Slot } from "@builder.io/qwik";

interface SectionProps {
  title?: string;
}

export const Section = component$((props: SectionProps) => {
  return (
    <section class="my-4 rounded border p-4">
      {props.title && <h2 class="mb-2 text-2xl font-bold">{props.title}</h2>}
      <Slot />
    </section>
  );
});
