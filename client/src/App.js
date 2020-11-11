import React  from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Gyms from './containers/Gyms'
import Nav from './components/nav'
import Gymcard from './containers/Gymcard'


class App extends React.Component {

  render() {

    
  return (
      
    <Router>
      <div className="App">
      <Nav/>
       <Switch>
       <Route exact path="/" component={Gyms}/>
       <Route exact path="/gyms/:slug" component={Gymcard}/> 
       </Switch>
     </div>
   </Router>
    
  );
 }
}

export default App;
