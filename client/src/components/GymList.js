
import Gym from './Gym';
import React, { Component } from 'react';
  
class GymList extends React.Component {
  
  
  state = { gyms: [], toggle: true }
  
  orderedList = () => {
    let gymsList = [...this.props.gyms]
    this.setState({ gyms: 
    gymsList.sort(function(a, b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    }) , toggle: !this.state.toggle})
  }
  
  
   render () {
    console.log(this.props.gyms)
      return (
        this.state.toggle?  

        <div className="GymListcontainer">
          <div className="row">
            {this.props.gyms.map(gym =>  <Gym key={gym.id} gym={gym}/>)}       
          </div>
          <div><button className='orderingButton' onClick={this.orderedList}>SORT GYMS</button></div>
        </div> :
      
        <div className="GymListcontainer">
          <div className="row">
            {this.state.gyms.map(gym =>  <Gym key={gym.id} gym={gym}/>)}      
            <div><button className='orderingButton' onClick={this.orderedList}>ORIGINAL</button></div>
          </div>
        </div>
      )
    }
}

export default GymList;