import React from 'react'
import Dropdown from 'react-dropdown';

const Providers = ({ setShowMethod, handleChange, countrySelected, showMethod, providers, options }) => {
  return (
    <div className="mt-5">
        <p className="font-bold">Stream</p>
        <div className="flex space-x-5 h-10 mb-3">
            <button className="mb-3" onClick={() => setShowMethod('flatrate')}>Flatrate</button>
            <button className="mb-3" onClick={() => setShowMethod('buy')}>Buy</button>
            <button className="mb-3" onClick={() => setShowMethod('rent')}>Rent</button>
            <Dropdown 
                className="text-xs ml-10"
                options={options} 
                onChange={handleChange} 
                value={countrySelected.value} 
                placeholder="Select an option" 
            />
        </div>
        <div className="flex space-x-5">
            {showMethod === 'flatrate' &&
                Object.values(providers)[countrySelected.idx]?.flatrate?.map((item) => (
                    <img 
                        className="w-16 rounded-sm"
                        src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} 
                        alt={`${item.provider_name} image`} 
                    /> 
                ))
            }
            {showMethod === 'buy' &&
                Object.values(providers)[countrySelected.idx]?.buy?.map((item) => (
                <img 
                    className="w-16 rounded-sm"
                    src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} 
                    alt={`${item.provider_name} image`} 
                /> 
                ))
            }
            {showMethod == 'rent' &&
                Object.values(providers)[countrySelected.idx]?.rent?.map((item) => (
                <img 
                    className="w-16 rounded-sm"
                    src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} 
                    alt={`${item.provider_name} image`} 
                /> 
                ))
            }
        </div>
    </div>
  )
}

export default Providers;
