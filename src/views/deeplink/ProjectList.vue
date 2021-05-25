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
            <div class="card">
              <button class="delete-project" v-b-modal="item.name">
                <b-icon icon="x-circle"></b-icon>
              </button>
              <b-modal title="Delete project" :id="item.name">
                <p class="delete-description">Do you make sure delete {{item.name}} project ?</p>
                <template v-slot:modal-footer>
                  <b-btn variant="info" @click="hideModal(item.name)" size="sm">CANCEL</b-btn>
                  <b-btn variant="success" @click="deletedProject(item.name, index)" size="sm">CONFIRM</b-btn>
                </template>
              </b-modal>

              <a @click="enterProjectDetail(item.name)">
                <div class="click-area">
                  <h4 class="card-title">
                    {{item.name}}
                  </h4>
                </div>
              </a>

            </div>

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
                  <b-btn variant="info" @click="hideModal('add-project')" size="sm">CANCEL</b-btn>
                  <b-btn variant="success" @click="addDeeplinkProject" size="sm" style="width: 75px">OK</b-btn>
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

import {getProjects, addProject, deleteProject} from "network/deeplink";

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
    addDeeplinkProject() {
      const projectName = document.getElementById('project-name').value;
      const projectScheme = document.getElementById('project-scheme').value;
      console.log(projectScheme, projectName)
      addProject(projectName, projectScheme).then(res => {
        if (res.code === 'success') {
          this.projectItems.push(res.data)
          this.hideModal("add-project")
        } else {
          this.hideModal("add-project")
          alert("Add project failed, please try again later.")
        }
      })
    },
    deletedProject(project, index) {
      deleteProject(project).then(res => {
        if (res.code == 'success') {
          this.projectItems.splice(index, 1);
          this.hideModal(project)
        } else {
          this.hideModal(project);
          alert("Delete Failed, please try again later.")
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
  .click-area {
    width: 250px;
    height: 255px;
  }
  .card-title {
    margin-top: 85px;
    text-align: center;
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
  .delete-project {
    border: none;
    background-color: transparent;
    width: 25px;
    height: 25px;
    margin-left: 220px;
  }
  .delete-description {
    word-break: break-all;
    margin-bottom: 40px;
  }


</style>