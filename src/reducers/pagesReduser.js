const pagesReducer = (state = {data: null, isPagesReady: false}, action) => {
    switch (action.type) {
        case "GET_PAGES_DATA_FULFILLED":
            state = {
                ...state,
                data: action.payload,
                isPagesReady: true
            };
            break;
        default:
            break;
        // TO DO REJECT
    }
    return state;
};

export default pagesReducer;