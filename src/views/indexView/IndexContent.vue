<template>
    <div class="index-content">
        <div class="row">
          <index-content-item v-for="(item, index) in contentItems" :key="index" 
                    :title="item.title" 
                    :subtitle="item.subtitle"
                    :imgUrl="item.imgUrl" 
                    :description="item.description" 
                    :url="item.url">
          </index-content-item>            
        </div>
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

<style scoped>
  

</style>