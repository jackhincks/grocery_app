import { useState } from "react";
import { Bars3Icon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo2 from '@/assets/Logo2.png'
import Brand from '@/assets/Brand.png'
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchBar from "../searchBar";

type Props = {}

const TopNavbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false); 
  // useMediaQuery is a hook that returns true if min-width is at least 1060px, false if not. 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full pt-6 border-b-2 `}>
        <div className={`h-16 flex items-center gap-2 mx-auto w-11/12`}>
          <div className={`flex items-center gap-2`}>
            {/* Left Side of Nav */}
            <button
              className="p-2"
              onClick={() => {setIsMenuToggled(!isMenuToggled)}}
            >
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
            {isAboveMediumScreens ? <img className="mt-2" alt="brand" src={Brand} /> : 
            <img className="w-12" alt="brand" src={Logo2} />}
          </div>
          {/* SEARCH BAR */}
          <div className="flex-col flex-grow ml-12 py-2 w-[50%] items-center">
            <SearchBar />
          </div>
          {/* LOGIN / SIGNUP */}
          <div className="justify-items-end">
            <button
              className="rounded-md text-black font-bold px-10 py-2 hover:underline text-nowrap"
            >
              Log In
            </button>
          </div>
          <div>
            <button
              className="rounded-md bg-gray-100 text-black font-bold px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

