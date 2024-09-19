import React, { useContext, useState } from 'react'
import httpClient from '@/shared/httpClient'
import { UserContext } from '@/context/user-context'

type Props = {
  handleCloseAuthModal: () => void
}

const SignUpInputs = ({ handleCloseAuthModal }: Props) => {
  const labelStyle = "block text-2xl mb-2 text-black font-bold"
  const containerStyle = "rounded-md bg-zinc-100 p-3 mb-8 focus-within:border-2 focus-within:border-black"
  const inputStyle = "w-full text-xl text-black bg-inherit focus:outline-none"
  const submitStyle = "text-center rounded-full bg-gray-100 text-black font-bold mt-20 x-3 py-6 text-3xl hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"

  const [userFN, setUserFN] = useState("");
  const [userLN, setUserLN] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const apiHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
  const apiPort = import.meta.env.VITE_BACKEND_PORT || 5001;
  const filePath = 'signup';

  const { setAuthorizedUser } = useContext(UserContext);

  const signUpUser = async () => {
    try {
      const res = await httpClient.post(`http://${apiHost}:${apiPort}/${filePath}`, {
        userFN,
        userLN,
        userEmail,
        userPassword
      })

      if (res.status === 409) {
        alert("Email has associated account.")
      } else {
        setAuthorizedUser(res.data);
        handleCloseAuthModal();
      }
    } 
    catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <form>
      {/* FIRST NAME */}
      <label className={labelStyle}>First Name</label>
      <div className={containerStyle}>
        <input 
          className={inputStyle} 
          type='text'
          placeholder='Required' 
          maxLength={50}
          autoComplete='given-name'
          required
          onChange={(e) => setUserFN(e.target.value)}
        />
      </div>
      {/* LAST NAME */}
      <label className={labelStyle}>Last Name</label>
      <div className={containerStyle}>
        <input 
          className={inputStyle} 
          type='text'
          placeholder='Required' 
          maxLength={50}
          autoComplete='family-name'
          required
          onChange={(e) => setUserLN(e.target.value)}
        />
      </div>
      {/* EMAIL */}
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
      {/* PASSWORD */}
      <label className={labelStyle}>Password</label>
      <div className={containerStyle}>
        <input 
          className={inputStyle} 
          type='password'
          maxLength={72}
          placeholder='Required' 
          autoComplete='current-password'
          required={true}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <div className={submitStyle} onClick={() => signUpUser()}>
          Sign Up
      </div>
    </form>
  )
}

export default SignUpInputs