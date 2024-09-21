import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/static/",
    plugins: [react()],
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: "./src/main.jsx",
            output: {
                entryFileNames: "bundle.js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]",
            },
        },
        minify: "esbuild",
    },
});
