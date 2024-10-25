import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import {   useNavigate, useParams } from 'react-router-dom'



const UserDetail = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext)
    console.log(user[id])
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h1 className='text-3xl'>
                    {user[id].name}
                </h1>
                <h1 className='text-2xl text-red-500'>
                    Age: {user[id].age}
                </h1>
                <button onClick={()=>navigate(-1)}  className='px-3 py-1 rounded bg-red-300 mt-4'>Go Back</button>
                
            </div>

        </>
    )
}

export default UserDetail
