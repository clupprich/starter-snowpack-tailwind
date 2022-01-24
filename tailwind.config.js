module.exports = {
  content: ["./*.hbs", "./**/*.hbs"],
  safelist: [
    "kg-width-wide",
    "kg-width-full",
    "kg-embed-card",
    "kg-bookmark-card",
    "kg-bookmark-container",
    "kg-bookmark-content",
    "kg-bookmark-thumbnail",
    "kg-gallery-container",
    "kg-bookmark-title",
    "kg-bookmark-description",
    "kg-bookmark-metadata",
    "kg-bookmark-icon",
    "kg-bookmark-author",
    "kg-bookmark-publisher ",
    "kg-gallery-row",
    "kg-gallery-image",
    "aspect-w-16",
    "aspect-h-9",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};
