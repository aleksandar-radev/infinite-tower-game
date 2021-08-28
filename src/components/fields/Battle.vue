<template lang="">
<div class="grid w-full h-full">
  <div v-if="isBattleActive" class="grid grid-cols-2 grid-rows-3" style="grid-template-rows: 15% 55% 30%">
    <div class="grid grid-cols-2 col-span-2">
      floor {{ enemy.constructor.level }}
      <div @click="stopBattle">
        Exit battle
      </div>
    </div>


    <div class="grid grid-rows-3 bg-purple-200">
      <div>{{ player.name }}</div>
      <div>icon</div>
      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600">hp</div>
        <div :class="$style.stat" class="bg-blue-500">mp</div>
        <div :class="$style.stat" class="bg-yellow-300">atack speed</div>
      </div>


    </div>
    <div>
      {{ enemy.dmg }}
      enemy
    </div>


    <div class="col-span-2">
      skills
    </div>0

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
    startBattle() {
      this.all.startBattle();
    },
    stopBattle() {
      this.all.stopBattle();
    }
  },
  data() {
    const all = this.$x
    const player = all.player
    return {
      all,
      player
    };
  },
  created() {
    return {};
  },
  computed: {
    isBattleActive() {
      return this.all.isBattleActive;
    },
    enemy() {
      return this.all.enemies.getRandomEnemy()
    }
  }
};
</script>

<style module lang="scss">
.stat {
  width: 13rem;
  margin: 1px;
  text-align: center;
}
</style>
