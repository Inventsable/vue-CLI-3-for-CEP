# vue CLI 3 template

> Barebones example of [Vue CLI 3](https://cli.vuejs.org/) and [vue-loader](http://vuejs.github.io/vue-loader) for Adobe CEP extensions with single file components

## To do the above manually:

> [Vue CLI 3](https://cli.vuejs.org/) download:

``` bash
# install in terminal
npm install -g @vue/cli
```

> Create a [webpack template](https://www.npmjs.com/package/vue-cli):

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

> Add CSXS/manifest.xml, CSInterface.js, .debug and anything extra

## CSXS/manifest.xml:

``` xml
<DispatchInfo>
  <Resources>
    <MainPath>./index.html</MainPath>
    <CEFCommandLine>
      <Parameter>--enable-nodejs</Parameter>
      <!-- Doesn't show in Window > Extensions unless mixed content is enabled -->
      <Parameter>--mixed-context</Parameter>
    </CEFCommandLine>
  </Resources>
```

## index.html

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


## src/main.js

``` JavaScript
import Vue from 'vue'
import App from './App.vue'

// All interaction and functions should be in App.vue, won't work here

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## src/App.vue

``` html
<template>
  <div id="app">

    <!-- custom single file component -->
    <demo></demo>

    <!-- using reactive data -->
    <span> {{ msg }} </span>

  </div>
</template>
```
``` JavaScript
<script>

// define single file component
import demo from './assets/demo.vue';

export default {
  name: 'app',

  // add to active components object
  components: { demo },

  data () {
    return {
      msg: 'Reactive text here'
    }
  }
}
</script>
```
``` css
/* Additional styles */
<style>
/* Scrollbars to match Adobe's: */
  ::-webkit-scrollbar {
    background: #2A2A2A;
  }

  ::-webkit-scrollbar-thumb {
    background: #3E3E3E;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #525252;
  }
</style>
```
