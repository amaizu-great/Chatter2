import NavBar from "./component/NavBar";
import Wrapper from "./component/Wrapper";
import Sidescreen from "./component/Sidescreen";


//prettier-ignore
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-screen w-full">
      <Sidescreen />
      <Wrapper>
       <NavBar />
       {children}
      </Wrapper>
    </main>
);
}
