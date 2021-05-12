<template>
    <div class="index-view">
        <index-nav-bar :navBarItem="navBarItem"></index-nav-bar>
        <div class="container page-main">
            <h2>Mobile QA Test Tools</h2>
            <hr>
      
            <index-content :contentItems="contentItems"></index-content>

            <page-foot id="page-footer"></page-foot>    
        </div>
    </div>
    
</template>

<script>
import IndexNavBar from 'views/indexView/IndexNavBar'
import PageFoot from 'components/content/PageFoot'
import IndexContent from 'views/indexView/IndexContent'

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
            },
            contentItems: [
                {
                    title: "APP Build History", 
                    subtitle: "APP Build History",
                    imgUrl: require("assets/img/qa_tools/information.png"),
                    description: "Gather build info for Android and iOS.",
                    url: "/home"
                },
                {
                    title: "App reviews", 
                    subtitle: "App reviews",
                    imgUrl: require("assets/img/qa_tools/star-icon.png"),
                    description: "Show reviews for each version and region from google play and app store.",
                    url: "/home"
                },
                {
                    title: "Deep Link", 
                    subtitle: "Deep link console",
                    imgUrl: require("assets/img/qa_tools/link.png"),
                    description: "Provide a list page to test mobile deeplink.",
                    url: "/home"
                },
                {
                    title: "Braze Notification", 
                    subtitle: "Braze Notification Console",
                    imgUrl: require("assets/img/qa_tools/notification.png"),
                    description: "Batch send push through script.",
                    url: "/home"
                },
                {
                    title: "SDK Config Parser", 
                    subtitle: "SDK Config Parser",
                    imgUrl: require("assets/img/qa_tools/appkey.png"),
                    description: "Store known app key and parse app key to get config detail.",
                    url: "/home"
                },
                {
                    title: "Automation Test Report", 
                    subtitle: "Automation Test Report",
                    imgUrl: require("assets/img/qa_tools/report.png"),
                    description: "Automation Test Report for UI and Unit Test.",
                    url: "/home"
                },
                {
                    title: "Localization test tool", 
                    subtitle: "Localization test tool",
                    imgUrl: require("assets/img/qa_tools/localization.png"),
                    description: "Format localization file to do tests.",
                    url: "/home"
                },
                {
                    title: "SDK Config Parser", 
                    subtitle: "SDK Config Parser",
                    imgUrl: require("assets/img/qa_tools/appkey.png"),
                    description: "Store known app key and parse app key to get config detail.",
                    url: "/home"
                },
            ] 
        }
    },
    components: {
        IndexNavBar,
        PageFoot,
        IndexContent
    }
}
</script>

<style>
    .page-main {
        margin-top: 50px;
    }
    .page-main h2 {
        font-weight: bold;
        font-style: italic;
        text-shadow: 2px 2px 2px lightgray;
    }
    #page-footer {
        margin-top: 60px;
    }

</style>