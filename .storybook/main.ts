import { type StorybookConfig } from "@storybook/nextjs-vite";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: { name: "@storybook/nextjs-vite", options: {} },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y", "@storybook/addon-docs"],
  staticDirs: ["../public"],

  viteFinal: async (baseConfig) =>
    mergeConfig(baseConfig, {
      plugins: [
        react({
          babel: {
            plugins: [["babel-plugin-react-compiler", {}]]
          }
        })
      ]
    })
};

export default config;
