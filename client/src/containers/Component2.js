import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReview} from '../actions/addReview';
import Reviews from '../components/Reviews';


class Component2 extends Component {
  
    state = {

        "title": '', 
        "description": '',
        "score": '1',
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




    <div className="form-group" >
    
    <form  onSubmit={this.handleSubmit}>
       <p>
        <label></label>
        <input type="text" className="form-control" id="title" onChange={this.handleChange} placeholder="Title" />     
      </p>
      <p>
        <label> </label>
        <input type="text" className="form-control" id="description" onChange={this.handleChange} placeholder="Leave a comment" />     
      </p>
      <label>
      <div className="card-header"> <h2><b>Rate This Gym</b> </h2> </div>
          <select id="score"  onChange={this.handleChange}>
            <option id="score" value="1"> 1</option>
            <option id="score" value="2"> 2</option>
            <option id="score" value="3"> 3</option>
            <option id="score" value="4"> 4</option>
            <option id="score" value="5"> 5</option>
          </select>
        </label>
        
        
        
        
        <h2> <p><input type="submit" className="btn-secondary" /></p> </h2>
      </form>
   
      <Reviews reviews={this.props.review} gymId={this.props.gymId} />
   
   </div>

       



);

  }
    
}


export default connect(state => ({
  review: state.reviewReducer.reviews}) , {addReview} )
    (Component2);
