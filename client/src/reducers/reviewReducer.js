export default function reviewReducer (state = { reviews: [], requesting: false },action)  
  {
    
    switch(action.type) {       
   
        case 'LOADING REVIEWS' :
            return {
              ...state,
              reviews: [...state.reviews],
              requesting: true 
          }    
      
          case 'ADDING REVIEWS' :
          console.log(state);
          return {
              ...state, 
              reviews: [...state.reviews, action.review],
              requesting: false
            }
            
          default: 
          return state;  
        }
      };    