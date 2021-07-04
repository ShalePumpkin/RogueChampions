
export type CardInPlayExtraCounters = {
	card: string
	requires: string
	name: string
	extraCounters: Record<number, number>
	pronoun: string,
	maxLevel?: number
	category?: UpgradeCategory,
	requiresHero?: string
	exhausted?: boolean
	article?: string
	they?: string,
	conflictingHeroes?: string[]
}

export type ExhaustedCard = {
	card: string
	requires: string
	name: string
	pronoun: string
	maxLevel?: number,
	category?: UpgradeCategory,
	article?: string
	requiresHero?: string
	they?: string
}

export type UpgradeCard = {
	card: string,
	requires: string,
	name: string
	article?: string
	requiresHero?: string
	attached?: boolean
	category?: UpgradeCategory
	copies?: number
	exhausted?: boolean
}

export type MinionCardLevel = {
	damage: number
	exhausted?: boolean
	tough?: boolean
}

// An upgrade where you put an ally card into play
export type MinionCard = {
	card: string,
	requires: string,
	name: string,
	pronoun: string,
	requiresHero?: string,
	category: UpgradeCategory,
	levels: MinionCardLevel[],
	conflictingHeroes?: string[]
}

export interface Definition {
	category?: UpgradeCategory
	requiresHero?: string
}

export interface Upgrade {
	name: string
	description: () => any
	level: number
	maxLevel?: number
	requires: null | string // Name of expansion required. Null means it has no such requirement.
	requiresHero?: string
	levelUpMessage: () => any
	category: UpgradeCategory,
	conflictingHeroes?: string[]
}

export type UpgradeCategory = 'Aggression' | 'Protection' | 'Leadership' | 'Justice' | 'Heroic' | 'General'
