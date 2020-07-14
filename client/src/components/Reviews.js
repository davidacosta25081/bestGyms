import React from 'react'



const Reviews = (props) => {
    
    
    
  return (
    <div>
      {props.reviews.filter(review => review.gym.id === props.gymId) 
      .map(review =>
      <div className="card-body" key={review.id}>
      <div className="card-title"  key={review.id}> <h2><b>{review.title}</b></h2><br></br> <h3>{review.description}</h3><br></br><hr/></div>
      </div> )}   
    </div>
  )

}



export default Reviews;