<template lang = "pug">
	v-container
		section.product.mt-3.elevation-10
			v-layout(row wrap)
				v-flex(xs-12 lg-6)
					img.product_img(src="https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg")
				v-flex(xs-12 lg-6)
					.product_info
						h5.product_title.display-1.mb-3.mt-3 Заголовок продукта
						p.product_category.title
							span.product_title Vendor:
							|  Lorem
						p.product_price.title
							span.product_title Price:
							|  $ 1000
						p.product_color.title
							span.product_title Color:
							span.product_color__bg(:title="purple" :style="{ backgroundColor:'purple' }")
						p.title
							span.product_title Material:
							|  Lorem
						.title.mb-5
							p.product_title.mb-2 Description:
							|  lorem loremFor weary at my it by lenore
						v-btn.headline(color="primary") Edit
						v-btn.headline(color="primary") Buy
</template>

<script>
export default {
	data () {
		return {}
	}
}
</script>

<style lang = "sass" scoped>
	.product
		display: flex
		align-items: center
		flex-wrap: wrap
		border: 1px solid #1c77ad
		padding: 30px
		margin-bottom: 100px
		&_img
			height: 100%
			width: 550px
		&_info
			margin-left: 50px
		&_title
			font-size: 1.6rem
			font-weight: bold
			color: #1875d0
			margin-bottom: 0
		&_price
			color: red
		&_color__bg
			display: inline-block
			width: 50px
			height: 20px
			border: 1px solid #2b2b2b
			border-radius: 10px
</style>