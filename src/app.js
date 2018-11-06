import Vue from 'vue';
import Button from './button';

Vue.component('g-button',Button);
var vm = new Vue({
    el:'#app',
    data: {
        name: 'vue demo'
    }
})