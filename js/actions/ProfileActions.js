var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ProfileConstants = require('../constants/ProfileConstants');

var ProfileActions = {

    // save Profile to server
    saveProfileInfo: function (data) {
        AppDispatcher.dispatch({
            actionType: ProfileConstants.PROFILE_SAVEINFO,
            data: data
        });
    }

};

module.exports = ProfileActions;