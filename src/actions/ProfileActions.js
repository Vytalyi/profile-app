var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes');

module.exports = {

    // save Profile to server
    saveProfileInfo: function (data) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.PROFILE_SAVEINFO,
            data: data
        });
    }

};
