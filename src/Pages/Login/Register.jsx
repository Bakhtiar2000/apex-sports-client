import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlePasswordToggle = () => {
        setShow(!show)
    }

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-semibold">Create account in <span className='changing-text'>Apex sports</span></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-slate-200">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name*</span>
                                </label>
                                <input className="input input-bordered" type='text' {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>


                            {/* Photo URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL*</span>
                                </label>
                                <input className="input input-bordered" type='text' {...register("photo", { required: true })} />
                                {errors.photo && <span className='text-red-500'>Photo URL is required</span>}
                            </div>


                            {/* Gender */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your gender</span>
                                </label>
                                <select className='select select-bordered' defaultValue={"Gender"}  {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>


                            {/* Number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone Number</span>
                                </label>
                                <input className="input input-bordered" type='number' {...register("phone", { required: true })} />
                            </div>


                            {/* Address */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input className="input input-bordered" type='text' {...register("address", { required: true })} />
                            </div>


                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email*</span>
                                </label>
                                <input className="input input-bordered" type='email' {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>


                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Password*</span>
                                </label>
                                <input className="relative input input-bordered" type={show ? 'text' : 'password'} {...register("password", { required: true })} />
                                <FaEye onClick={handlePasswordToggle} className='absolute bottom-[244px] right-12 text-slate-500 hover:text-slate-700' />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                            </div>



                            {/* Confirm Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password*</span>
                                </label>
                                <input className="input input-bordered" type='password' {...register("confirm", { required: true })} />
                                {errors.confirm && <span className='text-red-500'>Confirming password is required</span>}
                            </div>


                            {/* Submit */}
                            <input className="btn btn-primary form-control mt-6" type="submit" value="Sign up" />
                        </form >
                    </div>
                    

                    <p className="text-center my-2 "><small>Already have an account? <Link className="btn-link" to='/login'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

