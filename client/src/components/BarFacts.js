import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
// STYLE
import styled from 'styled-components';

const BarFacts = (props) => {
    
    // #region CONSOLE LOGS
    // console.log("Bar Fact Props", props)
    // console.log("Bar ids", props.fact.id)
    // console.log("BarFacts", props)
    // #endregion
    return(
        <BarCard>
            <h2>{props.fact.name}</h2>
            <h4>Type of Brewery: {props.fact.brewery_type}</h4>
            <p>City: {props.fact.city}</p>
            <span>State: {props.fact.state}</span>
            <p>Where to find them: {props.fact.website_url}</p>
            <Link to={`/Bar/${props.fact.id}`}><button>Checkout Brewery</button></Link>
        </BarCard>
    )
}

const mapStateToProps = state => {
    // console.log('MSTP Facts', state)
    return {
        // barFacts: state.barFacts,
        // isFetching: state.isFetching,
        // error: state.error
    }
}

export default connect(mapStateToProps, {})(BarFacts);



const BarCard = styled.div`
    background-color: #151515;
    margin: 2%;
    color: white;
    padding: 2% 0%;
    border-radius: 15px;
    width: 40%
`