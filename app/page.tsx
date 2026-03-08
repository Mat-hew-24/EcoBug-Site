// import Login from '@/components/forms/Login'
// import Signup from '@/components/forms/SignUp'
import Navbar from '@/components/shared/Navbar'
import Feedbacks from '@/pageComponents/Feedbacks/page'
import Page1 from '@/pageComponents/Page1/page'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Feedbacks />
    </div>
  )
}
