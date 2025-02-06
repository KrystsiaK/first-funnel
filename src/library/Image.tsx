import { component$ } from "@builder.io/qwik";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Image = component$((props: ImageProps) => {
  return <img src={props.src} alt={props.alt} class={props.className} />;
});
