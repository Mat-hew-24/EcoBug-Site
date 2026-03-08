import Login from '@/components/forms/Login'
import Signup from '@/components/forms/SignUp'
import Navbar from '@/components/shared/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2f7a3b] text-white font-mono">
      <header className="flex items-center justify-between px-10 py-6">
        <div className="text-xl cursor-pointer">☰</div>
        <h1 className="text-3xl tracking-[0.3em]">EXODUS</h1>
        <nav className="hidden md:flex gap-10 text-[#0b2d1a] font-bold">
          <a href="#" className="hover:text-white">HOME</a>
          <a href="#" className="hover:text-white">STORE</a>
          <a href="#" className="hover:text-white">WEBTOOL</a>
          <a href="#" className="hover:text-white">ABOUT US</a>
          <a href="#" className="hover:text-white">CONTACTS</a>
        </nav>
        <div className="text-xl cursor-pointer">👤</div>
      </header>
      <section className="flex justify-center mt-28 px-6">
        <div>
          <div className="flex flex-row items-start gap-10">
            <img
              src="/plant.png" 
              alt="Decorative plant"
              className="w-48 mx-auto md:mx-0"
            />
            <div>
              <h2 className="text-2xl mb-6 tracking-widest">
                One Imp Feature
              </h2>

              <p className="text-sm leading-relaxed mb-4">
                Sometimes it’s just better not to be seen. That’s how Harry had
                always lived his life. He prided himself as being the only small
                and the face that blended into the crowd.
              </p>

              <p className="text-sm leading-relaxed">
                “Explain to me again why I shouldn’t cheat?” he asked. “All the
                others do and nobody ever gets punished for doing so. I should
                go about being happy losing to cheaters because I know that I
                don’t? That’s what you’re telling me?”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
