<template lang="pug">
	v-app
		Navbar
		template(v-if="error")
			v-snackbar(:multiline="true" :timeout="5000" color="error" @input="closeError" :value="true")
				| {{ error }}
				v-btn(dark="" flat="" @click.native="closeError") Close
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
	components: {
		Navbar
	},
	methods: {
		closeError () {
			this.$store.dispatch('clearError')
		}
	},
	computed: {
		error () {
			return this.$store.getters.error
		}
	}
}
</script>

<style lang="sass">

</style>
