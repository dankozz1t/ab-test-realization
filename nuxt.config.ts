export default defineNuxtConfig({
  app: {
    head: {
      title: "A/B test realization",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  css: ["@/assets/styles/main.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
