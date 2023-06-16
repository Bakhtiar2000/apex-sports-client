import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import UserRoleRoute from '../../Routes/UserRoleRoute';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    const [currentUser]= UserRoleRoute()
    const [axiosURL]= useAxios()
    const [instructorDisabled, setInstructorDisabled] = useState(false)
    const [adminDisabled, setAdminDisabled] = useState(false)

    if(currentUser.role=== 'admin')  setAdminDisabled(true)
    if(currentUser.role=== 'instructor')  setInstructorDisabled(true)

    useEffect(() => {
        axiosURL.get('users')
            .then(data => setUsers(data.data))
    }, [])

    const handleMakeInstructor = id => {
        console.log(id)
        setInstructorDisabled(true)
    }

    const handleMakeAdmin = id => {
        console.log(id)
        setInstructorDisabled(true)
        setAdminDisabled(true)
    }
    console.log(users)
    return (
        <div className='w-full px-8'>
            <h2 className='text-4xl font-serif text-center my-10 text-violet-800'>Manage Users</h2>

            <div className="overflow-x-auto">
                <table className="table text-center">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="hover">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className='flex justify-center gap-2'>
                                        <button className='btn btn-outline btn-primary btn-sm' disabled={instructorDisabled} onClick={() => handleMakeInstructor(user._id)}>Make Instructor</button>
                                        <button className='btn btn-outline btn-primary btn-sm' disabled={adminDisabled} onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;