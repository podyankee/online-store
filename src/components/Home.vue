<template lang="pug">
	div
		v-container(fluid="")
			v-layout(row)
				v-flex(xs12)
					v-carousel(delimiter-icon='stop' prev-icon='mdi-arrow-left' next-icon='mdi-arrow-right')
						v-carousel-item(v-for="product, i in promoProducts", :key="i", :src="product.imageSrc")
		v-container(grid-list-lg="")
			v-layout(row, wrap)
				v-flex(xs12, sm6,md4, v-for="product, i in products", :key="i")
					router-link(:aria-label="product.title" :to="'/product/' + product.id")
						v-img(:src="product.imageSrc", height="350px")
					v-card
						v-card-title(primary-title='')
							div
								h3.card_heading.heading {{ product.title }}
								div.card_describe
									p.subheading {{ product.description.substring(0,60) }} ...
									p.subheading.card_price #[span.title Price: ] ${{ product.price }}
						v-card-actions
							v-spacer
							v-btn(dark='' color='light-blue darken-4' round='' outline='' :to="'/product/' + product.id") Description
							v-btn(dark='' color='light-blue darken-4' round='') Add to cart

</template>

<script>
export default {
	computed: {
		promoProducts () {
			return this.$store.getters.promoProducts
		},
		products () {
			return this.$store.getters.products
		}
	}
}
</script>

<style lang="sass" scoped>
	.card
		&_heading
			font-weight: bold
			word-wrap: breakword
			text-align: center
			margin-bottom: 1.5rem
		&_describe
			margin-top: auto
			padding-left: 1rem
		&_price
			color: #c00f1b
			font-size: 18px
</style>