<template lang = "pug">
	v-container(fluid='' fill-height='')
		v-layout(align-center='' justify-center='')
			v-flex(xs12='' sm8='' md6='')
				v-card.elevation-12
					v-toolbar(dark='' color='primary')
						v-toolbar-title Login form
					v-card-text
						v-form(ref='form', v-model='valid', lazy-validation='')
							v-text-field(prepend-icon='person' name='email' aria-label='Email' type='email' :rules="emailRules" v-model='email')
							v-text-field(prepend-icon='lock' name='password' aria-label='Password' type='password' :rules="passwordRules" v-model='password' :counter="6")
					v-card-actions
						v-spacer
						v-btn(color='primary' @click='onSubmit' :loading="loading" :disabled="!valid || loading") Login
</template>

<script>
export default {
	data () {
		return {
			email: '',
			password: '',
			valid: false,
			emailRules: [
				v => !!v || 'Email is required',
				v => /.+@.+/.test(v) || 'Email mast be valid'
			],
			passwordRules: [
				v => !!v || 'Password is required',
				v => (v && v.length >= 6) || 'Password mast be equal or more than 6 characters'
			]
		}
	},
	computed: {
		loading () {
			return this.$store.getters.loading
		}
	},
	methods: {
		onSubmit () {
			if (this.$refs.form.validate()) {
				const user = {
					email: this.email,
					password: this.password
				}
				this.$store.dispatch('loginUser',user)
				.then(() => {
					this.$router.push('/')
				})
				.catch(() => {})
			}
		}
	},
	created () {
		if (this.$route.query['loginError']) {
			this.$store.dispatch('setError', 'Please log in to access this page')
		}
	}
}
</script>

<style lang ="sass">

</style>