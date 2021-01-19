const INITIAL_STATE_VALUE={
    isOpen: false
}

const drawerReducer=(state=INITIAL_STATE_VALUE,action)=>{

    switch (action.type) {
        case 'DRAWER_STATUS':
            return({
                isOpen :action.payload.isOpen,
            })
        default:
            return state;
    }
}

export default drawerReducer;