import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const HomePageView = () => import('../views/HomePageView.vue')
const UsedCarView = () => import('../views/UsedCarView.vue')
const UsedCarDetailView = () => import('../views/UsedCarDetailView.vue')
const PriceView = () => import('../views/PriceView.vue')
const ServiceView = () => import('../views/ServiceView.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      // { path: '/top/:page(\\d+)?', component: createListView('top') },
      // { path: '/new/:page(\\d+)?', component: createListView('new') },
      // { path: '/show/:page(\\d+)?', component: createListView('show') },
      // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      // { path: '/job/:page(\\d+)?', component: createListView('job') },
      { path: '/home/:lang', component: HomePageView },
      { path: '/home', component: HomePageView },
      { path: '/trang-chu/:lang', component: HomePageView },
      { path: '/trang-chu', component: HomePageView },
      { path: '/used-card', component: UsedCarView },
      { path: '/used-card/:lang/', component: UsedCarView },
      { path: '/xe-da-qua-su-dung/', component: UsedCarView },
      { path: '/xe-da-qua-su-dung/:lang/', component: UsedCarView },

      // { path: '/used-card/:id(\\d+)', component: UsedCarDetailView },
      // { path: '/used-card/:lang/:id(\\d+)', component: UsedCarDetailView },
      // { path: '/xe-da-qua-su-dung/:id(\\d+)', component: UsedCarDetailView },
      // { path: '/xe-da-qua-su-dung/:lang/:id(\\d+)', component: UsedCarDetailView },

      { path: '/price', component: PriceView },
      { path: '/price/:lang/', component: PriceView },
      { path: '/bang-gia-xe/', component: PriceView },
      { path: '/bang-gia-xe/:lang/', component: PriceView },
      { path: '/services', component: PriceView },
      { path: '/services/:lang/', component: PriceView },
      { path: '/dich-vu/', component: PriceView },
      { path: '/dich-vu/:lang/', component: PriceView },

      { path: '/', redirect: '/trang-chu/vi' }
    ]
  })
}
