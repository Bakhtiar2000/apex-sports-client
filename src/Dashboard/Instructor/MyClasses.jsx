import React, { useEffect, useState } from 'react';

const MyClasses = () => {
    const [addedClasses, setAddedClasses] = useState([]);

    // TODO: Fetch the data Right Url
    useEffect(() => {
        fetch('../../../public/instructors.json')
            .then(res => res.json())
            .then(data => setAddedClasses(data));
    }, []);

    // const handleUpdate = id => {
    //     //TODO: fetch url from useAxios

    // }
    console.log(addedClasses)

    return (
        <div>
            <h2 className='text-4xl font-serif text-center mt-10 text-violet-800'>My classes</h2>

            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class name</th>
                            <th>Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedClasses.map((addedClass, index) => <tr key={addedClass._id} className="hover">
                                <td>{index + 1}</td>
                                <td>{addedClass.name}</td>
                                <td>{addedClass.no_of_students}</td>
                                <td>{addedClass.feedback}</td> {/* Watch Out for the backend */}
                                <td>{addedClass.status}</td> {/* Watch Out for the backend */}
                                {/*onClick={() => handleUpdate(addedClass._id)}*/}
                                <td><button  className="btn btn-sm btn-ghost bg-violet-600 text-white">Update</button></td> Watch Out for the backend
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;