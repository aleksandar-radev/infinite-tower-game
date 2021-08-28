import { player } from './player'
import { misc } from './misc'
import { enemy } from './enemy'
import { reactive } from 'vue'

export default {
  isBattleActive: false,
  player: reactive(player),
  misc: reactive(misc),
  enemy: reactive(enemy),
}
