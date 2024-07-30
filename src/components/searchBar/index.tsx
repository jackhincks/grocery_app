import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {}

const SearchBar = (props: Props) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="flex py-2 w-full border-2 border-black rounded-full">
      <MagnifyingGlassIcon className="mx-4 h-6 w-6 text-black" />
      <input
        className="text-black bg-transparent w-5/6 focus:outline-none placeholder:invisible sm:placeholder:visible"
        placeholder="Search All the Things"  
      >
      </input>
    </div>
  )
}

export default SearchBar