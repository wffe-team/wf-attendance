import Vue from 'vue'
import Router from 'vue-router'
import createRecord from '@/components/createRecord'
import attendanceList from '@/components/attendanceList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/enter',
      name:'enter',
      component:createRecord
    },
    {
      path:'/attendanceList',
      name:'list',
      component:attendanceList
    }
  ]
})
