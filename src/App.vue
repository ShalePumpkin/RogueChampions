<template>
  <div>
    <div id="app">
      <div v-if="phase === 'settings'">
        <ChooseSettings />
      </div>
      <div v-else>
        <MissionNotches />
        <div class="tab-nav">
          <a @click="() => setTab('play')" :class="{active: tab === 'play'}">Play</a>
          <a @click="() => setTab('heroes')" :class="{active: tab === 'heroes'}">Heroes</a>
          <a v-if="devMode" @click="() => setTab('upgrades')" :class="{active: tab === 'upgrades'}">Upgrades</a>
        </div>
        <div class="tab players-tab" :class="{active: tab === 'heroes'}">
          <Heroes />
        </div>
        <div class="tab players-tab" :class="{active: tab === 'upgrades'}">
          <Upgrades />
        </div>
        <div class="tab playing" :class="{active: tab === 'play'}">
          <transition name="fade">
            <div v-if="phase === 'victory'">
              <h1 class="banger green">Victory!</h1>
              <p>"I'm very proud of you." - Nick Fury</p>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="phase === 'defeat'">
              <h1 class="banger red">Defeat!</h1>
              <p>"I'm disappointed." - Nick Fury</p>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="phase === 'scouting'">
              <Scouting />
            </div>
          </transition>
          <transition name="fade">
            <div v-if="phase === 'battling'">
              <Battling />
            </div>
          </transition>
          <transition name="fade">
            <div v-if="phase === 'downtime'">
              <Downtime />
            </div>
          </transition>
          <transition name="fade">
            <div v-if="phase === 'upgrading'" class="upgrading">
              <Upgrading />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div id="footer">
      <a href="https://github.com/ShalePumpkin/RogueChampions">GitHub</a> - Initially Developed by <a href="./about-the-author.html">ShalePumpkin</a>
			<!-- Forking this? Put your links here! -->
      <br />Background is <a href="https://www.vecteezy.com/free-vector/comic">Comic Vectors by Vecteezy</a>
      <br />Favicon is <a href="https://game-icons.net/1x1/lorc/punch-blast.html">Punch Blast</a> by <a href="http://lorcblog.blogspot.com/">Lorc</a> under <a href="http://creativecommons.org/licenses/by/3.0/" rel="license">CC BY 3.0</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChooseSettings from './components/ChooseSettings.vue';
import Scouting from './components/Scouting.vue';
import MissionNotches from './components/MissionNotches.vue';
import Heroes from './components/Heroes.vue';
import Downtime from './components/Downtime.vue';
import Battling from './components/Battling.vue';
import Upgrades from './components/Upgrades.vue';

// eslint-disable-next-line no-unused-vars
import {Run} from "@/types/run";
// eslint-disable-next-line no-unused-vars
import {Game} from "@/types/game";
// eslint-disable-next-line no-unused-vars
import {Upgrade} from "@/types/upgrade";
import {mapGetters, mapState} from "vuex";
import Upgrading from "@/components/Upgrading.vue";

type GameSlot = {
  game: null | Game
  number: number
}

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapState({
      phase: 'phase',
      upgradeOptions: 'upgradeOptions',
      players: 'players',
      activeGameIndex: 'activeGameIndex',
      games: 'games',
     }),
    ...mapGetters({
      gameSlots: 'gameSlots',
      activeGame: 'activeGame'
    }),
  },
  data () {
    return {
      tab: 'play',
      devMode: window.location.hash.indexOf('dev') >= 0
    }
  },
  components: {
    ChooseSettings,
    MissionNotches,
    Heroes,
    Downtime,
    Battling,
    Scouting,
    Upgrading,
    Upgrades,
  },
  watch: {
    phase () {
      window.scrollTo(0, 0)
    }
  },
  methods:  {
    setTab (tab: string) {
      this.tab = tab
      Vue.nextTick(() => {
        console.log('scroll to', )
        window.scrollTo(0, 0)
      })
    },
  }
});
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Bangers);

