import {
	CardInPlayExtraCounters,
	Definition,
	ExhaustedCard, MinionCard,
	Upgrade,
	UpgradeCard,
	UpgradeCategory
} from "@/types/upgrade";
import {getRandomInt, randomItemsExcluding, shuffle} from "@/lib/random";
import {UpgradesList, UpgradesMap} from "@/consts/upgrades";
import {Player} from "@/types/player";
import {Expansion} from "@/types/expansion";

// Given a list of expansions it will return a full list of upgrades that are compatible
// with those expansions
export const getExpansionsUpgrades = (expansions: Expansion[]) : Upgrade[] => {
	return UpgradesList.filter((upgrade : Upgrade) => {
		if (upgrade.requires === null) {
			return true
		}
		for (var i = 0; i < expansions.length; i++) {
			if (expansions[i].name === upgrade.requires) {
				return true
			}
		}
		return false
	})
}

export const generateUpgradeOptions  = (player: Player, expansions: Expansion[], categories: UpgradeCategory[], players: Player[]) : Upgrade[] => {
	let possibleUps = getExpansionsUpgrades(expansions)

	// Filter based on category
	possibleUps = possibleUps.filter((upgrade: Upgrade) => {
		return categories.indexOf(upgrade.category) >= 0
	})

	// Filter based on hero
	possibleUps = possibleUps.filter((upgrade: Upgrade) => {
		if (!upgrade.requiresHero) {
			return true
		}
		return upgrade.requiresHero == player.hero.name
	})

	// Filter out upgrades that can't be paired with certain heros
	possibleUps = possibleUps.filter((upgrade: Upgrade) => {
		if (!upgrade.conflictingHeroes || upgrade.conflictingHeroes.length == 0) {
			return true
		}
		for (let i = 0; i < players.length; i++) {
			if (upgrade.conflictingHeroes.indexOf(players[i].hero.name) >= 0) {
				return false
			}
		}

		return true
	})

	const names = possibleUps.map(x => x.name)
	const existing =  player.upgrades.map(x => x.name)

	const selected = randomItemsExcluding<string>(3, names, existing)
	const upgrades = selected.map((name) : Upgrade => {
		const up = UpgradesMap[name]

		// TESTING
		// You can turn this on to make sure upgrade descriptions are display carefully
		//up.level = up.maxLevel-1
		//up.level = getRandomInt(1, up.maxLevel || 1)

		return up
	})
	shuffle(upgrades)
	return upgrades
}


export function defCategory (def: Definition) : UpgradeCategory {
	if (def.category) {
		return def.requiresHero ? 'Heroic' : def.category
	}

	return def.category || 'General'
}

export function generateUpgradeCard (def: UpgradeCard) : Upgrade {
	const category = defCategory(def)
	let maxLevel = 1
	if (typeof def.copies != "undefined") {
		maxLevel = def.copies
	}
	const upgrade = {
		name: def.name,
		level: 1,
		description () {
			const article = def.article ? (def.article + ' ') : ''
			const attached = def.attached ? ' attached to your hero' : ''
			const exhausted = def.exhausted ? ' Exhaust ' + def.card +'.': ''
			let msg = `<strong>Setup:</strong> Put ${article}<strong>${def.card}</strong> into play${attached}.${exhausted}`
			const extras = this.level - 1
			if (extras > 0) {
				if (extras == 1) {
					msg += ' Repeat for another ' + def.card + '.'
				} else {
					msg += ' Repeat ' + extras + ' times.'
				}
			}
			return msg
		},
		levelUpMessage () {
			if (maxLevel == 1) {
				return ''
			}
			return 'Put an extra copy into play.'
		},
		requires: def.requires,
		requiresHero: def.requiresHero,
		maxLevel: maxLevel,
		category: category
	}
	return upgrade
}

export function generateExhaustedCardInPlay (def: ExhaustedCard) : Upgrade {
	const category = defCategory(def)
	const upgrade = {
		name: def.name,
		level: 1,
		description () {
			let desc : string = cardInPlay(def.card, this.level == 1, def.article, def.they)
			return desc
		},
		requires: def.requires,
		levelUpMessage () {
			return `Does not enter play exhausted`
		},
		maxLevel: def.maxLevel || 2,
		requiresHero: def.requiresHero,
		category: category
	}
	return upgrade
}

