import { component$, PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  label: string;
  onClick$: PropFunction<() => void>;
}

export const Button = component$((props: ButtonProps) => {
  return (
    <button
      onClick$={props.onClick$}
      class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      {props.label}
    </button>
  );
});
