<template>
  <div class="app-review-projects">
    <div class="row">
      <div class="col-md-3 project-item" v-for="(item, index) in projectItems" :key="index">
       <div class="card text-center">
         <img :src="item.project_logo" class="inner-img card-img">
         <div class="card-body">
           <h3 class="card-title" style="margin-bottom: 0px">{{item.project_name}}</h3>
           <div class="button-group">
             <a class="btn btn-light" style="border: lightgray 1px solid"
                :href="system === 'Android'?item.android_origin:item.ios_origin" target="_blank">Origin</a>
             <a class="btn btn-info" style="border: lightgray 1px solid" @click="enterProjectDetail(item.project_name)">Enter</a>
           </div>
         </div>
       </div>
      </div>

      <div class="col-md-3 project-item">
        <div class="card">
          <a href="/appReviewRegister" class="add-project">
            <img src="~assets/imgs/common/icons8-add-new-80.png" style="width: 40px; height: 40px;">
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {getProjectList} from "network/appReview";

export default {
  name: "ProjectItem",
  created() {
    this.getProjectList();
  },
  methods: {
    getProjectList() {
      getProjectList().then(res => {
        this.projectItems = res;
      })
    },
    enterProjectDetail(projectName) {
      this.$router.push({
        path: this.$route.path + '/' + projectName,
        query: {
          format: 'json',
          page: 1,
          pageSize: 10
        }
      }
      )
    }
  },
  data() {
    return {
      projectItems: [],
      system: this.$route.matched[1].meta.name
    }
  }

}
</script>

<style scoped>
  .card {
    width: 280px;
    height: 320px;
    background-color: snow;
  }
  .inner-img {
    width: 180px;
    height: 180px;
    margin: 5px auto;
  }
  .button-group a {
    margin-left: 5px;
    margin-right: 5px;
    border: lightgray 1px solid;
    width: 85px;
  }
  .add-project {
    margin: auto;
  }
  .project-item {
    margin-bottom: 10px;
  }

</style>