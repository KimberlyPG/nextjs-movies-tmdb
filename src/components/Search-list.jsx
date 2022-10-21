import React from 'react'

const SearchList = ({ item }) => {
  return (
    <div>
        <p>{item.title}</p>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} alt="" />
    </div>
  )
}

export default SearchList;