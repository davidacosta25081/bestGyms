export function fetchGyms() {
    return (dispatch) => {
      dispatch({type: 'LOADING GYMS'});
        fetch('/api/v1/gyms')
          .then(response => response.json())
          .then(gyms => dispatch({type: 'ADDING GYMS', gyms }));
        };
}
