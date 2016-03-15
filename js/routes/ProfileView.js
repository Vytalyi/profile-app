var React = require('react'),
    ProfileStore = require('../stores/ProfileStore'),
    PersonalInfoView = require('../components/PersonalInfoView/PersonalInfoView'),
    VisaRecordsView = require('../components/VisaRecordsView/VisaRecordsView');

module.exports = React.createClass({

    getInitialState: function () {
        console.log("hook :: ProfileView.getInitialState");

        return ProfileStore.getData();
    },

    componentDidMount: function () {
        ProfileStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProfileStore.removeChangeListener(this._onChange);
    },

    render: function () {
        console.log("hook :: ProfileView.render");

        return (
            <div>
                <PersonalInfoView
                    personalInfoData={this.state.personalInfo}
                />
                <VisaRecordsView
                    visaRecordsData={this.state.visaRecords}
                />
            </div>
        );
    },

    // update state once ProfileStore has been changed
    _onChange: function () {
        this.setState(ProfileStore.getData());
    }


});
