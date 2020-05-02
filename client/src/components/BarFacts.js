import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
// STYLE
import { Button } from 'antd';

const BarFacts = (props) => { 
    // #region CONSOLE LOGS
    // console.log("Bar Fact Props", props.fact)
    // console.log("Bar ids", props.fact.id)
    // console.log("BarFacts", props)
    // #endregion
    
    return(
        <section className="barcard-container grow scene">
                <h2>{props.fact.name}</h2>
                <p>{props.fact.city}, {props.fact.state}</p>
                <p>Type of Brewery: {props.fact.brewery_type}</p>
                {/* //immediately invoked function to allow javascript inside JSX. syntax: {(()=>{})()} */}
                {(() => {
                    if(!props.fact.website_url){
                        // console.log('none')
                    } else {
                    return <p><a href={props.fact.website_url}>Link</a></p>
                    }
                })()}
                <Link to={`/Bar/${props.fact.id}`}><Button type="primary">More Info</Button></Link>
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


