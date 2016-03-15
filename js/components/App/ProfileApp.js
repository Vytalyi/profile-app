var React = require('react'),
    Link = require('react-router').Link;

var ProfileApp = React.createClass({

    render: function () {
        console.log("hook :: profileApp.render");

        return (
            <div>
                <nav className="navigation">
                    <Link to={`/`}>View</Link>
                    <Link to={`/edit`}>Edit</Link>
                </nav>

                {this.props.children}
            </div>
        );
    }

});

module.exports = ProfileApp;
