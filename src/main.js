import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

// import 'bootstrap'
import 'element-plus/dist/index.css'
// 这个bootstrap.min.css需要放在第一
import '@/styles/css/bootstrap.min.css'  
import '@/styles/css/owl.carousel.min.css'
import '@/styles/css/animate.css'
import '@/styles/css/animated-text.css'
import '@/styles/css/all.min.css'
import '@/styles/css/theme-default.css'
import '@/styles/css/meanmenu.min.css'
import '@/styles/style.css'
import '@/styles/css/owl.transitions.css'
import '@/venobox/venobox.css'
import '@/styles/css/responsive.css'

// js
import '@/assets/js/vendor/modernizr-3.5.0.min.js'

import '@/assets/js/vendor/jquery-3.6.2.min.js'
import '@/assets/js/bootstrap.min.js'
import '@/assets/js/owl.carousel.min.js'
import '@/assets/js/jquery.counterup.min.js'
import '@/assets/js/waypoints.min.js'
// import '@/assets/js/wow.js'

import '@/assets/js/imagesloaded.pkgd.min.js'
import '@/assets/js/ajax-mail.js'
import '@/assets/js/animated-text.js'
import '@/venobox/venobox.min.js'

// import '@/assets/js/isotope.pkgd.min.js'
import '@/assets/js/jquery.meanmenu.js'

import '@/assets/js/jquery.scrollUp.js'

import '@/assets/js/theme.js'
import '@/assets/js/jquery.barfiller.js'

// import "../node_modules/jquery/dist/jquery"

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.min"
// import "popper.js"

router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
