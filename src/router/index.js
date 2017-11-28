import Vue from 'vue'
import Router from 'vue-router'
import createRecord from '@/components/createRecord'
import attendanceList from '@/components/attendanceList'
import attendanceSummary from '@/components/attendanceSummary'

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
    },
    {
      path:'/attendanceSummary',
      name:'listSummary',
      component:attendanceSummary
    }
  ]
})
