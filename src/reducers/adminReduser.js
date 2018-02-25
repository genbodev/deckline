const adminReducer = (state = null, action) => {
    switch (action.type) {
        case "GET_ADMIN_DATA_FULFILLED":
            state = {
                ...state,
                data: action.payload
            };
            break;
        case "GET_ADMIN_SETTINGS_FULFILLED":
            state = {
                ...state,
                settings: action.payload
            };
            break;
        default: break;
        // TO DO REJECT
    }
    return state;
};

export default adminReducer;