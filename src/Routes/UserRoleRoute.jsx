import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { AuthContext } from '../Providers/AuthProvider';

const UserRoleRoute = () => {
    const {user}= useContext(AuthContext)
    const [currentUser, setCurrentUser]= useState([])
    const [axiosURL] = useAxios()
    useEffect(() => {
        const fetchUser = async () => {
            if (user?.email) {
              const response = await axiosURL.get(`users/${user.email}`);
              setCurrentUser(response.data);
            }
          };
      
          fetchUser();
    }, [user?.email])
    
    console.log(currentUser)
    return [currentUser]
};

export default UserRoleRoute;