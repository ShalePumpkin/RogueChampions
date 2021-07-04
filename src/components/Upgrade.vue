<template>
	<div class="panel upgrade" :class="{active: active, choice: choice, [upgrade.category]: true}" @click="click">
		<h5 class="upgrade-category">{{upgrade.category}}</h5>
		<h4>{{upgrade.name}}
			<span class="lvl">
				Lvl {{upgrade.level}}
				<span v-if="upgrade.maxLevel" class="max-level">
					of {{upgrade.maxLevel}}
				</span>
			</span>
		</h4>
		<div v-html="upgrade.description()"></div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue"
	export default Vue.extend({
		props: ['upgrade', 'active', 'choice'],
		methods: {
			click () {
				this.$emit('clicked')
			}
		}
	})
</script>
<style scoped>
	h4 {
		font-size: 1.2em;
	}
	.lvl {
		font-size: 0.8em;
		color: forestgreen;
	}
	.max-level {
		color: #999;
	}

	.upgrade.General {
		border-color: #333;
	}

	.upgrade.General .upgrade-category {
		background: #333;
	}

	.upgrade.Heroic .upgrade-category {
		background: purple;
	}

	.upgrade.Aggression .upgrade-category {
		background: maroon;
	}

	.upgrade.Leadership .upgrade-category {
		background: dodgerblue;
	}

	.upgrade.Justice .upgrade-category {
		background: darkgoldenrod;
	}

	.upgrade.Protection .upgrade-category {
		background: darkgreen;
	}

  .upgrade h4 {
    padding-right: 80px;
  }

  .upgrade .lvl {
    white-space: nowrap;
  }

	.upgrade-category {
		position: absolute;
		top: -2px;
		right: -4px;
		display: inline-block;
		border: 2px solid #222;
		background: black;
		padding: 3px 6px;
		color: #fff;
	}
</style>
