import React from 'react';
import { connect } from 'react-redux';

import './App.css';

//Components
import BarCard from './components/BarCard';


function App() {
  return (
    <div className="App">
      <h1>Open Brewery</h1>
      <BarCard/>
    </div>
  );
}

const mapStateToProps = state => {
  return{

  }
}

export default connect(mapStateToProps, {})(App);
