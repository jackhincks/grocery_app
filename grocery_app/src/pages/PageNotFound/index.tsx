import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <div className="mt-[90px] p-12">
      <h1 className="flex justify-center items-center text-7xl">404: Page Not Found!</h1>
      <Link to="/" className="flex justify-center mt-10 text-2xl text-blue-700 underline">
        Return to Home Page
      </Link>
    </div>
  )
}

export default PageNotFound