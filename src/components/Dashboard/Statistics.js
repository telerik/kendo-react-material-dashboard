import React from 'react';
import ActiveIssuesDash from './../Charts/ActiveIssues';
import IssuesTypes from './../Charts/IssuesTypes';
import TypesDistribution from './../Charts/TypesDistribution';

class Statistics extends React.Component {
    render() {
        return (
            <div id="statistics" className="row">
                <div className="col-12 ">
                    <ActiveIssuesDash {...this.props} />
                </div>
                <div className="col-xl-4">
                    <IssuesTypes data={this.props.issuesTypes} />
                </div>
                <div className="col-xl-8">
                    <TypesDistribution data={this.props.typesDistribution} months="months" />
                </div>
            </div>
        );
    }
}

export default Statistics;
