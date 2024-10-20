"use client"
import currentAuthPath from '@/zustand/auth/authValues'

const Auth = () => {
    const {AuthPath} = currentAuthPath()
  return (
    <>{AuthPath}</>
  )
}

export default Auth