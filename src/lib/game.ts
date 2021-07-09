import {Game} from "@/types/game";
import {VillainsList, VillainsMap} from "@/consts/villains";
import {getRandomInt, percentChance, randomItem, randomItemsExcluding} from "@/lib/random";
import {Villain} from "@/types/villain";
import {EncounterSetsMap, EncounterSetsList, Expert} from "@/consts/encountersets";
import {randomChallenge} from "@/consts/challenges";
import {EncounterSet} from "@/types/encounterset";
import {GameOption} from "@/types/gameoption";
import {UpgradeCategoriesList} from "@/consts/upgrades";
import {UpgradeCategory} from "@/types/upgrade";
import {Expansion} from "@/types/expansion";

interface HasDifficulty {
	difficulty: number
}

export const getExpansionsVillains = (expansions: Expansion[]) : Villain[] => {
	return VillainsList.filter((villain : Villain) => {
		if (villain.requires == null) {
			return true
		}
		for (var i = 0; i < expansions.length; i++) {
			if (expansions[i] === villain.requires) {
				return true
			}
		}
		return false
	})
}

export const getExpansionsEncSets = (expansions: Expansion[]) : EncounterSet[] => {
	return EncounterSetsList.filter((encSet : EncounterSet) => {
		if (encSet.requires == null) {
			return true
		}
		for (var i = 0; i < expansions.length; i++) {
			if (expansions[i] === encSet.requires) {
				return true
			}
		}
		return false
	})
}

export const generateTargetGame = (minDifficulty: number, maxDifficulty: number, expansions: Expansion[]) : Game => {
	let count = 0
	const maxTries = 500

// Insert filter here
	let newVillainsList = getExpansionsVillains(expansions)

	const villain = randomItem(newVillainsList)
	let closest : Game = generateGame(villain, expansions)
	const targetDifficulty = (minDifficulty + maxDifficulty) / 2
	do {
		count++
		const villain = randomItem(newVillainsList)
		const contender = generateGame(villain, expansions)

		// First one in the range we return
		if (contender.difficulty <= maxDifficulty && contender.difficulty >= minDifficulty) {
			return contender
		}

		const currentScore = Math.abs(closest.difficulty - targetDifficulty)
		const contenderScore = Math.abs(contender.difficulty - targetDifficulty)
		if (contenderScore < currentScore) {
			closest = contender
		}
	} while(count < maxTries);
	return closest
}

export const generateGameOption  = (minDifficulty: number, maxDifficulty: number, existingUpgrades: UpgradeCategory[], expansions: Expansion[]) : GameOption => {
	const types = randomItemsExcluding<UpgradeCategory>(2, UpgradeCategoriesList, [], existingUpgrades)
	const game = generateTargetGame(minDifficulty, maxDifficulty, expansions)
	game.rewardTypes = types
	return {
		game: game
	}
}

export const generateGame = (villain: Villain, expansions: Expansion[]) : Game => {
	// Each villain has their own list of sets that must be included
	const sets = villain.sets.map((name) => {
		const set = EncounterSetsList.find((e: any) => e.name == name)
		if (!set) {
			throw new Error('cant find villain\'s encounter set')
		}
		return set
	})

	if (!villain.noExtraSets) {
		// Each game gets one random encounter automatically
		// We loop until we find one that ISN'T part of their villain's base encounter set
		let newEncSetList = getExpansionsEncSets(expansions)

		let randomSet : EncounterSet
		let noLoop = 0
		do {
			noLoop++
			randomSet = randomItem(newEncSetList)
		} while(randomSet.boss || sets.findIndex(s => s.name == randomSet.name) != -1 && noLoop < 10000)
		sets.push(randomSet)
	}

	// If expert isn't in there, there's a 10% chance to add it
	if (sets.findIndex(val => val.name == Expert.name) == -1) {
		if (percentChance(10)) {
			sets.push(Expert)
		}
	}

	const game: Game = {
		villain: villain,
		rewardTypes: [],
		status: 'next',
		number: 0,
		encounterSets: sets,
		difficulty: 0,
		challenges: [],
		heroLevel: 0,
		id: ''
	}

	/*// 10% chance for hero level 1
	if (percentChance(10)) {
		game.heroLevel++
	}*/

	// Challenges are custom setup things that make it harder
	// They aren't part of the core game
	// There's a base chance to get one challenge
	// We keep reducing that chance by 5% and trying again, on a loop
	// The loop stops if you ever fail to get a challenge
	let challengePercent = 50
	while (percentChance(challengePercent)) {
		const challenge = randomChallenge()
		game.challenges.push(challenge)
		challengePercent -= 5
	}

	game.difficulty = getGameDifficulty(game)
	game.id = getGameId(game)
	return game
}

export const generateGames = (expansions: Expansion[]) : Game[] => {
	const possibleVillainKeys = VillainsList.map((v : Villain) => v.key)
	const numGames = 4

	const villainKeys : string[] = randomItemsExcluding<string>(numGames, possibleVillainKeys, [])

	const games : Game[] = []

	// To try to make these less spikey, we're generating many different games randomly
	// Then we're ordering them by their difficulty, and picking one from a different place
	// in the list for each game in the run
	for (var i = 0; i < 200; i++) {
		villainKeys.forEach((key, idx) => {
			const villain = VillainsMap[key]
			const game = generateGame(villain, expansions)
			games.push(game)
		})
	}

	const sorted = games.sort((a, b) => {
		return a.difficulty < b.difficulty ? -1 : 1
	})

	const pageSize = Math.floor(sorted.length / numGames)

	const chosen = []
	for (var i = 1; i <= numGames; i++) {
		const min = (i - 1) * pageSize
		const max = min + pageSize
		chosen.push(sorted[getRandomInt(min, max)])
	}

	return chosen
}

export const getGameDifficulty = (game: Game) : number => {
	let diff = game.villain.difficulty
	let multiplier = 1
	game.encounterSets.forEach((set) => {
		diff += set.difficulty
	})

	game.challenges.forEach((cha) => {
		diff += cha.difficulty
	})

	diff *= multiplier

	diff += diff * (game.heroLevel * 1.25) // 25% harder for each hero level

	return Math.round(diff)
}

export const getGameId = (game: Game) : string => {
	return [
		game.villain.name,
		game.encounterSets.map(ec => ec.name).join('-'),
		game.challenges.map(c => c.name).join('-')
	].join('_')
}
