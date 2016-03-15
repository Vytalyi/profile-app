var React = require('react'),
    VisaRecordsItemView = require('./../VisaRecordsItemView/VisaRecordsItemView'),
    ProfileStore = require('../../stores/ProfileStore');

module.exports = React.createClass({

    propTypes: {
        visaRecordsData: React.PropTypes.object.isRequired
    },

    createRow: function () {
        this.props.visaRecordsData.items.concat({
            country: "",
            start: "",
            end: ""
        });
    },

    getData: function () {
        console.log("hook :: visaRecordsView.getData");

        var rtnData = [];

        for (var p in this.refs) {
            if (this.refs.hasOwnProperty(p)) {
                rtnData.push(this.refs[p].getData());
            }
        }

        return rtnData
    },

    render: function () {
        console.log("hook :: visaRecordsView.render");

        return (
            <section className="profile-section-visa">
                <h2>Visa Records</h2>
                <ul>
                    {this.renderVisaRecords()}
                </ul>
            </section>
        );
    },

    renderVisaRecords: function () {
        return this.props.visaRecordsData.items.map(function (item, i) {
            return (
                <VisaRecordsItemView ref={'visaRecordsItem' + i} key={i}
                    visaRecordsItemData={item}
                />
            )
        })
    }

});
