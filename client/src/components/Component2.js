import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReview} from '../actions/addReview';



class Component2 extends Component {
    
    state = {

        title: '', 
        description: '',
        score: 4,
        gym_id: this.props.gymId
    
        }
    
        handleSubmit = event => {
            event.preventDefault();
            this.props.addReview(this.state );
          };
        
        
        
        
        handleChange = event => {
          this.setState({
             title: event.target.value,     
            
             
             });
       };
    
       handleChange2 = event => {
        this.setState({
              
           description: event.target.value
           
           });
     };
    
    
    
    
    render() {

      console.log(this.state);
    
     return (




    <div>
    <form onSubmit={this.handleSubmit}>
       <p>
        <label>Add Title</label>
        <input type="text" value={this.state.title} onChange={this.handleChange} />     
      </p>
      <p>
        <label>Add Description</label>
        <input type="text"  value={this.state.description} onChange={this.handleChange2} />     
      </p>
      
        
        <input type="submit" />
      </form>
   </div>

);

  }
    
}


export default connect(state => ({
    review: state.reviewReducer}) , {addReview} )
    (Component2);
