import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { Button } from "~/library/Button";
import { Image } from "~/library/Image";
import { PageWrapper } from "~/library/PageWrapper";
import { Section } from "~/library/Section";
import { Text } from "~/library/Text";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Button,
    name: "Button",
    inputs: [
      {
        name: "label",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: Image,
    name: "Image",
    inputs: [
      {
        name: "alt",
        type: "string",
      },
      {
        name: "className",
        type: "string",
      },
      {
        name: "src",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: PageWrapper,
    name: "PageWrapper",
    inputs: [
      {
        name: "goNext$",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "() => void",
        },
        required: true,
      },
      {
        name: "isAdmin",
        type: "boolean",
        required: true,
      },
      {
        name: "setAdmin$",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "(isAdmin: boolean) => void",
        },
        required: true,
      },
    ],
  },
  {
    component: Section,
    name: "Section",
    inputs: [
      {
        name: "title",
        type: "string",
      },
    ],
  },
  {
    component: Text,
    name: "Text",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "content",
        type: "string",
        required: true,
      },
    ],
  },
];
