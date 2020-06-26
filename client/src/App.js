import React  from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Gyms from './containers/Gyms'
import Nav from './components/nav'
import Component1 from './containers/Component1'


class App extends React.Component {

  render() {

    
  return (
      
    <Router>
      <div className="App">
       <Nav/>
       <Route exact path="/" component={Gyms}/>
       <Route exact path="/gyms/:slug" component={Component1}/> 
   
     </div>
   </Router>
    
    );
  
 }

}

export default App;
