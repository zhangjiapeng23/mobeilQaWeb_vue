<template>
  <div class="project-list">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <bread-crumb id="deeplink-nav"></bread-crumb>
        </div>
        <div class="col-md-4 text-right">
          <div v-show="this.$route.name === ':deeplinkProject'">
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
              <button class="add-icon-button" v-b-modal="'add-project'">
                <img src="~assets/imgs/common/icons8-add-new-80.png" class="add-icon">
              </button>
              <b-modal id="add-project" title="Add Project" centered>
                <label>Name: </label><b-form-input id="project-name"></b-form-input>
                <label>Scheme: </label><b-form-input id="project-scheme"></b-form-input>
                <template v-slot:modal-footer>
                  <b-btn variant="info" @click="hideModal('add-project')">CANCEL</b-btn>
                  <b-btn variant="success" @click="">OK</b-btn>
                </template>
              </b-modal>


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

import {getProjects, addProject} from "network/deeplink";

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
    addProject() {
      const projectName = document.getElementById('project-name');
      const projectScheme = document.getElementById('project-scheme');
      addProject(projectName, projectScheme).then(res => {
        if (res.code === 'success') {
          console.log(res)
        } else {
          alert("Add project failed, please try again later.")
          this.hideModal("add-project")
        }
      })
    },
    enterEdit() {
      this.$router.push({
        name: 'deeplinkEdit'
      })
    },
    hideModal(id) {
      this.$bvModal.hide(id);
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
  }
  .add-icon-button {
    width: 25px;
    height: 25px;
    border: none;
    padding: 0;
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


</style>