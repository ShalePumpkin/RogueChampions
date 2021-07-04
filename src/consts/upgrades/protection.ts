import {CoreSet} from "@/consts/expansions";
import {generateCounterCardInPlay, generateAllyCard, generateUpgradeCard} from "@/lib/upgrades";

export const MedTeam = generateCounterCardInPlay({
	name: 'Family Doctor',
	category: "Protection",
	card: 'Med Team',
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const ArmoredVest = generateUpgradeCard({
	name: 'Upgraded Defenses',
	requires: CoreSet.name,
	category: "Protection",
	card: 'Armored Vest',
	article: 'an',
	attached: true,
})

export const BlackWidowAlly = generateAllyCard({
	name: `Spyder Web`,
	card: 'Black Widow',
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: true
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: CoreSet.name,
	pronoun: 'her',
	category: "Protection",
})

export const Upgrades = [ArmoredVest, BlackWidowAlly, MedTeam]
