import React, { Component } from 'react'

export const withGithubApi = (ApiComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            let baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';
            let headers = {
                // Generate your own token through
                // https://github.com/settings/tokens

                'Authorization': "token b95116792cba5a8169a1ec10640d8c16535c6419"
            };

            let options = { method: 'GET', accept: 'application/json', headers: headers };
            this.state = {
                gitOptions: options,
                gitBaseUrl: baseUrl,
                gitUsername: 'simonssspirit'
            };
        }

        render() {
            return <ApiComponent {...this.state} {...this.props} />
        }
    }
}

export const withGithubUser = (ApiComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                gitUserApiUrl: `https://api.github.com/users/${this.props.gitUsername}`
            }
        }

        render() {
            return <ApiComponent {...this.state} {...this.props} />
        }
    }
};
