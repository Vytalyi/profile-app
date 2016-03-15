var React = require('react');

module.exports = React.createClass({

    propTypes: {
        personalInfoData: React.PropTypes.object.isRequired
    },

    getData: function () {
        console.log("hook :: personalInfoEdit.getData");

        return {
            nativeName: this.refs.nativeName.getDOMNode().value,
            gender: this.refs.gender.getDOMNode().value,
            birthDay: this.refs.birthDay.getDOMNode().value
        }
    },

    render: function () {
        console.log("hook :: personalInfoEdit.render");

        return (
            <section className="profile-section-personal">
                <h2>Personal Info</h2>
                <ul>
                    <li>
                        <label>Native Name:</label>
                        <input ref="nativeName"
                            type="text"
                            defaultValue={this.props.personalInfoData.nativeName}
                            onChange={this._onChange}
                        />
                    </li>
                    <li>
                        <label>Gender:</label>
                        <input ref="gender"
                            type="text"
                            defaultValue={this.props.personalInfoData.gender}
                            onChange={this._onChange}
                        />
                    </li>
                    <li>
                        <label>Birthday:</label>
                        <input ref="birthDay"
                            type="text"
                            defaultValue={this.props.personalInfoData.birthDay}
                            onChange={this._onChange}
                        />
                    </li>
                </ul>
            </section>
        );
    },

    _onChange: function (e) {
        console.log("hook :: personalInfoEdit._onChange");

        this.setState({value: e.target.value});
    }

});
