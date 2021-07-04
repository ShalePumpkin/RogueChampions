<template>
  <div class="mission-notches">
    <div v-for="(mission, idx) in missions"
         :key="idx"
         class="notch"
         :class="{
                 active: mission.active,
                 battling: mission.battling,
                 won: mission.won
               }">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import {mapState} from "vuex"

export default Vue.extend({
  name: 'MissionSlots',
  computed: {
    ...mapState(['activeGameIndex', 'numGames', 'games', 'phase']),
    ...{
      missions () : any[] {
        const missions = []
        const current = this.activeGameIndex
        for (let i = 0; i < this.numGames; i++) {
          missions.push({
            active: i == current,
            won: i < current,
            battling: this.phase === 'battling'
          })
        }
        return missions
      }
    }
  }
})
</script>
