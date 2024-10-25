import GoogleButton from "./GoogleButton";
import signUpUser from "../functions/signupUser";
import authValues from "@/zustand/auth/authValues";

type InputElementProps = {
  name: string;
  text: string;
  type: string;
  value: string;
  password?: string;
  minLength?: number; 
  placeholder: string;
  setFunction: (value: string) => void;
};

const InputElement: React.FC<InputElementProps> = ({ type, name, value, text, minLength, password, setFunction, placeholder, }) => {
  return (
    <label htmlFor={type} className="flex flex-col gap-1 w-full">
      <p className="text-[12px] font-medium">{text}</p>

      <input
        required
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setFunction(e.target.value)}
        {...(type === "password" && { minLength: minLength || 8 })}
        className="rounded-[8px] border p-[10px] text-[14px] w-full pl-4 outline-none border-[#CED4DA]"
      />
      {name === "confirmpassword" && value && value !== password && <p className='text-[11px] text-[#FF1400]'> Password Does not macth </p>}
    </label>
  );
};

const SignUp = () => {
  const {type, email, password, lastName, firstName, isLoading, confirmPassword, setType, setEmail, setPassword, setLastName, setFirstName, setConfirmPassword} = authValues()

  return (
    <main className="gap-3 pt-3 flex flex-col w-full max-w-[60%] items-center max-md:gap-5 max-md:max-w-[80%] max-sm:pt-1 max-sm:max-w-[90%]">
      <h1 className="font-medium text-center text-[25px] max-md:text-[22px] max-sm:text-[18px]">
        Register as a Writer/Reader
      </h1>

      <form onSubmit={(e) => signUpUser(e)} className="flex flex-col w-full gap-3" >

        <section className="flex w-full gap-3 justify-between max-md:flex-col">
          <InputElement type="text" name="firstname" value={firstName} text="First Name" setFunction={setFirstName} placeholder="John" />

          <InputElement type="text" name="lastname" value={lastName} text="Last Name" setFunction={setLastName} placeholder="Doe" />
        </section>

        <label className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">What Are you Joing As?</p>

          <select required  id="option" value={type}  name="option" onChange={(e)=> setType(e.target.value)} className="select focus:outline-none rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]" >
            <option value="">Select ?</option>
            <option value="Writer">Writer</option>
            <option value="Reader">Reader</option>
          </select>
        </label>

        <InputElement type="email" name="email" value={email} text="Email address" setFunction={setEmail} placeholder="JohnDoe@gmail.com" />

        <InputElement type="password" name="password" value={password} text="Password" setFunction={setPassword} placeholder="Password" />

        <InputElement type="password" name="confirmpassword" value={confirmPassword} text="Confirm Password" setFunction={setConfirmPassword} placeholder="Confirm Password" password={password}/>

        <button disabled={isLoading} className={`${isLoading ? "bg-[#4131af]" : "bg-[#543EE0]" } flex gap-1 items-end justify-center rounded-[8px] border-none p-[10px] text-[14px] text-white w-full max-sm:text-[12px]`}>
          Create Account
          {isLoading && <span className="loading loading-dots loading-xs"></span>}
        </button>
      </form>
      
      <GoogleButton />
    </main>
  );
};

export default SignUp;
