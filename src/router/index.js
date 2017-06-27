import Vue from 'vue'
import Router from 'vue-router'
import Mheader from '@/components/m-header/m-header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mheader',
      component: Mheader
    }
  ]
})
