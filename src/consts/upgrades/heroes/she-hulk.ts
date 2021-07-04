import {CoreSet} from "@/consts/expansions";
import {SheHulk} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

type SpidyUpgrade = {
	article: string,
	card: string
	name: string
	pronoun: string
	they?: string
}

function upgrade (def: SpidyUpgrade) {
	return generateExhaustedCardInPlay({
		card: def.card,
		name: def.name,
		pronoun: def.pronoun,
		requires: CoreSet.name,
		requiresHero: SheHulk.name,
		category: 'Heroic',
		article: def.article,
		they: def.they
	})
}

export const LawDivision = upgrade({
	card: 'Superhuman Law Division',
	name: 'Law Degree',
	pronoun: 'it',
	article: '',
})

export const FocusedRage = upgrade({
	card: 'Focused Rage',
	name: 'Always Raging',
	pronoun: 'it',
	article: 'a',
})

export const HellCat = upgrade({
	card: 'Hellcat',
	name: `Hell's a Comin'`,
	pronoun: 'her',
	article: '',
	they: 'She',
})

export const SuperhumanStrength = generateUpgradeCard({
	card: 'Superhman Strength',
	name: 'So Strong',
	requires: CoreSet.name,
	requiresHero: SheHulk.name,
	category: 'Heroic',
	article: 'a'
})


export const Upgrades = [
	LawDivision,
	FocusedRage,
	SuperhumanStrength,
	HellCat,
]
