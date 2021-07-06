# starter-snowpack-tailwind

A boilerplate for a [Ghost](https://github.com/tryghost/ghost/) theme, powered by [Tailwind CSS](https://tailwindcss.com) and [Snowpack](https://www.snowpack.dev).

This theme is unstyled, so you'll need to bring your own.

# Development

Styles for this theme are compiled using [Snowpack](https://www.snowpack.dev). You will need [Node](https://nodejs.org/) installed globally (e.g. by using [asdf](https://asdf-vm.com/)). After that, from the theme's directory:

```bash
# install dependencies
npm install

# run development script
npm run dev
```

Now you can edit your CSS and JS assets (located in `/assets`) and even your templates (the `*.hbs` files in the root directory), and the transformed CSS and JS will be placed into `/assets/built`. You just need to refresh your browser to pick them up.

# Release

To build a optimized version of your assets, run this from the theme's directory:

```bash
# build optimized version
npm run build
```

Now zip the theme's directory and upload it to your site.
