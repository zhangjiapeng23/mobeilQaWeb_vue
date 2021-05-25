<template>
  <div id="braze-notification">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12" id="notification-nav">
          <bread-crumb></bread-crumb>
        </div>
        <div class="col-md-12 col-sm-12">
          <hr>
        </div>
        <div class="col-md-12 col-sm-12" v-if="this.$route.name === 'brazeNotification'">
          <project-cards :projectCards="projectList" v-if="projectList.length"></project-cards>
        </div>
        <div class="col-sm-12 col-sm-12" v-else>
          <notification-detail></notification-detail>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import BreadCrumb from "components/content/BreadCrumb";
import ProjectCards from "./ProjectCards";
import NotificationDetail from "./NotificationDetail";

import {getProjectList} from "network/brazeNotification";

export default {
  name: "ProjectList",
  components: {
    BreadCrumb,
    ProjectCards,
    NotificationDetail

  },
  data() {
    return {
      projectList: [],
    }
  },
  created() {
    this.getProjectList()
  },
  methods: {
    getProjectList() {
      getProjectList().then(res => {
        this.projectList = res
      })
    }
  }
}
</script>

<style scoped>
hr {
  margin-top: 0;
}

</style>