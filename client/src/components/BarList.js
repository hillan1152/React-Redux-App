import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// Components
import BarFacts from './BarFacts';
import Search from './Search';
// Actions
import { fetchFacts, fetchBrewery } from '../redux-store/actions';
// Styles
import styled from 'styled-components';

const BarList = props => {   
    // console.log('ARRIVED TO BARLIST', props)
    useEffect(() => {
        props.fetchFacts();
    }, []);


    
    // console.log("BarCard Props", props.barFacts)
    if (props.isFetching){
        return <h2>Loading your favorite Bars...</h2>
    } 
    return(
        <div>
            <Search brewery={fetchBrewery} />
            <BarDiv>
                {props.barFacts.map(fact => 
                    <BarFacts key={fact.id} fact={fact}/>
                )}
            </BarDiv>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('MSTP BAR LIST', state)
    return{
        barFacts: state.barFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchFacts, fetchBrewery })(BarList);

// #region STYLE
const BarDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
`
// #endregion