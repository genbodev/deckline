export function getPagesData(wp) {
    return {
        type: 'GET_PAGES_DATA',
        payload: wp.pages().then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}