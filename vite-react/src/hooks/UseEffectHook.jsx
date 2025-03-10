import React, { useEffect, useState } from 'react'
import { appId } from '../key';

const UseEffectHook = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData()
    }, [page])
    const getData = async () => {
        const data = await fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`, {
            method: "GET",
            headers: {
                "app-id": appId
            }
        })
        const res = await data.json()
        console.log(res.data);
        setUsers(res.data)
    }

    const pagleHandle = (num) => {
        setPage(num)
    }

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-2'></div>
                <div className='col-md-8 mb-4'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <img src={user.picture} alt={user.id} />
                                        </td>
                                        <td>{user.id}</td>
                                        <td>{user.title} {user.firstName} {user.lastName}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        [1, 2, 3, 4, 5].map((num) => (
                            <button className='btn btn-info ms-2' onClick={()=>pagleHandle(num)}>{num}</button>
                        ))
                    }
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default UseEffectHook
