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

Now you can edit your CSS and JS assets (located in `/assets`) and even your templates (the `*.hbs` files in the root directory), and the transformed templates, CSS and JS will be placed into `/dist`.

To make your local Ghost installation use this theme, please create a symlink to the `/dist` folder, like so:

```bash
cd <PATH OF YOUR LOCAL GHOST INSTALLATION>/content/themes
ln -s <PATH OF THE THEME>/dist/ starter-snowpack-tailwind

# So the theme gets picked up
ghost restart
```

Once that's done, you can activate the theme. For changes to show up, you need to refresh your browser. I'm looking into adding livereload or a similar solution in the future.

# Release

To build a optimized version of your assets, run this from the theme's directory:

```bash
# build optimized version
npm run build
```

Now zip the theme's directory and upload it to your site.
