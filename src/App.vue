<template>
  <MainCalendar msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MainCalendar from './components/MainCalendar.vue'

export default {
  name: 'App',
  components: {
    MainCalendar
  }
}
</script>

<style>
#app {
  font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
