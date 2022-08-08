import Vuex from 'vuex';
import data from '~/layouts/data/index.js';
import user from '~/layouts/data/users.js';

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
         },
         addpost(state,item){
            state.data.push(item);
         }

        },

        actions:{
            add(context,item){
                context.commit("adds" , item);
            },

            remove(context,item){
                context.commit('remove',item);
            },

            addpost(context,item){
                context.commit('addpost',item);
            }

        },

        getters:{}

    });
};