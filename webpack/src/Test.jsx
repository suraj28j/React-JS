import React from 'react'
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "./test.css"
import laptop from "../assets/laptop.jpg"

const Test = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Creating React App using Webpack and Babel</h2>
            <img src={laptop} alt='laptop' />
        </>
    )
}

if (module.hot) {
    module.hot.accept();
}

createRoot(document.getElementById("root")).render(
    <Test />
)


// ReactDOM.render(<Test />, document.getElementById("root"));

