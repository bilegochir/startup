import Vue from 'vue'
import Router from 'vue-router'
import BusinessList from '@/components/BusinessList'
import SmallBusiness from '@/components/SmallBusiness'
import AddBusiness from '@/components/AddBusiness'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BusinessList',
      component: BusinessList
    },
    {
      path: '/company',
      name: 'company',
      component: SmallBusiness
    },
    {
      path: '/addbusiness',
      name: 'addbusiness',
      component: AddBusiness
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})