//init
const init = {
    loading: false, 
    result: [""] // {name: "", stargazers_count: 0, open_issues: 0, forks_count: 0}
}

const repoReducer = (state=init, action) => {
    switch (action.type) {
        case 'LOAD_REPOS':
            return({
                ...state,
                result: action.payload
            })
        case 'SET_ERROR':
            return{ ...state, error: action.payload }
        default: 
            return state; 
    }
}

export default repoReducer; 