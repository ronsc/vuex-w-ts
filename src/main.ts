import Vue from 'vue';

// Vuex store
import store from './store';

// Components
import { Sketch } from 'vue-color';
import * as components from './components';

// Views
import Home from './views/Home.vue';

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});
Vue.component('sketch-picker', Sketch);

new Vue({
    el: '#app',
    store,
    render: h => h(Home)
});
