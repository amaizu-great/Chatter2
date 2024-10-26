import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type themeValue = {
  theme: string;
  changeTheme: (value:string) => void;
};

//prettier-ignore
const Theme = create<themeValue>()( persist( (set) => ({
    theme: '',
    changeTheme: (value:string) => set({ theme:value }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default Theme;