import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            hooks: path.resolve(__dirname, "./src/hooks"),
            pages: path.resolve(__dirname, "./src/pages"),
            stores: path.resolve(__dirname, "./src/stores"),
            components: path.resolve(__dirname, "./src/components"),
            styles: path.resolve(__dirname, "./src/styles"),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${path.resolve(
                    __dirname,
                    "src/styles/index.less"
                )}";`,
            },
        },
    },
});
