import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function BarCard(props) {
    const [bar, setBar] = useState([])

    const barId = props.match.params.id;

    useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries/${barId}`)
            .then(res => {
                const singleBar = res.data;
                console.log('Single Bar', singleBar)
                setBar(singleBar)
            })
            .catch(err => {
                alert(err.error)
            })
    }, [barId]);

    return (
        <div className="barcard-page">
            <h2>{bar.name}</h2>
            <div className="barcard-flex">
                <div>
                    <h3>Facts</h3>
                    <p>Type of Brewery: {bar.brewery_type}</p>
                    <p>Contact: {bar.phone}</p>
                    {bar.website_url && <a href={bar.website_url}><Button type="primary">Website</Button></a>}
                    <p>Last Updated: {bar.updated_at}</p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>{bar.street}</p>
                    <p>{bar.city}, {bar.state}, {bar.postal_code}, {bar.country}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        barFacts: state.barFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(BarCard);
