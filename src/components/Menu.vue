<template lang="">
<div class="bg-blue-400">
  <ul>
    <li>Battle</li>
    <li @click="setActiveField" >GoldUpgrades</li>
    <li>asdf</li>
    <li>asdfasdf</li>
    <li>asdfasdf</li>
    <li>asdfasdf</li>
    <li>asdfasdf</li>
    <li>asdfasdf</li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'Menu',
  components: {},
  props: {},
  methods: {
    setActiveField() {
      console.log(this.$x.dom.activeField)
      this.$x.dom.setActiveField('GoldUpgrades')
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
