import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Hello from './views/pages/Hello'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            components:{
                default:()=> import('./components/pages/Login'),
                Footer:()=> import('./components/pages/Footer')
            }
        },
        {
            path: '/register',
            name: 'register',
            components:{
                default:()=> import('./components/pages/Register'),
                Footer:()=> import('./components/pages/Footer')
            },
            
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
    ],
});