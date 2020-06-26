import React from 'react'


const Reviews = (props) => {
    
    
    console.log (props.reviews);
    console.log (props.gymId);
   
  return (
  
  
    
    
    <div className="reviews">
        
  {props.reviews.map(review =>   
    
    
  <li key={review.id}> <b>{review.title} : </b> {review.description} </li> )}     
     
     
  
  
    </div> 

        
    )
  }

  export default Reviews;