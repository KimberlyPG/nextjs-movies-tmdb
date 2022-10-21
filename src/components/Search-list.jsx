import React from 'react'

const SearchList = ({ item }) => {
  return (
    <div className='flex flex-row border p-5'>
        <img 
            className="w-36"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} 
            alt={`${item.title} poster`}
            />
            <span>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
            </span>
    </div>
  )
}

export default SearchList;