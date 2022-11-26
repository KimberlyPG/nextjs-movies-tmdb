import React from 'react'

import Dropdown from './Dropdown';

import StreamingImg from './StreamingImg';

const StreamingServices = ({ showMethod, setShowMethod, options, countrySelected, handleChange, providers }) => {
    console.log("country", countrySelected)

    return (
        <>
            {options.length > 0 &&
                <div className="mt-5 text-white">
                    <p className="font-bold lg:text-base xs:text-sm">Stream</p>
                    <div className="flex space-x-5 h-8 mb-3">
                        <button className="mb-3 lg:text-base xs:text-sm" onClick={() => setShowMethod('flatrate')}>Flatrate</button>
                        <button className="mb-3 lg:text-base xs:text-sm" onClick={() => setShowMethod('buy')}>Buy</button>
                        <button className="mb-3 lg:text-base xs:text-sm" onClick={() => setShowMethod('rent')}>Rent</button>
                        <Dropdown 
                            options={options} 
                            countrySelected={countrySelected} 
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="flex space-x-5">
                        {showMethod === 'flatrate' &&
                            providers[countrySelected.value]?.flatrate?.map((item) => (         
                                <StreamingImg item={item}/> 
                            ))
                        }
                        {showMethod === 'buy' &&
                            providers[countrySelected.value]?.buy?.map((item) => (
                                <StreamingImg item={item}/>  
                            ))
                        }
                        {showMethod === 'rent' &&
                            providers[countrySelected.value]?.rent?.map((item) => (
                                <StreamingImg item={item}/>  
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default StreamingServices;
