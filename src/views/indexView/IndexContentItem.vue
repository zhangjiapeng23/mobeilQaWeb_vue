<template>
    <div class="content-item col-md-3">
      <div class="card" @mouseover="cardSelect=true" @mouseleave="cardSelect=false" :style="cardSelected">
        <a :href="url"><img :src="imgUrl" :alt="title"></a>
        <div class="card-body">
            <a :href="url" class="content-title">
                <h4 class="card-title">{{title}}</h4>
                <span class="card-subtitle text-muted">{{subtitle}}</span>
                <p class="card-text">{{description}}</p>
            </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "IndexContentItem",
    data() {
        return {
            cardSelect: false,
        }
    },
    computed: {
        cardSelected: function() {
            if (this.cardSelect == true) {
                return {border: "solid 1px blue", backgroundColor: "snow"};
            } else {
                return {};
            }
        },
    },
    props: {
        title: {
            type: String,
            default() {
                return "Card title";
            }
        },
        subtitle: {
            tyep: String,
            default() {
                return "subtitle"
            }
        },
        imgUrl: {
            type: String,
            default() {
                return "";
            }
        },
        description: {
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
    .card {
        width: 100%;
        height: 270px;
        background-color: lightpink;
    }
    .card a{
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
       
    }
    .card a img {
        width: 90px;
        height: 90px;
       
    }
    .col-md-3 {
        padding-left: 0;
    }

    .card-body .content-title {
        text-decoration: none;
    }
    .card-text {
        color: #333;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
    }
    .card-subtitle {
        font-size: 15px;
    }
    .content-item {
        margin-top: 10px;
    }

</style>