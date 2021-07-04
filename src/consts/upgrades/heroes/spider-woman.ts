import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {CoreSet, RiseOfRedSkull} from "@/consts/expansions";
import {CaptainAmerica, CaptainMarvel, SpiderWoman} from "@/consts/heroes";


export const Finesse = generateUpgradeCard({
	name: 'Spidey Skills',
	card: "Finesse",
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	category: "Heroic",
	article: 'a',
	copies: 2,
	exhausted: true,
})

export const Apartment = generateExhaustedCardInPlay({
	name: 'Rent Paid',
	card: `Jessica Drew's Apartment`,
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const CaptainMarvelUpgrade = generateAllyCard({
	name: 'Marvelous Friends',
	card: 'Captain Marvel',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	pronoun: 'her',
	category: 'Heroic',
	conflictingHeroes: [CaptainMarvel.name]
})

export const Upgrades = [
	Finesse,
	Apartment,
	CaptainMarvelUpgrade,
]
