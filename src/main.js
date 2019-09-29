import Vue from 'vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuex from 'vuex';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./components/CheckList.vue")
    },
    {
      path: "/ControlCheck",
      component: () => import("./components/ControlCheck.vue")
    },
    {
      path: "/DomainCheck",
      component: () => import("./components/DomainCheck.vue")
    },
    {
      path: "/Graphics",
      component: () => import("./components/Graphics.vue")
    },
    {
      path: "/Dictionary",
      component: () => import("./components/Dictionary.vue")
    }
  ]
});

const store = new Vuex.Store({
  state: {
    data: null
  },
  mutations: {
    setData(state, newData) {
      state.data = newData
    }
  },
  getters: {
      data: state => state.data
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
