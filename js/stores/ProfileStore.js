var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    ActionTypes = require('../constants/ActionTypes'),
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
    _data = data;
    console.log("hook :: ProfileStore.save", data);
}

var ProfileStore = assign({}, EventEmitter.prototype, {

    getData: function () {
        return _data;
    },

    emitChange: function () {
        this.emit("change");
    },

    addChangeListener: function (callback) {
        this.on("change", callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener("change", callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function (action) {

    switch (action.actionType) {
        case ActionTypes.PROFILE_SAVEINFO:
            save(action.data);
            ProfileStore.emitChange();
            break;
    }

});


module.exports = ProfileStore;