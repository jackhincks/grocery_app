import { createContext, useEffect, useState } from "react";
import { User, UserModifier } from "@/shared/types"
import React from "react";
import httpClient from "@/shared/httpClient";

export const UserContext = createContext<UserModifier>(null!);

type Props = {
  children: any
}

const UserContextProvider = (props: Props) => {
  // cartItems will hold an object with keys = productID and values = quantity ordered
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true)

  const apiHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
  const apiPort = import.meta.env.VITE_BACKEND_PORT || 5001;
  const filePathUserData = '@me';
  const filePathLogout = 'signout';

  useEffect(() => {
    (async () => {
      try {
        const res = await httpClient.get(`http://${apiHost}:${apiPort}/${filePathUserData}`);
        setUser(res.data)
      }
      catch (error) {
        console.log("Not authenticated")
      }
      finally {
        setLoading(false);
      }
    })()
  }, []);

  const setAuthorizedUser = (user: User) => {
    setUser(user);
  }

  const signOutAuthorizedUser = async () => {
    try {
      // This tells backend to remove the cookie session, update user to null, and reload home window
      const res = await httpClient.post(`http://${apiHost}:${apiPort}/${filePathLogout}`);
      setUser(null);
      console.log('works')
      console.log(user)
      window.location.href = "/"
    } 
    catch (error) {
      console.log(`${error}`)
    }
  }

  const contextValue = { user, loading, setAuthorizedUser, signOutAuthorizedUser };

  return (
    <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>
  )
}

export default UserContextProvider