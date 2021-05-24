import Router from 'vue-router';
import Vue from 'vue';

const IndexView = () =>
    import ('views/indexView/IndexView')
const PlatformView = () =>
    import ('components/content/PlatformView')
const ProjectDetail = () =>
    import('views/buildHistory/ProjectDetail')
const BuildRecordDetail = () =>
    import('views/buildHistory/BuildRecordDetail')


Vue.use(Router);

// solve NavigationDuplicated: Avoided redundant navigation to current location
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}


const routes = [{
        path: "",
        name: "Home",
        component: IndexView
    },
    {
        path: "/projectinfo",
        name: "projectinfo",
        component: PlatformView,
        redirect: "/projectinfo/Android",
        meta: { name: "Build History", url: "/projectinfo" },
        children: [
            {
                path: "Android",
                component: () => import ('views/buildHistory/PlatformList'),
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
                component: () => import ('views/buildHistory/PlatformList'),
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

            }
        ]
    },
    {
        path: "/iOSLibraryDetail",
        name: 'iOSLibraryDetail',
        component: BuildRecordDetail

    },
    {
        path: "/AndroidLibraryDetail",
        name: 'AndroidLibraryDetail',
        component: BuildRecordDetail
    },
    {
        path: "/appreview",
        name: "appReview",
        component: PlatformView,
        redirect: "/appreview/Android",
        meta: {name: "App Review", url: '/appreview'},
        children: [
            {
                path: "Android",
                name: "appReviewAndroid",
                meta: {name: "Android", url: '/appreview/Android'},
                component: () => import('views/appReview/PlatformList'),
                children: [
                    {
                        path: ":appReviewAndroidProject",
                        name: ":appReviewAndroidProject",
                        component: () => import('views/appReview/AppReviewDetail'),
                        meta: {
                            name: ":appReviewAndroidProject",
                            url: "/appreview/Android/:appReviewAndroidProject"}
                    }
                ]
            },
            {
                path: "iOS",
                name: "appReviewiOS",
                meta: {name: "iOS", url: '/appreview/iOS'},
                component: () => import('views/appReview/PlatformList'),
                children: [
                    {
                        path: ":appReviewiOSProject",
                        name: ":appReviewiOSProject",
                        component: () => import('views/appReview/AppReviewDetail'),
                        meta: {
                            name: ":appReviewiOSProject",
                            url: "/appreview/iOS/:appReviewiOSProject"
                        }
                    }
                ]
            }
        ]

    },
    {
        path: '/appReviewRegister',
        name: 'appReviewRegister',
        component: () => import('views/appReview/ProjectRegister')
    },
    {
        path: "/deeplink",
        name: "Deeplink",
        component: () => import('views/deeplink/ProjectList'),
        meta: {
            name: 'Deeplink',
            url: "/deeplink"
        },
        children: [
            {
                path: ":deeplinkProject",
                name: ":deeplinkProject",
                component: () => import('views/deeplink/ProjectDetail'),
                meta: {
                    name: ':deeplinkProject',
                    url: "/deeplink/:deeplinkProject"
                },
                children: [
                    {
                        path: "edit",
                        name: "deeplinkEdit",
                        component: () => import('views/deeplink/DeeplinkEdit'),
                        meta: {
                            name: 'Edit',
                            url: "/deeplink/:deeplinkProject/edit"
                        }
                    }
                ]
            }
        ]
    }

]

const router = new Router({
    routes,
    mode: 'history'
})

export default router;