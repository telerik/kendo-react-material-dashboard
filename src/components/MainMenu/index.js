import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';

import Dashboard from '../Dashboard';
import IssuesIndex from '../Issues';
import Signin from '../Signin';
import Profile from '../Profile';
import { withGithubUser, withGithubApi } from '../Github';

class MainMenu extends Component {
    constructor(props) {
        super();

        this.state = {
            year: (new Date()).getFullYear()
        }
    }

    render() {
        const notSignIn = this.props.location.pathname !== '/signin'
        const navbarClassName = 'sticky-top material-color text-white py-3 py-sm-5 k-vbox shadow col-xl-2 d-xl-flex '
            + (this.props.showNav ? 'show' : 'hide');

        return (
            <div id="app" className="app">
                <div className="container-fluid">
                    <div className="row">
                        {notSignIn && (<div id="nav" className={navbarClassName}>
                            <div className="container">
                                <h1 id="app-title" className="mb-0">Issues</h1>
                                <h4 id="app-subtitle" className="mb-4">Sample Dashboard</h4>
                                <hr className="k-hr" />
                                <h4 className="mt-3 mt-sm-5">Project</h4>
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item" id="dashbaord">
                                        <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item" id="issues">
                                        <NavLink to="/issues" className="nav-link" activeClassName="active">Issues</NavLink>
                                    </li>
                                </ul>
                                <h4 className="mt-3 mt-sm-5">Account</h4>
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item" id="profile">
                                        <NavLink to="/profile" className="nav-link" activeClassName="active">My Profile</NavLink>
                                    </li>
                                    <li className="nav-item" id="signout">
                                        <NavLink to="/signin" className="nav-link" activeClassName="active">Sign Out</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="container mt-sm-auto">
                                <hr className="k-flex k-hr k-hr-bottom" />
                                <div id="copy">
                                    <p>Copyright &copy; {this.state.year},<br /><a href="http://www.progress.com">Progress Software Corporation</a> and/or its subsidiaries or affiliates.</p>
                                    <p>All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>)}
                        <div className={'content-wrapper col'}>
                            {this.props.location.pathname === '/' ? <Redirect from="/" to="dashboard" /> : null}
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/issues" component={IssuesIndex} />
                            <Route path="/profile" component={withGithubApi(withGithubUser(Profile))} />
                            <Route path="/signin" component={Signin} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu
