import Vue from 'vue'
import Vuex, {Action} from 'vuex'
import {Run, RunPhase} from "@/types/run";
import {CoreSet, ExpansionsList, ExpansionsMap} from "@/consts/expansions";
import {Hero} from "@/types/hero";
import {HeroesList, HeroesMap} from "@/consts/heroes";
import {generateUpgradeOptions} from "@/lib/upgrades";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";
import {Player} from "@/types/player";
import {UpgradeCategoriesList, UpgradesMap} from "@/consts/upgrades";
import {Game} from "@/types/game";
import {generateGameOption} from "@/lib/game";
import {GameOption} from "@/types/gameoption";
import {DowntimeAction} from "@/types/downtime";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_SMALL} from "@/consts/difficulty";
import {getHealAmount} from "@/lib/players";

Vue.use(Vuex)

type State = Run

export type Store = {
  state: State,
  mutations: any
  actions: any
  getters: any
}

type ActionState = {
  state: State,
  commit: any,
  dispatch: any,
  getters: any
}

type UpgradeSelectionPayload = {
  playerIndex: number,
    upgradeName: string
}

export const options : Store = {
  state: {
    started: new Date(),
    games: [],
    players: [],
    expansions: [],
    numGames: 4,
    activeGameIndex: 0,
    phase: "settings",
    upgradeOptions: {},
    upgradeSelections: {},
    gameOptions: [],
  },
  mutations: {
    addExpansion (state: State, name: string) {
      state.expansions.push(ExpansionsMap[name])
    },
    removeExpansion (state: State, name: string) {
      const newList = state.expansions.filter(x => x.name != name)
      Vue.set(state, 'expansions', newList)
    },
    playerUpgradeOptions (state: State, {index, options} : {index: number, options: Upgrade[]}) {
      Vue.set(state.upgradeOptions, index, options)
    },
    upgradeSelection (state: State, {playerIndex, upgradeName}: UpgradeSelectionPayload) {
      Vue.set(state.upgradeSelections, playerIndex, upgradeName)
    },
    clearUpgradeSelections (state: State) {
      state.upgradeSelections = {}
    },
    phase (state: State, phase: RunPhase) {
      state.phase = phase
    },
    numGames (state: State, numGames: number) {
      state.numGames = numGames
    },
    players (state: State, players: Player[]) {
      Vue.set(state, 'players', players)
    },
    hps (state: State, hps: number[]) {
      for (let i = 0; i < hps.length; i++) {
        Vue.set(state.players[i], 'currentHP', Math.min(state.players[i].startingHP, hps[i]))
      }
    },
    heal (state: State, playerIndex: number) {
      const player = state.players[playerIndex]
      const healAmount = getHealAmount(player)
      let newHp = Math.min(player.startingHP, player.currentHP + healAmount)
      Vue.set(state.players[playerIndex], 'currentHP', newHp)
    },
    gameOptions (state: State, options: GameOption[]) {
      Vue.set(state, 'gameOptions', options)
    },
    addPlayerUpgrade (state: State, {playerIndex, upgradeName} : UpgradeSelectionPayload) {
      const upgrades = state.players[playerIndex].upgrades || []
      // Clone it so that the levels don't get messed up
      upgrades.push(Object.assign({}, UpgradesMap[upgradeName]))
      Vue.set(state.players[playerIndex], 'upgrades', upgrades)
    },
    levelUpUpgrade (state: State, {playerIndex, upgradeName} : UpgradeSelectionPayload) {
      let upgrades = state.players[playerIndex].upgrades
      upgrades = upgrades.map((upgrade: Upgrade) => {
        if (upgrade.name == upgradeName) {
          upgrade.level++
        }
        return upgrade
      })
      Vue.set(state.players[playerIndex], 'upgrades', upgrades)
    }
  },
  actions: {
    async createPlayers ({commit}: ActionState, heroNames: string[]) {
      const filtered = heroNames.filter(x => !!x)

      if (filtered.length == 0) {
        throw new Error('Must select at least one player')
      }
      const players = filtered.map((name: string, idx: number) : Player => {
        const hero = HeroesMap[name]
        if (!hero) {
          throw new Error('Could not find hero with name "' + name + '"')
        }
        return {
          name: 'Player ' + (idx+1),
          hero: hero,
          upgrades: [],
          startingHP: hero.startingHP,
          currentHP: hero.startingHP,
        }
      })
      commit('players', players)
    },
    toggleUpgradeSelection ({state, commit} : ActionState, {playerIndex, upgradeName} : UpgradeSelectionPayload) {
      if (state.upgradeSelections[playerIndex] === upgradeName) {
        commit('upgradeSelection', {
          playerIndex,
          upgradeName: ''
        })
      } else {
        commit('upgradeSelection', {
          playerIndex,
          upgradeName: upgradeName
        })
      }
    },
    toggleExpansion ({state, commit} : ActionState, name: string) {
      const found = state.expansions.find(x => x.name == name)
      if (!found) {
        commit('addExpansion', name)
      } else {
        commit('removeExpansion', name)
      }
    },
    enableAllExpansions ({state, commit} : ActionState) {
      ExpansionsList.forEach(x => {
        commit('addExpansion', x.name)
      })
    },
    startRun ({state, commit, dispatch} : ActionState, {numGames} : {numGames: number}) {
      commit('numGames', numGames)
      dispatch('generateUpgradeOptions')
      commit('phase', 'upgrading')
    },
    confirmUpgrades ({state, commit, dispatch}: ActionState) {
      for (let i = 0; i < state.players.length; i++) {
        const upgradeName = state.upgradeSelections[i]
        if (upgradeName) {
          commit('addPlayerUpgrade', {
            playerIndex: i,
            upgradeName
          })
        }
      }
      commit('phase', 'scouting')
      dispatch('generateGameOptions')
    },
		// Creates the options that you can choose from for your next mission
		// The options will have the villain you fight, any special challenges they
		// have, as well as the upgrade categories you'll choose from
    generateGameOptions ({state, commit, dispatch}: ActionState) {
      const targetDifficulty = DF_BASE + ((state.games.length + 1) * DF_STEP_LARGE)
      const options : GameOption[] = []
      const ids : string[] = []
			const upgrades : UpgradeCategory[] = []
      for (let i = 1; i <= 2; i++) {
        let attempts = 0
        let option : GameOption
        do {
          option = generateGameOption(targetDifficulty - DF_STEP_LARGE, targetDifficulty + DF_STEP_LARGE, upgrades, state.expansions)
					option.game.rewardTypes.forEach((rt) => {
						upgrades.push(rt)
					})
          attempts++
        } while(attempts < 500 && ids.indexOf(option.game.id) >= 0)

        options.push(option)
        ids.push(option.game.id)
      }

      commit('gameOptions', options)
    },
    chooseMission ({state, commit}: ActionState, optionIndex: number) {
      const game = state.gameOptions[optionIndex].game
      if (!game) {
        throw new Error('Did not find a game at optionIndex ' + optionIndex)
      }
      Vue.set(state.games, state.activeGameIndex, game)
      commit('phase', 'battling')
    },
    gameWon ({state, commit}: ActionState, hps : number[]) {
      commit('hps', hps)
      if (state.activeGameIndex === state.numGames -1 ) {
        commit('phase', 'victory')
        return
      }
      state.activeGameIndex++
      commit('phase', 'downtime')
    },
    gameLost ({commit}: ActionState) {
      commit('phase', 'defeat')
    },
    generateUpgradeOptions ({state, commit, getters}: ActionState) {
      let upgradeCats : UpgradeCategory[] = []
      upgradeCats = upgradeCats.concat(UpgradeCategoriesList)

      const prevGame = getters.prevGame
      if (prevGame) {
        upgradeCats = prevGame.rewardTypes
      }

      // TESTING
      //upgradeCats = ['Heroic']

      for (let i = 0; i < state.players.length; i++) {
        const player = state.players[i]
        const playerOptions = generateUpgradeOptions(player, state.expansions, upgradeCats, state.players)
        commit('playerUpgradeOptions', {
          index: i,
          options: playerOptions
        })
      }
      commit('clearUpgradeSelections')
    },
    doDowntime({state, commit, dispatch}: ActionState, downtimeActions: Record<number, DowntimeAction>) {
      for (var i = 0; i < state.players.length; i++) {
        const action = downtimeActions[i]
        if (!action) {
          continue
        }
        if (action.type === 'heal') {
          commit('heal', i)
        } else {
          commit('levelUpUpgrade', {
            playerIndex: i,
            upgradeName: action.upgradeName
          })
        }
      }
      commit('phase', 'upgrading')
      dispatch('generateUpgradeOptions')
    }
  },
  getters: {
    heroes (state: State): Hero[] {
      return HeroesList.filter((hero) => {
        for (let i = 0; i < state.expansions.length; i++) {
          const expName = state.expansions[i].name
          if (expName == hero.requires) {
            return true
          }
        }
        return false
      })
    },
    expansionNames (state: State) : string[] {
      return state.expansions.map(x => x.name)
    },
    activeGame (state: State) : null | Game {
      if (state.games[state.activeGameIndex]) {
        return state.games[state.activeGameIndex]
      }
      return null
    },
    prevGame (state: State) : null | Game {
      if (state.games[state.activeGameIndex-1]) {
        return state.games[state.activeGameIndex-1]
      }
      return null
    },
    gameSlots (state: State) {
      const slots = []
      for (let i = 1; i <= state.numGames; i++) {
        slots.push({
          game: state.games[i] ? state.games[i] : null
        })
      }
      return slots
    },
    upgradeSelected (state: State) {
      return (playerIndex: number, upgradeName: string) => {
        return state.upgradeSelections && state.upgradeSelections[playerIndex] && state.upgradeSelections[playerIndex] === upgradeName;
      }
    }
  }
}

export default new Vuex.Store(options)
