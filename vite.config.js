// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
                addToCart: resolve(__dirname, "cart.html"),
                // Add more entry points for other HTML files as needed
            },
        },
    },
});