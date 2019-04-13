<template lang="pug">
	div
		v-container(fluid="")
			v-layout(row)
				v-flex(xs12)
					v-carousel(delimiter-icon='stop' prev-icon='mdi-arrow-left' next-icon='mdi-arrow-right')
						v-carousel-item(v-for="product, i in products", :key="i", :src="product.imageSrc")
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
	data () {
		return {
			products: [
				{
					id: '1',
					title: 'Lenovo Legion Y520',
					vendor: 'Lenovo',
					color: 'black',
					material: 'metal/plastic',
					description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD ���/NVIDIA GeForce GTX 1050, 4096 ��/Wi-Fi/Bluetooth/Win 10 Home',
					price: 760,
					promo: false,
					imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
				},
				{
					id: '2',
					title: 'Asus FX503VD',
					vendor: 'Asus',
					color: 'white',
					material: 'plastic',
					description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD ���/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
					price: 984,
					promo: true,
					imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
				},
				{
					id: '3',
					title: 'ASUS TUF Gaming FX504GD',
					vendor: 'Asus',
					color: 'black',
					material: 'metal/plastic',
					description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD ���/NVIDIA GeForce GTX 1050, 4096 ��/Wi-Fi/Bluetooth/Win 10 Home',
					price: 1220,
					promo: true,
					imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg'
				}
			]
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