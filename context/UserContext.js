import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    useEffect(() => {

        if (localStorage.getItem("user")) {

            setUser(JSON.parse(localStorage.getItem("user"))) 
        } else {
            setUser({})
        }
        console.log('in the useEffect hook of the UserContext')
    }, [])

    const [user, setUser] = useState({});

    return (
    <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;