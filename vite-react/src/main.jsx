import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// function MyApp() {
//   return (
//     <div>
//       <h2>Custom App</h2>
//     </div>
//   )
// }


// -----------------[Create Custom React]---------------- //
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

// const username = "Suraj";

// const ReactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "Click me to visit google ",
//   username
// )
// const AnotherReactElement = (
//   <a href="https://google.com" target="blank">Click me to visit google</a>
// )

// ------------------x-x-x----------------------- //

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* MyApp() // we can write this way
      <MyApp />
      AnotherReactElement
      ReactElement */}
    
      <App />
    </BrowserRouter>
  </StrictMode>
)
