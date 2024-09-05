import { useState } from "react";
import SearchBar from "./searchBar";
import Modal from "../cartModal";
import Login from "./login";
import SignUp from "./signup";
import ShoppingCartButton from "./ShoppingCartButton";
import ThreeBarMenu from "./ThreeBarMenu";
import NavBarLogo from "./NavBarLogo";

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopNavbar = ({ handleInputChange }: Props) => { 
  // cart modal hook
  const [ seeCart, setSeeCart ] = useState<boolean>(false);
  const handleOpenCart = () => setSeeCart(true);
  const handleCloseCart = () => setSeeCart(false);


  return (
    <nav>
      <div className={`flex items-center justify-center fixed top-0 z-30 w-full pt-6 border-b-2 bg-primary-100`}>
        <div className={`h-16 flex items-center justify-between mx-auto w-11/12`}>
          <div className="flex gap-2">
            <ThreeBarMenu />
            <NavBarLogo />
          </div>
          <SearchBar handleInputChange={handleInputChange} />
          <div className="flex gap-2">
          <Login />
          <SignUp />
          {/* SHOPPING CART ICON */}
          <ShoppingCartButton handleOpenCart={handleOpenCart} />.
          </div>
          {/* CART POP UP MODAL */}
          <Modal isOpen={seeCart} onClose={handleCloseCart} />
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

