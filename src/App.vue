<template>

  <div id="app">
    <Menu @clearRounds="clearRounds()"  :menuOpen="menuOpen" />
    <Header />
    <RoundButtons @changeRound="changeRound($event)" />
    <Round class="round-1" v-show="round === 1" :roundData="round1Data" />
    <Round class="round-2" v-show="round === 2" :roundData="round2Data" />
  </div>
</template>

<script>
import Header from './components/Header'
import RoundButtons from './components/RoundButtons';
import Round from './components/Round'
import Menu from './components/Menu';
import RoundData from './models/RoundData';

var round1Data = new RoundData(1);
var round2Data = new RoundData(2);

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
      round2Key: 100,
      round1Data: round1Data,
      round2Data: round2Data
    }
  },
  watch: {
    round1Data: {
      handler(data) {
        // Save to localStorage
        window.localStorage.setItem('pm_r1', JSON.stringify(data));
      },
      deep: true
    },
    round2Data: {
      handler(data) {
        // Save to localStorage
        window.localStorage.setItem('pm_r2', JSON.stringify(data));
      },
      deep: true
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
      this.round1Data = new RoundData(1);
      this.round2Data = new RoundData(2);
      this.round1Key += 1;
      this.round2Key += 1;
      // Set active round to 1
      this.changeRound('round-1');
      // Close Menu
      this.menuOpen = false;
    }
  },
  beforeMount: function() {
    // Check to see if there is any saved data in local storage
    const r1Data = JSON.parse(window.localStorage.getItem('pm_r1'));
    const r2Data = JSON.parse(window.localStorage.getItem('pm_r2'));

    const startOfToday = new Date();
    startOfToday.setHours(0,0,0,0);

    // If it is from before today, do not load
    if(r1Data != null) {
      const r1Time = new Date(r1Data.time);
      if(r1Time > startOfToday) {
        // Update question info
        for(var i=0; i<10 ; i++) {
          this.round1Data.questions[i].answered = r1Data.questions[i].answered;
          this.round1Data.questions[i].answeredCorrect = r1Data.questions[i].answeredCorrect;
          this.round1Data.questions[i].score = r1Data.questions[i].score;
        }
        this.round1Data.totalScore = r1Data.totalScore;
      }
    }

    if(r2Data != null) {
      const r2Time = new Date(r2Data.time);
      if(r2Time > startOfToday) {
        // Update question info
        for(var x=0; x<10 ; x++) {
          this.round2Data.questions[x].answered = r2Data.questions[x].answered;
          this.round2Data.questions[x].answeredCorrect = r2Data.questions[x].answeredCorrect;
          this.round2Data.questions[x].score = r2Data.questions[x].score;
        }
        this.round2Data.totalScore = r2Data.totalScore;
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

  height: 100%;
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
