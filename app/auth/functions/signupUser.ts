import { myAuthValue } from "@/zustand/auth/authValues";

const signUpUser = (e: any) => {
  e.preventDefault();
  const email = myAuthValue().email;
  const password = myAuthValue().password;
  const setIsLoading = myAuthValue().setIsLoading;

  if (password !== "" && email !== "") {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  }

  //   signIn("credentials", {
  //     redirect: "/", // Set to false to handle response locally
  //     email,
  //     password,
  //   });
  return;
};
export default signUpUser;
