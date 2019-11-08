import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    barFacts: [],
    isFetching: false, // Same thing as loading
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case START_FETCHING:
            console.log('Fetching', action)
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            console.log('fetch success', action)
            return{
                ...state,
                isFetching: false,
                error: '',
                barFacts: action.payload
            }
        case FETCH_FAILURE:
            console.log('fetch failure', action)
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;