<template>

    <div class="drop-down dropdown-hover">

        <div class="w-9">
            <router-link :to="{ name: 'home' }" :key="$route.fullPath">
                <user class="scale-75" />
            </router-link>
        </div>



        <ul tabindex="1" class="dropdown-content">
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
        </ul>
    </div>

</template>

<script>

import user             from '@/components/icons/user.vue';
export default {
    components:{
        user,
    }
}

</script>

<style scoped>
@reference "@/assets/styles/style.css";

.drop-down {
    @apply dropdown dropdown-end;

    lable {
        @apply btn btn-ghost btn-circle;
        @apply m-1 w-10 h-auto min-h-0;
    }

    ul {
        @apply menu menu-sm shadow bg-base-100 rounded-box;
        @apply z-[20] p-2 w-52;
    }
}
</style>