import Vue from 'vue'
import Router from 'vue-router'


import Index from './views/index'
import Login from './views/login'
import Homepage from './views/homepage'
import Blogsingle1 from './views/blogsingle1'
import Blogsingle2 from './views/blogsingle2'
import Blogsingle3 from './views/blogsingle3'
import Blogsingle4 from './views/blogsingle4'
import Blogsingle5 from './views/blogsingle5'
import Blogsingle6 from './views/blogsingle6'
import Blogsingle7 from './views/blogsingle7'
import Blogsingle8 from './views/blogsingle8'
import Blogsingle9 from './views/blogsingle9'
import Blogsingle10 from './views/blogsingle10'
import Blogsingle11 from './views/blogsingle11'
import Blogsingle12 from './views/blogsingle12'
import Blogsingle13 from './views/blogsingle13'


import About from './views/about'
import Contact from './views/contact'



import Footer from './components/footer'
import Head from './components/head'
import Feature from './components/feature'
import Blogpost from './components/blogpost'




Vue.use(Router);

export default new Router({
  mode:'history',

  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/login', name: 'login', component: Login},
    {path: '/homepage', name: 'homepage', component: Homepage},
    {path: '/blogsingle1', name: 'blogsingle1', component: Blogsingle1},
      {path: '/blogsingle2', name: 'blogsingle2', component: Blogsingle2},
      {path: '/blogsingle3', name: 'blogsingle3', component: Blogsingle3},
      {path: '/blogsingle4', name: 'blogsingle4', component: Blogsingle4},
      {path: '/blogsingle5', name: 'blogsingle5', component: Blogsingle5},
      {path: '/blogsingle6', name: 'blogsingle6', component: Blogsingle6},
      {path: '/blogsingle7', name: 'blogsingle7', component: Blogsingle7},
      {path: '/blogsingle8', name: 'blogsingle8', component: Blogsingle8},
      {path: '/blogsingle9', name: 'blogsingle9', component: Blogsingle9},
      {path: '/blogsingle10', name: 'blogsingle10', component: Blogsingle10},
      {path: '/blogsingle11', name: 'blogsingle11', component: Blogsingle11},
      {path: '/blogsingle12', name: 'blogsingle12', component: Blogsingle12},
      {path: '/blogsingle13', name: 'blogsingle13', component: Blogsingle13},


    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/footer', name: 'footer', component: Footer},
    {path: '/head', name: 'head', component: Head},
    {path: '/feature', name: 'feature', component: Feature},
    {path: '/blogpost', name: 'blogpost', component: Blogpost},
  ]
})
