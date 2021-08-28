<template>
<div class="grid bg-red-100 w-full h-full" style="grid-template-rows: 10% 90%; grid-template-columns: 15% 85%">
  <Header class="col-span-2 mt-6 ml-6 mr-6"/>
  <Menu class="m-6 mr-0"/>
  <Field class="m-6"/>
</div>
</template>

<script>
import Field from './components/Field.vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Field
  },
  data () {
    return {
      x: 1
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 1200px;
  height: 800px;
  border: 5px solid black
}
</style>
