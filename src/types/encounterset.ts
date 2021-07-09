import {Expansion} from "@/types/expansion";

export type EncounterSet = {
	name: string
	difficulty: number
	boss: boolean
	requires: Expansion
}
