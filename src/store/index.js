import { player } from './player'
import { misc } from './misc'
import { enemies } from './enemy'
import dom from './dom'
import { reactive } from 'vue'

export default {
  isBattleActive: false,
  fighting: null,
  player: reactive(player),
  misc: reactive(misc),
  enemies: reactive(enemies),
  enemy: reactive(enemies.getRandomEnemy()),
  dom: reactive(dom),
  floor: 1,
  startBattle () {
    this.isBattleActive = true
    this.enemy = this.getRandomEnemy()
  },
  stopBattle (mainType) {
    clearInterval(this.fighting)
    this.floor = 1
    this.enemy = null
    this.isBattleActive = false
    this.fighting = null
    this.player.reset()
    this.enemies.resetFloor()
  },
  atack(atacker, defender) {
    defender.hp -= atacker.dmg
  },
  getRandomEnemy() {
    this.enemy = this.enemies.getRandomEnemy()
    return this.enemy
  },
  getFloorLevel() {
    return this.floor
  }
}
