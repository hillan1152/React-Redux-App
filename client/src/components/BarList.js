import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Components
import BarFacts from './BarFacts';
// Actions
import { fetchFacts } from '../actions';
// Styles
import styled from 'styled-components';

const BarList = props => {    
    useEffect(() => {
        props.fetchFacts();
    }, []);
    
    // console.log("BarCard Props", props.barFacts)
    
    
    if (props.isFetching){
        return <h2>Loading your favorite Bars...</h2>
    } 
    return(
        <BarDiv>
            {props.barFacts.map(fact => 
                <BarFacts key={fact.id} fact={fact}/>
                )}
        </BarDiv>
    )
}

const mapStateToProps = state => {
    // console.log('MSTP BAR CARD', state)
    return{
        barFacts: state.barFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchFacts })(BarList);

// #region STYLE
const BarDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
`
// #endregion