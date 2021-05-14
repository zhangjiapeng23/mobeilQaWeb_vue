<template>
    <div class="platforn-view">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <ul class="nav flex-column system-list">
                        <li class="nav-item"><a class="nav-link disabled" href="#">
                            <h3>Platform</h3>
                        </a>
                    </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/projectinfo/Android" :class="{active: system === 'Android'}">Android</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/projectinfo/iOS" :class="{active: system === 'iOS'}">iOS</a>
                        </li> 
                    </ul>
                   
                </div>
                <div class="col-md-10"><router-view class="project-list"></router-view></div>
                <div class="col-md-2">
                    <div class="system-logo">
                        <img :src="systemLogo" width="40px" height="40px">
                    </div>  
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import Platformlist from 'views/buildHistory/PlatformList'

    export default {
        name: 'PlatformView',
        components: {
            Platformlist
        },

        data() {
            return {

            };
        },
        computed: {
            systemLogo() {
                if (this.$route.name === 'Android') {
                    return require("assets/img/project_info/Android_icon.png")
                } else {
                    return require("assets/img/project_info/iOS_icon.png")
                }
            },
            system() {
                return this.$route.name
            }
        },

        methods: {

        },
    };
</script>

<style>
    .system-list {
        height: 400px;
        border-right: 1px solid lightgrey;
        padding-top: 4px;
    }
    
    .system-logo {
        padding-top: 80px;
        padding-bottom: 10px;
        border-right: 1px solid lightgrey;
    }
    
    .system-logo img {
        margin-left: 16px;
    }
    
    .system-list .nav-link {
        font-size: 20px;
    }
    
    li a:hover {
        color: gray;
    }
    
    .flex-column a {
        color: gray;
    }
    
    .flex-column .active {
        color: black;
    }
    
    h3 {
        margin-bottom: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
</style>