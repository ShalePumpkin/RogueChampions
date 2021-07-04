<template>
  <div class="introduction">
    <h1>Rogue Champions</h1>
    <p>Rogue-like campaign play for Marvel Champions Living Card Game.</p>
    <p>Fight multiple battles on your way to the big bad boss.</p>

		<p><strong>Keep your health</strong> between fights. Earn and <strong>level up new upgrades</strong> between each fight.</p>

    <div class="expansions">
      <h2 class="banger red">Choose Your Expansions</h2>
      <div v-for="exp in allExpansions" :key="exp.name" @click="() => { _toggleExpansion(exp.name) }" class="panel expansion choice" :class="{active: expansionNames.indexOf(exp.name) >= 0}">
        {{exp.name}}
      </div>
    </div>

    <h2 class="banger green">Choose Your Heroes</h2>
    <div class="players">
      <div v-for="(playerHero, idx) in playerSelections" :key="idx" class="player">
        <h4>Player {{idx+1}}</h4>
        <div v-for="hero in heroes" class="panel choice" :class="{active: playerHero == hero.name, [hero.cssClass]: true}" :key="hero.name" @click="() => selectHero(idx, hero)">{{hero.name}}</div>
      </div>
    </div>

    <h2 class="banger green">Number of Games</h2>
    <div class="players">
      <input type="number" v-model="numGames" />
    </div>

    <button class="big-button" @click="startRun">
      Start Run
    </button>
    <div class="next-step">Next: Choose Upgrades</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import {CoreSet, ExpansionsList} from "@/consts/expansions";
// eslint-disable-next-line no-unused-vars
import {Hero} from "@/types/hero";

// eslint-disable-next-line no-unused-vars
import {Expansion} from "@/types/expansion";
import {mapActions, mapGetters, mapState} from "vuex";

type SettingsData = {
  allExpansions: Expansion[],
  playerSelections: string[],
  numGames: number
}

export default Vue.extend({
  name: 'ChooseSettings',
  data () : SettingsData {
    return {
      allExpansions: ExpansionsList,
      numGames: 4,
      playerSelections: ['', '', '', ''],
    }
  },
  async created () {
    const expansions = window.localStorage.getItem('expansions')
    if (expansions) {
      const names = expansions.split(',')
      names.forEach((name) => {
        this._toggleExpansion(name)
      })
    } else {
      this._toggleExpansion(CoreSet.name)
    }

    this.numGames = 5
    const numStoredStr = window.localStorage.getItem('numGames')

    if (numStoredStr) {
      const numStored = parseInt(numStoredStr)

      if (numStored && !isNaN(numStored)) {
        this.numGames = numStored
      }
    }

    // TESTING
    let hash = window.location.hash
    hash = hash.replaceAll('#', '')
    hash = hash.replaceAll('/', '')
    if (hash && hash.length) {
      await this.$store.dispatch('enableAllExpansions')
      this.playerSelections = hash.split(',').map(decodeURIComponent)
      this.startRun()
    }
  },
  computed: {
    ...mapState({
      expansions: 'expansions',
      players: 'players'
    }),
    ...mapGetters({
      heroes: 'heroes',
      expansionNames: 'expansionNames'
    }),
    ...mapActions({
      toggleExpansion: 'toggleExpansion'
    })
  },
  methods: {
    _toggleExpansion (name: string) {
      this.$store.dispatch('toggleExpansion', name)
    },
    async startRun () {
      try {
        window.localStorage.setItem('expansions', this.expansionNames.join(','))
        window.localStorage.setItem('numGames', this.numGames.toString())
      } catch (ex) {
        console.log(ex)
      }

      if (!this.expansions.length) {
        alert('Expansions needed')
        return
      }
      if (this.players[0] == '') {
        alert('First player needed')
        return
      }

      await this.$store.dispatch('createPlayers', this.playerSelections)
      await this.$store.dispatch('startRun', {
        numGames: this.numGames
      })
    },
    selectHero (playerIdx: number, hero: Hero) {
      if (this.playerSelections[playerIdx] == hero.name) {
        Vue.set(this.playerSelections, playerIdx, '')
      } else {
        for (var i = 0; i < this.playerSelections.length; i++) {
          if (this.playerSelections[i] == hero.name) {
            return
          }
        }
        Vue.set(this.playerSelections, playerIdx, hero.name)
      }
    },
  }
});
</script>
<style>
  .introduction {
    padding: 1em;
  }

  h1 {
    font-family: 'Bangers', 'Comic Sans', cursive;
    font-size: 38px;
  }

  .expansions {
    margin: 1em 0 2em;
  }
  .panel.expansion {
    margin-bottom: 5px;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
  }

  .players {
    display: flex
  }

  .player {
    width: 25%;
    padding-right: 5px;
    margin-bottom: 2em;
  }

  .player .panel.choice {
    padding: 0.4rem 0;
    text-align: center;
  }

  .player h4 {
    text-align: center;
    font-family: 'Bangers', 'Comic Sans', cursive;
    margin-left: -3px;
    font-size: 18px;
  }

  .player .panel,
  .expansion.panel {
    box-shadow: 2px 2px 0px #222;
    margin-bottom: 5px;
  }

</style>
