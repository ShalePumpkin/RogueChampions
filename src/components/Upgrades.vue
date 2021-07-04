<template>
  <div>
    <h1>List of Upgrades</h1>
    <div>Available for debugging stuff.</div>
    <div v-for="(cat, catidx) in categories" :key="catidx" class="upgrade-category-x">
      <h2 class="banger" :class="{pink: cat.heroic, blue: !cat.heroic}">{{cat.name}}</h2>
      <div v-for="(upgrade, idx) in cat.upgrades"
       :key="idx"
       class="upgrade-info"
       >
        <div class="toggle-levels">
          <button @click="up(catidx, idx)">Up</button>
          <button @click="down(catidx, idx)">Down</button>
        </div>
        <Upgrade :upgrade="upgrade" />
        <div v-if="upgrade.level != upgrade.maxLevel" class="upgrade-msg" v-html="upgrade.levelUpMessage()"></div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {UpgradesList} from "@/consts/upgrades";
import Upgrade from "@/components/Upgrade.vue";

export default Vue.extend({
  data () {
    let catIndex = -1
    let prevCat = ''
    const cats : any[]  = []
    let whatever : any[] = UpgradesList.map((upgrade) : any => {
      const newT : any = {
        ...upgrade,
      }
      newT.catName = upgrade.requiresHero ? upgrade.requiresHero : upgrade.category
      return newT
    })
    whatever = whatever.sort((a, b) => {
      return a.catName > b.catName ? 1 : -1
    })

    whatever.forEach((upgrade) => {
      if (upgrade.catName != prevCat) {
        cats.push({
          name: upgrade.catName,
          upgrades: [],
          heroic: !!upgrade.requiresHero
        })
        prevCat = upgrade.catName
        catIndex++
      }
      cats[catIndex].upgrades.push(upgrade)
    })

    return {
      categories: cats
    }
  },
  components: {
    Upgrade: Upgrade
  },
  methods: {
    down (catIdx : number, idx: number) {
      const up = this.categories[catIdx].upgrades[idx]
      if (up.level == 1) {
        return
      }

      Vue.set(this.categories[catIdx].upgrades[idx], 'level', this.categories[catIdx].upgrades[idx].level-1)
    },
    up (catIdx : number, idx: number) {
      const up = this.categories[catIdx].upgrades[idx]
      if (up.level == up.maxLevel) {
        return
      }
      Vue.set(this.categories[catIdx].upgrades[idx], 'level', this.categories[catIdx].upgrades[idx].level+1)
    }
  }
})
</script>
<style scoped>
.upgrade-info {
  padding: 10px;
  margin: 0 0 10px 0;
  border: 1px solid #333;
}

.toggle-levels {
  padding-bottom: 5px;
}
.upgrade-category-x {
  margin-bottom: 80px;
}
</style>
