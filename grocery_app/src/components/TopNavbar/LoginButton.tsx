import { AuthMode } from "@/shared/types"


type Props = {
  handleOpenAuthModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleSignInSelect: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const LoginButton = ({ handleOpenAuthModal, handleSignInSelect }: Props) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleSignInSelect(event)
    handleOpenAuthModal(event)
  }

  return (
    <div className="flex items-center">
      <button
        className="rounded-md text-black font-bold px-3 py-2 hover:underline text-nowrap"
        value={AuthMode.SignIn}
        onClick={handleClick}
      >
        Log In
      </button>
    </div>
  )
}

export default LoginButton