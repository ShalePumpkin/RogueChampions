import {Villain} from "@/types/villain";
import {EncounterSet} from "@/types/encounterset";
import {Challenge} from "@/types/challenge";
import {UpgradeCategory} from "@/types/upgrade";

type GameStatus = 'next' | 'active' | 'won' | 'lost'

export type Game = {
	number: number
	villain: Villain
	encounterSets: EncounterSet[]
	difficulty: number,
	heroLevel: number
	challenges: Challenge[]
	status: GameStatus
	id: string,
	rewardTypes: UpgradeCategory[]
}
