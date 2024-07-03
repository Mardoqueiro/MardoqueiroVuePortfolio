import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'boxicons'
import '/src/assets/css/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

createApp(App).use(store).use(router).mount('#app')
AOS.init();