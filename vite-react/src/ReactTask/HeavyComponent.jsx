import React from 'react'
const HeavyComponent = () => {
    for(let i=0;i<1000000000;i++){

    }

  return (
    <div className='mt-4'>
        <h2>HeavyComponent</h2>
    </div>
  )
}

export default HeavyComponent
