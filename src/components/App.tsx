import Avatar from 'components/Avatar'
import AuthForm from './AuthForm'
import HomeScreen from './HomeScreen'
import Navbar from './Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
  // return (
  //   <>

  //     <Navbar />
  //     <div className='flex items-center justify-center' >
  //       <HomeScreen></HomeScreen>
  //       <Link t></Link>
  //     </div>
  //   </>

  // )
  return (
    <RouterProvider router={router} />
  )
}

export default App
