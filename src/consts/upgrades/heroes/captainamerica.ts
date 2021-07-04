import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {CaptainAmerica as Expansion, RiseOfRedSkull} from "@/consts/expansions";
import {CaptainAmerica, CaptainMarvel, SpiderWoman} from "@/consts/heroes";

export const Serum = generateUpgradeCard({
	name: 'Special Sauce',
	card: "Super Soldier Serum",
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	category: "Heroic",
	article: 'a',
	copies: 2,
	exhausted: true,
})

export const Helmet = generateUpgradeCard({
	name: 'Safety First',
	card: "Captain America's Helmet",
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	category: "Heroic",
	article: '',
})

export const Apartment = generateExhaustedCardInPlay({
	name: 'Rent Paid',
	card: `Steve's Apartment`,
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})


export const Upgrades = [Serum, Helmet, Apartment]
