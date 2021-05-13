<template>
    <div class="index-view">
        <div class="container page-main">
            <h2>Mobile QA Test Tools</h2>
            <hr>
            <index-content :contentItems="contentItems"></index-content>   
        </div>
    </div>
    
</template>

<script>
    import IndexContent from 'views/indexView/IndexContent'

    export default {
        name: 'IndexView',
        data() {
            return {
                contentItems: [{
                    title: "APP Build History",
                    subtitle: "APP Build History",
                    imgUrl: require("assets/img/qa_tools/information.png"),
                    description: "Gather build info for Android and iOS.",
                    url: "/projectinfo"
                }, {
                    title: "App Reviews",
                    subtitle: "App Reviews",
                    imgUrl: require("assets/img/qa_tools/star-icon.png"),
                    description: "Show reviews for each version and region from google play and app store.",
                    url: "/home"
                }, {
                    title: "Deep Link",
                    subtitle: "Deep Link Console",
                    imgUrl: require("assets/img/qa_tools/link.png"),
                    description: "Provide a list page to test mobile deeplink.",
                    url: "/home"
                }, {
                    title: "Braze Notification",
                    subtitle: "Braze Notification Console",
                    imgUrl: require("assets/img/qa_tools/notification.png"),
                    description: "Batch send push through script.",
                    url: "/home"
                }, {
                    title: "SDK Config Parser",
                    subtitle: "SDK Config Parser",
                    imgUrl: require("assets/img/qa_tools/appkey.png"),
                    description: "Store known app key and parse app key to get config detail.",
                    url: "/home"
                }, {
                    title: "Automation Test Report",
                    subtitle: "Automation Test Report",
                    imgUrl: require("assets/img/qa_tools/report.png"),
                    description: "Automation Test Report for UI and Unit Test.",
                    url: "/home"
                }, {
                    title: "Localization Test Tool",
                    subtitle: "Localization Test Tool",
                    imgUrl: require("assets/img/qa_tools/localization.png"),
                    description: "Format localization file to do tests.",
                    url: "/home"
                }, {
                    title: "SDK Config Parser",
                    subtitle: "SDK Config Parser",
                    imgUrl: require("assets/img/qa_tools/appkey.png"),
                    description: "Store known app key and parse app key to get config detail.",
                    url: "/home"
                }, ]
            }
        },
        components: {
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