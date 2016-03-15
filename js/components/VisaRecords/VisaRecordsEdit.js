var React = require('react'),
    VisaRecordsItemEdit = require('./VisaRecordsItemEdit');

module.exports = React.createClass({

    propTypes: {
        visaRecordsData: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            items: this.props.visaRecordsData.items
        }
    },

    createRow: function () {
        this.setState({
            items: this.state.items.concat({
                country: "",
                start: "",
                end: ""
            })
        });
    },

    getData: function () {
        console.log("hook :: visaRecordsEdit.getData");

        var rtnData = [];

        for (var p in this.refs) {
            if (this.refs.hasOwnProperty(p)) {
                rtnData.push(this.refs[p].getData());
            }
        }

        return rtnData
    },

    render: function () {
        console.log("hook :: visaRecordsEdit.render");

        return (
            <section className="profile-section-visa">
                <h2>Visa Records</h2>
                <ul>
                    {this.renderVisaRecords()}
                    <li>
                        <button onClick={this.createRow}>
                            Add new record
                        </button>
                    </li>
                </ul>
            </section>
        );
    },

    renderVisaRecords: function () {
        return this.state.items.map(function (item, i) {
            return (
                <VisaRecordsItemEdit ref={'visaRecordsItem' + i} key={i}
                    visaRecordsItemData={item}
                />
            )
        });
    }

});

