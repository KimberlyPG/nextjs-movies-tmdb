import React from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";

import logo from "../assets/logo.svg";

/**
 * topbar that includes tmdb logo and a searchbar
 */

const Topbar = () => {
	return (
		<div className="flex lg:h-14 xs:h-12 items-center shadow-md space-x-6">
			<Link href={'/'} >
				<img
					className="lg:w-36 xs:w-24 cursor-pointer ml-3"
					src={logo}
					alt="tmdb logo"
				/>
			</Link>
			<div className="grid lg:justify-center xs:justify-end w-full mt-1">
				<SearchBar />
			</div>
		</div>
	);
};

export default Topbar;
