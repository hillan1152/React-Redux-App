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
    const searchArray = [];

    // gather all bars, so we can bring them up in the search bar
    // useEffect(() => {
    //     props.fetchFacts()
        
    //     // console.log("payload", barFacts)
    // }, [])

    // console.log('ARRIVED TO BARLIST', props.barFacts)
    // console.log('Is Open', isOpen)
    // const cities = props.barFacts
    searchArray.push(...props.barFacts)

    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value ? e.target.value : '' })
    };


    // console.log("search", search)
    // const allBars = props.barFacts;

    // const findMatches = (wordToMatch, searchArray) => {
    //     console.log(searchArray)
    //     return searchArray.filter(place => {
    //         // figure out if city matches what is searched
    //         const regex = new RegExp(wordToMatch, 'gi');
            
    //         console.log("MATCH IT -->", place.city.match(regex))
    //         // return place.city.match(regex) || place.state.match(regex)
    //         return place.city.match(regex) 
    //     })
    // };

    // const displayMatches = () => {
    //     const matchArray = findMatches(this.value, searchArray);
    //     const html = matchArray.map(place => {
    //         const regex = new RegExp(this.value, 'gi');
    //         const cityName = place.city.replace(regex, `<span className="hl">${this.value}</span>`)
    //         return `
    //         <li>
    //             <span class="name">${cityName}</span>
    //             <span class="population">${place.name}</span>
    //         <li>
    //         `;
    //     }).join('')
    //     suggestions.innerHTML = html
    // }

    // findMatches("san diego", allBars)

    const handleSubmit = e => {
        // e.preventDefault();
        const find = search.search
        console.log("something", find)
        // console.log('city', search.city);
        console.log("city null", props.fetchBreweryCity(find));
        if(props.fetchBreweryCity(find) === undefined || props.fetchBreweryState(find) !== undefined){
            console.log("Brewery STATE")
            props.fetchBreweryState(find)
            setIsOpen(true)
        } else if (props.fetchBreweryCity(find) !== undefined){
            console.log("Brewery CITY")
            props.fetchBreweryCity(find)
            setIsOpen(true)
        }
    };

    const BarList = () => {
        console.log("bar facts", props.barFacts)
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
                <h3>Search Your City</h3>
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
                {(isOpen && <BarList/> || null)}
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