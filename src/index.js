import './index.js';
import './js/common';
import './sass/main.sass';
import App from './App.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';



window.Vue = require('vue') ;
import router from './router';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});