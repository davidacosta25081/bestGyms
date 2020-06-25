export function addReview(state) {
    
    return (dispatch) => {
        console.log(`Hola from addReview reducer : ${state.title}`);
        fetch(`/api/v1/reviews/`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({state})
        })
        
        .then(res => res.json())
        .then(review => dispatch({type: 'ADDING REVIEWS', review}))
    }
}