import React from 'react'



const Reviews = (props) => {
    
    
    
   
   
  
  
  
    return (
  
  
    
    
 
 <div className="reviews">
       
  {props.reviews.filter(review => review.gym.id === props.gymId) 
  .map(review => <li key={review.id}> <h2>{review.title} : {review.description}</h2> </li>) }    
  </div> 

        
    )
  }

  export default Reviews;