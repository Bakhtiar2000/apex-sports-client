import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
    const [managedClasses, setManagedClasses] = useState([])
    const [selectedClassId, setSelectedClassId] = useState([])
    const [classStatus, setClassStatus] = useState('');

    let isApproved= false
    let isDenied= false

    useEffect(() => {
        fetch('../../../public/classes.json')
            .then(res => res.json())
            .then(data => setManagedClasses(data))
    }, [])

    const handleFeedback = id => {
        console.log(id)
        //TODO
    }

    const handleApprove = id => {
        console.log(id)
        //TODO
        setClassStatus('Approved')
         
    }

    const handleDeny = id => {
        console.log(id)
        //TODO
        setClassStatus('Denied')
         
    }
    return (
        <div className='w-full px-8'>
            <h2 className='text-4xl font-serif text-center my-10 text-violet-800'>Manage classes</h2>

            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Write Your feedback</h3>
                    <textarea className='w-full h-60 input input-bordered mt-2 mb-4' name="feedback" id="feedback"></textarea>
                    <button onClick={()=> handleFeedback(selectedClassId)} className='btn btn-primary'>Send feedback</button>
                </form>
            </dialog>

            <div className="overflow-x-auto">
                <table className="table text-center">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Class name</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managedClasses.map((managedClass, index) => <tr key={managedClass._id} className="hover">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={managedClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{managedClass.name}</td>
                                <td>{managedClass.instructor}</td>
                                <td>{managedClass.instructor_email}</td>
                                <td>{managedClass.available_seats}</td>
                                <td>{managedClass.price}</td>
                                {/* TODO: initially pending. make it this way ---> */}
                                <td>
                                    {
                                        classStatus ===''? 'Pending': classStatus// isApproved? 'Approved': isDenied? 'Denied' : 'Pending'
                                    }
                                </td>
                                <td>
                                    <div className="dropdown dropdown-left">
                                        <label tabIndex={0} className="btn m-1 btn-sm">Click</label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

                                            <li><button className="btn btn-ghost z-30" onClick={()=>{handleApprove(managedClass._id)}}>Approve</button></li>
                                            <li><button className="btn btn-ghost z-30" onClick={()=>{handleDeny(managedClass._id)}}>Deny</button></li>
                                            <li><button className="btn btn-ghost z-30"  onClick={() => {
                                                        setSelectedClassId(managedClass._id);
                                                        window.my_modal_3.showModal();
                                                    }}>Send Feedback</button></li>

                                        </ul>
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

export default ManageClasses;