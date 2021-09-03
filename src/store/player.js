class Player {
  constructor () {
    this.name = "Evil 1"
    this.dmg = 10
    this.level = 1
    this.aps = 1_000

    this.totalHp = 100
    this.hp = 100
    this.totalMp = 50
    this.mp = 50
  }
  reset() {
    this.hp = this.totalHp
    this.mp = this.totalMp
  }
}

const player = new Player()

export { player }
