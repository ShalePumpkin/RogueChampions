import {CoreSet} from "@/consts/expansions";
import {IronMan} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";

function upgrade (name: string, article = '') {
	return generateExhaustedCardInPlay({
		card: name,
		name: 'Quick Deploy: ' + name,
		pronoun: 'it',
		requires: CoreSet.name,
		requiresHero: IronMan.name,
		category: 'Heroic',
		article: article
	})
}

export const ArcReactor = upgrade('Arc Reactor')
export const PoweredGauntlets = upgrade('Powered Gauntlets', 'a')
export const RocketBoots = upgrade('Rocket Boots', 'a')
export const MarkVHelmet = upgrade('Mark V Helmet')
export const MarkVArmor = generateUpgradeCard({
	card: 'Mark V Armor',
	name: 'Quick Deploy: Mark V Armor',
	requires: CoreSet.name,
	requiresHero: IronMan.name,
	category: 'Heroic'
})

export const Upgrades = [ArcReactor, PoweredGauntlets, RocketBoots, MarkVArmor, MarkVHelmet]
