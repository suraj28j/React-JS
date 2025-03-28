import React, { useState } from 'react'
import "./task1.css"
const Task1 = () => {


    const [city, setCity] = useState([])

    const contries = [
        {
            name: "India", value: "IN", cities: [
                "Delhi",
                "Mumbai"
            ]
        },
        {
            name: "Pakistan", value: "PK", cities: [
                "Lahore",
                "Karchi"
            ]
        },
        {
            name: "Bangladesh", value: "BG", cities: [
                "Dhaka",
                "Chittagong"
            ]
        }
    ]

    const hanldeClik = (e) => {
        // console.log(e.target.value);
        setCity(contries[e.target.value].cities)
    }
    return (
        <div className='_container'>

            <div className='countries'>
                <h5>Country</h5>
                <select onChange={hanldeClik}>
                    <option value="" hidden>Select</option>
                    {
                        contries.map((contry, index) => (
                            <option key={contry.value} value={index}>{contry.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className='cities'>
                <h5>City</h5>
                <select>
                    {
                        city.map((city, ind) => (
                            <option key={ind}>{city}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Task1
