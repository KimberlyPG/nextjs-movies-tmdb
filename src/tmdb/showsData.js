export const showsData = async( state, setData) => {
    await fetch(`https://api.themoviedb.org/3/${state}/top_rated?api_key=${process.env.GATSBY_API_KEY}&language=en-US&page=1`) 
    .then((response) => {
        if (!response.ok) {
          console.log("Something went wrong, code error:", response.status);
        } else {
          return response.json();
        }
    })
    .then((data) => {
        setData(data);
    });
}
