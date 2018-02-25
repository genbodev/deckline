export function getPagesData(wp, pageId) {
    return {
        type: 'GET_PAGES_DATA',
        payload: wp.pages().id(pageId).then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}