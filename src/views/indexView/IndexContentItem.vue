<template>
    <div class="content-item">
       <div class="thumbnail">
                    <a :href="url" target="_self" :title="title">
                        <img class="lazy" :src="imgUrl" width="100"
                             height="100" :alt="title">
                    </a>
                    <div class="caption">
                        <h3>
                            <a :href="url" target="_self" :title="title">{{title}}<br>
                            <small>{{title}}</small></a>
                        </h3>
                        <p>{{cardText}}</p>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
    name: "IndexContentItem",
    props: {
        title: {
            type: String,
            default() {
                return "Card title";
            }
        },
        imgUrl: {
            type: String,
            default() {
                return "";
            }
        },
        cardText: {
            type: String,
            default() {
                return "Card description";
            }
        },
        url: {
            type: String,
            default() {
                return "";
            }
        }
        
    }
}
</script>

<style>

</style>