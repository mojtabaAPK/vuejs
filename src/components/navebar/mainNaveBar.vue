<template>
    <div class="main-navebar">
        <Links />
        <Settings/>
    </div>

</template>

<script>

import Links            from '@/components/navebar/links.vue';
import Settings         from '@/components/navebar/settings.vue';

export default {

    components:{
        Links,
        Settings,
    }

}

</script>

<style scoped>
@reference "@/assets/styles/style.css";

.main-navebar {
    @apply navbar bg-base-100 items-stretch ;
    @apply transition-all duration-300;
    @apply p-0 px-2 min-h-14;
}

</style>