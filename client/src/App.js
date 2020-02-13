import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import './App.css';

//Components
import BarList from './components/BarList';
import BarCard from './components/BarCard';


function App() {

//   if (props.isFetching){
//     return <h2>Loading your favorite Bars...</h2>
// } 

  return (

    <div className="App">
      <h1>Open Brewery</h1>
      <Route exact path='/' component={BarList} />
      <Route exact path='/Bar/:id' component={BarCard} />
    </div>
  );
}

const mapStateToProps = state => {
  return{
    barFacts: state.barFacts,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(App);
