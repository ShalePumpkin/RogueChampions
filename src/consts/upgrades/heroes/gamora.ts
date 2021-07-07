import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Gamora as Exp} from "@/consts/expansions";
import {Gamora} from "@/consts/heroes";

// export const NebulaUpgrade = generateAllyCard({
// 	name: 'Sisters in Arms',
// 	card: 'Nebula',
// 	levels: [{
// 		damage: 1,
// 		exhausted: true
// 	}, {
// 		damage: 1,
// 		exhausted: false,
// 	}, {
// 		damage: 0,
// 		exhausted: false,
// 	}],
// 	requires: Exp.name,
// 	requiresHero: Gamora.name,
// 	pronoun: 'her',
// 	category: 'Heroic',
// })

export const Conditioning = generateExhaustedCardInPlay({
	name: "Training",
	card: "Conditioning Room",
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const Instincts = generateExhaustedCardInPlay({
	name: "Intuition",
	card: "Keen Instincts",
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const GamorasSword = generateUpgradeCard({
	name: "Godslayer",
	card: "Gamora's Sword",
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: "Heroic",
	article: '',
})

export const Upgrades = [
	// NebulaUpgrade,
	Conditioning,
	Instincts,
	GamorasSword,
]
