var React = require('react');

module.exports = React.createClass({

    propTypes: {
        visaRecordsItemData: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <li>
                {this.props.visaRecordsItemData.country},
                {this.props.visaRecordsItemData.start},
                {this.props.visaRecordsItemData.end}
            </li>
        );
    }

});
