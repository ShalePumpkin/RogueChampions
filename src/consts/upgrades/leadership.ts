import {CaptainAmerica, CoreSet} from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Hawkeye} from "@/consts/heroes";

export const TheTriskelion = generateUpgradeCard({
	name: 'Forward HQ',
	card: 'The Treskelion',
	article: '',
	requires: CoreSet.name,
	category: 'Leadership'
})

export const IKnowAHawkeye = generateCounterCardInPlay({
	name: 'I Know a Hawkeye',
	card: 'Hawkeye',
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'him',
	category: "Leadership",
	exhausted: true,
	they: 'He',
	conflictingHeroes: [Hawkeye.name],
})

export const WonderMan = generateAllyCard({
	name: `Wonderful`,
	card: 'Wonder Man',
	requires: CaptainAmerica.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
		tough: true,
	}]
})

export const Upgrades = [IKnowAHawkeye, WonderMan, TheTriskelion]
