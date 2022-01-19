<template>
  <div class="menu">
      <div class="menu__icon open" v-show="!menuOpen" @click="toggleMenu"><i class="fas fa-ellipsis-v"></i></div>
      <div class="menu__icon close" v-show="menuOpen" @click="toggleMenu"><i class="fas fa-times"></i></div>
      <div class="menu__content" v-if="menuOpen">
        <ul>
          <li>
            <a href="#" @click="clearRounds()">Clear Rounds</a>
          </li>
        </ul>

        <div class="instructions">
          <p>Popmaster Online Scoresheet. Simply click/press the questions to toggle if you have answered the question correctly.</p>
          <p>* Bonus Question</p>
        </div>

      </div>
    </div>
</template>

<script>
export default {
    props: {
        menuOpenParam: Boolean
    },
    data: function() {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
            document.querySelector('.menu').classList.toggle('open');
        },
        clearRounds() {
            // Emit an event to clear the rounds
            this.$emit('clearRounds');
            this.toggleMenu()
        },
        openMenu() {
            document.querySelector('.menu').classList.add('open');
        }
    },
    created: function() {
        this.menuOpen = this.menuOpenParam;
    },
    mounted: function() {
        if(this.menuOpen === true) {
            this.openMenu();
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    transition: 0.3s;
    background: rgba(71, 0, 17, 0.65);
    border-bottom-right-radius: 10px;

    @media (min-width: 500px) {
      width: 90px;
      height: 90px;
    }

    &.open {
      width: 100vw;
      height: 100vh;
      border-bottom-right-radius: 0;
      background: rgba(71, 0, 17, 0.85);
    }
    
      
    .menu__icon {
      color: white;
      width: 100%;
      height: 100%;
      max-width: 40px;
      max-height: 40px;
      cursor: pointer;
      display: block;
      // margin-left: 16px;
      font-size: 20px;
      float: left;
      @media (min-width: 500px) {
        font-size: 50px;
        // margin-left: 33px;
        max-width: 90px;
        max-height: 90px;
      }

      &.hidden {
        display: none;
      }


      svg {
        padding-top: 8px;
        @media (min-width: 500px) {
          padding-top: 18px;
        }
      }
    }

    .menu__content {
      margin-top: 100px;
      color: white;

      @media (min-width: 500px) {
        margin-top: 200px;
      }

      ul {
        list-style-type: none; /* Remove bullets */
        margin: 0;
        padding: 0;
        font-size: 1.5em;

        @media (min-width: 500px) {
          font-size: 2em;
        }


        li {
          width: 100%;
          height: 50px;
          a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 50px;
            font-weight: 700;
            white-space: nowrap;
            &:hover {
              color:#000000
            }
          }
        }
      }

      div.instructions {
        margin-top: 100px;
        font-weight: 300;
        padding: 0 20px;

        @media (min-width: 500px) {
          margin-top: 150px;
          font-size: 1.4em;
          padding: 0 50px;
        }


      }

    }
  }
</style>