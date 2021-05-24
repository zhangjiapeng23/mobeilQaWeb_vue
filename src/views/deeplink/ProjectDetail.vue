<template>
  <div class="project-detail container">
    <div v-if="this.$route.name === 'deeplinkEdit'">
      <router-view :scheme="schemeName"
                   :deeplinkList="deeplinkList"
                   :project="projectName"
                   v-if="deeplinkList.length&&schemeName.length&&projectName.length"></router-view>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-12">
          <hr>
        </div>
        <div class="col-md-12" v-if="JSON.stringify(this.deeplink) !== '{}'">
          <ul class="list-group" v-for="(value, key) in this.deeplink" :key="key">
            <li class="list-group-item list-group-item-info">{{key}}</li>
            <li class="list-group-item" v-for="deeplink in value" :key="deeplink.content">
              <a :href="deeplink">{{deeplink.content}}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-12 text-center" v-else>
          <h3 class="no-content">No content is available at this time. </h3>
        </div>
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
      deeplink: {},
      deeplinkList: [],
      projectName: '',
      schemeName: '',
    }
  },
  created() {
    this.getDeeplink();
  },
  methods: {
    getDeeplink() {
      getDeeplinkList(this.$route.params.deeplinkProject).then(res => {
        this.deeplink = res.data;
        this.schemeName = res.scheme;
        this.projectName = res.project;
        for (const key in this.deeplink) {
          const group = this.deeplink[key];
          for (const deeplink of group ) {
            this.deeplinkList.push(deeplink);
          }
        }
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
hr {
  margin-top: 0px ;
}
.list-group-item-info {
  font-weight: bold;
}

</style>