import {CoreSet} from "@/consts/expansions";
import {BlackPanther, IronMan} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

function upgrade (name: string) {
	return generateUpgradeCard({
		card: name,
		name: name,
		requires: CoreSet.name,
		requiresHero: BlackPanther.name,
		category: 'Heroic',
		article: ''
	})
}

export const TheGoldenCity = generateExhaustedCardInPlay({
	card: 'The Golden City',
	name: 'Capital Estate',
	pronoun: 'it',
	requires: CoreSet.name,
	requiresHero: BlackPanther.name,
	category: 'Heroic',
	article: ''
})

export const EnergyDaggers = upgrade('Energy Daggers')
EnergyDaggers.name = 'Handy Daggers'

export const Claws = upgrade('Panther Claws')
Claws.name = 'Extendable Claws'

export const Tac = upgrade('Tactical Genius')
Tac.name = 'Ready Mind'

export const Suit = upgrade('Vibranium Suit')
Suit.name = 'Dress for Success'

export const Upgrades = [TheGoldenCity, EnergyDaggers, Claws, Tac, Suit]

