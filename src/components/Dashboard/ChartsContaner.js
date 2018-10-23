import Statistics from './Statistics';
import { mapIssue, groupLabels, distribution, groupIssues, closeRate } from './../../lib/issues';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const mappedIssues = state.issues.data.map(mapIssue);
    const { open, closed } = groupIssues(mappedIssues);

    return {
        open: open,
        closed: closed,
        months: state.issuesPeriod,
        issuesTypes: groupLabels(mappedIssues),
        typesDistribution: distribution(mappedIssues),
        active: mappedIssues,
        closeRate: closeRate({open: open, closed: closed})
    };
}

const ChartsContainer = connect(mapStateToProps)(Statistics);
export default ChartsContainer;