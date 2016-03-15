var React = require('react'),
    ProfileStore = require('../stores/ProfileStore'),
    PersonalInfoView = require('../components/PersonalInfo/PersonalInfoView'),
    VisaRecordsView = require('../components/VisaRecords/VisaRecordsView');

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
