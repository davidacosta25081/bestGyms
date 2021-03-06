import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGym} from '../actions/fetchGym';
import RateCard from './RateCard';


class Gymcard extends Component {
    
    componentDidMount() {
        this.props.fetchGym(this.props.match.params.slug);
        
      }
    
   
    
   render() {
        
    return (
        <div className="Gymcard">
          <div className="gym-image"><img src={this.props.gym.image_url} alt="logo"></img></div> 
            <div className="card text-left p-3 mb-2 bg-light text-dark">
              <div className="card-header">
                <h1><b>RAT-E :</b></h1> 
                <div className="score"><h3>{this.props.gym.avg_score}</h3></div>
              </div>
              <div className="card-body">
                <h2>{this.props.gym.description}</h2>
              </div>
            </div>
            <div className="card  p-3 mb-2 bg-light text-dark"   >  
              <div className="card-header"> <h2><b>Leave a Comment :</b></h2></div>
                <RateCard gymId={this.props.gym.id} gymName={this.props.match.params.slug}/>    
            </div>
        </div>
     );
  }
};



export default connect(state => ({
    gym: state.gymReducer}) , {fetchGym} )
    (Gymcard);