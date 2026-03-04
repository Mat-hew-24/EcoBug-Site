import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2f7a3b] text-white font-mono">
      {/* HEADER */}
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

      {/* FEATURE SECTION */}
      <section className="flex justify-center mt-28 px-6">
        <div>
          <div className="flex flex-row items-start gap-10">
            {/* IMAGE */}
            <img
              src="/plant.png" // put image in public folder
              alt="Decorative plant"
              className="w-48 mx-auto md:mx-0"
            />

            {/* TEXT */}
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