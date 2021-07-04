import {Challenge} from "@/types/challenge";
import {randomItem} from "@/lib/random";
import {DF_STEP_LARGE, DF_STEP_MED, DF_STEP_SMALL} from "@/consts/difficulty";

export const Devious : Challenge = {
	name: 'Devious',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player discards cards from the encounter deck until they find a Treachery. In player order, resolve the treacheries.`
}

export const Resilient : Challenge = {
	name: 'Resilient',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Increase the villain's max hit points by 8 for each player this stage.`
}

export const Ambush : Challenge = {
	name: 'Ambush',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Each player discards an encounter card and takes damage equal to the number of boost icons on it.`
}

export const Master : Challenge ={
	name: 'Master',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player discards encounter cards until they reveal a minion. Engage that minion, but ignore any of its "When Revealed" or Surge effects.`
}

export const Tenacious : Challenge = {
	name: 'Tenacious',
	difficulty: DF_STEP_LARGE,
	description: `<strong>Setup:</strong> Place an acceleration token on the main scheme.`
}

export const Dangerous : Challenge = {
	name: 'Dangerous',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Deal each player an encounter card.`
}

export const ChallengesList = [Devious,
	Resilient,
	Ambush,
	Master,
	Tenacious,
	Dangerous,
]

export const randomChallenge = () : Challenge => {
	return randomItem(ChallengesList)
}
