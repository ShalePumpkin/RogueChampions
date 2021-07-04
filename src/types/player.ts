import {Hero} from "@/types/hero";
import {Upgrade} from "@/types/upgrade";

export type Player = {
	name: string
	hero: Hero
	startingHP: number,
	currentHP: number,
	upgrades: Upgrade[]
}
