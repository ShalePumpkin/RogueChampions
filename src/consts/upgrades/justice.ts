import {CoreSet} from "@/consts/expansions";
import {generateCounterCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

export const SurveillanceTeam = generateCounterCardInPlay({
	name: 'Trusty Spies',
	card: 'Surveillance Team',
	category: "Justice",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const HeroicIntuition = generateUpgradeCard({
	name: 'Heroic Instincts',
	requires: CoreSet.name,
	card: 'Heroic Intuition',
	article: 'a',
	category: "Justice",
	attached: true
})

export const Upgrades = [SurveillanceTeam, HeroicIntuition]
