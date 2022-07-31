import user from '@/data/users';

export default({store,redirect})=>{
    let usercheck = store.state.user;
    for (const data of usercheck) {
        if (data.username == 'ali' && data.email == 'ali' && data.password =='ali') {
            return redirect('/Admin'); 
        }
    }
};

