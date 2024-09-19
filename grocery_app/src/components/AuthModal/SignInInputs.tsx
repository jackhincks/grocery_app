import httpClient from '@/shared/httpClient'
import React, { useContext, useState } from 'react'
import { UserContext } from '@/context/user-context'

type Props = {
  handleCloseAuthModal: () => void
}

const SignInInputs = ({ handleCloseAuthModal }: Props) => {
  const labelStyle = "text-2xl mb-2 text-black font-bold"
  const containerStyle = "rounded-md bg-zinc-100 p-3 mb-8 focus-within:border-2 focus-within:border-black"
  const inputStyle = "w-full text-xl text-black bg-inherit focus:outline-none"
  const submitStyle = "text-center rounded-full bg-gray-100 text-black font-bold mt-20 x-3 py-6 text-3xl hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const apiHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
  const apiPort = import.meta.env.VITE_BACKEND_PORT || 5001;
  const filePath = 'signin';

  const { setAuthorizedUser } = useContext(UserContext);

  const signInUser = async () => {
    try {
      const res = await httpClient.post(`http://${apiHost}:${apiPort}/${filePath}`, {
        userEmail,
        userPassword
      })

      if (res.status === 200) {
        setAuthorizedUser(res.data);
        handleCloseAuthModal();
      }
    } 
    catch (error: any) {
      if (error.response.status === 401) {
        alert("Invalid username and/or password!")
      }
    }
  }

  

  return (
    <div>
      <label className={labelStyle}>Email</label>
      <div className={containerStyle}>
        <input 
          className={inputStyle} 
          type='email' 
          maxLength={345}
          placeholder='Required' 
          autoComplete='username'
          required
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <label className={labelStyle}>Password</label>
      <div className={containerStyle}>
        <input 
          className={inputStyle} 
          type='password'
          maxLength={72}
          placeholder='Required' 
          autoComplete='current-password'
          required
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <div className={submitStyle} onClick={() => signInUser()}>
          Sign In
      </div>
    </div>
  )
}

export default SignInInputs