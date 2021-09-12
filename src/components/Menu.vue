<template lang="">
<div class="bg-blue-400">
  <div v-for="field in $x.dom.fields" @click="setActiveField(field)">
    {{ field }}
  </div>
</div>
</template>

<script>

export default {
  name: 'Menu',
  components: {},
  props: {},
  methods: {
    setActiveField(field) {
      this.$x.stopBattle()
      this.$x.dom.setActiveField(field)
    }
  },
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
