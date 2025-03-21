<template>
    <label class="swap swap-rotate mr-3 btn-ghost btn-circle size-10">

        <input type="checkbox" v-model="toggle" />

        <sun class="swap-on w-6 h-6 fill-current"></sun>
        <moon class="swap-off w-6 h-6 fill-current"></moon>

    </label>
</template>

<script>

import moon from '@/components/icons/moon.vue'
import sun from '@/components/icons/sun.vue'

export default {
    components:
    {
        moon,
        sun
    },
    data() {
        return {
            toggle: false,
            its_me: false,
            theme_list:
            {
                dark: 'dracula',
                light: 'light'
            },
        }
    },
    mounted() {

        document.addEventListener("themeChange", (e) => {
            switch (e.data.name) {
                case this.theme_list.dark:
                    this.toggle = false;
                    break;

                case this.theme_list.light:
                    this.toggle = true;
                    break;
            }
        })
        this.init();
    },
    methods: {
        init() {
            const themeName = document.getTheme();

            switch (themeName) {
                case this.theme_list.dark:
                    this.toggle = false;
                    break;

                case this.theme_list.light:
                    this.toggle = true;
                    break;
            }

        }
    },

    watch: {
        toggle(n, o) {

            if (n) {
                document.setTheme('light')
            } else {
                document.setTheme('dracula')
            }
        }
    }
}

</script>