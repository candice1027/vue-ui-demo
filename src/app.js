import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
var vm = new Vue({
    el:'#app',
    data: {
        name: 'vue demo',
        loading1: false,
        loading2: true,
        loading3: true,
    },
    methods: {
        changeStatus() {
            console.log(this.loading1)
        }
    }
})