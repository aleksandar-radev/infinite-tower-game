<template lang="">
<div class="bg-green-400">
  <component :is="getActiveField()"></component>
</div>
</template>

<script>
import Battle from './fields/Battle.vue'

export default {
  name: 'Field',
  components: {
    Battle,
  },
  props: {},
  methods: {
    getActiveField () {
      return this.activeField
    }
  },
  data () {
    return {
      activeField: this.$x.dom.active
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
