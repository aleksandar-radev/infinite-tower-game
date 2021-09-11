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
      <div class="text-center">{{ player.name }}</div>

      <div class="bg-pink-500 w-40 h-40 rounded-full justify-self-center"></div>

      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600" 
        :style="`background: linear-gradient(90deg, #FFC0CB ${player.hp / player.totalHp * 100}%, rgba(221, 214, 254, var(--tw-bg-opacity)) 0%)`">
        {{ `${player.hp} / ${player.totalHp}` }} HP
        </div>
        <div :class="$style.stat" class="bg-blue-500">{{ `${player.currentMp} / ${player.mp}` }} MP</div>
        <div :class="$style.stat" class="grid">
          <div class="absolute">Atack speed</div>
          <div class="apsBar h-full" :style="`animation-duration: ${player.aps}ms`" @animationiteration="atack(player, enemy)"></div>
        </div>
      </div>
    </div>

    <div class="grid grid-rows-3 bg-purple-200" style="grid-template-rows: 15% 50% 35%">
      <div class="text-center">{{ enemy.name }}</div>

      <div class="bg-pink-500 w-40 h-40 rounded-full justify-self-center"></div>

      <div class="grid justify-center">
        <div :class="$style.stat" class="bg-green-600"
        :style="`background: linear-gradient(90deg, #FFC0CB ${enemy.hp / enemy.totalHp * 100}%, rgba(221, 214, 254, var(--tw-bg-opacity)) 0%)`">
        {{ `${enemy.hp} / ${enemy.totalHp}` }} HP
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
//  import MenuItem from './GameHeaderMenuItem.vue'

export default {
  name: 'GoldUpgrades',
  components: {},
  props: {},
  methods: {},
  data () {
    return {}
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
