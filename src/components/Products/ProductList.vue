<template lang="pug">
	v-container
		v-layout(row)
			v-flex(xs12 sm-6 offset-sm3)
				h1.text--secondary.mb3 My Products
				v-card.elevation-10.mb-2(v-for="product,i in myProducts" :key="i")
					v-layout
						v-flex(xs-4)
							v-img(:src="product.imageSrc" height="250px" width="300px")
						v-flex(xs-8)
							v-card-text
								h2.text-primary {{ product.title}}
								p {{ product.description}}
							v-card-actions
								v-spacer
								v-btn.info(:to="'/product/' + product.id") Open
</template>

<script>
export default {
	computed: {
		myProducts () {
			return this.$store.getters.myProducts
		}
	}
}
</script>

<style lang="sass">

</style>