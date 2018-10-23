import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAskDelete: false,
            showProfileUpdate: false,
            isWithOverlay: false
        }

        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    componentDidMount() {
        let url = this.props.gitUserApiUrl;
        let options = this.props.gitOptions;

        if (typeof (url) !== 'undefined') {
            fetch(url, options)
                .then(response => response.json())
                .then(json => this.setState(json));
        }
    }

    onUpdateClick() {
        this.setState((prevState, props) => ({
            showProfileUpdate: !prevState.showProfileUpdate,
            isWithOverlay: !prevState.isWithOverlay
        })
        );

    }

    onDeleteClick() {
        this.setState((prevState) => ({
            showAskDelete: !prevState.showAskDelete,
            isWithOverlay: !prevState.isWithOverlay
        }));
    }

    render() {
        return (
            this.state &&
            <div className="container-fluid" id="profile">
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <h4 className="d-block">Account</h4>
                            <h2>
                                {this.state.login} - {this.state.name}
                            </h2>
                        </div>
                        <div className="col-sm text-sm-right">
                            <Button variant="contained">Sign out</Button>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.showAskDelete}>
                    <DialogTitle >Are you sure you want to delete your account?</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Account deletion cannot be undone!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onDeleteClick}>Cancel</Button>
                        <Button color="primary" onClick={this.onDeleteClick}>Delete</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.showProfileUpdate}>
                    <DialogTitle>Thank you</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Your profile has been successfully updated
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onUpdateClick} color='primary' type='flat'>OK</Button>
                    </DialogActions>
                </Dialog>
                <div className="row">
                    <div className="col-md-7">

                        <div className="k-card" id="profile">
                            <h2 className="k-card-header">Public Profile</h2>
                            <div className="k-card-body">
                                <div className="row">
                                    <div className="col-md-3 text-xs-center">
                                        {this.state.avatar_url
                                            ? <img src={this.state.avatar_url} alt="Avatar URL" style={{ 'maxWidth': '100%' }} className="img-circle img-large" />
                                            : <span className="k-icon k-i-loading" />}
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <InputLabel >Username</InputLabel>
                                            <Input type="text" id="username" className="form-control" defaultValue={this.state.login} />
                                        </div>
                                        <div className="form-group">
                                            <InputLabel >Name</InputLabel>
                                            <Input type="text" id="name" className="form-control" defaultValue={this.state.name} ref={(button) => {
                                                this.anchor = button;
                                            }} />
                                        </div>
                                        <div className="form-group">
                                            <InputLabel >Email</InputLabel>
                                            <Input type="email" id="email" className="form-control" defaultValue={this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <InputLabel className="form-check-InputLabel h6">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox defaultChecked color="primary" />
                                                    }
                                                    label="Keep my email address private"
                                                />
                                            </InputLabel>
                                        </div>
                                        <div className="form-group">
                                            <InputLabel >Company</InputLabel>
                                            <Input type="text" id="company" className="form-control" defaultValue={this.state.company} />
                                        </div>
                                        <div className="form-group">
                                            <InputLabel >Location</InputLabel>
                                            <Input type="text" id="location" className="form-control" defaultValue={this.state.location} />
                                        </div>
                                        <div className="form-group">
                                            <Button variant="contained" onClick={this.onUpdateClick}>Update profile</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="k-card" id="delete-account">
                            <h2 className="k-card-header">Delete Account</h2>
                            <div className="k-card-body">
                                <p>You will immediately lose access to your repositories and all other information associated with your account.
                                <strong>This cannot be undone!</strong>
                                </p>
                                <Button variant="contained" onClick={this.onDeleteClick}>Delete Account</Button>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-5">
                        <div className="k-card" id="notifications">
                            <h2 className="k-card-header">Notifications</h2>
                            <div className="k-card-body">
                                <h4 >Automatically watch repositories?</h4>
                                <h3 className="text-muted">When you are given push access to a repository, automatically receive notifications for it.</h3>
                                <p>
                                    <Switch color="primary"></Switch>
                                </p>
                                <h4 >Receive updates to any conversations via email?</h4>
                                <p>
                                    <Switch defaultChecked={true} color="primary"></Switch>
                                </p>
                                <h4 >Receive updates to any repositories via email?</h4>
                                <p>
                                    <Switch defaultChecked={true} color="primary"></Switch>
                                </p>
                            </div>
                        </div>
                        <div className="k-card" id="password">
                            <h2 className="k-card-header">Update password</h2>
                            <div className="k-card-body">
                                <div className="form-group">
                                    <InputLabel >Old password</InputLabel>
                                    <Input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <InputLabel >New password</InputLabel>
                                    <Input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <InputLabel >Confirm password</InputLabel>
                                    <Input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Button variant="contained">Change password</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
