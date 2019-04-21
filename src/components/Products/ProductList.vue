<template lang="pug">
	v-container
		v-layout(row)
			v-flex(xs12 sm-6 offset-sm3)
				h1.text--secondary.mb3 My Products
				v-card.elevation-10.mb-2(v-for="product,i in products" :key="i")
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
				}
			]
		}
	}
}
</script>

<style lang="sass">

</style>