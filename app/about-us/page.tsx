import { pixelifySans } from '@/components/utils/utils'

const description: string =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quod minus deleniti harum, sit facere fugiat ea non placeat praesentium magnam dolor explicabo a quisquam, exercitationem earum mollitia est illum.'

export default function About() {
  return (
    <>
      <div className='absolute inset-0 bg-black/50' />
      <div
        className='min-h-screen bg-no-repeat bg-cover '
        style={{
          backgroundImage: `url('/leaf.svg')`,
        }}
      >
        <div className='flex items-center justify-center'>
          <h1
            className={`${pixelifySans.className} text-6xl sm:text-8xl text-white mt-16 md:mt-8 z-5`}
          >
            ABOUT US
          </h1>
        </div>
        <div className='flex items-center justify-center backdrop-blur-2xl border border-white rounded-3xl p-8 m-10 md:m-14 lg:m-20'>
          <p
            className={`${pixelifySans.className} text-2xl text-white text-justify`}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
