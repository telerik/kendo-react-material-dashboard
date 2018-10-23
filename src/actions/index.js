export const periodChanged = (period) => {
    return {
        type: 'ISSUES_PERIOD_CHANGED',
        payload: period
    }
};

export const issuesReceived = (issues) => {
    return {
        type: 'ISSUES_RECEIVED',
        payload: issues
    }
}

export const issuesToggleExpand = (issues) => {
    return {
        type: 'ISSUES_TOGGLE_EXPAND',
        payload: issues
    }
}

export const issuesDetails = (issues) => {
    return {
        type: 'ISSUES_COLLAPSED',
        payload: issues
    }
}

export const issuesFetched = () => {
    return {
        type: 'ISSUES_FETCHED'
    }
}

export const issuesPageChange = (paging) => {
    return {
        type: 'ISSUES_PAGE_CHANGE',
        ...paging
    }
}
