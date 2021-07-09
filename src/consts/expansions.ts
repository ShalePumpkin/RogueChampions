import {Expansion} from "@/types/expansion";

export const CoreSet : Expansion = {name: 'Core Set'}
export const RiseOfRedSkull : Expansion = {name: 'The Rise of Red Skull'}
export const GalaxysMostWanted : Expansion = {name: "Galaxy's Most Wanted"}

// Bad guys
export const GreenGoblin : Expansion = {name: 'Green Goblin'}
export const WreckingCrew : Expansion = {name: 'Wrecking Crew'}
export const Kang : Expansion = {name: 'The Once and Future Kang'}

// Good guys
export const CaptainAmerica : Expansion = {name: 'Captain America'}
export const BlackWidow : Expansion = {name: 'Black Widow'}
export const Thor : Expansion = {name: 'Thor'}
export const ScarletWitch : Expansion = {name: 'Scarlet Witch'}
export const MsMarvel : Expansion = {name: 'Ms. Marvel'}
export const Hulk : Expansion = {name: 'Hulk'}
export const DoctorStrange : Expansion = {name: 'Doctor Strange'}
export const AntMan : Expansion = {name: 'Ant-man'}
export const Wasp : Expansion = {name: 'Wasp'}
export const Quicksilver : Expansion = {name: 'Quicksilver'}
export const StarLord : Expansion = {name: 'Star-Lord'}
export const Gamora : Expansion = {name: 'Gamora'}
export const Drax : Expansion = {name: 'Drax'}

export const ExpansionsMap : Record<string, Expansion> = {
	// Expansions
	[CoreSet.name]: CoreSet,
	[RiseOfRedSkull.name]: RiseOfRedSkull,
	[GalaxysMostWanted.name]: GalaxysMostWanted,

	// Villain packs
	[GreenGoblin.name]: GreenGoblin,
	[WreckingCrew.name]: WreckingCrew,
	[Kang.name]: Kang,

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
