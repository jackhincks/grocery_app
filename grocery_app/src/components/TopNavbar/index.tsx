import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import AppModal from "../AppModal";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import ShoppingCartButton from "./ShoppingCartButton";
// import ThreeBarMenu from "./ThreeBarMenu";
import NavBarLogo from "./NavBarLogo";
import Cart from "../cart";
import AuthModal from "../AuthModal";
import { AuthMode } from "@/shared/types";
import { UserContext } from "@/context/user-context";
import UserButton from "./UserButton";

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const TopNavbar = ({ handleInputChange }: Props) => { 
  // cart modal hook
  const [ seeCart, setSeeCart ] = useState<boolean>(false);
  const [ seeAuthModal, setSeeAuthModal ] = useState<boolean>(false);
  const [ signInOrUp, setSignInOrUp] = useState<AuthMode>(AuthMode.SignIn)
  const handleOpenCart = () => setSeeCart(true);
  const handleCloseCart = () => setSeeCart(false);
  const handleOpenAuthModal = () => setSeeAuthModal(true);
  const handleCloseAuthModal = () => setSeeAuthModal(false);

  const handleSignInSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSignInOrUp(event.currentTarget.value as AuthMode)
  }

  const handleSignUpSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSignInOrUp(event.currentTarget.value as AuthMode)
  }

  const { loading, user, setAuthorizedUser, signOutAuthorizedUser } = useContext(UserContext);


  return (
    <nav>
      <div className={`flex items-center justify-center fixed top-0 z-30 w-full pt-6 border-b-2 bg-primary-100`}>
        <div className={`h-16 flex items-center justify-between mx-auto w-11/12`}>
          <div className="flex gap-2">
            {/* <ThreeBarMenu /> */}
            <NavBarLogo />
          </div>
          <SearchBar handleInputChange={handleInputChange} />
          <div className="flex gap-2">
            {/* Need to implement loading state as frontend fetches signed in user info */}
            {loading ? '' : (user ? <UserButton /> : (
              <>
                <LoginButton handleOpenAuthModal={handleOpenAuthModal} handleSignInSelect={handleSignInSelect}/>
                <SignUpButton handleOpenAuthModal={handleOpenAuthModal} handleSignUpSelect={handleSignUpSelect}/>
              </>
            ))}
            <AppModal isOpen={seeAuthModal} onClose={handleCloseAuthModal}>
              <AuthModal handleCloseAuthModal={handleCloseAuthModal} signInOrUp={signInOrUp} handleSignInSelect={handleSignInSelect} handleSignUpSelect={handleSignUpSelect}/>
            </AppModal>
            {/* SHOPPING CART ICON */}
            <ShoppingCartButton handleOpenCart={handleOpenCart} />
          </div>
          {/* CART POP UP MODAL */}
          <AppModal isOpen={seeCart} onClose={handleCloseCart}>
            <Cart />
          </AppModal>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

