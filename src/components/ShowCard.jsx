import React from 'react'
import { navigate } from 'gatsby';

const ShowCard = ({ item, type, page }) => {
  console.log("item", item)
  if(item.poster_path === null) return
  return (
    <div className='relative cursor-pointer' onClick={() => navigate(`/details/${item.title}`, {state: {contentId: item.id, type: type }})}>
      {item.release_date && page !== 'home' &&
        <span className='flex z-10 absolute bottom-0 p-1 text-white space-x-5 text-xs font-bold'>
          <p className='bg-gray-600 bg-opacity-60 rounded-lg px-2 py-1 mb-6'>{item?.release_date?.split("-")[0]}</p>           
          {item.adult === true ? (
            <p className='bg-gray-600 bg-opacity-60 rounded-lg px-2 py-1 border border-green-400 mb-6'>18+</p> 
            ):(
            <p className='bg-gray-600 bg-opacity-60 rounded-lg px-2 py-1 border border-green-400 mb-6'>ALL</p>
          )}
        </span>
      }    
      <div>
        {item.vote_average !== 0 && item.vote_average!== undefined &&
          <div className="flex justify-center z-10 absolute p-2 rounded-full h-8 w-8 m-3 bg-gray-200 bg-opacity-90">
              <p className="text-xs text-green-600">{item.vote_average}</p>
          </div>
        }
        <div className='overflow-hidden'>
          <img 
              className="hover:opacity-90 h-full rounded-xl hover:scale-110"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path.original === undefined ? item.poster_path : item.poster_path.original}`} 
              alt={`${item.name} poster`}
          /> 
        </div>
        {page !== 'home' &&  <h3 className='font-bold text-sm'>{item.title ? item.title : item.name}</h3>}                    
      </div> 
    </div>
  )
}

export default ShowCard;