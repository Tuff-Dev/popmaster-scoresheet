<template>

  <div id="app">
    <Menu @clearRounds="clearRounds()"  :menuOpen="menuOpen" />
    <Header />
    <RoundButtons @changeRound="changeRound($event)" />
    <Round class="round-1" v-show="round === 1" :key="round1Key"/>
    <Round class="round-2"  v-show="round === 2" :key="round2Key"/>
  </div>
</template>

<script>
import Header from './components/Header'
import RoundButtons from './components/RoundButtons';
import Round from './components/Round'
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {
    Header,
    RoundButtons,
    Round,
    Menu
  },
  data: function() {
    return {
      round: 1,
      menuOpen: false,
      round1Key: 0,
      round2Key: 100
    }
  },
  methods: {
    changeRound: function(val) {
      if(val === 'round-1') {
        this.round = 1
      } else {
        this.round = 2;
      }
    },
    clearRounds: function() {
      // Force re-render on round components
      this.round1Key += 1;
      this.round2Key += 1;
      // Set active round to 1
      this.changeRound('round-1');
      // Close Menu
      this.menuOpen = false;
    }
  },
  created: function() {
    console.log("Load from localStorage");
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

a {
  color: white;
  text-decoration: none;
  &:hover {
    color: blueviolet;
  }

  &:visited {
    color: white;
  }
}

* {
  font-family: 'Roboto', sans-serif;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
