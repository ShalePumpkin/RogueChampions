import {EncounterSet} from "@/types/encounterset";
import {DF_STEP_LARGE, DF_STEP_SMALL, DF_BASE, DF_STEP_MED} from "@/consts/difficulty";
import * as Exp from "@/consts/expansions";
import {Expansion} from "@/types/expansion";

// Encounter sets marked as "boss: true" cannot be used as modular sets
// Their difficulty is 0 because the villain's difficulty is set in the villains.ts file

// Helper to create an encounter quickly
function quick(name: string, diff = DF_STEP_SMALL, req: Expansion = Exp.CoreSet) : EncounterSet {
	const encounter = {
		name: name,
		difficulty: diff,
		boss: false,
		requires: req
	}
	EncounterSetsMap[name] = encounter
	EncounterSetsList.push(encounter)
	return encounter
}

// Helper to quickly create a villain
function boss(name: string, diffBonus = 0, req: Expansion = Exp.CoreSet) : EncounterSet {
	const up = {
		name: name,
		difficulty: diffBonus,
		boss: true,
		requires: req,
	}
	EncounterSetsMap[name] = up
	EncounterSetsList.push(up)
	return up
}

export const EncounterSetsMap : Record<string, EncounterSet> = {}
export let EncounterSetsList = Object.keys(EncounterSetsMap).map(key => EncounterSetsMap[key])

// Bosses
export const Rhino = boss('Rhino')
export const Klaw = boss('Klaw')
export const Ultron = boss('Ultron')

export const WreckingCrew = boss('Wrecking Crew', DF_STEP_SMALL, Exp.WreckingCrew)

export const RiskyBusiness = boss('Risky Business', DF_STEP_LARGE, Exp.GreenGoblin)
export const MutagenFormula = boss('Mutagen Formula', DF_STEP_SMALL, Exp.GreenGoblin)

export const Crossbones = boss('Crossbones', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const AbsorbingMan = boss('Absorbing Man', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const Taskmaster = boss('Taskmaster', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const Zola = boss('Zola', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const RedSkull = boss('Red Skull', DF_STEP_SMALL, Exp.RiseOfRedSkull)

export const Kang = boss('Kang', DF_STEP_SMALL, Exp.Kang)

export const BrotherhoodOfBadoon = boss('Brotherhood of Badoon', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const InfiltrateTheMuseum = boss('Infiltrate the Museum', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const EscapeTheMuseum = boss('Escape the Museum', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const Nebula = boss('Nebula', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const RonanTheAccuser = boss('Ronan the Accuser', DF_STEP_SMALL, Exp.GalaxysMostWanted)

// Encounter Sets
export const Standard = quick('Standard')
export const Expert = quick('Expert', DF_STEP_LARGE)
export const BombScare = quick('Bomb Scare', DF_STEP_LARGE)
export const MastersOfEvil = quick('Masters of Evil', DF_STEP_LARGE)
export const LegionOfHydra = quick('Legions of Hydra')
export const TheDoomsdayChair = quick('The Doomsday Chair', DF_STEP_LARGE)

export const GoblinGimmicks = quick('Goblin Gimmicks', DF_STEP_SMALL, Exp.GreenGoblin)

export const MessOfThings = quick('Mess of Things', DF_STEP_SMALL, Exp.GreenGoblin)
export const PowerDrain = quick('Power Drain', DF_STEP_SMALL, Exp.GreenGoblin)
export const RunningInterference = quick('Running Interference', DF_STEP_SMALL, Exp.GreenGoblin)
// export const KreeFanatic = quick('Kree Fanatic')

export const ExperimentalWeapons = quick('Experimental Weapons', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const HydraAssault = quick('Hydra Assault', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const HydraPatrol = quick('Hydra Patrol', DF_STEP_SMALL, Exp.RiseOfRedSkull)
export const WeaponMaster = quick('Weapon Master', DF_STEP_SMALL, Exp.RiseOfRedSkull)

export const Temporal = quick('Temporal', DF_STEP_SMALL, Exp.Kang)
export const MasterOfTime = quick('Master of Time', DF_STEP_SMALL, Exp.Kang)
export const Anachronauts = quick('Anachronauts', DF_STEP_SMALL, Exp.Kang)

export const BandOfBadoon = quick('Band of Badoon', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const MenagerieMedley = quick('Menagerie Medley', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const SpacePirates = quick('Space Pirates', DF_STEP_SMALL, Exp.GalaxysMostWanted)
export const KreeMilitants = quick('Kree Militants', DF_STEP_SMALL, Exp.GalaxysMostWanted)

EncounterSetsList = EncounterSetsList.sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
