import React, { Component } from 'react';

import IssuesContainer from './IssuesContainer';
import IssuesGridContainer from './IssuesGridContainer';

class IssuesIndex extends Component {
    render() {
        return (
            <div className="container-fluid" id="issues">
                <IssuesContainer />
                <IssuesGridContainer />
            </div>
        );
    };
}

export default IssuesIndex;
