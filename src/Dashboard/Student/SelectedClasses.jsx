import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';

const SelectedClasses = () => {
    const [axiosURL] = useAxios()
    const [selectedClasses, setSelectedClasses] = useState([])

    useEffect(() => {
        axiosURL.get('classes')
            .then(data => setSelectedClasses(data.data))
    }, [])

    const handleDelete= id=>{
        console.log(id)
        //TODO: fetch url from useAxios
    }

    return (
        <div className='w-full px-8'>
            <h2 className='text-4xl font-serif text-center my-10 text-violet-800'>My selected classes</h2>
            <div className="overflow-x-auto">
                <table className="table text-center">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class name</th>
                            <th>Instructor</th>
                            <th>Enroll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((selectedClass, index) => <tr key={selectedClass._id} className="hover">
                                <td>{index + 1}</td>
                                <td>{selectedClass.name}</td>
                                <td>{selectedClass.instructor}</td>
                                <td><Link to='/dashboard/payment'><button className="btn btn-sm btn-ghost bg-green-600 text-white">PAY</button></Link></td>
                                <td><button className="btn btn-sm btn-ghost bg-red-500 text-white" onClick={() => handleDelete(selectedClass._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;