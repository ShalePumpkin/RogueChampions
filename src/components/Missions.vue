<template>
<div>
	<h2 class="banger orange">Missions</h2>
	<div v-for="(slot, idx) in gameSlots" :key="idx" class="mission panel has-top-title">
		<h4 class="comic-box top-left">Mission {{idx+1}}</h4>
		<div v-if="slot.game">
			<Game :game="slot.game" />
		</div>
		<div v-else class="tbd">
			<div v-if="activeGameIndex === idx">
				Choosing mission.
			</div>
			<div v-else>
				Gathering intelligence...
			</div>
		</div>
	</div>
</div>
</template>
<script>
import Vue from "vue"
import {mapGetters, mapState} from "vuex"
import Game from "./Game.vue"

export default Vue.extend({
	name: 'Missions',
	components: {
		Game,
	},
	computed: {
		...mapGetters(['gameSlots']),
		...mapState(['activeGameIndex'])
	}
})
</script>
<style>
.mission {
	padding-top: 0px;
}
	
	.mission .tbd {
		margin-top: -1em;
	}
</style>
