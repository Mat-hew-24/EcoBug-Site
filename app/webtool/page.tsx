import { pixelifySans } from '@/components/utils/utils'

export default function WebTool() {
  return (
    <>
      <div className='min-h-screen bg-[#367b38]'>
        <div className='flex justify-center items-center'>
          <h1
            className={`${pixelifySans.className} text-4xl sm:text-6xl md:text-8xl mt-10 sm:mt-16 text-[#1d4226]`}
          >
            WEBTOOL
          </h1>
        </div>
        <div className='flex justify-center items-center px-4'>
          <p
            className={`${pixelifySans.className} text-white text-2xl sm:text-4xl md:text-6xl mt-32 sm:mt-56 md:mt-80 text-center`}
          >
            web version coming soon!!!
          </p>
        </div>
      </div>
    </>
  )
}
