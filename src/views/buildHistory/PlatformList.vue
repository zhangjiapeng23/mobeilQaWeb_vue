<template>
    <div>
        <bread-crumb></bread-crumb>
        <hr>
        <div>
            <project-item :projectItems="projectItems"></project-item>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from 'components/content/BreadCrumb'
    import ProjectItem from 'views/buildHistory/ProjectItem'

    export default {
        name: 'Platformlist',
        components: {
            BreadCrumb,
            ProjectItem
        },

        data() {
            return {
                platformName: this.$route.name,
                projectItems: [{
                    "imgUrl": require("assets/img/project_info/CNTV.png"),
                    "url": "/test",
                    "projectName": "james"
                }, {
                    "imgUrl": require("assets/img/project_info/CNTV.png"),
                    "url": "/test",
                    "projectName": "james124"
                }]
            };
        },
        mounted() {

        },
        methods: {

        },
    };
</script>

<style>
    hr {
        margin-top: 0;
        margin-bottom: 60px;
    }
</style>