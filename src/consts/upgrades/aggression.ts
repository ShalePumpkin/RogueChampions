import {CoreSet, ExpansionsMap, RiseOfRedSkull} from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

export const ValhallasBlessing = generateCounterCardInPlay({
	name: 'Valhalla\'s Blessing',
	card: 'Hall of Heroes',
	requires: ExpansionsMap.Thor.name,
	category: 'Aggression',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const CombatTraining = generateUpgradeCard({
	name: 'Combat Master',
	requires: CoreSet.name,
	card: 'Combat Training',
	category: "Aggression",
	article: 'a',
	attached: true
})

export const TacTeam = generateCounterCardInPlay({
	name: 'Merc Cadre',
	card: 'Tac Team',
	category: "Aggression",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const SpiderGirl = generateAllyCard({
	name: 'Spider Friend',
	card: 'Spider-Girl',
	pronoun: 'she',
	requires: RiseOfRedSkull.name,
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const Upgrades = [
	ValhallasBlessing,
	CombatTraining,
	TacTeam,
	SpiderGirl,
]
