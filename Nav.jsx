import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className='flex justify-center gap-10 p-2'>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight:e.isActive ? "bold" : "",
                    }
                }} to='/'>home</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight:e.isActive ? "bold" : "",
                    }
                }} to='/user'>Users</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight:e.isActive ? "bold" : "",
                    }
                }} to='/about'>About</NavLink>
            </nav>
        </>
    )
}

export default Nav
