import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/r_index.js'
import store from '@/store/s_index.js'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar)
Vue.use(ElementUI, {locale});

Vue.config.productionTip = true

new Vue({
  router,
  store,
  beforeCreate(){
    let loginUser = sessionStorage.getItem("loginUser")
    if(loginUser == null){
      return
    }else if(loginUser != null){
      this.$store.dispatch('getMember', loginUser)
    }
  },
  render: h => h(App)
}).$mount('#app')
