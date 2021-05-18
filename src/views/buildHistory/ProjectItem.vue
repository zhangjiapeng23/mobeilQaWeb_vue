<template>
    <div>
        <div class="row" v-if="projectItems !== undefined && projectItems.length === 0">
            <div class="col-md-12 text-center noContent">
                <h2 >No content is available at this time.</h2>
            </div>
        </div>
        <div class="row" v-else>
            <div class="projectItem col-md-3" v-for="(item, index) in projectItems" :key="index">
                <div class="card" style="border: none; background-color: snow">
                    <div class="inner-content">
                      <img class="text-center card-img"
                           :src="item.project_logo" alt="appicon"/>
                      <a @click="enterProjectDetail(item.project_name)" class="btn btn-info text-uppercase">{{item.project_name}}</a>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import {getProjectList} from "network/projectBuildInfo";

    export default {
      name: 'ProjectItem',
      components: {},

      data() {
            return {
              systemName: this.$route.name,
              projectItems: []
            };
        },
      created() {
        this.getProjectList()
      },
      methods: {
        getProjectList() {
          getProjectList(this.systemName).then(res => {
            this.projectItems = res;
          })
        },
        enterProjectDetail(projectName) {
          this.$router.push({
            path: '/projectinfo/'+this.systemName+'/' + projectName,
            query: {
              page: 1,
              pageSize: 10
            }
          })
        }
        },
    };
</script>

<style>
    .card a {
        text-align: center;
        margin: 10px auto;
        display: block;
        min-width: 150px;
        width: fit-content;
    }
    .inner-content {
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .card-img {
        width: 80px;
        height: 80px;
        margin: auto;
        display: block;
    }
    
    .noContent {
        margin-top: 200px;
    }

    .projectItem {
      margin-bottom: 12px;
    }

</style>