export function generateCounterCardInPlay (def: CardInPlayExtraCounters) : Upgrade {
	let maxLevel = def.maxLevel

	// If no max level has been provided, but we have defined the extra counters you would
	// get at each level, then we can use that to determine max level
	if (!def.maxLevel && def.extraCounters && typeof def.extraCounters == 'object') {
		def.maxLevel = Object.keys(def.extraCounters).length
	}

	const upgrade = {
		name: def.name,
		getExtraCounters (level: number) {
			return def.extraCounters[level] || 0
		},
		extraCountersMsg (extraCounters: number) {
			const extra = extraCounters == 1 ? '' : (extraCounters + ' ')
			if (extraCounters == 1) {
				return `Put an extra counter on ` + def.pronoun + '.'
			}
			return 'Put ' + extra + ' extra counters on ' + def.pronoun + '.'
		},
		level: 1,
		maxLevel: def.maxLevel,
		description () {
			let desc : string = cardInPlay(def.card, def.exhausted, def.article, def.they)
			const extraCounters = this.getExtraCounters(this.level)
			if (extraCounters > 0) {
				desc += ' ' + this.extraCountersMsg(extraCounters)
			}
			return desc
		},
		requires: def.requires,
		requiresHero: def.requiresHero,
		levelUpMessage () {
			const currentCounters = this.getExtraCounters(this.level)
			const newCounters = this.getExtraCounters(this.level+1)
			if (currentCounters == 0 && newCounters > 0) {
				return this.extraCountersMsg(newCounters)
			}

			return `Extra counters: ${currentCounters} becomes <strong>${newCounters}</strong>`
		},
		category: defCategory(def),
		conflictingHeroes: def.conflictingHeroes
	}
	return upgrade
}

export function generateAllyCard (def: MinionCard) : Upgrade {
	const upgrade = {
		name: def.name,
		getDamageCounters (level: number) {
			if (def.levels && def.levels[level-1]) {
				return def.levels[level-1].damage || 0
			}
			return 0
		},
		damageCountersMsg (counters: number) {
			if (counters == 0) {
				return ''
			}
			return def.card + ` starts with ${counters} damage counter` + (counters == 1 ? '' : 's') + ' on ' + def.pronoun + '.'
		},
		level: 1,
		maxLevel: def.levels.length,
		description () {
			let desc = `<strong>Setup:</strong> Put <strong>${def.card}</strong> into play under your control.`
			if (def.levels[this.level-1].exhausted) {
				desc += ` ${def.card} enters play exhausted.`
			}
			const dmg = this.getDamageCounters(this.level)
			if (dmg > 0) {
				desc += ' ' + this.damageCountersMsg(dmg)
			}
			if (this.isTough(this.level)) {
				desc += ` Give ${def.pronoun} a Tough status card.`
			}
			return desc
		},
		isTough (level: number) : boolean {
			return def.levels[level-1].tough || false
		},
		requires: def.requires,
		requiresHero: def.requiresHero,
		levelUpMessage () {
			const current = def.levels[this.level-1]
			const next = def.levels[this.level]
			const parts = []
			if (current.damage != next.damage) {
				parts.push(`Starting Damage: ${current.damage} becomes <strong>${next.damage}</strong>`)
			}
			if (next.tough) {
				parts.push('Gains a Tough status card.')
			}
			if (current.exhausted && !next.exhausted) {
				parts.push('Does not enter play exhausted.')
			}
			return parts.join(' ')
		},
		category: defCategory(def),
		conflictingHeroes: def.conflictingHeroes
	}
	return upgrade
}

export function cardInPlay(card: string, exhausted = false, article = 'a', they = 'It') : string {
	const articleMsg = article ? (article + ' ') : ''
	let desc = `<strong>Setup:</strong> Put ${articleMsg}<strong>${card}</strong> into play under your control.`
	if (exhausted) {
		desc += ` ${they} enters play exhausted.`
	}
	return desc
}

export function levelUpMessageIncrease (numBefore: number, numAfter: number, numOfWhat: string, plural?: string) : string {
	if (!plural) {
		plural = numOfWhat + 's'
	}
	return `${numBefore} ${numBefore == 1 ? numOfWhat : plural} becomes <strong>${numAfter} ${plural}</strong>`
}

