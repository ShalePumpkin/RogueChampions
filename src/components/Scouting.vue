<template>
<div class="scouting">
	<h2 class="banger red">Choose Mission {{activeGameIndex+1}} of {{numGames}}</h2>
  <p>Different missions give different rewards.</p>
	<div v-for="(option, idx) in gameOptions" :key="idx" class="game-option">
		<Game :game="option.game" />
<!--
		<div class="reward">Rewards Category: {{option.rewardType}}</div>
-->
		<button class="big-button" @click="() => chooseMission(idx)">Choose Option {{idx+1}}</button>
    <div class="next-step">Next: Battle!</div>
	</div>
</div>
</template>
<script lang="ts">
	import Vue from "vue"
	import {mapState} from "vuex";
	import Game from "@/components/Game.vue";
export default Vue.extend({
	name: 'Scouting',
	components: {
		Game: Game
	},
	computed: {
		...mapState(['gameOptions', 'phase', 'activeGameIndex', 'numGames'])
	},
	methods: {
		chooseMission (optionIndex: number) {
			this.$store.dispatch('chooseMission', optionIndex)
		}
	}
})
</script>
<style>
	.reward {
		margin: 10px 0;
		padding: 10px;
		font-weight: bold;
		border: 2px solid lightgoldenrodyellow;
	}
	.game-option {
		margin-bottom: 3em;
	}
	.scouting .game.panel {
		margin-bottom: 0px;
	}

	.scouting .big-button {
		margin-top: 1em;
	}
</style>
