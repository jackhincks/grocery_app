import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div>
      <Link
        to="/signup"
        className="rounded-md bg-gray-100 text-black font-bold px-6 py-2 hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"
      >
        Sign Up
      </Link>
    </div>
  )
}

export default SignUp