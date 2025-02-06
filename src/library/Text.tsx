import { component$ } from "@builder.io/qwik";

interface TextProps {
  content: string;
  className?: string;
}

export const Text = component$((props: TextProps) => {
  return <p class={props.className}>{props.content}</p>;
});
