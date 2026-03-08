'use client'

import { pixelifySans } from '../utils/utils'
import { useRouter } from 'next/navigation'

type BtnProps = {
  text: string
  link: string
}

const links = {
  home: '#',
  buy: '#',
  webtool: '/webtool',
  blog: '/blog',
  aboutus: '/about-us',
}

function Btn({ text, link }: BtnProps) {
  const r = useRouter()
  return (
    <button
      className={`
        group relative px-2 py-1
        ${pixelifySans.className} text-3xl text-[#1d4226c8]
        transition-all duration-300 ease-out
        hover:text-[#1d4226] hover:-translate-y-1 active:translate-y-0 active:scale-95
        cursor-pointer
      `}
      onClick={() => {
        r.push(link)
      }}
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
        <h1
          className={`text-center text-8xl text-[#1d4226] ${pixelifySans.className}`}
        >
          ECOBUG
        </h1>
      </div>
      <div className='flex flex-wrap justify-center  gap-16 lg:gap-40 gap-y-6 sm:gap-y-3 md:gap-y-3 lg:gap-y-3 mt-6 md:mt-10'>
        <Btn text='HOME' link={links.home} />
        <Btn text='BUY' link={links.buy} />
        <Btn text='WEBTOOL' link={links.webtool} />
        <Btn text='BLOG' link={links.blog} />
        <Btn text='ABOUT US' link={links.aboutus} />
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
