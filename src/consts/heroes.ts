import {Hero} from "@/types/hero";
import {CoreSet, RiseOfRedSkull} from "@/consts/expansions";

export const BlackPanther : Hero = {
	name: 'Black Panther',
	requires: CoreSet.name,
	startingHP: 11,
}

export const BlackWidow : Hero = {
	name: 'Black Widow',
	requires: 'Black Widow',
	startingHP: 9,
}

export const CaptainAmerica : Hero = {
	name: 'Captain America',
	requires: 'Captain America',
	startingHP: 11,
}

export const CaptainMarvel : Hero = {
	name: 'Captain Marvel',
	requires: CoreSet.name,
	startingHP: 12,
}

export const DoctorStrange : Hero = {
	name: 'Doctor Strange',
	requires: 'Doctor Strange',
	startingHP: 10,
}

export const Hawkeye : Hero = {
	name: 'Hawkeye',
	startingHP: 9,
	requires: RiseOfRedSkull.name,
}

export const Hulk : Hero = {
	name: 'Hulk',
	requires: 'Hulk',
	startingHP: 18,
}

export const IronMan : Hero = {
	name: 'Iron Man',
	requires: CoreSet.name,
	startingHP: 9,
}

export const MsMarvel : Hero = {
	name: 'Ms. Marvel',
	requires: 'Ms. Marvel',
	startingHP: 19,
}

export const SheHulk : Hero = {
	name: 'She-Hulk',
	requires: CoreSet.name,
	startingHP: 15,
}

export const SpiderMan : Hero = {
	name: 'Spider-Man',
	requires: CoreSet.name,
	startingHP: 10,
}


export const SpiderWoman : Hero = {
	name: 'Spider-Woman',
	startingHP: 11,
	requires: RiseOfRedSkull.name,
}


export const Thor : Hero = {
	name: 'Thor',
	requires: 'Thor',
	startingHP: 14,
}

export const ScarletWitch : Hero = {
	name: 'Scarlet Witch',
	requires: 'Scarlet Witch',
	startingHP: 10,
}

export const HeroesMap : Record<string, Hero> = {
	[BlackPanther.name]: BlackPanther,
	[BlackWidow.name]: BlackWidow,
	[CaptainAmerica.name]: CaptainAmerica,
	[CaptainMarvel.name]: CaptainMarvel,
	[DoctorStrange.name]: DoctorStrange,
	[Hawkeye.name]: Hawkeye,
	[Hulk.name]: Hulk,
	[IronMan.name]: IronMan,
	[MsMarvel.name]: MsMarvel,
	[ScarletWitch.name]: ScarletWitch,
	[SheHulk.name]: SheHulk,
	[SpiderMan.name]: SpiderMan,
	[SpiderWoman.name]: SpiderWoman,
	[Thor.name]: Thor,
}

export const HeroesList = Object.keys(HeroesMap).
	map(key => {
		HeroesMap[key].cssClass = HeroesMap[key].name.split(' ').join('-').toLowerCase()
		return HeroesMap[key]
	}).
	sort((a,b) => {
		return a.name < b.name ? -1 : 1
	})
