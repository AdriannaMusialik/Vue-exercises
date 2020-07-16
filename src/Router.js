
import Vue from 'vue';
import VueRouter from 'vue-router';
import Article from './components/Article';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:id',
    name: 'Article',
    component: Article,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
