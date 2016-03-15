var React = require('react'),
    ProfileStore = require('../stores/ProfileStore'),
    PersonalInfoView = require('../components/PersonalInfoView/PersonalInfoView'),
    VisaRecordsView = require('../components/VisaRecordsView/VisaRecordsView');

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
