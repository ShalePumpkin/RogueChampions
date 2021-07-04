export type DowntimeActionType = 'heal' | 'upgrade'

export type DowntimeAction = {
	type: DowntimeActionType
	upgradeName?: string
}