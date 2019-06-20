import Vue from 'vue'
import Router from 'vue-router'


import Index from './views/index'
import Login from './views/login'
import Homepage from './views/homepage'
import Blogsingle from './views/blogsingle'
import About from './views/about'
import Contact from './views/contact'



import Footer from './components/footer'
import Head from './components/head'
import Feature from './components/feature'




Vue.use(Router);

export default new Router({
  mode:'history',

  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/login', name: 'login', component: Login},
    {path: '/homepage', name: 'homepage', component: Homepage},
    {path: '/blogsingle', name: 'blogsingle', component: Blogsingle},
    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/footer', name: 'footer', component: Footer},
    {path: '/head', name: 'head', component: Head},
    {path: '/feature', name: 'feature', component: Feature},
  ]
})
