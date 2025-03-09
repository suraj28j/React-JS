import React from 'react'
import './style/style.css';
import styleModule from './style/style.module.css';

const ApplyCSS = () => {
    // [ Internal CSS ] //
    const styleObject = {
        container: {
            width: '400px',
            height: '120px',
            border: '1px solid',
            padding: '8px'
        },
        heading: {
            backgroundColor: 'brown',
            textAlign: 'center',
        },
        para: {
            textDecoration: 'underline'
        }
    }
    return (
        <>
        {/* Inline CSS */}
            <h2 style={{ backgroundColor: 'red', textAlign: 'center' }}>Inline CSS </h2>

        {/* Internal CSS */}
            <div style={styleObject.container}>
                <h2 style={styleObject.heading}>Internal CSS</h2>
                <p style={styleObject.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eum.</p>
            </div>

        {/* Exernal CSS  */}
            <div className='container_box'>
                <h2 className='heading'>External CSS</h2>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni.</p>
            </div>

            {/* Module CSS */}
            <div className={styleModule.container}>
                <h2 className={styleModule.heading}>Module CSS</h2>
                <p>Module CSS generate random token for each and every class</p>
            </div>
        </>
    )
}

export default ApplyCSS
