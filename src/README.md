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
