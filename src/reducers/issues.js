let getRangeStart = (months) => {
    let since = new Date();
    let parsedMonths = parseInt(months,10)
    since.setMonth(since.getMonth() - parsedMonths);
    return since;
}

let getState = (months) => {
    return {
        period: months,
        range: {
            to: new Date(),
            from: getRangeStart(months)
        }
    };
}

let initialState = {
    data: [],
    period:getState(3),
    initialIssues: []
};


export const issues = (state = initialState, action) => {
    if (action.type === 'ISSUES_RECEIVED') {
        let initialIssues = action.payload.filter(issue => issue.pull_request ? false : true);
        let issues = action.payload.filter(issue => !issue.pull_request && new Date(issue.created_at) > new Date(state.period.range.from) ? true : false);
        let newState = Object.assign({ period: state.period, data: issues, initialIssues: initialIssues}, {});
        return newState;
    } else if(action.type ==='ISSUES_COLLAPSED') {
        let issues = action.payload;
        let newState = state;
        newState.data = issues.map(issue => { let iss = Object.assign({}, issue); iss.expanded = false; return iss; });
        return newState;
    } else if (action.type === 'ISSUES_TOGGLE_EXPAND') {
        let dataItem = action.payload;
        let index = state.data.findIndex(i => i.number === dataItem.number);
        let clonedDataItem = Object.assign({}, state.data[index]);
        clonedDataItem.expanded = !dataItem.expanded;

        let newIssues = [
            ...state.data.slice(0, index),
            clonedDataItem,
            ...state.data.slice(index + 1)
        ];
        let newState = Object.assign({ period: state.period, data: newIssues, initialIssues: state.initialIssues}, {});
        return newState;
        } else if (action.type === 'ISSUES_PERIOD_CHANGED') {
        let newPeriod = getState(action.payload.period)
        let initialIssues = state.initialIssues
        let newIssues = initialIssues.filter(issue => new Date(issue.created_at) > new Date(newPeriod.range.from)  ? true : false);;
        let newState = Object.assign({ period: newPeriod, data: newIssues, initialIssues: state.initialIssues}, {});

        return newState
    }
    
    else {
        return state;
    }
};