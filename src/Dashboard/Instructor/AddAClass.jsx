import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddAClass = () => {
    const {user}= useContext(AuthContext)
    const handleAddAClass = event => {
        event.preventDefault()
        const form = event.target
        const class_name= form.class_name.value;
        const photo= form.photo.value;
        const instructor_name= form.Instructor_name.value;
        const email= form.email.value;
        const price= form.price.value;
        const seats= form.seats.value;

        const AddedClass={
            name: class_name,
            image: photo,
            instructor: instructor_name,
            instructor_email: email,
            price,
            no_of_students: 0,
            available_seats:seats
        }
        console.log(AddedClass)
    }
    return (
        <div className='w-full px-8'>
            <h2 className='text-4xl font-serif text-center mt-10 text-violet-800'>Add a class</h2>

            <form onSubmit={handleAddAClass}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Picture URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                    </div>

                    {/* Class Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name="class_name" placeholder="class name" className="input input-bordered" />
                    </div>

                    {/* Instructor Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name="instructor_name"
                            defaultValue={user?.displayName}
                            placeholder="Instructor name" className="input input-bordered" />
                    </div>

                    {/* Instructor Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" name="email"
                            defaultValue={user?.email}
                            placeholder="Instructor email" className="input input-bordered" />
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Class fee" className="input input-bordered" />
                    </div>

                    {/* Available seats */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="text" name="seats" placeholder="Available seats" className="input input-bordered" />
                    </div>

                </div>

                <div className="form-control mt-5">
                    <input className="btn bg-violet-500 hover:bg-violet-700 text-white border-0 btn-block" type="submit" value="Add this class" />

                </div>
            </form>
        </div>
    );
};

export default AddAClass;