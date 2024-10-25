import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const Context = ({ children }) => {
    console.log(children)
    const [user, setUser] = useState([
        { id: 0, name: 'John Doe', age: 30 },
        { id: 1, name: 'Jane Doe', age: 28 },
        { id: 2, name: 'Alice Doe', age: 25 },
        { id: 3, name: 'Bob Doe', age: 32 }
    ])
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default Context
