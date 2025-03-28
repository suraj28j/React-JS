import React, { useContext, useState } from 'react'
import UserContext from '../context/UseContext'

const Profile = () => {

    const { user } = useContext(UserContext);

    if (!user) return <div>Please Login</div>

    return (
        <div>
            welcome {user.username}
        </div>
    )
}

export default Profile
