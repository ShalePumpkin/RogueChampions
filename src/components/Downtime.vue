<template>
	<div class="resting">
		<h2 class="banger green">Mission Success!</h2>
		<p>After a successful mission you've earned some <strong>downtime</strong>. Use it well.</p>
    <p>Each hero must choose to either <strong>heal some damage</strong> <em>or</em> <strong>level up an upgrade</strong></p>
		<div v-for="(player, idx) in players" :key="player.name" class="upgrade-player-area">
			<div class="">
				<h3 class="banger center hero-name" :class="player.hero.cssClass">{{player.hero.name}}</h3>
			</div>
			<div class="downtime-options">
				<div class="downtime-option panel has-top-title choice"
					@click="() => {
						toggleSelection(idx, 'heal')
					}"
					:class="{
						'active': selections[idx] && selections[idx].type === 'heal',
						disabled: player.healAmount == 0
					}">
					<h4 class="comic-box top-left">Medical Aid</h4>
					<div>
            <span v-if="player.currentHP == player.startingHP">
              You're all patched up! Your starting HP is {{player.startingHP}}.
            </span>
            <span v-else>
              Heal for {{getHealAmount(player)}}. Your current HP is {{player.currentHP}} of {{player.startingHP}}.
              <span v-if="player.startingHP == 0">You're too hurt to do anything else.</span>
            </span>

          </div>
				</div>
				<div v-for="upgrade in player.upgrades"
						class="downtime-option panel has-top-title choice"

						@click="() => {
							toggleSelection(idx, 'upgrade', upgrade.name)
						}"
						:class="{
							'active': selections[idx] && selections[idx].type === 'upgrade' && selections[idx].upgradeName === upgrade.name,
							disabled: upgrade.level === upgrade.maxLevel || player.startingHP == 0
						}"
						:key="upgrade.name"
						>
					<h4 class="comic-box top-left">
						<span v-if="upgrade.level === upgrade.maxLevel">
							{{upgrade.name}} is Max Level
						</span>
						<span v-else>
							Level Up {{upgrade.name}}
							<span class="level-up-levels">(Lvl {{upgrade.level}} to <strong>Lvl {{upgrade.level+1	}}</strong>)</span>
						</span>
					</h4>
					<div class="description" v-html="upgrade.description()"></div>
					<div v-if="upgrade.level != upgrade.maxLevel" class="upgrade-msg" v-html="upgrade.levelUpMessage()"></div>
				</div>
			</div>
		</div>
		<button class="big-button" @click="confirmDowntime">Confirm Downtime Actions</button>
    <div class="next-step">Next: Choose Upgrades</div>
	</div>
</template>
<script lang="ts">
import Vue from "vue"
import {mapState} from "vuex"
// eslint-disable-next-line no-unused-vars
import {DowntimeAction, DowntimeActionType} from "@/types/downtime";
// eslint-disable-next-line no-unused-vars
import {Upgrade} from "@/types/upgrade";
import {getHealAmount} from "@/lib/players";

type DowntimeData = {
	selections: Record<number, DowntimeAction>
}
	export default Vue.extend({
		name: 'Downtime',
		computed: {
			...mapState(['players'])
		},
		data () : DowntimeData {
			return {
				selections: {}
			}
		},
		methods: {
      getHealAmount: getHealAmount,
			confirmDowntime () {
				this.$store.dispatch('doDowntime', this.selections)
			},
			toggleSelection (playerIndex: number, actionType : DowntimeActionType, upgradeName = "") {
				const action : DowntimeAction = {
					type: actionType
				}

				const upgrade = this.players[playerIndex].upgrades.find((u : Upgrade) => u.name === upgradeName)
				if (upgrade && upgrade.level >= upgrade.maxLevel) {
					return
				}

				if (actionType == 'upgrade') {
					action.upgradeName = upgradeName
				}
				Vue.set(this.selections, playerIndex, action)
			}
		}
	})
</script>
<style scoped>
	.downtime-option {
		position: relative;
	}
	.downtime-option .top-left {
		position: absolute;
	}

	.downtime-option.disabled,
	.downtime-option.disabled:hover {
		opacity: 0.5;
		background: #fff;
		cursor: no-drop;
	}

	.level-up-levels {
		font-style: italic;
	}

	.level-up-levels strong {
		color: forestgreen;
	}

	p {
		margin-bottom: 0.5em;
	}

	.big-button {
		margin-top: 1em;
	}
</style>
