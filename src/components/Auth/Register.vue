<template lang = "pug">
	v-container(fluid='' fill-height='')
		v-layout(align-center='' justify-center='')
			v-flex(xs12='' sm8='' md6='')
				v-card.elevation-12
					v-toolbar(dark='' color='primary')
						v-toolbar-title Registration form
					v-card-text
						v-form(ref='form', v-model='valid', lazy-validation='')
							v-text-field(prepend-icon='person' name='email' aria-label='Email' type='email' :rules="emailRules" v-model='email')
							v-text-field(prepend-icon='lock' name='password' aria-label='Password' type='password' :rules="passwordRules" v-model='password' :counter="6")
							v-text-field(prepend-icon='repeat' name='confirm-password' aria-label='Confirm Password' type='password' :rules="confirmPasswordRules" v-model='confipmPassword' :counter="6")
					v-card-actions
						v-spacer
						v-btn(color='primary' @click='onSubmit' :loading="loading" :disabled="!valid || loading") Create  Account
</template>

<script>
export default {
	data () {
		return {
			email: '',
			password: '',
			confipmPassword: '',
			valid: false,
			emailRules: [
				v => !!v || 'Email is required',
				v => /.+@.+/.test(v) || 'Email mast be valid'
			],
			passwordRules: [
				v => !!v || 'Password is required',
				v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
			],
			confirmPasswordRules: [
				v => !!v || 'Password is required',
				v => v === this.password || 'Password should match'
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
				this.$store.dispatch('registerUser', user)
				.then(() => {
					this.$router.push('/')
				})
				.catch(() => {})
			}
		}
	}
}
</script>

<style lang ="sass">

</style>