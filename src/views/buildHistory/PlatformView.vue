<template>
    <div class="platforn-view">
        <bread-crumb></bread-crumb>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <ul class="nav flex-column system-list">
                        <li class="nav-item">
                          <a class="nav-link active" href="/projectinfo/Android">Android</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/projectinfo/iOS">iOS</a>
                        </li>   
                        <li>
                            <img :src="systemLogo" width="100px" height="100px">
                        </li>
                    </ul>

                   
                </div>
                
                <div class="col-md-10"><router-view class="project-list"></router-view></div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import BreadCrumb from 'components/content/BreadCrumb'
    import Platformlist from 'views/buildHistory/PlatformList'

    export default {
        name: 'PlatformView',
        components: {
            BreadCrumb,
            Platformlist
        },

        data() {
            return {

            };
        },
        computed: {
            systemLogo() {
                if (this.$route.params.system === 'Android') {
                    return require("assets/img/project_info/Android_icon.png")
                } else {
                    return require("assets/img/project_info/iOS_icon.png")
                }
            }
        },

        methods: {

        },
    };
</script>

<style>
    .system-list {
        border: 1px lightgrey solid;
        height: 400px;
    }
    
    .project-list {
        border: 1px lightgrey solid;
    }
</style>