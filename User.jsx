import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const User = () => {

  const { user, setUser } = useContext(UserContext)
  console.log(user)
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col  mb-4 '>
        {user.map((e, i) => {
          return (
            // <div key={i}>{e.name}</div>
            <Link className='mb-3 bg-zinc-400' to={`/user/${e.id}`} key={i}>{e.name}</Link>
          )
        })}

      </div>
      <button onClick={() => navigate(-1)} className='bg-red-300 rounded mt-3 px-3 py-1 mb-5'>Go Back</button>
      <Outlet />
    </>
  )
}

export default User
