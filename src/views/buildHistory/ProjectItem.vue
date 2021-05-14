<template>
    <div>
        <div class="row" v-if="projectItems.length === 0">
            <div class="col-md-12 text-center noContent">
                <h2 >No content is available at this time.</h2>
            </div>
        </div>
        <div class="row" v-else>
            <div class="projectItem col-md-3" v-for="(item, index) in projectItems" :key="index">
                <div class="card" style="border: none;">
                    <img class="text-center card-img"
                         :src="item.imgUrl" alt="appicon"/>
                        <a href="item.url" class="btn btn-info text-uppercase">{{item.projectName}}</a>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
    export default {
        name: 'ProjectItem',
        components: {},
        props: {
            projectItems: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {

        },
    };
</script>

<style>
    .card a {
        text-align: center;
        margin: 10px auto;
        display: block;
        width: 150px;
    }
    
    .card-img {
        width: 120px;
        height: 120px;
        text-align: center;
        margin: 0 auto;
        display: block;
    }
    
    .noContent {
        margin-top: 200px;
    }
</style>