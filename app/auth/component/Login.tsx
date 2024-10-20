"use client";
import Link from "next/link";
import loginUser from "../functions/loginUser";
import authValues from "@/zustand/auth/authValues";
// import AuthWithGoogle from "../google/authWithGoogle";

type InputElementProps = {
  text: string;
  type: string;
  value: string;
  placeholder: string;
  setFunction: (value: string) => void;
};

const InputElement: React.FC<InputElementProps> = ({ type, value, text,  setFunction,  placeholder }) => {
  return (
    <label htmlFor={type} className="flex flex-col gap-1 w-full">
      <p className="text-[12px] font-medium">{text}</p>

      <input
        required
        id={type}
        type={type}
        name={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setFunction(e.target.value)}
        className="rounded-[8px] border p-[10px] text-[14px] w-full pl-4 outline-none border-[#CED4DA]"
      />
    </label>
  );
};

const Login = () => {
  const {email, password, isLoading,setEmail, setPassword} = authValues()

  return (
    <main className="gap-6 pt-10 flex flex-col w-full max-w-[60%] items-center max-md:pt-5 max-md:max-w-[80%] max-md:gap-4 max-sm:pt-5 max-sm:max-w-[90%]">
      <h1 className="font-medium text-center text-[25px] max-md:text-[22px] max-sm:text-[18px]">
        Welcome Back
      </h1>

      <form onSubmit={(e) => loginUser(e)} className="flex flex-col w-full gap-6 max-md:gap-4" >
        
        <InputElement
          type="email"
          value={email}
          text="Email address"
          setFunction={setEmail}
          placeholder="example@gmail.com"
        />

        <InputElement
          text="Password"
          type="password"
          value={password}
          placeholder="Password"
          setFunction={setPassword}
        />

        <Link href="/" className="text-[10px] text-[#543EE0] place-self-end underline">Forgot Password</Link>

        <button disabled={isLoading} className={`${isLoading ? "bg-[#4131af]" : "bg-[#543EE0]" } flex gap-1 items-end justify-center rounded-[8px] border-none p-[10px] text-[14px] text-white w-full`}>
          Log In
          {isLoading && <span className="loading loading-dots loading-xs"></span>}
        </button>
      </form>

      {/* <AuthWithGoogle /> */}
    </main>
  );
};

export default Login;
