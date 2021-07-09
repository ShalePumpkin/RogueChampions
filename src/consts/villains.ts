import {Villain} from "@/types/villain";
import * as Enc from "@/consts/encountersets";
import {ExpansionsMap} from "@/consts/expansions";
import * as Exp from "@/consts/expansions";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_MED} from "@/consts/difficulty";

// BASE GAME
export const Ultron : Villain = {
	name: 'Ultron',
	difficulty: DF_BASE + DF_STEP_LARGE,
	key: 'ultron',
	sets: [Enc.Ultron.name],
	requires: Exp.CoreSet
}

export const Rhino : Villain = {
	name: 'Rhino',
	key: 'rhino',
	difficulty: DF_BASE,
	sets: [Enc.Rhino.name],
	requires: Exp.CoreSet
}

export const Klaw : Villain = {
	name: 'Klaw',
	key: 'klaw',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Klaw.name],
	requires: Exp.CoreSet
}

// VILLAIN PACKS
export const WreckingCrew : Villain = {
	name: 'Wrecking Crew',
	key: 'WreckingCrew',
	difficulty: DF_BASE,
	sets: [Enc.WreckingCrew.name],
	noExtraSets: true,
	requires: Exp.WreckingCrew
}

export const GreenGoblin : Villain = {
	name: 'Green Goblin',
	key: 'GreenGoblin',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.MutagenFormula.name],
	requires: Exp.GreenGoblin
}

export const NormanOsborn : Villain = {
	name: 'Norman Osborn',
	key: 'NormanOsborn',
	difficulty: DF_BASE,
	sets: [Enc.RiskyBusiness.name],
	requires: Exp.GreenGoblin
}

export const Kang : Villain = {
	name: 'The Once and Future Kang',
	key: 'Kang',
	difficulty: DF_BASE,
	sets: [Enc.Kang.name],
	requires: Exp.Kang
}

// THE RISE OF RED SKULL
export const Crossbones : Villain = {
	name: 'Crossbones',
	key: 'Crossbones',
	difficulty: DF_BASE,
	sets: [Enc.Crossbones.name],
	requires: Exp.RiseOfRedSkull
}

export const AbsorbingMan : Villain = {
	name: 'Absorbing Man',
	key: 'AbsorbingMan',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.AbsorbingMan.name],
	requires: Exp.RiseOfRedSkull
}

export const Taskmaster : Villain = {
	name: 'Taskmaster',
	key: 'Taskmaster',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Taskmaster.name],
	requires: Exp.RiseOfRedSkull
}

export const Zola : Villain = {
	name: 'Zola',
	key: 'Zola',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.Zola.name],
	requires: Exp.RiseOfRedSkull
}

export const RedSkull : Villain = {
	name: 'Red Skull',
	key: 'RedSkull',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.RedSkull.name],
	requires: Exp.RiseOfRedSkull
}

// GALAXY'S MOST WANTED
export const Drang : Villain = {
	name: 'Drang',
	key: 'Drang',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [Enc.BrotherhoodOfBadoon.name],
	requires: Exp.GalaxysMostWanted
}

export const Collector1 : Villain = {
	name: 'Collector 1',
	key: 'Collector1',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.InfiltrateTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const Collector2 : Villain = {
	name: 'Collector 2',
	key: 'Collector2',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.EscapeTheMuseum.name],
	requires: Exp.GalaxysMostWanted
}

export const Nebula : Villain = {
	name: 'Nebula',
	key: 'Nebula',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.Nebula.name],
	requires: Exp.GalaxysMostWanted
}

export const Ronan : Villain = {
	name: 'Ronan',
	key: 'Ronan',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [Enc.RonanTheAccuser.name],
	requires: Exp.GalaxysMostWanted
}

export const VillainsMap : Record<string, Villain> = {
	[Ultron.name]: Ultron,
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,
	[WreckingCrew.name]: WreckingCrew,
	[GreenGoblin.name]: GreenGoblin,
	[NormanOsborn.name]: NormanOsborn,
	[Kang.name]: Kang,
	[Crossbones.name]: Crossbones,
	[Taskmaster.name]: Taskmaster,
	[Zola.name]: Zola,
	[RedSkull.name]: RedSkull,
	[Drang.name]: Drang,
	[Collector1.name]: Collector1,
	[Collector2.name]: Collector2,
	[Nebula.name]: Nebula,
	[Ronan.name]: Ronan,
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
