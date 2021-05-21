<template>
  <div class="review-detail">
   <review-summary :review-summary="reviewSummary"></review-summary>
    <b-dropdown class="filter-btn" variant="white" :text="ratingFilter.toString()">
      <b-dropdown-item v-for="(item, index) in ratingList">{{item}}</b-dropdown-item>
    </b-dropdown>
    <hr>



  </div>

</template>

<script>
import {getProjectDetail} from "network/appReview";

import ReviewSummary from "./ReviewSummary";

export default {
  name: "AppReviewDetail",
  components: {
    ReviewSummary
  },
  created() {
    this.getProjectDetail()
  },
  methods: {
    getProjectDetail() {
      getProjectDetail(this.platform, this.project, this.querySet).then(res => {
        this.reviewSummary = res.reviewSummary;
        this.ratingList = res.filterList.rating;
        this.regionList = res.filterList.region;
        this.versionList = res.filterList.version;
        this.reviewList = res.data;
      })
    }
  },
  data() {
    return {
      platform: this.$route.matched[1].meta.name,
      querySet: this.$route.query,
      reviewSummary: {
        rating_king_percent: ["0%", "0%", "0%", "0%", "0%"]
      },
      ratingList: [],
      regionList: [],
      versionList: [],
      reviewList: [],
    }
  },
  computed: {
    project() {
      return this.platform === 'Android'?this.$route.params.appReviewAndroidProject:this.$route.params.appReviewiOSProject
    },
    ratingFilter() {
      const rating = this.querySet.rating;
      console.log(rating);
      return rating === undefined?'All':rating
    }
  }

}
</script>

<style scoped>


</style>