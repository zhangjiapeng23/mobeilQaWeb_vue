<template>
  <div id="project-cards" class="row">
      <div class="col-md-3 col-sm-12" v-for="(item, index) in projectList" :key="index">
        <div class="card">
          <button class="delete-project" v-b-modal="'delete-'+item.nid">
            <b-icon icon="x-circle"></b-icon>
          </button>
          <b-modal title="Delete Project" :id="'delete-'+item.nid">
            <p class="delete-msg">Do you make sure to delete {{item.name}} project?</p>
            <template v-slot:modal-footer>
              <b-btn variant="info" size="sm" @click="hideModal('delete-'+item.nid)">CANCEL</b-btn>
              <b-btn variant="success" size="sm" @click="deleteProject(item.nid, index)" style="width: 70px">OK</b-btn>
            </template>
          </b-modal>

          <a @click="enterProjectDetail(item.name)">
            <div class="click-area">
              <h3 class="project-name">{{item.name}}</h3>
            </div>
          </a>
        </div>
      </div>

    <div class="col-md-3 col-sm-12">
      <div class="card">
        <button class="add-icon-button" v-b-modal="'add-project'">
          <img src="~assets/imgs/common/icons8-add-new-80.png" class="add-icon">
        </button>

        <b-modal id="add-project" title="Add project">
          <span>Name</span><b-form-input id="name-input"></b-form-input>
          <span>Scheme</span><b-form-input id="scheme-input"></b-form-input>
          <span>Api Key</span><b-form-input id="apiKey-input"></b-form-input>
          <span>Instance Url</span><b-form-input id="instanceUrl-input"></b-form-input>
          <template v-slot:modal-footer>
            <b-btn variant="info" size="sm" @click="hideModal('add-project')">CANCEL</b-btn>
            <b-btn variant="success" size="sm" style="width: 80px" @click="createProject">OK</b-btn>
          </template>
        </b-modal>
      </div>
    </div>

  </div>
</template>

<script>
import {createProject, deleteProject} from "network/brazeNotification";

export default {
  name: "ProjectCards",
  methods: {
    enterProjectDetail(projectName) {
      this.$router.push(`/brazeNotification/${projectName}/`)
    },
    hideModal(id){
      this.$bvModal.hide(id);
    },
    createProject() {
      const projectName = document.getElementById('name-input').value;
      const projectScheme = document.getElementById('scheme-input').value;
      const apiKey = document.getElementById('apiKey-input').value;
      const instanceUrl = document.getElementById('instanceUrl-input').value;
      createProject(projectName, projectScheme, apiKey, instanceUrl).then(res => {
        if (res.code === 'success') {
          const newProject = res.data;
          this.projectList.push(newProject);
          this.hideModal('add-project');
        } else {
          this.hideModal('add-project');
          alert("Create project failed, please try again later.")
        }
      })
    },
    deleteProject(nid, index) {
      deleteProject(nid).then(res => {
        if (res.code == 'success') {
          this.projectList.splice(index, 1);
          this.hideModal('delete-'+nid);
        } else {
          this.hideModal('delete-'+nid);
          alert(res.msg.length?res.msg:"Project delete failed, please try again later.");
        }
      })
    }
  },
  data() {
    return {
      projectList: this.projectCards,
    }
  },
  props: {
    projectCards: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .card {
    width: 240px;
    height: 240px;
    background-color: #eeeeee;
  }
  .click-area {
    width: 240px;
    height: 215px;
  }
  .delete-project {
    border: none;
    background-color: transparent;
    width: 25px;
    height: 25px;
    margin-left: 205px;
  }
  .project-name {
    margin-top: 60px;
    text-align: center;
    color: blue;
  }
  .add-icon-button {
    width: 25px;
    height: 25px;
    border: none;
    padding: 0;
    margin: auto auto;
  }
  .add-icon {
    width: 25px;
    height: 25px;
  }
  .col-md-3 {
    margin-bottom: 15px;
  }
  .delete-msg {
    margin-top: 20px;
    margin-bottom: 40px;
  }

</style>