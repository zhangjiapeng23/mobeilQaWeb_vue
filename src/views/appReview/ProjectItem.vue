<template>
  <div class="app-review-projects">
    <div class="row">
      <div class="col-md-4" v-for="(item, index) in projectItems" :key="index">
       <div class="card text-center">
         <img :src="item.project_logo" class="inner-img card-img">
         <div class="card-body">
           <h3 class="card-title" style="margin-bottom: 0px">{{item.project_name}}</h3>
           <div class="button-group">
             <a class="btn btn-light" style="border: lightgray 1px solid">Origin</a>
             <a class="btn btn-info" style="border: lightgray 1px solid">Enter</a>
           </div>
         </div>
       </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <a href="/appReviewRegister" class="add-project">
            <img src="~assets/imgs/common/icons8-add-new-80.png" style="width: 40px; height: 40px;">
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "ProjectItem",
  data() {
    return {
      projectItems: [
        {
          project_name: 'NBA',
          project_logo: "http://127.0.0.1:5000/static/imgs/google_appstore_reviews/nba_logo.webp",
        },
        {
          project_name: 'NFL',
          project_logo: "http://127.0.0.1:5000/static/imgs/google_appstore_reviews/nba_logo.webp",
        }
      ]
    }
  }
}
</script>

<style scoped>
  .card {
    width: 280px;
    height: 320px;
    background-color: snow;
  }
  .inner-img {
    width: 180px;
    height: 180px;
    margin: 5px auto;
  }
  .button-group a {
    margin-left: 5px;
    margin-right: 5px;
    border: lightgray 1px solid;
    width: 85px;
  }
  .add-project {
    margin: auto;
  }

</style>