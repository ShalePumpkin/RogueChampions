<template>
	<div>
		<h2 class="banger yellow">Heroes</h2>
		<HeroesList />
	</div>
</template>
<script>
	import Vue from "vue"
	import HeroesList from "./HeroesList.vue"

	export default Vue.extend({
		name: 'Heroes',
		components: {
			HeroesList,
		},
	})
</script>
