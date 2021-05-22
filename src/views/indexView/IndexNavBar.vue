<template>
  <div class="index-nav-bar">
    <nav-bar>
      <template slot="left-align">
        <b-nav-item v-for="item in navBarItem.show" :key="item.title"  :href="item.url">{{item.title}}</b-nav-item>
      </template>

      <template slot="right-align">
        <b-nav-item-dropdown text="Other Link" right>
          <b-dropdown-item v-for="item in navBarItem.flod" :key="item.title" :href="item.url">{{item.title}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </template>
    </nav-bar>
      
</div>
  
</template>

<script>
import NavBar from 'components/content/NavBar.vue'

export default {
    name: 'IndexNavBar',
    props: {
      navBarItem: {
        type: Object,
        default() {
          return {
            show: [],
            flod: []
          }
        }
      }
    },
    components: {
      NavBar
    }
}
</script>

<style scoped>

</style>