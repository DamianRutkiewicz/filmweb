import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recomended from '@/components/Subpages/Recomended'
import Login from '@/components/Subpages/login'
import Signup from '@/components/Subpages/Signup'
import NewMovie from '@/components/Subpages/NewMovie'
import Generator from '@/components/Subpages/Generator'
import Movies from '@/components/Subpages/Movies'
import Logout from '@/components/Subpages/logout'
import NewCategory from '@/components/Subpages/newCategory'
import Movie from '@/components/Subpages/Movie'
import AuthGuard from '@/router/auth-guard'
import * as firebase from 'firebase'

Vue.use(Router)

export default new Router({
  base: '/filmbase',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recomended',
      name: 'Recomended',
      component: Recomended
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/newmovie',
      name: 'Newmovie',
      component: NewMovie,
      beforeEnter: AuthGuard
    },
    {
      path: '/generator',
      name: 'Generator',
      component: Generator
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/newcategory',
      name: 'NewCategory',
      component: NewCategory,
      beforeEnter: AuthGuard
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    }
  ]
})
