import {
	generateAllyCard,
	generateExhaustedCardInPlay,
	generateUpgradeCard,
} from "@/lib/upgrades";
import {RiseOfRedSkull} from "@/consts/expansions";
import {Hawkeye} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";


export const Bow = generateUpgradeCard({
	name: 'Never Leave Without It',
	card: "Hawkeye's Bow",
	requires: RiseOfRedSkull.name,
	requiresHero: Hawkeye.name,
	category: "Heroic",
	article: '',
})

export const Quiver = generateExhaustedCardInPlay({
	name: 'Quiver Strap',
	card: `Hawkeye's Quiver`,
	requires: RiseOfRedSkull.name,
	requiresHero: Hawkeye.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Arrows : any = {
	name: 'Favorite Arrows',
	level: 1,
	maxLevel: 3,
	requires: RiseOfRedSkull.name,
	requiresHero: Hawkeye.name,
	numToSearch (level: number) : number {
		return 4 + (level-1) * 2
	},
	numToKeep (level: number) : number {
		return level
	},
	description () {
		const numToSearch = this.numToSearch(this.level)
		const numToKeep = this.numToKeep(this.level)
		let keepsies = numToKeep == 1 ? 'an Arrow card' : numToKeep + ' Arrow cards'
		let article = numToKeep == 1 ? 'it' : 'them'
		return `<strong>Setup:</strong> Search the top ${numToSearch} cards of your deck for ${keepsies}. Add ${article} to your hand and shuffle your deck.`
	},
	levelUpMessage () {
		return `Cards to search: ${this.numToSearch(this.level)} becomes <strong>${this.numToSearch((this.level+1))}</strong>
		<br />
		Arrows to keep: ${this.numToKeep(this.level)} becomes <strong>${this.numToKeep((this.level+1))}</strong>`
	},
	category: 'Heroic'
}

export const Mockingbird = generateAllyCard({
	name: 'Bird Call',
	card: 'Mockingbird',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: RiseOfRedSkull.name,
	requiresHero: Hawkeye.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Upgrades : Upgrade[] = [
	Quiver,
	Bow,
	Mockingbird,
	Arrows
]
