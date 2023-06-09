import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlePasswordToggle = () => {
        setShow(!show)
    }
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <dialog id="my_modal" className="modal">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box bg-base-300">
                <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <h2 className='text-2xl text-center font-semibold'>Login to your account</h2>


                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email*</span>
                    </label>
                    <input className="input input-bordered"  type='email' {...register("email", { required: true })} />
                    {errors.email && <span className='text-red-500'>Email is required</span>}
                </div>


                {/* Password */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Password*</span>
                    </label>
                    <input className='relative input input-bordered' type={show ? 'text' : 'password'} {...register("password", { required: true })} />
                    <FaEye onClick={handlePasswordToggle} className='absolute bottom-[148px] right-12 text-slate-500 hover:text-slate-700' />
                    {errors.password && <span className='text-red-500'>Password is required</span>}
                </div>


                {/* Submit */}
                <input className="btn btn-primary mt-5" type="submit" value="Sign up" />

                <p className="text-center my-2 "><small>Don't have an account? <Link className="btn-link" to='/register'>Register</Link></small></p>

            </form>
            <form method="dialog" className="modal-backdrop">
                <button></button>
            </form>
        </dialog>
    );
};

export default Login;