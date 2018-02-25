export function getPostsData(wp, categoryId) {
    return {
        type: 'GET_POSTS_DATA',
        payload: wp.posts().categories(categoryId).then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}