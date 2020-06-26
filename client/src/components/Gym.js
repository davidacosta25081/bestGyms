import React from 'react'
import { Link } from 'react-router-dom';


const Gym = ({gym}) => {
    const gymSlug = gym.slug;
    
    
    
   
    
    return (
        
       
        <div className="col-sm-4 p-3 border bg-light  ">
          <div className="gym-image"><img src={gym.image_url}></img>
          </div>   
          <div className="gym-name"><h3><b>{gym.name}</b></h3></div>
          <div className="gym-score"><h5><b>Review Score: {gym.avg_score}</b></h5></div>
         
          <div className="gym-link">
           <Link to={`/Gyms/${gymSlug}`}> 
          <button type="button" className="btn btn-secondary"><h3>See Gym </h3></button>
           </Link></div>
        
           
        
        </div> 
    )
}

export default Gym;