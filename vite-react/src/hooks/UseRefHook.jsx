import React, { useRef } from 'react'
import arrows from '../assets/images/arrows.png'
const UseRefHook = () => {
    const logo = useRef(null)
    const text = useRef(null)

    console.log(logo)

    const changlImg = () => {
        logo.current.style.transform = 'rotate(45deg)'
    }
    const textHandle = () => {
        text.current.innerText = 'Learning React useRef Hooks'
        text.current.focus();
    }
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <h3>Example 1</h3>
                    <img src={arrows} alt='arrows' onClick={changlImg} ref={logo} />
                </div>
                <div className='col-md-6'>
                    <h3>Example 2</h3>
                    <button className='btn btn-warning' onClick={textHandle}>Action</button>
                    <textarea ref={text} className='m-4' />
                </div>
            </div>
        </div>
    )
}

export default UseRefHook
