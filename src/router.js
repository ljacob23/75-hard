// router.js
import Vue from 'vue';
import Router from 'vue-router';
import ChecklistPage from './components/DayChecklist.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/checklist',
      name: 'checklist',
      component: ChecklistPage,
      props: true
    }
  ]
});
