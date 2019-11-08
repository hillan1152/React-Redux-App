import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import BarFacts from './BarFacts';
// Actions
import { fetchFacts } from '../actions';

const BarDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
`

const BarCard = props => {
    console.log("BarCard Props", props)
    useEffect(() => {
        props.fetchFacts();
    }, []);
    if (props.isFetching){
        return <h2>Loading your favorite Bars...</h2>
    } 

    return(
        <BarDiv>
            {props.error && <p>{props.error}</p>}
            {props.barFacts.map(fact => 
                <BarFacts key={fact.id} fact={fact}/>
            )}
        </BarDiv>
    )
}

const mapStateToProps = state => {
    return{
        barFacts: state.barFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchFacts})(BarCard);