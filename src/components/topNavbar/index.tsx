import { useState } from "react";
import { Bars3Icon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo2.png'
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
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`flex items-center gap-2 mx-auto w-11/12`}>
          <div className={`flex items-center gap-2`}>
            {/* Left Side of Nav */}
            <button
              className="p-2"
              onClick={() => {setIsMenuToggled(!isMenuToggled)}}
            >
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
            <img className="" alt="brand" src={Brand} />
          </div>
          {/* SEARCH BAR */}
          <div
            className="flex-col py-2 w-[60%] items-center"
          >
          
          <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

