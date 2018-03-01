export function getCategoriesData(wp) {
    return {
        type: 'GET_CATEGORIES_DATA',
        payload: wp.categories().then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}