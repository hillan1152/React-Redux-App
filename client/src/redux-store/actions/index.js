import axios from "axios";

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_SINGLE_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchFacts = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios.get('https://api.openbrewerydb.org/breweries')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}

export const fetchBrewery = (city) => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get(`https://api.openbrewerydb.org/breweries?$by_city=${city}`)
        .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}

