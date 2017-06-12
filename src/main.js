// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('pusher-js')

import Echo from "laravel-echo"

window.Echo = new Echo({
	broadcaster: 'pusher',
	key: 'your-pusher-key'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
}) 
