import React, { Component } from 'react';
import { connect } from 'react-redux';
import { issuesFetched, issuesReceived, issuesDetails } from './actions';
import MainMenu from './components/MainMenu';
import { classNames } from '@progress/kendo-react-common';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showNav: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    let dispatcher = (data) => {
      this.setState({ loading: false });
      dispatch(issuesReceived(data));
      dispatch(issuesDetails(data));
    };

    dispatch(issuesFetched());

    return Promise.all(this.getPageFetchers(10))
      .then(responses => responses.map(res => res.json()))
      .then(issues => Promise.all(issues))
      /* response is array of arrays. Each page is in an array */
      .then(arraysOfData => arraysOfData.reduce((prev, current) => prev.concat(current)))
      .then(result => dispatcher(result));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname && this.state.showNav) {
      this.setState({ showNav: false });
    }
  }

  getPageFetchers(numberOfPages) {
    let fetches = [];
    let headers = {
      // Generate your own token through
      // https://github.com/settings/tokens

      'Authorization': "token 8d52e8992a52f3fdba0bef8df1fe2ea096c64fb4"
    };

    let options = { method: 'GET', accept: 'application/json', headers: headers };

    for (let page = 1; page <= numberOfPages; page++) {
      let url = baseUrl + `?state=all&page=${page}&per_page=50`;
      fetches.push(fetch(url, options));
    }

    return fetches;
  }

  handleClick = () => {
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    const showNav = this.state.showNav;
    const className = classNames('navbar sticky-top bg-white d-xl-none', {
      'k-shadow': !showNav
    });

    return (
      <React.Fragment>
        <div className={className}>
          <div onClick={this.handleClick} className={showNav ? 'open' : 'closed'} id="nav-icon" data-toggle="collapse" data-target="#side-nav" aria-controls="side-nav" >
            {/* Using dummy span elements for animating the 'hamburger' menu */}
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {this.state.loading ? <span className="k-icon k-i-loading"></span> : <MainMenu {...this.props} showNav={showNav} />}
      </React.Fragment>
    );
  }
}

export default connect()(App);
