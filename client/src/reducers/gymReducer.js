export default function gymReducer (state = { gym: [], requesting: false },action)  
  {
    
    switch(action.type) {       
   
    case 'LOADING GYM' :
      return {
       
        requesting: true 
    }    

    case 'ADDING GYM' :
        
    console.log(`Hi from the gymReducer ${action.gym.name}`)
    return  action.gym 
        
    
        
      
      
    default: 
    return state;  
  }
};    