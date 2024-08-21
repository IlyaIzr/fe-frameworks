import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
      
      // outDir: '../../../docs/pages/qwik',
      // emptyOutDir: true
    },    
    // base: './',
    plugins: [
      staticAdapter({
        origin: "https://ilyaizr.github.io/fe-frameworks",
      }),
    ],
  };
});
