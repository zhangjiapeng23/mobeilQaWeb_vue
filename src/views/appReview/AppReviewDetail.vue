<template>
  <div class="review-detail">
   <review-summary :review-summary="reviewSummary"></review-summary>
    <div class="row filter-group">
      <div class="col-md-4 text-center">
        <span class="filter-title">Rating Filter:</span>
        <b-dropdown class="filter-btn" variant="white" :text="ratingFilter.toString()" size="sm">
          <b-dropdown-item key="-1"
                           @click="selectRating('All')"
                           :active="querySet.rating === undefined">All</b-dropdown-item>
          <b-dropdown-item v-for="(item, index) in ratingList"
                           :key="index"
                           @click="selectRating(item)"
                           :active="querySet.rating === item.toString()">{{item}}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="col-md-4 text-center">
        <span class="filter-title">Region Filter:</span>
        <b-dropdown class="filter-btn" variant="white" :text="regionFilter.toString()" size="sm">
          <b-dropdown-item key="-1"
                           @click="selectRegion('All')"
                           :active="querySet.region === undefined">All</b-dropdown-item>
          <b-dropdown-item v-for="(item, index) in regionList"
                           :key="index"
                           @click="selectRegion(item)"
                           :active="querySet.region === item">{{item}}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="col-md-4 text-center">
        <span class="filter-title">Version Filter:</span>
        <b-dropdown class="filter-btn" variant="white" :text="versionFilter.toString()" size="sm">
          <b-dropdown-item key="-1" @click="selectVerson('All')"
                           :active="querySet.version === undefined">All</b-dropdown-item>
          <b-dropdown-item v-for="(item, index) in versionList"
                           :key="index"
                           @click="selectVerson(item)"
                           :active="querySet.version === item">{{item}}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <review-content :review-list="reviewList"></review-content>

    <div class="paging row">
      <div class="col-md-4 text-right">
        <b-dropdown class="page-size" variant="white" :text="querySet.pageSize" right>
          <b-dropdown-item v-for="(item, index) in pagingList"
                           :key="index"
                           @click="selectPageSize(item)"
                           :active="querySet.pageSize === item.toString()">
            {{item}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="col-md-8 text-left">
        <b-pagination-nav
            :number-of-pages="totalPages"
            :link-gen="linkGen"
            align="left">
        </b-pagination-nav>
      </div>
    </div>


  </div>

</template>

<script>
import {getProjectDetail} from "network/appReview";

import ReviewSummary from "./ReviewSummary";
import ReviewContent from "./ReviewContent";

export default {
  name: "AppReviewDetail",
  components: {
    ReviewSummary,
    ReviewContent
  },
  created() {
    this.getProjectDetail()
  },
  methods: {
    getProjectDetail() {
      getProjectDetail(this.platform, this.project, this.querySet).then(res => {
            this.page = res.page,
            this.pageSize = res.pageSize,
            this.totalPages = res.totalPages,
            this.reviewSummary = res.reviewSummary;
            this.ratingList = res.filterList.rating;
            this.regionList = res.filterList.region;
            this.versionList = res.filterList.version;
            this.reviewList = res.data;
      })
    },
    selectRating(rating) {
      const query = JSON.parse(JSON.stringify(this.querySet))
      query.page = 1;
      if (rating === 'All') {
        delete query.rating;
      } else {
        query.rating = rating;
      }
      this.$router.push({
        path: this.$route.path,
        query: query
      });
    },
    selectRegion(region) {
      const query = JSON.parse(JSON.stringify(this.querySet));
      query.page = 1;
      if (region === 'All') {
        delete query.region;
      } else {
        query.region = region;
      }
      this.$router.push({
        path: this.$route.path,
        query: query
      })
    },
    selectVerson(version) {
      const query = JSON.parse(JSON.stringify(this.querySet));
      query.page = 1;
      if (version === 'All') {
        delete query.version
      } else {
        query.version = version;
      }
      this.$router.push({
        path: this.$route.path,
        query: query
      })
    },
    selectPageSize(pageSize) {
      const query = JSON.parse(JSON.stringify(this.querySet));
      query.page = 1
      query.pageSize = pageSize
      this.$router.push({
        path: this.$route.path,
        query: query
      })
    },
    linkGen(pageNum) {
      const query = JSON.parse(JSON.stringify(this.querySet));
      query.page = pageNum;
      return {
        path: this.$route.path,
        query: query
      }
    }
  },
  data() {
    return {
      platform: this.$route.matched[1].meta.name,
      querySet: this.$route.query,
      page: 1,
      pageSize: 10,
      totalPages: 1,
      reviewSummary: {
        rating_kind_percent: ["0%", "0%", "0%", "0%", "0%"]
      },
      ratingList: [],
      regionList: [],
      versionList: [],
      reviewList: [],
      pagingList: [10, 25, 50, 100]
    }
  },
  computed: {
    project() {
      return this.platform === 'Android'?this.$route.params.appReviewAndroidProject:this.$route.params.appReviewiOSProject
    },
    ratingFilter() {
      const rating = this.querySet.rating;
      return rating === undefined?'All':rating;
    },
    regionFilter() {
      const region = this.querySet.region;
      return region === undefined?'All':region;
    },
    versionFilter() {
      const version = this.querySet.version;
      return version === undefined?'All':version;
    }
  }

}
</script>

<style scoped>
 .filter-title {
   margin-right: 10px;
   color: gray;
   font-size: 12px;
 }
 .filter-group {
   margin-top: 20px;
   margin-bottom: 40px;

 }
 .page-size {
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius: 0.25rem;
   height: 38px;
 }
 .paging {
   margin-top: 20px;
 }


</style>