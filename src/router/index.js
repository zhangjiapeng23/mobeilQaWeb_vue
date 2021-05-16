import Router from 'vue-router';
import Vue from 'vue';

const IndexView = () =>
    import ('views/indexView/IndexView')
const PlatformView = () =>
    import ('views/buildHistory/PlatformView')
const PlatformList = () =>
    import ('views/buildHistory/PlatformList')
const ProjectDetail = () =>
    import('views/buildHistory/ProjectDetail')


Vue.use(Router);


const routes = [{
        path: "",
        name: "Home",
        component: IndexView
    },
    {
        path: "/projectinfo",
        name: "Platform",
        component: PlatformView,
        redirect: "/projectinfo/Android",
        meta: { name: "Platform", url: "/projectinfo" },
        children: [
            {
                path: "Android",
                component: PlatformList,
                name: "Android",
                meta: { name: "Android", url: "/projectinfo/Android"},
                children: [
                    {
                        path: ":AndroidProject",
                        name: ":AndroidProject",
                        component: ProjectDetail,
                        meta: { name: ":AndroidProject", url: "/projectinfo/Android/:AndroidProject"}
                    }
                ]
            },
            {
                path: "iOS",
                component: PlatformList,
                name: "iOS",
                meta: { name: "iOS", url: "/projectinfo/iOS"},
                children: [
                    {
                        path: ":iOSProject",
                        name: ":iOSProject",
                        component: ProjectDetail,
                        meta: { name: ":iOSProject", url: "/projectinfo/iOS/:iOSProject"},
                    }
                ]

            },

        ]
    }



]

const router = new Router({
    routes,
    mode: 'history'
})

export default router;