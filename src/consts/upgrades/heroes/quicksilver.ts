import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Quicksilver as Exp} from "@/consts/expansions";
import {ScarletWitch, Quicksilver} from "@/consts/heroes";

export const ScarletUpgrade = generateAllyCard({
	name: 'Twinstincts',
	card: 'Scarlet Witch: Wanda Maximoff',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	pronoun: 'her',
	category: 'Heroic',
	conflictingHeroes: [ScarletWitch.name]
})

export const Serval = generateExhaustedCardInPlay({
	name: 'Corporate Sponsors',
	card: 'Serval Industries',
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Reflex = generateUpgradeCard({
	name: "Improved Defenses",
	card: "Accelerated Reflex",
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: "Heroic",
	article: '',
})

export const Resistance = generateUpgradeCard({
	name: "Resource Generation",
	card: "Friction Resistance",
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: "Heroic",
	article: '',
	exhausted: true
})

export const Perception = generateUpgradeCard({
	name: "Improved Awareness",
	card: "Hyper Perception",
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: "Heroic",
	article: '',
})

export const Sinew = generateUpgradeCard({
	name: "Improved Power",
	card: "Reinforced Sinew",
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: "Heroic",
	article: '',
})

export const Upgrades = [
	ScarletUpgrade,
	Serval,
	Reflex,
	Resistance,
	Perception,
	Sinew
]
