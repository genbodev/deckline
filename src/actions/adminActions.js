export function getAdminData(wp, adminUserId) {
    return {
        type: 'GET_ADMIN_DATA',
        payload: wp.users().id(adminUserId).then(function (data) {
            return data.admin_data;
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