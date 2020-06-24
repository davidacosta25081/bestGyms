export default function gymReducer (state = { gyms: [], requesting: false },action)  
  {
    switch(action.type) {       
   
    case 'LOADING GYMS' :
      return {
        ...state,
        gyms: [...state.gyms],
        requesting: true 
    }    

    case 'ADDING GYMS' :
      return {
        ...state, 
        gyms: action.gyms,
        requesting: false
      }
      
    default: 
    return state;  
  }
};    