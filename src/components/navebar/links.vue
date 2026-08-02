<template>
	<router-link :to="{ name: 'home' }" class="menu-item">
		<home />
	</router-link>
	<router-link :to="{ name: value }" v-for="(value, key) in links" class="menu-item">
		{{ key }}
	</router-link>
</template>

<style scoped>
@reference "#css";
.menu-item {
    @apply relative z-1 flex items-center justify-center;
    @apply transition-all duration-300;
    @apply text-base btn btn-ghost;
    @apply h-11 px-3 py-0;
	@apply rounded-none;
    @apply active-link:border-b-neutral-content! border-0 border-b-4!;
}
.menu-item:hover ,.menu-item:focus {
    anchor-name: --hover-item;
}

</style>

<script>
import home from "@/components/icons/home.vue";

export default {
	components: {
		home,
	},
	data() {
		return {
			links: {
				//text:to_link_name
				test: "test",
				chart: "chart",
			},
		};
	},
};
</script>
