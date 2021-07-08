import {EncounterSet} from "@/types/encounterset";
import {DF_STEP_LARGE, DF_STEP_SMALL, DF_BASE, DF_STEP_MED} from "@/consts/difficulty";

// Encounter sets marked as "boss: true" cannot be used as modular sets
// Their difficulty is 0 because the villain's difficulty is set in the villains.ts file

// Helper to create an encounter quickly
function quick(name: string, diff = DF_STEP_SMALL) : EncounterSet {
	const encounter = {
		name: name,
		difficulty: diff,
		boss: false,
	}
	EncounterSetsMap[name] = encounter
	EncounterSetsList.push(encounter)
	return encounter
}

// Helper to quickly create a villain
function boss(name: string, diffBonus = 0) : EncounterSet {
	const up = {
		name: name,
		difficulty: diffBonus,
		boss: true,
	}
	EncounterSetsMap[name] = up
	EncounterSetsList.push(up)
	return up
}

// export const Ultron : EncounterSet = {
// 	name: 'Ultron',
// 	difficulty: 0,
// 	boss: true
// }
//
// export const Klaw : EncounterSet = {
// 	name: 'Klaw',
// 	difficulty: 0,
// 	boss: true
// }
//
// export const Rhino : EncounterSet = {
// 	name: 'Rhino',
// 	difficulty: 0,
// 	boss: true
// }
//
// export const WreckingCrew : EncounterSet = {
// 	name: 'Wrecking Crew',
// 	difficulty: DF_BASE + DF_STEP_SMALL,
// 	boss: true,
// }
//
// export const RiskyBusiness : EncounterSet = {
// 	name: 'Risky Business',
// 	difficulty: DF_STEP_LARGE,
// 	boss: true
// }
//
// export const MutagenFormula : EncounterSet = {
// 	name: 'Mutagen Formula',
// 	difficulty: DF_STEP_SMALL,
// 	boss: true
// }
//
// export const GoblinGimmicks : EncounterSet = {
// 	name: 'Goblin Gimmicks',
// 	difficulty: DF_STEP_LARGE,
// 	boss: false
// }
//
// export const TheDoomsdayChair : EncounterSet = {
// 	name: 'The Doomsday Chair',
// 	difficulty: DF_STEP_LARGE,
// 	boss: false
// }
//
// export const LegionOfHydra : EncounterSet = {
// 	name: 'Legion of Hydra',
// 	difficulty: DF_STEP_SMALL,
// 	boss: false
// }
//
// export const Expert : EncounterSet = {
// 	name: 'Expert',
// 	difficulty: DF_STEP_LARGE,
// 	boss: false
// }
//
// export const BombScare : EncounterSet = {
// 	name: 'Bomb Scare',
// 	difficulty: DF_STEP_SMALL,
// 	boss: false
// }
//
// export const MastersOfEvil : EncounterSet = {
// 	name: 'Masters of Evil',
// 	difficulty: DF_STEP_LARGE,
// 	boss: false
// }

export const EncounterSetsMap : Record<string, EncounterSet> = {}
export let EncounterSetsList = Object.keys(EncounterSetsMap).map(key => EncounterSetsMap[key])

// Bosses
export const Rhino = boss('Rhino')
export const Klaw = boss('Klaw')
export const Ultron = boss('Ultron')

export const WreckingCrew = boss('Wrecking Crew', DF_STEP_SMALL)

export const RiskyBusiness = boss('Risky Business', DF_STEP_LARGE)
export const MutagenFormula = boss('Mutagen Formula', DF_STEP_SMALL)

export const Crossbones = boss('Crossbones')
export const AbsorbingMan = boss('Absorbing Man')
export const Taskmaster = boss('Taskmaster')
export const Zola = boss('Zola')
export const RedSkull = boss('Red Skull')

export const Kang = boss('Kang')

export const BrotherhoodOfBadoon = boss('Brotherhood of Badoon')
export const InfiltrateTheMuseum = boss('Infiltrate the Museum')
export const EscapeTheMuseum = boss('Escape the Museum')
export const Nebula = boss('Nebula')
export const RonanTheAccuser = boss('Ronan the Accuser')

// Encounter Sets
export const Standard = quick('Standard')
export const Expert = quick('Expert', DF_STEP_LARGE)
export const BombScare = quick('Bomb Scare', DF_STEP_LARGE)
export const MastersOfEvil = quick('Masters of Evil', DF_STEP_LARGE)
export const LegionOfHydra = quick('Legions of Hydra')
export const TheDoomsdayChair = quick('The Doomsday Chair', DF_STEP_LARGE)

export const GoblinGimmicks = quick('Goblin Gimmicks')

export const MessOfThings = quick('Mess of Things')
export const PowerDrain = quick('Power Drain')
export const RunningInterference = quick('Running Interference')
export const KreeFanatic = quick('Kree Fanatic')

export const ExperimentalWeapons = quick('Experimental Weapons', DF_STEP_MED)
export const HydraAssault = quick('Hydra Assault')
export const HydraPatrol = quick('Hydra Patrol')
export const WeaponMaster = quick('Weapon Master')

export const Temporal = quick('Temporal')
export const MasterOfTime = quick('Master of Time')
export const Anachronauts = quick('Anachronauts')

export const BandOfBadoon = quick('Band of Badoon')
export const MenagerieMedley = quick('Menagerie Medley')
export const SpacePirates = quick('Space Pirates')
export const KreeMilitants = quick('Kree Militants')

EncounterSetsList = EncounterSetsList.sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
