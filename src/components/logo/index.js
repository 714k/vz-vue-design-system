import { defineCustomElement } from 'vue'
import Logo from './Logo.ce.vue';

const logo = defineCustomElement(Logo);

customElements.define('vz-logo', logo);

export default {
  install(Vue) {
    Vue.component(Logo.name, Logo);
  }
};

export {
  Logo
};