import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Hulk as Expansion} from "@/consts/expansions";
import {Hulk} from "@/consts/heroes";

export const Lab = generateExhaustedCardInPlay({
	name: 'Scientific Mind',
	card: "Banner's Laboratory",
	requires: Expansion.name,
	requiresHero: Hulk.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const ImmovableObject = generateUpgradeCard({
	name: 'Solid',
	card: 'Immovable Object',
	category: 'Heroic',
	article: '',
	requires: Expansion.name,
	requiresHero: Hulk.name,
})

export const Upgrades = [Lab,ImmovableObject]
