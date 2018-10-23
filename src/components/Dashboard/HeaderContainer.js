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
        name: 'Statistics'
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
