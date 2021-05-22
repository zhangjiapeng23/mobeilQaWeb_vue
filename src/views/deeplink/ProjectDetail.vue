<template>
  <div class="project-detail container">
    <div class="row">
      <div class="col-md-12">
        <hr>
      </div>
      <div class="col-md-12" v-if="JSON.stringify(this.deeplinkList) !== '{}'">
        <ul class="list-group" v-for="(value, key) in this.deeplinkList" :key="key">
          <li class="list-group-item list-group-item-info">{{key}}</li>
          <li class="list-group-item" v-for="deeplink in value" :key="deeplink">
            <a :href="deeplink">{{deeplink}}</a>
          </li>
        </ul>
      </div>
      <div class="col-md-12 text-center" v-else>
        <h3 class="no-content">No content is available at this time. </h3>
      </div>
    </div>
  </div>
</template>

<script>
import {getDeeplinkList} from "network/deeplink";

export default {
  name: "ProjectDetail",
  data() {
    return {
      deeplinkList: {},
      project: this.$route.params.deeplinkProject
    }
  },
  created() {
    this.getDeeplinkList()
  },
  methods: {
    getDeeplinkList() {
      getDeeplinkList(this.project).then(res => {
        this.deeplinkList = res.data;
        console.log(this.deeplinkList)
      })
    }
  }
}
</script>

<style scoped>
.list-group {
  border-radius: unset;
}
.no-content {
  margin-top: 120px;
  margin-bottom: 200px;
}

</style>