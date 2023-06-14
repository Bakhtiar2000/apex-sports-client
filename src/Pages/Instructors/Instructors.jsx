import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);
    return (
        <div className='my-16'>
            <h2 className='text-3xl text-center mb-6 font-serif text-violet-800'>Instructors</h2>

            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>No. of classes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((instructor, index) => <tr key={instructor._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold'>{instructor.name}</td>
                                <td>{instructor.email}</td>
                                <td>{instructor.classesTaken}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;