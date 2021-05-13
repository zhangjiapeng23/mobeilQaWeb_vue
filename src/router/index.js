import Router from 'vue-router';
import Vue from 'vue';

const IndexView = () =>
    import ('views/indexView/IndexView')
const PlatformView = () =>
    import ('views/buildHistory/PlatformView')
const PlatformList = () =>
    import ('views/buildHistory/PlatformList')


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
        children: [{
                path: ":system",
                component: PlatformList,
                meta: { name: "PlatformList", url: ":system" }
            }

        ]
    }

]

const router = new Router({
    routes,
    mode: 'history'
})

export default router;