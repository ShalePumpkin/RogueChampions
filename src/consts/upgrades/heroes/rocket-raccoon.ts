import {generateAllyCard, generateUpgradeCard, generateCounterCardInPlay} from "@/lib/upgrades";
import {GalaxysMostWanted as Exp} from "@/consts/expansions";
import {RocketRaccoon} from "@/consts/heroes";

export const BatteryPack = generateCounterCardInPlay({
	name: 'Extra Juice',
	card: 'Battery Pack',
	article: 'a',
	they: 'It',
	pronoun: 'it',
	requires: Exp.name,
	category: 'Heroic',
	requiresHero: RocketRaccoon.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const Skeleton = generateUpgradeCard({
	name: "Equip: Cybernetic Skeleton",
	card: "Cybernetic Skeleton",
	requires: Exp.name,
	requiresHero: RocketRaccoon.name,
	category: "Heroic",
	article: '',
})

export const Cannon = generateCounterCardInPlay({
	name: 'Equip: Particle Cannon',
	card: 'Particle Cannon',
	article: '',
	they: 'It',
	pronoun: 'it',
	requires: Exp.name,
	category: 'Heroic',
	requiresHero: RocketRaccoon.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const Launcher = generateCounterCardInPlay({
	name: 'Equip: Rocket Launcher',
	card: 'Rocket Launcher',
	article: '',
	they: 'It',
	pronoun: 'it',
	requires: Exp.name,
	category: 'Heroic',
	requiresHero: RocketRaccoon.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const Pistol = generateCounterCardInPlay({
	name: "Equip: Rocket's Pistol",
	card: "Rocket's Pistol",
	article: 'a',
	they: 'It',
	pronoun: 'it',
	requires: Exp.name,
	category: 'Heroic',
	requiresHero: RocketRaccoon.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const Boots = generateUpgradeCard({
	name: "Equip: Thruster Boots",
	card: "Thruster Boots",
	requires: Exp.name,
	requiresHero: RocketRaccoon.name,
	category: "Heroic",
	article: '',
})

export const Upgrades = [
	BatteryPack,
	Skeleton,
	Cannon,
	Launcher,
	Pistol,
	Boots,
]
