var React = require('react');

module.exports = React.createClass({

    propTypes: {
        personalInfoData: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <section className="profile-section-personal">
                <h2>Personal Info</h2>
                <ul>
                    <li>
                        Native Name: {this.props.personalInfoData.nativeName}
                    </li>
                    <li>
                        Gender: {this.props.personalInfoData.gender}
                    </li>
                    <li>
                        Birthday: {this.props.personalInfoData.birthDay}
                    </li>
                </ul>
            </section>
        );
    }

});
