import React, { useEffect, useState } from 'react';

const EnrolledClasses = () => {
    const [enrolledClasses, setEnrolledClasses] = useState([])

    useEffect(() => {
        fetch('../../../public/classes.json')
            .then(res => res.json())
            .then(data => setEnrolledClasses(data))
    }, [])
    return (
        <div className='w-full px-8'>
            <h2 className='text-4xl font-serif text-center my-10 text-violet-800'>My enrolled classes</h2>
            <div className="overflow-x-auto">
                <table className="table text-center">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Class name</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id} className="hover">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enrolledClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{enrolledClass.name}</td>
                                <td>{enrolledClass.instructor}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;