## replies about CEP and webpack

> Explanation of workflow:

1) When you run the `build` version, all of the files are compiled and exported to the dist folder. These can be picked up from the file system by CEP. *However*, they *do not* run through the webpack-dev-server which is required for hot-reloading. Therefore, you will not get that immediate reactivity that you do when running the localhost link in the browser. Webpack uses the `vue-loader` package to compile SFCs, so these should work regardless.

2) When you run the `dev` version, all resources are served through a server that the command starts up for you, bound to port `8080` (by default). It is _also_ automatically configured to open a browser to that location. *No files are saved to disk* so the CEP version cannot form a connection to the hot-reloaded source. If you run the `build` command _first_ and then start the `dev` version, opening the CEP panel will load the non-reactive `build` output, completely bypassing the hot reloaded contents. Other side effects include the fact that `build` is optimized for production, which means it minifies, uglifies, and does a few other things that will get in the way of debuggability. Be careful.

> Eric's advice:

1) You will need to add the `index-dev.html` file to the system. *Currently* the CEP `Manifest.xml` will need to be modified by hand when switching between dev and non-dev builds.

2) The *correct* way to handle the `Manifest.xml` file difference is to set up the one in the root as a *template* that Webpack modifies before outputting to a “build” directory (`/dist/` as currently configured). So when running `npm run dev` you would get this structure:

```
repoRoot/dist/dev/Manifest.xml <-- Mentions index-dev.html
repoRoot/dist/dev/index-dev.html
...
```

and running `npm run build` would get you this:
```
repoRoot/dist/build/Manifest.xml <-- Mentions index.html
repoRoot/dist/build/index.html
```

This would go for both the `build` and `dev` builds. Webpack can do this pretty easily (it’s how we build our panels). You can use the [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) to adjust the `<MainPath>` entry ([see here](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates)) based on whether you’re building development or production (dev or build). You can use `CopyWebpackPlugin` to move the `.debug` file to the correct location for development builds. Finally you can use `CleanWebpackPlugin` to clean the contents of the folders at the beginning of a build (enables a clean build).

Pretty much all of #2 requires “learning Webpack” but the best way to start getting your hands dirty is to have a goal to accomplish that you can ask questions about.

> OT: "I noticed that your SFC in PPro does show the image location correctly -- but for me in Illustrator, it was trying to read the image as an absolute path (and error’d)."

I’m not sure why you saw this. I didn’t test the "build" version, only the hot-reloading dev version. I’d suggest that you take a look at the code in the debugger for that image and see what’s there. Based on the webpack configuration, it looks like it should be getting renamed during the webpack build process. It uses the `file-loader` to handle that. I’d suggest looking at what source code the panel is seeing and compare it to the settings in the [Webpack configuration file here](https://github.com/Inventsable/vue-CLI-3-for-CEP/blob/master/webpack.config.js#L35). Also, `file-loader`’s [configurable options are available here](https://github.com/webpack-contrib/file-loader#options).
