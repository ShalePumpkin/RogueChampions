<template>
	<div class="game panel">
		<span style="float: right; font-size: 12px; color: #ccc">{{game.difficulty}}</span>
		<h2>
			{{game.villain.name}}
		</h2>
		<div class="hero-level" v-if="game.heroLevel">Hero Level {{game.heroLevel}}</div>
		<div class="encounter-sets">
			<h3>Encounter Sets</h3>
			<ul>
				<li v-for="set in game.encounterSets" :key="set.name">
					{{set.name}}
				</li>
			</ul>
		</div>
		<div class="challenges" v-if="game.challenges.length">
			<h3>Challenges</h3>
			<p class="empty-message" v-if="game.challenges.length == 0">No additional challenges.</p>
			<div v-else>
				<div v-for="(cha, idx) in game.challenges" :key="idx" class="challenge">
					<h5>{{cha.name}}</h5>
					<p v-html="cha.description"></p>
				</div>
			</div>
		</div>
		<div class="upgrade-categories">
			<h3 title="Your rewards will come from these categories">Reward Categories</h3>
			<div>
				<span class="upgrade-category" :class="cat" v-for="cat in game.rewardTypes" :key="cat">{{cat}}</span>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue"
	export default Vue.extend({
		name: 'Game',
		props: ['game']
	})
</script>
<style>
	.game h2, .game h3 {
		font-family: 'Bangers';
		letter-spacing: 1px;
	}

	.upgrade-categories {
		margin-top: 1em;
	}

	.General.upgrade-category {
		background: #333;
	}

	.Heroic.upgrade-category {
		background: purple;
	}

	.Aggression.upgrade-category {
		background: maroon;
	}

	.Justice.upgrade-category {
		background: darkgoldenrod;
	}

	.Protection.upgrade-category {
		background: darkgreen;
	}
	.Leadership.upgrade-category {
		background: dodgerblue;
	}
	.upgrade-category {
		display: inline-block;
		background: black;
		padding: 3px 6px;
		color: #fff;
		margin-right: 2px;
		border: 1px solid #222;
	}
</style>
