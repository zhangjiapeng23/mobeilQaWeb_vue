<template>
 <div>
   <header class="page-header text-center">
     <back-last-page-button></back-last-page-button>
     <h1>{{projectName.toUpperCase()}}  {{projectVersion}} {{system==='Android'?'Libraries':'Frameworks'}}</h1>
   </header>

   <div id="libraryList">
     <b-table hover :items="recordData" thead-class="table-info" :tbody-tr-class="snapshotLibrary" outlined>
     </b-table>
   </div>
 </div>
</template>

<script>
import BackLastPageButton from "components/content/BackLastPageButton";

import {getBuildRecordDetail} from "network/projectBuildInfo";

export default {
  name: "BuildRecordDetail",
  components: {
    BackLastPageButton
  },
  data() {
    return {
      recordData: [],
      projectName: "",
      projectVersion: "",
      system: this.$route.name === 'AndroidLibraryDetail'? 'Android':'iOS',

    }
  },
  created() {
    this.getBuildRecordDetail()
  },
  methods: {
    getBuildRecordDetail() {
      getBuildRecordDetail(this.system, this.$route.query.id).then(res => {
        this.recordData = res.data;
        this.projectName = res.project_name;
        this.projectVersion = res.project_version;
      })
    },
    snapshotLibrary(item, type) {
      if (!item || type !== 'row') return
      let version;
      if (this.system === 'Android') {
        version = item.currentVersion;
        return this.isSnapshot(version);
      } else {
        version = item.frameworkVersion;
        return this.isXFrameWork(version)
      }

    },
    isSnapshot(versionName) {
      return versionName.indexOf('-SNAPSHOT') === -1?"":"table-warning"
    },
    isXFrameWork(versionName) {
      const re = /\d+\.\d+\.0\d+/;
      const res = versionName.match(re)
      return res === null && versionName.indexOf('x') === -1?"":"table-warning"
    }
  }

}
</script>

<style scoped>
 .page-header{
   font-style: italic;
   margin-bottom: 0px;
   text-shadow: 2px 2px 2px lightgray;
   font-weight: bold;
   margin-top: 40px;
   padding-left: 20px;
   padding-right: 20px;
 }
 #libraryList {
   margin-top: 20px;
   margin-left: 20px;
   margin-right: 20px;
 }

</style>