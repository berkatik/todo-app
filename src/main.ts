import Vue from 'vue';
import App from './App.vue';

import BaseCard from './components/UI/BaseCard/BaseCard.vue';
import BaseButton from './components/UI/BaseButton/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog/BaseDialog.vue';

Vue.config.productionTip = false;

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-dialog', BaseDialog);
const app = new Vue({
    render: (h) => h(App),
});

app.$mount('#app');
