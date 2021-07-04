import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {ScarletWitch as Expansion} from "@/consts/expansions";
import {ScarletWitch} from "@/consts/heroes";

export const Helmet = generateUpgradeCard({
	name: 'Favorite Hat',
	card: "Scarlet Witch's Crest",
	requires: Expansion.name,
	requiresHero: ScarletWitch.name,
	category: "Heroic",
	article: '',
})

export const MagicShield = generateUpgradeCard({
	name: 'Force Field',
	card: "Magic Shield",
	requires: Expansion.name,
	requiresHero: ScarletWitch.name,
	category: "Heroic",
	article: '',
	copies: 3,
})

export const Agatha = generateExhaustedCardInPlay({
	name: 'Salem\'s Witch',
	card: `Agatha Harkness`,
	requires: Expansion.name,
	requiresHero: ScarletWitch.name,
	category: 'Heroic',
	article: '',
	they: 'she',
	pronoun: 'her',
})


export const Quicksilver = generateExhaustedCardInPlay({
	name: 'Twinstinct',
	card: `Quicksilver`,
	requires: Expansion.name,
	requiresHero: ScarletWitch.name,
	category: 'Heroic',
	they: 'he',
	article: '',
	pronoun: 'him',
})


export const Upgrades = [Helmet, Agatha, Quicksilver, MagicShield]
