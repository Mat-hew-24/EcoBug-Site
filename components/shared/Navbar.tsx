import { pixelifySans } from '../utils/utils'

type BtnProps = {
  text: string
}

function Btn({ text }: BtnProps) {
  return (
    <button
      className={`
        group relative px-2 py-1
        ${pixelifySans.className} text-3xl text-gray-700
        transition-all duration-300 ease-out
        hover:text-black hover:-translate-y-1 active:translate-y-0 active:scale-95
        cursor-pointer
      `}
    >
      {text}
      <span className='absolute left-0 -bottom-1 w-full h-1 bg-[#2f7335] rounded-full origin-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left' />
    </button>
  )
}

function SubSection() {
  return (
    <div>
      <div>
        <h1 className={`text-center text-6xl ${pixelifySans.className}`}>
          ECOBUG
        </h1>
      </div>
      <div className='flex flex-wrap justify-center  gap-16 lg:gap-40 gap-y-6 mt-6 md:mt-10'>
        <Btn text='HOME' />
        <Btn text='BUY' />
        <Btn text='WEBTOOL' />
        <Btn text='BLOG' />
        <Btn text='ABOUT US' />
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <div className='relative'>
      <nav className='text-black bg-white fixed top-0 left-0 right-0 z-10 p-4'>
        <SubSection />
      </nav>
    </div>
  )
}
