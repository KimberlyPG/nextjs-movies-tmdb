export const minutesToHours = (movieMinutes) => {
    const hours = Math.floor(movieMinutes / 60);
    const minutes = movieMinutes % 60;
    return hours +' HR '+ minutes +' MIN'
}