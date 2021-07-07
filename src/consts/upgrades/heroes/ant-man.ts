import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {AntMan as Exp} from "@/consts/expansions";
import {AntMan, Wasp} from "@/consts/heroes";

export const WaspUpgrade = generateAllyCard({
	name: 'Ally Call',
	card: 'Wasp',
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
	requiresHero: AntMan.name,
	pronoun: 'her',
	category: 'Heroic',
	conflictingHeroes: [Wasp.name]
})

export const ArmyOfAnts = generateExhaustedCardInPlay({
	name: 'Tiny Buddies',
	card: 'Army of Ants',
	requires: Exp.name,
	requiresHero: AntMan.name,
	category: 'Heroic',
	article: '',
	pronoun: '',
})

export const Helmet = generateUpgradeCard({
	name: "Head Gear",
	card: "Ant-Man's Helmet",
	requires: Exp.name,
	requiresHero: AntMan.name,
	category: "Heroic",
	article: '',
})

export const Giant = generateUpgradeCard({
	name: "Super Size",
	card: "Giant Strength",
	requires: Exp.name,
	requiresHero: AntMan.name,
	category: "Heroic",
	article: '',
	attached: true,
	copies: 2,
})

export const Gauntlets = generateExhaustedCardInPlay({
	name: "Powered Gloves",
	card: "Wrist Gauntlets",
	requires: Exp.name,
	requiresHero: AntMan.name,
	category: "Heroic",
	article: '',
	pronoun: '',
})

export const Upgrades = [
	WaspUpgrade,
	ArmyOfAnts,
	Helmet,
	Giant,
	Gauntlets
]
