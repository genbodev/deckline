import CONFIG from '../config';

const {CATEGORIES} = CONFIG;
const {regularPosts, productPosts, thermoBoardPosts, terraceBoardPosts} = CATEGORIES;

const sortPostsByCategoryId = (data = [], categotyId = regularPosts.id) => {
    if (data && data.length) {
        let posts = [];
        data.map((post) => {
            let isCategoryExists = post.categories.find((category) => {
                if (category === categotyId) return true;
                return false;
            });

            if (typeof isCategoryExists === 'number') {
                posts.push(post);
            }
            return false;
        });
        return posts;
    } else {
        return null;
    }
};

const postsReducer = (state = null, action) => {
    switch (action.type) {
        case "GET_POSTS_DATA_FULFILLED":
            state = {
                ...state,
                regular: sortPostsByCategoryId(action.payload),
                product: sortPostsByCategoryId(action.payload, productPosts.id),
                thermo: sortPostsByCategoryId(action.payload, thermoBoardPosts.id),
                terrace: sortPostsByCategoryId(action.payload, terraceBoardPosts.id),
                isPostsReady: true
            };
            break;
        default:
            break;
        // TO DO REJECT
    }
    return state;
};

export default postsReducer;