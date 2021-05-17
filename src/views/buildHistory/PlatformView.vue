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
              <div class="col-md-10" style="border-left: 1px lightgray solid;">
                <div class="row">
                  <div class="breadCrumb col-md-12">
                    <bread-crumb class="bread-crumb-build"></bread-crumb>
                    <img :src="systemLogo" class="system-logo">
                    <hr>
                  </div>

                  <div class="col-md-12">
                    <router-view class="project-list">
                    </router-view>
                  </div>

                </div >
              </div>
                </div>

        </div>
        
    </div>
</template>

<script>
    import Platformlist from './PlatformList';
    import BreadCrumb from 'components/content/BreadCrumb';

    export default {
      name: 'PlatformView',
      components: {
          Platformlist,
          BreadCrumb
        },
      computed: {
            systemLogo() {
                if (this.system === 'Android') {
                    return require("assets/imgs/project_info/Android_icon.png")
                } else {
                    return require("assets/imgs/project_info/iOS_icon.png")
                }
            },
            system() {
                return this.$route.matched[1].name;
            }
        },
      methods: {

        },
    };
</script>

<style>
    .system-list {
        padding-top: 4px;
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
    hr {
      margin-top: 0;
      clear: both;
    }
    .system-logo {
      margin-top: 12px;
      margin-right: 30px;
      float: right;
      width: 25px;
      height: 25px;
    }
    .bread-crumb-build {
      float: left;
    }
</style>