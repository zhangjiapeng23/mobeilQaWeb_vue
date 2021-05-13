<template>
    <div class="nav-breadcrum">
        <nav aria-label="breadcrumb" >
            <ol class="breadcrumb" id="breadCrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for="(item, index) in matchedUrl" :key="index" >
                    <span  v-if="index === matchedUrl.length">
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
    }
</style>