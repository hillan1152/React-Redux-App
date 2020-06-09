import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
// ACTIONS
import { fetchBrewery } from '../redux-store/actions';

function BarCard(props) {
    // console.log('Bar Card', props)
    const [bar, setBar] = useState([])
    const [client, setClient] = useState(false);

    const barId = props.match.params.id;

    useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries/${barId}`)
            .then(res => {
                const singleBar = res.data;
                console.log('Single Bar', singleBar)
                setBar(singleBar)
            })
            .catch(err => {
                alert(err.error)
            })
    }, [barId]);

    return (
        <div className="barcard-page">
            <h2>{bar.name}</h2>
            <p>{bar.city}, {bar.state}, {bar.postal_code}</p>
            <p>{bar.country}</p>
            <p>Type of Brewery: {bar.brewery_type}</p>
            <p>Contact: {bar.phone}</p>
            <p>{bar.website_url}</p>
            <p>Last Updated: {bar.updated_at}</p>
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
