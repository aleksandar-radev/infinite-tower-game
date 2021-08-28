class Enemy {
  static level = 1234324
  constructor(props) {
    this.dmg = props.dmg
  }
}

const enemies = {
  assasin: new Enemy({
    dmg: 13
  }),
  fighter: new Enemy({
    dmg: 2
  }),
  getRandomEnemy () {
    return this.assasin
  }
}

export { Enemy, enemies }
