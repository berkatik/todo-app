import Vue from 'vue';
import App from './App.vue';
import 'regenerator-runtime/runtime';

import { ApolloClient } from "apollo-client";
import  { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo from 'vue-apollo';

import BaseCard from './components/UI/BaseCard/BaseCard.vue';
import BaseButton from './components/UI/BaseButton/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog/BaseDialog.vue';


Vue.config.productionTip = false;


const httpLink = new HttpLink({
    uri: 'http://localhost:8080/v1/graphql',
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-dialog', BaseDialog);
const app = new Vue({
    apolloProvider,
    render: (h) => h(App),
    },
);

app.$mount('#app');
