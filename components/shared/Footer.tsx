import { pixelifySans } from '../utils/utils'

export default function Footer() {
  return (
    <footer className='bg-[#1c642a] text-white m-0 p-10 md:p-20 flex flex-col min-h-[50vh]'>
      <div
        className={`${pixelifySans.className} text-2xl text-white mb-16 ml-0 sm:ml-10 md:ml-20 lg:ml-24`}
      >
        socials
      </div>
      <div
        className={`${pixelifySans.className} flex flex-wrap md:flex-nowrap justify-between w-full max-w-7xl mx-auto gap-12 md:gap-4`}
      >
        <div className='flex flex-col gap-6 w-full sm:w-[45%] md:w-auto items-start'>
          <h3 className='text-2xl uppercase tracking-widest mb-4'>INSTAGRAM</h3>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            -------
          </p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            -------
          </p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            -------
          </p>
        </div>

        {/* FACEBOOK */}
        <div className='flex flex-col gap-6 w-full sm:w-[45%] md:w-auto items-start'>
          <h3 className='text-2xl uppercase tracking-widest mb-4'>FACEBOOK</h3>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            --------
          </p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            --------
          </p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            --------
          </p>
        </div>

        <div className='flex flex-col gap-6 w-full sm:w-[45%] md:w-auto items-start'>
          <h3 className='text-2xl uppercase tracking-widest mb-4'>LINKEDIN</h3>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            ---------
          </p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            ---------
          </p>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            ---------
          </p>
        </div>

        <div className='flex flex-col gap-6 w-full sm:w-[45%] md:w-auto items-start'>
          <h3 className='text-2xl lowercase tracking-widest mb-4'>email:</h3>
          <p className='cursor-pointer hover:text-gray-300 transition-colors'>
            --------
          </p>
        </div>
      </div>
    </footer>
  )
}
