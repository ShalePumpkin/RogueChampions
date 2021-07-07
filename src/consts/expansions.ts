import {
	BombScare,
	LegionOfHydra,
	MastersOfEvil,
	TheDoomsdayChair,
	Rhino,
	Klaw,
	Ultron,
	GoblinGimmicks,
	RiskyBusiness,
	MutagenFormula,
	HydraAssault,
	HydraPatrol,
	WeaponMaster,
	ExperimentalWeapons,
	EncounterSetsMap
} from "@/consts/encountersets"
import {Expansion} from "@/types/expansion";

export const CoreSet : Expansion = {
	name: 'Core Set',
	encounterSets: [
		TheDoomsdayChair.name,
		MastersOfEvil.name,
		LegionOfHydra.name,
		BombScare.name,
		Klaw.name,
		Rhino.name,
		Ultron.name
	]
}

export const RiseOfRedSkull : Expansion = {
	name: 'The Rise of Red Skull',
	encounterSets: [
		HydraAssault.name,
		HydraPatrol.name,
		WeaponMaster.name,
		ExperimentalWeapons.name,

		// I gotta be honest here. I thought using the SetsMap to get the names
		// would be good, but it isn't.
		EncounterSetsMap.Crossbones.name,
		'Absorbing Man',
		EncounterSetsMap.Taskmaster.name,
		EncounterSetsMap.Zola.name,
		'Red Skull'
	]
}

export const GalaxysMostWanted : Expansion = {
	name: "Galaxy's Most Wanted",
	encounterSets: [
	]
}

// Bad guys
export const GreenGoblin : Expansion = {
	name: 'Green Goblin',
	encounterSets: [
		GoblinGimmicks.name,
		RiskyBusiness.name,
		MutagenFormula.name,
	]
}

export const WreckingCrew : Expansion = {
	name: 'Wrecking Crew',
	encounterSets: ['Wrecking Crew']
}


// Good guys
export const CaptainAmerica : Expansion = {
	name: 'Captain America',
	encounterSets: [],
}

export const BlackWidow : Expansion = {
	name: 'Black Widow',
	encounterSets: [],
}

export const Thor : Expansion = {
	name: 'Thor',
	encounterSets: [],
}

export const ScarletWitch : Expansion = {
	name: 'Scarlet Witch',
	encounterSets: [],
}

export const MsMarvel : Expansion = {
	name: 'Ms. Marvel',
	encounterSets: [],
}

export const Hulk : Expansion = {
	name: 'Hulk',
	encounterSets: [],
}

export const DoctorStrange : Expansion = {
	name: 'Doctor Strange',
	encounterSets: [],
}

export const AntMan : Expansion = {
	name: 'Ant-man',
	encounterSets: [],
}

export const Wasp : Expansion = {
	name: 'Wasp',
	encounterSets: [],
}

export const Quicksilver : Expansion = {
	name: 'Quicksilver',
	encounterSets: [],
}

export const StarLord : Expansion = {
	name: 'Star-Lord',
	encounterSets: [],
}

export const Gamora : Expansion = {
	name: 'Gamora',
	encounterSets: [],
}

export const Drax : Expansion = {
	name: 'Drax',
	encounterSets: [],
}

export const ExpansionsMap : Record<string, Expansion> = {
	// Expansions
	[CoreSet.name]: CoreSet,
	[RiseOfRedSkull.name]: RiseOfRedSkull,
	[GalaxysMostWanted.name]: GalaxysMostWanted,

	// Villain packs
	[GreenGoblin.name]: GreenGoblin,
	[WreckingCrew.name]: WreckingCrew,

	// Hero packs
	[BlackWidow.name]: BlackWidow,
	[CaptainAmerica.name]: CaptainAmerica,
	[DoctorStrange.name]: DoctorStrange,
	[Hulk.name]: Hulk,
	[Thor.name]: Thor,
	[MsMarvel.name]: MsMarvel,
	[ScarletWitch.name]: ScarletWitch,
	[AntMan.name]: AntMan,
	[Wasp.name]: Wasp,
	[Quicksilver.name]: Quicksilver,
	[StarLord.name]: StarLord,
	[Gamora.name]: Gamora,
	[Drax.name]: Drax
}

export const ExpansionsList = Object.keys(ExpansionsMap).map(key => ExpansionsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
