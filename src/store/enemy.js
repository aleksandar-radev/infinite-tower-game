
const stat = [
  {
    name: 'Goro',
    totalHp: 334,
    hp: 70,
    dmg: 133
  },
  {
    name: 'flint',
    totalHp: 334,
    hp: 37,
    dmg: 2
  },
]

class Enemy {
  static level = 1234324
  constructor(props) {
    Object.assign(this, props)
  }
}

class Enemies {
  static floorLevel = 1
  constructor(enemies) {
    Object.assign(this, enemies)
  }
  getRandomEnemy () {
    const rand = Math.floor(Math.random() * Object.keys(this).length)
    return new Enemy(this[rand])
  }
  resetFloor() {
    this.constructor.floorLevel = 1
  }
}

const enemies = new Enemies(stat)

export { enemies }
