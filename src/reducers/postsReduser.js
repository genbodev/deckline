import CONFIG from '../config';

const { CATEGORIES } = CONFIG;

function sortPostsByCategory(data = []) {
    return data;
}

const postsReducer = (state = null, action) => {
    switch (action.type) {
        case "GET_POSTS_DATA_FULFILLED":
            state = {
                ...state,
                data: sortPostsByCategory(action.payload)
            };
            break;
        default:
            break;
        // TO DO REJECT
    }
    return state;
};

export default postsReducer;