import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Drax as Exp} from "@/consts/expansions";
import {Drax} from "@/consts/heroes";

export const MantisUpgrade = generateExhaustedCardInPlay({
	name: 'Empathic Ally',
	card: 'Mantis',
	requires: Exp.name,
	requiresHero: Drax.name,
	pronoun: 'her',
	article: '',
	category: 'Heroic',
})

export const DraxsKnife = generateUpgradeCard({
	name: "Trusty Weapon",
	card: "Drax's Knife",
	requires: Exp.name,
	requiresHero: Drax.name,
	category: "Heroic",
	article: '',
})

export const DraxsOtherKnife = generateUpgradeCard({
	name: "Tried and True",
	card: "Drax's Other Knife",
	requires: Exp.name,
	requiresHero: Drax.name,
	category: "Heroic",
	article: '',
})

export const Mastery = generateUpgradeCard({
	name: "Revenge",
	card: "DWI Theet Mastery",
	requires: Exp.name,
	requiresHero: Drax.name,
	category: "Heroic",
	article: '',
})

export const Stubborn = generateUpgradeCard({
	name: "Headstrong",
	card: "Too Stubborn to Die",
	requires: Exp.name,
	requiresHero: Drax.name,
	category: "Heroic",
	article: '',
})

export const Upgrades = [
	MantisUpgrade,
	DraxsKnife,
	DraxsOtherKnife,
	Mastery,
	Stubborn
]
