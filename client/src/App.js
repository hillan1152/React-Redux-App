import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

//Components
import BarList from './components/BarList';
import BarCard from './components/BarCard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';



function App(props) {

  if (props.barFacts.isFetching === true){
    return <h2>Loading your favorite Bars...</h2>
  }

  return (
    <div className="App">
      <Nav/>
        <Route exact path='/' component={BarList} />
        <Route exact path='/Bar/:id' component={BarCard} />
        <Route exact path='/about' component={About} />
      <Footer/>
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
