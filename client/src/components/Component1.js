import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGym} from '../actions/fetchGym';
import Component2 from './Component2';


class Component1 extends Component {
    
    componentDidMount() {
        this.props.fetchGym(this.props.match.params.slug);
    }
    
   
    

    
    
    
    render() {
        
    console.log(`Hi from Component1 ${this.props.gym.name}`);
    
    return (
        <div className="component1">
           
          
           
           <div className="gym-image"><img src={this.props.gym.image_url}></img>
          </div> 
           
           <h4>{this.props.gym.name}</h4>
           
           
           <Component2 gymId={this.props.gym.id}/>
        
    </div>
    
    
   
    );
  }
};










export default connect(state => ({
    gym: state.gymReducer}) , {fetchGym} )
    (Component1);