import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { AuthContext } from '../Providers/AuthProvider';

const UserRoleRoute = () => {
    const {user}= useContext(AuthContext)
    // console.log(user)
    const [currentUser, setCurrentUser]= useState([])
    const [axiosURL] = useAxios()
    useEffect(() => {
        if(user?.email){
            axiosURL.get(`users/${user.email}`)
            .then(data => setCurrentUser(data.data))
        }
    }, [user?.email])
    
    console.log(currentUser)
    return [currentUser]
};

export default UserRoleRoute;