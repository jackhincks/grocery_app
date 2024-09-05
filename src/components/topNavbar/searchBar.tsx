import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ handleInputChange }: Props) => {

  return (
    <div className="flex py-2 w-full border-2 border-black rounded-full">
      <MagnifyingGlassIcon className="mx-4 h-6 w-6 text-black" />
      <input
        className="text-black bg-transparent w-5/6 focus:outline-none placeholder:invisible sm:placeholder:visible"
        placeholder="Search All the Things"
        onChange={handleInputChange}
      >
      </input>
    </div>
  )
}

export default SearchBar