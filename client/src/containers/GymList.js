import React from 'react';
import Gym from './Gym';

const GymList = ({gyms}) => (
  
  
  
   <div className="GymListcontainer">
  
  <div className="row">
  
   {gyms.map(gym =>  < Gym key={gym.id} gym={gym} /> ) }       
   
   </div>
   </div>
   
  
)

export default GymList;