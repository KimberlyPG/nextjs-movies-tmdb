import React from 'react'

const SearchList = ({ item }) => {
  return (
    <div className='flex flex-row border rounded-xl mb-4 w-4/5'>
        <img 
            className="w-36"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} 
            alt={`${item.title} poster`}
            />
            <span className='m-5'>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
            </span>
    </div>
  )
}

export default SearchList;