import React, { useState } from 'react'

import Dropdown from './Dropdown';

import StreamingImg from './StreamingImg';

/**
 * render the streaming services and the dropdown with countries
 * @param {array} options countries code array 
 * @param {object} countrySelected country code and name for the country selected 
 * @param {() => void} handleChange country code and name for the country selected   
 * @param {array} providers[countrySelected.value].flatrate showing streaming services with flatrate method
 * @param {array} [countrySelected.value].buy showing streaming services with buy method
 * @param {array} providers[countrySelected.value].rent showing streaming services with rent
 */

const StreamingServices = ({ options, countrySelected, handleChange, providers }) => {
    const [showMethod, setShowMethod] = useState('flatrate');

    return (
        <>
            {options.length > 0 &&
                <div className="mt-5 text-white">
                    <p className="font-bold lg:text-base xs:text-sm">Stream</p>
                    <div className="flex space-x-5 h-8 mb-5">
                        <button className="mt-1 lg:text-base xs:text-sm" onClick={() => setShowMethod('flatrate')}>Flatrate</button>
                        <button className="mt-1 lg:text-base xs:text-sm" onClick={() => setShowMethod('buy')}>Buy</button>
                        <button className="mt-1 lg:text-base xs:text-sm" onClick={() => setShowMethod('rent')}>Rent</button>
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
