import { Link } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="justify-items-end">
      <Link
        to="/login"
        className="rounded-md text-black font-bold px-3 py-2 hover:underline text-nowrap"
      >
        Log In
      </Link>
    </div>
  )
}

export default Login