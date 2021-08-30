<template lang="">
<div class="grid w-full h-full">
  <div v-if="isBattleActive" class="grid grid-cols-2 grid-rows-3" style="grid-template-rows: 15% 55% 30%">
    <div class="grid grid-cols-2 col-span-2">
      floor {{ enemy.constructor.level }}
      <div @click="stopBattle">
        Exit battle
      </div>
    </div>


    <div class="grid grid-rows-3 bg-purple-200" style="grid-template-rows: 15% 50% 35%">
      <div class="text-center">{{ player.name }}</div>

      <div class="bg-pink-500 w-40 h-40 rounded-full justify-self-center"></div>

      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600">hp</div>
        <div :class="$style.stat" class="bg-blue-500">mp</div>
        <div :class="$style.stat" class="grid">
          <div class="absolute">Atack speed</div>
          <div class="apsBar h-full" @animationiteration="loll"></div>
        </div>
      </div>
    </div>



    <div class="grid grid-rows-3 bg-purple-200" style="grid-template-rows: 15% 50% 35%">
      <div class="text-center">{{ "enemy" }}</div>

      <div class="bg-pink-500 w-40 h-40 rounded-full justify-self-center"></div>

      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600">hp</div>
        <div :class="$style.stat" class="bg-blue-500">skill</div>
        <div :class="$style.stat" class="bg-yellow-300">atack speed</div>
      </div>
    </div>


    <div class="col-span-2">
      skills
    </div>

  </div>


  <div v-if="!isBattleActive" class="grid justify-center align-middle" @click="this.startBattle">
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
    loll() {
      console.log('asdfa')
    },
    startBattle() {
      this.all.startBattle()
    },
    stopBattle() {
      this.all.stopBattle();
    }
  },
  data() {
    const all = this.$x
    const player = all.player
    const enemy = all.enemy
    return {
      all,
      player,
      enemy
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
  animation-duration: 1s;
  animation-name: apsBar;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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
</style>