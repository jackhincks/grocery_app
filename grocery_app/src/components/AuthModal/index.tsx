import React from 'react'
import { AuthMode } from '@/shared/types'
import Slider from './Slider'
import SignInInputs from './SignInInputs'
import SignUpInputs from './SignUpInputs'


type Props = {
  handleCloseAuthModal: () => void,
  signInOrUp: AuthMode,
  handleSignInSelect: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleSignUpSelect: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const AuthModal = ({ handleCloseAuthModal, signInOrUp, handleSignInSelect, handleSignUpSelect}: Props) => {
  return (
    <div className={`${signInOrUp === AuthMode.SignIn ? 'h-[800px]' : 'h-[1000px]'} p-6`}>
      <div className="text-5xl text-black mb-8">Sign In or Sign Up</div>
      {/* SLIDER TO SELECT LOG IN OR SIGN UP */}
      <Slider signInOrUp={signInOrUp} handleSignInSelect={handleSignInSelect} handleSignUpSelect={handleSignUpSelect}/>
      {signInOrUp === AuthMode.SignIn ? <SignInInputs handleCloseAuthModal={handleCloseAuthModal}/> : <SignUpInputs handleCloseAuthModal={handleCloseAuthModal}/>}
    </div>
  )
}

export default AuthModal