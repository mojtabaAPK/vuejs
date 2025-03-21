<template>

    <div class="flex flex-col h-full">

        <main-nave-bar />

        <div class="holder">
            <loading v-if="mainLoading" />
            <router-view v-slot="{ Component }">
                <component :is="Component" :key="$route.path" />
            </router-view>
        </div>
    </div>
</template>

<script>


import mainNaveBar  from '@/components/navebar/mainNaveBar.vue';
import loading      from '@/components/loading.vue';
export default {

    components:{
        mainNaveBar,
        loading
    },

    data() {
        return {
            mainLoading: false
        }
    },
    mounted() {

        document.addEventListener("showLoading",async () => {
            this.mainLoading = true;
        });

        document.addEventListener("hideLoading",async () => {
            await document.sleep(200);
            this.mainLoading = false;
        });

        document.setTheme(document.getTheme());
    }
}

</script>

<style scoped>
    @reference "@/assets/styles/style.css";
    .holder {
        @apply relative bg-base-100 overflow-auto;
        @apply transition-all duration-300;
        @apply flex-[1_1_1px]
    }
</style>