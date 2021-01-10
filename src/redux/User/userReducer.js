const INITIAL_STATE_VALUE={
    isLogged: false
}

const userReducer=(state=INITIAL_STATE_VALUE,action)=>{

    switch (action.type) {
        case 'USER_LOGGED_STATUS':
            return({
                isLogged :action.payload.isLogged,
            })
        default:
            return state;
    }
}

export default userReducer;