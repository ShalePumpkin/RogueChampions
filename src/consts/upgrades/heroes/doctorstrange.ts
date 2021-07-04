import {DoctorStrange as Exp} from "@/consts/expansions";
import {DoctorStrange} from "@/consts/heroes";
import {generateAllyCard, generateExhaustedCardInPlay} from "@/lib/upgrades";


export const Sanctum = generateExhaustedCardInPlay({
	name: 'Sanctimonious',
	card: `Sanctum Sanctorum`,
	requires: Exp.name,
	requiresHero: DoctorStrange.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Cloak = generateExhaustedCardInPlay({
	name: 'Attuned Magical Item',
	card: `Cloak of Levitation`,
	requires: Exp.name,
	requiresHero: DoctorStrange.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Spellmaster : any = {
	name: 'Spellmaster',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: DoctorStrange.name,
	repeat (level: number) : string {
		return ['no times', 'once', 'twice', 'three times'][level-1]
	},
	numTimes (level: number) : number {
		return level
	},
	description () {
		const numTimes = this.numTimes(this.level)
		let repeat = ''
		if (numTimes > 1) {
			repeat = ' Repeat this ' + this.repeat(this.level) + '.'
		}
		return `<strong>Setup:</strong> You may either place the top card of the Invocation deck on the bottom, or discard it.${repeat}`
	},
	levelUpMessage () {
		return `You may do this <strong>` + this.repeat(this.level+1) + '</strong> instead of ' + this.repeat(this.level) + '.'
	},
	category: 'Heroic'
}

export const Wong = generateAllyCard({
	name: 'All the Wong Reasons',
	card: 'Wong',
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
	requires: Exp.name,
	requiresHero: DoctorStrange.name,
	pronoun: 'him',
	category: 'Heroic',
})

export const Upgrades = [
	Spellmaster,
	Sanctum,
	Cloak,
	Wong
]
