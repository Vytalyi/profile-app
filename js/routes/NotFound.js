var React = require('react'),
    ProfileStore = require('../stores/ProfileStore'),
    PersonalInfoView = require('../components/PersonalInfo/PersonalInfoView'),
    VisaRecordsView = require('../components/VisaRecords/VisaRecordsView');

module.exports = React.createClass({

    render: function () {
        console.log("hook :: NotFound.render");

        return (
            <h1>
                Page Not Found
            </h1>
        );
    }

});
