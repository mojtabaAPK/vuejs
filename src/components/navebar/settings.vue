<template>
    <div class="flex items-center content-center gap-2">

        <toggle-theme/>

    </div>
</template>

<script>

import toggleTheme      from '@/components/navebar/toggleTheme.vue';


export default {
    components:{
        toggleTheme,
    }
}

</script>