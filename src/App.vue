<template>
  <div id="app">
    <!-- custom single file component -->
    <demo> {{ msg }} </demo>
  </div>
</template>

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

<style>
body {
  background-color: #323232;
}

#app {
  display: flex;
  height: 500px;
  width: auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Scrollbar to match Adobe */
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
