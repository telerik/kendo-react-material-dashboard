import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class Dashboard extends Component {
    login = () => {
        this.props.history.push('dashboard');
    }
    render() {
        return (
            <div id="login" className="justify-content-center">
                <div className="signin-form col-xl-3">
                    <div className="k-card">
                        <div className="k-card-block">
                            <form className="k-form">
                                <h1 id="app-title" className="mb-0">Issues</h1>
                                <h4 id="app-subtitle" className="mb-4">Sample Dashboard</h4>
                                <hr className="k-hr" />
                                <div className="form-group mt-5">
                                    <InputLabel>Username</InputLabel>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <InputLabel>Password</InputLabel>
                                    <Input type="password" className="form-control" />
                                    <p className="text-xs-right small">
                                        <a>Forgot it?</a>
                                    </p>
                                </div>
                                <div className="form-group mb-0 text-right">
                                    <Button color='primary' onClick={this.login}>Log in</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
