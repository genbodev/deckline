const categoriesReducer = (state = null, action) => {
    switch (action.type) {
        case "GET_CATEGORIES_DATA_FULFILLED":
            state = {
                ...state,
                data: action.payload
            };
            break;
        default: break;
        // TO DO REJECT
    }
    return state;
};

export default categoriesReducer;