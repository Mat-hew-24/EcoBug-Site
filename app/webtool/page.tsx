import { pixelifySans } from '@/components/utils/utils'
export default function WebTool() {
  return (
    <>
      <div className='min-h-screen bg-[#367b38]'>
        <div className='flex justify-center items center'>
          <h1
            className={`${pixelifySans.className} text-8xl mt-16 text-[#1d4226]`}
          >
            WEBTOOL
          </h1>
        </div>
        <div className='flex justify-center items-center'>
          <p className={`${pixelifySans.className} text-white text-6xl mt-80`}>
            web version coming soon!!!
          </p>
        </div>
      </div>
    </>
  )
}
