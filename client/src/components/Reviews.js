import React from 'react'



const Reviews = (props) => {
    
    
    
  return (
      <div>
      {props.reviews.filter(review => review.gym.id === props.gymId) 
      .map(review =>
      
        <div class="card-body">
      
        
      <div className="card-title"  key={review.id}> <h2><b>{review.title}</b>  </h2> </div>
      <div className="card-text"> <h3> {review.description}</h3> <hr />    </div>
   
    </div> )}   
      
    </div>
    
    
    
    
    
    
    
    
   
  )

}



export default Reviews;