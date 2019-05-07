import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import Trend from "vuetrend"


Vue.config.productionTip = false


Vue.use(Trend)

Vue.use(SuiVue);
new Vue({
    render: h => h(App),
}).$mount('#app')

