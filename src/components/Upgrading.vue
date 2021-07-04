<template>
	<div class="upgrading">
		<h2 class="banger orange">Choose New Upgrades</h2>
		<p>Then you'll choose your {{missionTh}} mission.</p>
		<div v-for="(player, idx) in players" :key="player.name" class="upgrade-player-area">
			<div class="">
				<h3 class="banger center hero-name" :class="player.hero.cssClass">{{player.hero.name}}</h3>
			</div>
			<div class="upgrade-options">
				<!-- TODO: Upgrade component -->
				<Upgrade
					v-for="upgrade in upgradeOptions[idx]"
					:upgrade="upgrade"
					:key="upgrade.name"
					:choice="true"
					:active="upgradeSelected(idx, upgrade.name)"
					v-on:clicked="() => toggleUpgradeSelection(idx, upgrade.name)">
				</Upgrade>
			</div>
		</div>
		<button class="big-button" @click="confirmUpgrades">Confirm Upgrades</button>
    <div class="next-step">Next: Choose Mission</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue"
	import {mapState, mapGetters} from "vuex"
	import Upgrade from "@/components/Upgrade.vue";
	// eslint-disable-next-line no-unused-vars
	import {Player} from "@/types/player";
	export default Vue.extend({
		name: 'Upgrading',
		components: {
			Upgrade
		},
		computed: {
			...mapState(['players', 'upgradeOptions', 'activeGameIndex', 'numGames']),
			...mapGetters(['upgradeSelected']),
			...{
				missionTh () {
					if (this.activeGameIndex == 0) {
						return 'first'
					}
					if (this.activeGameIndex == 1) {
						return 'second'
					}

					// TODO: Calculate based on numGames
					if (this.activeGameIndex == 3) {
						return 'last'
					}
					return 'next'
				}

			}
		},
		methods: {
			toggleUpgradeSelection (playerIndex: number, upgradeName: string) {
				this.$store.dispatch('toggleUpgradeSelection', {
					playerIndex,
					upgradeName
				})
			},
			confirmUpgrades () {
				const missing : string[] = []
				this.players.forEach((player: Player, idx: number) => {
					if (!this.$store.state.upgradeSelections[idx]) {
						missing.push(player.hero.name)
					}
				})
				if (missing.length > 0) {
					let msg = ''
					if (missing.length == 1) {
						msg = missing[0] + ' is missing an upgrade.'
					} else {
						let popped = missing.pop()
						msg = missing.join(', ')
						msg += ' and ' + popped + ' are missing upgrades.'
					}
					msg += ' Continue?'
					if (!confirm(msg)) {
						return
					}
				}
				try {
					this.$store.dispatch('confirmUpgrades')
				} catch (ex) {
					alert(ex)
					throw ex
				}
			},
		}
	})
</script>
