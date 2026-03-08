import { pixelifySans } from '../utils/utils'

type BtnProps = {
  text: string
}

function Btn({ text }: BtnProps) {
  return (
    <button className={`${pixelifySans.className} text-3xl cursor-pointer`}>
      {text}
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
