'use client'

import { useState, useEffect } from 'react'
import { pixelifySans } from '../utils/utils'
import { useRouter } from 'next/navigation'

type BtnProps = {
  text: string
  link: string
}

const links = {
  home: '/',
  buy: '/',
  webtool: '/webtool',
  blog: '/blog',
  aboutus: '/about-us',
}

const navItems = [
  { text: 'HOME', link: links.home },
  { text: 'BUY', link: links.buy },
  { text: 'WEBTOOL', link: links.webtool },
  { text: 'BLOG', link: links.blog },
  { text: 'ABOUT US', link: links.aboutus },
]

function Btn({ text, link }: BtnProps) {
  const r = useRouter()

  return (
    <button
      className={`
        group relative px-2 py-1
        ${pixelifySans.className}
        text-md sm:text-2xl md:text-3xl text-[#1d4226c8]
        transition-all duration-300 ease-out
        hover:text-[#1d4226] hover:-translate-y-1
        active:translate-y-0 active:scale-95
        cursor-pointer
      `}
      onClick={() => r.push(link)}
    >
      {text}
      <span className='absolute left-0 -bottom-1 w-full h-1 bg-[#2f7335] rounded-full origin-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left' />
    </button>
  )
}

function SubSection() {
  const router = useRouter()

  const [scrollY, setScrollY] = useState(0)
  const [maxScroll, setMaxScroll] = useState(1)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateSize = () => {
      setMaxScroll(window.innerHeight)
      setWidth(window.innerWidth)
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    updateSize()
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  const archIntensity = Math.max(0, 1 - scrollY / (maxScroll * 0.45))
  return (
    <div>
      <div className='flex justify-between mx-6 md:mx-12'>
        <button
          onClick={() => {
            const x = Math.random()
            x > 0.5 ? router.push('/auth/login') : router.push('/auth/signup')
          }}
        >
          L
        </button>

        <h1
          className={`text-center text-5xl md:text-8xl text-[#1d4226] ${pixelifySans.className}`}
        >
          ECOBUG
        </h1>

        <button>J</button>
      </div>

      <div className='flex flex-wrap justify-center ml-0 md:ml-16 gap-4 sm:gap-8 lg:gap-40 gap-y-2 sm:gap-y-3 md:gap-y-3 lg:gap-y-3 mt-6 md:mt-10'>
        {navItems.map((item, index) => {
          const distanceFromCenter = index - (navItems.length - 1) / 2
          const baseOffset = distanceFromCenter ** 2 * 20
          const scale = Math.min(width / 1200, 1)
          const currentY = baseOffset * archIntensity * scale

          return (
            <div
              key={item.text}
              style={{
                transform: `translateY(${currentY}px)`,
                transition: 'transform 0.1s',
                willChange: 'transform',
              }}
            >
              <Btn text={item.text} link={item.link} />
            </div>
          )
        })}
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
