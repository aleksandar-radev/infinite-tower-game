import { player } from './player'
import { misc } from './misc'
import { enemies } from './enemy'
import dom from './dom'
import { reactive } from 'vue'

export default {
  isBattleActive: false,
  player: reactive(player),
  misc: reactive(misc),
  enemies: reactive(enemies),
  dom: reactive(dom),
  startBattle () {
    this.isBattleActive = true
  },
  stopBattle () {
    this.isBattleActive = false
  }
}
