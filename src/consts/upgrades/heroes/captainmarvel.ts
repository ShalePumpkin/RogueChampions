import {CoreSet} from "@/consts/expansions";
import {CaptainMarvel} from "@/consts/heroes";
import {generateCounterCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

export const CosmicFlight = generateUpgradeCard({
	name: 'Space Pilot',
	card: "Cosmic Flight",
	requires: CoreSet.name,
	requiresHero: CaptainMarvel.name,
	category: "Heroic",
	article: 'a',
	copies: 2
})

export const EnergyChannel = generateCounterCardInPlay({
	name: 'Crackling',
	card: 'Energy Channel',
	article: 'an',
	they: 'It',
	pronoun: 'it',
	requires: CoreSet.name,
	category: 'Heroic',
	requiresHero: CaptainMarvel.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	}
})

export const CaptainMarvelsHelmet = generateUpgradeCard({
	name: 'Helmet Hair',
	card: "Captain Marvel's Helmet",
	requires: CoreSet.name,
	requiresHero: CaptainMarvel.name,
	category: "Heroic"
})

export const Upgrades = [CosmicFlight, EnergyChannel, CaptainMarvelsHelmet]
