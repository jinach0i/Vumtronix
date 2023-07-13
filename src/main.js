import { createApp } from 'vue'
import './assets/css/reset.css'
import './assets/css/style.css'
import App from './App.vue'
// AOS:
import AOS from 'aos';
import 'aos/dist/aos.css';
const app=createApp(App);
AOS.init(
    {
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    }
  );
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faDownload,faAngleRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faDownload,faAngleRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')