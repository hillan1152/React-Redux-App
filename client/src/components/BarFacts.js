import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
// ACTIONS
import { fetchBrewery, fetchFacts } from '../actions';
// STYLE
import styled from 'styled-components';



const BarFacts = ({ fact }) => {
    
    // #region CONSOLE LOGS
    // console.log("Bar Fact Props", props)
    // console.log("Bar ids", props.fact.id)
    // #endregion

    useEffect(() => {
        fetchFacts();
    }, []);

    return(
        <BarCard>
            <h2>{fact.name}</h2>
            <h4>Type of Brewery: {fact.brewery_type}</h4>
            <p>City: {fact.city}</p>
            <span>State: {fact.state}</span>
            <p>Where to find them: {fact.website_url}</p>
            <Link to={`/Bar/${fact.id}`}><button>Checkout Brewery</button></Link>
        </BarCard>
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

export default connect(mapStateToProps, { fetchBrewery, fetchFacts })(BarFacts);



const BarCard = styled.div`
    background-color: #151515;
    margin: 2%;
    color: white;
    padding: 2% 0%;
    border-radius: 15px;
    width: 40%
`