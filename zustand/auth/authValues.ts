import { create } from "zustand";

type AuthValues = {
  type: string;
  email: string;
  AuthPath: any;
  password: string;
  lastName: string;
  firstName: string;
  isLoading: boolean;
  confirmPassword: string;
  setType: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setLastName: (value: string) => void;
  setFirstName: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  setConfirmPassword: (value: string) => void;
  setAuthPath: (value: React.ReactNode) => void;
};

// prettier-ignore
const authValues = create<AuthValues>((set) => ({
    type: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    AuthPath: null,
    isLoading: false,
    confirmPassword: "",
    setType: (value:string) =>set({type: value}),
    setEmail: (value:string) =>set({email: value}),
    setPassword: (value:string) =>set({password: value}),
    setLastName: (value:string) =>set({lastName: value}),
    setFirstName: (value:string) =>set({firstName: value}),
    setIsLoading: (value:boolean) =>set({isLoading: value}),
    setAuthPath: (value: React.ReactNode) => set({ AuthPath: value }),
    setConfirmPassword: (value: string) => set({ confirmPassword: value }),
}));

export default authValues;
export const myAuthValue = authValues.getState;
