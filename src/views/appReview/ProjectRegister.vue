<template>
  <div class="project-register">
    <div class="back-button">
      <back-last-page-button></back-last-page-button>
    </div>

    <div class="row" style="clear: both">
      <div class="col-md-6 offset-md-3" style="background-color: snow; padding: 30px">
        <h2 class="text-center">Register Project</h2>
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="projectName">Project Name</label>
              <input class="form-control" type="text" id="projectName" v-model="form.project_name"
                     :class="{'error-input': errorMessage.projectName !== ''}">
              <span class="error-resp">{{errorMessage.projectName}}</span>
            </div>
            <div class="form-group col-md-6">
              <label for="AndroidId">Android ID</label>
              <input class="form-control" type="text" id="AndroidId" v-model="form.android_id"
                     :class="{'error-input': errorMessage.AndroidId !== ''}">
              <span class="error-resp">{{errorMessage.AndroidId}}</span>
            </div>
            <div class="form-group col-md-6">
              <label for="iOSId">iOS ID</label>
              <input class="form-control" type="text" id="iOSId" v-model="form.ios_id"
                     :class="{'error-input': errorMessage.iOSId !== ''}">
              <span class="error-resp">{{errorMessage.iOSId}}</span>
            </div>
            <p style="margin-bottom: 8px;padding: 5px">Support Region
              <span class="error-resp" style="margin-left: 20px">{{errorMessage.supportRegion}}</span>
            </p>
            <div class="form-check form-check-inline col-md-12">
              <div class="form-row">
                <div v-for="(item, index) in supportRegion" :key="index" class="regionOptions col-md-3">
                  <input class="form-check-input" type="checkbox" :value="item.value" :id="item.name" v-model="form.support_region">
                  <label class="form-check-label" :for="item.name">{{item.name}}</label>
                </div>
              </div>

            </div>
            <div class="form-group col-md-12" style="margin-top: 16px">
              <label for="uploadProjectLogo">Project Logo</label>
              <input type="file" class="form-control-file" id="uploadProjectLogo" @change="updateLogo">
            </div>
            <button type="button" class="btn btn-primary"  @click="createProject" style="margin-left: 5px">Create</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import BackLastPageButton from "components/content/BackLastPageButton";

import {createProject} from "network/appReview";

export default {
  name: "ProjectRegister",
  components: {
    BackLastPageButton
  },
  methods: {
    updateLogo(event) {
      let file = event.target.files[0];
      this.form.project_logo = file;
    },
    createProject() {
      const data = new FormData();
      for (let key in this.form) {
        data.append(key, this.form[key])
      }
      createProject(data).then(res => {
        const errorResp = res.data;
        this.errorMessage.projectName = errorResp.project_name;
        this.errorMessage.AndroidId = errorResp.android_id;
        this.errorMessage.iOSId = errorResp.ios_id;
        this.errorMessage.supportRegion = errorResp.support_region;

        if (res.code === 'success') {
          this.$router.push({name: 'appReview'});
        }


      }).catch(err => {
        console.log(err)
      })
    }
  },
  data() {
    return {
      form: {
        project_name: '',
        android_id: '',
        ios_id: '',
        support_region: [],
        project_logo: null
      },
      errorMessage: {
        projectName: '',
        AndroidId: '',
        iOSId: '',
        supportRegion: '',
      },
      supportRegion: [
        {
          name: 'United States',
          value: 1
        },
        {
          name: 'Australia',
          value: 2
        },
        {
          name: 'Philippine',
          value: 4
        },
        {
          name: 'France',
          value: 8
        },
        {
          name: 'China Taiwan',
          value: 16
        },
        {
          name: 'Spain',
          value: 32
        },
        {
          name: 'Italy',
          value: 64
        },
        {
          name: 'Canada',
          value: 128
        },
        {
          name: 'Germany',
          value: 256
        },
        {
          name: 'Brazil',
          value: 512
        },
        {
          name: 'New Zealand',
          value: 1024
        }
      ]
    }
  }
}
</script>

<style scoped>
  .project-register {
    margin-top: 10px;
  }
  .regionOptions {
    margin-right: 10px;
  }
  .form-check-label {
    font-size: 14px;
  }
  .back-button {
    padding-left: 30px;
  }
  .error-resp {
    color: red;
  }
  .error-input {
    border: 1px solid red;
  }

</style>