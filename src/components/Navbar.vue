<template lang = "pug">
	div
		v-navigation-drawer(app,temporary,v-model="sideNav")
			v-list
				v-list-tile(v-for="(link, i) in links", :key="i", :to="link.url")
					v-list-tile-action
						v-icon {{ link.icon}}
					v-list-tile-content
						v-list-tile-title(v-text="link.title")
				v-list-tile(@click="onLogout" v-if="isUserLoggedIn")
					v-list-tile-action
						v-icon exit_to_app
					v-list-tile-content
						v-list-tile-title(v-text="'Logout'")
		v-toolbar(app, dark, color="primary")
			v-toolbar-side-icon.hidden-md-and-up(@click="sideNav = !sideNav")
			v-toolbar-title
				router-link(to="/" tag="span" class="pointer") Online Store
			v-spacer
			v-toolbar-items.hidden-sm-and-down
				v-btn(flat='',v-for="(link, i) in links", :key="i", :to="link.url")
					v-icon(left) {{ link.icon}}
					|{{ link.title }}
				v-btn(flat='' @click="onLogout" v-if="isUserLoggedIn")
					v-icon(left) exit_to_app
					| Logout
		v-content
			router-view
</template>

<script>
export default {
	data () {
		return {
			sideNav: false
		}
	},
	methods: {
		onLogout () {
			this.$store.dispatch('logoutUser')
			this.$router.push('/')
		}
	},
	computed: {
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn
		},
		links () {
			if (this.isUserLoggedIn) {
				return [
					{ title: 'Cart', icon: 'shopping_cart', url: '/checkout' },
					{ title: 'New Product', icon: 'add', url: '/new' },
					{ title: 'My Products', icon: 'list', url: '/list' }
				]
			}
			return [
				{ title: 'Login', icon: 'account_box', url: '/login' },
				{ title: 'Register', icon: 'face', url: '/register' }
			]
		}
	}
}
</script>

<style lang = "sass" scoped>
	.pointer
		cursor: pointer
</style>
