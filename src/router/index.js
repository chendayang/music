import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      name: 'Recommend'
    },
    {
      path: '/rank',
      component: Rank,
      name: 'Rank'
    },
    {
      path: '/singer',
      component: Singer,
      name: 'Singer'
    },
    {
      path: '/search',
      component: Search,
      name: 'Search'
    }
  ]
})
