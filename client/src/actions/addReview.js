export function addReview(review) {
    
    return (dispatch) => {
        
        fetch(`/api/v1/reviews/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({review})
        })
        .then(res => res.json())
        .then(review => dispatch({type: 'ADDING REVIEWS', review}))
        
    }

}