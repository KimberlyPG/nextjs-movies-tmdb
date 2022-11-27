import React from "react";

/**
 * movies and series genres list for details page
 * @param {array} data getting movies or series genres   
 */

const Genres = ({ data }) => {
    return (
        <div className="lg:ml-5">
            <p className="font-bold text-white lg:text-base md:text-sm xs:text-xs lg:mb-2">
                Genres
            </p>
            <div className="flex lg:flex-col">
                {data?.map((genre) => (
                    <div key={genre.id} className="flex xs:mr-2 xl:mr-0">
                        <p className="lg:border w-full lg:border-green-300 rounded-lg lg:mb-2 xs:text-green-500 
                        lg:text-white lg:text-center lg:px-2 xl:text-base lg:text-sm xs:text-xs">
                            {genre.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;
