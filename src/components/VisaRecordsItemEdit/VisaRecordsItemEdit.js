var React = require('react');

var VisaRecordsitemEdit = React.createClass({

    propTypes: {
        visaRecordsItemData: React.PropTypes.object.isRequired
    },

    getData: function () {
        return {
            country: this.refs.country.getDOMNode().value,
            start: this.refs.start.getDOMNode().value,
            end: this.refs.end.getDOMNode().value
        }
    },

    render: function () {
        return (
            <li>
                <input ref="country"
                    type="text"
                    defaultValue={this.props.visaRecordsItemData.country}
                    onChange={this._onChange}
                />
                <input ref="start"
                    type="text"
                    defaultValue={this.props.visaRecordsItemData.start}
                    onChange={this._onChange}
                />
                <input ref="end"
                    type="text"
                    defaultValue={this.props.visaRecordsItemData.end}
                    onChange={this._onChange}
                />
            </li>
        );
    },

    _onChange: function (e) {
        this.setState({value: e.target.value});
    }


});

module.exports = VisaRecordsitemEdit;
