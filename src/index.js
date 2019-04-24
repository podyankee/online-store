import '@babel/polyfill'
import './index.js';
import './js/common';
import './sass/main.sass';
import App from './App.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';



window.Vue = require('vue') ;
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import * as fb from 'firebase/app';
Vue.use(Vuetify);
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
	created () {
				// Initialize Firebase
				var config = {
					apiKey: 'AIzaSyCrvD3zEoTQFgxN5_KN_gVBLob8KhRYP-Y',
				authDomain: 'onlinestore-d808c.firebaseapp.com',
				databaseURL: 'https://onlinestore-d808c.firebaseio.com',
				projectId: 'onlinestore-d808c',
				storageBucket: 'onlinestore-d808c.appspot.com',
				messagingSenderId: '725772619209'
			};
			fb.initializeApp(config);

			fb.auth().onAuthStateChanged(user => {
				if (user) {
					this.$store.dispatch('autoLoginUser', user);
				}
			});
	}
});