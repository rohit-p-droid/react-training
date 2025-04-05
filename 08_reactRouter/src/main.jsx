import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AboutUs, ContactUs, Home, Layout, Params, GithubProfile } from './components/index.js'
import { getGithubProfile } from './components/GithubProfile/GithubProfile.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>,
//       },
//       {
//         path: 'contact-us',
//         element: <ContactUs/>
//       },
//       {
//         path: 'about-us',
//         element: <AboutUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='contact-us' element={<ContactUs/>} />
      <Route path='about-us' element={<AboutUs/>} />
      <Route path='param/:username' element={<Params/>} />
      <Route
        loader={getGithubProfile}
       path='github-profile' 
       element={<GithubProfile/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
