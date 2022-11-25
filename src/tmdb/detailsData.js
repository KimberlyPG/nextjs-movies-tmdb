export const detailsData = async( state, setData, slug ) => {
    await fetch(`https://api.themoviedb.org/3/${state?.type}/${state?.contentId}${slug}?api_key=${process.env.GATSBY_API_KEY}&language=en-US`) 
    .then((response) => {
        if (!response.ok) {
          console.log("Something went wrong, code error:", response.status);
        } else {
          return response.json();
        }
    })
    .then((data) => {
		if(!data.results) {
			setData(data);
		} else {
			setData(data.results);
		}
    });
}
