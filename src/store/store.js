import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex);   //vue plugin이라는 기능 -> vue use


export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});