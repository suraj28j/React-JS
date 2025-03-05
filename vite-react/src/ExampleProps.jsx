import React from 'react'

const ExampleProps = (props) => {
    // console.log(props);
    
    return (
        <>
            <p>{props.msg}</p>
            <ul>
                <li>User : {props.userInfo.name}</li>
                <li>Age : {props.userInfo.age}</li>
                <li>City : {props.userInfo.city}</li>
            </ul>
        </>
    )
}

export default ExampleProps
