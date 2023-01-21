export const searchContent = async (param, slug, setData, setStatus) => {
    setStatus("loading");
    await fetch(`https://api.themoviedb.org/3/search/${slug}?api_key=${process.env.apiKey}&query=${param}&page=1`)
		.then((response) => {
			if (!response.ok) {
				console.log("Something went wrong, code error:", response.status);
			} else {
				return response.json();
			}
		})
		.then((data) => {
			setData(data?.results);
			setStatus(true);
		});
};
