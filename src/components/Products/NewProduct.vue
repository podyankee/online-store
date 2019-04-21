<template lang = "pug">
	v-container
		v-layout(row)
			v-flex(xs12 sm6 offset-sm3)
				h1.text-secondary.mb-3 Create New Product
				v-form.mb-3(ref='form', v-model='valid', lazy-validation='')
					v-text-field(name='title' label='Title' type='text' required='' :rules="[v => !!v || 'Title is required']" v-model='title')
					v-text-field( name='vendor' label='Vendor Product' type='text' v-model='vendor' )
					v-text-field( name='color' label='Color Product' type='text' v-model='color' )
					v-text-field( name='material' label='Material Product' type='text' v-model='material' )
					v-text-field( name='price' label='Price Product' type='text' v-model='price' required='' :rules="[v => !!v || 'Price is required']" )
					v-textarea( name='description' label='Description Product' v-model='description')
				v-layout.mb-3
					v-flex(xs12='')
						v-btn.warning Upload
							v-icon(right='' dark='') cloud_upload
				v-layout
					v-flex(xs12='')
						img
				v-layout
					v-flex(xs12='')
						v-switch(color='primary' v-model='promo' label='Add to Promo')
				v-layout
					v-flex(xs12='')
						v-spacer
							v-btn.success(:disabled="!formIsValid" @click='createProduct') Create Product
</template>

<script>
export default {
	data () {
		return {
			title: '',
			vendor: '',
			color: '',
			material: '',
			price: 0,
			description: '',
			promo: false,
			valid: false
		}
	},
	methods: {
		createProduct () {
			if (this.$refs.form.validate()) {
				const product = {
					title: this.title,
					vendor: this.vendor,
					color: this.color,
					material: this.material,
					price: this.price,
					description: this.description,
					promo: this.promo
				}
				console.log(product);
			}
		}
	},
	computed: {
		formIsValid () {
			return this.title !== '' && this.vendor !== '' && this.color !== '' && this.material !== '' && this.price !== '' &&this.description !== ''
		},
	}
}
</script>

<style lang = "sass">

</style>