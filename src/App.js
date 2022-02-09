import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header/Header';
const LazyRate = lazy(() => import('./Rate/Rate'));
const LazyCalc = lazy(() => import('./Calc/Calc'));


function App () {
  return(
    <div className="wrapper">
    <Router basename = '/TestDev'>
     <Header />
     <Suspense fallback= {<div className='loading'>Loading...</div>}>
       <Switch>
          <Route exact path = '/' component = {LazyRate} />
          <Route path = '/calc' component = {LazyCalc} />
       </Switch>
      </Suspense>
    </Router>
  </div>
  )
}

export default App;
