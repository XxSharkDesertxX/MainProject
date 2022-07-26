import  user from '@/data/users';

export default function ({ store, redirect }) {

     if (store.state.user.length <=1) {
        console.log(store.state.user.length);
        return redirect('/Login');      
     }
  }