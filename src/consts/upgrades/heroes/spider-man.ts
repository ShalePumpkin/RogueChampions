import {CoreSet} from "@/consts/expansions";
import {IronMan, SpiderMan} from "@/consts/heroes";
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
		requiresHero: SpiderMan.name,
		category: 'Heroic',
		article: def.article,
		they: def.they
	})
}

export const AuntMay = upgrade({
	card: 'Aunt May',
	name: 'Favorite Nephew',
	pronoun: 'her',
	article: '',
	they: 'She',
})

export const BlackCat = upgrade({
	card: 'Black Cat',
	name: 'Cat Person',
	pronoun: 'her',
	article: '',
	they: 'She',
})

export const WebShooter = upgrade({
	card: 'Web Shooter',
	name: 'Sticky Shooters',
	pronoun: 'it',
	article: 'a',
})

export const Upgrades = [
	AuntMay,
	BlackCat,
	WebShooter,
]
