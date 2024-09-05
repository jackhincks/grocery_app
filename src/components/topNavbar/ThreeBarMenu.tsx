import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

type Props = {}

const ThreeBarMenu = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  
  return (
    <button
      className="p-2"
      onClick={() => {setIsMenuToggled(!isMenuToggled)}}
    >
      <Bars3Icon className="h-6 w-6 text-black" />
    </button>
  )
}

export default ThreeBarMenu;