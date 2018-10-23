let initialState = {
    skip:0,
    take: 10
}

export const issuesPaging = (state = initialState, action) => {
    if (action.type === 'ISSUES_PAGE_CHANGE') {
        let newState = { skip: action.skip, take: action.take, pageSize: action.take }
        return newState
    } else {
        return state;
    }
}
