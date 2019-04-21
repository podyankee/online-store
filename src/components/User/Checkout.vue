<template lang = "pug">
	v-container
		v-layout(row)
			v-flex(xs12 sm6 offset-sm3)
				h1.text-secondary.mb-3 Orders
				v-list(subheader='' two-line='')
					v-list-tile(avatar='' v-for="(order, i) in orders" :key="i")
						v-list-tile-action
							v-checkbox(color="success" :input-value="order.done" @change="markDone(order)")
						v-list-tile-content
							v-list-tile-title {{ order.name }}
							v-list-tile-sub-title {{ order.phone}}
						v-list-tile-action
							v-btn.primary(:to="'/product/' + order.productId") Open
</template>

<script>
export default {
	data () {
		return {
			orders: [
				{
				id: 'test',
				name: 'Konstantin',
				phone: '22-22-22',
				productId: '1',
				done: false
				}
			]
		}
	},
	methods: {
		markDone (order) {
			order.done = true
		}
	}
}
</script>

<style lang = "sass">

</style>