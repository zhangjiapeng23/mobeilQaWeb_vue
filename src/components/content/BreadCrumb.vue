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
                const route = this.$route;
                route.matched.filter(function(item, index, self) {
                    if (item.name) {
                      if (item.name.startsWith(':')) {
                        const key = item.name.split(":")[1];
                        const param = route.params[key];
                        item.meta['name'] = param;
                        item.meta['url'] = item.meta['url'].split(":")[0] + param;
                      }
                      matchUrl.push(item.meta)
                    }
                })
                return matchUrl;
            }
        }
    };
</script>

<style>
    #breadCrumb {
        background-color: white;
        margin-bottom: 0;
        padding-left: 0;
        font-style: italic;
    }
    
    .breadcrumb-item {
        font-size: 15px;
    }
    
    .breadcrumb-item a {
        text-decoration: none;
    }
</style>