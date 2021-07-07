import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {StarLord as Exp} from "@/consts/expansions";
import {StarLord} from "@/consts/heroes";

// export const NovaPrime = generateAllyCard({
// 	name: 'Nova Corps',
// 	card: 'Nova Prime',
// 	levels: [{
// 		damage: 2,
// 		exhausted: true,
// 	}, {
// 		damage: 1,
// 		exhausted: true
// 	}, {
// 		damage: 0,
// 		exhausted: false,
// 	}],
// 	requires: Exp.name,
// 	requiresHero: StarLord.name,
// 	pronoun: 'his',
// 	category: 'Heroic',
// })

export const BadBoy = generateUpgradeCard({
	name: 'Quick Evade',
	card: 'Bad Boy',
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: 'Heroic',
	article: '',
})

export const Element = generateExhaustedCardInPlay({
	name: "Equip: Element Gun",
	card: "Element Gun",
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: "Heroic",
	article: 'an',
	pronoun: 'it',
})

export const Boots = generateExhaustedCardInPlay({
	name: "Equip: Jet Boots",
	card: "Jet Boots",
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const Leader = generateUpgradeCard({
	name: "Leader of the Gaurdians",
	card: "Leader of the Gaurdians",
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: "Heroic",
	article: '',
})

export const StarLordsHelmet = generateUpgradeCard({
	name: "Equip: Star-Lord's Helmet",
	card: "Star-Lord's Helmet",
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: "Heroic",
	article: '',
})

export const Upgrades = [
	// NovaPrime,
	BadBoy,
	Element,
	Boots,
	Leader,
	StarLordsHelmet
]
