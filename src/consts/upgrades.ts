import {Upgrades as blackpanther} from "@/consts/upgrades/heroes/blackpanther";
import {Upgrades as aggression} from "@/consts/upgrades/aggression";
import {Upgrades as general} from "@/consts/upgrades/general";
import {Upgrades as protection} from "@/consts/upgrades/protection";
import {Upgrades as justice} from "@/consts/upgrades/justice";
import {Upgrades as leadership} from "@/consts/upgrades/leadership";
import {Upgrades as ironman} from "@/consts/upgrades/heroes/ironman";
import {Upgrades as hawkeye} from "@/consts/upgrades/heroes/hawkeye";
import {Upgrades as captainamerica} from "@/consts/upgrades/heroes/captainamerica";
import {Upgrades as scarlet_witch} from "@/consts/upgrades/heroes/scarletwitch";
import {Upgrades as spider_man} from "@/consts/upgrades/heroes/spider-man";
import {Upgrades as spider_woman} from "@/consts/upgrades/heroes/spider-woman";
import {Upgrades as captainmarvel} from "@/consts/upgrades/heroes/captainmarvel";
import {Upgrades as doctorstrange} from "@/consts/upgrades/heroes/doctorstrange";
import {Upgrades as hulk} from "@/consts/upgrades/heroes/hulk";
import {Upgrades as she_hulk} from "@/consts/upgrades/heroes/she-hulk";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";

function addUpgrades (upgrades : Upgrade[]) {
	upgrades.forEach((upgrade) => {
		UpgradesMap[upgrade.name] = upgrade
	})
}

export const UpgradesMap : Record<string, Upgrade> = {}

addUpgrades(ironman)
addUpgrades(blackpanther)
addUpgrades(aggression)
addUpgrades(general)
addUpgrades(protection)
addUpgrades(justice)
addUpgrades(leadership)
addUpgrades(captainmarvel)
addUpgrades(scarlet_witch)
addUpgrades(spider_man)
addUpgrades(spider_woman)
addUpgrades(she_hulk)
addUpgrades(hawkeye)
addUpgrades(doctorstrange)
addUpgrades(captainamerica)
addUpgrades(hulk)

export const UpgradesList = Object.keys(UpgradesMap).map(key => {
	return UpgradesMap[key]
}).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

export const UpgradeCategoriesList : UpgradeCategory[] = [
	'Aggression',
	'Leadership',
	'Protection',
	'Justice',
	'Heroic',
	'General'
]
