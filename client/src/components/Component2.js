import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReview} from '../actions/addReview';
import Reviews from './Reviews';


class Component2 extends Component {
  
    state = {

        "title": '', 
        "description": '',
        "score": '',
        "gym_id": ''
    
        }
    
        handleSubmit = event => {
            event.preventDefault();
            this.props.addReview(this.state);
            this.setState ({
            title: ' ', 
            description:' ', 
            gym_id: ' '  
            })
          };
        
        
        
        
       
    
       handleChange = event => {
        this.setState({
              [event.target.id]: event.target.value,
              gym_id : this.props.gymId
           });
     };
    
    
    
    
    render() {
      console.log(this.state);
      console.log(this.props.review);
      
     return (




    <div>
    
    <form onSubmit={this.handleSubmit}>
       <p>
        <label></label>
        <input type="text" id="title" onChange={this.handleChange} placeholder="Title" />     
      </p>
      <p>
        <label> </label>
        <input type="text" id="description" onChange={this.handleChange} placeholder="Review" />     
      </p>
      <label>
          Review Score:
          <select id="score" onChange={this.handleChange}>
            <option id="score" value="1"> 1</option>
            <option id="score" value="2"> 2</option>
            <option id="score" value="3"> 3</option>
            <option id="score" value="4"> 4</option>
            <option id="score" value="5"> 5</option>
          </select>
        </label>
        
        
        
        
       <p> <input type="submit" className="btn-secondary" /> </p>
      </form>
   
      <Reviews reviews={this.props.review} gymId={this.props.gymId} />
   
   </div>

       



);

  }
    
}


export default connect(state => ({
  review: state.reviewReducer.reviews}) , {addReview} )
    (Component2);
