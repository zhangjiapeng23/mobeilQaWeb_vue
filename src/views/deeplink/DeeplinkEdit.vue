<template>
  <div id="deeplink-edit" class="container">
    <div class="row">
      <div class="col-md-12">
        <hr>
      </div>
      <div class="col-md-4">
        <h3>{{this.projectName}}</h3>
      </div>
      <div class="col-md-8 text-right">
        <b-btn-group>
          <b-btn variant="info" v-b-modal="'modify-project'">Edit Project</b-btn>
          <b-btn variant="primary" v-b-modal="'add-deeplink'">Add Deeplink</b-btn>
        </b-btn-group>
        <b-modal id="modify-project" title="Modify project" centered>
           <b-input-group prepend="Scheme" class="modify-scheme-group">
             <b-form-input :value="projectScheme.split(':')[0]" id="modify-scheme"></b-form-input>
           </b-input-group>
          <template v-slot:modal-footer>
            <b-btn variant="info" size="sm" @click="hideModal('modify-project')">CANCEL</b-btn>
            <b-btn variant="success" size="sm" style="width: 80px" @click="modifyProject">OK</b-btn>
          </template>

        </b-modal>

        <b-modal id="add-deeplink" title="Add deeplink" centered>
          <b-input-group :prepend="projectScheme" class="add-input-group">
            <b-form-input id="add-deeplink-input"></b-form-input>
          </b-input-group>
          <template v-slot:modal-footer>
            <b-btn variant="info" @click="hideModal('add-deeplink')" size="sm">CANCEL</b-btn>
            <b-btn variant="success" size="sm" @click="addDeeplink" style="width: 70px">OK</b-btn>
          </template>
        </b-modal>
      </div>

      <div class="col-md-12" v-if="deeplinkItems.length === 0">
        <h2 class="no-content">No content is available at this time.</h2>
      </div>
      <div class="col-md-12" v-else>
        <div class="list-group">
          <div class="list-group-item" v-for="(item, index) in deeplinkItems" :key="index">
            <a :href="item" style="float: left">{{item.content}}</a>
            <div class="edit-group text-right">
              <button class="remove-btn" v-b-modal="'remove-'+index">
                <b-icon icon="trash-fill" ></b-icon>
              </button>
              <b-modal :id="'remove-'+index" title="Delete deeplink">
                <p>Do you make sure to delete deeplink:</p>
                <p style="word-break: break-all;">{{item.content}}</p>
                <template v-slot:modal-footer>
                  <b-btn variant="info" @click="hideModal('remove-'+index)" size="sm">CANCEL</b-btn>
                  <b-btn variant="success" @click="removeDeeplink(item.id, index)" size="sm">CONFIRM</b-btn>
                </template>
              </b-modal>
              <button class="modify-btn" v-b-modal="'modify-'+index">
                <b-icon icon="pencil-fill" >
                </b-icon>
              </button>
              <b-modal :id="'modify-'+index" centered title="Modify deeplink">
                <b-input-group :prepend="scheme" class="modal-modify">
                  <b-form-input :value="item.body" :id="item.id.toString()"></b-form-input>
                </b-input-group>

                <template v-slot:modal-footer>
                  <b-btn variant="info" @click="hideModal('modify-'+index)" size="sm">CANCEL</b-btn>
                  <b-btn variant="success" size="sm" @click="modifyDeeplink(item.id, index)">OK</b-btn>
                </template>
              </b-modal>
            </div>
            <span style="clear: both"></span>
          </div>
        </div>
      </div>


    </div>
  </div>

</template>

<script>
import {addDeeplink, removeDeeplink, modifyDeeplink, modifyProject} from "network/deeplink";

export default {
  name: "DeeplinkEdit",
  methods: {
    hideModal(id) {
      this.$bvModal.hide(id);
    },
    addDeeplink() {
      const content = document.getElementById('add-deeplink-input').value;
      addDeeplink(this.projectName, content).then(res => {
        if (res.code === 'success') {
          const deeplinkOrigin = res.msg;
          const deeplinkNew = {};
          deeplinkNew.id = deeplinkOrigin.nid;
          deeplinkNew.content = deeplinkOrigin.deeplink;
          deeplinkNew.body = deeplinkOrigin.body;
          this.deeplinkItems.unshift(deeplinkNew);
          this.hideModal('add-deeplink')
        } else {
          this.hideModal('add-deeplink')
          alert("Add deeplink failed, please try again later.")
        }
      })
    },
    modifyDeeplink(id, index) {
      const body = document.getElementById(id.toString()).value;
      modifyDeeplink(id, body).then(res => {
        this.hideModal('modify-'+index);
        if (res.code === 'success') {
          const deeplink = this.deeplinkItems[index];
          deeplink.body = body;
          deeplink.content = this.projectScheme + body;
        } else {
          alert("Sorry, Modify failed, please try again later.")
        }
      })
    },
    removeDeeplink(id, index) {
      removeDeeplink(id).then(res => {
        this.hideModal('remove-'+index);
        if (res.code === 'success') {
          this.deeplinkItems.splice(index, 1)
        } else {
          alert("Sorry, delete failed, please try again later.")
        }
      })
    },
    modifyProject() {
      const scheme = document.getElementById('modify-scheme').value;
      modifyProject(this.nid, scheme).then(res => {
        if (res.code === 'success') {
          this.hideModal('modify-project')
          this.$router.go(0)
        } else {
          this.hideModal('modify-project')
          alert("Project modify failed, please try again later.")
        }
      })
    }
  },
  data() {
    return {
      deeplinkItems: this.deeplinkList,
      projectScheme: this.scheme,
      projectName: this.project,
      projectNid: this.nid
    }
  },
  props: {
    deeplinkList: {
      type: Array,
      default() {
        return []
      }
    },
    scheme: {
      type: String,
      default() {
        return '';
      }
    },
    project: {
      type: String,
      default() {
        return '';
      },
    },
    nid: {
      type: Number,
      default() {
        return -1;
      }
    }
  }
}
</script>

<style scoped>
.col-md-12 {
  padding: 0;
}
.col-md-4 {
  padding: 0;
}
.col-md-8 {
  padding: 0;
}
hr {
  margin-top: 2px;
}
.remove-btn {
  border: none;
  background-color: transparent;
}
.modify-btn {
  border: none;
  background-color: transparent ;
}
.modal-modify {
  margin-top: 30px;
  margin-bottom: 30px;
}
h3 {
  font-style: italic;
  font-weight: bolder;
}
.list-group {
  margin-top: 5px;
}
 .add-input-group {
   margin-top: 30px;
   margin-bottom: 30px;
 }
 .no-content {
   margin-bottom: 200px;
   margin-top: 100px;
   text-align: center;
 }
 .modify-scheme-group {
   margin-top: 15px;
   margin-bottom: 30px;
 }


</style>