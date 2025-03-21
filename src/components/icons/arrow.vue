<template>

        <svg width="16" height="16" viewBox="0 0 20 20" preserveAspectRatio="none">
            <path stroke="currentColor" fill="none" d="M0 20 L10 0 L20 20" class="item" v-bind="{top,right,left,bottom}" />
        </svg>

</template>

<style scoped>

.item {
    &[left]{
        @apply -rotate-90 origin-center;
    }

    &[right]{
        @apply rotate-90 origin-center;
    }

    &[top]{
        @apply rotate-0 origin-center;
    }

    &[bottom]{
        @apply rotate-180 origin-center;
    }
}

</style>

<script>

export default {
    props:{
        top:false,
        right:false,
        left:false,
        bottom:false,
    }
}

</script>