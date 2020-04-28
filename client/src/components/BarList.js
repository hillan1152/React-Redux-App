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
    const { Search } = Input;
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState({
        city: '',
        name: '',
        state: '',
        postal: '',
        type: ''
    });
    const searchArray = [];

    useEffect(() => {
        props.fetchFacts()
        // console.log("payload", barFacts)
    }, [])

    // console.log('ARRIVED TO BARLIST', props.barFacts)
    // console.log('Is Open', isOpen)
    // const cities = props.barFacts
    searchArray.push(...props.barFacts)
    console.log("Search Array", searchArray)

    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value ? e.target.value : '' })
        // console.log("this is search", search)
    };

    const allBars = props.barFacts;

    // const findMatches = (wordToMatch, searchArray) => {
    //     console.log(searchArray)
    //     return searchArray.filter(place => {
    //         // figure out if city matches what is searched
    //         const regex = new RegExp(wordToMatch, 'gi');
    //         console.log(place)
    //         return place.city.match(regex) || place.state.match(regex)
    //     })
    // };
    // findMatches("san diego")

    const handleSubmit = e => {
        // e.preventDefault();
        console.log('city', search.city);
        props.fetchBreweryCity(search.city);

        if (search.city.length === 0){
            setIsOpen(false)
        } else {
            setIsOpen(true)
        };
    };

    const BarList = () => {
        return <main className="bar-list"> 
            {props.barFacts.map(fact => 
                <BarFacts key={fact.id} fact={fact}/>
            )}
        </main>
    }

    if (props.isFetching){
        return <StyledLoader active={props.isFetching} spinner text='Loading Your Bars'/>
    };

    return(
        <div className="barlist-container">
            <div className="barlist-top">
                <h1>Welcome to Brew Spot</h1>
                <p>Your one stop shop to discovering breweries within your city!</p>
                <p>Go Ahead and test us out!</p>
                <h3>Search Your City</h3>
                <section className="search-container">
                    <form className="search-form" onSubmit={handleSubmit} >
                        <div>
                            <input type="text" className="search" placeholder="City or State" onChange={handleChange} name="city"/>
                            <button>Submit</button>
                        </div>
                        <ul className="suggestions">
                            <li>Filter for City</li>
                            {/* <li>or a state</li> */}
                        </ul>
                    </form>
                </section>
                {/* <h2 className="arrow">DOWN ARROW</h2> */}
            </div>
            <div>
                {(isOpen && <BarList/> || null)}
            </div>
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

export default connect(mapStateToProps, { fetchFacts, fetchBreweryCity })(BarList);

// // #region STYLE
const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
// // #endregion