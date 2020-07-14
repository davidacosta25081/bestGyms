
import Gym from './Gym';
import React, { Component } from 'react';
  
class GymList extends React.Component {
  
  
  state = { gyms: [], toggle: true }
  
  orderedList = () => {
    this.setState({ gyms: 
    this.props.gyms.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    }) , toggle: false })
  }
  
  
    render () {
      
      return (
        this.state.toggle ?  

        <div className="GymListcontainer">
          <div className="row">
            {this.props.gyms.map(gym =>  <Gym key={gym.id} gym={gym}/>)}       
          </div>
          <div><button className='orderingButton' onClick={this.orderedList}>SORT GYMS</button></div>
        </div> :
      
        <div className="GymListcontainer">
          <div className="row">
            {this.state.gyms.map(gym =>  <Gym key={gym.id} gym={gym}/>)}      
          </div>
        </div>
      )
    }
}

export default GymList;