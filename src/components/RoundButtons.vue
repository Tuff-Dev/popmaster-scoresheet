<template>
  <div class="round-buttons">
      <div class="round-buttons__button">
          <button class="btn round-1 active" v-on:click="updateRound('round-1')">Round 1</button>
      </div>
      <div class="round-buttons__button">
          <button class="btn round-2" v-on:click="updateRound('round-2')">Round 2</button>
      </div>
  </div>
</template>

<script>

export default {
    data: function() {
        return {
            activeButton: 'round-1'
        }
    },
    methods: {
        updateRound: function(round) {
            this.activeButton = round;
            if(this.activeButton === 'round-1') {
                document.querySelector('.btn.round-1').classList.add('active');
                document.querySelector('.btn.round-2').classList.remove('active');
            } else {
                document.querySelector('.btn.round-1').classList.remove('active');
                document.querySelector('.btn.round-2').classList.add('active');
            }
            this.$emit('changeRound', this.activeButton);
        }
    }
}
</script>

<style lang="scss">
.round-buttons {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10px;

    @media (min-width: $breakpoint-tablet) {
        font-size: 1.5em;
        margin: 20px auto;
    }
    

    .round-buttons__button {
        display: inline;

        button.btn {
            width: 50%;
            border: none;
            color: #EAEAEA;
            background-color: #661930;
            font-weight: 300;
            font-size: 1.1em;
            padding: 7px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            position: relative;
            outline: none;

            &.round-1 {
                border-top-left-radius: 10px;
            }

            &.round-2 {
                border-bottom-right-radius: 10px;
            }

            &.active {
                background-color: #83364D;
                box-shadow: none;
                
                top: 1px;
            }

            &:hover:not(.active) {
                top: 1px;
                background-color: #92465d;
                box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
            }

        }

    }

}

</style>