var React = require('react'),
    ProfileStore = require('../stores/ProfileStore'),
    PersonalInfoEdit = require('../components/PersonalInfoEdit/PersonalInfoEdit'),
    VisaRecordsEdit = require('../components/VisaRecordsEdit/VisaRecordsEdit'),
    ProfileActions = require('../actions/ProfileActions');

module.exports = React.createClass({

    getInitialState: function () {
        console.log("hook :: ProfileEdit.getInitialState");

        return ProfileStore.getData();
    },

    componentDidMount: function () {
        ProfileStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProfileStore.removeChangeListener(this._onChange);
    },

    getData: function () {
        return {
            personalInfo: this.refs.personalInfo.getData(),
            visaRecords: this.refs.visaRecords.getData()
        };
    },

    render: function () {
        console.log("hook :: ProfileEdit.render");

        return (
            <div>
                <PersonalInfoEdit
                    ref="personalInfo"
                    personalInfoData={this.state.personalInfo}
                />
                <VisaRecordsEdit
                    ref="visaRecords"
                    visaRecordsData={this.state.visaRecords}
                />
                <button
                    onClick={this._onSave}>
                    Save
                </button>
            </div>
        );
    },

    _onSave: function (e) {
        console.log("hook :: ProfileEdit._onSave");

        // trigger saving action
        ProfileActions.saveProfileInfo(this.getData());
    },

    // update state once ProfileStore has been changed
    _onChange: function () {
        this.setState(ProfileStore.getData());
    }

});
