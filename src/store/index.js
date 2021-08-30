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
  startBattle () {
    this.isBattleActive = true
    
    
    this.fighting = setInterval(() => {
      // document.querySelector('.apsBar').addEventListener('animationend', () => {
      //   console.log("END")
      //   this.atack()
      // })
     }, 1000)
    console.log(this.fighting)
  },
  stopBattle (mainType) {
    clearInterval(this.fighting)
    this.isBattleActive = false
    this.fighting = null
  },
  atack() {
    console.log('hit')
  },
  getEnemy() {
    this.enemies.getRandomEnemy()
  }
}
