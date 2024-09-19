import { UserContext } from '@/context/user-context';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/16/solid'
import React, { useContext } from 'react'

type Props = {}

const UserDropDown = (props: Props) => {
  const arrowStyle = "ml-2 h-6 w-6";
  const dropdownItemStyle = "flex pl-2 pt-2 hover:text-orange-800 hover:underline"
  const { signOutAuthorizedUser } = useContext(UserContext);
  
  return (
    <>
      <div 
        className="fixed inset-0 z-40 flex justify-center bg-black bg-opacity-50 hover:cursor-default"
      >
      </div>
      <div className="absolute right-[0px] top-[40px] z-50 w-60 h-60 rounded-md bg-white shadow-2xl">
        <div className={dropdownItemStyle} onClick={signOutAuthorizedUser}>
          <ArrowLeftEndOnRectangleIcon className={`${arrowStyle} mr-4`} />
          Logout
        </div>
      </div>
    </>
  )
}

export default UserDropDown