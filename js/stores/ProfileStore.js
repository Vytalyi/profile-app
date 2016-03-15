var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    ProfileConstants = require('../constants/ProfileConstants'),
    assign = require('object-assign');

// todo... fetch data from server
var _data = {
    personalInfo: {
        nativeName: "John Doe",
        gender: "Male",
        birthDay: "01-Jan-1987"
    },
    visaRecords: {
        items: [
            {country: "Poland", start: "01-Jan-2014", end: "01-Jan-2024"},
            {country: "USA", start: "01-Jan-2015", end: "01-Jan-2025"}
        ]
    }
};

// todo... save data to server
function save(data) {
    console.log("hook :: ProfileStore.save", data);
}

var ProfileStore = assign({}, EventEmitter.prototype, {
    getData: function () {
        return _data;
    }
});

// Register callback to handle all updates
AppDispatcher.register(function (action) {

    switch (action.actionType) {
        case ProfileConstants.PROFILE_SAVEINFO:
            save(action.data);
            break;
    }

});


module.exports = ProfileStore;