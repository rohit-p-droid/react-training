import './App.css'
import { useDispatch } from "react-redux"
import authSevice from "../appwrite/auth"
import { useEffect, useState, Outlet } from 'react'
import { login, logout } from './reducer/authSlice';
import { Header, Footer } from "./components"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authSevice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <h1>Blog App</h1>
            {/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
        loading..
      </div>
    </>);
}

export default App
