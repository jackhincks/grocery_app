import React, { useContext, useState } from 'react'
import { UserContext } from '@/context/user-context'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'
import UserDropDown from './UserDropDown'

type Props = {}

const UserButton = (props: Props) => {
  const arrowStyle = "ml-2 h-6 w-6";
  const closedStyle = "relative flex items-center px-3 font-bold text-black rounded-full hover:cursor-pointer hover:bg-primary-300"
  const openStyle = `${closedStyle} bg-primary-300 rounded-full`
  const [ isDropdownOpen, setIsDropdownOpen ] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const { user, setAuthorizedUser, signOutAuthorizedUser } = useContext(UserContext);

  return (
    <>
      <div className={isDropdownOpen ? openStyle : closedStyle} onClick={toggleDropdown}>
        Hello, {user?.userFN}
        {isDropdownOpen ? <ChevronUpIcon className={arrowStyle} /> : <ChevronDownIcon className={arrowStyle} />}
        {isDropdownOpen ? <UserDropDown /> : ''}
      </div>
    </>
  )
}

export default UserButton