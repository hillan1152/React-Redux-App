import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
// ACTIONS
import { fetchBrewery } from '../actions';

function BarCard(props) {
    console.log('Bar Card', props)

    const barId = props.match.params.id;

    useEffect(() => {
        props.fetchBrewery(barId)
    }, [barId])

    return (
        <div>
            <h2>{props.barFacts.name}</h2>
            <h4>Type of Brewery: {props.barFacts.brewery_type}</h4>
            <p>City: {props.barFacts.city}</p>
            <span>State: {props.barFacts.state}</span>
            <p>Website: {props.barFacts.website_url}</p>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('MSTP Facts', state)
    return {
        barFacts: state.barFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchBrewery })(BarCard);
