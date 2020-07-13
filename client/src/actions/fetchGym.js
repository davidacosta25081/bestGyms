export function fetchGym(slug) {
    return (dispatch) => {
      dispatch({type: 'LOADING GYM'});
        fetch(`/api/v1/gyms/${slug}`)
          .then(response => response.json())
          .then(gym => dispatch({type: 'ADDING GYM', gym }));
        };
}