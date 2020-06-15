import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components';
// Components
import BarFacts from './BarFacts';
// Actions
import { fetchFacts, fetchBreweryCity, fetchBreweryState } from '../redux-store/actions';


const BarList = props => {   
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value ? e.target.value : '' })
    };


    const handleSubmit = e => {
        e.preventDefault();
        const find = search.search;
        if(props.fetchBreweryState(find)){
            console.log("Brewery STATE")
            props.fetchBreweryState(find)
            setIsOpen(true)
        } else {
            console.log("Brewery CITY")
            props.fetchBreweryCity(find)
            setIsOpen(true)
        }
    };

    const MainList = () => {
        console.log("bar", props.barFacts)
        return <main className="bar-list"> 
            {props.barFacts.map(fact => 
                 <BarFacts key={fact.id} fact={fact}/>
            )}
        </main>
    };

    if (props.isFetching){
        return <StyledLoader active={props.isFetching} spinner text='Loading Your Bars'/>
    };


    return(
        <div className="barlist-container">
            <div className="barlist-top">
                <h1>Welcome to Brew Spot</h1>
                <p>Your one stop shop to discovering breweries within your city!</p>
                <p>Go Ahead and test us out!</p>
                <h3>Search Your City or State</h3>
                <section className="search-container">
                    <form className="search-form" onSubmit={handleSubmit} >
                        <div>
                            <input type="text" className="search" placeholder="City or State" onChange={handleChange} name='search'/>
                            <button type="submit">Submit</button>
                        </div>
                        {/* <ul className="suggestions">
                            
                            <li>Filter for City</li>
                            <li>or a state</li>
                        </ul> */}
                    </form>
                </section>
                {/* <h2 className="arrow">DOWN ARROW</h2> */}
            </div>
            <div>
                {(isOpen ? <MainList/> : null)}
            </div>
        </div>
    )
};

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
const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
// // #endregion