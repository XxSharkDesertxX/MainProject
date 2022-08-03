import user from '@/data/users';

export default({store,redirect})=>{
    let usercheck = store.state.user;
    for (const data of usercheck) {
        if (data.username == 'admin' && data.email == 'admin' && data.password =='admin') {
            return redirect('/Admin'); 
        }
    }
};

