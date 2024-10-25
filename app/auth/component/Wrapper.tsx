import Link from "next/link"
import { ArrowCircleLeft2 } from "iconsax-react"



const Wrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className='flex relative flex-col w-[55%] scrollbar overflow-y-scroll gap-5 items-center py-5 max-lg:w-full max-sm:pt-12'>
      <Link href="/" className="flex gap-1 items-center text-[#55524F] absolute left-5 top-5 text-[12px] hover:text-[#543EE0] max-sm:top-4">
      <ArrowCircleLeft2 size="20"/>
      <p className="hidden sm:flex">Back</p>
      </Link>

      {children}
    </section>
  )
}

export default Wrapper