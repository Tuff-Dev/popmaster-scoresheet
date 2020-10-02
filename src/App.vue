<template>
  <div id="app">
    <Header />
    <RoundButtons @changeRound="changeRound($event)" />
    <Round class="round-1" v-show="round === 1" />
    <Round class="round-2"  v-show="round === 2" />
  </div>
</template>

<script>
import Header from './components/Header'
import RoundButtons from './components/RoundButtons';
import Round from './components/Round'

export default {
  name: 'App',
  components: {
    Header,
    RoundButtons,
    Round
  },
  data: function() {
    return {
      round: 1
    }
  },
  methods: {
    changeRound: function(val) {
      console.log("Round Changed");
      if(val === 'round-1') {
        console.log("Loading Round 1");
        this.round = 1
      } else {
        console.log("Loading Round 2");
        this.round = 2;
      }
    }

  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  background: -moz-linear-gradient(326deg, rgba(236,122,8,1) 0%, rgba(236,122,8,1) 0%, rgba(255,128,128,1) 65%, rgba(255,128,128,1) 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(236,122,8,1)), color-stop(0%, rgba(236,122,8,1)), color-stop(65%, rgba(255,128,128,1)), color-stop(100%, rgba(255,128,128,1))); /* safari4+,chrome */
  background: -webkit-linear-gradient(326deg, rgba(236,122,8,1) 0%, rgba(236,122,8,1) 0%, rgba(255,128,128,1) 65%, rgba(255,128,128,1) 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(326deg, rgba(236,122,8,1) 0%, rgba(236,122,8,1) 0%, rgba(255,128,128,1) 65%, rgba(255,128,128,1) 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(326deg, rgba(236,122,8,1) 0%, rgba(236,122,8,1) 0%, rgba(255,128,128,1) 65%, rgba(255,128,128,1) 100%); /* ie10+ */
  background: linear-gradient(124deg, rgba(236,122,8,1) 0%, rgba(236,122,8,1) 0%, rgba(255,128,128,1) 65%, rgba(255,128,128,1) 100%); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ec7a08', endColorstr='#ff8080',GradientType=1 ); /* ie6-9 */

  height: 96vh;
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
    width: 350px;
    margin: 30px auto;
  }

}

.light-text {
  font-weight: 300;
}


</style>
