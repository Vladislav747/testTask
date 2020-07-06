import Vue from 'vue'
import Router from 'vue-router'

import TaskList from '../components/TaskList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'task-list',
      component: TaskList
    }
  ]
})
