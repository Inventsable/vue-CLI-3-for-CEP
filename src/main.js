import Vue from 'vue'
import App from './App.vue'

import csInterface from './CSInterface.js'
// const cs = require('./CSInterface.js');


csInterface.evalScript(`alert('vanilla')`)
// cs.evalScript(`alert('hello there')`)


new Vue({
  el: '#app',
  render: h => h(App)
})
