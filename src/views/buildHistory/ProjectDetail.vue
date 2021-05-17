<template>
  <div class="project-detail">
    <b-table striped hover :items="items" :fields="system === 'Android'?AndroidFields:iOSFields" id="project-table">
      <template #cell(package_mapping_url)="data">
        <a :href="data.value" download="mapping.txt">Mapping</a>
      </template>
      <template #cell(date)="data">
        {{dateFormat(data.value)}}
      </template>
      <template #cell(nid)="data">
        <a :href="data.value">Detail</a>
      </template>
      <template #cell(x_framework)="data">
        <span :class="{red: data.value === true}">{{data.value === true?'Yes':'No'}}</span>
      </template>
      <template #cell(snapshot)="data">
        <span :class="{red: data.value === true}">{{data.value === true?'Yes':'No'}}</span>
      </template>
    </b-table>
    <hr>
    <div class="paging">
      <b-pagination-nav
          :number-of-pages="pageTotal"
          :link-gen="linkGen"
          align="center"
          limit="5">
      </b-pagination-nav>
    </div>

  </div>
</template>

<script>
import BreadCrumb from "components/content/BreadCrumb";
import {getBuildRecordList} from "network/projectBuildInfo";

export default {
  name: "ProjectDetail",
  components: {
    BreadCrumb
  },
  created() {
    this.getBuildRecordList();
  },
  methods: {
    getBuildRecordList() {
      const pageSize = this.$route.query.pageSize;
      const page = this.$route.query.page;
      getBuildRecordList(this.system, this.projectName, page, pageSize).then(res => {
        this.items = res.data;
        this.page = res.page;
        this.pageSize = res.pageSize;
        this.pageTotal = res.totalPage;
      })
    },
    dateFormat(datetime) {
      const d = new Date(datetime)
      let year = d.getFullYear(),
          month = d.getMonth() + 1,
          date = d.getDate(),
          hour = d.getHours(),
          minute = d.getMinutes()
      month = month < 10 ? '0' + month : month;
      date = date < 10 ? '0' + date : date;
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute:minute;
      return year + '-' + month + '-' + date + ' ' + hour + ':' + minute;
    },
    linkGen(pageNum) {
      return this.$route.path + `?page=${pageNum}&pageSize=${this.pageSize}`
    }
  },
  data() {
    return {
      system: this.$route.matched[1].name,
      page: 1,
      pageSize: 1,
      pageTotal: 1,
      iOSFields: [
        {
          key: "project_id",
          label: 'Project Name',
          sortable: false
        },{
          key: "project_version",
          label: 'Project Version',
          sortable: false
        },{
          key: "date",
          label: 'Build Time',
          sortable: true
        },{
          key: "x_framework",
          label: 'X FrameWork',
          sortable: false
        },{
          key: "nid",
          label: 'Detail',
          sortable: false
        }
      ],
      AndroidFields: [{
        key: "product_flavor_name",
        label: 'Flavor',
        sortable: false
      },{
        key: "package_name",
        label: 'Package',
        sortable: false
      },{
        key: "package_version_code",
        label: 'Version Code',
        sortable: false
      },{
        key: "package_version_name",
        label: 'Version Name',
        sortable: false
      },{
        key: "package_mapping_url",
        label: 'Mapping Url',
        sortable: false
      },{
        key: "git_branch_name",
        label: 'Branch',
        sortable: false
      },{
        key: "date",
        label: 'Build Time',
        sortable: true
      },{
        key: "snapshot",
        label: 'Snapshot',
        sortable: false
      },{
        key: "nid",
        label: 'Detail',
        sortable: false
      }],
      items: [],
      red:{
        color: "red"
      }
    }
  },
  computed: {
    projectName() {
      if (this.system === 'Android') {
        return this.$route.params.AndroidProject;
      } else {
        return this.$route.params.iOSProject;
      }

    }
  }


}
</script>


<style scoped>
  #project-table{
    font-size: 15px;
  }
  .red {
    color: red;
  }
  .paging {
    margin-top: 40px;
  }

</style>