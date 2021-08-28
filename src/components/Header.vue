<template lang="">
<div class="bg-red-400">
  <ul class="grid grid-cols-5">
    <li>Gold</li>
    <li>crystals</li>
    <li>level</li>
    <li>soul lvl</li>
    <li>rebirth stones</li>
  </ul>
</div>
</template>

<script>
//  import MenuItem from './GameHeaderMenuItem.vue'

export default {
  name: 'Header',
  components: {},
  props: {},
  methods: {},
  data () {
    
    return {
      gold: this.$store.misc.gold,
      crystals: this.$store.misc.crystals
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
