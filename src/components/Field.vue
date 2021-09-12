<template lang="">
<div class="bg-green-400">
  <component :is="getActiveField()"></component>
</div>
</template>

<script>
import Battle from './fields/Battle.vue'
import GoldUpgrades from './fields/GoldUpgrades.vue'
import Statistics from './fields/Statistics.vue'

export default {
  name: 'Field',
  components: {
    Battle,
    GoldUpgrades,
    Statistics
  },
  props: {},
  methods: {
    getActiveField () {
      // return 'GoldUpgrades'
      return this.$x.dom.activeField
    }
  },
  data () {
    return {
      
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
