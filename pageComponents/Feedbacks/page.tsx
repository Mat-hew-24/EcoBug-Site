import { pixelifySans } from '@/components/utils/utils'
const style = (
  <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
)

export default function Feedbacks() {
  const feedbackItems = [1, 2, 3, 4, 5] // define the data
  return (
    <>
      {style}
      <div className='min-h-screen scale-90 md:scale-100 flex items-end'>
        <div className='max-w-4xl w-full mx-auto bg-white rounded-2xl border border-gray-200 shadow-[0px_2px_6px_#000] p-8 md:p-12 mb-5 overflow-hidden'>
          <div
            className={`text-[#204922] uppercase tracking-widest text-2xl mb-8 ${pixelifySans.className}`}
          >
            Feedbacks
          </div>
          <div className='flex flex-col gap-12'>
            <div className='overflow-hidden w-full relative'>
              <div className='flex gap-6 w-max animate-scroll'>
                {[...feedbackItems, ...feedbackItems].map((item, index) => (
                  <div
                    key={index}
                    className='bg-[#2f7335] shrink-0 w-[200px] h-[200px] rounded-3xl p-6 flex items-center cursor-pointer'
                  >
                    <p
                      className={`text-black text-lg leading-tight ${pixelifySans.className}`}
                    >
                      whatever
                      <br />
                      that person
                      <br />
                      has to say
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-[#2f7335] rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-5'>
              <p
                className={`text-black text-sm tracking-widest uppercase ${pixelifySans.className}`}
              >
                Are you ready?
              </p>
              <h2
                className={`text-black text-xl md:text-2xl tracking-widest uppercase ${pixelifySans.className}`}
              >
                Be a part of next best thing
              </h2>
              <button
                className={`mt-2 px-8 py-3 bg-[#111] text-white rounded-lg text-lg hover:bg-black transition-colors cursor-pointer ${pixelifySans.className}`}
              >
                View Our Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
