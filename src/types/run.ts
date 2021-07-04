import {Game} from "@/types/game";
import {Player} from "@/types/player";
import {Expansion} from "@/types/expansion";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";
import {GameOption} from "@/types/gameoption";

export type RunPhase = 'settings' | 'upgrading' | 'scouting' | 'battling' | 'defeat' | 'victory' | 'downtime'

export type Run = {
	started: Date
	games: Game[]
	activeGameIndex: number
	players: Player[]
	expansions: Expansion[]
	numGames: number
	phase: RunPhase
	upgradeOptions: Record<number, Upgrade[]>
	upgradeSelections: Record<number, string>
	gameOptions: GameOption[]
}
