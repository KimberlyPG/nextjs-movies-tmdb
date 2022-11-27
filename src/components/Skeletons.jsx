import React from "react";
import Carousel from "react-multi-carousel";

import { Skeleton } from "@mui/material";
import { responsive } from "../utils/carousel_responsive";

/**
 * shows a skeleton on loading state
*/

const Skeletons = () => {
	return (
		<div className="flex flex-col 2xl:mx-20 xl:mx-8 lg:mx-5 xs:mx-2 my-10 lg:mt-5 sm:mt-5">
		<div className="flex space-x-6 my-10">
			<Skeleton variant="rounded" width={80} height={20} />
			<Skeleton variant="rounded" width={80} height={20} />
		</div>
		<Skeleton variant="rounded" width={170} height={14} className='px-3' />
		<Carousel responsive={responsive} centerMode={true}>
			{Array.from({ length: 9 }, (_, i) => (
			<div key={'popularSkeleton'} className="w-full sm:p-3 xs:p-1">
				<Skeleton variant="rounded" height={240} />
			</div>
			))}
		</Carousel>
		<Skeleton variant="rounded" width={170} height={14} className='px-3 mt-5' />
		<Carousel responsive={responsive} centerMode={true}>
			{Array.from({ length: 9 }, (_, i) => (
			<div key={'TopSkeleton'} className="w-full sm:p-3 xs:p-1">
				<Skeleton variant="rounded" height={240} />
			</div>
			))}
		</Carousel>
		<Skeleton variant="rounded" width={170} height={14} className='px-3 mt-5' />
		<Carousel responsive={responsive} centerMode={true}>
			{Array.from({ length: 9 }, (_, i) => (
			<div key={'nowSkeleton'} className="w-full sm:p-3 xs:p-1">
				<Skeleton variant="rounded" height={240} />
			</div>
			))}
		</Carousel>
		</div>
	);
};

export default Skeletons;
