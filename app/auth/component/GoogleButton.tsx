import Image from 'next/image'
import authPath from "@/zustand/auth/authValues";
import googleIcon from "@/public/svgs/googleicon.svg"

const GoogleButton = () => {
    const { AuthPath } = authPath();
    const pathName = AuthPath?.type.name
  return (
    <button type="button" className="flex gap-2 w-full justify-center border rounded-[8px] outline-none border-[#CED4DA] p-3 text-[14px] active:bg-[#e6ebf0]">
      <Image src={googleIcon} alt={`${googleIcon} icon`} className="w-[22px]"/>
      <p>{pathName !== "SignUp" ? "Log In" : "Sign Up"} with Google</p>
    </button>
  )
}

export default GoogleButton