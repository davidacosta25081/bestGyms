import React, { Component } from 'react';
import GymList from '../components/GymList';
import {connect} from 'react-redux';
import {fetchGyms} from '../actions/fetchGyms';


class Gyms extends Component {
    
    componentDidMount() {
        this.props.fetchGyms()
    }
    
    render() {
     
      return (
        <div className="grid">
          <GymList gyms={this.props.gyms}/>
        </div>
      );
    }  
};




export default connect(state => ({
gyms: state.gymsReducer.gyms }) , {fetchGyms} )
(Gyms);