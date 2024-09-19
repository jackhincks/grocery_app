import { AuthMode } from '@/shared/types'
import React from 'react'

type Props = {
  signInOrUp: AuthMode,
  handleSignInSelect: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleSignUpSelect: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Slider = ({ signInOrUp, handleSignInSelect, handleSignUpSelect }: Props) => {
  let userSignInStyling= signInOrUp === AuthMode.SignIn ? `bg-gray-100 text-black` : ``;
  let userSignUpStyling= signInOrUp === AuthMode.SignUp ? `bg-gray-100 text-black` : ``;

  return (
    <div className="flex justify-center items-center my-12">
        <div className="rounded-full bg-slate-200">
          <button 
            className={`rounded-full ${userSignInStyling} text-black font-bold px-5 py-2 text-l cursor-pointer text-nowrap`}
            value={AuthMode.SignIn}
            onClick={handleSignInSelect}
          >
            Sign In
          </button>
          <button 
            className={`rounded-full ${userSignUpStyling} text-black font-bold px-5 py-2 text-l cursor-pointer text-nowrap`}
            value={AuthMode.SignUp}
            onClick={handleSignUpSelect}
          >
            Sign Up
          </button>
        </div>
      </div>
  )
}

export default Slider