import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Logo2 from '@/assets/Logo2.png'
import Brand from '@/assets/Brand.png'
import useMediaQuery from "@/hooks/useMediaQuery";
import { ShopContext } from "@/context/shop-context";
import SearchBar from "./searchBar";
import Modal from "../cartModal";
import Cart from "../cart";

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopNavbar = ({ handleInputChange }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  
  // cart modal hook
  const [ seeCart, setSeeCart ] = useState<boolean>(false);
  const handleOpenCart = () => setSeeCart(true);
  const handleCloseCart = () => setSeeCart(false);


  // useMediaQuery is a hook that returns true if min-width is at least 1060px, false if not. 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { cartItems } = useContext(ShopContext); 

  // shopping cart wiggle when cart changes
  useEffect(() => {
    
  })

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full pt-6 border-b-2 bg-primary-100`}>
        <div className={`h-16 flex items-center gap-2 mx-auto w-11/12`}>
          <div className={`flex items-center gap-2`}>
            {/* Left Side of Nav */}
            <button
              className="p-2"
              onClick={() => {setIsMenuToggled(!isMenuToggled)}}
            >
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
            <Link to="/">
              {isAboveMediumScreens ? <img className="mt-2" alt="brand" src={Brand} /> : 
              <img className="w-12" alt="brand" src={Logo2} />}
            </Link>
          </div>
          
          {/* SEARCH BAR */}
          <div className="flex-col flex-grow ml-12 py-2 w-[50%] items-center">
            <SearchBar handleInputChange={handleInputChange} />
          </div>

          {/* LOGIN / SIGNUP */}
          <div className="justify-items-end">
            <Link
              to="/login"
              className="rounded-md text-black font-bold px-10 py-2 hover:underline text-nowrap"
            >
              Log In
            </Link>
          </div>
          <div>
            <Link
              to="/signup"
              className="rounded-md bg-gray-100 text-black font-bold px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* CART ICON */}
          <div className="relative ml-4">
            <ShoppingCartIcon 
              className="h-8 w-8 text-black hover:cursor-pointer"
              onClick={handleOpenCart}
            />
            <div className="absolute flex items-center justify-center rounded-full w-4 h-4 bg-primary-500 text-xs text-white -top-2 -right-2">
              {Object.keys(cartItems).length}
            </div>
          </div>
          {/* CART POP UP MODAL */}
          <Modal isOpen={seeCart} onClose={handleCloseCart}>
            <Cart />
          </Modal>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

