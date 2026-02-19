<template>
    <div class="loading-page">
        <div>
            <span class="loading loading-ring loading-xl"></span>
        </div>
    </div>
</template>

<script>
import loading      from '@/components/icons/loading.vue';
export default {
    components:{
        loading
    }
}

</script>


<style scoped>

@reference "@/assets/styles/style.css";

.loading-page {
    @apply absolute top-0 left-0 right-0 bottom-0;
    @apply z-[5] bg-chartBG/80;

    div {
        
        @apply justify-center content-center items-center;
        @apply flex flex-wrap;
        @apply h-full m-auto;

        progress {
            @apply progress animation-600! w-56 m-auto;
        }
    }
}

</style>
