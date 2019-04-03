const initState = {
    data: [],
    error: null,
}

const reducer = (state = initState, action) => {
    const { payload } = action;
    return {
        ...state,
        ...payload
    }
}

export default reducer;