* {
  box-sizing: border-box;
}

body {
  background: #111111;
  line-height: 1.4;
  font-size: 14px;
  background: url(https://i.imgur.com/THdKJbG.jpg?1) fixed;
  background-size: cover;
  overflow-y: scroll;
}

body:before {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: -1;
  content: " "
}

a {
  cursor: pointer;
}

p {
  margin: 0px 0 0.5em 0;
}

h1, h2, h3, h4, h5 {
  margin: 0 0 3px 0;
}

ul {
  padding: 0px;
  margin: 0px;
  list-style-position: inside;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  max-width: 600px;
  margin: 0 auto;
  background: #eee;
}

.games {
  padding-top: 2em;
}

.game h2 {
  font-size: 24px;
}

.game h3 {
  font-size: 20px;
}

p.empty-message {
  padding: 0px;
  margin: 0px;
  font-style: italic;
}

.challenge h5 {
  font-size: 15px;
}

button {
  padding: 6px 8px;
}
.generate {
  padding: 10px 0px;
}

.game {
  padding: 1em;
  border: 1px solid #666;
  margin: 0 0 2em 0;
}

.encounter-sets {
  margin-top: 1em;
}

.challenges {
  margin-top: 1em;
}

.stage-number {
  padding: 2px 6px;
  border-radius: 2px;
  background: #ccc;
  color: #333;
  display: inline-block;
  margin: 0 2px 0 0;
  font-size: 11px;
  font-family: monospace;
}

.stage-number.stage-1 {
  background: yellow;
}
.stage-number.stage-2 {
  background: orange;
}
.stage-number.stage-3 {
  background: red;
}

.challenge {
  border-left: 4px solid darkred;
  padding-left: 10px;
  margin-bottom: 1em;
}

.challenge h5 {
  font-size: 16px;
  color: #666;
}

.next-step {
  font-size: 0.9em;
  color: #999;
  padding: 5px 0 0 0;
  text-align: right;
}

.hero-level {
  color: indianred;
  font-weight: bold;
}

  table.scoreboard {
    width: 100%;
    background: #999999;
    border-spacing: 1px;
  }

  table.scoreboard td,
  table.scoreboard th {
    background: #111;
    padding: 0.5em;
  }

  .upgrade-options .upgrade:hover {
    cursor: pointer;
    background: #333333;
  }

  .upgrade.selected,
  .upgrade.selected:hover {
    color: #1a1a1a;
    background: lightblue;
  }

  .upgrade.selected strong,
  .upgrade.selected:hover strong {
    color: black;
  }

  .upgrade-player-area {
    margin-top: 15px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    text-align: left;
  }
  .upgrade-player-area:last-of-type {
    border-bottom: none;
  }
  .upgrade-player-area h3 {
    font-size: 22px;
    text-align: center;
    margin-bottom: 0.5em;
  }


button.big-button {
  padding: 1em;
  text-align: center;
  display: block;
  width: 100%;
  border: none;
  outline: none;
  margin-top: 1em;
  background: skyblue;
  border-radius: 3px;
  font-size: 16px;
  color: black;
  box-shadow: 0px 0px 5px #aaa;
  border: 1px solid deepskyblue;
}

button.big-button:hover {
  background: deepskyblue;
  cursor: pointer;
}

  .tab-nav {
    display: flex;
  }

  .tab-nav a {
    width: 50%;
    padding: 0.75em 0;
    text-align: center;
    border-bottom: 3px solid #ccc;
    background: #fff;
    font-family: 'Bangers', 'Comic Sans', cursive;
    font-size: 18px;
  }

  .tab-nav a:hover {
    cursor: pointer;
    background: #eee;
  }

  .tab-nav a.active {
    border-bottom-color: dodgerblue;
  }

  .tab {
    display: none;
    padding: 2em;
  }

  .tab.active {
    display: block;
  }

  .comic-box {
    font-family: "Comic Sans", cursive;
    position: relative;
    z-index: 1;
    padding: 5px;
    color: #000;
    margin: 10px;
    font-weight: bold;
  }

  .comic-box:before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -2px;
    left: -4px;
    z-index: -1;
    background: #fff;
    border: 2px solid black;
    transform: skew(-10deg);
  }


  .panel {
    position: relative;
  }

  .panel.has-top-title {
    padding-top: 3.5em;
  }

  .panel .comic-box.top-left {
    width: auto;
    display: inline-block;
    top: -8px;
    left: -3px;
    padding-right: 20px;
    position: absolute;
    padding-bottom: 10px;
    font-family: 'Bangers', 'Comic Sans', cursive;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.5px;
  }

  .panel .comic-box.top-left:before {
    border-top: 0px;
    border-left: 0px;
    background: transparent;
  }

  .banger {
    margin: 0px 0 15px 0;
    padding: 0 10px;
    background: #fff;
    border: 1px solid #222;
    box-shadow: 3px 3px 0 #222;
    display: inline-block;
    color: black;
    font-family: 'Bangers', 'Comic Sans', cursive;
    letter-spacing: 1px;
  }

  .banger.hero-name {
    background: #222;
    color: #fff;
  }

  .text-center {
    text-align: center;
  }

  .banger.center {
    display: inline-block;
  }

  .banger.orange {
    background-image: radial-gradient(circle, yellow, orange);
  }

  .banger.red {
    background-image: radial-gradient(circle, lightcoral, tomato);
  }

  .banger.blue {
    background-image: radial-gradient(circle, lightblue, deepskyblue);
  }

  .banger.pink {
    background-image: radial-gradient(circle, #ffa0e9, #ff07c7);
  }

  .banger.green {
    background-image: radial-gradient(circle, darkseagreen, palegreen);
  }
  .banger.yellow {
     background-image: radial-gradient(circle, yellow, gold);
   }

  .panel {
    border: 2px solid #222;
    padding: 1em;
    background: #fff;
    box-shadow: 3px 3px 0 #222;
    margin-bottom: 1em;
  }

  .panel.choice:hover {
    cursor: pointer;
    background-image: radial-gradient(circle, #eee, #ccc);
  }

  .panel.choice.active {
    background-image: radial-gradient(circle, lightblue, deepskyblue);
  }

  .game-result-buttons {
    display: flex;
  }

  input {
    width: 3.5em;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.5em;
}

.game-result-buttons button {
  width: 50%;
  box-shadow: 0px 0px 5px #333;
  border-radius: 3px;
  margin: 5px;
  border: none;
  font-size: 18px;
  padding: 1em;
  cursor: pointer;
}

.game-result-buttons button.won {
  background-image: radial-gradient(circle, lightgreen, mediumspringgreen);
}

.game-result-buttons button.lost {
  background-image: radial-gradient(circle, lightcoral, tomato);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-active {
  display: none;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

  #footer {
    padding: 2em;
    text-align: center;
    color: white;
    font-family: sans-serif;
  }

  #footer a {
    color: white;
  }

  .mission-notches {
    display: flex;
    border-bottom: 5px solid black;
    padding: 2px 5px;
  }

  .mission-notches .notch {
    flex-grow: 1;
    height: 12px;
    background: #EEE;
    text-align: center;
    margin: 2px;
    background-image: radial-gradient(circle, #EEE, #CCC);
    border-radius: 3px;
    box-shadow: 0px 0px 1px #333;
  }

  .notch.active {
    background-image: radial-gradient(circle, lightblue, deepskyblue);
  }

  .notch.active.battling {
    background-image: radial-gradient(circle, yellow, orange);
  }

  .notch.won, .notch.battling.active.won {
    background: #E0FFE0;
  }

.upgrade-msg {
  padding: 1em;
  margin: 1em 0.5em 0.5em;
  border: 1px solid #A0FFA0;
  display: inline-block;
  background: #E0FFE0;
}
</style>
