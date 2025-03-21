<template>
    <div class="one">
        <router-link :to='{ name: "home" }'>
            <home />
        </router-link>
        <router-link :to='{ name: value }' v-for="(value, key) in links">
            {{key}}
        </router-link>
    </div>
</template>

<style scoped>
@reference "@/assets/styles/style.css";
.one {
    @apply flex flex-1 items-center gap-1;
    & a {
        @apply btn btn-ghost text-base p-2 px-3 min-h-0 h-auto items-center;
        @apply active-link:border-b-neutral-content! border-0 border-b-4! rounded-b-sm;
    }
}

</style>

<script>

import home             from '@/components/icons/home.vue';

export default {
    components:{
        home,
    },
    data(){
        return {
            links:{
                //text:to_link_name
                test:'test',
                chart:'chart'
            }
        }
    },
}

</script>