export function fetchGym(slug) {
    return (dispatch) => {
      console.log(`holi ${slug}`);
        dispatch({type: 'LOADING GYM'});
        fetch(`/api/v1/gyms/${slug}`)
          .then(response => response.json())
          .then(gym => { console.log(gym);

           dispatch({type: 'ADDING GYM', gym }) });
        };
}