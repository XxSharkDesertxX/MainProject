import Vuex from 'vuex';
import data from '@/data/index.js';
import user from '@/data/users.js';

export default()=>{
    return new Vuex.Store({
        state:{
            data,
            user
        },

        mutations:{
         adds(state,item){
            state.user.push(item);
         }

        },

        actions:{
            add(context,item){
                context.commit("adds" , item);
            }
        },

        getters:{}

    });
};