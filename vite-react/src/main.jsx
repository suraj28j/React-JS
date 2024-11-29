import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>Custom App</h2>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const username = "Suraj";
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google ",
  username
)

const AnotherReactElement = (
  <a href="https://google.com" target="blank">Click me to visit google</a>
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>


  //  <App />  
  //  MyApp() 
  //  <MyApp /> 

  // ReactElement
  // AnotherReactElement
  ReactElement

  // </StrictMode>
)
