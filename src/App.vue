<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import IndexView from 'views/indexView/IndexView'

export default {
  name: 'App',
  components: {
    IndexView
  }
}
</script>

<style>

</style>
