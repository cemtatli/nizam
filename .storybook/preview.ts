import type { Preview } from "@storybook/nextjs-vite";

import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: { test: "todo" }
  }
};

export default preview;
