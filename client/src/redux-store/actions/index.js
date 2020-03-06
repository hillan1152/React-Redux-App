import axios from "axios";

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_SINGLE_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


const API_URL = 'https://api.openbrewerydb.org/breweries'

export const fetchFacts = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios.get(`${API_URL}`)
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}

export const fetchBreweryCity = (city) => dispatch => {
    console.log('Fetched Brewery By City', city)
    dispatch({ type: START_FETCHING })
    axios.get(`${API_URL}?by_city=${city}`)
        .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}
export const fetchBreweryState = (state) => dispatch => {
    console.log('Fetched Brewery By State', state)
    dispatch({ type: START_FETCHING })
    axios.get(`${API_URL}?by_state=${state}`)
        .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data}))
}

