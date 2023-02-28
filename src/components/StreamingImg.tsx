import { FC } from "react";
import { StreamingCompany } from "../types/tmdb-types";

/**
 * shows streaming service image 
 * @param {string} item.logo_path streaming platform image
 * @param {string} item.provider_name streaming platform name
 */

type StreamingImgProps = {
	item: StreamingCompany;
}

const StreamingImg: FC<StreamingImgProps> = ({ item }) => {
	return (
		<img
			className="lg:w-16 xs:w-10 rounded-sm mb-10"
			src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
			alt={`${item.provider_name} logo`}
		/>
	);
};

export default StreamingImg;
