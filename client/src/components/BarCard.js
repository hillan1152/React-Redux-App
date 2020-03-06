import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
// ACTIONS
import { fetchBrewery } from '../redux-store/actions';

function BarCard(props) {
    // console.log('Bar Card', props)
    const [bar, setBar] = useState([])

    const barId = props.match.params.id;

    useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries/${barId}`)
            .then(res => {
                const singleBar = res.data;
                console.log('Single Bar', singleBar)
                setBar(singleBar)
            })
            .catch(err => {
                console.log("This Didn't Work")
            })
    }, []);

    return (
        <div>
            <h2>{bar.name}</h2>
            <p>City: {bar.city}</p>
            <span>State: {bar.state}</span>
            <h4>Type of Brewery: {bar.brewery_type}</h4>
            <p>Website: {bar.website_url}</p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('MSTP BAR CARD', state)
    return {
        barFacts: state.barFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(BarCard);
