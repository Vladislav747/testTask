import Vue from 'vue';
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

// Install BootstrapVue
import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faSortUp,
  faSortDown,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
library.add(faSortUp, faSortDown, faFilter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import axios from 'axios';
const clientConfigs = require('./config/clientConfigs');
const api = axios.create({
  baseURL: clientConfigs.baseURL
});
// change base Vue http plugin to axios plugin with our url
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return api
  }
});

//Set up false turn off  warning about work in production mode when we launch volume.
Vue.config.productionTip = false

import App from './App';
import router from './router';
import globalData from './globalFunctions';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {

  },
  data: globalData,
  router,
  render: h => h(App)
});