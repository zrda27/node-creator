/**
 * Created by zengruda on 10/15/16.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

var App = React.createClass({
    render: function () {
        alert(this.context);
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/app">Dashboard</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                        <li><Link to="/calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>
                {this.props.children}
            </div>
        );
    }
});

var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <p>Dashboard</p>
            </div>
        );
    }
});

var Inbox = React.createClass({
    render: function () {
        return (
            <div>
                <p>Inbox</p>
            </div>
        );
    }
});

class Calendar extends React.Component{
    componentDidMount(){debugger
        alert(this);
    };
    render() {
        alert(this);
        return (
            <div>
                <Inbox ref="inbox"/>
                <p>Calendar</p>
            </div>
        );
    }
};

render((
    <Router history={hashHistory}>
        <Route path="/" component={App} data-ii="123">
            <IndexRoute component={Dashboard}/>
            <Route path="/app" component={Dashboard}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="*" component={Dashboard}/>
        </Route>
    </Router>
), document.querySelector('#content'));
