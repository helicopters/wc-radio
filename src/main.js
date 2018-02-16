import Vue from 'vue'
import App from './App'

import wcRadio from './wc-radio'

Vue.use(wcRadio);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
