import { AuthMode } from '@/shared/types'
import React from 'react'

type Props = {
  handleOpenAuthModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleSignUpSelect: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SignUpButton = ({ handleOpenAuthModal, handleSignUpSelect }: Props) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleSignUpSelect(event)
    handleOpenAuthModal(event)
  }

  return (
    <div className='flex items-center'>
      <button
        className="rounded-md bg-gray-100 text-black font-bold px-3 py-2 text-s hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"
        value={AuthMode.SignUp}
        onClick={handleClick}
      >
        Sign Up
      </button>
    </div>
  )
}

export default SignUpButton