import {Player} from "@/types/player";

export const getHealAmount = (player : Player) : number => {
	const missing = player.hero.startingHP - player.currentHP
	if (missing <= 0) {
		return 0
	}

	return Math.ceil(missing * 0.75)
}
