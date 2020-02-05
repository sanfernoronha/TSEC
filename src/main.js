import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import './components/firebaseinit';

Vue.config.productionTip = false;

let app;
/* eslint-disable */
firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            router,
            vuetify,
            render: h => h(App)
        }).$mount("#app");
    }
})
/* eslint-enable */