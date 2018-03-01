export function getPostsData(wp) {
    return {
        type: 'GET_POSTS_DATA',
        payload: wp.posts().then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}