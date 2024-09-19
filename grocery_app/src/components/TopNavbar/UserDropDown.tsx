import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {}

const UserDropDown = (props: Props) => {
  const arrowStyle = "ml-2 h-6 w-6";

  return (
    <div className="absolute top-[40px] right-[10px] w-48 h-60 rounded-md bg-white shadow-2xl">
          <div className="flex ml-2 mt-2">
            <ArrowLeftEndOnRectangleIcon className={`${arrowStyle} mr-4`} />
            Logout
          </div>
        </div>
  )
}

export default UserDropDown