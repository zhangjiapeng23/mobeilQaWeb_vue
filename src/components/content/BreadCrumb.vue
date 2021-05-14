<template>
    <div class="nav-breadcrum">
        <nav aria-label="breadcrumb" >
            <ol class="breadcrumb" id="breadCrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for="(item, index) in matchedUrl" :key="index" >
                    <span  v-if="index < matchedUrl.length-1">
                        <a :href="item.url">{{item.name}}</a>
                    </span>
                    <span v-else>
                        {{item.name}}
                    </span>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'BreadCrumb',
        components: {},
        data() {
            return {

            }
        },
        computed: {
            matchedUrl: function() {
                let matchUrl = []
                console.log(this.$route.matched)
                this.$route.matched.filter(function(item, index, self) {
                    if (item.name) {
                        matchUrl.push(item.meta)
                    }
                })
                return matchUrl;
            }
        },

        data() {
            return {

            };
        }
    };
</script>

<style>
    #breadCrumb {
        background-color: white;
        margin-bottom: 0;
        padding-left: 0;
    }
    
    .breadcrumb-item {
        font-size: 20px;
    }
    
    .breadcrumb-item a {
        text-decoration: none;
    }
</style>