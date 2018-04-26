import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SmallBusiness from '@/components/SmallBusiness'
import AddCompany from '@/components/AddCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/company',
      name: 'company',
      component: SmallBusiness
    },
    {
      path: '/addcompany',
      name: 'addcompany',
      component: AddCompany
    }
  ]
})