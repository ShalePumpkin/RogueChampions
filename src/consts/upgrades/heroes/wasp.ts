import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Wasp as Exp} from "@/consts/expansions";
import {AntMan, Wasp} from "@/consts/heroes";

export const AntManUpgrade = generateAllyCard({
	name: 'Ally Call',
	card: 'Ant-Man',
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
	requiresHero: Wasp.name,
	pronoun: 'his',
	category: 'Heroic',
	conflictingHeroes: [AntMan.name]
})

export const RedRoom = generateUpgradeCard({
	name: "Advanced Training",
	card: "Red Room Training",
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: "Heroic",
	article: '',
})

export const BioSynthetic = generateExhaustedCardInPlay({
	name: "Equip: Bio-Synthetic Wings",
	card: "Bio-Synthetic Wings",
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const WaspsHelmet = generateUpgradeCard({
	name: "Equip: Wasp's Helmet",
	card: "Wasp's Helmet",
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: "Heroic",
	article: '',
})

export const Upgrades = [
	AntManUpgrade,
	RedRoom,
	BioSynthetic,
	WaspsHelmet,
]
