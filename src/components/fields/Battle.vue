<template lang="">
<div class="grid w-full h-full">
  <div v-if="isBattleActive" class="grid grid-cols-2 grid-rows-3" style="grid-template-rows: 15% 55% 30%">
    <div class="grid grid-cols-2 col-span-2">
      floor {{ all.getFloorLevel() }}
      <div @click="all.stopBattle">
        Exit battle
      </div>
    </div>

    <div class="grid grid-rows-3 bg-purple-200" style="grid-template-rows: 15% 50% 35%">
      <div class="text-center">{{ all.player.name }}</div>

      <div class="bg-pink-500 w-40 h-40 rounded-full justify-self-center"></div>

      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600" 
        :style="`background: linear-gradient(90deg, #FFC0CB ${all.player.hp / all.player.totalHp * 100}%, rgba(221, 214, 254, var(--tw-bg-opacity)) 0%)`">
        {{ `${all.player.hp} / ${all.player.totalHp}` }} HP
        </div>
        <div :class="$style.stat" class="bg-blue-500">{{ `${all.player.currentMp} / ${all.player.mp}` }} MP</div>
        <div :class="$style.stat" class="grid">
          <div class="absolute">Atack speed</div>
          <div class="apsBar h-full" :style="`animation-duration: ${all.player.aps}ms`" @animationiteration="atack(all.player, all.enemy)"></div>
        </div>
      </div>
    </div>

    <div class="grid grid-rows-3 bg-purple-200" style="grid-template-rows: 15% 50% 35%">
      <div class="text-center">{{ all.enemy.name }}</div>

      <div class="bg-pink-500 w-40 h-40 rounded-full justify-self-center"></div>

      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600"
        :style="`background: linear-gradient(90deg, #FFC0CB ${all.enemy.hp / all.enemy.totalHp * 100}%, rgba(221, 214, 254, var(--tw-bg-opacity)) 0%)`">
        {{ `${all.enemy.hp} / ${all.enemy.totalHp}` }} HP
        </div>
        <div :class="$style.stat" class="bg-blue-500">skill</div>
        <div :class="$style.stat" class="bg-yellow-300">atack speed</div>
      </div>
    </div>

    <div class="col-span-2">
      skills
    </div>

  </div>


  <div v-if="!isBattleActive" class="grid justify-center align-middle" @click="all.startBattle">
    <div class="m-auto h-auto bg-green-100 p-16 rounded-3xl">Click to start the battle!</div>
  </div>
</div>
</template>

<script>
// starting button might show the background transparently

export default {
  name: "Battle",
  components: {},
  props: {},
  methods: {
    atack(atacker, defender) {
      this.all.atack(atacker, defender)
      this.showDmg(atacker.dmg)
      if(defender.hp <= 0) {
        this.all.floor++
        this.enemy = this.all.getRandomEnemy()
      }
    },
    showDmg(dmg) {
      console.log(this.$el)
      const dmgSpan = document.createElement('span')
      dmgSpan.classList.add('absolute', 'damage-float')
      dmgSpan.style.left = '800px'
      dmgSpan.style.top = '400px'
      dmgSpan.style.opacity = '0'
      dmgSpan.style.animation = 'damage-float 2s linear alternate 1'
      dmgSpan.textContent = dmg
      this.$el.appendChild(dmgSpan)
    }
  },
  data() {
    const all = this.$x
    return {
      all
    };
  },
  created() {
    return {};
  },
  computed: {
    isBattleActive() {
      return this.all.isBattleActive;
    }
  }
};
</script>

<style module lang="scss">
.stat {
  height: 2rem;
  width: 13rem;
  margin: 4px;
  text-align: center;
}
</style>

<style>
.apsBar {
  /* animation-name: apsBar; */
  /* animation-delay: 1s; */
  /* animation-iteration-count: infinite;
  animation-timing-function: linear; */
  animation: apsBar 1s linear 1s infinite;
}

@keyframes apsBar {
  from {
    width: 0;
    background: red;
  }
  to {
    width: 13rem;
    background: yellow;
  }
}

@keyframes damage-float {
  0% {  
    transform: translateY(0px);
     opacity: 1;
  }
  100% {
    transform: translateY(-100px);
     opacity: 0.3;
  }
}

</style>