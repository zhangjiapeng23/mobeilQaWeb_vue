<template>
  <div id="notification-detail" class="row">
    <div class="col-md-4 col-sm-4">
      project name
    </div>
    <div class="col-md-8 col-sm-8">
      edit
    </div>

    {{ notificationGroup }}
  </div>
</template>

<script>
import {getNotificationDetail} from "network/brazeNotification";

export default {
  name: "NotificationDetail",
  data() {
    return {
      projectName: this.$route.params.notificationDetail,
      notificationGroup: {}

    }
  },
  methods: {
    getNotification() {
      getNotificationDetail(this.projectName).then(res => {
        this.notificationGroup = res;
      })
    }
  },
  created() {
    this.getNotification()
  }






}
</script>

<style scoped>

</style>