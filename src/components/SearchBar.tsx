import { useState, ChangeEvent, FormEvent }  from "react";
import { useRouter } from 'next/navigation';
import { BsSearch } from "react-icons/bs";

/**
 * search movies or series and see the results page
 */

const SearchBar = () => {
    const [showName, setShowName] = useState<string>('');
    const router = useRouter();
      
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setShowName(event.target.value);
    }

    const navigateToResults = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/${showName}`)
        setShowName('');
    }

    return (
        <div className="flex justify-end mr-3">
            <form className="relative lg:w-96 xs:w-full xs:text-xs sm:text-sm"  onSubmit={navigateToResults}>
                <input 
                    className="peer cursor-pointer relative z-10 w-9 h-9 rounded-full pl-8 border bg-transparent outline-none 
                    xs:focus:w-full xs:focus:cursor-text xs:focus:border-cyan-400 xs:focus:pl-16 focus:justify-start focus:pr-4
                    lg:w-full lg:pl-16 placeholder:italic" 
                    type="search" 
                    onChange={handleChange}
                    value={showName}
                    placeholder="Search for a show... "
                />
                <BsSearch 
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent px-3.5 peer-focus:border-gray-300 
                    text-lg text-gray-400 peer-focus:text-cyan-400 align-middle cursor-pointer peer-hover:opacity-80 p-2 pl-2"
                />
            </form>
        </div>
    );
};

export default SearchBar;
