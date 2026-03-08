export default function Page1() {
  return (
    <>
      <div className='min-h-screen bg-[#2f7a3b] text-white font-mono'>
        <section className='flex justify-center py-24 px-6'>
          <div>
            <div className='flex flex-row items-start gap-10'>
              <img
                src='/plant.png'
                alt='Decorative plant'
                className='w-48 mx-auto md:mx-0'
              />
              <div>
                <h2 className='text-2xl mb-6 tracking-widest'>
                  One Imp Feature
                </h2>

                <p className='text-sm leading-relaxed mb-4'>
                  Sometimes it’s just better not to be seen. That’s how Harry
                  had always lived his life. He prided himself as being the only
                  small and the face that blended into the crowd.
                </p>

                <p className='text-sm leading-relaxed'>
                  “Explain to me again why I shouldn’t cheat?” he asked. “All
                  the others do and nobody ever gets punished for doing so. I
                  should go about being happy losing to cheaters because I know
                  that I don’t? That’s what you’re telling me?”
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
