
import { Builder } from '@builder.io/sdk';
import { PageWrapper } from "./PageWrapper";
import { Section } from "./Section";
import { Button } from "./Button";
import { Text } from "./Text";
import { Image } from "./Image";

Builder.registerComponent(PageWrapper, {
  name: "PageWrapper",
  inputs: [
    // Здесь можно определить, какие поля редактируемы для этого компонента.
    // Если общие пропсы передаются из core, их можно скрыть или задать значение по умолчанию.
  ],
});

Builder.registerComponent(Section, {
  name: "Section",
  inputs: [{ name: "title", type: "string", defaultValue: "Section Title" }],
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    { name: "label", type: "string", defaultValue: "Click me" },
    // Можно добавить возможность для дизайнеров выбирать другие свойства
  ],
});

Builder.registerComponent(Text, {
  name: "Text",
  inputs: [{ name: "content", type: "string", defaultValue: "Sample text" }],
});

Builder.registerComponent(Image, {
  name: "Image",
  inputs: [
    {
      name: "src",
      type: "string",
      defaultValue: "https://via.placeholder.com/150",
    },
    { name: "alt", type: "string", defaultValue: "Image description" },
  ],
});
