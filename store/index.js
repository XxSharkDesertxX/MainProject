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
            if (state.user[state.user.length -1].email !== item.email) {
                state.user.push(item);
            } else {
                alert('user alredy is logine' );
            }
         },
         remove(state,item){
            state.data.splice(item ,1);
         }

        },

        actions:{
            add(context,item){
                context.commit("adds" , item);
            },

            remove(context,item){
                context.commit('remove',item);
            }

        },

        getters:{}

    });
};