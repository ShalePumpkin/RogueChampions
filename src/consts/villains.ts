import {Villain} from "@/types/villain";
import {EncounterSetsMap, MutagenFormula, RiskyBusiness} from "@/consts/encountersets";
import {ExpansionsMap} from "@/consts/expansions";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_MED} from "@/consts/difficulty";

// BASE GAME
export const Ultron : Villain = {
	name: 'Ultron',
	difficulty: DF_BASE + DF_STEP_LARGE,
	key: 'ultron',
	sets: [EncounterSetsMap.Ultron.name]
}

export const Rhino : Villain = {
	name: 'Rhino',
	key: 'rhino',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Rhino.name]
}

export const Klaw : Villain = {
	name: 'Klaw',
	key: 'klaw',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap.Klaw.name]
}

// VILLAIN PACKS
export const WreckingCrew : Villain = {
	name: 'Wrecking Crew',
	key: 'WreckingCrew',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap['Wrecking Crew'].name],
	noExtraSets: true
}

export const GreenGoblin : Villain = {
	name: 'Green Goblin',
	key: 'GreenGoblin',
	difficulty: DF_BASE,
	sets: [MutagenFormula.name]
}

export const NormanOsborn : Villain = {
	name: 'Norman Osborn',
	key: 'NormanOsborn',
	difficulty: DF_BASE,
	sets: [RiskyBusiness.name]
}

export const Kang : Villain = {
	name: 'The Once and Future Kang',
	key: 'Kang',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Kang.name]
}

// THE RISE OF RED SKULL
export const Crossbones : Villain = {
	name: 'Crossbones',
	key: 'Crossbones',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Crossbones.name]
}

export const VillainsMap : Record<string, Villain> = {
	[Ultron.name]: Ultron,
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,
	[WreckingCrew.name]: WreckingCrew,
	[GreenGoblin.name]: GreenGoblin,
	[NormanOsborn.name]: NormanOsborn,
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

