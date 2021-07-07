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
    './': '/'
  },
  plugins: [
    '@snowpack/plugin-postcss',
    ['snowpack-plugin-content-replace',
      {
        'replacements': {
          'default.hbs': {
            '{{asset "built/css/screen.css"}}': '{{asset "css/screen.css"}}',
            '{{asset "built/js/index.js"}}' : '{{asset "js/index.js"}}'
          }
        }
      }
    ],
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
