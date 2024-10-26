import "./globals.css";
import Theme from "@/Theme/theme";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chatter",
  description: "Your Gen Z Social App",
};
//prettier-ignore
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" data-theme="">
      <body className={poppins.className} >
        <Theme />
        {children}
      </body>
    </html>
  );
}
