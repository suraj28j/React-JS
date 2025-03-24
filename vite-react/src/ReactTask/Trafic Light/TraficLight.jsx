import React, { useEffect, useState } from 'react'
import "./traficLight.css";

const TraficLight = () => {

    const [light, setLight] = useState('red')

    useEffect(() => {
        const interval = setInterval(() => {
            setLight((prev) => (prev == "red" ? 'green' : prev == 'green' ? 'yellow' : 'red'));
        }, 1500)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='trafic_container'>
            <div className='trafic_pole'>
                <div className={`light red ${light == 'red' ? 'active' : ''}`}></div>
                <div className={`light yellow ${light == 'yellow' ? 'active' : ''}`}></div>
                <div className={`light green ${light == 'green' ? 'active' : ''}`}></div>
            </div>
        </div>
    )
}

export default TraficLight
