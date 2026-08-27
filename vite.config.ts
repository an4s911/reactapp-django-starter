import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/static/",
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: "./src/main.tsx",
            output: {
                entryFileNames: "bundle.js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]",
            },
        },
    },
});
