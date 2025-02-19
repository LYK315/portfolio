import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/Assets"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@constants": path.resolve(__dirname, "./src/Constants"),
      "@contexts": path.resolve(__dirname, "./src/Contexts"),
      "@hooks": path.resolve(__dirname, "./src/Hooks"),
      "@store": path.resolve(__dirname, "./src/Store"),
      "@styles": path.resolve(__dirname, "./src/Styles"),
      "@utils": path.resolve(__dirname, "./src/Utils"),
    },
  },
});
