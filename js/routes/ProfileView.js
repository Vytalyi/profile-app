var React = require('react'),
    ProfileStore = require('../stores/ProfileStore'),
    PersonalInfoView = require('../components/PersonalInfoView/PersonalInfoView'),
    VisaRecordsView = require('../components/VisaRecordsView/VisaRecordsView');

module.exports = React.createClass({

    getInitialState: function () {
        console.log("hook :: ProfileView.getInitialState");

        return ProfileStore.getData();
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
    }

});
