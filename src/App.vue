<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <p>Hello, Vlad!</p>
    <p>Putin - Huilo!</p>
  </div>
  <v-main-wrapper />

</template>

<script>

    import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
