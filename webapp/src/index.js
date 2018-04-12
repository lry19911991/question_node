import Vue from "vue";

// import App from "./App";

import router from './router.js';

import app from './App.vue';


new Vue({
    el: '#app',
    router,
    render: h => h(app)
})

//
// new Vue({
//
//     el: "#app",
//     router,
//     render: h => h(App)
//
// })