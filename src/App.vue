<template>
  <div id="app">
    <Header />
    <RoundButtons />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import RoundButtons from './components/RoundButtons';

export default {
  name: 'App',
  components: {
    Header,
    RoundButtons
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  background: linear-gradient(120.15deg, #EC7A08 -24.83%, #FF8080 83.82%);
}

* {
  font-family: 'Roboto', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 15px 20px 0;

  @media (min-width: $breakpoint-tablet) {
    width: 300px;
    margin: 30px auto;
  }

}

.light-text {
  font-weight: 300;
}


</style>
