<template>
    <div>
      <div v-if="this.$route.matched.length == 2">
        <project-item></project-item>
      </div>
      <div v-else>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    import ProjectItem from 'views/buildHistory/ProjectItem'
    import ProjectDetail from "./ProjectDetail";

    export default {
        name: 'Platformlist',
        components: {
          ProjectItem,
          ProjectDetail
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