import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const customElement = (
  <a href='https://www.example.com' target='_blank'> click here</a>
)

let username = "React Engineer"

const createCustomElemt = React.createElement(
  "a",
  {
    href: "https://www.example.com",
    target: "_blank"
  },
  "Click here ",
  username
)

createRoot(document.getElementById('root'))
.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // App()
  // customElement
  createCustomElemt
)
