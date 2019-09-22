import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

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

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
