import { pixelifySans } from '../utils/utils'

function SubSection() {
  return (
    <div>
      <div>
        <h1
          className={`text-center text-4xl md:text-6xl ${pixelifySans.className}`}
        >
          ECOBUG
        </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-40 mt-6 md:mt-10'>
        <button
          className={`${pixelifySans.className} text-xl md:text-3xl cursor-pointer`}
        >
          HOME
        </button>
        <button
          className={`text-xl md:text-3xl ${pixelifySans.className} cursor-pointer`}
        >
          BUY
        </button>
        <button
          className={`text-xl md:text-3xl ${pixelifySans.className} cursor-pointer`}
        >
          WEBTOOL
        </button>
        <button
          className={`text-xl md:text-3xl ${pixelifySans.className} cursor-pointer`}
        >
          BLOG
        </button>
        <button
          className={`text-xl md:text-3xl ${pixelifySans.className} cursor-pointer`}
        >
          ABOUT US
        </button>
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
