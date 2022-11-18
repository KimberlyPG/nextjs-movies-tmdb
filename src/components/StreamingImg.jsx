import React from 'react'

const StreamingImg = ({ item }) => {
  return (
    <img 
        className="w-16 rounded-sm mb-10"
        src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} 
        alt={`${item.provider_name} image`} 
    /> 
  )
}

export default StreamingImg;