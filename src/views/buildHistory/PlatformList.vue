<template>
    <div>
      <div v-if="this.$route.matched.length == 2">
        <project-item></project-item>
      </div>
      <div v-else>
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
</template>

<script>
    import ProjectItem from 'views/buildHistory/ProjectItem'

    export default {
        name: 'Platformlist',
        components: {
          ProjectItem
        },
        props: {
        },
        data() {
            return {
                platformName: this.$route.name
            };
        },
        computed: {

        },
        methods: {

        },
    };
</script>

<style>

</style>