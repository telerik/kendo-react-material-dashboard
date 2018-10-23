import Header from './../Common/Header';

import { connect } from 'react-redux';
import { periodChanged } from './../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onPeriodChange: period => {
            dispatch(periodChanged(period));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.issues.period,
        name: 'Issues'
    }
}

const IssuesContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default IssuesContainer;
