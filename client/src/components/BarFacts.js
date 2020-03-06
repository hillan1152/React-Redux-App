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
        <section className="barcard-container grow">
            <h2>{props.fact.name}</h2>
            <p>City: {props.fact.city}</p>
            <p>State: {props.fact.state}</p>
            <p>Type of Brewery: {props.fact.brewery_type}</p>
            <p>Website: <a href={props.fact.website_url}>{props.fact.website_url}</a></p>
            <Link to={`/Bar/${props.fact.id}`}><button>Checkout Brewery</button></Link>
        </section>
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


