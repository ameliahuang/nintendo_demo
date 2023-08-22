import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import { onMounted } from 'vue'
// import Swiper from 'swiper'
// import '../src/assets/scss/carousel.scss'
// export default {
// 	setup(){
// 		let swiper = null
// 		onMounted(()=> {
// 		swiper = new Swiper(".mySwiper", {})
// 		})
// 	}
// }

createApp(App).use(router).mount('#app')
