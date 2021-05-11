<template>
    <div class="content-item">
        <b-card 
         :title="title"
         :img-src="imgUrl"
         :img-alt="title"
         img-top
         :tag="title"
         style="max-width: 20rem;"
         class="md-2">
         <b-link>
             <b-card-text>
             {{cardText}}
            </b-card-text>
         </b-link>
         
        </b-card>

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