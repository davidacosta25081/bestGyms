import React from 'react';
import Gym from './Gym';

const GymList = (props) => {
  
  
  return (
    <div className="GymListcontainer">
      <div className="row">
        {props.gyms.map(gym =>  <Gym key={gym.id} gym={gym}/>)}       
      </div>
   </div>
   )
}

export default GymList;