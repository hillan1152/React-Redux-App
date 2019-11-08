import React from 'react';
import styled from 'styled-components';

const BarCard = styled.div`
    background-color: #151515;
    margin: 2%;
    color: white;
    padding: 2% 0%;
    border-radius: 15px;
    width: 40%
`

const BarFacts = props => {
    return(
        <BarCard>
            <h2>{props.fact.name}</h2>
            <h4>Type of Brewery: {props.fact.brewery_type}</h4>
            <p>City: {props.fact.city}</p>
            <span>State: {props.fact.state}</span>
            <p>Where to find them: {props.fact.website_url}</p>
        </BarCard>
    )
}

export default BarFacts;