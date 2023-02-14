import { FC, ReactNode } from 'react';

import { HomeTv } from '../types/tmdb-types';
/**
 * Create a backdrop and contains movies and series details
 * @param {object} details movie or serie backdrop
 * @param children details component
 */

type DetailsContainerProps = {
    details: HomeTv;
	children: ReactNode;
}

const DetailsContainer: FC<DetailsContainerProps> = ({ details, children }) => {
  return (
    <div className="w-full" 
        style={{
            backgroundSize: 'cover', 
            backgroundImage:`linear-gradient(0deg, rgba(1, 124, 128,0.8), rgba(1, 124, 128,0.8)), url(https://image.tmdb.org/t/p/w1280/${details?.backdrop_path})`,
            backgroundAttachment: 'fixed',
        }}
    >
        {children}
    </div>
  );
};

export default DetailsContainer;
