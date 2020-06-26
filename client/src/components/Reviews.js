import React from 'react'



const Reviews = (props) => {
    
    
    console.log (props.reviews);
    console.log (props.gymId);
   
  
  
  
    return (
  
  
    
    
 
 <div className="reviews">
        
  {props.reviews.map(review => {  if (review.gym.id === props.gymId) {
    
    
  return <li key={review.id}> <h2>{review.title} : {review.description}</h2> </li>}})}     
     
  
  
  
    </div> 

        
    )
  }

  export default Reviews;