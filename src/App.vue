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
#app {
  display: flex;
  justify-content: center;
  align-items: center;
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
