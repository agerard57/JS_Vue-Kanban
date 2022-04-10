import Vue from "vue";
import VeeValidate from "vee-validate";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueToast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
