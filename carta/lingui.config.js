module.exports = {
  locales: ["en", "es", "fr"], // Agregamos "fr"
  sourceLocale: "en",
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: "po",
};
