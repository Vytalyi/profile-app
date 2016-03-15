var React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    hashHistory = require('react-router').hashHistory,
    IndexRoute = require('react-router').IndexRoute,
    ProfileView = require('./routes/ProfileView'),
    ProfileEdit = require('./routes/ProfileEdit'),
    PageNotFound = require('./routes/NotFound'),
    ProfileApp = require('./components/App/ProfileApp');

// initialize routing
React.render((
    <Router history={hashHistory}>
        <Route path="/" component={ProfileApp}>
            <IndexRoute component={ProfileView}/>

            <Route path="edit" component={ProfileEdit}/>

            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
), document.getElementById('profileApp'));
