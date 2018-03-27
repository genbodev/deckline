const adminReducer = (state = { data : null, isSettingsReady: false, isAdminReady : false }, action) => {
    switch (action.type) {
        case "GET_ADMIN_DATA_FULFILLED":
            state = {
                ...state,
                data: action.payload,
                isAdminReady : true
            };
            break;
        case "GET_ADMIN_SETTINGS_FULFILLED":
            state = {
                ...state,
                settings: action.payload,
                isSettingsReady : true
            };
            break;
        default: break;
        // TO DO REJECT
    }
    return state;
};

export default adminReducer;