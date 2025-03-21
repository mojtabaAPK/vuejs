import { createApp }    from    'vue';

import                          '@/assets/styles/style.css';

import                          '@/pkg/setup';
import {router}         from    '@/pkg/router';

import App from '@/App.vue';

const app = createApp(App);


app.config.globalProperties.console = console;
app.config.globalProperties.alert = (msg)=>{alert(msg)};

app.config.devtools = false;

app.use(router);
app.mount('#app');
