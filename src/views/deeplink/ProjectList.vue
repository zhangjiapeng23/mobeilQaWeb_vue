<template>
  <div class="project-list">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <bread-crumb id="deeplink-nav"></bread-crumb>
        </div>
        <div class="col-md-4 text-right">
          <div v-if="this.$route.name === 'deeplinkEdit'">
            <b-btn-group class="btn-group-sm">
              <b-btn class="btn-primary">Edit Project</b-btn>
              <b-btn class="btn-info">Add Deeplink</b-btn>
            </b-btn-group>
          </div>
          <div v-else-if="this.$route.name === ':deeplinkProject'">
            <a class="btn btn-info btn-sm" @click="enterEdit">Edit</a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="this.$route.matched.length===1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <hr>
          </div>
          <div class="col-md-3" v-for="(item, index) in projectItems" :key="index">
            <a @click="enterProjectDetail(item.name)">
              <div class="card">
                <h4 class="card-title">
                  {{item.name}}
                </h4>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="~assets/imgs/common/icons8-add-new-80.png" class="add-icon">
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
import BreadCrumb from "components/content/BreadCrumb";

import {getProjects} from "network/deeplink";

export default {
  name: "ProjectList",
  data() {
    return {
      projectItems: []
    }
  },
  created() {
    this.getProjects()
  },
  methods: {
    enterProjectDetail(project) {
      this.$router.push({
        name: ":deeplinkProject",
        params: {
          deeplinkProject: project
        }
      })
    },
    getProjects() {
      getProjects().then(res => {
        this.projectItems = res;
      })
    },
    enterEdit() {
      this.$router.push({
        name: 'deeplinkEdit'
      })
    }
  },
  components: {
    BreadCrumb
  }
}
</script>

<style scoped>
  #deeplink-nav {
    padding-bottom: 0px;
  }
  hr {
    margin-top: 0px;
  }
  .card {
    width: 250px;
    height: 280px;
    background-color: snow;
  }
  .card-title {
    margin: auto auto;
  }
  .add-icon {
    width: 25px;
    height: 25px;
    margin: auto auto;
  }
  .col-md-3 {
    margin-bottom: 17px;
  }
  a:hover{
    text-decoration: none;
  }
  .btn-sm {
    margin-top: 8px;
  }
  .btn-group-sm {
    margin-top: 8px;
  }

</style>