<template>
    <index-nav-bar :navBarItem="navBarItem"></index-nav-bar>
    
</template>

<script>
import IndexNavBar from 'views/indexView/IndexNavBar'

export default {
    name: 'IndexView',
    data() {
        return{
            navBarItem: {
                show: [
                    {title: 'Jenkins Server', url: "http://jenkins.neulion.net.cn/"},
                    {title: 'PM', url: "https://pm.neulion.net.cn/"},
                    {title: 'Config', url: "http://mobile.neulion.net.cn/svn/"},
                    {title: 'Config encrypt tool', url: "http://mobile.neulion.net.cn/tools/jsonenc/"}
                ],
                flod: [
                    {title: 'Git Book', url: "http://mobile.neulion.net.cn/book/"},
                    {title: 'Feature list', url: "https://docs.google.com/spreadsheets/d/1SSEna6OzUV2kgMFR6-oc-PWbwga7I3YIJn8ImaXvQpM/edit#gid=0"},
                    {title: 'Device Inventory', url: "https://docs.google.com/spreadsheets/d/1J9jiYsxbVMfI2Q8s-L781PLTokfRzmXjpNudO74NZOE/edit#gid=0"},
                    {title: 'GIT Server', url: "https://gitlab.neulion.com.cn:645/"}
                ]
            }
        }
    },
    components: {
        IndexNavBar
    }
}
</script>

<style>

</style>