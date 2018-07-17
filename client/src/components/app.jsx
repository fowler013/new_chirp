import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye'
import chirps from './chirps';
import Single from './single';
import Nav from './nav';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                   <Nav />
                    <Switch>
                        <Route exact path="/" component={chirps} />
                        <Route exact path="/:id" component={Single} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;