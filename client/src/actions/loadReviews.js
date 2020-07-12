export function loadReviews() {
  return (dispatch) => {              
    fetch(`/api/v1/reviews/`)
    .then(response => response.json())
    .then(reviews => dispatch({type:'LOADING REVIEWS', reviews} ))
  }
} 