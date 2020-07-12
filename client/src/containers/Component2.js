import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReview} from '../actions/addReview';
import {loadReviews} from '../actions/loadReviews';
import Reviews from '../components/Reviews';
import {bindActionCreators} from 'redux';


class Component2 extends Component {


  componentDidMount(){
    this.props.loadReviews();
   
  }
  

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
   document.getElementById('gymForm').reset();
   window.location.reload(false);
  };
        
        
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      gym_id : this.props.gymId
    });
  };
    
    
    
  render() {
      
      
    return (

      <div className="form-group" >
        <form onSubmit={this.handleSubmit} id="gymForm">
          <p>
          <input type="text" className="form-control" required name="title" id="title" onChange={this.handleChange} placeholder="Title" />     
          </p>
          <p>
          <input type="text" className="form-control" required name="description" id="description" onChange={this.handleChange} placeholder="Leave a comment" />     
          </p>
          <label>
           <div className="card-header"> <h2><b>Rate This Gym</b></h2></div>
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
        <Reviews reviews={this.props.reviews} gymId={this.props.gymId} />
      </div>
    );
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({loadReviews, addReview},dispatch)
}

export default connect(state => ({
  reviews: state.reviewReducer.reviews}) , mapDispatchToProps )
  (Component2);
