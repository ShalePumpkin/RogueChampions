import {generateExhaustedCardInPlay} from "@/lib/upgrades";
import {GalaxysMostWanted as Exp} from "@/consts/expansions";
import {Groot} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";

export const FertileGround = generateExhaustedCardInPlay({
	name: 'Rich Soil',
	card: 'Fertile Ground',
	requires: Exp.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const EntanglingVines = generateExhaustedCardInPlay({
	name: 'Wrapped',
	card: 'Entangling Vines',
	requires: Exp.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const LashingVines = generateExhaustedCardInPlay({
	name: 'Whip',
	card: 'Lashing Vines',
	requires: Exp.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const VineShield = generateExhaustedCardInPlay({
	name: 'Shield',
	card: 'Vine Shield',
	requires: Exp.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const VineSpikes = generateExhaustedCardInPlay({
	name: 'Spikes',
	card: 'Vine Spikes',
	requires: Exp.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Growth : any = {
	name: 'Growth Spurt',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Groot.name,
	numToAdd (level: number) : number {
		return level*2
	},
	description () {
		const numToAdd = this.numToAdd(this.level)
		let counters = numToAdd + ' growth counters'
		return `<strong>Setup:</strong> Place ${counters} on Groot.`
	},
	levelUpMessage () {
		return `Growth counters to add: ${this.numToAdd(this.level)} becomes <strong>${this.numToAdd(this.level+1)}</strong>`
	},
	category: 'Heroic',
}

export const Upgrades : Upgrade[] = [
	FertileGround,
	EntanglingVines,
	LashingVines,
	VineShield,
	VineSpikes,
	Growth,
]
