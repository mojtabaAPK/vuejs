<template>
    <div class="flex items-center content-center gap-2">

        <Drop-down/>
        <toggle-theme/>

    </div>
</template>

<script>


import toggleTheme      from '@/components/toggleTheme.vue';
import DropDown         from '@/components/navebar/DropDown.vue';


export default {
    components:{
        DropDown,
        toggleTheme,
    }
}

</script>