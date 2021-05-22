<template>
  <div class="review-list">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in reviewList" :key="index">
        <div class="row review-item">
          <div class="col-md-3 text-right">
            <img :src="reviewLogo" class="review-logo">
          </div>
          <div class="col-md-7 review-info">
            <h6>{{item.author}}</h6>
            <span>Rating: {{item.rating}}</span>
            <span> Region: {{item.country}}</span>
            <span> Version: {{item.version }}</span>
            <span>Comment Date: {{item.create_time}}</span>
          </div>

          <div class="col-md-7 offset-md-3 review-main">
            <p>{{item.content}}</p>
          </div>
        </div>
      </li>

    </ul>
  </div>

</template>

<script>
export default {
  name: "ReviewContent",
  props: {
    reviewList: {
      type: Array,
      default: []
    }
  },
  computed: {
    reviewLogo() {
      const platform = this.$route.matched[1].meta.name
      if (platform === 'Android') {
        return require('assets/imgs/google_appstore_reviews/google-symbol.png')
      } else {
        return require('assets/imgs/google_appstore_reviews/app-store.png')
      }

    }
  }
}
</script>

<style scoped>
  .list-group-item {
    border-left: none;
    border-right: none;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
    border-top-right-radius: unset;
    border-top-left-radius: unset;
  }
  .review-logo {
    width: 40px;
    height: 40px;
  }
  .review-info span {
    margin-right: 10px;
    color: gray;
    font-size: 13px;
  }
  .review-main {
    margin-top: 15px;
  }
  .review-item {
    margin-top: 20px;
  }

</style>