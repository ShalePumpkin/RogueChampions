<template>
	<div class="heroes-list">
		<div v-for="player in players" :key="player.name" class="hero">
      <div style="display: flex">
        <h2 class="banger hero-name" :class="player.hero.cssClass">{{player.hero.name}}</h2>
        <div class="starting-hp">{{player.currentHP}} of {{player.startingHP}} HP</div>
      </div>
			<p v-if="!player.upgrades.length">{{player.hero.name}} has no upgrades yet</p>
			<div v-for="upgrade in player.upgrades" :key="upgrade.name">
				<Upgrade :upgrade="upgrade"  :active="false" :choice="false" />
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from "vue"
	import {mapState} from "vuex"
	import Upgrade from "./Upgrade.vue"

	export default Vue.extend({
		name: 'Heroes',
		components: {
			Upgrade,
		},
		computed: {
			...mapState(['players'])
		}
	})
</script>
<style scoped>
	.heroes-list .hero {
		margin-bottom: 2em;
	}

	.heroes-list .hero:last-of-type {
		margin-bottom: 0px;
	}

  .starting-hp {
    font-weight: bold;
    padding-top: 0.4em;
    margin-left: 12px;
    color: darkslategray;
  }
</style>
