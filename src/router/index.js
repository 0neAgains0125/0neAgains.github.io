import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const HomePageView = () => import('../views/HomePageView.vue')
const UsedCarView = () => import('../views/UsedCarView.vue')
const CarDetailInformation = () => import('../views/CarDetailInformation.vue')
const PriceView = () => import('../views/PriceView.vue')
const ServiceView = () => import('../views/ServiceView.vue')
const IntroductionView = () => import('../views/IntroductionView.vue')
const ContactView = () => import('../views/ContactView.vue')
const AdsisoryBuyInstallmentCarView = () => import('../views/AdsisoryBuyInstallmentCarView.vue')
const AdsisoryInsurranceView = () => import('../views/AdsisoryInsurranceView.vue')
const ServiceAccesoriesView = () => import('../views/ServiceAccesoriesView.vue')
const ServiceMaintenanceView = () => import('../views/ServiceMaintenanceView.vue')
const ServicePaintingCoView = () => import('../views/ServicePaintingCoView.vue')
const ServiceRescueView = () => import('../views/ServiceRescueView.vue')
const ServiceWarrantyView = () => import('../views/ServiceWarrantyView.vue')
const SaleCarRegistration = () => import('../views/SaleCarRegistration.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/home/:lang', component: HomePageView },
      { path: '/home', component: HomePageView },
      { path: '/trang-chu/:lang', component: HomePageView },
      { path: '/trang-chu', component: HomePageView },

      { path: '/used-card', component: UsedCarView },
      { path: '/used-card/:lang/', component: UsedCarView },
      { path: '/xe-da-qua-su-dung/', component: UsedCarView },
      { path: '/xe-da-qua-su-dung/:lang/', component: UsedCarView },

      { path: '/about-us', component: IntroductionView },
      { path: '/about-us/:lang/', component: IntroductionView },
      { path: '/gioi-thieu/', component: IntroductionView },
      { path: '/gioi-thieu/:lang/', component: IntroductionView },

      { path: '/contact', component: ContactView },
      { path: '/contact/:lang/', component: ContactView },
      { path: '/lien-he/', component: ContactView },
      { path: '/lien-he/:lang/', component: ContactView },

      { path: '/saling-registration', component: SaleCarRegistration },
      { path: '/saling-registration/:lang/', component: SaleCarRegistration },
      { path: '/dang-ky-ban-xe', component: SaleCarRegistration },
      { path: '/dang-ky-ban-xe/:lang/', component: SaleCarRegistration },
  
      { path: '/price', component: PriceView },
      { path: '/price/:lang/', component: PriceView },
      { path: '/bang-gia-xe/', component: PriceView },
      { path: '/bang-gia-xe/:id(\\d+)?', component: CarDetailInformation },
      { path: '/bang-gia-xe/:id(\\d+)?/:lang/', component: CarDetailInformation },

      { path: '/services', component: ServiceWarrantyView },
      { path: '/services/:lang/', component: ServiceWarrantyView },
      { path: '/dich-vu/', component: ServiceWarrantyView },
      { path: '/dich-vu/:lang/', component: ServiceWarrantyView },

      { path: '/services/warrantly', component: ServiceWarrantyView },
      { path: '/services/warrantly/:lang/', component: ServiceWarrantyView },
      { path: '/dich-vu/bao-hanh', component: ServiceWarrantyView },
      { path: '/dich-vu/bao-hanh/:lang/', component: ServiceWarrantyView },

      { path: '/services/maintenace', component: ServiceMaintenanceView },
      { path: '/services/maintenace/:lang/', component: ServiceMaintenanceView },
      { path: '/dich-vu/bao-duong', component: ServiceMaintenanceView },
      { path: '/dich-vu/bao-duong/:lang/', component: ServiceMaintenanceView },

      { path: '/services/paintingco', component: ServicePaintingCoView },
      { path: '/services/paintingco/:lang/', component: ServicePaintingCoView },
      { path: '/dich-vu/sua-chia-dong-son', component: ServicePaintingCoView },
      { path: '/dich-vu/sua-chia-dong-son/:lang/', component: ServicePaintingCoView },


      { path: '/services/rescue', component: ServiceRescueView },
      { path: '/services/rescue/:lang/', component: ServiceRescueView },
      { path: '/dich-vu/cuu-ho-cuu-nan', component: ServiceRescueView },
      { path: '/dich-vu/cuu-ho-cuu-nan/:lang/', component: ServiceRescueView },

      { path: '/services/accessories', component: ServiceAccesoriesView },
      { path: '/services/accessories/:lang/', component: ServiceAccesoriesView },
      { path: '/dich-vu/phu-tung-linh-kien', component: ServiceAccesoriesView },
      { path: '/dich-vu/phu-tung-linh-kien/:lang/', component: ServiceAccesoriesView },

      { path: '/adsirory/insurrance', component: AdsisoryInsurranceView },
      { path: '/adsirory/insurrance/:lang/', component: AdsisoryInsurranceView },
      { path: '/tu-van/bao-hiem', component: AdsisoryInsurranceView },
      { path: '/tu-van/bao-hiem/:lang/', component: AdsisoryInsurranceView },

      { path: '/adsirory/rescue', component: AdsisoryInsurranceView },
      { path: '/adsirory/rescue/:lang/', component: AdsisoryInsurranceView },
      { path: '/tu-van/cuu-ho-cuu-nan', component: AdsisoryInsurranceView },
      { path: '/tu-van/cuu-ho-cuu-nan/:lang/', component: AdsisoryInsurranceView },

      { path: '/adsirory/buy-installment-car', component: AdsisoryBuyInstallmentCarView },
      { path: '/adsirory/buy-installment-car/:lang/', component: AdsisoryBuyInstallmentCarView },
      { path: '/tu-van/mua-xe-tra-gop', component: AdsisoryBuyInstallmentCarView },
      { path: '/tu-van/mua-xe-tra-gop/:lang/', component: AdsisoryBuyInstallmentCarView },


      { path: '/', redirect: '/trang-chu/vi' }
    ]
  })
}
