import useMediaQuery from '@/hooks/useMediaQuery';
import Logo2 from '@/assets/Logo2.png'
import Brand from '@/assets/Brand.png'
import { Link } from 'react-router-dom';

type Props = {}

const NavBarLogo = (props: Props) => {
  // useMediaQuery is a hook that returns true if min-width is at least 1060px, false if not. 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      {isAboveMediumScreens ? 
        <Link className="w-[200px]" to="/">
          <img className="h-[40px]" alt="brand" src={Brand} />
        </Link> :
        <Link className="w-10" to="/">
          <img className="h-10 w-10" alt="brand" src={Logo2} />
        </Link>
        }
    </>
  )
}

export default NavBarLogo