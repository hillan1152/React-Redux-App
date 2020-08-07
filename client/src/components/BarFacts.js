import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// STYLE
import { Button } from 'antd';

const BarFacts = (props) => { 
    return(
        <section className="barcard-container grow scene">
                <h2>{props.fact.name}</h2>
                <p>{props.fact.city}, {props.fact.state}</p>
                <p>Type of Brewery: {props.fact.brewery_type}</p>
                {props.fact.website_url && <p><a href={props.fact.website_url}>Link</a></p>}
                <Link to={`/Bar/${props.fact.id}`}><Button type="primary">More Info</Button></Link>
        </section>
    )
}

export default connect(null, {})(BarFacts);


