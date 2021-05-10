import Router from 'vue-router';
import Vue from 'vue';

const IndexView = () => import('views/indexView/IndexView')

Vue.use(Router);


const routes = [
    {
        path: "",
        component: IndexView
    }
   
]

const router =  new Router({
    routes,
    mode: 'history'
})

export default router;

