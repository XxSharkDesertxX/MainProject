import Vuex from 'vuex';
import data from '@/data/index.js';

export default()=>{
    return new Vuex.Store({
        state:{
            data
        },

        mutations:{},

        actions:{},

        getters:{}

    });
};