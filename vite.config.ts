import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from 'dotenv'

dotenv.config()


export default defineConfig(() => {
  console.log('process.env.PUBLIC_BASE_URL', process.env.PUBLIC_BASE_URL)
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    base: process.env.PUBLIC_BASE_URL,
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
