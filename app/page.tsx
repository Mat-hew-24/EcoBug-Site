import Login from '@/components/forms/Login'
import Signup from '@/components/forms/SignUp'
import Navbar from '@/components/shared/Navbar'

export default function Home() {
  return (
    <>
      <div className='bg-white'>
        <Navbar />
        <Login />
        <Login />
        <Login />
        <Login />
      </div>
    </>
  )
}
