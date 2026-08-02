<template>
	<div class="main-navebar">
		<nav class="menu">
			<div class="menu-bg"></div>

			<links/>
            <toggle-theme class="ml-auto"/>
		</nav>
	</div>
</template>

<script>
import Links from "@/components/navebar/links.vue";
import toggleTheme from "@/components/navebar/toggleTheme.vue";

export default {
	components: {
		Links,
		toggleTheme,
	},
};
</script>

<style scoped>
@reference "#css";

.main-navebar {
	@apply navbar bg-chartBG items-stretch;
	@apply transition-all duration-300;
	@apply p-0 px-2 min-h-auto;
}

.menu {
    @apply flex relative flex-row gap-0 pb-0 w-full;
}

.menu-bg {
    @apply absolute z-0 pointer-events-none;
    @apply transition-all duration-200;
    @apply opacity-0 bg-base-300 dracula:bg-neutral;

    position-anchor: --hover-item;

    left: anchor(left);
    top: anchor(top);
    width: anchor-size(width);
    height: anchor-size(height);
    
}

.menu:has(.menu-item:hover) .menu-bg {
    @apply opacity-100;
}

@supports not (position-anchor: --hover-item) {
    .menu-bg { @apply hidden; }

    .menu-item:hover {
        @apply bg-base-300;
    }
}
</style>
