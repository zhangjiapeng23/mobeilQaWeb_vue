<template>
    <div class="content-list">
        <index-content-item v-for="(item, index) in contentItems" :key="index" 
        :title="item.title" 
        :imgUrl="item.imgUrl" 
        :cardText="item.description" 
        :url="item.url">
        </index-content-item>
    </div>
  
</template>

<script>
import IndexContentItem from "views/indexView/IndexContentItem"

export default {
    name: "IndexContent",
    props: {
        contentItems: {
            type: Array,
            default() {
                return [];
            }

        }
    },
    components: {
        IndexContentItem
    }
}
</script>

<style>
  .content-list {
      display: flex;
      justify-content: space-around;
      align-item: flex-start;
      flex-wrap: warp;
  }

</style>