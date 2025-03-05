import ClassComponentExample from './classComponents/ClassComponentExample';
import StateExample from './classComponents/StateExample';
import ExampleListAndKey from './ExampleListAndKey';
import ExampleProps from './ExampleProps';
import FormValidation from './FormValidation';

import './style/style.css';
import styleModule from './style/style.module.css';


function App() {

  // const username = "Suraj";
  // [ {username} => evaluation expression mean final outcome ]

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

  // [ Props ]
  const userInfo = {
    name: "Suraj",
    age: 35,
    city: "Bangalore"
  }


  return (
    <>
      {/* <h2>React Vite {username}</h2> */}
      {/*{username} = JavaScript final outcome that evaluate  */}


      {/* ---------------- How to Apply CSS ---------------------- */}

      <h2 style={{ backgroundColor: 'red', textAlign: 'center' }}>Inline CSS </h2>

      <div style={styleObject.container}>
        <h2 style={styleObject.heading}>Internal CSS</h2>
        <p style={styleObject.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eum.</p>
      </div>

      <div className='conatiner'>
        <h2 className='heading'>External CSS</h2>
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni.</p>
      </div>

      <div className={styleModule.container}>
        <h2 className={styleModule.heading}>Module CSS</h2>
        <p>Module CSS generate random token for each and every class</p>
      </div>

      {/* ---------------------------x-x-x--------------------------- */}

      <ExampleProps msg="This is Example of Props" userInfo={userInfo} />
      <ExampleListAndKey />

      <ClassComponentExample course="React js" />
      <StateExample/>

      <FormValidation/>
    </>
  )
}

export default App

