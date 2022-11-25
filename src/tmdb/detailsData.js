export const detailsData = async({ state, setData, slug }) => {
    await fetch(`https://api.themoviedb.org/3/${state.type}/${state.contentId}/${slug}?api_key=${process.env.GATSBY_API_KEY}&language=en-US`) 
    .then(res => res.json())
    .then(data => setData(data))
}
