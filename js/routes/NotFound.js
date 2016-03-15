var React = require('react');

module.exports = React.createClass({

    render: function () {
        console.log("hook :: NotFound.render");

        return (
            <h1>Page Not Found</h1>
        );
    }

});
