// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    '**/node_modules/**/*',
    '**/LICENSE',
    '**/package.json',
    '**/package-lock.json',
    '**/postcss.config.js',
    '**/tailwind.config.js',
    '**/snowpack.config.js',
  ],
  mount: {
    './assets': '/',
    './': '/_root'
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    out: './assets/built'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
    entrypoints: ['./assets/js/index.js']
  },
};
