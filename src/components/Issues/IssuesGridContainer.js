import IssuesGrid from './IssuesGrid.js';

import { connect } from 'react-redux';
import { issuesToggleExpand, issuesPageChange } from './../../actions';

import { issuesInRange } from './../../lib/issues';

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleExpand: (e) => dispatch(issuesToggleExpand(e.dataItem)),
        onIssuesPageChange: (e) => dispatch(issuesPageChange(e.page))
    };
}

const mapStateToProps = (state) => {
    let { skip, take } = state.issuesPaging;
    let periodStart = state.issues.period.range.from;
    let itemsInPeriod = state.issues.data.filter(issue => issuesInRange(issue, periodStart));
    let items = itemsInPeriod.slice(skip, skip + take);
    let total = itemsInPeriod.length;

    return {
        issues: items,
        skip,
        take,
        total: total,
        pageSize: take
    }
}

const IssuesGridContainer = connect(mapStateToProps, mapDispatchToProps)(IssuesGrid);
export default IssuesGridContainer;
