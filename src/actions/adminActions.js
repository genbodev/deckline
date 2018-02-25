export function getAdminData(wp) {
    return {
        type: 'GET_ADMIN_DATA',
        payload: wp.adminData().then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}

export function getSettingsData(wp) {
    return {
        type: 'GET_ADMIN_SETTINGS',
        payload: wp.settings().then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}