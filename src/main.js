import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import axios from "./plugins/axios";
import auth from "./plugins/auth";
import VueAxios from "vue-axios";

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

createApp(App)
  .use(pinia)
  .use(router)
  .use(auth)
  .use(VueAxios, axios)
  .mount('#app')
