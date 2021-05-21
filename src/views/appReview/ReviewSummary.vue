<template>
  <div class="row">
    <div class="col-md-2 text-right score-title" >
      <p>Average Score:</p>
    </div>
    <div class="col-md-2 text-left">
      <div class="score">
        <h1>{{reviewSummary.rating_avg}}</h1>
        <p>Total <b-icon icon="people-fill"></b-icon> {{reviewSummary.rating_total}} scored</p>
      </div>
    </div>

    <div class="col-md-2  text-right">
      <div class="star-group">
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
      </div>
      <div class="star-group">
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
      </div>
      <div class="star-group">
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
      </div>
      <div class="star-group">
        <b-icon icon="star-fill" class="star"></b-icon>
        <b-icon icon="star-fill" class="star"></b-icon>
      </div>
      <div class="star-group">
        <b-icon icon="star-fill" class="star"></b-icon>
      </div>
    </div>

    <div class="col-md-4">
      <div class="score-process">
        <div class="5-star">
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar"
                 :style="{'width': reviewSummary.rating_king_percent[4]}"
                 :aria-valuenow="reviewSummary.rating_king_percent[4].split('%')[0]"
                 aria-valuemin="0"
                 aria-valuemax="100"></div>
          </div>
          <span style="clear: both"></span>
        </div>

        <div class="4-star">
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar"
                 :style="{'width': reviewSummary.rating_king_percent[3]}"
                 :aria-valuenow="reviewSummary.rating_king_percent[3].split('%')[0]"
                 aria-valuemin="0"
                 aria-valuemax="100"></div>
          </div>
          <span style="clear: both"></span>
        </div>

        <div class="3-star">
          <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar"
                 :style="{'width': reviewSummary.rating_king_percent[2]}"
                 :aria-valuenow="reviewSummary.rating_king_percent[2].split('%')[0]"
                 aria-valuemin="0"
                 aria-valuemax="100"></div>
          </div>
          <span style="clear: both"></span>
        </div>

        <div class="2-class">
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar"
                 :style="{'width': reviewSummary.rating_king_percent[1]}"
                 :aria-valuenow="reviewSummary.rating_king_percent[1].split('%')[0]"
                 aria-valuemin="0"
                 aria-valuemax="100"></div>
          </div>
          <span style="clear: both"></span>
        </div>

        <div class="1-star">
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar"
                 :style="{'width': reviewSummary.rating_king_percent[0]}"
                 :aria-valuenow="reviewSummary.rating_king_percent[0].split('%')[0]"
                 aria-valuemin="0"
                 aria-valuemax="100"></div>
          </div>
          <span style="clear: both"></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewSummary",
  props: {
    reviewSummary: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  .score-title {
    font-size: 18px;
  }
  .progress {
    margin-bottom: 8px;

  }
  .star {
    margin-right: 2px;
    margin-bottom: 3px;
    color: #F3F37FFC;
    width: 13px;
    height: 13px;
  }
  .score p {
    color: gray;
    font-size: 10px;
  }
  .score h1 {
    font-size: 65px;
  }

</style>