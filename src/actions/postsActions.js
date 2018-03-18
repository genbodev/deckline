import CONFIG from '../config';
const {HOST, REST_API_URL, POSTS_PER_PAGE} = CONFIG;

export function getPostsData() {
    return {
        type: 'GET_POSTS_DATA',
        payload: fetch(`${HOST}${REST_API_URL}posts?per_page=${POSTS_PER_PAGE}`)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    return response.json();
                }
            )
            .catch(function(err) {
                return err;
            })
    }
}