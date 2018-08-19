> Must have [NodeJS](https://nodejs.org/en/)

## Installing [Vue CLI 3](https://cli.vuejs.org/):

``` bash
# install in terminal
npm install -g @vue/cli
```

## Create a [webpack template](https://www.npmjs.com/package/vue-cli):

``` bash
# Usage
vue init <template-name> <project-name>

# Example
vue init webpack-simple my-project
# Cycle through name, description, author, etc.
```

``` bash
# Travel to above project
cd my-project

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production / update CEP
npm run build
```

Add CSXS/manifest.xml, CSInterface.js, .debug and anything extra to the resulting repo.

manifest.xml needs `<MainPath>` to direct to either:

## index.html without hot reload:

> must use `npm run build` and refresh panel to update CEP of any vue-related changes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>my-project</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- load CSInterface before dist/build.js -->
    <script src="./src/CSInterface.js"></script>

    <!-- default output from webpack template -->
    <script src="dist/build.js"></script>

    <!-- additional scripts below -->
    <script src="./src/reload.js"></script>
  </body>
</html>
```

## or dev-index.html with hot reload:

> must use `npm run dev` before running app.

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>my-project</title>
  </head>
  <body style="margin: 0; border: 0; overflow:hidden;">
    <iframe src="http://localhost:9000" style="border: 0; width: 100vw; height: 100vh;"></iframe>
  </body>
</html>
```
