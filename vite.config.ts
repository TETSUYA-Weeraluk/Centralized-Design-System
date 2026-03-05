import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const isStorybook =
    process.argv.includes("storybook") ||
    process.env.npm_lifecycle_script?.includes("storybook");

  return {
    plugins: [
      tailwindcss(),
      !isStorybook && reactRouter(),
      tsconfigPaths(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./app"),
      },
    },
  };
});
