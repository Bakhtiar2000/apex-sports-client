import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const Classes = () => {
    const user= useContext(AuthContext)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // console.log(classes)
    const handleSelectClass = id=>{
        console.log(id)
        user || <Navigate to='/login'></Navigate>
        
    }
    return (
        <div className='my-16'>
            <h2 className='text-4xl text-center mb-6  font-serif text-violet-800'>Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10'>
                {
                    classes.map(singleClass => <div
                        key={singleClass._id}
                        className="card w-96 bg-base-100 shadow-xl mx-auto"
                    >
                        <figure><img src={singleClass.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{singleClass.name}</h2>
                            <p>Instructor: {singleClass.instructor}</p>
                            <p>Available Seats: {singleClass.available_seats}</p>
                            <p>Price: {singleClass.price}$</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleSelectClass(singleClass._id)} className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;