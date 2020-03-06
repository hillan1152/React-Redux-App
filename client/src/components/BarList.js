import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Input } from 'antd';
import 'antd/dist/antd.css';
// Components
import BarFacts from './BarFacts';
// Actions
import { fetchFacts, fetchBreweryCity, fetchBreweryState } from '../redux-store/actions';





const BarList = props => {   
    // console.log('ARRIVED TO BARLIST', props)
    const { Search } = Input;
    const [search, setSearch] = useState({
        city: '',
        name: '',
        state: '',
        postal: '',
        type: ''
    });
    const [cityBar, setCityBar] = useState([]);


    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value ? e.target.value : '' });
    };

    const handleSubmit = e => {
        console.log('State', search.city);
        // e.preventDefault();
        props.fetchBreweryCity(search.city);
    };

    if (props.isFetching){
        return <h2>Loading your favorite Bars...</h2>
    };
    return(
        <div className="barlist-container">
            <div className="barlist-top">
                <h1>Welcome to Brew Hunter</h1>
                <p>Your one stop shop to discovering breweries within your city!</p>
                <p>Go Ahead and tap search to test us out!</p>
                <section className="search-container">
                    <h3>Search Your City</h3>
                    <form className="search-form" onSubmit={handleSubmit}>
                            <Search className="search" placeholder="Search a City" enterButton="Discover" size="medium" onSearch={e => {props.fetchBreweryCity(e)}}/>
                    </form>
                </section>
                {/* <h2 className="arrow">DOWN ARROW</h2> */}
            </div>
            <main className="bar-list"> 
                {props.barFacts.map(fact => 
                    <BarFacts key={fact.id} fact={fact}/>
                )}
            </main>
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

export default connect(mapStateToProps, { fetchFacts, fetchBreweryCity, fetchBreweryState })(BarList);

// // #region STYLE
// const BarDiv = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     width: 100%;
//     justify-content: center;
// `
// // #endregion