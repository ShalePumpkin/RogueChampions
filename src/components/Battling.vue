<template>
	<div class="battling">
		<h2 class="banger orange">Battle! - Mission {{activeGameIndex+1}} of {{numGames}}</h2>
    <div  v-if="!enteringHP">
      <p>Follow all the Setup instructions from the mission and your upgrades, then play!
      <br />When you are done, enter your result below.</p>
      <div v-if="activeGame">
        <Game :game="activeGame" />
      </div>
      <div v-else>
        No active game found through getter. This is a major bug.
      </div>
      <HeroesList />
      <div class="game-result-buttons">
        <button @click="weWon" class="won">Victory</button>
        <button @click="weLost" class="lost">Defeat</button>
      </div>
    </div>
    <div v-else class="player-hp">
      <div>
        <a @click="enteringHP = false" style="float: right">cancel</a>
        <h2 class="banger green">Final Health Points</h2>
      </div>
      <div class="player-hp-entry" v-for="(player, idx) in players" :key="player.hero.name">
        <h2 class="banger hero-name" :class="player.hero.cssClass">{{player.hero.name}}</h2>
        <div>
          <input type="number" class="hp-input" v-model="hps[idx]" />
        </div>
      </div>
      <div>
        <button @click="enterHP" class="big-button">Submit Health Points</button>
        <div class="next-step">Next: Downtime</div>
      </div>
    </div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue"
	import {mapGetters, mapState} from "vuex"
	import Game from "@/components/Game.vue";
	import HeroesList from "@/components/HeroesList.vue";

  // eslint-disable-next-line no-unused-vars
  import {Player} from "@/types/player";
	export default Vue.extend({
		name: 'Upgrading',
		components: {
			Game: Game,
			HeroesList: HeroesList
		},
		computed: {
			...mapState(['activeGameIndex', 'numGames', 'players']),
			...mapGetters(['activeGame'])
		},
    data () {
      return {
        enteringHP: false,
        hps: []
      }
    },
		methods: {
			weWon () {
        this.hps = this.players.map((player : Player) => {
          return player.currentHP
        })
        this.enteringHP = true
			},
      enterHP () {
        const hps = this.hps.map((hp : any) => {
          return parseInt(hp)
        })
        for (let i = 0; i < hps.length; i++) {
          const hp = hps[i]
          if (isNaN(hp) || hp < 0) {
            alert('HP values must be 0 or higher')
            return
          }
        }
        this.$store.dispatch('gameWon', hps)
      },
			weLost () {
        if (!confirm('Confirm defeat?')) {
          return
        }
				this.$store.dispatch('gameLost')
			}
		}
	})
</script>
<style scoped>
	.heroes-list {
		margin-top: 2em;
	}
  .game-result-buttons {
    padding-top: 2em;
    margin-top:2em;
    border-top: 1px solid #ccc;
  }

  .player-hp-entry {
    margin-bottom: 2em;
  }
  .player-hp-entry h2.banger {
    margin-bottom: 10px;
  }

  button.submit {
    font-size: 18px;
  }
	</style>
