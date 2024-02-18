// router.js
import Vue from 'vue';
import Router from 'vue-router';
import ChecklistPage from './components/dayChecklist.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/checklist/:day',
      name: 'checklist',
      component: ChecklistPage,
      props: true
    }
  ]
});
