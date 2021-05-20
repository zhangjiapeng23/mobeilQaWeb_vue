<template>
  <div>
    <a @click="backLastPage" class="btn btn-light back-btn" style="background-color: transparent; border: none; float: left">
      <img src="~assets/imgs/common/icons8-return-50.png"  style="width: 35px;height: 35px;">
    </a>
  </div>
</template>

<script>
export default {
  name: "BackLastPageButton",
  methods: {
    backLastPage() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .back-btn {
    background-color: transparent;
    border: none;
    float: left
  }

</style>